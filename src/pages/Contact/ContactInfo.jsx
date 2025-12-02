function ContactInfo() {
  return (
    <div className="flex flex-col gap-6 p-6 sm:p-8 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-4">
        <div className="text-primary dark:text-accent flex items-center justify-center rounded-lg bg-primary/10 dark:bg-accent/10 shrink-0 size-12">
          <span className="material-symbols-outlined">location_on</span>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-gray-800 dark:text-gray-100 text-base font-medium leading-normal">
            Office Address
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
            123 Education Lane, Knowledge City, Kerala, India 682001
          </p>
        </div>
      </div>

      <div className="w-full border-t border-gray-200 dark:border-gray-800" />

      <div className="flex items-center gap-4">
        <div className="text-primary dark:text-accent flex items-center justify-center rounded-lg bg-primary/10 dark:bg-accent/10 shrink-0 size-12">
          <span className="material-symbols-outlined">call</span>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-gray-800 dark:text-gray-100 text-base font-medium leading-normal">
            Phone Number
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
            +91 987 654 3210
          </p>
        </div>
      </div>

      <div className="w-full border-t border-gray-200 dark:border-gray-800" />

      <div className="flex items-center gap-4">
        <div className="text-primary dark:text-accent flex items-center justify-center rounded-lg bg-primary/10 dark:bg-accent/10 shrink-0 size-12">
          <span className="material-symbols-outlined">mail</span>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-gray-800 dark:text-gray-100 text-base font-medium leading-normal">
            Email Address
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
            contact@sanmarina.edu
          </p>
        </div>
      </div>

      <div className="w-full border-t border-gray-200 dark:border-gray-800" />

      <button
        className="w-full flex items-center justify-center gap-3 rounded-lg h-12 px-6 bg-green-500 text-white font-bold text-base hover:bg-green-600 transition-colors"
        aria-label="whatsapp-chat"
      >
        <svg
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.472 5.378 5.442-1.42z" />
        </svg>
        <span>Chat with us on WhatsApp</span>
      </button>

      <div className="flex items-center justify-center gap-6 pt-4">
        <a
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
          href="#"
          aria-label="linkedin"
        >
          <svg
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
        <a
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
          href="#"
          aria-label="facebook"
        >
          <svg
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
          href="#"
          aria-label="instagram"
        >
          <svg
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.06..." />
          </svg>
        </a>
      </div>
    </div>
  );
}
export default ContactInfo;
