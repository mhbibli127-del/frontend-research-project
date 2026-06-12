import Navbar from "./components/Navbar"
import Tabs from "./components/Tabs"
import WeatherCard from "./components/WeatherCard"
import ForecastRow from "./components/ForecastRow"
import RainChart from "./components/RainChart"
import OverviewGrid from "./components/OverviewGrid"
import MapBanner from "./components/MapBanner"
import OtherCities from "./components/OtherCities"
import useWeather from "../Hooks/useWeather"
import { buildOverview } from "../lib/weatherUtils"

export default function App() {
  const { weather, forecast, rainChartData, loading, error, fetchWeather } = useWeather()
  const overviewData = buildOverview(weather)

  return (
    <div className="min-h-screen bg-dashboard-bg px-4 py-6 sm:px-6 sm:py-8 lg:px-8 xl:px-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <Navbar fetchWeather={fetchWeather} weather={weather} />

        {error && (
          <p className="mt-4 text-center text-[14px] text-red-400" role="alert">
            {error}
          </p>
        )}

        <Tabs />

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_268px]">
          <div className="min-w-0 lg:col-start-1 lg:row-start-1">
            <div className="flex w-full gap-3 max-lg:overflow-x-auto max-lg:pb-1">
              <WeatherCard weather={weather} loading={loading} />
              <ForecastRow forecast={forecast} loading={loading} />
            </div>
          </div>

          <div className="min-w-0 lg:col-start-2 lg:row-start-1">
            <RainChart data={rainChartData} loading={loading} />
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-[minmax(0,328px)_minmax(0,1fr)] lg:col-start-1 lg:row-start-2">
            <OverviewGrid data={overviewData} loading={loading} />
            <MapBanner />
          </div>

          <div className="min-w-0 lg:col-start-2 lg:row-start-2">
            <OtherCities />
          </div>
        </div>
      </div>
    </div>
  )
}
