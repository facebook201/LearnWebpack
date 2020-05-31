import React, { createContext } from 'react';
import Button from './components/Button';
import Upload from './components/Upload/upload';

const App: React.FC = () => {
  return (
    <div>
      <section>
        <h1>Menu</h1>
      </section>
      <section>
        <h1>Button</h1>
        <Button type="primary" disabled>主要的</Button>
        <Button type="danger">危险的</Button>
        <Button type="primary">主要的</Button>
        <Button disabled>禁止</Button>
      </section>

      <section>
        <h1>Upload</h1>
        <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" />
      </section>
    </div>
  );
};

export default App;
