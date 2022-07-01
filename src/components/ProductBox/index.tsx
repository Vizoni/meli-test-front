import { useProducts } from "../../context/Products";
import { Container, LeftSide } from "./styled";
function ProductBox({ product }) {
	function handleClick() {
		alert("clicou");
		// deve redirecionar a página de detalhes do produto
	}

	function formatPrice() {
		return product.price.decimals? `$ ${product.price.amount}.${product.price.decimals}` : `$ ${product.price.amount}`
	}

	return (
		<Container onClick={handleClick}>
			<LeftSide>
				<img src={product.picture} />
				<div>
					<h1>
						{formatPrice()}
						{product.free_shipping && (
							<img src="/icons/ic_shipping.png" />
						)}
					</h1>
					<h3>{product.title}</h3>
				</div>
			</LeftSide>
			{/* FALTA CIDADE */}
			<span>{product?.address?.city_name || ""}</span>
		</Container>
	);
}

export default ProductBox;
