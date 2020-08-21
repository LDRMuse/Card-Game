import React, { useState, Fragment } from 'react'
import { HighScores } from 'components/HighScores'

export const GameOver = () => {
  const [initials, setInitials] = useState('')





  return (
    <Fragment>
    <form onChange={e => setInitials(e.target.value)}>
      <label htmlFor="initial">Enter your Initials</label><br />
      <input type="text" id="initial" name="fname"></input><br />
      <button>Enter</button>
    </form>


      <HighScores initials={initials} />


</Fragment>
  )

}
