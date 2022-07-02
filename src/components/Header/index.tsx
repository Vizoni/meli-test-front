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
			<Logo onClick={goToHome}>
				<img src="/icons/Logo_ML@2x.png.png" />
			</Logo>
			<SearchBar />
		</Container>
	);
}

export default Header;
