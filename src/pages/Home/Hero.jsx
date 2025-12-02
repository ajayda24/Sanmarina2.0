function Hero() {
  const bg =
    "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJKdY1VOKQvY7P6vZ0s2u7iU1U_Ua-ZRBjmi7RhFLvATZeaXbdtevUhB_JKDe1Kk_zb_Oq8eJK42Pl1kKJ1-hsASrLBcll14tILfElUOkI-Ap10YndGrTT7qRG9XWntQHUdfznY_Nd3f41BAc2peHryFdYGLMwjx-JeK2s1mc706m70z3ZQ8ybDHdYoROx1Kj_r6muNLfV7U6SaDB0-LAuvijnWFHxiI337Yre_L2jPYtsOW34PMXXtKAUgRy59U1Vc8zCAAcZwPF8')";

  return (
    <section
      className="relative flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-10 sm:px-10"
      data-alt="A focused student sitting in a modern university library"
      style={{ backgroundImage: bg }}
    >
      <div className="flex flex-col gap-4 text-left max-w-3xl">
        <h1 className="text-white text-4xl sm:text-5xl font-black font-heading leading-tight tracking-[-0.033em]">
          Best Educational Consultancy in
          <span className="text-accent text-4xl sm:text-5xl"> Calicut</span>
        </h1>
        <p className="text-white/90 text-base sm:text-lg font-normal leading-normal">
          Helping students choose the right colleges and courses with clarity
          and genuine support.
        </p>
      </div>

      <div className="flex-wrap gap-3 flex">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
          Book Free Counseling
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-background-light dark:bg-background-dark/80 text-text-light dark:text-text-dark text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
          Ask About Courses
        </button>
      </div>
    </section>
  );
}
export default Hero;
