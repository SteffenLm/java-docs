"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6858],{5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(4334);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(7462),n=r(7294),s=r(4334),l=r(2466),u=r(6775),o=r(1980),i=r(7392),c=r(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,u.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=p(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[o,i]=b({queryString:r,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),g=(()=>{const e=o??d;return m({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),f(e)}),[i,f,s]),tabValues:s}}var g=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:u,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==u&&(d(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,s.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":u===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function E(e){const t=f(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",h.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function k(e){const t=(0,g.Z)();return n.createElement(E,(0,a.Z)({key:String(t)},e))}},7833:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(4866),s=r(5162),l=r(9960),u=r(614);function o(e){let{pullRequest:t,branchSuffix:r}=e;return a.createElement(n.Z,null,a.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},a.createElement(u.Z,{language:"console"},`git switch exercises/${r}`),a.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(s.Z,{value:"solution",label:"Solution"},a.createElement(u.Z,{language:"console"},`git switch solutions/${r}`),a.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",a.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},1616:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905)),s=r(7833);const l={title:"Arrays06",description:""},u=void 0,o={unversionedId:"exercises/arrays/arrays06",id:"exercises/arrays/arrays06",title:"Arrays06",description:"",source:"@site/docs/exercises/arrays/arrays06.mdx",sourceDirName:"exercises/arrays",slug:"/exercises/arrays/arrays06",permalink:"/java-docs/preview-refs/pull/1/merge/exercises/arrays/arrays06",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays06.mdx",tags:[],version:"current",frontMatter:{title:"Arrays06",description:""},sidebar:"exercisesSidebar",previous:{title:"Arrays05",permalink:"/java-docs/preview-refs/pull/1/merge/exercises/arrays/arrays05"},next:{title:"Objektorientierte Programmierung",permalink:"/java-docs/preview-refs/pull/1/merge/exercises/oo/"}},i={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche ein gegebenes mehrdimensionales\nZahlenfeld analysiert."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"int[][] multiDimArray = {\n    { 5, 8, 2, 7 },\n    { 9, 6, 10, 8 },\n    { 10, 2, 7, 5 },\n    { 1, 9, 5, 4 } };\n")),(0,n.kt)("p",null,"Es soll jeweils der kleinste sowie der gr\xf6\xdfte Wert einer Reihe auf der Konsole\nausgegeben werden."),(0,n.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"MIN - MAX\n2 - 8\n6 - 10\n2 - 10\n1 - 9\n")),(0,n.kt)(s.Z,{pullRequest:"75",branchSuffix:"arrays/06",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);