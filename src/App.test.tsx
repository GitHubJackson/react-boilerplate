/*
 * @Desc:
 * @Author: JacksonZhou
 * @Date: 2022/02/26
 * @LastEditTime: 2022/03/15
 */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
