import { render, screen } from '@testing-library/react';
import Amplifiers from "../pages/Amplifiers";

test('renders document', () => {
  render(<Amplifiers />);
  expect(document.querySelectorAll('h2').length).toBe(1);
  expect(document.querySelectorAll('h2')[0].innerHTML).toBe('Amplifiers');
  expect(screen.getByText(/With these introductions you will gain some basic understanding of concepts that are related in designing/i)).toBeInTheDocument();
});
