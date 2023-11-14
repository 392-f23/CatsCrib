import { render, screen } from '@testing-library/react';
import Footer from "../components/Footer";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Footer Component', () => {
  it('renders "+" button when user is signed in with a Northwestern account', () => {
    const northwesternProfile = {
      email: 'fakeuser@northwestern.edu',
      emailVerified: true,
    };
    render(
      <BrowserRouter>
        <Footer profile={northwesternProfile} />
      </BrowserRouter>
    );
    const postButton = screen.getByAltText('Make a Post');
    expect(postButton).toBeInTheDocument();
  });

  it('does not render "+" button when user is not signed in', () => {
    render(
      <BrowserRouter>
        <Footer profile={null} />
      </BrowserRouter>
    );
    const postButton = screen.queryByAltText('Make a Post');
    expect(postButton).not.toBeInTheDocument();
  });

  it('does not render "+" button when user is signed in with a non-Northwestern account', () => {
    const nonNorthwesternProfile = {
      email: 'user@gmail.com',
      emailVerified: true,
    };
    render(
      <BrowserRouter>
        <Footer profile={nonNorthwesternProfile} />
      </BrowserRouter>
    );
    const postButton = screen.queryByAltText('Make a Post');
    expect(postButton).not.toBeInTheDocument();
  });
});
