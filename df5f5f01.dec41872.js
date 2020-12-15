(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{86:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return b})),n.d(e,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(91)),i=n(93),c={id:"common",title:"Common Data Model",sidebar_label:"Common (CDM)",description:"Common Data Model (CDM)",hide_table_of_contents:!0},l={unversionedId:"common",id:"common",isDocsHomePage:!1,title:"Common Data Model",description:"Common Data Model (CDM)",source:"@site/docs/common.md",permalink:"/ppsr-core/docs/common",editUrl:"https://github.com/citizen-science-association/ppsr-core/edit/master/docs/common.md",lastUpdatedBy:"BBudnicki",lastUpdatedAt:1604871741,sidebar_label:"Common (CDM)",sidebar:"coreSidebar",previous:{title:"Overview",permalink:"/ppsr-core/docs/"},next:{title:"Project Metadata Model",permalink:"/ppsr-core/docs/project"}},b=[{value:"Entity relationship diagram",id:"entity-relationship-diagram",children:[]},{value:"Core Attributes",id:"core-attributes",children:[]}],u={rightToc:b};function d(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"C"),"ommon ",Object(o.b)("strong",{parentName:"p"},"D"),"ata ",Object(o.b)("strong",{parentName:"p"},"M"),"odel ",Object(o.b)("strong",{parentName:"p"},"(CDM)")," is a data model that glues Projects, Datasets, and Observations together. It allows for projects to be aggregated into a higher level concept of a program or campaign, providing context for groups of projects which are being conducted within a common organizing framework. As a central object, it is required for complete implementation of this standard. "),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This is the extent of the common schema. Additional attributes required in the programOrCampaign entity for any given implementation should be considered as extensions to this schema."))),Object(o.b)("h2",{id:"entity-relationship-diagram"},"Entity relationship diagram"),Object(o.b)("p",null,"This graphically describes the relationships between the primary class entities in the overall model."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"[current approved version: 2020.0]")),Object(o.b)("img",{alt:"Docusaurus with Keytar",src:Object(i.a)("img/common-erd-2020-0.png")}),";",Object(o.b)("h2",{id:"core-attributes"},"Core Attributes"),Object(o.b)("p",null,"This is a tabular representation of the CDM attributes and their definitions."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"[current approved version: 2020.0]")),Object(o.b)("table",{className:"table table-condensed"},Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",{title:"Field #1"},"Entity"),Object(o.b)("th",{title:"Field #2"},"Attribute Name"),Object(o.b)("th",{title:"Field #3"},"Description"),Object(o.b)("th",{title:"Field #4"},"Data Type"),Object(o.b)("th",{title:"Field #5"},"Obligation"),Object(o.b)("th",{title:"Field #6"},"Multiplicity"),Object(o.b)("th",{title:"Field #7"},"Synonym term in other standards"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"programOrCampaign"),Object(o.b)("td",null," "),Object(o.b)("td",null,"An overarching context for a set of related projects. Projects may be related in the context of a common funding source, a common thematic or conceptual framework, or other such context. Note that projects do not need to be created in the context of a programOrCampaign, but that a programOrCampaign can be a container for 1:many projects. Entity equates to OWL 2.0 Class object."),Object(o.b)("td",null," "),Object(o.b)("td",null,"Optional"),Object(o.b)("td",null,"0:1"),Object(o.b)("td",null," ")),Object(o.b)("tr",null,Object(o.b)("td",null,"programOrCampaign"),Object(o.b)("td",null,"programId"),Object(o.b)("td",null,'The identifier of the initiative (e.g., overarching research program or funding initiative) encompassing the project",'),Object(o.b)("td",null,"text"),Object(o.b)("td",null,"Mandatory"),Object(o.b)("td",null,"1:1"),Object(o.b)("td",null," ")),Object(o.b)("tr",null,Object(o.b)("td",null,"programOrCampaign"),Object(o.b)("td",null,"programName"),Object(o.b)("td",null,"The initiative (e.g., overarching research program) encompassing the project (e.g., Horizon 2020)"),Object(o.b)("td",null,"text"),Object(o.b)("td",null,"Mandatory"),Object(o.b)("td",null,"1:1"),Object(o.b)("td",null," ")),Object(o.b)("tr",null,Object(o.b)("td",null,"programOrCampaign"),Object(o.b)("td",null,"programDescription"),Object(o.b)("td",null,"General description/summary  of the Research Program or funding initiative."),Object(o.b)("td",null,"text"),Object(o.b)("td",null,"Optional"),Object(o.b)("td",null,"0:1"),Object(o.b)("td",null," ")),Object(o.b)("tr",null,Object(o.b)("td",null,"programOrCampaign"),Object(o.b)("td",null,"language"),Object(o.b)("td",null,"The encoding language used for the project. Uses Unicode Standard UTF-8 (ISO/IEC 10646:2014 plus Amendment 1)."),Object(o.b)("td",null,"vocabulary "),Object(o.b)("td",null,"Mandatory"),Object(o.b)("td",null,"1:1"),Object(o.b)("td",null,"dcterms:language",Object(o.b)("br",null),"MD_DataIdentification.characterSet")),Object(o.b)("tr",null,Object(o.b)("td",null,"project"),Object(o.b)("td",null," "),Object(o.b)("td",null,"A project is an overarching context for a set of associated activities which contribute to a specific objective. Entity equates to OWL 2.0 Class object.",Object(o.b)("br",null),"Refer to the PMM Model for details of the project metadata schema."),Object(o.b)("td",null," "),Object(o.b)("td",null,"Mandatory"),Object(o.b)("td",null,"1:n"),Object(o.b)("td",null," ")))))}d.isMDXComponent=!0},91:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var b=a.a.createContext({}),u=function(t){var e=a.a.useContext(b),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},d=function(t){var e=u(t.components);return a.a.createElement(b.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},p=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,b=l(t,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(i,".").concat(p)]||d[p]||s[p]||o;return n?a.a.createElement(m,c(c({ref:e},b),{},{components:n})):a.a.createElement(m,c({ref:e},b))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},92:function(t,e,n){"use strict";var r=n(0),a=n(21);e.a=function(){var t=Object(r.useContext)(a.a);if(null===t)throw new Error("Docusaurus context not provided");return t}},93:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));var r=n(92),a=n(95);function o(){var t=Object(r.a)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,b=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return e+n;var u=!n.startsWith(e)?e+n.replace(/^\//,""):n;return b?t+u:u}(o,n,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},95:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}))}}]);