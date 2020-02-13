import React from 'react'
import PropTypes from 'prop-types'
import './styles.css';

const weatherExtraInfo = ({humidity, wind}) => {
    return (
        <div className="weatherExtraInfoCont">
            <span className="ExtraInfoText">{`Humedad: ${humidity} % - `}</span>
            <span className="ExtraInfoText">{`Vientos: ${wind}`}</span>
        </div>
    )
}

weatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

export default weatherExtraInfo
