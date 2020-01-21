import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weathers'


const icons = {
    [CLOUD]:  "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"

}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState]
    return icon ? <WeatherIcons name={icon} size="2x" /> :
    <WeatherIcons name={"day-sunny"} size="2x" />
}

const weatherTemperature = ({temperature, weatherState}) => {
    return (
        <div className="weatherTemperatureCont" >
            {getWeatherIcon(weatherState)}
            <span>{ `${temperature} cº`}</span>
        </div>
    )
}


weatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default weatherTemperature
