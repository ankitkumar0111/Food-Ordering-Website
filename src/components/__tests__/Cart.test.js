import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/resMenuMock.json"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Cart"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should add order to the cart", async () => {
    await act( async () => {
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
        <RestaurantMenu/>
        <Cart/>
        </Provider>
        </BrowserRouter>)

    })

    const accordionHeader = screen.getByText("Desserts. (3)")
    fireEvent.click(accordionHeader)

    expect(screen.getAllByTestId("foodItems").length).toBe(3)

    const addBtns = screen.getAllByRole("button")
    expect(screen.getByText("Cart- (0 items)")).toBeInTheDocument();

    // expect(addBtns.length).toBe(3)
    fireEvent.click(addBtns[1])

    expect(screen.getByText("Cart- (1 items)")).toBeInTheDocument();
    // expect(accordianHeader).toBeInTheDocument()

    expect(screen.getAllByTestId("foodItems").length).toBe(4)

    const clearCartBtn = screen.getByRole("button", { name: "Clear Cart"})

    fireEvent.click(clearCartBtn)

    expect(screen.getAllByTestId("foodItems").length).toBe(3)

    
    expect(screen.getByText("Cart- (0 items)")).toBeInTheDocument();
})