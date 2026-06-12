import { useState, useEffect } from "react"
import { formatForecast, formatRainChart } from "../lib/weatherUtils"
import { getWeatherApiKey, parseWeatherApiError } from "../src/config/weatherApi"

export default function useWeather() {
  const [city, setCity] = useState("Baku")
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [rainChartData, setRainChartData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true)
      setError(null)

      const apiKey = getWeatherApiKey()

      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      )

      if (!currentRes.ok) {
        const message = await parseWeatherApiError(currentRes, "City not found")
        throw new Error(message)
      }

      const currentData = await currentRes.json()

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
      )

      if (!forecastRes.ok) {
        const message = await parseWeatherApiError(forecastRes, "Forecast not available")
        throw new Error(message)
      }

      const forecastData = await forecastRes.json()

      const formattedForecast = formatForecast(forecastData)

      setWeather(currentData)
      setForecast(formattedForecast)
      setRainChartData(formatRainChart(forecastData))
      setCity(cityName)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather(city)
  }, [])

  return {
    weather,
    forecast,
    rainChartData,
    loading,
    error,
    fetchWeather,
  }
}
