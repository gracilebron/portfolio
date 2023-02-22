import{r as i,d as l,j as n,b as m,v as $,c as t,w as f}from"./index-6883b5be.js";const p=i.forwardRef(({bsPrefix:o,className:c,variant:a,as:s="img",...d},e)=>{const r=l(o,"card-img");return n(s,{ref:e,className:m(a?`${r}-${a}`:r,c),...d})});p.displayName="CardImg";const b=p,x=i.forwardRef(({bsPrefix:o,className:c,as:a="div",...s},d)=>{const e=l(o,"card-header"),r=i.useMemo(()=>({cardHeaderBsPrefix:e}),[e]);return n($.Provider,{value:r,children:n(a,{ref:d,...s,className:m(c,e)})})});x.displayName="CardHeader";const h=x,H=f("h5"),I=f("h6"),u=t("card-body"),P=t("card-title",{Component:H}),B=t("card-subtitle",{Component:I}),w=t("card-link",{Component:"a"}),S=t("card-text",{Component:"p"}),T=t("card-footer"),j=t("card-img-overlay"),k={body:!1},C=i.forwardRef(({bsPrefix:o,className:c,bg:a,text:s,border:d,body:e,children:r,as:y="div",...g},v)=>{const N=l(o,"card");return n(y,{ref:v,...g,className:m(c,N,a&&`bg-${a}`,s&&`text-${s}`,d&&`border-${d}`),children:e?n(u,{children:r}):r})});C.displayName="Card";C.defaultProps=k;const R=Object.assign(C,{Img:b,Title:P,Subtitle:B,Body:u,Link:w,Text:S,Header:h,Footer:T,ImgOverlay:j});export{R as C};