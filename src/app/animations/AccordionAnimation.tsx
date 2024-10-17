import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';

// Define the props for the AccordionAnimation component
interface AccordionAnimationProps {
  wrapperId: string; // ID of the wrapper element
  contentId: string; // ID of the content element
  triggerClass: string; // Class for the trigger element
  accordionClass: string; // Class for the accordion element
  textClass: string; // Class for the text inside the accordion
}

const AccordionAnimation: React.FC<AccordionAnimationProps> = ({
  wrapperId,
  contentId,
  triggerClass,
  accordionClass,
  textClass,
}) => {
  // Create a ref to hold the ScrollSmoother instance
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Initialize the ScrollSmoother
    smootherRef.current = ScrollSmoother.create({
      content: `#${contentId}`, // Target content element
      wrapper: `#${wrapperId}`, // Target wrapper element
      smooth: true, // Enable smooth scrolling
      effects: false, // Disable effects
      normalizeScroll: true, // Normalize scroll
    });

    // Create a timeline for the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${triggerClass}`, // Set the trigger for the scroll animation
        pin: true, // Pin the trigger in place
        start: 'top top', // Start when the trigger is at the top of the viewport
        end: 'bottom top', // End when the trigger is at the top of the viewport
        scrub: 1, // Smooth the animation based on scroll
      },
    });

    // Animation for the accordion text
    tl.to(`.${accordionClass} .${textClass}`, {
      height: 0, // Set height to 0
      paddingBottom: 0, // Set padding to 0
      opacity: 0, // Fade out
      stagger: 0.5, // Stagger the animation
      ease: 'linear', // Linear easing for the animation
    });

    // Animation for the accordion margin
    tl.to(
      `.${accordionClass}`,
      {
        marginBottom: -15, // Decrease the bottom margin
        stagger: 0.5, // Stagger the animation
      },
      '<' // Start this animation at the same time as the previous one
    );

    // Cleanup function to kill all ScrollTriggers and ScrollSmoother instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      smootherRef.current?.kill();
    };
  }, [wrapperId, contentId, triggerClass, accordionClass, textClass]);

  return null; // This component does not render any markup
};

export default AccordionAnimation;


//Example usage of the AccordionAnimation component
//const MyComponent = () => {
    //return (
      //<div>
        
        //<div id="wrapper">
          
          //<div id="content">
            //<div className="accordions">
              
              //<div className="accordion">
                //<div className="text">Accordion 1 Content</div>
              //</div>
              //<div className="accordion">
                //<div className="text">Accordion 2 Content</div>
              //</div>
            //</div>
          //</div>
        //</div>
  
        
        //<AccordionAnimation 
         // wrapperId="wrapper" 
          //contentId="content" 
          //triggerClass="accordions" 
          //accordionClass="accordion" 
          //textClass="text" 
        ///>
      //</div>
    //);
//};

