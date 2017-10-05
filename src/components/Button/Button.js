import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => (
  <input class="button" type="button" onClick={onClick} value={text} />
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
