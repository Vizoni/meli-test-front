import { useEffect } from "react";
import BreadCrumb from "./../components/BreadCrumb";
import { useProducts } from "./../context/Products";
function HomePage() {
	const { listProducts } = useProducts();
	const categoryList = [
		{
			id: "MLA409431",
			name: "Salud y Equipamiento Médico",
		},
		{
			id: "MLA5395",
			name: "Cuidado de la Salud",
		},
		{
			id: "MLA455040",
			name: "Protección para Incontinencia",
		},
		{
			id: "MLA455050",
			name: "Apósitos",
		},
	];

	useEffect(() => {
		console.log("vai chamar produtos");
		listProducts("Iphone");
	}, []);

	return (
		<>
			<BreadCrumb categoriesArray={categoryList} />
			<h1>home</h1>
		</>
	);
}

export default HomePage;
