"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5838],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(4334);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),l=a(4334),s=a(2466),o=a(6775),i=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,u]=b({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=i??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var h=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(d(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,l.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(E,(0,n.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(4866),l=a(5162),s=a(9960),o=a(614);function i(e){let{pullRequest:t,branchSuffix:a}=e;return n.createElement(r.Z,null,n.createElement(l.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(o.Z,{language:"console"},`git switch exercises/${a}`),n.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(l.Z,{value:"solution",label:"Solution"},n.createElement(o.Z,{language:"console"},`git switch solutions/${a}`),n.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(l.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",n.createElement(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},8988:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(7833);const s={title:"OO05",description:""},o=void 0,i={unversionedId:"exercises/oo/oo05",id:"exercises/oo/oo05",title:"OO05",description:"",source:"@site/docs/exercises/oo/oo05.mdx",sourceDirName:"exercises/oo",slug:"/exercises/oo/oo05",permalink:"/java-docs/pr-preview/pr-2/exercises/oo/oo05",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/oo/oo05.mdx",tags:[],version:"current",frontMatter:{title:"OO05",description:""},sidebar:"exercisesSidebar",previous:{title:"OO04",permalink:"/java-docs/pr-preview/pr-2/exercises/oo/oo04"},next:{title:"OO06",permalink:"/java-docs/pr-preview/pr-2/exercises/oo/oo06"}},u={},c=[{value:"Methoden der Klasse DiceCup",id:"methoden-der-klasse-dicecup",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Erstelle die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"DiceCup")," mit Hilfe der abgebildeten Informationen"),(0,r.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche einen W\xfcrfelbecher sowie 5 W\xfcrfel\nerzeugt. Es soll 5-mal mit dem W\xfcrfelbecher gew\xfcrfelt und f\xfcr jeden Wurf das\nErgebnis des Wurfes ausgegeben werden.")),(0,r.kt)("h2",{id:"methoden-der-klasse-dicecup"},"Methoden der Klasse DiceCup"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Methode"),(0,r.kt)("th",{parentName:"tr",align:null},"R\xfcckgabewert"),(0,r.kt)("th",{parentName:"tr",align:null},"Sichtbarkeit"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"rollTheDices(dices: Dice...)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"public")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"W\xfcrfeln mit allen W\xfcrfeln"))))),(0,r.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"ID - W\xfcrfelwert\nWurf 1\n1 - 5\n2 - 5\n3 - 2\n4 - 2\n5 - 4\nWurf 2\n1 - 1\n2 - 3\n3 - 1\n4 - 1\n5 - 4\n\u2026\n")),(0,r.kt)("h2",{id:"hinweis"},"Hinweis"),(0,r.kt)("p",null,"Verwende die Klasse ",(0,r.kt)("inlineCode",{parentName:"p"},"Dice")," aus \xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"p",href:"oo03"},"OO03"),"."),(0,r.kt)(l.Z,{pullRequest:"27",branchSuffix:"oo/05",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);