"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[7749],{35114:(U,D,_)=>{_.d(D,{S:()=>B});var s=_(91320),l=_(2548),n=_(64150),a=_(75058),d=_(65676),h=_(70946),C=_(67645),v=_(42977),i=_(9714);const B=({providers:E,displayAllProviders:r})=>{const{formatMessage:o}=(0,C.Z)();return r?(0,s.jsx)(l.r,{gap:4,children:E.map(t=>(0,s.jsx)(n.P,{col:4,children:(0,s.jsx)(P,{provider:t})},t.uid))}):E.length>2&&!r?(0,s.jsxs)(l.r,{gap:4,children:[E.slice(0,2).map(t=>(0,s.jsx)(n.P,{col:4,children:(0,s.jsx)(P,{provider:t})},t.uid)),(0,s.jsx)(n.P,{col:4,children:(0,s.jsx)(a.u,{label:o({id:"global.see-more"}),children:(0,s.jsx)(M,{as:v.rU,to:"/auth/providers",children:(0,s.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,s.jsx)(m,{justifyContent:"center",children:E.map(t=>(0,s.jsx)(P,{provider:t},t.uid))})},m=(0,i.ZP)(d.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:E})=>E.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:E})=>E.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:E})=>E.spaces[2]};
  }
`,P=({provider:E})=>(0,s.jsx)(a.u,{label:E.displayName,children:(0,s.jsx)(M,{href:`${window.strapi.backendURL}/admin/connect/${E.uid}`,children:E.icon?(0,s.jsx)("img",{src:E.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,s.jsx)(h.Z,{children:E.displayName})})}),M=i.ZP.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:E})=>E.colors.neutral150};
  border-radius: ${({theme:E})=>E.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:E})=>E.colors.neutral600};
`},57749:(U,D,_)=>{_.r(D),_.d(D,{FORMS:()=>W});var s=_(91320),l=_(20674),n=_(92422),a=_(70946),d=_(65676),h=_(94060),C=_(70269),v=_(53621),i=_(6092),B=_(6264),m=_(67645),P=_(54769),M=_(71179),E=_(42977),r=_(9714),o=_(51896),t=_(35114),j=_(85904),c=_(70644),f=_(39112),y=_(32805),S=_(84770),e=_(67652),u=_(38239),Z=_(5676),$=_(13768),F=_(99321),N=_(90217),z=_(76350),Q=_(22310),Y=_(96110),G=_(76251),H=_(21977),J=_(49470),V=_(17141),X=_(21681),p=_(38506),k=_(99135),w=_(52800),b=_(62643),q=_(2863),__=_(4626),s_=_(50589),E_=_(77315),t_=_(89775),n_=_(56302),a_=_(75376),d_=_(50024),o_=_(92585),O_=_(64706),P_=_(98064),M_=_(87282),D_=_(10112),l_=_(13406),i_=_(35577),r_=_(73607),h_=_(38243),C_=_(23889),v_=_(18334),B_=_(7405);const T=()=>{const{push:I}=(0,M.k6)(),{formatMessage:O}=(0,m.Z)(),{get:K}=(0,B.kY)(),{isLoading:L,data:R=[]}=(0,P.useQuery)(["ee","providers"],async()=>{const{data:g}=await K("/admin/providers");return g},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)}),x=()=>{I("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!L&&R.length===0?(0,s.jsx)(M.l_,{to:"/auth/login"}):(0,s.jsx)(o.U,{children:(0,s.jsxs)(l.o,{children:[(0,s.jsxs)(o.d,{children:[(0,s.jsxs)(o.C,{children:[(0,s.jsx)(o.e,{}),(0,s.jsx)(n.x,{paddingTop:6,paddingBottom:1,children:(0,s.jsx)(a.Z,{as:"h1",variant:"alpha",children:O({id:"Auth.form.welcome.title"})})}),(0,s.jsx)(n.x,{paddingBottom:7,children:(0,s.jsx)(a.Z,{variant:"epsilon",textColor:"neutral600",children:O({id:"Auth.login.sso.subtitle"})})})]}),(0,s.jsxs)(d.k,{direction:"column",alignItems:"stretch",gap:7,children:[L?(0,s.jsx)(d.k,{justifyContent:"center",children:(0,s.jsx)(h.a,{children:O({id:"Auth.login.sso.loading"})})}):(0,s.jsx)(t.S,{providers:R}),(0,s.jsxs)(d.k,{children:[(0,s.jsx)(A,{}),(0,s.jsx)(n.x,{paddingLeft:3,paddingRight:3,children:(0,s.jsx)(a.Z,{variant:"sigma",textColor:"neutral600",children:O({id:"or"})})}),(0,s.jsx)(A,{})]}),(0,s.jsx)(C.z,{fullWidth:!0,size:"L",onClick:x,children:O({id:"Auth.form.button.login.strapi"})})]})]}),(0,s.jsx)(d.k,{justifyContent:"center",children:(0,s.jsx)(n.x,{paddingTop:4,children:(0,s.jsx)(i.r,{as:E.OL,to:"/auth/forgot-password",children:(0,s.jsx)(a.Z,{variant:"pi",children:O({id:"Auth.link.forgot-password"})})})})})]})})},A=(0,r.ZP)(v.i)`
  flex: 1;
`,W={providers:T}}}]);
