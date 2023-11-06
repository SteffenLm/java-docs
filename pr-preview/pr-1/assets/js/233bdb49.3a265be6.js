"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7200],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8532:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={title:"Bibliothek",description:"",tags:["inheritance","polymorphy","exceptions","records","maps","optionals"]},o=void 0,l={unversionedId:"exam-exercises/exam-exercises-java2/library",id:"exam-exercises/exam-exercises-java2/library",title:"Bibliothek",description:"",source:"@site/docs/exam-exercises/exam-exercises-java2/library.md",sourceDirName:"exam-exercises/exam-exercises-java2",slug:"/exam-exercises/exam-exercises-java2/library",permalink:"/java-docs/preview-1/exam-exercises/exam-exercises-java2/library",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/library.md",tags:[{label:"inheritance",permalink:"/java-docs/preview-1/tags/inheritance"},{label:"polymorphy",permalink:"/java-docs/preview-1/tags/polymorphy"},{label:"exceptions",permalink:"/java-docs/preview-1/tags/exceptions"},{label:"records",permalink:"/java-docs/preview-1/tags/records"},{label:"maps",permalink:"/java-docs/preview-1/tags/maps"},{label:"optionals",permalink:"/java-docs/preview-1/tags/optionals"}],version:"current",frontMatter:{title:"Bibliothek",description:"",tags:["inheritance","polymorphy","exceptions","records","maps","optionals"]},sidebar:"examExercisesSidebar",previous:{title:"Lego-Baustein",permalink:"/java-docs/preview-1/exam-exercises/exam-exercises-java2/lego-brick"},next:{title:"Messdaten",permalink:"/java-docs/preview-1/exam-exercises/exam-exercises-java2/measurement-data"}},s={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse EBook",id:"hinweis-zur-klasse-ebook",level:2},{value:"Hinweise zur Klasse Library",id:"hinweise-zur-klasse-library",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."),(0,a.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,a.kt)("mermaid",{value:"classDiagram\n    Library o-- Book\n    Library o-- Status\n    Book <|-- EBook\n    Book <|-- PaperBook\n    Book o-- Author\n    EBook o-- FileFormat\n\n    class Library {\n        <<record>>\n        -name String\n        -books Map~Book&#44&#160Status~\n        +addBook(book Book) void\n        +getBookByTitle(title String) Optional~Book~\n        +getPaperBooksByStatus(status Status) List~PaperBook~\n    }\n\n    class Status {\n        <<enumeration>>\n        AVAILABLE = verf\xfcgbar\n        LENT = verliehen\n        -description String\n    }\n\n    class Book {\n        <<abstract>>\n        -id UUID\n        -author Author\n        -title String\n        +Book(author Author, title String)\n    }\n\n    class EBook {\n        -fileFormat FileFormat\n        -fileSizeInKB int\n        +EBook(author Author, title String, fileFormat FileFormat, fileSizeInKB int)\n    }\n\n    class PaperBook {\n        -pages int\n        +PaperBook(author Author, title String, pages int)\n    }\n\n    class Author {\n        <<record>>\n        -name String\n        -nationality String\n    }\n\n    class FileFormat {\n        <<enumeration>>\n        AZW = Amazon Kindle\n        EPUB = Electronic Publication\n        LRF = Portable Reader File\n        -description String\n    }"}),(0,a.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"),(0,a.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"),(0,a.kt)("li",{parentName:"ul"},"Die statische Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"UUID randomUUID()")," der Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"UUID")," gibt eine zuf\xe4llig\nerstellte UUID zur\xfcck")),(0,a.kt)("h2",{id:"hinweis-zur-klasse-ebook"},"Hinweis zur Klasse EBook"),(0,a.kt)("p",null,"Der Konstruktor soll alle Attribute initialisieren. F\xfcr den Fall, dass die\neingehende Dateigr\xf6\xdfe kleiner gleich Null ist, soll die Ausnahme\n",(0,a.kt)("inlineCode",{parentName:"p"},"WrongFileSizeException")," ausgel\xf6st werden."),(0,a.kt)("h2",{id:"hinweise-zur-klasse-library"},"Hinweise zur Klasse Library"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void addBook(book: Book)")," soll der B\xfccherliste (",(0,a.kt)("inlineCode",{parentName:"li"},"books"),") das\neingehende Buch mit dem Status ",(0,a.kt)("inlineCode",{parentName:"li"},"verf\xfcgbar")," hinzuf\xfcgen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"Optional<Book> getBookByTitle(title: String)")," soll das Buch zum\neingehenden Titel als Optional zur\xfcckgeben"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"List<PaperBook> getPaperBooksByStatus(status: Status)")," soll alle\ngedruckten B\xfccher zum eingehenden Status zur\xfcckgeben")))}m.isMDXComponent=!0}}]);