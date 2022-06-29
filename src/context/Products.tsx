import React, { useState, useEffect } from "react";
import { getProductsByText } from "../services/Products";
import { getCategoryPathById } from "../services/Categories";

export const ProductsContext = React.createContext({});

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	async function listProducts(text: String) {
		const productsResponse = await getProductsByText(text);
		setProducts(productsResponse.data.results);
		getProductCategories(productsResponse.data.results[0].category_id);
	}

	async function getProductCategories(categoryId: String) {
		const categoriesResponse = await getCategoryPathById(categoryId);
		setCategories(categoriesResponse.data.path_from_root);
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
