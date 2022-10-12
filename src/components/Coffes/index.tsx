import { Minus, Plus, ShoppingCart } from "phosphor-react";
import expresso from "../../assets/expresso.png";
import americano from "../../assets/americano.png";
import expressocremoso from "../../assets/expressocremoso.png";
import cafegelado from "../../assets/cafegelado.png";
import cafecomleite from "../../assets/cafecomleite.png";
import latte from "../../assets/latte.png";
import capuccino from "../../assets/capuccino.png";
import macchiato from "../../assets/macchiato.png";
import mocaccino from "../../assets/mocaccino.png";
import chocolatequente from "../../assets/chocolatequente.png";
import cubano from "../../assets/cubano.png";
import havaiano from "../../assets/havaiano.png";
import arabe from "../../assets/arabe.png";
import irlandes from "../../assets/irlandes.png";
import { AddToCartComponent } from "../AddToCartComponent";
import {
  Card,
  CardContainer,
  CartDiv,
  Description,
  Price,
  Title,
} from "./styles";

interface itemCardapiosProps {
  img: any;
  title: string[];
  name: string;
  description: string;
  price: number;
}

const itemsCardapios: itemCardapiosProps[] = [
  {
    img: expresso,
    title: ["Tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90,
  },
  {
    img: americano,
    title: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90,
  },
  {
    img: expressocremoso,
    title: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90,
  },
  {
    img: cafegelado,
    title: ["Tradicional", "Gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
  },
  {
    img: cafecomleite,
    title: ["Tradicional", "Com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90,
  },
  {
    img: latte,
    title: ["Tradicional", "com leite"],
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.90,
  },
  {
    img: capuccino,
    title: ["Tradicional", "com leite"],
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.90,
  },
  {
    img: macchiato,
    title: ["Tradicional", "com leite"],
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90,
  },
  {
    img: mocaccino,
    title: ["Tradicional", "com leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90,
  },

  {
    img: chocolatequente,
    title: ["Tradicional", "com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.90,
  }, {
    img: cubano,
    title: ["Especial", "alcoólico", "gelado"],
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90,
  }, {
    img: havaiano,
    title: ["especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90,
  }, {
    img: mocaccino,
    title: ["especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90,
  }, {
    img: mocaccino,
    title: ["especial","alcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90,
  },
];
export const Coffes = () => {
  const formatPrice = (price:number) => {
    return new Intl.NumberFormat('br-PT', {
      style: 'currency',
      currency: "BRL"
    }).format(price)
  }
  return (
    <CardContainer>
      {itemsCardapios.map((coffe) => (
        <Card>
          <div>
            <img src={coffe.img} alt="" />
          </div>
            <div>
              <div>
            {coffe.title.map(title => {
              return (
                <Title>{title}</Title>
              )
            })}
            </div>
            <h2>{coffe.name}</h2>
            <Description>{coffe.description}</Description>
          </div>

          <footer>
            <Price><p>R$</p>  {formatPrice(coffe.price)}</Price>

            <AddToCartComponent/>
            <CartDiv>
              <ShoppingCart weight="fill" size={24} />
            </CartDiv>
          </footer>
        </Card>
      ))}
    </CardContainer>
  );
};
