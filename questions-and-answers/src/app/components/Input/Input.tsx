import React from 'react';
import './Input.css';

interface InputProps {
  input: any;
  meta: {
    touched: boolean;
    error?: string;
    submitError?: string;
  };
  label?: string;
  readonly?: boolean;
  dataTestId?:string;
}

export const Input: React.FC<InputProps> = ({
  input,
  meta,
  label,
  readonly,
  dataTestId,
}) => {
  return (
    <div className="input-container">
      {label && (
        <div className="inputLabel" aria-label={`Input with label ${label}`} data-testid='input-label'>
          {label}
        </div>
      )}
      <div className="inputBox">
        <input
          {...input}
          readOnly={readonly}
          aria-label="Input box"
          className="input"
          data-testid={dataTestId}
        />
        {meta.touched && (meta.error || meta.submitError) && (
          <span className="error">{meta.error || meta.submitError}</span>
        )}
      </div>
    </div>
  );
};
