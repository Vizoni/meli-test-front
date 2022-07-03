import { Container, Upper, ProductPicture, BuyBox, ConditionSoldQuantity, PriceDetail, DescriptionBox, Sides } from "./styled";
import {  formatCurrencyWithoutDecimal } from "../../shared/currency"
import { ProductDetailPropTypes } from "../../shared/types/components.interfaces";

function ProductDetail({ product }: ProductDetailPropTypes) {

	function handleClick() {
		alert("Agradecemos seu interesse.")
	}

	function translateCondition(condition: string): string {
		condition = condition.toLowerCase();
		if (condition === "new") {
			return "nuevo"
		}
		return condition;
	}


	return (
		// <Container>
		// 	<Upper>
		// 		<ProductPicture src={product.pictures[0] || product.pictures[1]} alt="Imagem do produto" tabIndex={0}/>
		// 		<BuyBox>
		// 			<ConditionSoldQuantity tabIndex={0}><span>{translateCondition(product.condition)} - {product.sold_quantity}</span> vendidos</ConditionSoldQuantity>
		// 			<h3 tabIndex={0}>{product.title}</h3>
		// 			<PriceDetail tabIndex={0}>
		// 				<span>{formatCurrencyWithoutDecimal(product.price.amount)}</span>
		// 				<small>{product.price.decimals}</small>
		// 			</PriceDetail>
		// 			<button onClick={handleClick} tabIndex={0}>Comprar</button>
		// 		</BuyBox>
		// 	</Upper>
		// 	<DescriptionBox tabIndex={0}>
		// 		<h1>Descrípcion del producto</h1>
		// 		<span>{product.description}</span>
		// 	</DescriptionBox>
		// 	{/* <h1>Descrípcion del producto</h1> */}
		// 	{/* <DescriptionBox tabIndex={0}>{product.description}</DescriptionBox> */}
		// </Container>



		<Container>
			<Sides>
				<ProductPicture src={product.pictures[0] || product.pictures[1]} alt="Imagem do produto" tabIndex={0}/>
				<DescriptionBox tabIndex={0}>
					<h1>Descrípcion del producto</h1>
					<span>{product.description}</span>
				</DescriptionBox>
			</Sides>
			<Sides>
				<BuyBox>
		 			<ConditionSoldQuantity tabIndex={0}><span>{translateCondition(product.condition)} - {product.sold_quantity}</span> vendidos</ConditionSoldQuantity>
		 			<h3 tabIndex={0}>{product.title}</h3>
		 			<PriceDetail tabIndex={0}>
		 				<span>{formatCurrencyWithoutDecimal(product.price.amount)}</span>
						<small>{product.price.decimals}</small>
		 			</PriceDetail>
		 			<button onClick={handleClick} tabIndex={0}>Comprar</button>
		 		</BuyBox>
			</Sides>
		</Container>
	);
}

export default ProductDetail;
