import React from 'react';

function List(props) {
  return <li>{props.name}</li>
}

function Lists(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(item => <List key={item.id} name={item.name} /> );
  return (
    <ul>
      { listItems }
    </ul>
  );
}

export default Lists;
