import { CheckCircle2 } from "lucide-react";

const points = [
  "Tajribali va professional jamoa",
  "Zamonaviy texnologiyalar bilan ishlash",
  "Mijozlarga individual yondashuv",
  "Tez va sifatli natijalar",
];

const About = () => {
  return (
    <section id="biz-haqimizda" className="py-24 px-4">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Nima uchun <span className="gradient-text">VDG</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Biz texnologiyani oddiy va tushunarli qilishga intilamiz. Har bir loyiha orqali
              mijozlarimizning kundalik hayotini yengillashtirish — bizning asosiy maqsadimiz.
            </p>
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-card border border-border p-10 text-center">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "50+", label: "Loyihalar" },
                  { value: "30+", label: "Mijozlar" },
                  { value: "5+", label: "Yillik tajriba" },
                  { value: "24/7", label: "Qo'llab-quvvatlash" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -z-10 inset-0 rounded-2xl bg-primary/5 blur-xl translate-x-4 translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
