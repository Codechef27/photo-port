import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);


const renderForm = [
    { name: '', email: '', message: '' }
  ]

  const mockContactSelected = jest.fn();
  const mockSetContactSelected = jest.fn();

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm
            contactForm={renderForm}
            ContactSelected={mockContactSelected}
            SetContactSelected={mockSetContactSelected}
             
              
        />)
    });
})

it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm
        contactForm={renderForm}
        ContactSelected={mockContactSelected}
        SetContactSelected={mockSetContactSelected}
        />)
        expect(asFragment()).toMatchSnapshot();
})

describe('h1 matches contact me', () => {

it('matches Contact me', () => {
    const { getByTestId } = render(<ContactForm
        contactForm={renderForm}
        ContactSelected={mockContactSelected}
        SetContactSelected={mockSetContactSelected}
        />)

    expect(getByTestId('contact-me')).toHaveTextContent('Contact Me');
})
})

describe('button has text content', () => {
it('matches Submit', () => {
    const { getByTestId } = render(<ContactForm
        contactForm={renderForm}
        ContactSelected={mockContactSelected}
        SetContactSelected={mockSetContactSelected}
       />);
    expect(getByTestId('submit-btn')).toHaveTextContent('Submit');
    
})
})
