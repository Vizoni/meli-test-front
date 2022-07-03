import { Container, LeftSide, FreeShippingIcon, Middle, ProductPicture, Title, Price, City, ProductInfo } from "./styled";
import {useNavigate} from 'react-router-dom'
import {  formatCurrency } from "../../shared/currency"
import { ProductDetailPropTypes } from "../../shared/types/components.interfaces";


function ProductBox({ product }: ProductDetailPropTypes ) {
	const navigate = useNavigate()

	function handleClick() {
		navigate(`/items/${product.id}`)
	}
	return (
		<Container onClick={handleClick} tabIndex={0} data-testId="productbox-component">
			<LeftSide>
				<ProductPicture src={product.thumbnail} alt="Miniatura da imagem do produto" />
				<ProductInfo>
					<Middle>
						<Price data-testId="productbox-price">{formatCurrency(product.price.amount, product.price.decimals)}</Price>
						{product.free_shipping && (
							<FreeShippingIcon data-testId="productbox-shippingicon" src="/icons/ic_shipping.webp" alt="Ícone de frete grátis"/>
						)}
					</Middle>
					<Title>{product.title}</Title>
				</ProductInfo>
			</LeftSide>
			<City>{product.city}</City>
		</Container>
	);
}

export default ProductBox;
