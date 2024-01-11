"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[5189,4653],{35189:(ee,j,e)=>{e.d(j,{ProtectedCreatePage:()=>H});var s=e(91320),D=e(6264),g=e(51896),R=e(79377),W=e(64653),U=e(85904),B=e(70644),y=e(39112),T=e(32805),L=e(84770),O=e(67652),p=e(38239),S=e(5676),b=e(54769),c=e(13768),Z=e(99321),x=e(90217),$=e(76350),se=e(22310),te=e(96110),ne=e(76251),ae=e(21977),z=e(49470),oe=e(17141),re=e(21681),f=e(38506),K=e(99135),ie=e(52800),V=e(62643),X=e(2863),Q=e(4626),de=e(50589),le=e(77315),_e=e(89775),G=e(56302),Ee=e(75376),Y=e(50024),ce=e(92585),ge=e(64706),u=e(98064),I=e(87282),C=e(10112),he=e(13406),k=e(35577),Me=e(73607),J=e(38243),Pe=e(23889),Oe=e(18334),De=e(7405),me=e(98297),ue=e(69158),ve=e(53270);const H=()=>{const w=(0,g.f)(R.s);return(0,s.jsx)(D.O4,{permissions:w.settings?.webhooks.create,children:(0,s.jsx)(W.E,{})})}},64653:(ee,j,e)=>{e.r(j),e.d(j,{E:()=>q,a:()=>N,b:()=>Be});var s=e(91320),D=e(38239),g=e(65676),R=e(6595),W=e(94060),U=e(79343),B=e(39535),y=e(12365),T=e(62523),L=e(43831),O=e(70946),p=e(27366),S=e(39160),b=e(65797),c=e(92422),Z=e(2548),x=e(64150),$=e(95978),se=e(8712),te=e(93522),ne=e(67303),ae=e(64062),z=e(70269),oe=e(44137),re=e(20674),f=e(6264),K=e(54769),ie=e(42977),V=e(71179),X=e(51896),Q=e(53270),de=e(79377),le=e(6092),_e=e(58780),G=e(67073),Ee=e(15656),Y=e(84749),ce=e(82068),ge=e(78711),u=e(13768),I=e(67645),C=e(90217),he=e(5087),k=e(9714);const[Me,J]=(0,he.k)("WebhookEvent"),Pe=({children:t})=>{const{formatMessage:n}=(0,I.Z)(),{collectionTypes:a,isLoading:_}=(0,Q.u)(),o=D.useMemo(()=>a.some(r=>r.options?.draftAndPublish===!0),[a]),l=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,s.jsx)(Me,{isDraftAndPublish:o,children:(0,s.jsxs)(g.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(R.Q,{"aria-hidden":!0,children:l}),_&&(0,s.jsx)(W.a,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,s.jsx)(Oe,{"aria-label":l,children:t})]})})},Oe=(0,k.ZP)(U.w)`
  tbody tr:nth-child(odd) {
    background: ${({theme:t})=>t.colors.neutral100};
  }

  thead th span {
    color: ${({theme:t})=>t.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:t})=>t.spaces[3]};
    padding-block-end: ${({theme:t})=>t.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:t})=>t.spaces[2]};
  }
