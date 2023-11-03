import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Importe o ícone do MUI aqui

export const ShoppingCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  cursor: pointer;
  height: 100%;
  margin-right: 2rem;
  margin-top: 0.5rem;
`;

export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  color: #5d4037;
`;

export const ShoppingCartCount = styled.span`
  background-color: #4682b4;
  color: #ffffff;
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.25em 0.6em;
  border-radius: 1em;
  position: absolute;
  top: 30%;
  right: 0;
  transform: translate(50%, -50%);
  min-width: 1em;
  text-align: center;
`;
