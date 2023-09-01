import{d,u as _,a as p,c as m,b as h,e as n,f as t,t as o,g as a,F as u,r as f,n as g,h as v,o as l,i as x,j as y,k as b,l as k,m as N,_ as w}from"./index-dee14185.js";import{N as P}from"./NoteDisplay-2f657da2.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},j={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=h(()=>v.map(s=>{var r;return(r=s.meta)==null?void 0:r.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,r)=>(l(),n("div",{id:"page-root",style:g(a(N))},[t("div",V,[t("div",L,[t("h1",S,o(a(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(l(!0),n(u,null,f(a(i),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",j,[t("div",B,[t("div",D,o(e==null?void 0:e.no)+"/"+o(a(x)),1),y(" "+o(e==null?void 0:e.title)+" ",1),H])]),b(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(l(),n("hr",z)):k("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/home/jody/workspace/slides/talks/node_modules/.pnpm/@slidev+client@0.43.0-beta.3_postcss@8.4.29_vite@4.4.9/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
