import{o as d,e as S,f as e,z as k,A as z,q as h,d as M,B as y,v,C as B,_ as P,D as H,E as D,c as b,a as A,G as $,H as I,I as R,J as E,K as L,L as q,M as F,N as O,O as U,g as i,k as u,t as W,n as x,P as N,S as V,l as Z,Q as G,R as w,T as J,F as K,U as Q,V as X,s as Y,W as j,X as ee,m as T,Y as te,Z as se,$ as oe,a0 as le,i as ne,a1 as ae,a2 as ie}from"./index-9ccf1b4d.js";import{N as re}from"./NoteDisplay-ddff2492.js";import ce from"./DrawingControls-1bcc9cee.js";const ue={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},de=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),_e=[de];function pe(o,n){return d(),S("svg",ue,_e)}const me={name:"carbon-renew",render:pe},ve={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},he=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),fe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),ge=[he,fe];function xe(o,n){return d(),S("svg",ve,ge)}const we={name:"carbon-time",render:xe},ke="/talks/2023/pseo-explainer-pitch/assets/logo-title-horizontal-96c3c915.png";function ye(){const o=k(Date.now()),n=z({interval:1e3}),_=h(()=>{const t=(n.value-o.value)/1e3,l=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${l}`});function p(){o.value=n.value}return{timer:_,resetTimer:p}}const Se=M({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(o){const n=o,_=h(()=>{var t,l,s;return(s=(l=(t=y.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.note}),p=h(()=>{var t,l,s;return(s=(l=(t=y.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.noteHTML});return(t,l)=>(d(),v(re,{class:B(n.class),note:_.value,"note-html":p.value},null,8,["class","note","note-html"]))}}),Ce=P(Se,[["__file","/home/runner/work/talks/talks/node_modules/.pnpm/@slidev+client@0.43.0-beta.3_postcss@8.4.29_vite@4.4.9/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=o=>(Q("data-v-06c030f4"),o=o(),X(),o),be={class:"bg-main h-full slidev-presenter"},$e={class:"grid-container"},Ne={class:"grid-section top flex"},Ve=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"}},null,-1)),Te=f(()=>e("div",{class:"flex-auto"},null,-1)),Me={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Be=f(()=>e("div",{class:"context"}," current ",-1)),Pe=f(()=>e("div",{class:"context"}," next ",-1)),ze={class:"grid-section note overflow-auto"},He={class:"grid-section bottom"},De={class:"progress-bar"},Ae=M({__name:"Presenter",setup(o){const n=k();H(),D(n);const _=b.titleTemplate.replace("%s",b.title||"Slidev");A({title:`Presenter - ${_}`});const{timer:p,resetTimer:t}=ye(),l=k([]),s=h(()=>$.value<I.value?{route:y.value,clicks:$.value+1}:R.value?{route:E.value,clicks:0}:null);return L(()=>{const C=n.value.querySelector("#slide-content"),r=q(F()),g=O();U(()=>{if(!g.value||j.value||!ee.value)return;const c=C.getBoundingClientRect(),a=(r.x-c.left)/c.width*100,m=(r.y-c.top)/c.height*100;if(!(a<0||a>100||m<0||m>100))return{x:a,y:m}},c=>{Y.cursor=c})}),(C,r)=>{const g=we,c=me;return d(),S(K,null,[e("div",be,[e("div",$e,[e("div",Ne,[Ve,Te,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...a)=>i(t)&&i(t)(...a))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Me,W(i(p)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(i(T))},[u(V,{key:"main",class:"h-full w-full"},{default:N(()=>[u(te,{context:"presenter"})]),_:1}),Be],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(i(T))},[s.value?(d(),v(V,{key:"next",class:"h-full w-full"},{default:N(()=>{var a;return[u(i(oe),{is:(a=s.value.route)==null?void 0:a.component,"clicks-elements":l.value,"onUpdate:clicksElements":r[1]||(r[1]=m=>l.value=m),clicks:s.value.clicks,"clicks-disabled":!1,class:B(i(se)(s.value.route)),route:s.value.route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):Z("v-if",!0),Pe],4),e("div",ze,[(d(),v(Ce,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",He,[u(ae,{persist:!0})]),(d(),v(ce,{key:0}))]),e("div",De,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(i(le)-1)/(i(ne)-1)*100}%`})},null,4)])]),u(ie),u(J,{modelValue:i(w),"onUpdate:modelValue":r[2]||(r[2]=a=>G(w)?w.value=a:null)},null,8,["modelValue"])],64)}}});const Le=P(Ae,[["__scopeId","data-v-06c030f4"],["__file","/home/runner/work/talks/talks/node_modules/.pnpm/@slidev+client@0.43.0-beta.3_postcss@8.4.29_vite@4.4.9/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Le as default};
