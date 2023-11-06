"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Aktivit\xe4tsdiagramme",description:"",sidebar_position:20,tags:["uml","activity-diagrams"]},o=void 0,l={unversionedId:"documentation/uml/activity-diagrams",id:"documentation/uml/activity-diagrams",title:"Aktivit\xe4tsdiagramme",description:"",source:"@site/docs/documentation/uml/activity-diagrams.md",sourceDirName:"documentation/uml",slug:"/documentation/uml/activity-diagrams",permalink:"/java-docs/pr-preview/pr-2/documentation/uml/activity-diagrams",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/uml/activity-diagrams.md",tags:[{label:"uml",permalink:"/java-docs/pr-preview/pr-2/tags/uml"},{label:"activity-diagrams",permalink:"/java-docs/pr-preview/pr-2/tags/activity-diagrams"}],version:"current",sidebarPosition:20,frontMatter:{title:"Aktivit\xe4tsdiagramme",description:"",sidebar_position:20,tags:["uml","activity-diagrams"]},sidebar:"documentationSidebar",previous:{title:"Klassendiagramme",permalink:"/java-docs/pr-preview/pr-2/documentation/uml/class-diagrams"},next:{title:"Vererbung",permalink:"/java-docs/pr-preview/pr-2/documentation/inheritance"}},u={},s=[],c={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aktivit\xe4tsdiagramme sind ein Diagrammtyp der UML und geh\xf6ren dort zum Bereich\nder Verhaltensdiagramme. Der Fokus von Aktivit\xe4tsdiagrammen liegt auf\nimperativen Verarbeitungsaspekten. Eine Aktivit\xe4t stellt einen gerichteten\nGraphen dar, der \xfcber Knoten (Aktionen, Datenknoten und Kontrollknoten) und\nKanten (Kontrollfl\xfcsse und Datenfl\xfcsse) verf\xfcgt:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aktionen sind elementare Bausteine f\xfcr beliebiges, benutzerdefiniertes\nVerhalten"),(0,a.kt)("li",{parentName:"ul"},"Kontrollknoten steuern den Kontroll- und Datenfluss in einer Aktivit\xe4t:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Startknoten: legen den Beginn der Aktivit\xe4t fest"),(0,a.kt)("li",{parentName:"ul"},"Endknoten: legen das Ende der Aktivit\xe4t fest"),(0,a.kt)("li",{parentName:"ul"},"Ablaufendknoten: legen das Ende eines Ablaufes fest"),(0,a.kt)("li",{parentName:"ul"},"Verzweigungsknoten: erm\xf6glichen die Verzweigung von Abl\xe4ufen"),(0,a.kt)("li",{parentName:"ul"},"Zusammenf\xfchrungsknoten: erm\xf6glichen die Zusammenf\xfchrung von Abl\xe4ufen"))),(0,a.kt)("li",{parentName:"ul"},"Datenknoten sind Hilfsknoten, die als ein- oder ausgehende Parameter einer\nAktion verwendet werden k\xf6nnen"),(0,a.kt)("li",{parentName:"ul"},"Kontroll- und Datenfl\xfcsse legen Abl\xe4ufe zwischen Vorg\xe4nger- und\nNachfolger-Knoten fest")),(0,a.kt)("mermaid",{value:'stateDiagram-v2\n    state "Eingabe: 1. Zahl" as input1\n    state "Eingabe: 2. Zahl" as input2\n    state "Ausgabe: 1. Zahl eingeben" as output1\n    state "Ausgabe: 2. Zahl eingeben" as output2\n    state "R\xfcckgabe: 1. Zahl : 2. Zahl" as activity1\n    state if <<choice>>\n    [*] --\x3e output1\n    output1 --\x3e input1\n    input1 --\x3e output2\n    output2 --\x3e input2\n    input2 --\x3e if\n    if --\x3e output2 : 2. Zahl ist gleich 0\n    if --\x3e activity1: 2. Zahl ist ungleich 0\n    activity1 --\x3e [*]'}))}p.isMDXComponent=!0}}]);