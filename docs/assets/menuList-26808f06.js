import{_ as i,u,r as l,b as _,o as s,c as n,a as p,F as m,e as b,f as h,w as f,h as v,t as x}from"./index-9ad7bbc9.js";const N={setup(){const a=u();return{state:l({drawerConfig:{direction:"ltr"},menuList:[{id:1,menuName:"首页",path:"/home",disabled:!1},{id:2,menuName:"笔记",path:"/notes",disabled:!1},{id:3,menuName:"生活",path:"/daily",disabled:!0},{id:4,menuName:"关于",path:"/about",disabled:!1}]}),switchRouter:e=>{e.path&&!e.disabled&&a.push(e.path)}}}},k={class:"menuList"};function w(a,o,d,e,y,L){const r=_("el-button");return s(),n("div",null,[p("div",k,[(s(!0),n(m,null,b(e.state.menuList,(t,c)=>(s(),h(r,{type:"text",key:c,disabled:t.disabled,onClick:C=>e.switchRouter(t)},{default:f(()=>[v(x(t.menuName),1)]),_:2},1032,["disabled","onClick"]))),128))])])}const B=i(N,[["render",w],["__scopeId","data-v-8cbd980b"]]);export{B as m};