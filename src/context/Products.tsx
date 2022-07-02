import React, { useState } from "react";
import { getProductsByText, getProductById } from "../services/Products";
import { Product, ProductsContextProps, ProductsProviderProps } from "../shared/types/product.interfaces";

export const ProductsContext = React.createContext({} as ProductsContextProps);

export function ProductsProvider({ children }: ProductsProviderProps) {
	const [products, setProducts] = useState<Product[]>([]);
	const [selectedProduct, setSelectedProduct] = useState<Product>({
			id: "",
			title: "",
			categories: [],
			price: {
				amount: 0,
				decimals: 0,
				currency: "",
			},
			thumbnail: "",
			pictures: [],
			condition: "",
			free_shipping: false,
			sold_quantity: 0,
			city: "",
			description: ""
	})
	const [categories, setCategories] = useState([]);

	async function listProducts(text: string) {
		const productsResponse = await getProductsByText(text);
		setProducts(productsResponse.data.items);
		setCategories(productsResponse.data.categories);
	}

	async function getProduct(id: string) {
		const productResponse = await getProductById(id);
		console.log("get product context", productResponse)
		setSelectedProduct(productResponse.data.item);
		setCategories(productResponse.data.item.categories);
	}

	return (
		<ProductsContext.Provider
			value={{ products, setProducts, listProducts, categories, getProduct, selectedProduct }}
		>
			{children}
		</ProductsContext.Provider>
	);
}

export const useProducts = () => React.useContext(ProductsContext);
