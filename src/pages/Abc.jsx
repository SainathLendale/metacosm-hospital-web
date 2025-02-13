// In your parent component
import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import HeroSectionSkeleton from './HeroSectionSkeleton';

const Abc = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <HeroSectionSkeleton /> : <HeroSection />;
};
export default Abc