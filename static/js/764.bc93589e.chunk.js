"use strict";(self.webpackChunkreferral_app=self.webpackChunkreferral_app||[]).push([[764],{1764:function(e,n,s){s.r(n),s.d(n,{default:function(){return me}});var a=s(2791),t=s(9434),i=s(7370),r=s(8031),c=s(885),l=s(2776),o={childrenContainer:"Children_childrenContainer__jOzce",ChildrenBtn:"Children_ChildrenBtn__YDBXq",isShow:"Children_isShow__uJVPt",iconSvg:"Children_iconSvg__CRe9D",icon:"Children_icon__5jmum",info:"Children_info__b5UMM",level:"Children_level__QYMbZ",id:"Children_id__uQqSm",phone:"Children_phone__CtfBJ"},d=s(184),u=function(e){var n=e.info,s=e.level,t=(0,a.useState)(!1),i=(0,c.Z)(t,2),r=i[0],u=i[1],h=n.children.length,_=r&&h,x=s+1,j=[o.childrenContainer,r&&""].join(" "),v=[o.ChildrenBtn,r&&o.isShow].join(" ");return(0,d.jsxs)("div",{className:j,children:[(0,d.jsxs)("button",{className:v,type:"button",disabled:!h,onClick:function(){u(!r)},children:[(0,d.jsx)("span",{className:o.level,children:s}),(0,d.jsxs)("div",{className:o.info,children:[(0,d.jsxs)("span",{className:o.name,children:["\u0406\u043c'\u044f: ",n.name]}),(0,d.jsx)("span",{className:o.id,children:"ID: ".concat(n.id)}),(0,d.jsxs)("span",{className:o.phone,children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",n.phone]}),(0,d.jsx)("span",{className:o.childrenCount,children:"\u0417\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043e: ".concat(h)})]}),(0,d.jsx)("span",{className:o.icon,children:(0,d.jsx)("svg",{className:o.iconSvg,children:(0,d.jsx)("use",{href:"".concat(l.Z,"#icon-select-arrow")})})})]}),_&&(0,d.jsx)("div",{className:o.listContainer,children:(0,d.jsx)(m,{arr:n.children,level:x})})]})},h="ChildrensList_ChildrensList__sD1Hk",m=function(e){var n=e.arr,s=e.level;return s>5?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)("div",{className:h,children:n.map((function(e){return(0,d.jsx)(u,{info:e,level:s},e.id)}))})},_=s(6650),x="ChildrensBlock_childrensBlock__CKl2a",j=function(){var e=(0,t.I0)(),n=(0,t.v9)(r.Xq).childrensList;return(0,a.useEffect)((function(){e((0,i.A)())}),[e]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(_.Z,{title:"\u0420\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0430 \u043c\u0435\u0440\u0435\u0436\u0430",subTitle:"\u0412\u0430\u0448\u0430 \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0430 \u043c\u0435\u0440\u0435\u0436\u0430",iconStartId:"icon-persons",children:(0,d.jsx)("div",{className:x,children:(0,d.jsx)(m,{arr:n,level:1})})})})},v=s(4942),p=s(1413),f=s(5782),N=s(6189),C=s(1101),b={form:"CreateTransferForm_form__4IrO8",inputs:"CreateTransferForm_inputs__UA8Dk",labelId:"CreateTransferForm_labelId__0v63Y",labelAmount:"CreateTransferForm_labelAmount__w7bIi",labelNotes:"CreateTransferForm_labelNotes__Mayso",title:"CreateTransferForm_title__enMM4",custominput:"CreateTransferForm_custominput__BciuO",input:"CreateTransferForm_input__dLYME",buttons:"CreateTransferForm_buttons__4qksh"},g=function(){var e=(0,t.I0)(),n=(0,t.v9)(r.tT).user,s=(0,t.v9)(r.ig),i=s.isLoading,l=s.bonuses.activeBonuses,o={fromUser:n.id,amount:"",notes:"",toUser:""},u=(0,a.useState)(o),h=(0,c.Z)(u,2),m=h[0],_=h[1];function x(e){var n=e.target,s=n.name,a=n.value;_((0,p.Z)((0,p.Z)({},m),{},(0,v.Z)({},s,a)))}return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("form",{className:b.form,onSubmit:function(s){s.preventDefault();var a={fromUser:Number(n.id),amount:Number(m.amount),notes:m.notes,toUser:Number(m.toUser)};e((0,C.KW)(a)),_(o)},onReset:function(e){e.preventDefault(),_(o)},children:[(0,d.jsxs)("div",{className:b.inputs,children:[(0,d.jsxs)("label",{htmlFor:"toUser",className:b.labelId,children:[(0,d.jsx)("span",{className:b.title,children:"ID \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"}),(0,d.jsx)("span",{className:b.customInput,children:(0,d.jsx)("input",{className:b.input,type:"text",name:"toUser",id:"toUser",placeholder:"ID \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",required:!0,disabled:!l,value:null===m||void 0===m?void 0:m.toUser,onChange:x})})]}),(0,d.jsxs)("label",{htmlFor:"amount",className:b.labelAmount,children:[(0,d.jsx)("span",{className:b.title,children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c (".concat(l,")")}),(0,d.jsx)("span",{className:b.customInput,children:(0,d.jsx)("input",{className:b.input,type:"number",name:"amount",min:50,step:5,id:"amount",placeholder:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c",required:!0,disabled:!l,value:null===m||void 0===m?void 0:m.amount,onChange:x})})]}),(0,d.jsxs)("label",{htmlFor:"notes",className:b.labelNotes,children:[(0,d.jsx)("span",{className:b.title,children:"\u041f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043f\u0435\u0440\u0435\u043a\u0430\u0437\u0443"}),(0,d.jsx)("span",{className:b.customInput,children:(0,d.jsx)("textarea",{className:b.input,type:"text",name:"notes",id:"notes",placeholder:"\u041f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043f\u0435\u0440\u0435\u043a\u0430\u0437\u0443",rows:"2",required:!0,disabled:!l,value:null===m||void 0===m?void 0:m.notes,onChange:x})})]})]}),(0,d.jsxs)("div",{className:b.buttons,children:[(0,d.jsx)(f.Z,{disabled:!l,type:"submit",children:"\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438"}),(0,d.jsx)(f.Z,{disabled:!l,type:"reset",children:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"})]})]}),(0,d.jsx)(N.Z,{isLoading:i})]})},k="CreateTransferBlock_transferBlock__39y5g",T=function(){return(0,d.jsx)(_.Z,{title:"\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c \u0431\u043e\u043d\u0443\u0441\u0430\u043c\u0438",subTitle:"\u0414\u043b\u044f \u043f\u0435\u0440\u0435\u043a\u0430\u0437\u0443 \u0432\u0432\u0435\u0434\u0456\u0442\u044c ID \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0442\u0430 \u0441\u0443\u043c\u0443 \u0434\u043b\u044f \u0441\u043f\u0438\u0441\u0430\u043d\u043d\u044f \u0431\u043e\u043d\u0443\u0441\u0456\u0432",iconStartId:"icon-present",children:(0,d.jsx)("div",{className:k,children:(0,d.jsx)(g,{})})})},S={form:"CreateFeedbackForm_form__NKr26",buttons:"CreateFeedbackForm_buttons__v8WSG"},B=function(){return(0,d.jsxs)("form",{className:S.form,children:[(0,d.jsx)("div",{className:S.inputs}),(0,d.jsxs)("div",{className:S.buttons,children:[(0,d.jsx)(f.Z,{children:"\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438"}),(0,d.jsx)(f.Z,{children:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"})]})]})},Z="CreateFeedbackBlock_FeedbackBlock__V+ohj",I=function(){return(0,d.jsx)(_.Z,{title:"\u0417\u0432\u043e\u0440\u043e\u0442\u043d\u0456\u0439 \u0437\u0432'\u044f\u0437\u043e\u043a",subTitle:"\u041d\u0430\u0434\u0456\u0448\u043b\u0456\u0442\u044c \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0456 \u043d\u0430\u0448 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0437 \u0412\u0430\u043c\u0438 \u0437\u0432\u02bc\u044f\u0436\u0435\u0442\u044c\u0441\u044f",iconStartId:"icon-mail",children:(0,d.jsx)("div",{className:Z,children:(0,d.jsx)(B,{})})})},y=s(5861),F=s(4687),w=s.n(F),L=s(5562),A=s.n(L),D=s(9612),M="ButtonIcon_Button__7zIUY",U="ButtonIcon_iconSvg__Ha7ix",Q=function(e){e.children;var n=e.type,s=void 0===n?"button":n,a=e.disabled,t=void 0!==a&&a,i=e.onClick,r=void 0===i?null:i,c=e.iconId,o=void 0===c?"":c,u=e.style,h=void 0===u?{}:u;return(0,d.jsx)("button",{type:s,className:M,disabled:t,style:h,onClick:function(){r&&r()},children:(0,d.jsx)("svg",{className:U,children:(0,d.jsx)("use",{href:"".concat(l.Z,"#").concat(o)})})})},W=s(5985),R={InvitationGrid:"Invitation_InvitationGrid__S+8XV",text:"Invitation_text__SOHN0",refLink:"Invitation_refLink__APuNa",refLinkText:"Invitation_refLinkText__AZF7x",buttonsWrapper:"Invitation_buttonsWrapper__rryDK",QRCode:"Invitation_QRCode__Y-0iR",QRCodeBig:"Invitation_QRCodeBig__RZX5z"},q=function(){var e=(0,t.v9)(r.tT).user,n="https://sabationok.github.io/referral-app/signUp/".concat(e.id);function s(){return(s=(0,y.Z)(w().mark((function e(){var s;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s={title:"\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u043c",text:"\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u043c",url:n};try{navigator.share(s),console.log(navigator),(0,W.Am)("Link shared successfully")}catch(a){(0,W.Am)("Error: ".concat(a))}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:R.InvitationGrid,children:[(0,d.jsxs)("span",{className:R.text,children:["\u0414\u043b\u044f \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043f\u043e\u0434\u0456\u043b\u0456\u0442\u044c\u0441\u044f \u0456\u0437 \u043d\u0438\u043c \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u043c \u0430\u0431\u043e \u0434\u0430\u0439\u0442\u0435 \u0437\u0456\u0441\u043a\u0430\u043d\u0443\u0432\u0430\u0442\u0438 QR-code :"," "]}),(0,d.jsx)("div",{className:R.linkBox,children:(0,d.jsx)("a",{className:R.refLink,href:n,target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)("span",{className:R.refLinkText,children:n})})}),(0,d.jsxs)("div",{className:R.buttonsWrapper,children:[(0,d.jsx)(Q,{onClick:function(){navigator.clipboard.writeText(n),A().Notify.info("\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u0441\u043a\u043e\u043f\u0456\u0439\u043e\u0432\u0430\u043d\u043e \u0434\u043e \u0431\u0443\u0444\u0435\u0440\u0443 \u043e\u0431\u043c\u0456\u043d\u0443")},iconId:"icon-copy"}),(0,d.jsx)(Q,{onClick:function(){return s.apply(this,arguments)},iconId:"icon-send"})]}),(0,d.jsx)("div",{className:R.QRCode,children:(0,d.jsx)(D.Z,{modalContent:(0,d.jsx)("div",{className:R.QRCodeBig,children:(0,d.jsx)("img",{src:"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=".concat(n),alt:"myQrCode"})}),children:(0,d.jsx)("img",{src:"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=".concat(n),alt:"myQrCode"})})})]})})},Y=function(){return(0,d.jsx)(_.Z,{title:"\u0417\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043d\u044f",subTitle:"\u0412\u0430\u0448 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u0438\u0439 \u043b\u0456\u043d\u043a \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043d\u044f \u0442\u0430 QR-Code \u044f\u043a\u0438\u0439 \u043c\u043e\u0436\u043d\u0430 \u0432\u0456\u0434\u0441\u043a\u0430\u043d\u0443\u0432\u0430\u0442\u0438 ",iconStartId:"icon-share",children:(0,d.jsx)(q,{})})},z=function(){return(0,d.jsx)(_.Z,{title:"\u041f\u043e\u0434\u0430\u0442\u0438 \u0437\u0430\u044f\u0432\u043a\u0443 \u043d\u0430 \u0432\u0438\u043f\u043b\u0430\u0442\u0443",subTitle:"Will be in future ...",inWork:!0,iconStartId:"icon-cardOk"})},E=function(){return(0,d.jsx)(_.Z,{title:"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0440\u043e\u0444\u0456\u043b\u044e",subTitle:"Will be in future ...",iconStartId:"icon-settings",inWork:!0})},P=function(){return(0,d.jsx)(_.Z,{title:"\u041d\u0430\u0448\u0456 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0438",subTitle:"Will be in future ...",inWork:!0,iconStartId:"icon-partners"})},O=function(){return(0,d.jsx)(_.Z,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",subTitle:"Will be in future ...",inWork:!0,iconStartId:"icon-stat"})},G=s(5671),K=s(3144),V=s(136),H=s(4104),J=s(5717),X={cardContainer:"Cards_cardContainer__uPmGo",card:"Cards_card__U0zbs",cardActive:"Cards_cardActive__ttnxh",cardBlocked:"Cards_cardBlocked__tAzb3",totalBalance:"Cards_totalBalance__Y6GrZ",balanceStat:"Cards_balanceStat__h-KY1",wrapper:"Cards_wrapper__lCoA5",title:"Cards_title__aLnCY"},$=function(){var e=(0,t.v9)(r.sj);return(0,d.jsx)("div",{className:X.cardContainer,children:(0,d.jsx)("div",{className:X.cardActive,children:(0,d.jsxs)("div",{className:X.card,children:[(0,d.jsx)("span",{children:"Active Bonuses"}),(0,d.jsx)("div",{className:X.totalBalance,children:(0,d.jsx)("span",{children:e})})]})})})},ee=function(){var e=(0,t.v9)(r.fP);return(0,d.jsx)("div",{className:X.cardContainer,children:(0,d.jsx)("div",{className:X.cardBlocked,children:(0,d.jsxs)("div",{className:X.card,children:[(0,d.jsx)("span",{children:"Blocked Bonuses"}),(0,d.jsx)("div",{className:X.totalBalance,children:(0,d.jsx)("span",{children:(null===e||void 0===e?void 0:e.total)||"0.00"})}),(0,d.jsxs)("div",{className:X.balanceStat,children:[(0,d.jsxs)("div",{className:X.wrapper,children:[(0,d.jsx)("span",{className:X.title,children:"cashback"}),(0,d.jsx)("span",{className:X.value,children:(null===e||void 0===e?void 0:e.cashback)||"0.00"})]}),(0,d.jsxs)("div",{className:X.wrapper,children:[(0,d.jsx)("span",{className:X.title,children:"referral"}),(0,d.jsx)("span",{className:X.value,children:(null===e||void 0===e?void 0:e.referral)||"0.00"})]}),(0,d.jsxs)("div",{className:X.wrapper,children:[(0,d.jsx)("span",{className:X.title,children:"extra"}),(0,d.jsx)("span",{className:X.value,children:(null===e||void 0===e?void 0:e.extra)||"0.00"})]})]})]})})})},ne={transaction:"Transaction_transaction__8UAHx",income:"Transaction_income__Z1ExK",amount:"Transaction_amount__B3udl",expense:"Transaction_expense__8qn7T",col1:"Transaction_col1__ck7W8",col2:"Transaction_col2__+E2Eg",amountStatus:"Transaction_amountStatus__SFJbQ",note:"Transaction_note__guJhO",type:"Transaction_type__4aCCY",transactionStatus:"Transaction_transactionStatus__L5zNX"},se=function(e){var n=e.transaction,s=n.amount,a=void 0===s?null:s,t=n.amountStatus,i=void 0===t?null:t,r=n.notes,c=void 0===r?null:r,l=n.type,o=void 0===l?null:l,u=n.createdAt,h=void 0===u?null:u,m=[ne.transaction,a>0?ne.income:ne.expense].join(" ");function _(e){return e.toString().padStart(2,"0")}var x,j=new Date(h),v=_(j.getDate()),p=_(j.getMonth()+1),f=j.getFullYear().toString(),N=_(j.getHours()),C=_(j.getMinutes()),b=_(j.getSeconds());return(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)("span",{className:[ne.col1,ne.title].join(" "),children:"Date/Time"}),(0,d.jsxs)("span",{className:[ne.col2,ne.createdAt].join(" "),children:[(0,d.jsx)("span",{className:ne.date,children:"".concat(v,".").concat(p,".").concat(f)})," ",(0,d.jsx)("span",{className:ne.time,children:"".concat(N,":").concat(C,":").concat(b)})]}),(0,d.jsx)("span",{className:[ne.col1,ne.title].join(" "),children:"Amount"}),(0,d.jsxs)("span",{className:[ne.col2,ne.amount].join(" "),children:[(0,d.jsx)("span",{children:a>0?"+":"-"}),(0,d.jsx)("span",{children:(x=a,x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))})]}),(0,d.jsx)("span",{className:[ne.col1,ne.title].join(" "),children:"Status"}),(0,d.jsx)("span",{className:[ne.col2,ne.amountStatus].join(" "),children:i}),(0,d.jsx)("span",{className:[ne.col1,ne.title].join(" "),children:"Type"}),(0,d.jsx)("span",{className:[ne.col2,ne.type].join(" "),children:o}),(0,d.jsx)("span",{className:[ne.col1,ne.title].join(" "),children:"Note"}),(0,d.jsx)("span",{className:[ne.col2,ne.note].join(" "),title:c,children:c})]})},ae="TransactionsList_TransactionsList__zuz+y",te="TransactionsList_ListEmpty__fOd12",ie=function(e){e.filterParam;var n=(0,t.v9)(r.ig).transactions,s=n.length;return(0,d.jsx)("div",{className:ae,children:0!==s?n.map((function(e){return(0,d.jsx)(se,{transaction:e},e.id)})):(0,d.jsx)("span",{className:te,children:"List is empty"})})},re="BonusesCards_slickContainer__MKCYE",ce=function(e){(0,V.Z)(s,e);var n=(0,H.Z)(s);function s(e){var a;return(0,G.Z)(this,s),(a=n.call(this,e)).state={nav1:null,nav2:null},a}return(0,K.Z)(s,[{key:"componentDidMount",value:function(){this.setState({nav1:this.slider1,nav2:this.slider2})}},{key:"render",value:function(){var e=this;return(0,d.jsxs)("div",{className:re,children:[(0,d.jsxs)(J.Z,(0,p.Z)((0,p.Z)({asNavFor:this.state.nav2,ref:function(n){return e.slider1=n}},{dots:!0,infinite:!0,arrows:!1,slidesToShow:1,slidesToScroll:1}),{},{children:[(0,d.jsx)($,{}),(0,d.jsx)(ee,{})]})),(0,d.jsx)(ie,{})]})}}]),s}(a.Component),le="BonusesBlock_BonusesBlock__VTt8k",oe=function(){var e=(0,t.I0)();return(0,a.useEffect)((function(){e((0,C.St)()),e((0,C.RO)()),e((0,C.gt)())}),[e]),(0,d.jsx)(_.Z,{title:"\u0411\u0430\u043b\u0430\u043d\u0441",subTitle:"\u0422\u0443\u0442 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0454\u0442\u044c\u0441\u044f \u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441",iconStartId:"icon-wallet",children:(0,d.jsx)("div",{className:le,children:(0,d.jsx)(ce,{})})})},de="MainPage_MainPage__SiQ0F",ue="MainPage_section__0ysZJ",he="MainPage_sectionGrid__V143E",me=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:de,children:[(0,d.jsx)("section",{className:ue,children:(0,d.jsx)(oe,{})}),(0,d.jsxs)("section",{className:he,children:[(0,d.jsx)(Y,{}),(0,d.jsx)(T,{})]}),(0,d.jsx)("section",{className:ue,children:(0,d.jsx)(j,{})}),(0,d.jsxs)("section",{className:he,children:[(0,d.jsx)(z,{}),(0,d.jsx)(I,{})]}),(0,d.jsx)("section",{className:ue,children:(0,d.jsx)(O,{})}),(0,d.jsx)("section",{className:ue,children:(0,d.jsx)(P,{})}),(0,d.jsx)("section",{className:ue,children:(0,d.jsx)(E,{})})]})})}},5782:function(e,n,s){s.d(n,{Z:function(){return i}});s(2791);var a="ButtonText_Button__jyVlZ",t=s(184),i=function(e){var n=e.children,s=e.type,i=void 0===s?"button":s,r=e.disabled,c=void 0!==r&&r,l=e.onClick,o=void 0===l?null:l;return(0,t.jsx)("button",{type:i,className:a,disabled:c,onClick:function(){o&&o()},children:n})}},9612:function(e,n,s){var a=s(885),t=s(2791),i=s(431),r=s(184);n.Z=function(e){var n=e.children,s=e.className,c=e.modalContent,l=e.defaultBtn,o=void 0===l||l,d=(0,t.useState)(!1),u=(0,a.Z)(d,2),h=u[0],m=u[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("a",{className:s,onClick:function(e){e.preventDefault(),m(!h)},href:"/",children:n}),h&&(0,r.jsx)(i.ZP,{handleToggle:function(e){m(!h)},defaultBtn:o,children:c})]})}}}]);
//# sourceMappingURL=764.bc93589e.chunk.js.map