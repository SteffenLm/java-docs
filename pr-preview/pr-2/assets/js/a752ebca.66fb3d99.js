"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9762],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,g=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(g,s(s({ref:n},d),{},{components:t})):r.createElement(g,s({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6387:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={title:"Assoziativspeicher (Maps)",description:"",sidebar_position:280,tags:["maps"]},s=void 0,l={unversionedId:"documentation/maps",id:"documentation/maps",title:"Assoziativspeicher (Maps)",description:"",source:"@site/docs/documentation/maps.md",sourceDirName:"documentation",slug:"/documentation/maps",permalink:"/java-docs/pr-preview/pr-2/documentation/maps",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/maps.md",tags:[{label:"maps",permalink:"/java-docs/pr-preview/pr-2/tags/maps"}],version:"current",sidebarPosition:280,frontMatter:{title:"Assoziativspeicher (Maps)",description:"",sidebar_position:280,tags:["maps"]},sidebar:"documentationSidebar",previous:{title:"Generische Programmierung",permalink:"/java-docs/pr-preview/pr-2/documentation/generics"},next:{title:"Optionals",permalink:"/java-docs/pr-preview/pr-2/documentation/optionals"}},o={},p=[],d={toc:p},m="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Unter einem Assoziativspeicher (Map) versteht man eine Menge zusammengeh\xf6riger\nPaare von Objekten. Das erste Objekt stellt dabei den Schl\xfcssel (Key), das\nzweite Objekt den Wert (Value) dar. Jeder Schl\xfcssel kann dabei nur einmal in\neinem Assoziativspeicher vorhanden sein. Aufgrund dieses Aufbaus werden\nAssoziativspeicher auch als W\xf6rterb\xfccher bezeichnet."),(0,a.kt)("mermaid",{value:"flowchart LR\n    subgraph Noten\n        direction LR\n        hans(Hans) -.-> g1((2.3))\n        peter(Peter) -.-> g2((1.7))\n        lisa(Lisa) -.-> g3((1.8))\n        max(Max) -.-> g4((4.2))\n    end"}),(0,a.kt)("p",null,"Um auf die Eintr\xe4ge, Schl\xfcssel und Werte eines Assoziativspeichers zugreifen\nk\xf6nnen, stellt die Schnittstelle ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," die Methoden\n",(0,a.kt)("inlineCode",{parentName:"p"},"Set<Entry<K, V>> entrySet()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Set<K> keySet()")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection<V> values()"),"\nzur Verf\xfcgung."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n\n    Map<Integer, String> foos = new HashMap<>();\n    foos.put(834, "Hans");\n    foos.put(269, "Peter");\n    foos.put(771, "Lisa");\n\n    for (Entry<Integer, String> entry : foos.entrySet()) {\n      System.out.println(entry.getKey());\n      System.out.println(entry.getValue());\n    }\n\n    for (Integer i : foos.keySet()) {\n      System.out.println(i);\n    }\n\n    for (String s : foos.values()) {\n      System.out.println(s);\n    }\n\n  }\n\n}\n')),(0,a.kt)("p",null,"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"HashMap<K, V>")," implementiert den Assoziativspeicher in Form einer\nHashtabelle. F\xfcr den Einsatz einer Hashtabelle ist es zwingend erforderlich,\ndass die Klasse, die den Schl\xfcssel bildet, die Methoden ",(0,a.kt)("inlineCode",{parentName:"p"},"int hashCode()")," und\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean equals(object: Object)")," gem\xe4\xdf den entsprechenden\nDokumentationskommentaren \xfcberschrieben hat. Im Gegensatz zu einem Bin\xe4rbaum\nliegen die Paare in einer Hashtabelle unsortiert vor."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Index"),(0,a.kt)("th",{parentName:"tr",align:null},"Schl\xfcssel"),(0,a.kt)("th",{parentName:"tr",align:null},"Wert"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"Hans"),(0,a.kt)("td",{parentName:"tr",align:null},"2.3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"Peter"),(0,a.kt)("td",{parentName:"tr",align:null},"1.7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"13"),(0,a.kt)("td",{parentName:"tr",align:null},"Lisa"),(0,a.kt)("td",{parentName:"tr",align:null},"1.8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"14"),(0,a.kt)("td",{parentName:"tr",align:null},"Max"),(0,a.kt)("td",{parentName:"tr",align:null},"4.2")))),(0,a.kt)("p",null,"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"TreeMap<K, V>")," implementiert den Assoziativspeicher in Form eines\nBin\xe4rbaumes. Als Datenstruktur wird dabei ein balancierter Baum verwendet, d.h.\nspezielle Einf\xfcge- und L\xf6schoperationen stellen sicher, dass der Baum nicht zu\neiner linearen Liste entartet. Da die Paare in einem Bin\xe4rbaum sortiert\nvorliegen, ist es f\xfcr den Einsatz zwingend erforderlich, dass die Klasse, die\nden Schl\xfcssel bildet, die Schnittstelle ",(0,a.kt)("inlineCode",{parentName:"p"},"Comparable<T>")," implementiert hat.\nAlternativ kann dem Konstruktor der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"TreeMap<K, V>")," ein Komparator f\xfcr\nden Schl\xfcssel mitgegeben werden."),(0,a.kt)("mermaid",{value:"flowchart TD\n    max --\x3e lisa\n    lisa --\x3e hans\n    max --\x3e peter\n\n    hans(Hans) -.-> g1((2.3))\n    peter(Peter) -.-> g2((1.7))\n    lisa(Lisa) -.-> g3((1.8))\n    max(Max) -.-> g4((4.2))"}))}c.isMDXComponent=!0}}]);