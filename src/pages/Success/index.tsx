import { CurrencyDollarSimple, MapPinLine, Timer } from "phosphor-react";
import { Container } from "../../styles/global";
import checkoutImage from '../../assets/checkoutImage.svg'

// import {checkoutImg} from "../../assets/checkoutImg.png"
import {
  ExtraInfo,
  IconBox,
  InfoBox,
  InfoCard,
  PageItems,
  PageSubtitle,
  PageTitle,
} from "./styles";

export const Sucess = () => {
  return (
    <Container>
      <PageTitle>Uhu! Pedido confirmado</PageTitle>
      <PageSubtitle>
        Agora é só aguardar que logo o café chegará até você
      </PageSubtitle>

      <PageItems>
      <InfoCard>
        <InfoBox>
          <IconBox color="purple">
          <MapPinLine size={16} weight="fill" />
          </IconBox>
          <ExtraInfo>
            <p>Entrega em Rua João Daniel Martinelli, 102</p>
            <p>Farrapos - Porto Alegre, RS</p>
          </ExtraInfo>
        </InfoBox>
        <InfoBox>
          <IconBox color="yellow">
           <Timer size={16} weight="fill" />
          </IconBox>
          <ExtraInfo>
            <p> Previsão de entrega </p>
            <p> 20 min - 30 min </p>
          </ExtraInfo>
        </InfoBox>

        <InfoBox>
          <IconBox color="yellow-dark">
          <CurrencyDollarSimple size={16} weight="fill" />
          </IconBox>
          <ExtraInfo>
            <p>Pagamento na entrega</p>
            <p>Cartão de Crédito</p>
          </ExtraInfo>
        </InfoBox>
      </InfoCard>

        <img src={checkoutImage} alt=""/>
      </PageItems>
    </Container>
  );
};
