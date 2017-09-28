import React from 'react'
import PropTypes from 'prop-types'
import './Layout.scss'

const sidebarError = `Layout cannot have more than (1) RegionSidebar`
const contentError = `Layout cannot have more than (1) RegionContent`
const contentBeforeSidebarError = `RegionContent should not be earlier sibling than RegionSidebar in Layout`
const notEnoughChildrenError = `Layout element should have at least 2 children`

const checkChildren = children => {
  const sidebars = children.filter(child => child.type.name === 'RegionSidebar')
  const content = children.filter(child => child.type.name === 'RegionContent')
  if (sidebars.length > 1) {
    throw new Error(sidebarError)
  }
  if (content.length > 1) {
    throw new Error(contentError)
  }
  //Check if sidebar comes first; if not, throw error
  let sidebarIndex = -1
  let contentIndex = -1
  for (let i = 0; i < children.length; i++) {
    let child = children[i]
    if (child.type.name === 'RegionSidebar') {
      sidebarIndex = i
    } else if (child.type.name === 'RegionContent') {
      contentIndex = i
    }
  }
  if (contentIndex < sidebarIndex && contentIndex !== -1) {
    throw new Error(contentBeforeSidebarError)
  }
}

const Layout = props => {
  // Check for more than 1 sidebar. If so, throw error
  if (props.children && Array.isArray(props.children)) {
    checkChildren(props.children)
  } else {
    throw new Error(notEnoughChildrenError)
  }

  return <div className="layout">{props.children}</div>
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
export {
  sidebarError,
  contentError,
  contentBeforeSidebarError,
  notEnoughChildrenError
}
