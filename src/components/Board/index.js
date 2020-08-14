import React, { useState, Fragment } from 'react'
import { Cards } from './Cards'
import { Timer } from './Timer'

export const Board = () => {
  const [toggleTimer, setToggleTimer] = useState(false) // set timer to off before game starts
  const [cardPairs, setCardPairs] = useState(0)   // create new state to add up to 4 pairs of cards
  const [gameOver, setGameOver] = useState(false)



  const handleSelect = ({ target: { value } }) => {
    console.log('hi')
    setCardPairs(Number(value))
  }



  const handleCards = (toggle) => {
    setToggleTimer(toggle)
    if(toggle === false) {
      setGameOver(true)
    }
  }


  return (
    // create a drop down form to let user choose ho many pairs they want to play with
    <Fragment>
      <select name="cards" onChange={handleSelect}>
        <option value="">Pairs</option>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="12">12</option>
      </select>
      {gameOver && <p>GAME OVER</p>}
      <Cards cardPairs={cardPairs} handler={handleCards} />
      <Timer toggle={toggleTimer} />
    </Fragment>
  )
}
