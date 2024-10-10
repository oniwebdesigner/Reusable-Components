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
        containerClass="bg-gray-800" // Klasat për kontejnerin e navbar-it
        titleClass="text-white" // Klasat për titullin
        linkClass="text-white hover:bg-green-500" // Klasat për lidhjet
      />
      {/* Përmbajtja e tjera e aplikacionit */}
    </div>
  );
};

export default App;

