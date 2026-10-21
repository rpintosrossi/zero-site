"use client";

import { FormEvent, useState } from "react";
import { RUBROS } from "@/lib/rubros";

const field =
  "w-full rounded-md border border-navy/10 bg-white px-3.5 py-2.5 text-[15px] text-navy outline-none transition-colors placeholder:text-navy/30 focus:border-blue";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") ?? "").trim();
    const comercio = String(data.get("comercio") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const mail = String(data.get("mail") ?? "").trim();
    const rubro = String(data.get("rubro") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();

    const lines = [
      `Nombre: ${nombre}`,
      comercio && `Comercio: ${comercio}`,
      `Teléfono: ${telefono}`,
      `Mail: ${mail}`,
      rubro && `Rubro: ${rubro}`,
      mensaje && `Mensaje: ${mensaje}`,
    ].filter(Boolean);

    const subject = encodeURIComponent(
      comercio ? `Contacto — ${comercio}` : `Contacto — ${nombre}`,
    );
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:info@zeroit.com.ar?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="text-[17px] leading-7 text-navy/70">
        Gracias. Si no se abrió el correo, escribinos a{" "}
        <a href="mailto:info@zeroit.com.ar" className="text-blue">
          info@zeroit.com.ar
        </a>
        .
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="block">
        <span className="mb-1.5 block text-sm text-navy/55">Nombre</span>
        <input
          name="nombre"
          type="text"
          required
          autoComplete="name"
          className={field}
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm text-navy/55">Comercio</span>
        <input
          name="comercio"
          type="text"
          autoComplete="organization"
          className={field}
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm text-navy/55">Teléfono</span>
        <input
          name="telefono"
          type="tel"
          required
          autoComplete="tel"
          className={field}
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm text-navy/55">Mail</span>
        <input
          name="mail"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-sm text-navy/55">Rubro</span>
        <select name="rubro" defaultValue="" className={field}>
          <option value="" disabled>
            Elegí el rubro
          </option>
          {RUBROS.map((rubro) => (
            <option key={rubro} value={rubro}>
              {rubro}
            </option>
          ))}
          <option value="Otro">Otro</option>
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-sm text-navy/55">Mensaje</span>
        <textarea
          name="mensaje"
          rows={4}
          className={`${field} resize-y`}
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="mt-1 bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy/90"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
