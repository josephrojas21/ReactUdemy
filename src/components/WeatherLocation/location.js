import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'

const location = ({city}) => {
    return (
        <div className="locationCont">
            <h1>{city}</h1>
        </div>
    )
}

location.propTypes = {
  city: PropTypes.string.isRequired,
}




export default location
