import * as React from 'react';
const { useState, useEffect } = React;

const Hooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      Count: { count }
    </div>
  );
}

const RefHooks = () => {
  
};

export default Hooks;
