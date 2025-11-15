import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchProducts, toggleLike, deleteProduct } from "../redux/productsSlice";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import Filter from "../components/Filter/Filter";
import type { FilterType } from "../types/filter";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
  gap: 1.5rem;
`;

const Container = styled.div`padding: 2rem;`;

const ProductsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { products, loading } = useAppSelector(state => state.products);
  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    if (!products.length) dispatch(fetchProducts());
  }, [dispatch]);

  const filtered = filter === "liked" ? products.filter(p => p.liked) : products;

  if (loading) return <Container>Загрузка...</Container>;

  return (
    <Container>
      <Filter filter={filter} setFilter={setFilter} />
      <Grid>
        {filtered.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onLike={() => dispatch(toggleLike(product.id))}
            onDelete={() => dispatch(deleteProduct(product.id))}
            onClick={() => navigate(`/products/${product.id}`)}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPage;
