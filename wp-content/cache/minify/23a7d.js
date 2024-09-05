var wc;(()=>{var e,t,n,o={9517:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Button:()=>d,CheckboxControl:()=>b,CheckboxList:()=>w,Chip:()=>E,FormStep:()=>N,FormattedMonetaryAmount:()=>A,Label:()=>C,Panel:()=>T,RadioControl:()=>M,RadioControlAccordion:()=>D,RadioControlOption:()=>R,RadioControlOptionLayout:()=>O,RemovableChip:()=>f,SortSelect:()=>L,Spinner:()=>i,StoreNotice:()=>Y,StoreNoticesContainer:()=>me,Subtotal:()=>Ne,TextInput:()=>ue,Textarea:()=>de,Title:()=>_,TotalsFees:()=>xe,TotalsItem:()=>_e,TotalsTaxes:()=>ye,TotalsWrapper:()=>Ae,ValidatedTextInput:()=>ke,ValidationInputError:()=>be});var o=n(1609),c=n(8165),a=n(6087),r=n(851),l=n(4040),s=n.n(l);n(2080),n(7791);const i=()=>(0,o.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"}),m=(0,a.forwardRef)(((e,t)=>{"showSpinner"in e&&s()("showSpinner prop",{version:"8.9.0",alternative:"Render a spinner in the button children instead.",plugin:"WooCommerce"});const{className:n,showSpinner:a=!1,children:l,variant:m="contained",removeTextWrap:d=!1,...u}=e,p=(0,r.A)("wc-block-components-button","wp-element-button",n,m,{"wc-block-components-button--loading":a});if("href"in e)return(0,o.createElement)(c.$,{render:(0,o.createElement)("a",{ref:t,href:e.href},a&&(0,o.createElement)(i,null),(0,o.createElement)("span",{className:"wc-block-components-button__text"},l)),className:p,...u});const b=d?e.children:(0,o.createElement)("span",{className:"wc-block-components-button__text"},e.children);return(0,o.createElement)(c.$,{ref:t,className:p,...u},a&&(0,o.createElement)(i,null),b)})),d=m;var u=n(9491);n(2031);const p=({className:e,label:t,id:n,onChange:c,children:a,hasError:l=!1,checked:s=!1,disabled:i=!1,...m})=>{const d=(0,u.useInstanceId)(p),b=n||`checkbox-control-${d}`;return(0,o.createElement)("div",{className:(0,r.A)("wc-block-components-checkbox",{"has-error":l},e)},(0,o.createElement)("label",{htmlFor:b},(0,o.createElement)("input",{id:b,className:"wc-block-components-checkbox__input",type:"checkbox",onChange:e=>c(e.target.checked),"aria-invalid":!0===l,checked:s,disabled:!!i,...m}),(0,o.createElement)("svg",{className:"wc-block-components-checkbox__mark","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 20"},(0,o.createElement)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})),t&&(0,o.createElement)("span",{className:"wc-block-components-checkbox__label"},t),a))},b=p;var h=n(7723);n(294);const w=({className:e,onChange:t,options:n=[],checked:c=[],isLoading:l=!1,isDisabled:s=!1,limit:i=10})=>{const[m,d]=(0,a.useState)(!1),u=(0,a.useMemo)((()=>[...Array(5)].map(((e,t)=>(0,o.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}}," ")))),[]),b=(0,a.useMemo)((()=>{const e=n.length-i;return!m&&(0,o.createElement)("li",{key:"show-more",className:"show-more"},(0,o.createElement)("button",{onClick:()=>{d(!0)},"aria-expanded":!1,"aria-label":(0,h.sprintf)((0,h._n)("Show %s more option","Show %s more options",e,"woocommerce"),e)},(0,h.sprintf)((0,h._n)("Show %s more","Show %s more",e,"woocommerce"),e)))}),[n,i,m]),w=(0,a.useMemo)((()=>m&&(0,o.createElement)("li",{key:"show-less",className:"show-less"},(0,o.createElement)("button",{onClick:()=>{d(!1)},"aria-expanded":!0,"aria-label":(0,h.__)("Show less options","woocommerce")},(0,h.__)("Show less","woocommerce")))),[m]),E=(0,a.useMemo)((()=>{const e=n.length>i+5;return(0,o.createElement)(a.Fragment,null,n.map(((n,r)=>(0,o.createElement)(a.Fragment,{key:n.value},(0,o.createElement)("li",{...e&&!m&&r>=i&&{hidden:!0}},(0,o.createElement)(p,{id:n.value,className:"wc-block-checkbox-list__checkbox",label:n.label,checked:c.includes(n.value),onChange:()=>{t(n.value)},disabled:s})),e&&r===i-1&&b))),e&&w)}),[n,t,c,m,i,w,b,s]),v=(0,r.A)("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":l},e);return(0,o.createElement)("ul",{className:v},l?u:E)};n(4456);const E=({text:e,screenReaderText:t="",element:n="li",className:c="",radius:a="small",children:l=null,...s})=>{const i=n,m=(0,r.A)(c,"wc-block-components-chip","wc-block-components-chip--radius-"+a),d=Boolean(t&&t!==e);return(0,o.createElement)(i,{className:m,...s},(0,o.createElement)("span",{"aria-hidden":d,className:"wc-block-components-chip__text"},e),d&&(0,o.createElement)("span",{className:"screen-reader-text"},t),l)};var v=n(7104),k=n(8098);const f=({ariaLabel:e="",className:t="",disabled:n=!1,onRemove:c=(()=>{}),removeOnAnyClick:a=!1,text:l,screenReaderText:s="",...i})=>{const m=a?"span":"button";if(!e){const t=s&&"string"==typeof s?s:l;e="string"!=typeof t?(0,h.__)("Remove","woocommerce"):(0,h.sprintf)((0,h.__)('Remove "%s"',"woocommerce"),t)}const d={"aria-label":e,disabled:n,onClick:c,onKeyDown:e=>{"Backspace"!==e.key&&"Delete"!==e.key||c()}},u=a?d:{},p=a?{"aria-hidden":!0}:d;return(0,o.createElement)(E,{...i,...u,className:(0,r.A)(t,"is-removable"),element:a?"button":i.element,screenReaderText:s,text:l},(0,o.createElement)(m,{className:"wc-block-components-chip__remove",...p},(0,o.createElement)(v.A,{className:"wc-block-components-chip__remove-icon",icon:k.A,size:16,role:"img"})))};n(2849),n(1908);const _=({children:e,className:t="",headingLevel:n,...c})=>{const a=(0,r.A)("wc-block-components-title",t),l=`h${n}`;return(0,o.createElement)(l,{className:a,...c},e)},g=({title:e,stepHeadingContent:t})=>(0,o.createElement)("div",{className:"wc-block-components-checkout-step__heading"},(0,o.createElement)(_,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},e),!!t&&(0,o.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},t)),N=({id:e,className:t,title:n,legend:c,description:a,children:l,disabled:s=!1,showStepNumber:i=!0,stepHeadingContent:m=(()=>{})})=>{const d=c||n?"fieldset":"div";return(0,o.createElement)(d,{className:(0,r.A)(t,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":i,"wc-block-components-checkout-step--disabled":s}),id:e,disabled:s},!(!c&&!n)&&(0,o.createElement)("legend",{className:"screen-reader-text"},c||n),!!n&&(0,o.createElement)(g,{title:n,stepHeadingContent:m()}),(0,o.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!a&&(0,o.createElement)("p",{className:"wc-block-components-checkout-step__description"},a),(0,o.createElement)("div",{className:"wc-block-components-checkout-step__content"},l)))};var y=n(6175);n(9297);const x=e=>{const t=(null==e?void 0:e.thousandSeparator)===(null==e?void 0:e.decimalSeparator);return t&&console.warn("Thousand separator and decimal separator are the same. This may cause formatting issues."),{thousandSeparator:t?"":null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0}},A=({className:e,value:t,currency:n,onValueChange:c,displayType:a="text",...l})=>{var s;const i="string"==typeof t?parseInt(t,10):t;if(!Number.isFinite(i))return null;const m=i/10**n.minorUnit;if(!Number.isFinite(m))return null;const d=(0,r.A)("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",e),u=null!==(s=l.decimalScale)&&void 0!==s?s:null==n?void 0:n.minorUnit,p={...l,...x(n),decimalScale:u,value:void 0,currency:void 0,onValueChange:void 0},b=c?e=>{const t=+e.value*10**n.minorUnit;c(t)}:()=>{};return(0,o.createElement)(y.A,{className:d,displayType:a,...p,value:m,onValueChange:b})},C=({label:e,screenReaderLabel:t,wrapperElement:n,wrapperProps:c={}})=>{let l;const s=null!=e,i=null!=t;return!s&&i?(l=n||"span",c={...c,className:(0,r.A)(c.className,"screen-reader-text")},(0,o.createElement)(l,{...c},t)):(l=n||a.Fragment,s&&i&&e!==t?(0,o.createElement)(l,{...c},(0,o.createElement)("span",{"aria-hidden":"true"},e),(0,o.createElement)("span",{className:"screen-reader-text"},t)):(0,o.createElement)(l,{...c},e))};var S=n(9813),I=n(224);n(5440);const T=({children:e,className:t,initialOpen:n=!1,hasBorder:c=!1,title:l,titleTag:s="div",state:i})=>{let[m,d]=(0,a.useState)(n);return Array.isArray(i)&&2===i.length&&([m,d]=i),(0,o.createElement)("div",{className:(0,r.A)(t,"wc-block-components-panel",{"has-border":c})},(0,o.createElement)(s,null,(0,o.createElement)("button",{"aria-expanded":m,className:"wc-block-components-panel__button",onClick:()=>d(!m)},(0,o.createElement)(v.A,{"aria-hidden":"true",className:"wc-block-components-panel__button-icon",icon:m?S.A:I.A}),l)),m&&(0,o.createElement)("div",{className:"wc-block-components-panel__content"},e))},O=({label:e,secondaryLabel:t,description:n,secondaryDescription:c,id:a})=>(0,o.createElement)("div",{className:"wc-block-components-radio-control__option-layout"},(0,o.createElement)("div",{className:"wc-block-components-radio-control__label-group"},e&&(0,o.createElement)("span",{id:a&&`${a}__label`,className:"wc-block-components-radio-control__label"},e),t&&(0,o.createElement)("span",{id:a&&`${a}__secondary-label`,className:"wc-block-components-radio-control__secondary-label"},t)),(n||c)&&(0,o.createElement)("div",{className:"wc-block-components-radio-control__description-group"},n&&(0,o.createElement)("span",{id:a&&`${a}__description`,className:"wc-block-components-radio-control__description"},n),c&&(0,o.createElement)("span",{id:a&&`${a}__secondary-description`,className:"wc-block-components-radio-control__secondary-description"},c))),R=({checked:e,name:t,onChange:n,option:c,disabled:a=!1,highlightChecked:l=!1})=>{const{value:s,label:i,description:m,secondaryLabel:d,secondaryDescription:u}=c;return(0,o.createElement)("label",{className:(0,r.A)("wc-block-components-radio-control__option",{"wc-block-components-radio-control__option-checked":e,"wc-block-components-radio-control__option--checked-option-highlighted":e&&l}),htmlFor:`${t}-${s}`},(0,o.createElement)("input",{id:`${t}-${s}`,className:"wc-block-components-radio-control__input",type:"radio",name:t,value:s,onChange:e=>n(e.target.value),checked:e,"aria-describedby":(0,r.A)({[`${t}-${s}__label`]:i,[`${t}-${s}__secondary-label`]:d,[`${t}-${s}__description`]:m,[`${t}-${s}__secondary-description`]:u}),disabled:a}),(0,o.createElement)(O,{id:`${t}-${s}`,label:i,secondaryLabel:d,description:m,secondaryDescription:u}))};n(6785);const $=({className:e="",id:t,selected:n="",onChange:c,options:l=[],disabled:s=!1,highlightChecked:i=!1})=>{const m=(0,u.useInstanceId)($),d=t||m,p=(0,a.useMemo)((()=>l.findIndex((e=>e.value===n))),[l,n]);return l.length?(0,o.createElement)("div",{className:(0,r.A)("wc-block-components-radio-control",{"wc-block-components-radio-control--highlight-checked--first-selected":i&&0===p,"wc-block-components-radio-control--highlight-checked--last-selected":i&&p===l.length-1,"wc-block-components-radio-control--highlight-checked":i},e)},l.map((e=>(0,o.createElement)(R,{highlightChecked:i,key:`${d}-${e.value}`,name:`radio-control-${d}`,checked:e.value===n,option:e,onChange:t=>{c(t),"function"==typeof e.onChange&&e.onChange(t)},disabled:s})))):null},M=$,D=(0,u.withInstanceId)((({className:e,instanceId:t,id:n,selected:c,onChange:l,options:s=[],highlightChecked:i=!1})=>{const m=n||t,d=(0,a.useMemo)((()=>s.findIndex((e=>e.value===c))),[s,c]);return s.length?(0,o.createElement)("div",{className:(0,r.A)("wc-block-components-radio-control",{"wc-block-components-radio-control--highlight-checked":i,"wc-block-components-radio-control--highlight-checked--first-selected":i&&0===d,"wc-block-components-radio-control--highlight-checked--last-selected":i&&d===s.length-1},e)},s.map((e=>{const t="object"==typeof e&&"content"in e,n=e.value===c;return(0,o.createElement)("div",{className:(0,r.A)("wc-block-components-radio-control-accordion-option",{"wc-block-components-radio-control-accordion-option--checked-option-highlighted":n&&i}),key:e.value},(0,o.createElement)(R,{name:`radio-control-${m}`,checked:n,option:e,onChange:t=>{l(t),"function"==typeof e.onChange&&e.onChange(t)}}),t&&n&&(0,o.createElement)("div",{className:(0,r.A)("wc-block-components-radio-control-accordion-content",{"wc-block-components-radio-control-accordion-content-hide":!n})},e.content))}))):null}));n(3149);const L=(0,u.withInstanceId)((({className:e,instanceId:t,label:n="",onChange:c,options:a,screenReaderLabel:l,value:s="",readOnly:i=!1})=>{const m=`wc-block-components-sort-select__select-${t}`;return(0,o.createElement)("div",{className:(0,r.A)("wc-block-sort-select","wc-block-components-sort-select",e)},(0,o.createElement)(C,{label:n,screenReaderLabel:l,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label wc-block-components-sort-select__label",htmlFor:m}}),(0,o.createElement)("select",{disabled:!!i,id:m,className:"wc-block-sort-select__select wc-block-components-sort-select__select",onChange:c,value:s},a&&a.map((e=>(0,o.createElement)("option",{key:e.key,value:e.key},e.label)))))}));var F=n(1208),P=(n(9345),n(2900)),V=n(2478),B=n(8306);const j=e=>{switch(e){case"success":case"warning":case"info":case"default":return"polite";default:return"assertive"}},H=e=>{switch(e){case"success":return P.A;case"warning":case"info":case"error":return V.A;default:return B.A}};var K=n(195);const W=({className:e,status:t="default",children:n,spokenMessage:c=n,onRemove:l=(()=>{}),isDismissible:s=!0,politeness:i=j(t),summary:d})=>(((e,t)=>{const n="string"==typeof e?e:(0,a.renderToString)(e);(0,a.useEffect)((()=>{n&&(0,K.speak)(n,t)}),[n,t])})(c,i),(0,o.createElement)("div",{className:(0,r.A)(e,"wc-block-components-notice-banner","is-"+t,{"is-dismissible":s})},(0,o.createElement)(v.A,{icon:H(t)}),(0,o.createElement)("div",{className:"wc-block-components-notice-banner__content"},d&&(0,o.createElement)("p",{className:"wc-block-components-notice-banner__summary"},d),n),!!s&&(0,o.createElement)(m,{className:"wc-block-components-notice-banner__dismiss","aria-label":(0,h.__)("Dismiss this notice","woocommerce"),onClick:e=>{"function"==typeof(null==e?void 0:e.preventDefault)&&e.preventDefault&&e.preventDefault(),l()},removeTextWrap:!0},(0,o.createElement)(v.A,{icon:F.A})))),Y=({className:e,children:t,status:n,...c})=>(0,o.createElement)(W,{className:(0,r.A)("wc-block-store-notice",e),status:n,...c},t),Z=window.wp.data,z=window.wc.wcBlocksData,G=window.wc.wcTypes;let U=function(e){return e.CART="wc/cart",e.CHECKOUT="wc/checkout",e.PAYMENTS="wc/checkout/payments",e.EXPRESS_PAYMENTS="wc/checkout/express-payments",e.CONTACT_INFORMATION="wc/checkout/contact-information",e.SHIPPING_ADDRESS="wc/checkout/shipping-address",e.BILLING_ADDRESS="wc/checkout/billing-address",e.SHIPPING_METHODS="wc/checkout/shipping-methods",e.CHECKOUT_ACTIONS="wc/checkout/checkout-actions",e.ORDER_INFORMATION="wc/checkout/additional-information",e}({});(0,h.__)("Something went wrong. Please contact us to get assistance.","woocommerce"),n(6249);var J=n(1359),q=n.n(J);const X=["a","b","em","i","strong","p","br"],Q=["target","href","rel","name","download"],ee=(e,t)=>{const n=(null==t?void 0:t.tags)||X,o=(null==t?void 0:t.attr)||Q;return q().sanitize(e,{ALLOWED_TAGS:n,ALLOWED_ATTR:o})};function te(e,t){const n=(0,a.useRef)();return(0,a.useEffect)((()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)}),[e,t]),n.current}const ne=window.wp.htmlEntities,oe=({className:e,notices:t})=>{const n=(0,a.useRef)(null),{removeNotice:c}=(0,Z.useDispatch)("core/notices"),l=t.map((e=>e.id)),s=te(l);(0,a.useEffect)((()=>{const e=n.current;if(!e)return;const t=e.ownerDocument.activeElement;t&&-1!==["input","select","button","textarea"].indexOf(t.tagName.toLowerCase())&&"radio"!==t.getAttribute("type")||l.filter((e=>!s||!s.includes(e))).length&&null!=e&&e.scrollIntoView&&e.scrollIntoView({behavior:"smooth"})}),[l,s,n]);const i=t.filter((({isDismissible:e})=>!!e)),m=t.filter((({isDismissible:e})=>!e)),d={error:i.filter((({status:e})=>"error"===e)),success:i.filter((({status:e})=>"success"===e)),warning:i.filter((({status:e})=>"warning"===e)),info:i.filter((({status:e})=>"info"===e)),default:i.filter((({status:e})=>"default"===e))};return(0,o.createElement)("div",{ref:n,className:(0,r.A)(e,"wc-block-components-notices")},m.map((e=>(0,o.createElement)(Y,{key:e.id+"-"+e.context,...e},(0,o.createElement)(a.RawHTML,null,ee((0,ne.decodeEntities)(e.content)))))),Object.entries(d).map((([e,t])=>{if(!t.length)return null;const n=t.filter(((e,t,n)=>n.findIndex((t=>t.content===e.content))===t)).map((e=>({...e,content:ee((0,ne.decodeEntities)(e.content))}))),r={key:`store-notice-${e}`,status:e,onRemove:()=>{t.forEach((e=>{c(e.id,e.context)}))}};return 1===n.length?(0,o.createElement)(Y,{...r},(0,o.createElement)(a.RawHTML,null,t[0].content)):(0,o.createElement)(Y,{...r,summary:"error"===e?(0,h.__)("Please fix the following errors before continuing","woocommerce"):""},(0,o.createElement)("ul",null,n.map((e=>(0,o.createElement)("li",{key:e.id+"-"+e.context},(0,o.createElement)(a.RawHTML,null,e.content))))))})))};var ce=n(9910),ae=n(6648);n(230);const re=({onRemove:e=(()=>{}),children:t,listRef:n,className:c,...l})=>((0,a.useEffect)((()=>{const t=setTimeout((()=>{e()}),1e4);return()=>clearTimeout(t)}),[e]),(0,o.createElement)(W,{className:(0,r.A)(c,"wc-block-components-notice-snackbar"),...l,onRemove:()=>{n&&n.current&&n.current.focus(),e()}},t)),le=({notices:e,className:t,onRemove:n=(()=>{})})=>{const c=(0,a.useRef)(null),l=(0,u.useReducedMotion)(),s=e=>()=>n((null==e?void 0:e.id)||"");return(0,o.createElement)("div",{className:(0,r.A)(t,"wc-block-components-notice-snackbar-list"),tabIndex:-1,ref:c},l?e.map((e=>{const{content:t,...n}=e;return(0,o.createElement)(re,{...n,onRemove:s(e),listRef:c,key:e.id},e.content)})):(0,o.createElement)(ce.A,null,e.map((e=>{const{content:t,...n}=e;return(0,o.createElement)(ae.A,{key:"snackbar-"+e.id,timeout:500,classNames:"notice-transition"},(0,o.createElement)(re,{...n,onRemove:s(e),listRef:c},t))}))))},se=({className:e,notices:t})=>{const{removeNotice:n}=(0,Z.useDispatch)("core/notices");return(0,o.createElement)(le,{className:(0,r.A)(e,"wc-block-components-notices__snackbar"),notices:t,onRemove:e=>{t.forEach((t=>{t.explicitDismiss&&t.id===e?n(t.id,t.context):t.explicitDismiss||n(t.id,t.context)}))}})},ie=(e,t)=>e.map((e=>({...e,context:t}))),me=({className:e="",context:t="",additionalNotices:n=[]})=>{const{registerContainer:c,unregisterContainer:r}=(0,Z.useDispatch)(z.STORE_NOTICES_STORE_KEY),{suppressNotices:l,registeredContainers:s}=(0,Z.useSelect)((e=>({suppressNotices:e(z.PAYMENT_STORE_KEY).isExpressPaymentMethodActive(),registeredContainers:e(z.STORE_NOTICES_STORE_KEY).getRegisteredContainers()}))),i=(0,a.useMemo)((()=>Array.isArray(t)?t:[t]),[t]),m=Object.values(U).filter((e=>i.some((t=>e.includes(t+"/")))&&!s.includes(e))),d=(0,Z.useSelect)((e=>{const{getNotices:t}=e("core/notices");return[...m.flatMap((e=>ie(t(e),e))),...i.flatMap((e=>ie(t(e).concat(n),e)))].filter(Boolean)}));return(0,a.useEffect)((()=>(i.map((e=>c(e))),()=>{i.map((e=>r(e)))})),[i,c,r]),l?null:(0,o.createElement)(o.Fragment,null,(0,o.createElement)(oe,{className:e,notices:d.filter((e=>"default"===e.type))}),(0,o.createElement)(se,{className:e,notices:d.filter((e=>"snackbar"===e.type))}))};n(8112);const de=({className:e="",disabled:t=!1,onTextChange:n,placeholder:c,value:a=""})=>(0,o.createElement)("textarea",{className:(0,r.A)("wc-block-components-textarea",e),disabled:t,onChange:e=>{n(e.target.value)},placeholder:c,rows:2,value:a});n(4632);const ue=(0,a.forwardRef)((({className:e,id:t,type:n="text",ariaLabel:c,ariaDescribedBy:l,label:s,screenReaderLabel:i,disabled:m,help:d,autoCapitalize:u="off",autoComplete:p="off",value:b="",onChange:h,required:w=!1,onBlur:E=(()=>{}),feedback:v,...k},f)=>{const[_,g]=(0,a.useState)(!1);return(0,o.createElement)("div",{className:(0,r.A)("wc-block-components-text-input",e,{"is-active":_||b})},(0,o.createElement)("input",{type:n,id:t,value:(0,ne.decodeEntities)(b),ref:f,autoCapitalize:u,autoComplete:p,onChange:e=>{h(e.target.value)},onFocus:()=>g(!0),onBlur:e=>{E(e.target.value),g(!1)},"aria-label":c||s,disabled:m,"aria-describedby":d&&!l?t+"__help":l,required:w,...k}),(0,o.createElement)(C,{label:s,screenReaderLabel:i||s,wrapperElement:"label",wrapperProps:{htmlFor:t},htmlFor:t}),!!d&&(0,o.createElement)("p",{id:t+"__help",className:"wc-block-components-text-input__help"},d),v)}));n(7235);const pe=({errorMessage:e="",propertyName:t="",elementId:n=""})=>{const{validationError:c,validationErrorId:a}=(0,Z.useSelect)((e=>{const o=e(z.VALIDATION_STORE_KEY);return{validationError:o.getValidationError(t),validationErrorId:o.getValidationErrorId(n)}}));if(!e||"string"!=typeof e){if(null==c||!c.message||null!=c&&c.hidden)return null;e=c.message}return(0,o.createElement)("div",{className:"wc-block-components-validation-error",role:"alert"},(0,o.createElement)("p",{id:a},e))},be=pe,he=(e,t)=>{const{valid:n,customError:o,valueMissing:c,badInput:a,typeMismatch:r}=t.validity;if(n||o)return t.validationMessage;const l=(0,h.sprintf)((0,h.__)("Please enter a valid %s","woocommerce"),e.toLowerCase());return c||a||r?l:t.validationMessage||l};var we=n(4177);const Ee=new Map([["BA",/^([7-8]{1})([0-9]{4})$/],["GB",/^([A-Z]){1}([0-9]{1,2}|[A-Z][0-9][A-Z]|[A-Z][0-9]{2}|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-Z]{2}){1}|BFPO(?:\s)?([0-9]{1,4})$|BFPO(c\/o[0-9]{1,3})$/i],["IN",/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/],["JP",/^([0-9]{3})([-]?)([0-9]{4})$/],["KH",/^[0-9]{6}$/],["LI",/^(94[8-9][0-9])$/],["NI",/^[1-9]{1}[0-9]{4}$/],["NL",/^([1-9][0-9]{3})(\s?)(?!SA|SD|SS)[A-Z]{2}$/i],["SI",/^([1-9][0-9]{3})$/]]),ve=(new Map([...we.O,...Ee]),(0,a.forwardRef)((({className:e,id:t,type:n="text",ariaDescribedBy:c,errorId:l,focusOnMount:s=!1,onChange:i,showError:m=!0,errorMessage:d="",value:p="",customValidation:b=(()=>!0),customFormatter:h=(e=>e),label:w,validateOnMount:E=!0,instanceId:v="",...k},f)=>{const[_,g]=(0,a.useState)(!0),N=te(p),y=(0,a.useRef)(null),x=(0,u.useInstanceId)(ve,"",v),A=void 0!==t?t:"textinput-"+x,C=void 0!==l?l:A,{setValidationErrors:S,hideValidationError:I,clearValidationError:T}=(0,Z.useDispatch)(z.VALIDATION_STORE_KEY),O=(0,a.useRef)(b);(0,a.useEffect)((()=>{O.current=b}),[b]);const{validationError:R,validationErrorId:$}=(0,Z.useSelect)((e=>{const t=e(z.VALIDATION_STORE_KEY);return{validationError:t.getValidationError(C),validationErrorId:t.getValidationErrorId(C)}})),M=(0,a.useCallback)(((e=!0)=>{const t=y.current||null;null!==t&&(t.value=t.value.trim(),t.setCustomValidity(""),t.checkValidity()&&O.current(t)?T(C):S({[C]:{message:w?he(w,t):t.validationMessage,hidden:e}}))}),[T,C,S,w]);(0,a.useImperativeHandle)(f,(function(){return{revalidate(){M(!p)}}}),[M,p]),(0,a.useEffect)((()=>{var e,t;if(p!==N&&(p||N)&&y&&null!==y.current&&(null===(e=y.current)||void 0===e||null===(t=e.ownerDocument)||void 0===t?void 0:t.activeElement)!==y.current){const e=h(y.current.value);e!==p?i(e):M(!0)}}),[M,h,p,N,i]),(0,a.useEffect)((()=>{var e;_&&(g(!1),s&&(null===(e=y.current)||void 0===e||e.focus()),!E&&s||M(!0))}),[E,s,_,g,M]),(0,a.useEffect)((()=>()=>{T(C)}),[T,C]),""!==d&&(0,G.isObject)(R)&&(R.message=d);const D=(null==R?void 0:R.message)&&!(null!=R&&R.hidden),L=m&&D&&$?$:c;return(0,o.createElement)(ue,{className:(0,r.A)(e,{"has-error":D}),"aria-invalid":!0===D,id:A,type:n,feedback:m?(0,o.createElement)(pe,{errorMessage:d,propertyName:C}):null,ref:y,onChange:e=>{I(C),M(!0);const t=h(e);t!==p&&i(t)},onBlur:()=>M(!1),ariaDescribedBy:L,value:p,title:"",label:w,...k})}))),ke=ve;n(1157);const fe=({value:e,currency:t})=>(0,a.isValidElement)(e)?(0,o.createElement)("div",{className:"wc-block-components-totals-item__value"},e):Number.isFinite(e)?(0,o.createElement)(A,{className:"wc-block-components-totals-item__value",currency:t||{},value:e}):null,_e=({className:e,currency:t,label:n,value:c,description:a})=>(0,o.createElement)("div",{className:(0,r.A)("wc-block-components-totals-item",e)},(0,o.createElement)("span",{className:"wc-block-components-totals-item__label"},n),(0,o.createElement)(fe,{value:c,currency:t}),(0,o.createElement)("div",{className:"wc-block-components-totals-item__description"},a)),ge=window.wc.wcSettings,Ne=({currency:e,values:t,className:n})=>{const{total_items:c,total_items_tax:a}=t,r=parseInt(c,10),l=parseInt(a,10);return(0,o.createElement)(_e,{className:n,currency:e,label:(0,h.__)("Subtotal","woocommerce"),value:(0,ge.getSetting)("displayCartPricesIncludingTax",!1)?r+l:r})},ye=({currency:e,values:t,className:n,showRateAfterTaxName:c})=>{const{total_tax:a,tax_lines:l}=t;if(!(0,ge.getSetting)("taxesEnabled",!0)&&parseInt(a,10)<=0)return null;const s=(0,ge.getSetting)("displayItemizedTaxes",!1),i=s&&l.length>0?(0,o.createElement)(o.Fragment,null,l.map((({name:t,rate:a,price:l},s)=>{const i=`${t}${c?`${a}`:""}`;return(0,o.createElement)(_e,{key:`tax-line-${s}`,className:(0,r.A)("wc-block-components-totals-taxes",n),currency:e,label:i,value:parseInt(l,10)})}))," "):null;return s?i:(0,o.createElement)(o.Fragment,null,(0,o.createElement)(_e,{className:(0,r.A)("wc-block-components-totals-taxes",n),currency:e,label:(0,h.__)("Taxes","woocommerce"),value:parseInt(a,10),description:null}))},xe=({currency:e,cartFees:t,className:n})=>(0,o.createElement)(o.Fragment,null,t.map((({id:t,key:c,name:a,totals:l},s)=>{const i=parseInt(l.total,10);if(!i)return null;const m=parseInt(l.total_tax,10);return(0,o.createElement)(_e,{key:t||`${s}-${a}`,className:(0,r.A)("wc-block-components-totals-fees","wc-block-components-totals-fees__"+c,n),currency:e,label:a||(0,h.__)("Fee","woocommerce"),value:(0,ge.getSetting)("displayCartPricesIncludingTax",!1)?i+m:i})})));n(7015);const Ae=({children:e,slotWrapper:t=!1,className:n})=>a.Children.count(e)?(0,o.createElement)("div",{className:(0,r.A)(n,"wc-block-components-totals-wrapper",{"slot-wrapper":t})},e):null},2080:()=>{},9345:()=>{},230:()=>{},2031:()=>{},294:()=>{},4456:()=>{},2849:()=>{},9297:()=>{},5440:()=>{},6785:()=>{},3149:()=>{},7791:()=>{},6249:()=>{},4632:()=>{},8112:()=>{},1908:()=>{},7015:()=>{},1157:()=>{},7235:()=>{},1609:e=>{"use strict";e.exports=window.React},5795:e=>{"use strict";e.exports=window.ReactDOM},195:e=>{"use strict";e.exports=window.wp.a11y},9491:e=>{"use strict";e.exports=window.wp.compose},4040:e=>{"use strict";e.exports=window.wp.deprecated},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},5573:e=>{"use strict";e.exports=window.wp.primitives}},c={};function a(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={exports:{}};return o[e].call(n.exports,n,n.exports,a),n.exports}a.m=o,e=[],a.O=(t,n,o,c)=>{if(!n){var r=1/0;for(m=0;m<e.length;m++){for(var[n,o,c]=e[m],l=!0,s=0;s<n.length;s++)(!1&c||r>=c)&&Object.keys(a.O).every((e=>a.O[e](n[s])))?n.splice(s--,1):(l=!1,c<r&&(r=c));if(l){e.splice(m--,1);var i=o();void 0!==i&&(t=i)}}return t}c=c||0;for(var m=e.length;m>0&&e[m-1][2]>c;m--)e[m]=e[m-1];e[m]=[n,o,c]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var c=Object.create(null);a.r(c);var r={};t=t||[null,n({}),n([]),n(n)];for(var l=2&o&&e;"object"==typeof l&&!~t.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,a.d(c,r),c},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=6981,(()=>{var e={6981:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var o,c,[r,l,s]=n,i=0;if(r.some((t=>0!==e[t]))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(s)var m=s(a)}for(t&&t(n);i<r.length;i++)c=r[i],a.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return a.O(m)},n=self.webpackChunkwebpackWcBlocksFrontendJsonp=self.webpackChunkwebpackWcBlocksFrontendJsonp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=a.O(void 0,[94],(()=>a(9517)));r=a.O(r),(wc=void 0===wc?{}:wc).blocksComponents=r})();
;/*! This file is auto-generated */
(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{default:()=>n});new Set;function n(e){}(window.wp=window.wp||{}).warning=t.default})();