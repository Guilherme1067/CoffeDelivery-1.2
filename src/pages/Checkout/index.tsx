import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import expresso from "../../assets/expresso.png";
import { AddToCartComponent } from "../../components/AddToCartComponent";
import { Container } from "../../styles/global";
import {
  AddresContainer,
  AddressInputs,
  BottomItems,
  Button,
  CenterContent,
  CheckoutContainer,
  ControlItemsContainer,
  Delivery,
  DeliveryAddress,
  FormContainer,
  FormHeader,
  FormSubTitle,
  FormTitle,
  ItemsContainer,
  LeftSideContent,
  MainDiv,
  PaymantHeader,
  PaymantSubTitle,
  PaymantTitle,
  PaymentContainer,
  PaymentMethods,
  Price,
  ProductContainer,
  RemoveContainer,
  TotalItems,
  TotalPrice,
} from "./styles";

export const CheckOut = () => {
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
  return (
    <Container>
      <CheckoutContainer>
        <LeftSideContent>
          <FormContainer>
            <FormHeader>Complete seu pedido</FormHeader>
           
            <AddresContainer>
              <DeliveryAddress>
              <MapPinLine size={24} />
              <div>
                <FormTitle>Endereco de entrega</FormTitle>
                <FormSubTitle>
                  Informe o endereço onde deseja receber seu pedido
                </FormSubTitle>
              </div>
              </DeliveryAddress>
              <AddressInputs>
                <div>
                  <input placeholder="CEP" />
                </div>
                <div>
                  <input placeholder="Rua" />
                </div>
                <div>
                  <input placeholder="Número" />
                  <input placeholder="Complemento" />
                </div>
                <div>
                  <input placeholder="Bairro" />
                  <input placeholder="Cidade" />
                  <input placeholder="UF" />
                </div>
              </AddressInputs>
            </AddresContainer>
          </FormContainer>

          {/* componente pagamento */}
          <PaymentContainer>
            <PaymantHeader>
              <CurrencyDollar size={20} weight="regular" />
              <div>
                <PaymantTitle>Pagamento</PaymantTitle>
                <PaymantSubTitle>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </PaymantSubTitle>
              </div>
            </PaymantHeader>

            <PaymentMethods>
              <button>
                <CreditCard size={16}/> <p>Cartão de Crédito</p>
              </button>
              <button>
                <Bank size={16}/> <p>Cartão de débito</p>
              </button>
              <button>
                <Money size={16}/> <p>Dinheiro</p>
              </button>
            </PaymentMethods>
          </PaymentContainer>
        </LeftSideContent>

        <ProductContainer>
          <p>Cafés selecionados</p>
          <ItemsContainer>
            <MainDiv>
              <img src={itemsCardapios[0].img} alt="" />
              <CenterContent>
                <p>Expresso Tradicional</p>
                <ControlItemsContainer>
                  <AddToCartComponent />
                  <RemoveContainer>
                    <Trash />
                    <p>Remover</p> 
                  </RemoveContainer>
                </ControlItemsContainer>
              </CenterContent>
              <Price>R$ 9,90</Price>
            </MainDiv>
            <MainDiv>
              <img src={itemsCardapios[0].img} alt="" />
              <CenterContent>
                <p>Expresso Tradicional</p>
                <ControlItemsContainer>
                  <AddToCartComponent />
                  <RemoveContainer>
                    <Trash />
                    <p>Remover</p> 
                  </RemoveContainer>
                </ControlItemsContainer>
              </CenterContent>
              <Price>R$ 9,90</Price>
            </MainDiv>
            <BottomItems>
              <div>
                <TotalItems>Total de itens</TotalItems>
                <p>R$ 29,70</p>
              </div>
              <div>
                <Delivery>Entrega</Delivery>
                <p>R$ 3,50</p>
              </div>
              <div>
                <TotalPrice>Total</TotalPrice>
                <TotalPrice>R$ 33,20</TotalPrice>
              </div>
            </BottomItems>

            <Button>Confirmar Pedido</Button>
          </ItemsContainer>
        </ProductContainer>
      </CheckoutContainer>
    </Container>
  );
};
