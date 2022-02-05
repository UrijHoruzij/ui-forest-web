import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/Theme/theme";
import { colors, GlobalStyle } from "../src/components";
const themes = [theme];

export const decorators = [
  withThemesProvider(themes, ThemeProvider),
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  colorPicker: {
    disableDefaultPalettes: true,
    primaryPalette: "Light",
    palettes: [
      {
        name: "Light",
        palette: colors,
      },
    ],
  },
};
