import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ModifyQuestionForm } from './ModifyQuestionForm';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key, 
  }),
}));

describe('ModifyQuestionForm', () => {
  it('shoudl render form and  submit it', async () => {
    const mockOnSubmit = jest.fn();

    render(
      <ModifyQuestionForm
        onSubmit={mockOnSubmit}
        showSubmit={true}
        showCheckBox={true}
      />
    );

    expect(screen.getByTestId('question')).toBeInTheDocument();
    expect(screen.getByTestId('answer')).toBeInTheDocument();

    fireEvent.change(screen.getByTestId('question'), {
      target: { value: 'Test Question?' },
    });
    fireEvent.change(screen.getByTestId('answer'), {
      target: { value: 'Test Answer.' },
    });

    fireEvent.click(screen.getByTestId('submit'));

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
