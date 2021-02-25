import React from 'react';
import MtStock from './Stock/MtStock';

class Stock extends React.Component {
  render() {
    return (
      <>
        <section>
          <h1>隆基股份 PE/PB Brand</h1>
          <MtStock />
        </section>
      </>
    );
  }
};

export default Stock;
