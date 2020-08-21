import React, {useState, useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import { HighScores } from 'components/HighScores'

export const Timer = ({ toggle }) => {
  const [time, setTime] = useState(0)

  // const convertSecondsToMinutesAndSeconds = (secs) => new Date(secs * 1000).toISOString().substring(14, 19)


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

// Make a function to pass the time somewhere else instead of highscores?
const passTime = () => {

  // when timer stops, ass that time somewhere
}


  return (
    <Fragment>
    <p>{time}</p>
    <HighScores time={time}/>
    </Fragment>
  )


}


Timer.propTypes = {
  toggle: PropTypes.bool.isRequired,
}

Timer.defaultProps = {
  toggle: false
}
