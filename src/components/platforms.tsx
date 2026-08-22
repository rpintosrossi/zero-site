export function Platforms({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "text-white/80" : "text-navy/70";
  const line = tone === "dark" ? "border-white/15" : "border-navy/10";

  return (
    <ul className={`flex flex-wrap gap-3 ${color}`}>
      {ITEMS.map((item) => (
        <li
          key={item.name}
          className={`flex items-center gap-3 rounded-full border ${line} px-4 py-2 text-sm`}
        >
          <item.Icon />
          <span>
            <span className={tone === "dark" ? "text-white" : "text-navy"}>
              {item.name}
            </span>
            <span className="ml-2 opacity-60">{item.hint}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

const ITEMS = [
  { name: "Windows", hint: "Escritorio", Icon: WindowsIcon },
  { name: "Web", hint: "Navegador", Icon: WebIcon },
  { name: "App", hint: "iOS y Android", Icon: AppIcon },
] as const;

function WindowsIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
    >
      <rect x="1.5" y="2.5" width="13" height="11" rx="1.4" />
      <path d="M1.5 5.5h13" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M2.5 8h11M8 2.5c1.8 1.8 2.7 3.6 2.7 5.5S9.8 11.7 8 13.5C6.2 11.7 5.3 9.9 5.3 8S6.2 4.3 8 2.5Z" />
    </svg>
  );
}

function AppIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
    >
      <rect x="4.5" y="1.5" width="7" height="13" rx="1.6" />
      <path d="M7 12.4h2" />
    </svg>
  );
}
