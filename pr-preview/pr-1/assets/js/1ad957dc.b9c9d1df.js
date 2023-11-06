"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2784],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),c=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(o.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,h=p["".concat(o,".").concat(m)]||p[m]||u[m]||a;return t?i.createElement(h,s(s({ref:n},d),{},{components:t})):i.createElement(h,s({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4375:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(7462),r=(t(7294),t(3905));const a={title:"Schnittstellen (Interfaces)",description:"",sidebar_position:210,tags:["interfaces"]},s=void 0,l={unversionedId:"documentation/interfaces",id:"documentation/interfaces",title:"Schnittstellen (Interfaces)",description:"",source:"@site/docs/documentation/interfaces.md",sourceDirName:"documentation",slug:"/documentation/interfaces",permalink:"/java-docs/pr-preview/pr-1/documentation/interfaces",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/interfaces.md",tags:[{label:"interfaces",permalink:"/java-docs/pr-preview/pr-1/tags/interfaces"}],version:"current",sidebarPosition:210,frontMatter:{title:"Schnittstellen (Interfaces)",description:"",sidebar_position:210,tags:["interfaces"]},sidebar:"documentationSidebar",previous:{title:"Abstrakte und finale Klassen und Methoden",permalink:"/java-docs/pr-preview/pr-1/documentation/abstract-and-final"},next:{title:"Listen",permalink:"/java-docs/pr-preview/pr-1/documentation/lists"}},o={},c=[{value:"Definition von Schnittstellen",id:"definition-von-schnittstellen",level:2},{value:"Implementieren von Schnittstellen",id:"implementieren-von-schnittstellen",level:2},{value:"Verwenden von Schnittstellen",id:"verwenden-von-schnittstellen",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Wird eine Klasse von mehreren Klassen abgeleitet, spricht man von\nMehrfachvererbung. Das Prinzip der Mehrfachvererbung wird von vielen\nProgrammiersprachen allerdings nicht (direkt) unterst\xfctzt. Der Hauptgrund hier\nsind m\xf6gliche Mehrdeutigkeiten. Erbt eine Klasse \xfcber mehrere m\xf6gliche Pfade von\neiner Basisklasse und werden dabei m\xf6glicherweise Methoden der Basisklasse\nunterschiedlich \xfcberschrieben, entstehen dadurch nicht eindeutige Varianten.\nAufgrund der Rautenform des Klassendiagramms wird dieses Szenario also\n",(0,r.kt)("em",{parentName:"p"},"Diamantenproblem")," bezeichnet."),(0,r.kt)("mermaid",{value:"classDiagram\n    ClassA <|-- ClassB\n    ClassA <|-- ClassC\n    ClassB <|-- ClassD\n    ClassC <|-- ClassD\n\n    class ClassA {\n        +foo() void\n    }\n\n    class ClassB {\n        +foo() void\n    }\n\n    class ClassC {\n        +foo() void\n    }\n\n    class ClassD {\n\n    }"}),(0,r.kt)("p",null,"Zur L\xf6sung des Diamantenproblems werden Schnittstellen (Interfaces) verwendet.\nSchnittstellen sind im Prinzip abstrakte Klassen, die ausschlie\xdflich abstrakte\nMethoden besitzen. Durch Schnittstellen wird sichergestellt, dass Klassen\nbestimmte Methoden bereitstellen und dass verschiedene Klassen miteinander\nkommunizieren k\xf6nnen."),(0,r.kt)("h2",{id:"definition-von-schnittstellen"},"Definition von Schnittstellen"),(0,r.kt)("p",null,"Die Definition einer Schnittstelle erfolgt analog zur Definition von Klassen.\nDas Schl\xfcsselwort f\xfcr Schnittstellen lautet ",(0,r.kt)("inlineCode",{parentName:"p"},"interface"),". Eine Schnittstelle kann\nnur \xf6ffentliche, abstrakte und \xf6ffentliche, statische Methoden beinhalten."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Foo.java" showLineNumbers',title:'"Foo.java"',showLineNumbers:!0},"public interface Foo {\n\n  void bar();\n\n  void baz();\n\n}\n")),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Die Angabe von ",(0,r.kt)("inlineCode",{parentName:"p"},"abstract")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," bei Methoden ist nicht erforderlich.")),(0,r.kt)("h2",{id:"implementieren-von-schnittstellen"},"Implementieren von Schnittstellen"),(0,r.kt)("p",null,"Schnittstellen werden mit Hilfe des Schl\xfcsselworts ",(0,r.kt)("inlineCode",{parentName:"p"},"implements")," von einer Klasse\nimplementiert. Durch die Implementierung der Schnittstelle verpflichtet sich die\nKlasse, alle Methoden der Schnittstelle zu implementieren."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Qux.java" showLineNumbers',title:'"Qux.java"',showLineNumbers:!0},'public class Qux implements Foo {\n\n  public void bar() {\n    System.out.println("bar");\n  }\n\n  public void baz() {\n    System.out.println("baz");\n  }\n\n}\n')),(0,r.kt)("h2",{id:"verwenden-von-schnittstellen"},"Verwenden von Schnittstellen"),(0,r.kt)("p",null,"Schnittstellen k\xf6nnen ebenso wie Klassen als Datentypen verwendet werden. Die\nTypumwandlung von der implementierenden Klasse zur Schnittstelle bezeichnet man\nals ",(0,r.kt)("em",{parentName:"p"},"Upcast")," die R\xfcckumwandlung als ",(0,r.kt)("em",{parentName:"p"},"Downcast")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    Foo foo;\n    Qux qux = new Qux();\n    foo = qux; // Upcast\n  }\n\n}\n")))}u.isMDXComponent=!0}}]);