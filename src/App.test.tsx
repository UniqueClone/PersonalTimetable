import { render, screen } from "@testing-library/react";
import { App } from "./App";
import React from "react";

it('renders "Welcome to Your Fluent UI App"', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to Your Fluent UI App/i);
    expect(linkElement).toBeInTheDocument();
});

