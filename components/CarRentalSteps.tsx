import { Car, PhoneCall, MapPin, Smile } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Choose A Car",
    description:
      "Open multiply a green form lesser their from in made herb multiply",
    icon: Car,
  },
  {
    step: "02",
    title: "Come In Contact",
    description:
      "Open multiply a green form lesser their from in made herb multiply",
    icon: PhoneCall,
  },
  {
    step: "03",
    title: "Pick-Up Locations",
    description:
      "Open multiply a green form lesser their from in made herb multiply",
    icon: MapPin,
  },
  {
    step: "04",
    title: "Enjoy Driving",
    description:
      "Open multiply a green form lesser their from in made herb multiply",
    icon: Smile,
  },
];

export default function CarRentalSteps() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      {/* Header */}
      <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="https://laravel-gorent.mnsithub.com/assets/images/shapes/section-title-tagline-shape-1.png"
              alt=""
              className="h-4"
            />
            <span className="text-[14px] font-semibold uppercase tracking-wide text-[#FFB51D]">
              steps
            </span>
          </div>

        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
          CAR RENTAL PROCESS
        </h2>
      </div>

      {/* Steps */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="relative rounded-3xl bg-gradient-to-br from-[#0f1220] to-[#1a1f35] p-6 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-black">
                <Icon className="h-6 w-6" />
              </div>

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div className="absolute right-6 top-8 hidden lg:block">
                  <span className="text-gray-500">→</span>
                </div>
              )}

              {/* Step Number */}
              <div className="absolute right-6 top-6 text-4xl font-bold text-white/10">
                {item.step}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-orange-400">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
