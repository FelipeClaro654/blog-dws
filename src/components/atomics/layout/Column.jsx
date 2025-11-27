import styled from "styled-components";

export const Column = styled.div`
  ${(props) =>
    props.$flex &&
    `
    display: flex;
    flex-direction: ${props.$column ? "column" : "row"};  
  `}

  grid-column: span
    ${(props) => props.$mobile || props.theme.grid.mobile.columns};

  ${(props) => props.theme.breakpoint.desktop} {
    grid-column: span
      ${(props) => props.$desktop || props.theme.grid.desktop.columns};
  }

  gap: ${(props) => props.theme.grid.mobile.gap};

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
`;
