import{_ as r,u as f,b as c,o as a,c as l,d,a as i,t as p,r as h,F as v,e as x,f as b}from"./index-fd207cfc.js";import{m as j}from"./menuList-ec2b0121.js";const $={props:{data:{type:Object}},setup(){const e=f();return{navigateTo:t=>{t.path&&e.push({path:t.path,query:{type:t.type,id:t.id}})}}}},C={class:"list-item-info"},D=["textContent"],k=["textContent"];function B(e,s,t,n,m,u){const o=c("el-image");return a(),l("div",{class:"list-item",onClick:s[0]||(s[0]=_=>n.navigateTo(t.data))},[d(o,{src:t.data.src,class:"list-item-img"},null,8,["src"]),i("div",C,[i("p",{class:"list-item-info-title",textContent:p(t.data.title)},null,8,D),i("p",{class:"list-item-info-time",textContent:p(t.data.time)},null,8,k)])])}const I=r($,[["render",B],["__scopeId","data-v-c60a035a"]]);const T={components:{listItem:I,menuList:j},setup(){return{state:h({list:[{src:"http://gaoziyuan.oss-cn-beijing.aliyuncs.com/img/202208060214.jpg",title:"雨后闷热,桃花潭公园中鱼一尾,芜湖~",time:"2022年08月06日 02:14",path:"/pageDetail",id:3,type:"fish"},{src:"http://gaoziyuan.oss-cn-beijing.aliyuncs.com/img/7.30.jpg",title:"凌晨凉爽,桃花潭公园中鱼一尾,芜湖~",time:"2022年07月30日 04:40",path:"/pageDetail",id:2,type:"fish"},{src:"http://gaoziyuan.oss-cn-beijing.aliyuncs.com/img/7.8.jpg",title:"初夏闷热,浐河A5半岛西侧中鱼一尾,芜湖~",time:"2022年07月08日 22:23",path:"/pageDetail",id:1,type:"fish"}]})}}},z={class:"daily"},F={class:"dailyTemplate"};function L(e,s,t,n,m,u){const o=c("menu-list"),_=c("list-item");return a(),l("div",z,[d(o),i("ul",F,[(a(!0),l(v,null,x(n.state.list,(g,y)=>(a(),b(_,{key:y,data:g,class:"list-item"},null,8,["data"]))),128))])])}const q=r(T,[["render",L],["__scopeId","data-v-b83e5d7e"]]);export{q as default};
