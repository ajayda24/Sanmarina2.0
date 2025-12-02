import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
                <p className="text-primary dark:text-accent text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Get in Touch
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-base lg:text-lg font-normal leading-normal mt-3 max-w-2xl">
                  We're here to help you achieve your academic goals. Reach out
                  to us today and let's start your journey to success together.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <ContactInfo />
                <ContactForm />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
