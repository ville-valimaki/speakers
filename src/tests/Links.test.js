import { render, screen } from '@testing-library/react';
import Links from "../pages/Links";

test('renders document', () => {
  render(<Links />);
  expect(document.querySelectorAll('h2').length).toBe(1);
  expect(document.querySelectorAll('h2')[0].innerHTML).toBe('Links and resources');
  expect(screen.getByText(/Since this site is nothing else but a small glimpse of what is related to speaker designing/i)).toBeInTheDocument();
});
