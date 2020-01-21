import React from 'react'
import PropTypes from 'prop-types'
import './styles.css';

const weatherExtraInfo = ({humidity, wind}) => {
    return (
        <div className="weatherExtraInfoCont">
            <span>{`${humidity} % - `}</span>
            <span>{`${wind} viento`}</span>
        </div>
    )
}

weatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
}

export default weatherExtraInfo
