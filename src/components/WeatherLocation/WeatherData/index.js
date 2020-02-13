import React from 'react'
import WeatherExtraInfo from './weatherExtraInfo'
import WeatherTemperature from './weatherTemperature'
import './styles.css';
import PropTypes from 'prop-types';



const weatherData = ({data: {temperature, weatherState, humidity, wind}}) => {

    return (
        <div className="weatherDataCont">
            <WeatherTemperature 
            temperature={temperature}
            weatherState={weatherState}/>
            <WeatherExtraInfo humidity={humidity} wind={wind}/>
        </div>
    );
}

weatherData.protoTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default weatherData
