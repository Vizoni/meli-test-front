import { useEffect } from "react";
import BreadCrumb from "./../components/BreadCrumb";
import ProductList from "./../components/ProductList";
import Page from "./../components/Page";
import { useProducts } from "./../context/Products";
import { useParams, useLocation, useSearchParams } from 'react-router-dom'
function HomePage() {
	const { products, categories, listProducts } = useProducts();

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		userIsSearching()
	}, [])

	async function userIsSearching() {
		if (searchParams) {
			const searchText = searchParams.get("search")
			console.log("searchParams", searchParams)
			listProducts(searchText)
		}

	}
	

	// -------------------------
	const params = useParams();
	const location = useLocation();
	console.log("location", location, location.state)
	console.log("params", params)
	// -------------------------

	return (
		<Page>
			{products.length > 0 && (
				<>
					<BreadCrumb categories={categories} />
					<ProductList products={products} />
				</>
			)}
		</Page>
	);
}

export default HomePage;
