import{_ as c,u as l,r as u,b as _,o as a,c as n,a as p,F as m,e as h,f,w as b,h as v,t as x}from"./index-fd207cfc.js";const N={setup(){const s=l();return{state:u({drawerConfig:{direction:"ltr"},menuList:[{id:1,menuName:"首页",path:"/home",disabled:!1},{id:2,menuName:"笔记",path:"/notes",disabled:!1},{id:3,menuName:"生活",path:"/daily",disabled:!1},{id:4,menuName:"关于",path:"/about",disabled:!1}]}),switchRouter:e=>{e.path&&!e.disabled&&s.push(e.path)}}}},k={class:"menuList"};function w(s,o,d,e,y,L){const r=_("el-button");return a(),n("div",null,[p("div",k,[(a(!0),n(m,null,h(e.state.menuList,(t,i)=>(a(),f(r,{type:"text",key:i,disabled:t.disabled,onClick:C=>e.switchRouter(t)},{default:b(()=>[v(x(t.menuName),1)]),_:2},1032,["disabled","onClick"]))),128))])])}const B=c(N,[["render",w],["__scopeId","data-v-a5a5e945"]]);export{B as m};
