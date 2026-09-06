import { useState } from "react";

const stages = [
  { name: "Frame", happens: "We clarify the situation, the constraints, and the question worth solving.", involved: "Studio lead and the people closest to the problem.", artifact: "A focused brief and decision map." },
  { name: "Make", happens: "We turn the useful direction into product, interface, and system work.", involved: "Studio team with the people shaping the decisions.", artifact: "Working product and design material." },
  { name: "Integrate", happens: "We connect the work to the systems, content, and operating context around it.", involved: "Studio team and relevant technical or operational owners.", artifact: "A connected implementation plan." },
  { name: "Release", happens: "We prepare the work to be handed into everyday use and ongoing ownership.", involved: "Studio team and the people taking the work forward.", artifact: "A handover record and next-step view." },
];

const Approach = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = stages[activeIndex];

  return (
    <section id="approach" className="border-b section-rule py-20 md:py-28">
      <div className="page-canvas">
        <div className="grid gap-6 border-b section-rule pb-6 md:grid-cols-2 md:items-end">
          <div><p className="section-label text-[#71717a]">02 / Working model</p><h2 className="font-display mt-3 text-3xl font-medium tracking-[-0.02em] md:text-[40px]">A project with VDG.</h2></div>
          <p className="max-w-lg text-[#a1a1aa]">A straightforward way to move from an open question to work that can be owned and used.</p>
        </div>

        <ol className="working-rail">
          {stages.map((stage, index) => {
            const selected = index === activeIndex;
            return <li key={stage.name} className={`working-stage ${selected ? "working-stage--selected" : ""}`} onMouseEnter={() => setActiveIndex(index)}>
              <button type="button" className="focus-electric working-stage-trigger" aria-pressed={selected} onFocus={() => setActiveIndex(index)} onClick={() => setActiveIndex(index)}>
                <span className="section-label working-stage-index">0{index + 1}</span>
                <span className="working-stage-name">{stage.name}</span>
                <span className="working-stage-dot" aria-hidden="true" />
              </button>
              <p className="working-stage-summary">{stage.happens}</p>
            </li>;
          })}
        </ol>

        <div className="working-detail" aria-live="polite">
          <div className="working-detail-copy"><p className="section-label text-[#4361ff]">Selected stage / 0{activeIndex + 1}</p><h3 className="font-display mt-3 text-2xl font-medium">{activeStage.name}</h3><dl className="mt-6 grid gap-5 sm:grid-cols-2"><div><dt className="section-label text-[#71717a]">Who is involved</dt><dd>{activeStage.involved}</dd></div><div><dt className="section-label text-[#71717a]">The artifact</dt><dd>{activeStage.artifact}</dd></div></dl></div>
          <div className="process-artifact registration-mark" aria-hidden="true"><span className="process-artifact-label">{activeStage.name.toUpperCase()} / NOTE</span><span className="process-artifact-line process-artifact-line--one" /><span className="process-artifact-line process-artifact-line--two" /><span className="process-artifact-box"><i /><i /><i /></span><span className="process-artifact-point" /></div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
