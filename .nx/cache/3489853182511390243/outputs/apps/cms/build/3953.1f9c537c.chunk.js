"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[3953],{63953:(U,P,_)=>{_.r(P),_.d(P,{LoginEE:()=>I});var E=_(91320),O=_(53621),a=_(92422),n=_(65676),o=_(70946),l=_(6264),i=_(67645),r=_(54769),d=_(9714),D=_(51896),L=_(35114),M=_(85904),h=_(70644),s=_(39112),C=_(32805),B=_(84770),t=_(67652),g=_(38239),x=_(5676),j=_(13768),f=_(99321),c=_(90217),y=_(76350),S=_(22310),$=_(96110),Z=_(76251),N=_(21977),F=_(49470),Q=_(17141),Y=_(21681),z=_(38506),G=_(99135),H=_(52800),J=_(62643),V=_(2863),X=_(4626),u=_(50589),e=_(77315),p=_(89775),k=_(56302),w=_(75376),b=_(50024),q=_(92585),__=_(64706),E_=_(98064),s_=_(87282),t_=_(10112),a_=_(13406),n_=_(35577),P_=_(73607),O_=_(38243),d_=_(23889),D_=_(18334),M_=_(7405);const R=(0,d.ZP)(O.i)`
  flex: 1;
`,I=v=>{const{formatMessage:T}=(0,i.Z)(),{get:W}=(0,l.kY)(),{isLoading:m,data:A=[]}=(0,r.useQuery)(["ee","providers"],async()=>{const{data:K}=await W("/admin/providers");return K},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!m&&A.length===0?(0,E.jsx)(D.L,{...v}):(0,E.jsx)(D.L,{...v,children:(0,E.jsx)(a.x,{paddingTop:7,children:(0,E.jsxs)(n.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,E.jsxs)(n.k,{children:[(0,E.jsx)(R,{}),(0,E.jsx)(a.x,{paddingLeft:3,paddingRight:3,children:(0,E.jsx)(o.Z,{variant:"sigma",textColor:"neutral600",children:T({id:"Auth.login.sso.divider"})})}),(0,E.jsx)(R,{})]}),(0,E.jsx)(L.S,{providers:A,displayAllProviders:!1})]})})})}},35114:(U,P,_)=>{_.d(P,{S:()=>D});var E=_(91320),O=_(2548),a=_(64150),n=_(75058),o=_(65676),l=_(70946),i=_(67645),r=_(42977),d=_(9714);const D=({providers:s,displayAllProviders:C})=>{const{formatMessage:B}=(0,i.Z)();return C?(0,E.jsx)(O.r,{gap:4,children:s.map(t=>(0,E.jsx)(a.P,{col:4,children:(0,E.jsx)(M,{provider:t})},t.uid))}):s.length>2&&!C?(0,E.jsxs)(O.r,{gap:4,children:[s.slice(0,2).map(t=>(0,E.jsx)(a.P,{col:4,children:(0,E.jsx)(M,{provider:t})},t.uid)),(0,E.jsx)(a.P,{col:4,children:(0,E.jsx)(n.u,{label:B({id:"global.see-more"}),children:(0,E.jsx)(h,{as:r.rU,to:"/auth/providers",children:(0,E.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,E.jsx)(L,{justifyContent:"center",children:s.map(t=>(0,E.jsx)(M,{provider:t},t.uid))})},L=(0,d.ZP)(o.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,M=({provider:s})=>(0,E.jsx)(n.u,{label:s.displayName,children:(0,E.jsx)(h,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`,children:s.icon?(0,E.jsx)("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,E.jsx)(l.Z,{children:s.displayName})})}),h=d.ZP.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`}}]);
