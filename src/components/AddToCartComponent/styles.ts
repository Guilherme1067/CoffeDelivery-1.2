import styled from "styled-components";

export const AmountContainer = styled.div `
  background: ${(props) => props.theme['base-button']};
  display:flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 6px;
  gap: 5px;
  padding: 8px 12px;
  width: 72px;
  height: 38px;

  svg {
    color: ${(props) => props.theme['purple']};
    cursor: pointer;
  }
`
