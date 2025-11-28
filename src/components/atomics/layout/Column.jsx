import styled from "styled-components";

export const Column = styled.div`
  grid-column: span
    ${(props) => props.$mobile || props.theme.grid.mobile.columns};

  gap: ${(props) => props.$gap || props.theme.grid.mobile.gap};

  ${(props) =>
    props.$margin &&
    `
    margin: ${props.$margin};
  `}

  ${(props) =>
    props.$flex &&
    `
    display: flex;
    flex-direction: ${props.$column ? "column" : "row"};  
  `}

  ${(props) =>
    props.$centerV &&
    `
    align-content: center;
  `}

  ${(props) =>
    props.$centerH &&
    `
    justify-items: center;
  `}

  ${(props) => props.theme.breakpoint.desktop} {
    grid-column: span
      ${(props) => props.$desktop || props.theme.grid.desktop.columns};
  }
`;
