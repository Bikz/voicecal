import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
};

export default Card;