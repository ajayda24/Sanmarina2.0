function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-sm dark:border-gray-800/50 dark:bg-background-dark/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="size-8 text-primary dark:text-secondary">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6_330)">
                <path
                  clipRule="evenodd"
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_330">
                  <rect fill="white" height="48" width="48" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="font-display text-xl font-bold text-primary dark:text-white">
            Sanmarina
          </h2>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            className="font-display text-sm font-medium text-text-light hover:text-primary dark:text-text-dark dark:hover:text-secondary"
            href="#"
          >
            Home
          </a>
          <a
            className="font-display text-sm font-medium text-text-light hover:text-primary dark:text-text-dark dark:hover:text-secondary"
            href="#"
          >
            About
          </a>
          <a
            className="font-display text-sm font-medium text-primary dark:text-secondary"
            href="#"
          >
            Services
          </a>
          <a
            className="font-display text-sm font-medium text-text-light hover:text-primary dark:text-text-dark dark:hover:text-secondary"
            href="#"
          >
            Contact
          </a>
        </nav>

        <button
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide transition-transform hover:scale-105 font-display"
          aria-label="book-consultation"
        >
          <span className="truncate">Book a Consultation</span>
        </button>
      </div>
    </header>
  );
}
export default Navbar;
