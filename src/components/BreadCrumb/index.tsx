import { Container } from "./styled";

function BreadCrumb({ categoriesArray }) {
	function formatBreadCrumb() {
		let finalHTML = "";
		categoriesArray.forEach((categories: Category, index: number) => {
			if (index == categoriesArray.length - 1) {
				finalHTML += categories.name;
			} else {
				finalHTML += categories.name + " > ";
			}
		});
		return <span>{finalHTML}</span>;
	}
	return <Container>{formatBreadCrumb()}</Container>;
}

type Category = {
	id: String;
	name: String;
};

export default BreadCrumb;
