var c=Object.defineProperty,_=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var a=(e,t,s)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,l=(e,t)=>{for(var s in t||(t={}))u.call(t,s)&&a(e,s,t[s]);if(i)for(var s of i(t))d.call(t,s)&&a(e,s,t[s]);return e},n=(e,t)=>_(e,j(t));import{_ as p}from"./preload-helper-e4860ae8.js";const m=async()=>await Promise.all(Object.entries({"../projets/test.ts":()=>p(()=>import("./test-331e4846.js"),[]),"../projets/testbis.ts":()=>p(()=>import("./testbis-293b2263.js"),[])}).map(async([t,s])=>{const{default:o}=await s();let r=t.split("/").pop().split(".").shift();return t.includes("_posts/drafts/")&&(r="preview/"+r),n(l({},o),{slug:r})})),b=async e=>{console.log({projectName:e});const s=(await m()).find(({lien:o})=>o===e);return s!=null?s:null};export{b as a,m as l};