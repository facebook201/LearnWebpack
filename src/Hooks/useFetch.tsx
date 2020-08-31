import React, { useState, useEffect } from 'react';

// 自定义hook  
const useFetch = (url: string) => {
  const [state, setState] = useState({ data: null, isLoading: false });

  useEffect(() => {
    const fn = async () => {
      setState({ data: null, isLoading: true });
      const apiData = await fetch(url);
      const data = await apiData.json();
      setState({ data, isLoading: false });
    };
    fn();
  }, [url]);
  return state;
};
