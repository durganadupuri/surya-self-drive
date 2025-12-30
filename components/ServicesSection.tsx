export default function ServicesSection() {
  const services = [
    {
      title: "Luxury & Budget Cars",
      text: "Handpicked cars for every plan premium comfort or budget-friendly trips.",
      number: "01",
    },
    {
      title: "5-Seater & 7-Seater Vehicles",
      text: "Options for couples, families, and groups—choose the right size for your ride.",
      number: "02",
    },
    {
      title: "Flexible Rental Packages",
      text: "Weekday and weekend packages with easy coordination for pickup and drop.",
      number: "03",
    },
    {
      title: "Event & Photography Rentals",
      text: "Premium vehicles for celebrations, weddings, and professional shoots.",
      number: "04",
    },
  ];

  return (
    <section className="relative pt-[120px]">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="https://laravel-gorent.mnsithub.com/assets/images/shapes/section-title-tagline-shape-1.png"
              alt=""
              className="h-4"
            />
            <span className="text-[14px] font-semibold uppercase tracking-wide text-[#FFB51D]">
              What We’re Offering
            </span>
          </div>

          <h2 className="text-[42px] leading-[52px] font-extrabold text-[#]">
            A clean, professional self-drive experience
            <br />
            for city rides, trips, events, and shoots.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative rounded-[20px] bg-surface px-6 pt-8 pb-10 overflow-hidden border border-border/60 shadow-[0_18px_45px_-28px_rgba(0,0,0,0.9)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_28px_65px_-35px_rgba(250,204,21,0.35)]"
            >
              {/* Horizontal bar growing from center outward on hover */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="absolute h-full w-0 bg-accent opacity-0 transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-100" />
              </div>

              {/* Number */}
              <div className="absolute -right-[3%] top-1/2 z-10 -translate-y-1/2 overflow-hidden rounded-2xl bg-foreground px-3 py-1.5 text-lg font-black text-background shadow-lg transition-colors duration-500 group-hover:bg-accent-foreground flex items-center justify-center" style={{ width: '60px', height: '58px' }}>
                <div className="relative flex h-full w-full items-center justify-center">
                  <span className="relative z-10 block transition-colors duration-500 group-hover:text-accent">
                    {service.number}
                  </span>
                  <div className="absolute inset-y-0 right-0 w-0 bg-accent-foreground transition-all duration-500 ease-out group-hover:w-full" />
                </div>
              </div>

              {/* Icon placeholder */}
              <div className="mb-6">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="h-6 w-6 bg-accent rounded-sm" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-accent mb-3 transition-colors duration-500 text-[#FFB51D] group-hover:text-[#0a0a0a] group-hover:opacity-80">
                {service.title}
              </h3>

              {/* Text */}
              <p className="text-sm text-muted-foreground leading-6 transition-colors duration-500 text-[#a1a1aa] group-hover:text-[#0a0a0a] group-hover:opacity-80">
                {service.text}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[8px] w-full bg-accent transition-colors duration-500 group-hover:bg-accent-foreground" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
