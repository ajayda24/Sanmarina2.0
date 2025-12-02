function CTA() {
  return (
    <section className="py-16">
      <div
        className="text-center bg-white dark:bg-neutral-800 p-10 md:p-16 rounded-xl shadow-sm border border-gray-200 dark:border-neutral-700"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(0, 201, 255, 0.1), rgba(0, 201, 255, 0) 170%)",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-neutral-text dark:text-white">
          Ready to Start Your Journey?
        </h2>
        <p className="text-base text-neutral-text/80 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
          Let us help you navigate the path to your dream university. Our expert
          counselors are here to guide you every step of the way.
        </p>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-[0.015em] hover:opacity-90 transition-opacity mx-auto">
          Get Free Counselling
        </button>
      </div>
    </section>
  );
}
export default CTA;
