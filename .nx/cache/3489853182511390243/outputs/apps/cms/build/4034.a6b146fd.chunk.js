"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[4034],{49967:(os,Y,s)=>{s.d(Y,{F:()=>M});var t=s(91320),E=s(38239),C=s(92422),V=s(70269),U=s(6264),f=s(92861),g=s(67645);const M=({displayedFilters:c})=>{const[L,v]=E.useState(!1),{formatMessage:Q}=(0,g.Z)(),S=E.useRef(null),F=()=>{v(x=>!x)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(C.x,{paddingTop:1,paddingBottom:1,children:[(0,t.jsx)(V.z,{variant:"tertiary",ref:S,startIcon:(0,t.jsx)(f.Z,{}),onClick:F,size:"S",children:Q({id:"app.utils.filters",defaultMessage:"Filters"})}),L&&(0,t.jsx)(U.J5,{displayedFilters:c,isVisible:L,onToggle:F,source:S})]}),(0,t.jsx)(U.W$,{filtersSchema:c})]})}},94034:(os,Y,s)=>{s.d(Y,{ProtectedListPage:()=>Rs,i:()=>_s});var t=s(91320),E=s(38239),C=s(70269),V=s(61967),U=s(96821),f=s(75073),g=s(65676),M=s(92422),c=s(70946),L=s(2548),v=s(64150),Q=s(31729),S=s(22255),F=s(69372),x=s(25587),ns=s(65797),u=s(58767),P=s(20674),R=s(64062),H=s(40076),J=s(44137),e=s(6264),X=s(22310),m=s(67645),G=s(54769),w=s(5676),q=s(71179),I=s(51896),l=s(79377),ms=s(49967),Ms=s(44055),cs=s(60410),Ps=s(59712),Os=s(94188),Ds=s(27432),gs=s(58686),hs=s(13768),b=s(90217),ls=s(53245),js=s(85904),Ws=s(70644),ys=s(39112),Ks=s(32805),ps=s(84770),Ss=s(67652),Fs=s(99321),Zs=s(76350),zs=s(96110),$s=s(76251),Ns=s(21977),Ys=s(49470),Vs=s(17141),Qs=s(21681),Hs=s(38506),Js=s(99135),Xs=s(52800),Gs=s(62643),bs=s(2863),ks=s(4626),ws=s(50589),qs=s(77315),st=s(89775),tt=s(56302),et=s(75376),at=s(50024),nt=s(92585),it=s(64706),ot=s(98064),lt=s(87282),rt=s(10112),dt=s(13406),_t=s(35577),Et=s(73607),mt=s(38243),Mt=s(23889),ct=s(18334),Pt=s(7405),Ot=s(98297),Dt=s(69158);const As=({onClick:n})=>{const{formatMessage:r}=(0,m.Z)();return(0,t.jsx)(C.z,{onClick:n,startIcon:(0,t.jsx)(Ms.Z,{}),size:"S",children:r({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})},Cs=({onSuccess:n,onToggle:r})=>{const[O,Z]=E.useState("create"),[B,z]=E.useState(!1),[j,T]=E.useState(""),{formatMessage:d}=(0,m.Z)(),W=(0,e.lm)(),{lockApp:_,unlockApp:a}=(0,e.o1)(),{post:$}=(0,e.kY)(),{formatAPIError:h}=(0,e.So)(),N=(0,I.j)(fs,async()=>(await s.e(4787).then(s.bind(s,4787))).ROLE_LAYOUT,{combine(o,A){return[...o,...A]},defaultValue:[]}),y=(0,I.j)(rs,async()=>(await s.e(4787).then(s.bind(s,4787))).FORM_INITIAL_VALUES,{combine(o,A){return{...o,...A}},defaultValue:rs}),K=(0,I.j)(ls.M,async()=>(await s.e(5395).then(s.bind(s,85395))).MagicLinkEE),ss=(0,G.useMutation)(o=>$("/admin/users",o),{onMutate(){_&&_(),z(!0)},async onSuccess({data:{data:o}}){o.registrationToken?(T(o.registrationToken),await n(),as()):W({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})},onError(o){throw W({type:"warning",message:h(o)}),o},onSettled(){a&&a(),z(!1)}}),ts=d({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),es=async(o,{setErrors:A})=>{try{await ss.mutateAsync({...o,roles:o.roles??[]})}catch(p){p instanceof gs.d7&&p.response?.data?.error.message==="Email already taken"&&A({email:p.response.data.error.message})}},as=()=>{Es?Z(Es):r()},{buttonSubmitLabel:k,isDisabled:i,next:Es}=us[O],Bs=O==="create"?(0,t.jsx)(C.z,{type:"submit",loading:B,children:d(k)}):(0,t.jsx)(C.z,{type:"button",loading:B,onClick:r,children:d(k)});return K?(0,t.jsxs)(V.P,{onClose:r,labelledBy:"title",children:[(0,t.jsx)(U.x,{children:(0,t.jsx)(Os.O,{label:ts,children:(0,t.jsx)(Ds.$,{isCurrent:!0,children:ts})})}),(0,t.jsx)(hs.J9,{enableReinitialize:!0,initialValues:y??{},onSubmit:es,validationSchema:vs,validateOnChange:!1,children:({errors:o,handleChange:A,values:p})=>(0,t.jsxs)(e.l0,{children:[(0,t.jsx)(f.f,{children:(0,t.jsxs)(g.k,{direction:"column",alignItems:"stretch",gap:6,children:[O!=="create"&&(0,t.jsx)(K,{registrationToken:j}),(0,t.jsxs)(M.x,{children:[(0,t.jsx)(c.Z,{variant:"beta",as:"h2",children:d({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),(0,t.jsx)(M.x,{paddingTop:4,children:(0,t.jsx)(g.k,{direction:"column",alignItems:"stretch",gap:1,children:(0,t.jsx)(L.r,{gap:5,children:Ls.map(is=>is.map(D=>(0,t.jsx)(v.P,{...D.size,children:(0,t.jsx)(e.jm,{...D,disabled:i,error:o[D.name],onChange:A,value:p[D.name]})},D.name)))})})})]}),(0,t.jsxs)(M.x,{children:[(0,t.jsx)(c.Z,{variant:"beta",as:"h2",children:d({id:"global.roles",defaultMessage:"User's role"})}),(0,t.jsx)(M.x,{paddingTop:4,children:(0,t.jsxs)(L.r,{gap:5,children:[(0,t.jsx)(v.P,{col:6,xs:12,children:(0,t.jsx)(ls.S,{disabled:i,error:o.roles,onChange:A,value:p.roles??[]})}),N.map(is=>is.map(D=>(0,t.jsx)(v.P,{...D.size,children:(0,t.jsx)(e.jm,{...D,disabled:i,onChange:A,value:p[D.name]})},D.name)))]})})]})]})}),(0,t.jsx)(Q.m,{startActions:(0,t.jsx)(C.z,{variant:"tertiary",onClick:r,type:"button",children:d({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:Bs})]})})]}):null},rs={firstname:"",lastname:"",email:"",roles:[]},fs=[],Ls=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],vs=b.Ry().shape({firstname:b.Z_().trim().required(e.I0.required),lastname:b.Z_(),email:b.Z_().email(e.I0.email).required(e.I0.required),roles:b.IX().min(1,e.I0.required).required(e.I0.required)}),us={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},Is=({canDelete:n,headers:r=[],entriesToDelete:O=[],onClickDelete:Z,onSelectRow:B,withMainAction:z,withBulkActions:j,rows:T=[]})=>{const{push:d,location:{pathname:W}}=(0,q.k6)(),{formatMessage:_}=(0,m.Z)();return(0,t.jsx)(S.p,{children:T.map(a=>{const $=O.findIndex(h=>h===a.id)!==-1;return(0,t.jsxs)(F.Tr,{...(0,e.X7)({fn:()=>d(`${W}/${a.id}`),condition:j}),children:[z&&(0,t.jsx)(x.Td,{...e.UW,children:(0,t.jsx)(ns.C,{"aria-label":_({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,l.g)(a?.firstname??"",a.lastname)}),checked:$,onChange:()=>{B&&B({name:a.id,value:!$})}})}),r.map(({key:h,cellFormatter:N,name:y,...K})=>(0,t.jsx)(x.Td,{children:typeof N=="function"?N(a,{key:h,name:y,formatMessage:_,...K}):(0,t.jsx)(c.Z,{textColor:"neutral800",children:a[y]||"-"})},h)),j&&(0,t.jsx)(x.Td,{children:(0,t.jsxs)(g.k,{justifyContent:"end",children:[(0,t.jsx)(u.h,{onClick:()=>d(`${W}/${a.id}`),label:_({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,l.g)(a.firstname??"",a.lastname)}),noBorder:!0,icon:(0,t.jsx)(cs.Z,{})}),n&&(0,t.jsx)(M.x,{paddingLeft:1,...e.UW,children:(0,t.jsx)(u.h,{onClick:()=>{Z&&Z(a.id)},label:_({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,l.g)(a.firstname??"",a.lastname)}),noBorder:!0,icon:(0,t.jsx)(Ps.Z,{})})})]})})]},a.id)})})},ds=["ee","license-limit-info"],_s=()=>{const{post:n}=(0,e.kY)(),{formatAPIError:r}=(0,e.So)(),[O,Z]=E.useState(!1),B=(0,w.v9)(l.s),{allowedActions:{canCreate:z,canDelete:j,canRead:T}}=(0,e.ss)(B.settings?.users),d=(0,G.useQueryClient)(),W=(0,e.lm)(),{formatMessage:_}=(0,m.Z)(),{search:a}=(0,q.TH)();(0,e.go)();const{users:$,pagination:h,isError:N,isLoading:y,refetch:K}=(0,I.g)(X.parse(a,{ignoreQueryPrefix:!0}),{cacheTime:0,enabled:T}),ss=(0,I.j)(As,async()=>(await s.e(6993).then(s.bind(s,6993))).CreateActionEE),ts=Ts.map(i=>({...i,metadatas:{...i.metadatas,label:_(i.metadatas.label)}})),es=_({id:"global.users",defaultMessage:"Users"}),as=()=>{Z(i=>!i)},k=(0,G.useMutation)(async i=>n("/admin/users/batch-delete",{ids:i}),{async onSuccess(){await K(),await d.refetchQueries(ds)},onError(i){W({type:"warning",message:r(i)})}});return ss?(0,t.jsxs)(P.o,{"aria-busy":y,children:[(0,t.jsx)(e.SL,{name:"Users"}),(0,t.jsx)(R.T,{primaryAction:z&&(0,t.jsx)(ss,{onClick:as}),title:es,subtitle:_({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),T&&(0,t.jsx)(H.Z,{startActions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.m,{label:_({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:es})}),(0,t.jsx)(ms.F,{displayedFilters:Us})]})}),(0,t.jsxs)(J.D,{children:[!T&&(0,t.jsx)(e.ZF,{}),N&&(0,t.jsx)("div",{children:"TODO: An error occurred"}),T&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.tM,{contentType:"Users",isLoading:y,onConfirmDeleteAll:async i=>{await k.mutateAsync(i)},onConfirmDelete:async i=>{await k.mutateAsync([i])},headers:ts,rows:$,withBulkActions:!0,withMainAction:j,children:(0,t.jsx)(Is,{canDelete:j})}),h&&(0,t.jsx)(M.x,{paddingTop:4,children:(0,t.jsxs)(g.k,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,t.jsx)(e.v4,{}),(0,t.jsx)(e.tU,{pagination:h})]})})]})]}),O&&(0,t.jsx)(Cs,{onSuccess:async()=>{await K(),await d.refetchQueries(ds)},onToggle:as})]}):null},Ts=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:n},{formatMessage:r}){return(0,t.jsx)(c.Z,{textColor:"neutral800",children:n.map(O=>r({id:`Settings.permissions.users.${O.code}`,defaultMessage:O.name})).join(`,
`)})}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:n},{formatMessage:r}){return(0,t.jsxs)(g.k,{children:[(0,t.jsx)(e.qb,{variant:n?"success":"danger"}),(0,t.jsx)(c.Z,{textColor:"neutral800",children:r({id:n?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:n?"Active":"Inactive"})})]})}}],Us=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],xs=()=>{const n=(0,I.j)(_s,async()=>(await s.e(315).then(s.bind(s,80315))).UserListPageEE);return n?(0,t.jsx)(n,{}):null},Rs=()=>{const n=(0,w.v9)(l.s);return(0,t.jsx)(e.O4,{permissions:n.settings?.users.main,children:(0,t.jsx)(xs,{})})}},53245:(os,Y,s)=>{s.d(Y,{M:()=>Q,S:()=>S,a:()=>v});var t=s(91320),E=s(67645),C=s(51896),V=s(58767),U=s(67133),f=s(6264),g=s(34064),M=s(15656),c=s(54769),L=s(9714);const v=({children:u,target:P})=>{const R=(0,f.lm)(),{formatMessage:H}=(0,E.Z)(),{copy:J}=(0,f.VP)(),e=H({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),X=async()=>{await J(P)&&R({type:"info",message:{id:"notification.link-copied"}})};return(0,t.jsx)(f.Y_,{endAction:(0,t.jsx)(V.h,{label:e,noBorder:!0,icon:(0,t.jsx)(g.Z,{}),onClick:X}),title:P,titleEllipsis:!0,subtitle:u,icon:(0,t.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})},Q=({registrationToken:u})=>{const{formatMessage:P}=(0,E.Z)(),R=`${window.location.origin}${(0,C.p)()}/auth/register?registrationToken=${u}`;return(0,t.jsx)(v,{target:R,children:P({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},S=({disabled:u,error:P,onChange:R,value:H})=>{const{get:J}=(0,f.kY)(),{isLoading:e,data:X}=(0,c.useQuery)(["roles"],async()=>{const{data:{data:l}}=await J("/admin/roles");return l},{staleTime:5e4}),{formatMessage:m}=(0,E.Z)(),G=P?m({id:P,defaultMessage:P}):"",w=m({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),q=m({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),I=m({id:"app.components.Select.placeholder",defaultMessage:"Select"});return(0,t.jsx)(U.NU,{id:"roles",disabled:u,error:G,hint:q,label:w,name:"roles",onChange:l=>{R({target:{name:"roles",value:l}})},placeholder:I,startIcon:e?(0,t.jsx)(ns,{}):void 0,value:H.map(l=>l.toString()),withTags:!0,required:!0,children:(X??[]).map(l=>(0,t.jsx)(U.ML,{value:l.id.toString(),children:m({id:`global.${l.code}`,defaultMessage:l.name})},l.id))})},F=(0,L.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,x=L.ZP.div`
  animation: ${F} 2s infinite linear;
`,ns=()=>(0,t.jsx)(x,{children:(0,t.jsx)(M.Z,{})})}}]);
