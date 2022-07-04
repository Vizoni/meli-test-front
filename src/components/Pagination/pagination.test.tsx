import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter} from "react-router-dom";
import { ProductsProvider } from '../../context/Products';

import Pagination from './index';

describe('<Pagination/>', () => {
    beforeEach(() => {
        render(<ProductsProvider>
            <BrowserRouter>
                <Pagination />
            </BrowserRouter>
        </ProductsProvider>)
    })

    it('Should render Pagination Component with page set to 1', () => {
        expect.assertions(4)
        const mainDiv = screen.getByTestId('pagination-component')
        const buttonLastPage = screen.getByTestId('button-last-page')
        const buttonNextPage = screen.getByTestId('button-next-page')
        const currentPage = screen.getByTestId('current-page')
        expect(mainDiv).toBeInTheDocument()
        expect(buttonLastPage).toBeInTheDocument()
        expect(buttonNextPage).toBeInTheDocument()
        expect(currentPage).toHaveTextContent("1");
    })
    
    it("Should go to page number 3 and then go back to page 2", () => {
        expect.assertions(2)
        const currentPage = screen.getByTestId('current-page')
        const buttonLastPage = screen.getByTestId('button-last-page')
        const buttonNextPage = screen.getByTestId('button-next-page')
        fireEvent.click(buttonNextPage)
        fireEvent.click(buttonNextPage)
        expect(currentPage).toHaveTextContent("3")
        fireEvent.click(buttonLastPage)
        expect(currentPage).toHaveTextContent("2")
    })

})