import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

test("should render Restaurant Card component with props data", ()  => {

    render(<RestaurantCard resData = {MOCK_DATA}/>)

    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

    expect(name).toBeInTheDocument();
})

// test("should render Restaurant Card with promoted label", () => {

//     render(withPromotedLabel);

//     const label = screen.getByRole("")
// })