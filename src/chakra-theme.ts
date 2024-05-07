import { cssVar, extendTheme } from "@chakra-ui/react";

const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");

const fonts = "sans-serif";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#fff",
      },
    },
  },
  fonts: {
    heading: fonts,
    body: fonts,
  },
  colors: {},
  components: {
    Text: {
      variants: {
        label: {
          fontWeight: 700,
        },
      },
    },
    Skeleton: {
      baseStyle: {
        opacity: 0.2,
        _light: {
          [$startColor.variable]: "colors.black.200",
          [$endColor.variable]: "colors.black.500",
        },
        _dark: {
          [$startColor.variable]: "colors.black.800",
          [$endColor.variable]: "colors.black.600",
        },
      },
    },
  },
});
