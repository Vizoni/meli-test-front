import styled from "styled-components";

export const Container = styled.header`
	background-color: var(--yellow);
	height: 5vh;
	display: flex;
	justify-content: center;
	flex-flow: row;
`;

export const Logo = styled.div`
	align-self: end;
	cursor: pointer;

	img {
		height: 4vh;
	}
`;
