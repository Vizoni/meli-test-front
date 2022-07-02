import styled from "styled-components";

export const Container = styled.div`
	margin: 1rem;

	span {
		color: var(--grey);
		font-size: var(--small);
		text-decoration: none;
		margin 0 0.5vw;
	}
`;

export const CategoryLink = styled.a`
	color: var(--grey);
	font-size: var(--small);
	text-decoration: none;

	${({last}) => last && `
		font-weight: 600
	`}
`
