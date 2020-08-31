import React from 'react';
import Hooks from './Hooks';
import Button from './components/Button';
import Context from './Hooks/ref';

const App: React.FC = () => {
  return (
    <div>
      <Button type='primary' disabled>主要的</Button>
      {/* <Button type="danger">危险的</Button> */}
      {/* <Button type="primary">主要的</Button> */}
      <Button disabled>禁止</Button>
      <Hooks />
      <Context />
    </div>
  );
};

export default App;
