import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const changeStyle = (props) => {
  switch (props.fontStyle) {
    case "normal":
      return "normal";
    case "italic":
      return "italic";
    case "oblique":
      return "oblique";
    default:
      return "normal";
  }
};
const changeColor = (props) => {
  switch (props.color) {
    case "accent":
      return props.theme.components.typography.colors.accent;
    case "secondary":
      return props.theme.components.typography.colors.secondary;
    case "text":
      return props.theme.components.typography.colors.text;
    default:
      return props.color;
  }
};
const changeTransform = (transform) => {
  switch (transform) {
    case "capitalize":
      return "capitalize";
    case "lowercase":
      return "lowercase";
    case "uppercase":
      return "uppercase";
    default:
      return "none";
  }
};
const changeDecoration = (decoration) => {
  switch (decoration) {
    case "overline":
      return "overline";
    case "underline":
      return "underline";
    case "line-through":
      return "line-through";
    default:
      return "none";
  }
};
const Wrapper = styled.div`
  font-family: ${(props) =>
    props.theme.components.typography.fontFamilyHeading ||
    props.theme.fontFamily};
  border: none;
  outline: none;
  font-weight: ${(props) =>
    props.theme.components.typography.fontWeightHeading ||
    props.theme.fontWeight};
  font-style: ${(props) => changeStyle(props)};
  color: ${(props) => changeColor(props)};
  text-transform: ${(props) => changeTransform(props.transform)};
  text-decoration: ${(props) => changeDecoration(props.decoration)};
  ${(props) =>
    props.margin
      ? css`
          margin: 0;
        `
      : null}
`;
const H1 = styled(Wrapper)`
  font-size: ${(props) => props.theme.components.typography.type.h1.size};
  line-height: ${(props) => props.theme.components.typography.type.h1.height};
`;
const H2 = styled(Wrapper)`
  font-size: ${(props) => props.theme.components.typography.type.h2.size};
  line-height: ${(props) => props.theme.components.typography.type.h2.height};
`;
const H3 = styled(Wrapper)`
  font-size: ${(props) => props.theme.components.typography.type.h3.size};
  line-height: ${(props) => props.theme.components.typography.type.h3.height};
`;
const H4 = styled(Wrapper)`
  font-size: ${(props) => props.theme.components.typography.type.h4.size};
  line-height: ${(props) => props.theme.components.typography.type.h4.height};
`;
const H5 = styled(Wrapper)`
  font-size: ${(props) => props.theme.components.typography.type.h5.size};
  line-height: ${(props) => props.theme.components.typography.type.h5.height};
`;
const H6 = styled(Wrapper)`
  font-size: ${(props) => props.theme.components.typography.type.h6.size};
  line-height: ${(props) => props.theme.components.typography.type.h6.height};
`;
const P = styled(Wrapper)`
  font-family: ${(props) =>
    props.theme.components.typography.fontFamilyBody || props.theme.fontFamily};
  font-weight: ${(props) =>
    props.theme.components.typography.fontWeightBody || props.theme.fontWeight};
  font-size: ${(props) => props.theme.components.typography.type.p.size};
  line-height: ${(props) => props.theme.components.typography.type.p.height};
`;
const Caption = styled(Wrapper)`
  font-family: ${(props) =>
    props.theme.components.typography.fontFamilyBody || props.theme.fontFamily};
  font-size: ${(props) => props.theme.components.typography.type.caption.size};
  line-height: ${(props) =>
    props.theme.components.typography.type.caption.height};
  font-style: italic;
`;
const Typography = (props) => {
  switch (props.type) {
    case "h1":
      return <H1 as="h1" {...props} />;
    case "h2":
      return <H2 as="h2" {...props} />;
    case "h3":
      return <H3 as="h3" {...props} />;
    case "h4":
      return <H4 as="h4" {...props} />;
    case "h5":
      return <H5 as="h5" {...props} />;
    case "h6":
      return <H6 as="h6" {...props} />;
    case "text":
      return <P as="p" {...props} />;
    case "caption":
      return <Caption as="figcaption" {...props} />;
    default:
      return <P as="p" {...props} />;
  }
};

Typography.propTypes = {
  type: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "caption",
    "text",
  ]),
  color: PropTypes.oneOfType([
    PropTypes.oneOf(["accent", "text", "secondary"]),
    PropTypes.string,
  ]),
  children: PropTypes.node,
  fontStyle: PropTypes.oneOf(["normal", "italic", "oblique"]),
  transform: PropTypes.oneOf(["capitalize", "lowercase", "uppercase"]),
  decoration: PropTypes.oneOf(["underline", "overline", "line-through"]),
  className: PropTypes.string,
  style: PropTypes.object,
  margin: PropTypes.bool,
};

Typography.defaultProps = {
  type: "text",
  color: "text",
};

export default Typography;
