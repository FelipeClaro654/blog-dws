import styled from "styled-components";
import { Flex } from "./Flex";

export const PageLimiter = styled(Flex)`
  width: 100%;
  max-width: ${(props) => props.theme.pageLimit};
  align-self: center;
`;
