import { Fragment } from 'react'
import { BreadCrumbPropTypes } from "../../shared/types/components.interfaces";
import { Container, CategoryLink } from "./styled";

function BreadCrumb({ categories }: BreadCrumbPropTypes) {

	function formatBreadCrumb() {
		function isLastCategory(index: number) {
			return index === categories.length-1
		}

		return(
			<div data-testId="breadcrumb-component">
				{categories.map((category: string, index: number) => {
					return (
						<Fragment key={index}>
							<CategoryLink role="button" data-testId="breadcrumb-item" href="#" last={isLastCategory(index)} disabled={isLastCategory(index)}>
								{category} 
							</CategoryLink>
							{index < categories.length-1 && (<span data-testId="separator"> {">"} </span>)}
						</Fragment>
					)
				})} 
			</div>
		)	
	}

	return <Container>{formatBreadCrumb()}</Container>;
}

export default BreadCrumb;

