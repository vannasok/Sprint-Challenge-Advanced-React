import React, { useState } from 'react';
import { useDarkMode } from './useDarkMode';

export const darkButton = () => {
  const [darkMode, setDarkMode] = useDarkMode('key', false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className='dark-button'>
      <button onClick={toggleMode}>Dark mode</button>
    </div>
  );
};

export default darkButton;
