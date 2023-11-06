"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8210],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=u(t),m=r,c=b["".concat(s,".").concat(m)]||b[m]||p[m]||i;return t?a.createElement(c,o(o({ref:n},d),{},{components:t})):a.createElement(c,o({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[b]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const i={title:"Objektorientierte Programmierung",description:"",sidebar_position:130,tags:["oo"]},o=void 0,l={unversionedId:"documentation/oo",id:"documentation/oo",title:"Objektorientierte Programmierung",description:"",source:"@site/docs/documentation/oo.md",sourceDirName:"documentation",slug:"/documentation/oo",permalink:"/java-docs/pr-preview/pr-2/documentation/oo",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/oo.md",tags:[{label:"oo",permalink:"/java-docs/pr-preview/pr-2/tags/oo"}],version:"current",sidebarPosition:130,frontMatter:{title:"Objektorientierte Programmierung",description:"",sidebar_position:130,tags:["oo"]},sidebar:"documentationSidebar",previous:{title:"Feldbasierte Listen (ArrayLists)",permalink:"/java-docs/pr-preview/pr-2/documentation/array-lists"},next:{title:"Die Java API",permalink:"/java-docs/pr-preview/pr-2/documentation/java-api/"}},s={},u=[{value:"Datenkapselung",id:"datenkapselung",level:2},{value:"Sichtbarkeit von Attributen und Methoden",id:"sichtbarkeit-von-attributen-und-methoden",level:2},{value:"Definition von Klassen",id:"definition-von-klassen",level:2},{value:"Definition von Attributen",id:"definition-von-attributen",level:2},{value:"Definition und Implementierung von Methoden",id:"definition-und-implementierung-von-methoden",level:2},{value:"Deklaration von Referenzvariablen",id:"deklaration-von-referenzvariablen",level:2},{value:"Erzeugen von Objekten",id:"erzeugen-von-objekten",level:2},{value:"Zugriff auf Attribute und Aufruf von Methoden",id:"zugriff-auf-attribute-und-aufruf-von-methoden",level:2},{value:"\xdcberladene Methoden",id:"\xfcberladene-methoden",level:2},{value:"Konstruktoren",id:"konstruktoren",level:2},{value:"Statische Attribute und Methoden",id:"statische-attribute-und-methoden",level:2}],d={toc:u},b="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(b,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Die reale Welt besteht aus Objekten mit individuellen Eigenschaften und\nindividuellem Verhalten. F\xfcr ein einfacheres Verst\xe4ndnis werden Objekte\nkategorisiert, also zu sinnhaften Einheiten verbunden. In der objektorientierten\nProgrammierung werden Beobachtungen aus der realen Welt zum Konzept der\nObjektorientierung zusammengefasst:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Eine Kategorie von \xe4hnlichen Objekten bezeichnet man als ",(0,r.kt)("em",{parentName:"li"},"Klasse")),(0,r.kt)("li",{parentName:"ul"},"Konkrete Auspr\xe4gungen bzw. Instanzen einer Klasse werden wiederum als\n",(0,r.kt)("em",{parentName:"li"},"Objekte")," bezeichnet"),(0,r.kt)("li",{parentName:"ul"},"Die Eigenschaften von Objekten werden als ",(0,r.kt)("em",{parentName:"li"},"Attribute")," das Verhalten als\n",(0,r.kt)("em",{parentName:"li"},"Methoden")," bezeichnet")),(0,r.kt)("mermaid",{value:"flowchart LR\n    rectangle1(Bezeichner: rectangle1\\nDatentyp: Shape\\nWert: 13fee20c) --\x3e o1[hashCode: 13fee20c\\nareaInCM2: 12]\n    rectangle2(Bezeichner: rectangle2\\nDatentyp: Shape\\nWert: 88d45a01) --\x3e o2[hashCode: 88d45a01\\nareaInCM2: 12]\n    trapezoid(Bezeichner: trapezoid\\nDatentyp: Shape\\nWert: 915a002f) --\x3e o3[/hashCode: 915a002f\\nareaInCM2: 12\\]"}),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Jedes Objekt ist eindeutig identifizierbar.")),(0,r.kt)("h2",{id:"datenkapselung"},"Datenkapselung"),(0,r.kt)("p",null,"Ein wesentlicher Grundsatz der Objektorientierung ist, dass Attribute durch\nMethoden gekapselt werden. Datenkapselung bedeutet, dass Attribute nicht direkt\nge\xe4ndert werden k\xf6nnen, sondern nur durch den indirekten Zugriff \xfcber Methoden.\nTypische Methoden zum Lesen und Schreiben von Attributen sind die sogenannten\nGetter bzw. Setter."),(0,r.kt)("mermaid",{value:"flowchart LR\n    write[Schreibender Zugriff] -.-> setter1\n    write -.-> setter2\n    getter1 -.-> read[Lesender Zugriff]\n    getter2 -.-> read\n    subgraph Klasse\n        subgraph privater Bereich\n            attribut1((Attribut 1))\n            attribut2((Attribut 2))\n        end\n        setter1(Setter f\xfcr Attribut 1) -.-> attribut1\n        attribut1 -.-> getter1(Getter f\xfcr Attribut 1)\n        setter2(Setter f\xfcr Attribut 2) -.-> attribut2\n        attribut2 -.-> getter2(Getter f\xfcr Attribut 2)\n    end"}),(0,r.kt)("h2",{id:"sichtbarkeit-von-attributen-und-methoden"},"Sichtbarkeit von Attributen und Methoden"),(0,r.kt)("p",null,"Um die Sichtbarkeit von Attributen und Methoden zu definieren, existieren\nverschiedene Zugriffsrechte. Die Sichtbarkeit bestimmt, von welchem Ort aus\nAttribute und Methoden verwendet bzw. aufgerufen werden d\xfcrfen."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Zugriffsrecht"),(0,r.kt)("th",{parentName:"tr",align:null},"Zugriff aus gleicher Klasse"),(0,r.kt)("th",{parentName:"tr",align:null},"Zugriff von einer Klasse aus dem gleichen Paket"),(0,r.kt)("th",{parentName:"tr",align:null},"Zugriff von einer Unterklasse"),(0,r.kt)("th",{parentName:"tr",align:null},"Zugriff von einer beliebigen Klasse"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"ja"),(0,r.kt)("td",{parentName:"tr",align:null},"ja"),(0,r.kt)("td",{parentName:"tr",align:null},"ja"),(0,r.kt)("td",{parentName:"tr",align:null},"ja")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protected"),(0,r.kt)("td",{parentName:"tr",align:null},"ja"),(0,r.kt)("td",{parentName:"tr",align:null},"ja"),(0,r.kt)("td",{parentName:"tr",align:null},"ja"),(0,r.kt)("td",{parentName:"tr",align:null},"nein")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"package"),(0,r.kt)("td",{parentName:"tr",align:null},"ja"),(0,r.kt)("td",{parentName:"tr",align:null},"ja"),(0,r.kt)("td",{parentName:"tr",align:null},"nein"),(0,r.kt)("td",{parentName:"tr",align:null},"nein")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"private"),(0,r.kt)("td",{parentName:"tr",align:null},"ja"),(0,r.kt)("td",{parentName:"tr",align:null},"nein"),(0,r.kt)("td",{parentName:"tr",align:null},"nein"),(0,r.kt)("td",{parentName:"tr",align:null},"nein")))),(0,r.kt)("h2",{id:"definition-von-klassen"},"Definition von Klassen"),(0,r.kt)("p",null,"Klassen werden in Java mit dem Schl\xfcsselwort ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," definiert. Die Angabe des\nZugriffsrechts legt die Sichtbarkeit der Klasse fest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Foo.java" showLineNumbers',title:'"Foo.java"',showLineNumbers:!0},"public class Foo {\n}\n")),(0,r.kt)("h2",{id:"definition-von-attributen"},"Definition von Attributen"),(0,r.kt)("p",null,"Die Attribute einer Klasse sind Datenobjekte und werdern daher analog zu\nVariablen und Konstanten definiert. Die Angabe des Zugriffsrechts legt die\nSichtbarkeit des Attributs fest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Foo.java" showLineNumbers',title:'"Foo.java"',showLineNumbers:!0},"public class Foo {\n\n  private String bar;\n  public int baz;\n\n}\n")),(0,r.kt)("h2",{id:"definition-und-implementierung-von-methoden"},"Definition und Implementierung von Methoden"),(0,r.kt)("p",null,"Methoden sind in der Programmierung eine Verallgemeinerung von mathematischen\nFunktionen. Eine Methode besteht aus einem Methodennamen, einer Liste von\nEingabeparameter (optional), einem R\xfcckgabewert (optional) sowie dem\nMethodenrumpf."),(0,r.kt)("p",null,"Methoden k\xf6nnen entweder genau einen R\xfcckgabewert oder keinen R\xfcckgabewert\nbesitzen. Methoden mit genau einem R\xfcckgabewert m\xfcssen vor dem Methodennamen den\nDatentyp des R\xfcckgabewerts angeben und am Ende des Methodenrumpfes immer die\nAnweisung ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," besitzen, Methoden ohne R\xfcckgabewert m\xfcssen dies mit dem\nSchl\xfcsselwort ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," kenntlich machen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Foo.java" showLineNumbers',title:'"Foo.java"',showLineNumbers:!0},"public class Foo {\n\n  private String bar;\n  public int baz;\n\n  public void setBar(String bar) {\n    this.bar = bar;\n  }\n\n  public String getBar() {\n    return bar;\n  }\n\n}\n")),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Die Signatur einer Methode setzt sich aus Methodenname und den Datentypen der\nParameterliste zusammen.")),(0,r.kt)("h2",{id:"deklaration-von-referenzvariablen"},"Deklaration von Referenzvariablen"),(0,r.kt)("p",null,"Technisch gesehen handelt es sich bei einer Klasse um einen komplexen Datentyp.\nAnalog zu den primitiven Datentypen k\xf6nnen auch f\xfcr Klassen Variablen \u2013\nsogenannte ",(0,r.kt)("em",{parentName:"p"},"Referenzvariablen")," \u2013 definiert werden."),(0,r.kt)("p",null,'Im Gegensatz zu "normalen" Variablen werden bei Referenzvariablen nicht die\neigentlichen Werte in den Variablen gespeichert, sondern die Speicheradressen\nder erzeugten Objekte. Die Selbstreferenz ',(0,r.kt)("inlineCode",{parentName:"p"},"this")," verweist innerhalb einer Klasse\nauf das eigene Objekt."),(0,r.kt)("mermaid",{value:"flowchart LR\n    rectangle1(Bezeichner: rectangle1\\nDatentyp: Shape\\nWert: 13fee20c) --\x3e o1[hashCode: 13fee20c\\nareaInCM2: 12]\n    rectangle2(Bezeichner: rectangle2\\nDatentyp: Shape\\nWert: 13fee20c) --\x3e o1[hashCode: 13fee20c\\nareaInCM2: 12]\n    trapezoid(Bezeichner: trapezoid\\nDatentyp: Shape\\nWert: 915a002f) --\x3e o3[/hashCode: 915a002f\\nareaInCM2: 10\\]"}),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Der Standarwert von Referenzvariablen ist ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),".")),(0,r.kt)("h2",{id:"erzeugen-von-objekten"},"Erzeugen von Objekten"),(0,r.kt)("p",null,"Beim Erzeugen eines Objekts mit Hilfe des Operators ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," wird der bei der\nDeklaration reservierte Speicherplatz durch das Objekt belegt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Foo.java" showLineNumbers',title:'"Foo.java"',showLineNumbers:!0},"public class Foo {\n\n  private String bar;\n  public int baz;\n\n  public void setBar(String bar) {\n    this.bar = bar;\n  }\n\n  public String getBar() {\n    return bar;\n  }\n\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    Foo foo = new Foo();\n  }\n\n}\n")),(0,r.kt)("admonition",{title:"Hinweis",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Nach dem new-Operator muss immer ein Konstruktor der Klasse stehen.")),(0,r.kt)("h2",{id:"zugriff-auf-attribute-und-aufruf-von-methoden"},"Zugriff auf Attribute und Aufruf von Methoden"),(0,r.kt)("p",null,"Erlauben die Zugriffsrechte den Zugriff auf ein Attribut, kann \xfcber die\ndeklarierte Referenzvariable und einem nachgestellten Punkt auf das Attribut\nzugegriffen werden. Auch sichtbare Methoden werden \xfcber diese Syntax aufgerufen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Foo.java" showLineNumbers',title:'"Foo.java"',showLineNumbers:!0},"public class Foo {\n\n  private String bar;\n  public int baz;\n\n  public void setBar(String bar) {\n    this.bar = bar;\n  }\n\n  public String getBar() {\n    return bar;\n  }\n\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    Foo foo = new Foo();\n    foo.setBar("Winter is Coming");\n    foo.baz = 42;\n  }\n\n}\n')),(0,r.kt)("admonition",{title:"Hinweis",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Beim Aufruf einer Methode m\xfcssen alle Parameter in der richtigen Reihenfolge\nversorgt werden. Parameter, die diesem Prinzip folgen, bezeichnet man als\n",(0,r.kt)("em",{parentName:"p"},"Positionsparameter"))),(0,r.kt)("h2",{id:"\xfcberladene-methoden"},"\xdcberladene Methoden"),(0,r.kt)("p",null,"Gleichnamige Methoden mit unterschiedlichen Parameterlisten einer Klasse werden\nals \xfcberladene Methoden bezeichnet. Man spricht in diesem Zusammenhang auch von\nstatischer Polymorphie, da der Aufruf gleichnamiger Methoden unterschiedliche\nErgebnisse liefern kann."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Foo.java" showLineNumbers',title:'"Foo.java"',showLineNumbers:!0},'public class Foo {\n\n  private String bar;\n  public int baz;\n\n  public void setBar(String bar) {\n    this.bar = bar;\n  }\n\n  public void setBar(int bar) {\n    this.bar = bar + "";\n  }\n\n  public String getBar() {\n    return bar;\n  }\n\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    Foo foo = new Foo();\n    foo.setBar("Winter is Coming");\n    foo.setBar(42);\n  }\n\n}\n')),(0,r.kt)("admonition",{title:"Hinweis",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\xdcberladene Methoden k\xf6nnen keine unterschiedlichen R\xfcckgabewerte besitzen.")),(0,r.kt)("h2",{id:"konstruktoren"},"Konstruktoren"),(0,r.kt)("p",null,"Bei Konstruktoren handelt es sich um spezielle Methoden, die zur Initialisierung\neines Objekts verwendet werden. Konstruktoren hei\xdfen wie ihre Klasse und k\xf6nnen\neine beliebige Anzahl an Parametern haben. Allerdings kann f\xfcr Konstruktoren\nkein R\xfcckgabewert festgelegt werden, da diese implizit die Referenz auf das\nObjekt zur\xfcckgeben."),(0,r.kt)("p",null,"Im Gegensatz zu z.B. C++ existieren in Java keine Destruktoren, die nicht mehr\nben\xf6tigte Objekte aus dem Speicher entfernen. Stattdessen l\xe4uft im Hintergrund\nder sogenannte Garbage Collector, der nicht mehr ben\xf6tigte Objekte (also\nObjekte, die nicht mehr \xfcber eine Referenzvariable angesprochen werden k\xf6nnen)\nl\xf6scht."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Foo.java" showLineNumbers',title:'"Foo.java"',showLineNumbers:!0},'public class Foo {\n\n  private String bar;\n  public int baz;\n\n  public Foo(String bar) {\n    this.bar = bar;\n  }\n\n  public Foo(int bar) {\n    this.bar = bar + "";\n  }\n\n  public String getBar() {\n    return bar;\n  }\n\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    Foo foo = new Foo("Winter is Coming");\n    Foo foo2 = new Foo(42);\n  }\n\n}\n')),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Auch Konstruktoren k\xf6nnen \xfcberladen werden.")),(0,r.kt)("h2",{id:"statische-attribute-und-methoden"},"Statische Attribute und Methoden"),(0,r.kt)("p",null,'Neben "normalen" Attributen und Methoden kann eine Klasse auch statische\nAttribute und statische Methoden besitzen. Im Gegensatz zu "normalen" Attributen\nexistieren statische Attribute nur einmal pro Klasse und besitzen daher f\xfcr alle\nObjekte dieser Klasse dieselben Werte. Innerhalb einer statischen Methode kann\nnur auf die statischen Attribute der Klasse zugegriffen werden.'),(0,r.kt)("p",null,"Bei der Deklaration von statischen Attributen und statischen Methoden kommt das\nSchl\xfcsselwort ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," zum Einsatz. F\xfcr den Zugriff auf ein statisches Attribut\nbzw. den Aufruf einer statischen Methode wird keine Instanziierung ben\xf6tigt,\nd.h. der der Zugriff bzw. Aufruf erfolgt \xfcber den Klassennamen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Foo.java" showLineNumbers',title:'"Foo.java"',showLineNumbers:!0},'public class Foo {\n\n  private String bar;\n  public int baz;\n\n  private static int foobar;\n\n  public Foo(String bar) {\n    this.bar = bar;\n    foobar++;\n  }\n\n  public Foo(int bar) {\n    this.bar = bar + "";\n  }\n\n  public String getBar() {\n    return bar;\n  }\n\n  public static int getFoobar() {\n    return foobar;\n  }\n\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    Foo foo = new Foo("Winter is Coming");\n    int foobar = Foo.getFoobar();\n    System.out.println(foobar);\n  }\n\n}\n')),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},'"Normale" Attribute und Methoden werden auch als Instanzattribute bzw.\nInstanzmethoden bezeichnet, statische Attribute und Methoden auch\nKlassenattribute bzw. Klassenmethoden.')))}p.isMDXComponent=!0}}]);