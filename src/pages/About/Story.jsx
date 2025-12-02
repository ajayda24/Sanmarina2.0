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
          className="flex-1 p-6 rounded-xl py-18"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(0, 201, 255, 0), rgba(0, 201, 255, 0.2) 150%)",
          }}
        >
          <h2 className="text-accent dark:text-accent text-sm font-bold font-heading uppercase tracking-wider mb-2">
            Our Story
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-neutral-text dark:text-white">
            Who We Are
          </h3>
          <p className="text-base text-neutral-text/80 dark:text-gray-300 leading-relaxed mb-4">
            Sanmarina was founded with a simple yet powerful mission: to provide
            students in Kerala with transparent, caring, and reliable guidance
            on their educational journey.
          </p>
          <p className="text-base text-neutral-text/80 dark:text-gray-300 leading-relaxed">
            We understand the challenges and opportunities that lie ahead, and
            we are dedicated to helping every student find their perfect path to
            growth and success. Our team of experienced counselors is passionate
            about education and committed to your future.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Story;
