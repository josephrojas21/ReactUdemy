import React, { Component } from 'react'
import { api_weather } from './../../constants/api_url'
import { CircularProgress } from "@material-ui/core";
import Location from './location'
import WeatherData from './WeatherData'
import './styles.css'
import transformWheater from './../../services/transformWheater'


class wheaterLocation extends Component {

    constructor(props) {
        super(props);
        this.state ={
            city: "Barcelona",
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

export default wheaterLocation
