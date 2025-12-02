function ServiceCard({ title, desc, img, cta }) {
  return (
    <div
      className="flex flex-col rounded-xl bg-white shadow-lg transition-shadow hover:shadow-2xl dark:bg-slate-800"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0, 201, 255, 0), rgba(0, 201, 255, 0.15) 120%)",
      }}
    >
      <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 bg-secondary/20" />
        <img className="h-full w-full object-cover" src={img} alt={title} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-primary dark:text-secondary">
          {title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-text-light/90 dark:text-text-dark/90">
          {desc}
        </p>
        <ul className="mt-4 flex-1 space-y-2">
          {/* Placeholder: the original HTML had three list items per card. Keep flexible. */}
        </ul>
        <button className="mt-6 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white text-primary text-sm font-bold transition-colors hover:bg-[#00abdbcd] hover:text-white dark:bg-secondary/20 dark:text-secondary dark:hover:bg-secondary dark:hover:text-primary font-display">
          {cta}
        </button>
      </div>
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Domestic Admissions",
      desc: "Guiding you to the best universities and colleges across India. Our experts simplify the complex admissions process, helping you secure a spot at your dream institution.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL76XLytRkxXlaXWYkNS-OEgu6wfm6vL-ecn9Hq-bawpMmS9-Z1_XZs7BqlqFZPueouqeA2CLE_vGlms4ZP8auV9ktkZ3yPS-NO7aYJmqsUmwdF0mGgtBwUMv5-wfZXir2DqsvdCAoWPQ9l0BxJldfy1z7fKjRkS095c6b-QdhfBBLR6fAn5NRA239_FI1VG1xwaJqdo65WvNgqYUzNh4gbE5jNUJVV-59pZIr4cspnCztBZ-uR-2xQKRdlcss4CSViRpNber8jTJd",
      cta: "View Details",
    },
    {
      title: "Study Abroad",
      desc: "Navigate the journey of international university applications with confidence. We provide complete support, from choosing a country to securing your student visa.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTPqGInzcnDNYlsVBTt1Xm70Nzwd26VIn0IwUnd7XjpjsK-VcTayH5eCTPAnD5HhVRWdO476A8o4ODrtEGOzYH1Gx6MCBrcf0NCFZpVA_8QvNRodGulzEn3we87810n8uSH44dgavrbDAe0WIZCAUtiyqW8vuhCniELcfXme7HcaCyVUI33f-dhzWKLLL7Msj4SvYVYv2BlTO0wxMbR2HDLuyVNv6dtmpIxU9hmap9tzvtgIAZh0uIPbho7IqqMUplYvIOKtrzUao4",
      cta: "Learn More",
    },
    {
      title: "Career Counselling",
      desc: "Receive personalized career guidance to discover your potential and align your academic choices with your professional goals for a successful future.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA_X-yk-2wuK6u8cgPSYGi-zSZiLfUs0txHUuQEJK7ACTrKV5ryIILCndDllGvtQEBPnTcknnTOurMPvqhX7m1bmTOinFo9Uuaq3HWqtmWnZcyrByZja3coCxpiwHOkFm6rYlY1TVkhdEnM8XWXdlBwb-7q3OC8gJHTOKfbjD99ogc63CcjvhE9_PMLAlRPCrQYlQrD1v6PZRAo1fHVkzSDIuZl6W81lkB48TpNNAn-C_nsprt8IYhJUL2H9QoTwXPJZYA6GQ-uWzV",
      cta: "Discover Your Path",
    },
  ];

  return (
    <section>
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-primary dark:text-white md:text-4xl">
          Our Services
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}
export default ServicesSection;
