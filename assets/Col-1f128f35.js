import{r as B,j as C,b as m,d as h,q as N,s as j}from"./index-03d9a7d9.js";function x({as:r,bsPrefix:s,className:c,...o}){s=h(s,"col");const p=N(),u=j(),e=[],f=[];return p.forEach(a=>{const n=o[a];delete o[a];let t,i,$;typeof n=="object"&&n!=null?{span:t,offset:i,order:$}=n:t=n;const l=a!==u?`-${a}`:"";t&&e.push(t===!0?`${s}${l}`:`${s}${l}-${t}`),$!=null&&f.push(`order${l}-${$}`),i!=null&&f.push(`offset${l}-${i}`)}),[{...o,className:m(c,...e,...f)},{as:r,bsPrefix:s,spans:e}]}const d=B.forwardRef((r,s)=>{const[{className:c,...o},{as:p="div",bsPrefix:u,spans:e}]=x(r);return C(p,{...o,ref:s,className:m(c,!e.length&&u)})});d.displayName="Col";const E=d;export{E as C};