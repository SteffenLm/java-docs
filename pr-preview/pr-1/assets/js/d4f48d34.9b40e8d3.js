"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5530],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>g});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),c=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),u=t,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return r?a.createElement(g,s(s({ref:n},d),{},{components:r})):a.createElement(g,s({ref:n},d))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:t,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1714:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),t=(r(7294),r(3905));const o={title:"Tante-Emma-Laden",description:"",tags:["inheritance","polymorphy","interfaces","comparators","exceptions","records","maps"]},s=void 0,i={unversionedId:"exam-exercises/exam-exercises-java2/corner-shop",id:"exam-exercises/exam-exercises-java2/corner-shop",title:"Tante-Emma-Laden",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/corner-shop.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/corner-shop",permalink:"/java-docs/preview-refs/pull/1/merge/exam-exercises/exam-exercises-java2/corner-shop",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/corner-shop.md",tags:[{label:"inheritance",permalink:"/java-docs/preview-refs/pull/1/merge/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/preview-refs/pull/1/merge/tags/polymorphy"},{label:"interfaces",permalink:"/java-docs/preview-refs/pull/1/merge/tags/interfaces"},{label:"comparators",permalink:"/java-docs/preview-refs/pull/1/merge/tags/comparators"},{label:"exceptions",permalink:"/java-docs/preview-refs/pull/1/merge/tags/exceptions"},{label:"records",permalink:"/java-docs/preview-refs/pull/1/merge/tags/records"},{label:"maps",permalink:"/java-docs/preview-refs/pull/1/merge/tags/maps"}],version:"current",frontMatter:{title:"Tante-Emma-Laden",description:"",tags:["inheritance","polymorphy","interfaces","comparators","exceptions","records","maps"]},sidebar:"examExercisesSidebar",previous:{title:"Programmierung 2",permalink:"/java-docs/preview-refs/pull/1/merge/exam-exercises/exam-exercises-java2/"},next:{title:"W\xf6rterbuch",permalink:"/java-docs/preview-refs/pull/1/merge/exam-exercises/exam-exercises-java2/dictionary"}},l={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse Goods",id:"hinweis-zur-klasse-goods",level:2},{value:"Hinweise zur Klasse CornerShop",id:"hinweise-zur-klasse-cornershop",level:2}],d={toc:c},p="wrapper";function m(e){let{components:n,...r}=e;return(0,t.kt)(p,(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."),(0,t.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,t.kt)("mermaid",{value:"classDiagram\n    Product <|-- Goods\n    CornerShop o-- Goods\n    Comparable~Goods~ <|.. Goods\n    Goods o-- ClassOfGoods\n\n    class Product {\n        <<abstract>>\n        -description String\n        -price double\n        -currency String\n        +Product(description String, price double, currency String)\n    }\n\n    class Goods {\n        -classOfGoods ClassOfGoods\n        -unit String\n        +Goods(description String, price double, currency String, classOfGoods ClassOfGoods, unit String)\n        +compareTo(other Goods) int\n    }\n\n    class Comparable~Goods~ {\n        <<interface>>\n        +compareTo(o Goods) int\n    }\n\n    class CornerShop {\n        <<record>>\n        -name String\n        -store Map~Goods&#44&#160Integer~\n        +getAmountByDescription(description String) Optional~Integer~\n        +buyGoods(goods Goods, amount int) void\n        +sellGoods(goods Goods, amount int) void\n    }\n\n    class ClassOfGoods {\n        <<enumeration>>\n        BAKERY_PRODUCTS = Backwaren\n        DAIRY_PRODUCTS = Milchprodukte\n        FRUITS = Obst\n        VEGETABLES = Gem\xfcse\n        -description String\n    }"}),(0,t.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"),(0,t.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden")),(0,t.kt)("h2",{id:"hinweis-zur-klasse-goods"},"Hinweis zur Klasse Goods"),(0,t.kt)("p",null,"Die Methode ",(0,t.kt)("inlineCode",{parentName:"p"},"int compareTo(other: Goods)")," soll so implementiert werden, dass\ndamit Waren aufsteigend nach ihrer Beschreibung sortiert werden k\xf6nnen."),(0,t.kt)("h2",{id:"hinweise-zur-klasse-cornershop"},"Hinweise zur Klasse CornerShop"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"Optional<Integer> getAmountByDescription(description: String)"),"\nsoll die Anzahl Waren zur eingehenden Warenbeschreibung als Optional\nzur\xfcckgeben"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void buyGoods(goods: Goods, amount: int)")," soll die eingehende\nWare im Lager (",(0,t.kt)("inlineCode",{parentName:"li"},"store"),") um die eingehende Anzahl erh\xf6hen"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void sellGoods(goods: Goods, amount: int)")," soll die eingehende\nWare im Lager (",(0,t.kt)("inlineCode",{parentName:"li"},"store"),") um die eingehende Anzahl reduzieren. F\xfcr den Fall,\ndass keine ausreichende Anzahl an Waren vorhanden ist, soll die Ausnahme\n",(0,t.kt)("inlineCode",{parentName:"li"},"OutOfStockException")," ausgel\xf6st werden")))}m.isMDXComponent=!0}}]);