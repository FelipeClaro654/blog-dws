import { Caption, H3 } from "@/components/atomics/typography";
import styled from "styled-components";

export const ImageContainer = styled.div`
  border-radius: ${(props) => props.theme.borders.radius.upperOnly};
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 150px;
`;

export const PostDataAndAuthor = styled(Caption)`
  font-size: ${(props) => props.theme.fonts.sizes.sm};
  color: ${(props) => props.theme.colors.neutrals.extraDark};
`;

export const PostTitle = styled(H3)`
  line-height: ${(props) => props.theme.fonts.lineHeights.normal};
`;

export const PostContent = styled(Caption)`
  font-size: ${(props) => props.theme.fonts.sizes.sm};
  line-height: ${(props) => props.theme.fonts.lineHeights.medium};
  max-height: ${(props) => props.theme.spaces["40px"]};
  margin-top: -${(props) => props.theme.spaces["6px"]};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
