import styled from "styled-components";
import { Grid, Flex } from "../../atomics/layout";

export const HeaderGrid = styled(Grid)`
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.neutrals.white} 30%,
    ${(props) => props.theme.colors.neutrals.lightest}60 90%
  );
  border-bottom: 1px solid ${(props) => props.theme.colors.neutrals.lightest};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

export const SearchIconGrid = styled(Flex)`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.theme.spaces["30px"]};
  height: ${(props) => props.theme.spaces["30px"]};
  border-radius: ${(props) => props.theme.borders.radius.circle};
  background: ${(props) => props.theme.colors.primary.dark};
  svg {
    width: ${(props) => props.theme.spaces["16px"]};
    height: ${(props) => props.theme.spaces["16px"]};
  }
  &:hover {
    box-shadow: 0 0 0 ${(props) => props.theme.spaces["4px"]}
      ${(props) => props.theme.colors.neutrals.extraLight};
  }
`;

export const LogoText = styled.span`
  align-self: flex-end;
  font-size: ${(props) => props.theme.fonts.sizes.sm};
  font-weight: ${(props) => props.theme.fonts.weights.thin};
`;

export const LogoArea = styled(Flex)`
  gap: ${(props) => props.theme.spaces["10px"]};
  svg {
    max-width: 100px;
  }
`;

export const SearchIconArea = styled(Flex)`
  justify-content: end;
`;
