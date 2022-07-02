import styled from "styled-components";

export const Container = styled.div`
	background-color: white;
	border-bottom: 1px solid var(--light-grey);
	display: flex;
	justify-content: space-between;
	cursor: pointer;

	span {
		@media (min-width: 300px) and (max-width: 528px) {
		font-size: var(--small);
		} 
		@media (min-width: 530px) and (max-width: 624px) {
			font-size: var(--normal);
		} 
		@media (min-width: 625px) and (max-width: 730px) {
			font-size: var(--normal-medium) ;
		} 
	}

`;

export const Middle = styled.div`
	margin-bottom: 2rem;
	`

export const Price = styled.span`
	font-size: var(--medium);
	font-weight: normal;	
`

export const City = styled.span`
	font-size: var(--extra-small);
	margin: 3rem 5rem;
`

export const Title = styled.span`
	font-size: var(--medium);
`

export const ProductPicture = styled.img`
	width: 100%;
	max-width: 180px;
	height: auto;
	border-radius: 4px;
	margin: 1rem;
	font-weight: normal;
`

export const LeftSide = styled.div`
	display: flex;
	flex-flow: row;
`;

export const ProductInfo = styled.div`
	margin-top: 2rem;
	h3 {
		margin-top: 2rem;
		font-weight: normal;
	}
`

export const FreeShippingIcon = styled.img`
	width: 1rem;
	height: 1rem;
	margin: 0 0 0 0.5rem;
`