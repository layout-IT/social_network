(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{11:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__1J_X1",dialogs__items:"Dialogs_dialogs__items__2La5L",active:"Dialogs_active__1w4Qp",dialog:"Dialogs_dialog__2BkpL",messages:"Dialogs_messages__3Q49x",message:"Dialogs_message__2U4jD"}},21:function(e,t,s){e.exports={header:"Header_header__fHWjq",login:"Header_login__3bGGL",loginBlock:"Header_loginBlock__3aQOw"}},27:function(e,t,s){e.exports={item:"Post_item__1xhAm",wrapper:"Post_wrapper__lwSv7"}},38:function(e,t,s){e.exports={contant:"ProfileInfo_contant__2QIyq",picture:"ProfileInfo_picture__13Qxy"}},39:function(e,t,s){},4:function(e,t,s){e.exports={container:"Users_container__2BwpC",wrapper:"Users_wrapper__1M_rS",wrapper_button:"Users_wrapper_button__3V9jZ",img:"Users_img__36mqt",itemsL:"Users_itemsL__2_IKl",itemsR:"Users_itemsR__1mP9L",text:"Users_text__2ulzP",marg:"Users_marg__3SjuI",button:"Users_button__1nFpn",wraooer_button:"Users_wraooer_button__bSzwm",texT:"Users_texT__ekBGZ",itemsRL:"Users_itemsRL__LYDgc",itemsRR:"Users_itemsRR__1LgP2",status:"Users_status__2TpqI",number_pages:"Users_number_pages__1QM4j",numbers:"Users_numbers__19fat",active:"Users_active__1QTS_"}},46:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(15),i=s.n(r),c=s(5),o=(s(46),s(9)),u=s.n(o),l=s(0),d=function(){return Object(l.jsxs)("nav",{className:u.a.nav,children:[Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)(c.b,{to:"/profile",activeClassName:u.a.active,children:"Profile"})}),Object(l.jsx)("div",{className:"".concat(u.a.item," ").concat(u.a.active),children:Object(l.jsx)(c.b,{to:"/Dialogs",activeClassName:u.a.active,children:"Messages"})}),Object(l.jsx)("div",{className:"".concat(u.a.item," ").concat(u.a.active),children:Object(l.jsx)(c.b,{to:"/users",activeClassName:u.a.active,children:"Users"})}),Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)("a",{children:"News"})}),Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)("a",{children:"Music"})}),Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)("a",{children:"Settings"})})]})},j=s(3),b=s(12),g=s(2),O={messages:[{id:1,title:"hi"},{id:2,title:"How is yor it kamasutra?"},{id:3,title:"YoO"},{id:4,title:"\u0421ool dude"}],dialogs:[{id:1,name:"Petr"},{id:2,name:"Sasha"},{id:3,name:"Oleg"},{id:4,name:"Victor"}],newMessageBody:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-MESSAGE-BODY":return Object(g.a)(Object(g.a)({},e),{},{newMessageBody:t.body});case"SEND-MESSAGE":var s=e.newMessageBody;return Object(g.a)(Object(g.a)({},e),{},{messages:[].concat(Object(b.a)(e.messages),[{id:(new Date).getTime(),title:s}]),dialogs:Object(b.a)(e.dialogs),newMessageBody:""});default:return e}},f=s(11),h=s.n(f);var m=function(e){return Object(l.jsx)("div",{className:h.a.dialog+" "+h.a.active,children:Object(l.jsx)(c.b,{to:"/dealogs/"+e.id,children:e.name})})};function x(e){return Object(l.jsx)("div",{className:h.a.message,children:e.title})}var _=s(6),v=s(41),w=function(e){return{isAuth:e.auth.isAuth}};function P(e){return Object(_.b)(w)((function(t){var s=t.isAuth,n=Object(v.a)(t,["isAuth"]);return s?Object(l.jsx)(e,Object(g.a)({},n)):Object(l.jsx)(j.a,{to:"/login"})}))}var N=P((function(e){var t=e.dialogs.map((function(e){return Object(l.jsx)(m,{name:e.name,id:e.id},e.id)})),s=e.messages.map((function(e){return Object(l.jsx)(x,{title:e.title},e.id)})),n=e.newMessageBody;return!1===e.isAuth?Object(l.jsx)(j.a,{to:"/login"}):Object(l.jsxs)("div",{className:h.a.dialogs,children:[Object(l.jsx)("div",{className:h.a.dialogs__items,children:t}),Object(l.jsxs)("div",{className:h.a.messages,children:[Object(l.jsx)("div",{children:s}),Object(l.jsxs)("div",{children:[Object(l.jsx)("textarea",{placeholder:"Enter something",onChange:function(t){var s=t.currentTarget.value;e.updateNewMassageBody(s)},value:n,children:" "}),Object(l.jsx)("button",{onClick:function(){e.SendMessage()},children:"Send"})]})]})]})})),S=Object(_.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageBody:e.dialogsPage.newMessageBody}}),(function(e){return{updateNewMassageBody:function(t){e(function(e){return{type:"UPDATE-NEW-MESSAGE-BODY",body:e}}(t))},SendMessage:function(){e({type:"SEND-MESSAGE"})}}}))(N),T=s(17),U=s(18),E=s(20),y=s(19),I=s(37),C=s.n(I).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4f7a90cd-f073-4cab-b304-b853b0aa67c3"}}),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return C.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},L=function(e){return C.post("follow/".concat(e))},k=function(e){return C.delete("follow/".concat(e))},R=function(e){return C.get("profile/"+e)},D=function(){return C.get("auth/me")},G={users:[],pageSize:100,totalUsersCount:0,currentPage:200,isFetching:!1,followingInProgress:[]},M=function(e){return{type:"FOLLOW",userId:e}},F=function(e){return{type:"UNFOLLOW",userId:e}},B=function(e){return{type:"SET-USERS",users:e}},z=function(e){return{type:"SET-USERS-TOTAL-COUNT",totalCount:e}},W=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},H=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRASS",isFetching:e,userId:t}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(g.a)(Object(g.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(g.a)(Object(g.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case"SET-USERS-TOTAL-COUNT":return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.totalCount});case"TOGGLE-IS-FETCHING":return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRASS":return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(b.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return!t.userId}))});default:return e}},q=s(4),Y=s.n(q),J=s.p+"static/media/c3224969bcc3648eb22ca478989fcfbb--mr-robot-robots.f654bcd6.jpg",X=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],n=1;n<=t+1;n++)s.push(n);return Object(l.jsxs)("div",{className:Y.a.wrapper,children:[Object(l.jsx)("ul",{className:Y.a.number_pages,children:s.map((function(t,s){return Object(l.jsx)("li",{className:Y.a.numbers,children:Object(l.jsx)("span",{className:e.currentPage===t?Y.a.active:"",onClick:function(s){return e.onPageChenged(t)},children:t})},s)}))}),e.users.map((function(t){return Object(l.jsxs)("div",{className:Y.a.container,children:[Object(l.jsxs)("div",{className:Y.a.itemsL,children:[Object(l.jsx)(c.b,{to:"/profile/"+t.id,children:Object(l.jsx)("img",{className:Y.a.img,src:null!==t.photos.small?t.photos.small:J,alt:"photo"})}),Object(l.jsx)("div",{className:Y.a.wrapper_button,children:t.followed?Object(l.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){return e.unfollow(t.id)},className:Y.a.button,children:"Unfollow"}):Object(l.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){return e.follow(t.id)},className:Y.a.button,children:"Follow"})})]}),Object(l.jsxs)("div",{className:Y.a.itemsR,children:[Object(l.jsxs)("div",{className:Y.a.itemsRL,children:[Object(l.jsx)("div",{className:Y.a.text,children:t.name}),Object(l.jsx)("div",{className:Y.a.status,children:t.status})]}),Object(l.jsxs)("div",{className:Y.a.itemsRR,children:[Object(l.jsx)("div",{className:Y.a.text,children:"u.location.country"}),Object(l.jsx)("div",{className:Y.a.texT,children:"u.location.city"})]})]})]},t.id)}))]})},K=s.p+"static/media/load.ad2284cf.gif",V=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:K,alt:"loading"})})},Z=function(e){Object(E.a)(s,e);var t=Object(y.a)(s);function s(){return Object(T.a)(this,s),t.apply(this,arguments)}return Object(U.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){var e=this;return Object(l.jsxs)(l.Fragment,{children:[this.props.isFetching?Object(l.jsx)(V,{}):null,Object(l.jsx)(X,{onPageChenged:function(t){e.props.getUsers(t,e.props.pageSize)},follow:this.props.follow,unfollow:this.props.unfollow,users:this.props.users,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,followingInProgress:this.props.followingInProgress})]})}}]),s}(a.a.Component),$=Object(_.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return function(t){t(H(!0,e)),L(e).then((function(s){0===s.data.resultCode&&t(M(e)),t(H(!1,e))}))}},unfollow:function(e){return function(t){t(H(!0,e)),k(e).then((function(s){0===s.data.resultCode&&t(F(e)),t(H(!1,e))}))}},setCurrentPage:function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},toggleIsFollowingProgress:H,getUsers:function(e,t){return function(s){s(W(!0)),A(e,t).then((function(e){s(W(!1)),s(B(e.items)),s(z(e.totalCount))}))}}})(Z),ee=s(38),te=s.n(ee),se=function(e){return e.profile?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:te.a.picture,children:Object(l.jsx)("img",{src:e.profile.photos.large,alt:"ptcture"})}),Object(l.jsx)("div",{children:"ava + description"})]}):Object(l.jsx)(V,{})},ne={posts:[{id:1,title:"hi, how are you",like:12},{id:2,title:"it`s my first post",like:15}],newPostText:"it.comm",profile:null},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var s={id:(new Date).getTime(),title:t.newPostText,like:(new Date).getTime()};return Object(g.a)(Object(g.a)({},e),{},{posts:[].concat(Object(b.a)(e.posts),[s]),newPostText:""});case"UPDATE-NEW-TEXT":return Object(g.a)(Object(g.a)({},e),{},{newPostText:t.newText});case"SET-USER-PROFILE":return Object(g.a)(Object(g.a)({},e),{},{profile:t.profile});default:return e}},re=s(39),ie=s.n(re),ce=s(27),oe=s.n(ce),ue=function(e){return Object(l.jsxs)("div",{className:oe.a.wrapper,children:[Object(l.jsxs)("div",{className:oe.a.item,children:[Object(l.jsx)("img",{src:"https://ru.fishki.net/picsw/112009/18/bonus/face/face_photo_032.jpg"}),e.message]}),Object(l.jsxs)("span",{children:["like ",e.like]})]})},le=function(e){var t=e.posts.map((function(e){return Object(l.jsx)(ue,{message:e.title,like:e.like},e.id)})),s=a.a.createRef();return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"My posts"}),Object(l.jsx)("textarea",{onChange:function(){if(null!==s.current){var t=s.current.value;e.onPostChange(t)}},ref:s,value:e.newPostText}),Object(l.jsx)("button",{onClick:function(){e.addPost(e.newPostText)},children:"Add post"}),Object(l.jsx)("div",{className:ie.a.posts,children:t})]})},de=Object(_.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))},onPostChange:function(t){var s={type:"UPDATE-NEW-TEXT",newText:t};e(s)}}}))(le),je=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)(se,{profile:e.profile}),Object(l.jsx)(de,{})]})};var be=P((function(e){var t=e.match.params.userId;return t||(t="2"),e.getUserProfile(t),Object(l.jsx)(je,Object(g.a)(Object(g.a)({},e),{},{profile:e.profile}))})),ge=Object(j.f)(be),Oe=Object(_.b)((function(e){return{profile:e.profilePage.profile}}),{getUserProfile:function(e){return function(t){R(e).then((function(e){t({type:"SET-USER-PROFILE",profile:e.data})}))}}})(ge),pe=s(21),fe=s.n(pe),he=function(e){return Object(l.jsxs)("header",{className:fe.a.header,children:[Object(l.jsx)("img",{src:"https://www.markakimlik.com/wp-content/uploads/2020/09/Markalasma-Surecinde-Logo-ve-Renk-Duzeni.jpg"}),Object(l.jsx)("div",{className:fe.a.loginBlock,children:e.isAuth?e.login:Object(l.jsx)(c.b,{className:fe.a.login,to:"/login",children:"login"})})]})},me={userId:1,email:"ailru",login:"free",isAuth:!1},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-AUTH-USER-DATA":return Object(g.a)(Object(g.a)(Object(g.a)({},e),t.data),{},{isAuth:!0});default:return e}},_e=function(e){Object(E.a)(s,e);var t=Object(y.a)(s);function s(){return Object(T.a)(this,s),t.apply(this,arguments)}return Object(U.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)(he,Object(g.a)({},this.props))})}}]),s}(a.a.Component),ve=Object(_.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){D().then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.id,a=s.email,r=s.login;e(function(e,t,s){return{type:"SET-AUTH-USER-DATA",data:{userId:e,email:t,login:s}}}(n,a,r))}}))}}})(_e),we=function(){return Object(l.jsx)("div",{children:"LOGIN"})};var Pe=function(){return Object(l.jsxs)("div",{className:"app-wrapper",children:[Object(l.jsx)(ve,{}),Object(l.jsxs)("div",{className:"app-container",children:[Object(l.jsx)(d,{}),Object(l.jsxs)("div",{className:"app-wrapper-contant",children:[Object(l.jsx)(j.b,{path:"/dialogs",render:function(){return Object(l.jsx)(S,{})}}),Object(l.jsx)(j.b,{path:"/profile/:userId",render:function(){return Object(l.jsx)(Oe,{})}}),Object(l.jsx)(j.b,{path:"/users",render:function(){return Object(l.jsx)($,{})}}),Object(l.jsx)(j.b,{path:"/login",render:function(){return Object(l.jsx)(we,{})}})]})]})]})},Ne=s(22),Se={},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se;return e},Ue=s(40),Ee=Object(Ne.b)({profilePage:ae,dialogsPage:p,sideBar:Te,usersPage:Q,auth:xe}),ye=Object(Ne.c)(Ee,Object(Ne.a)(Ue.a));window.store=ye;var Ie=ye;i.a.render(Object(l.jsx)(c.a,{children:Object(l.jsxs)(_.a,{store:Ie,children:[Object(l.jsx)(Pe,{}),","]})}),document.getElementById("root"))},9:function(e,t,s){e.exports={nav:"Nav_nav__2LPqS",item:"Nav_item__2ic2h",active:"Nav_active__22-sI"}}},[[71,1,2]]]);
//# sourceMappingURL=main.e3cba38a.chunk.js.map