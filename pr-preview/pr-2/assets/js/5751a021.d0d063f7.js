"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7979],{5162:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(7294),n=a(4334);const s={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:a,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,u),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),s=a(4334),u=a(2466),l=a(6775),i=a(1980),o=a(7392),c=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[u,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[i,o]=m({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),h=(()=>{const e=i??d;return b({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),f(e)}),[o,f,s]),tabValues:s}}var h=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=o[a].value;r!==l&&(d(t),i(r))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:u}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:p},u,{className:(0,s.Z)("tabs__item",g.tabItem,u?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function E(e){const t=f(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",g.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return n.createElement(E,(0,r.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(4866),s=a(5162),u=a(9960),l=a(614);function i(e){let{pullRequest:t,branchSuffix:a}=e;return r.createElement(n.Z,null,r.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},r.createElement(l.Z,{language:"console"},`git switch exercises/${a}`),r.createElement(u.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(s.Z,{value:"solution",label:"Solution"},r.createElement(l.Z,{language:"console"},`git switch solutions/${a}`),r.createElement(u.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",r.createElement(u.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},8928:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>b,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),s=a(7833);const u={title:"Arrays05",description:""},l=void 0,i={unversionedId:"exercises/arrays/arrays05",id:"exercises/arrays/arrays05",title:"Arrays05",description:"",source:"@site/docs/exercises/arrays/arrays05.mdx",sourceDirName:"exercises/arrays",slug:"/exercises/arrays/arrays05",permalink:"/java-docs/pr-preview/pr-2/exercises/arrays/arrays05",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays05.mdx",tags:[],version:"current",frontMatter:{title:"Arrays05",description:""},sidebar:"exercisesSidebar",previous:{title:"Arrays04",permalink:"/java-docs/pr-preview/pr-2/exercises/arrays/arrays04"},next:{title:"Arrays06",permalink:"/java-docs/pr-preview/pr-2/exercises/arrays/arrays06"}},o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c},p="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche es erm\xf6glicht, Aufgaben hinzuzuf\xfcgen,\nzu l\xf6schen und auf der Konsole auszugeben."),(0,n.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"Optionen\n1: Aufgabe hinzuf\xfcgen\n2: Aufgabe l\xf6schen\n3: Aufgaben ausgeben\n4: Beenden\n\nWas m\xf6chtest Du tun?: 1\nGib bitte die Aufgabenbeschreibung ein: W\xe4sche waschen\nWas m\xf6chtest Du tun?: 1\nGib bitte die Aufgabenbeschreibung ein: Hausaufgaben machen\nWas m\xf6chtest Du tun?: 3\n\nAufgaben\n0: W\xe4sche waschen\n1: Hausaufgaben machen\n\nWas m\xf6chtest Du tun?: 2\nGib bitte ein, welche Aufgabe gel\xf6scht werden soll: 0\nWas m\xf6chtest Du tun?: 3\n\nAufgaben\n0: Hausaufgaben machen\n\nWas m\xf6chtest Du tun?: 4\n")),(0,n.kt)(s.Z,{pullRequest:"22",branchSuffix:"arrays/05",mdxType:"Exercise"}))}b.isMDXComponent=!0}}]);