import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="footer-container" aria-label="Footer" data-testid='footer'>
      {t('studocu')}
    </div>
  );
};
