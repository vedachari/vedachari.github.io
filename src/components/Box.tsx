// src/components/Box.tsx
import React, { ReactNode } from "react";
import "../styles/Box.css";

interface BoxProps {
  children: ReactNode;
  className?: string; 
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return <div className={`box ${className ? className : ""}`}>{children}</div>;
};

export default Box;
