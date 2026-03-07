/**
 * Enquiry form service — ready to connect to Node.js/Express API.
 * Replace API_BASE with your backend URL when deployed.
 */

const API_BASE = import.meta.env.VITE_API_URL || '/api';

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

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResponse> {
  const res = await fetch(`${API_BASE}/enquiries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    return {
      success: false,
      message: data.message || 'Something went wrong. Please try again or contact us by phone.',
    };
  }

  return {
    success: true,
    message: data.message || 'Thank you! We\'ll be in touch soon.',
    id: data.id,
  };
}
