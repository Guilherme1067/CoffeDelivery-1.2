import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { formatPrice } from "../../helpers/formatPrice";
import { AddToCartComponent } from "../AddToCartComponent";
import {
  Card,
  CardContainer,
  CartDiv,
  CoffeTitle,
  Description,
  Price,
  Title,
} from "./styles";


export const Coffes = () => {
  const { coffes } = useContext(CartContext);

  return (
    <CardContainer>
      {coffes.length && coffes.map((coffe) => (
        <Card key={coffe.id}>
          <div>
            <img src={coffe.img} alt="" />
          </div>
          <div>
            <CoffeTitle>
              {coffe.title.map(title => {
                return (
                  <Title key={title}>{title}</Title>
                )
              })}
            </CoffeTitle>
            <h2>{coffe.name}</h2>
            <Description>{coffe.description}</Description>
          </div>

          <footer>
            <Price><p>R$</p>  {formatPrice(coffe.price)}</Price>

            <AddToCartComponent id={coffe.id} amount={coffe.amount} />
            <Link to="/checkout">
              <CartDiv>
                <ShoppingCart weight="fill" size={24} />
              </CartDiv>
            </Link>

          </footer>
        </Card>
      ))}
    </CardContainer>
  );
};
