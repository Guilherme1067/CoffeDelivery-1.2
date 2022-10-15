import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useContext } from 'react'
import CupImg from '../../assets/CupImg.svg'
import { Coffes } from '../../components/Coffes'
import { CartContext } from '../../contexts/CartContext'
import { Container } from '../../styles/global'
import { DescriptionImgContainer, HomeContainer, LeftSideContent, MainContent } from './styles'

export const Home = () => {
  return (
    <Container>
      <HomeContainer>
        <LeftSideContent>
          <h1>Encontre o café perfeito<br />para qualquer hora do dia</h1>
          <span>Com o Coffee Delivery você recebe seu café onde estiver, a <br />qualquer hora</span>
          <ul>
            <li>
              <DescriptionImgContainer color="yellow-dark"><ShoppingCart size={16} weight="fill" /></DescriptionImgContainer>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <DescriptionImgContainer color="base-text"><Package size={16} weight="fill" /></DescriptionImgContainer>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <DescriptionImgContainer color="yellow"> <Timer size={16} weight="fill" /></DescriptionImgContainer>
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <DescriptionImgContainer color="purple"> <Coffee size={16} weight="fill" /></DescriptionImgContainer>
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </LeftSideContent>
        <img src={CupImg} alt="" />
      </HomeContainer>
      <MainContent>
        <h1>Nossos Cafés</h1>
        <Coffes />
      </MainContent>
    </Container>
  )
}
