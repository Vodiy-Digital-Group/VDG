import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);
  const messageLength = formData.message.length;

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatus(null);

    // Fixed: Clean Uzbek date & time with manual month names
    const now = new Date();
    
    const uzMonthNames = [
      "yanvar", "fevral", "mart", "aprel", "may", "iyun",
      "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"
    ];

    const day = now.getDate();
    const month = uzMonthNames[now.getMonth()];
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
        message: "Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob beramiz." 
      });

      setFormData({ name: "", email: "", message: "" });
      formRef.current.reset();

      setTimeout(() => setStatus(null), 6000);

    } catch (error) {
      console.error("EmailJS xatosi:", error);
      setStatus({ 
        type: "error", 
        message: "Xatolik yuz berdi. Iltimos, internetingizni tekshirib, qayta urinib ko'ring." 
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="aloqa" className="py-24 px-4">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Biz bilan <span className="gradient-text">bog'laning</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Savollaringiz bormi? Biz bilan bog'laning va bepul maslahat oling
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info remains the same */}
          <div className="space-y-8">
            {[
              { icon: Phone, label: "Telefon", value: "+998 91 001 22 17" },
              { icon: Mail, label: "Email", value: "vodiydigital@gmail.com" },
              { icon: MapPin, label: "Manzil", value: "Andijon, O'zbekiston" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-glow flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Ismingiz"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-5 py-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
            />

            <input
              type="email"
              name="email"
              placeholder="Email manzilingiz"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
            />

            <div className="relative">
              <textarea
                name="message"
                placeholder="Xabaringiz"
                rows={5}
                required
                maxLength={1000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
              />
              <div className="absolute bottom-3 right-5 text-xs text-muted-foreground">
                {messageLength}/1000
              </div>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-bg font-semibold text-primary-foreground transition-all hover:opacity-90 glow-shadow w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Yuborilmoqda...
                </>
              ) : (
                <>
                  Yuborish
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {status && (
              <p 
                className={`text-center text-sm font-medium p-3 rounded-lg ${
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