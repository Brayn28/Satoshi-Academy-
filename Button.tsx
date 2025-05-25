
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link' | 'outline';
  children: React.ReactNode;
  fullWidth?: boolean;
  as?: 'button' | 'a'; // To allow rendering as an anchor tag
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  as = 'button',
  ...props
}) => {
  const baseStyles = `
    py-3 px-6 rounded-lg font-semibold transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-opacity-50
    ${fullWidth ? 'w-full' : ''}
  `;

  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-yellow-500 text-black hover:bg-yellow-600 focus:ring-yellow-400 shadow-md hover:shadow-lg transform hover:-translate-y-0.5';
      break;
    case 'secondary':
      variantStyles = 'bg-gray-700 text-yellow-500 hover:bg-gray-600 focus:ring-yellow-500';
      break;
    case 'outline':
      variantStyles = 'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black focus:ring-yellow-500';
      break;
    case 'link':
      variantStyles = 'text-yellow-500 hover:text-yellow-400 underline p-0';
      break;
  }

  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`;

  if (as === 'a') {
    return (
      // Fix: Cast props to unknown first to allow conversion to AnchorHTMLAttributes, resolving type mismatch for event handlers.
      <a {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} className={combinedClassName}>
      {children}
    </button>
  );
};
