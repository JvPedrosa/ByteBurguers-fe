import styled from "styled-components";
import {
  TextField,
  Button,
  Container,
  Typography,
  CircularProgress,
  Box,
  Grid,
} from "@mui/material";

export const StyledContainer = styled(Container)`
  width: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledTypography = styled(Typography)({
  marginBottom: "1rem !important",
  color: "#1f1f1f",
  fontWeight: "bold !important",
  fontSize: "2rem !important",
});

export const StyledTypography2 = styled(Typography)({
  marginTop: "1rem !important",
  color: "#1f1f1f",
  fontWeight: "bold !important",
  fontSize: "1rem !important",
});

export const StyledTextField = styled(TextField)({});

export const StyledGrid = styled(Grid)({});

export const StyledButton = styled(Button)({});

export const StyledCircularProgress = styled(CircularProgress)({});
