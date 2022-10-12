import { Minus, Plus } from "phosphor-react"
import { AmountContainer } from "./styles"

export const AddToCartComponent = () => {
    return (
        <AmountContainer>
        <Minus weight="bold" size={14} />
        <p> 1 </p> <Plus weight="bold" size={14} />
      </AmountContainer>
    )
}