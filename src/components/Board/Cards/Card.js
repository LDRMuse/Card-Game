import React from 'react'
import PropTypes from 'prop-types'


export const Card = ({image, value, suit, flipped, matched, flipHandler}) => {



return (
<img src={flipped ? image : "https://source.unsplash.com/random/226x314"} alt={`${value} of ${suit}`} onClick={flipHandler}/>

)

}

Card.propTypes = {
  flipped: PropTypes.bool,
  matched: PropTypes.bool,
  image: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  suit: PropTypes.string.isRequired,
  flipHandler: PropTypes.func,
}

Card.defaultProps = {
  flipped: false,
  matched: false,
}
