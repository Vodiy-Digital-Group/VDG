import { useState } from "react";
import { Plus } from "lucide-react";

const capabilities = [
  { title: "Digital products & platforms", description: "Product experiences and platforms shaped around the people and workflows they support.", detail: "Interface / service / platform" },
  { title: "Systems & operations software", description: "Internal tools and connected systems that make operational work clearer.", detail: "Workflow / integration / operations" },
  { title: "Product design systems", description: "Reusable design foundations for consistent product decisions and interfaces.", detail: "Tokens / components / guidance" },
  { title: "Technical discovery & delivery strategy", description: "Practical framing that turns an uncertain brief into an informed delivery plan.", detail: "Questions / priorities / plan" },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="capabilities" className="border-b section-rule py-20 md:py-28">
      <div className="page-canvas">
        <div className="grid gap-6 border-b section-rule pb-6 md:grid-cols-2 md:items-end">
          <div><p className="section-label text-[#71717a]">01 / Capabilities</p><h2 className="font-display mt-3 text-3xl font-medium tracking-[-0.02em] md:text-[40px]">Where we enter the problem.</h2></div>
          <p className="max-w-lg text-[#a1a1aa]">A focused view of the work VDG can help frame, design, and deliver.</p>
        </div>

        <div className="border-b section-rule">
          {capabilities.map((capability, index) => {
            const isActive = activeIndex === index;
            const detailId = `capability-detail-${index}`;
            return (
              <article key={capability.title} className={`capability-row ${isActive ? "capability-row--active" : ""}`} onMouseEnter={() => setActiveIndex(index)}>
                <span className="section-label capability-index">0{index + 1}</span>
                <h3 className="capability-title"><button type="button" className="focus-electric capability-trigger" aria-expanded={isActive} aria-controls={detailId} onFocus={() => setActiveIndex(index)} onClick={() => setActiveIndex(isActive ? null : index)}>{capability.title}<Plus className="capability-plus" size={19} aria-hidden="true" /></button></h3>
                <div id={detailId} className="capability-detail"><p>{capability.description}</p><div className="capability-schematic" aria-hidden="true"><span /><span /><span /></div><p className="section-label capability-meta">{capability.detail}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
