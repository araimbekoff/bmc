import{Q as x,B as H}from"./BmcNavigator.3ba54090.js";import{B as y,r as d,a7 as M,c as w,C as _,I as p,G as e,N as $,d as m,E as k,L as v,P as N,Q as T,K as A,a9 as O,F as j,af as L,D as P}from"./index.cc4c8e95.js";import{_ as f,Q as q}from"./plugin-vue_export-helper.6782d79c.js";import{g as Q}from"./saranda-city-data.31318cef.js";import"./drawer-store.724ad532.js";const B=o=>o.width/o.height,R=(o,a)=>{const s=B(o),c=B(a),l={width:0,height:0};return s>c?(l.width=o.height*c,l.height=o.height):(l.width=o.width,l.height=o.width/c),l.scaleToScreen=a.height/l.height,l};const K={class:"main-container"},V=["data"],W=y({__name:"BmcFloorSelectorSvg",props:{src:{}},emits:["onFloorClick","onFloorMouseOver","onFloorMouseOut"],setup(o,{emit:a}){const s=d(null),c=d({width:0,height:0,scaleToScreen:0}),l=M(),h=w(()=>({width:l.width,height:l.height})),b=w(()=>c.value.width?R(c.value,h.value).scaleToScreen:1),C=()=>{if(!s.value||!s.value.contentDocument)return;const t=s.value.contentDocument.querySelector("svg");!t||(c.value={width:Number(t.getAttribute("width")),height:Number(t.getAttribute("height"))},g(t))},g=t=>{t==null||t.querySelectorAll("path").forEach(u=>{S(u,r.value.deselected),u.style.cursor="pointer",u.addEventListener("click",D),u.addEventListener("mouseover",E),u.addEventListener("mouseout",I),u.addEventListener("mousemove",i)})},i=t=>{},r=d({deselected:{opacity:"0",strokeWidth:"",stroke:""},selected:{opacity:"0.4",strokeWidth:"",stroke:"red"}}),D=t=>{const F=t.currentTarget.getAttribute("id");a("onFloorClick",F)},E=t=>{const u=t.currentTarget;S(u,r.value.selected);const F=u.getAttribute("id");a("onFloorMouseOver",F)},I=t=>{const u=t.currentTarget;S(u,r.value.deselected),a("onFloorMouseOut",null)},S=(t,u)=>{!t||(t.style.stroke=u.stroke,t.style.strokeWidth=u.stroke,t.style.opacity=u.opacity)};return(t,u)=>(_(),p("div",K,[e("object",{data:t.src,type:"image/svg+xml",style:$([{scale:b.value},{cursor:"pointer!important"}]),ref_key:"svgObjectRef",ref:s,onLoad:C},null,44,V)]))}});var G=f(W,[["__scopeId","data-v-cd79da1e"]]);const z={class:"image-container"},J=["src"],U=y({__name:"BmcFloorSelectorImg",props:{src:{}},setup(o){return(a,s)=>(_(),p("div",z,[e("img",{src:a.src,class:"image"},null,8,J)]))}});var X=f(U,[["__scopeId","data-v-0bc5b46e"]]);const n=o=>(N("data-v-54fbd7a0"),o=o(),T(),o),Y={class:"selector-card text-white"},Z={class:"full-width full-height column justify-between"},ee={class:"col-3 row"},te=n(()=>e("div",{style:{width:"16px"}},null,-1)),oe={class:"column justify-center"},se=n(()=>e("img",{src:"icons/back-btn/back-btn.svg",class:"true-svg"},null,-1)),ue=n(()=>e("div",{style:{width:"16px"}},null,-1)),ae=n(()=>e("div",{class:"col-8 column justify-center btn-style"}," \u041D\u0430\u0437\u0430\u0434 \u043A \u0433\u0435\u043D\u043F\u043B\u0430\u043D\u0443 ",-1)),ce={key:0,class:"col-9 column full-width justify-end"},le={class:"house-title col-9"},re=n(()=>e("div",{class:"col-3 house-label q-pa-md"},"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u044D\u0442\u0430\u0436, \u043D\u0430\u0432\u0435\u0434\u044F \u043D\u0430 \u043D\u0435\u0433\u043E \u043A\u0443\u0440\u0441\u043E\u0440\u043E\u043C",-1)),ne={key:1,class:"col-9 column full-width justify-end"},ie={class:"col-9 row justify-between"},de={class:"col-5",style:{"padding-left":"12px"}},_e={class:"house-title"},he=n(()=>e("span",{class:"floor-title"},"\u042D\u0442\u0430\u0436",-1)),ve={class:"col-6 column justify-between"},pe=n(()=>e("div",{class:"label-price"},null,-1)),me={class:"label-shadow"},ye={class:"label-shadow"},ge=n(()=>e("div",{class:"label-origin"},[A("\u0426\u0435\u043D\u0430 \u0437\u0430 \u041C"),e("sup",null,"2")],-1)),fe={class:"label-price",style:{"margin-bottom":"8px","margin-top":"-24px","margin-left":"-8px"}},be=n(()=>e("div",{class:"label-shadow"},"\xA0",-1)),Ce=n(()=>e("div",{class:"col-3 house-label q-pa-md",style:{opacity:"0.5"}},"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u044D\u0442\u0430\u0436, \u043D\u0430\u0432\u0435\u0434\u044F \u043D\u0430 \u043D\u0435\u0433\u043E \u043A\u0443\u0440\u0441\u043E\u0440\u043E\u043C",-1)),Se=y({__name:"BmcFloorSelectorCard",props:{floorNumber:{},sarandaCityHouse:{}},setup(o){return console.log("selected city house",{...o.sarandaCityHouse}),(s,c)=>(_(),p("div",Y,[e("div",Z,[e("div",ee,[te,e("div",oe,[m(q,{round:"",dense:""},{default:k(()=>[se]),_:1})]),ue,ae]),s.floorNumber?(_(),p("div",ne,[e("div",ie,[e("div",de,[e("span",_e,v(s.floorNumber),1),he]),e("div",ve,[pe,e("div",me,"\u041E\u0447\u0435\u0440\u0435\u0434\u044C "+v(s.sarandaCityHouse.queue),1),e("div",ye,"\u0410\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E "+v(s.sarandaCityHouse.availability.total)+"/"+v(s.sarandaCityHouse.availability.available),1),ge,e("div",fe,v(s.sarandaCityHouse.price.value)+" $ ",1),be])]),Ce])):(_(),p("div",ce,[e("div",le,v(s.sarandaCityHouse.attributes.title),1),re]))])]))}});var Fe=f(Se,[["__scopeId","data-v-54fbd7a0"]]);const we={class:"floor-tooltip layer-component",style:{zIndex:2}},Be=y({__name:"BmcFloorSelector",props:{sarandaCityHouseType:{},sarandaCityHouseId:{}},setup(o){const a=o,s=O(),c=d(null),l=d(null),h=w(()=>Q(a.sarandaCityHouseId,c.value)),b=(i,r)=>{c.value?l.value={left:`${i-44}px`,top:`${r+44}px`}:l.value=null,console.log({x:i,y:r})},C=i=>{const r=["/house/selector",a.sarandaCityHouseType,a.sarandaCityHouseId,i].join("/");console.log(r),s.push(r)},g=i=>{c.value=i};return(i,r)=>(_(),p(j,null,[m(X,{src:h.value.attributes.imgPath,class:"layer-component",style:{zIndex:0}},null,8,["src"]),m(G,{onOnFloorClick:C,onOnFloorMouseOut:g,onOnFloorMouseOver:g,onOnMouseMove:b,src:h.value.attributes.svgPath,class:"layer-component",style:{zIndex:1,cursor:"pointer"}},null,8,["src"]),e("div",we,[m(Fe,{"floor-number":c.value,"saranda-city-house":h.value},null,8,["floor-number","saranda-city-house"])])],64))}});var ke=f(Be,[["__scopeId","data-v-1852fd74"]]);const Me=y({__name:"BmcHousePage",setup(o){const a=L(),s=d(a.params.houseType),c=d(`${a.params.houseId}`);return(l,h)=>(_(),P(x,{style:{"background-color":"#F1EDEA"}},{default:k(()=>[m(H),m(ke,{"saranda-city-house-type":s.value,"saranda-city-house-id":c.value},null,8,["saranda-city-house-type","saranda-city-house-id"])]),_:1}))}});export{Me as default};
