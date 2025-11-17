import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Header.styles";

const Header: React.FC = () => (
  <S.HeaderContainer>
    <S.Title>Rick and Morty</S.Title>
    <S.Nav>
      <Link to="/products">Главная</Link>
      <Link to="/create-product">Добавить персонажа</Link>
    </S.Nav>
  </S.HeaderContainer>
);

export default Header;
