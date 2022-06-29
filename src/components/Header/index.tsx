import SearchBar from "./../SearchBar";
import { Container, Logo } from "./styled";

function Header() {
	return (
		<Container>
			<Logo>
				<img src="/icons/Logo_ML@2x.png.png" />
			</Logo>
			<SearchBar />
		</Container>
	);
}

export default Header;
