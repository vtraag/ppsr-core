(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,b=d["".concat(o,".").concat(h)]||d[h]||p[h]||r;return n?i.a.createElement(b,s(s({ref:t},u),{},{components:n})):i.a.createElement(b,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),r=(n(0),n(112)),o={id:"contribute",title:"Contribute",description:"Help build PPSR Core"},s={unversionedId:"contribute",id:"contribute",isDocsHomePage:!1,title:"Contribute",description:"Help build PPSR Core",source:"@site/docs/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/docs/contribute",editUrl:"https://github.com/citizen-science-association/ppsr-core/edit/master/docs/contribute.md",version:"current",lastUpdatedBy:"BBudnicki",lastUpdatedAt:1603844813,formattedLastUpdatedAt:"10/28/2020",frontMatter:{id:"contribute",title:"Contribute",description:"Help build PPSR Core"},sidebar:"coreSidebar",previous:{title:"Observation Data Model",permalink:"/docs/observation"},next:{title:"Governance",permalink:"/docs/governance"}},c=[{value:"Data &amp; Meta Data Meetings",id:"data--meta-data-meetings",children:[]},{value:"Contributing through GitHub",id:"contributing-through-github",children:[{value:"Editing pages",id:"editing-pages",children:[]},{value:"Editing the Schema",id:"editing-the-schema",children:[]},{value:"Reporting Issues",id:"reporting-issues",children:[]}]}],u={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"We welcome your contributions to PPSR Core. This site is maintained by a diverse group of volunteers through the Citizen Science Association ",Object(r.a)("a",{parentName:"p",href:"https://www.citizenscience.org/get-involved/working-groups/data-and-metadata-working-group/"},"Data & Meta Data Working Group"),". This website serves as the canonical version. We keep track of our work within GitHub (no developer experience required). Proposed changes are made through GitHub pull requests and through the issue tracker. When our workgroup meets we review the pull requests to make decisions on inclusion within PPSR Core."),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Thank you to all our contributors!")),Object(r.a)("hr",null),Object(r.a)("h2",{id:"data--meta-data-meetings"},"Data & Meta Data Meetings"),Object(r.a)("p",null,"Our working group frequently meets to review changes. To join our mailing list and get involved with meetings please contact:"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre"},"data_cochair@citizenscience.org\n")),Object(r.a)("hr",null),Object(r.a)("h2",{id:"contributing-through-github"},"Contributing through GitHub"),Object(r.a)("p",null,"This standard is maintained in a GitHub repository. Don't worry, deep understanding of GitHub is not required, ",Object(r.a)("strong",{parentName:"p"},"you don't have to be a programer"),"."),Object(r.a)("p",null,"You will need to be logged into a free ",Object(r.a)("a",{parentName:"p",href:"https://github.com/"},"GitHub")," account to make changes. We maintain a ",Object(r.a)("a",{parentName:"p",href:"technical"},"technical page")," if you want to help with more the technical aspects or understand how this site was built."),Object(r.a)("h3",{id:"editing-pages"},"Editing pages"),Object(r.a)("p",null,'Editing any page is simple. At the bottom of each page is a "edit this page" link that will take you from the website to that file within within our repository GitHub. Pages are written in the ',Object(r.a)("a",{parentName:"p",href:"https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax"},"GitHub flavor of Markdown syntax"),". This is standard markdown with some additional features included by GitHub. ",Object(r.a)("a",{parentName:"p",href:"https://guides.github.com/features/mastering-markdown/"},"This quickstart")," guide includes styling for headers, tables, URL linking, and font formating."),Object(r.a)("p",null,'To submit your changes you will see input for "Commit changes".'),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Include a ",Object(r.a)("a",{parentName:"li",href:"https://chris.beams.io/posts/git-commit/"},"good description"),". Explain ",Object(r.a)("strong",{parentName:"li"},"why")," the change is needed."),Object(r.a)("li",{parentName:"ul"},"Add additional details if needed"),Object(r.a)("li",{parentName:"ul"},"Submit a pull request")),Object(r.a)("p",null,"Examples"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre"},"Added Living Atlas example to Project\n\nLiving atlas uses this schema. We received permission to use them as an example of a project.\n")),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre"},"Fixed typos on homepage\n")),Object(r.a)("h3",{id:"editing-the-schema"},"Editing the Schema"),Object(r.a)("p",null,"The various model schemas and field definitions are maintained in a working document. As this is updated, periodically a delegate from the Model Governance Committee will trigger an extract-transform process which produces a JSON Schema file output, increments the version number within the ",Object(r.a)("strong",{parentName:"p"},"PPSR-Core Github repository TODO"),", and gets published to this website. In time, other machine-readable derivative formats will also be produced and made available for download."),Object(r.a)("p",null,"Should you wish to request a change to any of the Schema models, please submit an issue in the Github repository and tag it as a \u201cChange request\u201d together with the applicable schema model."),Object(r.a)("h3",{id:"reporting-issues"},"Reporting Issues"),Object(r.a)("p",null,"Minor issues & questions may be reported through the GitHub issue tracker. We use it to keep track of small tasks. For larger concerns, please join one of our meetings."))}l.isMDXComponent=!0}}]);