import React from 'React';

export default class Popper extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'zhangsan'
    };
  }

  preventPop(name, e) {
    e.preventDefault();
    console.log(name);
  }

  render() {
    return (
      <div>
        <a href="https://reactjs.org" onClick={this.preventPop.bind(this, this.state.name)}>Click</a>
      </div>
    );
  }
};