import styled from "styled-components";

export const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;
