const API_BASE = import.meta.env.VITE_API_URL || '/api';

export async function adminLogin(password: string): Promise<{ token: string } | { error: string }> {
  const res = await fetch(`${API_BASE}/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) return { error: data.error || 'Login failed' };
  if (!data.token) return { error: 'Invalid response' };
  return { token: data.token };
}

export interface StoredEnquiry {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  email: string;
  postcode: string;
  lessonType: string;
  message: string;
}

export async function fetchAdminEnquiries(token: string): Promise<StoredEnquiry[]> {
  const res = await fetch(`${API_BASE}/admin/enquiries`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to load enquiries');
  const data = await res.json();
  return data.enquiries || [];
}

export async function fetchAdminStats(token: string): Promise<{ totalEnquiries: number; last7Days: number }> {
  const res = await fetch(`${API_BASE}/admin/stats`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to load stats');
  return res.json();
}
