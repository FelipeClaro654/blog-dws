import styled from "styled-components";
import { Flex } from "./Flex";

export const ApplicationWrapper = styled(Flex)`
  height: 100%;
  background: linear-gradient(
    60deg,
    ${(props) => props.theme.colors.accent1.light}50 0%,
    ${(props) => props.theme.colors.neutrals.lightest}00 50%,
    ${(props) => props.theme.colors.secondary.light}30 80%
  );
  padding-top: ${(props) => props.theme.spaces["60px"]};
  min-height: 100vh;

  ${(props) => props.theme.breakpoint.desktop} {
    padding-top: 0;
  }
`;
