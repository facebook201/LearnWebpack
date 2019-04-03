import * as React from 'react';

function isString(str: any) {
  return typeof str === 'string';
}

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { ...otherProp } = this.props;

    return (
      <button {...otherProp}>

      </button>
    );
  }
}
