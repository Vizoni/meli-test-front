import styled from "styled-components";

export const Container = styled.div`
	/* background-color: white; */
	display: flex;
	justify-content: center;
	margin: 2rem;

	div {
		margin: 0 2rem;
		font-size: 1.2rem;
	}
`;

export const Button = styled.button`
	background-color: transparent;
	color: var(--blue);
	border: 0;
	outline: 0;
	font-size: 1.2rem;
	cursor: pointer;
`

export const CurrentPage = styled.span`
	cursor: pointer;
	outline: 0;
	border: 0;
	background-color: #bbbbbb;
	width: 2rem;
	font-weight: bold;
	font-size: 1.2rem;
	border-radius: 10%;
	text-align: center;
	padding: 0.5rem;
	color: var(--dark-grey);
`

export const Counter = styled.span`
	color: var(--grey);
	font-size: 1.1rem;
`