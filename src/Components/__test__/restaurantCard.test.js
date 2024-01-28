const { render,screen } = require("@testing-library/react")
import mock_data from '../mocks/ResCardMock.json'
import "@testing-library/jest-dom";
import RetaurantCard from '../RetaurantCard'
import { it } from 'node:test';

it("should render restaurant card component with data",()=>{
    render(<RetaurantCard details={mock_data}/>)
    const title=screen.getByText("La Pino'z Pizza")
    
    expect(title).toBeInTheDocument()

})

// it("should render restaurant card with 50% off label",()=>{

// })