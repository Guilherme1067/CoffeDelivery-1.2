import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 32px;
`;


export const DeliveryAddress = styled.div `
  display: flex;
  gap: 8px;
`
export const AddressInputs = styled.div`
  width: 100%;
  display: grid;
  gap: 16px;
  
  div {
    display: flex;
    gap: 12px;

    & + div input {
      flex: 1;
    }
    &:nth-child(1) input {
      flex: none;
      width: 200px;
    }
    &:nth-child(3) input:nth-child(1) {
      flex: none;
      width: 200px;
    }

    &:nth-child(3) input:nth-child(2)::-webkit-input-placeholder::after {
      content: 'sadas';
      display: block;
      color:green;
    }

    &:nth-child(4) input:nth-child(1) {
      flex: none;
      width: 200px;
    }

    &:last-child input:nth-child(3) {
      flex: 0;
      width: 60px;
      color: red;
    }
  }

  input {
    display: flex;
    background-color: ${(props) => props.theme["base-input"]};
    border-radius: 4px;
    padding: 12px;
    border: 1px solid ${(props) => props.theme["base-button"]};


    &::placeholder {
      font-size: 14px;
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 640px;
  height: 372px;
`;
export const FormHeader = styled.p`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 18px;
  font-family: "Baloo 2";
  font-weight: 700;
`;
export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 15px;
  padding: 40px;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  img {
    width: 64px;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme["base-button"]};
  padding-bottom: 33px;
`;
export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Price = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme["base-text"]};
  display: flex;
  align-self: flex-start;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    font-size: 18px;
    font-family: "Baloo 2";
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const AddresContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 15px;
  padding: 40px;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const FormTitle = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const FormSubTitle = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme["base-text"]};
`;

export const LeftSideContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const PaymantHeader = styled.div`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;
export const PaymantTitle = styled.p`
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const PaymantSubTitle = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme["base-text"]};
`;

export const PaymentMethods = styled.p`
  display: flex;
  gap: 12px;

  button {
    display: flex;
    gap: 12px;
    width: 178px;
    height: 51px;
    align-items: center;
    justify-content: flex-start;
    padding: 16px;
    background: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    cursor: pointer;
    border: none;

    &:hover {
      background: ${(props) => props.theme["purple-light"]};
    }

    p {
      font-size: 12px;
      text-transform: uppercase;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const ControlItemsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const RemoveContainer = styled.div`
  background: ${(props) => props.theme["base-button"]};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 6px;
  gap: 5px;
  padding: 0 8px;
  cursor: pointer;

  &:hover {
  background: ${(props) => props.theme["base-hover"]};

  }

  p {
    text-transform: uppercase;
    font-size: 12px;
  }

  svg {
    color: ${(props) => props.theme["purple"]};
    cursor: pointer;
  }
`;

export const BottomItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13.5px;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const TotalItems = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme["base-text"]};
`;

export const Delivery = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme["base-text"]};
`;
export const TotalPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const Button = styled.button`
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  background: ${(props) => props.theme["yellow"]};
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  margin-top: 12px;
  padding: 12px 117px;
  border: none;
  transition: all 0.4s;
  &:hover {
  background: ${(props) => props.theme["yellow-dark"]};

  }
`;
