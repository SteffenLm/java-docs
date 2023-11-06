"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9094],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(4334);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),r=n(7294),l=n(4334),i=n(2466),s=n(6775),o=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,u]=h({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(d(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},7833:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(4866),l=n(5162),i=n(9960),s=n(614);function o(e){let{pullRequest:t,branchSuffix:n}=e;return a.createElement(r.Z,null,a.createElement(l.Z,{value:"exercise",label:"Exercise",default:!0},a.createElement(s.Z,{language:"console"},`git switch exercises/${n}`),a.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(l.Z,{value:"solution",label:"Solution"},a.createElement(s.Z,{language:"console"},`git switch solutions/${n}`),a.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(l.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",a.createElement(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},6221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(7833);const i={title:"Polymorphy02",description:""},s=void 0,o={unversionedId:"exercises/polymorphy/polymorphy02",id:"exercises/polymorphy/polymorphy02",title:"Polymorphy02",description:"",source:"@site/docs/exercises/polymorphy/polymorphy02.mdx",sourceDirName:"exercises/polymorphy",slug:"/exercises/polymorphy/polymorphy02",permalink:"/java-docs/preview-refs/pull/1/merge/exercises/polymorphy/polymorphy02",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/polymorphy/polymorphy02.mdx",tags:[],version:"current",frontMatter:{title:"Polymorphy02",description:""},sidebar:"exercisesSidebar",previous:{title:"Polymorphy01",permalink:"/java-docs/preview-refs/pull/1/merge/exercises/polymorphy/polymorphy01"},next:{title:"Polymorphy03",permalink:"/java-docs/preview-refs/pull/1/merge/exercises/polymorphy/polymorphy03"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse Rental",id:"hinweise-zur-klasse-rental",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Erstelle die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"Rental")," anhand des abgebildeten Klassendiagramms"),(0,r.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"polymorphy01"},"Polymorphy01")," so\nan, dass alle erzeugten Autos und Lastwagen in einer Fahrzeugvermietung\nabgelegt und alle Attribute der Fahrzeugvermietung ausgegeben werden")),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("mermaid",{value:"classDiagram\n    Vehicle <|-- Car\n    Vehicle <|-- Truck\n    Vehicle o-- Engine\n    Rental o-- Vehicle\n\n    class Vehicle {\n        -make String\n        -model String\n        -engine Engine\n        #speed double\n        -numberOfVehicles int$\n        +Vehicle(make String, model String, engine Engine)\n        +getMake() String\n        +getModel() String\n        +getEngine() Engine\n        +getSpeed() double\n        +accelerate(value int) void\n        +brake(value int) void\n        +print() void\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description String\n    }\n\n    class Car {\n        -seats int\n        +Car(make String, model String, engine Engine, seats int)\n        +getSeats() int\n        +doATurboBoost() void\n        +print() void\n    }\n\n    class Truck {\n        -cargo int\n        -isTransformed boolean\n        +Truck(make String, model String, engine Engine, cargo int)\n        +getCargo() int\n        +isTransformed() boolean\n        +transform() void\n        +print() void\n    }\n\n    class Rental {\n        -name String\n        -vehicles ArrayList~Vehicle~\n        +Rental(name String)\n        +addVehicle(vehicle Vehicle) void\n        +addAllVehicles(vehicles Vehicle...) void\n        +print() void\n    }"}),(0,r.kt)("h2",{id:"hinweise-zur-klasse-rental"},"Hinweise zur Klasse Rental"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Der Konstruktor soll alle Attribute initialisieren"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void addVehicle(vehicle: Vehicle)")," soll der Fahrzeugvermietung\nein Fahrzeug hinzuf\xfcgen"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void addAllVehicles(vehicles: Vehicle...)")," soll der\nFahrzeugvermietung mehrere Fahrzeug hinzuf\xfcgen"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void print()")," soll alle Attribute auf der Konsole ausgeben")),(0,r.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Fahrzeugvermietung M\xfcller\nUnsere Fahrzeuge:\nPorsche 911 (Elektro, 2 Sitzpl\xe4tze)\nMAN TGX (Diesel, 20t)\nOpel Zafira Life (Diesel, 7 Sitzpl\xe4tze)\n")),(0,r.kt)(l.Z,{pullRequest:"42",branchSuffix:"polymorphy/02",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);