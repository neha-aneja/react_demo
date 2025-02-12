import { render, screen, fireEvent } from '@testing-library/react';
// import Counter from './src/counterTest';
import counterTest from './src/counterTest';

test('renders counter with initial value', () => {
  //   render(<Counter />);
  render(<Counter />);
  const counterValue = screen.getByTestId('counter-value');
  expect(counterValue).toHaveTextContent('Count: 0');
});

test('increments counter when button is clicked', () => {
  render(<Counter />);
  const counterValue = screen.getByTestId('counter-value');
  const incrementButton = screen.getByText('Increment');

  fireEvent.click(incrementButton);
  expect(counterValue).toHaveTextContent('Count: 1');
});

test('decrements counter when button is clicked', () => {
  render(<Counter />);
  const counterValue = screen.getByTestId('counter-value');
  const decrementButton = screen.getByText('Decrement');

  fireEvent.click(decrementButton);
  expect(counterValue).toHaveTextContent('Count: -1');
});
