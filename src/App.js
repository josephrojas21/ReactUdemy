import React, { Component } from 'react'
import './App.css'
import WheaterLocation from './components/WeatherLocation'
import PropTypes from 'prop-types'


class App extends Component {
  render() {
    return (
      <div className="App">
        <WheaterLocation/>
      </div>
    )
  }
}


export default App;
