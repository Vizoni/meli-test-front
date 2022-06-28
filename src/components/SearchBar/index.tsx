import { useState } from "react";
import { Form } from "./styled";
function SearchBar() {
	const [searchText, setSearchText] = useState("");

	function searchProducts() {
		// call products provider
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
