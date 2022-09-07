import styled from "styled-components";

interface ImageContainerProps {
  color: string;
}

export const HomeContainer = styled.section`
  margin-top: 94px;
  display: flex;
  justify-content: center;
  gap: 3.5rem;

  svg {
    color: white;
  }
  img {
      max-width: 476px;
    }
`

export const LeftSideContent = styled.section`
    flex-wrap: wrap;

    h1 {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 48px;
      color: ${(props) => props.theme['base-title']};
      line-height: 130%;
      margin-bottom: 1rem;

    }

    span {
      color: ${(props => props.theme['base-subtitle'])};
      font-size: 20px;
    }
    ul {
      margin-top: 66px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;


       li {
        display: flex;
        align-items: center;
        gap: 12px;
       }
    }
   
`

export const DescriptionImgContainer = styled.div<ImageContainerProps>`
  background: ${(props) => props.theme[props.color]};
  display: flex;
  border-radius: 100%;
  padding: 0.5rem;
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 108px;
`

