import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const CheckoutSuccess = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <S.SuccessContainer>
      <S.IconContainer>
        <CheckCircleOutlineIcon style={{ fontSize: "4rem", color: "green" }} />
      </S.IconContainer>
      <S.Title>Compra finalizada com sucesso!</S.Title>
      <S.Message>
        Obrigado por comprar conosco. Sua ordem foi recebida.
      </S.Message>
      <S.Button onClick={handleContinueShopping}>Continuar comprando</S.Button>
    </S.SuccessContainer>
  );
};

export default CheckoutSuccess;
