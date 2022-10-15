import { MapPin, ShoppingCart } from "phosphor-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Logo } from "../../assets/Logo"
import { useLocation } from "../../hooks/useLocation"
import { Container } from "../../styles/global"
import { Cart } from "../Cart/Cart"
import { HeaderNavigation, LeftSideContainer, LocationContainer } from "./styles"

export const Header = () => {
  const { location } = useLocation();

  return (
    <Container>
      <HeaderNavigation>
        <Link to="/">
          <Logo />
        </Link>
        <LeftSideContainer>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            {location.city && location.state ? (
              <span>{`${location.city}, ${location.state}`}</span>
            ) : <span>"Belo Horizonte,MG"</span>}
          </LocationContainer>
          <Link to="/checkout">
            <Cart />
          </Link>
        </LeftSideContainer>

      </HeaderNavigation>
    </Container>


  )
}