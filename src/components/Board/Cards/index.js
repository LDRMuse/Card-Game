import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import api from "api"

export const Cards = () => {
  const [cards, setCards] = useState([])



useEffect(() => {
  (async () => {
    setCards(await api.index(4))
  })()
}, [])




return (
  <p>cards</p>
)
}

Cards.propTypes = {
  //start stop timer
  handler: PropTypes.func,
}
