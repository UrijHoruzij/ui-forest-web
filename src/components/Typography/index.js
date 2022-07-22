import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Typography.module.css";

const changeStyle = (fontStyle) => {
  switch (fontStyle) {
    case "normal":
      return styles.normal;
    case "italic":
      return styles.italic;
    case "oblique":
      return styles.oblique;
    default:
      return styles.normal;
  }
};
const changeColor = (color) => {
  switch (color) {
    case "accent":
      return styles.accent;
    case "secondary":
      return styles.secondary;
    case "text":
      return styles.text;
    default:
      return;
  }
};
const changeTransform = (transform) => {
  switch (transform) {
    case "capitalize":
      return styles.capitalize;
    case "lowercase":
      return styles.lowercase;
    case "uppercase":
      return styles.uppercase;
    default:
      return;
  }
};
const changeDecoration = (decoration) => {
  switch (decoration) {
    case "overline":
      return styles.overline;
    case "underline":
      return styles.underline;
    case "line-through":
      return styles.lineThrough;
    default:
      return;
  }
};
const changeType = (type) => {
  switch (type) {
    case "h1":
      return styles.h1;
    case "h2":
      return styles.h2;
    case "h3":
      return styles.h3;
    case "h4":
      return styles.h4;
    case "h5":
      return styles.h5;
    case "h6":
      return styles.h6;
    case "text":
      return styles.p;
    case "caption":
      return styles.caption;
    default:
      return styles.p;
  }
};
const Typography = (props) => {
  const changeClassName = (props) => {
    return classNames(
      props.className,
      changeType(props.type),
      changeStyle(props.fontStyle),
      changeColor(props.color),
      changeTransform(props.transform),
      changeDecoration(props.decoration)
    );
  };

  switch (props.type) {
    case "h1":
      return <h1 className={changeClassName(props)} {...props} />;
    case "h2":
      return <h2 className={changeClassName(props)} {...props} />;
    case "h3":
      return <h3 className={changeClassName(props)} {...props} />;
    case "h4":
      return <h4 className={changeClassName(props)} {...props} />;
    case "h5":
      return <h5 className={changeClassName(props)} {...props} />;
    case "h6":
      return <h6 className={changeClassName(props)} {...props} />;
    case "text":
      return <p className={changeClassName(props)} {...props} />;
    case "caption":
      return <figcaption className={changeClassName(props)} {...props} />;
    default:
      return <p className={changeClassName(props)} {...props} />;
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
  color: PropTypes.oneOf(["accent", "text", "secondary"]),
  children: PropTypes.node,
  fontStyle: PropTypes.oneOf(["normal", "italic", "oblique"]),
  transform: PropTypes.oneOf(["capitalize", "lowercase", "uppercase"]),
  decoration: PropTypes.oneOf(["underline", "overline", "line-through"]),
  className: PropTypes.string,
  style: PropTypes.object,
};

Typography.defaultProps = {
  type: "text",
  color: "text",
};

export default Typography;
