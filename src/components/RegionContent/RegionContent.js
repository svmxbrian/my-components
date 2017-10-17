import React from "react";
import PropTypes from "prop-types";
import "./RegionContent.scss";

const propTypes = {
  children: PropTypes.node
};

const RegionContent = props => (
  <div className="region-content">{props.children}</div>
);

RegionContent.propTypes = propTypes;

export default RegionContent;
