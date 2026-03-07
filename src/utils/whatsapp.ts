import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants/site';

export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${text}`;
}

export function openWhatsApp(customMessage?: string): void {
  window.open(getWhatsAppUrl(customMessage), '_blank', 'noopener,noreferrer');
}
