import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
`;

export const StyledBox = styled.div`
  width: 100%;
  max-width: 600px;
  background: #fff;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StyledTypography = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: #333;
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const StyledCircularProgress = styled.div`
  display: block;
  margin: 30px auto;
  &:after {
    content: "Loading..."; /* This is a placeholder, use an actual loading spinner or progress bar */
    display: block;
    text-align: center;
    font-size: 1.5rem;
  }
`;
