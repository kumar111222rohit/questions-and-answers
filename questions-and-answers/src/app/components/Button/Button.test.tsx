import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button', () => {
  test('should render with label and the click should work', () => {
    const mockOnClick = jest.fn();
    const btnLabel = 'Submit';

    render(<Button onClick={mockOnClick} btnLabel={btnLabel} />);

    const buttonElement = screen.getByRole('button', { name: btnLabel });
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('the button should be disabled ', () => {
    const btnLabel = 'Submit';
    render(<Button btnLabel={btnLabel} disabled={true} />);

    const buttonElement = screen.getByRole('button', { name: btnLabel });
    expect(buttonElement).toBeDisabled();
  });
});
