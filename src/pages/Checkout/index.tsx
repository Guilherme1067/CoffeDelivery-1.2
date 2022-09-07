import { MapPinLine } from "phosphor-react"
import { Header } from "../../components/Header"
import { Container } from "../../styles/global"
import { AddresContainer, CheckoutContainer, FormContainer, ProductContainer } from "./styles"

export const CheckOut = () => {
    return (
        <Container>
            <CheckoutContainer>

            <FormContainer>
             <p>Complete seu pedido</p>
             <AddresContainer>
                <MapPinLine size={24} /> 
                <div>
                    <p>Endereco de entrega</p>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>

                <input></input>
             </AddresContainer>
            </FormContainer>

            <ProductContainer>
                <p>Cafés selecionados</p>
            </ProductContainer>

            </CheckoutContainer>

        </Container>
    )
}