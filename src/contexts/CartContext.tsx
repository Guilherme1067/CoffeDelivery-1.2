import { createContext, ReactNode, useEffect, useState } from "react";
import expresso from "../assets/expresso.png";
import americano from "../assets/americano.png";
import expressocremoso from "../assets/expressocremoso.png";
import cafegelado from "../assets/cafegelado.png";
import cafecomleite from "../assets/cafecomleite.png";
import latte from "../assets/latte.png";
import capuccino from "../assets/capuccino.png";
import macchiato from "../assets/macchiato.png";
import mocaccino from "../assets/mocaccino.png";
import chocolatequente from "../assets/chocolatequente.png";
import cubano from "../assets/cubano.png";
import havaiano from "../assets/havaiano.png";
import { v4 as uuidv4 } from "uuid";

interface CartContextType {
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartAmount: number;
  coffes: itemCardapiosProps[];
  cartItems: itemCardapiosProps[];
  deleteItemFromCart: (id: string) => void;
  totalItemsPrice: number;
}

interface itemCardapiosProps {
  id: string;
  img: any;
  title: string[];
  name: string;
  description: string;
  price: number;
  amount: number;
}

interface AccProps {
  totalItems: number;
}

interface CartProviderProps {
  children: ReactNode;
}
export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartProviderProps) => {
  const [coffes, setCoffe] = useState<itemCardapiosProps[]>([
    {

      id: uuidv4(),
      img: expresso,
      title: ["Tradicional"],
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.90,
      amount: 0
    },
    {
      id: uuidv4(),
      img: americano,
      title: ["Tradicional"],
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.90,
      amount: 0
    },
    {
      id: uuidv4(),
      img: expressocremoso,
      title: ["Tradicional"],
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.90,
      amount: 0
    },
    {
      id: uuidv4(),
      img: cafegelado,
      title: ["Tradicional", "Gelado"],
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.9,
      amount: 0
    },
    {
      id: uuidv4(),
      img: cafecomleite,
      title: ["Tradicional", "Com leite"],
      name: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.90,
      amount: 0
    },
    {
      id: uuidv4(),
      img: latte,
      title: ["Tradicional", "com leite"],
      name: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.90,
      amount: 0
    },
    {
      id: uuidv4(),
      img: capuccino,
      title: ["Tradicional", "com leite"],
      name: "Capuccino",
      description: "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.90,
      amount: 0
    },
    {
      id: uuidv4(),
      img: macchiato,
      title: ["Tradicional", "com leite"],
      name: "Macchiato",
      description: "Café expresso misturado com um pouco de leite quente e espuma",
      price: 9.90,
      amount: 0
    },
    {
      id: uuidv4(),
      img: mocaccino,
      title: ["Tradicional", "com leite"],
      name: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 9.90,
      amount: 0
    },

    {
      id: uuidv4(),
      img: chocolatequente,
      title: ["Tradicional", "com leite"],
      name: "Chocolate Quente",
      description: "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.90,
      amount: 0
    },
    {
      id: uuidv4(),
      img: cubano,
      title: ["Especial", "alcoólico", "gelado"],
      name: "Cubano",
      description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 9.90,
      amount: 0
    },
    {
      id: uuidv4(),
      img: havaiano,
      title: ["especial"],
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 9.90,
      amount: 0
    },
    {
      id: uuidv4(),
      img: mocaccino,
      title: ["especial"],
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 9.90,
      amount: 0
    },
    {
      id: uuidv4(),
      img: mocaccino,
      title: ["especial", "alcoólico"],
      name: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 9.90,
      amount: 0
    },
  ])
  const [cartAmount, setCartAmount] = useState(0);
  const [cartItems, setCartItems] = useState<itemCardapiosProps[]>([])
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);



  useEffect(() => {
    const { totalItems } = coffes.reduce((acc, coffe) => {
      acc.totalItems += coffe.amount;
      return acc;
    }, {
      totalItems: 0
    })
    setCartAmount(totalItems)
  }, [coffes])

  useEffect(() => {
    const selectedItems = coffes.filter(coffe => coffe.amount > 0);
    setCartItems(selectedItems);
  }, [coffes])

  useEffect(() => {
    const { total } = cartItems.reduce((acc, items) => {
      acc.total += items.amount * items.price
      return acc
    }, {
      total: 0
    })
    setTotalItemsPrice(total);
  }, [cartItems, cartAmount])

  // const sumTotalItems = () => {
  //   const { total } = cartItems.reduce((acc, items) => {
  //     acc.total = items.amount * items.price
  //     return acc
  //   }, {
  //     total: 0
  //   })
  //   setTotalItemsPrice(total);
  // }
  const addToCart = (id: string) => {
    // sumTotalItems()
    const updatedCoffe = coffes.map(coffe => {
      if (coffe.id === id) {
        coffe.amount += 1;
      }
      return coffe
    });

    setCoffe(updatedCoffe)
  }


  const removeFromCart = (id: string) => {
    // sumTotalItems()
    const updatedCoffe = coffes.map(coffe => {
      if (coffe.id === id && coffe.amount >= 1) {
        coffe.amount -= 1;
      }
      return coffe
    });

    setCoffe(updatedCoffe)
  }

  const deleteItemFromCart = (id: string) => {
    const updatedCart = cartItems.filter(coffe => coffe.id !== id)
    const updatedCoffe = coffes.map(coffe => {
      if (coffe.id === id) {
        coffe.amount = 0;
      }
      return coffe
    });

    setCoffe(updatedCoffe)
    setCartItems(updatedCart)
  }
  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, cartAmount, coffes, cartItems, deleteItemFromCart, totalItemsPrice }}>
      {children}
    </CartContext.Provider>
  )
} 