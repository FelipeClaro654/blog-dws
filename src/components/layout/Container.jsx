import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 ${(props) => props.theme.grid.mobile.margin}
  margin: 0 auto;

  ${(props) => props.theme.breakpoint.desktop} {
    padding: 0 ${(props) => props.theme.grid.desktop.margin};
    max-width: ${(props) => props.theme.grid.desktop.container};
  }
`;
