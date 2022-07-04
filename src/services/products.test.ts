import '@testing-library/jest-dom/extend-expect'

import { getProductsByTextWithPagination, getProductById } from "./Products"

describe("Products API -> getProductsByTextWithPagination", () => {
    it("Should get the correct response data structure for a found product", async () => {
        expect.assertions(3)
        return getProductsByTextWithPagination("Iphone", 1).then(response => {
            expect(response).toEqual(expect.objectContaining({
                categories: expect.any(Array),
                items: expect.any(Array),
                pagination: expect.any(Object)
            }))
            expect(response.categories.length).toBeGreaterThan(0)
            expect(response.items.length).toBeGreaterThan(0)
        })
    })
    it("Should get the correct response data structure for a not found product", async () => {
        expect.assertions(4)
        return getProductsByTextWithPagination("JDSAKDJJDASOIJDSQWE", 1).catch(error => {
            expect(error.response.data).toEqual(expect.objectContaining({
                categories: expect.any(Array),
                items: expect.any(Array),
                pagination: expect.any(Object)
            }))
            expect(error.response.data.categories.length).not.toBeGreaterThan(0)
            expect(error.response.data.items.length).not.toBeGreaterThan(0)
            expect(error.response.status).toEqual(404)
        })
    })
})

describe("Products API -> getProductById", () => {
    it("Should return the correct response structure for a found product", async () => {
        expect.assertions(4)
        return getProductById("MLA1119561622").then(product => {
            expect(product).toEqual(expect.objectContaining({
                item: expect.any(Object),
            }))
            expect(product.item).toEqual(expect.objectContaining({
                id: expect.any(String),
                title: expect.any(String),
                categories: expect.any(Array),
                price: expect.any(Object),
                thumbnail: expect.any(String),
                pictures: expect.any(Array),
                condition: expect.any(String),
                free_shipping: expect.any(Boolean),
                sold_quantity: expect.any(Number),
                city: expect.any(String),
                description: expect.any(String),
            }))
            expect(product.item.categories.length).toBeGreaterThanOrEqual(0);
            expect(product.item.pictures.length).toBeGreaterThanOrEqual(0);

        })
    })
    it("Should return 404 status code from an invalid id or not found product", async () => {
        expect.assertions(2)
        return getProductById("MLA1120001051dsf").catch(e => {
            expect(e.response.status).toEqual(404)
            expect(e.response.data).toBeDefined()
        })
    })
})
