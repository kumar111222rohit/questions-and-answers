import React, { ReactNode } from 'react';
import './Header.css';
import { Tooltip } from '../Tooltip/Tooltip';
import Image from 'next/image';

interface Props {
  headerText: string;
  children?: ReactNode;
  tooltipText?: string;
  imgSrc?: string;
  altText?: string;
  customClass?: string;
}
export const Header: React.FC<Props> = ({
  headerText,
  children,
  tooltipText,
  imgSrc,
  altText,
  customClass,
}) => {
  return (
    <div className={`${customClass} header-container`}>
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={altText || ''}
          width={100}
          height={24}
          priority
        />
      )}
      <Tooltip text={`${tooltipText}`}>
        <div
          className="header-label"
          aria-label={`Header with text ${headerText}`}
        >
          {headerText}
        </div>
      </Tooltip>
      {children && <div>{children}</div>}
    </div>
  );
};
