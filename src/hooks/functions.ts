import { useState, useLayoutEffect } from 'react'

export const contactShortcut = (name: string) => {
  return name.toLocaleLowerCase().split(' ').join('')
}

export const useWindowResize = () => {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}