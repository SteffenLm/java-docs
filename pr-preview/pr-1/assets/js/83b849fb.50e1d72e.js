"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3770],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},758:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={title:"Generische Programmierung",description:"",sidebar_position:270,tags:["generics"]},s=void 0,l={unversionedId:"documentation/generics",id:"documentation/generics",title:"Generische Programmierung",description:"",source:"@site/docs/documentation/generics.md",sourceDirName:"documentation",slug:"/documentation/generics",permalink:"/java-docs/pr-preview/pr-1/documentation/generics",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/generics.md",tags:[{label:"generics",permalink:"/java-docs/pr-preview/pr-1/tags/generics"}],version:"current",sidebarPosition:270,frontMatter:{title:"Generische Programmierung",description:"",sidebar_position:270,tags:["generics"]},sidebar:"documentationSidebar",previous:{title:"Lambda-Ausdr\xfccke (Lambdas)",permalink:"/java-docs/pr-preview/pr-1/documentation/lambdas"},next:{title:"Assoziativspeicher (Maps)",permalink:"/java-docs/pr-preview/pr-1/documentation/maps"}},o={},c=[{value:"Generische Klassen ohne Java Generics",id:"generische-klassen-ohne-java-generics",level:2},{value:"Generische Klassen mit Java Generics",id:"generische-klassen-mit-java-generics",level:2},{value:"Generische Methoden mit Java Generics",id:"generische-methoden-mit-java-generics",level:2},{value:"Namensrichtlinien f\xfcr Typparameter",id:"namensrichtlinien-f\xfcr-typparameter",level:2},{value:"Varianz",id:"varianz",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Quellcode sollte generell so allgemein bzw. generisch geschrieben werden, dass\ner f\xfcr unterschiedliche Datenstrukturen und Datentypen verwendet werden kann.\nDas Ziel der generischen Programmierung ist die Entwicklung von\nwiederverwendbarem Code. In Java verwendet man das Konzept der generischen\nDatentypen, also Klassen, die mit verschiedene Datentypen verwendet werden\nk\xf6nnen."),(0,a.kt)("h2",{id:"generische-klassen-ohne-java-generics"},"Generische Klassen ohne Java Generics"),(0,a.kt)("p",null,"Auch ohne Java Generics kann in Java mit Hilfe der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," generisch\nprogrammiert werden. Der Nachteil besteht darin, dass durch den Upcast einer\nbeliebigen Klasse auf die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," die spezifischen Methoden der Klasse\nnicht mehr verwendet werden k\xf6nnen und der dadurch notwendige Downcast zu\nLaufzeitfehlern f\xfchren kann."),(0,a.kt)("p",null,"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Box")," erm\xf6glicht das Speichern einer beliebig typisierten\nInformation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Box.java" showLineNumbers',title:'"Box.java"',showLineNumbers:!0},"public class Box {\n\n  private Object content;\n\n  public void set(Object content) {\n    this.content = content;\n  }\n\n  public Object get() {\n    return content;\n  }\n\n}\n")),(0,a.kt)("p",null,"In der main-Methode der Startklasse wird zun\xe4chst eine ganze Zahl in einer Box\ngespeichert und anschlie\xdfend wieder ausgelesen. Die Umwandlung der ganzen Zahl\nin eine Zeichenkette f\xfchrt erst zur Laufzeit zu einem Fehler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    Box box = new Box();\n    box.set(5);\n    String i = (String) box.get(); // Laufzeitfehler\n    System.out.println(i);\n  }\n\n}\n")),(0,a.kt)("h2",{id:"generische-klassen-mit-java-generics"},"Generische Klassen mit Java Generics"),(0,a.kt)("p",null,"Klassen und Methoden k\xf6nnen in Java mit Typen parametrisiert werden. Diese\nwerden durch spitze Klammern ",(0,a.kt)("inlineCode",{parentName:"p"},"<>")," gekennzeichnet und stellen Platzhalter f\xfcr\nkonkrete Datentypen dar. Beim Kompilieren werden alle generischen Informationen\nvollst\xe4ndig entfernt und durch die konkreten Datentypen ersetzt. Durch die\ndadurch vorhandene statische Typsicherheit k\xf6nnen Laufzeitfehler verhindert und\nFehler bereits beim Kompilieren entdeckt werden."),(0,a.kt)("p",null,"Die generische Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Box<T>")," erm\xf6glicht das Speichern einer beliebig\ntypisierten Information mit Hilfe des Typparameters ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Box.java" showLineNumbers',title:'"Box.java"',showLineNumbers:!0},"public class Box<T> {\n\n  private T content;\n\n  public void set(T content) {\n    this.content = content;\n  }\n\n  public T get() {\n    return content;\n  }\n\n}\n")),(0,a.kt)("p",null,"In der main-Methode der Startklasse wird zun\xe4chst eine ganze Zahl in einer Box\ngespeichert und anschlie\xdfend wieder ausgelesen. Die Umwandlung der ganzen Zahl\nin eine Zeichenkette f\xfchrt aufgrund der statischen Typsicherheit zu einem\nKompilierungsfehler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    Box<Integer> box = new Box<>();\n    box.set(5);\n    String i = box.get(); // Kompilierungsfehler\n    System.out.println(i);\n  }\n\n}\n")),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Die Typisierung kann entweder explizit oder implizit \xfcber den Diamantenoperator\n",(0,a.kt)("inlineCode",{parentName:"p"},"<>")," erfolgen.")),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Typparameter k\xf6nnen auf die Unterklassen einer bestimmten Klasse eingeschr\xe4nkt\nwerden. Dadurch kann in der generischen Klasse auf Attribute und Methoden der\nangegebenen Klasse zugegriffen werden. Die Angabe eines eingeschr\xe4nkten\nTypparameters erfolgt \xfcber den Zusatz ",(0,a.kt)("inlineCode",{parentName:"p"},"extends")," sowie die Angabe der\nentsprechenden Klasse.")),(0,a.kt)("h2",{id:"generische-methoden-mit-java-generics"},"Generische Methoden mit Java Generics"),(0,a.kt)("p",null,"Die generische Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"<T> int getIndex(value: T, values: T[])")," gibt den Index\neines beliebig typisierten gesuchten Wertes innerhalb eines gleichtypisierten\nFeldes zur\xfcck."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    System.out.println(getIndex(5, new Integer[] {3, 5, 2, 4, 1}));\n  }\n\n  public static <T> int getIndex(T value, T[] values) {\n    for (int i = 0; i < values.length; i++) {\n      if (values[i].equals(value)) {\n        return i;\n      }\n    }\n    return -1;\n  }\n\n}\n")),(0,a.kt)("h2",{id:"namensrichtlinien-f\xfcr-typparameter"},"Namensrichtlinien f\xfcr Typparameter"),(0,a.kt)("p",null,"Um den Einsatzbereich von Typparametern in generischen Klassen und Methoden\nkenntlich zu machen, sollte man festgelegte Zeichen verwenden."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Typparameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Einsatzbereich"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"T, U, V, W..."),(0,a.kt)("td",{parentName:"tr",align:null},"Datentyp (Type)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"E"),(0,a.kt)("td",{parentName:"tr",align:null},"Element einer Datensammlung (Element)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"K"),(0,a.kt)("td",{parentName:"tr",align:null},"Schl\xfcssel eines Assoziativspeichers (Key)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"V"),(0,a.kt)("td",{parentName:"tr",align:null},"Wert eines Assoziativspeichers (Value)")))),(0,a.kt)("h2",{id:"varianz"},"Varianz"),(0,a.kt)("p",null,"Bei der Deklaration einer generischen Klasse erm\xf6glicht der Wildcard-Typ ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," die\nAngabe eines unbestimmten Typs. Dieser kann gar nicht (",(0,a.kt)("strong",{parentName:"p"},"Bivarianz"),"), nach oben\n(",(0,a.kt)("strong",{parentName:"p"},"Kovarianz"),"), nach unten (",(0,a.kt)("strong",{parentName:"p"},"Kontravarianz"),"), oder sowohl nach oben als auch\nnach unten (",(0,a.kt)("strong",{parentName:"p"},"Invarianz"),") eingeschr\xe4nkt werden."),(0,a.kt)("p",null,"Die generische Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Box<T>")," erm\xf6glicht das Speichern einer beliebig\ntypisierten Information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Box.java" showLineNumbers',title:'"Box.java"',showLineNumbers:!0},"public class Box<T> {\n\n  private T content;\n\n  public void set(T content) {\n    this.content = content;\n  }\n\n  public T get() {\n    return content;\n  }\n\n}\n")),(0,a.kt)("p",null,"In der main-methode der Startklasse werden verschiedene Boxen unterschiedlich\ndeklariert und anschlie\xdfend initialisiert. Dabei ist die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," eine\nUnterklasse der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),", die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Integer")," eine Unterklasse der\nKlasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," und diese eine Unterklasse der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    Box<?> bivariantBox;\n    bivariantBox = new GenericBox<Object>();\n    bivariantBox = new GenericBox<Number>();\n    bivariantBox = new GenericBox<Integer>();\n    bivariantBox = new GenericBox<String>();\n\n    Box<? extends Number> covariantBox;\n    covariantBox = new GenericBox<Object>(); // Kompilierungsfehler\n    covariantBox = new GenericBox<Number>();\n    covariantBox = new GenericBox<Integer>();\n    covariantBox = new GenericBox<Integer>(); // Kompilierungsfehler\n\n    Box<? super Number> contravariantBox;\n    contravariantBox = new GenericBox<Object>();\n    contravariantBox = new GenericBox<Number>();\n    contravariantBox = new GenericBox<Integer>(); // Kompilierungsfehler\n    covariantBox = new GenericBox<Integer>(); // Kompilierungsfehler\n\n    Box<Number> invariantBox;\n    invariantBox = new GenericBox<Object>(); // Kompilierungsfehler\n    invariantBox = new GenericBox<Number>();\n    invariantBox = new GenericBox<Integer>(); // Kompilierungsfehler\n    covariantBox = new GenericBox<String>(); // Kompilierungsfehler\n  }\n\n}\n")))}u.isMDXComponent=!0}}]);