import{_ as d,r as p,i as _,b as n,o,c as r,d as u,w as s,F as m,e as f,f as b,a as x}from"./index-47b91a71.js";const v={setup(){const l=p([{id:1,title:"说一个调试bug时遇到的一个离谱问题",name:"a1",html:`测试提出一个bug，页面A下一页跳到页面B后，返回上一页，某些原本存在的控制逻辑失效了，
        我拿到这个bug反馈后，寻思这不就是初始化可能没控制到，导致原本的代码没走么，找一找页面A初始化逻辑应该就可以了。</br>当我去找页面A代码时，明确找到初始化控制表单
        展示的部分，业务写的很详细，注释什么的都有，代码很长，初始化生效了，没有问题，可是为什么从下一页到上一页会出问题呢？我就继续找原因，会不会是返回的时候字段或者传参有问题，
        我就去查一下两个页面之间传参是不是一致，控制台打印数据，emmm也正常，没有问题，这就头大了，这数据都没问题，到底是出在哪，最笨的办法，从上一页按钮开始，不断打印数据，
        查看接口返回。我了个去，我发现，上一页的逻辑不是返回上一个路由，而是去到新路由，新路由是公共组件，再从公共组件的动态组件到一个新的路由去，新的路由不是页面A</br>
        新路由不是页面A，我当时惊掉大牙，下楼抽了两只烟都没想明白为啥要到新页面去。找到问题了就好处理了，新页面没有表单控制的逻辑，加上之后正常跑，可是，这么写对么？`},{id:2,title:"模拟丝滑的无限翻页效果",html:`<a href='/infiniteScroll' style='border-radius: 3px;font-size: 12px;display: inline-block;padding: 5px 8px;color: #fff;
        background: #409EFF;text-decoration: none;'>体验一下</a></br>利用鼠标滑轮事件修改外层盒子样式，同时内部判断需要展示哪一张图，图片改变position属性模拟丝滑滚动.注：存在bug,二次滚动问题`},{id:3,title:"星空背景效果",html:`<a href='/starrySky' style='border-radius: 3px;font-size: 12px;display: inline-block;padding: 5px 8px;color: #fff;
        background: #409EFF;text-decoration: none;'>体验一下</a></br>使用SASS，通过设置box-shadow来实现小星星效果`}]);let t=_("");return{list:l,activeName:t}}},g=["innerHTML"];function k(l,t,y,a,h,A){const i=n("el-collapse-item"),c=n("el-collapse");return o(),r("div",null,[u(c,{modelValue:a.activeName,"onUpdate:modelValue":t[0]||(t[0]=e=>a.activeName=e),accordion:"",class:"collapse-content"},{default:s(()=>[(o(!0),r(m,null,f(a.list,e=>(o(),b(i,{key:e.id,title:e.title,name:e.name},{default:s(()=>[x("div",{innerHTML:e.html},null,8,g)]),_:2},1032,["title","name"]))),128))]),_:1},8,["modelValue"])])}const B=d(v,[["render",k],["__scopeId","data-v-a625ed24"]]);export{B as default};
