import styled from "styled-components";

export const Container = styled.header`
	background-color: var(--yellow);
	height: 5vh;
	/* width: 100%; */
	display: flex;
	justify-content: center;
	flex-flow: row;
	/* padding: 0 5rem; */
`;

export const Logo = styled.div`
	align-self: end;

	img {
		height: 4vh;
		/* margin: 0.5rem; */
		/* width: 10%;
		max-width: 10%; */
	}
`;
