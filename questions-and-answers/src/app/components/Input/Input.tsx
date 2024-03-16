import React from 'react';

interface InputProps {
  input: any; 
  meta: {
    touched: boolean;
    error?: string;
    submitError?: string;
  };
  label?: string;
  readonly?: boolean;
}

export const Input: React.FC<InputProps> = ({ input, meta, label,readonly }) => {
    return (
        <div className='inputContainer'>
            {label && <div className='inputLabel' aria-label={`Input with label ${label}`}>{label}</div>}
            <div className='inputBox'>
                <input {...input} readOnly={readonly} aria-label='Input box' />
                {meta.touched && (meta.error || meta.submitError) && (
                    <span className="error">{meta.error || meta.submitError}</span>
                )}
            </div>
        </div>
    );
};
