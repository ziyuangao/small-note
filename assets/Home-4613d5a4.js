import{_,r as h,o as a,c as i,a as o,t as y,b as s,d as r,w as f,F as v,e as $,f as x,g as C}from"./index-f0d1e034.js";import{m as j}from"./menuList-94c8622d.js";const I={setup(){return{state:h({bannerTitleZh:"故事要美必须藏着真话",bannerTitleEn:"If a story wants to be beautiful, it must hide this truth."})}}},T={class:"banner"},w={class:"pcBanner"},B={class:"bannerText"},k=["textContent"],z=["textContent"];function H(t,n,l,e,d,u){return a(),i("div",T,[o("div",w,[o("div",B,[o("p",{textContent:y(e.state.bannerTitleZh)},null,8,k),o("p",{textContent:y(e.state.bannerTitleEn)},null,8,z)])])])}const L=_(I,[["render",H],["__scopeId","data-v-7a7ddd01"]]);const E={setup(){return{state:h({carouselConfig:{autoplay:!0,indicatorPosition:"none"},avatarArr:[{id:1,src:"http://gaoziyuan.oss-cn-beijing.aliyuncs.com/img/ai1.jpg"},{id:2,src:"http://gaoziyuan.oss-cn-beijing.aliyuncs.com/img/ai2.jfif"},{id:3,src:"http://gaoziyuan.oss-cn-beijing.aliyuncs.com/img/avatar1.jpg"},{id:4,src:"http://gaoziyuan.oss-cn-beijing.aliyuncs.com/img/avatar2.jpg"}]})}}},M=["src"];function P(t,n,l,e,d,u){const c=s("el-carousel-item"),p=s("el-carousel"),m=s("el-card");return a(),i("div",null,[r(m,{shadow:"always",onClick:n[0]||(n[0]=g=>t.$router.push("/about"))},{default:f(()=>[r(p,{height:"360px",class:"carouselBox",autoplay:e.state.carouselConfig.autoplay,"indicator-position":e.state.carouselConfig.indicatorPosition},{default:f(()=>[(a(!0),i(v,null,$(e.state.avatarArr,(g,b)=>(a(),x(c,{key:b},{default:f(()=>[o("img",{src:g.src},null,8,M)]),_:2},1024))),128))]),_:1},8,["autoplay","indicator-position"])]),_:1})])}const W=_(E,[["render",P],["__scopeId","data-v-679cacb5"]]);const A={components:{userInfo:W},setup(){const t=h({introduce:"高梓原</br>出生于1993年10月28日,汉族</br>2016年毕业于华北水利水电大学</br>2018年开始从事前端开发,目前就职上海。</br>",introduceCopy:"",timer:null}),n=()=>{t.timer=setInterval(()=>{t.introduceCopy.length-1>=t.introduce.length?(clearInterval(t.timer),t.timer=null,t.introduceCopy=t.introduce):t.introduceCopy=t.introduce.substring(0,t.introduceCopy.length)+"_"},100)};return C(()=>{n()}),{state:t}}},F={class:"homeWrap"},N={class:"content"},V=["innerHTML"];function Z(t,n,l,e,d,u){const c=s("user-info");return a(),i("div",F,[o("div",N,[r(c),o("div",{class:"printer",innerHTML:e.state.introduceCopy},null,8,V)])])}const D=_(A,[["render",Z],["__scopeId","data-v-b762f1f7"]]),S={name:"HomePage",components:{bannerTemplate:L,menuList:j,homeWrap:D}},q={class:"home"};function G(t,n,l,e,d,u){const c=s("banner-template"),p=s("menu-list"),m=s("home-wrap");return a(),i("div",q,[r(c),r(p),r(m)])}const O=_(S,[["render",G]]);export{O as default};
