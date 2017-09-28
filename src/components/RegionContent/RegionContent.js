import React from 'react'
import PropTypes from 'prop-types'
import './RegionContent.scss'

const RegionContent = props => (
  <div className="region-content">{props.children}</div>
)

RegionContent.propTypes = {
  children: PropTypes.node
}

export default RegionContent
