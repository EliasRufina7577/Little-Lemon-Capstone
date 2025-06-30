import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders booking form title', () => {
  render(<BookingForm />);
  const heading = screen.getByText(/Table Booking Form/i);
  expect(heading).toBeInTheDocument();
});
