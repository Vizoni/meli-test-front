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
			<input
				placeholder="Nunca dejes de buscar"
				name="searchText"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<button type="submit">
				<img src="/icons/ic_Search.png" />
			</button>
		</Form>
	);
}

export default SearchBar;
