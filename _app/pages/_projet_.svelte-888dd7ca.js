import{S as L,i as N,s as O,e as p,c as v,T as z,b as d,g as G,d as _,t as S,a as m,h as U,H as u,j as C,k as w,m as B,I as A,U as Q,w as R,x as W,y as X,q as Y,o as Z,B as x}from"../chunks/vendor-e9163b00.js";import{a as ee}from"../chunks/projets-41d834e6.js";function F(l,e,r){const t=l.slice();return t[1]=e[r],t}function J(l){let e,r,t;return{c(){e=p("img"),this.h()},l(s){e=v(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){z(e.src,r=l[1].src)||d(e,"src",r),d(e,"alt",t=l[1].alt),d(e,"class","svelte-18nqfek")},m(s,a){G(s,e,a)},p(s,a){a&1&&!z(e.src,r=s[1].src)&&d(e,"src",r),a&1&&t!==(t=s[1].alt)&&d(e,"alt",t)},d(s){s&&_(e)}}}function K(l){let e,r=l[0].tags.join(" ; ")+"",t;return{c(){e=p("div"),t=S(r),this.h()},l(s){e=v(s,"DIV",{class:!0});var a=m(e);t=U(a,r),a.forEach(_),this.h()},h(){d(e,"class","tags svelte-18nqfek")},m(s,a){G(s,e,a),u(e,t)},p(s,a){a&1&&r!==(r=s[0].tags.join(" ; ")+"")&&C(t,r)},d(s){s&&_(e)}}}function te(l){var H,M;let e,r,t,s,a,g,k=l[0].titre+"",E,b,$,q=l[0].description+"",V,y,j=l[0].images,o=[];for(let n=0;n<j.length;n+=1)o[n]=J(F(l,j,n));let c=((M=(H=l[0])==null?void 0:H.tags)==null?void 0:M.length)>0&&K(l);return{c(){e=p("div"),r=p("div");for(let n=0;n<o.length;n+=1)o[n].c();t=w(),s=p("div"),a=p("div"),g=p("div"),E=S(k),b=w(),$=p("p"),V=S(q),y=w(),c&&c.c(),this.h()},l(n){e=v(n,"DIV",{class:!0});var f=m(e);r=v(f,"DIV",{class:!0});var h=m(r);for(let P=0;P<o.length;P+=1)o[P].l(h);h.forEach(_),t=B(f),s=v(f,"DIV",{class:!0});var I=m(s);a=v(I,"DIV",{class:!0});var i=m(a);g=v(i,"DIV",{class:!0});var D=m(g);E=U(D,k),D.forEach(_),b=B(i),$=v(i,"P",{});var T=m($);V=U(T,q),T.forEach(_),y=B(i),c&&c.l(i),i.forEach(_),I.forEach(_),f.forEach(_),this.h()},h(){d(r,"class","content svelte-18nqfek"),d(g,"class","titre svelte-18nqfek"),d(a,"class","description-fixed svelte-18nqfek"),d(s,"class","description svelte-18nqfek"),d(e,"class","flex svelte-18nqfek")},m(n,f){G(n,e,f),u(e,r);for(let h=0;h<o.length;h+=1)o[h].m(r,null);u(e,t),u(e,s),u(s,a),u(a,g),u(g,E),u(a,b),u(a,$),u($,V),u(a,y),c&&c.m(a,null)},p(n,[f]){var h,I;if(f&1){j=n[0].images;let i;for(i=0;i<j.length;i+=1){const D=F(n,j,i);o[i]?o[i].p(D,f):(o[i]=J(D),o[i].c(),o[i].m(r,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=j.length}f&1&&k!==(k=n[0].titre+"")&&C(E,k),f&1&&q!==(q=n[0].description+"")&&C(V,q),((I=(h=n[0])==null?void 0:h.tags)==null?void 0:I.length)>0?c?c.p(n,f):(c=K(n),c.c(),c.m(a,null)):c&&(c.d(1),c=null)},i:A,o:A,d(n){n&&_(e),Q(o,n),c&&c.d()}}}function se(l,e,r){let{projet:t}=e;return l.$$set=s=>{"projet"in s&&r(0,t=s.projet)},[t]}class re extends L{constructor(e){super();N(this,e,se,te,O,{projet:0})}}function ae(l){let e,r;return e=new re({props:{projet:l[0]}}),{c(){R(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,s){X(e,t,s),r=!0},p(t,[s]){const a={};s&1&&(a.projet=t[0]),e.$set(a)},i(t){r||(Y(e.$$.fragment,t),r=!0)},o(t){Z(e.$$.fragment,t),r=!1},d(t){x(e,t)}}}const oe=async({params:l})=>{try{const e=await ee(l.projet);return e===null?{status:404}:{props:{projet:e}}}catch(e){return console.log(e),{status:404,error:e.message}}};function le(l,e,r){let{projet:t}=e;return l.$$set=s=>{"projet"in s&&r(0,t=s.projet)},[t]}class ce extends L{constructor(e){super();N(this,e,le,ae,O,{projet:0})}}export{ce as default,oe as load};