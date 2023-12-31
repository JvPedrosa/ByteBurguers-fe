import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  StyledContainer,
  StyledBox,
  StyledTypography,
  StyledTextField,
  StyledGrid,
  StyledButton,
  StyledCircularProgress,
  StyledTypography2,
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

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigation("/account");
    }
  }, [navigation]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    validateEmail();
    validatePassword();

    if (errors.email || errors.password) {
      return;
    }

    setIsLoading(true);

    try {
      const user = { email, password };
      localStorage.setItem("user", JSON.stringify(user));
      navigation("/");
    } catch (error) {
      console.error("Failed to login and navigate: ", error);
      setErrors((prevState) => ({
        ...prevState,
        password: "Login failed, check your credentials and try again.",
      }));
    }

    setIsLoading(false);
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
            <StyledGrid item xs={12}>
              <StyledTypography2 variant="body2">
                Não tem uma conta?{" "}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Cadastre-se
                </Link>
              </StyledTypography2>
            </StyledGrid>
          </StyledGrid>
        </form>
      </StyledBox>
    </StyledContainer>
  );
};

export default Signin;
