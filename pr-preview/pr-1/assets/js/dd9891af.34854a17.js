"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3649],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),o=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=o(r),d=n,g=s["".concat(p,".").concat(d)]||s[d]||u[d]||l;return r?a.createElement(g,c(c({ref:t},m),{},{components:r})):a.createElement(g,c({ref:t},m))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,c[1]=i;for(var o=2;o<l;o++)c[o]=r[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(7294),n=r(4334);const l={tabItem:"tabItem_Ymn6"};function c(e){let{children:t,hidden:r,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,c),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>v});var a=r(7462),n=r(7294),l=r(4334),c=r(2466),i=r(6775),p=r(1980),o=r(7392),m=r(12);function s(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??s(r);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,p._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=u(e),[c,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[p,o]=g({queryString:r,groupId:a}),[s,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,m.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),N=(()=>{const e=p??s;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{N&&i(N)}),[N]);return{selectedValue:c,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),k(e)}),[o,k,l]),tabValues:l}}var N=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:r,selectedValue:i,selectValue:p,tabValues:o}=e;const m=[],{blockElementScrollPositionUntilNextRender:s}=(0,c.o5)(),u=e=>{const t=e.currentTarget,r=m.indexOf(t),a=o[r].value;a!==i&&(s(t),p(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=m.indexOf(e.currentTarget)+1;t=m[r]??m[0];break}case"ArrowLeft":{const r=m.indexOf(e.currentTarget)-1;t=m[r]??m[m.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},o.map((e=>{let{value:t,label:r,attributes:c}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:u},c,{className:(0,l.Z)("tabs__item",b.tabItem,c?.className,{"tabs__item--active":i===t})}),r??t)})))}function f(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},n.createElement(h,(0,a.Z)({},e,t)),n.createElement(f,(0,a.Z)({},e,t)))}function v(e){const t=(0,N.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},1816:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905)),l=r(4866),c=r(5162);const i={title:"Operators03",description:""},p=void 0,o={unversionedId:"exercises/operators/operators03",id:"exercises/operators/operators03",title:"Operators03",description:"",source:"@site/docs/exercises/operators/operators03.mdx",sourceDirName:"exercises/operators",slug:"/exercises/operators/operators03",permalink:"/java-docs/preview-refs/pull/1/merge/exercises/operators/operators03",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/operators/operators03.mdx",tags:[],version:"current",frontMatter:{title:"Operators03",description:""},sidebar:"exercisesSidebar",previous:{title:"Operators02",permalink:"/java-docs/preview-refs/pull/1/merge/exercises/operators/operators02"},next:{title:"Konsolenanwendungen",permalink:"/java-docs/preview-refs/pull/1/merge/exercises/console-applications/"}},m={},s=[{value:"Coding",id:"coding",level:2},{value:"L\xf6sung",id:"l\xf6sung",level:2}],u={toc:s},d="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welche Ausgabe erwartest Du nach Ablauf des abgebildeten Codings?"),(0,n.kt)("h2",{id:"coding"},"Coding"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'byte a = 116;\nbyte b = 59;\nbyte c, d, e, f;\n\nc = (byte) (a & b);\nd = (byte) (a | b);\ne = (byte) (a ^ b);\nf = (byte) (~a);\n\nSystem.out.println("c: " + c);\nSystem.out.println("d: " + d);\nSystem.out.println("e: " + e);\nSystem.out.println("f: " + f);\n')),(0,n.kt)("h2",{id:"l\xf6sung"},"L\xf6sung"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Dezimal"),(0,n.kt)("th",{parentName:"tr",align:"center"},"128"),(0,n.kt)("th",{parentName:"tr",align:"center"},"64"),(0,n.kt)("th",{parentName:"tr",align:"center"},"32"),(0,n.kt)("th",{parentName:"tr",align:"center"},"16"),(0,n.kt)("th",{parentName:"tr",align:"center"},"8"),(0,n.kt)("th",{parentName:"tr",align:"center"},"4"),(0,n.kt)("th",{parentName:"tr",align:"center"},"2"),(0,n.kt)("th",{parentName:"tr",align:"center"},"1"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"116"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"59"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1")))),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"c",label:"c",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Berechnung")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Dezimal"),(0,n.kt)("th",{parentName:"tr",align:"center"},"128"),(0,n.kt)("th",{parentName:"tr",align:"center"},"64"),(0,n.kt)("th",{parentName:"tr",align:"center"},"32"),(0,n.kt)("th",{parentName:"tr",align:"center"},"16"),(0,n.kt)("th",{parentName:"tr",align:"center"},"8"),(0,n.kt)("th",{parentName:"tr",align:"center"},"4"),(0,n.kt)("th",{parentName:"tr",align:"center"},"2"),(0,n.kt)("th",{parentName:"tr",align:"center"},"1"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"a & b"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Konsolenausgabe")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"c: 48\n"))),(0,n.kt)(c.Z,{value:"d",label:"d",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Berechnung")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Dezimal"),(0,n.kt)("th",{parentName:"tr",align:"center"},"128"),(0,n.kt)("th",{parentName:"tr",align:"center"},"64"),(0,n.kt)("th",{parentName:"tr",align:"center"},"32"),(0,n.kt)("th",{parentName:"tr",align:"center"},"16"),(0,n.kt)("th",{parentName:"tr",align:"center"},"8"),(0,n.kt)("th",{parentName:"tr",align:"center"},"4"),(0,n.kt)("th",{parentName:"tr",align:"center"},"2"),(0,n.kt)("th",{parentName:"tr",align:"center"},"1"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"a ","|"," b"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Konsolenausgabe")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"d: 127\n"))),(0,n.kt)(c.Z,{value:"e",label:"e",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Berechnung")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Dezimal"),(0,n.kt)("th",{parentName:"tr",align:"center"},"128"),(0,n.kt)("th",{parentName:"tr",align:"center"},"64"),(0,n.kt)("th",{parentName:"tr",align:"center"},"32"),(0,n.kt)("th",{parentName:"tr",align:"center"},"16"),(0,n.kt)("th",{parentName:"tr",align:"center"},"8"),(0,n.kt)("th",{parentName:"tr",align:"center"},"4"),(0,n.kt)("th",{parentName:"tr",align:"center"},"2"),(0,n.kt)("th",{parentName:"tr",align:"center"},"1"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"a ^ b"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Konsolenausgabe")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"d: 79\n"))),(0,n.kt)(c.Z,{value:"f",label:"f",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Berechnung")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Dezimal"),(0,n.kt)("th",{parentName:"tr",align:"center"},"128"),(0,n.kt)("th",{parentName:"tr",align:"center"},"64"),(0,n.kt)("th",{parentName:"tr",align:"center"},"32"),(0,n.kt)("th",{parentName:"tr",align:"center"},"16"),(0,n.kt)("th",{parentName:"tr",align:"center"},"8"),(0,n.kt)("th",{parentName:"tr",align:"center"},"4"),(0,n.kt)("th",{parentName:"tr",align:"center"},"2"),(0,n.kt)("th",{parentName:"tr",align:"center"},"1"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"~a"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"1")),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"~"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"+"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Konsolenausgabe")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"d: -117\n")))))}g.isMDXComponent=!0}}]);