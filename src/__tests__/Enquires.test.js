import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Enquires } from '../pages/Enquires';

test('submitForm navigates to home when username and email are provided', () => {
    <Router>
        render(<Enquires />);

        fireEvent.change(screen.getByPlaceholderText('Enter Your Name'), {target: { value: 'John'}});
        fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), { target: { value: 'john@example.com' } });
        
        // Click the submit button
        fireEvent.click(screen.getByText('Submit'));
        
        // Assert that navigate is called with the correct path
        expect(navigate).toHaveBeenCalledWith('/');
    </Router>
  });
  
  test('submitForm sets isValid to false when username or email are not provided', () => {
    <Router>
    render(<Enquires />);

    fireEvent.change(screen.getByPlaceholderText('Enter Your Name'), { target: { value: '' } });
    fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), { target: { value: '' } });

    fireEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('Name and Email are mandatory fields.')).toBeInTheDocument();
    </Router>
  });