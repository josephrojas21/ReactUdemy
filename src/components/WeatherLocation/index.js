import React from 'react'
import Location from './location'
import WeatherData from './WeatherData'
//import PropTypes from 'prop-types'

const wheaterLocation = () => {
    return (
        <div>
            <Location city={"Medellin"}/>
            <WeatherData/>
        </div>
    )
}

export default wheaterLocation
