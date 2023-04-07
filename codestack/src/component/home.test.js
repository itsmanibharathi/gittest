import { render,screen } from "@testing-library/react"
import { Home } from "./Home";

describe("test1",()=>{

    test('Testing my home component', () => { 
        render(<Home />);
        const data= screen.getByText(/home/i);
        expect(data).toBeInTheDocument();
        
    })
})