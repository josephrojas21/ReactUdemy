import React from 'react'
import WeatherLocation from './WeatherLocation/index'
import PropTypes from 'prop-types'

const LocationList = props => {
    return (
        <div>
            <WeatherLocation city="Bogota,col"/>
            <WeatherLocation city="Buenos Aires,ar"/>
            <WeatherLocation city="Mexico,mex"/>
            <WeatherLocation city="New York,us"/>
            <WeatherLocation city="Barcelona,es"/>


        </div>
    )
}

LocationList.propTypes = {

}

export default LocationList
