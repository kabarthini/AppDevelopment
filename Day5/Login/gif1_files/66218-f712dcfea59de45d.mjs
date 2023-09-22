(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[66218,97215],{337445:(s,e,a)=>{a.d(e,{Oz:()=>r,nt:()=>n,v8:()=>t});const r={BUSINESS_ACCOUNT:"BUSINESS_ACCOUNT",BUSINESS_HIERARCHY:"BUSINESS_HIERARCHY",USER_ACCOUNT:"USER",AD_ACCOUNT:"AD_ACCOUNT",PROFILE:"PROFILE"},t="BUSINESS_PANEL",n="ASSET_PANEL"},813364:(s,e,a)=>{a.d(e,{F:()=>y,d:()=>A});var r=a(667294),t=a(616550),n=a(337445),i=a(872993),c=a(388011),d=a(583592),_=a(988014),u=a(245410),o=a(739425),l=a(802071),m=a(897215),E=a(785893);const{Provider:I,useHook:A}=(0,d.Z)("AccountSwitcherContext"),y=({children:s})=>{const e=(0,t.useLocation)(),{params:{userBizId:a,businessHierarchyId:d,advertiserId:A,username:y}}=(0,t.useRouteMatch)(),S=e.search&&(0,o.mB)(e.search).advertiserId,N=(0,l.Z)(),[b,p]=(0,r.useState)(""),[h,T]=(0,r.useState)({type:n.v8}),[D,R]=(0,r.useState)(!1),[C,v]=(0,r.useState)(null),[O,g]=(0,r.useState)(null),{checkExperiment:P}=(0,u.F)(),$=P("web_m10n_business_hierarchy_alpha").anyEnabled||P("aid_exp_global_account_switcher_beta").anyEnabled||P("aid_exp_global_account_switcher_ga").anyEnabled,{logContextEvent:U}=(0,c.v)();(0,r.useEffect)((()=>{p(d||"")}),[d]),(0,r.useEffect)((()=>{const s=async({id:s,username:e})=>{const a=await(0,i.bG)({user_id:s,username:e});a&&v({type:s?n.Oz.BUSINESS_ACCOUNT:n.Oz.PROFILE,id:s||a.id,name:a.full_name,img:a.image_medium_url,username:e})};if(N.isAuth&&$)if(y)(null==C?void 0:C.username)!==y&&s({username:y}),(null==O?void 0:O.id)!==N.id&&g({id:N.id||"",name:N.fullName||"",img:N.imageMediumUrl||""});else if(!C){const r=A||S&&!(0,_.h3)(e);d?(async({id:s})=>{const e=await(0,i.p)({hierarchyId:s});v({id:s,name:null!=e&&e.data?e.data.name:"",img:null!=e&&e.data?e.data.image_medium_url:"",type:n.Oz.BUSINESS_HIERARCHY})})({id:d}):a?s({id:a}):r?(async({businessId:s,assetId:e})=>{if(s)try{const{data:{data:{asset:a,type:r}}}=await(0,m.G2)({businessId:s,assetId:e});v({id:e,name:a.name,img:"",type:r})}catch(a){v({id:N.id||"",name:N.fullName||"",img:N.imageMediumUrl||"",type:n.Oz.BUSINESS_ACCOUNT})}})({businessId:null==O?void 0:O.id,assetId:A||S}):v({type:n.Oz.BUSINESS_ACCOUNT,id:N.id||"",name:N.fullName||"",img:N.imageMediumUrl||""})}}),[C,N,d,a,y,A,S,O,$,e]),(0,r.useEffect)((()=>{O||g({id:N.id||"",name:N.fullName||"",img:N.imageMediumUrl||""})}),[O,N]);const f=(0,r.useMemo)((()=>({activePanel:h,selectedHierarchyId:b,switcherOpen:D,openAccountSwitcher:()=>{U({event_type:101,view_type:608,component:14346}),R(!0)},closeAccountSwitcher:()=>R(!1),openAssetPanel:s=>{T({type:n.nt,id:s})},closeAssetPanel:()=>{T({type:n.v8})},actingBusiness:O,selectedAccount:C,setSelectedAccount:v,setActingBusiness:g})),[b,h,D,C,O,U]);return(0,E.jsx)(I,{value:f,children:s})}},987892:(s,e,a)=>{a.d(e,{C:()=>y,H:()=>S});var r=a(667294),t=a(337445),n=a(872993),i=a(965533),c=a(914062),d=a(651009),_=a(583592),u=a(970588),o=a(245410),l=a(957286),m=a(802071),E=a(173969),I=a(785893);const{Provider:A,useHook:y}=(0,_.Z)("BusinessHierarchyContext"),S=({children:s})=>{const[e,a]=(0,r.useState)([]),[_,y]=(0,r.useState)(!0),[S,N]=(0,r.useState)({}),[b,p]=(0,r.useState)([]),h=(0,E.Z)(),T=(0,r.useRef)(h),D=(0,m.Z)(),{checkExperiment:R}=(0,o.F)(),C=R("web_m10n_business_hierarchy_alpha").anyEnabled||R("aid_exp_global_account_switcher_beta").anyEnabled||R("aid_exp_global_account_switcher_ga").anyEnabled,v=(0,r.useRef)({}),O=(0,r.useCallback)(((s,e)=>{let a;e===t.Oz.BUSINESS_HIERARCHY?a=(0,d.Z)(c.Q6.DASHBOARD,"","",s):e===t.Oz.BUSINESS_ACCOUNT&&(a=(0,d.Z)(c.Q6.DASHBOARD,s));const r=(0,l.Z)({site:"www",path:a});(0,i.Z)(r)}),[]),g=(0,r.useCallback)((async s=>{if(!C)return[];if(y(!0),v.current[s])return y(!1),v.current[s];{const e=await(0,u.Z)({url:"ads/v4/business_access/business_hierarchies/",data:{search_by:["FULL_NAME","BUSINESS_ID"],search_value:s}}),{data:a}=e.resource_response,r=a&&a.map((s=>(s.children&&(s.children=s.children.map((s=>(s.user.entity_type=t.Oz.USER_ACCOUNT,s)))),s)))||[],i=/^\d+$/.test(s),c=new RegExp(s.toLowerCase(),"g"),d=(await T.current()).filter((e=>{if(i)return e.id.includes(s);return e.user.full_name.toLowerCase().match(c)})).map(n.IT),_=[...r.map((s=>s.id)),...d.map((s=>s.id))],o=i?(D.id||"").includes(s):(D.fullName||"").toLowerCase().match(c);return D.isAuth&&o&&_.push(D.id),v.current[s]=_,y(!1),_}}),[C,T,D.id,D.fullName,D.isAuth]),{id:P="",username:$="",email:U="",fullName:f="",imageSmallUrl:B="",imageMediumUrl:G="",isAuth:w}=D,L=(0,r.useCallback)((async()=>{if(y(!0),!w||!C)return void y(!1);let s=[];try{const e=await(0,u.Z)({url:"ads/v4/business_access/business_hierarchies/"}),{data:r}=e.resource_response;s=r&&r.map((s=>(s.children&&(s.children=s.children.map((s=>(s.user.entity_type=t.Oz.USER_ACCOUNT,s)))),s)))||[],a(s)}catch(e){a([])}try{const e=await T.current();p(e.map(n.IT)),N((0,n.WP)({id:P,username:$,email:U,fullName:f,imageSmallUrl:B,imageMediumUrl:G})),v.current[""]=[...s.map((s=>s.id)),...e.map(n.IT).map((s=>s.id)),P],y(!1)}catch(r){y(!1)}}),[P,$,U,f,B,G,w,C,T]);(0,r.useEffect)((()=>{L()}),[L]);const x=(0,r.useCallback)((s=>e.some((e=>e.id===s||e.children.some((e=>e.id===s||e.user.id===s))))),[e]),Z=(0,r.useMemo)((()=>({businessHierarchies:[...S.id&&!x(S.id)?[S]:[],...e,...b.filter((s=>!x(s.id)))],switchAccount:O,searchAccounts:g,loadingAccounts:_,fetchData:L})),[e,O,g,b,_,S,L,x]);return(0,I.jsx)(A,{value:Z,children:s})}},872993:(s,e,a)=>{a.d(e,{IT:()=>d,Vq:()=>c,WP:()=>_,Yu:()=>l,bG:()=>o,p:()=>u});var r=a(690108),t=a(337445),n=a(970588),i=a(785893);const c=s=>({id:s.id,entity_type:t.Oz.BUSINESS_ACCOUNT,user:{id:s.user.id,entity_type:t.Oz.USER_ACCOUNT,username:s.user.username,email:s.user.email,full_name:s.user.full_name,image_small_url:s.user.image_small_url,image_medium_url:s.user.image_medium_url}}),d=s=>({id:s.id,entity_type:t.Oz.BUSINESS_ACCOUNT,requires_mfa_for_roles:s.requires_mfa_for_roles,user:{id:s.user.id,entity_type:t.Oz.USER_ACCOUNT,username:s.user.username,email:s.user.email,full_name:s.user.full_name,image_small_url:s.user.image_small_url,image_medium_url:s.user.image_medium_url}}),_=s=>({id:s.id,entity_type:t.Oz.BUSINESS_ACCOUNT,user:{id:s.id,entity_type:t.Oz.USER_ACCOUNT,username:s.username,email:s.email,full_name:s.fullName,image_small_url:s.imageSmallUrl,image_medium_url:s.imageMediumUrl}}),u=async({hierarchyId:s})=>(await(0,n.Z)({url:`ads/v4/business_access/business_hierarchy/${s}/`})).resource_response,o=async({user_id:s,username:e})=>{if(!e&&!s)return null;const a=await r.Z.create("UserResource",{user_id:s,username:e}).callGet(),{resource_response:{data:t}}=a;return t},l=(0,i.jsx)("hr",{style:{borderTop:"1px solid #e9e9e9"}})},914062:(s,e,a)=>{a.d(e,{EF:()=>u,Hg:()=>p,Hl:()=>y,IR:()=>I,Je:()=>d,K3:()=>R,O1:()=>g,Q6:()=>l,QE:()=>r,V3:()=>b,Z4:()=>E,c7:()=>A,cU:()=>i,cg:()=>t,dZ:()=>n,gO:()=>S,j$:()=>N,j9:()=>C,pg:()=>P,pt:()=>D,qq:()=>O,sy:()=>_,tP:()=>h,uE:()=>m,vk:()=>v,we:()=>T,xX:()=>c,yR:()=>o});const r=3e3,t=300,n=500,i=1e4,c=250,d=50,_=50,u=20,o=20,l={DASHBOARD:"DASHBOARD",PEOPLE:"PEOPLE",PARTNERS:"PARTNERS",AD_ACCOUNTS:"AD_ACCOUNTS",AD_ACCOUNTS_PENDING_TAB:"AD_ACCOUNTS_PENDING_TAB",HISTORY:"HISTORY",PEOPLE_DETAIL:"PEOPLE_DETAIL",PARTNERS_DETAIL:"PARTNERS_DETAIL",SHARED_PARTNERS_DETAIL:"SHARED_PARTNERS_DETAIL",AD_ACCOUNTS_DETAIL:"AD_ACCOUNTS_DETAIL",PENDING_AD_ACCOUNTS_DETAIL:"PENDING_AD_ACCOUNTS_DETAIL",PEOPLE_INVITES:"PEOPLE_INVITES",PARTNERS_INVITES:"PARTNERS_INVITES",CHOOSER:"CHOOSER",PARTNERS_REQUEST_PAGE:"PARTNERS_REQUEST_PAGE",PARTNERS_INVITE_PAGE:"PARTNERS_INVITE_PAGE",PROFILES:"PROFILES",PROFILES_DETAIL:"PROFILES_DETAIL",PARTNERS_PENDING_TAB:"PARTNERS_PENDING_TAB",PEOPLE_PENDING_TAB:"PEOPLE_PENDING_TAB",USERS:"USERS",ACOUNTS:"ACCOUNTS",BUSINESS_SECURITY:"BUSINESS_SECURITY",SUPPORT_TOOL:"SUPPORT_TOOL",ASSETS:"ASSETS",ASSET_GROUPS:"ASSET_GROUPS",INVOICE_MANAGEMENT:"INVOICE_MANAGEMENT",BUSINESS_HIERARCHY:"BUSINESS_HIERARCHY",MANAGERS:"MANAGERS",AUDIENCES:"AUDIENCES",SHARED_TAGS:"SHARED_TAGS"},m={PARTNER:"PARTNER",PARTNER_ADMIN:"PARTNER_ADMIN"},E={ADVERTISER_OWNED_AD_ACCOUNT:"ADVERTISER_OWNED_AD_ACCOUNT",AGENCY_OWNED_AD_ACCOUNT:"AGENCY_OWNED_AD_ACCOUNT"},I={ASCENDING:"ASCENDING",DESCENDING:"DESCENDING"},A={AD_ACCOUNT:"AD_ACCOUNT",PERSON:"PERSON",PARTNER:"PARTNER"},y={PERSON:"PERSON",PARTNER:"PARTNER",PROFILE:"PROFILE"},S={ADMIN:"ADMIN",ANALYST:"ANALYST",FINANCE_MANAGER:"FINANCE_MANAGER",AUDIENCE_MANAGER:"AUDIENCE_MANAGER",CAMPAIGN_MANAGER:"CAMPAIGN_MANAGER",CATALOGS_MANAGER:"CATALOGS_MANAGER"},N=["ADMIN","ANALYST","FINANCE_MANAGER","AUDIENCE_MANAGER","CAMPAIGN_MANAGER","CATALOGS_MANAGER"],b={EMPLOYEE:"EMPLOYEE",BIZ_ADMIN:"BIZ_ADMIN",OWNER:"OWNER"},p=["PROFILE_PUBLISHER"],h={AD_ACCOUNT:0,PROFILE:2,ASSET_GROUP:3},T={id:"0",is_pin_support_user:!0,biz_roles:[b.BIZ_ADMIN],business_roles:[b.BIZ_ADMIN],user:{username:"psupport",full_name:"Pinterest support",image_small_url:"https://i.pinimg.com/60x60_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg",image_medium_url:"https://i.pinimg.com/150x150_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg"}},D={ACTIVE:0,PENDING:1},R={ACTIVE:"active",PENDING:"pending"},C="filter_type",v={page:1,totalCount:0,limit:10,sortDirection:"ASCENDING",sortBy:void 0,searchBy:void 0,searchTerm:""},O={WARNING:"WARNING"},g={BUSINESS_INVITE_INVALID:2932,BUSINESS_ACCESS_PERSONAL_ACCOUNT:2936,INVALID_USERNAME:90,ACCESS_DENIED:280,BUSINESS_RELATIONSHIP_ALREADY_EXISTS:2751,BUSINESS_RELATIONSHIP_COUNT_EXCEEDED:2769,BUSINESS_NUMBER_MEMBERS_IN_POLICY_EXCEEDS:2938,INVALID_ODO_REQUEST:2755,BUSINESS_INVITE_STACKED_ERROR:2773,ACL_POLICY_NOT_FOUND:1110,BUSINESS_INVITE_NOT_EXIST:2770},P={ALL_TAGS:"ALL",OWNED:"OWNED",SHARED:"SHARED"}},651009:(s,e,a)=>{a.d(e,{Z:()=>n});const r="/business/business-access/",t="/business/business-hierarchy/",n=(s,e,a,n)=>{switch(s){case"DASHBOARD":return`${n?t:r}${String(null!=n?n:e)}/dashboard/`;case"PEOPLE":return`${r}${String(e)}/employees/`;case"PARTNERS":return`${r}${String(e)}/partners/`;case"AD_ACCOUNTS":return`${r}${String(e)}/ad-accounts/`;case"HISTORY":return`${r}${String(e)}/history/`;case"PEOPLE_DETAIL":return`${r}${String(e)}/employees/${String(a)}/details/`;case"PARTNERS_DETAIL":return`${r}${String(e)}/partners/${String(a)}/details/`;case"SHARED_PARTNERS_DETAIL":return`${r}${String(e)}/shared/${String(a)}/details/`;case"AD_ACCOUNTS_DETAIL":return`${r}${String(e)}/ad-accounts/${String(a)}/details/`;case"PENDING_AD_ACCOUNTS_DETAIL":return`${r}${String(e)}/ad-accounts/pending/${String(a)}/details/`;case"PEOPLE_INVITES":return`${r}${String(e)}/employees/invites/`;case"PEOPLE_PENDING_TAB":return`${r}${String(e)}/employees/pending/`;case"PARTNERS_PENDING_TAB":return`${r}${String(e)}/partners/pending/`;case"AD_ACCOUNTS_PENDING_TAB":return`${r}${String(e)}/ad-accounts/pending`;case"PARTNERS_INVITE_PAGE":return`${r}${String(e)}/partners/invites/`;case"PARTNERS_REQUEST_PAGE":return`${r}${String(e)}/partners/requests/`;case"PROFILES":return`${r}${String(e)}/profiles/`;case"PROFILES_DETAIL":return`${r}${String(e)}/profiles/${String(a)}/details/`;case"BUSINESS_SECURITY":return`${r}${String(e)}/security/`;case"SUPPORT_TOOL":return`${r}${String(e)}/support/`;case"ASSET_GROUPS":return a?`${r}${String(e)}/asset-groups/?asset_group_id=${String(a)}`:`${r}${String(e)}/asset-groups/`;case"INVOICE_MANAGEMENT":return`${r}${String(e)}/invoice-management/`;case"BUSINESS_HIERARCHY":return`${t}${String(n)}/hierarchy/`;case"MANAGERS":return`${t}${String(n)}/managers/`;case"AUDIENCES":return`${r}${String(e)}/audiences/`;case"SHARED_TAGS":return`${r}${String(e)}/shared-tags/`;default:return r}}},173969:(s,e,a)=>{a.d(e,{Z:()=>n});var r=a(970588),t=a(282802);function n(){const{experimentsClient:s}=(0,t.B)();return async()=>{var e;const{anyEnabled:a}=null!==(e=s.checkExperiment("business_access_employees_api_v4_migration"))&&void 0!==e?e:{},t=a?"/ads/v4/business_access/businesses/me/employers/":"ads/internal/business_access/users/me/employers/",n=await(0,r.Z)({url:t}),i=n.resource_response?n.resource_response.data:{data:[]};return await Promise.all(i&&i.data||[])}}},208576:(s,e,a)=>{a.d(e,{$2:()=>c,Ah:()=>_,IW:()=>i,Vs:()=>u,dF:()=>o,sl:()=>d});var r=a(914062),t=a(649655),n=a(664810);const i=(s={},e={})=>{if(s.limit||s.sortBy||s.sortDirection||s.searchTerm)return 0;if(s.page){const a=s.limit||e.limit;return((s.page||e.page)-1)*a}return e.startIndex||0},c=(s={},e)=>{if(s.limit||s.sortBy||s.sortDirection||s.searchTerm)return 0;if(s.page){const a=s.limit||e.limit;return((s.page||e.page)-1)*a}return e.startIndex},d=(s,e,a,r)=>{const{businessId:t,...n}=a,{...i}=r;return{id:s,...i,...n,searchBy:n.searchBy,searchTerm:n.searchTerm||i.searchTerm,limit:n.limit||i.limit,page:n.page||i.page,sortBy:n.sortBy||i.sortBy,sortDirection:n.sortDirection||i.sortDirection,startIndex:e,...0===e&&{page:1}}},_=(s,e)=>e.reduce(((e,a)=>({ids:e.ids.concat(s(a)),data:{...e.data,[s(a)]:a}})),{ids:[],data:{}}),u=(s,e)=>{var a,r,t,n,c;const d={page:null!==(a=s.page)&&void 0!==a?a:e.page,limit:null!==(r=s.limit)&&void 0!==r?r:e.limit,sortBy:null!==(t=s.sortBy)&&void 0!==t?t:e.sortBy,searchBy:s.searchBy,searchTerm:null!==(n=s.searchTerm)&&void 0!==n?n:e.searchTerm,sortDirection:null!==(c=s.sortDirection)&&void 0!==c?c:e.sortDirection},_=i(s,e);return{...d,startIndex:_,...0===_&&{page:1}}},o=async(s,e,a)=>{const i="PEOPLE"===a?n.JC:t.Eg,{data:{data:c=[],total_data_count:d}={}}=await i({...s,limit:r.xX,startIndex:0,id:s.id||""}),_=Math.ceil(d/r.xX);if(_<=1)return{data:{data:c,total_data_count:d}};const u=[...Array(_).keys()].slice(1);return{data:{data:(await Promise.allSettled(u.map((e=>i({...s,limit:r.xX,startIndex:e*r.xX}))))).reduce(((s,e)=>{var a,r;return null!==(a=e.value)&&void 0!==a&&null!==(r=a.data)&&void 0!==r&&r.data&&(s=s.concat(e.value.data.data)),s}),c),total_data_count:d}}}},897215:(s,e,a)=>{a.d(e,{ib:()=>E,vf:()=>A,XV:()=>y,jC:()=>I,oC:()=>m,W3:()=>N,fc:()=>g,cE:()=>T,xZ:()=>S,lo:()=>P,N1:()=>v,BG:()=>O,eo:()=>R,pI:()=>h,cp:()=>D,G2:()=>C,cR:()=>b,EB:()=>l});var r=a(758579),t=a(333872),n=a(914062),i=a(970588),c=a(649655),d=a(664810);const _=async(s,e,a,r=[])=>{const t={bookmark:void 0,data:{business_id:"",data:[]},...(await(0,i.Z)({url:s,method:"GET",data:e})).resource_response};if(!t.bookmark){return a(t.data).push(...r),t.data}return await _(s,{...e,bookmark:t.bookmark},a,r.concat(...a(t.data)))},u={get:(s,e={})=>_(s,e,(s=>s.data),[])};var o=a(404403);const l=async(s,e,a,r,t,n,i)=>"PARTNER"===t?await(0,c.SZ)({businessId:r,partnerId:s,assetId:a,roles:e,clientBusinessId:n,businessHierarchyNodeId:i}):await(0,d.Jg)({businessId:r,memberId:s,assetId:a,roles:e,businessHierarchyNodeId:i}),m=async(s,e,a,r)=>{if(0===e.length)return;const t=[];e.forEach((({assigneeIds:e,adAccountIds:n,roles:i})=>{0!==i.length&&e.forEach((e=>{n.forEach((n=>{t.push(l(e,i,n,s,a,void 0,r))}))}))})),await Promise.all(t)},E=async(s,e,a,r,t)=>{const n="PEOPLE"===r?"MEMBER_INVITE":"PARTNER_INVITE",c=e.reduce(((s,e)=>{const a=Object.keys(e)[0];return{...s,...Object.values(e)[0].includes("ADMIN")?{[a]:["ADMIN"]}:e}}),{}),d=a.map((e=>(0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(c),invite_type:n,business_hierarchy_node_id:t}})));await Promise.all(d)},I=async(s,e,a,r)=>{const t=(s=>s.reduce(((s,e)=>{const a=Object.keys(e)[0];return{...s,...Object.values(e)[0].includes("ADMIN")?{[a]:["ADMIN"]}:e}}),{}))(a);return(await(0,i.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(t),business_hierarchy_node_id:r}})).resource_response.data},A=async(s,e,a,r,t)=>{const n=e.reduce(((s,e)=>{const a=Object.keys(e)[0];return{...s,...Object.values(e)[0].includes("ADMIN")?{[a]:["ADMIN"]}:e}}),{}),c=a.map((e=>(0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(n),invite_type:r,business_hierarchy_node_id:t}})));await Promise.all(c)},y=async(s,e,a,r)=>{const t=e.reduce(((s,e)=>{const a=Object.keys(e)[0];return{...s,...Object.values(e)[0].includes("ADMIN")?{[a]:["ADMIN"]}:e}}),{});return(await(0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${a}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(t),invite_type:"PARTNER_REQUEST",business_hierarchy_node_id:r}})).resource_response},S=async()=>(await(0,i.Z)({url:"ads/v4/advertisers/countries/",method:"GET"})).resource_response.data,N=async(s,e,a,r,n,c)=>(await(0,i.Z)({url:"/ads/v4/advertisers/",method:"POST",data:{owner_user_id:s,name:r,country:n,business_hierarchy_node_id:a,tos_id:c||(0,o.Fc)(t.tN[n]),...e&&{agency_user_id:e}}})).resource_response.data,b=async()=>{var s,e;const{anyEnabled:a}=null!==(s=null===(e=(0,r.Z)())||void 0===e?void 0:e.experimentsClient.checkExperiment("business_access_employees_api_v4_migration"))&&void 0!==s?s:{};if(a){var t;const s=null===(t=(await(0,i.Z)({url:"/ads/v4/business_access/businesses/me/employers/"})).resource_response.data)||void 0===t?void 0:t.data;return await Promise.all(s||[])}const n=(await u.get("ads/internal/business_access/users/me/employers/")).data;return await Promise.all(n||[])},p=async({businessId:s,assetId:e,limit:a,sortBy:r="name",searchBy:t="name",searchTerm:n,startIndex:c,sortDirection:d,resourceType:_})=>{const u=e?JSON.stringify({child_asset_id:e}):void 0;return(await(0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/assets/`,data:{page_size:a,sort_by:r,search_by:t,start_index:c,search_value:n,sort_ascending:"ASCENDING"===d,resource_type:_,filters:u}})).resource_response},h=async({businessId:s,assetIds:e,resourceType:a,limit:r,sortBy:t,sortDirection:n="ASCENDING",searchBy:c,searchTerm:d="",startIndex:_=0,filtersPayload:u})=>{const o=u&&Object.keys(u).length>0?{filters:JSON.stringify(u)}:{};return(await(0,i.Z)({url:`ads/v4/business_access/businesses/${s}/assets_by_ids`,data:{business_id:s,asset_ids:e,resource_type:a,page_size:r,sort_by:t,sort_direction:n,search_by:c,search_value:d,start_index:_,...o}})).resource_response},T=async({id:s,limit:e,sortBy:a="name",searchBy:t="name",searchTerm:n="",startIndex:c=0,sortDirection:d="ASCENDING",forPartner:_=!1,includeAssetSummary:u=!1})=>{var o,l;const{anyEnabled:m}=null!==(o=null===(l=(0,r.Z)())||void 0===l?void 0:l.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==o?o:{};if(m){const r=await p({id:s,businessId:s,limit:e,sortBy:a,searchBy:t,searchTerm:n,startIndex:c,sortDirection:d,resourceType:"AD_ACCOUNT"});if(u){const a=await h({businessId:s,assetIds:(null==r?void 0:r.data.data.map((s=>s.asset_id)))||[],limit:e,resourceType:"AD_ACCOUNT"}),t=null==r?void 0:r.data.data.map((s=>({...s,...null==a?void 0:a.data.data[s.asset_id]})));return{...r,data:{...null==r?void 0:r.data,data:t}}}return r}return(await(0,i.Z)({url:`/ads/internal/business_access/businesses/${String(s)}/all_assets/`,data:{limit:e,sort_by:a,sort_ascending:"ASCENDING"===d,search_by:t,search_value:n,start_index:c,for_partner:_}})).resource_response},D=async({id:s,limit:e,sortBy:a="name",sortDirection:t="ASCENDING",searchBy:c="name",searchTerm:d="",startIndex:_=0,forPartner:u})=>{var o,l;const{anyEnabled:m}=null!==(o=null===(l=(0,r.Z)())||void 0===l?void 0:l.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==o?o:{};if(m)return p({id:s,businessId:s,limit:e,sortBy:a,searchBy:c,searchTerm:d,startIndex:_,sortDirection:t,resourceType:"PROFILE"});return(await(0,i.Z)({url:`ads/internal/business_access/businesses/${s}/all_assets/`,data:{limit:e,sort_by:a,sort_ascending:"ASCENDING"===t,search_by:c,search_value:d,start_index:_,for_partner:u,type:n.tP.PROFILE}})).resource_response},R=async({id:s,assetIds:e,limit:a,type:r})=>(await(0,i.Z)({url:`ads/internal/business_access/businesses/${s}/batch_assets/`,method:"GET",data:{limit:a,type:r,assets_ids:e.join(",")}})).resource_response,C=async({businessId:s,assetId:e})=>(await(0,i.Z)({url:`ads/internal/business_access/businesses/${s}/assets/${e}/`,method:"GET"})).resource_response,v=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:t="full_name",searchTerm:n,startIndex:c,sortDirection:d})=>(await(0,i.Z)({url:`ads/internal/business_access/businesses/${s}/assets/${e}/partners/`,data:{limit:a,sort_by:r,search_by:t,start_index:c,search_value:n,sort_ascending:"ASCENDING"===d}})).resource_response,O=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:t="full_name",searchTerm:n,startIndex:c,sortDirection:d})=>(await(0,i.Z)({url:`ads/internal/business_access/businesses/${s}/assets/${e}/members/`,data:{page_size:a,sort_by:r,search_by:t,start_index:c,search_value:n,sort_ascending:"ASCENDING"===d}})).resource_response,g=async({id:s,businessId:e,assetId:a,limit:r,sortBy:t="name",searchBy:n="name",searchTerm:i,startIndex:c,sortDirection:d,resourceType:_="ASSET_GROUP"})=>p({id:s,businessId:e,assetId:a,limit:r,sortBy:t,searchBy:n,searchTerm:i,startIndex:c,sortDirection:d,resourceType:_}),P=async({id:s,businessId:e,limit:a,sortBy:r="name",searchBy:t="name",searchTerm:n,startIndex:i,sortDirection:c,resourceType:d="ASSET_GROUP"})=>p({id:s,businessId:e,limit:a,sortBy:r,searchBy:t,searchTerm:n,startIndex:i,sortDirection:c,resourceType:d})},649655:(s,e,a)=>{a.d(e,{Bq:()=>b,Cj:()=>m,Eg:()=>A,F0:()=>I,FA:()=>c,Jq:()=>l,K7:()=>E,M9:()=>p,OA:()=>D,Of:()=>N,SB:()=>S,SZ:()=>T,Zk:()=>o,c4:()=>y,ek:()=>_,h9:()=>h,qC:()=>d,w8:()=>u,wi:()=>R});var r=a(758579),t=a(914062),n=a(970588),i=a(208576);const c=async({businessId:s,requestIds:e,includeAssetSummary:a})=>{const r=await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/batch_partners/`,method:"GET",data:{partners:e,assets_summary:a}}),{data:{data:t}}={data:{},...r.resource_response};return t},d=async({businessId:s,requestIds:e,includeAssetSummary:a})=>{const r=await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/shared/batch_partners/`,method:"GET",data:{partners:e,assets_summary:a}}),{data:{data:t}}={data:{},...r.resource_response};return t},_=async(s,e)=>({data:[],business_id:"",partner_id:"",...(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:t.cU}})).resource_response.data}),u=async(s,e)=>(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/asset_counts/`,method:"GET"})).resource_response.data,o=async({partnerId:s,role:e,businessId:a,businessHierarchyNodeId:r})=>(await(0,n.Z)({url:`ads/internal/business_access/businesses/${a}/partners/${s}/invite/`,method:"POST",data:{role_name:e,business_hierarchy_node_id:r}})).resource_response,l=async({partnerId:s,role:e,businessId:a})=>(await(0,n.Z)({url:`ads/internal/business_access/businesses/${a}/partners/${s}/invite/`,method:"POST",data:{role_name:e,type:"PARTNER_REQUEST"}})).resource_response,m=async({businessId:s,partnerId:e,businessHierarchyNodeId:a,role:r})=>(await(0,n.Z)({url:`/ads/internal/business_access/businesses/${s}/partners/${e}/`,method:"DELETE",data:{role_name:r,business_hierarchy_node_id:a}})).resource_response,E=async({businessId:s,partnerId:e,businessHierarchyNodeId:a,role:r,partner_type:t})=>(await(0,n.Z)({url:`/ads/v4/business_access/businesses/${s}/partners/${e}/`,method:"DELETE",data:{role_name:r,partner_type:t,business_hierarchy_node_id:a}})).resource_response,I=async({id:s,limit:e,sortBy:a="full_name",searchBy:r="full_name",searchTerm:t="",startIndex:i=0,sortDirection:c="ASCENDING",includeAssetSummary:d=!0})=>{const _={data:{data:[]},...(await(0,n.Z)({url:`/ads/internal/business_access/businesses/${s}/all_partners/`,method:"GET",data:{limit:e,sort_by:a,search_by:r,start_index:i,search_value:t,assets_summary:d?"true":"false",sort_ascending:"ASCENDING"===c}})).resource_response};return _.data.data=_.data.data.map((e=>{var a;return(null==e||null===(a=e.created_by_biz)||void 0===a?void 0:a.id)===s&&(e.isAgencyPartner=!0),e})),_},A=async({id:s,limit:e,sortBy:a="full_name",searchBy:r=["FULL_NAME","BUSINESS_ID","USERNAME"],searchTerm:t="",startIndex:i=0,sortDirection:c="ASCENDING",includeAssetSummary:d,partnerType:_,partners:u=[]})=>(await(0,n.Z)({url:`ads/v4/business_access/businesses/${s}/partners/`,data:{page_size:e,sort_by:a,search_by:r,start_index:i,search_value:t,assets_summary:d?"true":"false",sort_ascending:"ASCENDING"===c,partner_type:_,partners:u}})).resource_response,y=async({businessId:s,partnerId:e,includeAssetSummary:a=!0})=>{var r,t;const i=await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/`,method:"GET",data:{assets_summary:a?"true":"false "}});if((null===(r=i.resource_response.data)||void 0===r||null===(t=r.created_by_biz)||void 0===t?void 0:t.id)===s){const s={data:{isAgencyPartner:void 0},...i.resource_response};return s.data.isAgencyPartner=!0,s}return i.resource_response},S=async({businessId:s,partnerId:e,limit:a,sortBy:r,searchBy:t="name",searchTerm:i,startIndex:c,sortDirection:d})=>(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:a,sort_by:r,...i&&{search_by:t},start_index:c,search_value:i,sort_ascending:"ASCENDING"===d}})).resource_response,N=async({businessId:s,partnerId:e,limit:a,sortBy:r,searchBy:t="name",searchTerm:i,startIndex:c,sortDirection:d})=>(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/shared/${e}/assets/`,method:"GET",data:{limit:a,sort_by:r,...i&&{search_by:t},start_index:c,search_value:i,sort_ascending:"ASCENDING"===d}})).resource_response,b=async({businessId:s,partnerId:e,limit:a,sortBy:r,searchBy:t="name",searchTerm:i,startIndex:c,sortDirection:d})=>(await(0,n.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:a,sort_by:r,...i?{search_by:t}:{},start_index:c,search_value:i,sort_ascending:"ASCENDING"===d,resource_type:"ASSET_GROUP",partner_type:"INTERNAL"}})).resource_response,p=async(s,e,a=!1)=>{const r=(await(0,i.dF)({id:s,partnerType:"INTERNAL"},e,"PARTNER")).data.data,c=await Promise.all(r.map((async({id:e})=>(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:t.cU,type:a?t.tP.PROFILE:t.tP.AD_ACCOUNT}})).resource_response.data)));return r.map(((s,e)=>({...s,assets:c[e].data})))},h=async({businessId:s,partnerId:e,assetId:a})=>(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/${a}/`,method:"GET"})).resource_response,T=async({businessId:s,partnerId:e,assetId:a,roles:t,clientBusinessId:i,businessHierarchyNodeId:c})=>{var d,_;const{anyEnabled:u}=null!==(d=null===(_=(0,r.Z)())||void 0===_?void 0:_.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==d?d:{};if(u){return(await(0,n.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"PUT",data:{permissions:t.includes("ADMIN")?["ADMIN"]:t,business_hierarchy_node_id:c,...i?{client_business_id:i}:{}}})).resource_response.data}return(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"PUT",data:{finalRoles:t.includes("ADMIN")?["ADMIN"]:t,business_hierarchy_node_id:c,...i?{client_business_id:i}:{}}})).resource_response.data},D=async({businessId:s,partnerId:e,assetId:a,businessHierarchyNodeId:t,partner_type:i="INTERNAL"})=>{var c,d;const{anyEnabled:_}=null!==(c=null===(d=(0,r.Z)())||void 0===d?void 0:d.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==c?c:{};if(_){return(await(0,n.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"DELETE",data:{partner_type:i,business_hierarchy_node_id:t}})).resource_response.data}return(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"DELETE",data:{partner_type:i,business_hierarchy_node_id:t}})).resource_response.data},R=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:t="FULL_NAME",searchTerm:i,startIndex:c,sortDirection:d})=>(await(0,n.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/partners/`,data:{page_size:a,sort_by:r,search_by:t,search_value:i,start_index:c,sort_ascending:"ASCENDING"===d}})).resource_response},664810:(s,e,a)=>{a.d(e,{GL:()=>S,JC:()=>m,Jg:()=>N,QC:()=>I,UQ:()=>_,bP:()=>b,dx:()=>u,kF:()=>p,kH:()=>l,kJ:()=>c,kY:()=>E,mZ:()=>A,n5:()=>y,p6:()=>o,p_:()=>d});var r=a(758579),t=a(914062),n=a(970588),i=a(678108);const c=async({businessId:s,requestIds:e,includeAssetSummary:a})=>{const r=await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/batch_members/`,method:"GET",data:{members:e,assets_summary:a,extend_info_from_user_api:!0}}),{data:{data:t}}={data:{data:{}},...r.resource_response};return t},d=async(s,e,a,r)=>({data:[],...(await(0,n.Z)({url:`ads/internal/business_access/businesses/${a}/members/batch_invite/`,method:"POST",data:{role_name:e,members:s,business_hierarchy_node_id:r}})).resource_response.data}),_=async(s,e,a)=>{var c,d;const{anyEnabled:_}=null!==(c=null===(d=(0,r.Z)())||void 0===d?void 0:d.experimentsClient.checkExperiment("web_m10n_business_manager_api_loops_removal"))&&void 0!==c?c:{},u={data:[],...(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/`,method:"GET",data:{limit:t.cU,...Number.isInteger(a)&&{asset_permission_type:a}}})).resource_response.data};if(_)return u.data;{const s=u.data.map(i.P);return await Promise.all(s)}},u=async(s,e,a,t)=>{var i,c;const{anyEnabled:d}=null!==(i=null===(c=(0,r.Z)())||void 0===c?void 0:c.experimentsClient.checkExperiment("business_access_employees_api_v4_migration"))&&void 0!==i?i:{},_=d?"v4":"internal";return{data:void 0,auxData:void 0,...(await(0,n.Z)({url:`ads/${_}/business_access/businesses/${s}/members/${e}/`,method:"DELETE",data:{...d?{business_role:a}:{role_name:[a]},business_hierarchy_node_id:t}})).resource_response.data}},o=async(s,e,a,t)=>{var i,c;const d=null!==(i=null===(c=(0,r.Z)())||void 0===c?void 0:c.experimentsClient.checkExperiment("business_access_employees_api_v4_migration").anyEnabled)&&void 0!==i&&i,_=d?{business_role:s}:{role_name:s};return(await(0,n.Z)({url:d?`ads/v4/business_access/businesses/${a}/members/${e}/`:`ads/internal/business_access/businesses/${a}/members/${e}/`,method:"PUT",data:{..._,...t?{business_hierarchy_node_id:t}:{}}})).resource_response.data},l=async({id:s,limit:e,filters:a,sortBy:r="full_name",searchBy:t="full_name",searchTerm:i="",startIndex:c=0,sortDirection:d="ASCENDING",includeAssetSummary:_})=>(await(0,n.Z)({url:`/ads/internal/business_access/businesses/${s}/members/`,method:"GET",data:{limit:e,filters:a?JSON.stringify(a):void 0,sort_by:r,search_by:t,start_index:c,search_value:i,assets_summary:_?"true":"false",sort_ascending:"ASCENDING"===d,extend_info_from_user_api:!0}})).resource_response,m=async({id:s,limit:e,filters:a,memberIds:r=[],sortBy:t="full_name",searchBy:i=["FULL_NAME","EMAIL","USERNAME"]||0,searchTerm:c="",startIndex:d=0,sortDirection:_="ASCENDING",includeAssetSummary:u})=>(await(0,n.Z)({url:`ads/v4/business_access/businesses/${s}/members/`,data:{page_size:e,member_ids:r.length?r.join(","):void 0,filters:a?JSON.stringify(a):void 0,sort_by:t,search_by:i,start_index:d,search_value:c,assets_summary:u?"true":"false",sort_ascending:"ASCENDING"===_,extend_info_from_user_api:!0}})).resource_response,E=async({id:s})=>{var e,a;const t=null!==(e=null===(a=(0,r.Z)())||void 0===a?void 0:a.experimentsClient.checkExperiment("business_access_employees_api_v4_migration").anyEnabled)&&void 0!==e&&e;return(await(0,n.Z)({url:t?`/ads/v4/business_access/businesses/${s}/owner/`:`/ads/internal/business_access/businesses/${s}/owner/`})).resource_response.data},I=async({businessId:s,personId:e,limit:a,sortBy:r,searchBy:t="name",searchTerm:i,startIndex:c,sortDirection:d,assetPermissionType:_})=>{const u={limit:a,sort_by:r,search_by:t,start_index:c,search_value:i,sort_ascending:"ASCENDING"===d,...Number.isInteger(_)?{asset_permission_type:_}:{}};return(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/`,data:u})).resource_response},A=async({businessId:s,personId:e,limit:a,sortBy:r,searchBy:i="name",searchTerm:c,startIndex:d,sortDirection:_,assetPermissionType:u})=>{const o={limit:a,sort_by:r,search_by:i,start_index:d,search_value:c,sort_ascending:"ASCENDING"===_,type:t.tP.PROFILE,...Number.isInteger(u)?{asset_permission_type:u}:{}};return(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/`,data:o})).resource_response},y=async({businessId:s,personId:e,limit:a,sortBy:r,searchBy:t="name",searchTerm:i,startIndex:c,sortDirection:d,assetPermissionType:_})=>{const u={page_size:a,sort_by:r,search_by:t,start_index:c,search_value:i,sort_ascending:"ASCENDING"===d,resource_type:"ASSET_GROUP",asset_permission_type:_};return(await(0,n.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:u})).resource_response},S=async({businessId:s,personId:e,assetId:a})=>(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/${a}/`})).resource_response,N=async({businessId:s,memberId:e,assetId:a,businessHierarchyNodeId:t,roles:i})=>{var c,d;const{anyEnabled:_}=null!==(c=null===(d=(0,r.Z)())||void 0===d?void 0:d.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==c?c:{};if(_){return(await(0,n.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"PUT",data:{permissions:i.includes("ADMIN")?["ADMIN"]:i,business_hierarchy_node_id:t}})).resource_response.data}return(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"PUT",data:{finalRoles:i.includes("ADMIN")?["ADMIN"]:i,business_hierarchy_node_id:t}})).resource_response.data},b=async({businessId:s,memberId:e,assetId:a,businessHierarchyNodeId:t})=>{var i,c;const{anyEnabled:d}=null!==(i=null===(c=(0,r.Z)())||void 0===c?void 0:c.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==i?i:{};if(d){return(await(0,n.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"DELETE",data:{business_hierarchy_node_id:t}})).resource_response.data}return(await(0,n.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"DELETE",data:{business_hierarchy_node_id:t}})).resource_response.data},p=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:t="FULL_NAME",searchTerm:i,startIndex:c,sortDirection:d})=>{const _=await(0,n.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/members/`,method:"GET",data:{page_size:a,sort_by:r,search_by:t,search_value:i,start_index:c,sort_ascending:"ASCENDING"===d}}),{data:u}={data:void 0,..._.resource_response};return u}},678108:(s,e,a)=>{a.d(e,{P:()=>n,b:()=>t});var r=a(690108);const t=async s=>{const e=await r.Z.create("UserResource",{user_id:s}).callGet(),{resource_response:{data:a}}=e;return a},n=async s=>{const{asset:e}=s,a=e.agency_user_id||e.owner_user_id,r=await t(a);return{...s,asset:{...e,creator:r.full_name}}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/66218-f712dcfea59de45d.mjs.map