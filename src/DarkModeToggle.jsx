// src/DarkModeToggle.js
import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    console.log('Dark Mode:', darkMode);
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <h1>Dark Mode Toggle</h1>
     <button onClick={toggleDarkMode} className="dark-mode-toggle">
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
      
    </div>
  );
};

export default DarkModeToggle;
