import React from 'react';
import Button from './components/Button';

const App: React.FC = () => {
  return (
    <div>
      <Button type="primary" disabled>主要的</Button>
      <Button type="danger">危险的</Button>
      <Button type="primary">主要的</Button>
      <Button disabled>禁止</Button>
    </div>
  );
};

export default App;
