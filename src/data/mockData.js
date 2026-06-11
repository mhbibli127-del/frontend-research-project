import mapBannerImg from "../assets/images/map-banner.png"
import humidityIcon from "../assets/overview/humidity.png"
import visibilityIcon from "../assets/overview/visibility.png"
import uvIndexIcon from "../assets/overview/uv-index.png"

export const location = {
  city: "Dhaka",
  country: "Bangladesh",
}

export const images = {
  mapBanner: mapBannerImg,
  avatar:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80&q=80",
  humidity: humidityIcon,
  visibility: visibilityIcon,
  uvIndex: uvIndexIcon,
}

export const weatherToday = {
  day: "Friday",
  time: "11:45 AM",
  temp: 16,
  realFeel: 18,
  wind: "N-E. 6-7km/h",
  pressure: "100MB",
  humidity: "51%",
  sunrise: "5:30AM",
  sunset: "6:45",
}

export const weeklyForecast = [
  { day: "SAT", temp: 10, icon: "rain" },
  { day: "SUN", temp: 15, icon: "sunny" },
  { day: "MON", temp: 11, icon: "cloudy" },
  { day: "TUE", temp: 10, icon: "partly-cloudy" },
  { day: "WED", temp: 12, icon: "storm" },
  { day: "THU", temp: 10, icon: "windy" },
]

export const rainChartData = [
  { time: "10AM", value: 35 },
  { time: "11AM", value: 48 },
  { time: "12PM", value: 62 },
  { time: "01PM", value: 55 },
  { time: "02PM", value: 78 },
  { time: "03PM", value: 42 },
]

export const overviewToday = [
  { type: "wind", title: "Wind Status", value: "7.50", unit: "km/h", sub: "6.20 AM" },
  { type: "uv", title: "UV Index", value: "5.50", unit: "UV" },
  {
    type: "humidity",
    title: "Humidity",
    value: "84%",
    sub: "The dew point is 27° right now.",
  },
  {
    type: "visibility",
    title: "Visibility",
    value: "04",
    unit: "km",
    sub: "Haze is affecting visibility.",
  },
]

export const cities = [
  { country: "China", name: "Beijing", condition: "Cloudy", icon: "rain" },
  { country: "US", name: "California", condition: "Windly", icon: "wind" },
  { country: "Dubai", name: "Arab Emirates", condition: "Mostly Sunny", icon: "sunny" },
  {
    country: "Canada",
    name: "Charlottetown",
    condition: "Light SnowShower",
    icon: "partly-cloudy",
  },
]
