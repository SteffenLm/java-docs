"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8085],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(4334);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(7462),n=a(7294),l=a(4334),s=a(2466),i=a(6775),u=a(1980),o=a(7392),c=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,o]=m({queryString:a,groupId:r}),[p,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=u??p;return b({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),v(e)}),[o,v,l]),tabValues:l}}var f=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=o[a].value;r!==i&&(p(t),u(r))},b=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:d},s,{className:(0,l.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function E(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function j(e){const t=v(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(E,(0,r.Z)({},e,t)))}function x(e){const t=(0,f.Z)();return n.createElement(j,(0,r.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(7294),n=a(4866),l=a(5162),s=a(9960),i=a(614);function u(e){let{pullRequest:t,branchSuffix:a}=e;return r.createElement(n.Z,null,r.createElement(l.Z,{value:"exercise",label:"Exercise",default:!0},r.createElement(i.Z,{language:"console"},`git switch exercises/${a}`),r.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(l.Z,{value:"solution",label:"Solution"},r.createElement(i.Z,{language:"console"},`git switch solutions/${a}`),r.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(l.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",r.createElement(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},6849:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),l=a(7833);const s={title:"JavaAPI04",description:""},i=void 0,u={unversionedId:"exercises/java-api/java-api04",id:"exercises/java-api/java-api04",title:"JavaAPI04",description:"",source:"@site/docs/exercises/java-api/java-api04.mdx",sourceDirName:"exercises/java-api",slug:"/exercises/java-api/java-api04",permalink:"/java-docs/pr-preview/pr-2/exercises/java-api/java-api04",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-api/java-api04.mdx",tags:[],version:"current",frontMatter:{title:"JavaAPI04",description:""},sidebar:"exercisesSidebar",previous:{title:"JavaAPI03",permalink:"/java-docs/pr-preview/pr-2/exercises/java-api/java-api03"},next:{title:"Aufz\xe4hlungen (Enumerations)",permalink:"/java-docs/pr-preview/pr-2/exercises/enumerations/"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:c},d="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche den vorzeichenfreien Dezimalwert einer\neingegebenen negativen short-Zahl (-1 bis -32.768) berechnet und ausgibt."),(0,n.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"Gib bitte einen Wert zwischen -1 und -32.768 ein: -2854\nErgebnis: Der vorzeichenfreie Dezimalwert betr\xe4gt 62682\n")),(0,n.kt)(l.Z,{pullRequest:"33",branchSuffix:"java-api/04",mdxType:"Exercise"}))}b.isMDXComponent=!0}}]);