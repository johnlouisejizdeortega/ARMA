// resources/js/hooks/useSplashScreen.tsx
import { useState, useEffect } from 'react';

interface UseSplashScreenOptions {
  duration?: number;
  initialState?: boolean;
}

const useSplashScreen = ({
  duration = 3000,
  initialState = true
}: UseSplashScreenOptions = {}) => {
  const [showSplash, setShowSplash] = useState<boolean>(initialState);

  useEffect(() => {
    if (initialState) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [initialState, duration]);

  // Allow manual control
  const show = () => setShowSplash(true);
  const hide = () => setShowSplash(false);

  return {
    showSplash,
    show,
    hide
  };
};

export default useSplashScreen;
