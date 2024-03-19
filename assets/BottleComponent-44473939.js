import{e as q,y as v,a as P,z as i,c as S,d as r,C as k,h as T,o as _,j as e,D as E,P as x,E as M,n as l,G as D,u as A}from"./index-68836ba5.js";import{W as B,a as m,L as u,S as C}from"./AuthForm.styled-66b41871.js";const $=({signUp:t})=>{const a=q(),h=v(),{t:s}=P(),o=i.useMediaQuery({query:"(min-width: 768px)"}),n=i.useMediaQuery({query:"(min-width: 1439px)"}),b=S().shape({email:r().email("Please write valid email").required("Email is required"),password:r().min(8,"Password must be at least 8 characters").max(64).required("Password is required"),repeat_password:t?r().oneOf([k("password"),null],"Passwords don't match, please try again.").min(8,"Password must be at least 8 characters").required("Confirm password is required"):r()}).required(),g=({email:f,password:j})=>{const w={email:f,password:j};t?a(M(w)).unwrap().then(()=>{h("/signin"),l.Notify.success("A message with a confirmation link has been sent to your email address. Please folow the link to activate your account.",{timeout:5e3,width:"460px",height:"200px",messageMaxLength:500,fontSize:"14px",position:"center-top"})}).catch(p=>{l.Notify.warning(p)}):a(D(w)).unwrap().then(()=>{h("/home")}).catch(p=>{l.Notify.warning(p)})},{register:d,handleSubmit:y,formState:{errors:c}}=T({mode:t?"onChange":"onSubmit",resolver:_(b)});return e.jsx(B,{children:e.jsxs("form",{onSubmit:y(g),children:[e.jsxs(m,{children:[e.jsx(u,{children:s("enterEmail")}),e.jsx(E,{register:d,error:c.email,id:"email",width:n?384:o?336:280,type:"email",placeholder:s("email")})]}),e.jsxs(m,{children:[e.jsx(u,{children:s("enterPassword")}),e.jsx(x,{error:c.password,register:d,id:"password",width:n?384:o?336:280,type:"password",placeholder:s("password")})]}),t&&e.jsxs(m,{children:[e.jsx(u,{children:s("repeatPassword")}),e.jsx(x,{error:c.repeat_password,register:d,id:"repeat_password",width:n?384:o?336:280,type:"repeat_password",placeholder:s("password")})]}),e.jsx(C,{type:"submit",children:s(t?"signup":"signin")})]})})},N=A.div`
margin-bottom: 20px;
  img {
    @media only screen and (min-width: 768px) {
      margin-top: 35px;
      margin-left: -250px;
    }
    @media only screen and (min-width: 1440px) {
    }
  }
`,Q="/capybara-components-frontend/assets/bottle-sign-in-e09a1acd.svg",F="/capybara-components-frontend/assets/bottle-sing-in-fc1ebbfd.svg",I="/capybara-components-frontend/assets/bottle-for-signin-6fb65f6e.svg",z=()=>{const t=i.useMediaQuery({query:"(min-width: 768px)"}),a=i.useMediaQuery({query:"(min-width: 1439px)"});return e.jsx(N,{children:e.jsx("img",{src:a?I:t?F:Q,alt:"bottle-sign-in"})})};export{$ as A,z as B};
