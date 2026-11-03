import {
  sanitizeTextInput,
  containsSuspiciousInjection,
  isValidEmail,
  isValidPhone,
  openExternalUrlSafely,
} from '@/utils/security';

export interface WhatsAppEnquiryData {
  name: string;
  mobile: string;
  email: string;
  companyName?: string;
  serviceRequired: string;
  estimatedBudget?: string;
  projectRequirements: string;
  enquirySource: 'Contact Form' | 'Get Quote Form' | 'Get Estimate Form' | 'Service Enquiry Form' | string;
}

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export const OFFICIAL_WHATSAPP_NUMBER = '919990390519';

export const INPUT_LIMITS = {
  NAME_MAX: 100,
  MOBILE_MAX: 20,
  EMAIL_MAX: 254,
  COMPANY_MAX: 150,
  SERVICE_MAX: 150,
  BUDGET_MAX: 100,
  REQUIREMENTS_MIN: 5,
  REQUIREMENTS_MAX: 1000,
} as const;

export function validateEnquiryForm(data: WhatsAppEnquiryData): ValidationResult {
  const rawFields = [
    data.name,
    data.mobile,
    data.email,
    data.companyName || '',
    data.serviceRequired,
    data.estimatedBudget || '',
    data.projectRequirements,
  ];

  if (rawFields.some((field) => containsSuspiciousInjection(field))) {
    return {
      valid: false,
      error: 'Invalid characters detected. Please enter plain text without HTML or script tags.',
    };
  }

  const name = sanitizeTextInput(data.name, INPUT_LIMITS.NAME_MAX);
  const mobile = sanitizeTextInput(data.mobile, INPUT_LIMITS.MOBILE_MAX);
  const email = sanitizeTextInput(data.email, INPUT_LIMITS.EMAIL_MAX);
  const companyName = sanitizeTextInput(data.companyName || '', INPUT_LIMITS.COMPANY_MAX);
  const serviceRequired = sanitizeTextInput(data.serviceRequired, INPUT_LIMITS.SERVICE_MAX);
  const projectRequirements = sanitizeTextInput(
    data.projectRequirements,
    INPUT_LIMITS.REQUIREMENTS_MAX + 50
  );

  if (!name || name.length < 2) {
    return { valid: false, error: 'Please enter your full name (2–100 characters).' };
  }

  if (data.name.trim().length > INPUT_LIMITS.NAME_MAX) {
    return { valid: false, error: `Name cannot exceed ${INPUT_LIMITS.NAME_MAX} characters.` };
  }

  if (!mobile) {
    return { valid: false, error: 'Please enter your mobile / WhatsApp number.' };
  }

  if (!isValidPhone(mobile)) {
    return { valid: false, error: 'Please enter a valid 10 to 15 digit mobile number.' };
  }

  if (!email) {
    return { valid: false, error: 'Please enter your email address.' };
  }

  if (!isValidEmail(email)) {
    return { valid: false, error: 'Please enter a valid email address.' };
  }

  if (companyName.length > INPUT_LIMITS.COMPANY_MAX) {
    return { valid: false, error: `Company name cannot exceed ${INPUT_LIMITS.COMPANY_MAX} characters.` };
  }

  if (!serviceRequired) {
    return { valid: false, error: 'Please select or enter the service required.' };
  }

  if (!projectRequirements || projectRequirements.length < INPUT_LIMITS.REQUIREMENTS_MIN) {
    return { valid: false, error: 'Please enter a brief description of your project requirements.' };
  }

  if (data.projectRequirements.trim().length > INPUT_LIMITS.REQUIREMENTS_MAX) {
    return {
      valid: false,
      error: `Project requirements cannot exceed ${INPUT_LIMITS.REQUIREMENTS_MAX} characters.`,
    };
  }

  return { valid: true };
}

export function buildWhatsAppEnquiryMessage(data: WhatsAppEnquiryData): string {
  const safeName = sanitizeTextInput(data.name, INPUT_LIMITS.NAME_MAX);
  const safeMobile = sanitizeTextInput(data.mobile, INPUT_LIMITS.MOBILE_MAX);
  const safeEmail = sanitizeTextInput(data.email, INPUT_LIMITS.EMAIL_MAX);
  const safeCompany = sanitizeTextInput(data.companyName || '', INPUT_LIMITS.COMPANY_MAX);
  const safeService = sanitizeTextInput(data.serviceRequired, INPUT_LIMITS.SERVICE_MAX);
  const safeBudget = sanitizeTextInput(
    data.estimatedBudget || 'To be discussed',
    INPUT_LIMITS.BUDGET_MAX
  );
  const safeRequirements = sanitizeTextInput(
    data.projectRequirements,
    INPUT_LIMITS.REQUIREMENTS_MAX
  );
  const safeSource = sanitizeTextInput(data.enquirySource, 80);

  const lines: string[] = [
    '*NEW WEBSITE ENQUIRY*',
    '',
    'Company: AI Software Technology',
    `Name: ${safeName}`,
    `Mobile: ${safeMobile}`,
    `Email: ${safeEmail}`,
  ];

  if (safeCompany) {
    lines.push(`Client Organization: ${safeCompany}`);
  }

  lines.push(`Service Required: ${safeService}`);
  lines.push(`Estimated Budget: ${safeBudget}`);
  lines.push('Project Requirements:');
  lines.push(safeRequirements);
  lines.push(`Enquiry Source: ${safeSource}`);

  return lines.join('\n');
}

export function getWhatsAppEnquiryUrl(data: WhatsAppEnquiryData): string {
  const message = buildWhatsAppEnquiryMessage(data);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encoded}`;
}

export function openWhatsAppEnquiry(data: WhatsAppEnquiryData): string {
  const url = getWhatsAppEnquiryUrl(data);
  openExternalUrlSafely(url);
  return url;
}
