(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(29),s=n(4),a={messages:[{id:1,title:"hi"},{id:2,title:"How is yor it kamasutra?"},{id:3,title:"YoO"},{id:4,title:"\u0421ool dude"}],dialogs:[{id:1,name:"Petr"},{id:2,name:"Sasha"},{id:3,name:"Oleg"},{id:4,name:"Victor"}]},c=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:(new Date).getTime(),title:n}]),dialogs:Object(r.a)(e.dialogs)});default:return e}}},12:function(e,t,n){e.exports={container:"Users_container__2BwpC",wrapper:"Users_wrapper__1M_rS",wrapper_button:"Users_wrapper_button__3V9jZ",img:"Users_img__36mqt",itemsL:"Users_itemsL__2_IKl",itemsR:"Users_itemsR__1mP9L",text:"Users_text__2ulzP",marg:"Users_marg__3SjuI",button:"Users_button__1nFpn",wraooer_button:"Users_wraooer_button__bSzwm",texT:"Users_texT__ekBGZ",itemsRL:"Users_itemsRL__LYDgc",itemsRR:"Users_itemsRR__1LgP2",status:"Users_status__2TpqI"}},123:function(e,t,n){},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(114),s=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4f7a90cd-f073-4cab-b304-b853b0aa67c3"}}),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return s.post("follow/".concat(e))},unfollow:function(e){return s.delete("follow/".concat(e))},getProfile:function(e){return console.warn("worning"),c.getProfile(e)}},c={getProfile:function(e){return s.get("profile/"+e)},getStatus:function(e){return s.get("profile/status/"+e)},updateStatus:function(e){return s.put("profile/status",{status:e})}},i={me:function(){return s.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s.post("auth/login",{email:e,password:t,rememberMe:n})},loginOut:function(){return s.delete("auth/login")}}},20:function(e,t,n){e.exports={nav:"Nav_nav__2LPqS",item:"Nav_item__2ic2h",active:"Nav_active__22-sI"}},247:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(56),c=n.n(a),i=n(35),o=n(36),u=n(40),l=n(39),d=(n(123),n(21)),p=n(20),j=n.n(p),f=n(1),b=function(){return Object(f.jsxs)("nav",{className:j.a.nav,children:[Object(f.jsx)("div",{className:j.a.item,children:Object(f.jsx)(d.b,{to:"/profile",activeClassName:j.a.active,children:"Profile"})}),Object(f.jsx)("div",{className:"".concat(j.a.item," ").concat(j.a.active),children:Object(f.jsx)(d.b,{to:"/Dialogs",activeClassName:j.a.active,children:"Messages"})}),Object(f.jsx)("div",{className:"".concat(j.a.item," ").concat(j.a.active),children:Object(f.jsx)(d.b,{to:"/users",activeClassName:j.a.active,children:"Users"})}),Object(f.jsx)("div",{className:j.a.item,children:Object(f.jsx)("a",{children:"News"})}),Object(f.jsx)("div",{className:j.a.item,children:Object(f.jsx)("a",{children:"Music"})}),Object(f.jsx)("div",{className:j.a.item,children:Object(f.jsx)("a",{children:"Settings"})})]})},O=n(13),h=n(29),g=n(4),m=n(8),v=n.n(m),x=n(18),w=n(15),_=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(g.a)(Object(g.a)({},e),r):e}))},S=function(){var e=Object(x.a)(v.a.mark((function e(t,n,r,s){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(C(!0,t)),e.next=3,r(t);case 3:0===e.sent.data.resultCode&&n(s(t)),n(C(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),P={users:[],pageSize:100,totalUsersCount:0,currentPage:200,isFetching:!1,followingInProgress:[]},U=function(e){return{type:"FOLLOW",userId:e}},I=function(e){return{type:"UNFOLLOW",userId:e}},N=function(e){return{type:"SET-USERS",users:e}},T=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},y=function(e){return{type:"SET-USERS-TOTAL-COUNT",totalCount:e}},E=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},C=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRASS",isFetching:e,userId:t}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:_(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:_(e.users,t.userId,"id",{followed:!1})});case"SET-USERS":return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case"SET-USERS-TOTAL-COUNT":return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.totalCount});case"TOGGLE-IS-FETCHING":return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRASS":return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(h.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return!t.userId}))});default:return e}},L=n(12),A=n.n(L),R=n(113),z=n(59),F=n.n(z),D=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=t+1;s++)n.push(s);var a=Math.ceil(t/e.splittingAccountsInto),c=Object(r.useState)(1),i=Object(R.a)(c,2),o=i[0],u=i[1],l=(o-1)*e.splittingAccountsInto+1,d=o*e.splittingAccountsInto;return Object(f.jsxs)("div",{className:F.a.wrapper,children:[o>1?Object(f.jsx)("button",{onClick:function(){return u(o-1)},children:"prev"}):"",n.filter((function(e){return e>=l&&e<=d})).map((function(t,n){return Object(f.jsx)("li",{className:F.a.numbers,children:Object(f.jsx)("span",{className:e.currentPage===t?F.a.active:"",onClick:function(){return e.onPageChenged(t)},children:t})},n)})),a>o?Object(f.jsx)("button",{onClick:function(){return u(o+1)},children:" next "}):""]})},G=n.p+"static/media/c3224969bcc3648eb22ca478989fcfbb--mr-robot-robots.f654bcd6.jpg",M=function(e){var t=e.user;return Object(f.jsxs)("div",{className:A.a.container,children:[Object(f.jsxs)("div",{className:A.a.itemsL,children:[Object(f.jsx)(d.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{className:A.a.img,src:null!==t.photos.small?t.photos.small:G,alt:"photo"})}),Object(f.jsx)("div",{className:A.a.wrapper_button,children:t.followed?Object(f.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){return e.unfollow(t.id)},className:A.a.button,children:"Unfollow"}):Object(f.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){return e.follow(t.id)},className:A.a.button,children:"Follow"})})]}),Object(f.jsxs)("div",{className:A.a.itemsR,children:[Object(f.jsxs)("div",{className:A.a.itemsRL,children:[Object(f.jsx)("div",{className:A.a.text,children:t.name}),Object(f.jsx)("div",{className:A.a.status,children:t.status})]}),Object(f.jsxs)("div",{className:A.a.itemsRR,children:[Object(f.jsx)("div",{className:A.a.text,children:"user.location.country"}),Object(f.jsx)("div",{className:A.a.texT,children:"user.location.city"})]})]})]})},B=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],r=1;r<=t+1;r++)n.push(r);return Object(f.jsxs)("div",{className:A.a.wrapper,children:[Object(f.jsx)(D,{currentPage:e.currentPage,onPageChenged:e.onPageChenged,pageSize:e.pageSize,totalUsersCount:e.totalUsersCount,splittingAccountsInto:10}),e.users.map((function(t){return Object(f.jsx)(M,{user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow},t.id)}))]})},H=n(34),W=n(117),Z=function(e){return e.usersPage.pageSize},q=function(e){return e.usersPage.totalUsersCount},V=function(e){return e.usersPage.currentPage},Y=function(e){return e.usersPage.isFetching},J=function(e){return e.usersPage.followingInProgress},K=Object(W.a)((function(e){return e.usersPage.users}),(function(e){return e})),X=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){var e=this;return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(H.a,{}):null,Object(f.jsx)(B,{onPageChenged:function(t){e.props.getUsers(t,e.props.pageSize)},follow:this.props.follow,unfollow:this.props.unfollow,users:this.props.users,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component);console.log("MSTP");var Q=Object(O.b)((function(e){return{users:K(e),pageSize:Z(e),totalUsersCount:q(e),currentPage:V(e),isFetching:Y(e),followingInProgress:J(e)}}),{follow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:S(e,n,w.c.follow.bind(w.c),U);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:S(e,n,w.c.unfollow.bind(w.c),I);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:T,toggleIsFollowingProgress:C,getUsers:function(e,t){return function(){var n=Object(x.a)(v.a.mark((function n(r){var s;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(E(!0)),n.next=3,w.c.getUsers(e,t);case 3:s=n.sent,r(E(!1)),r(T(e)),r(N(s.items)),r(y(s.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(X),$=n(60),ee=n.n($),te=function(e){return Object(f.jsxs)("header",{className:ee.a.header,children:[Object(f.jsx)("img",{src:"https://www.markakimlik.com/wp-content/uploads/2020/09/Markalasma-Surecinde-Logo-ve-Renk-Duzeni.jpg"}),Object(f.jsx)("div",{className:ee.a.loginBlock,children:e.isAuth?Object(f.jsxs)("div",{children:[e.login," - ",Object(f.jsx)("button",{onClick:e.logOut,children:"logOut"})]}):Object(f.jsx)(d.b,{className:ee.a.login,to:"/login",children:"login"})})]})},ne={userId:1,email:"ailru",login:"free",isAuth:!1},re=function(e,t,n,r){return{type:"auth/SET-AUTH-USER-DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},se=function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n,r,s,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,a=r.email,c=r.login,t(re(s,a,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-AUTH-USER-DATA":return Object(g.a)(Object(g.a)({},e),t.payload);default:return e}},ce=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(te,Object(g.a)({},this.props))})}}]),n}(s.a.Component),ie=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logOut:function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.loginOut();case 2:0===e.sent.data.resultCode&&t(re(0,"0","0",!1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ce),oe=n(249),ue=n(248),le=n(9),de=Object(ue.a)({form:"login"})((function(e){return Object(f.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(f.jsx)("div",{children:Object(f.jsx)(oe.a,{name:"email",placeholder:"email",component:"input"})}),Object(f.jsx)("div",{children:Object(f.jsx)(oe.a,{name:"password",placeholder:"password",component:"input",type:"password"})}),Object(f.jsxs)("div",{children:[Object(f.jsx)(oe.a,{type:"checkbox",name:"rememberMe",component:"input"}),"remember me"]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Login"})})]})})),pe=Object(O.b)((function(e){return{isAuth:e.auth.isAuth}}),{logIn:function(e,t,n){return function(){var r=Object(x.a)(v.a.mark((function r(s){return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,w.a.login(e,t,n);case 2:0===r.sent.data.resultCode&&s(se());case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(f.jsx)(le.a,{to:"/profile"}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsx)(de,{onSubmit:function(t){e.logIn(t.email,t.password,t.rememberMe)}})]})})),je={initializesd:!1},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED-SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{initializesd:!0});default:return e}},be=function(e){return function(t){return Object(f.jsx)(s.a.Suspense,{fallback:Object(f.jsx)("div",{children:Object(f.jsx)(H.a,{})}),children:Object(f.jsx)(e,Object(g.a)({},t))})}},Oe=s.a.lazy((function(){return n.e(4).then(n.bind(null,258))})),he=s.a.lazy((function(){return n.e(3).then(n.bind(null,257))})),ge=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(f.jsxs)("div",{className:"app-wrapper",children:[Object(f.jsx)(ie,{}),Object(f.jsxs)("div",{className:"app-container",children:[Object(f.jsx)(b,{}),Object(f.jsxs)("div",{className:"app-wrapper-contant",children:[Object(f.jsx)(le.b,{path:"/dialogs",render:be(Oe)}),Object(f.jsx)(le.b,{path:"/profile/:userId",render:be(he)}),Object(f.jsx)(le.b,{path:"/users",render:function(){return Object(f.jsx)(Q,{})}}),Object(f.jsx)(le.b,{path:"/login",render:function(){return Object(f.jsx)(pe,{})}})]})]})]}):Object(f.jsx)(H.a,{})}}]),n}(r.Component),me=Object(O.b)((function(e){return{initialized:e.app.initializesd}}),{initializeApp:function(){return function(e){var t=e(se());Promise.all([t]).then((function(){e({type:"INITIALIZED-SUCCESS"})}))}}})(ge),ve=n(10),xe=n(82),we=n(112),_e={},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e;return e},Pe=n(116),Ue=n(250),Ie=Object(ve.c)({profilePage:xe.b,dialogsPage:we.b,sideBar:Se,usersPage:k,auth:ae,form:Ue.a,app:fe}),Ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.d,Te=Object(ve.e)(Ie,Ne(Object(ve.a)(Pe.a)));window.__store__=Te;var ye=Te;c.a.render(Object(f.jsx)(d.a,{basename:"/social_network",children:Object(f.jsxs)(O.a,{store:ye,children:[Object(f.jsx)(me,{}),","]})}),document.getElementById("root"))},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n.p+"static/media/load.77dd8198.gif",s=n(1),a=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:r,alt:"loading"})})}},59:function(e,t,n){e.exports={wrapper:"Paginator_wrapper__1WRr9",numbers:"Paginator_numbers__UU_WV",active:"Paginator_active__TiSZ_"}},60:function(e,t,n){e.exports={header:"Header_header__fHWjq",login:"Header_login__3bGGL",loginBlock:"Header_loginBlock__3aQOw"}},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return f}));var r=n(8),s=n.n(r),a=n(18),c=n(29),i=n(4),o=n(15),u={posts:[{id:1,title:"hi, how are you",like:12},{id:2,title:"it`s my first post",like:15}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},d=function(e){return{type:"SET-STATUS",status:e}},p=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n({type:"SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(d(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0!==t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:(new Date).getTime(),title:t.newPostText,like:(new Date).getTime()};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case"SET-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"SET-USER-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"DEL-POST":return Object(i.a)(Object(i.a)({},e),{},{posts:Object(c.a)(e.posts).filter((function(e){return e.id!==t.id}))});default:return e}}}},[[247,1,2]]]);
//# sourceMappingURL=main.48a5cfea.chunk.js.map