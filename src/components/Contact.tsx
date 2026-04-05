import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Xabaringiz qabul qilindi! Tez orada siz bilan bog'lanamiz.");
    setFormData({ name: "", email: "", message: "" });
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
          <div className="space-y-8">
            {[
              { icon: Phone, label: "Telefon", value: "+998 91 001 22 17" },
              { icon: Mail, label: "Email", value: "info@vodiydigital.com" },
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

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Ismingiz"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-5 py-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
            />
            <input
              type="email"
              placeholder="Email manzilingiz"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
            />
            <textarea
              placeholder="Xabaringiz"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-bg font-semibold text-primary-foreground transition-all hover:opacity-90 glow-shadow w-full justify-center"
            >
              Yuborish
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
