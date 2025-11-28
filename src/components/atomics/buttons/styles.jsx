import styled from "styled-components";
import { BodyLargeSemibold } from "../typography";

export const BaseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  width: max-content;
  border-radius: ${(props) => props.theme.borders.radius.regular};
  height: ${(props) => props.theme.spaces["32px"]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spaces["12px"]}
    ${(props) => props.theme.spaces["14px"]};

  ${(props) =>
    props.$variant === "secondary" &&
    `
    color: ${props.theme.colors.secondary.medium};
    border: 1px solid ${props.theme.colors.secondary.medium};
  `}
`;

export const ButtonText = styled(BodyLargeSemibold)`
  font-size: ${(props) => props.theme.fonts.sizes.xs};
`;
