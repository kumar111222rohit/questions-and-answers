import React, { useState, useRef, useEffect } from 'react';
import './Tooltip.css';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tooltipRef.current) {
      const parentElement = tooltipRef.current.parentElement;
      if (parentElement) {
        const { top, left, height } = parentElement.getBoundingClientRect();
        tooltipRef.current.style.top = `${top + height + window.scrollY}px`;
        tooltipRef.current.style.left = `${left + window.scrollX}px`;
      }
    }
  }, [isVisible]);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {isVisible && (
        <div className="tooltip-content" ref={tooltipRef}>
          {text}
        </div>
      )}
    </div>
  );
};
