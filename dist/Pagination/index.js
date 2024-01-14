import{jsxs as n,jsx as t}from"react/jsx-runtime";import{useMemo as a}from"react";var e=function(){return e=Object.assign||function(n){for(var t,a=1,e=arguments.length;a<e;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},e.apply(this,arguments)};function o(n,t,a){if(a||2===arguments.length)for(var e,o=0,i=t.length;o<i;o++)!e&&o in t||(e||(e=Array.prototype.slice.call(t,0,o)),e[o]=t[o]);return n.concat(e||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var i="...",r=function(n,t){var a=t-n+1;return Array.from({length:a},(function(t,a){return a+n}))};var l={wrapper:"Pagination-module_wrapper__cRGQm",disabled:"Pagination-module_disabled__x47WD",selected:"Pagination-module_selected__v3dgt",paginationItem:"Pagination-module_paginationItem__3SDh-",paginationItemDots:"Pagination-module_paginationItemDots__--xQ2",arrow:"Pagination-module_arrow__rGon0",left:"Pagination-module_left__UOVVU",right:"Pagination-module_right__GqzPS",arrowDisabled:"Pagination-module_arrowDisabled__VG1VW"};!function(n,t){void 0===t&&(t={});var a=t.insertAt;if(n&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===a&&e.firstChild?e.insertBefore(o,e.firstChild):e.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}(".Pagination-module_wrapper__cRGQm {\n\tdisplay: flex;\n\tlist-style-type: none;\n}\n.Pagination-module_disabled__x47WD {\n\tpointer-events: none;\n}\n.Pagination-module_selected__v3dgt {\n\tbackground-color: var(--pagination-colors-hover);\n}\n.Pagination-module_paginationItem__3SDh- {\n\tpadding: 0 12px;\n\theight: 32px;\n\tmin-width: 32px;\n\ttext-align: center;\n\tmargin: auto 4px;\n\tcolor: var(--pagination-colors-base);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\tborder-radius: 50%;\n\ttransition: all var(--pagination-transition);\n\tfont-family: var(--pagination-font-family);\n\tfont-size: var(--pagination-font-size);\n\tline-height: var(--pagination-line-height);\n\tfont-weight: var(--pagination-font-weight);\n}\n.Pagination-module_paginationItem__3SDh-:hover {\n\tbackground-color: var(--pagination-colors-hover);\n\tcursor: pointer;\n}\n.Pagination-module_paginationItemDots__--xQ2:hover {\n\tbackground-color: transparent;\n\tcursor: default;\n}\n.Pagination-module_arrow__rGon0::before {\n\tposition: relative;\n\tcontent: '';\n\tdisplay: inline-block;\n\twidth: 8px;\n\theight: 8px;\n\tborder-right: 2px solid var(--pagination-colors-base);\n\tborder-top: 2px solid var(--pagination-colors-base);\n}\n.Pagination-module_left__UOVVU {\n\ttransform: rotate(-135deg);\n}\n.Pagination-module_right__GqzPS {\n\ttransform: rotate(45deg);\n}\n.Pagination-module_arrowDisabled__VG1VW::before {\n\tborder-right: 4px solid var(--pagination-colors-base);\n\tborder-top: 4px solid var(--pagination-colors-base);\n}\n.Pagination-module_arrowDisabled__VG1VW:hover {\n\tbackground-color: transparent;\n\tcursor: default;\n}\n");var d=function(d){var s=d.onPageChange,g=d.totalCount,u=d.siblingCount,c=d.currentPage,p=d.pageSize,m=d.arrowShow,_=function(n){var t=n.totalCount,e=n.pageSize,l=n.siblingCount,d=void 0===l?1:l,s=n.currentPage;return a((function(){var n=Math.ceil(t/e);if(d+5>=n)return r(1,n);var a=Math.max(s-d,1),l=Math.min(s+d,n),g=a>2,u=l<n-2,c=n;if(!g&&u)return o(o([],r(1,3+2*d),!0),[i,n],!1);if(g&&!u){var p=r(n-(3+2*d)+1,n);return o([1,i],p,!0)}if(g&&u){var m=r(a,l);return o(o([1,i],m,!0),[i,c],!1)}}),[t,e,d,s])}({currentPage:c,totalCount:g,siblingCount:u,pageSize:p});if(0===c||(null==_?void 0:_.length)<2)return null;var f=null==_?void 0:_[_.length-1];return n("ul",e({},d,{className:[l.wrapper,d.className].join(" "),children:[m?t("li",{className:[l.paginationItem,1===c?l.disabled:void 0].join(" "),onClick:function(){s(c-1)},children:t("div",{className:[l.arrow,l.left,1===c?l.disabled:void 0].join(" ")})}):null,null==_?void 0:_.map((function(n){return t("li",n===i?{className:l.paginationItemDots,children:"..."}:{className:[l.paginationItem,n===c?l.selected:void 0].join(" "),onClick:function(){return s(n)},children:n},n)})),m?t("li",{className:[l.paginationItem,c===f?l.disabled:void 0].join(" "),onClick:function(){s(c+1)},children:t("div",{className:[l.arrow,l.right,c===f?l.disabled:void 0].join(" ")})}):null]}))};export{d as default};
//# sourceMappingURL=index.js.map
