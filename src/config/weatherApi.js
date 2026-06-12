export const WEATHER_API_KEY = import.meta.env.OPEN_WEATHER_API_KEY

export function getWeatherApiKey() {
  if (!WEATHER_API_KEY) {
    throw new Error(
      "Missing API key. Add OPEN_WEATHER_API_KEY to your .env file and restart the dev server."
    )
  }
  return WEATHER_API_KEY
}

export async function parseWeatherApiError(response, fallback) {
  try {
    const data = await response.json()
    if (data?.message) return data.message
  } catch {
    // response body was not JSON
  }
  return fallback
}
