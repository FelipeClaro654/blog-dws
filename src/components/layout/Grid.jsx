import styled from "styled-components";

export const Grid = styled.div.attrs((props) => ({
  as: props.$as || "div",
}))`
  width: 100%;
  margin: 0 auto;
  display: grid;
  gap: ${(props) => props.theme.grid.mobile.gap};
  grid-template-columns: repeat(
    ${(props) => props.theme.grid.mobile.columns},
    1fr
  );

  ${(props) => props.theme.breakpoint.desktop} {
    max-width: ${(props) => props.theme.grid.desktop.container};
    grid-template-columns: repeat(
      ${(props) => props.theme.grid.desktop.columns},
      1fr
    );
    gap: ${(props) => props.theme.grid.desktop.gap};
  }
`;
