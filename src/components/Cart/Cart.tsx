import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartContainer, Counter } from "./styles";

export const Cart = () => {
  const { cartAmount } = useContext(CartContext);
  return (
    <CartContainer>
      <ShoppingCart size={22} weight="fill" />
      {cartAmount ? <Counter>{cartAmount}</Counter> : false}

    </CartContainer>
  )
}