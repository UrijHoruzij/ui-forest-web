import{jsxs as t,Fragment as e,jsx as n}from"react/jsx-runtime";import{useRef as o,useEffect as r,useState as i}from"react";var a=function(){return a=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},a.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var d=function(t,e,n){void 0===n&&(n=window);var i=o();r((function(){i.current=e}),[e]),r((function(){if(n&&n.addEventListener){var e=function(t){var e;return null===(e=i.current)||void 0===e?void 0:e.call(i,t)};return n.addEventListener(t,e),function(){n.removeEventListener(t,e)}}}),[t,n])};var m={behind:"ZoomImage-module_behind__4gO4R",zoomed:"ZoomImage-module_zoomed__ZV6C5",wrapper:"ZoomImage-module_wrapper__2wpkb",wrapper__zommed:"ZoomImage-module_wrapper__zommed__SoG-T",full__width:"ZoomImage-module_full__width__ERKR3"};!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}(".ZoomImage-module_behind__4gO4R {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tbottom: 0;\n\tright: 0;\n\tbackground: var(--zoom-image-base);\n\ttransform: translateZ(0);\n\tdisplay: none;\n\topacity: 0;\n}\n.ZoomImage-module_zoomed__ZV6C5 {\n\tdisplay: block;\n\topacity: 1;\n}\n.ZoomImage-module_wrapper__2wpkb {\n\tcursor: zoom-in;\n\tdisplay: block;\n\tmax-width: 100%;\n\tmargin: auto;\n\tflip: true;\n\ttransition: all 0.4s ease-in-out;\n\tposition: static;\n\twidth: 100%;\n\theight: auto;\n}\n.ZoomImage-module_wrapper__zommed__SoG-T {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tbottom: 0;\n\tright: 0;\n\twidth: auto;\n\theight: auto;\n\tcursor: zoom-out;\n}\n.ZoomImage-module_full__width__ERKR3 {\n\twidth: 100%;\n\theight: 100%;\n}\n");var u=function(r){var u=r.src,l=r.className,s=r.alt,p=i(!1),c=p[0],_=p[1],f=i(!0),h=f[0],w=f[1],g=o(null),v=function(){if(g.current){var t=g.current,e=t.offsetWidth,n=t.offsetHeight,o={w:window.innerWidth,h:window.innerHeight},r={w:e/o.w,h:n/o.h};w(r.w>r.h)}};return d("wheel",(function(){return _(!1)})),d("resize",v),t(e,{children:[n("div",{className:[m.behind,c?m.zoomed:void 0].join(" ")}),n("img",a({},r,{src:u,className:[l,m.wrapper,c?m.wrapper__zommed:void 0,h?m.full__width:void 0].join(" "),onClick:function(){return _(!c)},onLoad:v,ref:g,alt:s}))]})};export{u as default};
//# sourceMappingURL=index.js.map