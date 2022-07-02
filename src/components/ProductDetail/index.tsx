import { useProducts } from "../../context/Products";
import { Container, FreeShippingIcon, Upper, ProductPicture, BuyBox, ConditionSoldQuantity, PriceDetail } from "./styled";
function ProductDetail({ product }) {

	function formatPrice() {
		return product?.price.decimals? `$ ${product.price.amount}.${product.price.decimals}` : `$ ${product?.price.amount}`
	}

	function handleClick() {
		alert("Agradecemos seu interesse.")
	}

	return (
		<Container>
			<Upper>
				<ProductPicture src={product.picture} />
				<BuyBox>
					<ConditionSoldQuantity><span>{product.condition} - {product.sold_quantity}</span> vendidos</ConditionSoldQuantity>
					<h3>{product.title}</h3>
					<PriceDetail>
						<h2>$ {product.price.amount}</h2>
						<small>{product.price.decimals}</small>
					</PriceDetail>
					<button onClick={handleClick}>Comprar</button>
				</BuyBox>

			</Upper>
			<h1>Descrição do produto</h1>
			<span>{product.description}</span>
		</Container>
	);
}

export default ProductDetail;
