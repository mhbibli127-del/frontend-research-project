import { Search, MapPin, LayoutGrid, Bell, Moon } from "lucide-react"
import { images, location } from "../data/mockData"

function SearchField({ className = "" }) {
  return (
    <label className={`relative block w-full ${className}`}>
      <span className="sr-only">Search city</span>
      <Search
        className="pointer-events-none absolute left-[18px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted"
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <input
        type="search"
        placeholder="Search City"
        aria-label="Search city"
        className="h-11 w-full rounded-full bg-card pl-[46px] pr-5 text-[14px] text-white outline-none placeholder:text-muted sm:h-[44px]"
      />
    </label>
  )
}

function NavActions() {
  return (
    <>
      <button
        type="button"
        aria-label="Dashboard menu"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card text-white/90 sm:h-[44px] sm:w-[44px]"
      >
        <LayoutGrid className="h-[18px] w-[18px]" strokeWidth={1.75} />
      </button>

      <button
        type="button"
        aria-label="Notifications"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card text-white/90 sm:h-[44px] sm:w-[44px]"
      >
        <Bell className="h-[18px] w-[18px]" strokeWidth={1.75} />
      </button>
    </>
  )
}

function NavLocation() {
  return (
    <div className="ml-1 hidden items-center gap-2 lg:flex">
      <MapPin className="h-[15px] w-[15px] text-muted" strokeWidth={1.75} aria-hidden="true" />
      <p className="whitespace-nowrap text-[14px] font-medium text-white">
        {location.city}, {location.country}
      </p>
    </div>
  )
}

function NavRight() {
  return (
    <div className="flex shrink-0 items-center gap-3 sm:gap-[14px]">
      <div
        className="relative h-7 w-[52px] rounded-full bg-card-soft"
        role="switch"
        aria-checked="true"
        aria-label="Dark mode enabled"
      >
        <div className="absolute right-0.5 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent">
          <Moon className="h-3.5 w-3.5 text-white" strokeWidth={2} />
        </div>
      </div>

      <img
        src={images.avatar}
        alt="User profile"
        className="h-10 w-10 rounded-full object-cover sm:h-[44px] sm:w-[44px]"
      />
    </div>
  )
}

export default function Navbar() {
  return (
    <header className="flex flex-col gap-4">
      {/* Desktop: search mx-auto = equal left/right margin; nav floats on sides */}
      <div className="relative hidden min-h-[44px] w-full md:block">
        <div className="absolute left-0 top-1/2 z-10 flex -translate-y-1/2 items-center gap-[10px]">
          <NavActions />
          <NavLocation />
        </div>

        <SearchField className="mx-auto w-full max-w-[480px]" />

        <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
          <NavRight />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex min-h-11 items-center justify-between md:hidden">
        <div className="flex items-center gap-[10px]">
          <NavActions />
        </div>
        <NavRight />
      </div>

      <SearchField className="md:hidden" />

      <p className="flex items-center gap-2 text-[14px] font-medium text-white lg:hidden">
        <MapPin className="h-[15px] w-[15px] text-muted" strokeWidth={1.75} aria-hidden="true" />
        {location.city}, {location.country}
      </p>
    </header>
  )
}
