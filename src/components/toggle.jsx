import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick() {
    this.state(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        { this.state.isToggleOn ? 'ON' : 'OFF' }
      </button>
    );
  }
};