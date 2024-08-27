import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary'| 'spaced';
  size?: 'small' | 'medium' | 'large';
  width?: 'full' | 'auto' | 'fixed' | 'fluid' | 'centered' | 'spaced' | 'left' | 'right' | 'oneThird';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  to,
  onClick,
  children,
  variant = 'primary',
  size = 'medium',
  width = 'auto',
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseStyles = `font-semibold rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none ${className}`;
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-purple-700 to-pink-500 text-white hover:bg-gradient-to-l hover:shadow-2xl',
    secondary: 'bg-gray-500 text-white hover:bg-gray-700',
    tertiary: 'bg-gradient-to-r from-purple-700 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-2xl hover:bg-gradient-to-l transition duration-300 ease-in-out text-lg hidden sm:block',
    spaced: 'bg-gradient-to-r from-blue-500 to-blue-100 via-blue-400 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-2xl hover:bg-gradient-to-l transition duration-300 ease-in-out text-lg hidden sm:block',
  };
  
  const sizeStyles = {
    small: 'py-1 px-4 text-sm',
    medium: 'py-2 px-6 text-lg',
    large: 'py-3 px-8 text-xl',
  };

  const widthStyles = {
    full: 'w-full',
    auto: 'w-auto',
    fixed: 'w-full fixed',
    fluid: 'w-full max-w-screen-xl mx-auto',
    centered: 'w-full mx-auto',
    spaced: 'w-full flex justify-between items-center',
    left: 'w-1/2',
    right: 'w-1/2',
    oneThird: 'w-1/3',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles[width]}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
