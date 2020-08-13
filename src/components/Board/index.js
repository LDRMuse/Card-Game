import React, { useState } from 'react'
import { Cards } from './Cards'
import { Timer } from './Timer'



export const Board = () => {
  const [toggleTimer, setToggleTimer] = useState(false)
  // setting timer to false means timer off
  // const [gameOver, setGameOver] = useState('')

  const handleCards = (toggle) => {
    setToggleTimer(toggle)
  }


  return (
    <main>
      <Cards handler={handleCards} />
      <Timer toggle={toggleTimer} />
    </main>
  )
}
