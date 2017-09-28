import React from 'react'
import PropTypes from 'prop-types'
import './RegionSidebar.scss'

class Sidebar extends React.PureComponent {
  state = {
    isOpen: this.props.isOpen || false
  }
  render() {
    return (
      <div className="region-sidebar">
        <div
          className={this.state.isOpen ? 'sidebar--open' : 'sidebar--closed'}
          >
          {this.props.children}
        </div>
        <div className="spacer" />
      </div>
    )
  }
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node
}

export default Sidebar
