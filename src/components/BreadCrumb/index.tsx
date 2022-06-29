import { useState } from "react";

import { Container } from "./styled";

function BreadCrumb({ categories }) {
	function formatBreadCrumb() {
		let finalHTML = "";
		categories.forEach((category: Category, index: number) => {
			if (index == categories.length - 1) {
				finalHTML += category.name;
			} else {
				finalHTML += category.name + " > ";
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
