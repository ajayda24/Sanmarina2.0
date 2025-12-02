function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up form submission (API, email, or integration)
    alert("Message submitted (form handler not implemented)");
  }

  return (
    <div className="flex flex-col gap-6 p-6 sm:p-8 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        Send us a Message
      </h3>
      <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
        <div>
          <label
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@example.com"
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Inquiry about Services"
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Your message here..."
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white font-bold text-base hover:bg-opacity-90 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
export default ContactForm;
