import WeatherIcon from "./WeatherIcon"

export default function ForecastCard({ day, temp, icon }) {
  return (
    <article
      className="flex h-[228px] w-[72px] min-w-[64px] shrink-0 flex-col items-center justify-between rounded-[24px] bg-card px-1 py-[20px] lg:min-w-0 lg:flex-1 lg:w-auto"
      aria-label={`${day} forecast: ${temp} degrees`}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.05em] text-muted">{day}</p>
      <WeatherIcon name={icon} className="h-[38px] w-[38px]" alt={`${day} weather`} />
      <p className="text-[22px] font-bold leading-none text-white">{temp}°</p>
    </article>
  )
}
