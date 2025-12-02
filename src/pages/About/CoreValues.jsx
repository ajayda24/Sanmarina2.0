function CoreValues() {
  const values = [
    {
      icon: "visibility",
      title: "Transparency",
      desc: "We believe in an open and honest process, ensuring you are fully informed at every step of your journey.",
    },
    {
      icon: "favorite",
      title: "Care",
      desc: "Your goals are our goals. We provide personalized support tailored to your unique aspirations and needs.",
    },
    {
      icon: "verified",
      title: "Reliability",
      desc: "With our expertise and proven track record, you can depend on us for accurate and trustworthy guidance.",
    },
    {
      icon: "trending_up",
      title: "Growth",
      desc: "We are committed to fostering your personal and academic development, beyond just university admissions.",
    },
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-neutral-text dark:text-white">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((v) => (
          <div
            key={v.title}
            className="flex flex-col items-center p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-gray-200 dark:border-neutral-700"
          >
            <div className="flex items-center justify-center size-16 mb-4 rounded-full bg-accent/10 dark:bg-accent/20">
              <span className="material-symbols-outlined text-3xl text-accent">
                {v.icon}
              </span>
            </div>
            <h4 className="text-xl font-bold font-heading mb-2 text-neutral-text dark:text-white">
              {v.title}
            </h4>
            <p className="text-sm text-neutral-text/80 dark:text-gray-300 leading-relaxed">
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CoreValues;
