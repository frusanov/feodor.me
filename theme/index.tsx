import type { ReactElement } from "react";
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
`;

export interface ThemedProps {
  children?: ReactElement | Array<ReactElement>;
}
export const Themed = ({ children }: ThemedProps) => (
  <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
);
