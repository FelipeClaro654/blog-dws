import styled from "styled-components";
import { BodyLargeSemibold } from "../typography";

export const InteractiveText = styled(BodyLargeSemibold)`
  font-size: ${(props) => props.theme.fonts.sizes.xs};
`;
