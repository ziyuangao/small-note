import{_ as m,u as g,r as w,b as e,o as a,f as r,w as n,d as t,h as u,c as p,e as j,t as F,F as I}from"./index-28431914.js";import{m as L}from"./menuList-3aeb2ad8.js";const W={components:{menuList:L},setup(){const i=g();return{state:w({defaultActive:"1",menuList:[{id:1,title:"原生js",disabled:!1,path:"/notes/javaScript",index:"1"},{id:2,title:"jQuery",disabled:!0,path:"/notes/jQuery",index:"2"},{id:3,title:"Vue",disabled:!1,path:"/notes/vue",index:"3"},{id:4,title:"小程序相关",disabled:!0,path:"/notes/miniProgram",index:"4"},{id:4,title:"流水账",disabled:!1,path:"/notes/food",index:"5"},{id:4,title:"练手",disabled:!1,path:"/notes/test",index:"6"}]}),menuItemClick:o=>{i.push(o.path)}}}};function B(i,l,d,o,f,x){const c=e("menu-list"),h=e("el-header"),v=e("el-menu-item"),b=e("el-menu"),k=e("el-aside"),$=e("router-view"),C=e("el-main"),_=e("el-container");return a(),r(_,{class:"notesWrap"},{default:n(()=>[t(c),t(h,{height:"80px",class:"note-header"},{default:n(()=>[u(" 当你在凝视深渊的时候，深渊也正在凝视着你 ")]),_:1}),t(_,null,{default:n(()=>[t(k,{width:"140px"},{default:n(()=>[t(b,{"active-text-color":"#409EFF","default-active":o.state.defaultActive},{default:n(()=>[(a(!0),p(I,null,j(o.state.menuList,(s,y)=>(a(),r(v,{key:y,disabled:s.disabled,onClick:Q=>o.menuItemClick(s),index:s.index},{title:n(()=>[u(F(s.title),1)]),_:2},1032,["disabled","onClick","index"]))),128))]),_:1},8,["default-active"])]),_:1}),t(C,{class:"el-main-notes"},{default:n(()=>[t($)]),_:1})]),_:1})]),_:1})}const N=m(W,[["render",B],["__scopeId","data-v-ca7eff41"]]),V={name:"notesHome",components:{noteWrap:N}},A={class:"noteTemplate"};function E(i,l,d,o,f,x){const c=e("noteWrap");return a(),p("div",A,[t(c)])}const D=m(V,[["render",E]]);export{D as default};
