const MAIL = "info@zeroit.com.ar";
const WHATSAPP_DISPLAY = "11 7817-2346";
const WHATSAPP_HREF = "https://wa.me/5491178172346";

export function ContactShortcut() {
  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-[100] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <a
        href={`mailto:${MAIL}`}
        aria-label={`Enviar mail a ${MAIL}`}
        className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue text-white shadow-[0_10px_28px_rgb(6_104_237/0.45)] ring-2 ring-white/90 transition-transform hover:scale-105"
        title={MAIL}
      >
        <MailIcon />
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}
        className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgb(37_211_102/0.45)] ring-2 ring-white/90 transition-transform hover:scale-105"
        title={WHATSAPP_DISPLAY}
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

function MailIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <rect x="1.5" y="3.5" width="13" height="9" rx="1" />
      <path d="m2.2 4.2 5.8 4.6 5.8-4.6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2.05c-5.46 0-9.9 4.43-9.9 9.9 0 1.74.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.23h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01a9.82 9.82 0 0 0-7.01-2.89Zm0 18.07h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.4c0-4.53 3.69-8.21 8.22-8.21 2.2 0 4.26.85 5.81 2.4a8.16 8.16 0 0 1 2.41 5.81c0 4.53-3.69 8.26-8.2 8.26Zm4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.2 3.7.59.25 1.04.41 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.67-1.17.21-.58.21-1.07.14-1.17-.06-.11-.23-.18-.48-.3Z" />
    </svg>
  );
}
