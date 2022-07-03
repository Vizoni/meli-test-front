import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter} from "react-router-dom";

import ProductBox from './index';
import { ProductsProvider } from '../../context/Products';
import {  formatCurrency } from "./../../shared/currency"

let props = {
    product:
        {
            "id": "MLA1120025735",
            "title": "Apple iPhone 11 (64 Gb) - Blanco",
            "thumbnail": "http://http2.mlstatic.com/D_809326-MLA46115014340_052021-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "city": "Agronomía",
            "price": {
                "currency": "ARS",
                "amount": 249999,
                "decimals": 10
            },
            "categories": ['Móveis e Decoração'],
            "sold_quantity": 80,
            "pictures": [],
            "description": "Descrição teste"

        },
}

describe('<ProductBox/>', () => {
    beforeEach(() => {
        render(<ProductsProvider>
            <BrowserRouter>
                <ProductBox product={props.product}/>
            </BrowserRouter>
        </ProductsProvider>)
    })

    it('Should render ProductBox Component', () => {
        expect.assertions(1)
        const mainDiv = screen.getByTestId("productbox-component")
        expect(mainDiv).toBeInTheDocument()
    })
    
    it('Should display free shipping icon if product data says so', () => {
        expect.assertions(2)
        const freeShippingIcon = screen.getByTestId("productbox-shippingicon")
        if (props.product.free_shipping) {
            expect(freeShippingIcon).toBeInTheDocument()
            expect(freeShippingIcon).toHaveAttribute('alt')
        } else {
            expect(freeShippingIcon).not.toBeInTheDocument()
            expect(freeShippingIcon).toHaveAttribute('alt')
        }
    })
    
    it('Should display the formatted price of the product', () => {
        expect.assertions(3)
        const priceElement = screen.getByTestId("productbox-price")
        expect(priceElement).toBeInTheDocument()
        expect(formatCurrency(props.product.price.amount, props.product.price.decimals)).toEqual("$ 249.999,10")
        expect(priceElement).toHaveTextContent(formatCurrency(props.product.price.amount, props.product.price.decimals))
    })
    
})