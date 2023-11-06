"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[6350],{5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),a=t(4334);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(7462),a=t(7294),s=t(4334),l=t(2466),i=t(6775),u=t(1980),o=t(7392),c=t(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,o]=b({queryString:t,groupId:r}),[d,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),h=(()=>{const e=u??d;return p({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),g(e)}),[o,g,s]),tabValues:s}}var h=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:i,selectValue:u,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),r=o[t].value;r!==i&&(d(n),u(r))},p=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n)},o.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,s.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function E(e){const n=g(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",f.tabList)},a.createElement(v,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function w(e){const n=(0,h.Z)();return a.createElement(E,(0,r.Z)({key:String(n)},e))}},7833:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(7294),a=t(4866),s=t(5162),l=t(9960),i=t(614);function u(e){let{pullRequest:n,branchSuffix:t}=e;return r.createElement(a.Z,null,r.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},r.createElement(i.Z,{language:"console"},`git switch exercises/${t}`),r.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(s.Z,{value:"solution",label:"Solution"},r.createElement(i.Z,{language:"console"},`git switch solutions/${t}`),r.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",r.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`},"PR#",n)))}},2787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=t(7462),a=(t(7294),t(3905)),s=t(7833);const l={title:"Generics04",description:""},i=void 0,u={unversionedId:"exercises/generics/generics04",id:"exercises/generics/generics04",title:"Generics04",description:"",source:"@site/docs/exercises/generics/generics04.mdx",sourceDirName:"exercises/generics",slug:"/exercises/generics/generics04",permalink:"/java-docs/pr-preview/pr-2/exercises/generics/generics04",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/generics/generics04.mdx",tags:[],version:"current",frontMatter:{title:"Generics04",description:""},sidebar:"exercisesSidebar",previous:{title:"Generics03",permalink:"/java-docs/pr-preview/pr-2/exercises/generics/generics03"},next:{title:"Assoziativspeicher (Maps)",permalink:"/java-docs/pr-preview/pr-2/exercises/maps/"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse Tournament",id:"hinweise-zur-klasse-tournament",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Erstelle die Klassen ",(0,a.kt)("inlineCode",{parentName:"li"},"Club")," und ",(0,a.kt)("inlineCode",{parentName:"li"},"Tournament")," anhand des abgebildeten\nKlassendiagramms"),(0,a.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche ein Turnier mit mehreren Vereinen\nerzeugt und die Paarungen ausgibt")),(0,a.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,a.kt)("mermaid",{value:"classDiagram\n    Tournament o-- Club\n    Tournament o-- Pair~Club~\n\n    class Pair~Club~ {\n        <<record>>\n        -partA T\n        -partB T\n    }\n\n    class Tournament {\n        <<record>>\n        -title String\n        -clubs List~Club~\n        -pairs List~Pair~Club~~\n        +addClub(club Club) void\n        +pairs() List~Pair~Club~~\n    }\n\n    class Club {\n        <<record>>\n        -name String\n        -marketValueInMillionEuros int\n    }"}),(0,a.kt)("h2",{id:"hinweise-zur-klasse-tournament"},"Hinweise zur Klasse Tournament"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void addClub(club: Club)")," soll dem Turnier den eingehenden Verein\nhinzuf\xfcgen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"List<Pair<Club>> pairs()")," soll aus den Vereinen des Turniers\nPaarungen f\xfcr Hin- und R\xfcckspiele bilden und zur\xfcckgeben")),(0,a.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"SC Freiburg - Bayern Muenchen\nSC Freiburg - Borussia Dortmund\nBayern Muenchen - SC Freiburg\nBayern Muenchen - Borussia Dortmund\nBorussia Dortmund - SC Freiburg\nBorussia Dortmund - Bayern Muenchen\n")),(0,a.kt)(s.Z,{pullRequest:"65",branchSuffix:"generics/04",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);