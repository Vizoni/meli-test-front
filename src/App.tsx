import { useState, Suspense } from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { ProductsProvider } from "./context/Products";

function App() {
	return (
		<>
			<ProductsProvider>
				<Header />
				<BrowserRouter>
					<Suspense fallback={<div>Carregando...</div>}>
						<Routes>
							<Route path="/" element={<HomePage />} />
						</Routes>
					</Suspense>
				</BrowserRouter>
			</ProductsProvider>
		</>
	);
}

export default App;
