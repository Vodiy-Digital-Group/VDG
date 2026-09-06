import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0d]">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
