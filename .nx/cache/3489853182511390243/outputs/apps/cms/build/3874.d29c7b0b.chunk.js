"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[3874],{53874:(q,S,t)=>{t.d(S,{ProtectedListPage:()=>gt});var s=t(91320),c=t(38239),j=t(96014),E=t(71685),L=t(20674),D=t(64062),P=t(40076),h=t(70946),y=t(70269),l=t(44137),M=t(92422),$=t(17241),_=t(35206),tt=t(69275),N=t(69372),d=t(25587),K=t(65797),st=t(43831),ot=t(22255),B=t(65676),z=t(9714);const O=z.ZP.div`
  background: ${({theme:a})=>a.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:a})=>a?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:a})=>a.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:a})=>a.spaces[1]};
    top: ${({theme:a})=>a.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,nt=z.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${O} {
    background: ${({theme:a})=>a.colors.success500};
  }

  &[aria-checked='true'] ${O}:before {
    transform: translateX(1rem);
  }
`,at=c.forwardRef(({label:a,onChange:g,onLabel:v="On",offLabel:r="Off",selected:f,visibleLabels:n=!1,...x},m)=>(0,s.jsx)(nt,{ref:m,role:"switch","aria-checked":f,"aria-label":a,onClick:g,visibleLabels:n,type:"button",...x,children:(0,s.jsxs)(B.k,{children:[(0,s.jsxs)(O,{children:[(0,s.jsx)("span",{children:v}),(0,s.jsx)("span",{children:r})]}),n&&(0,s.jsx)(M.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:f?"success600":"danger600",children:f?v:r})]})}));var H=t(58767),et=t(96122),dt=t(83114),i=t(6264),Z=t(58780),Q=t(59712),lt=t(60410),it=t(59965),rt=t(67645),A=t(54769),V=t(5676),p=t(71179),ht=t(42977),G=t(79377),Et=t(98297),Lt=t(69158),Dt=t(51896),Pt=t(85904),$t=t(70644),Bt=t(39112),Ot=t(32805),Zt=t(84770),At=t(67652),bt=t(13768),Wt=t(99321),It=t(90217),Rt=t(76350),Ut=t(22310),Ft=t(96110),Nt=t(76251),Kt=t(21977),zt=t(49470),Ht=t(17141),Qt=t(21681),Vt=t(38506),pt=t(99135),Gt=t(52800),Xt=t(62643),Yt=t(2863),Jt=t(4626),kt=t(50589),wt=t(77315),qt=t(89775),_t=t(56302),ts=t(75376),ss=t(50024),os=t(92585),ns=t(64706),as=t(98064),es=t(87282),ds=t(10112),ls=t(13406),is=t(35577),rs=t(73607),hs=t(38243),cs=t(23889),gs=t(18334),vs=t(7405);const ct=()=>{const[a,g]=c.useState(!1),[v,r]=c.useState([]),f=(0,V.v9)(G.s),{formatMessage:n}=(0,rt.Z)(),{formatAPIError:x}=(0,i.So)(),m=(0,i.lm)();(0,i.go)();const{push:vt}=(0,p.k6)(),{pathname:X}=(0,p.TH)(),{isLoading:xt,allowedActions:{canCreate:b,canUpdate:W,canDelete:Y}}=(0,i.ss)(f.settings?.webhooks??{}),{get:mt,post:jt,put:ft}=(0,i.kY)(),{notifyStatus:J}=(0,j.G)(),{isLoading:ut,data:u=[],error:I,refetch:k}=(0,A.useQuery)("webhooks",async()=>{const{data:{data:o}}=await mt("/admin/webhooks");return o});c.useEffect(()=>{if(I){m({type:"warning",message:x(I)});return}u&&J(n({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[u,I,m,n,J,x]);const w=(0,A.useMutation)(()=>jt("/admin/webhooks/batch-delete",{ids:v}),{onError(o){m({type:"warning",message:x(o)}),g(!1)},onSuccess(){r([]),g(!1),k()}}),Ct=(0,A.useMutation)(({id:o,...e})=>ft(`/admin/webhooks/${o}`,e),{onError(o){m({type:"warning",message:x(o)})},onSuccess(){k()}}),yt=()=>w.mutate(),Mt=o=>r(o?u.map(e=>e.id):[]),Tt=(o,e)=>r(o?F=>[...F,e]:F=>F.filter(St=>St!==e)),R=o=>()=>vt(`${X}/${o}`),U=xt||ut,T=u?.length??0,C=v.length;return(0,s.jsxs)(E.A,{children:[(0,s.jsx)(i.SL,{name:"Webhooks"}),(0,s.jsxs)(L.o,{"aria-busy":U,children:[(0,s.jsx)(D.T,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:b&&!U&&(0,s.jsx)(dt.Q,{as:ht.OL,startIcon:(0,s.jsx)(Z.Z,{}),variant:"default",to:`${X}/create`,size:"S",children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),C>0&&Y&&(0,s.jsx)(P.Z,{startActions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.Z,{variant:"epsilon",textColor:"neutral600",children:n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:C})}),(0,s.jsx)(y.z,{onClick:()=>g(!0),startIcon:(0,s.jsx)(Q.Z,{}),size:"L",variant:"danger-light",children:n({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,s.jsx)(l.D,{children:U?(0,s.jsx)(M.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsx)(i.dO,{})}):T>0?(0,s.jsxs)($.i,{colCount:5,rowCount:T+1,footer:(0,s.jsx)(_.c,{onClick:b?R("create"):void 0,icon:(0,s.jsx)(Z.Z,{}),children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,s.jsx)(tt.h,{children:(0,s.jsxs)(N.Tr,{children:[(0,s.jsx)(d.Th,{children:(0,s.jsx)(K.C,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:C>0&&C<T,value:C===T,onValueChange:Mt})}),(0,s.jsx)(d.Th,{width:"20%",children:(0,s.jsx)(h.Z,{variant:"sigma",textColor:"neutral600",children:n({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(d.Th,{width:"60%",children:(0,s.jsx)(h.Z,{variant:"sigma",textColor:"neutral600",children:n({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,s.jsx)(d.Th,{width:"20%",children:(0,s.jsx)(h.Z,{variant:"sigma",textColor:"neutral600",children:n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,s.jsx)(d.Th,{children:(0,s.jsx)(st.T,{children:n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(ot.p,{children:u.map(o=>(0,s.jsxs)(N.Tr,{onClick:W?R(o.id):void 0,style:{cursor:W?"pointer":"default"},children:[(0,s.jsx)(d.Td,{onClick:e=>e.stopPropagation(),children:(0,s.jsx)(K.C,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${o.name}`,value:v?.includes(o.id),onValueChange:e=>Tt(e,o.id),name:"select"})}),(0,s.jsx)(d.Td,{children:(0,s.jsx)(h.Z,{fontWeight:"semiBold",textColor:"neutral800",children:o.name})}),(0,s.jsx)(d.Td,{children:(0,s.jsx)(h.Z,{textColor:"neutral800",children:o.url})}),(0,s.jsx)(d.Td,{children:(0,s.jsx)(B.k,{children:(0,s.jsx)(at,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${o.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:o.isEnabled,onChange:e=>{e.stopPropagation(),Ct.mutate({...o,isEnabled:!o.isEnabled})},visibleLabels:!0})})}),(0,s.jsx)(d.Td,{children:(0,s.jsxs)(B.k,{gap:1,children:[W&&(0,s.jsx)(H.h,{label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,s.jsx)(lt.Z,{}),noBorder:!0}),Y&&(0,s.jsx)(H.h,{onClick:e=>{e.stopPropagation(),r([o.id]),g(!0)},label:n({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,s.jsx)(Q.Z,{}),noBorder:!0})]})})]},o.id))})]}):(0,s.jsx)(et.x,{icon:(0,s.jsx)(it.Z,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,s.jsx)(y.z,{variant:"secondary",startIcon:(0,s.jsx)(Z.Z,{}),onClick:()=>b?R("create"):{},children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,s.jsx)(i.QH,{isOpen:a,onToggleDialog:()=>g(o=>!o),onConfirm:yt,isConfirmButtonLoading:w.isLoading})]})},gt=()=>{const a=(0,V.v9)(G.s);return(0,s.jsx)(i.O4,{permissions:a.settings?.webhooks.main,children:(0,s.jsx)(ct,{})})}},35206:(q,S,t)=>{t.d(S,{c:()=>y});var s=t(91320),c=t(9714),j=t(92422),E=t(53621),L=t(65676),D=t(70946);const P=(0,c.ZP)(j.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:l})=>l.colors.primary600};
  }
`,h=(0,c.ZP)(j.x)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,y=({children:l,icon:M,...$})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(E.i,{}),(0,s.jsx)(h,{as:"button",background:"primary100",padding:5,...$,children:(0,s.jsxs)(L.k,{children:[(0,s.jsx)(P,{"aria-hidden":!0,background:"primary200",children:M}),(0,s.jsx)(j.x,{paddingLeft:3,children:(0,s.jsx)(D.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]})}}]);
