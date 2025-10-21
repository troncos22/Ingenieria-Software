import React from "react";

const Header = () => {
  return (
    <header className="py-5 text-center border-b border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700">
        Sistema de Monitoreo de Sensores
      </h1>
      <p className="text-gray-600 text-base md:text-lg">
        Visualiza el estado de tus centrales en tiempo real.
      </p>
    </header>
  );
};

export default Header;
