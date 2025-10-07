// Navbar component adapted from https://github.com/Buckhouse/React-Nav-Bar-Tutorial.git

import React, { useState, useEffect, useRef } from 'react';
import '../styles/Navbar.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="navbar-action">
          <a
            href="https://github.com/vedachari"
            className="navbar-newsletter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ marginRight: '0.5rem' }} /> Github
          </a>
          <a
            href="https://www.linkedin.com/in/veda-chari/"
            className="navbar-newsletter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={{ marginRight: '0.5rem' }} />Linkedin
          </a>
        </div>
        <div className="navbar-hamburger" onClick={toggleMenu} ref={hamburgerRef}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-mobile-menu ${isOpen ? 'active' : ''}`} ref={menuRef}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        <li>
        <a 
            href="https://github.com/vedachari"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
        >
            <FaGithub style={{ marginRight: '0.5rem' }} /> Github
        </a>
        </li>
        <li>
        <a 
            href="https://www.linkedin.com/in/veda-chari/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
        >
            <FaLinkedin style={{ marginRight: '0.5rem' }} />Linkedin
        </a>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;