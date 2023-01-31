import { useCallback, useEffect } from 'react';

export default function useClickOutside({ ref, onClickOutside }) {
  const handleClickOutside = useCallback((event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickOutside();
    }
  }, [ref, onClickOutside]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);
}
