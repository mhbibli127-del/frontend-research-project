import ForecastCard from "./ForecastCard"

export default function ForecastRow({ forecast, loading }) {
  if (loading && !forecast?.length) {
    return (
      <section
        className="flex min-w-0 flex-1 items-center justify-center rounded-[24px] bg-card px-4 py-[20px] text-[14px] text-muted max-lg:w-max max-lg:flex-none"
        aria-busy="true"
        aria-label="Loading weekly forecast"
      >
        Loading...
      </section>
    )
  }

  if (!forecast?.length) return null

  return (
    <section
      className="flex min-w-0 flex-1 gap-3 max-lg:w-max max-lg:flex-none max-lg:overflow-x-auto max-lg:pb-1"
      aria-label="Weekly forecast"
    >
      {forecast.map((item) => (
        <ForecastCard key={item.day} {...item} />
      ))}
    </section>
  )
}
