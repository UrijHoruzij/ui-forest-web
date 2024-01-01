import React, { useState } from "react";
import {ThemeProps} from "./Theme.types";
import ThemeContext from "./context";

const ThemeProvider:FC<ThemeProps> = (props) => {
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

export default ThemeProvider;
