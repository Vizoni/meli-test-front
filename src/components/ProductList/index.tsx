import { useProducts } from "./../../context/Products";
import { Container } from "./styled";
import ProductBox from "./../ProductBox";
function ProductList() {
	const { products } = useProducts();
	console.log("prod", products);
	return (
		<Container>
			{products.map((product) => {
				return <ProductBox product={product} />;
			})}
		</Container>
	);
}

export default ProductList;
