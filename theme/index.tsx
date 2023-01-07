import type { ReactNode } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme } from "./light";

export interface ThemedElement {
  theme: typeof lightTheme;
}
export const GlobalStyles = createGlobalStyle<ThemedElement>`
  body {
    background-color: ${({ theme }) => theme.color.light};
  }

  html,
  body {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 1.2;
  }

  a {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;

    border-bottom: 1px dotted;
    border-color: transparent;

    &:hover {
      border-color: ${({ theme }) => theme.color.primary};
    }
  }

  p {
    margin: 0.5em 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.5em;
    font-weight: 700;
  }
`;

export interface ThemedProps {
  children: ReactNode;
}
export const Themed = ({ children }: ThemedProps) => (
  <ThemeProvider theme={lightTheme}>
    {/* @ts-ignore //TODO: fix that */}
    { children }
  </ThemeProvider>
);
