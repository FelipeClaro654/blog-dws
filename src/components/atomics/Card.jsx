import styled from "styled-components";
import { Flex } from "./layout/Flex";

export const Card = styled(Flex)`
  cursor: pointer;
  background: ${(props) =>
    props.$background || props.theme.colors.neutrals.white};
  border-radius: ${(props) => props.theme.spaces["16px"]};
  min-height: 150px;
`;
