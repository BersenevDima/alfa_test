import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #007bff;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Nav = styled.nav`
  a {
    margin-left: 1rem;
    font-weight: 500;
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
