"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Optionals",description:"",sidebar_position:290,tags:[]},o=void 0,l={unversionedId:"documentation/optionals",id:"documentation/optionals",title:"Optionals",description:"",source:"@site/docs/documentation/optionals.md",sourceDirName:"documentation",slug:"/documentation/optionals",permalink:"/java-docs/documentation/optionals",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/optionals.md",tags:[],version:"current",sidebarPosition:290,frontMatter:{title:"Optionals",description:"",sidebar_position:290,tags:[]},sidebar:"documentationSidebar",previous:{title:"Assoziativspeicher (Maps)",permalink:"/java-docs/documentation/maps"},next:{title:"Die Java Stream API",permalink:"/java-docs/documentation/java-stream-api"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Der Umgang mit null-Werten stellt in vielen Programmiersprachen eine gro\xdfe\nHerausforderung dar. Zur Vermeidung von Laufzeitfehlern (",(0,a.kt)("inlineCode",{parentName:"p"},"NullPointerException"),")\nm\xfcsste vor jedem Methodenaufruf eigentlich \xfcberpr\xfcft werden, ob ein g\xfcltiger\nWert vorliegt oder nicht."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    String text = foo();\n    System.out.println(text.length()); // Laufzeitfehler\n  }\n\n  public static String foo() {\n    return null;\n  }\n\n}\n")),(0,a.kt)("p",null,"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," erm\xf6glicht in Java eine komfortable M\xf6glichkeit, mit\nnull-Werten umzugehen. Das eigentliche Objekt wird dabei in einem Objekt der\nKlasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," verpackt; der Zugriff auf das verpackte Objekt erfolgt \xfcber\nentsprechende Methoden. Dies stellt sicher, dass sich der Entwickler mit\nnull-Werten auseinander setzen muss."),(0,a.kt)("p",null,"F\xfcr den Umgang mit null-Werten stellt die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," Methoden wie\n",(0,a.kt)("inlineCode",{parentName:"p"},"T get()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean isPresent()")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"void ifPresent(consumer: Consumer<T>)")," zur\nVerf\xfcgung. Zudem existieren Methoden wie ",(0,a.kt)("inlineCode",{parentName:"p"},"void orElse(other: T)"),", mit denen\nStandardwerte festgelegt werden k\xf6nnen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    Optional<String> optionalText = foo();\n    optionalText.ifPresent(t -> System.out.println(t.length()));\n  }\n\n  public static Optional<String> foo() {\n    return Optional.ofNullable(null);\n  }\n\n}\n")))}d.isMDXComponent=!0}}]);