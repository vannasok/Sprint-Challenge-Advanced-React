import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
   const [darkMode, setDarkMode] = useLocalStorage(false);

   useEffect(() => {
      const body = document.querySelector('body');
      darkMode
         ? body.classList.add('dark-mode')
         : body.classList.remove('dark-mode');
   }, [darkMode]);

   return [darkMode, setDarkMode];
};
