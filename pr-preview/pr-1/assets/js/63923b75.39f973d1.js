"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2408],{3905:(e,n,i)=>{i.d(n,{Zo:()=>m,kt:()=>h});var r=i(7294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var l=r.createContext({}),d=function(e){var n=r.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},m=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var i=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(i),p=t,h=u["".concat(l,".").concat(p)]||u[p]||c[p]||a;return i?r.createElement(h,s(s({ref:n},m),{},{components:i})):r.createElement(h,s({ref:n},m))}));function h(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=i.length,s=new Array(a);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:t,s[1]=o;for(var d=2;d<a;d++)s[d]=i[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},9661:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=i(7462),t=(i(7294),i(3905));const a={title:"Kassensystem",description:"",tags:["oo","enumerations","inheritance","polymorphy"]},s=void 0,o={unversionedId:"exam-exercises/exam-exercises-java1/cashier-system",id:"exam-exercises/exam-exercises-java1/cashier-system",title:"Kassensystem",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/cashier-system.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/cashier-system",permalink:"/java-docs/preview-refs/pull/1/merge/exam-exercises/exam-exercises-java1/cashier-system",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/cashier-system.md",tags:[{label:"oo",permalink:"/java-docs/preview-refs/pull/1/merge/tags/oo"},{label:"enumerations",permalink:"/java-docs/preview-refs/pull/1/merge/tags/enumerations"},{label:"inheritance",permalink:"/java-docs/preview-refs/pull/1/merge/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/preview-refs/pull/1/merge/tags/polymorphy"}],version:"current",frontMatter:{title:"Kassensystem",description:"",tags:["oo","enumerations","inheritance","polymorphy"]},sidebar:"examExercisesSidebar",previous:{title:"Kartenausteiler",permalink:"/java-docs/preview-refs/pull/1/merge/exam-exercises/exam-exercises-java1/cards-dealer"},next:{title:"Weihnachtsbaum",permalink:"/java-docs/preview-refs/pull/1/merge/exam-exercises/exam-exercises-java1/christmas-tree"}},l={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse Item",id:"hinweis-zur-klasse-item",level:2},{value:"Hinweise zur Klasse ShoppingCart",id:"hinweise-zur-klasse-shoppingcart",level:2},{value:"Hinweise zur Klasse CashierSystem",id:"hinweise-zur-klasse-cashiersystem",level:2}],m={toc:d},u="wrapper";function c(e){let{components:n,...i}=e;return(0,t.kt)(u,(0,r.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."),(0,t.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,t.kt)("mermaid",{value:"classDiagram\n    Product <|-- Goods\n    Item o-- Goods\n    ShoppingCart o-- Item\n    Goods o-- ClassOfGoods\n    CashierSystem o-- Goods\n    CashierSystem o-- Cashier\n    CashierSystem o-- ShoppingCart\n\n    class Product {\n        -id int\n        -description String\n        -unit String\n        -priceInEuro double\n        +Product(id int, description String, unit String, priceInEuro double)\n        +setPriceInEuro(priceInEuro double) void\n    }\n\n    class Goods {\n        -classOfGoods ClassOfGoods\n        +Goods(id int, description String, unit String, priceInEuro double, classOfGoods ClassOfGoods)\n    }\n\n    class Item {\n        -goods Goods\n        -amount int\n        +Item(goods Goods, amount int)\n        +setAmount(amount int) void\n        +getSubTotalInEuro() double\n    }\n\n    class ShoppingCart {\n        -items List~Item~\n        +ShoppingCart()\n        +createItem(goods Goods, amount int) void\n        +getTotalInEuro() double\n    }\n\n    class ClassOfGoods {\n        BAKERY_PRODUCTS = Backwaren\n        DAIRY_PRODUCTS = Milchprodukte\n        FRUITS = Obst\n        VEGETABLES = Gem\xfcse\n        -description String\n    }\n\n    class CashierSystem {\n        -name String\n        -goods List~Goods~\n        -cashiers List~Cashier~\n        -shoppingCart ShoppingCart\n        -cashier Cashier\n        +CashierSystem(name String)\n        +addGoods(goods Goods) void\n        +addCashier(cahier Cashier) void\n        +login(id int) void\n        +createShoppingCart() void\n        +addItem(id int, amount int) void\n        +printBon() void\n    }\n\n    class Cashier {\n        -id int\n        -name String\n        +Cashier(name String, id int)\n    }"}),(0,t.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"),(0,t.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden")),(0,t.kt)("h2",{id:"hinweis-zur-klasse-item"},"Hinweis zur Klasse Item"),(0,t.kt)("p",null,"Die Methode ",(0,t.kt)("inlineCode",{parentName:"p"},"double getSubTotalInEuro()")," soll die Zwischensumme gem\xe4\xdf der Formel\n",(0,t.kt)("em",{parentName:"p"},"Anzahl ","*"," Preis")," zur\xfcckgeben"),(0,t.kt)("h2",{id:"hinweise-zur-klasse-shoppingcart"},"Hinweise zur Klasse ShoppingCart"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void createItem(goods: Goods, amount: int)")," soll den Eintr\xe4gen\ndes Warenkorbs (",(0,t.kt)("inlineCode",{parentName:"li"},"items"),") die eingehende Ware und die eingehende Anzahl als\nEintrag hinzuf\xfcgen"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"double getTotalInEuro()")," soll die Gesamtsumme zur\xfcckgeben")),(0,t.kt)("h2",{id:"hinweise-zur-klasse-cashiersystem"},"Hinweise zur Klasse CashierSystem"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void addGoods(goods: Goods)")," soll der Warenliste (",(0,t.kt)("inlineCode",{parentName:"li"},"goods"),") die\neingehende Ware hinzuf\xfcgen"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void addCashier(cashier: Cashier)")," soll der Kassiererliste\n(",(0,t.kt)("inlineCode",{parentName:"li"},"cashiers"),") den eingehenden Kassierer hinzuf\xfcgen"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void login(id: int)"),' soll den Kassierer zur eingehenden\nKassierernummer an der Kasse "registrieren"'),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void createShoppingCart()")," soll an der Kasse einen neuen\nWarenkorb erstellen"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void addItem(id: int, amount: int)")," soll dem Warenkorb\n(",(0,t.kt)("inlineCode",{parentName:"li"},"shoppingCart"),") anhand der eingehenden Produktnummer und anhand der\neingehenden Anzahl einen neuen Warenkorbeintrag hinzuf\xfcgen"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void printBon()")," soll alle relevanten Informationen zum Warenkorb\nauf der Konsole ausgeben")))}c.isMDXComponent=!0}}]);