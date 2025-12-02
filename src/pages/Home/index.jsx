import Approach from "./Approach";
import CountriesStrip from "./CountriesStrip";
import Hero from "./Hero";
import WhatsAppIcon from "./WhatsappIcon";
import WhatWeDo from "./WhatWeDo";
import WhyChoose from "./WhyChoose";

export default function Sanmarina() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col max-w-6xl w-full flex-1">
              <main className="px-4 sm:px-8 lg:px-10 py-10 sm:py-16 space-y-16 sm:space-y-24">
                <Hero />
                <WhatWeDo />
                <WhyChoose />
                <CountriesStrip />
                <Approach />
              </main>
            </div>
          </div>
        </div>

        <WhatsAppIcon />
      </div>
    </div>
  );
}
