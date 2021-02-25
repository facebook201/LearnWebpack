import React, { useReducer, useEffect } from 'react';

interface ActionType {
  type: String;
};

export default function Reducer({ step = 0 }) {
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state = 0, action: ActionType) {
    if (action.type === 'click') {
      return state + step;
    } else {
      throw new Error();
    }
  }

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'click' });
    }, 1000);
  }, [dispatch])

  return <h1>{count}</h1>
};
