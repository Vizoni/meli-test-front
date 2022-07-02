import React, { useState, useEffect } from "react";
import { getProductsByText, getProductById } from "../services/Products";

export const ProductsContext = React.createContext({});

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState()
	const [categories, setCategories] = useState([]);

	async function listProducts(text: String) {
		const productsResponse = await getProductsByText(text);
		setProducts(productsResponse.data.items);
		setCategories(productsResponse.data.categories);
	}

	async function getProduct(id: Number) {
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
