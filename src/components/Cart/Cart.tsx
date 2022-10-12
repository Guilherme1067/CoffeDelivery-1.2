import { ShoppingCart } from "phosphor-react";
import { CartContainer,Counter } from "./styles";

export const Cart = () => {
    return (
        <CartContainer>
        <ShoppingCart size={22} weight="fill" />
        <Counter>3</Counter>
      </CartContainer>  
    )
}