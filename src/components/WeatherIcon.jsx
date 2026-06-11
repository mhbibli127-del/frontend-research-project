import {
  Sun,
  Cloud,
  CloudRain,
  CloudSun,
  Wind,
  Droplets,
  Eye,
} from "lucide-react"
import { getIconColor, getWeatherIconImage } from "../utils/iconConfig"

const iconMap = {
  sunny: Sun,
  cloudy: Cloud,
  rain: CloudRain,
  "partly-cloudy": CloudSun,
  wind: Wind,
  humidity: Droplets,
  visibility: Eye,
}

export default function WeatherIcon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.75,
  alt = "",
}) {
  const imageSrc = getWeatherIconImage(name)

  if (imageSrc) {
    return (
      <img
        src={imageSrc}
        alt={alt || `${name} weather`}
        className={`${className} object-contain`}
        draggable={false}
      />
    )
  }

  const Icon = iconMap[name] ?? CloudSun
  return (
    <Icon
      className={`${getIconColor(name)} ${className}`}
      strokeWidth={strokeWidth}
      aria-hidden="true"
    />
  )
}
