import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  bgColor?: string; 
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  href,
  children,
  bgColor = 'bg-green-500', 
  className = '', 
}) => {
  return (
    <a
      href={href}
      className={`${bgColor} text-white text-center uppercase font-semibold px-4 py-2 rounded-md inline-block hover:scale-105 mt-10 ${className}`}
    >
      {children}
    </a>
  );
};

export default CustomButton;
