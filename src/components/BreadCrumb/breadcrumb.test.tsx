import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import BreadCrumb from './index';

let props = {
    categories: ["Móveis e Decoração", "Tapetes"]
}

describe('<BreadCrumb/>', () => {
    beforeEach(() => {
        render(<BreadCrumb {...props}/>)
    })

    it('Should render BreadCrumb Component', () => {
        expect.assertions(2)
        const mainDiv = screen.getByTestId('breadcrumb-component')
        expect(mainDiv).toBeInTheDocument()
        expect(mainDiv).toHaveTextContent("Móveis e Decoração > Tapetes")
    })
    
    it('Should render 2 breadcrumb items', () => {
        expect.assertions(2)
        const breadCrumbList = screen.getAllByTestId('breadcrumb-item')
        expect(breadCrumbList).toHaveLength(props.categories.length)
        expect(breadCrumbList[0]).toHaveTextContent(props.categories[0])
    })
    
    it('Should render separator by the amount of breadcrum items - 1', () => {
        expect.assertions(1)
        const breadCrumbSeparator = screen.getAllByTestId('separator')
        expect(breadCrumbSeparator).toHaveLength(props.categories.length-1)
    })
})