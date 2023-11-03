import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1.5px solid #222;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  background-color: #1f1f1f;
`;

export const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.deepChestnut};
  letter-spacing: 5px;
  padding: 4px 8px;
`;

export const LinksContainer = styled.nav`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.deepChestnut};
  font-size: 1rem;
  margin: 0 1rem;
  padding: 0.5rem 0;

  &.active {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    color: #52575a;
  }
`;
