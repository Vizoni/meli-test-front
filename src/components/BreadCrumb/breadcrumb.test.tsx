import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import BreadCrumb from './index';

let props = {
    categories: ["Móveis e Decoração", "Tapetes"]
}

describe('<BreadCrumb/>', () => {
    it('Should render BreadCrumb Component', () => {
        render(<BreadCrumb {...props}/>)
        const mainDiv = screen.getByTestId('breadcrumb-component')
        expect(mainDiv).toBeInTheDocument()
    })

    it('Should render 2 breadcrumb items', () => {
        render(<BreadCrumb {...props}/>)
        const breadCrumbList = screen.getAllByTestId('breadcrumb-item')
        expect(breadCrumbList).toHaveLength(props.categories.length)
    })

    it('Should render separator by the amount of breadcrum items - 1', () => {
        render(<BreadCrumb {...props}/>)
        const breadCrumbSeparator = screen.getAllByTestId('separator')
        expect(breadCrumbSeparator).toHaveLength(props.categories.length-1)
    })
})