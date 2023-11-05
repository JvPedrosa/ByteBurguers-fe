import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  color: #1f1f1f;
  font-weight: bold;
  font-size: 2rem;
`;

export const InfoBox = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 20px;
  width: 50%;
  color: #1f1f1f;
`;

export const InfoItem = styled.div`
  margin: 10px 0;
`;

export const Label = styled.strong`
  margin-right: 10px;
`;

export const Value = styled.span`
  color: #333;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.firebrick};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
