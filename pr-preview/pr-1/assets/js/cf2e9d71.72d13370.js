"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8635],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return t?a.createElement(b,s(s({ref:n},c),{},{components:t})):a.createElement(b,s({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6954:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const r={title:"Datenobjekte",description:"",sidebar_position:40,tags:["data-objects"]},s=void 0,o={unversionedId:"documentation/data-objects",id:"documentation/data-objects",title:"Datenobjekte",description:"",source:"@site/docs/documentation/data-objects.md",sourceDirName:"documentation",slug:"/documentation/data-objects",permalink:"/java-docs/preview-refs/pull/1/merge/documentation/data-objects",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/data-objects.md",tags:[{label:"data-objects",permalink:"/java-docs/preview-refs/pull/1/merge/tags/data-objects"}],version:"current",sidebarPosition:40,frontMatter:{title:"Datenobjekte",description:"",sidebar_position:40,tags:["data-objects"]},sidebar:"documentationSidebar",previous:{title:"Datentypen",permalink:"/java-docs/preview-refs/pull/1/merge/documentation/data-types"},next:{title:"Zeichenketten (Strings)",permalink:"/java-docs/preview-refs/pull/1/merge/documentation/strings"}},l={},d=[{value:"Deklaration von Datenobjekten",id:"deklaration-von-datenobjekten",level:2},{value:"Initialisierung von Datenobjekten",id:"initialisierung-von-datenobjekten",level:2},{value:"Typinferenz bei Datenobjekten",id:"typinferenz-bei-datenobjekten",level:2},{value:"G\xfcltigkeitsbereiche von Datenobjekten",id:"g\xfcltigkeitsbereiche-von-datenobjekten",level:2},{value:"Typumwandlung (Type Casting)",id:"typumwandlung-type-casting",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ein Datenobjekt ist ein Platzhalter, der zur Laufzeit eine bestimmte Stelle des\nArbeitsspeichers belegt. Die Gr\xf6\xdfe des reservierten Speichers ist abh\xe4ngig vom\ngew\xe4hlten ",(0,i.kt)("a",{parentName:"p",href:"data-types"},"Datentyp"),"). Datenobjekte k\xf6nnen mit Werten belegt werden,\nBezeichner erm\xf6glichen das Ansprechen im Programmablauf. Man unterscheidet\nzwischen variablen Datenobjekten (",(0,i.kt)("em",{parentName:"p"},"Variablen"),") und fixen Datenobjekten\n(",(0,i.kt)("em",{parentName:"p"},"Konstanten")," und ",(0,i.kt)("em",{parentName:"p"},"Literale"),"). Konstanten sind fixe Datenobjekte, die \xfcber einen\nBezeichner angesprochen werden k\xf6nnen. Sie werden mit dem Schl\xfcsselwort ",(0,i.kt)("inlineCode",{parentName:"p"},"final"),"\ndeklariert. Literale sind sogenannte w\xf6rtliche Konstanten, d.h. fixe\nDatenobjekte ohne Bezeichner. Da Literale \xfcber keinen Bezeichner verf\xfcgen,\nk\xf6nnen Sie im Programm nicht angesprochen werden."),(0,i.kt)("mermaid",{value:"flowchart\n    hans(Bezeichner: hans\\nDatentyp: String\\nWert: Hans)\n    i(Bezeichner: i\\nDatentyp: int\\nWert: 5)\n    isAvailable(Bezeichner: isAvailable\\nDatentyp: boolean\\nWert: true)"}),(0,i.kt)("h2",{id:"deklaration-von-datenobjekten"},"Deklaration von Datenobjekten"),(0,i.kt)("p",null,"Durch Angabe von Datentyp und Bezeichner wird ein Datenobjekt deklariert, d.h.\ndem Compiler bekannt gegeben. Deklarationen werden wie jede Anweisung mit einem\nSemikolon abgeschlossen. Datenobjekte gleichen Datentyps k\xf6nnen mit Komma\ngetrennt aufgef\xfchrt werden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    int a, b;\n    boolean error;\n    char char1;\n    String text;\n  }\n\n}\n")),(0,i.kt)("admonition",{title:"Hinweis",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Java ist case-sensitiv, unterscheidet also zwischen Gro\xdf- und Kleinschreibung.\nUm die Lesbarkeit zu erh\xf6hen, sollten Variablen mit einem Kleinbuchstaben\nbeginnen, wohingegen Konstanten immer in Gro\xdfbuchstaben geschrieben werden\nsollten.")),(0,i.kt)("h2",{id:"initialisierung-von-datenobjekten"},"Initialisierung von Datenobjekten"),(0,i.kt)("p",null,"In Java m\xfcssen Datenobjekte vor der ersten Verwendung explizit initialisiert\nwerden, d.h. mit einem Wert belegt werden. Der Zuweisungsoperator ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," weist dem\nDatenobjekt auf der linken Seite den Wert des Ausdrucks auf der rechten Seite\nzu."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    int a = 42, b = a;\n    boolean error = true;\n    char char1;\n    String text;\n\n    char1 = 'M';\n    text = \"Winter is Coming\";\n  }\n\n}\n")),(0,i.kt)("h2",{id:"typinferenz-bei-datenobjekten"},"Typinferenz bei Datenobjekten"),(0,i.kt)("p",null,"Unter Typinferenz versteht man, dass bei der Deklaration eines Datenobjekts auf\ndie Angabe eine Datentyps verzichtet werden kann, wenn der Compiler aufgrund der\nrestlichen Angaben den Typ selbstst\xe4ndig ermitteln kann. F\xfcr die Typinferenz\nwird das Schl\xfcsselwort ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," verwendet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    int i = 5;\n    i = "Text"; // Kompilierungsfehler\n\n    var j = 5;\n    j = "Text"; // Kompilierungsfehler\n  }\n\n}\n')),(0,i.kt)("admonition",{title:"Hinweis",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Mit ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," deklarierte Datenobjekte sind weiterhin statisch typisiert.")),(0,i.kt)("h2",{id:"g\xfcltigkeitsbereiche-von-datenobjekten"},"G\xfcltigkeitsbereiche von Datenobjekten"),(0,i.kt)("p",null,"Datenobjekte sind nur innerhalb eines Anweisungsblocks g\xfcltig, d.h. man kann nur\ninnerhalb dieses Programmabschnitts auf das Datenobjekt zugreifen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    int a = 1, b;\n    b = foo(a);\n  }\n\n  public static int foo(int c) {\n    int d;\n    d = a++; // Kompilierungsfehler\n    d = c++;\n    return d;\n  }\n\n}\n")),(0,i.kt)("h2",{id:"typumwandlung-type-casting"},"Typumwandlung (Type Casting)"),(0,i.kt)("p",null,"Der Cast-Operator ",(0,i.kt)("inlineCode",{parentName:"p"},"()")," erlaubt die explizite Umwandlung eines Datentyps in einen\nanderen. Bei Wertzuweisungen findet eine implizite Typumwandlung vom\nniederwertigen zum h\xf6herwertigen Datentyp statt. Zu beachten ist, dass bei einer\nTypumwandlung ein Genauigkeitsverlust stattfinden kann."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    int a = 14;\n    int b = 3;\n    double result;\n\n    // implizite Typumwandlung\n    result = a / b;\n    System.out.println(result);\n\n    // explizite Typumwandlung\n    result = (double) a / b;\n    System.out.println(result);\n  }\n\n}\n")),(0,i.kt)("p",null,"Die Wertigkeit von Datentypen entscheidet dar\xfcber, welche Typumwandlungen\nm\xf6glich sind."),(0,i.kt)("mermaid",{value:"flowchart\n    byte(byte) -.-> short(short)\n    short -.-> int(int)\n    char(char) -.-> int\n    int -.-> long(long)\n    long -.-> float(float)\n    float -.-> double(double)"}),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"F\xfcr den Datentyp ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ist keine Typumwandlung m\xf6glich.")))}p.isMDXComponent=!0}}]);