import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './theme/input.styl';

export default class RInput extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    showClear: PropTypes.bool
  };

  static defaultProps = {
    disabled: false,
    readOnly: false,
    prefix: 'r',
    type: 'text',
    autoFocus: false,
    autoSelect: false,
    showClear: false
  };

  focus() {
    console.log(this.input);
    this.input.focus();
  }

  render() {
    const {
      disabled,
      readOnly,
      className,
      prefix,
      type,
      value,
      placeholder,
      showClear
    } = this.props;
    
    const editable = !(disabled || readOnly);

    const wrapClass = classNames({
      [`${prefix}-input-wrapper`]: true,
      [`${prefix}-input-wrapper__disable`]: !editable
    });
    
    return (
      <div className={wrapClass}>
        <input
          type={type}
          ref={input => { this.RInput = input }}
          className={`${prefix}-input`}
          placeholder={placeholder}
          value={value}
          onKeyDown={this.handleKeyDown} />

          {
            showClear &&
            value && (
              <Icon type="close-circle" />
            )
          }
      </div>
    );
  };
};

