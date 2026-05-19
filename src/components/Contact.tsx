import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

type FormValues = { name: string; email: string; message: string };
type FormErrors = { name: string; email: string; message: string };

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const EMAIL = 'qrwrer123@gmail.com';
  const allEmpty = !values.name && !values.email && !values.message;
  const isFormValid =
    !!values.name && !!values.email && !!values.message && validateEmail(values.email);

  const buildErrors = (v: FormValues): FormErrors => ({
    name: v.name ? '' : '성함을 입력해주세요.',
    email: !v.email ? '이메일을 입력해주세요.' : !validateEmail(v.email) ? '이메일 양식이 유효하지 않습니다.' : '',
    message: v.message ? '' : '메시지 내용을 입력해주세요.',
  });

  const handleBlur = () => {
    if (!allEmpty) setErrors(buildErrors(values));
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    if (value) {
      if (field !== 'email' || validateEmail(value)) {
        setErrors((prev) => ({ ...prev, [field]: '' }));
      }
    }
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: values.name, email: values.email, message: values.message },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      showToast('메시지 전송 성공!', 'success');
      setValues({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    } catch {
      showToast('메시지 전송 실패', 'error');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-surface-ivory text-text-dark relative z-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent-red mb-4">CONTACT</h2>
            <h3 className="text-4xl font-bold mb-6 leading-tight text-bg-navy">
              새로운 도전을 <br />
              함께할 준비가 되어 있습니다.
            </h3>
            <p className="text-text-dark/60 mb-10 leading-relaxed">
              저의 역량이 필요한 곳이라면 언제든 환영입니다. <br />
              이메일이나 SNS를 통해 편하게 연락 주세요!
            </p>

            <div className="space-y-4">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center gap-4 p-6 rounded-[24px] bg-white border-navy-thin hover:bg-gray-50 transition-all group text-left"
              >
                <div className="w-12 h-12 rounded-full bg-accent-blue/5 flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-text-dark/40 font-bold uppercase tracking-wider">EMAIL ME (CLICK TO COPY)</p>
                  <p className="font-bold text-bg-navy">{EMAIL}</p>
                </div>
                <div
                  className="ml-auto text-[10px] font-bold text-accent-blue transition-opacity"
                  style={{ opacity: copied ? 1 : 0 }}
                >
                  COPIED!
                </div>
              </button>

              <div className="flex gap-4">
                <a href="https://github.com/p1001q" target="_blank" rel="noreferrer" className="flex-1 flex items-center gap-3 p-5 rounded-[24px] bg-white border-navy-thin hover:bg-gray-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bg-navy">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span className="font-bold text-sm text-bg-navy">GitHub</span>
                </a>
                <a href="https://velog.io/@p1001q/posts" target="_blank" rel="noreferrer" className="flex-1 flex items-center gap-3 p-5 rounded-[24px] bg-white border-navy-thin hover:bg-gray-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bg-navy">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span className="font-bold text-sm text-bg-navy">Velog</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-10 rounded-[32px] border-navy-thin">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`text-[10px] font-bold uppercase tracking-widest ml-1 transition-colors ${errors.name ? 'label-error' : 'text-text-dark/40'}`}>
                    NAME
                  </label>
                  <input
                    type="text"
                    value={values.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={handleBlur}
                    placeholder="성함을 입력해주세요"
                    className={`contact-input w-full px-5 py-4 rounded-[14px] border text-sm transition-all ${errors.name ? 'border-accent-red' : 'border-text-dark/10'}`}
                  />
                  {errors.name && <p className="text-[10px] font-bold text-accent-red ml-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className={`text-[10px] font-bold uppercase tracking-widest ml-1 transition-colors ${errors.email ? 'label-error' : 'text-text-dark/40'}`}>
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={values.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={handleBlur}
                    placeholder="답변받으실 이메일"
                    className={`contact-input w-full px-5 py-4 rounded-[14px] border text-sm transition-all ${errors.email ? 'border-accent-red' : 'border-text-dark/10'}`}
                  />
                  {errors.email && <p className="text-[10px] font-bold text-accent-red ml-1">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className={`text-[10px] font-bold uppercase tracking-widest ml-1 transition-colors ${errors.message ? 'label-error' : 'text-text-dark/40'}`}>
                  MESSAGE
                </label>
                <textarea
                  value={values.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={handleBlur}
                  placeholder="메시지 내용을 입력해주세요"
                  className={`contact-input w-full px-5 py-4 rounded-[14px] border h-40 text-sm transition-all resize-none ${errors.message ? 'border-accent-red' : 'border-text-dark/10'}`}
                />
                {errors.message && <p className="text-[10px] font-bold text-accent-red ml-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={!isFormValid || sending}
                className="w-full py-5 rounded-[14px] bg-primary-yellow text-text-dark font-bold text-sm hover:brightness-105 transition-all disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                {sending ? '보내는 중...' : '메시지 전송'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div className={`notification-toast${toast ? ' show' : ''}`}>
        <span>{toast?.type === 'success' ? '✅' : '❌'}</span>
        <span>{toast?.message}</span>
      </div>
    </section>
  );
}
