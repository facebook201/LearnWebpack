import React from 'react';
import PropTypes from 'prop-types';
import { Component } from '../../../libs';

export default class Button extends Component {
  onClick(e) {
    this.props.onClick && this.props.onClick(e);
  }

  render() {
    return (
      <button>
      </button>
    )
  }
};

Button.propTypes = {
  onClick: PropTypes.func
};

