import { typography } from "./config";
const theme = {
  name: "light",
  fontFamily: "PT Sans, sans-serif",
  fontWeight: 400,
  components: {
    typography,
  },
  radius: "4px",
  blur: "16px",
  shadow: {
    popup: `
            filter: drop-shadow(0px 10px 25px rgba(0, 0, 0, 0.1));
        `,
    tooltip: `
            filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.2));
        `,
  },
};
export default theme;
