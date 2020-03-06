import React, { Component } from 'react'
import { CircularProgress } from "@material-ui/core";
import Location from './location'
import getUrlWeatherbyCity from './../../services/getUrlWeather'
import WeatherData from './WeatherData'
import './styles.css'
import transformWheater from './../../services/transformWheater'
import PropTypes from 'prop-types'



class wheaterLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;

        this.state ={
            city,
            data: null
        }      
        console.log('constructor');
        
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.handleUpdateClick();
        
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        
    }


    handleUpdateClick = () =>{
        const api_weather = getUrlWeatherbyCity(this.state.city)
        fetch(api_weather).then( res =>{
            return res.json()
        }).then(data =>{
            const newWeather = transformWheater(data)
            console.log(newWeather);
            this.setState({
                data: newWeather
            })         
        })
    }

    render() {
        console.log('render');
        
        const {city, data } = this.state
        return (
            <div className="weatherLocationCont">
            <Location city={city}/>
            {data ? <WeatherData data={data}/> : <CircularProgress size={50}/>}
        </div>
        )
    }
}

wheaterLocation.propTypes ={
    city: PropTypes.string.isRequired,
}

export default wheaterLocation
