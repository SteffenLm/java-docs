"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[8784],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(4334);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7462),r=a(7294),s=a(4334),i=a(2466),l=a(6775),o=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,u]=b({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),f=(()=>{const e=o??p;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,s]),tabValues:s}}var f=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(p(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,s.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function x(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=h(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(x,(0,n.Z)({},e,t)))}function k(e){const t=(0,f.Z)();return r.createElement(E,(0,n.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(4866),s=a(5162),i=a(9960),l=a(614);function o(e){let{pullRequest:t,branchSuffix:a}=e;return n.createElement(r.Z,null,n.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(l.Z,{language:"console"},`git switch exercises/${a}`),n.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(s.Z,{value:"solution",label:"Solution"},n.createElement(l.Z,{language:"console"},`git switch solutions/${a}`),n.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",n.createElement(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},725:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),s=a(7833);const i={title:"Exceptions03",description:""},l=void 0,o={unversionedId:"exercises/exceptions/exceptions03",id:"exercises/exceptions/exceptions03",title:"Exceptions03",description:"",source:"@site/docs/exercises/exceptions/exceptions03.mdx",sourceDirName:"exercises/exceptions",slug:"/exercises/exceptions/exceptions03",permalink:"/java-docs/pr-preview/pr-2/exercises/exceptions/exceptions03",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/exceptions/exceptions03.mdx",tags:[],version:"current",frontMatter:{title:"Exceptions03",description:""},sidebar:"exercisesSidebar",previous:{title:"Exceptions02",permalink:"/java-docs/pr-preview/pr-2/exercises/exceptions/exceptions02"},next:{title:"Innere Klassen (Inner Classes)",permalink:"/java-docs/pr-preview/pr-2/exercises/inner-classes/"}},u={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Erstelle die Ausnahmenklassen ",(0,r.kt)("inlineCode",{parentName:"li"},"SalaryIncreaseTooHighException")," und\n",(0,r.kt)("inlineCode",{parentName:"li"},"SalaryDecreaseException")," und passe die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void setSalary(salary: int)"),"\nso an, dass bei einer Gehaltserh\xf6hung gr\xf6\xdfer 10% die Ausnahme\n",(0,r.kt)("inlineCode",{parentName:"li"},"SalaryIncreaseTooHighException")," und bei einer Gehaltsverringerung die\nAusnahme ",(0,r.kt)("inlineCode",{parentName:"li"},"SalaryDecreaseException")," ausgel\xf6st wird"),(0,r.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"../uml/class-diagrams04"},"ClassDiagrams04")," so an, dass ein oder mehrere\nMitarbeiter eine Gehaltserh\xf6hung bekommen")),(0,r.kt)(s.Z,{pullRequest:"51",branchSuffix:"exceptions/03",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);