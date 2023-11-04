import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1.5px solid #222;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  background-color: #1f1f1f;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.snow};
  letter-spacing: 5px;
  margin: 8px;
`;

export const LinksContainer = styled.nav`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.snow};
  font-size: 1rem;
  margin: 0 2rem;

  &:hover {
    color: #52575a;
  }
`;
