import styled from "styled-components";
import { ThemedElement } from "../theme";

export interface LabelProps {
  bg?: string;
}

export const Label = styled.span<ThemedElement & LabelProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0.35em 0.5em;
  margin: 0 0.35em 0.35em 0;
  border-radius: 0.5em;

  border: 1px solid rgba(174, 174, 192, 0.4);

  /* background-color: ${({ theme, bg }) => bg || theme.color.primary}; */
  /* background: linear-gradient(
      315deg,
      rgba(${({ theme }) => theme.color.dark}, 0.6) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #f0f1f5; */
  background-blend-mode: soft-light, normal;
  box-shadow:
    inset -8.90123px -8.90123px 26.7037px rgba(255, 255, 255, 1),
    inset 13.3518px 13.3518px 26.7037px rgba(228, 228, 239, 0.4),
    -8.90123px -8.90123px 26.7037px rgba(255, 255, 255, 0),
    13.3518px 13.3518px 26.7037px rgba(174, 174, 192, 0);

  transition: box-shadow 0.5s;

  cursor: pointer;

  &:hover {
    box-shadow:
      inset -8.90123px -8.90123px 26.7037px rgba(255, 255, 255, 0),
      inset 13.3518px 13.3518px 26.7037px rgba(228, 228, 239, 0),
      -8.90123px -8.90123px 26.7037px rgba(255, 255, 255, 1),
      13.3518px 13.3518px 26.7037px rgba(174, 174, 192, 0.4);
  }
`;