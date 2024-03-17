import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { Header } from './Header';
import i18n from '../../../../i18';

describe('Header component', () => {
  const headerText = 'QnA Dashboard';

  it('should render header component with props passed', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Header
          headerText={headerText}
        />
      </I18nextProvider>
    );

    expect(screen.getByTestId('header-text')).toHaveTextContent(headerText);
  });
});
