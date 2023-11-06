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
  StyledCheckbox,
  StyledTypography2,
  StyledFormControlLabel,
} from "./styles";

export const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [watchOn, setWatchOn] = useState(false);
  const [isFlamengo, setIsFlamengo] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const handlelast_nameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLastName(event.target.value);
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPhone(event.target.value);
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCity(event.target.value);
  const handleWatchOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setWatchOn(event.target.checked);
  const handleIsFlamengoChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setIsFlamengo(event.target.checked);
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

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
    return valid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isFormValid = validateForm();
    if (!isFormValid) {
      // Handle validation errors...
      return;
    }

    setIsLoading(true);

    const userData = {
      name,
      last_name: lastName,
      phone,
      city,
      email,
      watch_on: watchOn,
      is_flamengo: isFlamengo,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      navigate("/home");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
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
                label="Sobrenome"
                variant="outlined"
                value={lastName}
                onChange={handlelast_nameChange}
              />
            </StyledGrid>
            <StyledGrid item xs={12}>
              <StyledTextField
                fullWidth
                label="Telefone"
                variant="outlined"
                value={phone}
                onChange={handlePhoneChange}
              />
            </StyledGrid>
            <StyledGrid item xs={12}>
              <StyledTextField
                fullWidth
                label="Cidade"
                variant="outlined"
                value={city}
                onChange={handleCityChange}
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
            <StyledGrid item xs={12} container alignItems="center" spacing={1}>
              <StyledGrid item>
                <StyledFormControlLabel
                  control={
                    <StyledCheckbox
                      checked={watchOn}
                      onChange={handleWatchOnChange}
                      name="watchOn"
                    />
                  }
                  label={
                    <StyledTypography2>Assiste One Piece?</StyledTypography2>
                  }
                />
              </StyledGrid>
            </StyledGrid>

            <StyledGrid item xs={12} container alignItems="center" spacing={1}>
              <StyledGrid item>
                <StyledFormControlLabel
                  control={
                    <StyledCheckbox
                      checked={isFlamengo}
                      onChange={handleIsFlamengoChange}
                      name="isFlamengo"
                    />
                  }
                  label={
                    <StyledTypography2>É torcedor Flamengo?</StyledTypography2>
                  }
                />
              </StyledGrid>
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
