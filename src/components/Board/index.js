import React, { useState, Fragment, useEffect } from 'react'
import { Cards } from './Cards'
import { Timer } from './Timer'
import api from 'api'




export const Board = () => {
  const [toggleTimer, setToggleTimer] = useState(false) // set timer to off before game starts
  const [cardPair, setCardPair] = useState(0)   // create new state to add up to 4 pairs of cards
  // const [gameOver, setGameOver] = useState('')


  // use useEffect to grab 16 cards, or 4 pairs of cards and set that to the cardPairs state
  // useEffect(() => {
  //   (async () => {
  //     const decks = await api.index(16)
  //     setCardPairs(decks)
  //   })()

  // }, [cardPairs])


  //TODO :
  // need to figure out how to pass the amount of cards down to the cards component and then load # of pairs/cards once user chooses how many they want.
  // like how to use this to display the amount of pairs the user wants to play with
  const handleSelect = (event) => {

    // how to grab the value of options on the event of selecting
    // how to set the option to cardPair state
    const cardOption = event.target.value

    console.log(cardOption)


  }



  const handleCards = (toggle) => {
    setToggleTimer(toggle)
  }


  return (
    // create a drop down form to let user choose ho many pairs they want to play with
    <Fragment>
      <p>How many pairs would you like to play with?</p>
      <form onSelect={handleSelect()}>
        <label htmlFor="cards">Choose a pair amount:</label>
        <select name="cards">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input type="submit" value="Submit" />
      </form>

      <Cards handler={handleCards} />
      <Timer toggle={toggleTimer} />

    </Fragment>
  )
}
