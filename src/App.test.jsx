import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('counter tests', () => {
    
  test("App should render with page", () => {
    render(<App />);
    expect(screen.getByText('CatsCrib')).toBeDefined();
  });

});