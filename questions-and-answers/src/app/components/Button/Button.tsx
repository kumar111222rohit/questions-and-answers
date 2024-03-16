import React from 'react';
import './Button.css';
import classNames from 'classnames';

interface Props {
  onClick?: VoidFunction;
  btnLabel: string;
  type?: 'submit' | 'button';
  disabled?: boolean;
  customClass?: string;
  ariaLabel?: string;
}
export const Button: React.FC<Props> = ({
  onClick,
  btnLabel,
  type,
  disabled,
  customClass = '',
  ariaLabel = '',
}) => {
  return (
    <button
      className={classNames('submit-button', customClass)}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {btnLabel}
    </button>
  );
};
