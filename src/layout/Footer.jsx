import { NavLink, Link } from "react-router";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-primary text-white mt-2">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-start gap-4">
              <Link to={"/"}>
                <img
                  src="/icons/Sanmarina-Full-White.png"
                  alt="Logo Title"
                  width={150}
                />
              </Link>
            </div>
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
                info@sanmarinaoverseas.com
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">call</span>
                +91 8590252808
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  location_on
                </span>
                Mangalakatt Building, Chevayur PO, Calicut – 673017
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-heading mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                className="text-white/70 hover:text-accent"
                href="#"
                aria-label="linkedin"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                className="text-white/70 hover:text-accent"
                href="#"
                aria-label="youtube"
              >
                <FaYoutube size={24} />
              </a>
              <a
                className="text-white/70 hover:text-accent"
                href="#"
                aria-label="instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/70">
          © 2025 Sanmarina Educational Consultancy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
