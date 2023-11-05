import styled from "styled-components";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Grid,
} from "@mui/material";

export const StyledContainer = styled(Container)({
  width: "50% !important",
  display: "flex !important",
  alignItems: "center !important",
  justifyContent: "center !important",
});

export const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const StyledTypography = styled(Typography)({
  marginBottom: "1rem !important",
  color: "#1f1f1f",
  fontWeight: "bold !important",
  fontSize: "2rem !important",
});

export const StyledTextField = styled(TextField)({});

export const StyledButton = styled(Button)({});

export const StyledCircularProgress = styled(CircularProgress)({
  marginRight: "10px !important",
});

export const StyledGrid = styled(Grid)({
  marginBottom: "10px !important",
});
