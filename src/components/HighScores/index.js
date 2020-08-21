import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

export const HighScores = ({ time, initials }) => {
  const [scores] = useState([
    {
      initials: '',
    }
  ])


  const renderTableRows = () =>
    scores.map(({ initials }, i) => {
      return (
        <tr key={i}>
          <td>{initials}</td>
        </tr>
      )
    })


//TODO: figure out how to pass the correct state to highscores or create highscores own state


  return (
    <Fragment>
      <h2>High Scores!!</h2>
      <table>
        <tr>
          <th>Initials</th>
          <th>Time</th>
        </tr>
        <tr>
          <td>{initials}</td>
          <td>{time}</td>
        </tr>
      </table>
    </Fragment>


  )
}


HighScores.propTypes = {
  time: PropTypes.number,
  initials: PropTypes.string,
}
