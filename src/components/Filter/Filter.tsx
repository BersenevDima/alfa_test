import React from "react";
import type { FilterProps } from "../../types/filter";
import * as S from "./Filter.styles";

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => (
  <S.Container>
    <S.Button active={filter === "all"} onClick={() => setFilter("all")}>Все</S.Button>
    <S.Button active={filter === "liked"} onClick={() => setFilter("liked")}>Избранное</S.Button>
  </S.Container>
);

export default Filter;
