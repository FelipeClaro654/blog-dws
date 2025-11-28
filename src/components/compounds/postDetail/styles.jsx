import styled from "styled-components";
import { H3 } from "../../atomics";

const PostDetailStyles = {
  PostContent: {
    Title: styled(H3)`
      font-size: ${(props) => props.theme.fonts.sizes.mdl};
    `,
  },
};

export default PostDetailStyles;
