import React from "react";
import { useAppSelector } from "../hooks";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Container = styled.div`padding: 2rem;`;
const BackButton = styled.button`
  padding: 0.5rem 1rem;
  background: #eee;
  border-radius: 6px;
  cursor: pointer;
`;

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = useAppSelector(state => state.products.products.find(p => p.id === id));

  if (!product)
    return (
      <Container>
        <BackButton onClick={() => navigate("/products")}>← Назад</BackButton>
        <p>Новость не найдена</p>
      </Container>
    );

  return (
    <Container>
      <BackButton onClick={() => navigate("/products")}>← Назад</BackButton>

      <ProductImage src={product.image} alt={product.title} />

      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </Container>
  );
};

export default ProductPage;
