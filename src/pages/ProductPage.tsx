import { useEffect } from "react";
import BreadCrumb from "./../components/BreadCrumb";
import ProductDetail from "./../components/ProductDetail";
import Page from "./../components/Page";
import { useProducts } from "./../context/Products";
import { useParams, useLocation } from 'react-router-dom'
function ProductPage() {
	const { selectedProduct, categories, getProduct } = useProducts();	

	const {id} = useParams();

    useEffect(() => {
		loadProduct()
	}, [])

    useEffect(() => {
		console.log("na pagina prod", selectedProduct)
		console.log("na pagina cat", categories)
	}, [selectedProduct])

	async function loadProduct() {
		if (id) {
            getProduct(id)
		}

	}

	// -------------------------
	// const location = useLocation();
	// console.log("location", location, location.state)
	// console.log("params id", id)
	// -------------------------

	return (
		<Page>
            {selectedProduct && (
				<>
					<BreadCrumb categories={categories} />
					<ProductDetail product={selectedProduct} />
				</>
			)}
		</Page>
	);
}

export default ProductPage;
