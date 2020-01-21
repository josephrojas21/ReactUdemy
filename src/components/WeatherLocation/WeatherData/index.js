import React from 'react'
import WeatherExtraInfo from './weatherExtraInfo'
import WeatherTemperature from './weatherTemperature'
import './styles.css';
//import PropTypes from 'prop-types'

import {
    CLOUDY
} from '../../../constants/weathers'


const weatherData = () => {
    return (
        <div className="weatherDataCont">
            <WeatherTemperature 
            temperature={20}
            weatherState={CLOUDY}/>
            <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
        </div>
    )
}

export default weatherData
