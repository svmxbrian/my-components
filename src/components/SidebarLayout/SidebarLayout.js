import React from "react";
import PropTypes from "prop-types";
import "./SidebarLayout.scss";

const propTypes = {
  children: PropTypes.node
};

const SidebarLayout = props => (
  <div className="sidebar-layout">{props.children}</div>
);

SidebarLayout.propTypes = propTypes;

export default SidebarLayout;
