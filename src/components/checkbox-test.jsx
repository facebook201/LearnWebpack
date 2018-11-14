import React from 'react';

export default class CheckBoxTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  };

  handleChange() {
    
  }

  this.handleChange = this.handleChange.bind(this);

  render() {
    return (
      <div className="shopping-list">
        <label>
          <input
            ref={el => (this.checkbox = el)}
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
            onClick={this.handleClick}
          />
          option
        </label>
        <button onClick={() => this.forceUpdate()}>force update</button>
      </div>
    );
  }
};
