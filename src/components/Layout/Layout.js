import React from 'react'
import PropTypes from 'prop-types'
import './Layout.scss'

const Layout = props => <div className="layout">{props.children}</div>

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
}

export default Layout
