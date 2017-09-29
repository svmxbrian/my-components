import React from 'react'
import PropTypes from 'prop-types'
import './RegionSidebar.scss'

const closedClass = 'sidebar--closed'
const openClass = 'sidebar--open'

class RegionSidebar extends React.PureComponent {
  state = {
    isOpen: this.props.isOpen || false
  }
  render() {
    return (
      <div className="region-sidebar">
        <div className={this.state.isOpen ? openClass : closedClass}>
          {this.props.children}
        </div>
        <div className="spacer" />
      </div>
    )
  }
}

RegionSidebar.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node
}

export default RegionSidebar
export { closedClass, openClass }
