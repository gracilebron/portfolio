import{r as u,d as i,o as p,j as b,b as B}from"./index-6883b5be.js";const x={variant:"primary",active:!1,disabled:!1},s=u.forwardRef(({as:r,bsPrefix:n,variant:e,size:o,active:c,className:d,...t},f)=>{const a=i(n,"btn"),[l,{tagName:m}]=p({tagName:r,...t});return b(m,{...l,...t,ref:f,className:B(d,a,c&&"active",e&&`${a}-${e}`,o&&`${a}-${o}`,t.href&&t.disabled&&"disabled")})});s.displayName="Button";s.defaultProps=x;const $=s;export{$ as B};