import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import { useForm } from "react-hook-form"

import { useContext, useState } from "react";
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
  PaymentHeader,
  PaymentSubTitle,
  PaymentTitle,
  PaymentContainer,
  PaymentMethods,
  Price,
  ProductContainer,
  RemoveContainer,
  TotalItems,
  TotalPrice,
} from "./styles";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";

export const CheckOut = () => {
  const { cartItems, deleteItemFromCart, totalItemsPrice } = useContext(CartContext)
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();

  const hadleUserAddress = (data: any) => {
    navigate("/success")
  }
  const fieldsValues = watch(["cep", "street", "number", "complement", "neighborhood", "city", "uf"])
  const isButtonAvailable = fieldsValues.some(value => !value);
  return (
    <Container>
      <CheckoutContainer onSubmit={handleSubmit(hadleUserAddress)}>
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
                  <input type="number" placeholder="CEP"  {...register("cep", { valueAsNumber: true })} />
                </div>
                <div>
                  <input placeholder="Rua" {...register("street")} />
                </div>
                <div>
                  <input placeholder="Número" {...register("number", { valueAsNumber: true })} />
                  <input placeholder="Complemento" {...register("complement")} />
                </div>
                <div>
                  <input placeholder="Bairro" {...register("neighborhood")} />
                  <input placeholder="Cidade" {...register("city")} />
                  <input placeholder="UF" {...register("uf")} />
                </div>
              </AddressInputs>
            </AddresContainer>
          </FormContainer>

          {/* componente pagamento */}
          <PaymentContainer>
            <PaymentHeader>
              <CurrencyDollar size={20} weight="regular" />
              <div>
                <PaymentTitle>Pagamento</PaymentTitle>
                <PaymentSubTitle>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </PaymentSubTitle>
              </div>
            </PaymentHeader>

            <PaymentMethods>
              <div>
                <input id="credit" value="credit" name="paymentMethod" type="radio" />
                <label htmlFor="credit">
                  <CreditCard size={16} /> <p>Cartão de Crédito</p>
                </label>
              </div>
              <div>
                <input id="debit" type="radio" name="paymentMethod" />
                <label htmlFor="debit">
                  <Bank size={16} /> <p>Cartão de débito</p>
                </label>
              </div>
              <div>
                <input id="cash" type="radio" name="paymentMethod" />
                <label htmlFor="cash">
                  <Money size={16} /> <p>Dinheiro</p>
                </label>
              </div>
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

            <Button type="submit" disabled={isButtonAvailable}>Confirmar Pedido</Button>

          </ItemsContainer>
        </ProductContainer>
      </CheckoutContainer>
    </Container>
  );
};
