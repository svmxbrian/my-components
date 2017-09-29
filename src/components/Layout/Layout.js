import React from 'react'
import PropTypes from 'prop-types'
import './Layout.scss'

const wrongChildren = `Layout should only contain (1) RegionSidebar and (1) RegionContent components`
const sidebarNotFirstError = `RegionSidebar must be first child in Layout`

const checkChildren = children => {
  //Check that children is array (means more than 1 child)
  if (!children || !Array.isArray(children)) {
    throw new Error(wrongChildren)
  }

  //Check if not have 2 children
  if (children.length !== 2) {
    throw new Error(wrongChildren)
  }

  let firstChild = children[0].type.name
  let secondChild = children[1].type.name

  //Check children order
  if (firstChild === 'RegionContent' && secondChild === 'RegionSidebar') {
    throw new Error(sidebarNotFirstError)
  }

  //Check children types
  if (firstChild !== 'RegionSidebar' || secondChild !== 'RegionContent') {
    throw new Error(wrongChildren)
  }
}

const Layout = props => {
  //Check children passed into component
  if (props) {
    checkChildren(props.children)
  }

  return <div className="layout">{props.children}</div>
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
export { sidebarNotFirstError, wrongChildren }
