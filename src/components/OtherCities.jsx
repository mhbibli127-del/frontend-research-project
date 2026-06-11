import WeatherIcon from "./WeatherIcon"
import { cities } from "../data/mockData"

export default function OtherCities() {
  return (
    <section
      className="flex min-h-[280px] w-full flex-col rounded-[24px] bg-card p-4 sm:rounded-[32px] sm:p-[16px] lg:mt-[30px] lg:h-[348px]"
      aria-label="Other cities weather"
    >
      <div className="mb-3 flex items-center justify-between sm:mb-[12px]">
        <h3 className="text-[14px] font-semibold text-white">Other Cities</h3>
        <button type="button" className="text-[12px] text-muted hover:text-white">
          See All
        </button>
      </div>

      <ul className="flex flex-1 flex-col justify-between">
        {cities.map((city, index) => (
          <li
            key={city.name}
            className={`flex items-center justify-between gap-3 py-2 sm:py-[8px] ${
              index !== cities.length - 1 ? "border-b border-white/[0.06]" : ""
            }`}
          >
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.04em] text-muted">{city.country}</p>
              <p className="mt-[3px] truncate text-[14px] font-semibold leading-none text-white">
                {city.name}
              </p>
              <p className="mt-1 text-[12px] text-muted sm:mt-[4px]">{city.condition}</p>
            </div>
            <WeatherIcon name={city.icon} className="h-8 w-8 shrink-0 sm:h-[32px] sm:w-[32px]" alt={city.condition} />
          </li>
        ))}
      </ul>
    </section>
  )
}
