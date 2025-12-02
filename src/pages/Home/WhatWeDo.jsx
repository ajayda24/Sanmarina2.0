function WhatWeDo() {
  const items = [
    {
      title: "Domestic Admissions",
      desc: "Expert guidance for securing admissions in top colleges and universities across India.",
    },
    {
      title: "Study Abroad",
      desc: "Your complete guide to studying in Germany, UK, Ireland, and Austria.",
      style: {
        backgroundImage:
          "linear-gradient(to top right, rgba(0, 201, 255, 0.05), transparent)",
      },
    },
    {
      title: "Career Counselling",
      desc: "Personalized career counselling to help you find the right path for your future.",
    },
  ];

  return (
    <section>
      <h2 className="text-text-light dark:text-text-dark text-3xl font-bold font-heading leading-tight tracking-[-0.015em] pb-6 text-center">
        What We Do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div
            key={it.title}
            className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-background-dark/50 border border-text-light/10 dark:border-text-dark/10 shadow-sm"
            style={it.style}
          >
            <p className="text-primary text-lg font-bold leading-normal">
              {it.title}
            </p>
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
              {it.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default WhatWeDo;
