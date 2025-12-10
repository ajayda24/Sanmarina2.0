import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";
import { SOCIAL_LINKS } from "../../utils/constants";

function ContactInfo() {
  return (
    <div
      className="flex flex-col gap-6 p-6 sm:p-8 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800"
      style={{
        backgroundImage:
          "linear-gradient(-145deg, rgba(0, 201, 255, 0), rgba(0, 201, 255, 0.08) 100%)",
      }}
    >
      <div className="flex items-center gap-4 mt-6">
        <div className="text-primary dark:text-accent flex items-center justify-center rounded-lg bg-primary/10 dark:bg-accent/10 shrink-0 size-12">
          <span className="material-symbols-outlined">location_on</span>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-gray-800 dark:text-gray-100 text-base font-medium leading-normal">
            Office Address
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
            Mangalakatt Building, CWRDM Bypass Road, <br /> Iringadanpalli,
            Chevayoor P.O., Calicut - 673017
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
            +91 8590252808
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
            info@sanmarinaoverseas.com
          </p>
        </div>
      </div>

      <div className="w-full border-t border-gray-200 dark:border-gray-800" />
      <div>
        <a href="https://wa.me/918590252808" target="_blank">
          <button
            className="p-2 w-full flex items-center justify-center gap-3 rounded-lg px-6 bg-green-500 text-white font-bold text-base hover:bg-green-600 transition-colors"
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
        </a>
      </div>

      <div className="flex items-center justify-center gap-8 pt-4">
        <a
          className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"
          href={SOCIAL_LINKS.facebook}
          aria-label="facebook"
          target="_blank"
        >
          <FaFacebook size={32} />
        </a>
        <a
          className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"
          href={SOCIAL_LINKS.linkedin}
          aria-label="linkedin"
          target="_blank"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"
          href={SOCIAL_LINKS.youtube}
          aria-label="youtube"
          target="_blank"
        >
          <FaYoutube size={32} />
        </a>
        <a
          className="text-gray-500 hover:text-accent transition-colors"
          href={SOCIAL_LINKS.instagram}
          aria-label="instagram"
          target="_blank"
        >
          <FaInstagram size={32} />
        </a>
      </div>
    </div>
  );
}
export default ContactInfo;
