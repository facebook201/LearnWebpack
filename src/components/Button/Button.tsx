/**
 * Button组件需求
 * 1、不同的按钮类型 Type Primary Default Danger link Button
 * 2、不同的按钮大小 size
 * 3、disabled 状态
 */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { tuple } from '../utils/type';
import './style.less';

const ButtonSizes = tuple('large', 'default', 'small');
export type ButtonSize = (typeof ButtonSizes)[number];

const ButtonTypes = tuple('primary', 'default', 'danger', 'link');
export type ButtonType = (typeof ButtonTypes)[number]; // 这样就相当于一个 union Type 联合类型

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  href?: string;
  children: React.ReactNode;
};

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type NativeButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

interface ButtonState {
  loading?: boolean;
};

class Button extends React.Component<ButtonProps, ButtonState> {
  static defaultProps = {
    disabled: false,
    type: 'default'
  };

  static propTypes = {
    type: PropTypes.oneOf(ButtonTypes),
    size: PropTypes.oneOf(ButtonSizes),
  };

  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    const {
      type,
      className,
      size,
      disabled,
      children,
      href,
      ...restProps
    } = this.props;
  
    const classes = classNames('btn', className, {
      [`btn-${type}`]: type,
      [`btn-${size}`]: size
    });
  
    if (type ==='link' && href) {
      return (
        <a
          className={classes}
          href={href}
          {...restProps}>
            { children }
        </a>
      );
    }
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}>
        { children }
      </button>
    );
  }
};

export default Button;
