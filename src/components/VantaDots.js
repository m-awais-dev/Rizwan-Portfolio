// VantaDots.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import VANTA from 'vanta/dist/vanta.dots.min';

const VantaDots = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (vantaRef.current) {
      const vantaEffect = VANTA.DOTS({
        el: vantaRef.current,
        THREE: THREE,
        color: 0x000000, // Customize as needed
        backgroundColor: 0xffffff, // Customize as needed
      });

      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, []);

  return <div ref={vantaRef} className="w-full h-full"></div>;
};

export default VantaDots;
