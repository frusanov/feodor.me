import styled from "styled-components";
import { ThemedElement } from "../theme";

export const Card = styled.div<ThemedElement>`
  position: relative;
  width: 640px;
  margin: 0 auto;
  overflow-y: auto;

  background: linear-gradient(
      315deg,
      rgba(${({ theme }) => theme.color.dark}, 0.6) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #f0f1f5;
  background-blend-mode: soft-light, normal;
  box-shadow: -8.90123px -8.90123px 26.7037px #ffffff,
    13.3518px 13.3518px 26.7037px rgba(174, 174, 192, 0.4);
  border-radius: 1rem;

  @media screen and (max-width: 1023px) {
    width: 600px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;
