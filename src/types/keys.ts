export type KeyDuration = '1hour' | '1day' | '1week' | '2weeks' | '1month' | 'lifetime';

export interface LicenseKey {
  id: string;
  key: string;
  duration: KeyDuration;
  createdAt: string;
  expiresAt: string | null;
  status: 'active' | 'banned' | 'expired';
  usedBy: {
    hwid: string;
    ip: string;
    location: string;
    lastUsed: string;
  } | null;
  createdBy: {
    id: string;
    role: 'admin' | 'reseller';
    name: string;
  };
}