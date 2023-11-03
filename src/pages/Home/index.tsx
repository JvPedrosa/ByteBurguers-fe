import { Products } from "../../components/Products";
import storeItems from "../../data/items.json";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.Row>
      {storeItems.map((item) => (
        <Products key={item.id} item={item} />
      ))}
    </S.Row>
  );
};
