import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mineShaft};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.silverCloud};
  z-index: 999;
  border-top: 1.5px solid rgb(60, 64, 67);

  small {
    font-size: 12px;
    padding: 4px 8px;
  }
`;
