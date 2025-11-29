import { css } from "styled-components";

export const baseStyles = {
  common: css`
    cursor: pointer;
    width: max-content;
    border-radius: ${(props) => props.theme.borders.radius.regular};
    height: ${(props) => props.theme.spaces["32px"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.theme.spaces["12px"]}
      ${(props) => props.theme.spaces["14px"]};
  `,
  variant: {
    secondary: css`
      background-color: transparent;
      color: ${(props) => props.theme.colors.secondary.medium};
      border: 1px solid ${(props) => props.theme.colors.secondary.medium};
      &:hover {
        background-color: ${(props) => props.theme.colors.neutrals.lightest};
      }
    `,
    ghost: css`
      background: transparent;
      border: none;
      font-size: ${(props) => props.theme.spaces["16px"]};
      font-weight: ${(props) => props.theme.fonts.weights.thin};
      color: ${(props) => props.theme.colors.neutrals.darkest};
      padding: 0;
    `,
  },
};
