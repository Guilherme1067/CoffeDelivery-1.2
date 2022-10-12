import styled from "styled-components";

interface BoxProps {
  color: "purple" | "yellow" | "yellow-dark";
}

export const PageTitle = styled.p`
  font-family: "Baloo 2";
  font-weight: 800;
  font-size: 32px;
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const PageSubtitle = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme["base-subtitle"]};
  margin-bottom: 40px;
`;

export const InfoCard = styled.div`
  width: 526px;

  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: linear-gradient( ${(props) => props.theme["background"]}, ${(props) => props.theme["background"]}) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme["yellow"]},
        ${(props) => props.theme["purple"]}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`;

export const InfoBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconBox = styled.div<BoxProps>`
  width: 32px;
  height: 32px;
  padding: 8px;
  background: ${(props) => props.theme[props.color]};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme["white"]};
  }
`;

export const PageItems = styled.div`
  display: flex;
  gap: 102px;
`;
