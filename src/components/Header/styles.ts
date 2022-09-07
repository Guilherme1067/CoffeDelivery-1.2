import styled from "styled-components";

export const HeaderNavigation = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const LeftSideContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.68rem;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme['purple-light']};
  
  border-radius: 8px;
  padding: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple-dark']}
  }

  span {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 14px;
  }
  
  `

export const CartContainer = styled.div`
     display: flex;
     padding: 0.5rem;
     background: ${(props) => props.theme['yellow-light']};
     border-radius: 6px;
     svg {
      color: ${(props) => props.theme['yellow-dark']}
    }
 
  `