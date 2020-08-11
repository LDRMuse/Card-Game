import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types'

import api from "api"

import './Cards.css'

import { Card } from './Card'

export const Cards = ({ handler }) => {
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])



  useEffect(() => {
    (async () => {
      const { cards } = await api.index(4)
      //duplicate cards
      const dupeCards = cards.concat(Array.from(cards))
      // assign id using code and index
      setCards(dupeCards)
    })()
  }, [])


  const renderCards = () => {
    return cards.map(({ image, value, suit }, i) => (
    <Card
    image={image}
    value={value}
    suit={suit} key={i}
    flipHandler={flipHandler}
    />
    ))
  }

  const flipHandler = (event) => {
    console.log(event.target)
  }

  return (
    <div className="container">{renderCards()}</div>
  )
}

Cards.propTypes = {
  //start stop timer
  handler: PropTypes.func,
}
