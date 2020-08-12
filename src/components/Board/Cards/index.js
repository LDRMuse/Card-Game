import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import api from "api"
import './Cards.css'
import { Card } from './Card'



export const Cards = ({ handler, cards }) => {
  // This will just manage flipped and matched cards
  const [flippedCards, setFlippedCards] = useState([])



  // useEffect(() => {
  //   setCards((prevCards) =>
  //     prevCards.map((card) => {
  //       if (card.id === (flippedCards[0]?.id || card.id === flippedCards[1]?.id)) {
  //         card.flipped = true
  //       }
  //       return card
  //     })
  //   )


  //   if (flippedCards[0]?.code === flippedCards[1]?.code) {
  //     cards.map((card) => {
  //       if (card.id === (flippedCards[0]?.id || card.id === flippedCards[1]?.id)) {
  //         card.matched = true
  //         return card
  //       }

  //     })
  //     // setFlippedCards([])
  //   }
  // }, [flippedCards])



  const flipHandler = ({ target: { dataset } }) => {
    if (!flippedCards.length) {
      setFlippedCards((flippedCards) =>
        flippedCards.concat({
          id: dataset.id,
          code: dataset.code,
        })
      )
    } else if (flippedCards[0].id !== dataset.id) {
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
        code={code}
        flipHandler={flipHandler}
        flipped={flipped}
        id={id}
        image={image}
        matched={matched}
        suit={suit} key={i}
        value={value}
      />
    ))
  }


  return (
    <div className="container">{renderCards()}</div>
  )
}

Cards.propTypes = {
  //start stop timer
  cards: PropTypes.array.isRequired,
  handler: PropTypes.func,
}
