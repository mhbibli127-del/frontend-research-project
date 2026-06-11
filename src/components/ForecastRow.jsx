import ForecastCard from "./ForecastCard"
import { weeklyForecast } from "../data/mockData"

export default function ForecastRow({ data = weeklyForecast }) {
  return (
    <section
      className="flex min-w-0 flex-1 gap-3 max-lg:w-max max-lg:flex-none max-lg:overflow-x-auto max-lg:pb-1"
      aria-label="Weekly forecast"
    >
      {data.map((item) => (
        <ForecastCard key={item.day} {...item} />
      ))}
    </section>
  )
}
