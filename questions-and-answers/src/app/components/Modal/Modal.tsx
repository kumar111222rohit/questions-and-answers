import React from 'react';
import './Modal.css';
import { Button } from '../Button/Button';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-header">
        <div className="modal-header-text">Questions List View</div>
        <Button
          customClass="modal-close-btn"
          onClick={onClose}
          aria-label="Modal close"
          btnLabel="Close"
        />
      </div>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
