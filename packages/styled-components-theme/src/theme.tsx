import { AllOfColorToken, colors } from "@ksh5324/test-ui-token";
import * as React from "react";
import { PropsWithChildren, useMemo } from "react";
import { ThemeProvider } from "styled-components";

type ThemeType<T> = keyof T;
type DarkOrLight = { LIGHT: "lightToken"; DARK: "darkToken" };

type TestThemeProviderProps = PropsWithChildren<{
  mode?: ThemeType<DarkOrLight>;
}>;

export const TestThemeProvider = ({
  children,
  mode = "DARK",
}: TestThemeProviderProps) => {
  const token: DarkOrLight = useMemo(
    () => ({
      LIGHT: "lightToken",
      DARK: "darkToken",
    }),
    []
  );
  const theme: AllOfColorToken = useMemo(() => colors[token[mode]], []);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

// const checkUndefined = React.useCallback((mode) => {
//   if (mode !== undefined) {
//     return mode;
//   }
//   return window.matchMedia("(prefers-color-scheme: light)").matches === true
//     ? "LIGHT"
//     : "DARK";
// }, []);
