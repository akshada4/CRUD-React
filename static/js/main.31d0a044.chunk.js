(this.webpackJsonpposts=this.webpackJsonpposts||[]).push([[0],{31:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(15),a=n.n(s),i=(n(31),n(9)),o="FETCH_POSTS",r="CREATE_POST",j="UPDATE_POST",l="LIKED_POST",b="DISLIKED-POST",d=n(8),u=n(1),O=Object(d.b)((function(t){return{posts:t.posts}}),{likePost:function(t){return function(e){e({type:l,data:t})}},dislikePost:function(t){return function(e){e({type:b,data:t})}}})((function(t){return Object(u.jsxs)("div",{className:"post-btn",children:[Object(u.jsx)("button",{value:t.value,onClick:function(e){var n=t.posts.posts[parseInt(e.target.value)];t.likePost(n)},children:"Like"}),Object(u.jsx)("button",{value:t.value,onClick:function(e){var n=t.posts.posts[parseInt(e.target.value)];t.dislikePost(n)},children:"Dislike"})]})})),h=function(t){var e=t.posts;return Object(u.jsx)("div",{children:e.map((function(t,e){return Object(u.jsxs)("div",{className:"post",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:t.title}),Object(u.jsx)("p",{children:t.body})]}),Object(u.jsx)(O,{value:t.id})]},t.id)}))})},p=function(t){for(var e=t.totalPosts,n=t.limit,c=t.page,s=t.setPage,a=[],o=function(t,e,n){var c=Math.min(t,n);return e===t-1||e===t?[t-c+1,t]:1===e||2===e?[1,c]:[e-2,e+2]}(Math.ceil(e/n),c,n),r=Object(i.a)(o,2),j=r[0],l=r[1],b=j;b<=l;b++)a.push(b);return Object(u.jsxs)("div",{className:"pagination-buttons",children:[a.map((function(t){return Object(u.jsx)("button",{className:"pagination-btn",onClick:function(t){return s(parseInt(t.target.value))},value:t,children:t},t)})),";"]})},f=n(11),x=function(){return Object(u.jsx)("div",{className:"search",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"search",name:"q",id:"search-input"}),Object(u.jsx)("button",{type:"submit",className:"btn",id:"search-post",children:"Search"})]})})},v=function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)(x,{}),Object(u.jsx)(f.b,{to:"/createpost",children:Object(u.jsx)("div",{className:"header-buttons",id:"new-post-btn",children:Object(u.jsx)("button",{className:"btn",id:"add-post",children:"New Post"})})})]})},m=Object(d.b)((function(t){return{posts:t.posts}}),{getPosts:function(){return function(t){fetch("https://jsonplaceholder.typicode.com/posts").then((function(t){return t.json()})).then((function(e){return t({type:o,data:e})}))}}})((function(t){Object(c.useEffect)((function(){t.getPosts()}),[]);var e=Object(c.useState)(1),n=Object(i.a)(e,2),s=n[0],a=n[1],o=t.posts.posts,r=o.length;return Object(u.jsxs)("div",{children:[Object(u.jsx)(v,{}),Object(u.jsx)(h,{posts:o.slice(s-1,s-1+5)}),r?Object(u.jsx)(p,{totalPosts:r,limit:5,page:s,setPage:a}):""]})})),g=n(2),P=n(4),y=Object(d.b)(null,{createPost:function(t){return function(e){fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(t){return e({type:r,data:t})}))}}})((function(t){var e=Object(c.useState)({title:null,body:null}),n=Object(i.a)(e,2),s=n[0],a=n[1],o=Object(c.useState)(!1),r=Object(i.a)(o,2),j=r[0],l=r[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("header",{children:[Object(u.jsx)(f.b,{to:"/",children:Object(u.jsx)("button",{className:"create-post-btn",id:"home",children:"Home"})}),Object(u.jsx)(x,{})]}),Object(u.jsx)("div",{className:"create-post",children:Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title"}),Object(u.jsx)("textarea",{type:"text",name:"title",id:"title",onChange:function(t){return a(Object(P.a)(Object(P.a)({},s),{},{title:t.target.value}))}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"body",children:"Content"}),Object(u.jsx)("textarea",{type:"text",name:"body",id:"body",onChange:function(t){return a(Object(P.a)(Object(P.a)({},s),{},{body:t.target.value}))}})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",className:"create-post-btn",id:"create-btn",onClick:function(e){e.preventDefault(),t.createPost(s),l(!0)},children:"Create Post"})}),j?Object(u.jsx)("p",{style:{fontSize:"2rem",color:"green"},children:"New Post Created"}):""]})})]})}));var k=function(){return Object(u.jsx)(f.a,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(g.a,{path:"/",exact:!0,component:m}),Object(u.jsx)(g.a,{path:"/createpost",component:y})]})})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),a(t),i(t)}))},C=n(12),N=n(26),T={posts:[],post:{}},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(P.a)(Object(P.a)({},t),{},{posts:e.data});case r:case j:return Object(P.a)(Object(P.a)({},t),{},{post:e.data});default:return t}},_=n(23),D={liked:[],disliked:[]},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(P.a)(Object(P.a)({},t),{},{liked:[].concat(Object(_.a)(t.liked),[e.data])});case b:return Object(P.a)(Object(P.a)({},t),{},{disliked:[].concat(Object(_.a)(t.disliked),[e.data])});default:return t}},I=Object(C.b)({posts:E,likedDislikedPosts:w}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||C.c,L=Object(C.d)(I,F(Object(C.a)(N.a)));a.a.render(Object(u.jsx)(d.a,{store:L,children:Object(u.jsx)(k,{})}),document.getElementById("root")),S()}},[[42,1,2]]]);
//# sourceMappingURL=main.31d0a044.chunk.js.map