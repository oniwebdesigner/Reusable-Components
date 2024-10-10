import React from 'react';
import Link from 'next/link';

// Definoni llojin e props që do të pranohet
interface NavbarProps {
  title: string; // Titulli i navbar-it
  links: Array<{ href: string; label: string }>; // Lidhjet e navbar-it
  containerClass?: string; // Klasat për kontejnerin
  titleClass?: string; // Klasat për titullin
  linkClass?: string; // Klasat për lidhjet
}

const Navbar: React.FC<NavbarProps> = ({ title, links, containerClass, titleClass, linkClass }) => {
  return (
    <header className={`fixed left-0 right-0 py-4 z-50 font-mono ${containerClass}`}>
      <h2 className={`ml-10 max-w-2xl ${titleClass}`}>{title}</h2>

      <nav className="flex gap-10 justify-center items-center">
        {links.map((link, index) => (
          <Link
            key={index} // Përdorni index-in si çelës, ndoshta do të donit një çelës unik në një aplikacion real
            href={link.href}
            className={`uppercase font-semibold text-base px-5 py-1 text-xl rounded-2xl hover:bg-green transition duration-500 ease-in-out ${linkClass}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
