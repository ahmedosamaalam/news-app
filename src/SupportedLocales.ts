import { Direction } from "@mui/material";

import {
  enUS as materialLocaleEnglish,
  arSA as materialLocaleArabic,
  Localization,
} from "@mui/material/locale";

export interface MUILocaleData {
  muiCore: Localization;
  title: string;
  lang: string;
  direction: Direction;
}

const english: MUILocaleData = {
  muiCore: materialLocaleEnglish,
  lang: "en",
  title: "English",
  direction: "ltr",
};

// RTL language
const arabic: MUILocaleData = {
  muiCore: materialLocaleArabic,
  title: "عربي",
  lang: "ar",
  direction: "rtl",
};

export const supportedLocales: MUILocaleData[] = [english, arabic];
