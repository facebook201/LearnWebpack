import React, { useState } from 'react';
import Switch from './components/Switch';

const App = () => {
  const [ checked, setChecked ] = useState(false);
  return (
    <div className='app'>
      <Switch checked={checked} onChange={() => setChecked(!checked) } />
    </div>
  );
};

export default App;
