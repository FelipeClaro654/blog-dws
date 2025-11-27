import styled from "styled-components";
import { Flex } from "./Flex";
import { BodyLargeRegular } from "../typography";

export const Badge = styled(Flex)`
  border-radius: ${(props) => props.theme.borders.radius.regular};
  background: ${(props) =>
    props.$background || props.theme.colors.neutrals.lightest};
  height: ${(props) => props.theme.spaces["32px"]};
  align-items: center;
  padding: 0 ${(props) => props.theme.spaces["12px"]};
`;

export const BadgeText = styled(BodyLargeRegular)`
  font-size: ${(props) => props.theme.fonts.sizes.xs};
  color: ${(props) => props.theme.colors.neutrals.dark};
`;
