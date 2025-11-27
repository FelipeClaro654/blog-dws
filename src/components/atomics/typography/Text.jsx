import styled from "styled-components";

export const BodyLargeRegular = styled.p`
  ${(props) => props.theme.typography.body.large.regular}
`;

export const BodyLargeSemibold = styled.p`
  ${(props) => props.theme.typography.body.large.semibold}
`;

export const BodySmall = styled.p`
  ${(props) => props.theme.typography.body.small}
`;

export const Caption = styled.span`
  ${(props) => props.theme.typography.caption}
`;
