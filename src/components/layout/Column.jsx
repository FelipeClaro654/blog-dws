import styled from "styled-components";

export const Column = styled.div`
  grid-column: span
    ${(props) => props.$mobile || props.theme.grid.mobile.columns};

  ${(props) => props.theme.breakpoint.desktop} {
    grid-column: span
      ${(props) => props.$desktop || props.theme.grid.desktop.columns};
  }

  ${(props) =>
    props.$center &&
    `
    align-content: center;
  `}
`;
