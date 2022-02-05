import React from "react";
import { createGlobalStyle } from "styled-components";
import PTSansWoff2 from "./Fonts/ptsans.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "PT Sans";
    src: url(${PTSansWoff2}) format("woff2");
    font-weight: 400;
    font-style: normal;
  }
  html {
    font-family: "PT Sans";
    font-size: 16px;
  }
 `;
export default GlobalStyle;
