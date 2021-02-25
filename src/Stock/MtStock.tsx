import React, { useState, useEffect } from 'react';
import { Chart, Point, Line } from "bizcharts";

const PE = ['13.3X', '22X', '29X', '32.5X', '41X'];

const RateData = [
  { time: '2020-01-30', name: 'real', price: 28, },
  { time: '2020-01-30', name: 'PE1', price: 10 },
  { time: '2020-01-30', name: 'PE2', price: 16.5 },
  { time: '2020-01-30', name: 'PE3', price: 21.5 },
  { time: '2020-01-30', name: 'PE4', price: 24 },
  { time: '2020-01-30', name: 'PE5', price: 30.75 },

  { time: '2020-02-28', name: 'real', price: 32, },
  { time: '2020-02-28', name: 'PE1', price: 11 },
  { time: '2020-02-28', name: 'PE2', price: 17.5 },
  { time: '2020-02-28', name: 'PE3', price: 21.5 },
  { time: '2020-02-28', name: 'PE4', price: 30 },
  { time: '2020-02-28', name: 'PE5', price: 38 },

  { time: '2020-03-30', name: 'real', price: 24.56, },
  { time: '2020-03-30', name: 'PE1', price: 12 },
  { time: '2020-03-30', name: 'PE2', price: 18.5 },
  { time: '2020-03-30', name: 'PE3', price: 28 },
  { time: '2020-03-30', name: 'PE4', price: 37 },
  { time: '2020-03-30', name: 'PE5', price: 46 },

  { time: '2020-04-30', name: 'real', price: 30, },
  { time: '2020-04-30', name: 'PE1', price: 13 },
  { time: '2020-04-30', name: 'PE2', price: 19.8 },
  { time: '2020-04-30', name: 'PE3', price: 36 },
  { time: '2020-04-30', name: 'PE4', price: 42 },
  { time: '2020-04-30', name: 'PE5', price: 51 },

  { time: '2020-05-30', name: 'real', price: 32, },
  { time: '2020-05-30', name: 'PE1', price: 14 },
  { time: '2020-05-30', name: 'PE2', price: 22 },
  { time: '2020-05-30', name: 'PE3', price: 43 },
  { time: '2020-05-30', name: 'PE4', price: 48.75 },
  { time: '2020-05-30', name: 'PE5', price: 56 },

  { time: '2020-06-30', name: 'real', price: 40.73, },
  { time: '2020-06-30', name: 'PE1', price: 15 },
  { time: '2020-06-30', name: 'PE2', price: 24 },
  { time: '2020-06-30', name: 'PE3', price: 47 },
  { time: '2020-06-30', name: 'PE4', price: 51 },
  { time: '2020-06-30', name: 'PE5', price: 61 },

  { time: '2020-07-30', name: 'real', price: 56.8, },
  { time: '2020-07-30', name: 'PE1', price: 16 },
  { time: '2020-07-30', name: 'PE2', price: 26 },
  { time: '2020-07-30', name: 'PE3', price: 51 },
  { time: '2020-07-30', name: 'PE4', price: 57.4 },
  { time: '2020-07-30', name: 'PE5', price: 67.4 },

  { time: '2020-08-30', name: 'real', price: 63.3, },
  { time: '2020-08-30', name: 'PE1', price: 17 },
  { time: '2020-08-30', name: 'PE2', price: 29 },
  { time: '2020-08-30', name: 'PE3', price: 55 },
  { time: '2020-08-30', name: 'PE4', price: 61 },
  { time: '2020-08-30', name: 'PE5', price: 72.3 },

  { time: '2020-09-30', name: 'real', price: 83 },
  { time: '2020-09-30', name: 'PE1', price: 18 },
  { time: '2020-09-30', name: 'PE2', price: 31 },
  { time: '2020-09-30', name: 'PE3', price: 58 },
  { time: '2020-09-30', name: 'PE4', price: 66.3 },
  { time: '2020-09-30', name: 'PE5', price: 82 },

  { time: '2020-10-30', name: 'real', price: 71, },
  { time: '2020-10-30', name: 'PE1', price: 19 },
  { time: '2020-10-30', name: 'PE2', price: 33 },
  { time: '2020-10-30', name: 'PE3', price: 60 },
  { time: '2020-10-30', name: 'PE4', price: 71.5 },
  { time: '2020-10-30', name: 'PE5', price: 90.2 },
];

const scale = {
  price: {
    min: 8,
    max: 100,
  }
};

function MtStock() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(RateData);
  }, []);

  return (
    <Chart scale={scale} padding={[30,20,50,40]} autoFit width={1200} height={400} data={data} >
      <Line shape="smooth" position="time*price" color="name" label="price"/>
      <Point position="time*price" color="name" />
    </Chart>
  );
}

export default MtStock;
