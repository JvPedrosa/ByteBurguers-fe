import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  height: max-content;
  border-radius: 50%;
  background-color: #ececec;
  transition: 0.2s;

  &:hover {
    background-color: #d4d4d4;
  }

  svg {
    font-size: 1.5rem; // Adjust the size as needed
    color: #333;
  }
`;

export const ItemsCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 24px;
  gap: 24px;
  width: 70%;
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
  width: 30%;
  height: max-content;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  padding: 24px 0;
  gap: 24px;
`;

export const Total = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Button = styled.button`
  width: 80%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #666;
  }
`;

export const EmptyCart = styled.div`
  color: #333;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
