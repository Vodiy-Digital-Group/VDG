import vdgLogo from "@/assets/vdg-logo.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container relative z-10 flex flex-col items-center text-center gap-8">

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Texnologiya bilan <br />
          <span className="gradient-text">hayotni osonlashtiring</span>
        </h1>

        <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          VDG — zamonaviy yechimlar orqali kundalik hayotingizni soddalashtirish va samaradorlikni oshirishga yordam beruvchi texnologik kompaniya.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#xizmatlar"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-bg font-semibold text-primary-foreground transition-all hover:opacity-90 glow-shadow"
          >
            Xizmatlarimiz
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#aloqa"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border font-semibold text-foreground transition-all hover:bg-secondary"
          >
            Bog'lanish
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
