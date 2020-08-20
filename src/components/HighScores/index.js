import React, {useState, Fragment} from 'react'

export const HighScores = () => {
const [scores] = useState([
  {
    initials: 'MH',
    time: '1:11',
    numOfCards: 24,
  }
])


const renderTableRows = () =>
  scores.map(({initials, time, numOfCards}, i) => {
    return (
      <tr key={i}>
      <td>{initials}</td>
      <td>{time}</td>
      <td>{numOfCards}</td>
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
    <th>Cards</th>
  </tr>
{renderTableRows()}
</table>
</Fragment>


)
}
