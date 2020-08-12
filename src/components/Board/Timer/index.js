import React from 'react'
import PropTypes from 'prop-types'

export const Timer = ({ toggle }) => {



  return (
    <p>Timer - {toggle}</p>
  )


}


Timer.propTypes = {
  toggle: PropTypes.bool.isRequired,
}

Timer.defaultProps = {
  toggle: false
}
