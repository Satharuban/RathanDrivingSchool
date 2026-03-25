import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, RefreshCw, Mail, Phone, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { fetchAdminEnquiries, fetchAdminStats, type StoredEnquiry } from '../../services/adminService';

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString('en-GB', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  } catch {
    return iso;
  }
}

export function AdminDashboardPage() {
  const { token, logout } = useAdminAuth();
  const [enquiries, setEnquiries] = useState<StoredEnquiry[]>([]);
  const [stats, setStats] = useState<{ totalEnquiries: number; last7Days: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    if (!token) return;
    setError('');
    setLoading(true);
    try {
      const [list, s] = await Promise.all([
        fetchAdminEnquiries(token),
        fetchAdminStats(token),
      ]);
      setEnquiries(list);
      setStats(s);
    } catch {
      setError('Could not load data. Your session may have expired — sign in again.');
      logout();
    } finally {
      setLoading(false);
    }
  }, [token, logout]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className="min-h-screen bg-neutral-100">
      <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div>
            <h1 className="font-display text-xl font-bold text-black">Admin</h1>
            <p className="text-sm text-neutral-500">Contact enquiries</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => load()}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-2 rounded-lg bg-black px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {stats && (
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-neutral-500">Total enquiries</p>
              <p className="mt-1 font-display text-3xl font-bold text-black">{stats.totalEnquiries}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-neutral-500">Last 7 days</p>
              <p className="mt-1 font-display text-3xl font-bold text-brand-red">{stats.last7Days}</p>
            </motion.div>
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {error}
          </div>
        )}

        <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-neutral-100 px-6 py-4">
            <h2 className="font-display text-lg font-semibold text-black">All enquiries</h2>
            <p className="text-sm text-neutral-500">Submissions from the website contact form</p>
          </div>

          {loading && enquiries.length === 0 ? (
            <div className="px-6 py-16 text-center text-neutral-500">Loading…</div>
          ) : enquiries.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <MessageSquare className="mx-auto h-12 w-12 text-neutral-300" />
              <p className="mt-4 font-medium text-neutral-700">No enquiries yet</p>
              <p className="mt-1 text-sm text-neutral-500">
                When visitors submit the contact form, they will appear here.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-neutral-100">
              {enquiries.map((e, i) => (
                <motion.article
                  key={e.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: Math.min(i * 0.03, 0.3) }}
                  className="px-6 py-5 hover:bg-neutral-50/80"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="font-display text-lg font-semibold text-black">{e.fullName}</p>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-neutral-500">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(e.createdAt)}
                      </p>
                    </div>
                    {e.lessonType && (
                      <span className="rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold text-brand-red">
                        {e.lessonType}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-neutral-600">
                    <a
                      href={`mailto:${e.email}`}
                      className="inline-flex items-center gap-1.5 hover:text-brand-red focus:outline-none focus-visible:underline"
                    >
                      <Mail className="h-4 w-4 shrink-0" />
                      {e.email}
                    </a>
                    <a
                      href={`tel:${e.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-1.5 hover:text-brand-red focus:outline-none focus-visible:underline"
                    >
                      <Phone className="h-4 w-4 shrink-0" />
                      {e.phone}
                    </a>
                    {e.postcode && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 shrink-0" />
                        {e.postcode}
                      </span>
                    )}
                  </div>
                  {e.message && (
                    <p className="mt-3 rounded-lg bg-neutral-50 p-3 text-sm text-neutral-700 whitespace-pre-wrap">
                      {e.message}
                    </p>
                  )}
                </motion.article>
              ))}
            </div>
          )}
        </div>

        <p className="mt-8 text-center text-sm text-neutral-500">
          <Link to="/" className="hover:text-black focus:outline-none focus-visible:underline">
            View public website
          </Link>
        </p>
      </main>
    </div>
  );
}
