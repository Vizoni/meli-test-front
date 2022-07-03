import { useProducts } from "./../../context/Products";
import { Container } from "./styled";
import ProductBox from "./../ProductBox";
import Pagination from "../Pagination";
function ProductList() {
	const { products } = useProducts();
	return (
		<>
			<Container>
				{products.map((product, index) => {
					return <ProductBox product={product} key={index} />;
				})}
			</Container>
			<Pagination />
		</>
	);
}

export default ProductList;
