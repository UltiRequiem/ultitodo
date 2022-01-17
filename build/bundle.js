var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){t.value=null==e?"":e}function g(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let $;function m(t){$=t}const v=[],b=[],y=[],x=[],_=Promise.resolve();let k=!1;function j(t){y.push(t)}const z=new Set;let E=0;function w(){const t=$;do{for(;E<v.length;){const t=v[E];E++,m(t),C(t.$$)}for(m(null),v.length=0,E=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];z.has(e)||(z.add(e),e())}y.length=0}while(v.length);for(;x.length;)x.pop()();k=!1,z.clear(),m(t)}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const A=new Set;function T(t,e){t&&t.i&&(A.delete(t),t.i(e))}function N(t,n,u,c){const{fragment:s,on_mount:l,on_destroy:i,after_update:a}=t.$$;s&&s.m(n,u),c||j((()=>{const n=l.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(j)}function O(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(v.push(t),k||(k=!0,_.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(e,r,u,c,s,i,a,f=[-1]){const d=$;m(e);const p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(p.root);let h=!1;if(p.ctx=u?u(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&s(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&P(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();r.intro&&T(e.$$.fragment),N(e,r.target,r.anchor,r.customElement),w()}m(d)}class D{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function L(e){let n,o;return{c(){n=i("footer"),o=i("p"),o.textContent=`© ${e[0]} Eliaz Bobadilla`,p(o,"class","svelte-p9lg99"),p(n,"class","svelte-p9lg99")},m(t,e){s(t,n,e),c(n,o)},p:t,i:t,o:t,d(t){t&&l(n)}}}function S(t){const[e,n]=[(new Date).getUTCFullYear(),2022];return[e<=n?n:`${n}-${e}`]}class U extends D{constructor(t){super(),B(this,t,S,L,u,{})}}function q(t,e,n){const o=t.slice();return o[8]=e[n],o[9]=e,o[10]=n,o}function F(t){let e,n,r,u,h,$,m,v,b,y,x,_,k,j,z,E=t[8].text+"";function w(){t[6].call(v,t[9],t[10])}function C(){return t[7](t[10])}return{c(){e=i("div"),n=i("div"),r=i("span"),u=a(E),h=f(),$=i("div"),m=i("div"),v=i("input"),b=f(),y=i("span"),y.textContent="Done",x=f(),_=i("span"),_.textContent="Remove ❌",k=f(),p(n,"class","item svelte-uzu4je"),p(v,"type","checkbox"),p(_,"id","delete"),p(_,"class","svelte-uzu4je"),p($,"class","options svelte-uzu4je"),p(e,"class","item_container svelte-uzu4je"),g(e,"border-color",t[8].status?"blue":"lightseagreen")},m(o,l){s(o,e,l),c(e,n),c(n,r),c(r,u),c(e,h),c(e,$),c($,m),c(m,v),v.checked=t[8].status,c(m,b),c(m,y),c($,x),c($,_),c(e,k),j||(z=[d(v,"change",w),d(_,"click",C)],j=!0)},p(n,o){t=n,2&o&&E!==(E=t[8].text+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(u,E),2&o&&(v.checked=t[8].status),2&o&&g(e,"border-color",t[8].status?"blue":"lightseagreen")},d(t){t&&l(e),j=!1,o(z)}}}function M(t){let e,n,r,u,a,g,$,m,v,b,y,x,_,k,j,z=t[1],E=[];for(let e=0;e<z.length;e+=1)E[e]=F(q(t,z,e));return x=new U({}),{c(){e=i("main"),n=i("h1"),n.textContent="UltiTodo",r=f(),u=i("div"),a=i("input"),g=f(),$=i("button"),$.textContent="Add",m=f(),v=i("div");for(let t=0;t<E.length;t+=1)E[t].c();var t;b=f(),y=i("div"),(t=x.$$.fragment)&&t.c(),p(n,"class","svelte-uzu4je"),p(a,"class","bordered svelte-uzu4je"),p(a,"type","text"),p(a,"placeholder","Add a new task"),p($,"class","bordered svelte-uzu4je"),p(u,"class","add_task svelte-uzu4je"),p(v,"class","items_container svelte-uzu4je"),p(y,"class","footer svelte-uzu4je"),p(e,"class","svelte-uzu4je")},m(o,l){s(o,e,l),c(e,n),c(e,r),c(e,u),c(u,a),h(a,t[0]),c(u,g),c(u,$),c(e,m),c(e,v);for(let t=0;t<E.length;t+=1)E[t].m(v,null);c(e,b),c(e,y),N(x,y,null),_=!0,k||(j=[d(a,"input",t[5]),d(a,"keypress",t[3]),d($,"click",t[2])],k=!0)},p(t,[e]){if(1&e&&a.value!==t[0]&&h(a,t[0]),18&e){let n;for(z=t[1],n=0;n<z.length;n+=1){const o=q(t,z,n);E[n]?E[n].p(o,e):(E[n]=F(o),E[n].c(),E[n].m(v,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=z.length}},i(t){_||(T(x.$$.fragment,t),_=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),(void 0).c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(x.$$.fragment,t),_=!1},d(t){t&&l(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(E,t),O(x),k=!1,o(j)}}}function R(t,e,n){let o="",r=[];function u(){""!==o&&(n(1,r=[...r,{text:o,status:!1}]),n(0,o=""))}function c(t){r.splice(t,1),n(1,r)}return[o,r,u,t=>{"Enter"===t.key&&u()},c,function(){o=this.value,n(0,o)},function(t,e){t[e].status=this.checked,n(1,r)},t=>c(t)]}return new class extends D{constructor(t){super(),B(this,t,R,M,u,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
