import{S as F,i as H,s as J,e as y,k as d,t as T,c as C,a as N,d as P,m as w,h as z,F as L,b as $,f as D,g as Q,J as p,j as K,G,w as A,x as E,y as x,q as j,o as v,B as S,p as O,U as W,n as X}from"../chunks/vendor-289dee53.js";import{l as Y}from"../chunks/projets-41d834e6.js";function Z(o){let e,r,t,a,m,g,u,h,b;return{c(){e=y("a"),r=y("span"),t=y("img"),m=d(),g=y("span"),u=d(),h=y("span"),b=T(o[0]),this.h()},l(c){e=C(c,"A",{class:!0,href:!0,style:!0});var f=N(e);r=C(f,"SPAN",{class:!0});var _=N(r);t=C(_,"IMG",{src:!0,class:!0}),_.forEach(P),m=w(f),g=C(f,"SPAN",{class:!0}),N(g).forEach(P),u=w(f),h=C(f,"SPAN",{class:!0});var V=N(h);b=z(V,o[0]),V.forEach(P),f.forEach(P),this.h()},h(){L(t.src,a=o[2])||$(t,"src",a),$(t,"class","svelte-whqjlu"),$(r,"class","img-container svelte-whqjlu"),$(g,"class","cover svelte-whqjlu"),$(h,"class","title svelte-whqjlu"),$(e,"class","projetINV svelte-whqjlu"),$(e,"href",o[1]),D(e,"--Colorprojet",o[3])},m(c,f){Q(c,e,f),p(e,r),p(r,t),p(e,m),p(e,g),p(e,u),p(e,h),p(h,b)},p(c,[f]){f&4&&!L(t.src,a=c[2])&&$(t,"src",a),f&1&&K(b,c[0]),f&2&&$(e,"href",c[1]),f&8&&D(e,"--Colorprojet",c[3])},i:G,o:G,d(c){c&&P(e)}}}function ee(o,e,r){let{titre:t}=e,{lien:a}=e,{image:m}=e,{colorbox:g}=e;return o.$$set=u=>{"titre"in u&&r(0,t=u.titre),"lien"in u&&r(1,a=u.lien),"image"in u&&r(2,m=u.image),"colorbox"in u&&r(3,g=u.colorbox)},[t,a,m,g]}class I extends F{constructor(e){super();H(this,e,ee,Z,J,{titre:0,lien:1,image:2,colorbox:3})}}function M(o,e,r){const t=o.slice();return t[1]=e[r],t}function U(o){let e,r;return e=new I({props:{titre:o[1].titre,lien:`/${o[1].lien}`,colorbox:o[1].color,image:o[1].thumbnail}}),{c(){A(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){x(e,t,a),r=!0},p(t,a){const m={};a&1&&(m.titre=t[1].titre),a&1&&(m.lien=`/${t[1].lien}`),a&1&&(m.colorbox=t[1].color),a&1&&(m.image=t[1].thumbnail),e.$set(m)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function te(o){let e,r,t,a,m,g,u,h,b,c,f,_,V,k;r=new I({props:{titre:"INV - Villes invisibles",lien:"",image:"/inv-img/inv-1-01-01.jpg",colorbox:"#c96f44"}}),a=new I({props:{titre:"VAL - Au fil de la Valserine",lien:"/val",image:"/val-img/27042022-DSC03941.jpg",colorbox:"#37553e"}}),g=new I({props:{titre:"SAT - Ecole chantier",lien:"/sat",image:"/sat-img/EC.png",colorbox:"#e6b399"}}),h=new I({props:{titre:"BEL - Il \xE9tait une fois Bellegarde Art D\xE9co",lien:"/bel",image:"/bel-images/Hotel-de-ville-bleu.gif",colorbox:"#e6b399"}}),c=new I({props:{titre:"AQU - Aquarelles du territoire",lien:"/aquarelle",image:"/aqu-images/Montagne_2jpg.jpg",colorbox:"#4d6e56"}}),_=new I({props:{titre:"",lien:"",image:"/Icone_maison-infini.gif",colorbox:"#a7802e"}});let q=o[0],s=[];for(let n=0;n<q.length;n+=1)s[n]=U(M(o,q,n));const R=n=>v(s[n],1,1,()=>{s[n]=null});return{c(){e=y("div"),A(r.$$.fragment),t=d(),A(a.$$.fragment),m=d(),A(g.$$.fragment),u=d(),A(h.$$.fragment),b=d(),A(c.$$.fragment),f=d(),A(_.$$.fragment),V=d();for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=C(n,"DIV",{class:!0});var l=N(e);E(r.$$.fragment,l),t=w(l),E(a.$$.fragment,l),m=w(l),E(g.$$.fragment,l),u=w(l),E(h.$$.fragment,l),b=w(l),E(c.$$.fragment,l),f=w(l),E(_.$$.fragment,l),V=w(l);for(let i=0;i<s.length;i+=1)s[i].l(l);l.forEach(P),this.h()},h(){$(e,"class","listeprojets svelte-i43ua0")},m(n,l){Q(n,e,l),x(r,e,null),p(e,t),x(a,e,null),p(e,m),x(g,e,null),p(e,u),x(h,e,null),p(e,b),x(c,e,null),p(e,f),x(_,e,null),p(e,V);for(let i=0;i<s.length;i+=1)s[i].m(e,null);k=!0},p(n,[l]){if(l&1){q=n[0];let i;for(i=0;i<q.length;i+=1){const B=M(n,q,i);s[i]?(s[i].p(B,l),j(s[i],1)):(s[i]=U(B),s[i].c(),j(s[i],1),s[i].m(e,null))}for(X(),i=q.length;i<s.length;i+=1)R(i);O()}},i(n){if(!k){j(r.$$.fragment,n),j(a.$$.fragment,n),j(g.$$.fragment,n),j(h.$$.fragment,n),j(c.$$.fragment,n),j(_.$$.fragment,n);for(let l=0;l<q.length;l+=1)j(s[l]);k=!0}},o(n){v(r.$$.fragment,n),v(a.$$.fragment,n),v(g.$$.fragment,n),v(h.$$.fragment,n),v(c.$$.fragment,n),v(_.$$.fragment,n),s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)v(s[l]);k=!1},d(n){n&&P(e),S(r),S(a),S(g),S(h),S(c),S(_),W(s,n)}}}const ae=async({params:o})=>({props:{projects:await Y()}});function ne(o,e,r){let{projects:t}=e;return o.$$set=a=>{"projects"in a&&r(0,t=a.projects)},[t]}class se extends F{constructor(e){super();H(this,e,ne,te,J,{projects:0})}}export{se as default,ae as load};
