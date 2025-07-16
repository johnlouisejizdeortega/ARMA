"use client"

import React from "react";

const BlinkingDot: React.FC<{ color?: string }> = ({ color = "#00A0E9" }) => {
  return (
    <div className="relative mt-1 flex-shrink-0">
      <div 
        className="w-3 h-3 rounded-full absolute animate-ping opacity-75"
        style={{ backgroundColor: color, animationDuration: '1.5s' }}
      ></div>
      <div 
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default BlinkingDot;