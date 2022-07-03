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
    it("Should get the products related to iphone", async () => {
        expect.assertions(1)
        const responseAPI = { categories: categoriesList, items: productList }
        await expect(getProductsByText("Iphone")).resolves.toEqual(responseAPI)
    })
    it("Should return empty response from empty search param", async () => {
        expect.assertions(1)
        const responseAPI = { categories: [], items: [] }
        await expect(getProductsByText("")).resolves.toEqual(responseAPI)
    })
})

describe("Products API -> getProductById", () => {
    it("Should get the details of product id MLA1119561622", async () => {
        expect.assertions(1)
        const responseAPI = {
            "item": {
                "id": "MLA1119561622",
                "title": "Apple iPhone 11 (128 Gb) - Blanco",
                "categories": [
                    "Celulares y Teléfonos",
                    "Celulares y Smartphones"
                ],
                "price": {
                    "currency": "ARS",
                    "amount": 214499,
                    "decimals": 22
                },
                "thumbnail": "http://http2.mlstatic.com/D_796892-MLA46114829828_052021-I.jpg",
                "pictures": [
                    "http://http2.mlstatic.com/D_796892-MLA46114829828_052021-O.jpg",
                    "http://http2.mlstatic.com/D_781098-MLA46114829829_052021-O.jpg"
                ],
                "condition": "new",
                "free_shipping": true,
                "sold_quantity": 50,
                "city": "Agronomía",
                "description": "Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas (3). Aprovecha un rendimiento sin precedentes en los juegos, la realidad aumentada y la fotografía con el chip A13 Bionic. Haz mucho más sin necesidad de volver a cargar el teléfono gracias a su batería de larga duración (2). Y no te preocupes si se moja, el iPhone 11 tiene una resistencia al agua de hasta 30 minutos a una profundidad máxima de 2 metros (1).\n\n\nAvisos Legales\n(1) El iPhone 11 es resistente a las salpicaduras, al agua y al polvo, y fue probado en condiciones de laboratorio controladas, con una clasificación IP68 según la norma IEC 60529 (hasta 30 minutos a una profundidad máxima de 2 metros). La resistencia a las salpicaduras, al agua y al polvo no es una condición permanente, y podría disminuir como consecuencia del uso normal. No intentes cargar un iPhone mojado; consulta el manual del usuario para ver las instrucciones de limpieza y secado. La garantía no cubre daños producidos por líquidos.\n(2) La duración de la batería varía según el uso y la configuración.\n(3) La pantalla tiene las esquinas redondeadas. Si se mide en forma de rectángulo, la pantalla del iPhone 11 tiene 6.06 pulgadas en diagonal. El área real de visualización es menor.\n(4) Los cargadores inalámbricos Qi se venden por separado."
            }
        }
        await expect(getProductById("MLA1119561622")).resolves.toEqual(responseAPI)
    })
    it("Should return empty response from empty search param", async () => {
        expect.assertions(1)
        const responseAPI = {
            "error": "resource not found",
            "message": "Si quieres conocer los recursos de la API que se encuentran disponibles visita el Sitio de Desarrolladores de MercadoLibre (http://developers.mercadolibre.com)"
        }
        return getProductById("MLA1120001051dsf").catch(e => {
            expect(e.response.data).toEqual(responseAPI)
        })
    })
})