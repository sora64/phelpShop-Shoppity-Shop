(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},70:function(e,t,a){e.exports=a(84)},75:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(58),l=a.n(c),o=(a(75),a(22)),i=a(9),m=a(7),s=a(65),u=a(67),d=a(96),p=a(94),g=a(64),E=a(20),f=a(91);var v,b,h,w,y=function(e){var t=e.image,a=e.name,n=e._id,c=e.price,l=e.quantity;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(n)},r.a.createElement("img",{alt:a,src:"/images/".concat(t)}),r.a.createElement("p",null,a)),r.a.createElement("div",null,r.a.createElement("div",null,l," ",function(e,t){return 1===t?e:e+"s"}("item",l)," in stock"),r.a.createElement("span",null,"$",c)),r.a.createElement("button",null,"Add to cart"))},N=a(23),O=a(95),j=Object(O.a)(v||(v=Object(N.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),k=(Object(O.a)(b||(b=Object(N.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(O.a)(h||(h=Object(N.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),x=Object(O.a)(w||(w=Object(N.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),S=a(40),_=a.n(S);var $=function(e){var t=e.currentCategory,a=Object(f.a)(j),n=a.loading,c=a.data,l=(null===c||void 0===c?void 0:c.products)||[];return r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),l.length?r.a.createElement("div",{className:"flex-row"},(t?l.filter((function(e){return e.category._id===t})):l).map((function(e){return r.a.createElement(y,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),n?r.a.createElement("img",{src:_.a,alt:"loading"}):null)};var C=function(e){var t=e.setCategory,a=Object(f.a)(k).data,n=(null===a||void 0===a?void 0:a.categories)||[];return r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),n.map((function(e){return r.a.createElement("button",{key:e._id,onClick:function(){t(e._id)}},e.name)})))},F=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"container"},r.a.createElement(C,{setCategory:c}),r.a.createElement($,{currentCategory:a}))};var P=function(){var e=Object(m.f)().id,t=Object(n.useState)({}),a=Object(E.a)(t,2),c=a[0],l=a[1],o=Object(f.a)(j),s=o.loading,u=o.data,d=(null===u||void 0===u?void 0:u.products)||[];return Object(n.useEffect)((function(){d.length&&l(d.find((function(t){return t._id===e})))}),[d,e]),r.a.createElement(r.a.Fragment,null,c?r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,c.name),r.a.createElement("p",null,c.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",c.price," ",r.a.createElement("button",null,"Add to Cart"),r.a.createElement("button",null,"Remove from Cart")),r.a.createElement("img",{src:"/images/".concat(c.image),alt:c.name})):null,s?r.a.createElement("img",{src:_.a,alt:"loading"}):null)};var D,I,q,L=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},T=function(){return r.a.createElement("div",null,r.a.createElement(L,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},W=a(29),A=a(31),U=a.n(A),B=a(43),R=a(93),H=Object(O.a)(D||(D=Object(N.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),G=(Object(O.a)(I||(I=Object(N.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Object(O.a)(q||(q=Object(N.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])))),J=a(62),z=a(63),M=a(50),Y=a.n(M),K=new(function(){function e(){Object(J.a)(this,e)}return Object(z.a)(e,[{key:"getProfile",value:function(){return Y()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Y()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());var Q=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(E.a)(t,2),c=a[0],l=a[1],m=Object(R.a)(H),s=Object(E.a)(m,2),u=s[0],d=s[1].error,p=function(){var e=Object(B.a)(U.a.mark((function e(t){var a,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,K.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.target,a=t.name,n=t.value;l(Object(o.a)(Object(o.a)({},c),{},Object(W.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:p},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:g})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:g})),d?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var V=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(E.a)(t,2),c=a[0],l=a[1],m=Object(R.a)(G),s=Object(E.a)(m,1)[0],u=function(){var e=Object(B.a)(U.a.mark((function e(t){var a,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,K.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,a=t.name,n=t.value;l(Object(o.a)(Object(o.a)({},c),{},Object(W.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:u},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var X=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),r.a.createElement("nav",null,K.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return K.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/login"},"Login")))))};var Z=function(){var e,t=Object(f.a)(x).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,l=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(a)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",l)))}))))}))):null))},ee=Object(s.a)({uri:"/graphql"}),te=Object(g.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(o.a)(Object(o.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),ae=new u.a({link:te.concat(ee),cache:new d.a});var ne=function(){return r.a.createElement(p.a,{client:ae},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:F}),r.a.createElement(m.a,{exact:!0,path:"/login",component:Q}),r.a.createElement(m.a,{exact:!0,path:"/signup",component:V}),r.a.createElement(m.a,{exact:!0,path:"/orderHistory",component:Z}),r.a.createElement(m.a,{exact:!0,path:"/products/:id",component:P}),r.a.createElement(m.a,{component:T})))))},re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(t,e)}))}}()}},[[70,1,2]]]);
//# sourceMappingURL=main.238ecf84.chunk.js.map