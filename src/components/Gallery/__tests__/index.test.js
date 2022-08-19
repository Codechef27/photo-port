import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'

const portraits = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('Gallery is rendering', () => {

  it('renders', () => {
    render(<Gallery currentCategory={portraits} />);
  });
})

it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portraits} />)
    expect(asFragment()).toMatchSnapshot()
})

it('renders', () => {
    const { getByTestId } = render(<Gallery currentCategory={portraits} />)
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
})