export default function Services() {
  return (
    <section id="services" className="py-8">
      <div className="text-left mb-8">
        <span className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase font-sans mb-3 block">
          What I Offer
        </span>
        <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight font-serif italic text-zinc-900">
          Services
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Fullstack Web Development",
            desc: "Building complete, scalable, and secure web applications with robust authentication systems. Designing modern interfaces and developing solid backend architectures using both relational and non-relational databases.",
          },
          {
            title: "QA Testing & Documentation",
            desc: "Ensuring software reliability through rigorous unit testing (JUnit) and comprehensive technical documentation. Delivering clean, maintainable code backed by structured requirement analysis and clear specifications.",
          },
          {
            title: "Analysis, Design & Cloud Deployment",
            desc: "Planning software from scratch using agile methodologies, class diagrams, and use cases. Additionally, managing seamless deployments and containerization across Vercel, Render, AWS, or Docker.",
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:border-zinc-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-lg font-bold text-zinc-950 mb-3 font-sans tracking-tight">
                {service.title}
              </h4>

              <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
