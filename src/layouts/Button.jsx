import React from 'react';

const Button = ({ title, className, onClick }) => {
  return (
    <button
      className={`text-white dark:text-black transition duration-0 hover:duration-150 px-6 py-1 border-2 dark:border-black border-white bg-gradient-to-r from-[#a3a8f0] to-[#00EBFF] inline-block hover:bg-[#00ABFF] transition-all rounded-full ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
