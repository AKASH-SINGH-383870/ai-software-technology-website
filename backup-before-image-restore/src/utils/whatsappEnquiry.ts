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

export function validateEnquiryForm(data: WhatsAppEnquiryData): ValidationResult {
  const name = data.name.trim();
  const mobile = data.mobile.trim();
  const email = data.email.trim();
  const serviceRequired = data.serviceRequired.trim();
  const projectRequirements = data.projectRequirements.trim();

  if (!name) {
    return { valid: false, error: 'Please enter your full name.' };
  }

  if (!mobile) {
    return { valid: false, error: 'Please enter your mobile / WhatsApp number.' };
  }

  const digitsOnly = mobile.replace(/\D/g, '');
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    return { valid: false, error: 'Please enter a valid 10-digit mobile number.' };
  }

  if (!email) {
    return { valid: false, error: 'Please enter your email address.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Please enter a valid email address.' };
  }

  if (!serviceRequired) {
    return { valid: false, error: 'Please select or enter the service required.' };
  }

  if (!projectRequirements || projectRequirements.length < 5) {
    return { valid: false, error: 'Please enter a brief description of your project requirements.' };
  }

  return { valid: true };
}

export function buildWhatsAppEnquiryMessage(data: WhatsAppEnquiryData): string {
  const lines: string[] = [
    '*NEW WEBSITE ENQUIRY*',
    '',
    'Company: AI Software Technology',
    `Name: ${data.name.trim()}`,
    `Mobile: ${data.mobile.trim()}`,
    `Email: ${data.email.trim()}`,
  ];

  if (data.companyName && data.companyName.trim()) {
    lines.push(`Client Organization: ${data.companyName.trim()}`);
  }

  lines.push(`Service Required: ${data.serviceRequired.trim()}`);
  lines.push(`Estimated Budget: ${(data.estimatedBudget || 'To be discussed').trim()}`);
  lines.push('Project Requirements:');
  lines.push(data.projectRequirements.trim());
  lines.push(`Enquiry Source: ${data.enquirySource.trim()}`);

  return lines.join('\n');
}

export function getWhatsAppEnquiryUrl(data: WhatsAppEnquiryData): string {
  const message = buildWhatsAppEnquiryMessage(data);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encoded}`;
}

export function openWhatsAppEnquiry(data: WhatsAppEnquiryData): string {
  const url = getWhatsAppEnquiryUrl(data);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  return url;
}