`,De=t=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return t&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},me=({getHeaders:t=De})=>{const{isDraftAndPublish:n}=J("Headers"),{formatMessage:a}=(0,I.Z)(),_=t(n);return(0,s.jsx)(B.S,{children:(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(T.g,{children:(0,s.jsx)(L.T,{children:a({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),_.map(o=>["app.utils.publish","app.utils.unpublish"].includes(o?.id??"")?(0,s.jsx)(T.g,{title:a({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,s.jsx)(O.Z,{variant:"sigma",textColor:"neutral600",children:a(o)})},o.id):(0,s.jsx)(T.g,{children:(0,s.jsx)(O.Z,{variant:"sigma",textColor:"neutral600",children:a(o)})},o.id))]})})},ue=({providedEvents:t})=>{const{isDraftAndPublish:n}=J("Body"),a=t||ve(n),{values:_,handleChange:o}=(0,u.u6)(),l="events",r=_.events,P=[],m=r.reduce((d,i)=>{const h=i.split(".")[0];return d[h]||(d[h]=[]),d[h].push(i),d},{}),E=({target:{name:d,value:i}})=>{const h=new Set(r);i?h.add(d):h.delete(d),o({target:{name:l,value:Array.from(h)}})},v=({target:{name:d,value:i}})=>{const h=new Set(r);i?a[d].forEach(A=>{P.includes(A)||h.add(A)}):a[d].forEach(A=>h.delete(A)),o({target:{name:l,value:Array.from(h)}})};return(0,s.jsx)(p.X,{children:Object.entries(a).map(([d,i])=>(0,s.jsx)(H,{disabledEvents:P,name:d,events:i,inputValue:m[d],handleSelect:E,handleSelectAll:v},d))})},ve=t=>{const n=["entry.create","entry.update","entry.delete"];return t&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},H=({disabledEvents:t=[],name:n,events:a=[],inputValue:_=[],handleSelect:o,handleSelectAll:l})=>{const{formatMessage:r}=(0,I.Z)(),P=a.filter(i=>!t.includes(i)),m=_.length>0,E=_.length===P.length,v=({target:{name:i}})=>{l({target:{name:i,value:!E}})},d=5;return(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(T.f,{children:(0,s.jsx)(S.X,{indeterminate:m&&!E,"aria-label":r({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:v,value:E,children:w(n)})}),a.map(i=>(0,s.jsx)(T.f,{children:(0,s.jsx)(b.C,{disabled:t.includes(i),"aria-label":i,name:i,value:_.includes(i),onValueChange:h=>o({target:{name:i,value:h}})})},i)),a.length<d&&(0,s.jsx)(T.f,{colSpan:d-a.length})]})},w=t=>t.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),N={Root:Pe,Headers:me,Body:ue,Row:H},Ae=()=>(0,s.jsxs)(N.Root,{children:[(0,s.jsx)(N.Headers,{}),(0,s.jsx)(N.Body,{})]}),Te=()=>{const{formatMessage:t}=(0,I.Z)(),{values:n,errors:a}=(0,u.u6)();return(0,s.jsxs)(g.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(R.Q,{children:t({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,s.jsx)(c.x,{padding:8,background:"neutral100",hasRadius:!0,children:(0,s.jsx)(u.F2,{validateOnChange:!1,name:"headers",render:({push:_,remove:o})=>(0,s.jsxs)(Z.r,{gap:4,children:[n.headers.map((l,r)=>{const P=a.headers?.[r],m=typeof P=="object"?P.key:void 0,E=typeof P=="object"?P.value:void 0;return(0,s.jsxs)(D.Fragment,{children:[(0,s.jsx)(x.P,{col:6,children:(0,s.jsx)(u.gN,{as:xe,name:`headers.${r}.key`,"aria-label":`row ${r+1} key`,label:t({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:m})}),(0,s.jsx)(x.P,{col:6,children:(0,s.jsxs)(g.k,{alignItems:"flex-end",children:[(0,s.jsx)(c.x,{style:{flex:1},children:(0,s.jsx)(u.gN,{as:$.o,name:`headers.${r}.value`,"aria-label":`row ${r+1} value`,label:t({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:E})}),(0,s.jsx)(g.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:E?0:5,children:(0,s.jsx)(f.fG,{disabled:n.headers.length===1,onClick:()=>o(r),label:t({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:r+1})})})]})})]},`${r}.${l.key}`)}),(0,s.jsx)(x.P,{col:12,children:(0,s.jsx)(se.A,{type:"button",onClick:()=>{_({key:"",value:""})},startIcon:(0,s.jsx)(_e.Z,{}),children:t({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},xe=({name:t,onChange:n,value:a,..._})=>{const{values:{headers:o}}=(0,u.u6)(),[l,r]=D.useState([...fe]);D.useEffect(()=>{const E=fe.filter(v=>!o?.some(d=>d.key!==a&&d.key===v));r(E)},[o,a]);const P=E=>{n({target:{name:t,value:E}})},m=E=>{r(v=>[...v,E]),P(E)};return(0,s.jsx)(te.XU,{..._,onClear:()=>P(""),onChange:P,onCreateOption:m,placeholder:"",value:a,children:l.map(E=>(0,s.jsx)(ne.O,{value:E,children:E},E))})},fe=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],Ie=({isPending:t,onCancel:n,response:a})=>{const{statusCode:_,message:o}=a??{},{formatMessage:l}=(0,I.Z)();return(0,s.jsx)(c.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsxs)(Z.r,{gap:4,style:{alignItems:"center"},children:[(0,s.jsx)(x.P,{col:3,children:(0,s.jsx)(O.Z,{children:l({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,s.jsx)(x.P,{col:3,children:(0,s.jsx)(je,{isPending:t,statusCode:_})}),(0,s.jsx)(x.P,{col:6,children:t?(0,s.jsx)(g.k,{justifyContent:"flex-end",children:(0,s.jsx)("button",{onClick:n,type:"button",children:(0,s.jsxs)(g.k,{gap:2,alignItems:"center",children:[(0,s.jsx)(O.Z,{textColor:"neutral400",children:l({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,s.jsx)(F,{as:G.Z,color:"neutral400"})]})})}):(0,s.jsx)(Re,{statusCode:_,message:o})})]})})},F=k.ZP.svg(({theme:t,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;


  ${n?(0,k.iv)`
          path {
            fill: ${t.colors[n]};
          }
        `:""}
`),je=({isPending:t,statusCode:n})=>{const{formatMessage:a}=(0,I.Z)();return t||!n?(0,s.jsxs)(g.k,{gap:2,alignItems:"center",children:[(0,s.jsx)(F,{as:Ee.Z}),(0,s.jsx)(O.Z,{children:a({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,s.jsxs)(g.k,{gap:2,alignItems:"center",children:[(0,s.jsx)(F,{as:Y.Z,color:"success700"}),(0,s.jsx)(O.Z,{children:a({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,s.jsxs)(g.k,{gap:2,alignItems:"center",children:[(0,s.jsx)(F,{as:G.Z,color:"danger700"}),(0,s.jsxs)(O.Z,{children:[a({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null},Re=({statusCode:t,message:n})=>{const{formatMessage:a}=(0,I.Z)();return t?t>=200&&t<300?(0,s.jsx)(g.k,{justifyContent:"flex-end",children:(0,s.jsx)(O.Z,{textColor:"neutral600",ellipsis:!0,children:a({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):t>=300?(0,s.jsx)(g.k,{justifyContent:"flex-end",children:(0,s.jsx)(g.k,{maxWidth:(0,f.Q1)(250),justifyContent:"flex-end",title:n,children:(0,s.jsx)(O.Z,{ellipsis:!0,textColor:"neutral600",children:n})})}):null:null},ye=({handleSubmit:t,triggerWebhook:n,isCreating:a,isTriggering:_,triggerResponse:o,data:l})=>{const{formatMessage:r}=(0,I.Z)(),[P,m]=D.useState(!1),E=(0,X.j)(Ae,async()=>(await e.e(7711).then(e.bind(e,67711))).EventsTableEE),v=i=>Object.keys(i).length?Object.entries(i).map(([h,A])=>({key:h,value:A})):[{key:"",value:""}],d=(0,u.TA)({initialValues:{name:l?.name||"",url:l?.url||"",headers:v(l?.headers||{}),events:l?.events||[]},onSubmit(i,{resetForm:h,setSubmitting:A}){t(i),h({values:i}),A(!1)},validationSchema:Ue({formatMessage:r}),validateOnChange:!1,validateOnBlur:!1});return E?(0,s.jsx)(u.Hy,{value:d,children:(0,s.jsxs)(f.l0,{children:[(0,s.jsx)(ae.T,{primaryAction:(0,s.jsxs)(g.k,{gap:2,children:[(0,s.jsx)(z.z,{onClick:()=>{n(),m(!0)},variant:"tertiary",startIcon:(0,s.jsx)(ce.Z,{}),disabled:a||_,size:"L",children:r({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,s.jsx)(z.z,{startIcon:(0,s.jsx)(Y.Z,{}),type:"submit",size:"L",disabled:!d.dirty,loading:d.isSubmitting,children:r({id:"global.save",defaultMessage:"Save"})})]}),title:a?r({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):l?.name,navigationAction:(0,s.jsx)(le.r,{as:ie.OL,startIcon:(0,s.jsx)(ge.Z,{}),to:"/settings/webhooks",children:r({id:"global.back",defaultMessage:"Back"})})}),(0,s.jsx)(oe.D,{children:(0,s.jsxs)(g.k,{direction:"column",alignItems:"stretch",gap:4,children:[P&&(0,s.jsx)(Ie,{isPending:_,response:o,onCancel:()=>m(!1)}),(0,s.jsx)(c.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsxs)(g.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,s.jsxs)(Z.r,{gap:6,children:[(0,s.jsx)(x.P,{col:6,children:(0,s.jsx)(u.gN,{as:$.o,name:"name",error:d.errors.name,label:r({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,s.jsx)(x.P,{col:12,children:(0,s.jsx)(u.gN,{as:$.o,name:"url",error:d.errors.url,label:r({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,s.jsx)(Te,{}),(0,s.jsx)(E,{})]})})]})})]})}):null},Le=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,We=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Ue=({formatMessage:t})=>C.Ry().shape({name:C.Z_().required(t({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Le,t({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:C.Z_().required(t({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(We,t({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:C.Vo(n=>{const a=C.IX();if(n.length===1){const{key:_,value:o}=n[0];if(!_&&!o)return a}return a.of(C.Ry().shape({key:C.Z_().required(t({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:C.Z_().required(t({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:C.IX()}),Ce=t=>({...t,headers:t.headers.reduce((n,{key:a,value:_})=>(a!==""&&(n[a]=_),n),{})}),q=()=>{const n=(0,V.$B)("/settings/webhooks/:id")?.params.id,a=n==="create",{replace:_}=(0,V.k6)(),o=(0,f.lm)(),{formatAPIError:l}=(0,f.So)(),{isLoading:r}=(0,Q.u)(),{put:P,get:m,post:E}=(0,f.kY)(),{isLoading:v,data:d,error:i,refetch:h}=(0,K.useQuery)(["webhooks",n],async()=>{const{data:{data:M}}=await m(`/admin/webhooks/${n}`);return M},{enabled:!a});D.useEffect(()=>{i&&o({type:"warning",message:l(i)})},[i,o,l]);const{isLoading:A,data:Ke,mutate:pe}=(0,K.useMutation)(()=>E(`/admin/webhooks/${n}/trigger`).then(M=>M.data.data),{onError(M){o({type:"warning",message:l(M)})}}),Se=(0,K.useMutation)(M=>E("/admin/webhooks",M),{onSuccess({data:M}){o({type:"success",message:{id:"Settings.webhooks.created"}}),_(`/settings/webhooks/${M.data.id}`)},onError(M){o({type:"warning",message:l(M)})}}),be=(0,K.useMutation)(({id:M,body:$e})=>P(`/admin/webhooks/${M}`,$e),{onSuccess(){h(),o({type:"success",message:{id:"notification.form.success.fields"}})},onError(M){o({type:"warning",message:l(M)})}}),Ze=async M=>{if(a){Se.mutate(Ce(M));return}be.mutate({id:n,body:Ce(M)})};return v||r?(0,s.jsx)(f.dO,{}):(0,s.jsxs)(re.o,{children:[(0,s.jsx)(f.SL,{name:"Webhooks"}),(0,s.jsx)(ye,{data:d,handleSubmit:Ze,triggerWebhook:pe,isCreating:a,isTriggering:A,triggerResponse:Ke})]})},Be=Object.freeze(Object.defineProperty({__proto__:null,EditPage:q,ProtectedEditPage:()=>{const t=(0,X.f)(de.s);return(0,s.jsx)(f.O4,{permissions:t.settings?.webhooks.update,children:(0,s.jsx)(q,{})})}},Symbol.toStringTag,{value:"Module"}))},53270:(ee,j,e)=>{e.d(j,{u:()=>W});var s=e(38239),D=e(6264),g=e(58686),R=e(54769);function W(){const{get:U}=(0,D.kY)(),{formatAPIError:B}=(0,D.So)(),y=(0,D.lm)(),T=(0,R.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:c}}=await U("/content-manager/components");return c},onError(c){c instanceof g.d7&&y({type:"warning",message:B(c)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:c}}=await U("/content-manager/content-types");return c},onError(c){c instanceof g.d7&&y({type:"warning",message:B(c)})}}]),[L,O]=T,p=L.isLoading||O.isLoading,S=s.useMemo(()=>(O?.data??[]).filter(c=>c.kind==="collectionType"&&c.isDisplayed),[O?.data]),b=s.useMemo(()=>(O?.data??[]).filter(c=>c.kind!=="collectionType"&&c.isDisplayed),[O?.data]);return{isLoading:p,components:s.useMemo(()=>L?.data??[],[L?.data]),collectionTypes:S,singleTypes:b}}}}]);
