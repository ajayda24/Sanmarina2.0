function Hero() {
  const bg =
    "linear-gradient(rgba(27, 54, 93, 0.7) 0%, rgba(27, 54, 93, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkA-GhfbjTEI3GNLFfqTnyZSVKnf_t22BQO3FbrK0u7f0A89CbCIdeesVarHFUSjCP-YoS0MIwMxTRBY1UPGCOSNCAhJV4_uO0fEfjQreHNMIk6FNrKmD8AjB6q7h0-K4drA0ANRV3dqUjcB1q0greD5cUgIyELRwPqeiXbEcPtsQ4ieY4FEirKv-ic75KEzTcqnZqXb_tG9w8AYGBOJAddSIBALqb9_Aysorki-KOzk5uxgIiCtWWif7iDdXWxVvF2PlqQtSfJ8Rm')";

  return (
    <section className="@container py-16 md:py-24">
      <div
        className="flex min-h-[400px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 text-center"
        style={{ backgroundImage: bg }}
      >
        <div className="flex flex-col gap-4 max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold font-heading leading-tight tracking-tight">
            Guiding Your Journey to Academic Excellence
          </h1>
          <p className="text-white/90 text-base md:text-lg font-normal leading-relaxed">
            Sanmarina is your trusted partner in navigating the path to higher
            education. We are dedicated to turning your academic aspirations
            into reality.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Hero;
