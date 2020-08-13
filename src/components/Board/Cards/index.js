import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import { Card } from "./Card"

import api from "api"

import "./Cards.css"

export const Cards = ({ handler }) => {
  const [cards, setCards] = useState([])

  useEffect(
    () => {
      ; (async () => {
        const { cards } = await api.index(4)

        // Duplicate the cards and then add unique id to each one (⚠️ 'references')
        const cardsWithIDs = cards.concat(Array.from(cards)).map((card, i) => {
          // We can do the 'spread' 'shallow copy' for these non-nested objects
          const cardCopy = { ...card }
          cardCopy.id = `${cardCopy.code}-${i}`
          return cardCopy
        })

        setCards(cardsWithIDs)
      })()
    },
    []
  )








  // if matchedCards.length = cards.length / 2, then stop the timer
  const flipHandler = ({ currentTarget: { dataset } }) => {

    handler(true)
    // get the code and id from dataset
    const { id, code } = dataset
    // filter out flipped cards
    const flippedCards = cards.filter(({ flipped }) => flipped)
    // check if any cards are currently flipped

    if (flippedCards.length < 2) {
      setCards(truthifyCards('id', 'flipped', id))

      // if codes of the currently flipped card and the dataset match
      if (flippedCards[0]?.code === code) {
        setCards(truthifyCards('code', 'matched', code))
        setCards(
          cards.map((card) => {
            card.flipped = false
            return card
      })
        )
    }}
    if (flippedCards[0]) {
      setTimeout(() => {
        //reset the cards
        setCards(
          cards.map((card) => {
            card.flipped = false
            return card
          })
        )
      }, 2000)
    }
  }


  const truthifyCards = (key2Locate, key2Change, value2Match) => {
    return cards.map((card) => {
      if (card[key2Locate] === value2Match) {
        card[key2Change] = true
      }
      return card
    })
  }


  const renderCards = () =>
    // 'suit' and 'value' are just for alt tag
    cards.map(({ code, flipped, matched, id, image, suit, value }, i) => {
      return (
        <Card
          code={code}
          flipped={flipped}
          id={id}
          image={image}
          matched={matched}
          suit={suit}
          value={value}
          handler={flipHandler}
          key={i}
        />
      )
    })

  return <div className="container">{renderCards()}</div>
}

Cards.propTypes = {
  // Notify parent of when to start and stop the timer
  handler: PropTypes.func,
}
