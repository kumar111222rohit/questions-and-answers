import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18';

describe('Footer component', () => {
  it('should render the footer with label', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Footer />
      </I18nextProvider>
    );

    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent(
      'StuDocu: Connecting Students around the globe'
    );
  });
});
