import WeatherIcon from "./WeatherIcon"

export default function WeatherCard({ data }) {
  if (!data) return null

  return (
    <article
      className="flex h-[228px] w-[228px] shrink-0 flex-col rounded-[24px] bg-today p-[18px] text-[#0d0d0d]"
      aria-label={`Current weather: ${data.temp} degrees`}
    >
      <div className="flex items-start justify-between">
        <p className="text-[14px] font-semibold leading-none">{data.day}</p>
        <p className="text-[12px] leading-none text-[#0d0d0d]/70">{data.time}</p>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <p className="text-[52px] font-bold leading-none tracking-tight">{data.temp}°</p>
        <WeatherIcon name="sunny" className="h-[44px] w-[44px] shrink-0" alt="Friday weather" />
      </div>

      <div className="mt-auto flex justify-between gap-2 text-[10px] leading-[14px] text-[#0d0d0d]/80">
        <div className="space-y-[4px]">
          <p>Real Feel {data.realFeel}°</p>
          <p>Wind {data.wind}</p>
          <p>Pressure {data.pressure}</p>
          <p>Humidity {data.humidity}</p>
        </div>
        <div className="space-y-[4px] text-right">
          <p>Sunrise {data.sunrise}</p>
          <p>Sunset {data.sunset}</p>
        </div>
      </div>
    </article>
  )
}
