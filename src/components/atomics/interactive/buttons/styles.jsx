import styled from "styled-components";
import { BodyLargeSemibold } from "../../typography";
import { baseStyles } from "../base";

export const BaseButton = styled.button`
  ${baseStyles.common}
  ${(props) => baseStyles.variant[props.$variant || "primary"]}
`;

export const ButtonText = styled(BodyLargeSemibold)`
  font-size: ${(props) => props.theme.fonts.sizes.xs};
`;
