import SearchBar from "./../SearchBar";
import { Container } from "./styled";

function Header() {
	return (
		<Container>
			<img src="/icons/Logo_ML@2x.png.png" />
			<SearchBar />
		</Container>
	);
}

export default Header;
