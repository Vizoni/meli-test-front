import styled from "styled-components";

export const Container = styled.div`
	background-color: white;
	border-bottom: 1px solid var(--light-grey);
	display: flex;
	flex-direction: row;
	padding: 2rem;

	h1 {
		font-weight: normal;
	}

	@media (max-width: 1330px) {
		flex-direction: column-reverse;
		align-self: center;
		justify-content: center;
		padding: 0;
		width: 100%;
	}
`;

export const DescriptionBox = styled.div`
	margin: 2rem 0 0 2rem;
	max-width: 680px;
	span {
		font-size: var(--extra-small);
		margin: 2rem 0;
		text-align: justify;
	}

	@media (max-width: 1330px) {
		flex-direction: column-reverse;
		align-self: center;
		justify-content: center;
		margin: 2rem;
	}
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

export const Sides = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
	width: 100%;
`

export const BuyBox = styled.div`
	margin: 1rem;

	button {
		background-color: var(--blue);
		font-size: var(--normal);
		color: #fff;
		border: 0;
		border-radius: 0.2rem;
		padding: 0.75rem;
		cursor: pointer;
		width: 100%;
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
	
`

