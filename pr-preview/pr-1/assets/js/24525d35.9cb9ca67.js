"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6872],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,p=c["".concat(o,".").concat(m)]||c[m]||h[m]||i;return t?r.createElement(p,s(s({ref:n},d),{},{components:t})):r.createElement(p,s({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={title:"Ausnahmen (Exceptions)",description:"",sidebar_position:230,tags:["exceptions"]},s=void 0,l={unversionedId:"documentation/exceptions",id:"documentation/exceptions",title:"Ausnahmen (Exceptions)",description:"",source:"@site/docs/documentation/exceptions.md",sourceDirName:"documentation",slug:"/documentation/exceptions",permalink:"/java-docs/preview-refs/pull/1/merge/documentation/exceptions",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/exceptions.md",tags:[{label:"exceptions",permalink:"/java-docs/preview-refs/pull/1/merge/tags/exceptions"}],version:"current",sidebarPosition:230,frontMatter:{title:"Ausnahmen (Exceptions)",description:"",sidebar_position:230,tags:["exceptions"]},sidebar:"documentationSidebar",previous:{title:"Komparatoren",permalink:"/java-docs/preview-refs/pull/1/merge/documentation/comparators"},next:{title:"Datenklassen (Records)",permalink:"/java-docs/preview-refs/pull/1/merge/documentation/records"}},o={},u=[{value:"Kompilierungsfehler",id:"kompilierungsfehler",level:2},{value:"Logikfehler",id:"logikfehler",level:2},{value:"Laufzeitfehler",id:"laufzeitfehler",level:2},{value:"Die Klassenhierarchie der Laufzeitfehler",id:"die-klassenhierarchie-der-laufzeitfehler",level:3},{value:"Definition von Ausnahmenklassen",id:"definition-von-ausnahmenklassen",level:3},{value:"Ausl\xf6sen von Ausnahmen",id:"ausl\xf6sen-von-ausnahmen",level:3},{value:"Weiterleiten von Ausnahmen",id:"weiterleiten-von-ausnahmen",level:3},{value:"Abfangen von Ausnahmen",id:"abfangen-von-ausnahmen",level:3}],d={toc:u},c="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Programmfehler (Bugs) f\xfchren dazu, dass Programme unerwartete Ergebnisse liefern\noder abst\xfcrzen. Je komplexer das Programm, desto wichtiger wird eine durchdachte\nund konsequente Fehlerbehandlung. Man unterscheidt dabei zwischen verschiedenen\nFehlerarten: Kompilierungsfehler, Logikfehler und Laufzeitfehler."),(0,a.kt)("h2",{id:"kompilierungsfehler"},"Kompilierungsfehler"),(0,a.kt)("p",null,"Kompilierungsfehler sind Programmfehler, die verhindern, dass das Programm\nausgef\xfchrt werden kann. Sie k\xf6nnen relativ einfach behoben werden, da sie schon\nzur Designzeit auftreten und von den meisten Entwicklungsumgebungen direkt\nangezeigt werden."),(0,a.kt)("h2",{id:"logikfehler"},"Logikfehler"),(0,a.kt)("p",null,"Verh\xe4lt sich das Programm nicht wie beabsichtigt, spricht man von Logikfehlern.\nSie sind mit am schwersten zu entdecken und zu beheben. Zur Unterst\xfczung bei der\nFehlersuche und -behandlung kann unter Anderem der Debugger verwendet werden.\nDer Debugger erm\xf6glicht es, Programme zur Laufzeit zu analysieren und zu\nsteuern. Durch das Setzen von Haltepunkten (Breakpoints) kann die Ausf\xfchrung des\nProgramms an beliebiger Stelle angehalten werden. Dadurch lassen sich z.B. die\nInhalte von Datenobjekten \xfcberpr\xfcfen. Zudem bietet der Debugger die M\xf6glichkeit,\ndie weitere Ausf\xfchrung des Programms in der gew\xfcnschten Schrittweite\nforzuf\xfchren."),(0,a.kt)("h2",{id:"laufzeitfehler"},"Laufzeitfehler"),(0,a.kt)("p",null,"Laufzeitfehler treten erst beim Ausf\xfchren des Programms auf. Sie entstehen meist\ndann, wenn das Programm versucht, eine Operation auszuf\xfchren, die nicht\nausgef\xfchrt werden kann (z.B. die Division durch Null). Diese Situationen werden\nauch als Ausnahmen (Exceptions) bezeichnet. Ausnahmen gew\xe4hrleisten eine klare\nTrennung zwischen funktionalem Code und Code zur Fehlerbehandlung. Die\nFehlerbehandlung erfolgt dabei gem\xe4\xdf dem Ausnahmenbehandlungsprozess: nachdem\neine Ausnahme ausgel\xf6st wurde, kann bzw. muss diese je nach Ausnahmenart vom\nEmpf\xe4nger der Ausnahme entweder behandelt oder weitergeleitet werden\n",(0,a.kt)("em",{parentName:"p"},"Catch-or-Throw-Regel")," Man unterscheidet zwischen ",(0,a.kt)("em",{parentName:"p"},"gepr\xfcften")," (checked) und\n",(0,a.kt)("em",{parentName:"p"},"ungepr\xfcften")," (unchecked) Ausnahmen. Gepr\xfcfte Ausnahmen m\xfcssen, ungepr\xfcfte\nAusnahmen k\xf6nnen behandelt bzw. weitergeleitet werden."),(0,a.kt)("h3",{id:"die-klassenhierarchie-der-laufzeitfehler"},"Die Klassenhierarchie der Laufzeitfehler"),(0,a.kt)("p",null,"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Throwable")," stellt die Oberklasse aller Laufzeitfehler dar.\nSchwerwiegende Fehler (haupts\xe4chlich Probleme in der JVM (Java Virtual Machine))\nwerden durch Unterklassen der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," abgebildet, gepr\xfcfte Ausnahmen\ndurch Unterklassen der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Exception")," und ungepr\xfcfte Ausnahmen durch\nUnterklassen der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"RuntimeException"),"."),(0,a.kt)("mermaid",{value:"classDiagram\n    Throwable <|-- Error\n    Throwable <|-- Exception\n    Exception <|-- TimeOutException\n    Exception <|-- RunTimeException\n    RunTimeException <|-- NullPointerException\n    RunTimeException <|-- ArithmeticException"}),(0,a.kt)("h3",{id:"definition-von-ausnahmenklassen"},"Definition von Ausnahmenklassen"),(0,a.kt)("p",null,"Eigene Ausnahmenklassen werden durch einfaches Ableiten von einer bestehenden\nAusnahmenklasse definiert. Ausnahmenklassen sollten dabei immer von der Klasse\n",(0,a.kt)("inlineCode",{parentName:"p"},"Exception")," oder einer ihrer Unterklassen abgeleitet werden, nicht von der\nKlasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="QuxException.java" showLineNumbers',title:'"QuxException.java"',showLineNumbers:!0},"public class QuxException extends Exception {\n\n  public QuxException() {}\n\n  public QuxException(String message) {}\n\n}\n")),(0,a.kt)("h3",{id:"ausl\xf6sen-von-ausnahmen"},"Ausl\xf6sen von Ausnahmen"),(0,a.kt)("p",null,"Mit dem Schl\xfcsselwort ",(0,a.kt)("inlineCode",{parentName:"p"},"throw")," kann innerhalb einer Methode eine Ausnahme\nausgel\xf6st werden. Die Methode, in der die Ausnahme ausgel\xf6st wird, muss mit dem\nSchl\xfcsselwort ",(0,a.kt)("inlineCode",{parentName:"p"},"throws")," die Ausnahmenklasse angeben, die ausgel\xf6st werden kann."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Foo.java" showLineNumbers',title:'"Foo.java"',showLineNumbers:!0},"public class Foo {\n\n  public void bar() throws QuxException {\n    throw new QuxException();\n  }\n\n}\n")),(0,a.kt)("h3",{id:"weiterleiten-von-ausnahmen"},"Weiterleiten von Ausnahmen"),(0,a.kt)("p",null,"Ausnahmen k\xf6nnen weitergeleitet werden. Hierbei wird die Fehlerbehandlung an die\nn\xe4chsth\xf6here Ebene weitergegeben. Um eine Ausnahme weiterzuleiten, muss in der\nweiterleitenden Methode mit ",(0,a.kt)("inlineCode",{parentName:"p"},"throws")," die Ausnahme angegeben werden, die\nausgel\xf6st werden kann."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Foo.java" showLineNumbers',title:'"Foo.java"',showLineNumbers:!0},"public class Foo {\n\n  public void bar() throws QuxException {\n    throw new QuxException();\n  }\n\n  public void baz() throws QuxException {\n    bar();\n  }\n\n}\n")),(0,a.kt)("h3",{id:"abfangen-von-ausnahmen"},"Abfangen von Ausnahmen"),(0,a.kt)("p",null,"Mit Hilfe der try-catch-Anweisung k\xf6nnen Methoden, die eine Ausnahme ausl\xf6sen\nk\xf6nnen, \xfcberwacht werden; d.h. die Ausnahmen werden gegebenenfalls abgefangen.\nDer try-Block enth\xe4lt die Anweisungen, die \xfcberwacht werden sollen, der\ncatch-Block enth\xe4lt die eigentliche Fehlerbehandlung. Als Parameter von ",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),"\nmuss angegeben werden, welche Ausnahme(n) abgefangen werden soll(en)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    try {\n      Foo foo = new Foo();\n      foo.bar();\n    } catch (QuxException e) {\n      /* Fehlerbehandlung */\n    }\n  }\n\n}\n")))}h.isMDXComponent=!0}}]);