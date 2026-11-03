/**
 * Enterprise Security Utilities for AI Software Technology
 * Provides input sanitization, strict format validation, safe external URL verification,
 * and client-side submission rate-limiting (complementing Nginx & Cloudflare edge controls).
 */

function stripControlChars(str: string): string {
  let out = '';
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code === 9 || code === 10 || code === 13 || (code >= 32 && code !== 127)) {
      out += str[i];
    }
  }
  return out;
}

const SUSPICIOUS_INJECTION_PATTERNS: RegExp[] = [
  /<\s*script\b/i,
  /javascript\s*:/i,
  /vbscript\s*:/i,
  /data\s*:\s*text\/html/i,
  /\bon(?:error|load|click|mouseover|focus|blur|submit|animationstart)\s*=/i,
  /<\s*(?:iframe|object|embed|svg|math|meta|link|base)\b/i,
];

const STRICT_EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
const STRICT_PHONE_CHARS_REGEX = /^[+\d\s()-]{10,20}$/;

const submissionTimestamps = new Map<string, number>();

/**
 * Strips ASCII control characters, normalizes line endings, trims, and enforces max length.
 */
export function sanitizeTextInput(input: string, maxLength = 500): string {
  if (typeof input !== 'string') return '';
  const cleaned = stripControlChars(input.replace(/\r\n/g, '\n').replace(/\r/g, '\n')).trim();
  return cleaned.slice(0, Math.max(0, maxLength));
}

/**
 * Detects obvious HTML, script, event-handler, or executable URI injection attempts.
 */
export function containsSuspiciousInjection(input: string): boolean {
  if (typeof input !== 'string' || !input) return false;
  return SUSPICIOUS_INJECTION_PATTERNS.some((pattern) => pattern.test(input));
}

/**
 * Validates email format, length (RFC 5321 <= 254 chars), and rejects unsafe characters.
 */
export function isValidEmail(email: string): boolean {
  if (typeof email !== 'string') return false;
  const trimmed = email.trim();
  if (!trimmed || trimmed.length > 254) return false;
  if (containsSuspiciousInjection(trimmed)) return false;
  return STRICT_EMAIL_REGEX.test(trimmed);
}

/**
 * Validates phone/WhatsApp number format (allowed characters + 10 to 15 digits).
 */
export function isValidPhone(phone: string): boolean {
  if (typeof phone !== 'string') return false;
  const trimmed = phone.trim();
  if (!STRICT_PHONE_CHARS_REGEX.test(trimmed)) return false;
  const digitsOnly = trimmed.replace(/\D/g, '');
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

/**
 * Validates dynamic URLs used in href/src attributes.
 * Only permits https:, http:, mailto:, tel:, or internal relative paths starting with a single '/'.
 */
export function sanitizeExternalUrl(url: string, fallback = '#'): string {
  if (typeof url !== 'string') return fallback;
  const trimmed = stripControlChars(url).trim();
  if (!trimmed) return fallback;

  // Allow safe internal relative paths (single leading slash, no protocol-relative //)
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
    return trimmed;
  }

  // Allow safe hash anchors
  if (trimmed.startsWith('#') && /^#[a-zA-Z0-9_-]+$/.test(trimmed)) {
    return trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    const allowedProtocols = ['https:', 'http:', 'mailto:', 'tel:'];
    if (allowedProtocols.includes(parsed.protocol.toLowerCase())) {
      return parsed.toString();
    }
  } catch {
    return fallback;
  }

  return fallback;
}

/**
 * Opens an external URL in a new tab using a temporary anchor with rel="noopener noreferrer"
 * so window.opener is never exposed.
 */
export function openExternalUrlSafely(url: string): void {
  const safeUrl = sanitizeExternalUrl(url, '');
  if (!safeUrl || safeUrl === '#') return;
  const anchor = document.createElement('a');
  anchor.href = safeUrl;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

/**
 * Client-side rate limiter to prevent rapid automated form/WhatsApp spam clicks within a browser session.
 * Note: Authoritative rate limiting is enforced server-side at Cloudflare Edge and Nginx.
 */
export function checkFormRateLimit(
  formKey: string,
  cooldownMs = 8000
): { allowed: boolean; retryAfterSec: number } {
  const now = Date.now();
  const lastSubmitted = submissionTimestamps.get(formKey) || 0;
  const elapsed = now - lastSubmitted;

  if (elapsed < cooldownMs) {
    const retryAfterSec = Math.max(1, Math.ceil((cooldownMs - elapsed) / 1000));
    return { allowed: false, retryAfterSec };
  }

  submissionTimestamps.set(formKey, now);
  return { allowed: true, retryAfterSec: 0 };
}
