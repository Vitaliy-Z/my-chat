(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),c=n(8),a=n.n(c),i=(n(88),n(76)),u=n(27),o=n(163),j=n(70),m=n.n(j)()("https://vitaliy-z-server-socket.herokuapp.com/"),l=n(164),b=n(161),d=(n(120),n(6));function O(e){var t=e.currentUser,n=e.setCurrentUser,s=e.handleBtnEnter;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{children:"\u041a\u0430\u043a \u0412\u0430\u0441 \u0432\u0435\u043b\u0438\u0447\u0430\u0442\u044c? \ud83d\udc81\u200d\u2640\ufe0f"}),Object(d.jsx)(l.a,{autoComplete:"off",id:"outlined-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",variant:"outlined",size:"medium",value:t,onChange:function(e){return n(e.target.value)}}),Object(d.jsx)(b.a,{variant:"contained",color:"primary",onClick:s,children:"\u0412\u043e\u0439\u0442\u0438"})]})}n(125);function f(e){var t=e.item,n=e.currentUser,s=t.user===n?"messeage-user  messeage-current-user ":"messeage-user ";return Object(d.jsx)("div",{className:"message-container",children:Object(d.jsxs)("span",{className:s,children:[t.user,": ",t.text]})})}var h=n(156);n(126);function v(e){var t=e.submitForm,n=Object(s.useState)(""),r=Object(u.a)(n,2),c=r[0],a=r[1];return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=c.trim();n.length&&(t(n),a(""))},children:[Object(d.jsx)(h.a,{className:"input-message",value:c,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)(b.a,{variant:"contained",color:"primary",type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}n(127);function x(e){var t=e.messages,n=e.currentUser,s=e.submitForm;return Object(d.jsxs)("div",{className:"chat",children:[Object(d.jsx)("div",{className:"message-list",children:Object(d.jsx)("div",{className:"messages",children:t.map((function(e,t){return Object(d.jsx)(f,{item:e,currentUser:n},t)}))})}),Object(d.jsx)(v,{submitForm:s})]})}var g=n(160),p=n(162);n(128);function C(e){var t=e.users;return Object(d.jsx)(g.a,{children:Object.values(t).map((function(e,t){return Object(d.jsx)(p.a,{className:"listUsersItem",children:e},t)}))})}function U(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)([]),a=Object(u.a)(c,2),j=a[0],l=a[1],b=Object(s.useState)(!1),f=Object(u.a)(b,2),h=f[0],v=f[1],g=Object(s.useState)([]),p=Object(u.a)(g,2),U=p[0],F=p[1];Object(s.useEffect)((function(){m.on("message",(function(e){h&&F([{user:e.user,text:e.message}].concat(Object(i.a)(U)))})),m.on("users",(function(e){l(e)}))}));return h?Object(d.jsxs)(o.a,{maxWidth:"md",children:[Object(d.jsx)(x,{messages:U,currentUser:n,submitForm:function(e){m.emit("message",{user:n,message:e})}}),Object(d.jsx)(C,{users:j})]}):Object(d.jsx)(o.a,{maxWidth:"md",children:Object(d.jsx)(O,{currentUser:n,setCurrentUser:r,handleBtnEnter:function(){""!==n&&(v(!0),m.emit("change:name",n))}})})}var F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root")),F()},88:function(e,t,n){}},[[129,1,2]]]);
//# sourceMappingURL=main.67c6ef8c.chunk.js.map