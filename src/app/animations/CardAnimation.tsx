// src/app/components/Card.tsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';

interface CardProps {
  title: string;
  content: string;
  className?: string; // Optional className for additional styling
  onClick?: () => void; // Optional click handler
  children?: React.ReactNode; // Optional children for custom content
}

const Card: React.FC<CardProps> = ({ title, content, className = '', onClick, children }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { scale: 1.1, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { scale: 1, duration: 0.3 });
  };

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick} // Call onClick when the card is clicked
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{content}</p>
      {children} {/* Render any additional content passed as children */}
    </div>
  );
};

export default Card;
