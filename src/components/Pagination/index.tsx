import {useState, useEffect} from 'react'
import { useProducts } from '../../context/Products';
import { Container, Button, CurrentPage, Counter } from "./styled";


function Pagination() {
	const {pagination, listProducts} = useProducts();
	const [currentPageNumber, setCurrentPageNumber] = useState(1);
	const [productsOffSet, setProductsOffSet] = useState(4);

	function calcPagesAmount() {
		if (!pagination) {
			return 0
		}
		return Math.round(pagination.primary_results/pagination.limit)
	}

	async function getLastPage() {
		if (currentPageNumber == 1) {
			return
		}
		const lastOffset = productsOffSet-4
		setProductsOffSet(lastOffset)
		setCurrentPageNumber((prev) =>prev-1)
		listProducts("iphone", productsOffSet)
	}
	
	async function getNextPage() {
		const nextOffset = (currentPageNumber*4)+1
		setProductsOffSet(nextOffset)
		setCurrentPageNumber((prev) => (prev)+1)
		listProducts("iphone", productsOffSet)
	}

	return (
		<Container data-testId="pagination-component">
			<Button data-testId="button-last-page" onClick={() => getLastPage()}>{"<"} Anterior</Button>
			<div>
				<CurrentPage data-testId="current-page">{currentPageNumber}</CurrentPage>
				<Counter data-testId="counter-page"> de {calcPagesAmount()}</Counter>
			</div>
			<Button data-testId="button-next-page" onClick={()=> getNextPage()}>Próximo {">"}</Button>
		</Container>
	);
}

export default Pagination;
