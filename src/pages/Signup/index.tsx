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

export const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ...

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
    if (errors.confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!name.trim()) {
      newErrors.name = "Nome é obrigatório";
      valid = false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email inválido";
      valid = false;
    }

    if (password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres";
      valid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isFormValid = validateForm();
    if (!isFormValid) {
      return;
    }

    setIsLoading(true);

    try {
      navigate("/home");
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <StyledContainer>
      <StyledBox>
        <StyledTypography>Crie sua conta</StyledTypography>
        <form onSubmit={handleSubmit}>
          <StyledGrid container spacing={1}>
            <StyledGrid item xs={12}>
              <StyledTextField
                fullWidth
                label="Nome"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
              />
            </StyledGrid>
            <StyledGrid item xs={12}>
              <StyledTextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
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
              />
            </StyledGrid>
            <StyledGrid item xs={12}>
              <StyledTextField
                fullWidth
                label="Confirme a senha"
                variant="outlined"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
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
                {isLoading ? <StyledCircularProgress size={24} /> : "Registrar"}
              </StyledButton>
            </StyledGrid>
          </StyledGrid>
        </form>
      </StyledBox>
    </StyledContainer>
  );
};

export default Signup;
