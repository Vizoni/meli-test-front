import React, { useState, useEffect } from "react";
import { getProductsByText } from "../services/GetProducts";

export const ProductsContext = React.createContext({});

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState([]);

	async function listProducts(text: String) {
		const productsResponse = await getProductsByText(text);
		console.log(productsResponse.data.results);
	}

	return (
		<ProductsContext.Provider value={{ products, setProducts, listProducts }}>
			{children}
		</ProductsContext.Provider>
	);
}

export const useProducts = () => React.useContext(ProductsContext);
