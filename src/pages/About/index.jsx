import Hero from "./Hero";
import Story from "./Story";
import MissionVision from "./MissionVision";
import CoreValues from "./CoreValues";
import CTA from "./CTA";

export default function About() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-neutral-text dark:text-gray-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex flex-1 flex-col items-center">
            <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <Hero />
              <Story />
              <MissionVision />
              <CoreValues />
              <CTA />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
