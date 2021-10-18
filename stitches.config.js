import { createStitches } from "@stitches/react"
import {
  gray,
  blue,
  red,
  green,
  tomato,
  grayDark,
  tomatoDark,
  blueDark,
  redDark,
  greenDark,
} from "@radix-ui/colors"

export const { theme, styled, css, getCssText, createTheme } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...tomato,
    },
    radii: {
      roundedLg: "0.5rem",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
    maxSm: "(max-width: 639px)",
    maxMd: "(max-width: 767px)",
    maxLg: "(max-width: 1023px)",
    maxXl: "(max-width: 1279px)",
    max2Xl: "(max-width: 1535px)",
  },
})

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...tomatoDark,
  },
})
