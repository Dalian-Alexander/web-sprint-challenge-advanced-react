import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)
    const checkoutButton = screen.getByRole('button', {name:/Checkout/i} )

    userEvent.type(firstNameInput, 'Tom');
    userEvent.type(lastNameInput, 'Smith');
    userEvent.type(addressInput, '27 Imaginary Ln');
    userEvent.type(cityInput, 'Imagine City');
    userEvent.type(stateInput, 'New York');
    userEvent.type(zipInput, '10001');
    userEvent.click(checkoutButton);

    const checkoutMessage = screen.getByText(/You have ordered some plants! Woo-hoo!/i)
    expect(checkoutMessage).toBeInTheDocument();
});
