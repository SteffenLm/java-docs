"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[4210],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(t),c=a,g=m["".concat(o,".").concat(c)]||m[c]||p[c]||i;return t?r.createElement(g,s(s({ref:n},u),{},{components:t})):r.createElement(g,s({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={title:"Felder (Arrays)",description:"",sidebar_position:110,tags:["arrays"]},s=void 0,l={unversionedId:"documentation/arrays",id:"documentation/arrays",title:"Felder (Arrays)",description:"",source:"@site/docs/documentation/arrays.md",sourceDirName:"documentation",slug:"/documentation/arrays",permalink:"/java-docs/pr-preview/pr-1/documentation/arrays",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/arrays.md",tags:[{label:"arrays",permalink:"/java-docs/pr-preview/pr-1/tags/arrays"}],version:"current",sidebarPosition:110,frontMatter:{title:"Felder (Arrays)",description:"",sidebar_position:110,tags:["arrays"]},sidebar:"documentationSidebar",previous:{title:"Schleifen",permalink:"/java-docs/pr-preview/pr-1/documentation/control-structures/loops"},next:{title:"Feldbasierte Listen (ArrayLists)",permalink:"/java-docs/pr-preview/pr-1/documentation/array-lists"}},o={},d=[{value:"Erzeugen von Feldern",id:"erzeugen-von-feldern",level:2},{value:"Zugriff auf Feldelemente",id:"zugriff-auf-feldelemente",level:2},{value:"Der Parameter <em>String[] args</em>",id:"der-parameter-string-args",level:2},{value:"Variable Arugmentlisten (VarArgs)",id:"variable-arugmentlisten-varargs",level:2}],u={toc:d},m="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wenn eine gro\xdfe Menge an Daten verarbeitet werden soll, kann man auf spezielle\nDatenstruktur-Variablen, sogenannte ",(0,a.kt)("em",{parentName:"p"},"Felder")," (Arrays), zur\xfcckgreifen. Die\neinzelnen Speicherpl\xe4tze in einem Feld werden als Elemente bezeichnet, die \xfcber\neinen Index angesprochen werden k\xf6nnen."),(0,a.kt)("mermaid",{value:"flowchart\n    subgraph names\n        a[Index: 0\\nWert: Hans] -.- b[Index: 1\\nWert: Peter]\n        b -.- c[Index: 2\\nWert: Lisa]\n        c -.- d[Index: 3\\nWert: Max]\n        d -.- e[Index: 4\\nWert: Heidi]\n    end"}),(0,a.kt)("h2",{id:"erzeugen-von-feldern"},"Erzeugen von Feldern"),(0,a.kt)("p",null,"Da es sich bei Feldern um Objekte handelt, m\xfcssen diese vor Verwendung erzeugt\nwerden. Bei der Erzeugung muss immer die L\xe4nge des Feldes (d.h. die Anzahl der\nElemente) angegeben werden. Jedes Feld verf\xfcgt \xfcber das Attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"length"),",\nwelches die L\xe4nge des Feldes enth\xe4lt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    int[] ids = new int[5];\n    System.out.println(Arrays.toString(ids));\n    int[] ids2 = {4, 8, 15, 16, 23, 42};\n    System.out.println(Arrays.toString(ids2));\n  }\n\n}\n")),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Felder werden zwar mit Hilfe des new-Operators erzeugt, besitzen aber keinen\nKonstruktor.")),(0,a.kt)("h2",{id:"zugriff-auf-feldelemente"},"Zugriff auf Feldelemente"),(0,a.kt)("p",null,"Der Zugriff auf die Elemente eines Feldes erfolgt \xfcber die Angabe des\nentsprechenden Index."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    int[] ids = {4, 8, 15, 16, 23, 42};\n\n    for (int i = 0; i < ids.length; i++) {\n      System.out.println(ids[i]);\n    }\n  }\n\n}\n")),(0,a.kt)("admonition",{title:"Hinweis",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Der Index beginnt bei Java bei 0.")),(0,a.kt)("h2",{id:"der-parameter-string-args"},"Der Parameter ",(0,a.kt)("em",{parentName:"h2"},"String[] args")),(0,a.kt)("p",null,"Der Parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"String[] args")," der main-Methode erm\xf6glicht es dem Anwender, der\nausf\xfchrbaren Klasse beim Aufruf Informationen mitzugeben."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    for (int i = 0; i < args.length; i++) {\n      System.out.println("args[" + i + "]: " + args[i]);\n    }\n  }\n\n}\n')),(0,a.kt)("h2",{id:"variable-arugmentlisten-varargs"},"Variable Arugmentlisten (VarArgs)"),(0,a.kt)("p",null,"Variable Argumentlisten (VarArgs) erm\xf6glichen die Definition von Methoden, denen\nbeliebig viele Werte eines Datentyps mitgegeben werden k\xf6nnen. Die\nParameterliste einer Methode kann allerdings nur eine variable Argumentliste\nbeinhalten und diese muss immer am Ende der Parameterliste stehen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    printAll("Peter", "Lisa");\n    printAll("Heidi", "Franz", "Fritz");\n  }\n\n  public static void printAll(String... texts) {\n    for (int i = 0; i < texts.length; i++) {\n      System.out.println(texts[i]);\n    }\n  }\n\n}\n')),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Technisch gesehen handelt es sich bei einer variablen Argumentliste um ein Feld.")))}p.isMDXComponent=!0}}]);