import styled from "styled-components";
import { Caption, Flex, H3 } from "../../atomics";

const Styles = {
  Title: styled(H3)`
    font-size: ${(props) => props.theme.fonts.sizes.mdl};
  `,
  AuthorInfo: styled(Flex)`
    font-size: ${(props) => props.theme.fonts.sizes.sm};
    font-weight: ${(props) => props.theme.fonts.weights.light};

    b {
      font-weight: ${(props) => props.theme.fonts.weights.medium};
    }
  `,
  AuthorName: styled(Flex)`
    font-size: ${(props) => props.theme.fonts.sizes.sm};
  `,
  AuthorImg: styled.img`
    width: ${(props) => props.theme.spaces["40px"]};
    height: ${(props) => props.theme.spaces["40px"]};
  `,
  AuthorData: styled(Flex)`
    height: 100%;
    justify-content: space-around;
  `,
  PostDate: styled(Caption)`
    font-size: ${(props) => props.theme.fonts.sizes.xs};
    color: ${(props) => props.theme.colors.neutrals.dark};
  `,
  PostImg: styled.img`
    width: 100%;
    border-radius: ${(props) => props.theme.borders.radius.small};
  `,
};

export default Styles;
