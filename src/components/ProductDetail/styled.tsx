import styled from "styled-components";

export const Container = styled.div`
	background-color: white;
	border-bottom: 1px solid var(--light-grey);
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding: 2rem;

	span {
		font-size: var(--extra-small);
		margin: 2rem 0;
		text-align: justify;
	}
`;

export const Upper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const BuyBox = styled.div`
	display: flex;
	flex-direction: column;

	button {
		background-color: var(--blue);
		font-size: var(--normal);
		color: #fff;
		border: 0;
		border-radius: 0.2rem;
		padding: 0.75rem;
		cursor: pointer;
	}
`

export const PriceDetail = styled.div`
	display: flex;
	margin: 2rem 0;
	h3 {
		font-size: var(--medium);
	}

	h2 {
		font-size: var(--large)
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
	width: 42.5rem;
	/* width: 10rem; */
	max-width: 680px;
	height: auto;
	border-radius: 4px;
	margin: 1rem;
`

export const LeftSide = styled.div`
	display: flex;
	flex-flow: row;

	div {
		margin-top: 2rem;

		h1 {
			img {
				width: 1rem;
				height: 1rem;
				margin: 0 0 0 0.5rem;
			}
		}

		h3 {
			margin-top: 2rem;
		}
	}
`;
