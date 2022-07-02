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
		<Container onClick={handleClick}>
			<LeftSide>
				<ProductPicture src={product.thumbnail} />
				<ProductInfo>
					<Middle>
						<Price>{formatCurrency(product.price.amount, product.price.decimals)}</Price>
						{product.free_shipping && (
							<FreeShippingIcon src="/icons/ic_shipping.png" />
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
