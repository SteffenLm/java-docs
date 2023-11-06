"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7576],{5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(4334);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(7462),a=n(7294),l=n(4334),s=n(2466),i=n(6775),o=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,u]=b({queryString:n,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),h=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var h=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(d(t),o(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,l.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=g(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function E(e){const t=(0,h.Z)();return a.createElement(x,(0,r.Z)({key:String(t)},e))}},7833:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(4866),l=n(5162),s=n(9960),i=n(614);function o(e){let{pullRequest:t,branchSuffix:n}=e;return r.createElement(a.Z,null,r.createElement(l.Z,{value:"exercise",label:"Exercise",default:!0},r.createElement(i.Z,{language:"console"},`git switch exercises/${n}`),r.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(l.Z,{value:"solution",label:"Solution"},r.createElement(i.Z,{language:"console"},`git switch solutions/${n}`),r.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(l.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",r.createElement(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},8313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),l=n(7833);const s={title:"Generics01",description:""},i=void 0,o={unversionedId:"exercises/generics/generics01",id:"exercises/generics/generics01",title:"Generics01",description:"",source:"@site/docs/exercises/generics/generics01.mdx",sourceDirName:"exercises/generics",slug:"/exercises/generics/generics01",permalink:"/java-docs/pr-preview/pr-2/exercises/generics/generics01",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/generics/generics01.mdx",tags:[],version:"current",frontMatter:{title:"Generics01",description:""},sidebar:"exercisesSidebar",previous:{title:"Generische Programmierung",permalink:"/java-docs/pr-preview/pr-2/exercises/generics/"},next:{title:"Generics02",permalink:"/java-docs/pr-preview/pr-2/exercises/generics/generics02"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse BeerBottle",id:"hinweis-zur-klasse-beerbottle",level:2},{value:"Hinweise zur Klasse Crate",id:"hinweise-zur-klasse-crate",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Erstelle die Klassen ",(0,a.kt)("inlineCode",{parentName:"li"},"Bottle"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"BeerBottle"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"WineBottle")," und ",(0,a.kt)("inlineCode",{parentName:"li"},"Crate")," anhand\ndes abgebildeten Klassendiagramms"),(0,a.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche eine Getr\xe4nkiste sowie mehrere\nFlaschen erzeugt und die Flaschen in die Getr\xe4nkekiste stellt")),(0,a.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,a.kt)("mermaid",{value:"classDiagram\n    Bottle <|-- BeerBottle\n    Bottle <|-- WineBottle\n    Crate o-- Bottle\n\n    class Crate {\n        -box1 Bottle\n        -box2 Bottle\n        -box3 Bottle\n        -box4 Bottle\n        -box5 Bottle\n        -box6 Bottle\n        +insertBottle(bottle Bottle, box int) void\n        +takeBottle(box int) Bottle\n    }\n\n    class Bottle {\n        <<abstract>>\n    }\n\n    class BeerBottle {\n        +chugALug() void\n    }\n\n    class WineBottle {\n\n    }"}),(0,a.kt)("h2",{id:"hinweis-zur-klasse-beerbottle"},"Hinweis zur Klasse BeerBottle"),(0,a.kt)("p",null,"Die Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"void chugALug()"),' soll den Text "Ex und Hopp" auf der Konsole\nausgeben.'),(0,a.kt)("h2",{id:"hinweise-zur-klasse-crate"},"Hinweise zur Klasse Crate"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void insertBottle(bottle: Bottle, box: int)")," soll eine Flasche in\neine der 6 Getr\xe4nkef\xe4cher einf\xfcgen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"Bottle takeBottle(box: int)")," soll die Flasche des entsprechenden\nGetr\xe4nkefachs zur\xfcckgeben")),(0,a.kt)(l.Z,{pullRequest:"52",branchSuffix:"generics/01",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);