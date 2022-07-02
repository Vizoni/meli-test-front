import { useState } from "react";
import { Form } from "./styled";
import { Navigate, useHref } from 'react-router-dom'
import { useProducts } from "./../../context/Products";
function SearchBar() {
	const [searchText, setSearchText] = useState("");
	const { listProducts } = useProducts()

	function searchProducts(e) {
		e.preventDefault();
		console.log("aaaa", searchText)
		if (!searchText) {
			return;
		}
		listProducts(searchText);
		// cannot useNavigate because component is not inside <Route> on App.js
		// return <Navigate to={`items?search=${searchText}`} replace/>
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
