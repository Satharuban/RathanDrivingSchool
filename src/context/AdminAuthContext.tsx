import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { adminLogin } from '../services/adminService';

const STORAGE_KEY = 'rathan_admin_token';

type AdminAuthContextValue = {
  token: string | null;
  isAuthenticated: boolean;
  login: (password: string) => Promise<{ ok: true } | { ok: false; error: string }>;
  logout: () => void;
};

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  });

  const login = useCallback(async (password: string) => {
    const result = await adminLogin(password);
    if ('error' in result) return { ok: false as const, error: result.error };
    setToken(result.token);
    try {
      localStorage.setItem(STORAGE_KEY, result.token);
    } catch {
      /* ignore */
    }
    return { ok: true as const };
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({
      token,
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [token, login, logout]
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
}
