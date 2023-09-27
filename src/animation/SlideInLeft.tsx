// SlideUp.tsx
import React, { useRef, useEffect } from 'react';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideInLeft: React.FC<SlideUpProps> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-left');
          } else {
            entry.target.classList.remove('animate-slide-in-left'); // 
          }
        });
      },
      { threshold: 0 } // 
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []); // 

  return <div ref={elementRef}>{children}</div>;
};

export default SlideInLeft;
