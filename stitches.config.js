import { createStitches } from "@stitches/react";
import {
  whiteA,
  blackA,
  tomato,
  slate,
  red,
  gray,
  green,
  blue,
  gold,
} from "@radix-ui/colors";

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      ...whiteA,
      ...blackA,
      ...tomato,
      ...slate,
      ...gray,
      ...green,
      ...blue,
      ...gold,
      ...red,

      // Semantic colors
      hiContrast: "$slate12",
      loContrast: "$slate1",
      shadowLight: "hsl(206 22% 7% / 35%)",
      shadowDark: "hsl(206 22% 7% / 20%)",
    },
    fonts: {
      body: "DM Sans",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontSizes: {
      0: 0,
      1: "12px",
      2: "16px",
      3: "18px",
      4: "21px",
      5: "25px",
      6: "30px",
      7: "36px",
      8: "44px",
      9: "52px",
      10: "66px",
    },
    fontWeights: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      5: "500",
      6: "600",
      7: "700",
      8: "800",
      9: "900",
      10: "$9",
      normal: "$4",
      bold: "$7",
      extraBold: "$9",
    },
    lineHeights: {
      0: 0,
      1: "12px",
      2: "15px",
      3: "18px",
      4: "21px",
      5: "25px",
      6: "30px",
      7: "36px",
      8: "43px",
      9: "52px",
      10: "82px",
    },
    shadows: {
      1: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
      2: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
      3: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;",
      4: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;",
    },
    space: {
      0: "4px",
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "40px",
      7: "48px",
      8: "56px",
      9: "64px",
      10: "72px",
      11: "88px",
      12: "100px",
    },
    sizes: {
      0: 0,
      1: "480px",
      2: "768px",
      3: "1024px",
      4: "1350px",
      5: "1600px",
    },
    radii: {
      1: "4px",
      2: "6px",
      3: "8px",
      4: "0.8rem",
      round: "50%",
      pill: "9999px",
    },
    zIndices: {
      0: 0,
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
  },
  media: {
    bp1: "(max-width: 480px)",
    bp2: "(max-width: 768px)",
    bp3: "(max-width: 1024px)",
    bp4: "(max-width: 1350px)",

    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  utils: {
    bg: (value) => ({
      backgroundColor: value,
    }),
    br: (value) => ({
      borderRadius: value,
    }),

    m: (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),

    p: (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    ta: (value) => ({ textAlign: value }),
  },
});
