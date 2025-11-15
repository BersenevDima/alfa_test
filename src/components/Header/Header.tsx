import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Header.styles";

const Header: React.FC = () => (
  <S.HeaderContainer>
    <S.Title>Новости</S.Title>
    <S.Nav>
      <Link to="/products">Главная</Link>
      <Link to="/create-product">Добавить новость</Link>
    </S.Nav>
  </S.HeaderContainer>
);

export default Header;
