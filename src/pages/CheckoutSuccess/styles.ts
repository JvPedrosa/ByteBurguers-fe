import styled from "styled-components";

export const SuccessContainer = styled.div`
  text-align: center;
  padding: 50px;
  width: 100%;
  max-width: 600px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const IconContainer = styled.div`
  color: #4caf50;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 16px;
`;

export const Message = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 32px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #5cb85c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #449d44;7
	}

  &:focus {
    outline: none;
  }
`;
