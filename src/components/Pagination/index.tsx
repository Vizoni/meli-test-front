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
		<Container >
			<Button onClick={() => getLastPage()}>{"<"} Anterior</Button>
			<div>
				<CurrentPage>{currentPageNumber}</CurrentPage>
				<Counter> de {calcPagesAmount()}</Counter>
			</div>
			<Button onClick={()=> getNextPage()}>Próximo {">"}</Button>
		</Container>
	);
}

export default Pagination;
