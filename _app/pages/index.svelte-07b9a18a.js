import{S as H,i as J,s as Q,e as B,k as b,t as K,c as C,a as N,d as k,m as d,h as O,F as D,b as j,f as F,g as R,J as h,j as W,G,w as q,x as A,y as E,q as _,o as v,B as x,p as X,U as Y,n as Z}from"../chunks/vendor-289dee53.js";import{l as ee}from"../chunks/projets-7e9acec7.js";import"../chunks/preload-helper-e4860ae8.js";function te(o){let e,l,r,a,m,g,u,p,w;return{c(){e=B("a"),l=B("span"),r=B("img"),m=b(),g=B("span"),u=b(),p=B("span"),w=K(o[0]),this.h()},l(c){e=C(c,"A",{class:!0,href:!0,style:!0});var f=N(e);l=C(f,"SPAN",{class:!0});var $=N(l);r=C($,"IMG",{src:!0,class:!0}),$.forEach(k),m=d(f),g=C(f,"SPAN",{class:!0}),N(g).forEach(k),u=d(f),p=C(f,"SPAN",{class:!0});var y=N(p);w=O(y,o[0]),y.forEach(k),f.forEach(k),this.h()},h(){D(r.src,a=o[2])||j(r,"src",a),j(r,"class","svelte-whqjlu"),j(l,"class","img-container svelte-whqjlu"),j(g,"class","cover svelte-whqjlu"),j(p,"class","title svelte-whqjlu"),j(e,"class","projetINV svelte-whqjlu"),j(e,"href",o[1]),F(e,"--Colorprojet",o[3])},m(c,f){R(c,e,f),h(e,l),h(l,r),h(e,m),h(e,g),h(e,u),h(e,p),h(p,w)},p(c,[f]){f&4&&!D(r.src,a=c[2])&&j(r,"src",a),f&1&&W(w,c[0]),f&2&&j(e,"href",c[1]),f&8&&F(e,"--Colorprojet",c[3])},i:G,o:G,d(c){c&&k(e)}}}function re(o,e,l){let{titre:r}=e,{lien:a}=e,{image:m}=e,{colorbox:g}=e;return o.$$set=u=>{"titre"in u&&l(0,r=u.titre),"lien"in u&&l(1,a=u.lien),"image"in u&&l(2,m=u.image),"colorbox"in u&&l(3,g=u.colorbox)},[r,a,m,g]}class I extends H{constructor(e){super();J(this,e,re,te,Q,{titre:0,lien:1,image:2,colorbox:3})}}function T(o,e,l){const r=o.slice();return r[1]=e[l],r}function U(o){let e,l;return e=new I({props:{titre:o[1].titre,lien:`/${o[1].lien}`,colorbox:o[1].color,image:o[1].thumbnail}}),{c(){q(e.$$.fragment)},l(r){A(e.$$.fragment,r)},m(r,a){E(e,r,a),l=!0},p(r,a){const m={};a&1&&(m.titre=r[1].titre),a&1&&(m.lien=`/${r[1].lien}`),a&1&&(m.colorbox=r[1].color),a&1&&(m.image=r[1].thumbnail),e.$set(m)},i(r){l||(_(e.$$.fragment,r),l=!0)},o(r){v(e.$$.fragment,r),l=!1},d(r){x(e,r)}}}function ne(o){let e,l,r,a,m,g,u,p,w,c,f,$,y,S,L,V;l=new I({props:{titre:"INV - Villes invisibles",lien:"/projet",image:"/inv-img/inv-1-01-01.jpg",colorbox:"#c96f44"}}),a=new I({props:{titre:"IDE - Identit\xE9s visuelles",lien:"/projet",image:"/inv-img/Cremaillere.gif",colorbox:"#37553e"}}),g=new I({props:{titre:"SAT - Ecole chantier",lien:"/projet",image:"/Icone_maison-infini.gif",colorbox:"#e6b399"}}),p=new I({props:{titre:"BEL - Il \xE9tait une fois Bellegarde-sur-Valserine",lien:"/projet",image:"/bel-images/Hotel-de-ville-anime.gif",colorbox:"#e6b399"}}),c=new I({props:{titre:"SAT - Ecole chantier",lien:"/projet",image:"/inv-img/CaraMockup.jpg",colorbox:"#a7802e"}}),$=new I({props:{titre:"AQU - Aquarelles du territoire",lien:"/aquarelle",image:"/aqu-images/Montagne_2jpg.jpg",colorbox:"#4d6e56"}}),S=new I({props:{titre:"BAL - Sur nos balcons, la biodiversit\xE9",lien:"/projet",image:"/Fleursbalcon-01-01.jpg",colorbox:"#c96f44"}});let P=o[0],i=[];for(let t=0;t<P.length;t+=1)i[t]=U(T(o,P,t));const z=t=>v(i[t],1,1,()=>{i[t]=null});return{c(){e=B("div"),q(l.$$.fragment),r=b(),q(a.$$.fragment),m=b(),q(g.$$.fragment),u=b(),q(p.$$.fragment),w=b(),q(c.$$.fragment),f=b(),q($.$$.fragment),y=b(),q(S.$$.fragment),L=b();for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){e=C(t,"DIV",{class:!0});var n=N(e);A(l.$$.fragment,n),r=d(n),A(a.$$.fragment,n),m=d(n),A(g.$$.fragment,n),u=d(n),A(p.$$.fragment,n),w=d(n),A(c.$$.fragment,n),f=d(n),A($.$$.fragment,n),y=d(n),A(S.$$.fragment,n),L=d(n);for(let s=0;s<i.length;s+=1)i[s].l(n);n.forEach(k),this.h()},h(){j(e,"class","listeprojets svelte-i43ua0")},m(t,n){R(t,e,n),E(l,e,null),h(e,r),E(a,e,null),h(e,m),E(g,e,null),h(e,u),E(p,e,null),h(e,w),E(c,e,null),h(e,f),E($,e,null),h(e,y),E(S,e,null),h(e,L);for(let s=0;s<i.length;s+=1)i[s].m(e,null);V=!0},p(t,[n]){if(n&1){P=t[0];let s;for(s=0;s<P.length;s+=1){const M=T(t,P,s);i[s]?(i[s].p(M,n),_(i[s],1)):(i[s]=U(M),i[s].c(),_(i[s],1),i[s].m(e,null))}for(Z(),s=P.length;s<i.length;s+=1)z(s);X()}},i(t){if(!V){_(l.$$.fragment,t),_(a.$$.fragment,t),_(g.$$.fragment,t),_(p.$$.fragment,t),_(c.$$.fragment,t),_($.$$.fragment,t),_(S.$$.fragment,t);for(let n=0;n<P.length;n+=1)_(i[n]);V=!0}},o(t){v(l.$$.fragment,t),v(a.$$.fragment,t),v(g.$$.fragment,t),v(p.$$.fragment,t),v(c.$$.fragment,t),v($.$$.fragment,t),v(S.$$.fragment,t),i=i.filter(Boolean);for(let n=0;n<i.length;n+=1)v(i[n]);V=!1},d(t){t&&k(e),x(l),x(a),x(g),x(p),x(c),x($),x(S),Y(i,t)}}}const oe=async({params:o})=>({props:{projects:await ee()}});function le(o,e,l){let{projects:r}=e;return o.$$set=a=>{"projects"in a&&l(0,r=a.projects)},[r]}class ce extends H{constructor(e){super();J(this,e,le,ne,Q,{projects:0})}}export{ce as default,oe as load};