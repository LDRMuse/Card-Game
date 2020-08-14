import React, { useState, Fragment, useEffect } from 'react'
import { Cards } from './Cards'
import { Timer } from './Timer'
import api from 'api'




export const Board = () => {
  const [toggleTimer, setToggleTimer] = useState(false)
  const [cardPairs, setCardPairs] = useState([])


  // create new state to add up to 4 pairs of cards

// use useEffect to grab 16 cards, or 4 pairs of cards and set that to the cardPairs state

useEffect(() => {
  (async () => {
    const decks = await api.index(16)
    setCardPairs(decks)
  })()

}, [cardPairs])


  // const [gameOver, setGameOver] = useState('')
  // Add another component in the 'parent'('board' / 'concentration') such that we can specify how many card pairs we want.Then,
  //   fetch
  // appropriate number of cards.

  //   It’s the same FETCH for the cards.‘Concentration’ game, but now user gets to pick how many cards they want.
  //     So, u just need to get that info on a ‘form submission’ and parent will pass that down to ‘cards.’ Currently, we ✍️ 4 cards.We need to draw however many user asks for.









  const handleCards = (toggle) => {
    setToggleTimer(toggle)
  }


  return (
    // create a drop down form to let user choose ho many pairs they want to play with
    <Fragment>
      <p>How many pairs would you like to play with?</p>
      <form type="submit">
        <label htmlFor="cards">Choose a pair amount:</label>
        <select name="cards">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input type="submit" value="Submit"/>
        </form>

        <Cards handler={handleCards} />
        <Timer toggle={toggleTimer} />

    </Fragment>
  )
}
