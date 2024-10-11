'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FlipBookProps {
  pageGradients: string[];  // List of background gradients
  pageTitles: string[];     // List of titles for each page
  duration?: number;        // Animation duration for each page
  start?: string;           // ScrollTrigger start point
  end?: string;             // ScrollTrigger end point
}

const FlipBook: React.FC<FlipBookProps> = ({
  pageGradients,
  pageTitles,
  duration = 2.5,        // Default value for animation duration
  start = 'top 90%',     // Default value for when animation starts
  end = 'top 10%',       // Default value for when animation ends
}) => {
  const pagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const pages = pagesRef.current;

    pages.forEach((page, index) => {
      if (page) {
        gsap.fromTo(
          page,
          { rotationY: 180, transformOrigin: 'left center' },  // Starts closed
          {
            rotationY: 0,  // Fully opens
            duration: duration,
            scrollTrigger: {
              trigger: page,
              start: start,  // Starts scrolling animation when near the viewport
              end: end,
              scrub: true,  // Ties the animation to scroll behavior
            },
          }
        );
      }
    });
  }, [duration, start, end]);  // Dependency array for animation settings

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl text-center font-bold mb-10 text-white">Scroll Down</h1>

      <div className="relative w-full max-w-4xl mx-auto">
        {pageGradients.map((gradient, index) => (
          <div
            key={index}
            //ref={(el) => (pagesRef.current[index] = el)}  // Store each page reference
            className={`${gradient} w-full h-96 mb-5 shadow-xl rounded-lg`}
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}  // 3D effect
          >
            <div className="text-center p-10 text-white">
              <h2 className="text-5xl font-bold">{pageTitles[index]}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlipBook;
