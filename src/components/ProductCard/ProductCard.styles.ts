import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background-color: #fff;
  height: 320px;
`;

export const Image = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 8px;
  line-height: 1.2;
  height: 38px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.p`
  font-size: 14px;
  margin: 0 8px;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
    -webkit-line-clamp: 2;
`;



export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

export const Button = styled.button<{ $liked?: boolean; $deleteBtn?: boolean }>`
  background: ${props =>
    props.$liked ? "red" : props.$deleteBtn ? "#e53935" : "#1976d2"};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 4px 8px;
  font-size: 14px;
`;
