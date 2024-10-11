import React from 'react';
import Link from 'next/link';

// Define the type of props that the Navbar component will accept
interface NavbarProps {
  title: string; // The title of the navbar
  links: Array<{ href: string; label: string }>; // An array of links with href and label properties
  containerClass?: string; // Optional classes for the container
  titleClass?: string; // Optional classes for the title
  linkClass?: string; // Optional classes for the individual links
}

const Navbar: React.FC<NavbarProps> = ({ title, links, containerClass, titleClass, linkClass }) => {
  return (
    // The header is fixed at the top of the page and applies the optional containerClass
    <header className={`fixed left-0 right-0 py-4 z-50 font-mono ${containerClass}`}>
      {/* The title of the navbar with optional titleClass */}
      <h2 className={`ml-10 max-w-2xl ${titleClass}`}>{title}</h2>

      {/* Navigation section containing the links */}
      <nav className="flex gap-10 justify-center items-center">
        {links.map((link, index) => (
          // Each link is rendered using the href and label from the links array
          <Link
            key={index} // Use index as the key; in a real application, you might want to use a unique key
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
