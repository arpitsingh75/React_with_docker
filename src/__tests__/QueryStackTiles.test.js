import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryStackTiles } from '../components/Common/QueryStackTiles';

describe('QueryStackTiles', () => {
  it('renders the component with the correct props', () => {
    const id = 1;
    const coursename = 'Math';
    const username = 'John Doe';
    const userquery = 'What is the answer to question 1?';
    
    const { getByText } = render(
      <QueryStackTiles
        id={id}
        coursename={coursename}
        username={username}
        userquery={userquery}
      />
    );
    
    expect(screen.getByText(coursename)).toBeInTheDocument();
    expect(screen.getByText(username)).toBeInTheDocument();
    expect(screen.getByText(userquery)).toBeInTheDocument();
  });
});