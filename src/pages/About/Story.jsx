function Story() {
  return (
    <section className="py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 w-full">
          <div
            className="aspect-square w-full bg-center bg-no-repeat bg-cover rounded-xl"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeLnocRMc8fYVUzjexs72iPuYZMg7BHHETPbcVxa6O8t8oHwkV0uoHhJAzcn0V-NqXddkhFm5MB2_TpXmsK7PuD6X7CWp2jPh_clPHQEHOIpXRNKA9tNf9cQq52XwxeMMziA246wsPVxjgKP32Z3PU5O-ts275a9bgrwYkHFggVCU0YU2nAm0opu3uTvgx5GkhLvMfn6BkK55pc7aq4VNKmbNuq_13t7Y6Bstd4u1AojRg2rXEsXoMTbEIB_57cxkM7fwGiSHtjLvE')",
            }}
            data-alt="A professional and friendly team of educational consultants smiling in a modern office setting."
          ></div>
        </div>
        <div
          className="flex-1 p-8 rounded-xl py-15"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(0, 201, 255, 0), rgba(0, 201, 255, 0.1) 150%)",
          }}
        >
          <h2 className="text-accent dark:text-accent text-sm font-bold font-heading uppercase tracking-wider mb-2">
            Our Story
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-neutral-text dark:text-white">
            Who We Are
          </h3>
          <p className="text-base text-neutral-text/80 dark:text-gray-300 leading-relaxed mb-4">
            Sanmarina is an education consultancy built from a simple belief
            every student deserves honest, transparent and caring guidance when
            choosing their future.
          </p>
          <p className="text-base text-neutral-text/80 dark:text-gray-300 leading-relaxed">
            Sanmarina began when the founder personally helped students choose
            the right colleges using genuine advice and real experience. What
            started as personal guidance has now grown into a trusted education
            and career partner.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Story;
