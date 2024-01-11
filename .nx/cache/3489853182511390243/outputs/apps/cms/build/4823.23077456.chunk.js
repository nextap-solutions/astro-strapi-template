"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[4823],{41136:(L,g,s)=>{s.d(g,{B:()=>U,D:()=>B,H:()=>y,R:()=>I});var t=s(91320),l=s(65676),E=s(70946),m=s(71685),c=s(20674),O=s(44137),P=s(64062),d=s(6264),r=s(19121),o=s(78711),M=s(67645),v=s(51896),T=s(16706),n=s(9714);const e=(0,n.ZP)(l.k)`
  svg path {
    fill: ${({theme:i})=>i.colors.neutral600};
  }
`,D=({name:i})=>(0,t.jsxs)(l.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,d.Q1)(300),children:[(0,t.jsx)(e,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,t.jsx)(r.Z,{width:`${8/16}rem`})}),(0,t.jsx)(E.Z,{fontWeight:"bold",children:i})]}),B=()=>(0,t.jsx)(v.D,{renderItem:i=>{if(i.type===T.D.STAGE)return(0,t.jsx)(D,{name:typeof i.item=="string"?i.item:null})}}),I=({children:i})=>(0,t.jsx)(m.A,{children:(0,t.jsx)(c.o,{tabIndex:-1,children:(0,t.jsx)(O.D,{children:i})})}),U=({href:i})=>{const{formatMessage:h}=(0,M.Z)();return(0,t.jsx)(d.rU,{startIcon:(0,t.jsx)(o.Z,{}),to:i,children:h({id:"global.back",defaultMessage:"Back"})})},y=({title:i,subtitle:h,navigationAction:K,primaryAction:u})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.SL,{name:i}),(0,t.jsx)(P.T,{navigationAction:K,primaryAction:u,title:i,subtitle:h})]})},64823:(L,g,s)=>{s.d(g,{ProtectedReviewWorkflowsPage:()=>J});var t=s(91320),l=s(38239),E=s(65676),m=s(94060),c=s(17241),O=s(35206),P=s(69275),d=s(69372),r=s(25587),o=s(70946),M=s(43831),v=s(22255),T=s(58767),n=s(6264),e=s(58780),D=s(60410),B=s(59712),I=s(58686),U=s(67645),y=s(54769),i=s(5676),h=s(71179),K=s(9714),u=s(53270),S=s(79377),k=s(39083),$=s(41136),j=s(30019),z=s(16706),G=s(54471),Ps=s(98297),Os=s(69158),gs=s(51896),ms=s(85904),cs=s(70644),vs=s(39112),fs=s(32805),Ts=s(84770),Cs=s(67652),hs=s(13768),Ls=s(99321),Ws=s(90217),As=s(76350),Rs=s(22310),Bs=s(96110),Is=s(76251),Us=s(21977),ys=s(49470),Ks=s(17141),us=s(21681),js=s(38506),xs=s(99135),ws=s(52800),ps=s(62643),Ss=s(2863),$s=s(4626),Zs=s(50589),Qs=s(77315),Fs=s(89775),Ns=s(56302),Hs=s(75376),Ys=s(50024),ks=s(92585),zs=s(64706),Gs=s(98064),Vs=s(87282),Xs=s(10112),Js=s(13406),bs=s(35577),qs=s(73607),st=s(38243),tt=s(23889),ot=s(18334),nt=s(7405);const V=(0,K.ZP)(n.rU)`
  align-items: center;
  height: ${(0,n.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:a})=>`${a.spaces[2]}}`};
  width: ${(0,n.Q1)(32)};

  svg {
    height: ${(0,n.Q1)(12)};
    width: ${(0,n.Q1)(12)};

    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.neutral800};
      }
    }
  }
