var n=function(n){return n},r=Symbol("none"),t={__brand:r,toString:function(){return"None"}},u=n,o=function(n){return n.__brand===r},e=function(n){return!o(n)},i=function(n,r,t){return e(t)?n(t):r},f=function(n,r){return i(n,t,r)},c=function(n,r){return i(n,Promise.resolve(t),r)},l=function(n){return Number(e(n))},a=function(n,r){return i(n,!1,r)},v=function(n,r){return i((function(r){return n(r)?u(r):t}),t,r)},b=function(r){return f(n,r)},m=function(n,r,t){return i((function(t){return n(r,t)}),r,t)},s=function(n,r,t){return i((function(r){return n(r,t)}),t,r)},_=function(n,r){return i(n,!0,r)},d=function(n){return void 0===n[0]?t:u(n[0])},N=function(n){return null===n?t:u(n)},g=function(n){if(e(n))return n;throw new Error("Cannot get value of None")},h=function(n,r){e(r)&&n(r)},w=function(n,r){return i((function(r){return u(n(r))}),t,r)},P=function(n,r){return i((function(r){return n(r).then(u)}),Promise.resolve(t),r)},S=function(n){return i((function(n){return[n]}),[],n)},p=function(r){return i(n,null,r)},x=function(r,t){return i(n,r,t)};export{t as None,u as Some,f as bind,c as bindAsync,l as count,a as exists,v as filter,b as flat,m as fold,s as foldback,_ as forall,d as fromArray,N as fromNullable,g as get,o as isNone,e as isSome,h as iter,w as map,P as mapAsync,S as toArray,p as toNullable,x as withDefault};
//# sourceMappingURL=index.js.map
