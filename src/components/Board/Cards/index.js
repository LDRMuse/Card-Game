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
      //duplicate cards, then add unique id
      const cardsWithIDs = cards.concat(Array.from(cards)).map((card, i) => {
        const cardCopy = JSON.parse(JSON.stringify(card))
        cardCopy.id = `${cardCopy.code}-${i}`
        return cardCopy
      })
      setCards(cardsWithIDs)
    })()
  }, [])


  useEffect(() => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.id === (flippedCards[0]?.id || card.id === flippedCards[1]?.id)) {
          card.flipped = true
        }
        return card
      })
    )


    if (flippedCards[0]?.code === flippedCards[1]?.code) {
      cards.map((card) => {
        if (card.id === (flippedCards[0]?.id || card.id === flippedCards[1]?.id)) {
          card.matched = true
          return card
        }

      })
      // setFlippedCards([])
    }
  }, [flippedCards])



  const flipHandler = ({ target: { dataset } }) => {
    if (!flippedCards.length) {
      setFlippedCards((flippedCards) =>
        flippedCards.concat({
          id: dataset.id,
          code: dataset.code,
        })
      )
    } else if (flippedCards[0].id != dataset.id) {
      setFlippedCards((flippedCards) =>
        flippedCards.concat({
          id: dataset.id,
          code: dataset.code,
        })
      )
    }
  }

  const renderCards = () => {
    return cards.map(({ code, id, image, value, suit, flipped, matched }, i) => (
      <Card
        flipped={flipped}
        code={code}
        id={id}
        image={image}
        value={value}
        suit={suit} key={i}
        matched={matched}
        flipHandler={flipHandler}
      />
    ))
  }


  return (
    <div className="container">{renderCards()}</div>
  )
}

Cards.propTypes = {
  //start stop timer
  handler: PropTypes.func,
}
