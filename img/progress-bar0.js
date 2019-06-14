import React, { Component } from 'react';
import './progress-bar.css';

const Node = () => {
  return(
    <span>Node</span>
  );
}

class ProgressBar extends Component {

  renderNode(i) {
    return <Node />;
  }

  render() {
    return(
      <div>
      </div>
    );
  }
}

export default ProgressBar;
