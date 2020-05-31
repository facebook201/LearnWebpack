import React, { FC, ReactElement, InputHTMLAttributes } from 'react';

type InputSize = 'lg' | 'sm';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  size?: InputSize;
  icon?: string;
  prepand?: string | ReactElement;
  append?: string | ReactElement;
};

export const Input: FC<InputProps> = (props) => {
  // 取出各种的属性
};
