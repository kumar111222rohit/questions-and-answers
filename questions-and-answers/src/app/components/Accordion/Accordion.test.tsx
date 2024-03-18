import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Accordion from './Accordion';
import { QuestionProvider } from '../../module/QnA/QuestionContext/QuestionContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18';

const mockQuestion = {
  id: 1,
  question: 'What is the capital of France?',
  answer: 'Paris',
};

describe('Accordion Component', () => {
  test('should redner component with question', () => {
    render(
      <QuestionProvider>
         <I18nextProvider i18n={i18n}>
        <Accordion question={mockQuestion} />
        </I18nextProvider>
      </QuestionProvider>
    );

    expect(
      screen.getByText('What is the capital of France?')
    ).toBeInTheDocument();
  });
});
