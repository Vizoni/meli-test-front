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
		<Container onClick={handleClick} tabIndex={0}>
			<LeftSide>
				<ProductPicture src={product.thumbnail} alt="Miniatura da imagem do produto" />
				<ProductInfo>
					<Middle>
						<Price>{formatCurrency(product.price.amount, product.price.decimals)}</Price>
						{product.free_shipping && (
							<FreeShippingIcon src="/icons/ic_shipping.png" alt="Ícone de frete grátis"/>
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
