import styled from "styled-components";


export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 54px;

`
export const Card = styled.div`
  max-width: 262px;

  min-height:310px;

  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: space-between;

  background: ${(props) => props.theme['base-card']};

  position: relative;
  border-radius: 6px 36px;

  div:nth-child(2) div{
      flex-direction: row;
      gap: 12px;
   }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 12px;
  }

  img {
    position: absolute;
    top: -20px;
    width: 120px;
    height: 120px;
  }

  h2 {
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 20px;
    color: ${(props) => props.theme['base-subtitle']};
  }


footer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding-bottom: 20px;
    
  div {
    display: flex;
    flex-direction: row;
    align-items: center;

  }
}
`

export const Title = styled.p`
    text-transform: uppercase;
    padding: 4px 8px;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-light']};
    color:  ${(props) => props.theme['yellow-dark']};
    font-weight: 700;
    line-height: 13px;
    font-size: 11px;
    margin-top: 63px;
`

export const Description = styled.p`
  color: ${(props) => props.theme['base-label']};
  font-size: 16px;
  line-height: 18.2px;
  margin-top: 8px;
`

export const CartDiv = styled.div`
  background: ${(props) => props.theme['purple-dark']};
  width: 38px;
  height: 38px;
  padding: 10px 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s;
  svg {
    color: white;
  }

  &:hover {
    background: ${(props) => props.theme['purple']};

  }
`

export const Price = styled.p`
 display: flex;
 align-items: center;
 gap: 5px;
 font-family: 'Baloo 2';
 font-weight: 800;
 font-size: 24px;
 p {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme['base-text']};
 }
`


export const CoffeTitle = styled.div`
  margin-bottom: 16px;
`
