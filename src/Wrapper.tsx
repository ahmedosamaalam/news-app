import * as React from "react";
import {
  createTheme,
  ThemeProvider,
  Direction,
  PaletteMode,
} from "@mui/material";
import { createContext, useMemo, useState, useEffect } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { MUILocaleData, supportedLocales } from "./SupportedLocales";

export const MUIWrapperContext = createContext({
  toggleColorMode: () => {},
  setLocale: (locale: MUILocaleData) => {},
  locale: supportedLocales[0],
});

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const emptyCache = createCache({
  key: "meaningless-key",
});

export default function MUIWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<PaletteMode>("light");
  const [direction, setDirection] = useState<Direction>("ltr");
  const [locale, setLocale] = useState<MUILocaleData>(supportedLocales[0]);

  const muiWrapperUtils = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  useEffect(() => {
    document.dir = locale.direction;
  }, [locale.direction]);

  const theme = useMemo(
    () =>
      createTheme(
        {
          palette: {
            mode,
          },
          direction,
        },
        locale.muiCore
      ),
    [mode, direction]
  );

  return (
    <CacheProvider value={direction === "rtl" ? cacheRtl : emptyCache}>
      <MUIWrapperContext.Provider
        value={{
          toggleColorMode: muiWrapperUtils.toggleColorMode,
          locale,
          setLocale,
        }}
      >
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MUIWrapperContext.Provider>
    </CacheProvider>
  );
}
