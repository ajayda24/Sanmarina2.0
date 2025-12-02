import { NavLink, Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-6">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_6_330_footer)">
                    <path
                      clipRule="evenodd"
                      d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_330_footer">
                      <rect fill="white" height="48" width="48"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-xl font-bold font-heading">Sanmarina</h2>
            </div>
            <p className="text-sm text-[#00c8ffd0]">
              Your trusted partner in education.
            </p>
          </div>

          <div>
            <h3 className="font-bold font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <NavLink to={"/about"} className="hover:text-accent">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to={"/services"} className="hover:text-accent">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className="hover:text-accent">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-heading mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">mail</span>
                info@sanmarina.com
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">call</span>
                +91 123 456 7890
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  location_on
                </span>
                Kerala, India
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-heading mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                className="text-white/70 hover:text-accent"
                href="#"
                aria-label="twitter"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.74.85-2.7 1.03A4.5 4.5 0 0016.1 4a4.52 4.52 0 00-4.5 4.5c0 .34.04.67.11 1a12.8 12.8 0 01-9.3-4.72 4.5 4.5 0 001.4 6.02c-.75-.02-1.45-.23-2.08-.57v.06a4.5 4.5 0 003.6 4.41c-.75.2-1.54.23-2.32.09a4.5 4.5 0 004.2 3.13 9 9 0 01-6.52 2.01A9.32 9.32 0 012 20.25a12.75 12.75 0 006.9 2.04c8.28 0 12.81-6.86 12.81-12.81 0-.2 0-.39-.01-.58.88-.63 1.64-1.42 2.25-2.34z" />
                </svg>
              </a>
              <a
                className="text-white/70 hover:text-accent"
                href="#"
                aria-label="facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.2 6.7h-1.4a.5.5 0 00-.5.5v1.1h1.9l-.3 1.9h-1.6v5.8h-2V12.2H9.3V10.3h1.4V9c0-1.4.9-2.2 2.2-2.2h1.3v1.9z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="text-white/70 hover:text-accent"
                href="#"
                aria-label="instagram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-2.7 0-3.03.01-4.09.06-1.06.05-1.79.22-2.42.47-.65.26-1.18.6-1.73 1.15s-.89 1.08-1.15 1.73c-.25.63-.42 1.36-.47 2.42-.05 1.06-.06 1.39-.06 4.09s.01 3.03.06 4.09c.05 1.06.22 1.79.47 2.42.26.65.6 1.18 1.15 1.73s1.08.89 1.73 1.15c.63.25 1.36.42 2.42.47 1.06.05 1.39.06 4.09.06s3.03-.01 4.09-.06c1.06-.05 1.79-.22 2.42-.47.65-.26 1.18-.6 1.73-1.15s.89-1.08 1.15-1.73c.25-.63.42-1.36.47-2.42.05-1.06.06-1.39.06-4.09s-.01-3.03-.06-4.09c-.05-1.06-.22-1.79-.47-2.42-.26-.65-.6-1.18-1.15-1.73s-1.08-.89-1.73-1.15c-.63-.25-1.36-.42-2.42-.47-1.06-.05-1.39-.06-4.09-.06zM12 4c2.65 0 2.96.01 4 .06 1.03.05 1.58.21 1.93.36.45.18.77.4.99.77.22.36.4.78.58 1.23.15.35.31.9.36 1.93.05 1.04.06 1.35.06 4s-.01 2.96-.06 4c-.05 1.03-.21 1.58-.36 1.93-.18.45-.4.77-.77.99-.36.22-.78.4-1.23.58-.35.15-.9.31-1.93.36-1.04.05-1.35.06-4 .06s-2.96-.01-4-.06c-1.03-.05-1.58-.21-1.93-.36-.45-.18-.77-.4-.99-.77-.22-.36-.4-.78-.58-1.23-.15-.35-.31-.9-.36-1.93-.05-1.04-.06-1.35-.06-4s.01-2.96.06-4c.05-1.03.21-1.58.36-1.93.18-.45.4-.77.77-.99.36-.22.78-.4 1.23-.58.35-.15.9-.31 1.93-.36 1.04-.05 1.35-.06 4-.06zM12 7.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm0 8.4a5.2 5.2 0 110-10.4 5.2 5.2 0 010 10.4zm6.5-9.1a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/70">
          © 2024 Sanmarina Educational Consultancy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
