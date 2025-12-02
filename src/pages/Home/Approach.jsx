function Approach() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        <div className="space-y-6">
          <h2 className="text-text-light dark:text-text-dark text-3xl font-bold font-heading leading-tight tracking-[-0.015em] m-4">
            Our Approach
          </h2>

          <div className="space-y-4 p-10 bg-[#00c8ff15] rounded-xl">
            <div>
              <h3 className="text-lg font-bold text-primary ">WHY</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark mt-1">
                We start by understanding your core motivations, passions, and
                long-term goals. This is the foundation of your educational
                path.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary ">HOW</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark mt-1 ">
                We map out a strategic plan, shortlisting the best-fit courses
                and universities, and preparing your applications for maximum
                impact.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary ">WHAT</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark mt-1">
                We deliver tangible results: successful admissions, visa
                assistance, and pre-departure support, ensuring a smooth
                transition to your new life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <InquiryForm />
    </section>
  );
}

function InquiryForm() {
  return (
    <div className="mt-15">
      <div>
        <h5 className="text-accent text-xs m-1">GET IN TOUCH</h5>
        <h3 className="text-2xl font-bold font-heading mb-6 text-text-light dark:text-text-dark">
          Quick Inquiry
        </h3>
      </div>
      <div
        className="bg-background-light/5 dark:bg-background-dark/50 p-8 rounded-xl border border-text-light/10 dark:border-text-dark/10 shadow-lg"
        style={{
          backgroundImage:
            "linear-gradient(145deg, rgba(0, 201, 255, 0), rgba(0, 201, 255, 0.15) 100%)",
        }}
      >
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label
              className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="mt-1 block w-full rounded-xl border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              id="name"
              type="text"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="mt-1 block w-full rounded-xl border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                id="phone"
                type="tel"
              />
            </div>

            <div>
              <label
                className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="mt-1 block w-full rounded-xl border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                id="email"
                type="email"
              />
            </div>
          </div>

          <div>
            <label
              className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark"
              htmlFor="user-type"
            >
              I am a
            </label>
            <select
              className="mt-1 block w-full rounded-xl border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              id="user-type"
            >
              <option>Student</option>
              <option>Parent</option>
            </select>
          </div>

          <div>
            <label
              className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="mt-1 block w-full rounded-xl border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              id="message"
              rows={4}
            ></textarea>
          </div>

          <button
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-transform hover:scale-105"
            type="submit"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
export default Approach;
