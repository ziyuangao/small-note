import{_ as c,r as i,j as d,g as l,o as p,c as _,a as r}from"./index-47b91a71.js";const u={setup(){const t=i({page:{}}),a=d(),n=e=>{if(e.type){let o=[];o=require(`../dataPool/${e.type}.json`),o.forEach(s=>{s.id==e.id&&(t.page=s)})}else return{}};return l(()=>{a.query&&n(a.query)}),{state:t}}},f={class:"pageDetail"},g=["innerHTML"],h=["innerHTML"];function M(t,a,n,e,o,s){return p(),_("div",f,[r("div",{innerHTML:e.state.page.title},null,8,g),r("div",{innerHTML:e.state.page.content},null,8,h)])}const y=c(u,[["render",M]]);export{y as default};
