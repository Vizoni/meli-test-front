import styled from "styled-components";

export const Container = styled.div`
	background-color: white;
	border-bottom: 1px solid var(--light-grey);
	display: flex;
	justify-content: space-between;
	cursor: pointer;

	span {
		font-size: var(--extra-small);
		margin: 3rem 5rem;
	}
`;

export const ProductPicture = styled.img`
	width: 11.25rem;
	max-width: 180px;
	height: auto;
	border-radius: 4px;
	margin: 1rem;
`

export const LeftSide = styled.div`
	display: flex;
	flex-flow: row;

	div {
		margin-top: 2rem;

		h3 {
			margin-top: 2rem;
		}
	}
`;

export const FreeShippingIcon = styled.img`
	width: 1rem;
	height: 1rem;
	margin: 0 0 0 0.5rem;
`