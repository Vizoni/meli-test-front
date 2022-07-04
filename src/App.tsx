import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ProductsProvider } from "./context/Products";

const HomePage = lazy(() => import('./pages/HomePage'))
const ProductPage = lazy(() => import('./pages/ProductPage'))
const ProductSearchPage = lazy(() => import('./pages/ProductSearchPage'))

function App() {
	return (
		<>
			<ProductsProvider>
				<BrowserRouter>
				<Header />
					<Suspense fallback={<div>Carregando...</div>}>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/items" element={<ProductSearchPage />} />
							<Route path="/items/:id" element={<ProductPage />} />
						</Routes>
					</Suspense>
				</BrowserRouter>
			</ProductsProvider>
		</>
	);
}

export default App;
