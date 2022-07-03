import { useEffect } from "react";
import BreadCrumb from "./../components/BreadCrumb";
import ProductList from "./../components/ProductList";
import Page from "./../components/Page";
import { useProducts } from "./../context/Products";
import { useSearchParams } from 'react-router-dom'
import EmptySearch from "../components/EmptySearch";
function HomePage() {
	const { products, categories, listProducts } = useProducts();

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		userIsSearching()
	}, [searchParams])

	async function userIsSearching() {
		if (searchParams && searchParams.get("search")) {
			const searchText = searchParams.get("search") as string;
			listProducts(searchText)
		}
	}
	
	return (
		<Page>
			{products.length > 0 && (
				<>
					<BreadCrumb categories={categories} />
					<ProductList />
				</>
			)}
			{products.length <= 0 && (<EmptySearch />)}
		</Page>
	);
}

export default HomePage;
