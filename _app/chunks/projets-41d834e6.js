var i=Object.defineProperty,p=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var a=(o,s,t)=>s in o?i(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t,r=(o,s)=>{for(var t in s||(s={}))d.call(s,t)&&a(o,t,s[t]);if(n)for(var t of n(s))j.call(s,t)&&a(o,t,s[t]);return o},c=(o,s)=>p(o,u(s));const f=async()=>await Promise.all(Object.entries({}).map(async([s,t])=>{const{default:e}=await t();let l=s.split("/").pop().split(".").shift();return s.includes("_posts/drafts/")&&(l="preview/"+l),c(r({},e),{slug:l})})),y=async o=>{console.log({projectName:o});const t=(await f()).find(({lien:e})=>e===o);return t!=null?t:null};export{y as a,f as l};
