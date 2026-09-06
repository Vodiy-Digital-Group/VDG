const principles = [
  { name: "Direct access", description: "The people making the work stay close to the people making the decisions." },
  { name: "Durable systems", description: "We favour foundations that can be understood, maintained, and extended over time." },
  { name: "Clear ownership", description: "Responsibilities and next steps are made explicit so the work can move forward with confidence." },
];

const About = () => (
  <section id="studio" className="border-b section-rule py-20 md:py-28">
    <div className="page-canvas">
      <div className="grid gap-6 border-b section-rule pb-6 md:grid-cols-2 md:items-end"><div><p className="section-label text-[#71717a]">03 / Studio</p><h2 className="font-display mt-3 text-3xl font-medium tracking-[-0.02em] md:text-[40px]">Small by design.</h2></div><p className="max-w-lg text-[#a1a1aa]">VDG is an independent product and engineering studio based in Andijan, Uzbekistan. We collaborate directly with the people responsible for the work.</p></div>

      <div className="studio-layout">
        <div className="studio-anchor registration-mark" role="img" aria-label="Typographic composition representing VDG's operating principles: direct access, durable systems, and clear ownership."><span className="section-label studio-anchor-index">VDG / OPERATING PRINCIPLES</span><p>Direct</p><p>Durable</p><p>Clear</p><span className="studio-anchor-rule" /><span className="studio-anchor-note">Designed for the work ahead.</span></div>
        <div className="studio-content"><p className="font-display text-2xl leading-tight tracking-[-0.02em] text-[#f5f5f3] md:text-[28px]">A closer working relationship leaves less room for ambiguity.</p><ul className="studio-principles">{principles.map((principle, index) => <li key={principle.name} className="studio-principle"><span className="section-label text-[#71717a]">0{index + 1}</span><div><h3 className="font-display text-xl font-medium">{principle.name}</h3><p>{principle.description}</p></div></li>)}</ul><div className="studio-context"><span className="section-label text-[#71717a]">Collaboration</span><p>Based in Andijan, Uzbekistan. Working together in the way the project needs: in person, remotely, or across both.</p></div></div>
      </div>
    </div>
  </section>
);

export default About;
