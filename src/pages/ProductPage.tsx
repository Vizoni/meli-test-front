import { useEffect } from "react";
import BreadCrumb from "./../components/BreadCrumb";
import ProductDetail from "./../components/ProductDetail";
import Page from "./../components/Page";
import { useProducts } from "./../context/Products";
import { useParams } from 'react-router-dom'
function ProductPage() {
	const { selectedProduct, categories, getProduct } = useProducts();	

	const {id} = useParams();

    useEffect(() => {
		loadProduct()
	}, [])

	async function loadProduct() {
		if (id) {
            getProduct(id)
		}
	}

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
