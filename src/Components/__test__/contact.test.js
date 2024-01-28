import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'

describe("Grouped contactus page test cases",()=>{

    test("Should load contact us page",()=>{
        render(<Contact/>)
        const heading=screen.getByRole('heading')
    
        // Assertion
        expect(heading).toBeInTheDocument()
    })
    
    test("Should load button on contact us page",()=>{
        render(<Contact/>)
        const button=screen.getByRole('button')
    
        // Assertion
        expect(button).toBeInTheDocument()
    })
    
    // test and it are the samething we can also be name as it -naming convention
    it("Should include placeholder  on contact us page",()=>{
        render(<Contact/>)
    
        // query
        const inputName=screen.getByPlaceholderText('name')
    
        // Assertion
        expect(inputName).toBeInTheDocument()
    })
})