export function gerarCodigo(): string {
  const uuid = crypto.randomUUID().replace(/-/g, '');
  return uuid.slice(0, 16).toUpperCase();
}

export function formatCode(code: string): string {
  // Return code without formatting (no hyphens)
  return code;
}

const LAST_GENERATION_KEY = 'promokey_last_generation';

export function canGenerateToday(): boolean {
  const lastGeneration = localStorage.getItem(LAST_GENERATION_KEY);
  if (!lastGeneration) return true;
  
  const lastDate = new Date(lastGeneration);
  const today = new Date();
  
  return lastDate.toDateString() !== today.toDateString();
}

export function markGenerationUsed(): void {
  localStorage.setItem(LAST_GENERATION_KEY, new Date().toISOString());
}

export function getPromoUrlWithCode(code: string): string {
  return `https://www.spotify.com/br-pt/ppt/microsoft/?code=${code}`;
}

export interface CodeHistory {
  code: string;
  timestamp: Date;
}

const HISTORY_KEY = 'promokey_history';
const PROMO_URL_KEY = 'promokey_promo_url';
const MAX_HISTORY = 50;

export function saveToHistory(code: string): void {
  const history = getHistory();
  history.unshift({ code, timestamp: new Date() });
  if (history.length > MAX_HISTORY) {
    history.pop();
  }
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

export function getHistory(): CodeHistory[] {
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    if (!data) return [];
    return JSON.parse(data).map((item: { code: string; timestamp: string }) => ({
      ...item,
      timestamp: new Date(item.timestamp),
    }));
  } catch {
    return [];
  }
}

export function clearHistory(): void {
  localStorage.removeItem(HISTORY_KEY);
}

export function getPromoUrl(): string {
  return localStorage.getItem(PROMO_URL_KEY) || 'https://www.microsoft.com/pt-br/store/collections/spotify';
}

export function setPromoUrl(url: string): void {
  localStorage.setItem(PROMO_URL_KEY, url);
}
