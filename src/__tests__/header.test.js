// import { render, screen } from '@testing-library/react';
import { Header } from '../components/Global/Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header', () => {
  test('renders course title correctly', () => {
    <Router>
        render(<Header />);
        const courseTitle = screen.getByText(/Course Details/i);
        expect(courseTitle).toBeInTheDocument();
    </Router>
  });

  test('renders home link correctly', () => {
    <Router>
        render(<Header />);
        const homeLink = screen.getByText(/Home/i);
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute('href', '/');
    </Router>
  });

  test('renders queries link correctly', () => {
    <Router>
        render(<Header />);
        const queriesLink = screen.getByText(/Queries/i);
        expect(queriesLink).toBeInTheDocument();
        expect(queriesLink).toHaveAttribute('href', '/queries');
    </Router>
  });

  test('renders enquires link correctly', () => {
    <Router>
        render(<Header />);
        const enquiresLink = screen.getByText(/Enquires/i);
        expect(enquiresLink).toBeInTheDocument();
        expect(enquiresLink).toHaveAttribute('href', '/enquires');
    </Router>
  });
});