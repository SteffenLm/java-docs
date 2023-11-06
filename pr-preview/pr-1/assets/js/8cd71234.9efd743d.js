"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[2176],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={title:"Softwaredesign",description:"",sidebar_position:15,tags:[]},o=void 0,s={unversionedId:"documentation/design",id:"documentation/design",title:"Softwaredesign",description:"",source:"@site/docs/documentation/design.md",sourceDirName:"documentation",slug:"/documentation/design",permalink:"/java-docs/preview-1/documentation/design",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/design.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Softwaredesign",description:"",sidebar_position:15,tags:[]},sidebar:"documentationSidebar",previous:{title:"Programmieren",permalink:"/java-docs/preview-1/documentation/programming"},next:{title:"Aufbau einer Java-Klasse",permalink:"/java-docs/preview-1/documentation/class-structure"}},l={},u=[{value:"Entwurfsmuster",id:"entwurfsmuster",level:2},{value:"Gestaltungsprinzipien",id:"gestaltungsprinzipien",level:2}],d={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Als Teilprozess der Softwareentwicklumg umfasst das Softwaredesign die\nDatenmodellierung, den Entwurf der Softwarearchitektur sowie das Festlegen\nben\xf6tigter Komponenten, Datentypen und Algorithmen. Bei der Datenmodellierung\nwerden alle relevanten Objekte der Anwendung inklusive ihrer Eigenschaften und\nBeziehungen zueinander dargestellt; die Softwarearchitektur beschreibt alle\nrelevanten Komponenten und deren Interaktionen. Bei der Gestaltung von Software\nkommen h\xe4ufig Entwurfsmuster zur L\xf6sung wiederkehrender Probleme zum Einsatz.\nZudem soll durch Beachtung von Gestaltungsprinzipien eine hohe Softwarequalit\xe4t\nsichergestellt werden."),(0,i.kt)("h2",{id:"entwurfsmuster"},"Entwurfsmuster"),(0,i.kt)("p",null,"Entwurfsmuster (Design Patterns) sind L\xf6sungsans\xe4tze f\xfcr wiederkehrende Probleme\nder Softwareentwicklung und sollen dabei helfen, Programmierfehler zu vermeiden,\nProgrammentw\xfcrfe wiederverwendbar und m\xf6glichst effizient zu gestalten. Sie\nk\xf6nnen u.a. in Erzeugungsmuster (z.B. Einzelst\xfcck (Singleton)), Strukturmuster\n(z.B. Adapter) und Verhaltensmuster (z.B. Beobachter (Observer)) unterteilt\nwerden. Der Begriff Entwurfsmuster wurde ma\xdfgeblich durch das 1994 erschienene\nBuch ",(0,i.kt)("em",{parentName:"p"},"Design Patterns \u2013 Elements of Reusable Object-Oriented Software")," von\nRichard Helm, Ralph Johnson und John Vlissides (auch bekannt als ",(0,i.kt)("em",{parentName:"p"},"Gang of Four"),")\ngepr\xe4gt."),(0,i.kt)("h2",{id:"gestaltungsprinzipien"},"Gestaltungsprinzipien"),(0,i.kt)("p",null,"Unter Gestaltungsprinzipien (Design Principles) versteht man Richtlinien, welche\neine hohe Softwarequalit\xe4t sicherstellen sollen. Neben einfachen\nGestaltungsprinzipen wie ",(0,i.kt)("em",{parentName:"p"},"DRY")," (Don\xb4t Repeat Yourself), ",(0,i.kt)("em",{parentName:"p"},"KISS")," (Keep It Simple,\nStupid) und ",(0,i.kt)("em",{parentName:"p"},"YAGNI")," (You Ain\xb4t Gonna Need It) sind in der objektorientierten\nProgrammierung vor allem die SOLID-Prinzipen von Bedeutung. Hinter dem Akronym\nSOLID verbergen sich 5 Gestaltungsprinzipien:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Single Responsibility Principle"),": jede Klasse sollte genau eine Verantwortung\nbesitzen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Open Closed Principle"),": Software-Einheiten sollten offen f\xfcr Erweiterungen,\naber geschlossen f\xfcr Modifikationen sein"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Liscov Substitution Principle"),": Objekte von Unterklassen sollten sich so\nVerhalten wie Objekte der dazugeh\xf6rigen Oberklasse"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Interface Segregation Principle"),": Klassen sollten nur Methoden implementieren\nm\xfcssen, die sie auch verwenden"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Dependency Inversion Principle"),": Abh\xe4ngigkeiten sollten immer von den\nkonkreten zu den abstrakten Modulen verlaufen")),(0,i.kt)("p",null,"Das Akronym SOLID geht auf den Softwareentwickler Robert C. Martin zur\xfcck, der\nunter anderem auch an der Entwicklung des Agilen Manifests beteiligt war. Dieses\nwurde 2001 verfasst und umfasst die vier wesentlichen Leits\xe4tze der agilen\nSoftwareentwicklung."))}p.isMDXComponent=!0}}]);