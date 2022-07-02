import { useProducts } from "../../context/Products";
import { Container, LeftSide, FreeShippingIcon, ProductPicture } from "./styled";
import {useNavigate} from 'react-router-dom'
function ProductBox({ product }) {
	const navigate = useNavigate()
	
	function handleClick() {
		navigate(`/items/${product.id}`)
	}

	function formatPrice() {
		return product.price.decimals? `$ ${product.price.amount}.${product.price.decimals}` : `$ ${product.price.amount}`
	}

	return (
		<Container onClick={handleClick}>
			<LeftSide>
				<ProductPicture src={product.picture} />
				<div>
					<h1>
						{formatPrice()}
						{product.free_shipping && (
							<FreeShippingIcon src="/icons/ic_shipping.png" />
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
