import { useState } from "react";
import { Form } from "./styled";
import { useNavigate } from 'react-router-dom'
function SearchBar() {
	const [searchText, setSearchText] = useState("");
	const navigate = useNavigate();

	function searchProducts(e: any) {
		e.preventDefault();
		if (!searchText) {
			return;
		}
		navigate(`/items?search=${searchText}`)
	}

	return (
		<Form onSubmit={searchProducts}>
			<label htmlFor="searchText" tabIndex={0}>Digite o produto a ser pesquisado</label>
			<input
				placeholder="Nunca dejes de buscar"
				name="searchText"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				id="searchText"
				type="text"
				tabIndex={0}
				
			/>
			<button type="submit" tabIndex={0}>
				<img src="/icons/ic_Search.webp" alt="Ícone lupa" />
			</button>
		</Form>
	);
}

export default SearchBar;
