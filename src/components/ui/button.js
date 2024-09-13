import React from 'react';

export const Button = ({ children, className, variant = 'default', ...props }) => {
  const baseStyle = "px-4 py-2 rounded";
  const variantStyles = {
    default: "bg-blue-500 text-white",
    outline: "border border-current",
    ghost: "bg-transparent",
  };

  return (
    <button 
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
