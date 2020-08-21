import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

export const HighScores = ({ time }) => {
  const [scores] = useState([
    {
      initials: 'MH',
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





  return (
    <Fragment>
      <h2>High Scores!!</h2>
      <table>
        <tr>
          <th>Initials</th>
          <th>Time</th>
        </tr>
        <tr>
          <td>{renderTableRows()}</td>
          <td>{time}</td>
        </tr>
      </table>
    </Fragment>


  )
}


HighScores.propTypes = {
  time: PropTypes.number
}
