function WhyChoose() {
  const reasons = [
    {
      icon: "verified",
      title: "Genuine Guidance",
      desc: "We provide honest advice tailored to your unique profile and aspirations.",
    },
    {
      icon: "visibility",
      title: "Transparency",
      desc: "Clear and upfront information about processes, costs, and opportunities.",
    },
    {
      icon: "person",
      title: "One-on-One Support",
      desc: "Dedicated counselors to guide you at every step of your journey.",
    },
    {
      icon: "handshake",
      title: "Trusted Connections",
      desc: "Strong partnerships with leading universities and institutions.",
    },
    {
      icon: "navigation",
      title: "We Guide, Not Sell",
      desc: "Our priority is your future success, not just admissions.",
    },
  ];

  return (
    <section>
      <h2 className="text-text-light dark:text-text-dark text-3xl font-bold font-heading leading-tight tracking-[-0.015em] pb-8 text-center">
        Why Choose Sanmarina
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {reasons.map((r) => (
          <div key={r.title} className="flex items-start gap-4">
            <div className="shrink-0 size-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">{r.icon}</span>
            </div>
            <div>
              <h3 className="font-bold text-text-light dark:text-text-dark">
                {r.title}
              </h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                {r.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default WhyChoose;
