import { useState, Suspense } from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Suspense fallback={<div>Carregando...</div>}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						{/* <Route path="/hooks" element={<ExperimentandoHooks />} />
					<Route path="/users/:id" element={<UserDetail />} />
					<Route path="/lazy" element={<LazyLoadingTest />} />
					<Route path="/theme" element={<ThemePage />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/payment" element={<Payment />} /> */}
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	);
}

export default App;
