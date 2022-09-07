import { Minus, Plus, ShoppingCart } from "phosphor-react";
import expresso from "../../assets/expresso.png";
import {
  AmountContainer,
  Card,
  CardContainer,
  CartDiv,
  Description,
  Price,
  Title,
} from "./styles";

interface itemCardapiosProps {
  img: any;
  title: string;
  name: string;
  description: string;
  price: number;
}

const itemsCardapios: itemCardapiosProps[] = [
  {
    img: expresso,
    title: "Tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    img: expresso,
    title: "Tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    img: expresso,
    title: "Tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    img: expresso,
    title: "Tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    img: expresso,
    title: "Tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    img: expresso,
    title: "Tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    img: expresso,
    title: "Tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    img: expresso,
    title: "Tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    img: expresso,
    title: "Tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
];
export const Coffes = () => {
  return (
    <CardContainer>
      {itemsCardapios.map((coffe) => (
        <Card>
          <div>
            <img src={coffe.img} alt="" />
          </div>
          <div>
            <Title>{coffe.title}</Title>
            <h2>{coffe.name}</h2>
            <Description>{coffe.description}</Description>
          </div>

          <footer>
            <Price><p>R$</p>  {coffe.price}</Price>

            <AmountContainer>
              <Minus weight="bold" size={14} />
              <p> 1 </p> <Plus weight="bold" size={14} />
            </AmountContainer>

            <CartDiv>
              <ShoppingCart weight="fill" size={24} />
            </CartDiv>
          </footer>
        </Card>
      ))}
    </CardContainer>
  );
};
