"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[9592],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(4334);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>C});var r=a(7462),n=a(7294),o=a(4334),s=a(2466),i=a(6775),l=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=b({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),h=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==i&&(d(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function C(e){const t=(0,h.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(4866),o=a(5162),s=a(9960),i=a(614);function l(e){let{pullRequest:t,branchSuffix:a}=e;return r.createElement(n.Z,null,r.createElement(o.Z,{value:"exercise",label:"Exercise",default:!0},r.createElement(i.Z,{language:"console"},`git switch exercises/${a}`),r.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(o.Z,{value:"solution",label:"Solution"},r.createElement(i.Z,{language:"console"},`git switch solutions/${a}`),r.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(o.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",r.createElement(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},1754:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),o=a(7833);const s={title:"Comparators02",description:""},i=void 0,l={unversionedId:"exercises/comparators/comparators02",id:"exercises/comparators/comparators02",title:"Comparators02",description:"",source:"@site/docs/exercises/comparators/comparators02.mdx",sourceDirName:"exercises/comparators",slug:"/exercises/comparators/comparators02",permalink:"/java-docs/pr-preview/pr-2/exercises/comparators/comparators02",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/comparators/comparators02.mdx",tags:[],version:"current",frontMatter:{title:"Comparators02",description:""},sidebar:"exercisesSidebar",previous:{title:"Comparators01",permalink:"/java-docs/pr-preview/pr-2/exercises/comparators/comparators01"},next:{title:"Ausnahmen (Exceptions)",permalink:"/java-docs/pr-preview/pr-2/exercises/exceptions/"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse CoordinateByDistanceToOriginComparator",id:"hinweis-zur-klasse-coordinatebydistancetoorigincomparator",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Erstelle die Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"CoordinateByDistanceToOriginComparator")," anhand des\nabgebildeten Klassendiagramms"),(0,n.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"comparators01"},"Comparators01"),"\nso an, dass die Koordinatenliste mit Hilfe der Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"CoordinateComparator"),"\nsortiert wird")),(0,n.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,n.kt)("mermaid",{value:"classDiagram\n    Comparator~Coordinate~ <|.. CoordinateByDistanceToOriginPointComparator\n\n    class CoordinateByDistanceToOriginPointComparator {\n        +compareTo(coordinate1 Coordinate, coordinate2 Coordinate) int\n    }\n\n    class Comparator~Coordinate~ {\n        <<interface>>\n        +compare(o1 Coordinate, o2 Coordinate) int\n    }"}),(0,n.kt)("h2",{id:"hinweis-zur-klasse-coordinatebydistancetoorigincomparator"},"Hinweis zur Klasse CoordinateByDistanceToOriginComparator"),(0,n.kt)("p",null,"Die Methode ",(0,n.kt)("inlineCode",{parentName:"p"},"int compare(coordinate1: Coordinate, coordinate2: Coordinate)")," soll\nzwei eingehende Koordinaten anhand ihrer jeweiligen Distanz zum Nullpunkt\nvergleichen. Ist die Distanz der ersten Koordinate zum Nullpunkt kleiner als\nbzw. gr\xf6\xdfer als bzw. gleich die der zweiten Koordinate, soll der Wert -1 bzw. 1\nbzw. 0 zur\xfcckgegeben werden."),(0,n.kt)(o.Z,{pullRequest:"48",branchSuffix:"comparators/02",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);