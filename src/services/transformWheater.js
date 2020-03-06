import convert from 'convert-units'
import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from './../constants/weathers'

const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(2))
}

const getWeatherState = weather => {
    const { id } = weather;
    
    // eslint-disable-next-line no-unused-expressions
    id < 300 ? THUNDER : id <400 ? DRIZZLE : id < 600 ? RAIN : id < 700 ? SNOW : id === 800 ? SUN : CLOUD
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature =  getTemp(temp);

    const data ={
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }

    return data
}

export default transformWeather
