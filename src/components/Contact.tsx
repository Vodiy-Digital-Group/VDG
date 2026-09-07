import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useScrollReveal } from "@/animations/useScrollReveal";

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim(),
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim(),
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim(),
  recaptchaSiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY?.trim(),
};

declare global {
  interface Window {
    grecaptcha?: {
      render: (container: HTMLElement, parameters: Record<string, unknown>) => number;
      reset: (widgetId?: number) => void;
    };
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [captchaToken, setCaptchaToken] = useState("");
  const [isCaptchaReady, setIsCaptchaReady] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const captchaRef = useRef<HTMLDivElement>(null);
  const captchaWidgetId = useRef<number | null>(null);
  const messageLength = formData.message.length;
  useScrollReveal(sectionRef, { stagger: 0.09 });

  useEffect(() => {
    const siteKey = emailjsConfig.recaptchaSiteKey;
    if (!siteKey) return;

    const renderCaptcha = () => {
      if (!captchaRef.current || !window.grecaptcha || captchaWidgetId.current !== null) return;

      captchaWidgetId.current = window.grecaptcha.render(captchaRef.current, {
        sitekey: siteKey,
        theme: "dark",
        callback: (token: string) => setCaptchaToken(token),
        "expired-callback": () => setCaptchaToken(""),
        "error-callback": () => {
          setCaptchaToken("");
          setStatus({ type: "error", message: "Spam protection could not load. Please refresh the page and try again." });
        },
      });
      setIsCaptchaReady(true);
    };

    if (window.grecaptcha) {
      renderCaptcha();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[src^="https://www.google.com/recaptcha/api.js"]');
    if (existingScript) {
      existingScript.addEventListener("load", renderCaptcha);
      return () => existingScript.removeEventListener("load", renderCaptcha);
    }

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", renderCaptcha);
    document.head.appendChild(script);

    return () => script.removeEventListener("load", renderCaptcha);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey || !emailjsConfig.recaptchaSiteKey) {
      setStatus({ type: "error", message: "The contact form is not configured yet. Please email us directly." });
      return;
    }

    if (!captchaToken) {
      setStatus({ type: "error", message: "Please complete the spam protection check before sending your message." });
      return;
    }

    setIsSending(true);
    setStatus(null);

    // Keep a predictable, human-readable timestamp for the email template.
    const now = new Date();
    
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const day = now.getDate();
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const currentTime = `${day} ${month} ${year}, ${hours}:${minutes}`;

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: currentTime,
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          source: "VDG website contact form",
          "g-recaptcha-response": captchaToken,
        },
        {
          publicKey: emailjsConfig.publicKey,
        }
      );

      setStatus({ 
        type: "success", 
        message: "Your message was sent successfully. We’ll get back to you soon."
      });

      setFormData({ name: "", email: "", message: "" });
      formRef.current.reset();
      setCaptchaToken("");
      if (captchaWidgetId.current !== null) window.grecaptcha?.reset(captchaWidgetId.current);

      setTimeout(() => setStatus(null), 6000);

    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setStatus({ 
        type: "error", 
        message: "Something went wrong. Please check your connection and try again."
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" data-ambient="blue" className="site-section contact-section border-b section-rule py-20 md:py-32">
      <div className="page-canvas">
        <div data-reveal className="section-heading mb-12 grid gap-6 border-b section-rule pb-7 md:grid-cols-2 md:items-end">
          <div data-reveal-item>
            <p className="section-label text-[#71717a]">04 / Contact</p>
            <h2 className="font-display mt-3 text-3xl font-medium tracking-[-0.02em] md:text-[40px]">Get in touch.</h2>
          </div>
          <p data-reveal-item className="max-w-xl text-sm leading-6 text-[#a1a1aa]">We review new project inquiries within one business day and respond with initial architecture considerations.</p>
        </div>

        <div data-reveal className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div data-reveal-item className="space-y-8 lg:pt-2">
            <div className="contact-intro max-w-sm border-l-2 border-[#4361ff] pl-4">
              <p className="section-label text-[#71717a]">Project inquiry</p>
              <p className="mt-2 text-sm leading-6 text-[#a1a1aa]">Tell us briefly about your goals and any constraints you’re working with.</p>
            </div>

            {[
              // { icon: Phone, label: "Phone", value: "+998 91 001 22 17" }, TODO: later add phone number
              { icon: Mail, label: "Email", value: "contact@vodiydigital.com" },
              { icon: MapPin, label: "Location", value: "Andijan, Uzbekistan" },
            ].map((item) => (
              <div key={item.label} className="contact-item flex items-start gap-4">
                <div className="contact-icon flex h-11 w-11 shrink-0 items-center justify-center border section-rule bg-[#121216]">
                  <item.icon className="h-5 w-5 text-[#a1a1aa]" />
                </div>
                <div>
                  <p className="section-label text-[#71717a]">{item.label}</p>
                  <p className="mt-1 font-medium text-[#f5f5f3]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form data-reveal-item ref={formRef} onSubmit={handleSubmit} className="contact-form glass-panel border section-rule bg-[#121216] p-5 sm:p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="section-label block text-[#a1a1aa]" htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="focus-electric h-11 w-full rounded-sm border section-rule bg-[#0b0b0d] px-4 text-[#f5f5f3] placeholder:text-[#71717a] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="section-label block text-[#a1a1aa]" htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="focus-electric h-11 w-full rounded-sm border section-rule bg-[#0b0b0d] px-4 text-[#f5f5f3] placeholder:text-[#71717a] transition-colors"
                />
              </div>
            </div>

            <div className="relative mt-5 space-y-2">
              <label className="section-label block text-[#a1a1aa]" htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your message"
                rows={5}
                required
                maxLength={1000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                aria-describedby="message-length"
                className="focus-electric min-h-36 w-full resize-none rounded-sm border section-rule bg-[#0b0b0d] px-4 py-3 text-[#f5f5f3] placeholder:text-[#71717a] transition-colors"
              />
              <div id="message-length" className="absolute bottom-3 right-4 text-xs text-[#71717a]">
                {messageLength}/1000
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <div ref={captchaRef} aria-label="Spam protection" />
              {!isCaptchaReady && (
                <p className="text-xs text-[#71717a]">
                  {emailjsConfig.recaptchaSiteKey ? "Loading spam protection…" : "Spam protection is not configured."}
                </p>
              )}
              <p className="text-xs leading-5 text-[#71717a]">
                This form is protected by reCAPTCHA. Google’s{' '}
                <a className="underline underline-offset-2 hover:text-[#f5f5f3]" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>{' '}
                and{' '}
                <a className="underline underline-offset-2 hover:text-[#f5f5f3]" href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a>{' '}
                apply.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSending || !captchaToken}
              className="focus-electric glow-button mt-5 inline-flex h-12 w-full items-center justify-center gap-2 bg-[#4361ff] px-5 font-display text-sm font-medium text-[#f5f5f3] transition-colors hover:bg-[#5a75ff] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {isSending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`mt-5 border border-[var(--outline)] bg-[var(--surface-200)] p-3 text-sm font-medium ${
                  status.type === "success" ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
