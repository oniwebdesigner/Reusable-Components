import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomButton from '../components/CustomButton';

describe('CustomButton', () => {
    test('shfaq tekstin e duhur në buton', () => {
      render(<CustomButton href="/test">Click Me</CustomButton>);
  
      
      const buttonElement = screen.getByText(/Click Me/i);
      expect(buttonElement).toBeInTheDocument();
    });
  
    test('aplikon klasën e personalizuar', () => {
      render(
        <CustomButton href="/test" className="custom-class">
          Custom Class Button
        </CustomButton>
      );
  
     
      const buttonElement = screen.getByText(/Custom Class Button/i);
      expect(buttonElement).toHaveClass('custom-class');
    });
  });