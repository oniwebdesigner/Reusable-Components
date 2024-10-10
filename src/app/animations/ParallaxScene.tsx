'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface ParallaxComponentProps {
  triggerClass: string;
  skyClass: string;
  cloudClasses: string[];
  mountClasses: string[];
  arrowBtnId: string;
}

const ParallaxComponent: React.FC<ParallaxComponentProps> = ({
  triggerClass,
  skyClass,
  cloudClasses,
  mountClasses,
  arrowBtnId,
}) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerClass,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        markers: true,
      },
    })
      .fromTo(skyClass, { y: 0 }, { y: -200 }, 0);

    cloudClasses.forEach((cloudClass, index) => {
      tl.fromTo(cloudClass, { y: index % 2 === 0 ? 100 : -150 }, { y: -800 }, 0);
    });

    mountClasses.forEach((mountClass, index) => {
      tl.fromTo(mountClass, { y: -10 }, { y: -100 * (index + 1) }, 0);
    });

    const arrowBtn = document.querySelector(`#${arrowBtnId}`) as HTMLElement | null;

    const arrowAnimation = (event: MouseEvent) => {
      const animationParams = {
        y: event.type === 'mouseenter' ? 10 : 0,
        duration: event.type === 'mouseenter' ? 0.8 : 0.5,
        ease: event.type === 'mouseenter' ? 'back.inOut(3)' : 'power3.out',
        overwrite: true,
      };

      gsap.to('.arrow', animationParams);

      if (event.type === 'click') {
        gsap.to(window, { scrollTo: innerHeight, duration: 1.5, ease: 'power1.inOut' });
      }
    };

    if (arrowBtn) {
      arrowBtn.addEventListener('mouseenter', arrowAnimation);
      arrowBtn.addEventListener('mouseleave', arrowAnimation);
      arrowBtn.addEventListener('click', arrowAnimation);
    }

    return () => {
      arrowBtn?.removeEventListener('mouseenter', arrowAnimation);
      arrowBtn?.removeEventListener('mouseleave', arrowAnimation);
      arrowBtn?.removeEventListener('click', arrowAnimation);
    };
  }, [triggerClass, skyClass, cloudClasses, mountClasses, arrowBtnId]);

  return (
    <div className="relative w-full h-screen overflow-hidden m-0">
      <div className={triggerClass + ' h-[200vh] w-full'}></div>
      <main className="fixed bg-white w-full h-full top-0 left-0">
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* SVG Elements */}
        </svg>
      </main>
    </div>
  );
};

export default ParallaxComponent;
