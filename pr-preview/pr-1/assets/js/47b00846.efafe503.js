"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4734],{5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),s=r(4334);const n={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(n.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(7462),s=r(7294),n=r(4334),l=r(2466),u=r(6775),o=r(1980),c=r(7392),i=r(12);function d(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:s}}=e;return{value:t,label:r,attributes:a,default:s}}))}function p(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,u.k6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,n=p(e),[l,u]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[o,c]=b({queryString:r,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,i.Nk)(r);return[a,(0,s.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:a}),h=(()=>{const e=o??d;return m({value:e,tabValues:n})?e:null})();(0,s.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),f(e)}),[c,f,n]),tabValues:n}}var h=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:u,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=i.indexOf(t),a=c[r].value;a!==u&&(d(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:p},l,{className:(0,n.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":u===t})}),r??t)})))}function E(e){let{lazy:t,children:r,selectedValue:a}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function x(e){const t=f(e);return s.createElement("div",{className:(0,n.Z)("tabs-container",v.tabList)},s.createElement(g,(0,a.Z)({},e,t)),s.createElement(E,(0,a.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return s.createElement(x,(0,a.Z)({key:String(t)},e))}},7833:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),s=r(4866),n=r(5162),l=r(9960),u=r(614);function o(e){let{pullRequest:t,branchSuffix:r}=e;return a.createElement(s.Z,null,a.createElement(n.Z,{value:"exercise",label:"Exercise",default:!0},a.createElement(u.Z,{language:"console"},`git switch exercises/${r}`),a.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(n.Z,{value:"solution",label:"Solution"},a.createElement(u.Z,{language:"console"},`git switch solutions/${r}`),a.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(n.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",a.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},5721:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=r(7462),s=(r(7294),r(3905)),n=r(7833);const l={title:"ClassStructure01",description:""},u=void 0,o={unversionedId:"exercises/class-structure/class-structure01",id:"exercises/class-structure/class-structure01",title:"ClassStructure01",description:"",source:"@site/docs/exercises/class-structure/class-structure01.mdx",sourceDirName:"exercises/class-structure",slug:"/exercises/class-structure/class-structure01",permalink:"/java-docs/preview-refs/pull/1/merge/exercises/class-structure/class-structure01",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-structure/class-structure01.mdx",tags:[],version:"current",frontMatter:{title:"ClassStructure01",description:""},sidebar:"exercisesSidebar",previous:{title:"Aufbau einer Java-Klasse",permalink:"/java-docs/preview-refs/pull/1/merge/exercises/class-structure/"},next:{title:"Datenobjekte",permalink:"/java-docs/preview-refs/pull/1/merge/exercises/data-objects/"}},c={},i=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:i},p="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'Erstelle eine ausf\xfchrbare Klasse, welche "Hello World" auf der Konsole ausgibt.'),(0,s.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"Hello World\n")),(0,s.kt)(n.Z,{pullRequest:"2",branchSuffix:"class-structure/01",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);