import{k as E,U as P,_ as N,f as z,H as D,g as R,V,l as v,W,p as q,X as A,o as l,h as c,w as m,d as H,b as j,y as O,z as U,i as o,j as L,I as S,s as I,T as M,C as X,L as Y,B as G}from"./app.3f041a55.js";import{A as J,P as K}from"./Page.d6f824b7.js";import{P as Q}from"./Pager.2dfb4a89.js";import{u as Z}from"./useBlog.ac259b6d.js";import"./resolveTime.439cd54d.js";const k=({headers:x,activeLink:r})=>{const n=E();return P("ul",{class:{catalog:!0}},x.map(a=>P("li",{class:{active:r===a.slug,[`level-${a.level}`]:!0,[`toc-link-${a.slug}`]:!0},key:a.title,onClick:()=>{n.currentRoute.value.hash!==`#${a.slug}`&&n.push(`#${a.slug}`)}},a.title)))};k.displayName="Catalog";k.props={headers:{type:Object,required:!0},activeLink:{type:String,default:""}};const ee=z({__name:"Post",setup(x){const r=Y();D();const n=R(),a=E(),_=G(),b=_.resolve,F=_.pending,i=V(),$=v(()=>i.value?r.value.headers:[]),w=t=>t.children.length>0?[t].concat(...t.children.map(w)):t,u=v(()=>[].concat(...$.value.map(w))),e=W({headerHeight:0,screenWidth:0,catalogTop:0,activeLink:"",isFixed:!1}),p=40,y=80,d=()=>{for(let s=u.value.length-1;s>=0;s--){const B=u.value[s].slug,C=document.querySelector(`#${B}`);if((C?C.getBoundingClientRect().top:0)<=100){e.activeLink=B;break}}window.pageYOffset>e.headerHeight+p-y?(e.isFixed=!0,e.catalogTop=y):(e.isFixed=!1,e.catalogTop=e.headerHeight+p)},g=()=>{const t=document.querySelector(".post-header");e.headerHeight=t?t.offsetHeight:0,e.screenWidth=document.body.clientWidth,e.catalogTop=e.headerHeight+p};let T;q(()=>{window.addEventListener("scroll",d),g(),window.onresize=()=>(()=>{g(),d()})(),T=a.afterEach(()=>{g()})}),A(()=>{window.removeEventListener("scroll",d),T()});const{post:h}=Z(),f=v(()=>{if(!h.value)return{};const t=h.value.next;t&&(t.text=n.value.postNext);const s=h.value.prev;return s&&(s.text=n.value.postPrev),{next:t,prev:s}});return(t,s)=>(l(),c(X,null,{page:m(()=>[H(M,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:o(b),onBeforeLeave:o(F)},{default:m(()=>[j("div",{class:S(["post-wrapper",{"show-catalog":o(i)}])},[O(H(J,{class:"post-header"},null,512),[[U,o(r).title]]),(l(),c(K,{key:o(r).path,class:"post-content"},{bottom:m(()=>[o(f).next||o(f).prev?(l(),c(Q,{key:0,data:o(f)},null,8,["data"])):L("",!0)]),_:1})),o(i)?(l(),c(o(k),{key:0,headers:o(u),"active-link":e.activeLink,class:S({fixed:e.isFixed}),style:I({top:`${e.catalogTop}px`})},null,8,["headers","active-link","class","style"])):L("",!0)],2)]),_:1},8,["onBeforeEnter","onBeforeLeave"])]),_:1}))}});var le=N(ee,[["__file","Post.vue"]]);export{le as default};
