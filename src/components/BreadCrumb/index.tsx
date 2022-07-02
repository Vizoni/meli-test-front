import { useState } from "react";

import { Container, CategoryLink } from "./styled";

function BreadCrumb({ categories }) {

	function formatBreadCrumb() {
		function isLastCategory(index) {
			return index === categories.length-1
		}

		return(
			<>
				{categories.map((category: string, index: number) => {
					return (
						<>
							<CategoryLink href="#" last={isLastCategory(index)} disabled={isLastCategory(index)}>
								{category}
							</CategoryLink>
							{index < categories.length-1 && (<span> > </span>)}
						</>
					)
				})} 
			</>
		)	
	}

	return <Container>{formatBreadCrumb()}</Container>;
}

export default BreadCrumb;
