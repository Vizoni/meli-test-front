import '@testing-library/jest-dom/extend-expect'

import { getProductsByText, getProductById } from "./Products"

const categoriesList = ["Celulares y Teléfonos", "Celulares y Smartphones"]
const productList = [
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
            "decimals": null
        }
    },
    {
        "id": "MLA1119561622",
        "title": "Apple iPhone 11 (128 Gb) - Blanco",
        "thumbnail": "http://http2.mlstatic.com/D_796892-MLA46114829828_052021-I.jpg",
        "condition": "new",
        "free_shipping": true,
        "city": "Agronomía",
        "price": {
            "currency": "ARS",
            "amount": 274999,
            "decimals": null
        }
    },
    {
        "id": "MLA1117980186",
        "title": "Apple iPhone 12 (128 Gb) - Negro",
        "thumbnail": "http://http2.mlstatic.com/D_743195-MLA45719932493_042021-I.jpg",
        "condition": "new",
        "free_shipping": true,
        "city": "Agronomía",
        "price": {
            "currency": "ARS",
            "amount": 292999,
            "decimals": null
        }
    },
    {
        "id": "MLA1109011009",
        "title": "Apple iPhone 13 (128 Gb) - (product)red",
        "thumbnail": "http://http2.mlstatic.com/D_834059-MLA47781378504_102021-I.jpg",
        "condition": "new",
        "free_shipping": true,
        "city": "Palermo",
        "price": {
            "currency": "ARS",
            "amount": 281999,
            "decimals": null
        }
    }
]

describe("Products API -> getProductsByText", () => {
    it("Should get the correct response data structure for a found product", async () => {
        expect.assertions(3)
        return getProductsByText("Iphone").then(response => {
            expect(response).toEqual(expect.objectContaining({
                categories: expect.any(Array),
                items: expect.any(Array)
            }))
            expect(response.categories.length).toBeGreaterThan(0)
            expect(response.items.length).toBeGreaterThan(0)
        })
    })
    it("Should get the correct response data structure for a not found product", async () => {
        expect.assertions(3)
        return getProductsByText("JDSAKDJJDASOIJDSQWE").then(response => {
            expect(response).toEqual(expect.objectContaining({
                categories: expect.any(Array),
                items: expect.any(Array)
            }))
            expect(response.categories.length).not.toBeGreaterThan(0)
            expect(response.items.length).not.toBeGreaterThan(0)
        })
    })
})

describe("Products API -> getProductById", () => {
    it("Should return the correct response structure for a found product", async () => {
        expect.assertions(4)
        return getProductById("MLA1119561622").then(product => {
            console.log("PRODUTOo", product)
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
