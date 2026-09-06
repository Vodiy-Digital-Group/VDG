import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useScrollReveal } from "@/animations/useScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const messageLength = formData.message.length;
  useScrollReveal(sectionRef, { stagger: 0.09 });

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

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
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_2oydne5",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_n1f6tij",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: currentTime,       
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "fUCivuipQ9pM1RZOc",
        }
      );

      setStatus({ 
        type: "success", 
        message: "Your message was sent successfully. We’ll get back to you soon."
      });

      setFormData({ name: "", email: "", message: "" });
      formRef.current.reset();

      setTimeout(() => setStatus(null), 6000);

    } catch (error) {
      console.error("EmailJS xatosi:", error);
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
              { icon: Phone, label: "Phone", value: "+998 91 001 22 17" },
              { icon: Mail, label: "Email", value: "vodiydigital@gmail.com" },
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

            <button
              type="submit"
              disabled={isSending}
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
                className={`mt-5 border p-3 text-sm font-medium ${
                  status.type === "success" 
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                    : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
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
