import React, { Component } from 'react';
import './switch.less';

interface SwitchProps {
  checked: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default class Switch extends Component<SwitchProps> {
  render() {
    const { checked, onChange } = this.props;
    return (
      <div className={'sy-ui-switch'}>
        <input
          checked={checked}
          onChange={onChange}
          id={'switch-input'}
          className={'sy-ui-switch-input'}
          type='checkbox' />
          <label
            style={{ backgroundColor: checked ? '#06D6A0' : undefined }}
            htmlFor='switch-input' className={'sy-ui-switch-label'}>
            <span className={'sy-ui-switch-button'} />
          </label>
      </div>
    );
  };
}
