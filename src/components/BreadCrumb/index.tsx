import { useState } from "react";

import { Container } from "./styled";

function BreadCrumb({ categories }) {

	function formatBreadCrumb() {
		return(
			<>
				{categories.map((category: string, index: number) => {
					return (
						<>
							<a href="#">
								{category}
							</a>
							{console.log("index", index, categories.length-1)}
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
