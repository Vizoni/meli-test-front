import { useEffect } from "react";
import BreadCrumb from "./../components/BreadCrumb";
import ProductList from "./../components/ProductList";
import Page from "./../components/Page";
import { useProducts } from "./../context/Products";
function HomePage() {
	const { products, categories } = useProducts();

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
