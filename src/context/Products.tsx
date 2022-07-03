import React, { useState } from "react";
import { getProductById, getProductsByTextWithPagination } from "../services/Products";
import { Product, ProductsContextProps, ProductsProviderProps } from "../shared/types/product.interfaces";

export const ProductsContext = React.createContext({} as ProductsContextProps);

export function ProductsProvider({ children }: ProductsProviderProps) {
	const [pagination, setPagination] = useState({total: 0, primary_results: 0, offset: 1, limit: 1})
	const [products, setProducts] = useState<Product[]>([]);
	const [selectedProduct, setSelectedProduct] = useState<Product>()
	const [categories, setCategories] = useState([]);

	async function listProducts(text: string, offset = 1) {
		const response = await getProductsByTextWithPagination(text, offset);
		setProducts(response.items);
		setCategories(response.categories);
		setPagination(response.pagination);
	}

	async function getProduct(id: string) {
		const productResponse = await getProductById(id);
		setSelectedProduct(productResponse.item);
		setCategories(productResponse.item.categories);
	}

	return (
		<ProductsContext.Provider
			value={{ products, setProducts, listProducts, categories, getProduct, selectedProduct, pagination }}
		>
			{children}
		</ProductsContext.Provider>
	);
}

export const useProducts = () => React.useContext(ProductsContext);
