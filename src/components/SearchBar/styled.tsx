import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-self: center;
	height: 3.5vh;
	width: 100%;
	margin-left: 1rem;

	@media (max-height: 799px) {
		height: 5vh
	}
	
	label {
		display: none;
	}

	input {
		width: 93%;
		font-size: var(--normal-medium);
		border: 0;
		outline: 0;
		border-radius: 0.2rem 0 0 0.2rem;
		padding: 0.75rem;

		::placeholder {
			color: var(--grey);
			opacity: 1;
		}
	}

	input:focus {
		/* border: 3px solid red; */
		border: 0;
		outline: none !important;
	}

	button {
		width: 2.5rem;
		border: 0;
		border-radius: 0 0.2rem 0.2rem 0;
		background-color: var(--light-grey);
		cursor: pointer;
	}
`;