`,X=()=>{const{formatMessage:a}=(0,U.Z)(),{push:Z}=(0,h.k6)(),{trackUsage:Q}=(0,n.rS)(),[x,w]=l.useState(null),[b,W]=l.useState(!1),{collectionTypes:q,singleTypes:ss,isLoading:ts}=(0,u.u)(),{meta:f,workflows:F,isLoading:p,refetch:os}=(0,G.u)(),{del:ns}=(0,n.kY)(),{formatAPIError:es}=(0,n.So)(),N=(0,n.lm)(),{getFeature:as,isLoading:H}=(0,k.u)(),_s=(0,i.v9)(S.s),{allowedActions:{canCreate:Y,canDelete:is}}=(0,n.ss)(_s.settings?.["review-workflows"]),C=as("review-workflows")?.[z.C],{mutateAsync:ls,isLoading:rs}=(0,y.useMutation)(async({workflowId:_,stages:A})=>{const{data:{data:R}}=await ns(`/admin/review-workflows/workflows/${_}`,{data:A});return R},{onSuccess(){N({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),Es=_=>[...q,...ss].find(R=>R.uid===_)?.info.displayName,ds=_=>{w(_)},Ms=()=>{w(null)},Ds=async()=>{if(x)try{const _=await ls({workflowId:x});return await os(),w(null),_}catch(_){return _ instanceof I.d7&&N({type:"warning",message:es(_)}),null}};return l.useEffect(()=>{!p&&!H&&C&&f&&f?.workflowCount>parseInt(C,10)&&W(!0)},[H,p,f,f?.workflowCount,C]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)($.H,{primaryAction:Y&&(0,t.jsx)(n.Qj,{startIcon:(0,t.jsx)(e.Z,{}),size:"S",to:"/settings/review-workflows/create",onClick:_=>{C&&f&&f?.workflowCount>=parseInt(C,10)?(_.preventDefault(),W(!0)):Q("willCreateWorkflow")},children:a({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:a({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:a({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,t.jsxs)($.R,{children:[p||ts?(0,t.jsx)(E.k,{justifyContent:"center",children:(0,t.jsx)(m.a,{children:a({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,t.jsxs)(c.i,{colCount:3,footer:Y&&(0,t.jsx)(O.c,{icon:(0,t.jsx)(e.Z,{}),onClick:()=>{C&&f&&f?.workflowCount>=parseInt(C,10)?W(!0):(Z("/settings/review-workflows/create"),Q("willCreateWorkflow"))},children:a({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,t.jsx)(P.h,{children:(0,t.jsxs)(d.Tr,{children:[(0,t.jsx)(r.Th,{children:(0,t.jsx)(o.Z,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,t.jsx)(r.Th,{children:(0,t.jsx)(o.Z,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,t.jsx)(r.Th,{children:(0,t.jsx)(o.Z,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,t.jsx)(r.Th,{children:(0,t.jsx)(M.T,{children:a({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(v.p,{children:F?.map(_=>(0,l.createElement)(d.Tr,{...(0,n.X7)({fn(A){A.target.nodeName!=="BUTTON"&&Z(`/settings/review-workflows/${_.id}`)}}),key:`workflow-${_.id}`},(0,t.jsx)(r.Td,{width:(0,n.Q1)(250),children:(0,t.jsx)(o.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,t.jsx)(r.Td,{children:(0,t.jsx)(o.Z,{textColor:"neutral800",children:_.stages.length})}),(0,t.jsx)(r.Td,{children:(0,t.jsx)(o.Z,{textColor:"neutral800",children:(_?.contentTypes??[]).map(Es).join(", ")})}),(0,t.jsx)(r.Td,{children:(0,t.jsxs)(E.k,{alignItems:"center",justifyContent:"end",children:[(0,t.jsx)(V,{to:`/settings/review-workflows/${_.id}`,"aria-label":a({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:_.name}),children:(0,t.jsx)(D.Z,{})}),F.length>1&&is&&(0,t.jsx)(T.h,{"aria-label":a({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,t.jsx)(B.Z,{}),noBorder:!0,onClick:()=>{ds(String(_.id))}})]})})))})]}),(0,t.jsx)(n.QH,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:rs,isOpen:!!x,onToggleDialog:Ms,onConfirm:Ds}),(0,t.jsxs)(j.L.Root,{isOpen:b,onClose:()=>W(!1),children:[(0,t.jsx)(j.L.Title,{children:a({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(j.L.Body,{children:a({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},J=()=>{const a=(0,i.v9)(S.s);return(0,t.jsx)(n.O4,{permissions:a.settings?.["review-workflows"]?.main,children:(0,t.jsx)(X,{})})}},53270:(L,g,s)=>{s.d(g,{u:()=>c});var t=s(38239),l=s(6264),E=s(58686),m=s(54769);function c(){const{get:O}=(0,l.kY)(),{formatAPIError:P}=(0,l.So)(),d=(0,l.lm)(),r=(0,m.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:e}}=await O("/content-manager/components");return e},onError(e){e instanceof E.d7&&d({type:"warning",message:P(e)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:e}}=await O("/content-manager/content-types");return e},onError(e){e instanceof E.d7&&d({type:"warning",message:P(e)})}}]),[o,M]=r,v=o.isLoading||M.isLoading,T=t.useMemo(()=>(M?.data??[]).filter(e=>e.kind==="collectionType"&&e.isDisplayed),[M?.data]),n=t.useMemo(()=>(M?.data??[]).filter(e=>e.kind!=="collectionType"&&e.isDisplayed),[M?.data]);return{isLoading:v,components:t.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:T,singleTypes:n}}},54471:(L,g,s)=>{s.d(g,{u:()=>m});var t=s(38239),l=s(6264),E=s(54769);function m(c={}){const{get:O}=(0,l.kY)(),{id:P="",...d}=c,r={populate:"stages"},{data:o,isLoading:M,status:v,refetch:T}=(0,E.useQuery)(["review-workflows","workflows",P],async()=>{const{data:D}=await O(`/admin/review-workflows/workflows/${P}`,{params:{...r,...d}});return D}),n=t.useMemo(()=>{let D=[];return o?.data&&(Array.isArray(o.data)?D=o.data:D=[o.data]),D},[o]);return{meta:t.useMemo(()=>{let D;return o&&"meta"in o&&(D=o.meta),D},[o]),workflows:n,isLoading:M,status:v,refetch:T}}},35206:(L,g,s)=>{s.d(g,{c:()=>r});var t=s(91320),l=s(9714),E=s(92422),m=s(53621),c=s(65676),O=s(70946);const P=(0,l.ZP)(E.x)`
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
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,d=(0,l.ZP)(E.x)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,r=({children:o,icon:M,...v})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(m.i,{}),(0,t.jsx)(d,{as:"button",background:"primary100",padding:5,...v,children:(0,t.jsxs)(c.k,{children:[(0,t.jsx)(P,{"aria-hidden":!0,background:"primary200",children:M}),(0,t.jsx)(E.x,{paddingLeft:3,children:(0,t.jsx)(O.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
