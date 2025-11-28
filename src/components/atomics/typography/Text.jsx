import styled from "styled-components";

export const BodyLargeRegular = styled.span`
  ${(props) => props.theme.typography.body.large.regular}
`;

export const BodyLargeSemibold = styled.span`
  ${(props) => props.theme.typography.body.large.semibold}
`;

export const BodySmall = styled.span`
  ${(props) => props.theme.typography.body.small}
`;

export const Caption = styled.p`
  ${(props) => props.theme.typography.caption}
`;

export const TextBlock = styled(Caption)`
  font-size: ${(props) => props.theme.fonts.sizes.sm};
  line-height: ${(props) => props.theme.fonts.lineHeights.medium};
`;
