// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router"; // <-- react-router-dom

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close on Escape and when clicking outside
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClickOutside = (e) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target) && // Click is outside the menu
        buttonRef.current &&
        !buttonRef.current.contains(e.target) // <-- AND click is NOT on the button
      ) {
        setOpen(false);
      }
    };

    const onScrollStart = () => {
      if (open) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);

    if (open) {
      document.addEventListener("wheel", onScrollStart); // For mouse wheel scrolling
      document.addEventListener("touchmove", onScrollStart); // For touch scrolling
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);

      if (open) {
        document.removeEventListener("wheel", onScrollStart);
        document.removeEventListener("touchmove", onScrollStart);
      }
    };
  }, [open]);

  // Lock body scroll while menu is open
  // useEffect(() => {
  //   document.body.style.overflow = open ? "hidden" : "";
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [open]);

  const navClass = ({ isActive }) =>
    `font-display text-sm font-medium hover:text-accent dark:text-text-dark dark:hover:text-secondary ${
      isActive ? "text-primary" : "text-text-light"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white  dark:border-gray-800/50 dark:bg-background-dark/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link to={"/"} onClick={() => setOpen(false)}>
            <div className="h-8 w-8 text-primary dark:text-secondary">
              {/* logo svg */}
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
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
          </Link>

          <div className=" min-w-0 flex-col flex">
            <h2 className="font-display text-xl font-bold text-primary dark:text-white">
              <Link to={"/"} onClick={() => setOpen(false)}>
                Sanmarina
              </Link>
            </h2>
            <p className="text-accent text-xs font-light">
              Guidance Towards Growth
            </p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to={"/"} className={navClass}>
            Home
          </NavLink>
          <NavLink to={"/about"} className={navClass}>
            About
          </NavLink>
          <NavLink to={"/services"} className={navClass}>
            Services
          </NavLink>
          <NavLink to={"/contact"} className={navClass}>
            Contact
          </NavLink>
        </nav>

        {/* Right side - CTA + mobile hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link to={"/contact"}>
              <button
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide transition-transform hover:scale-105 font-display hover:bg-primary/90"
                aria-label="book-consultation"
              >
                <span className="truncate">Book a Consultation</span>
              </button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div ref={buttonRef} className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
            >
              {open ? (
                // X icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-text-light dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-text-light dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (animated) */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`
          md:hidden
          transform-gpu
          transition-all duration-300
          origin-top
          ${
            open
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }
        `}
        aria-hidden={!open}
      >
        <div className="mx-auto max-w-7xl px-6 pb-6">
          <nav className="flex flex-col justify-center items-center gap-3 rounded-b-lg bg-white p-4 shadow-md  dark:bg-background-dark/95 dark:backdrop-blur">
            <NavLink
              to={"/"}
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={navClass}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to={"/services"}
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to={"/contact"}
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>

            <div className="mt-3 flex">
              <Link
                to={"/contact"}
                onClick={() => setOpen(false)}
                className="w-full"
              >
                <button
                  className="w-full rounded-lg bg-primary px-4 py-2 text-center text-sm font-bold text-white transition-transform hover:scale-[1.02] font-display"
                  aria-label="book-consultation-mobile"
                >
                  Book a Consultation
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
