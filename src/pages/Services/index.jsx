import Hero from "./Hero";
import ServicesSection from "./ServiceCard";

export default function Services() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-body text-text-light dark:text-text-dark min-h-screen">
      <main className="flex flex-1 flex-col items-center">
        <div className="w-full max-w-7xl px-6 py-12 md:py-20">
          <Hero />
          <ServicesSection />
        </div>
      </main>
    </div>
  );
}
