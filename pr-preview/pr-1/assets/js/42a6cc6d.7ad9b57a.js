"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[7939],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(4334);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>C});var r=a(7462),n=a(7294),i=a(4334),l=a(2466),s=a(6775),u=a(1980),o=a(7392),c=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=m(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,o]=b({queryString:a,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),h=(()=>{const e=u??d;return p({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),g(e)}),[o,g,i]),tabValues:i}}var h=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:s,selectValue:u,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=o[a].value;r!==s&&(d(t),u(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,i.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function C(e){const t=(0,h.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(7294),n=a(4866),i=a(5162),l=a(9960),s=a(614);function u(e){let{pullRequest:t,branchSuffix:a}=e;return r.createElement(n.Z,null,r.createElement(i.Z,{value:"exercise",label:"Exercise",default:!0},r.createElement(s.Z,{language:"console"},`git switch exercises/${a}`),r.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(i.Z,{value:"solution",label:"Solution"},r.createElement(s.Z,{language:"console"},`git switch solutions/${a}`),r.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(i.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",r.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},1033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),i=a(7833);const l={title:"ClassDiagrams03",description:""},s=void 0,u={unversionedId:"exercises/uml/class-diagrams03",id:"exercises/uml/class-diagrams03",title:"ClassDiagrams03",description:"",source:"@site/docs/exercises/uml/class-diagrams03.mdx",sourceDirName:"exercises/uml",slug:"/exercises/uml/class-diagrams03",permalink:"/java-docs/preview-refs/pull/1/merge/exercises/uml/class-diagrams03",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/uml/class-diagrams03.mdx",tags:[],version:"current",frontMatter:{title:"ClassDiagrams03",description:""},sidebar:"exercisesSidebar",previous:{title:"ClassDiagrams02",permalink:"/java-docs/preview-refs/pull/1/merge/exercises/uml/class-diagrams02"},next:{title:"ClassDiagrams04",permalink:"/java-docs/preview-refs/pull/1/merge/exercises/uml/class-diagrams04"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse Creature",id:"hinweise-zur-klasse-creature",level:2},{value:"Hinweise zur Klasse CreatureGame",id:"hinweise-zur-klasse-creaturegame",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"Creature")," aus \xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"../oo/oo06"},"OO06")," anhand des\nabgebildeten Klassendiagramms an und Erstelle die Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"CreatureGame")),(0,n.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche einen Kampf zwischen zwei Kreaturen\nsimuliert")),(0,n.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,n.kt)("mermaid",{value:"classDiagram\n    CreatureGame o-- Creature\n\n    class CreatureGame {\n        -creature1 Creature\n        -creature2 Creature\n        -numberOfRounds int\n        +Game(creature1 Creature, creature2 Creature)\n        +simulateFight() void\n        -move(creature1 Creature, creature2 Creature) boolean\n        -print() void\n    }\n\n    class Creature {\n        -name String\n        -attackValue int\n        -hitpoints int\n        +Creature(name String, attackValue int, hitpoints int)\n        +attackCreature(creature Creature) boolean\n        +getName() String\n        +getAttackValue() int\n        +getHitpoints() int\n        +setHitpoints(hitpoints int) void\n        +print() void\n    }"}),(0,n.kt)("h2",{id:"hinweise-zur-klasse-creature"},"Hinweise zur Klasse Creature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Passe die Methode ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean attack(creature: Creature)")," so an, dass der\nR\xfcckgabewert ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," ist, wenn die Lebenspunkte der angegriffenen Kreatur\nkleiner gleich Null sind, bzw. ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),", wenn nicht"),(0,n.kt)("li",{parentName:"ul"},"Die Methode ",(0,n.kt)("inlineCode",{parentName:"li"},"void print()")," soll alle Attribute auf der Konsole ausgeben")),(0,n.kt)("h2",{id:"hinweise-zur-klasse-creaturegame"},"Hinweise zur Klasse CreatureGame"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Der Konstruktor soll alle Attribute initialisieren"),(0,n.kt)("li",{parentName:"ul"},"Die Methode ",(0,n.kt)("inlineCode",{parentName:"li"},"void simulateFight()"),' soll die beiden Kreaturen sich so lange\ngegenseitig angreifen lassen, bis eine der Kreaturen "stirbt"'),(0,n.kt)("li",{parentName:"ul"},"Die Methode ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean move(creature1: Creature, creature2: Creature)")," soll eine\nKreatur die andere angreifen lassen und den R\xfcckgabewert ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),' liefern, wenn\ndie angegriffene Kreatur "stirbt", bzw. ',(0,n.kt)("inlineCode",{parentName:"li"},"false"),", wenn nicht"),(0,n.kt)("li",{parentName:"ul"},"Die Methode ",(0,n.kt)("inlineCode",{parentName:"li"},"void print()")," soll alle Attribute auf der Konsole ausgeben")),(0,n.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"Runde 1: Zombie (2 - 10), Vampir (4 - 6)\nZombie greift Vampir an und erzielt 2 Schaden\nVampir hat noch 4 Lebenspunkte\nVampir greift Zombie an und erzielt 4 Schaden\nZombie hat noch 6 Lebenspunkte\n\u2026\nRunde 3: Zombie (2 - 2), Vampir (4 - 2)\nZombie greift Vampir an und erzielt 2 Schaden\nVampir wurde vernichtet\n")),(0,n.kt)(i.Z,{pullRequest:"38",branchSuffix:"class-diagrams/03",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);