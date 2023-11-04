import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const ShoppingCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 1rem;
  background-color: #4682b4;
  border-radius: 50%;
  padding: 0.5rem;
  height: 1rem;
  width: 1rem;
`;

export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  color: #ffffff;
`;

export const ShoppingCartCount = styled.span`
  background-color: ${({ theme }) => theme.colors.firebrick};
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
