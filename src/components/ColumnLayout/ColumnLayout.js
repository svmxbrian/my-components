// @flow
import React from 'react';
import './ColumnLayout.scss';

const ColumnLayout = () => (
  <div className="column-layout">
    <div className="top-border" />
    <div className="header" />
    <div className="line" />
    <div className="content">
      <div className="left">
        {this.props && this.props.left}
      </div>
      <div className="spacer" />
      <div className="right">
        {this.props && this.props.right}
      </div>
    </div>
  </div>
);

export default ColumnLayout;
