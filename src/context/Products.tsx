import React, { useState } from "react";
import { getProductsByText, getProductById } from "../services/Products";
import { Product, ProductsContextProps, ProductsProviderProps } from "../shared/types/product.interfaces";

export const ProductsContext = React.createContext({} as ProductsContextProps);

export function ProductsProvider({ children }: ProductsProviderProps) {
	const [products, setProducts] = useState<Product[]>([]);
	const [selectedProduct, setSelectedProduct] = useState<Product>()
	const [categories, setCategories] = useState([]);

	async function listProducts(text: string) {
		const productsResponse = await getProductsByText(text);
		setProducts(productsResponse.items);
		setCategories(productsResponse.categories);
	}

	async function getProduct(id: string) {
		const productResponse = await getProductById(id);
		console.log("get product context", productResponse)
		setSelectedProduct(productResponse.item);
		setCategories(productResponse.item.categories);
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
