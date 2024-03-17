import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Accordion from './Accordion';
import { QuestionProvider } from '../../module/QnA/QuestionContext/QuestionContext';

const mockQuestion = {
  id: 1,
  question: 'What is the capital of France?',
  answer: 'Paris'
};

describe('Accordion Component', () => {
  test('should redner component with question', () => {
    render(
      <QuestionProvider>
        <Accordion question={mockQuestion} />
      </QuestionProvider>
    );

    expect(screen.getByText('What is the capital of France?')).toBeInTheDocument();
  });
});
