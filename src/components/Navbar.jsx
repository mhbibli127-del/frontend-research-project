
"use client";

import { useState } from "react";
import { Search, MapPin, LayoutGrid, Bell, Moon } from "lucide-react";
import { images } from "../data/assets";

function SearchField({ className = "", fetchWeather }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (!input) return;
    fetchWeather(input);
  };

  return (
    <label className={`relative block w-full ${className}`}>
      <span className="sr-only">Search city</span>

      <Search
        onClick={handleSearch}
        className="cursor-pointer absolute left-[18px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted"
      />

      <input
        type="search"
        placeholder="Search City"
        className="h-11 w-full rounded-full bg-card pl-[46px] pr-5 text-[14px] text-white outline-none placeholder:text-muted"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
    </label>
  );
}

function NavActions() {
  return (
    <>
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-card">
        <LayoutGrid className="h-[18px] w-[18px]" />
      </button>

      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-card">
        <Bell className="h-[18px] w-[18px]" />
      </button>
    </>
  );
}

function NavLocation({ weather }) {
  const city = weather?.name ?? "Baku"
  const country = weather?.sys?.country ?? ""

  return (
    <div className="ml-1 hidden items-center gap-2 lg:flex">
      <MapPin className="h-[15px] w-[15px] text-muted" />
      <p className="text-[14px] text-white">
        {city}{country ? `, ${country}` : ""}
      </p>
    </div>
  );
}

function NavRight() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-7 w-[52px] rounded-full bg-card-soft">
        <div className="absolute right-0.5 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent">
          <Moon className="h-3.5 w-3.5 text-white" />
        </div>
      </div>

      <img
        src={images.avatar}
        alt="avatar"
        className="h-10 w-10 rounded-full object-cover"
      />
    </div>
  );
}

export default function Navbar({ fetchWeather, weather }) {
  const city = weather?.name ?? "Baku"
  const country = weather?.sys?.country ?? ""

  return (
    <header className="flex flex-col gap-4">

      {/* Desktop */}
      <div className="relative hidden min-h-[44px] w-full md:block">

        <div className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-[10px]">
          <NavActions />
          <NavLocation weather={weather} />
        </div>

        <SearchField
          className="mx-auto w-full max-w-[480px]"
          fetchWeather={fetchWeather}
        />

        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <NavRight />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex items-center justify-between md:hidden">
        <NavActions />
        <NavRight />
      </div>

      <SearchField fetchWeather={fetchWeather} className="md:hidden" />

      <p className="flex items-center gap-2 text-[14px] text-white lg:hidden">
        <MapPin className="h-[15px] w-[15px] text-muted" />
        {city}{country ? `, ${country}` : ""}
      </p>
    </header>
  );
}
