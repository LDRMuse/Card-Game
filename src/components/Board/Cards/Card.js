import React from 'react'
import PropTypes from 'prop-types'


export const Card = ({image, value, suit, flipped, matched}) => {


return (
<img src={image} alt={`${value} of ${suit}`}/>
)

}

Card.propTypes = {
  flipped: PropTypes.bool,
  matched: PropTypes.bool,
  image: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  suit: PropTypes.string.isRequired,
}

Card.defaultProps = {
  flipped: false,
  matched: false,
}
