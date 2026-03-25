import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';

export function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from || '/admin';

  useEffect(() => {
    if (isAuthenticated) navigate(from, { replace: true });
  }, [isAuthenticated, from, navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = await login(password);
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    navigate(from, { replace: true });
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-8 shadow-xl"
      >
        <div className="flex justify-center mb-6">
          <span className="rounded-xl bg-brand-red/20 p-4 text-brand-red">
            <Lock className="h-8 w-8" aria-hidden />
          </span>
        </div>
        <h1 className="text-center font-display text-2xl font-bold text-white">Admin sign in</h1>
        <p className="mt-2 text-center text-sm text-neutral-400">
          Rathan&apos;s Driving School — enquiries dashboard
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="admin-password" className="sr-only">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30"
              placeholder="Admin password"
              required
            />
          </div>
          {error && (
            <p className="text-sm text-red-400" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center py-3.5 disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </motion.div>
      <a
        href="/"
        className="mt-8 text-sm text-neutral-500 hover:text-neutral-300 focus:outline-none focus-visible:underline"
      >
        ← Back to website
      </a>
    </div>
  );
}
