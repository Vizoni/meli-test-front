import SearchBar from "./../SearchBar";
import { Container, Logo } from "./styled";
import { useNavigate } from 'react-router-dom'

function Header() {
	const navigate = useNavigate();
	function goToHome() {
		navigate(`/`)
	}
	return (
		<Container>
			<Logo onClick={goToHome} tabIndex={0} role="button">
				<img src="/icons/Logo_ML@2x.png.png" alt="Logo Mercado Libre" />
			</Logo>
			<SearchBar />
		</Container>
	);
}

export default Header;
