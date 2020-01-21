import React from 'react'
import PropTypes from 'prop-types'

const location = ({city}) => {
    return (
        <div>
            <h1>{city}</h1>
        </div>
    )
}

location.propTypes = {
  city: PropTypes.string.isRequired,
}




export default location
