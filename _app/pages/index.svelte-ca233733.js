import{S as N,i as P,s as E,e as x,t as S,c as y,a as V,h as q,d as c,b as f,f as u,g as L,J as g,j as A,G as I,w as _,k as w,x as h,m as C,y as v,q as p,o as d,B as j}from"../chunks/vendor-07959245.js";function $(l){let e,a,r;return{c(){e=x("a"),a=x("span"),r=S(l[0]),this.h()},l(n){e=y(n,"A",{class:!0,href:!0,style:!0});var s=V(e);a=y(s,"SPAN",{class:!0});var i=V(a);r=q(i,l[0]),i.forEach(c),s.forEach(c),this.h()},h(){f(a,"class","svelte-18gb5jv"),f(e,"class","projetINV svelte-18gb5jv"),f(e,"href",l[1]),u(e,"--bgImage",l[3]),u(e,"--Colorprojet",l[2])},m(n,s){L(n,e,s),g(e,a),g(a,r)},p(n,[s]){s&1&&A(r,n[0]),s&2&&f(e,"href",n[1]),s&4&&u(e,"--Colorprojet",n[2])},i:I,o:I,d(n){n&&c(e)}}}function k(l,e,a){let{titre:r}=e,{lien:n}=e,{image:s}=e,{colorbox:i}=e;const m=`url(${s})`;return l.$$set=t=>{"titre"in t&&a(0,r=t.titre),"lien"in t&&a(1,n=t.lien),"image"in t&&a(4,s=t.image),"colorbox"in t&&a(2,i=t.colorbox)},[r,n,i,m,s]}class b extends N{constructor(e){super();P(this,e,k,$,E,{titre:0,lien:1,image:4,colorbox:2})}}function B(l){let e,a,r,n,s,i,m;return a=new b({props:{titre:"INV - Villes invisibles",lien:"/projet",image:"/inv-img/inv-1-01-01.jpg",colorbox:"#c96f44"}}),n=new b({props:{titre:"Poubelle de table",lien:"/projet",image:"/inv-img/Cremaillere.gif",colorbox:"#37553e"}}),i=new b({props:{titre:"INV - Villes invisibles",lien:"/projet"}}),{c(){e=x("div"),_(a.$$.fragment),r=w(),_(n.$$.fragment),s=w(),_(i.$$.fragment),this.h()},l(t){e=y(t,"DIV",{class:!0});var o=V(e);h(a.$$.fragment,o),r=C(o),h(n.$$.fragment,o),s=C(o),h(i.$$.fragment,o),o.forEach(c),this.h()},h(){f(e,"class","listeprojets svelte-i43ua0")},m(t,o){L(t,e,o),v(a,e,null),g(e,r),v(n,e,null),g(e,s),v(i,e,null),m=!0},p:I,i(t){m||(p(a.$$.fragment,t),p(n.$$.fragment,t),p(i.$$.fragment,t),m=!0)},o(t){d(a.$$.fragment,t),d(n.$$.fragment,t),d(i.$$.fragment,t),m=!1},d(t){t&&c(e),j(a),j(n),j(i)}}}class G extends N{constructor(e){super();P(this,e,null,B,E,{})}}export{G as default};
