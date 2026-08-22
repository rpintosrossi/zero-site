export function StoreBadges() {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
      <a href="#descargar" aria-label="Descargar en App Store">
        <img
          src="/stores/app-store-black.svg"
          alt="Descargar en App Store"
          className="h-10 w-auto"
        />
      </a>
      <a href="#descargar" aria-label="Disponible en Google Play">
        <img
          src="/stores/google-play.png"
          alt="Disponible en Google Play"
          className="-my-2 h-[58px] w-auto"
        />
      </a>
    </div>
  );
}
