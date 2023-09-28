
import { useState, useRef, useEffect } from 'react';


export function useContainer(isInView: boolean) {
  const [showContainer, setShowContainer] = useState(false);
  const containerTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    clearTimeout(containerTimerRef.current);
    if (isInView) {
      containerTimerRef.current = setTimeout(() => {
        setShowContainer(true);
      }, 1000)
    } else {
      setShowContainer(false)
    }
  }, [isInView])

  return { showContainer }
}