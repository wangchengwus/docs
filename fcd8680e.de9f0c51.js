(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),l=(a(0),a(199)),i={},o={id:"template",title:"template",description:'# What is "Template"?',source:"@site/docs/template.md",permalink:"/docs/template",editUrl:"https://github.com/mixcore/docs/edit/master/website/docs/template.md",lastUpdatedBy:"Smilefounder",lastUpdatedAt:1580460714},c=[{value:"Document Head (header.aspx)",id:"document-head-headeraspx",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"what-is-template"},'What is "Template"?'),Object(l.b)("p",null,"Templates are ASP.NET (Dotnet) Core source files used to generate the pages requested by visitors, and are output as HTML. Template files are made up of HTML, ASP.NET (Dotnet) Core, and mixcore CMS Template Tags."),Object(l.b)("p",null,"Let's look at the various templates that can be defined as part of a Theme."),Object(l.b)("p",null,"mixcore CMS allows you to define separate templates for the various aspects of your site. It is not essential, however, to have all these different template files for your site to fully function. Templates are chosen and generated based upon the Template Hierarchy, depending upon what templates are available in a particular Theme."),Object(l.b)("p",null,"As a Theme developer, you can choose the amount of customization you want to implement using templates. For example, as an extreme case, you can use only one template file, called index.aspx as the template for all pages generated and displayed by the site. A more common use is to have different template files generate different results, to allow maximum customization."),Object(l.b)("h1",{id:"template-files-list"},"Template Files List"),Object(l.b)("p",null,"(TBC)"),Object(l.b)("h1",{id:"basic-templates"},"Basic Templates"),Object(l.b)("p",null,"(TBC)"),Object(l.b)("h1",{id:"custom-page-templates"},"Custom Page Templates"),Object(l.b)("p",null,"(TBC)"),Object(l.b)("h1",{id:"custom-module-templates"},"Custom Module Templates"),Object(l.b)("p",null,"(TBC)"),Object(l.b)("h1",{id:"translation-support--i18n"},"Translation Support / I18n"),Object(l.b)("p",null,"To ensure smooth transition for language localization, use the mixcore CMS gettext-based i18n functions for wrapping all translatable text within the template files. This makes it easier for the translation files to hook in and translate the labels, titles and other template text into the site's current language. See more at mixcore CMS Localization and I18n for mixcore CMS Developers."),Object(l.b)("h1",{id:"template-file-checklist"},"Template File Checklist"),Object(l.b)("p",null,"When developing a Theme, check your template files against the following template file standards."),Object(l.b)("h2",{id:"document-head-headeraspx"},"Document Head (header.aspx)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Use the proper ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Document_Type_Declaration"}),"DOCTYPE"),"."),Object(l.b)("li",{parentName:"ul"},"The opening ",Object(l.b)("inlineCode",{parentName:"li"},"<html>")," tag should include language attributes. ",Object(l.b)("strong",{parentName:"li"},"[TODO]")),Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"<meta>")," charset element should be placed before everything else, including the ",Object(l.b)("inlineCode",{parentName:"li"},"<title>")," element."),Object(l.b)("li",{parentName:"ul"},"Use ",Object(l.b)("inlineCode",{parentName:"li"},"@metainfo()")," to set the ",Object(l.b)("inlineCode",{parentName:"li"},"<meta>")," charset and description elements. ",Object(l.b)("strong",{parentName:"li"},"[TODO]")),Object(l.b)("li",{parentName:"ul"},"Use ",Object(l.b)("inlineCode",{parentName:"li"},'@ViewData["Title"]')," to set the ",Object(l.b)("inlineCode",{parentName:"li"},"<title>")," element."),Object(l.b)("li",{parentName:"ul"},"Use Automatic Feed Links to add feed links. "),Object(l.b)("li",{parentName:"ul"},"Add a call to ",Object(l.b)("inlineCode",{parentName:"li"},'@Html.Partial("../Layouts/sioc_head.cshtml")')," before the closing ",Object(l.b)("inlineCode",{parentName:"li"},"</head>")," tag. Plugins use this action hook to add their own scripts, stylesheets, and other functionality."),Object(l.b)("li",{parentName:"ul"},"Do not link the theme stylesheets in the Header template. Use the ",Object(l.b)("inlineCode",{parentName:"li"},'@RenderSection("Styles", false)')," action hook in a theme function instead.")),Object(l.b)("p",null,"Here's an example of a correctly-formatted HTML5 compliant head area:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-aspx"}),'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="..." />\n        <title>@ViewData["Title"] - mixcore</title>\n        <link rel="profile" href="http://gmpg.org/xfn/11" />\n        ...\n    </head>\n')))}p.isMDXComponent=!0},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(a),b=n,d=m["".concat(i,".").concat(b)]||m[b]||u[b]||l;return a?r.a.createElement(d,o({ref:t},s,{components:a})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);