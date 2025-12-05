function CountriesStrip() {
  const countries = [
    { country: "Germany", flag: "🇩🇪" },
    { country: "UK", flag: "🇬🇧" },
    { country: "Austria", flag: "🇦🇹" },
    { country: "Ireland", flag: "🇮🇪" },
  ];
  return (
    <section className="bg-primary dark:bg-background-dark/30 rounded-xl py-6">
      <p className="text-center text-white mb-6 text-xl">
        Study Abroad Destinations{" "}
      </p>
      <div className="flex items-center justify-center divide-x divide-white/20 dark:divide-text-dark/20 flex-wrap gap-y-4">
        {countries.map((c) => (
          <div
            key={c.country}
            className="px-6 sm:px-8 text-center flex gap-4 items-center group"
          >
            <span className="text-4xl group-hover:scale-125 transition-transform cursor-pointer">
              {c.flag}
            </span>
            <p className="font-heading text-xl font-medium text-white dark:text-text-dark hover:text-accent ">
              {c.country}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CountriesStrip;
