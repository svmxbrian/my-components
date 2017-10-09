import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ children }) => <li className="list-item">{children}</li>

ListItem.propTypes = {
  children: PropTypes.node
}

export default ListItem
