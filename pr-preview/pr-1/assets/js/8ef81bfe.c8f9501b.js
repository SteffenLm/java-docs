"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3455],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(4334);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),l=a(4334),i=a(2466),u=a(6775),s=a(1980),o=a(7392),d=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[i,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,o]=g({queryString:a,groupId:n}),[c,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),o(e),k(e)}),[o,k,l]),tabValues:l}}var h=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:u,selectValue:s,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=o[a].value;n!==u&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":u===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function f(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return r.createElement(f,(0,n.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(4866),l=a(5162),i=a(9960),u=a(614);function s(e){let{pullRequest:t,branchSuffix:a}=e;return n.createElement(r.Z,null,n.createElement(l.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(u.Z,{language:"console"},`git switch exercises/${a}`),n.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(l.Z,{value:"solution",label:"Solution"},n.createElement(u.Z,{language:"console"},`git switch solutions/${a}`),n.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(l.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",n.createElement(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},9795:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(7833);const i={title:"OO07",description:""},u=void 0,s={unversionedId:"exercises/oo/oo07",id:"exercises/oo/oo07",title:"OO07",description:"",source:"@site/docs/exercises/oo/oo07.mdx",sourceDirName:"exercises/oo",slug:"/exercises/oo/oo07",permalink:"/java-docs/pr-preview/pr-1/exercises/oo/oo07",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/oo/oo07.mdx",tags:[],version:"current",frontMatter:{title:"OO07",description:""},sidebar:"exercisesSidebar",previous:{title:"OO06",permalink:"/java-docs/pr-preview/pr-1/exercises/oo/oo06"},next:{title:"Die Java API",permalink:"/java-docs/pr-preview/pr-1/exercises/java-api/"}},o={},d=[{value:"Attribute der Klasse Vehicle",id:"attribute-der-klasse-vehicle",level:2},{value:"Methoden der Klasse Vehicle",id:"methoden-der-klasse-vehicle",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"Vehicle")," aus \xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"oo02"},"OO02")," mit Hilfe der\nabgebildeten Informationen an"),(0,r.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"Vehicle")," so an, dass beim Erzeugen von Objekten das Attribut\n",(0,r.kt)("inlineCode",{parentName:"li"},"numberOfVehicles")," inkrementiert wird"),(0,r.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"oo02"},"OO02")," so an, dass\nmehrere Fahrzeuge erstellt werden und dass die Anzahl Fahrzeuge einmal vor und\neinmal nach den Objekterzeugungen ausgegeben wird")),(0,r.kt)("h2",{id:"attribute-der-klasse-vehicle"},"Attribute der Klasse Vehicle"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribut"),(0,r.kt)("th",{parentName:"tr",align:null},"Datentyp"),(0,r.kt)("th",{parentName:"tr",align:null},"Sichtbarkeit"),(0,r.kt)("th",{parentName:"tr",align:null},"Level"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"make"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"private"),(0,r.kt)("td",{parentName:"tr",align:null},"nicht-statisch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"private"),(0,r.kt)("td",{parentName:"tr",align:null},"nicht-statisch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"speed"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"private"),(0,r.kt)("td",{parentName:"tr",align:null},"nicht-statisch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"numberOfVehicles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"private")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"statisch"))))),(0,r.kt)("h2",{id:"methoden-der-klasse-vehicle"},"Methoden der Klasse Vehicle"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Methode"),(0,r.kt)("th",{parentName:"tr",align:null},"R\xfcckgabewert"),(0,r.kt)("th",{parentName:"tr",align:null},"Sichtbarkeit"),(0,r.kt)("th",{parentName:"tr",align:null},"Level"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vehicle(make: String, model: String)"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"nicht-statisch"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Festlegen des Herstellers und des Modells sowie Inkrementieren der Anzahl Fahrzeuge"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getMake()"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"nicht-statisch"),(0,r.kt)("td",{parentName:"tr",align:null},"R\xfcckgabe des Herstellers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getModel()"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"nicht-statisch"),(0,r.kt)("td",{parentName:"tr",align:null},"R\xfcckgabe des Modells")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getSpeed()"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"nicht-statisch"),(0,r.kt)("td",{parentName:"tr",align:null},"R\xfcckgabe der Geschwindigkeit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accelerate(value: int)"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"nicht-statisch"),(0,r.kt)("td",{parentName:"tr",align:null},"Erh\xf6hung der Geschwindigkeit um den eingehenden Wert")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brake(value: int)"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"nicht-statisch"),(0,r.kt)("td",{parentName:"tr",align:null},"Reduzierung der Geschwindigkeit um den eingehenden Wert")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"print()"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"nicht-statisch"),(0,r.kt)("td",{parentName:"tr",align:null},"Ausgabe: Hersteller Modell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"getNumberOfVehicles()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"public")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"statisch")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"R\xfcckgabe der Anzahl Fahrzeuge"))))),(0,r.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Anzahl Fahrzeuge: 0\nAnzahl Fahrzeuge: 3\nPorsche 911\nMAN TGX\nOpel Zafira Life\n")),(0,r.kt)(l.Z,{pullRequest:"29",branchSuffix:"oo/07",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);