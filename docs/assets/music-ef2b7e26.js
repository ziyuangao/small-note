import{_ as P,r as x,g as w,b as o,o as u,c as _,d as l,w as s,h as p,F as V,e as k,f as D}from"./index-63b5e911.js";const E=require("../../dataPool/music.json"),I={setup(){const e=x({loading:!1,timer:null,searchConfig:{type:"",name:"",options:[{value:"",label:"All"},{value:"chinese",label:"Chinese"},{value:"english",label:"English"},{value:"absolute",label:"Absolute"},{value:"asia",label:"Asia"}]},totalData:[],tableConfig:{data:[],currentPage:1,total:null}}),r=n=>{e.tableConfig.currentPage=n,c()},c=()=>{e.loading=!0,setTimeout(()=>{e.totalData=E.filter((n,d)=>{if(n.name.includes(e.searchConfig.name))return n.id=`${d+1}`,e.searchConfig.type&&n.type==e.searchConfig.type,n}),e.tableConfig.data=e.totalData.slice((e.tableConfig.currentPage-1)*10,e.tableConfig.currentPage*10),e.tableConfig.total=e.totalData.length,e.loading=!1},200)},a=n=>{console.log(n)};return w(()=>{c()}),{state:e,handleCurrentChange:r,handleEdit:a,handleSearch:()=>{e.timer||(e.timer=setTimeout(()=>{e.timer=null},500),e.totalData=[],e.tableConfig={data:[],currentPage:1,total:null},c())}}}},N={class:"page"};function S(e,r,c,a,f,n){const d=o("el-input"),g=o("el-col"),m=o("el-option"),b=o("el-select"),h=o("el-row"),i=o("el-table-column"),C=o("el-button"),v=o("el-table"),y=o("el-pagination");return u(),_("div",N,[l(h,{gutter:20},{default:s(()=>[l(g,{span:8},{default:s(()=>[l(d,{modelValue:a.state.searchConfig.name,"onUpdate:modelValue":r[0]||(r[0]=t=>a.state.searchConfig.name=t),onInput:a.handleSearch,clearable:"",size:"small",placeholder:"Please input music name"},{prepend:s(()=>[p("Name：")]),_:1},8,["modelValue","onInput"])]),_:1}),l(g,{span:8},{default:s(()=>[l(b,{modelValue:a.state.searchConfig.type,"onUpdate:modelValue":r[1]||(r[1]=t=>a.state.searchConfig.type=t),onChange:a.handleSearch,size:"small",placeholder:"Please select music type"},{default:s(()=>[(u(!0),_(V,null,k(a.state.searchConfig.options,t=>(u(),D(m,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1}),l(v,{data:a.state.tableConfig.data,laoding:a.state.loading,size:"small",class:"page-table"},{default:s(()=>[l(i,{prop:"id",label:"Index",width:"80",align:"center"}),l(i,{prop:"name",label:"Name"}),l(i,{prop:"type",label:"type",width:"120",align:"center"}),l(i,{label:"操作",width:"120px"},{default:s(t=>[l(C,{onClick:T=>a.handleEdit(t.$index,t.row)},{default:s(()=>[p("编辑")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","laoding"]),l(y,{currentPage:a.state.tableConfig.currentPage,"onUpdate:currentPage":r[2]||(r[2]=t=>a.state.tableConfig.currentPage=t),layout:"prev, pager, next",total:a.state.tableConfig.total,onCurrentChange:a.handleCurrentChange},null,8,["currentPage","total","onCurrentChange"])])}const A=P(I,[["render",S],["__scopeId","data-v-1dbf7449"]]);export{A as default};
