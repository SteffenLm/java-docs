"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[3135],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const r={title:"Kommandozeile verwenden",description:"",sidebar_position:10},o=void 0,s={unversionedId:"additional-material/instructions/use-cli",id:"additional-material/instructions/use-cli",title:"Kommandozeile verwenden",description:"",source:"@site/docs/additional-material/instructions/use-cli.md",sourceDirName:"additional-material/instructions",slug:"/additional-material/instructions/use-cli",permalink:"/java-docs/preview-1/additional-material/instructions/use-cli",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/instructions/use-cli.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Kommandozeile verwenden",description:"",sidebar_position:10},sidebar:"additionalMaterialSidebar",previous:{title:"Anleitungen",permalink:"/java-docs/preview-1/additional-material/instructions/"},next:{title:"Eclipse einrichten",permalink:"/java-docs/preview-1/additional-material/instructions/setup-eclipse"}},l={},d=[],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Zur Entwicklung von Java-Programmen wird neben dem ",(0,i.kt)("em",{parentName:"p"},"Java Development Kit")," (JDK)\nnur ein einfacher Texteditor ben\xf6tigt. Das Kompilieren und Ausf\xfchren der\nJava-Klassen erfolgt dann \xfcber die Kommandozeile. In Windows wird die\nKommandozeile als Eingabeaufforderung bezeichnet und kann \xfcber den Suchbegriff\n",(0,i.kt)("inlineCode",{parentName:"p"},"CMD")," gestartet werden."),(0,i.kt)("p",null,"Um ein einfaches Hello-World-Programm in Java zu entwickeln, muss zun\xe4chst eine\nJava-Quellcode-Datei mit Hilfe eines Texteditors erstellt werden. Die\nJava-Quellcode-Datei muss dabei denselben Namen wie die Klasse besitzen und auf\n",(0,i.kt)("inlineCode",{parentName:"p"},"java")," enden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'package demos;\n\npublic class MainClass {\n\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n\n}\n')),(0,i.kt)("p",null,"Damit die erstellte Java-Quellcode-Datei kompiliert werden kann, muss zun\xe4chst\nin der Kommandozeile in das entsprechende Projekt-Verzeichnis gewechselt werden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'C:\\Users>cd..\nC:\\>cd "Users\\Maier\\Projects\\Java\\src"\nC:\\Users\\Maier\\Projects\\Java\\src>\n')),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Mit dem Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"cd <Pfad\\Verzeichnis>")," kann zum angegebenen Verzeichnis\ngewechselt werden, mit dem Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"cd..")," zum \xfcbergeordneten Verzeichnis und mit\ndem Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"<Laufwerksbuchstabe>:")," zum angegebenen Laufwerk.")),(0,i.kt)("p",null,"Das \xdcberf\xfchren der Java-Quellcode-Datei in eine Java-Bytecode-Datei erfolgt mit\nHilfe des Java-Kompilers. Hierzu muss der komplette Pfad zur Klasse inklusive\nder Dateiendung ",(0,i.kt)("inlineCode",{parentName:"p"},"java")," angegeben werden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"C:\\Users\\Maier\\Projects\\Java\\src>javac demos/MainClass.java -d ../bin\n")),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Der optionale Zusatz ",(0,i.kt)("inlineCode",{parentName:"p"},"-d")," erm\xf6glicht die Angabe des Verzeichnisses f\xfcr die\nerstellten Bytecode-Dateien.")),(0,i.kt)("p",null,"Das Ausf\xfchren der erstellten Java-Bytecode-Datei erfolgt \xfcber die Java Virtual\nMachine. Auch beim Aus\xfchren muss der komplette Klassenpfad angegeben werden,\nallerdings ohne eine Dateiendung."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"C:\\Users\\Maier\\Projects\\Java\\src>cd..\nC:\\Users\\Maier\\Projects\\Java>cd bin\nC:\\Users\\Maier\\Projects\\Java\\bin>java demos.MainClass\n")),(0,i.kt)("admonition",{title:"Hinweis",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Um eine Bytecode-Datei ausf\xfchren zu k\xf6nnen, ben\xf6tigt die dazugeh\xf6rige\nJava-Klasse die Methode ",(0,i.kt)("inlineCode",{parentName:"p"},"void main(String[])"),".")))}p.isMDXComponent=!0}}]);