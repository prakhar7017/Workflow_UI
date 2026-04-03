const BRAND_PAD = 'pl-3 sm:pl-4 lg:pl-[21px]'

function LogoMark() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="workspace-logo-grad" x1="3" y1="4" x2="21" y2="20">
          <stop offset="0" stopColor="#C4B5FD" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <path
        d="M9.3 8.9 7.1 11a4 4 0 1 0 5.6 5.7l2-2.1M14.7 15.1l2.2-2.1a4 4 0 1 0-5.6-5.7l-2 2.1"
        stroke="url(#workspace-logo-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GlobalSearch() {
  return (
    <label className="relative block w-full">
      <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-white/35">
        <svg
          className="h-3.5 w-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-3.8-3.8" />
        </svg>
      </span>
      <input
        type="search"
        placeholder="Search..."
        className="h-8 w-full rounded-md border border-white/10 bg-[#2B2868] py-0 pl-8 pr-10 text-xs text-white placeholder:text-white/35 outline-none transition-colors duration-150 focus:bg-[#312d74]"
        autoComplete="off"
      />
      <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-medium tracking-wide text-white/45">
        ⌘K
      </span>
    </label>
  )
}

export function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-50 w-full shrink-0 px-2 pt-2">
      <div className="h-[52px] w-full rounded-xl bg-gradient-to-r from-[#1E1B4B] via-[#1D1A4A] to-[#24215E] shadow-[0_4px_16px_rgba(15,23,42,0.22)]">
        <div
          className={`grid h-full w-full grid-cols-[auto_minmax(260px,330px)_auto] items-center gap-2 ${BRAND_PAD} pr-2.5 sm:pr-4 lg:pr-5`}
        >
        <div className="flex min-w-0 items-center gap-2">
          <button
            type="button"
            className="-ml-1 inline-flex h-7 w-7 items-center justify-center rounded-md text-white/90 hover:bg-white/10 lg:hidden"
            onClick={onMenuClick}
            aria-label="Open navigation"
          >
            <svg
              className="h-4.5 w-4.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <LogoMark />
          <span className="hidden whitespace-nowrap text-[15px] font-semibold tracking-tight text-white sm:inline">
            Worcspace
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-md bg-[#2A276A] px-2.5 py-1 text-[12px] font-medium text-white"
          >
            Worcspace 1
            <svg
              className="h-3 w-3 text-white/80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>

        <div className="hidden md:block">
          <GlobalSearch />
        </div>
        <div className="md:hidden" />

        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white/85 hover:bg-white/10 hover:text-white"
            aria-label="Notifications"
          >
            <svg
              className="h-[16px] w-[16px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#4F46E5] text-[9px] font-semibold text-white"
            aria-label="Account"
          >
            GK
          </button>
        </div>
        </div>
      </div>
    </header>
  )
}
