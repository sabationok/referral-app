"use strict";(self.webpackChunkreferral_app=self.webpackChunkreferral_app||[]).push([[646],{8646:function(e,n,s){s.r(n),s.d(n,{default:function(){return Ne}});var t=s(2791),a=s(9434),i=s(7370),r=s(8031),c=s(885),l=s(2776),o={childrenContainer:"Children_childrenContainer__jOzce",ChildrenBtn:"Children_ChildrenBtn__YDBXq",isShow:"Children_isShow__uJVPt",iconSvg:"Children_iconSvg__CRe9D",icon:"Children_icon__5jmum",info:"Children_info__b5UMM",level:"Children_level__QYMbZ",id:"Children_id__uQqSm",phone:"Children_phone__CtfBJ"},d=s(184),u=function(e){var n=e.info,s=e.level,a=(0,t.useState)(!1),i=(0,c.Z)(a,2),r=i[0],u=i[1],m=n.children.length,h=r&&m,x=s+1,j=[o.childrenContainer,r&&""].join(" "),v=[o.ChildrenBtn,r&&o.isShow].join(" ");return(0,d.jsxs)("div",{className:j,children:[(0,d.jsxs)("button",{className:v,type:"button",disabled:!m,onClick:function(){u(!r)},children:[(0,d.jsx)("span",{className:o.level,children:s}),(0,d.jsxs)("div",{className:o.info,children:[(0,d.jsxs)("span",{className:o.name,children:["\u0406\u043c'\u044f: ",n.name]}),(0,d.jsx)("span",{className:o.id,children:"ID: ".concat(n.id)}),(0,d.jsxs)("span",{className:o.phone,children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",n.phone]}),(0,d.jsx)("span",{className:o.childrenCount,children:"\u0417\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043e: ".concat(m)})]}),(0,d.jsx)("span",{className:o.icon,children:(0,d.jsx)("svg",{className:o.iconSvg,children:(0,d.jsx)("use",{href:"".concat(l.Z,"#icon-select-arrow")})})})]}),h&&(0,d.jsx)("div",{className:o.listContainer,children:(0,d.jsx)(_,{arr:n.children,level:x})})]})},m="ChildrensList_ChildrensList__sD1Hk",_=function(e){var n=e.arr,s=e.level;return s>5?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)("div",{className:m,children:n.map((function(e){return(0,d.jsx)(u,{info:e,level:s},e.id)}))})},h=s(6650),x="ChildrensBlock_childrensBlock__CKl2a",j=function(){var e=(0,a.I0)(),n=(0,a.v9)(r.Xq).childrensList;return(0,t.useEffect)((function(){e((0,i.A)())}),[e]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(h.Z,{title:"\u0420\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0430 \u043c\u0435\u0440\u0435\u0436\u0430",subTitle:"\u0412\u0430\u0448\u0430 \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0430 \u043c\u0435\u0440\u0435\u0436\u0430",iconStartId:"icon-persons",children:(0,d.jsx)("div",{className:x,children:(0,d.jsx)(_,{arr:n,level:1})})})})},v=s(4942),p=s(1413),f=s(5782),N=s(6189),C=s(1101),b={notActiveForm:"CreateTransferForm_notActiveForm__pjl1S",form:"CreateTransferForm_form__4IrO8",inputs:"CreateTransferForm_inputs__UA8Dk",labelId:"CreateTransferForm_labelId__0v63Y",labelAmount:"CreateTransferForm_labelAmount__w7bIi",labelNotes:"CreateTransferForm_labelNotes__Mayso",title:"CreateTransferForm_title__enMM4",custominput:"CreateTransferForm_custominput__BciuO",input:"CreateTransferForm_input__dLYME",buttons:"CreateTransferForm_buttons__4qksh"},g=function(){var e=(0,a.I0)(),n=(0,a.v9)(r.tT).user,s=(0,a.v9)(r.ig),i=s.isLoading,l=s.bonuses.activeBonuses,o={fromUser:n.id,amount:"",notes:"",toUser:""},u=(0,t.useState)(o),m=(0,c.Z)(u,2),_=m[0],h=m[1],x=l?b.form:b.notActiveForm;function j(e){var n=e.target,s=n.name,t=n.value;h((0,p.Z)((0,p.Z)({},_),{},(0,v.Z)({},s,t)))}return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("form",{className:x,onSubmit:function(s){s.preventDefault();var t={fromUser:Number(n.id),amount:Number(_.amount),notes:_.notes,toUser:Number(_.toUser)};e((0,C.KW)(t)),h(o)},onReset:function(e){e.preventDefault(),h(o)},children:[(0,d.jsxs)("div",{className:b.inputs,children:[(0,d.jsxs)("label",{htmlFor:"toUser",className:b.labelId,children:[(0,d.jsx)("span",{className:b.title,children:"ID \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"}),(0,d.jsx)("span",{className:b.customInput,children:(0,d.jsx)("input",{className:b.input,type:"text",name:"toUser",id:"toUser",placeholder:"ID \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",required:!0,value:null===_||void 0===_?void 0:_.toUser,onChange:j})})]}),(0,d.jsxs)("label",{htmlFor:"amount",className:b.labelAmount,children:[(0,d.jsx)("span",{className:b.title,children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c (".concat(l,")")}),(0,d.jsx)("span",{className:b.customInput,children:(0,d.jsx)("input",{className:b.input,type:"number",name:"amount",min:5,id:"amount",placeholder:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c",required:!0,value:null===_||void 0===_?void 0:_.amount,onChange:j})})]}),(0,d.jsxs)("label",{htmlFor:"notes",className:b.labelNotes,children:[(0,d.jsx)("span",{className:b.title,children:"\u041f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043f\u0435\u0440\u0435\u043a\u0430\u0437\u0443"}),(0,d.jsx)("span",{className:b.customInput,children:(0,d.jsx)("textarea",{className:b.input,type:"text",name:"notes",id:"notes",placeholder:"\u041f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043f\u0435\u0440\u0435\u043a\u0430\u0437\u0443",rows:"2",required:!0,value:null===_||void 0===_?void 0:_.notes,onChange:j})})]})]}),(0,d.jsxs)("div",{className:b.buttons,children:[(0,d.jsx)(f.Z,{type:"submit",children:"\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438"}),(0,d.jsx)(f.Z,{type:"reset",children:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"})]})]}),(0,d.jsx)(N.Z,{isLoading:i})]})},k="CreateTransferBlock_transferBlock__39y5g",S=function(){return(0,d.jsx)(h.Z,{title:"\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c \u0431\u043e\u043d\u0443\u0441\u0430\u043c\u0438",subTitle:"\u0414\u043b\u044f \u043f\u0435\u0440\u0435\u043a\u0430\u0437\u0443 \u0432\u0432\u0435\u0434\u0456\u0442\u044c ID \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0442\u0430 \u0441\u0443\u043c\u0443 \u0434\u043b\u044f \u0441\u043f\u0438\u0441\u0430\u043d\u043d\u044f \u0431\u043e\u043d\u0443\u0441\u0456\u0432",iconStartId:"icon-present",children:(0,d.jsx)("div",{className:k,children:(0,d.jsx)(g,{})})})},T={form:"CreateFeedbackForm_form__NKr26",buttons:"CreateFeedbackForm_buttons__v8WSG"},B=function(){return(0,d.jsxs)("form",{className:T.form,children:[(0,d.jsx)("div",{className:T.inputs}),(0,d.jsxs)("div",{className:T.buttons,children:[(0,d.jsx)(f.Z,{children:"\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438"}),(0,d.jsx)(f.Z,{children:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"})]})]})},Z="CreateFeedbackBlock_FeedbackBlock__V+ohj",I=function(){return(0,d.jsx)(h.Z,{title:"\u0417\u0432\u043e\u0440\u043e\u0442\u043d\u0456\u0439 \u0437\u0432'\u044f\u0437\u043e\u043a",subTitle:"\u041d\u0430\u0434\u0456\u0448\u043b\u0456\u0442\u044c \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0456 \u043d\u0430\u0448 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0437 \u0412\u0430\u043c\u0438 \u0437\u0432\u02bc\u044f\u0436\u0435\u0442\u044c\u0441\u044f",iconStartId:"icon-mail",children:(0,d.jsx)("div",{className:Z,children:(0,d.jsx)(B,{})})})},y=s(5861),F=s(4687),A=s.n(F),w=s(9612),D="ButtonIcon_Button__7zIUY",L="ButtonIcon_iconSvg__Ha7ix",M=function(e){e.children;var n=e.type,s=void 0===n?"button":n,t=e.disabled,a=void 0!==t&&t,i=e.onClick,r=void 0===i?null:i,c=e.iconId,o=void 0===c?"":c,u=e.style,m=void 0===u?{}:u;return(0,d.jsx)("button",{type:s,className:D,disabled:a,style:m,onClick:function(){r&&r()},children:(0,d.jsx)("svg",{className:L,children:(0,d.jsx)("use",{href:"".concat(l.Z,"#").concat(o)})})})},U="MyQrCode_qrCodeBox__SrGNN",z=function(e){var n=e.text,s=e.size,t=e.padding,a={width:"".concat(s+10,"px"),height:"".concat(s+10,"px"),padding:t};return(0,d.jsx)("div",{className:U,style:a,children:(0,d.jsx)("img",{src:"https://api.qrserver.com/v1/create-qr-code/?size=".concat(s,"x").concat(s,"&data=").concat(n),alt:"myQrCode"})})},Y=s(5985),q="Invitation_InvitationGrid__S+8XV",W="Invitation_text__SOHN0",E="Invitation_linkBox__oYz4q",P="Invitation_refLink__APuNa",Q="Invitation_refLinkText__AZF7x",R="Invitation_QRCode__Y-0iR",O="Invitation_QRCodeBig__RZX5z",K="Invitation_buttonsWrapper__rryDK",G=function(){var e=(0,a.v9)(r.tT).user,n="".concat(window.location.origin,"/referral-app/signUp/").concat(e.id);function s(){navigator.clipboard.writeText(n),Y.Am.info("\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u0441\u043a\u043e\u043f\u0456\u0439\u043e\u0432\u0430\u043d\u043e \u0434\u043e \u0431\u0443\u0444\u0435\u0440\u0443 \u043e\u0431\u043c\u0456\u043d\u0443")}function t(){return(t=(0,y.Z)(A().mark((function e(){var s,t;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={title:"\u041f\u0440\u0438\u0432\u0456\u0442. \u0417\u0430\u043f\u0440\u043e\u0448\u0443\u044e \u0442\u0435\u0431\u0435 \u0443 \u043d\u043e\u0432\u0438\u0439 \u043a\u0435\u0448\u0431\u0435\u043a \u0441\u0435\u0440\u0432\u0456\u0441. \u041a\u0443\u043f\u0443\u0439 \u0442\u043e\u0432\u0430\u0440\u0438 \u0443 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0456\u0432 \u0441\u0435\u0440\u0432\u0456\u0441\u0443 \u0442\u0430 \u0437\u0431\u0438\u0440\u0430\u0439 \u043a\u0435\u0448\u0431\u0435\u043a\u0438. \u0422\u0430\u043a\u043e\u0436 \u0442\u0438 \u043c\u043e\u0436\u0435\u0448 \u0437\u0430\u043f\u0440\u043e\u0448\u0443\u0432\u0430\u0442\u0438 \u0434\u0440\u0443\u0437\u0456\u0432 \u0442\u0430 \u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u0446\u0435 \u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0443 \u0432\u0438\u043d\u0430\u0433\u043e\u0440\u043e\u0434\u0443. \u041d\u0435 \u0433\u0430\u0439 \u0447\u0430\u0441\u0443.",text:"\u041f\u0440\u0438\u0432\u0456\u0442. \u0417\u0430\u043f\u0440\u043e\u0448\u0443\u044e \u0442\u0435\u0431\u0435 \u0443 \u043d\u043e\u0432\u0438\u0439 \u043a\u0435\u0448\u0431\u0435\u043a \u0441\u0435\u0440\u0432\u0456\u0441. \u041a\u0443\u043f\u0443\u0439 \u0442\u043e\u0432\u0430\u0440\u0438 \u0443 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0456\u0432 \u0441\u0435\u0440\u0432\u0456\u0441\u0443 \u0442\u0430 \u0437\u0431\u0438\u0440\u0430\u0439 \u043a\u0435\u0448\u0431\u0435\u043a\u0438. \u0422\u0430\u043a\u043e\u0436 \u0442\u0438 \u043c\u043e\u0436\u0435\u0448 \u0437\u0430\u043f\u0440\u043e\u0448\u0443\u0432\u0430\u0442\u0438 \u0434\u0440\u0443\u0437\u0456\u0432 \u0442\u0430 \u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u0446\u0435 \u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0443 \u0432\u0438\u043d\u0430\u0433\u043e\u0440\u043e\u0434\u0443. \u041d\u0435 \u0433\u0430\u0439 \u0447\u0430\u0441\u0443.",url:n},e.prev=1,e.next=4,navigator.getBattery();case 4:t=e.sent,Y.Am.success("Battery level ".concat(100*t.level,"%")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Y.Am.error("Error: ".concat(e.t0));case 11:try{navigator.share(s),Y.Am.success("Link shared successfully")}catch(a){Y.Am.error("Error: ".concat(a))}case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:q,children:[(0,d.jsxs)("span",{className:W,children:["\u0414\u043b\u044f \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043f\u043e\u0434\u0456\u043b\u0456\u0442\u044c\u0441\u044f \u0456\u0437 \u043d\u0438\u043c \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u043c \u0430\u0431\u043e \u0434\u0430\u0439\u0442\u0435 \u0437\u0456\u0441\u043a\u0430\u043d\u0443\u0432\u0430\u0442\u0438 QR-code :"," "]}),(0,d.jsx)("div",{className:E,children:(0,d.jsx)("a",{className:P,href:n,target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)("span",{className:Q,children:n})})}),(0,d.jsx)("div",{className:R,children:(0,d.jsx)(z,{text:n,size:80})}),(0,d.jsxs)("div",{className:K,children:[(0,d.jsx)(w.Z,{modalContent:(0,d.jsx)("div",{className:O,children:(0,d.jsx)(z,{text:n,size:150})}),children:(0,d.jsx)(M,{onClick:s,iconId:"icon-zoomPlus"})}),(0,d.jsx)(M,{onClick:s,iconId:"icon-copy"}),(0,d.jsx)(M,{onClick:function(){return t.apply(this,arguments)},iconId:"icon-send"})]})]})})},V=function(){return(0,d.jsx)(h.Z,{title:"\u0417\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043d\u044f",subTitle:"\u0412\u0430\u0448 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u0438\u0439 \u043b\u0456\u043d\u043a \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043d\u044f \u0442\u0430 QR-Code \u044f\u043a\u0438\u0439 \u043c\u043e\u0436\u043d\u0430 \u0432\u0456\u0434\u0441\u043a\u0430\u043d\u0443\u0432\u0430\u0442\u0438 ",iconStartId:"icon-share",children:(0,d.jsx)(G,{})})},H=function(){return(0,d.jsx)(h.Z,{title:"\u041f\u043e\u0434\u0430\u0442\u0438 \u0437\u0430\u044f\u0432\u043a\u0443 \u043d\u0430 \u0432\u0438\u043f\u043b\u0430\u0442\u0443",subTitle:"Will be in future ...",inWork:!0,iconStartId:"icon-cardOk"})},J=function(){return(0,d.jsx)(h.Z,{title:"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0440\u043e\u0444\u0456\u043b\u044e",subTitle:"Will be in future ...",iconStartId:"icon-settings",inWork:!0})},X=function(){return(0,d.jsx)(h.Z,{title:"\u041d\u0430\u0448\u0456 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0438",subTitle:"Will be in future ...",inWork:!0,iconStartId:"icon-partners"})},$=function(){return(0,d.jsx)(h.Z,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",subTitle:"Will be in future ...",inWork:!0,iconStartId:"icon-stat"})},ee=s(5671),ne=s(3144),se=s(136),te=s(4104),ae=s(5717),ie={cardContainer:"Cards_cardContainer__uPmGo",card:"Cards_card__U0zbs",cardActive:"Cards_cardActive__ttnxh",cardBlocked:"Cards_cardBlocked__tAzb3",totalBalance:"Cards_totalBalance__Y6GrZ",balanceStat:"Cards_balanceStat__h-KY1",wrapper:"Cards_wrapper__lCoA5",title:"Cards_title__aLnCY"},re=function(){var e=(0,a.v9)(r.sj);return(0,d.jsx)("div",{className:ie.cardContainer,children:(0,d.jsx)("div",{className:ie.cardActive,children:(0,d.jsxs)("div",{className:ie.card,children:[(0,d.jsx)("span",{children:"Active Bonuses"}),(0,d.jsx)("div",{className:ie.totalBalance,children:(0,d.jsx)("span",{children:e})})]})})})},ce=function(){var e=(0,a.v9)(r.fP);return(0,d.jsx)("div",{className:ie.cardContainer,children:(0,d.jsx)("div",{className:ie.cardBlocked,children:(0,d.jsxs)("div",{className:ie.card,children:[(0,d.jsx)("span",{children:"Blocked Bonuses"}),(0,d.jsx)("div",{className:ie.totalBalance,children:(0,d.jsx)("span",{children:(null===e||void 0===e?void 0:e.total)||"0.00"})}),(0,d.jsxs)("div",{className:ie.balanceStat,children:[(0,d.jsxs)("div",{className:ie.wrapper,children:[(0,d.jsx)("span",{className:ie.title,children:"cashback"}),(0,d.jsx)("span",{className:ie.value,children:(null===e||void 0===e?void 0:e.cashback)||"0.00"})]}),(0,d.jsxs)("div",{className:ie.wrapper,children:[(0,d.jsx)("span",{className:ie.title,children:"referral"}),(0,d.jsx)("span",{className:ie.value,children:(null===e||void 0===e?void 0:e.referral)||"0.00"})]}),(0,d.jsxs)("div",{className:ie.wrapper,children:[(0,d.jsx)("span",{className:ie.title,children:"extra"}),(0,d.jsx)("span",{className:ie.value,children:(null===e||void 0===e?void 0:e.extra)||"0.00"})]})]})]})})})},le={transaction:"Transaction_transaction__8UAHx",income:"Transaction_income__Z1ExK",amount:"Transaction_amount__B3udl",expense:"Transaction_expense__8qn7T",col1:"Transaction_col1__ck7W8",col2:"Transaction_col2__+E2Eg",amountStatus:"Transaction_amountStatus__SFJbQ",note:"Transaction_note__guJhO",type:"Transaction_type__4aCCY",transactionStatus:"Transaction_transactionStatus__L5zNX"},oe=function(e){var n=e.transaction,s=n.amount,t=void 0===s?null:s,a=n.amountStatus,i=void 0===a?null:a,r=n.notes,c=void 0===r?null:r,l=n.type,o=void 0===l?null:l,u=n.createdAt,m=void 0===u?null:u,_=[le.transaction,t>0?le.income:le.expense].join(" ");function h(e){return e.toString().padStart(2,"0")}var x,j=new Date(m),v=h(j.getDate()),p=h(j.getMonth()+1),f=j.getFullYear().toString(),N=h(j.getHours()),C=h(j.getMinutes()),b=h(j.getSeconds());return(0,d.jsxs)("div",{className:_,children:[(0,d.jsx)("span",{className:[le.col1,le.title].join(" "),children:"Date/Time"}),(0,d.jsxs)("span",{className:[le.col2,le.createdAt].join(" "),children:[(0,d.jsx)("span",{className:le.date,children:"".concat(v,".").concat(p,".").concat(f)})," ",(0,d.jsx)("span",{className:le.time,children:"".concat(N,":").concat(C,":").concat(b)})]}),(0,d.jsx)("span",{className:[le.col1,le.title].join(" "),children:"Amount"}),(0,d.jsxs)("span",{className:[le.col2,le.amount].join(" "),children:[(0,d.jsx)("span",{children:t>0?"+":"-"}),(0,d.jsx)("span",{children:(x=t,x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))})]}),(0,d.jsx)("span",{className:[le.col1,le.title].join(" "),children:"Status"}),(0,d.jsx)("span",{className:[le.col2,le.amountStatus].join(" "),children:i}),(0,d.jsx)("span",{className:[le.col1,le.title].join(" "),children:"Type"}),(0,d.jsx)("span",{className:[le.col2,le.type].join(" "),children:o}),(0,d.jsx)("span",{className:[le.col1,le.title].join(" "),children:"Note"}),(0,d.jsx)("span",{className:[le.col2,le.note].join(" "),title:c,children:c})]})},de="TransactionsList_TransactionsList__zuz+y",ue="TransactionsList_ListEmpty__fOd12",me=function(e){e.filterParam;var n=(0,a.v9)(r.ig).transactions,s=n.length;return(0,d.jsx)("div",{className:de,children:0!==s?n.map((function(e){return(0,d.jsx)(oe,{transaction:e},e.id)})):(0,d.jsx)("span",{className:ue,children:"List is empty"})})},_e="BonusesCards_slickContainer__MKCYE",he=function(e){(0,se.Z)(s,e);var n=(0,te.Z)(s);function s(e){var t;return(0,ee.Z)(this,s),(t=n.call(this,e)).state={nav1:null,nav2:null},t}return(0,ne.Z)(s,[{key:"componentDidMount",value:function(){this.setState({nav1:this.slider1,nav2:this.slider2})}},{key:"render",value:function(){var e=this;return(0,d.jsxs)("div",{className:_e,children:[(0,d.jsxs)(ae.Z,(0,p.Z)((0,p.Z)({asNavFor:this.state.nav2,ref:function(n){return e.slider1=n}},{dots:!0,infinite:!0,arrows:!1,slidesToShow:1,slidesToScroll:1}),{},{children:[(0,d.jsx)(re,{}),(0,d.jsx)(ce,{})]})),(0,d.jsx)(me,{})]})}}]),s}(t.Component),xe="BonusesBlock_BonusesBlock__VTt8k",je=function(){var e=(0,a.I0)();return(0,t.useEffect)((function(){e((0,C.St)()),e((0,C.RO)()),e((0,C.gt)())}),[e]),(0,d.jsx)(h.Z,{title:"\u0411\u0430\u043b\u0430\u043d\u0441",subTitle:"\u0422\u0443\u0442 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0454\u0442\u044c\u0441\u044f \u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441",iconStartId:"icon-wallet",children:(0,d.jsx)("div",{className:xe,children:(0,d.jsx)(he,{})})})},ve="MainPage_MainPage__SiQ0F",pe="MainPage_section__0ysZJ",fe="MainPage_sectionGrid__V143E",Ne=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:ve,children:[(0,d.jsx)("section",{className:pe,children:(0,d.jsx)(je,{})}),(0,d.jsxs)("section",{className:fe,children:[(0,d.jsx)(V,{}),(0,d.jsx)(S,{})]}),(0,d.jsx)("section",{className:pe,children:(0,d.jsx)(j,{})}),(0,d.jsxs)("section",{className:fe,children:[(0,d.jsx)(H,{}),(0,d.jsx)(I,{})]}),(0,d.jsx)("section",{className:pe,children:(0,d.jsx)($,{})}),(0,d.jsx)("section",{className:pe,children:(0,d.jsx)(X,{})}),(0,d.jsx)("section",{className:pe,children:(0,d.jsx)(J,{})})]})})}},5782:function(e,n,s){s.d(n,{Z:function(){return i}});s(2791);var t="ButtonText_Button__jyVlZ",a=s(184),i=function(e){var n=e.children,s=e.type,i=void 0===s?"button":s,r=e.disabled,c=void 0!==r&&r,l=e.onClick,o=void 0===l?null:l;return(0,a.jsx)("button",{type:i,className:t,disabled:c,onClick:function(){o&&o()},children:n})}},9612:function(e,n,s){var t=s(885),a=s(2791),i=s(431),r=s(184);n.Z=function(e){var n=e.children,s=e.className,c=e.modalContent,l=e.defaultBtn,o=void 0===l||l,d=(0,a.useState)(!1),u=(0,t.Z)(d,2),m=u[0],_=u[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("a",{className:s,onClick:function(e){e.preventDefault(),_(!m)},href:"/",children:n}),m&&(0,r.jsx)(i.ZP,{handleToggle:function(e){_(!m)},defaultBtn:o,children:c})]})}}}]);
//# sourceMappingURL=646.04238f97.chunk.js.map