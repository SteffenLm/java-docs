"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6424],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(4334);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),r=n(7294),s=n(4334),i=n(2466),l=n(6775),o=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[o,u]=b({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),h=(()=>{const e=o??d;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var h=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,s.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function E(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",v.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(x,(0,a.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return r.createElement(E,(0,a.Z)({key:String(t)},e))}},7833:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(4866),s=n(5162),i=n(9960),l=n(614);function o(e){let{pullRequest:t,branchSuffix:n}=e;return a.createElement(r.Z,null,a.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},a.createElement(l.Z,{language:"console"},`git switch exercises/${n}`),a.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(s.Z,{value:"solution",label:"Solution"},a.createElement(l.Z,{language:"console"},`git switch solutions/${n}`),a.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",a.createElement(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},7100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),s=n(7833);const i={title:"Exceptions01",description:""},l=void 0,o={unversionedId:"exercises/exceptions/exceptions01",id:"exercises/exceptions/exceptions01",title:"Exceptions01",description:"",source:"@site/docs/exercises/exceptions/exceptions01.mdx",sourceDirName:"exercises/exceptions",slug:"/exercises/exceptions/exceptions01",permalink:"/java-docs/exercises/exceptions/exceptions01",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/exceptions/exceptions01.mdx",tags:[],version:"current",frontMatter:{title:"Exceptions01",description:""},sidebar:"exercisesSidebar",previous:{title:"Ausnahmen (Exceptions)",permalink:"/java-docs/exercises/exceptions/"},next:{title:"Exceptions02",permalink:"/java-docs/exercises/exceptions/exceptions02"}},u={},c=[],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Erstelle die Ausnahmenklasse ",(0,r.kt)("inlineCode",{parentName:"li"},"InvalidValueException"),", passe die Methode\n",(0,r.kt)("inlineCode",{parentName:"li"},"void accelerate(value: int)")," so an, dass bei einem eingehenden Wert kleiner\ngleich Null die Ausnahme ",(0,r.kt)("inlineCode",{parentName:"li"},"InvalidValueException")," ausgel\xf6st wird und passe die\nMethode ",(0,r.kt)("inlineCode",{parentName:"li"},"void brake(value: int)")," so an, dass bei einem eingehenden Wert\nkleiner gleich Null die Ausnahme ",(0,r.kt)("inlineCode",{parentName:"li"},"InvalidValueException")," ausgel\xf6st wird"),(0,r.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"../interfaces/interfaces01"},"Interfaces01")," so an, dass sie fehlerfrei\nausgef\xfchrt werden kann")),(0,r.kt)(s.Z,{pullRequest:"49",branchSuffix:"exceptions/01",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);