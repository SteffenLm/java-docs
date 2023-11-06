"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3635],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),g=o,p=u["".concat(l,".").concat(g)]||u[g]||m[g]||r;return t?a.createElement(p,i(i({ref:n},c),{},{components:t})):a.createElement(p,i({ref:n},c))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6351:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(7462),o=(t(7294),t(3905));const r={title:"Fast Food",description:"",tags:["oo","enumerations","inheritance","polymorphy"]},i=void 0,s={unversionedId:"exam-exercises/exam-exercises-java1/fast-food",id:"exam-exercises/exam-exercises-java1/fast-food",title:"Fast Food",description:"",source:"@site/docs/exam-exercises/exam-exercises-java1/fast-food.md",sourceDirName:"exam-exercises/exam-exercises-java1",slug:"/exam-exercises/exam-exercises-java1/fast-food",permalink:"/java-docs/exam-exercises/exam-exercises-java1/fast-food",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/fast-food.md",tags:[{label:"oo",permalink:"/java-docs/tags/oo"},{label:"enumerations",permalink:"/java-docs/tags/enumerations"},{label:"inheritance",permalink:"/java-docs/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/tags/polymorphy"}],version:"current",frontMatter:{title:"Fast Food",description:"",tags:["oo","enumerations","inheritance","polymorphy"]},sidebar:"examExercisesSidebar",previous:{title:"W\xfcrfelspiele",permalink:"/java-docs/exam-exercises/exam-exercises-java1/dice-games"},next:{title:"Geschenkesack",permalink:"/java-docs/exam-exercises/exam-exercises-java1/gift-bag"}},l={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse FastFood",id:"hinweise-zur-klasse-fastfood",level:2},{value:"Hinweise zur Klasse FastFoodShop",id:"hinweise-zur-klasse-fastfoodshop",level:2}],c={toc:d},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."),(0,o.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,o.kt)("mermaid",{value:"classDiagram\n    Food o-- FoodCategory\n    Food <|-- FastFood\n    FastFood <|-- Burger\n    FastFoodShop o-- FastFood\n\n    class FoodCategory {\n        <<enumeration>>\n        BEVERAGES = Getr\xe4nke, 1\n        VEGETABLES = Gem\xfcse, 2\n        FRUITS = Obst, 2\n        GRAIN_PRODUCTS = Getreideprodukte, 3\n        POTATOES = Kartoffeln, 3\n        DAIRY_PRODUCTS = Milchprodukte, 4\n        MEAT = Fleisch, 4\n        FISH = Fisch, 4\n        EGGS = Eier, 4\n        FATS_AND_OILS = Fette und \xd6le, 5\n        SWEETS = S\xfc\xdfigkeiten, 6\n        -description String\n        -points int\n    }\n\n    class Food {\n        -name String\n        -foodCategory FoodCategory\n        -calorificValueInKcal double\n        +Food(name String, foodCategory FoodCategory, calorificValueInKcal double)\n    }\n\n    class FastFood {\n        -isVegetarian boolean\n        -ratings List~Integer~\n        +FastFood(name String, foodCategory FoodCategory, calorificValueInKcal double, isVegetarian boolean)\n        +addRating(rating int) void\n        +getAverageRating() double\n    }\n\n    class Burger {\n        +Burger(name String, calorificValueInKcal double, isVegetarian boolean)\n    }\n\n    class FastFoodShop {\n        -name String\n        -fastFood List~FastFood~\n        +FastFoodShop(name String)\n        +addFastFood(fastFood FastFood) void\n        +rateFastFood(fastFood FastFood, rating int) void\n        +getBestRatedBurger() Burger\n    }"}),(0,o.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"),(0,o.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden")),(0,o.kt)("h2",{id:"hinweise-zur-klasse-fastfood"},"Hinweise zur Klasse FastFood"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Die Methode ",(0,o.kt)("inlineCode",{parentName:"li"},"void addRating(rating: int)")," soll den Bewertungen (",(0,o.kt)("inlineCode",{parentName:"li"},"ratings"),") die\neingehende Bewertung hinzuf\xfcgen"),(0,o.kt)("li",{parentName:"ul"},"Die Methode ",(0,o.kt)("inlineCode",{parentName:"li"},"double getAverageRating()")," soll die durchschnittliche Bewertung\nzur\xfcckgeben")),(0,o.kt)("h2",{id:"hinweise-zur-klasse-fastfoodshop"},"Hinweise zur Klasse FastFoodShop"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Die Methode ",(0,o.kt)("inlineCode",{parentName:"li"},"void addFastFood(fastFood: FastFood)")," soll das eingehende Fast\nFood zum Sortiment hinzuf\xfcgen"),(0,o.kt)("li",{parentName:"ul"},"Die Methode ",(0,o.kt)("inlineCode",{parentName:"li"},"void rateFastFood(fastFood: FastFood, rating: int)")," soll dem\neingehenden Fast Food die eingehende Bewertung hinzuf\xfcgen"),(0,o.kt)("li",{parentName:"ul"},"Die Methode ",(0,o.kt)("inlineCode",{parentName:"li"},"Burger getBestRatedBurger()")," soll den Burger mit der h\xf6chsten\nBewertung zur\xfcckgeben")))}m.isMDXComponent=!0}}]);