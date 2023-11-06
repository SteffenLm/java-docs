"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7298],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),s=n(4334);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(7462),s=n(7294),r=n(4334),l=n(2466),i=n(6775),o=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}function m(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[o,u]=b({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),h=(()=>{const e=o??d;return p({value:e,tabValues:r})?e:null})();(0,s.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var h=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),o(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,r.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function E(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",v.tabList)},s.createElement(g,(0,a.Z)({},e,t)),s.createElement(E,(0,a.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return s.createElement(k,(0,a.Z)({key:String(t)},e))}},7833:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),s=n(4866),r=n(5162),l=n(9960),i=n(614);function o(e){let{pullRequest:t,branchSuffix:n}=e;return a.createElement(s.Z,null,a.createElement(r.Z,{value:"exercise",label:"Exercise",default:!0},a.createElement(i.Z,{language:"console"},`git switch exercises/${n}`),a.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(r.Z,{value:"solution",label:"Solution"},a.createElement(i.Z,{language:"console"},`git switch solutions/${n}`),a.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(r.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",a.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},8135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),s=(n(7294),n(3905)),r=n(7833);const l={title:"InnerClasses01",description:""},i=void 0,o={unversionedId:"exercises/inner-classes/inner-classes01",id:"exercises/inner-classes/inner-classes01",title:"InnerClasses01",description:"",source:"@site/docs/exercises/inner-classes/inner-classes01.mdx",sourceDirName:"exercises/inner-classes",slug:"/exercises/inner-classes/inner-classes01",permalink:"/java-docs/pr-preview/pr-2/exercises/inner-classes/inner-classes01",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/inner-classes/inner-classes01.mdx",tags:[],version:"current",frontMatter:{title:"InnerClasses01",description:""},sidebar:"exercisesSidebar",previous:{title:"Innere Klassen (Inner Classes)",permalink:"/java-docs/pr-preview/pr-2/exercises/inner-classes/"},next:{title:"InnerClasses02",permalink:"/java-docs/pr-preview/pr-2/exercises/inner-classes/inner-classes02"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Erstelle die Klassen ",(0,s.kt)("inlineCode",{parentName:"li"},"House")," und ",(0,s.kt)("inlineCode",{parentName:"li"},"Room")," anhand des abgebildeten\nKlassendiagramms"),(0,s.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche ein Haus mit mehreren R\xe4umen erzeugt\nund auf der Konsole ausgibt"),(0,s.kt)("li",{parentName:"ul"},"Die Klasse Room soll hierbei eine Element Klasse sein.")),(0,s.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,s.kt)("mermaid",{value:"classDiagram\n    House *-- Room\n\n    class House {\n        -rooms ArrayList~Room~\n        +addRoom(room Room) void\n        +printRooms() void\n    }\n\n    class Room {\n        -name String\n        +Room(name String)\n        +printRoom() void\n    }"}),(0,s.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"Wohnzimmer\nEsszimmer\nSchlafzimmer\nK\xfcche\nWC\n")),(0,s.kt)(r.Z,{pullRequest:"54",branchSuffix:"inner-classes/01",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);