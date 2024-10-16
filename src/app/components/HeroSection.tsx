import React from 'react';
//import Background from 'path/to/your/background/image'; // Sigurohu që e ke importuar saktë

type HeroSectionProps = {
  title: string;
  description: string;
  link: string;
  buttonText: string;
  bgClass?: string; 
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  link,
  buttonText,
  bgClass = '', 
}) => {
  return (
    <div
      className={`bg-cover bg-center h-screen text-center backdrop-opacity-10 backdrop-invert bg-white/30 opacity-80 ${bgClass}`}
      
    >
      <div className="flex justify-start items-center h-screen left-10">
        <h1 className="text-4xl font-bold text-center text-white ml-10">
          {title}
          <p className="text-lg text-center text-white max-w-2xl mt-8 ">
            {description}
          </p>
          <a
            href={link}
            className="bg-green text-white text-center uppercase font-semibold px-4 py-2 rounded-md inline-block hover:scale-105 mt-10"
          >
            {buttonText}
          </a>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
