import React from 'react'
import PropTypes from 'prop-types'


export const Card = ({
  code,
  flipHandler,
  flipped,
  id,
  image,
  matched,
  suit,
  value,
}) => {



  return (
    <button onClick={flipHandler} data-id={id} data-code={code}>
      <img
        src={flipped ? image : "https://source.unsplash.com/random/226x314"}
        alt={`${value} of ${suit}`}
        className={matched ? 'matched' : null}
      />
    </button>
  )
}

Card.propTypes = {
  code: PropTypes.string,
  flipHandler: PropTypes.func,
  flipped: PropTypes.bool,
  id: PropTypes.string,
  image: PropTypes.string.isRequired,
  matched: PropTypes.bool,
  suit: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

Card.defaultProps = {
  flipped: false,
  matched: false,
}
