import React from "react";
import type { Product } from "../../types/product";
import * as S from "./ProductCard.styles";

interface Props {
  product: Product;
  onLike: () => void;
  onDelete: () => void;
  onClick?: () => void;
}

const ProductCard: React.FC<Props> = ({ product, onLike, onDelete, onClick }) => (
  <S.Card onClick={onClick}>
    <S.Image src={product.image} alt={product.title} />
    <S.Title>{product.title}</S.Title>
    <S.Description>{product.description}</S.Description>
    <S.Actions>
      <S.Button
        $liked={product.liked}
        onClick={e => {
          e.stopPropagation();
          onLike();
        }}
      >
        {product.liked ? "❤️" : "🤍"}
      </S.Button>
      <S.Button
        $deleteBtn
        onClick={e => {
          e.stopPropagation();
          onDelete();
        }}
      >
        Удалить
      </S.Button>
    </S.Actions>
  </S.Card>
);

export default ProductCard;
