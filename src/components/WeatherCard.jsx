import WeatherIcon from "./WeatherIcon"
import { mapOpenWeatherIcon } from "../../lib/weatherUtils"

function formatTime(timestamp) {
  if (!timestamp) return "—"
  return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
}

export default function WeatherCard({ weather, loading }) {
  if (loading && !weather) {
    return (
      <article
        className="flex h-[228px] w-[228px] shrink-0 flex-col items-center justify-center rounded-[24px] bg-today p-[18px] text-[#0d0d0d]"
        aria-busy="true"
        aria-label="Loading weather"
      >
        <p className="text-[14px] font-semibold">Loading...</p>
      </article>
    )
  }

  if (!weather) return null

  const day = new Date().toLocaleDateString("en-US", { weekday: "long" })
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
  const temp = Math.round(weather?.main?.temp ?? 0)
  const iconName = mapOpenWeatherIcon(weather?.weather?.[0]?.icon)
  const description = weather?.weather?.[0]?.description ?? ""

  return (
    <article
      className="flex h-[228px] w-[228px] shrink-0 flex-col rounded-[24px] bg-today p-[18px] text-[#0d0d0d]"
      aria-label={`Current weather: ${temp} degrees`}
    >
      <div className="flex items-start justify-between">
        <p className="text-[14px] font-semibold leading-none">{day}</p>
        <p className="text-[12px] leading-none text-[#0d0d0d]/70">{time}</p>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <p className="text-[52px] font-bold leading-none tracking-tight">{temp}°</p>
        <WeatherIcon
          name={iconName}
          className="h-[44px] w-[44px] shrink-0"
          alt={description}
        />
      </div>

      <div className="mt-auto flex justify-between gap-2 text-[10px] leading-[14px] text-[#0d0d0d]/80">
        <div className="space-y-[4px]">
          <p>Real Feel {Math.round(weather?.main?.feels_like ?? 0)}°</p>
          <p>Wind {weather?.wind?.speed ?? "—"} m/s</p>
          <p>Pressure {weather?.main?.pressure ?? "—"} hPa</p>
          <p>Humidity {weather?.main?.humidity ?? "—"}%</p>
        </div>
        <div className="space-y-[4px] text-right">
          <p>Sunrise {formatTime(weather?.sys?.sunrise)}</p>
          <p>Sunset {formatTime(weather?.sys?.sunset)}</p>
        </div>
      </div>
    </article>
  )
}
