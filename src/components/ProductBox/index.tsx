import { useProducts } from "../../context/Products";
import { Container, LeftSide } from "./styled";
function ProductBox({ product }) {
	function handleClick() {
		alert("clicou");
		// deve redirecionar a página de detalhes do produto
	}

	return (
		<Container onClick={handleClick}>
			<LeftSide>
				<img src={product.thumbnail} />
				<div>
					<h1>
						$ {product.price}
						{product.shipping.free_shipping && (
							<img src="/icons/ic_shipping.png" />
						)}
					</h1>
					<h3>{product.title}</h3>
				</div>
			</LeftSide>
			<span>{product.address.city_name}</span>
		</Container>
	);
}

export default ProductBox;
