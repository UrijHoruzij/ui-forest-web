import{jsxs as t,jsx as n}from"react/jsx-runtime";var o=function(){return o=Object.assign||function(t){for(var n,o=1,e=arguments.length;o<e;o++)for(var r in n=arguments[o])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},o.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var e={container:"Button-module_container__jA0Sz",small:"Button-module_small__l39oh",medium:"Button-module_medium__KTxdk",large:"Button-module_large__6bsb7",primary:"Button-module_primary__s1sM6",secondary:"Button-module_secondary__R0waJ",text:"Button-module_text__IDK7t",danger:"Button-module_danger__V4fX8",disabled:"Button-module_disabled__Tl9fh"};!function(t,n){void 0===n&&(n={});var o=n.insertAt;if(t&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}(".Button-module_container__jA0Sz {\n\tposition: relative;\n\tfont-family: var(--button-font-family);\n\tfont-weight: var(--button-font-weight);\n\tletter-spacing: var(--button-letter-spacing);\n\tcursor: pointer;\n\tmargin: 0;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: var(--button-radius);\n\toutline: none;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-decoration: none;\n\tvertical-align: middle;\n\tuser-select: none;\n\twhite-space: nowrap;\n\ttransition: all ease-in-out 0.3s;\n}\n.Button-module_small__l39oh {\n\tfont-size: 12px;\n\tline-height: 16px;\n\tpadding: 6px 12px;\n}\n.Button-module_medium__KTxdk {\n\tfont-size: 16px;\n\tline-height: 20px;\n\tpadding: 8px 16px;\n}\n.Button-module_large__6bsb7 {\n\tfont-size: 20px;\n\tline-height: 24px;\n\tpadding: 12px 24px;\n}\n.Button-module_primary__s1sM6 {\n\tcolor: var(--button-primary-text);\n\tbackground-color: var(--button-primary-base);\n}\n.Button-module_primary__s1sM6:hover {\n\tcolor: var(--button-primary-hover-text);\n\tbackground-color: var(--button-primary-hover-base);\n}\n.Button-module_primary__s1sM6:focus {\n\tcolor: var(--button-primary-focus-text);\n\tbackground-color: var(--button-primary-focus-base);\n}\n.Button-module_primary__s1sM6:activ {\n\tcolor: var(--button-primary-activ-text);\n\tbackground-color: var(--button-primary-activ-base);\n}\n/**********/\n.Button-module_secondary__R0waJ {\n\tcolor: var(--button-secondary-text);\n\tbackground-color: var(--button-secondary-base);\n\tborder: 1px solid var(--button-secondary-border);\n}\n.Button-module_secondary__R0waJ:hover {\n\tcolor: var(--button-secondary-hover-text);\n\tbackground-color: var(--button-secondary-hover-base);\n\tborder: 1px solid var(--button-secondary-hover-border);\n}\n.Button-module_secondary__R0waJ:focus {\n\tcolor: var(--button-secondary-focus-text);\n\tbackground-color: var(--button-secondary-focus-base);\n\tborder: 1px solid var(--button-secondary-focus-border);\n}\n.Button-module_secondary__R0waJ:activ {\n\tcolor: var(--button-secondary-activ-text);\n\tbackground-color: var(--button-secondary-activ-base);\n\tborder: 1px solid var(--button-secondary-activ-border);\n}\n\n/***********/\n.Button-module_text__IDK7t {\n\theight: 100%;\n\tcolor: var(--button-text-text);\n\tbackground-color: var(--button-text-base);\n}\n.Button-module_text__IDK7t:hover {\n\tcolor: var(--button-text-hover-text);\n\tbackground-color: var(--button-text-hover-base);\n}\n.Button-module_text__IDK7t:focus {\n\tcolor: var(--button-text-focus-text);\n\tbackground-color: var(--button-text-focus-base);\n}\n.Button-module_text__IDK7t:activ {\n\tcolor: var(--button-text-activ-text);\n\tbackground-color: var(--button-text-activ-base);\n}\n\n/********/\n.Button-module_danger__V4fX8 {\n\tcolor: var(--button-danger-text);\n\tbackground-color: var(--button-danger-base);\n}\n.Button-module_danger__V4fX8:hover {\n\tcolor: var(--button-danger-hover-text);\n\tbackground-color: var(--button-danger-hover-base);\n}\n.Button-module_danger__V4fX8:focus {\n\tcolor: var(--button-danger-focus-text);\n\tbackground-color: var(--button-danger-focus-base);\n}\n.Button-module_danger__V4fX8:activ {\n\tcolor: var(--button-danger-activ-text);\n\tbackground-color: var(--button-danger-activ-base);\n}\n/********/\n.Button-module_disabled__Tl9fh {\n\tcursor: default;\n\tcolor: var(--button-disabled-text);\n\tbackground-color: var(--button-disabled-base);\n\tcursor: not-allowed;\n}\n.Button-module_disabled__Tl9fh:hover {\n\tcolor: var(--button-disabled-hover-text);\n\tbackground-color: var(--button-disabled-hover-base);\n}\n.Button-module_disabled__Tl9fh:focus {\n\tcolor: var(--button-disabled-focus-text);\n\tbackground-color: var(--button-disabled-focus-base);\n}\n.Button-module_disabled__Tl9fh:activ {\n\tcolor: var(--button-disabled-activ-text);\n\tbackground-color: var(--button-disabled-activ-base);\n}\n/* .loading {\n\tmargin-right: 4px;\n\twidth: 12px;\n\theight: 12px;\n\tdisplay: block;\n\tborder-left: 1px solid var(--button-loading);\n\tborder-top: 1px solid var(--button-loading);\n\tborder-radius: 50%;\n\tanimation: Rotating 1s infinite linear;\n}\n@keyframes Rotating {\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(359deg);\n\t}\n} */\n");var r=function(t){switch(t){case"small":return e.small;case"medium":default:return e.medium;case"large":return e.large}},a=function(t){switch(t){case"primary":return e.primary;case"secondary":return e.secondary;case"text":return e.text}},d=function(d){var u=d.children,l=d.loading;return t("button",o({},d,{className:[d.className,e.container,d.disabled?e.disabled:void 0,d.danger?e.danger:void 0,r(d.size),a(d.variant),d.className].join(" "),children:[l&&n("div",{className:e.loading}),u]}))};export{d as default};
//# sourceMappingURL=index.js.map
