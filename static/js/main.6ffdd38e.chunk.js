(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{10:function(e,t,s){e.exports={nav:"Nav_nav__2LPqS",item:"Nav_item__2ic2h",active:"Nav_active__22-sI"}},15:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__1J_X1",dialogs__items:"Dialogs_dialogs__items__2La5L",active:"Dialogs_active__1w4Qp",dialog:"Dialogs_dialog__2BkpL",messages:"Dialogs_messages__3Q49x",message:"Dialogs_message__2U4jD"}},24:function(e,t,s){e.exports={item:"Post_item__1xhAm",wrapper:"Post_wrapper__lwSv7"}},34:function(e,t,s){e.exports={header:"Header_header__fHWjq"}},35:function(e,t,s){e.exports={contant:"ProfileInfo_contant__2QIyq",picture:"ProfileInfo_picture__13Qxy"}},36:function(e,t,s){},46:function(e,t,s){},5:function(e,t,s){e.exports={container:"Users_container__2BwpC",wrapper:"Users_wrapper__1M_rS",img:"Users_img__36mqt",itemsL:"Users_itemsL__2_IKl",itemsR:"Users_itemsR__1mP9L",text:"Users_text__2ulzP",marg:"Users_marg__3SjuI",button:"Users_button__1nFpn",wraooer_button:"Users_wraooer_button__bSzwm",texT:"Users_texT__ekBGZ",itemsRL:"Users_itemsRL__LYDgc",itemsRR:"Users_itemsRR__1LgP2",status:"Users_status__2TpqI"}},71:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(18),i=s.n(c),r=s(12),o=(s(46),s(34)),l=s.n(o),d=s(1),j=function(){return Object(d.jsx)("header",{className:l.a.header,children:Object(d.jsx)("img",{src:"https://www.markakimlik.com/wp-content/uploads/2020/09/Markalasma-Surecinde-Logo-ve-Renk-Duzeni.jpg"})})},u=s(10),b=s.n(u),m=function(){return Object(d.jsxs)("nav",{className:b.a.nav,children:[Object(d.jsx)("div",{className:b.a.item,children:Object(d.jsx)(r.b,{to:"/profile",activeClassName:b.a.active,children:"Profile"})}),Object(d.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(d.jsx)(r.b,{to:"/Dialogs",activeClassName:b.a.active,children:"Messages"})}),Object(d.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(d.jsx)(r.b,{to:"/users",activeClassName:b.a.active,children:"Users"})}),Object(d.jsx)("div",{className:b.a.item,children:Object(d.jsx)("a",{children:"News"})}),Object(d.jsx)("div",{className:b.a.item,children:Object(d.jsx)("a",{children:"Music"})}),Object(d.jsx)("div",{className:b.a.item,children:Object(d.jsx)("a",{children:"Settings"})})]})},O=s(35),p=s.n(O),x=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:p.a.picture,children:Object(d.jsx)("img",{src:"https://ru-wallp.com/w/2010/5/26/1398401274727650902.png",alt:"ptcture"})}),Object(d.jsx)("div",{children:"ava + description"})]})},h=s(14),g=s(4),_={posts:[{id:1,title:"hi, how are you",like:12},{id:2,title:"it`s my first post",like:15}],newPostText:"it.comm"},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var s={id:(new Date).getTime(),title:t.newPostText,like:(new Date).getTime()};return Object(g.a)(Object(g.a)({},e),{},{posts:[].concat(Object(h.a)(e.posts),[s]),newPostText:""});case"UPDATE-NEW-TEXT":return Object(g.a)(Object(g.a)({},e),{},{newPostText:t.newText});default:return e}},v=s(36),w=s.n(v),N=s(24),P=s.n(N),y=function(e){return Object(d.jsxs)("div",{className:P.a.wrapper,children:[Object(d.jsxs)("div",{className:P.a.item,children:[Object(d.jsx)("img",{src:"https://ru.fishki.net/picsw/112009/18/bonus/face/face_photo_032.jpg"}),e.message]}),Object(d.jsxs)("span",{children:["like ",e.like]})]})},T=function(e){var t=e.posts.map((function(e){return Object(d.jsx)(y,{message:e.title,like:e.like},e.id)})),s=n.a.createRef();return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"My posts"}),Object(d.jsx)("textarea",{onChange:function(){if(null!==s.current){var t=s.current.value;e.onPostChange(t)}},ref:s,value:e.newPostText}),Object(d.jsx)("button",{onClick:function(){e.addPost(e.newPostText)},children:"Add post"}),Object(d.jsx)("div",{className:w.a.posts,children:t})]})},S=s(13),k=Object(S.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))},onPostChange:function(t){var s={type:"UPDATE-NEW-TEXT",newText:t};e(s)}}}))(T),D=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),Object(d.jsx)(k,{})]})},E=s(3),U={messages:[{id:1,title:"hi"},{id:2,title:"How is yor it kamasutra?"},{id:3,title:"YoO"},{id:4,title:"\u0421ool dude"}],dialogs:[{id:1,name:"Petr"},{id:2,name:"Sasha"},{id:3,name:"Oleg"},{id:4,name:"Victor"}],newMessageBody:""},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-MESSAGE-BODY":return Object(g.a)(Object(g.a)({},e),{},{newMessageBody:t.body});case"SEND-MESSAGE":var s=e.newMessageBody;return Object(g.a)(Object(g.a)({},e),{},{messages:[].concat(Object(h.a)(e.messages),[{id:(new Date).getTime(),title:s}]),dialogs:Object(h.a)(e.dialogs),newMessageBody:""});default:return e}},M=s(15),B=s.n(M);var R=function(e){return Object(d.jsx)("div",{className:B.a.dialog+" "+B.a.active,children:Object(d.jsx)(r.b,{to:"/dealogs/"+e.id,children:e.name})})};function C(e){return Object(d.jsx)("div",{className:B.a.message,children:e.title})}var A=Object(S.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageBody:e.dialogsPage.newMessageBody}}),(function(e){return{updateNewMassageBody:function(t){e(function(e){return{type:"UPDATE-NEW-MESSAGE-BODY",body:e}}(t))},SendMessage:function(){e({type:"SEND-MESSAGE"})}}}))((function(e){var t=e.dialogs.map((function(e){return Object(d.jsx)(R,{name:e.name,id:e.id},e.id)})),s=e.messages.map((function(e){return Object(d.jsx)(C,{title:e.title},e.id)})),a=e.newMessageBody;return Object(d.jsxs)("div",{className:B.a.dialogs,children:[Object(d.jsx)("div",{className:B.a.dialogs__items,children:t}),Object(d.jsxs)("div",{className:B.a.messages,children:[Object(d.jsx)("div",{children:s}),Object(d.jsxs)("div",{children:[Object(d.jsx)("textarea",{placeholder:"Enter something",onChange:function(t){var s=t.currentTarget.value;e.updateNewMassageBody(s)},value:a,children:" "}),Object(d.jsx)("button",{onClick:function(){e.SendMessage()},children:"Send"})]})]})]})})),I={users:[]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(g.a)(Object(g.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(g.a)(Object(g.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(g.a)(Object(g.a)({},e),{},{users:[].concat(Object(h.a)(e.users),Object(h.a)(t.users))});default:return e}},F=s(37),q=s(38),G=s(41),Q=s(40),Y=s(5),z=s.n(Y),H=s(39),J=s.n(H),X=s.p+"static/media/c3224969bcc3648eb22ca478989fcfbb--mr-robot-robots.f654bcd6.jpg",K=function(e){Object(G.a)(s,e);var t=Object(Q.a)(s);function s(){return Object(F.a)(this,s),t.apply(this,arguments)}return Object(q.a)(s,[{key:"componentDidMount",value:function(){var e=this;J.a.get("https://social-network.samuraijs.com/api/1.0/users").then((function(t){e.props.setUsers(t.data.items)}))}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:z.a.wrapper,children:this.props.users.map((function(t){return Object(d.jsxs)("div",{className:z.a.container,children:[Object(d.jsxs)("div",{className:z.a.itemsL,children:[Object(d.jsx)("img",{className:z.a.img,src:null!==t.photos.small?t.photos.small:X,alt:"photos"}),Object(d.jsx)("div",{className:z.a.wraooer_button,children:t.followed?Object(d.jsx)("button",{onClick:function(){e.props.unFollow(t.id)},className:z.a.button,children:"Follow"}):Object(d.jsx)("button",{onClick:function(){e.props.follow(t.id)},className:z.a.button,children:"Unfollow"})})]}),Object(d.jsxs)("div",{className:z.a.itemsR,children:[Object(d.jsxs)("div",{className:z.a.itemsRL,children:[Object(d.jsx)("div",{className:z.a.text,children:t.name}),Object(d.jsx)("div",{className:z.a.status,children:t.status})]}),Object(d.jsxs)("div",{className:z.a.itemsRR,children:[Object(d.jsx)("div",{className:z.a.text,children:"u.location.country"}),Object(d.jsx)("div",{className:z.a.texT,children:"u.location.city"})]})]})]},t.id)}))})}}]),s}(n.a.Component),V=Object(S.b)((function(e){return{users:e.usersPage.users}}),(function(e){return{follow:function(t){e(function(e){return{type:"FOLLOW",userId:e}}(t))},unFollow:function(t){e(function(e){return{type:"UNFOLLOW",userId:e}}(t))},setUsers:function(t){e(function(e){return{type:"SET-USERS",users:e}}(t))}}}))(K);var Z=function(){return Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"app-container",children:[Object(d.jsx)(m,{}),Object(d.jsxs)("div",{className:"app-wrapper-contant",children:[Object(d.jsx)(E.a,{path:"/dialogs",render:function(){return Object(d.jsx)(A,{})}}),Object(d.jsx)(E.a,{path:"/profile",render:function(){return Object(d.jsx)(D,{})}}),Object(d.jsx)(E.a,{path:"/users",render:function(){return Object(d.jsx)(V,{})}})]})]})]})},$=s(25),ee={},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee;return e},se=Object($.a)({profilePage:f,dialogsPage:L,sideBar:te,usersPage:W}),ae=Object($.b)(se);i.a.render(Object(d.jsx)(r.a,{children:Object(d.jsxs)(S.a,{store:ae,children:[Object(d.jsx)(Z,{}),","]})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.6ffdd38e.chunk.js.map