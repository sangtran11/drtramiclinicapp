import { MantineThemeOverride } from "@mantine/core";

const defaultFontName = "Verdana";
export const themeConfigurations: MantineThemeOverride = {
  fontFamily: defaultFontName,
  headings: { fontFamily: defaultFontName },
  components: {
    InputWrapper: {
      styles: (theme) => ({
        label: {
          color: theme.colors.clinicDark[0],
          fontWeight: 600,
          fontSize: theme.fontSizes.md,
        },
      }),
    },
  },
  colors: {
    clinicWhite: ["#FFFFFF"],
    clinicDark: ["#232323", "#535353"],
    clinicBlue: ["#0378BD"],
    clinicRose: ["#FD90A3", "#EF5C76", "#FDEEEE"],
  },
};
