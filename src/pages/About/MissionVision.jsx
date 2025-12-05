function MissionVision() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#00c8ff0b] dark:bg-neutral-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-neutral-700">
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-neutral-text dark:text-white">
            Our Mission
          </h3>
          <p className="text-base text-neutral-text/80 dark:text-gray-300 leading-relaxed">
            To guide and support students and parents with genuine advice,
            transparent processes and trusted pathways to meaningful education.
          </p>
        </div>

        <div className="bg-primary dark:bg-primary/90 p-8 rounded-xl shadow-sm text-white">
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            Our Vision
          </h3>
          <p className="text-base text-white/90 leading-relaxed">
            To become one of the most trusted education partners for learners
            and parents seeking clarity, safety and confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
export default MissionVision;
