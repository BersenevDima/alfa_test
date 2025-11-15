import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CreateProductPage from "./pages/CreateProductPage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header/Header";

const App: React.FC = () => (
  <BrowserRouter basename="/alfa_test">
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/create-product" element={<CreateProductPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
