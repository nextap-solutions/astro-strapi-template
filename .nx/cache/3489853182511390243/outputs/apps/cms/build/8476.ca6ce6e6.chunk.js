"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[8476],{38476:(ns,L,s)=>{s.d(L,{ProtectedCreatePage:()=>Q});var t=s(91320),O=s(38239),B=s(20674),I=s(64062),l=s(65676),m=s(70269),T=s(44137),i=s(92422),h=s(70946),U=s(2548),C=s(64150),W=s(95978),K=s(20282),f=s(6092),o=s(6264),x=s(78711),j=s(38654),y=s(13768),u=s(13406),p=s(67645),S=s(54769),$=s(5676),R=s(71179),N=s(42977),Z=s(9714),P=s(90217),z=s(79377),v=s(92789),Es=s(98297),is=s(69158),ds=s(51896),es=s(85904),ls=s(70644),rs=s(39112),Ps=s(32805),Ms=s(84770),Ds=s(67652),Os=s(99321),ms=s(76350),hs=s(22310),Cs=s(96110),Rs=s(76251),vs=s(21977),gs=s(49470),cs=s(17141),As=s(21681),Ls=s(38506),Bs=s(99135),Is=s(52800),Ts=s(62643),Us=s(2863),Ws=s(4626),Ks=s(50589),fs=s(77315),xs=s(89775),js=s(56302),ys=s(75376),us=s(50024),ps=s(92585),Ss=s(64706),$s=s(98064),Ns=s(87282),Zs=s(10112),zs=s(35577),Fs=s(73607),Hs=s(38243),Js=s(23889),Qs=s(18334),Vs=s(7405),Ys=s(43619),Gs=s(38542);const F=P.Ry().shape({name:P.Z_().required(o.I0.required),description:P.Z_().required(o.I0.required)}),H=()=>{const _=(0,R.$B)("/settings/roles/duplicate/:id"),g=(0,o.lm)(),{lockApp:V,unlockApp:Y}=(0,o.o1)(),{formatMessage:a}=(0,p.Z)(),[G,M]=O.useState(!1),{replace:X}=(0,R.k6)(),D=O.useRef(null),{trackUsage:r}=(0,o.rS)(),{post:b,put:k,get:w}=(0,o.kY)(),d=_?.params.id??null,{isLoading:q,data:c}=(0,S.useQuery)(["permissions",d],async()=>{const{data:{data:e}}=await w("/admin/permissions",{params:{role:d}});return e},{cacheTime:0}),{permissions:ss,isLoading:ts}=(0,v.u)({id:d},{cacheTime:0,enabled:!!d}),_s=e=>{V?.(),M(!0),r(d?"willDuplicateRole":"willCreateNewRole"),Promise.resolve(b("/admin/roles",e)).then(async({data:n})=>{const{permissionsToSend:E}=D.current?.getPermissions()??{};return r(d?"didDuplicateRole":"didCreateNewRole"),n.data.id&&!u(E)&&await k(`/admin/roles/${n.data.id}/permissions`,{permissions:E}),n}).then(n=>{M(!1),g({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),X(`/settings/roles/${n.data.id}`)}).catch(n=>{console.error(n),M(!1),g({type:"warning",message:{id:"notification.error"}})}).finally(()=>{Y?.()})},as=`${a({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,j.Z)(new Date,"PPP")}`;return(0,t.jsxs)(B.o,{children:[(0,t.jsx)(o.SL,{name:"Roles"}),(0,t.jsx)(y.J9,{initialValues:{name:"",description:as},onSubmit:_s,validationSchema:F,validateOnChange:!1,children:({handleSubmit:e,values:n,errors:E,handleReset:os,handleChange:A})=>(0,t.jsx)(o.l0,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I.T,{primaryAction:(0,t.jsxs)(l.k,{gap:2,children:[(0,t.jsx)(m.z,{variant:"secondary",onClick:()=>{os(),D.current?.resetForm()},size:"L",children:a({id:"app.components.Button.reset",defaultMessage:"Reset"})}),(0,t.jsx)(m.z,{onClick:e,loading:G,size:"L",children:a({id:"global.save",defaultMessage:"Save"})})]}),title:a({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(f.r,{as:N.OL,startIcon:(0,t.jsx)(x.Z,{}),to:"/settings/roles",children:a({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(T.D,{children:(0,t.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(i.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(l.k,{justifyContent:"space-between",children:[(0,t.jsxs)(i.x,{children:[(0,t.jsx)(i.x,{children:(0,t.jsx)(h.Z,{fontWeight:"bold",children:a({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(i.x,{children:(0,t.jsx)(h.Z,{variant:"pi",textColor:"neutral600",children:a({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(J,{children:a({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0})})]}),(0,t.jsxs)(U.r,{gap:4,children:[(0,t.jsx)(C.P,{col:6,children:(0,t.jsx)(W.o,{name:"name",error:E.name&&a({id:E.name}),label:a({id:"global.name",defaultMessage:"Name"}),onChange:A,required:!0,value:n.name})}),(0,t.jsx)(C.P,{col:6,children:(0,t.jsx)(K.g,{label:a({id:"global.description",defaultMessage:"Description"}),id:"description",error:E.description&&a({id:E.description}),onChange:A,children:n.description})})]})]})}),!q&&!ts&&c?(0,t.jsx)(i.x,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(v.P,{isFormDisabled:!1,ref:D,permissions:ss,layout:c})}):(0,t.jsx)(i.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.dO,{})})]})})]})})})]})},J=Z.ZP.div`
  border: 1px solid ${({theme:_})=>_.colors.primary200};
  background: ${({theme:_})=>_.colors.primary100};
  padding: ${({theme:_})=>`${_.spaces[2]} ${_.spaces[4]}`};
  color: ${({theme:_})=>_.colors.primary600};
  border-radius: ${({theme:_})=>_.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Q=()=>{const _=(0,$.v9)(z.s);return(0,t.jsx)(o.O4,{permissions:_.settings?.roles.create,children:(0,t.jsx)(H,{})})}}}]);
