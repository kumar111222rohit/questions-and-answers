import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input component', () => {
  it('should render the input component', () => {
    const inputProps = {
      input: { name: 'testInput' },
      meta: { touched: false },
      label: 'Input box',
      dataTestId: 'input',
    };
    render(<Input {...inputProps} />);

    expect(screen.getByTestId('input')).toBeInTheDocument();
    expect(screen.getByTestId('input-label')).toHaveTextContent(
      inputProps.label
    );
  });
});
