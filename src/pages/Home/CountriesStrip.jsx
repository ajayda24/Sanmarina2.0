function CountriesStrip() {
  const countries = ["Germany", "UK", "Austria", "Ireland"];
  return (
    <section className="bg-primary/5 dark:bg-background-dark/30 rounded-xl py-6">
      <div className="flex items-center justify-center divide-x divide-primary/20 dark:divide-text-dark/20 flex-wrap gap-y-4">
        {countries.map((c) => (
          <div key={c} className="px-6 sm:px-8 text-center">
            <p className="font-heading text-lg font-medium text-text-light dark:text-text-dark">
              {c}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CountriesStrip;
