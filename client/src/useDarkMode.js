import { useLocalStorage } from './useLocalStorage';
import React, { useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);

  useEffect(() => {
    if (value === true) {
      document.querySelector('App').classList.add('dark-mode');
    } else {
      document.querySelector('App').classList.remove('dark-mode');
    }
  }, [value]);
  return [value, setValue];
};
