import { ContactForm } from "@/components/contact-form";
import { Platforms } from "@/components/platforms";
import { StoreBadges } from "@/components/store-badges";

export function Contact() {
  return (
    <section id="contacto" className="bg-mist">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16 lg:py-24">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Hablá con nosotros
          </h2>
          <p className="mt-3 max-w-sm text-[17px] leading-7 text-navy/55">
            Pasamos por el local. Te mostramos el sistema en Windows, en la web
            o en el celular.
          </p>
          <div id="descargar" className="mt-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-navy/40">
              Descargá la app
            </p>
            <div className="mt-5">
              <StoreBadges />
            </div>
            <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.22em] text-navy/40">
              También en
            </p>
            <div className="mt-4">
              <Platforms tone="light" />
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
