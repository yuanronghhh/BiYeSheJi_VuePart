webpackJsonp([6,4],{0:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}var o=n(98),a=u(o),l=n(101),f=u(l),i=n(5),s=u(i),r=n(128),c=u(r),d=n(99),p=u(d);a.default.use(p.default),a.default.use(c.default),s.default.ajaxSettings.crossDomain=!0;var m=new c.default({mode:"history",routes:f.default}),v=new a.default({router:m});v.$mount("#app")},99:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(98),a=u(o),l=n(5),f=u(l);t.default={install:function(){var e=null;a.default.prototype.$alert=function(t){var n=(0,f.default)('<div class="message-alert"></div>');(0,f.default)("body").append(n),n.html(t),n.addClass("alert-show"),clearTimeout(e),e=setTimeout(function(){(0,f.default)(".message-alert").remove()},2e3)}}}},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){n.e(2,function(){e(n(94))})},o=function(e){n.e(0,function(){e(n(95))})},a={template:"<p>NotFound</p>"},l=[{path:"/",name:"home",component:u},{path:"/login",name:"login",component:o},{path:"/signup",name:"signup",component:function(e){n.e(1,function(){e(n(96))})}},{path:"/user",name:"user",component:function(e){n.e(3,function(){e(n(97))})}},{path:"*",component:a}];t.default=l}});
//# sourceMappingURL=app.6b237cf5679ad290d025.js.map