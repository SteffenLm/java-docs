"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[1664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Mathematische Berechnungen",description:"",sidebar_position:70,tags:[]},i=void 0,c={unversionedId:"documentation/calculations",id:"documentation/calculations",title:"Mathematische Berechnungen",description:"",source:"@site/docs/documentation/calculations.md",sourceDirName:"documentation",slug:"/documentation/calculations",permalink:"/java-docs/pr-preview/pr-2/documentation/calculations",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/calculations.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"Mathematische Berechnungen",description:"",sidebar_position:70,tags:[]},sidebar:"documentationSidebar",previous:{title:"Operatoren",permalink:"/java-docs/pr-preview/pr-2/documentation/operators"},next:{title:"Pseudozufallszahlen",permalink:"/java-docs/pr-preview/pr-2/documentation/pseudo-random-numbers"}},s={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Math")," stellt neben einigen Konstanten wie der Kreiszahl ",(0,a.kt)("em",{parentName:"p"},"Pi")," und der\nEulerschen Zahl ",(0,a.kt)("em",{parentName:"p"},"E")," zahlreiche Methoden f\xfcr mathematische Berechnungen zur\nVerf\xfcgung."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    int a = 5;\n    int b = 3;\n    double result;\n\n    result = Math.pow(a, b);\n    System.out.println(result);\n\n    result = Math.sqrt(a);\n    System.out.println(result);\n  }\n\n}\n")))}m.isMDXComponent=!0}}]);