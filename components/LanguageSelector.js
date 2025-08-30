import React, { useState } from 'react';

const LanguageSelector = ({ onLanguageChange, topPosition = '-55px', rightPosition = '20px' }) => {
  const [currentLanguage, setCurrentLanguage] = useState('PT');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'PT' ? 'EN' : 'PT';
    setCurrentLanguage(newLanguage);
    onLanguageChange(newLanguage);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: topPosition, // Posição personalizável
        right: rightPosition, // Posição personalizável
        zIndex: 10000,
        cursor: 'pointer',
        fontFamily: '"Outfit", sans-serif',
        fontWeight: '500',
        userSelect: 'none'
      }}
      onClick={toggleLanguage}
    >
      <span 
        style={{
          padding: '8px 15px',
          backgroundColor: 'transparent',
          color: '#2c3e50',
          borderRadius: '20px',
          fontWeight: '600',
          fontSize: '16px',
          transition: 'all 0.3s ease',
          border: '2px solid #2c3e50',
          display: 'inline-block',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          caretColor: 'transparent',
          outline: 'none',
          boxShadow: 'none'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#2c3e50';
          e.target.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = '#2c3e50';
        }}
      >
        {currentLanguage}
      </span>
    </div>
  );
};

export default LanguageSelector;