function Hero() {
  const bg =
    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCU67IhhIyS2WTvtKiaEAwtsBFdB2ZrzPrOdBwtl209xX52YxEWBhjCDA3wYgOScCEQfkuoZsidanmvDVjq2cXE4XAk9_uObEUgRkH-txxlg4PgIUu3yeGOajHtUOnJUqpC4c42M_qSbbarZDb25z_f5fhYLtbqbyXUEdgChMYJoz5Jn_bOVQtBwBuCPi71D33tKJ84iJEqsXFFh_TMbUq052n2UB9MI5o7TD0NoU6Dibb9HWv_kVaToZzILx_a52eBRbclf0CdZGuo")';

  return (
    <section className="mb-16 md:mb-24">
      <div
        className="relative flex min-h-[480px] flex-col items-start justify-end gap-6 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-8 md:p-12"
        style={{ backgroundImage: bg }}
      >
        <div className="flex max-w-2xl flex-col gap-4 text-left">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Your Journey to Academic Excellence Starts Here.
          </h1>
          <p className="text-base font-normal leading-normal text-white/90 md:text-lg">
            Expert guidance for students in Kerala seeking top-tier education at
            home and abroad.
          </p>
        </div>
        <button
          className="mt-2 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide transition-transform hover:scale-105 font-display"
          aria-label="explore-services"
        >
          <span className="truncate">Explore Our Services</span>
        </button>
      </div>
    </section>
  );
}
export default Hero;
