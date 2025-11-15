import styled from "styled-components";

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active"
})<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  background-color: ${({ active }) => (active ? "#0056b3" : "#eee")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
`;

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;
