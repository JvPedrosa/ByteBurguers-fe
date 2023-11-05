import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DataContainer = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Quantity = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem;
`;

export const Price = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: bold;
  margin: 0.5rem;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 100px;
  width: auto;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  padding: 0.5rem;
  margin: 0 0.5rem;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #e2e2e2;
  }
  &:active {
    background-color: #d4d4d4;
  }
`;

export const TotalPerItem = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: bold;
  margin: 0.5rem;
`;
