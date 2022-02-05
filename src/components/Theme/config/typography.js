import { colors } from "./";

const typography = {
  fontFamilyHeading: "PT Sans",
  fontWeightHeading: 700,
  fontFamilyBody: "PT Sans",
  fontWeightBody: 400,
  colors: {
    accent: colors.cyan.cyan7,
    text: colors.gray.gray10,
    secondary: colors.gray.gray8,
  },
  type: {
    h1: { size: "48px", height: "56px" },
    h2: { size: "40px", height: "48px" },
    h3: { size: "32px", height: "40px" },
    h4: { size: "28px", height: "32px" },
    h5: { size: "24px", height: "28px" },
    h6: { size: "20px", height: "24px" },
    p: { size: "16px", height: "16px" },
    caption: { size: "14px", height: "16px" },
  },
};
export default typography;
