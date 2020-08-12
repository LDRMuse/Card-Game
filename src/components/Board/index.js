import React, {useEffect, useState} from 'react'
import {Cards} from './Cards'
import {Timer} from './Timer'
import api from 'api'



export const Board = () => {
  const [cards, setCards] = useState([])
  const [toggleTimer, setToggleTimer] = useState()


  useEffect(() => {
    (async () => {
      const { cards } = await api.index(4)

      //duplicate cards, then add unique id
      const cardsWithIDs = cards.concat(Array.from(cards)).map((card, i) => {
        // spread ... shallow copy technique for non nested objects
        const cardCopy = {...card}
        cardCopy.id = `${cardCopy.code}-${i}`
        return cardCopy
      })
      setCards(cardsWithIDs)
    })()
  },
  [])


const handleCards = (toggle) => {
setToggleTimer(toggle)
}


  return (
    <main>
    <Cards cards={cards} handler={handleCards}/>
    <Timer toggle={toggleTimer}/>
    </main>
  )
}
