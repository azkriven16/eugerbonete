import { useEffect, useState } from 'react';

export const useDeviceType = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isPhone: width < 640,          // Small mobile devices
    isTablet: width >= 640 && width < 768,   // Portrait tablets
    isLaptop: width >= 768 && width < 1024,  // Small laptops
    isPC: width >= 1024            // Desktop and large screens
  };
};

export default useDeviceType;