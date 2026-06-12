export function mapOpenWeatherIcon(iconCode) {
  if (!iconCode) return "partly-cloudy"
  if (iconCode.startsWith("11")) return "storm"
  if (iconCode.startsWith("09") || iconCode.startsWith("10")) return "rain"
  if (iconCode.startsWith("13")) return "cloudy"
  if (iconCode.startsWith("50")) return "cloudy"
  if (iconCode.startsWith("01")) return "sunny"
  if (iconCode.startsWith("02")) return "partly-cloudy"
  if (iconCode.startsWith("03") || iconCode.startsWith("04")) return "cloudy"
  return "partly-cloudy"
}

export function formatForecast(forecastData) {
  if (!forecastData?.list?.length) return []

  const seen = new Set()
  const result = []

  for (const item of forecastData.list) {
    const date = new Date(item.dt * 1000)
    const dayKey = date.toDateString()
    if (seen.has(dayKey)) continue
    seen.add(dayKey)

    result.push({
      day: date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase().slice(0, 3),
      temp: Math.round(item.main?.temp ?? 0),
      icon: mapOpenWeatherIcon(item.weather?.[0]?.icon),
    })

    if (result.length >= 6) break
  }

  return result
}

export function formatRainChart(forecastData) {
  if (!forecastData?.list?.length) return []

  return forecastData.list.slice(0, 6).map((item) => {
    const date = new Date(item.dt * 1000)
    return {
      time: date
        .toLocaleTimeString("en-US", { hour: "numeric", hour12: true })
        .replace(/\s/g, ""),
      value: Math.round((item.pop ?? 0) * 100),
    }
  })
}

export function buildOverview(weather) {
  if (!weather) return []

  const visibilityKm = weather.visibility
    ? (weather.visibility / 1000).toFixed(1)
    : "—"

  return [
    {
      type: "wind",
      title: "Wind Status",
      value: weather.wind?.speed != null ? weather.wind.speed.toFixed(2) : "—",
      unit: "m/s",
      sub: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
    },
    {
      type: "uv",
      title: "UV Index",
      value: "—",
      unit: "UV",
    },
    {
      type: "humidity",
      title: "Humidity",
      value: `${weather.main?.humidity ?? "—"}%`,
      sub: weather.weather?.[0]?.description ?? "",
    },
    {
      type: "visibility",
      title: "Visibility",
      value: visibilityKm,
      unit: "km",
      sub: weather.weather?.[0]?.description ?? "",
    },
  ]
}

export const formatWeatherData = (data) => ({
  temp: Math.round(data.main.temp),
  feelsLike: Math.round(data.main.feels_like),
  humidity: data.main.humidity,
  windSpeed: data.wind.speed,
  windDirection: data.wind.deg,
  pressure: data.main.pressure,
  visibility: data.main.visibility,
  sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
  sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
  condition: data.weather[0].main,
  icon: data.weather[0].icon,
})
