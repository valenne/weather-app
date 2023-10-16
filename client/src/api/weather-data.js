import { parameterEnv } from '../config/prod-config.js'

export const weatherData = async city => {
  try {
    const response = await fetch(parameterEnv.urlApi(city))
    const data = await response.json()
    return data
  } catch (e) {
    throw new Error(`Bad request react:fetch`)
  }
}
