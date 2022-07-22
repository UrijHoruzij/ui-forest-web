import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ThemeContext from "./context";
import { light, dark } from "./themes/";

const defaultThemes = {
  light: light.root,
  dark: dark.root,
};
const ThemeProvider = (props) => {
  const { theme, themes, children } = props;
  const [activTheme, setActivTheme] = useState(themes[theme]);
  const changeTheme = (theme) => {
    setActivTheme(theme);
  };
  return (
    <ThemeContext.Provider value={[themes, changeTheme]}>
      <div className={classNames([activTheme])}>{children}</div>;
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  theme: PropTypes.string.isRequired,
  themes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

ThemeProvider.defaultProps = {
  theme: "light",
  themes: defaultThemes,
};
export default ThemeProvider;
