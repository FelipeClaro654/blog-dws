import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  gap: ${(props) => props.theme.grid.mobile.gap};
  grid-template-columns: repeat(
    ${(props) => props.theme.grid.mobile.columns},
    1fr
  );

  ${(props) => props.theme.breakpoint.desktop} {
    grid-template-columns: repeat(
      ${(props) => props.theme.grid.desktop.columns},
      1fr
    );
    gap: ${(props) => props.theme.grid.desktop.gap};
  }
`;
