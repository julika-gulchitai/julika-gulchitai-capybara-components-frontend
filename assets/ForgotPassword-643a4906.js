import{i as x,a as f,d as w,e as y,y as j,z as i,c as g,h as b,f as S,j as e,W as v,v as q,J as E,K as F,E as N,O as P,Q as T,n as t,p as _,o as D}from"./index-dd8c6f28.js";import"./AuthForm.styled-8b9c4e95.js";const W=()=>{new FormData;const o=x(),{t:s}=f(),r=w(y);j();const n=i.useMediaQuery({query:"(min-width: 768px)"}),l=i.useMediaQuery({query:"(min-width: 1439px)"}),c=g().shape({email:b().required("Email is required")}).required(),m=a=>{if(o(T(a.email)).unwrap().then(()=>{t.Notify.success("Password reset link is sent to your email!",{timeout:3e3,width:"300px",height:"200px",fontSize:"14px",position:"center-top"})}).catch(h=>{t.Notify.warning(h)}),console.log(r),r)a.old_password&&console.log(r);else{t.Notify.warning("Please enter your correct email",_);return}},{register:u,handleSubmit:d,formState:{errors:p}}=S({mode:"onSubmit",resolver:D(c)});return e.jsx(v,{children:e.jsx(q,{children:e.jsx("form",{onSubmit:d(m),children:e.jsxs(E,{children:[e.jsx("h3",{children:s("password")}),e.jsxs("label",{children:[e.jsxs(F,{children:[s("email"),":"]}),e.jsx("br",{}),e.jsx(N,{error:p.email,register:u,id:"email",width:l?384:n?336:280,type:"email",placeholder:s("email")})]}),e.jsx(P,{type:"submit",children:s("save")})]})})})})};export{W as default};
