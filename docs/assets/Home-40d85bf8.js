import{_,r as h,o as a,c as i,a as o,t as b,b as s,d as r,w as f,F as y,e as $,f as x,g as C}from"./index-fd207cfc.js";import{m as j}from"./menuList-ec2b0121.js";const I={setup(){return{state:h({bannerTitleZh:"故事要美必须藏着真话",bannerTitleEn:"If a story wants to be beautiful, it must hide this truth."})}}},T={class:"banner"},w={class:"pcBanner"},B={class:"bannerText"},k=["textContent"],z=["textContent"];function H(t,n,l,e,u,d){return a(),i("div",T,[o("div",w,[o("div",B,[o("p",{textContent:b(e.state.bannerTitleZh)},null,8,k),o("p",{textContent:b(e.state.bannerTitleEn)},null,8,z)])])])}const L=_(I,[["render",H],["__scopeId","data-v-a5ec1849"]]);const E={setup(){return{state:h({carouselConfig:{autoplay:!1,indicatorPosition:"none"},avatarArr:[{id:1,src:"http://gaoziyuan.oss-cn-beijing.aliyuncs.com/img/avatar1.jpg"},{id:2,src:"http://gaoziyuan.oss-cn-beijing.aliyuncs.com/img/avatar2.jpg"},{id:3,src:"http://gaoziyuan.oss-cn-beijing.aliyuncs.com/img/avatar3.jpg"},{id:4,src:"http://gaoziyuan.oss-cn-beijing.aliyuncs.com/img/avatar4.jpg"}]})}}},M=["src"];function P(t,n,l,e,u,d){const c=s("el-carousel-item"),p=s("el-carousel"),m=s("el-card");return a(),i("div",null,[r(m,{shadow:"always",onClick:n[0]||(n[0]=g=>t.$router.push("/about"))},{default:f(()=>[r(p,{height:"360px",class:"carouselBox",autoplay:e.state.carouselConfig.autoplay,"indicator-position":e.state.carouselConfig.indicatorPosition},{default:f(()=>[(a(!0),i(y,null,$(e.state.avatarArr,(g,v)=>(a(),x(c,{key:v},{default:f(()=>[o("img",{src:g.src},null,8,M)]),_:2},1024))),128))]),_:1},8,["autoplay","indicator-position"])]),_:1})])}const W=_(E,[["render",P],["__scopeId","data-v-0ede3bbf"]]);const A={components:{userInfo:W},setup(){const t=h({introduce:`高梓原</br>出生于1993年10月28日,汉族</br>2016年毕业于华北水利水电大学</br>2018年开始从事前端开发,目前就职上海。</br>
            一个典型的矛盾综合体</br>即浪漫又现实,即狂妄又谦虚,即疯狂又冷静。</br>`,introduceCopy:"",timer:null}),n=()=>{t.timer=setInterval(()=>{t.introduceCopy.length-1>=t.introduce.length?(clearInterval(t.timer),t.timer=null,t.introduceCopy=t.introduce):t.introduceCopy=t.introduce.substring(0,t.introduceCopy.length)+"_"},100)};return C(()=>{n()}),{state:t}}},F={class:"homeWrap"},N={class:"content"},V=["innerHTML"];function Z(t,n,l,e,u,d){const c=s("user-info");return a(),i("div",F,[o("div",N,[r(c),o("div",{class:"printer",innerHTML:e.state.introduceCopy},null,8,V)])])}const D=_(A,[["render",Z],["__scopeId","data-v-eecf1109"]]),S={name:"HomePage",components:{bannerTemplate:L,menuList:j,homeWrap:D}},q={class:"home"};function G(t,n,l,e,u,d){const c=s("banner-template"),p=s("menu-list"),m=s("home-wrap");return a(),i("div",q,[r(c),r(p),r(m)])}const O=_(S,[["render",G]]);export{O as default};
