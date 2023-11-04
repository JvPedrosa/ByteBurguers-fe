import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  StyledContainer,
  StyledBox,
  StyledTypography,
  StyledTextField,
  StyledGrid,
  StyledButton,
  StyledCircularProgress,
} from "./styles";

const Signin = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    setIsLoading(false);
    navigation("/app/dashboard");
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const validateEmail = () => {
    if (!email) {
      setErrors((prevState) => ({
        ...prevState,
        email: "O email é obrigatório",
      }));
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "O email é inválido",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: "",
      }));
    }
  };

  const validatePassword = () => {
    if (!password) {
      setErrors((prevState) => ({
        ...prevState,
        password: "A senha é obrigatória",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        password: "",
      }));
    }
  };

  return (
    <StyledContainer>
      <StyledBox>
        <StyledTypography>Faça login</StyledTypography>
        <form onSubmit={handleSubmit}>
          <StyledGrid container spacing={2}>
            <StyledGrid item xs={12}>
              <StyledTextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                onBlur={validateEmail}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </StyledGrid>
            <StyledGrid item xs={12}>
              <StyledTextField
                fullWidth
                label="Senha"
                variant="outlined"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={validatePassword}
                error={Boolean(errors.password)}
                helperText={errors.password}
              />
            </StyledGrid>
            <StyledGrid item xs={12}>
              <StyledButton
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <StyledCircularProgress size={24} /> : "Entrar"}
              </StyledButton>
            </StyledGrid>
          </StyledGrid>
        </form>
      </StyledBox>
    </StyledContainer>
  );
};

export default Signin;
