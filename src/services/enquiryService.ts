/**
 * Enquiry form:
 * - Dev: POST /api/enquiries (Vite proxy → Express on :3001) unless VITE_API_URL overrides.
 * - Production: only POST to your API if VITE_API_URL is set; otherwise skips fetch (no 404 on static hosts)
 *   and uses FormSubmit fallback so enquiries still send by email.
 */

import { CONTACT_EMAIL } from '../constants/site';

/** Set to "false" to skip FormSubmit fallback (e.g. strict privacy). */
const FORMSUBMIT_FALLBACK_ENABLED = import.meta.env.VITE_FORMSUBMIT_FALLBACK !== 'false';

/**
 * Full URL for POST …/enquiries, or null when no backend should be called (static production).
 */
function enquiriesPostUrl(): string | null {
  const configured = import.meta.env.VITE_API_URL?.trim();
  if (configured) {
    return `${configured.replace(/\/$/, '')}/enquiries`;
  }
  if (import.meta.env.DEV) {
    return '/api/enquiries';
  }
  return null;
}

export interface EnquiryPayload {
  fullName: string;
  phone: string;
  email: string;
  postcode: string;
  lessonType: string;
  message: string;
}

export interface EnquiryResponse {
  success: boolean;
  message?: string;
  id?: string;
}

async function postToApi(payload: EnquiryPayload): Promise<EnquiryResponse | null> {
  const url = enquiriesPostUrl();
  if (!url) {
    return null;
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
      id?: string;
    };

    if (!res.ok) return null;

    if (data.success === false) {
      return {
        success: false,
        message: data.message || 'Something went wrong. Please try again or contact us by phone.',
      };
    }

    return {
      success: true,
      message: data.message || "Thank you! We'll be in touch soon.",
      id: data.id,
    };
  } catch {
    return null;
  }
}

async function postToFormSubmit(payload: EnquiryPayload): Promise<EnquiryResponse | null> {
  if (!FORMSUBMIT_FALLBACK_ENABLED) return null;

  try {
    const fd = new FormData();
    fd.append('name', payload.fullName);
    fd.append('phone', payload.phone);
    fd.append('email', payload.email);
    fd.append('postcode', payload.postcode);
    fd.append('lesson_type', payload.lessonType);
    fd.append('message', payload.message || '');
    fd.append('_subject', `Driving lesson enquiry — ${payload.fullName}`);
    fd.append('_captcha', 'false');

    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`, {
      method: 'POST',
      body: fd,
      headers: { Accept: 'application/json' },
    });

    const data = (await res.json().catch(() => ({}))) as { success?: string; message?: string };

    if (res.ok && data.success === 'true') {
      return {
        success: true,
        message: "Thank you! We'll be in touch soon.",
      };
    }
  } catch {
    /* ignore */
  }

  return null;
}

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResponse> {
  const apiResult = await postToApi(payload);

  if (apiResult?.success) {
    return apiResult;
  }

  const formSubmitResult = await postToFormSubmit(payload);
  if (formSubmitResult?.success) {
    return formSubmitResult;
  }

  if (apiResult && !apiResult.success) {
    return apiResult;
  }

  return {
    success: false,
    message:
      'We could not reach the booking server. Use email or WhatsApp below, or call us — we still want your enquiry.',
  };
}
