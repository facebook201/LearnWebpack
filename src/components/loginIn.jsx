import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }


  render() {
    const loginIn = this.state.isLogin;
    return (
      <div>
        {
          loginIn ? (
            <comonentA />
          ) : (
            <componentB />
          )
        }
      </div>
    );
  };
};

