import { render, screen } from '@testing-library/react';
import Crossovers from "../pages/Crossovers";

test('renders document', () => {
  render(<Crossovers />);
  expect(document.querySelectorAll('h2').length).toBe(1);
  expect(document.querySelectorAll('h2')[0].innerHTML).toBe('Crossovers');
  expect(screen.getByText(/With this calculator you can calculate the wanted capacitor and inductor values for creating an crossover circuit for first or second degree crossover/i)).toBeInTheDocument();
});
