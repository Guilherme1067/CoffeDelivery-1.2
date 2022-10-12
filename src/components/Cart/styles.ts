import styled from "styled-components";

export const CartContainer = styled.div`
     display: flex;
     padding: 0.5rem;
     background: ${(props) => props.theme['yellow-light']};
     border-radius: 6px;
     svg {
      color: ${(props) => props.theme['yellow-dark']}
    }

  `

  export const Counter = styled.div`
    position: absolute;
    top: 24px;
    right: 343px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['white']};
    font-weight: 700;
    font-size: 12px;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: ${(props) => props.theme['yellow-dark']};
  `