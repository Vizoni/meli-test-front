import styled from "styled-components";

export const Container = styled.header`
	background-color: var(--yellow);
	height: 5vh;
	display: flex;
	justify-content: center;
	flex-flow: row;

	@media (min-height: 800px) and (max-height: 1000px) {
		height: 7vh
	}
	@media (max-height: 799px) {
		height: 8vh
	}
`;

export const Logo = styled.div`
	align-self: center;
	cursor: pointer;

	img {
		height: 4vh;
	}
`;
