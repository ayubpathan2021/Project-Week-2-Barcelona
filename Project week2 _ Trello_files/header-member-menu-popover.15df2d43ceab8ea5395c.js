(window.webpackJsonp=window.webpackJsonp||[]).push([[79,24],{"./app/gamma/src/components/popovers/header-member-menu/index.tsx":function(e,n,a){"use strict";a.r(n);var t=a("./packages/browser/index.ts"),s=a("./node_modules/js-cookie/src/js.cookie.js"),o=a.n(s),l=a("./app/src/components/PopoverMenu/index.ts"),c=a("./node_modules/react/index.js"),i=a.n(c),r=a("./node_modules/react-redux/es/index.js"),d=a("./app/gamma/src/selectors/members.ts"),u=a("./app/gamma/src/selectors/teams.ts");const p=e=>(e=>{var n,a;return(null!==(n=null===(a=Object(d.a)(e))||void 0===a?void 0:a.products)&&void 0!==n?n:[]).length>0})(e)||(e=>!!Object(u.c)(e).some((e=>{var n;return(null!==(n=e.products)&&void 0!==n?n:[]).length>0})))(e);var m=a("./packages/test-ids/index.ts"),b=a("./packages/i18n/index.ts"),g=a("./app/src/components/MemberAvatar/index.ts"),h=a("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=a.n(h),f=a("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./app/gamma/src/components/popovers/account-switcher/account-item.less"),x={insert:"head",singleton:!1},j=(v()(f.a,x),f.a.locals||{});const E=({email:e,avatarSource:n,name:a,username:t,initials:s,avatars:o})=>i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:j.accountItem},i.a.createElement("div",{className:j.accountAvatar},i.a.createElement(g.b,{fullName:a,username:t,initials:s,avatars:o,avatarSource:n,size:40})),i.a.createElement("div",null,i.a.createElement("div",{className:j.accountName},a),i.a.createElement("span",{className:j.accountEmail},e))));var _=a("./packages/storage/index.ts"),y=a("./packages/config/index.ts"),k=a("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./app/gamma/src/components/popovers/account-switcher/account-switcher.less"),w={insert:"head",singleton:!1},A=(v()(k.a,w),k.a.locals||{}),M=a("./packages/atlassian-analytics/index.ts");const O=Object(b.forTemplate)("header_account_switcher"),C=new URLSearchParams({prompt:"select_account",continue:"".concat(y.siteDomain,"/auth/atlassian/callback"),application:"trello"}),S="".concat(y.identityBaseUrl,"/login?").concat(C.toString());class T extends i.a.Component{render(){var e;const{onClickAddAccount:n,currentAccount:a,hasAddedAccount:t,hasAaAccount:s}=this.props,{name:o,email:c,id:r,avatarSource:d,initials:u,username:p,isAaMastered:m,oneTimeMessagesDismissed:b=[]}=a||{},g=null!==(e=null==a?void 0:a.avatars)&&void 0!==e?e:void 0,h=null==b?void 0:b.includes("headerMemberMenuAddAccount");return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{name:o,email:c,id:r,avatarSource:d,avatars:g,initials:u,username:p}),(m||s)&&t&&i.a.createElement(l.b,{onClick:e=>{M.Analytics.sendUIEvent({action:"clicked",actionSubject:"link",source:"memberMenuInlineDialog",actionSubjectId:"settingsSwitchAccountsLink"}),window.location.href=S},title:O("switch-account")}),i.a.createElement(l.b,{onClick:n,appendSeparator:!0},i.a.createElement("span",{className:h?"":A.addAccountNew,"data-new-string":O("new")},O("add-another-account"))))}}var F=Object(r.c)((e=>({me:Object(d.a)(e)})))((({onClickAddAccount:e,me:n,hasAaAccount:a})=>{const[t,s]=Object(c.useState)(!1);return Object(c.useEffect)((()=>{s("true"===_.TrelloStorage.get("accountSwitcherAccountAdded"))}),[]),i.a.createElement(T,{currentAccount:n,onClickAddAccount:e,hasAddedAccount:t,hasAaAccount:a})})),I=a("./packages/feature-flag-client/index.ts");const N=Object(b.forTemplate)("header_member_menu");n.default=Object(r.c)((e=>{const n=Object(d.a)(e),a=p(e),s=I.featureFlagClient.get("nusku.repackaging-gtm.gold-sunset",!1);return{canLogout:!!(n&&n.loginTypes&&n.loginTypes.length),me:n,showBillingUrl:!Object(t.dontUpsell)()&&(s?Boolean(null==n?void 0:n.paidAccount):a)}}))((({canLogout:e,me:n,useAccountSwitcher:a,showBillingUrl:s,onClickShortcuts:r,onClickMenuLink:d,onClickAddAccount:u,hasAaAccount:p})=>{const b=Object(c.useRef)(null);return n?i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{method:"post",action:"/logout",style:{display:"none"},ref:b},i.a.createElement("input",{name:"dsc",defaultValue:o.a.get("dsc")})),i.a.createElement(l.a,null,a&&i.a.createElement(F,{onClickAddAccount:u,hasAaAccount:p}),i.a.createElement(i.a.Fragment,null,i.a.createElement(l.c,{href:"/".concat(n.username,"/profile"),title:N("profile-and-visibility"),testId:m.HeaderTestIds.MemberMenuProfile,onClick:d}),i.a.createElement(l.c,{href:"/".concat(n.username,"/activity"),title:N("activity"),onClick:d}),i.a.createElement(l.c,{className:"js-cards",href:"/".concat(n.username,"/cards"),title:N("cards"),testId:m.HeaderTestIds.MemberMenuCards,onClick:d}),i.a.createElement(l.c,{href:"/".concat(n.username,"/account"),title:N("settings"),appendSeparator:!s,testId:m.HeaderTestIds.MemberMenuSettings,onClick:d}),s&&i.a.createElement(l.c,{href:"/".concat(n.username,"/billing"),title:N("billing"),appendSeparator:!0,onClick:d})),i.a.createElement(l.c,{appendSeparator:Object(t.isTouch)()&&n.isAaMastered,title:N("help"),href:"/contact?url=".concat(encodeURIComponent(location.href)),target:"_blank"}),!Object(t.isTouch)()&&i.a.createElement(l.b,{title:N("shortcuts"),onClick:r,appendSeparator:n.isAaMastered}),e&&i.a.createElement(l.b,{title:N("log-out"),onClick:()=>{var e;null===(e=b.current)||void 0===e||e.submit()},testId:m.HeaderTestIds.MemberMenuLogout}))):null}))},"./app/src/components/PopoverMenu/index.ts":function(e,n,a){"use strict";a.d(n,"a",(function(){return E})),a.d(n,"b",(function(){return j})),a.d(n,"c",(function(){return x}));var t=a("./node_modules/classnames/index.js"),s=a.n(t),o=a("./app/src/forwardRefComponent.ts"),l=a("./app/src/components/RouterLink/RouterLink.tsx"),c=a("./node_modules/react/index.js"),i=a.n(c),r=a("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=a.n(r),u=a("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./app/src/components/PopoverMenu/PopoverMenu.less"),p={insert:"head",singleton:!1},m=(d()(u.a,p),u.a.locals||{}),b=a("./packages/a11y/index.ts");function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function h(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const v=({children:e,description:n,rawDescription:a,title:t,icon:o})=>i.a.createElement(i.a.Fragment,null,o&&i.a.cloneElement(o,{size:"small"}),i.a.createElement("span",{className:s()(m.title,n&&m.withoutMargins)},t||e),(n||a)&&i.a.createElement("p",{className:m.description},n||a)),f=({appendSeparator:e,children:n})=>i.a.createElement("li",{className:s()(m.item,e&&m.withSeparator)},n),x=e=>{let{appendSeparator:n,testId:a,href:t,target:o,className:c,onClick:r}=e,d=h(e,["appendSeparator","testId","href","target","className","onClick"]);const[u,p]=Object(b.useFocusRing)();return i.a.createElement(f,{appendSeparator:n},i.a.createElement(l.b,g({className:s()(m.link,c,u&&m.linkFocusRing),href:t,testId:a,onClick:r,target:o},p),i.a.createElement(v,d)))},j=Object(o.a)("PopoverMenuButton",((e,n)=>{let{appendSeparator:a,onClick:t,className:o,disabled:l,testId:c}=e,r=h(e,["appendSeparator","onClick","className","disabled","testId"]);const[d,u]=Object(b.useFocusRing)();return i.a.createElement(f,{appendSeparator:a},i.a.createElement("button",g({className:s()(m.link,d&&m.linkFocusRing,o),disabled:l,onClick:t,"data-test-id":c,ref:n},u),i.a.createElement(v,r)))})),E=({className:e,children:n,testId:a})=>i.a.createElement("nav",{className:e},i.a.createElement("ul",{"data-test-id":a},n))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./app/gamma/src/components/popovers/account-switcher/account-item.less":function(e,n,a){"use strict";var t=a("./node_modules/css-loader/dist/runtime/api.js"),s=a.n(t)()(!1);s.push([e.i,"._1mpHKZNFQoLi38 {\n  padding: 4px 8px 4px 12px;\n}\n._2k76e8ni08E8cj {\n  display: flex;\n}\n._3_9rx_DdTAFtig {\n  margin-top: 4px;\n  max-width: 230px;\n}\n.mEyEHQTeZbhjil {\n  font-size: 9pt;\n  color: #B3BAC5;\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 230px;\n}\n",""]),s.locals={accountAvatar:"_1mpHKZNFQoLi38",accountItem:"_2k76e8ni08E8cj",accountName:"_3_9rx_DdTAFtig",accountEmail:"mEyEHQTeZbhjil"},n.a=s},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./app/gamma/src/components/popovers/account-switcher/account-switcher.less":function(e,n,a){"use strict";var t=a("./node_modules/css-loader/dist/runtime/api.js"),s=a.n(t)()(!1);s.push([e.i,"._2FqRnjBMc6KDaX::after {\n  background-color: #D6ECD2;\n  color: #49852E;\n  content: attr(data-new-string);\n  margin-left: 8px;\n  border-radius: 15px;\n  padding: 2px 8px 2px 8px;\n}\n",""]),s.locals={addAccountNew:"_2FqRnjBMc6KDaX"},n.a=s},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./app/src/components/PopoverMenu/PopoverMenu.less":function(e,n,a){"use strict";var t=a("./node_modules/css-loader/dist/runtime/api.js"),s=a.n(t)()(!1);s.push([e.i,'._3Qtx4lodxp9J0E {\n  background-color: transparent;\n  border: none;\n  background: #FFFFFF;\n  border-radius: 0;\n  box-shadow: none;\n  color: #172B4D;\n  display: block;\n  height: 100%;\n  padding: 6px 12px;\n  text-align: left;\n  text-decoration: none;\n  width: 100%;\n  transition: none;\n  margin: 0;\n  outline: 0;\n}\n._3Qtx4lodxp9J0E:hover {\n  background-color: transparent;\n  border: none;\n  box-shadow: none;\n  background: rgba(9, 30, 66, 0.04);\n}\n._3Qtx4lodxp9J0E:active {\n  background-color: transparent;\n  border: none;\n  box-shadow: none;\n  background: #E4F0F6;\n}\n._3Qtx4lodxp9J0E._31k3XfnerJgTZ8:focus {\n  /*\n    TODO\n    Ideally we want to remove the global :focus override from classic.\n    It hurts accessibility and forces us to do stuff like this.\n    Once it is done, this can be removed.\n  */\n  outline: black dotted 1px;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  ._3Qtx4lodxp9J0E._31k3XfnerJgTZ8:focus {\n    outline: -webkit-focus-ring-color auto 5px;\n  }\n}\n._3Qtx4lodxp9J0E[disabled]:active,\n._3Qtx4lodxp9J0E[disabled]:focus,\n._3Qtx4lodxp9J0E[disabled]:hover {\n  background: transparent;\n  color: #A5ADBA !important;\n}\n._3Qtx4lodxp9J0E[disabled]:active ._3Gw3Oa5-RMe50s svg,\n._3Qtx4lodxp9J0E[disabled]:focus ._3Gw3Oa5-RMe50s svg,\n._3Qtx4lodxp9J0E[disabled]:hover ._3Gw3Oa5-RMe50s svg {\n  color: #A5ADBA !important;\n}\n._3Qtx4lodxp9J0E[disabled]:active span[name="check"],\n._3Qtx4lodxp9J0E[disabled]:focus span[name="check"],\n._3Qtx4lodxp9J0E[disabled]:hover span[name="check"] {\n  color: #6B778C !important;\n}\n._3Qtx4lodxp9J0E[disabled]:active .M91aWYFMf7mrFf,\n._3Qtx4lodxp9J0E[disabled]:focus .M91aWYFMf7mrFf,\n._3Qtx4lodxp9J0E[disabled]:hover .M91aWYFMf7mrFf {\n  color: #A5ADBA !important;\n}\n._3jTRr1WChvvqHf {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n}\n._3jTRr1WChvvqHf._2VCqfvi0epFnIK {\n  margin: 0;\n}\n.M91aWYFMf7mrFf {\n  color: #5E6C84;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  margin: 4px 0 0 0;\n  padding: 0;\n}\n.DIhgdvAd-R4ToE::after {\n  background-color: rgba(9, 30, 66, 0.13);\n  content: " ";\n  display: block;\n  height: 1px;\n  margin: 8px auto;\n  width: calc(100% - 20px);\n}\n',""]),s.locals={link:"_3Qtx4lodxp9J0E",linkFocusRing:"_31k3XfnerJgTZ8",icon:"_3Gw3Oa5-RMe50s",description:"M91aWYFMf7mrFf",title:"_3jTRr1WChvvqHf",withoutMargins:"_2VCqfvi0epFnIK",withSeparator:"DIhgdvAd-R4ToE"},n.a=s},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./packages/a11y/src/AccessibilityMenu/AccessibilityMenu.less":function(e,n,a){"use strict";var t=a("./node_modules/css-loader/dist/runtime/api.js"),s=a.n(t)()(!1);s.push([e.i,"._3YGsFyACTefHYF {\n  margin: 0;\n}\n._3jRzoY8BUC9T9r {\n  display: flex;\n}\n._3jRzoY8BUC9T9r .VZsWvb5qVISKPp {\n  margin-left: 3px;\n  margin-top: 2px;\n}\n._3jRzoY8BUC9T9r ._1iZ4r0EebD-_AO {\n  flex: 1;\n}\n._24YY3ffS5pAZxi {\n  align-items: center;\n  color: #091E42;\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n._24YY3ffS5pAZxi .VZsWvb5qVISKPp {\n  margin-left: 3px;\n  margin-top: 2px;\n}\n._24YY3ffS5pAZxi ._1ragvyIlBWNN0g {\n  flex: 1;\n}\n.Yv_Jd5QjuO4P7w ._1O4iygPyhEyA1- {\n  display: block;\n  padding: 8px;\n  margin-top: 4px;\n}\n.Yv_Jd5QjuO4P7w label {\n  cursor: pointer;\n}\n.Yv_Jd5QjuO4P7w ._24YY3ffS5pAZxi:hover,\n.Yv_Jd5QjuO4P7w ._2BpqOEsSdnZi8i:hover,\n.Yv_Jd5QjuO4P7w ._1O4iygPyhEyA1-:hover,\n.Yv_Jd5QjuO4P7w ._24YY3ffS5pAZxi:focus-visible,\n.Yv_Jd5QjuO4P7w ._2BpqOEsSdnZi8i:focus-visible,\n.Yv_Jd5QjuO4P7w ._1O4iygPyhEyA1-:focus-visible {\n  background: rgba(9, 30, 66, 0.04);\n}\n",""]),s.locals={colorVisionLabel:"_3YGsFyACTefHYF",colorVisionOptions:"_3jRzoY8BUC9T9r",checkbox:"VZsWvb5qVISKPp",select:"_1iZ4r0EebD-_AO",tota11yOptions:"_24YY3ffS5pAZxi",label:"_1ragvyIlBWNN0g",accessibilityMenuWrapper:"Yv_Jd5QjuO4P7w",link:"_1O4iygPyhEyA1-",checkboxLabel:"_2BpqOEsSdnZi8i"},n.a=s},"./packages/a11y/index.ts":function(e,n,a){"use strict";a.r(n),a.d(n,"AccessibilityMenu",(function(){return _})),a.d(n,"AccessibilityMenuOptions",(function(){return y})),a.d(n,"a11yMenuState",(function(){return d})),a.d(n,"useFocusRing",(function(){return k}));var t=a("./node_modules/react/index.js"),s=a.n(t),o=a("./packages/nachos/icons/external-link.tsx"),l=a("./packages/nachos/checkbox.ts"),c=a("./packages/shared-state/index.ts"),i=a("./node_modules/uuid/v4.js"),r=a.n(i);const d=new c.b({colorVisionMode:"",isColorVisionEnabled:!1,isTota11yInstalled:!1,isTota11yEnabled:!1});var u,p=a("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=a.n(p),b=a("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./packages/a11y/src/AccessibilityMenu/AccessibilityMenu.less"),g={insert:"head",singleton:!1},h=(m()(b.a,g),b.a.locals||{});!function(e){e.Achromatopsia="Achromatopsia",e.BlurredVision="Blurred Vision",e.Deuteranopia="Deuteranopia",e.Protanopia="Protanopia",e.Tritanopia="Tritanopia"}(u||(u={}));const v=new Map([[u.Achromatopsia,'<feColorMatrix values="\n        0.213  0.715  0.072  0.000  0.000\n        0.213  0.715  0.072  0.000  0.000\n        0.213  0.715  0.072  0.000  0.000\n        0.000  0.000  0.000  1.000  0.000\n      " />'],[u.BlurredVision,'<feGaussianBlur stdDeviation="2" />'],[u.Deuteranopia,'<feColorMatrix values="\n        0.367  0.861 -0.228  0.000  0.000\n        0.280  0.673  0.047  0.000  0.000\n        -0.012  0.043  0.969  0.000  0.000\n        0.000  0.000  0.000  1.000  0.000\n      " />'],[u.Protanopia,'<feColorMatrix values="\n        0.152  1.053 -0.205  0.000  0.000\n        0.115  0.786  0.099  0.000  0.000\n        -0.004 -0.048  1.052  0.000  0.000\n        0.000  0.000  0.000  1.000  0.000\n      " />'],[u.Tritanopia,'<feColorMatrix values="\n        1.256 -0.077 -0.179  0.000  0.000\n        -0.078  0.931  0.148  0.000  0.000\n        0.005  0.691  0.304  0.000  0.000\n        0.000  0.000  0.000  1.000  0.000\n      " />']]),f=()=>{const[{colorVisionMode:e,isColorVisionEnabled:n,isTota11yInstalled:a,isTota11yEnabled:o},i]=Object(c.c)(d),u=Object(t.useCallback)((()=>{i({colorVisionMode:e,isColorVisionEnabled:!n,isTota11yInstalled:a,isTota11yEnabled:o})}),[i,e,n,a,o]),p=Object(t.useCallback)((({target:{value:e}})=>i({colorVisionMode:e,isColorVisionEnabled:n,isTota11yInstalled:a,isTota11yEnabled:o})),[i,n,a,o]),m=r()();return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:m,className:h.colorVisionLabel},"Color vision emulation"),s.a.createElement("div",{className:h.colorVisionOptions},s.a.createElement(l.a,{className:h.checkbox,isChecked:n,onChange:u,id:m}),s.a.createElement("select",{disabled:!n,className:h.select,"aria-label":"Color vision emulation options",onChange:p,defaultValue:e},s.a.createElement("option",{disabled:!0,value:""},"Select an emulation"),[...v.keys()].map((e=>s.a.createElement("option",{key:e,value:e},e))))))},x=()=>{var e;const[{colorVisionMode:n,isColorVisionEnabled:a}]=Object(c.c)(d),t=null===(e=v.get(n))||void 0===e?void 0:e.replace(/(\n|^\s|\s$)/g,""),o=r()();return a&&t?s.a.createElement("style",null,'#trello-root {\n      filter: url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><filter id="'.concat(o,'">').concat(t,"</filter></svg>#").concat(o,"');\n    }")):null},j=()=>{const[{isTota11yEnabled:e,colorVisionMode:n,isColorVisionEnabled:o},i]=Object(c.c)(d),u=Object(t.useCallback)((async()=>{e||(await a.e(201).then(a.t.bind(null,"./node_modules/@khanacademy/tota11y/dist/tota11y.js",7)),setTimeout((()=>{var e;null===(e=document.querySelector(".tota11y-toolbar"))||void 0===e||e.classList.add("tota11y-expanded")}),300)),i({colorVisionMode:n,isColorVisionEnabled:o,isTota11yInstalled:!0,isTota11yEnabled:!e})}),[i,n,o,e]),p=r()();return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:p,className:h.tota11yOptions},s.a.createElement(l.a,{id:p,onChange:u,isChecked:e,className:h.checkbox}),s.a.createElement("span",{className:h.label},"Enable Tota11y sidebar")))},E=()=>{const[{isTota11yInstalled:e,isTota11yEnabled:n}]=Object(c.c)(d);return e&&!n?s.a.createElement("style",null,".tota11y { display: none !important }"):null},_=()=>s.a.createElement("div",{className:h.accessibilityMenuWrapper},s.a.createElement(j,null),s.a.createElement(f,null),s.a.createElement("a",{className:h.link,href:"https://hello.atlassian.net/wiki/spaces/TRELLOFE/pages/941672748/20.+Accessibility",target:"_blank"},"Web accessibility guide ",s.a.createElement(o.a,null))),y=()=>s.a.createElement(s.a.Fragment,null,s.a.createElement(E,null),s.a.createElement(x,null)),k=(e={})=>{const[n,a]=Object(t.useState)(!1),[s,o]=Object(t.useState)(!1),[l,c]=Object(t.useState)(!1),i=()=>{s&&l||a(!0)};return[n,{onMouseEnter:n=>{o(!0),a(!1),e.onMouseEnter&&e.onMouseEnter(n)},onMouseLeave:n=>{o(!1),a(!1),e.onMouseLeave&&e.onMouseLeave(n)},onMouseDown:n=>{c(!0),a(!1),e.onMouseDown&&e.onMouseDown(n)},onKeyDown:n=>{c(!1),i(),e.onKeyDown&&e.onKeyDown(n)},onKeyUp:n=>{i(),e.onKeyUp&&e.onKeyUp(n)},onBlur:n=>{a(!1),e.onBlur&&e.onBlur(n)}}]}}}]);
//# sourceMappingURL=header-member-menu-popover.15df2d43ceab8ea5395c.js.map