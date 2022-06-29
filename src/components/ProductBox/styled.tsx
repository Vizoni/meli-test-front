import styled from "styled-components";

export const Container = styled.div`
	background-color: white;
	border-bottom: 1px solid var(--light-grey);
	display: flex;
	justify-content: space-between;
	cursor: pointer;

	img {
		width: 11.25rem;
		height: 11.25rem;
		border-radius: 4px;
		margin: 1rem;
	}

	span {
		font-size: var(--extra-small);
		margin: 2rem 1em 0 0;
	}
`;

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
