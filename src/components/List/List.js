import React from 'react'
import PropTypes from 'prop-types'

const List = ({ children }) => (
  <ul className="list">
    {children &&
      children.map((child, index) => (
        <li key={index} className="list-item">
          {child}
        </li>
      ))}
  </ul>
)

List.propTypes = {
  children: PropTypes.node
}

export default List
