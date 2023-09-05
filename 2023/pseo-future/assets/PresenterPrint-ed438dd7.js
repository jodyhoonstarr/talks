import{d as _,u as d,a as p,c as m,b as h,e as n,f as t,t as s,g as a,F as u,r as f,n as g,h as v,o as l,i as x,j as b,k as y,l as k,m as N,_ as w}from"./index-92758a0c.js";import{N as P}from"./NoteDisplay-c6251cc4.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
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
`),p({title:`Notes - ${m.title}`});const i=h(()=>v.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(l(),n("div",{id:"page-root",style:g(a(N))},[t("div",V,[t("div",L,[t("h1",S,s(a(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(l(!0),n(u,null,f(a(i),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(a(x)),1),b(" "+s(e==null?void 0:e.title)+" ",1),j])]),y(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(l(),n("hr",z)):k("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/home/runner/work/talks/talks/node_modules/.pnpm/@slidev+client@0.43.0-beta.3_postcss@8.4.29_vite@4.4.9/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
