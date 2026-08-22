import { Platforms } from "@/components/platforms";
import { RubroCycle } from "@/components/rubro-cycle";

const STATS = [
  { value: "+200", label: "Comercios" },
  { value: "30 años", label: "De experiencia" },
  { value: "1 a 1", label: "Atención personalizada" },
  { value: "24/7", label: "Soporte técnico" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy text-white">
      <video
        className="absolute inset-0 h-full w-full scale-105 object-cover brightness-[0.75] saturate-50"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/poster.jpg"
        aria-hidden
      >
        <source src="/videos/tecnologia.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between py-7">
          <img
            src="/brand/zero_wordmark_white.svg"
            alt="ZERO"
            className="h-6 w-auto"
          />
          <a
            href="#contacto"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            Contacto
          </a>
        </header>

        <div className="flex flex-1 flex-col justify-center py-16">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/45">
            Sistemas de gestión
          </p>
          <RubroCycle />
          <p className="mt-7 max-w-md text-[17px] leading-7 text-white/70">
            30 años de experiencia. Atención personalizada. Soporte técnico
            24/7.
          </p>
          <p className="mt-8 text-sm text-white/50">
            El mismo sistema en Windows, en la web o en la app.
          </p>
          <div className="mt-4">
            <Platforms />
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-8 border-t border-white/10 py-8 sm:grid-cols-4">
          {STATS.map((item) => (
            <li key={item.label}>
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-white/45">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
