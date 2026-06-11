import sunnyCloudy from "../assets/weather/sunny-cloudy.png"
import rainy from "../assets/weather/rainy.png"
import rainySunny from "../assets/weather/rainy-sunny.png"
import sunnyStorm from "../assets/weather/sunny-storm.png"
import rainyThunder from "../assets/weather/rainy-thunder.png"
import windy from "../assets/weather/windy.png"

export const iconColors = {
  sunny: "text-[#ffb800]",
  cloudy: "text-white/85",
  rain: "text-[#4a90e2]",
  "partly-cloudy": "text-[#ffb800]",
  wind: "text-[#4a90e2]",
  humidity: "text-[#4a90e2]",
  visibility: "text-white/70",
}

export const weatherIconImages = {
  sunny: sunnyCloudy,
  rain: rainy,
  cloudy: rainySunny,
  "partly-cloudy": sunnyStorm,
  storm: rainyThunder,
  windy: windy,
  wind: windy,
}

export function getIconColor(name) {
  return iconColors[name] ?? "text-white/80"
}

export function getWeatherIconImage(name) {
  return weatherIconImages[name] ?? null
}
