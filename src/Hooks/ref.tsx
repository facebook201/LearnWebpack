import React from 'react';

const {
  useContext
} = React;

/**
 * useContext 通过useContext不需要用 context.consumer 就可以获得 context 传递的数据
 */

const themes = {
  light: {
    foreground: '#000',
    background: '#ff0'
  }
};

const ThemeContext = React.createContext(themes.light);

function Context() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am a Good Boy
    </button>
  );
}

export default Context;
