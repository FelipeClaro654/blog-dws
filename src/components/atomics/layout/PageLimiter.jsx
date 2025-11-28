import styled from "styled-components";
import { Flex } from "./Flex";

export const PageLimiter = styled(Flex)`
  width: 100%;
  max-width: ${(props) => props.theme.pageLimit};
  align-self: center;
  height: calc(100vh - 60px);

  ${(props) => props.theme.breakpoint.desktop} {
    padding: 0 ${(props) => props.theme.spaces["56px"]};
    height: calc(100vh - 114px);
  }
`;
