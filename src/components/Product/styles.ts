import styled from "styled-components";

type ButtonProps = {
  action: "add" | "remove";
};

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
  background-color: ${({ theme }) => theme.colors.snow};
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s;
  gap: 15px;
  height: 300px;
`;

export const ProductImage = styled.img`
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ProductName = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.black};
  text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.white};
  line-height: 1.2em;
  max-height: 3.6em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
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
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.mineShaft};
  text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.white};
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, action }) =>
    action === "add" ? theme.colors.apple : theme.colors.firebrick};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: 10px 15px;
  font-weight: bold;
  transition: margin-bottom 0.2s, box-shadow 0.2s;

  &:hover {
    margin-bottom: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;
