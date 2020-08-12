import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

export const Timer = ({ toggle }) => {
  const [time, setTime] = useState(0)

  const convertSecondsToMinutesAndSeconds = (secs) => new Date(secs * 1000).toISOString().substring(14, 19)

/**
  * Given a 'string date,' get the age in years.
  * @param {string} d - 'string date' like from 'date input'
  * @returns {number}
 */
function getAgeFromDate(d) {
  return Math.floor((new Date() - new Date(d)) * 3.17098e-11));
}

useEffect(() => {
  while(toggle) {
    const intervalID = setInterval(() => {
      setTime((time) => time + 1)
    }, 1000)
    return () => {
      clearInterval(intervalID)
    }
  }
})

  return (
    <p>{convertSecondsToMinutesAndSeconds(){time}}</p>
  )


}


Timer.propTypes = {
  toggle: PropTypes.bool.isRequired,
}

Timer.defaultProps = {
  toggle: false
}
