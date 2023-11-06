"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9270],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(b,o(o({ref:n},p),{},{components:t})):r.createElement(b,o({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3860:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={title:"Komparatoren",description:"",sidebar_position:220,tags:["comparators"]},o=void 0,l={unversionedId:"documentation/comparators",id:"documentation/comparators",title:"Komparatoren",description:"",source:"@site/docs/documentation/comparators.md",sourceDirName:"documentation",slug:"/documentation/comparators",permalink:"/java-docs/preview-refs/pull/1/merge/documentation/comparators",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/comparators.md",tags:[{label:"comparators",permalink:"/java-docs/preview-refs/pull/1/merge/tags/comparators"}],version:"current",sidebarPosition:220,frontMatter:{title:"Komparatoren",description:"",sidebar_position:220,tags:["comparators"]},sidebar:"documentationSidebar",previous:{title:"Listen",permalink:"/java-docs/preview-refs/pull/1/merge/documentation/lists"},next:{title:"Ausnahmen (Exceptions)",permalink:"/java-docs/preview-refs/pull/1/merge/documentation/exceptions"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mit Hilfe der Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"int compareTo(o: T)")," der Schnittstelle ",(0,a.kt)("inlineCode",{parentName:"p"},"Comparable<T>"),"\nbzw. der Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"int compare(o1: T, o2: T)")," der Schnittstelle ",(0,a.kt)("inlineCode",{parentName:"p"},"Comparator<T>"),"\nk\xf6nnen Objekte einer Klasse miteinander verglichen werden. Der R\xfcckgabewert\nbeider Methoden gibt die Ordnung der zu vergleichenden Objekte an:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"R\xfcckgabewert kleiner Null: das Vergleichsobjekt ist gr\xf6\xdfer"),(0,a.kt)("li",{parentName:"ul"},"R\xfcckgabewert gleich Null: beide Objekte sind gleich gro\xdf"),(0,a.kt)("li",{parentName:"ul"},"R\xfcckgabewert gr\xf6\xdfer Null: das Vergleichsobjekt ist kleiner")),(0,a.kt)("p",null,"Objekte der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo")," k\xf6nnen durch die Implementierung der Methode\n",(0,a.kt)("inlineCode",{parentName:"p"},"int compareTo(o: T)")," der Schnittstelle ",(0,a.kt)("inlineCode",{parentName:"p"},"Comparable<T>")," miteinander verglichen\nwerden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Container.java" showLineNumbers',title:'"Container.java"',showLineNumbers:!0},"public class Container implements Comparable<Container> {\n\n  private String value;\n\n  public Container(String value) {\n    this.value = value;\n  }\n\n  public void setValue(String value) {\n    this.value = value;\n  }\n\n  public String getValue() {\n    return value;\n  }\n\n  @Override\n  public int compareTo(Container o) {\n    return value.compareTo(o.value);\n  }\n\n}\n")),(0,a.kt)("p",null,"In der main-Methode der Startklasse wird mit Hilfe der statischen Methode\n",(0,a.kt)("inlineCode",{parentName:"p"},"void sort(list: List<T>)")," der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Collections")," eine Liste mit Objekten der\nKlasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo")," sortiert. Aufgrund der Implementierung der compareTo-Methode wird\ndie Liste aufsteigend nach dem Attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," sortiert."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    List<Container> containers = new ArrayList<>();\n    containers.add(new Container("Winter"));\n    containers.add(new Container("is"));\n    containers.add(new Container("Coming"));\n\n    Collections.sort(containers);\n  }\n\n}\n')))}u.isMDXComponent=!0}}]);