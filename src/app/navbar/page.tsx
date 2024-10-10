import React from 'react';
import Navbar from './NavBar';

const App = () => {
  const links = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Albums' },
    { href: '#', label: 'Gallery' },
    { href: '#', label: 'About' },
  ];

  return (
    <div>
      <Navbar 
        title="Photo Vibe" 
        links={links} 
        containerClass="bg-gray-800" 
        titleClass="text-white"
        linkClass="text-white hover:bg-green-500" 
      />
      
    </div>
  );
};

export default App;

