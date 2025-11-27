import styled from "styled-components";

export const DotSeparator = styled.span`
  display: flex;
  &::before {
    content: "•";
    color: ${(props) => props.theme.colors.secondary.medium};
    font-size: ${(props) => props.theme.fonts.sizes.md};
    transform: translateY(-${(props) => props.theme.spaces["2px"]});
    line-height: 0;
    align-self: center;
  }
`;
