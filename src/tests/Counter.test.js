// import necessary react testing library helpers here
// import the Counter component here
import {render, screen} from '@testing-library/react'
import Counter from "../components/Counter.js"
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'


beforeEach(() => {
  render(<Counter />)
})

test('renders counter message', async () => {
  await screen.findByRole("heading");
  expect(screen.getByRole("heading")).toHaveTextContent("Counter");
});

test('should render initial count with value of 0', async () => {
  await screen.findByTestId("count");
  expect(screen.getByTestId("count")).toHaveTextContent("0");
});

test('clicking + increments the count', async () => {
  let countBefore = parseInt(screen.getByTestId("count").textContent);

  userEvent.click(screen.getByRole("button", {name: "+"}));
  expect(screen.getByTestId("count")).toHaveTextContent((countBefore + 1).toString());
});

test('clicking - decrements the count', () => {
  let countBefore = parseInt(screen.getByTestId("count").textContent);
  
  userEvent.click(screen.getByRole("button", {name: "-"}));
  expect(screen.getByTestId("count")).toHaveTextContent((countBefore - 1).toString());
});
