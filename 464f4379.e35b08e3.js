(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),i=n(9),o=(n(0),n(197)),a={id:"customizing-using-themes",title:"Using Themes"},s={id:"customizing-using-themes",title:"Using Themes",description:"What is a Theme? # What is a Theme?",source:"@site/docs/customizing-using-themes.md",permalink:"/docs/customizing-using-themes",editUrl:"https://github.com/mixcore/docs/edit/master/website/docs/customizing-using-themes.md",lastUpdatedBy:"Smilefounder",lastUpdatedAt:1580460714,sidebar:"someSidebar",previous:{title:"Roles and Capabilities",permalink:"/docs/basic-administration-roles-and-capabilities"},next:{title:"Using Modules",permalink:"/docs/customizing-using-modules"}},c=[{value:"Using default theme",id:"using-default-theme",children:[]},{value:"Show nav..",id:"show-nav",children:[]},{value:"Show post/page/module data",id:"show-postpagemodule-data",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"What is a Theme? # What is a Theme?\nFundamentally, the Mixcore Theme system is a way to \u201cskin\u201d your Mixcore site. Yet, it is more than just a \u201cskin\u201d. Skinning your site implies that only the design is changed. Mixcore Themes can provide much more control over the visual presentation of your content and other data on your Mixcore site, as well as behavior of certain site\u2019s elements while interacting with visitors."),Object(o.b)("p",null,"A Mixcore Theme is a collection of files that work together to produce a graphical interface with an underlying unifying design for a website. These files are called template files. A Theme modifies the way the site is displayed, without modifying the underlying software. Themes may include customized template files, image files (",Object(o.b)("em",{parentName:"p"},".jpg, "),".png, .gif), style sheets (.css), custom Pages, as well as any necessary code files (*.cs, cshtml). For an introduction to template files, see Template Files."),Object(o.b)("h2",{id:"using-default-theme"},"Using default theme"),Object(o.b)("h2",{id:"show-nav"},"Show nav.."),Object(o.b)("h2",{id:"show-postpagemodule-data"},"Show post/page/module data"))}u.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},m=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,h=m["".concat(a,".").concat(p)]||m[p]||d[p]||o;return n?i.a.createElement(h,s({ref:t},l,{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);