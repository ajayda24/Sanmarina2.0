function Approach() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 p-8 bg-accent/5 rounded-lg">
        <h2 className="text-text-light dark:text-text-dark text-3xl font-bold font-heading leading-tight tracking-[-0.015em]">
          Our Approach
        </h2>
        <p className="text-text-muted-light dark:text-text-muted-dark">
          We believe in a structured, student-centric process. Our WHY-HOW-WHAT
          methodology ensures your journey is clear, purposeful, and successful.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-primary">WHY</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark mt-1">
              We start by understanding your core motivations, passions, and
              long-term goals. This is the foundation of your educational path.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary">HOW</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark mt-1">
              We map out a strategic plan, shortlisting the best-fit courses and
              universities, and preparing your applications for maximum impact.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary">WHAT</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark mt-1">
              We deliver tangible results: successful admissions, visa
              assistance, and pre-departure support, ensuring a smooth
              transition to your new life.
            </p>
          </div>
        </div>
      </div>

      <InquiryForm />
    </section>
  );
}

function InquiryForm() {
  return (
    <div className="bg-white dark:bg-background-dark/50 p-8 rounded-xl border border-text-light/10 dark:border-text-dark/10 shadow-lg">
      <h5 className="text-accent text-xs">GET IN TOUCH</h5>
      <h3 className="text-2xl font-bold font-heading mb-6 text-text-light dark:text-text-dark">
        Quick Inquiry
      </h3>
      <form
        name="Inquiry"
        method="POST"
        data-netlify="true"
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="Inquiry" />
        <div>
          <label
            className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            id="name"
            type="text"
            name="name"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              id="phone"
              type="tel"
              name="phone"
            />
          </div>

          <div>
            <label
              className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              id="email"
              type="email"
              name="email"
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
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            id="user-type"
            name="userType"
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
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            id="message"
            rows={4}
            name="message"
          ></textarea>
        </div>

        <button
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-transform hover:scale-105"
          type="submit"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}
export default Approach;
