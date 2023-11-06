"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9202],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=r,b=m["".concat(o,".").concat(p)]||m[p]||d[p]||i;return t?a.createElement(b,s(s({ref:n},c),{},{components:t})):a.createElement(b,s({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7294),r=t(4334);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(7462),r=t(7294),i=t(4334),s=t(2466),l=t(6775),o=t(1980),u=t(7392),c=t(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??m(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=d(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[o,u]=b({queryString:t,groupId:a}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),h=(()=>{const e=o??m;return p({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var h=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:n,block:t,selectedValue:l,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==l&&(m(n),o(a))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:p,onClick:d},s,{className:(0,i.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":l===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function w(e){const n=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(f,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function y(e){const n=(0,h.Z)();return r.createElement(w,(0,a.Z)({key:String(n)},e))}},6863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var a=t(7462),r=(t(7294),t(3905)),i=t(4866),s=t(5162);const l={title:"Aufbau einer Java-Klasse",description:"",sidebar_position:20,tags:["class-structure"]},o=void 0,u={unversionedId:"documentation/class-structure",id:"documentation/class-structure",title:"Aufbau einer Java-Klasse",description:"",source:"@site/docs/documentation/class-structure.mdx",sourceDirName:"documentation",slug:"/documentation/class-structure",permalink:"/java-docs/pr-preview/pr-2/documentation/class-structure",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/class-structure.mdx",tags:[{label:"class-structure",permalink:"/java-docs/pr-preview/pr-2/tags/class-structure"}],version:"current",sidebarPosition:20,frontMatter:{title:"Aufbau einer Java-Klasse",description:"",sidebar_position:20,tags:["class-structure"]},sidebar:"documentationSidebar",previous:{title:"Softwaredesign",permalink:"/java-docs/pr-preview/pr-2/documentation/design"},next:{title:"Datentypen",permalink:"/java-docs/pr-preview/pr-2/documentation/data-types"}},c={},m=[{value:"Statische Methoden",id:"statische-methoden",level:2},{value:"Die main-Methode",id:"die-main-methode",level:2},{value:"Kommentare",id:"kommentare",level:2},{value:"Entwicklungspakete",id:"entwicklungspakete",level:2}],d={toc:m},p="wrapper";function b(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Klassen stellen den grundlegenden Rahmen f\xfcr Programme dar. Jede Klasse kann\nDaten (",(0,r.kt)("em",{parentName:"p"},"Attribute"),") und Routinen (",(0,r.kt)("em",{parentName:"p"},"Methoden"),") besitzen. Routinen bestehen dabei\naus Folgen von verzweigten und sich wiederholenden Anweisungen, wobei\nAnweisungen wohldefinierte Befehle darstellen, die der Interpreter zur Laufzeit\nausf\xfchrt. Anweisungen m\xfcssen in Java mit dem Semikolon abgeschlossen werden und\nk\xf6nnen zu Anweisungsbl\xf6cken zusammengefasst werden, die durch geschweifte\nKlammern umschlossen werden. Innerhalb eines Anweisungsblocks k\xf6nnen sich\nweitere Anweisungsbl\xf6cke befinden."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"class",label:"Klasse",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'// highlight-start\npublic class MainClass {\n\n  public static void main(String[] args) {\n    System.out.println("Winter is Coming");\n  }\n\n}\n// highlight-end\n'))),(0,r.kt)(s.Z,{value:"method",label:"Methode",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  // highlight-start\n  public static void main(String[] args) {\n    System.out.println("Winter is Coming");\n  }\n  // highlight-end\n\n}\n'))),(0,r.kt)(s.Z,{value:"statement",label:"Anweisung",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n  // highlight-start\n    System.out.println("Winter is Coming");\n  // highlight-end\n  }\n\n}\n')))),(0,r.kt)("h2",{id:"statische-methoden"},"Statische Methoden"),(0,r.kt)("p",null,"Statische Methoden sind abgeschlossene Programmteile, die Parameter enthalten\nund einen Wert zur\xfcckgeben k\xf6nnen. Sie m\xfcssen mit dem Schl\xfcsselwort ",(0,r.kt)("inlineCode",{parentName:"p"},"static"),"\ngekennzeichnet werden. Bei statischen Methoden, die einen Wert zur\xfcckgeben, muss\nder Datentyp des R\xfcckgabewertes angegeben werden; bei statische Methoden, die\nkeinen Wert zur\xfcckgeben, das Schl\xfcsselwort ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),". Der Aufruf einer statischen\nMethode erfolgt \xfcber den Klassennamen gefolgt von einem Punkt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    MainClass.printStarkMotto();\n    MainClass.printText("Winter is Coming");\n  }\n\n  public static void printStarkMotto() {\n    System.out.println("Winter is Coming");\n  }\n\n  public static void printText(String text) {\n    System.out.println(text);\n  }\n\n}\n')),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Die statischen Methoden einer Startklasse werden auch als ",(0,r.kt)("em",{parentName:"p"},"Unterprogramme"),"\nbezeichnet.")),(0,r.kt)("h2",{id:"die-main-methode"},"Die main-Methode"),(0,r.kt)("p",null,"Die Methode ",(0,r.kt)("inlineCode",{parentName:"p"},"void main(args: String[])")," ist eine spezielle Methode in Java und\nstellt Startpunkt sowie Endpunkt einer Anwendung bzw. eines Programms dar. Nur\nKlassen mit einer main-Methode k\xf6nnen von der Laufzeitumgebung ausgef\xfchrt\nwerden. Aus diesem Grund werden Klassen mit einer main-Methode auch als\n",(0,r.kt)("em",{parentName:"p"},"ausf\xfchrbare Klassen")," oder als ",(0,r.kt)("em",{parentName:"p"},"Startklassen")," bezeichnet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    System.out.println("Winter is Coming");\n  }\n\n}\n')),(0,r.kt)("h2",{id:"kommentare"},"Kommentare"),(0,r.kt)("p",null,"Kommentare sollen die Lesbarkeit des Programms verbessern. Sie bewirken bei der\nAusf\xfchrung keine Aktion und werden vom Java-Compiler ignoriert. Java kennt\neinzeilige Kommentare mit ",(0,r.kt)("inlineCode",{parentName:"p"},"//"),", Kommentarbl\xf6cke mit ",(0,r.kt)("inlineCode",{parentName:"p"},"/* */")," und\nDokumentationskommentare mit ",(0,r.kt)("inlineCode",{parentName:"p"},"/** */"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'/**\n * Beschreibung der Klasse\n *\n * @author Autor der Klasse\n * @version Version\n *\n */\npublic class MainClass {\n\n  /**\n   * Beschreibung der Methode\n   *\n   * @param args Beschreibung der Parameter\n   */\n  public static void main(String[] args) {\n    /* Kommentarblock */\n    System.out.println("Winter is Coming"); // Kommentar\n  }\n\n}\n')),(0,r.kt)("h2",{id:"entwicklungspakete"},"Entwicklungspakete"),(0,r.kt)("p",null,"Entwicklungspakete erm\xf6glichen das hierarchische Strukturieren von Klassen. Um\ndie Klassen eines Entwicklungspaketes verwenden zu k\xf6nnen, m\xfcssen die jeweiligen\nKlassen explizit mit Hilfe des Schl\xfcsselworts ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," importiert werden."),(0,r.kt)("mermaid",{value:"flowchart\n    java(java) --\x3e lang(lang)\n    java --\x3e util(util)\n    java --\x3e time(time)\n    lang --\x3e object[Object]\n    lang --\x3e system[System]\n    util --\x3e arraylist[ArrayList]\n    util --\x3e scanner[Scanner]\n    time --\x3e localdate(LocalDate)\n    time --\x3e localtime(LocalTime)"}),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Die Klassen des Entwicklungspaketes ",(0,r.kt)("inlineCode",{parentName:"p"},"java.lang")," m\xfcssen nicht importiert werden.")))}b.isMDXComponent=!0}}]);