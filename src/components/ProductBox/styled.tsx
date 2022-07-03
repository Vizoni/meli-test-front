import styled from "styled-components";

export const Container = styled.div`
	background-color: white;
	border-bottom: 1px solid var(--light-grey);
	display: flex;
	justify-content: space-between;
	cursor: pointer;

`;

export const Middle = styled.div`
	margin-bottom: 2rem;
	`

export const Price = styled.span`
	font-size: var(--medium);
	font-weight: normal;
	@media (max-width: 550px) {
		font-size: var(--normal-medium);
	} 
	@media (max-width: 500px) {
		font-size: var(--normal);
	} 
		
`

export const City = styled.span`
	font-size: var(--extra-small) !important;
	margin: 3rem 3rem;
	
	@media (min-width: 500px) and (max-width: 729px) {
		font-size: var(--small) !important;
		margin: 3rem 2rem;
	} 

	@media (max-width: 500px) {
		display: none
	} 
`

export const Title = styled.span`
	font-size: var(--medium);
	@media (max-width: 550px) {
		font-size: var(--normal-medium);
	} 
	@media (max-width: 500px) {
		font-size: var(--normal);
	} 
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

	@media (max-width: 550px) {
		margin-top: 1.5rem
	
	}
`

export const FreeShippingIcon = styled.img`
	width: 1rem;
	height: 1rem;
	margin: 0 0 0 0.5rem;
`