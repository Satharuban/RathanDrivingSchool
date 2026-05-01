import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { CONTACT_EMAIL, LESSON_TYPES } from '../../constants/site';
import { submitEnquiry, type EnquiryPayload } from '../../services/enquiryService';
import { getWhatsAppUrl } from '../../utils/whatsapp';

function enquiryManualFallback(form: EnquiryPayload, intro?: string) {
  const subject = encodeURIComponent('Driving lesson enquiry');
  const body = encodeURIComponent(
    `Name: ${form.fullName}\nPhone: ${form.phone}\nEmail: ${form.email}\nPostcode: ${form.postcode}\nLesson type: ${form.lessonType}\n\nMessage:\n${form.message}\n`
  );
  const waMessage = `Driving lesson enquiry\n\nName: ${form.fullName}\nPhone: ${form.phone}\nEmail: ${form.email}\nPostcode: ${form.postcode}\nLesson type: ${form.lessonType}\n\nMessage:\n${form.message}`;
  return (
    <>
      {intro ? <>{intro} </> : null}
      Please{' '}
      <a className="underline underline-offset-2" href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}>
        email us
      </a>{' '}
      or{' '}
      <a
        className="underline underline-offset-2"
        href={getWhatsAppUrl(waMessage)}
        target="_blank"
        rel="noopener noreferrer"
      >
        message on WhatsApp
      </a>
      .
    </>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<null | React.ReactNode>(null);
  const [form, setForm] = useState<EnquiryPayload>({
    fullName: '',
    phone: '',
    email: '',
    postcode: '',
    lessonType: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryPayload, string>>>({});

  function validate(): boolean {
    const next: Partial<Record<keyof EnquiryPayload, string>> = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your name';
    if (!form.phone.trim()) next.phone = 'Please enter your phone number';
    if (!form.email.trim()) next.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email';
    if (!form.postcode.trim()) next.postcode = 'Please enter your postcode';
    if (!form.lessonType) next.lessonType = 'Please select a lesson type';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === 'loading') return;
    if (!validate()) return;
    setStatus('loading');
    setMessage(null);
    try {
      const res = await submitEnquiry(form);
      if (res.success) {
        setStatus('success');
        setMessage(res.message || "Thank you! We'll be in touch soon.");
        setForm({ fullName: '', phone: '', email: '', postcode: '', lessonType: '', message: '' });
        setErrors({});
      } else {
        setStatus('error');
        setMessage(
          enquiryManualFallback(
            form,
            res.message || 'We could not send your enquiry automatically.'
          )
        );
      }
    } catch {
      setStatus('error');
      setMessage(enquiryManualFallback(form, 'Something went wrong.'));
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700">
            Full name *
          </label>
          <input
            id="fullName"
            type="text"
            value={form.fullName}
            onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
            className="mt-1.5 w-full rounded-xl border border-neutral-300 px-4 py-3 text-black transition-colors focus:border-brand-red focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/20"
            placeholder="John Smith"
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="mt-1.5 w-full rounded-xl border border-neutral-300 px-4 py-3 text-black transition-colors focus:border-brand-red focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/20"
            placeholder="07XXX XXXXXX"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="mt-1.5 w-full rounded-xl border border-neutral-300 px-4 py-3 text-black transition-colors focus:border-brand-red focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/20"
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-neutral-700">
            Postcode *
          </label>
          <p className="mt-1 text-xs text-neutral-500">We use this to check we cover your area.</p>
          <input
            id="postcode"
            type="text"
            value={form.postcode}
            onChange={(e) => setForm((f) => ({ ...f, postcode: e.target.value.toUpperCase() }))}
            className="mt-1.5 w-full rounded-xl border border-neutral-300 px-4 py-3 text-black transition-colors focus:border-brand-red focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/20"
            placeholder="e.g. M1 1AA"
          />
          {errors.postcode && <p className="mt-1 text-sm text-red-600">{errors.postcode}</p>}
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="lessonType" className="block text-sm font-medium text-neutral-700">
          Lesson type *
        </label>
        <select
          id="lessonType"
          value={form.lessonType}
          onChange={(e) => setForm((f) => ({ ...f, lessonType: e.target.value }))}
          className="mt-1.5 w-full rounded-xl border border-neutral-300 px-4 py-3 text-black transition-colors focus:border-brand-red focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/20"
        >
          <option value="">Select...</option>
          {LESSON_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.lessonType && <p className="mt-1 text-sm text-red-600">{errors.lessonType}</p>}
      </div>
      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="mt-1.5 w-full rounded-xl border border-neutral-300 px-4 py-3 text-black leading-relaxed transition-colors focus:border-brand-red focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/20"
          placeholder="e.g. I'm a complete beginner looking for manual lessons on weekends."
        />
      </div>
      {message && (
        <div
          className={`mt-4 rounded-xl px-4 py-3 text-sm ${
            status === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-800'
          }`}
        >
          {message}
        </div>
      )}
      <div className="mt-6">
        <button type="submit" disabled={status === 'loading'} className="btn-primary w-full sm:w-auto">
          {status === 'loading' ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            'Send enquiry'
          )}
        </button>
      </div>
    </motion.form>
  );
}
