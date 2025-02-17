"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6928],{50526:(e,t,n)=>{n.d(t,{Z:()=>M});var o=n(67294),i=n(480),s=n(86628),r=n(98519),a=n(19889),u=n(97880),d=n(7928),l=n(70782),p=n(33929),c=n(87279),g=n(80444),m=n(64921),f=n(52275),h=n(78140),x=n(32163),y=n(53437),w=n(72495),j=n(64369),b=n(45653),v=n(85893);function M(e){let{onChange:t}=e;window.__c={n:"DeveloperIntegrationsAccountSwitcher"};const n=(0,i.O7)(),[r,d]=(0,o.useState)(!1),l=()=>d(!1),p=(0,s.VK)((()=>g.default.state.currentUserStore),[]),c=(0,s.VK)((()=>p?n.currentUser.loggedInUserIds.map((e=>p.getRecordModel({table:a.KJ,id:e}))).filter(u.$K):[]),[p,n]),m=(0,s.VK)((()=>null==p?void 0:p.getValue()),[p]);return m?(0,v.jsx)(y.ZP,{popupType:y.kQ.Popup,origin:(0,v.jsx)(S,{onClick:()=>d(!0),currentUserValue:m}),render:()=>(0,v.jsx)(C,{users:c,currentUserId:m.id,onChange:t,onClose:l}),placementToOrigin:y.ZP.Placement.Bottom,alignmentToOrigin:y.ZP.Alignment.End,onDismiss:l,open:r}):null}function S(e){const{onClick:t,currentUserValue:n}=e;return(0,v.jsx)("div",{style:{marginLeft:18},children:(0,v.jsx)(m.Z,{onClick:t,style:{borderRadius:"100%"},children:(0,v.jsx)(b.Z,{userValue:n,size:32})})})}function C(e){window.__c={n:"OpenedSwitcherMenu"};const t=(0,i.O7)(),{users:n,currentUserId:o,onClose:s,onChange:r}=e;return(0,v.jsx)(h.Z,{menuType:c.og.Popup,children:(0,v.jsx)(x.Z,{type:x.i.Vertical,initialFocus:void 0,sections:[{key:"developer-integration-accounts",items:n.map((e=>({key:e.id,action:async()=>{const n=await l.x({environment:t,newCurrentUserId:e.id});null==r||r(n),s()},render:t=>(0,v.jsx)(F,{...t,user:e,isLoggedIn:e.id===o})}))),render:e=>(0,v.jsx)(w.Z,{...e})}]})})}const F=o.forwardRef(((e,t)=>{window.__c={n:"AccountMenuItem"};const{user:n,isLoggedIn:o,...i}=e,a=p.default.getIntl(),u=(0,s.VK)((()=>(0,d.Nz)(a,n)),[a,n]),l=(0,s.VK)((()=>n.email),[n]);return(0,v.jsx)(f.Z,{...i,ref:t,title:(0,v.jsx)(j.Z,{className:"notranslate",children:u}),icon:(0,v.jsx)(b.Z,{userValue:n,size:28}),caption:(0,v.jsx)(j.Z,{isSmall:!0,children:l}),right:o&&(0,r.k)({width:12,height:12})})}))},36360:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(83355);class i extends o.Z{willMount(e){document.title=e.title}willUpdate(e){document.title=e.title}renderComponent(){return this.props.children}}i.displayName="DocumentTitle";const s=i},96:(e,t,n)=>{n.d(t,{Z:()=>r});n(67294);var o=n(24405),i=n(64369),s=n(85893);const r=function(e){window.__c={n:"LabeledFormInput"};const{name:t,style:n,children:r,errorMessage:a,isMultiline:u}=e,d=(0,o.yK)((e=>({formInputContainer:{display:"flex",flexDirection:"column",gap:6,width:"100%"},formLabel:{},errorMessage:{fontSize:12,color:e.errorText}})),[]);return(0,s.jsxs)("div",{style:{...d.formInputContainer,...n},children:[(0,s.jsx)(i.Z,{isMultiline:u,style:d.formLabel,children:t}),r,a&&(0,s.jsx)("div",{style:d.errorMessage,children:a})]})}},13745:(e,t,n)=>{n.r(t),n.d(t,{default:()=>xe});var o=n(67294),i=n(86628),s=n(24405),r=n(82990),a=n(5366),u=n(68785),d=n(32662),l=n(77907),p=n(77080),c=n(13991),g=n(41892),m=n(8848),f=n(60651),h=n(89101),x=n(16354),y=n(53336),w=n(50526),j=n(36360),b=n(42402),v=n(17311),M=n(34859),S=n(85893);const C=function(e){window.__c={n:"StudentGroupSignupContainer"};const{children:t}=e,n=(0,a.useIntl)(),o=(0,s.yK)((e=>({footerLink:{color:m.ZP.frontTextMedium,cursor:"pointer",textDecoration:"none",display:"block",marginBottom:4},footerColophon:{gridColumn:"auto/span 8"},footerNav:{gridColumn:"auto/span 2",marginBottom:16},footerLogo:{margin:"0 auto 20px",fontSize:0,display:"block"},footerSectionHeader:{fontFamily:r.Z.getCompositeFontFamily(c.SP).mono,fontWeight:r.Z.fontWeight.medium,margin:"0 auto 8px",marginBottom:"1.1em",fontSize:15},footerCopy:{fontSize:15,fontWeight:r.Z.fontWeight.regular,lineHeight:"1.5em",color:m.ZP.frontTextMedium,margin:"0 auto 8px",marginBottom:"1.1em"},footerContainer:{marginTop:60,padding:"70px 30px",alignItems:"flex-start",justifyItems:"flex-start",flex:"1 0 auto",zIndex:999,width:"100%",maxWidth:1160,boxSizing:"border-box",margin:"0 auto",borderTop:`1px solid ${m.ZP.dividerColor}`,display:"grid",gridTemplateColumns:"repeat(12,1fr)",columnGap:16,gap:16},scroller:{height:"100vh",padding:"0px 10px"},innerContainer:{margin:"auto",width:700},topBar:{maxWidth:1100,height:60,margin:"0 auto",display:"flex",alignItems:"center",marginTop:13,marginBottom:10,justifyContent:"space-between"},headerSection:{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",marginTop:20,alignItems:"center"},header:{fontWeight:r.Z.fontWeight.bold,fontFamily:r.Z.getCompositeFontFamily(c.SP).sans,fontSize:40,color:m.ZP.frontText,overflow:"hidden",lineHeight:"1.2em",textAlign:"center",marginTop:30,marginBottom:40},subtitle:{fontWeight:r.Z.fontWeight.regular,fontSize:16,letterSpacing:"0.0005em",lineHeight:"1.5em"},button:{display:"inline-flex",color:m.ZP.frontTextMedium,borderRadius:4,padding:6,fontSize:15,width:"fit-content"},buttonContent:{display:"flex",alignItems:"center"},arrowIcon:{width:20,height:20},gridContainer:{display:"grid",gridTemplateColumns:"180px auto",paddingBottom:120,gap:60},leftColumn:{gridColumnStart:1,gridColumnEnd:2},rightColumn:{gridColumnStart:2,gridColumnEnd:3},icon:{fill:e.regularTextColor,height:36,width:36},brandLink:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:12,fontSize:24,fontWeight:r.Z.fontWeight.semibold},textInput:{fontSize:14,borderRadius:v.Z.borderRadius,padding:"8px 14px"},textInputDisabled:{fontSize:14,borderRadius:v.Z.borderRadius,padding:"8px 14px"},checkboxContainer:{display:"flex",alignItems:"center",gap:6},formBody:{display:"flex",flexDirection:"column",gap:24,marginTop:24},criteriaList:{marginBottom:10}})),[]);return(0,S.jsx)(j.Z,{title:n.formatMessage({id:"studentGroupSignupContainer.document.title",defaultMessage:"Notion for Student Orgs | Notion"}),children:(0,S.jsxs)(y.Z,{style:o.scroller,type:M.Z.Y,children:[(0,S.jsxs)("div",{style:o.topBar,children:[(0,S.jsx)(x.Z,{href:h._j.root,children:(0,S.jsxs)("div",{style:o.brandLink,children:[(0,S.jsx)("div",{children:(0,f.h)(o.icon)}),(0,S.jsx)("div",{children:(0,S.jsx)(a.FormattedMessage,{defaultMessage:"Notion",id:"studentGroupSignupContainer.document.header"})})]})}),(0,S.jsx)(w.Z,{})]}),(0,S.jsx)("div",{style:{...o.innerContainer},children:(0,S.jsxs)("div",{style:o.headerSection,children:[(0,S.jsx)("img",{style:{width:200},src:g.Z.images.notionForStudentsPng}),(0,S.jsx)("div",{style:o.header,children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupContainer.page.title",defaultMessage:"Apply for a free Plus plan for your student organization"})}),(0,S.jsxs)("div",{style:o.subtitle,children:[(0,S.jsx)("p",{children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupContainer.info.line2",defaultMessage:"Please enter your details below about your student organization to receive a free Plus plan upgrade for your student organization’s workspace.",values:{bold:e=>(0,S.jsx)("b",{children:e})}})}),(0,S.jsx)("h3",{children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupContainer.admissionCriteria.line1",defaultMessage:"Admission criteria"})}),(0,S.jsx)("p",{children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupContainer.admissionCriteria.subtext",defaultMessage:"To be eligible for the discount, please note the following:"})}),(0,S.jsxs)("ol",{children:[(0,S.jsx)("li",{style:o.criteriaList,children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupContainer.admissionCriteria.criteria1",defaultMessage:"You must be a student at an accredited U.S. higher education institution to apply. Only workspaces used for verified student-led organizations are eligible for the discount."})}),(0,S.jsx)("li",{style:o.criteriaList,children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupContainer.admissionCriteria.criteria2",defaultMessage:"Your email must be a verified domain from your institution."})}),(0,S.jsx)("li",{style:o.criteriaList,children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupContainer.admissionCriteria.registeredOrg",defaultMessage:"You are using the discount for a registered student org. The discount is not available for group projects or personal use. If you’d like to use Notion for personal or classroom use, you can upgrade onto our Education plan. <notionForEducationLink>More info here →</notionForEducationLink>",values:{notionForEducationLink:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,S.jsx)(b.Z,{href:"/help/notion-for-education",children:t})}}})}),(0,S.jsx)("li",{style:o.criteriaList,children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupContainer.admissionCriteria.criteria3",defaultMessage:"All members in your student organization’s workspace must share the same domain from your education institution, before and after your workspace is upgraded."})}),(0,S.jsx)("li",{style:o.criteriaList,children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupContainer.admissionCriteria.criteria4",defaultMessage:"Only one application per student organization will be approved. Only an admin of your workspace can apply on behalf of the organization."})})]})]})]})}),(0,S.jsx)("div",{style:{...o.innerContainer},children:t}),(0,S.jsxs)("footer",{style:o.footerContainer,children:[(0,S.jsxs)("section",{style:o.footerColophon,children:[(0,S.jsx)("h1",{style:o.footerLogo,children:(0,S.jsx)("img",{src:g.Z.images.integrations.notionFooterLogoSvg})}),(0,S.jsx)("h6",{style:o.footerCopy,children:(0,S.jsx)(a.FormattedMessage,{id:"layout.meta.title",defaultMessage:"The all-in-one workspace for your notes, tasks, wikis, and databases."})}),(0,S.jsx)("h6",{style:o.footerCopy,children:`©${(new Date).getFullYear()} Notion Labs, Inc.`}),(0,S.jsx)(x.Z,{external:!0,href:h._j.termsAndPrivacy,style:o.footerLink,children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupContainer.layout.footer.termsAndPrivacy",defaultMessage:"Terms & Privacy"})})]}),(0,S.jsxs)("nav",{style:o.footerNav,children:[(0,S.jsx)("h5",{style:o.footerSectionHeader,children:"Notion"}),(0,S.jsx)(x.Z,{external:!0,href:h._j.studentsRedirect,style:o.footerLink,children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupContainer.layout.footer.students",defaultMessage:"Students"})}),(0,S.jsx)(x.Z,{external:!0,href:h._j.product,style:o.footerLink,children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupContainer.layout.footer.product",defaultMessage:"Product"})}),(0,S.jsx)(x.Z,{external:!0,href:h._j.blog,style:o.footerLink,children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupContainer.layout.footer.blog",defaultMessage:"Blog"})}),(0,S.jsx)(x.Z,{external:!0,href:h._j.careers,style:o.footerLink,children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupContainer.layout.footer.careers",defaultMessage:"Careers"})})]})]})]})})};var F=n(80342),k=n(47453);const q=(0,a.defineMessages)({question1:{id:"studentGroupSignup.studentGroupFaq.question1",defaultMessage:"What is the student org discount?"},answer1:{id:"studentGroupSignup.studentGroupFaq.answer1",defaultMessage:"<p>For a limited time, we’ll be opening up applications to offer our Plus plan for free to all verified student organizations at accredited higher education institutions in the U.S.</p><p>Our Plus plan offers unlimited blocks & file uploads for teams, ability to add multiple members to a workspace, 30 day page history, up to 100 guests, and more.</p><p>For more information on our plans, visit our <link>Pricing page.</link></p><p><italic><bold>Note:</bold> This discount is only eligible for workspaces for volunteer student organizations. Non student-organization workspaces will not qualify for the discount.</italic></p>"},question2:{id:"studentGroupSignup.studentGroupFaq.question2",defaultMessage:"Why are we offering Notion for free to student orgs?"},answer2:{id:"studentGroupSignup.studentGroupFaq.answer2",defaultMessage:"<p>At Notion, we believe that people think better, dream bigger, and lead stronger, together.</p><p>By offering Notion for free for student organizations, we want to <bold>empower our next generation of dreamers, thinkers, and leaders to do their best work together.</bold></p>"},question3:{id:"studentGroupSignup.studentGroupFaq.question3",defaultMessage:"Who qualifies for the discount?"},answer3:{id:"studentGroupSignup.studentGroupFaq.answer3",defaultMessage:"<p>All official, volunteer student-led organizations at accredited higher education institutions in the U.S. are eligible for the student org discount on their workspace.</p><p>Any organization either registered or listed on your accredited institution’s website is considered eligible.</p>"},question4:{id:"studentGroupSignup.studentGroupFaq.question4",defaultMessage:"How do I apply?"},answer4part1:{id:"studentGroupSignup.studentGroupFaq.answer4part1",defaultMessage:"<p>Please submit an application for your student org’s workspace <link>here</link>. To be approved for the discount, all members in your student org’s workspace must have a .edu domain.</p><p>In your application please provide:</p>"},answer4part2:{id:"studentGroupSignup.studentGroupFaq.answer4part2",defaultMessage:"<list>Your student organization’s workspace domain</list><list>Your institution name</list><list>Your class or student organization name</list><list>A link on your school’s website demonstrating your class / student organization or a proof of registration</list>"},answer4part3:{id:"studentGroupSignup.studentGroupFaq.answer4part3",defaultMessage:"<p>Once your application is approved, you’ll receive an email from the Notion team confirming that your student organization’s workspace will be upgraded onto our Plus plan.</p>"},question5:{id:"studentGroupSignup.studentGroupFaq.question5",defaultMessage:"When can I apply?"},answer5:{id:"studentGroupSignup.studentGroupFaq.answer5",defaultMessage:"The application for the student org discount will be open until October 13, 2023."},question6:{id:"studentGroupSignup.studentGroupFaq.question6",defaultMessage:"How do I know when I’ve been approved?"},answer6:{id:"studentGroupSignup.studentGroupFaq.answer6",defaultMessage:"Our team will reach out to you once your application has been reviewed! If you’ve been approved for the discount, your workspace will be upgraded."},question7:{id:"studentGroupSignup.studentGroupFaq.question7",defaultMessage:"Do high school organizations qualify for the discount?"},answer7:{id:"studentGroupSignup.studentGroupFaq.answer7",defaultMessage:"We are not offering our student orgs discount to high schools at this time."},question8:{id:"studentGroupSignup.studentGroupFaq.question8",defaultMessage:"Will the application open again? What if I’m outside the US?"},answer8:{id:"studentGroupSignup.studentGroupFaq.answer8",defaultMessage:"For our initial launch, we’re opening up applications for a limited time to US-only, accredited higher education institutions. In the future, we may expand eligibility to others and we may open applications again."},question9:{id:"studentGroupSignup.studentGroupFaq.question9",defaultMessage:"Is there a discount for students outside of student orgs?"},answer9:{id:"studentGroupSignup.studentGroupFaq.answer9",defaultMessage:"<p>Yes! We currently offer our 1-member Plus plan for free to students.</p><p>Learn more about our Notion for education program <link>here</link>.</p>"},question10:{id:"studentGroupSignup.studentGroupFaq.question10",defaultMessage:"How do I join the Notion student community?"},answer10:{id:"studentGroupSignup.studentGroupFaq.answer10",defaultMessage:"<p>Want to represent the next generation of toolmakers on your campus? <linkToCommunity>Join our growing Campus Leaders community</linkToCommunity>, representing over 100 campuses across the globe and counting.</p><p>Visit our <campusLeadersPage>Campus Leaders page</campusLeadersPage> to stay-in-the-know about all of the latest events happening on your campus. </p>"}}),Z=e=>{let{faq:t}=e;window.__c={n:"FaqDrawerItem"};const[n,i]=(0,o.useState)(!1),a=(0,s.yK)((e=>({faq:{borderBottom:`1px solid ${e.lightDividerColor}`},question:{margin:0,cursor:"pointer",display:"flex",alignItems:"center",width:"100%",justifyContent:"space-between"},questionText:{padding:"1em 20px 1em 0",fontWeight:r.Z.fontWeight.semibold},answer:{paddingBottom:"1em"}})),[]);return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)("section",{style:a.faq,children:[(0,S.jsxs)("header",{style:a.question,role:"button","aria-pressed":n?"true":"false",onClick:()=>i((e=>!e)),children:[(0,S.jsx)("div",{style:a.questionText,children:t.question}),n?(0,F.$)({width:14,height:14}):(0,k.R)({width:14,height:14})]}),n&&(0,S.jsx)("div",{style:a.answer,children:t.answer})]})})};const G=function(){window.__c={n:"StudentGroupSignupFaq"};const e=(0,a.useIntl)(),t=[{question:e.formatMessage(q.question1),answer:e.formatMessage(q.answer1,{bold:e=>(0,S.jsx)("b",{children:e}),italic:e=>(0,S.jsx)("i",{children:e}),p:e=>(0,S.jsx)("p",{children:e}),link:e=>(0,S.jsx)(b.Z,{href:"https://www.notion.so/pricing",children:e})})},{question:e.formatMessage(q.question2),answer:e.formatMessage(q.answer2,{p:e=>(0,S.jsx)("p",{children:e}),bold:e=>(0,S.jsx)("b",{children:e})})},{question:e.formatMessage(q.question3),answer:e.formatMessage(q.answer3,{p:e=>(0,S.jsx)("p",{children:e})})},{question:e.formatMessage(q.question4),answer:(0,S.jsxs)(S.Fragment,{children:[e.formatMessage(q.answer4part1,{p:e=>(0,S.jsx)("p",{children:e}),link:e=>(0,S.jsx)(b.Z,{href:"https://www.notion.so/notion-for-student-orgs-apply",children:e})}),(0,S.jsx)("ul",{children:e.formatMessage(q.answer4part2,{list:e=>(0,S.jsx)("li",{children:e})})}),e.formatMessage(q.answer4part3,{p:e=>(0,S.jsx)("p",{children:e})})]})},{question:e.formatMessage(q.question5),answer:e.formatMessage(q.answer5)},{question:e.formatMessage(q.question6),answer:e.formatMessage(q.answer6)},{question:e.formatMessage(q.question7),answer:e.formatMessage(q.answer7)},{question:e.formatMessage(q.question8),answer:e.formatMessage(q.answer8,{p:e=>(0,S.jsx)("p",{children:e})})},{question:e.formatMessage(q.question9),answer:e.formatMessage(q.answer9,{link:e=>(0,S.jsx)(b.Z,{href:"https://www.notion.so/product/notion-for-education",children:e}),p:e=>(0,S.jsx)("p",{children:e})})},{question:e.formatMessage(q.question10),answer:e.formatMessage(q.answer10,{linkToCommunity:e=>(0,S.jsx)(b.Z,{href:"https://notion.notion.site/Notion-Campus-Leaders-Program-5817b00cbaa244bca9e0e498804cbab4",children:e}),campusLeadersPage:e=>(0,S.jsx)(b.Z,{href:"https://notion.notion.site/Notion-Campus-Leaders-Program-5817b00cbaa244bca9e0e498804cbab4",children:e}),p:e=>(0,S.jsx)("p",{children:e})})}],n=(0,s.yK)((e=>({faqWrap:{borderTop:`1px solid ${e.lightDividerColor}`}})),[]);return(0,S.jsx)("article",{style:n.faqWrap,children:t.length>0&&t.map(((e,t)=>(0,S.jsx)(Z,{faq:e},`faq-${t}`)))})};n(57658);var z=n(480),I=n(59054),L=n(72126),T=n(54642),_=n(97122),N=n(60458),P=n(73420),E=n(74194),B=n(31278),O=n(64369),W=n(96),D=n(49085),V=n(35840),A=n(78140),R=n(87279),K=n(48019),U=n(52275),H=n(68894),X=n(53437),Y=n(72495);class $ extends D.default{getInitialState(){return{query:"",focus:!1}}}const J=function(e){window.__c={n:"SearchSelectionDropdown"};const{items:t,onSelect:n,analyticsName:r,doNotFilter:a}=e,u=(0,z.O7)(),d=(0,i.qz)(e.store,$),{query:l,focus:p}=(0,i.VK)((()=>null==d?void 0:d.state),[d]),c=(0,s.yK)((e=>({textInput:{fontSize:14,borderRadius:v.Z.borderRadius,padding:"8px 14px",height:36},icon:{width:16,fill:e.lightIconColor}})),[]),g=(0,o.useMemo)((()=>e=>d.setState({...d.state,query:e})),[d]),m=(0,o.useMemo)((()=>e=>d.setState({...d.state,focus:e})),[d]),f=(0,o.useMemo)((()=>[{key:"selections",render:e=>(0,S.jsx)(Y.Z,{...e,loading:!1}),actions:t.map(((e,t)=>{const{label:o,value:i,icon:s}=e;return{key:t,value:i??o,displayName:o,analyticsName:r,searchName:void 0,render:e=>(0,S.jsx)(U.Z,{...e,title:o,icon:s,focused:!1}),action:()=>{g(o),m(!1),null==n||n(e)},closeParentMenu:!0}}))}]),[t,n,r,m,g]);return(0,S.jsx)(X.ZP,{popupType:X.ZP.PopupType.Popup,placementToOrigin:X.ZP.Placement.Bottom,sameWidthAsOrigin:!0,open:p,onDismiss:()=>{m(!1)},origin:(0,S.jsx)(H.ZP,{inputLeft:""===l&&(0,S.jsx)(H.f_,{icon:V.R}),showClearButton:!0,value:l,onChange:e=>{g(e.target.value),m(!0)},placeholder:"Type to search...",focus:p,inputOuterStyle:{...c.textInput},onClick:()=>{m(!0)},onClearButtonClick:()=>{g(""),m(!0),null==n||n(void 0)},itemMarginLeft:0,itemMarginRight:0}),render:()=>(0,S.jsx)(A.Z,{menuType:R.og.Popup,maxHeight:200,tokenInputHeader:!0,disableHeaderBorder:!0,children:(0,S.jsx)(K.Z,{filter:a?void 0:l,context:{blocks:[],environment:u,publicEditMode:void 0},initialFocus:0,sections:f})})})};var Q=n(38755),ee=n(80444),te=n(59730),ne=n(30845);function oe(e){if(!e||0===e.length)throw new te.XV("This field is required.",{type:"student_group_response_missing"});if(!ne.B(e,"url"))throw new te.XV("Link to student organization is invalid URL.",{type:"student_group_url_invalid"})}function ie(e){if(!e||0===e.length)throw new te.XV("This field is required.",{type:"student_group_response_missing"});if(e.length>2e3)throw new te.XV("Response is too long. Please limit your answers to 2000 characters.",{type:"student_group_response_too_long"})}function se(e,t){if(!e||0===e.length)throw new te.XV(`This field is required: ${t}`,{type:"student_group_response_missing"})}var re=n(47307),ae=n(33954),ue=n(33929);const de=["workspaceError","institutionError","organizationError","linkToOrganizationError","purposeError"];class le extends D.default{getInitialState(){return{spaceId:"",spaceName:"",domain:"",userEmail:"",institutionName:"",organizationName:"",linkToOrganization:"",purpose:"",linkToFormVerification:void 0,workspaceError:void 0,institutionError:void 0,organizationError:void 0,linkToOrganizationError:void 0,purposeError:void 0}}}const pe=new le,ce=(0,a.defineMessages)({submitSuccess:{id:"studentGroupSignupForm.success",defaultMessage:"Your application has been submitted! You'll hear back from our team once your application has been reviewed."}});function ge(e){const{value:t,validationFunction:n,fieldName:o}=e;try{n(t),pe.setState({...pe.state,[o]:void 0})}catch(i){if((0,te.Cx)(i)){const e=(0,ae.nX)(ue.default.getIntl(),i.body);e&&pe.setState({...pe.state,[o]:e})}}}function me(e){try{const{spaceId:t,institutionName:n,organizationName:o,linkToOrganization:i,purpose:s}=e;!function(e){ge({value:e,validationFunction:se,fieldName:"workspaceError"})}(t),function(e){ge({value:e,validationFunction:se,fieldName:"institutionError"})}(n),ge({value:o,validationFunction:ie,fieldName:"organizationError"}),ge({value:i,validationFunction:oe,fieldName:"linkToOrganizationError"}),function(e){ge({value:e,validationFunction:ie,fieldName:"purposeError"})}(s)}catch(t){return!1}for(const n of de)if(void 0!==pe.state[n])return!1;return!0}async function fe(e){const{environment:t,setIsSubmitting:n,institutionNameDropdownStore:o,spaceNameDropdownStore:i}=e;if(me(pe.state))try{n(!0);const e=await T.submitEducationGroupApplication(t,{institution:pe.state.institutionName,purpose:pe.state.purpose,linkToOrganization:pe.state.linkToOrganization,spaceId:pe.state.spaceId,userEmail:pe.state.userEmail,linkToFormVerification:pe.state.linkToFormVerification,studentOrgName:pe.state.organizationName});if("success"!==e.type){const t=e.body;return void((0,te.Jx)(t)?function(e){const t=e.clientData.type,n=(0,ae.nX)(ue.default.getIntl(),e);n||re.showMessage({message:t});switch(t){case"student_institution_domain_mismatch":pe.setState({...pe.state,institutionError:n});break;case"student_group_link_to_organization_domain_mismatch":case"student_group_url_invalid":pe.setState({...pe.state,linkToOrganizationError:n});break;default:re.showMessage({message:n})}}(t):re.showError(e))}re.showMessage({message:ue.default.formatMessage(ce.submitSuccess)}),pe.reset(),o.reset(),i.reset()}finally{n(!1)}}const he=function(){window.__c={n:"StudentGroupSignupForm"};const e=(0,z.O7)(),{organizationName:t,linkToOrganization:n,purpose:r,workspaceError:d,institutionError:l,organizationError:p,linkToOrganizationError:c,purposeError:g}=(0,i.VK)((()=>pe.state),[]),m=(0,i.qz)(void 0,$),f=(0,i.qz)(void 0,$),h=(0,i.VK)((()=>{var e;const t=null===(e=ee.default.state.currentUserStore)||void 0===e?void 0:e.getModel();return t?t.getEmail():""}),[]),x=(0,i.VK)((()=>{var e;return null===(e=ee.default.state.currentUserRootStore)||void 0===e?void 0:e.getSpaceViewStores()}),[]),{query:y}=(0,i.VK)((()=>m.state),[m]),w=(0,s.yK)((e=>({textInput:{fontSize:14,borderRadius:v.Z.borderRadius,padding:"8px 14px"},textInputDisabled:{fontSize:14,borderRadius:v.Z.borderRadius,padding:"8px 14px"},checkboxContainer:{display:"flex",alignItems:"center",gap:6},formBody:{display:"flex",flexDirection:"column",gap:24,marginTop:24},errorText:{color:e.errorText,fontSize:12}})),[]),j=(0,i.VK)((()=>x?function(e,t){if(!t)return[];const n=L.mN(t,(e=>e.getSpaceId())).filter((e=>{const t=e.getSpaceStore();return e.isDefined()&&t&&t.canAdmin()})),o=[];for(const i of n){const t=i.getSpaceStore();if(t){const n=(0,Q.rn)(e,t),s=(0,Q.Wd)(e,t);o.push({label:n,value:i.getSpaceId(),icon:(0,S.jsx)(B.Z,{icon:s,isEmptyPage:!1,title:n,size:20,disabled:!0})})}}return o}(e,x):[]),[e,x]);(0,o.useEffect)((()=>{pe.reset(),m.reset(),f.reset(),pe.setState({...pe.state,userEmail:h})}),[h]);const[{value:b}]=(0,I.r5)((async()=>{const t=await async function(e,t){const n=await T.getUniversitiesAndDomains(e,{query:t,limit:20});if("success"!==n.type||!n.data||0===n.data.length)return[];return n.data.map((e=>({label:e.name})))}(e,y);return t||[]}),[e,y],{debounce:300}),[M,C]=(0,o.useState)(!1),[F,k]=(0,o.useState)(!1);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("div",{children:(0,S.jsx)("h3",{children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupContainer.applicationHeader",defaultMessage:"Application"})})}),(0,S.jsxs)("div",{style:w.formBody,children:[(0,S.jsx)(P.X2,{children:(0,S.jsx)(W.Z,{isMultiline:!0,name:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupForm.question1.label",defaultMessage:"What is the account email you’re using to log in to your student organization’s workspace?"}),(0,S.jsx)("br",{}),(0,S.jsx)("br",{}),(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupForm.question1.info",defaultMessage:"<italic>Note:</italic> Your account's email must be your official education email.",values:{italic:e=>(0,S.jsx)("i",{children:e})}})]}),children:(0,S.jsx)(E.Z,{type:"text",style:w.textInputDisabled,value:h,disabled:!0})})}),(0,S.jsx)(P.X2,{children:(0,S.jsx)(W.Z,{name:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupForm.question2.label",defaultMessage:"Select your student-led organization's workspace"}),errorMessage:d,children:(0,S.jsx)(J,{items:j,onSelect:e=>{pe.setState({...pe.state,spaceName:(null==e?void 0:e.label)||"",spaceId:(null==e?void 0:e.value)||""})},store:f,analyticsName:"studentGroupSignupForm.workspaceDropdown"})})}),(0,S.jsx)(P.X2,{children:(0,S.jsx)(W.Z,{name:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupForm.question3.label",defaultMessage:"Select your institution"}),errorMessage:l,children:(0,S.jsx)(J,{items:b||[],onSelect:e=>{pe.setState({...pe.state,institutionName:e?e.label:""})},store:m,analyticsName:"studentGroupSignupForm.institutionDropdown",doNotFilter:!0})})}),(0,S.jsx)(P.X2,{children:(0,S.jsx)(W.Z,{name:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupForm.question5.label",defaultMessage:"What is the name of your student organization?"}),errorMessage:p,children:(0,S.jsx)(E.Z,{value:t,type:"text",style:w.textInput,onBlur:e=>{pe.setState({...pe.state,organizationName:e.target.value})}})})}),(0,S.jsx)(P.X2,{children:(0,S.jsx)(W.Z,{isMultiline:!0,name:(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupForm.question6.label",defaultMessage:"Please provide a link to your student-led organization, preferably listed on your institution’s official website.",values:{bold:e=>(0,S.jsx)("b",{children:e})}})}),errorMessage:c,children:(0,S.jsx)(E.Z,{value:n,placeholder:"https://",type:"url",style:w.textInput,onBlur:e=>{pe.setState({...pe.state,linkToOrganization:e.target.value.trim()})}})})}),(0,S.jsx)(P.X2,{children:(0,S.jsx)(W.Z,{name:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupForm.7.label",defaultMessage:"What are you using this discount for?"}),errorMessage:g,children:(0,S.jsx)(E.Z,{value:r,type:"text",textarea:!0,style:w.textInput,onBlur:e=>{pe.setState({...pe.state,purpose:e.target.value})}})})}),(0,S.jsx)(P.X2,{children:(0,S.jsxs)(O.Z,{isMultiline:!0,children:[(0,S.jsx)("p",{children:(0,S.jsx)(a.FormattedMessage,{defaultMessage:"By checking this box, I confirm I am representing a student organization enrolled at the institution I provided.",id:"studentGroupSignupForm.userAgreement.line1"})}),(0,S.jsx)("p",{children:(0,S.jsx)(a.FormattedMessage,{defaultMessage:"You or a member of your student organization must retain proof of enrollment for the duration of your access to the Notion for Student Orgs plan. Notion reserves the right to ask for your eligibility while your workspace is on this discount.",id:"studentGroupSignupForm.userAgreement.line2"})}),(0,S.jsx)("p",{children:(0,S.jsx)(a.FormattedMessage,{defaultMessage:"<bold>If you have misrepresented your eligibility in violation of our terms of service, you agree to pay Notion for any service fees that were initially waived due to the information you provided about your status as a student organization.</bold>",id:"studentGroupSignupForm.userAgreement.line3",values:{bold:e=>(0,S.jsx)("b",{children:e})}})})]})}),(0,S.jsx)(P.X2,{children:(0,S.jsxs)("div",{style:w.checkboxContainer,children:[(0,S.jsx)(N.Z,{checked:M,onClick:()=>{C(!M)},size:14}),(0,S.jsx)("div",{children:(0,S.jsx)(O.Z,{children:(0,S.jsx)(a.FormattedMessage,{defaultMessage:"Yes, I confirm.",id:"studentGroupSignupForm.userAgreement.confirm"})})})]})}),!M&&(0,S.jsx)("div",{children:(0,S.jsx)(O.Z,{style:w.errorText,children:"Please confirm before submitting."})}),(0,S.jsx)(P.X2,{children:(0,S.jsxs)(_.h,{disabled:F||!M,onClick:async()=>{await fe({environment:e,setIsSubmitting:k,institutionNameDropdownStore:m,spaceNameDropdownStore:f})},children:[(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignupForm.submit.label",defaultMessage:"Submit"}),F&&(0,S.jsx)(u.Z,{style:{marginLeft:4}})]})})]})]})};const xe=function(e){let{}=e;window.__c={n:"StudentGroupSignup"};const t=(0,s.yK)((e=>({faqHeader:{marginTop:0,fontSize:24,fontWeight:r.Z.fontWeight.semibold,color:e.regularTextColor,marginBottom:24},center:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}})),[]),[n,c]=o.useState(!1);o.useEffect((()=>{p.default.waitUntilStatsigReady().then((()=>{c(!0)}))}),[]);const g=(0,i.VK)((()=>n&&p.default.checkGate("student_form")),[n]);return n?g?(0,S.jsxs)(C,{children:[(0,S.jsx)(he,{}),(0,S.jsx)(d.Z,{size:80}),(0,S.jsx)("div",{style:t.faqHeader,children:(0,S.jsx)(a.FormattedMessage,{id:"studentGroupSignup.faq.title",defaultMessage:"FAQs"})}),(0,S.jsx)(G,{}),(0,S.jsx)(d.Z,{size:60})]}):(0,S.jsx)(l.LazyPageError,{route:{name:"notFound"},publicPageData:void 0}):(0,S.jsx)("div",{style:t.center,children:(0,S.jsx)(u.Z,{})})}},80342:(e,t,n)=>{n.d(t,{$:()=>s});n(67294);var o=n(45238),i=n(85893);const s=(0,o.I)("minus",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M3.037 8.844h9.92a.705.705 0 00.368-.103.825.825 0 00.28-.28.73.73 0 000-.773.752.752 0 00-.28-.28.705.705 0 00-.369-.102H3.037a.705.705 0 00-.369.102.824.824 0 00-.28.28.73.73 0 000 .772.914.914 0 00.28.281.705.705 0 00.37.103z"})})},60651:(e,t,n)=>{n.d(t,{h:()=>s});n(67294);var o=n(45238),i=n(85893);const s=(0,o.I)("notionLogo",{viewBox:"0 0 120 126",svg:(0,i.jsx)("path",{d:"M 20.6927 21.9315C 24.5836 25.0924 26.0432 24.8512 33.3492 24.3638L 102.228 20.2279C 103.689 20.2279 102.474 18.7705 101.987 18.5283L 90.5477 10.2586C 88.3558 8.55699 85.4356 6.60818 79.8387 7.09563L 13.1433 11.9602C 10.711 12.2014 10.2251 13.4175 11.1939 14.3924L 20.6927 21.9315ZM 24.8281 37.9835L 24.8281 110.456C 24.8281 114.351 26.7745 115.808 31.1553 115.567L 106.853 111.187C 111.236 110.946 111.724 108.267 111.724 105.103L 111.724 33.1169C 111.724 29.958 110.509 28.2544 107.826 28.4976L 28.721 33.1169C 25.8018 33.3622 24.8281 34.8225 24.8281 37.9835ZM 99.5567 41.8711C 100.042 44.0622 99.5567 46.2512 97.3618 46.4974L 93.7143 47.2241L 93.7143 100.728C 90.5477 102.43 87.6275 103.403 85.1942 103.403C 81.2983 103.403 80.3226 102.186 77.4044 98.54L 53.5471 61.087L 53.5471 97.3239L 61.0964 99.0275C 61.0964 99.0275 61.0964 103.403 55.0057 103.403L 38.2148 104.377C 37.727 103.403 38.2148 100.973 39.9179 100.486L 44.2996 99.2717L 44.2996 51.36L 38.2158 50.8725C 37.728 48.6815 38.9431 45.5225 42.3532 45.2773L 60.3661 44.0631L 85.1942 82.0036L 85.1942 48.4402L 78.864 47.7136C 78.3781 45.0351 80.3226 43.0902 82.7569 42.849L 99.5567 41.8711ZM 7.5434 5.39404L 76.9175 0.285276C 85.4366 -0.445402 87.6285 0.0440428 92.983 3.93368L 115.128 19.4982C 118.782 22.1747 120 22.9034 120 25.8211L 120 111.187C 120 116.537 118.051 119.701 111.237 120.185L 30.6734 125.05C 25.5584 125.294 23.124 124.565 20.4453 121.158L 4.13735 99.9994C 1.21516 96.1048 0 93.191 0 89.7819L 0 13.903C 0 9.5279 1.94945 5.8785 7.5434 5.39404Z"})})},22686:(e,t,n)=>{n.d(t,{f:()=>s});n(67294);var o=n(45238),i=n(85893);const s=(0,o.I)("person",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M7.7832 8.00195C9.27344 8.00195 10.5381 6.67578 10.5381 4.95996C10.5381 3.28516 9.2666 2 7.7832 2C6.29297 2 5.01465 3.30566 5.02148 4.97363C5.02148 6.67578 6.28613 8.00195 7.7832 8.00195ZM3.51758 14.3594H12.0352C13.1631 14.3594 13.5527 14.0176 13.5527 13.3887C13.5527 11.6318 11.3242 9.21191 7.77637 9.21191C4.23535 9.21191 2 11.6318 2 13.3887C2 14.0176 2.38965 14.3594 3.51758 14.3594Z"})})},14734:(e,t,n)=>{n.d(t,{X:()=>s});n(67294);var o=n(45238),i=n(85893);const s=(0,o.I)("personCrossedOut",{viewBox:"0 0 44 44",svg:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:"M5.4857 44H0L44 8.56549V13.0061L5.4857 44Z"}),(0,i.jsx)("path",{d:"M39.8048 44H8.66491L25.6448 30.4378C26.9394 30.6489 28.1581 30.9719 29.3009 31.4067C31.5362 32.2374 33.4346 33.326 34.9964 34.6723C36.5725 36.0044 37.7761 37.4367 38.6071 38.9692C39.4525 40.5018 39.8752 41.9555 39.8752 43.3305C39.8752 43.5675 39.8517 43.7906 39.8048 44Z"}),(0,i.jsx)("path",{d:"M30.3971 16.7973C30.3971 16.8668 30.3965 16.9359 30.3952 17.0048L19.3828 25.9192C18.7467 25.7134 18.1339 25.4228 17.5446 25.0473C16.2408 24.2023 15.1876 23.0708 14.3853 21.6528C13.5972 20.2205 13.2032 18.6163 13.2032 16.8403C13.2032 15.0929 13.5972 13.5174 14.3853 12.1137C15.1876 10.7101 16.2408 9.60007 17.5446 8.78366C18.8485 7.96725 20.267 7.55905 21.8001 7.55905C23.3332 7.55905 24.7517 7.96009 26.0556 8.76218C27.3595 9.56426 28.4054 10.6671 29.1935 12.0708C29.9959 13.4601 30.3971 15.0356 30.3971 16.7973Z"})]})})},35840:(e,t,n)=>{n.d(t,{R:()=>s,T:()=>i});n(67294);var o=n(45238);const i=(0,n(85893).jsx)("path",{d:"M.281 6.438c0-.875.164-1.696.492-2.461a6.484 6.484 0 011.375-2.032A6.237 6.237 0 016.64.078 6.2 6.2 0 019.11.57c.77.328 1.447.787 2.03 1.375a6.374 6.374 0 011.368 2.032c.333.765.5 1.586.5 2.46 0 .688-.107 1.342-.32 1.961a6.28 6.28 0 01-.868 1.696l3.563 3.578c.11.104.19.226.242.367.057.14.086.29.086.445 0 .22-.05.417-.149.594a1.122 1.122 0 01-1 .57c-.156 0-.307-.028-.453-.086a1.058 1.058 0 01-.382-.25l-3.586-3.585c-.5.333-1.047.596-1.641.789a6.089 6.089 0 01-1.86.28 6.237 6.237 0 01-2.468-.491 6.4 6.4 0 01-2.024-1.367A6.509 6.509 0 01.773 8.913a6.256 6.256 0 01-.492-2.476zm1.664 0c0 .65.12 1.26.36 1.828a4.775 4.775 0 001.015 1.5c.433.427.933.763 1.5 1.007a4.548 4.548 0 001.82.368c.652 0 1.261-.123 1.829-.368a4.747 4.747 0 002.508-2.507 4.567 4.567 0 00.367-1.829c0-.645-.123-1.252-.367-1.82a4.776 4.776 0 00-1.016-1.5A4.578 4.578 0 008.469 2.11a4.567 4.567 0 00-1.828-.367c-.646 0-1.253.123-1.82.367a4.667 4.667 0 00-1.5 1.008c-.433.432-.772.932-1.016 1.5a4.633 4.633 0 00-.36 1.82z"}),s=(0,o.I)("search",{viewBox:"0 0 16 16",svg:i})}}]);