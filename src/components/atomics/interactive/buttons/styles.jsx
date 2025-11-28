import styled from "styled-components";
import { baseStyles } from "../base";

export const BaseButton = styled.button`
  ${baseStyles.common}
  ${(props) => baseStyles.variant[props.$variant || "primary"]}
`;
