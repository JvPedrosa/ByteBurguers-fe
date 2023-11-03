import styled from "styled-components";

export const Column = styled.div`
  min-width: 180px;
  padding: 15px;
  flex-basis: 10%;
  border: 1px solid ${({ theme }) => theme.colors.silverCloud};
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.ebonyClay};
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s;
  gap: 15px;
`;

export const ProductImage = styled.img`
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ProductName = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.snow};
  text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.mineShaft};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 15px;
  height: 40px;
`;

export const ProductPrice = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.flamePea};
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.dodgerBlue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 25px;
  height: 25px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.navyBlue};
  }
`;

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.dodgerBlue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
  height: 40px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.navyBlue};
  }
`;
