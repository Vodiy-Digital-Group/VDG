import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import { useScrollReveal } from "@/animations/useScrollReveal";
import { useCardTilt } from "@/animations/useCardTilt";
import { MetricStat, SectionFrame } from "@/components/system";

const capabilities = [
  { title: "Digital products & platforms", description: "Product experiences and platforms shaped around the people and workflows they support.", detail: "Interface / service / platform" },
  { title: "Systems & operations software", description: "Internal tools and connected systems that make operational work clearer.", detail: "Workflow / integration / operations" },
  { title: "Product design systems", description: "Reusable design foundations for consistent product decisions and interfaces.", detail: "Tokens / components / guidance" },
  { title: "Technical discovery & delivery strategy", description: "Practical framing that turns an uncertain brief into an informed delivery plan.", detail: "Questions / priorities / plan" },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);
  useCardTilt(sectionRef);

  return (
    <section ref={sectionRef} id="capabilities" data-ambient="indigo" className="site-section border-b section-rule py-20 md:py-32">
      <div className="page-canvas">
        <div data-reveal><SectionFrame index="01 / Capabilities" title="Where we enter the problem."><p data-reveal-item>A focused view of the work VDG can help frame, design, and deliver.</p></SectionFrame></div>

        <div data-reveal className="capability-list border-b section-rule">
          {capabilities.map((capability, index) => {
            const isActive = activeIndex === index;
            const detailId = `capability-detail-${index}`;
            return (
              <article key={capability.title} data-reveal-item data-tilt className={`capability-row glass-row ${isActive ? "capability-row--active" : ""}`} onMouseEnter={() => setActiveIndex(index)}>
                <span className="interactive-sheen" aria-hidden="true" />
                <span className="section-label capability-index">0{index + 1}</span>
                <h3 className="capability-title"><button type="button" className="focus-electric capability-trigger" aria-expanded={isActive} aria-controls={detailId} onFocus={() => setActiveIndex(index)} onClick={() => setActiveIndex(isActive ? null : index)}>{capability.title}<Plus className="capability-plus" size={19} aria-hidden="true" /></button></h3>
                <div id={detailId} className="capability-detail"><p>{capability.description}</p><div className="capability-schematic" aria-hidden="true"><span /><span /><span /></div><p className="section-label capability-meta">{capability.detail}</p></div>
              </article>
            );
          })}
        </div>
        <div data-reveal className="metric-stat-grid" aria-label="VDG capabilities at a glance">
          <MetricStat value="04" label="Core capability areas" />
          <MetricStat value="01" label="Integrated delivery partner" />
          <MetricStat value="∞" label="Room for durable systems" />
        </div>
      </div>
    </section>
  );
};

export default Services;
