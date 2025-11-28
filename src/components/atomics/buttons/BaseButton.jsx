import styled from "styled-components";
import { BodyLargeSemibold } from "../typography";

export const BaseButton = styled.button`
  border-radius: ${(props) => props.theme.borders.radius.regular};
  height: ${(props) => props.theme.spaces["32px"]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spaces["12px"]}
    ${(props) => props.theme.spaces["16px"]};
`;

export const ButtonText = styled(BodyLargeSemibold)`
  font-size: ${(props) => props.theme.fonts.sizes.xs};
`;
