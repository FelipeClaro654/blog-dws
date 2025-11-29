import styled from "styled-components";

export const Flex = styled.div.attrs((props) => ({
  as: props.$as || "div",
}))`
  display: flex;
  padding: ${(props) => props.$padding || "0"};
  ${(props) => props.$paddingTop && `padding-top: ${props.$paddingTop};`}
  ${(props) =>
    props.$paddingBottom && `padding-bottom: ${props.$paddingBottom};`}
  ${(props) => props.$paddingLeft && `padding-left: ${props.$paddingLeft};`}
  ${(props) => props.$paddingRight && `padding-right: ${props.$paddingRight};`}
  ${(props) =>
    props.$justifyContent && `justify-content: ${props.$justifyContent};`}
  ${(props) => props.$alignItems && `align-items: ${props.$alignItems};`}
  flex-direction: ${(props) => (props.$column ? "column" : "row")};
  gap: ${(props) => props.$gap || props.theme.grid.mobile.gap};

  ${(props) => props.theme.breakpoint.desktop} {
    gap: ${(props) => props.$gap || props.theme.grid.desktop.gap};
  }
`;
