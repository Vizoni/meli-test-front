import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-self: center;
	height: 3.5vh;
	width: 70%;
	margin-left: 1rem;

	input {
		width: 93%;
		font-size: var(--normal-medium);
		border: 0;
		border-radius: 0.2rem 0 0 0.2rem;
		padding: 0.75rem;

		::placeholder {
			color: var(--grey);
			opacity: 1;
		}
	}

	button {
		width: 7%;
		border: 0;
		border-radius: 0 0.2rem 0.2rem 0;
		background-color: var(--light-grey);
		cursor: pointer;
	}
`;
