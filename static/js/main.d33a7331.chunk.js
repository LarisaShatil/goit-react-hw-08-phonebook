(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(t,e,r){"use strict";var n,o=r(14),a={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUser:function(t){return t.auth.user},getIsRefreshingUser:function(t){return t.auth.isRefreshing}},c=r(3),i=r(7),u=Object(i.c)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isRefreshingUser:!1},extraReducers:(n={},Object(c.a)(n,o.a.register.fulfilled,function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0}),Object(c.a)(n,o.a.logIn.fulfilled,function(t,e){console.log("21",t,e.payload),t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0}),Object(c.a)(n,o.a.logOut.fulfilled,function(t){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1}),Object(c.a)(n,o.a.fetchCurrentUser.pending,function(t){t.isRefreshingUser=!0}),Object(c.a)(n,o.a.fetchCurrentUser.fulfilled,function(t,e){t.user=e.payload,t.isLoggedIn=!0,t.isRefreshingUser=!1}),Object(c.a)(n,o.a.fetchCurrentUser.rejected,function(t){t.isRefreshingUser=!1}),n)}).reducer;r.d(e,"a",function(){return o.a}),r.d(e,"c",function(){return a}),r.d(e,"b",function(){return u})},101:function(t,e,r){},121:function(t,e,r){"use strict";r.r(e);var n,o,a=r(1),c=r.n(a),i=r(29),u=r.n(i),l=r(9),s=r(11),f=r(7),h=r(17),p=r(38),d=r.n(p),v=r(44),g=r(10),m=r(41),y=Object(s.a)(Object(f.d)({serializableCheck:{ignoredActions:[h.a,h.f,h.b,h.c,h.d,h.e]}})),b={key:"auth",storage:d.a,whitelist:["token"]},w={key:"contacts",storage:d.a,whitelist:["token"]},E=Object(f.a)({reducer:{auth:Object(h.g)(b,g.b),filter:v.a,contacts:Object(h.g)(w,m.b)},middleware:y,devTools:!1}),x=Object(h.h)(E),O=r(16),j=r(58),L=(r(101),r(0)),_=r(42),k=r(32),C=r(33),I=Object(C.a)(O.b)(n||(n=Object(k.a)(["\n  display: inline-block;\n  text-decoration: none;\n  padding: 0.5rem 1rem 0.5rem 0;\n  font-weight: 700;\n  color: var(--black-color);\n  &.active {\n    color: var(--violet-color);\n  }\n"]))),N=function(){var t=Object(l.c)(g.c.getIsLoggedIn);return c.a.createElement("nav",null,c.a.createElement(I,{to:"/"},"Main"),t&&c.a.createElement(I,{to:"/contacts"},"Contacts"))},R=r(30),S=r(27),U=r.n(S);function T(){var t=Object(l.b)(),e=Object(l.c)(g.c.getUser);return console.log(e),c.a.createElement(R.a,null,c.a.createElement("div",{className:U.a.avatar_box},c.a.createElement("img",{src:"https://eu.ui-avatars.com/api/?background=a355d3&color=fff&&length=2&name=".concat(e.name),alt:"avatar",title:"Your avatar",className:U.a.avatar})),c.a.createElement("span",{className:U.a.name},e.name),c.a.createElement("button",{className:U.a.button,type:"button",onClick:function(){return t(g.a.logOut())}},"Sign out"))}var P=Object(C.a)(O.b)(o||(o=Object(k.a)(["\n  display: inline-block;\n  text-decoration: none;\n  padding: 14px;\n  font-weight: 700;\n  color: var(--black-color);\n  &.active {\n    color: var(--main-color);\n  }\n"])));function F(){return c.a.createElement("div",null,c.a.createElement(P,{to:"/register"},"Registration"),c.a.createElement(P,{to:"/login"},"Log in"))}var G=r(63),A=r.n(G);function z(){var t=Object(l.c)(g.c.getIsLoggedIn);return c.a.createElement("header",{className:A.a.header},c.a.createElement(R.a,{style:{padding:"20px"}},c.a.createElement(N,null),t?c.a.createElement(T,null):c.a.createElement(F,null)))}var M=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(z,null),c.a.createElement(a.Suspense,{fallback:null},c.a.createElement(L.b,null)),c.a.createElement(_.Toaster,{position:"top-right",reverseOrder:!1}))},Y=r(55),B=r(14);function H(t){var e=t.component,r=t.redirectTo,n=void 0===r?"/":r,o=Object(l.c)(g.c.getIsLoggedIn),a=Object(l.c)(g.c.getIsRefreshingUser);return!o&&!a?c.a.createElement(L.a,{to:n}):e}function J(t){var e=t.restricted,r=void 0!==e&&e,n=t.redirectTo,o=void 0===n?"/":n,a=t.component;return Object(l.c)(g.c.getIsLoggedIn)&&r?c.a.createElement(L.a,{to:o}):a}var D=r(65),Q=r.n(D),V=function(t){var e=t.children;return c.a.createElement("div",{className:Q.a.container},e)},W=Object(a.lazy)(function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,144))}),X=Object(a.lazy)(function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,145))}),q=Object(a.lazy)(function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,146))}),K=Object(a.lazy)(function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,143))}),Z=function(){var t=Object(l.b)(),e=Object(l.c)(g.c.getIsRefreshingUser);return Object(a.useEffect)(function(){t(B.a.fetchCurrentUser())},[t]),e?c.a.createElement(Y.a,null):c.a.createElement(V,null,c.a.createElement(L.e,null,c.a.createElement(L.c,{exact:!0,path:"/",element:c.a.createElement(M,null)},c.a.createElement(L.c,{index:!0,element:c.a.createElement(W,null)}),c.a.createElement(L.c,{path:"/register",element:c.a.createElement(J,{restricted:!0,redirectTo:"/contacts",component:c.a.createElement(q,null)})}),c.a.createElement(L.c,{path:"/login",element:c.a.createElement(J,{restricted:!0,redirectTo:"/contacts",component:c.a.createElement(X,null)})}),c.a.createElement(L.c,{path:"/contacts",element:c.a.createElement(H,{redirectTo:"/login",component:c.a.createElement(K,null)})}))))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{store:E},c.a.createElement(j.a,{loading:null,persistor:x},c.a.createElement(O.a,{basename:"/goit-react-hw-08-phonebook"},c.a.createElement(Z,null))))),document.getElementById("root"))},14:function(t,e,r){"use strict";var n=r(5),o=r(13),a=r.n(o),c=r(7);function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(k){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),c=new j(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=E(c,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var v={};u(v,o,function(){return this});var g=Object.getPrototypeOf,m=g&&g(g(L([])));m&&m!==e&&r.call(m,o)&&(v=m);var y=d.prototype=h.prototype=Object.create(v);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var n;this._invoke=function(o,a){function c(){return new e(function(n,c){!function n(o,a,c,i){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,c,i)},function(t){n("throw",t,c,i)}):e.resolve(f).then(function(t){l.value=t,c(l)},function(t){return n("throw",t,c,i)})}i(u.arg)}(o,a,n,c)})}return n=n?n.then(c,c):c()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,u(y,"constructor",d),u(d,"constructor",p),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,a,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new w(l(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then(function(t){return t.done?t.value:c.next()})},b(y),u(y,c,"Generator"),u(y,o,function(){return this}),u(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(i&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}a.a.defaults.baseURL="https://connections-api.herokuapp.com";var u=function(t){a.a.defaults.headers.common.Authorization="Bearer ".concat(t)},l=function(){a.a.defaults.headers.common.Authorization=""},s=Object(c.b)("auth/register",function(){var t=Object(n.a)(i().mark(function t(e){var r,n;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.post("/users/signup",e);case 3:return r=t.sent,n=r.data,u(n.token),t.abrupt("return",n);case 9:t.prev=9,t.t0=t.catch(0),console.log("Error register operations",t.t0);case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()),f=Object(c.b)("auth/login",function(){var t=Object(n.a)(i().mark(function t(e){var r,n;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.post("/users/login",e);case 3:return r=t.sent,n=r.data,u(n.token),t.abrupt("return",n);case 9:t.prev=9,t.t0=t.catch(0),console.log("Error login operations",t.t0);case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()),h={register:s,logOut:Object(c.b)("auth/logout",Object(n.a)(i().mark(function t(){return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.post("/users/logout");case 3:l(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("Error logOut",t.t0);case 9:case"end":return t.stop()}},t,null,[[0,6]])}))),logIn:f,fetchCurrentUser:Object(c.b)("auth/refresh",function(){var t=Object(n.a)(i().mark(function t(e,r){var n,o,c,l;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r.getState(),null!==(o=n.auth.token)){t.next=5;break}return console.log("NO token received"),t.abrupt("return",r.rejectWithValue());case 5:return u(o),t.prev=6,t.next=9,a.a.get("/users/current");case 9:return c=t.sent,l=c.data,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(6),console.log("Error fetch current user",t.t0);case 17:case"end":return t.stop()}},t,null,[[6,14]])}));return function(e,r){return t.apply(this,arguments)}}())};e.a=h},15:function(t,e,r){"use strict";var n=r(5),o=r(13),a=r.n(o),c=r(7);function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(k){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),c=new j(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=E(c,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var v={};u(v,o,function(){return this});var g=Object.getPrototypeOf,m=g&&g(g(L([])));m&&m!==e&&r.call(m,o)&&(v=m);var y=d.prototype=h.prototype=Object.create(v);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var n;this._invoke=function(o,a){function c(){return new e(function(n,c){!function n(o,a,c,i){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,c,i)},function(t){n("throw",t,c,i)}):e.resolve(f).then(function(t){l.value=t,c(l)},function(t){return n("throw",t,c,i)})}i(u.arg)}(o,a,n,c)})}return n=n?n.then(c,c):c()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,u(y,"constructor",d),u(d,"constructor",p),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,a,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new w(l(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then(function(t){return t.done?t.value:c.next()})},b(y),u(y,c,"Generator"),u(y,o,function(){return this}),u(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(i&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}a.a.defaults.baseURL="https://connections-api.herokuapp.com";var u={fetchContacts:Object(c.b)("contacts/fetchContacts",Object(n.a)(i().mark(function t(){var e,r;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("REQUEST"),t.prev=1,t.next=4,a.a.get("/contacts");case 4:return e=t.sent,r=e.data,console.log(r),t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(1),console.log("Error fetch contacts: ",t.t0);case 13:case"end":return t.stop()}},t,null,[[1,10]])}))),addContact:Object(c.b)("contacts/addContact",function(){var t=Object(n.a)(i().mark(function t(e){var r,n;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.post("/contacts",e);case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.log("Error addContact",t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()),deleteContact:Object(c.b)("contacts/deleteContact",function(){var t=Object(n.a)(i().mark(function t(e){return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.delete("/contacts/".concat(e));case 3:return t.abrupt("return",e);case 6:t.prev=6,t.t0=t.catch(0),console.log("Error deleteContact",t.t0);case 9:case"end":return t.stop()}},t,null,[[0,6]])}));return function(e){return t.apply(this,arguments)}}())};e.a=u},27:function(t,e,r){t.exports={container:"UserMenu_container__1Pfa5",avatar_box:"UserMenu_avatar_box__2tahD",avatar:"UserMenu_avatar__1_fCH",name:"UserMenu_name__2zPl5",button:"UserMenu_button__1FX9H"}},30:function(t,e,r){"use strict";var n=r(1),o=r.n(n),a=r(62),c=r.n(a);e.a=function(t){var e=t.children;return o.a.createElement("div",{className:c.a.flex_container},e)}},41:function(t,e,r){"use strict";var n,o=r(15),a=r(45),c=r(3),i=r(7),u=Object(i.c)({name:"contacts",initialState:{contacts:[],isLoading:!1,isRefreshing:!1},extraReducers:(n={},Object(c.a)(n,o.a.addContact.pending,function(t){t.isRefreshing=!0}),Object(c.a)(n,o.a.addContact.fulfilled,function(t,e){var r=e.payload;t.contacts.unshift(r),t.isRefreshing=!1}),Object(c.a)(n,o.a.addContact.rejected,function(t){t.isRefreshing=!1}),Object(c.a)(n,o.a.fetchContacts.pending,function(t){t.isRefreshing=!0}),Object(c.a)(n,o.a.fetchContacts.fulfilled,function(t,e){var r=e.payload;t.contacts=r,t.isRefreshing=!1}),Object(c.a)(n,o.a.fetchContacts.rejected,function(t){t.isRefreshing=!1}),Object(c.a)(n,o.a.deleteContact.pending,function(t){t.isRefreshing=!1}),Object(c.a)(n,o.a.deleteContact.fulfilled,function(t,e){var r=e.payload;t.contacts=t.contacts.filter(function(t){return t.id!==r}),t.isRefreshing=!1}),n)}).reducer;r.d(e,"a",function(){return o.a}),r.d(e,"c",function(){return a.a}),r.d(e,"b",function(){return u})},44:function(t,e,r){"use strict";r.d(e,"a",function(){return a}),r.d(e,"c",function(){return c}),r.d(e,"b",function(){return i});var n=r(7),o=Object(n.c)({name:"filter",initialState:{value:""},reducers:{setFilter:function(t,e){return e.payload}}}),a=o.reducer,c=o.actions.setFilter,i=function(t){return t.filter}},45:function(t,e,r){"use strict";var n={getLoading:function(t){return t.contacts.isLoading},getFilter:function(t){return t.contacts.filter},getContacts:function(t){return t.contacts.contacts}};e.a=n},55:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(1),o=r.n(n),a=r(64),c=r.n(a),i=function(){return o.a.createElement("div",{className:c.a.spinner})}},62:function(t,e,r){t.exports={flex_container:"FlexContainer_flex_container__34uu6"}},63:function(t,e,r){t.exports={header:"AppBar_header__2EfLv"}},64:function(t,e,r){t.exports={spinner:"Spinner_spinner__1kGTF"}},65:function(t,e,r){t.exports={container:"AppContainer_container__EHpvw"}},67:function(t,e,r){t.exports=r(121)}},[[67,7,6]]]);
//# sourceMappingURL=main.d33a7331.chunk.js.map