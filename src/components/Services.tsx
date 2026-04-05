import { Smartphone, Globe, Brain, ShieldCheck, Zap, Users } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobil ilovalar",
    description: "Foydalanuvchilarga qulay va zamonaviy mobil ilovalar yaratamiz.",
  },
  {
    icon: Globe,
    title: "Veb saytlar",
    description: "Tez, chiroyli va samarali veb saytlar ishlab chiqamiz.",
  },
  {
    icon: Brain,
    title: "Sun'iy intellekt",
    description: "AI texnologiyalari yordamida biznesingizni avtomatlashtiramiz.",
  },
  {
    icon: ShieldCheck,
    title: "Kiberxavfsizlik",
    description: "Ma'lumotlaringiz xavfsizligini ta'minlaymiz.",
  },
  {
    icon: Zap,
    title: "Avtomatlashtirish",
    description: "Ish jarayonlarini tezlashtirish va soddalashtirish yechimlari.",
  },
  {
    icon: Users,
    title: "IT konsalting",
    description: "Texnologik maslahat va strategik rejalashtirish xizmati.",
  },
];

const Services = () => {
  return (
    <section id="xizmatlar" className="py-24 px-4">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Bizning <span className="gradient-text">xizmatlar</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Zamonaviy texnologiyalar asosida keng ko'lamli xizmatlar taqdim etamiz
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:glow-shadow"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-glow flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
