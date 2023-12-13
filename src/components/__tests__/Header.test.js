import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Header from "../Header"

test("Should render Header component with login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", { name: "Login"}) 

    // const loginButton = screen.getByText("Login")

    expect(loginButton).toBeInTheDocument();
    
})

test("Should render Header component with Cart Items 0 ", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart- (0 items)") 

    // const loginButton = screen.getByText("Login")

    expect(cartItems).toBeInTheDocument();
    
});

test("Should render Header component with Cart items ", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/) //using regex

    // const loginButton = screen.getByText("Login")

    expect(cartItems).toBeInTheDocument();
    
})

test("Should change login button to logout button on click", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", { name: "Login"})

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button" , { name: "Logout"})

    // const loginButton = screen.getByText("Login")

    expect(logoutButton).toBeInTheDocument();
    
})