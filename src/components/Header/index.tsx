import { MapPin, ShoppingCart } from "phosphor-react"
import { Logo } from "../../assets/Logo"
import { Container } from "../../styles/global"
import { Cart } from "../Cart/Cart"
import { HeaderNavigation, LeftSideContainer, LocationContainer } from "./styles"

export const Header = () => {
  return (
    <Container>
      <HeaderNavigation>
        <Logo />
        <LeftSideContainer>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </LocationContainer>
            <Cart/>
        </LeftSideContainer>

      </HeaderNavigation>
    </Container>


  )
}