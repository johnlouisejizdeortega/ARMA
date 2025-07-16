// resources/js/components/SplashScreenWrapper.tsx
import React, { useState, useEffect, ReactNode } from 'react';

// SplashScreen component
const SplashScreen: React.FC = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c3e50',
        color: 'white',
        zIndex: 9999,
        opacity: 1,
        transition: 'opacity 0.5s ease-in-out'
      }}
    >
      <div 
        style={{
          width: '150px',
          height: '150px',
          backgroundColor: '#3498db',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
          animation: 'pulse 2s infinite'
        }}
      >
        LOGO
      </div>
      <div style={{ marginTop: '20px', fontSize: '1.5rem' }}>
        Welcome to Our Website
      </div>
      
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

// Wrapper component that manages the splash screen visibility
interface SplashScreenWrapperProps {
  children: ReactNode;
  duration?: number;
}

const SplashScreenWrapper: React.FC<SplashScreenWrapperProps> = ({ 
  children, 
  duration = 3000 
}) => {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration]);
  
  return (
    <>
      {showSplash && <SplashScreen />}
      <div style={{ visibility: showSplash ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </>
  );
};

export default SplashScreenWrapper;