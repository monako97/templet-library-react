import React from 'react';
import './index.global.less';

interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className }: CardProps) => {
  return <div className={['card', className].join(' ')}>{children}</div>;
};

export default Card;
