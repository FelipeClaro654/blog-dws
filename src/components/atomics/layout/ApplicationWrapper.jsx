import styled from "styled-components";

export const ApplicationWrapper = styled.div`
  height: 100%;
  background: linear-gradient(
    60deg,
    ${(props) => props.theme.colors.accent1.light}50 0%,
    ${(props) => props.theme.colors.neutrals.lightest}00 50%,
    ${(props) => props.theme.colors.secondary.light}30 80%
  );
`;
