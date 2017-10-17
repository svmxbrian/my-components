import React from "react";
import PropTypes from "prop-types";
import "./RegionSidebar.scss";

const closedClass = "sidebar--closed";
const openClass = "sidebar--open";

const propTypes = {
  isOpen: PropTypes.bool,
  fixed: PropTypes.bool,
  children: PropTypes.node
};
const defaultProps = {
  isOpen: false
};

class RegionSidebar extends React.PureComponent {
  state = {
    isOpen: this.props.isOpen
  };

  static defaultProps = defaultProps;
  static propTypes = propTypes;

  static getOpenClass() {
    return openClass;
  }

  static getClosedClass() {
    return closedClass;
  }

  render() {
    return (
      <div className="region-sidebar">
        <div className={this.state.isOpen ? openClass : closedClass}>
          {this.props.children}
        </div>
        <div
          className={
            this.state.isOpen ? "spacer click-to-close" : "spacer click-to-open"
          }
          onClick={() =>
            this.setState({
              isOpen: !this.state.isOpen
            })}
          />
      </div>
    );
  }
}

export default RegionSidebar;
