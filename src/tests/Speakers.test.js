import { render, screen } from '@testing-library/react';
import Speakers from "../pages/Speakers";

test('renders document', () => {
  render(<Speakers />);
  expect(document.querySelectorAll('h2').length).toBe(1);
  expect(document.querySelectorAll('h2')[0].innerHTML).toBe('Speaker enclosures');
  expect(screen.getByText(/With this calculator you can calculate cabinet sizes and tuning frequencies based on the given speaker Thiele-Small parameters for closed and reflex cabinets./i)).toBeInTheDocument();
});
