import BreadCrumb from "./../components/BreadCrumb";
function HomePage() {
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
	return (
		<>
			<BreadCrumb categoriesArray={categoryList} />
			<h1>home</h1>
		</>
	);
}

export default HomePage;
