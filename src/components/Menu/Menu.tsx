import React, { useState, createContext } from 'react';
import classNames from 'classnames';

type MenuMode = 'horizontal' | 'vertical';
type selectCallback = (selectedIndex: number) => void;

export interface MenuProps {
  defalutIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: selectCallback;
};

interface IMenuContext {
  index: number,
  onSelect?: selectCallback;
};

export const MenuContext = createContext<IMenuContext>({ index: 0 });

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defalutIndex, onSelect } = props;

  const [currentActive, setActive] = useState(defalutIndex);

  const classes = classNames('dm-menu', className, {
    'menu-vertical': mode === 'vertical'
  });
  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  };

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        { children }
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defalutIndex: 0,
  mode: 'horizontal'
};

export default Menu;
