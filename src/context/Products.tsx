import React, { useState, useEffect } from "react";
import { getProductsByText } from "../services/Products";

export const ProductsContext = React.createContext({});

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	async function listProducts(text: String) {
		const productsResponse = await getProductsByText(text);
		setProducts(productsResponse.data.items);
		setCategories(productsResponse.data.categories);
	}

	return (
		<ProductsContext.Provider
			value={{ products, setProducts, listProducts, categories }}
		>
			{children}
		</ProductsContext.Provider>
	);
}

export const useProducts = () => React.useContext(ProductsContext);
