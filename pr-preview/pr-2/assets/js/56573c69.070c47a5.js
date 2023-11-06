"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5822],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),g=r,p=c["".concat(o,".").concat(g)]||c[g]||m[g]||i;return t?a.createElement(p,l(l({ref:n},d),{},{components:t})):a.createElement(p,l({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(4334);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7462),r=t(7294),i=t(4334),l=t(2466),s=t(6775),o=t(1980),u=t(7392),d=t(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=m(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[o,u]=p({queryString:t,groupId:a}),[c,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),h=(()=>{const e=o??c;return g({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var h=t(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const n=e.currentTarget,t=d.indexOf(n),a=u[t].value;a!==s&&(c(n),o(a))},g=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>d.push(e),onKeyDown:g,onClick:m},l,{className:(0,i.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===n})}),t??n)})))}function f(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function y(e){const n=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(v,(0,a.Z)({},e,n)),r.createElement(f,(0,a.Z)({},e,n)))}function w(e){const n=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(n)},e))}},5996:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=t(7462),r=(t(7294),t(3905)),i=t(4866),l=t(5162);const s={title:"Klassendiagramme",description:"",sidebar_position:10,tags:["uml","class-diagrams"]},o=void 0,u={unversionedId:"documentation/uml/class-diagrams",id:"documentation/uml/class-diagrams",title:"Klassendiagramme",description:"",source:"@site/docs/documentation/uml/class-diagrams.mdx",sourceDirName:"documentation/uml",slug:"/documentation/uml/class-diagrams",permalink:"/java-docs/pr-preview/pr-2/documentation/uml/class-diagrams",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/uml/class-diagrams.mdx",tags:[{label:"uml",permalink:"/java-docs/pr-preview/pr-2/tags/uml"},{label:"class-diagrams",permalink:"/java-docs/pr-preview/pr-2/tags/class-diagrams"}],version:"current",sidebarPosition:10,frontMatter:{title:"Klassendiagramme",description:"",sidebar_position:10,tags:["uml","class-diagrams"]},sidebar:"documentationSidebar",previous:{title:"Darstellung von Klassen und Programmabl\xe4ufen",permalink:"/java-docs/pr-preview/pr-2/documentation/uml/"},next:{title:"Aktivit\xe4tsdiagramme",permalink:"/java-docs/pr-preview/pr-2/documentation/uml/activity-diagrams"}},d={},c=[{value:"Darstellung von Klassen",id:"darstellung-von-klassen",level:2},{value:"Darstellung spezieller Klassen",id:"darstellung-spezieller-klassen",level:2},{value:"Darstellung von Assoziationen",id:"darstellung-von-assoziationen",level:2},{value:"Darstellung von Vererbungs-und Realisierungs-Beziehungen",id:"darstellung-von-vererbungs-und-realisierungs-beziehungen",level:2},{value:"Darstellung von Multiplizit\xe4ten",id:"darstellung-von-multiplizit\xe4ten",level:2}],m={toc:c},g="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Klassendiagramme sind ein Diagrammtyp der UML und geh\xf6ren dort zum Bereich der\nStrukturdiagramme. Das Klassendiagramm dient zur leicht lesbaren Dokumentation\ndes Aufbaus von Klassen und deren Beziehungen (Relationen). Klassendiagramme\nk\xf6nnen Informationen zu den Attributen, den Methoden und weiteren\nKlassen-Bestandteilen enthalten."),(0,r.kt)("h2",{id:"darstellung-von-klassen"},"Darstellung von Klassen"),(0,r.kt)("p",null,"Klassen werden im Klassendiagramm als Rechteck mit verschiedenen Bereichen\n(Klassenname, Attribute, Methoden und weitere Klassen-Bestandteile) dargestellt:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Der Klassenname wird zentriert, fett gedruckt und mit einem Gro\xdfbuchstaben\nbeginnend dargestellt"),(0,r.kt)("li",{parentName:"ul"},"Attribute werden nach dem Muster ",(0,r.kt)("em",{parentName:"li"},"[Sichtbarkeit]")," ",(0,r.kt)("em",{parentName:"li"},"[Attributname][Datentyp]"," =\n","[Anfangswert]")," dargestellt"),(0,r.kt)("li",{parentName:"ul"},"Methoden nach dem Muster ",(0,r.kt)("em",{parentName:"li"},"[Sichtbarkeit]")," ",(0,r.kt)("em",{parentName:"li"},"[Methoden-Signatur]",": ","[Datentyp des\nR\xfcckgabewertes]")," dargestellt"),(0,r.kt)("li",{parentName:"ul"},"Die Sichtbarkeit von Attributen und Methoden wird durch (farbige) Symbole\ndargestellt:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Die Sichtbarkeit ",(0,r.kt)("inlineCode",{parentName:"li"},"public")," wird durch das Symbol ",(0,r.kt)("strong",{parentName:"li"},"+")," bzw. die Farbe\n",(0,r.kt)("strong",{parentName:"li"},"gr\xfcn")," dargestellt"),(0,r.kt)("li",{parentName:"ul"},"Die Sichtbarkeit ",(0,r.kt)("inlineCode",{parentName:"li"},"protected")," wird durch das Symbol ",(0,r.kt)("strong",{parentName:"li"},"#")," bzw. die Farbe\n",(0,r.kt)("strong",{parentName:"li"},"gelb")," dargestellt"),(0,r.kt)("li",{parentName:"ul"},"Die Sichtbarkeit ",(0,r.kt)("inlineCode",{parentName:"li"},"packaged")," wird durch das Symbol ",(0,r.kt)("strong",{parentName:"li"},"~")," bzw. die Farbe\n",(0,r.kt)("strong",{parentName:"li"},"blau")," dargestellt"),(0,r.kt)("li",{parentName:"ul"},"Die Sichtbarkeit ",(0,r.kt)("inlineCode",{parentName:"li"},"private")," wird durch das Symbol ",(0,r.kt)("strong",{parentName:"li"},"-")," bzw. die Farbe\n",(0,r.kt)("strong",{parentName:"li"},"rot")," dargestellt"))),(0,r.kt)("li",{parentName:"ul"},"Statische Attribute und Methoden werden durch Unterstriche kenntlich gemacht"),(0,r.kt)("li",{parentName:"ul"},"Abstrakte Methoden werden kursiv dargestellt")),(0,r.kt)("mermaid",{value:"classDiagram\n    class Person {\n        -name String\n        -age int\n        -gender char\n        -numberOfPersons int$\n        +Person(name String, age int, gender char)\n        +name() String\n        +age() int\n        +gender() char\n        +numberOfPersons()$ int\n    }"}),(0,r.kt)("h2",{id:"darstellung-spezieller-klassen"},"Darstellung spezieller Klassen"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"enumerations",label:"Aufz\xe4hlungen",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Aufz\xe4hlungen werden im Klassendiagramm durch den Stereotypen ",(0,r.kt)("inlineCode",{parentName:"p"},"enumeration"),"\nkenntlich gemacht. Die Aufz\xe4hlungskonstanten werden in einem zus\xe4tzlichen\nBereich aufgef\xfchrt. Der Stereotyp impliziert, dass die Aufz\xe4hlung einen privaten\nKonstruktor sowie ggbfs. passende Setter und Getter besitzt."),(0,r.kt)("mermaid",{value:"classDiagram\n    class WeekDay {\n        <<enumeration>>\n        MONDAY = Monday\n        TUESDAY = Tuesday\n        WEDNESDAY = Wednesday\n        THURSDAY = Thursday\n        FRIDAY = Friday\n        SATURDAY = Saturday\n       SUNDAY = Sunday\n        -description String\n    }"})),(0,r.kt)(l.Z,{value:"interfaces",label:"Schnittstellen",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Schnittstellen werden im Klassendiagramm durch den Stereotypen ",(0,r.kt)("inlineCode",{parentName:"p"},"interface"),"\nkenntlich gemacht. Dieser impliziert, dass alle Methoden der Schnittstelle\nabstrakt sind."),(0,r.kt)("mermaid",{value:"classDiagram\n    class Comparable~T~ {\n        <<interface>>\n        +compareTo(o T) int\n    }"})),(0,r.kt)(l.Z,{value:"records",label:"Datenklassen",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Datenklassen werden im Klassendiagramm durch den Stereotypen ",(0,r.kt)("inlineCode",{parentName:"p"},"record")," kenntlich\ngemacht. Dieser impliziert, dass die Datenklasse einen entsprechenden\nKonstruktor, Getter zu allen Attributen sowie entsprechende Implementierungen\nf\xfcr die Object-Methoden besitzt."),(0,r.kt)("mermaid",{value:"classDiagram\n    class Person {\n        <<record>>\n        -name String\n        -age int\n        -gender char\n    }"})),(0,r.kt)(l.Z,{value:"generics",label:"Generische Klassen",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Die formalen Typparameter einer generischen Klassen werden in einem zus\xe4tzlichen\nRechteck dargestellt."),(0,r.kt)("mermaid",{value:"classDiagram\n    class Box~T~ {\n        -content T\n        +setContent(content T) void\n        +getContent() T\n    }"}))),(0,r.kt)("h2",{id:"darstellung-von-assoziationen"},"Darstellung von Assoziationen"),(0,r.kt)("p",null,"Assoziationen stellen allgemeine Relationen zwischen zwei Klassen dar, bei der\neine Klasse eine andere Klasse verwendet. Assoziationen k\xf6nnen in eine Richtung\n(unidirektional) und in beide Richtungen (bidirektional) vorliegen."),(0,r.kt)("p",null,"Aggregationen und Kompositionen stellen spezielle Formen von Assoziationen dar,\nbei denen ein Objekt der einen Klasse Teil einer anderen Klasse ist. Im\nGegensatz zu Aggregationen h\xe4ngen bei Kompositionen die Teile von der Existenz\ndes Ganzen ab. Aggregationen werden daher auch als ist-Teil-von-Relationen,\nKompositionen als existenzabh\xe4ngige ist-Teil-von-Relationen bezeichnet."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"associations",label:"Assoziationen",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Assoziationen werden mit einem offenen Pfeil hin zur verwendeten Klasse\ndargestellt."),(0,r.kt)("mermaid",{value:"classDiagram\n    Persons --\x3e Person\n    class Persons {\n        +getPersons() List~Person~\n    }"})),(0,r.kt)(l.Z,{value:"aggregations",label:"Aggregationen",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Aggregationen werden mit einer nicht ausgef\xfcllten Raute hin zur besitzenden\nKlasse dargestellt."),(0,r.kt)("mermaid",{value:"classDiagram\n    Person --o Team\n    class Team {\n        +members List~Person~\n    }"})),(0,r.kt)(l.Z,{value:"compositions",label:"Kompositionen",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Kompositionen werden mit einer ausgef\xfcllten Raute hin zur besitzenden Klasse\ndargestellt."),(0,r.kt)("mermaid",{value:"classDiagram\n    OrderItem --* Order\n    class Order {\n        +items List~OrderItem~\n    }"}))),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Assoziationen k\xf6nnen gerichtet und ungerichtet dargestellt werden.")),(0,r.kt)("h2",{id:"darstellung-von-vererbungs-und-realisierungs-beziehungen"},"Darstellung von Vererbungs-und Realisierungs-Beziehungen"),(0,r.kt)("p",null,"Vererbungs-Beziehungen werden mit einem geschlossenen Pfeil hin zur Oberklasse\nsowie einer durchgezogenen Linie dargestellt, Realisierungs-Beziehungen mit\neinem geschlossenen Pfeil hin zur Schnittstelle sowie einer gestrichelten Linie."),(0,r.kt)("mermaid",{value:"classDiagram\n    Person <|-- Student\n    Person <|-- Lecturer\n    Comparable~T~ <|.. Person\n    Serializable <|.. Person"}),(0,r.kt)("h2",{id:"darstellung-von-multiplizit\xe4ten"},"Darstellung von Multiplizit\xe4ten"),(0,r.kt)("p",null,"Die Multiplizit\xe4t einer Beziehung legt fest, mit wie vielen Objekten der\ngegen\xfcberliegenden Klasse ein Objekt in Beziehung stehen kann. Die Multiplizit\xe4t\nwird als Intervall aus nicht-negativen ganzen Zahlen dargestellt und wird in der\nForm ",(0,r.kt)("em",{parentName:"p"},"[untere Schranke]","..","[obere Schranke]")," angegeben. Besitzen beide Schranken\nden gleichen Wert, muss nur eine der beiden Schranken angegeben werden. Eine\nnach oben unbeschr\xe4nkte Schranke wird mit ",(0,r.kt)("strong",{parentName:"p"},"*")," angegeben."),(0,r.kt)("mermaid",{value:'classDiagram\n    Student "0..*" -- "1..1" Course'}))}p.isMDXComponent=!0}}]);