import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import { useContext } from "react";
import { AddToCartComponent } from "../../components/AddToCartComponent";
import { CartContext } from "../../contexts/CartContext";
import { formatPrice } from "../../helpers/formatPrice";
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
  const { cartItems, deleteItemFromCart, totalItemsPrice } = useContext(CartContext)
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
                <CreditCard size={16} /> <p>Cartão de Crédito</p>
              </button>
              <button>
                <Bank size={16} /> <p>Cartão de débito</p>
              </button>
              <button>
                <Money size={16} /> <p>Dinheiro</p>
              </button>
            </PaymentMethods>
          </PaymentContainer>
        </LeftSideContent>

        <ProductContainer>
          <p>Cafés selecionados</p>
          <ItemsContainer>
            {cartItems.map(item => (
              <MainDiv>
                <img src={item.img} alt="" />
                <CenterContent>
                  <p>{item.name}</p>
                  <ControlItemsContainer>
                    <AddToCartComponent id={item.id} amount={item.amount} />
                    <RemoveContainer onClick={() => deleteItemFromCart(item.id)}>
                      <Trash />
                      <p>Remover</p>
                    </RemoveContainer>
                  </ControlItemsContainer>
                </CenterContent>
                <Price>{formatPrice(item.price)}</Price>
              </MainDiv>
            ))}
            <BottomItems>
              <div>
                <TotalItems>Total de itens</TotalItems>
                <p>{totalItemsPrice && formatPrice(totalItemsPrice)}</p>
              </div>
              <div>
                <Delivery>Entrega</Delivery>
                <p>R$ 3,50</p>
              </div>
              <div>
                <TotalPrice>Total</TotalPrice>
                <TotalPrice>{formatPrice(totalItemsPrice + 3.50)}</TotalPrice>
              </div>
            </BottomItems>

            <Button>Confirmar Pedido</Button>
          </ItemsContainer>
        </ProductContainer>
      </CheckoutContainer>
    </Container>
  );
};
