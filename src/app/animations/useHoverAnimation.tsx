import { useEffect } from 'react';
import gsap from 'gsap';

// Define the type for the hook's parameters
interface UseHoverAnimationProps {
  itemCount: number; // Explicitly set itemCount as a number
  selectorPrefix?: string; // Optional, default is 'text-overlay'
  enterAnimation?: gsap.TweenVars; // GSAP animation parameters for enter
  leaveAnimation?: gsap.TweenVars; // GSAP animation parameters for leave
  duration?: number; // Duration of the animation
  ease?: string; // Easing function
}

// Custom hook for hover animation
export const useHoverAnimation = ({
  itemCount,
  selectorPrefix = 'text-overlay',
  enterAnimation = { y: 0, opacity: 1 },
  leaveAnimation = { y: '100%', opacity: 0 },
  duration = 0.5,
  ease = 'power1.inOut',
}: UseHoverAnimationProps) => {
  useEffect(() => {
    // Set up animation for each item based on the itemCount
    for (let i = 0; i < itemCount; i++) {
      gsap.fromTo(
        `.${selectorPrefix}-${i}`, // Target by dynamically generated class
        { y: '100%', opacity: 0 }, // Initial state
        { y: 0, opacity: 1, duration, ease, paused: true } // Animation settings
      );
    }
  }, [itemCount, selectorPrefix, duration, ease]);

  // Function to handle hover animation on enter
  const handleMouseEnter = (index: number) => {
    gsap.to(`.${selectorPrefix}-${index}`, { ...enterAnimation, duration, ease });
  };

  // Function to handle hover animation on leave
  const handleMouseLeave = (index: number) => {
    gsap.to(`.${selectorPrefix}-${index}`, { ...leaveAnimation, duration, ease });
  };

  return { handleMouseEnter, handleMouseLeave }; // Return handlers for use in components
};
