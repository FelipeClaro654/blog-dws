import styled from "styled-components";

export const Grid = styled.div.attrs((props) => ({
  as: props.$as || "div",
}))`
  width: 100%;
  margin: 0 auto;
  padding: ${(props) => props.theme.spaces["16px"]};
  display: grid;
  gap: ${(props) => props.$gapMobile || props.theme.grid.mobile.gap};
  grid-template-columns: repeat(
    ${(props) => props.theme.grid.mobile.columns},
    1fr
  );

  ${(props) => props.theme.breakpoint.desktop} {
    padding: 0;
    grid-template-columns: repeat(
      ${(props) => props.theme.grid.desktop.columns},
      1fr
    );
    gap: ${(props) => props.$gapDesktop || props.theme.grid.desktop.gap};
  }
`;
