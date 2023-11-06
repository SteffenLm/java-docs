"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Raumstation",description:"",tags:["exceptions","records","maps","optionals"]},s=void 0,l={unversionedId:"exam-exercises/exam-exercises-java2/space-station",id:"exam-exercises/exam-exercises-java2/space-station",title:"Raumstation",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/space-station.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/space-station",permalink:"/java-docs/pr-preview/pr-1/exam-exercises/exam-exercises-java2/space-station",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/space-station.md",tags:[{label:"exceptions",permalink:"/java-docs/pr-preview/pr-1/tags/exceptions"},{label:"records",permalink:"/java-docs/pr-preview/pr-1/tags/records"},{label:"maps",permalink:"/java-docs/pr-preview/pr-1/tags/maps"},{label:"optionals",permalink:"/java-docs/pr-preview/pr-1/tags/optionals"}],version:"current",frontMatter:{title:"Raumstation",description:"",tags:["exceptions","records","maps","optionals"]},sidebar:"examExercisesSidebar",previous:{title:"Einkaufsportal",permalink:"/java-docs/pr-preview/pr-1/exam-exercises/exam-exercises-java2/shopping-portal"},next:{title:"Videosammlung",permalink:"/java-docs/pr-preview/pr-1/exam-exercises/exam-exercises-java2/video-collection"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse SpaceStation",id:"hinweise-zur-klasse-spacestation",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("mermaid",{value:"classDiagram\n    SpaceStation o-- SpaceFighter\n    SpaceFighter o-- Type\n\n    class SpaceStation {\n        <<record>>\n        -name String\n        -bays Map~Integer&#44&#160SpaceFighter~\n        +land(bayNumber Integer, spaceFighter SpaceFighter) void\n        +getFastestSpaceFighter() Optional~SpaceFighter~\n    }\n\n    class SpaceFighter {\n        <<record>>\n        -id String\n        -type Type\n    }\n\n    class Type {\n        <<enumeration>>\n        A_WING = 1300\n        B_WING = 950\n        X_WING = 1050\n        Y_WING = 1000\n        TIE_FIGHTER = 1200\n        -maxSpeedInKmh int\n    }"}),(0,r.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"),(0,r.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden")),(0,r.kt)("h2",{id:"hinweise-zur-klasse-spacestation"},"Hinweise zur Klasse SpaceStation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void land(bayNumber: Integer, spaceFighter: SpaceFighter)")," soll\nden eingehenden Sternenj\xe4ger in der Bucht mit der eingehenden Buchtnummer\nlanden lassen. F\xfcr den Fall, dass der eingehende Sternenj\xe4ger bereits gelandet\nist (also bereits eine Bucht belegt), soll die Ausnahme\n",(0,r.kt)("inlineCode",{parentName:"li"},"SpaceFighterAlreadyLandedException")," ausgel\xf6st werden und f\xfcr den Fall, dass\ndie Bucht bereits belegt ist, die Ausnahme ",(0,r.kt)("inlineCode",{parentName:"li"},"BayAlreadyLoadedException")),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional<SpaceFighter> getFastestSpaceFighter()")," soll den\nschnellsten Sternenj\xe4ger der Raumstation als Optional zur\xfcckgeben")))}m.isMDXComponent=!0}}]);