(this["webpackJsonphot-dogs"]=this["webpackJsonphot-dogs"]||[]).push([[0],[,,,,function(e,t,d){e.exports=d(12)},,,,,function(e,t,d){},function(e,t,d){},function(e,t,d){},function(e,t,d){"use strict";d.r(t);var a=d(0),r=d.n(a),i=d(2),n=d.n(i),c=(d(9),d(3)),l=[{id:1,img:"1.jpg",title:"Hot dog",description:"1/4 lb. all-beef hot dog topped with shredded lettuce, crispy bacon, bleu cheese crumbles and drizzled with ranch dressing.",price:"13$"},{id:2,img:"2.jpg",title:"Hot dog",description:"1/4 lb. all-beef hot dog topped with shredded lettuce, crispy bacon, bleu cheese crumbles and drizzled with ranch dressing.",price:"14$"},{id:3,img:"3.jpg",title:"Hot dog",description:"1/4 lb. all-beef hot dog topped with shredded lettuce, crispy bacon, bleu cheese crumbles and drizzled with ranch dressing.",price:"12$"},{id:4,img:"4.jpg",title:"Hot dog",description:"1/4 lb. all-beef hot dog topped with shredded lettuce, crispy bacon, bleu cheese crumbles and drizzled with ranch dressing.",price:"10$"},{id:5,img:"5.jpg",title:"Hot dog",description:"1/4 lb. all-beef hot dog topped with shredded lettuce, crispy bacon, bleu cheese crumbles and drizzled with ranch dressing.",price:"16$"},{id:6,img:"6.jpg",title:"Hot dog",description:"1/4 lb. all-beef hot dog topped with shredded lettuce, crispy bacon, bleu cheese crumbles and drizzled with ranch dressing.",price:"11$"},{id:7,img:"7.jpg",title:"Hot dog",description:"1/4 lb. all-beef hot dog topped with shredded lettuce, crispy bacon, bleu cheese crumbles and drizzled with ranch dressing.",price:"19$"}],o=(d(10),d(11),function(e){var t=e.good,d=e.onDeleted,a=(t.id,t.img),i=t.title,n=t.description,c=t.price;return r.a.createElement("li",{key:t.id,className:"Card__item"},r.a.createElement("div",null,r.a.createElement("img",{src:"img/".concat(a),alt:i,className:"Card__img"})),r.a.createElement("h2",{className:"Card__title"},i),r.a.createElement("p",{className:"Card__description"},n),r.a.createElement("span",{className:"Card__price"},c),r.a.createElement("button",{type:"button",className:"Card__btn btn__edit"},"Edit"),r.a.createElement("div",{className:"Card-btn__wrapper"},r.a.createElement("button",{type:"button",className:"Card__btn btn__upgrate"},"Upgate"),r.a.createElement("button",{onClick:function(){return d(t.id)},type:"button",className:"Card__btn btn__delete"},"Delete")))}),s=function(e){var t=e.goods,d=e.onGoodDeleted;return r.a.createElement("ul",{className:"Card__list"},t.map((function(e){return r.a.createElement(o,{good:e,onDeleted:d})})))};var p=function(){var e=Object(a.useState)(l),t=Object(c.a)(e,2),d=t[0],i=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("button",{type:"button",className:"header__btn"}," Add hot-dog "))),r.a.createElement(s,{goods:d,onGoodDeleted:function(e){i(d.filter((function(t){return t.id!=e})))}}))};n.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.2fa58cd5.chunk.js.map