import React, { Component } from 'react';

class SomeThings extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        my name is {name}
      </div>
    );
  }
}

export default SomeThings;