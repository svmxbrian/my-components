import React from 'react'
import PropTypes from 'prop-types'

class Input extends React.PureComponent {
  constructor({ value }) {
    super()
    this.state = {
      value: value || ''
    }
  }

  render() {
    return (
      <input
        type="text"
        className="input"
        value={this.state.value}
        onChange={event => {
          this.setState({
            value: event.target.value
          })
        }}
        />
    )
  }
}

Input.propTypes = {
  value: PropTypes.string
}

export default Input
