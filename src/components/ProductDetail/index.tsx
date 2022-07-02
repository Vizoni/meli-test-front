import { Container, Upper, ProductPicture, BuyBox, ConditionSoldQuantity, PriceDetail, DescriptionBox } from "./styled";
import {  formatCurrencyWithoutDecimal } from "./../../utils/currency"
function ProductDetail({ product }) {

	function handleClick() {
		alert("Agradecemos seu interesse.")
	}

	function translateCondition(condition: String) {
		condition = condition.toLowerCase();
		if (condition === "new") {
			return "nuevo"
		}
		return condition;
	}


	return (
		<Container>
			<Upper>
				<ProductPicture src={product.pictures[0] || product.pictures[1]} />
				<BuyBox>
					<ConditionSoldQuantity><span>{translateCondition(product.condition)} - {product.sold_quantity}</span> vendidos</ConditionSoldQuantity>
					<h3>{product.title}</h3>
					<PriceDetail>
						<span>{formatCurrencyWithoutDecimal(product.price.amount)}</span>
						<small>{product.price.decimals}</small>
					</PriceDetail>
					<button onClick={handleClick}>Comprar</button>
				</BuyBox>

			</Upper>
			<h1>Descrípcion del producto</h1>
			<DescriptionBox>{product.description}</DescriptionBox>
		</Container>
	);
}

export default ProductDetail;
