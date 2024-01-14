import{jsxs as e,Fragment as t,jsx as r}from"react/jsx-runtime";import{useState as n}from"react";var i={wrapper:"SliderBeforeAfter-module_wrapper__RxVQE",image:"SliderBeforeAfter-module_image__mLfQe",sliderImage:"SliderBeforeAfter-module_sliderImage__3-qng",imageBefore:"SliderBeforeAfter-module_imageBefore__7l05X",slider:"SliderBeforeAfter-module_slider__q5SjP",sliderLine:"SliderBeforeAfter-module_sliderLine__6xNjh",sliderButton:"SliderBeforeAfter-module_sliderButton__Ws5MM"};!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".SliderBeforeAfter-module_wrapper__RxVQE {\n\tdisplay: flex;\n\tjustify-content: center;\n\tposition: relative;\n\toverflow: hidden;\n\t--position: 50%;\n}\n.SliderBeforeAfter-module_image__mLfQe {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n.SliderBeforeAfter-module_sliderImage__3-qng {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n\tobject-position: left;\n}\n.SliderBeforeAfter-module_imageBefore__7l05X {\n\tposition: absolute;\n\tinset: 0;\n\twidth: var(--position);\n}\n.SliderBeforeAfter-module_slider__q5SjP {\n\tposition: absolute;\n\tinset: 0;\n\tcursor: pointer;\n\topacity: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n.SliderBeforeAfter-module_sliderLine__6xNjh {\n\tposition: absolute;\n\tinset: 0;\n\twidth: 4px;\n\theight: 100%;\n\tbackground-color: var(--slider-before-after-colors-slider);\n\tleft: var(--position);\n\ttransform: translateX(-50%);\n\tpointer-events: none;\n}\n.SliderBeforeAfter-module_sliderButton__Ws5MM {\n\tposition: absolute;\n\tbackground-color: var(--slider-before-after-colors-slider);\n\tpadding: 16px 12px;\n\tborder-radius: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttop: 50%;\n\tleft: var(--position);\n\ttransform: translate(-50%, -50%);\n\tpointer-events: none;\n}\n.SliderBeforeAfter-module_sliderButton__Ws5MM::after,\n.SliderBeforeAfter-module_sliderButton__Ws5MM::before {\n\tcontent: '';\n\tpadding: 3px;\n\tdisplay: inline-block;\n\tborder: solid var(--slider-before-after-colors-arrows);\n\tborder-width: 0 2px 2px 0;\n}\n.SliderBeforeAfter-module_sliderButton__Ws5MM::after {\n\ttransform: rotate(-45deg);\n}\n.SliderBeforeAfter-module_sliderButton__Ws5MM::before {\n\ttransform: rotate(135deg);\n}\n");var o=function(o){var l=o.componentAfter,a=o.componentBefore,d=o.size,s=o.aspectRatio,f=o.urlFirstImage,m=o.alt,c=o.urlSecondImage,p=n(50),u=p[0],_=p[1],g={maxWidth:"".concat(d,"px"),maxHeight:"".concat(d,"px"),aspectRatio:s},B=function(e){return"after"===e?l?r(l,{className:[i.imageAfter,i.sliderImage,i.image].join(" ")}):r("img",{className:[i.imageAfter,i.sliderImage,i.image].join(" "),src:f,alt:m}):a?r(a,{className:[i.imageBefore,i.sliderImage,i.image].join(" ")}):r("img",{className:[i.imageBefore,i.sliderImage,i.image].join(" "),src:c,alt:m})};return e("div",{className:i.wrapper,style:{"--position":"".concat(u,"%"),width:"".concat(d,"px")},children:[e("div",{style:g,children:[(a||c)&&B("before"),B("after")]}),(a||c)&&e(t,{children:[r("input",{onChange:function(e){_(e.target.value)},type:"range",min:"0",max:"100",value:"50",className:i.slider}),r("div",{className:i.sliderLine}),r("div",{className:i.sliderButton})]})]})};export{o as default};
//# sourceMappingURL=index.js.map
