import { useState, Suspense } from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import { ProductsProvider } from "./context/Products";

function App() {
	return (
		<>
			<ProductsProvider>
				<BrowserRouter>
				<Header />
					<Suspense fallback={<div>Carregando...</div>}>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/items" element={<HomePage />} />
							<Route path="/items/:id" element={<ProductPage />} />
						</Routes>
					</Suspense>
				</BrowserRouter>
			</ProductsProvider>
		</>
	);
}

export default App;
