import { Minus, Plus } from "phosphor-react"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { AmountContainer } from "./styles"

interface AddToCartProps {
  id: string;
  amount: number;
}

export const AddToCartComponent = ({ id, amount }: AddToCartProps) => {
  const { addToCart, removeFromCart, coffes } = useContext(CartContext);
  return (
    <AmountContainer>
      <Minus onClick={() => removeFromCart(id)} weight="bold" size={14} />
      <p> {amount} </p> <Plus onClick={() => addToCart(id)} weight="bold" size={14} />
    </AmountContainer>
  )
}