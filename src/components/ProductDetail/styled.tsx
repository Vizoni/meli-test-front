import styled from "styled-components";

export const Container = styled.div`
	background-color: white;
	border-bottom: 1px solid var(--light-grey);
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding: 2rem;
`;

export const DescriptionBox = styled.span`
	font-size: var(--extra-small);
	margin: 2rem 0;
	text-align: justify;
`

export const Upper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	overflow: hidden;
	
	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
	} 
`

export const BuyBox = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem;

	button {
		background-color: var(--blue);
		font-size: var(--normal);
		color: #fff;
		border: 0;
		border-radius: 0.2rem;
		padding: 0.75rem;
		cursor: pointer;

		@media (max-width: 900px) {
			margin-bottom: 2rem;
		} 
	}

`

export const PriceDetail = styled.div`
	display: flex;
	margin: 2rem 0;

	small {
		font-size: var(--medium);
	}

	span {
		font-size: var(--large);
	}

	
	@media (max-width: 1000px) {
		small {
			font-size: var(--normal-medium);
		}
	
		span {
			font-size: var(--medium-large)
		}

	}
`

export const ConditionSoldQuantity = styled.small`
	span {
		text-transform: capitalize;
	}
	font-size: var(--small);
	margin-bottom: 1rem;
`


export const FreeShippingIcon = styled.img`
	width: 1rem;
	height: 1rem;
	margin: 0 0 0 0.5rem;
`

export const ProductPicture = styled.img`
	/* width: 42.5rem; */
	width: 100%;
	max-width: 680px;
	height: auto;
	border-radius: 4px;
	margin-bottom: 1rem;
	object-fit: center;
	
	@media (min-width: 600px) and (max-width: 899px) {
		width: 100%;
	} 
	@media (max-width: 950px) {
		width: 100%;
	} 

	
`

