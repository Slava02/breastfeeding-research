import{r as gd,a as Gh}from"./vendor-Dh3zDKDA.js";(function(){const q=document.createElement("link").relList;if(q&&q.supports&&q.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))d(M);new MutationObserver(M=>{for(const z of M)if(z.type==="childList")for(const C of z.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&d(C)}).observe(document,{childList:!0,subtree:!0});function Y(M){const z={};return M.integrity&&(z.integrity=M.integrity),M.referrerPolicy&&(z.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?z.credentials="include":M.crossOrigin==="anonymous"?z.credentials="omit":z.credentials="same-origin",z}function d(M){if(M.ep)return;M.ep=!0;const z=Y(M);fetch(M.href,z)}})();var as={exports:{}},mn={};var rd;function Qh(){if(rd)return mn;rd=1;var j=Symbol.for("react.transitional.element"),q=Symbol.for("react.fragment");function Y(d,M,z){var C=null;if(z!==void 0&&(C=""+z),M.key!==void 0&&(C=""+M.key),"key"in M){z={};for(var H in M)H!=="key"&&(z[H]=M[H])}else z=M;return M=z.ref,{$$typeof:j,type:d,key:C,ref:M!==void 0?M:null,props:z}}return mn.Fragment=q,mn.jsx=Y,mn.jsxs=Y,mn}var od;function Xh(){return od||(od=1,as.exports=Qh()),as.exports}var c=Xh(),ce=gd(),ts={exports:{}},hn={},ns={exports:{}},is={};var fd;function Rh(){return fd||(fd=1,(function(j){function q(b,N){var B=b.length;b.push(N);e:for(;0<B;){var ae=B-1>>>1,te=b[ae];if(0<M(te,N))b[ae]=N,b[B]=te,B=ae;else break e}}function Y(b){return b.length===0?null:b[0]}function d(b){if(b.length===0)return null;var N=b[0],B=b.pop();if(B!==N){b[0]=B;e:for(var ae=0,te=b.length,De=te>>>1;ae<De;){var se=2*(ae+1)-1,k=b[se],be=se+1,fl=b[be];if(0>M(k,B))be<te&&0>M(fl,k)?(b[ae]=fl,b[be]=B,ae=be):(b[ae]=k,b[se]=B,ae=se);else if(be<te&&0>M(fl,B))b[ae]=fl,b[be]=B,ae=be;else break e}}return N}function M(b,N){var B=b.sortIndex-N.sortIndex;return B!==0?B:b.id-N.id}if(j.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var z=performance;j.unstable_now=function(){return z.now()}}else{var C=Date,H=C.now();j.unstable_now=function(){return C.now()-H}}var D=[],F=[],K=1,O=null,S=3,Se=!1,pe=!1,Me=!1,Da=!1,Oa=typeof setTimeout=="function"?setTimeout:null,pt=typeof clearTimeout=="function"?clearTimeout:null,ke=typeof setImmediate<"u"?setImmediate:null;function _l(b){for(var N=Y(F);N!==null;){if(N.callback===null)d(F);else if(N.startTime<=b)d(F),N.sortIndex=N.expirationTime,q(D,N);else break;N=Y(F)}}function ra(b){if(Me=!1,_l(b),!pe)if(Y(D)!==null)pe=!0,ol||(ol=!0,We());else{var N=Y(F);N!==null&&yl(ra,N.startTime-b)}}var ol=!1,vl=-1,cl=5,Ua=-1;function gn(){return Da?!0:!(j.unstable_now()-Ua<cl)}function qa(){if(Da=!1,ol){var b=j.unstable_now();Ua=b;var N=!0;try{e:{pe=!1,Me&&(Me=!1,pt(vl),vl=-1),Se=!0;var B=S;try{l:{for(_l(b),O=Y(D);O!==null&&!(O.expirationTime>b&&gn());){var ae=O.callback;if(typeof ae=="function"){O.callback=null,S=O.priorityLevel;var te=ae(O.expirationTime<=b);if(b=j.unstable_now(),typeof te=="function"){O.callback=te,_l(b),N=!0;break l}O===Y(D)&&d(D),_l(b)}else d(D);O=Y(D)}if(O!==null)N=!0;else{var De=Y(F);De!==null&&yl(ra,De.startTime-b),N=!1}}break e}finally{O=null,S=B,Se=!1}N=void 0}}finally{N?We():ol=!1}}}var We;if(typeof ke=="function")We=function(){ke(qa)};else if(typeof MessageChannel<"u"){var vn=new MessageChannel,bt=vn.port2;vn.port1.onmessage=qa,We=function(){bt.postMessage(null)}}else We=function(){Oa(qa,0)};function yl(b,N){vl=Oa(function(){b(j.unstable_now())},N)}j.unstable_IdlePriority=5,j.unstable_ImmediatePriority=1,j.unstable_LowPriority=4,j.unstable_NormalPriority=3,j.unstable_Profiling=null,j.unstable_UserBlockingPriority=2,j.unstable_cancelCallback=function(b){b.callback=null},j.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):cl=0<b?Math.floor(1e3/b):5},j.unstable_getCurrentPriorityLevel=function(){return S},j.unstable_next=function(b){switch(S){case 1:case 2:case 3:var N=3;break;default:N=S}var B=S;S=N;try{return b()}finally{S=B}},j.unstable_requestPaint=function(){Da=!0},j.unstable_runWithPriority=function(b,N){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var B=S;S=b;try{return N()}finally{S=B}},j.unstable_scheduleCallback=function(b,N,B){var ae=j.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ae+B:ae):B=ae,b){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=B+te,b={id:K++,callback:N,priorityLevel:b,startTime:B,expirationTime:te,sortIndex:-1},B>ae?(b.sortIndex=B,q(F,b),Y(D)===null&&b===Y(F)&&(Me?(pt(vl),vl=-1):Me=!0,yl(ra,B-ae))):(b.sortIndex=te,q(D,b),pe||Se||(pe=!0,ol||(ol=!0,We()))),b},j.unstable_shouldYield=gn,j.unstable_wrapCallback=function(b){var N=S;return function(){var B=S;S=N;try{return b.apply(this,arguments)}finally{S=B}}}})(is)),is}var dd;function Zh(){return dd||(dd=1,ns.exports=Rh()),ns.exports}var md;function Vh(){if(md)return hn;md=1;var j=Zh(),q=gd(),Y=Gh();function d(e){var l="https://react.dev/errors/"+e;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)l+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function z(e){var l=e,a=e;if(e.alternate)for(;l.return;)l=l.return;else{e=l;do l=e,(l.flags&4098)!==0&&(a=l.return),e=l.return;while(e)}return l.tag===3?a:null}function C(e){if(e.tag===13){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function H(e){if(e.tag===31){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function D(e){if(z(e)!==e)throw Error(d(188))}function F(e){var l=e.alternate;if(!l){if(l=z(e),l===null)throw Error(d(188));return l!==e?null:e}for(var a=e,t=l;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(t=n.return,t!==null){a=t;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return D(n),e;if(i===t)return D(n),l;i=i.sibling}throw Error(d(188))}if(a.return!==t.return)a=n,t=i;else{for(var u=!1,s=n.child;s;){if(s===a){u=!0,a=n,t=i;break}if(s===t){u=!0,t=n,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,t=n;break}if(s===t){u=!0,t=i,a=n;break}s=s.sibling}if(!u)throw Error(d(189))}}if(a.alternate!==t)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:l}function K(e){var l=e.tag;if(l===5||l===26||l===27||l===6)return e;for(e=e.child;e!==null;){if(l=K(e),l!==null)return l;e=e.sibling}return null}var O=Object.assign,S=Symbol.for("react.element"),Se=Symbol.for("react.transitional.element"),pe=Symbol.for("react.portal"),Me=Symbol.for("react.fragment"),Da=Symbol.for("react.strict_mode"),Oa=Symbol.for("react.profiler"),pt=Symbol.for("react.consumer"),ke=Symbol.for("react.context"),_l=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),ol=Symbol.for("react.suspense_list"),vl=Symbol.for("react.memo"),cl=Symbol.for("react.lazy"),Ua=Symbol.for("react.activity"),gn=Symbol.for("react.memo_cache_sentinel"),qa=Symbol.iterator;function We(e){return e===null||typeof e!="object"?null:(e=qa&&e[qa]||e["@@iterator"],typeof e=="function"?e:null)}var vn=Symbol.for("react.client.reference");function bt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===vn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Me:return"Fragment";case Oa:return"Profiler";case Da:return"StrictMode";case ra:return"Suspense";case ol:return"SuspenseList";case Ua:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case pe:return"Portal";case ke:return e.displayName||"Context";case pt:return(e._context.displayName||"Context")+".Consumer";case _l:var l=e.render;return e=e.displayName,e||(e=l.displayName||l.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vl:return l=e.displayName||null,l!==null?l:bt(e.type)||"Memo";case cl:l=e._payload,e=e._init;try{return bt(e(l))}catch{}}return null}var yl=Array.isArray,b=q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=Y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},ae=[],te=-1;function De(e){return{current:e}}function se(e){0>te||(e.current=ae[te],ae[te]=null,te--)}function k(e,l){te++,ae[te]=e.current,e.current=l}var be=De(null),fl=De(null),wl=De(null),yn=De(null);function pn(e,l){switch(k(wl,l),k(fl,e),k(be,null),l.nodeType){case 9:case 11:e=(e=l.documentElement)&&(e=e.namespaceURI)?qf(e):0;break;default:if(e=l.tagName,l=l.namespaceURI)l=qf(l),e=Bf(l,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}se(be),k(be,e)}function Ba(){se(be),se(fl),se(wl)}function wi(e){e.memoizedState!==null&&k(yn,e);var l=be.current,a=Bf(l,e.type);l!==a&&(k(fl,e),k(be,a))}function bn(e){fl.current===e&&(se(be),se(fl)),yn.current===e&&(se(yn),rn._currentValue=B)}var Ci,cs;function oa(e){if(Ci===void 0)try{throw Error()}catch(a){var l=a.stack.trim().match(/\n( *(at )?)/);Ci=l&&l[1]||"",cs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ci+e+cs}var Gi=!1;function Qi(e,l){if(!e||Gi)return"";Gi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(l){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(v){var g=v}Reflect.construct(e,[],x)}else{try{x.call()}catch(v){g=v}e.call(x.prototype)}}else{try{throw Error()}catch(v){g=v}(x=e())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(v){if(v&&g&&typeof v.stack=="string")return[v.stack,g.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=t.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var r=u.split(`
`),h=s.split(`
`);for(n=t=0;t<r.length&&!r[t].includes("DetermineComponentFrameRoot");)t++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(t===r.length||n===h.length)for(t=r.length-1,n=h.length-1;1<=t&&0<=n&&r[t]!==h[n];)n--;for(;1<=t&&0<=n;t--,n--)if(r[t]!==h[n]){if(t!==1||n!==1)do if(t--,n--,0>n||r[t]!==h[n]){var y=`
`+r[t].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=t&&0<=n);break}}}finally{Gi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?oa(a):""}function vd(e,l){switch(e.tag){case 26:case 27:case 5:return oa(e.type);case 16:return oa("Lazy");case 13:return e.child!==l&&l!==null?oa("Suspense Fallback"):oa("Suspense");case 19:return oa("SuspenseList");case 0:case 15:return Qi(e.type,!1);case 11:return Qi(e.type.render,!1);case 1:return Qi(e.type,!0);case 31:return oa("Activity");default:return""}}function us(e){try{var l="",a=null;do l+=vd(e,a),a=e,e=e.return;while(e);return l}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var Xi=Object.prototype.hasOwnProperty,Ri=j.unstable_scheduleCallback,Zi=j.unstable_cancelCallback,yd=j.unstable_shouldYield,pd=j.unstable_requestPaint,Ce=j.unstable_now,bd=j.unstable_getCurrentPriorityLevel,ss=j.unstable_ImmediatePriority,rs=j.unstable_UserBlockingPriority,xn=j.unstable_NormalPriority,xd=j.unstable_LowPriority,os=j.unstable_IdlePriority,jd=j.log,Sd=j.unstable_setDisableYieldValue,xt=null,Ge=null;function Cl(e){if(typeof jd=="function"&&Sd(e),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(xt,e)}catch{}}var Qe=Math.clz32?Math.clz32:Ad,Nd=Math.log,zd=Math.LN2;function Ad(e){return e>>>=0,e===0?32:31-(Nd(e)/zd|0)|0}var jn=256,Sn=262144,Nn=4194304;function fa(e){var l=e&42;if(l!==0)return l;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function zn(e,l,a){var t=e.pendingLanes;if(t===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=t&134217727;return s!==0?(t=s&~i,t!==0?n=fa(t):(u&=s,u!==0?n=fa(u):a||(a=s&~e,a!==0&&(n=fa(a))))):(s=t&~i,s!==0?n=fa(s):u!==0?n=fa(u):a||(a=t&~e,a!==0&&(n=fa(a)))),n===0?0:l!==0&&l!==n&&(l&i)===0&&(i=n&-n,a=l&-l,i>=a||i===32&&(a&4194048)!==0)?l:n}function jt(e,l){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&l)===0}function Td(e,l){switch(e){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fs(){var e=Nn;return Nn<<=1,(Nn&62914560)===0&&(Nn=4194304),e}function Vi(e){for(var l=[],a=0;31>a;a++)l.push(e);return l}function St(e,l){e.pendingLanes|=l,l!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ed(e,l,a,t,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,h=e.hiddenUpdates;for(a=u&~a;0<a;){var y=31-Qe(a),x=1<<y;s[y]=0,r[y]=-1;var g=h[y];if(g!==null)for(h[y]=null,y=0;y<g.length;y++){var v=g[y];v!==null&&(v.lane&=-536870913)}a&=~x}t!==0&&ds(e,t,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~l))}function ds(e,l,a){e.pendingLanes|=l,e.suspendedLanes&=~l;var t=31-Qe(l);e.entangledLanes|=l,e.entanglements[t]=e.entanglements[t]|1073741824|a&261930}function ms(e,l){var a=e.entangledLanes|=l;for(e=e.entanglements;a;){var t=31-Qe(a),n=1<<t;n&l|e[t]&l&&(e[t]|=l),a&=~n}}function hs(e,l){var a=l&-l;return a=(a&42)!==0?1:Li(a),(a&(e.suspendedLanes|l))!==0?0:a}function Li(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ki(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gs(){var e=N.p;return e!==0?e:(e=window.event,e===void 0?32:ad(e.type))}function vs(e,l){var a=N.p;try{return N.p=e,l()}finally{N.p=a}}var Gl=Math.random().toString(36).slice(2),Ne="__reactFiber$"+Gl,Ue="__reactProps$"+Gl,Ya="__reactContainer$"+Gl,Ji="__reactEvents$"+Gl,Md="__reactListeners$"+Gl,Dd="__reactHandles$"+Gl,ys="__reactResources$"+Gl,Nt="__reactMarker$"+Gl;function ki(e){delete e[Ne],delete e[Ue],delete e[Ji],delete e[Md],delete e[Dd]}function Ha(e){var l=e[Ne];if(l)return l;for(var a=e.parentNode;a;){if(l=a[Ya]||a[Ne]){if(a=l.alternate,l.child!==null||a!==null&&a.child!==null)for(e=Qf(e);e!==null;){if(a=e[Ne])return a;e=Qf(e)}return l}e=a,a=e.parentNode}return null}function _a(e){if(e=e[Ne]||e[Ya]){var l=e.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return e}return null}function zt(e){var l=e.tag;if(l===5||l===26||l===27||l===6)return e.stateNode;throw Error(d(33))}function wa(e){var l=e[ys];return l||(l=e[ys]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function xe(e){e[Nt]=!0}var ps=new Set,bs={};function da(e,l){Ca(e,l),Ca(e+"Capture",l)}function Ca(e,l){for(bs[e]=l,e=0;e<l.length;e++)ps.add(l[e])}var Od=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xs={},js={};function Ud(e){return Xi.call(js,e)?!0:Xi.call(xs,e)?!1:Od.test(e)?js[e]=!0:(xs[e]=!0,!1)}function An(e,l,a){if(Ud(l))if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(l);return;case"boolean":var t=l.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){e.removeAttribute(l);return}}e.setAttribute(l,""+a)}}function Tn(e,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttribute(l,""+a)}}function pl(e,l,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(l,a,""+t)}}function $e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ss(e){var l=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function qd(e,l,a){var t=Object.getOwnPropertyDescriptor(e.constructor.prototype,l);if(!e.hasOwnProperty(l)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var n=t.get,i=t.set;return Object.defineProperty(e,l,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,l,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[l]}}}}function Wi(e){if(!e._valueTracker){var l=Ss(e)?"checked":"value";e._valueTracker=qd(e,l,""+e[l])}}function Ns(e){if(!e)return!1;var l=e._valueTracker;if(!l)return!0;var a=l.getValue(),t="";return e&&(t=Ss(e)?e.checked?"true":"false":e.value),e=t,e!==a?(l.setValue(e),!0):!1}function En(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bd=/[\n"\\]/g;function Fe(e){return e.replace(Bd,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function $i(e,l,a,t,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),l!=null?u==="number"?(l===0&&e.value===""||e.value!=l)&&(e.value=""+$e(l)):e.value!==""+$e(l)&&(e.value=""+$e(l)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),l!=null?Fi(e,u,$e(l)):a!=null?Fi(e,u,$e(a)):t!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+$e(s):e.removeAttribute("name")}function zs(e,l,a,t,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),l!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||l!=null)){Wi(e);return}a=a!=null?""+$e(a):"",l=l!=null?""+$e(l):a,s||l===e.value||(e.value=l),e.defaultValue=l}t=t??n,t=typeof t!="function"&&typeof t!="symbol"&&!!t,e.checked=s?e.checked:!!t,e.defaultChecked=!!t,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Wi(e)}function Fi(e,l,a){l==="number"&&En(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ga(e,l,a,t){if(e=e.options,l){l={};for(var n=0;n<a.length;n++)l["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=l.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&t&&(e[a].defaultSelected=!0)}else{for(a=""+$e(a),l=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,t&&(e[n].defaultSelected=!0);return}l!==null||e[n].disabled||(l=e[n])}l!==null&&(l.selected=!0)}}function As(e,l,a){if(l!=null&&(l=""+$e(l),l!==e.value&&(e.value=l),a==null)){e.defaultValue!==l&&(e.defaultValue=l);return}e.defaultValue=a!=null?""+$e(a):""}function Ts(e,l,a,t){if(l==null){if(t!=null){if(a!=null)throw Error(d(92));if(yl(t)){if(1<t.length)throw Error(d(93));t=t[0]}a=t}a==null&&(a=""),l=a}a=$e(l),e.defaultValue=a,t=e.textContent,t===a&&t!==""&&t!==null&&(e.value=t),Wi(e)}function Qa(e,l){if(l){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=l;return}}e.textContent=l}var Yd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Es(e,l,a){var t=l.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?t?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="":t?e.setProperty(l,a):typeof a!="number"||a===0||Yd.has(l)?l==="float"?e.cssFloat=a:e[l]=(""+a).trim():e[l]=a+"px"}function Ms(e,l,a){if(l!=null&&typeof l!="object")throw Error(d(62));if(e=e.style,a!=null){for(var t in a)!a.hasOwnProperty(t)||l!=null&&l.hasOwnProperty(t)||(t.indexOf("--")===0?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="");for(var n in l)t=l[n],l.hasOwnProperty(n)&&a[n]!==t&&Es(e,n,t)}else for(var i in l)l.hasOwnProperty(i)&&Es(e,i,l[i])}function Ii(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_d=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mn(e){return _d.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function bl(){}var Pi=null;function ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xa=null,Ra=null;function Ds(e){var l=_a(e);if(l&&(e=l.stateNode)){var a=e[Ue]||null;e:switch(e=l.stateNode,l.type){case"input":if($i(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),l=a.name,a.type==="radio"&&l!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Fe(""+l)+'"][type="radio"]'),l=0;l<a.length;l++){var t=a[l];if(t!==e&&t.form===e.form){var n=t[Ue]||null;if(!n)throw Error(d(90));$i(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(l=0;l<a.length;l++)t=a[l],t.form===e.form&&Ns(t)}break e;case"textarea":As(e,a.value,a.defaultValue);break e;case"select":l=a.value,l!=null&&Ga(e,!!a.multiple,l,!1)}}}var lc=!1;function Os(e,l,a){if(lc)return e(l,a);lc=!0;try{var t=e(l);return t}finally{if(lc=!1,(Xa!==null||Ra!==null)&&(gi(),Xa&&(l=Xa,e=Ra,Ra=Xa=null,Ds(l),e)))for(l=0;l<e.length;l++)Ds(e[l])}}function At(e,l){var a=e.stateNode;if(a===null)return null;var t=a[Ue]||null;if(t===null)return null;a=t[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,l,typeof a));return a}var xl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=!1;if(xl)try{var Tt={};Object.defineProperty(Tt,"passive",{get:function(){ac=!0}}),window.addEventListener("test",Tt,Tt),window.removeEventListener("test",Tt,Tt)}catch{ac=!1}var Ql=null,tc=null,Dn=null;function Us(){if(Dn)return Dn;var e,l=tc,a=l.length,t,n="value"in Ql?Ql.value:Ql.textContent,i=n.length;for(e=0;e<a&&l[e]===n[e];e++);var u=a-e;for(t=1;t<=u&&l[a-t]===n[i-t];t++);return Dn=n.slice(e,1<t?1-t:void 0)}function On(e){var l=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&l===13&&(e=13)):e=l,e===10&&(e=13),32<=e||e===13?e:0}function Un(){return!0}function qs(){return!1}function qe(e){function l(a,t,n,i,u){this._reactName=a,this._targetInst=n,this.type=t,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Un:qs,this.isPropagationStopped=qs,this}return O(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Un)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Un)},persist:function(){},isPersistent:Un}),l}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qn=qe(ma),Et=O({},ma,{view:0,detail:0}),wd=qe(Et),nc,ic,Mt,Bn=O({},Et,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mt&&(Mt&&e.type==="mousemove"?(nc=e.screenX-Mt.screenX,ic=e.screenY-Mt.screenY):ic=nc=0,Mt=e),nc)},movementY:function(e){return"movementY"in e?e.movementY:ic}}),Bs=qe(Bn),Cd=O({},Bn,{dataTransfer:0}),Gd=qe(Cd),Qd=O({},Et,{relatedTarget:0}),cc=qe(Qd),Xd=O({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),Rd=qe(Xd),Zd=O({},ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vd=qe(Zd),Ld=O({},ma,{data:0}),Ys=qe(Ld),Kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wd(e){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(e):(e=kd[e])?!!l[e]:!1}function uc(){return Wd}var $d=O({},Et,{key:function(e){if(e.key){var l=Kd[e.key]||e.key;if(l!=="Unidentified")return l}return e.type==="keypress"?(e=On(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(e){return e.type==="keypress"?On(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?On(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fd=qe($d),Id=O({},Bn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hs=qe(Id),Pd=O({},Et,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),em=qe(Pd),lm=O({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),am=qe(lm),tm=O({},Bn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nm=qe(tm),im=O({},ma,{newState:0,oldState:0}),cm=qe(im),um=[9,13,27,32],sc=xl&&"CompositionEvent"in window,Dt=null;xl&&"documentMode"in document&&(Dt=document.documentMode);var sm=xl&&"TextEvent"in window&&!Dt,_s=xl&&(!sc||Dt&&8<Dt&&11>=Dt),ws=" ",Cs=!1;function Gs(e,l){switch(e){case"keyup":return um.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Za=!1;function rm(e,l){switch(e){case"compositionend":return Qs(l);case"keypress":return l.which!==32?null:(Cs=!0,ws);case"textInput":return e=l.data,e===ws&&Cs?null:e;default:return null}}function om(e,l){if(Za)return e==="compositionend"||!sc&&Gs(e,l)?(e=Us(),Dn=tc=Ql=null,Za=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return _s&&l.locale!=="ko"?null:l.data;default:return null}}var fm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xs(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l==="input"?!!fm[e.type]:l==="textarea"}function Rs(e,l,a,t){Xa?Ra?Ra.push(t):Ra=[t]:Xa=t,l=Si(l,"onChange"),0<l.length&&(a=new qn("onChange","change",null,a,t),e.push({event:a,listeners:l}))}var Ot=null,Ut=null;function dm(e){Tf(e,0)}function Yn(e){var l=zt(e);if(Ns(l))return e}function Zs(e,l){if(e==="change")return l}var Vs=!1;if(xl){var rc;if(xl){var oc="oninput"in document;if(!oc){var Ls=document.createElement("div");Ls.setAttribute("oninput","return;"),oc=typeof Ls.oninput=="function"}rc=oc}else rc=!1;Vs=rc&&(!document.documentMode||9<document.documentMode)}function Ks(){Ot&&(Ot.detachEvent("onpropertychange",Js),Ut=Ot=null)}function Js(e){if(e.propertyName==="value"&&Yn(Ut)){var l=[];Rs(l,Ut,e,ec(e)),Os(dm,l)}}function mm(e,l,a){e==="focusin"?(Ks(),Ot=l,Ut=a,Ot.attachEvent("onpropertychange",Js)):e==="focusout"&&Ks()}function hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yn(Ut)}function gm(e,l){if(e==="click")return Yn(l)}function vm(e,l){if(e==="input"||e==="change")return Yn(l)}function ym(e,l){return e===l&&(e!==0||1/e===1/l)||e!==e&&l!==l}var Xe=typeof Object.is=="function"?Object.is:ym;function qt(e,l){if(Xe(e,l))return!0;if(typeof e!="object"||e===null||typeof l!="object"||l===null)return!1;var a=Object.keys(e),t=Object.keys(l);if(a.length!==t.length)return!1;for(t=0;t<a.length;t++){var n=a[t];if(!Xi.call(l,n)||!Xe(e[n],l[n]))return!1}return!0}function ks(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ws(e,l){var a=ks(e);e=0;for(var t;a;){if(a.nodeType===3){if(t=e+a.textContent.length,e<=l&&t>=l)return{node:a,offset:l-e};e=t}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ks(a)}}function $s(e,l){return e&&l?e===l?!0:e&&e.nodeType===3?!1:l&&l.nodeType===3?$s(e,l.parentNode):"contains"in e?e.contains(l):e.compareDocumentPosition?!!(e.compareDocumentPosition(l)&16):!1:!1}function Fs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var l=En(e.document);l instanceof e.HTMLIFrameElement;){try{var a=typeof l.contentWindow.location.href=="string"}catch{a=!1}if(a)e=l.contentWindow;else break;l=En(e.document)}return l}function fc(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l&&(l==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||l==="textarea"||e.contentEditable==="true")}var pm=xl&&"documentMode"in document&&11>=document.documentMode,Va=null,dc=null,Bt=null,mc=!1;function Is(e,l,a){var t=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mc||Va==null||Va!==En(t)||(t=Va,"selectionStart"in t&&fc(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Bt&&qt(Bt,t)||(Bt=t,t=Si(dc,"onSelect"),0<t.length&&(l=new qn("onSelect","select",null,l,a),e.push({event:l,listeners:t}),l.target=Va)))}function ha(e,l){var a={};return a[e.toLowerCase()]=l.toLowerCase(),a["Webkit"+e]="webkit"+l,a["Moz"+e]="moz"+l,a}var La={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionrun:ha("Transition","TransitionRun"),transitionstart:ha("Transition","TransitionStart"),transitioncancel:ha("Transition","TransitionCancel"),transitionend:ha("Transition","TransitionEnd")},hc={},Ps={};xl&&(Ps=document.createElement("div").style,"AnimationEvent"in window||(delete La.animationend.animation,delete La.animationiteration.animation,delete La.animationstart.animation),"TransitionEvent"in window||delete La.transitionend.transition);function ga(e){if(hc[e])return hc[e];if(!La[e])return e;var l=La[e],a;for(a in l)if(l.hasOwnProperty(a)&&a in Ps)return hc[e]=l[a];return e}var er=ga("animationend"),lr=ga("animationiteration"),ar=ga("animationstart"),bm=ga("transitionrun"),xm=ga("transitionstart"),jm=ga("transitioncancel"),tr=ga("transitionend"),nr=new Map,gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gc.push("scrollEnd");function ul(e,l){nr.set(e,l),da(l,[e])}var Hn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ie=[],Ka=0,vc=0;function _n(){for(var e=Ka,l=vc=Ka=0;l<e;){var a=Ie[l];Ie[l++]=null;var t=Ie[l];Ie[l++]=null;var n=Ie[l];Ie[l++]=null;var i=Ie[l];if(Ie[l++]=null,t!==null&&n!==null){var u=t.pending;u===null?n.next=n:(n.next=u.next,u.next=n),t.pending=n}i!==0&&ir(a,n,i)}}function wn(e,l,a,t){Ie[Ka++]=e,Ie[Ka++]=l,Ie[Ka++]=a,Ie[Ka++]=t,vc|=t,e.lanes|=t,e=e.alternate,e!==null&&(e.lanes|=t)}function yc(e,l,a,t){return wn(e,l,a,t),Cn(e)}function va(e,l){return wn(e,null,null,l),Cn(e)}function ir(e,l,a){e.lanes|=a;var t=e.alternate;t!==null&&(t.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,t=i.alternate,t!==null&&(t.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&l!==null&&(n=31-Qe(a),e=i.hiddenUpdates,t=e[n],t===null?e[n]=[l]:t.push(l),l.lane=a|536870912),i):null}function Cn(e){if(50<ln)throw ln=0,Tu=null,Error(d(185));for(var l=e.return;l!==null;)e=l,l=e.return;return e.tag===3?e.stateNode:null}var Ja={};function Sm(e,l,a,t){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,l,a,t){return new Sm(e,l,a,t)}function pc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jl(e,l){var a=e.alternate;return a===null?(a=Re(e.tag,l,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=l,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,l=e.dependencies,a.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function cr(e,l){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=l,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,l=a.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),e}function Gn(e,l,a,t,n,i){var u=0;if(t=e,typeof e=="function")pc(e)&&(u=1);else if(typeof e=="string")u=Eh(e,a,be.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ua:return e=Re(31,a,l,n),e.elementType=Ua,e.lanes=i,e;case Me:return ya(a.children,n,i,l);case Da:u=8,n|=24;break;case Oa:return e=Re(12,a,l,n|2),e.elementType=Oa,e.lanes=i,e;case ra:return e=Re(13,a,l,n),e.elementType=ra,e.lanes=i,e;case ol:return e=Re(19,a,l,n),e.elementType=ol,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ke:u=10;break e;case pt:u=9;break e;case _l:u=11;break e;case vl:u=14;break e;case cl:u=16,t=null;break e}u=29,a=Error(d(130,e===null?"null":typeof e,"")),t=null}return l=Re(u,a,l,n),l.elementType=e,l.type=t,l.lanes=i,l}function ya(e,l,a,t){return e=Re(7,e,t,l),e.lanes=a,e}function bc(e,l,a){return e=Re(6,e,null,l),e.lanes=a,e}function ur(e){var l=Re(18,null,null,0);return l.stateNode=e,l}function xc(e,l,a){return l=Re(4,e.children!==null?e.children:[],e.key,l),l.lanes=a,l.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},l}var sr=new WeakMap;function Pe(e,l){if(typeof e=="object"&&e!==null){var a=sr.get(e);return a!==void 0?a:(l={value:e,source:l,stack:us(l)},sr.set(e,l),l)}return{value:e,source:l,stack:us(l)}}var ka=[],Wa=0,Qn=null,Yt=0,el=[],ll=0,Xl=null,dl=1,ml="";function Sl(e,l){ka[Wa++]=Yt,ka[Wa++]=Qn,Qn=e,Yt=l}function rr(e,l,a){el[ll++]=dl,el[ll++]=ml,el[ll++]=Xl,Xl=e;var t=dl;e=ml;var n=32-Qe(t)-1;t&=~(1<<n),a+=1;var i=32-Qe(l)+n;if(30<i){var u=n-n%5;i=(t&(1<<u)-1).toString(32),t>>=u,n-=u,dl=1<<32-Qe(l)+n|a<<n|t,ml=i+e}else dl=1<<i|a<<n|t,ml=e}function jc(e){e.return!==null&&(Sl(e,1),rr(e,1,0))}function Sc(e){for(;e===Qn;)Qn=ka[--Wa],ka[Wa]=null,Yt=ka[--Wa],ka[Wa]=null;for(;e===Xl;)Xl=el[--ll],el[ll]=null,ml=el[--ll],el[ll]=null,dl=el[--ll],el[ll]=null}function or(e,l){el[ll++]=dl,el[ll++]=ml,el[ll++]=Xl,dl=l.id,ml=l.overflow,Xl=e}var ze=null,ne=null,Z=!1,Rl=null,al=!1,Nc=Error(d(519));function Zl(e){var l=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ht(Pe(l,e)),Nc}function fr(e){var l=e.stateNode,a=e.type,t=e.memoizedProps;switch(l[Ne]=e,l[Ue]=t,a){case"dialog":Q("cancel",l),Q("close",l);break;case"iframe":case"object":case"embed":Q("load",l);break;case"video":case"audio":for(a=0;a<tn.length;a++)Q(tn[a],l);break;case"source":Q("error",l);break;case"img":case"image":case"link":Q("error",l),Q("load",l);break;case"details":Q("toggle",l);break;case"input":Q("invalid",l),zs(l,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":Q("invalid",l);break;case"textarea":Q("invalid",l),Ts(l,t.value,t.defaultValue,t.children)}a=t.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||l.textContent===""+a||t.suppressHydrationWarning===!0||Of(l.textContent,a)?(t.popover!=null&&(Q("beforetoggle",l),Q("toggle",l)),t.onScroll!=null&&Q("scroll",l),t.onScrollEnd!=null&&Q("scrollend",l),t.onClick!=null&&(l.onclick=bl),l=!0):l=!1,l||Zl(e,!0)}function dr(e){for(ze=e.return;ze;)switch(ze.tag){case 5:case 31:case 13:al=!1;return;case 27:case 3:al=!0;return;default:ze=ze.return}}function $a(e){if(e!==ze)return!1;if(!Z)return dr(e),Z=!0,!1;var l=e.tag,a;if((a=l!==3&&l!==27)&&((a=l===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xu(e.type,e.memoizedProps)),a=!a),a&&ne&&Zl(e),dr(e),l===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));ne=Gf(e)}else if(l===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));ne=Gf(e)}else l===27?(l=ne,ta(e.type)?(e=Ku,Ku=null,ne=e):ne=l):ne=ze?nl(e.stateNode.nextSibling):null;return!0}function pa(){ne=ze=null,Z=!1}function zc(){var e=Rl;return e!==null&&(_e===null?_e=e:_e.push.apply(_e,e),Rl=null),e}function Ht(e){Rl===null?Rl=[e]:Rl.push(e)}var Ac=De(null),ba=null,Nl=null;function Vl(e,l,a){k(Ac,l._currentValue),l._currentValue=a}function zl(e){e._currentValue=Ac.current,se(Ac)}function Tc(e,l,a){for(;e!==null;){var t=e.alternate;if((e.childLanes&l)!==l?(e.childLanes|=l,t!==null&&(t.childLanes|=l)):t!==null&&(t.childLanes&l)!==l&&(t.childLanes|=l),e===a)break;e=e.return}}function Ec(e,l,a,t){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var r=0;r<l.length;r++)if(s.context===l[r]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Tc(i.return,a,e),t||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(d(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Tc(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function Fa(e,l,a,t){e=null;for(var n=l,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var s=n.type;Xe(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===yn.current){if(u=n.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(rn):e=[rn])}n=n.return}e!==null&&Ec(l,e,a,t),l.flags|=262144}function Xn(e){for(e=e.firstContext;e!==null;){if(!Xe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xa(e){ba=e,Nl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ae(e){return mr(ba,e)}function Rn(e,l){return ba===null&&xa(e),mr(e,l)}function mr(e,l){var a=l._currentValue;if(l={context:l,memoizedValue:a,next:null},Nl===null){if(e===null)throw Error(d(308));Nl=l,e.dependencies={lanes:0,firstContext:l},e.flags|=524288}else Nl=Nl.next=l;return a}var Nm=typeof AbortController<"u"?AbortController:function(){var e=[],l=this.signal={aborted:!1,addEventListener:function(a,t){e.push(t)}};this.abort=function(){l.aborted=!0,e.forEach(function(a){return a()})}},zm=j.unstable_scheduleCallback,Am=j.unstable_NormalPriority,me={$$typeof:ke,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mc(){return{controller:new Nm,data:new Map,refCount:0}}function _t(e){e.refCount--,e.refCount===0&&zm(Am,function(){e.controller.abort()})}var wt=null,Dc=0,Ia=0,Pa=null;function Tm(e,l){if(wt===null){var a=wt=[];Dc=0,Ia=qu(),Pa={status:"pending",value:void 0,then:function(t){a.push(t)}}}return Dc++,l.then(hr,hr),l}function hr(){if(--Dc===0&&wt!==null){Pa!==null&&(Pa.status="fulfilled");var e=wt;wt=null,Ia=0,Pa=null;for(var l=0;l<e.length;l++)(0,e[l])()}}function Em(e,l){var a=[],t={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){t.status="fulfilled",t.value=l;for(var n=0;n<a.length;n++)(0,a[n])(l)},function(n){for(t.status="rejected",t.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),t}var gr=b.S;b.S=function(e,l){Po=Ce(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&Tm(e,l),gr!==null&&gr(e,l)};var ja=De(null);function Oc(){var e=ja.current;return e!==null?e:le.pooledCache}function Zn(e,l){l===null?k(ja,ja.current):k(ja,l.pool)}function vr(){var e=Oc();return e===null?null:{parent:me._currentValue,pool:e}}var et=Error(d(460)),Uc=Error(d(474)),Vn=Error(d(542)),Ln={then:function(){}};function yr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pr(e,l,a){switch(a=e[a],a===void 0?e.push(l):a!==l&&(l.then(bl,bl),l=a),l.status){case"fulfilled":return l.value;case"rejected":throw e=l.reason,xr(e),e;default:if(typeof l.status=="string")l.then(bl,bl);else{if(e=le,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=l,e.status="pending",e.then(function(t){if(l.status==="pending"){var n=l;n.status="fulfilled",n.value=t}},function(t){if(l.status==="pending"){var n=l;n.status="rejected",n.reason=t}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw e=l.reason,xr(e),e}throw Na=l,et}}function Sa(e){try{var l=e._init;return l(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Na=a,et):a}}var Na=null;function br(){if(Na===null)throw Error(d(459));var e=Na;return Na=null,e}function xr(e){if(e===et||e===Vn)throw Error(d(483))}var lt=null,Ct=0;function Kn(e){var l=Ct;return Ct+=1,lt===null&&(lt=[]),pr(lt,e,l)}function Gt(e,l){l=l.props.ref,e.ref=l!==void 0?l:null}function Jn(e,l){throw l.$$typeof===S?Error(d(525)):(e=Object.prototype.toString.call(l),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":e)))}function jr(e){function l(f,o){if(e){var m=f.deletions;m===null?(f.deletions=[o],f.flags|=16):m.push(o)}}function a(f,o){if(!e)return null;for(;o!==null;)l(f,o),o=o.sibling;return null}function t(f){for(var o=new Map;f!==null;)f.key!==null?o.set(f.key,f):o.set(f.index,f),f=f.sibling;return o}function n(f,o){return f=jl(f,o),f.index=0,f.sibling=null,f}function i(f,o,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<o?(f.flags|=67108866,o):m):(f.flags|=67108866,o)):(f.flags|=1048576,o)}function u(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function s(f,o,m,p){return o===null||o.tag!==6?(o=bc(m,f.mode,p),o.return=f,o):(o=n(o,m),o.return=f,o)}function r(f,o,m,p){var E=m.type;return E===Me?y(f,o,m.props.children,p,m.key):o!==null&&(o.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===cl&&Sa(E)===o.type)?(o=n(o,m.props),Gt(o,m),o.return=f,o):(o=Gn(m.type,m.key,m.props,null,f.mode,p),Gt(o,m),o.return=f,o)}function h(f,o,m,p){return o===null||o.tag!==4||o.stateNode.containerInfo!==m.containerInfo||o.stateNode.implementation!==m.implementation?(o=xc(m,f.mode,p),o.return=f,o):(o=n(o,m.children||[]),o.return=f,o)}function y(f,o,m,p,E){return o===null||o.tag!==7?(o=ya(m,f.mode,p,E),o.return=f,o):(o=n(o,m),o.return=f,o)}function x(f,o,m){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=bc(""+o,f.mode,m),o.return=f,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Se:return m=Gn(o.type,o.key,o.props,null,f.mode,m),Gt(m,o),m.return=f,m;case pe:return o=xc(o,f.mode,m),o.return=f,o;case cl:return o=Sa(o),x(f,o,m)}if(yl(o)||We(o))return o=ya(o,f.mode,m,null),o.return=f,o;if(typeof o.then=="function")return x(f,Kn(o),m);if(o.$$typeof===ke)return x(f,Rn(f,o),m);Jn(f,o)}return null}function g(f,o,m,p){var E=o!==null?o.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return E!==null?null:s(f,o,""+m,p);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Se:return m.key===E?r(f,o,m,p):null;case pe:return m.key===E?h(f,o,m,p):null;case cl:return m=Sa(m),g(f,o,m,p)}if(yl(m)||We(m))return E!==null?null:y(f,o,m,p,null);if(typeof m.then=="function")return g(f,o,Kn(m),p);if(m.$$typeof===ke)return g(f,o,Rn(f,m),p);Jn(f,m)}return null}function v(f,o,m,p,E){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return f=f.get(m)||null,s(o,f,""+p,E);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Se:return f=f.get(p.key===null?m:p.key)||null,r(o,f,p,E);case pe:return f=f.get(p.key===null?m:p.key)||null,h(o,f,p,E);case cl:return p=Sa(p),v(f,o,m,p,E)}if(yl(p)||We(p))return f=f.get(m)||null,y(o,f,p,E,null);if(typeof p.then=="function")return v(f,o,m,Kn(p),E);if(p.$$typeof===ke)return v(f,o,m,Rn(o,p),E);Jn(o,p)}return null}function A(f,o,m,p){for(var E=null,V=null,T=o,w=o=0,R=null;T!==null&&w<m.length;w++){T.index>w?(R=T,T=null):R=T.sibling;var L=g(f,T,m[w],p);if(L===null){T===null&&(T=R);break}e&&T&&L.alternate===null&&l(f,T),o=i(L,o,w),V===null?E=L:V.sibling=L,V=L,T=R}if(w===m.length)return a(f,T),Z&&Sl(f,w),E;if(T===null){for(;w<m.length;w++)T=x(f,m[w],p),T!==null&&(o=i(T,o,w),V===null?E=T:V.sibling=T,V=T);return Z&&Sl(f,w),E}for(T=t(T);w<m.length;w++)R=v(T,f,w,m[w],p),R!==null&&(e&&R.alternate!==null&&T.delete(R.key===null?w:R.key),o=i(R,o,w),V===null?E=R:V.sibling=R,V=R);return e&&T.forEach(function(sa){return l(f,sa)}),Z&&Sl(f,w),E}function U(f,o,m,p){if(m==null)throw Error(d(151));for(var E=null,V=null,T=o,w=o=0,R=null,L=m.next();T!==null&&!L.done;w++,L=m.next()){T.index>w?(R=T,T=null):R=T.sibling;var sa=g(f,T,L.value,p);if(sa===null){T===null&&(T=R);break}e&&T&&sa.alternate===null&&l(f,T),o=i(sa,o,w),V===null?E=sa:V.sibling=sa,V=sa,T=R}if(L.done)return a(f,T),Z&&Sl(f,w),E;if(T===null){for(;!L.done;w++,L=m.next())L=x(f,L.value,p),L!==null&&(o=i(L,o,w),V===null?E=L:V.sibling=L,V=L);return Z&&Sl(f,w),E}for(T=t(T);!L.done;w++,L=m.next())L=v(T,f,w,L.value,p),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?w:L.key),o=i(L,o,w),V===null?E=L:V.sibling=L,V=L);return e&&T.forEach(function(Ch){return l(f,Ch)}),Z&&Sl(f,w),E}function ee(f,o,m,p){if(typeof m=="object"&&m!==null&&m.type===Me&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Se:e:{for(var E=m.key;o!==null;){if(o.key===E){if(E=m.type,E===Me){if(o.tag===7){a(f,o.sibling),p=n(o,m.props.children),p.return=f,f=p;break e}}else if(o.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===cl&&Sa(E)===o.type){a(f,o.sibling),p=n(o,m.props),Gt(p,m),p.return=f,f=p;break e}a(f,o);break}else l(f,o);o=o.sibling}m.type===Me?(p=ya(m.props.children,f.mode,p,m.key),p.return=f,f=p):(p=Gn(m.type,m.key,m.props,null,f.mode,p),Gt(p,m),p.return=f,f=p)}return u(f);case pe:e:{for(E=m.key;o!==null;){if(o.key===E)if(o.tag===4&&o.stateNode.containerInfo===m.containerInfo&&o.stateNode.implementation===m.implementation){a(f,o.sibling),p=n(o,m.children||[]),p.return=f,f=p;break e}else{a(f,o);break}else l(f,o);o=o.sibling}p=xc(m,f.mode,p),p.return=f,f=p}return u(f);case cl:return m=Sa(m),ee(f,o,m,p)}if(yl(m))return A(f,o,m,p);if(We(m)){if(E=We(m),typeof E!="function")throw Error(d(150));return m=E.call(m),U(f,o,m,p)}if(typeof m.then=="function")return ee(f,o,Kn(m),p);if(m.$$typeof===ke)return ee(f,o,Rn(f,m),p);Jn(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,o!==null&&o.tag===6?(a(f,o.sibling),p=n(o,m),p.return=f,f=p):(a(f,o),p=bc(m,f.mode,p),p.return=f,f=p),u(f)):a(f,o)}return function(f,o,m,p){try{Ct=0;var E=ee(f,o,m,p);return lt=null,E}catch(T){if(T===et||T===Vn)throw T;var V=Re(29,T,null,f.mode);return V.lanes=p,V.return=f,V}}}var za=jr(!0),Sr=jr(!1),Ll=!1;function qc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bc(e,l){e=e.updateQueue,l.updateQueue===e&&(l.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Jl(e,l,a){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(J&2)!==0){var n=t.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),t.pending=l,l=Cn(e),ir(e,null,a),l}return wn(e,t,l,a),Cn(e)}function Qt(e,l,a){if(l=l.updateQueue,l!==null&&(l=l.shared,(a&4194048)!==0)){var t=l.lanes;t&=e.pendingLanes,a|=t,l.lanes=a,ms(e,a)}}function Yc(e,l){var a=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,a===t)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=l:i=i.next=l}else n=i=l;a={baseState:t.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:t.shared,callbacks:t.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=l:e.next=l,a.lastBaseUpdate=l}var Hc=!1;function Xt(){if(Hc){var e=Pa;if(e!==null)throw e}}function Rt(e,l,a,t){Hc=!1;var n=e.updateQueue;Ll=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var r=s,h=r.next;r.next=null,u===null?i=h:u.next=h,u=r;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==u&&(s===null?y.firstBaseUpdate=h:s.next=h,y.lastBaseUpdate=r))}if(i!==null){var x=n.baseState;u=0,y=h=r=null,s=i;do{var g=s.lane&-536870913,v=g!==s.lane;if(v?(X&g)===g:(t&g)===g){g!==0&&g===Ia&&(Hc=!0),y!==null&&(y=y.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var A=e,U=s;g=l;var ee=a;switch(U.tag){case 1:if(A=U.payload,typeof A=="function"){x=A.call(ee,x,g);break e}x=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=U.payload,g=typeof A=="function"?A.call(ee,x,g):A,g==null)break e;x=O({},x,g);break e;case 2:Ll=!0}}g=s.callback,g!==null&&(e.flags|=64,v&&(e.flags|=8192),v=n.callbacks,v===null?n.callbacks=[g]:v.push(g))}else v={lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(h=y=v,r=x):y=y.next=v,u|=g;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;v=s,s=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);y===null&&(r=x),n.baseState=r,n.firstBaseUpdate=h,n.lastBaseUpdate=y,i===null&&(n.shared.lanes=0),Il|=u,e.lanes=u,e.memoizedState=x}}function Nr(e,l){if(typeof e!="function")throw Error(d(191,e));e.call(l)}function zr(e,l){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Nr(a[e],l)}var at=De(null),kn=De(0);function Ar(e,l){e=Bl,k(kn,e),k(at,l),Bl=e|l.baseLanes}function _c(){k(kn,Bl),k(at,at.current)}function wc(){Bl=kn.current,se(at),se(kn)}var Ze=De(null),tl=null;function kl(e){var l=e.alternate;k(fe,fe.current&1),k(Ze,e),tl===null&&(l===null||at.current!==null||l.memoizedState!==null)&&(tl=e)}function Cc(e){k(fe,fe.current),k(Ze,e),tl===null&&(tl=e)}function Tr(e){e.tag===22?(k(fe,fe.current),k(Ze,e),tl===null&&(tl=e)):Wl()}function Wl(){k(fe,fe.current),k(Ze,Ze.current)}function Ve(e){se(Ze),tl===e&&(tl=null),se(fe)}var fe=De(0);function Wn(e){for(var l=e;l!==null;){if(l.tag===13){var a=l.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vu(a)||Lu(a)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Al=0,_=null,I=null,he=null,$n=!1,tt=!1,Aa=!1,Fn=0,Zt=0,nt=null,Mm=0;function re(){throw Error(d(321))}function Gc(e,l){if(l===null)return!1;for(var a=0;a<l.length&&a<e.length;a++)if(!Xe(e[a],l[a]))return!1;return!0}function Qc(e,l,a,t,n,i){return Al=i,_=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,b.H=e===null||e.memoizedState===null?ro:lu,Aa=!1,i=a(t,n),Aa=!1,tt&&(i=Mr(l,a,t,n)),Er(e),i}function Er(e){b.H=Kt;var l=I!==null&&I.next!==null;if(Al=0,he=I=_=null,$n=!1,Zt=0,nt=null,l)throw Error(d(300));e===null||ge||(e=e.dependencies,e!==null&&Xn(e)&&(ge=!0))}function Mr(e,l,a,t){_=e;var n=0;do{if(tt&&(nt=null),Zt=0,tt=!1,25<=n)throw Error(d(301));if(n+=1,he=I=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}b.H=oo,i=l(a,t)}while(tt);return i}function Dm(){var e=b.H,l=e.useState()[0];return l=typeof l.then=="function"?Vt(l):l,e=e.useState()[0],(I!==null?I.memoizedState:null)!==e&&(_.flags|=1024),l}function Xc(){var e=Fn!==0;return Fn=0,e}function Rc(e,l,a){l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~a}function Zc(e){if($n){for(e=e.memoizedState;e!==null;){var l=e.queue;l!==null&&(l.pending=null),e=e.next}$n=!1}Al=0,he=I=_=null,tt=!1,Zt=Fn=0,nt=null}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?_.memoizedState=he=e:he=he.next=e,he}function de(){if(I===null){var e=_.alternate;e=e!==null?e.memoizedState:null}else e=I.next;var l=he===null?_.memoizedState:he.next;if(l!==null)he=l,I=e;else{if(e===null)throw _.alternate===null?Error(d(467)):Error(d(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},he===null?_.memoizedState=he=e:he=he.next=e}return he}function In(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vt(e){var l=Zt;return Zt+=1,nt===null&&(nt=[]),e=pr(nt,e,l),l=_,(he===null?l.memoizedState:he.next)===null&&(l=l.alternate,b.H=l===null||l.memoizedState===null?ro:lu),e}function Pn(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vt(e);if(e.$$typeof===ke)return Ae(e)}throw Error(d(438,String(e)))}function Vc(e){var l=null,a=_.updateQueue;if(a!==null&&(l=a.memoCache),l==null){var t=_.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(l={data:t.data.map(function(n){return n.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),a===null&&(a=In(),_.updateQueue=a),a.memoCache=l,a=l.data[l.index],a===void 0)for(a=l.data[l.index]=Array(e),t=0;t<e;t++)a[t]=gn;return l.index++,a}function Tl(e,l){return typeof l=="function"?l(e):l}function ei(e){var l=de();return Lc(l,I,e)}function Lc(e,l,a){var t=e.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=a;var n=e.baseQueue,i=t.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}l.baseQueue=n=i,t.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{l=n.next;var s=u=null,r=null,h=l,y=!1;do{var x=h.lane&-536870913;if(x!==h.lane?(X&x)===x:(Al&x)===x){var g=h.revertLane;if(g===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),x===Ia&&(y=!0);else if((Al&g)===g){h=h.next,g===Ia&&(y=!0);continue}else x={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},r===null?(s=r=x,u=i):r=r.next=x,_.lanes|=g,Il|=g;x=h.action,Aa&&a(i,x),i=h.hasEagerState?h.eagerState:a(i,x)}else g={lane:x,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},r===null?(s=r=g,u=i):r=r.next=g,_.lanes|=x,Il|=x;h=h.next}while(h!==null&&h!==l);if(r===null?u=i:r.next=s,!Xe(i,e.memoizedState)&&(ge=!0,y&&(a=Pa,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=r,t.lastRenderedState=i}return n===null&&(t.lanes=0),[e.memoizedState,t.dispatch]}function Kc(e){var l=de(),a=l.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var t=a.dispatch,n=a.pending,i=l.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);Xe(i,l.memoizedState)||(ge=!0),l.memoizedState=i,l.baseQueue===null&&(l.baseState=i),a.lastRenderedState=i}return[i,t]}function Dr(e,l,a){var t=_,n=de(),i=Z;if(i){if(a===void 0)throw Error(d(407));a=a()}else a=l();var u=!Xe((I||n).memoizedState,a);if(u&&(n.memoizedState=a,ge=!0),n=n.queue,Wc(qr.bind(null,t,n,e),[e]),n.getSnapshot!==l||u||he!==null&&he.memoizedState.tag&1){if(t.flags|=2048,it(9,{destroy:void 0},Ur.bind(null,t,n,a,l),null),le===null)throw Error(d(349));i||(Al&127)!==0||Or(t,l,a)}return a}function Or(e,l,a){e.flags|=16384,e={getSnapshot:l,value:a},l=_.updateQueue,l===null?(l=In(),_.updateQueue=l,l.stores=[e]):(a=l.stores,a===null?l.stores=[e]:a.push(e))}function Ur(e,l,a,t){l.value=a,l.getSnapshot=t,Br(l)&&Yr(e)}function qr(e,l,a){return a(function(){Br(l)&&Yr(e)})}function Br(e){var l=e.getSnapshot;e=e.value;try{var a=l();return!Xe(e,a)}catch{return!0}}function Yr(e){var l=va(e,2);l!==null&&we(l,e,2)}function Jc(e){var l=Oe();if(typeof e=="function"){var a=e;if(e=a(),Aa){Cl(!0);try{a()}finally{Cl(!1)}}}return l.memoizedState=l.baseState=e,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tl,lastRenderedState:e},l}function Hr(e,l,a,t){return e.baseState=a,Lc(e,I,typeof t=="function"?t:Tl)}function Om(e,l,a,t,n){if(ti(e))throw Error(d(485));if(e=l.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};b.T!==null?a(!0):i.isTransition=!1,t(i),a=l.pending,a===null?(i.next=l.pending=i,_r(l,i)):(i.next=a.next,l.pending=a.next=i)}}function _r(e,l){var a=l.action,t=l.payload,n=e.state;if(l.isTransition){var i=b.T,u={};b.T=u;try{var s=a(n,t),r=b.S;r!==null&&r(u,s),wr(e,l,s)}catch(h){kc(e,l,h)}finally{i!==null&&u.types!==null&&(i.types=u.types),b.T=i}}else try{i=a(n,t),wr(e,l,i)}catch(h){kc(e,l,h)}}function wr(e,l,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(t){Cr(e,l,t)},function(t){return kc(e,l,t)}):Cr(e,l,a)}function Cr(e,l,a){l.status="fulfilled",l.value=a,Gr(l),e.state=a,l=e.pending,l!==null&&(a=l.next,a===l?e.pending=null:(a=a.next,l.next=a,_r(e,a)))}function kc(e,l,a){var t=e.pending;if(e.pending=null,t!==null){t=t.next;do l.status="rejected",l.reason=a,Gr(l),l=l.next;while(l!==t)}e.action=null}function Gr(e){e=e.listeners;for(var l=0;l<e.length;l++)(0,e[l])()}function Qr(e,l){return l}function Xr(e,l){if(Z){var a=le.formState;if(a!==null){e:{var t=_;if(Z){if(ne){l:{for(var n=ne,i=al;n.nodeType!==8;){if(!i){n=null;break l}if(n=nl(n.nextSibling),n===null){n=null;break l}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ne=nl(n.nextSibling),t=n.data==="F!";break e}}Zl(t)}t=!1}t&&(l=a[0])}}return a=Oe(),a.memoizedState=a.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:l},a.queue=t,a=co.bind(null,_,t),t.dispatch=a,t=Jc(!1),i=eu.bind(null,_,!1,t.queue),t=Oe(),n={state:l,dispatch:null,action:e,pending:null},t.queue=n,a=Om.bind(null,_,n,i,a),n.dispatch=a,t.memoizedState=e,[l,a,!1]}function Rr(e){var l=de();return Zr(l,I,e)}function Zr(e,l,a){if(l=Lc(e,l,Qr)[0],e=ei(Tl)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var t=Vt(l)}catch(u){throw u===et?Vn:u}else t=l;l=de();var n=l.queue,i=n.dispatch;return a!==l.memoizedState&&(_.flags|=2048,it(9,{destroy:void 0},Um.bind(null,n,a),null)),[t,i,e]}function Um(e,l){e.action=l}function Vr(e){var l=de(),a=I;if(a!==null)return Zr(l,a,e);de(),l=l.memoizedState,a=de();var t=a.queue.dispatch;return a.memoizedState=e,[l,t,!1]}function it(e,l,a,t){return e={tag:e,create:a,deps:t,inst:l,next:null},l=_.updateQueue,l===null&&(l=In(),_.updateQueue=l),a=l.lastEffect,a===null?l.lastEffect=e.next=e:(t=a.next,a.next=e,e.next=t,l.lastEffect=e),e}function Lr(){return de().memoizedState}function li(e,l,a,t){var n=Oe();_.flags|=e,n.memoizedState=it(1|l,{destroy:void 0},a,t===void 0?null:t)}function ai(e,l,a,t){var n=de();t=t===void 0?null:t;var i=n.memoizedState.inst;I!==null&&t!==null&&Gc(t,I.memoizedState.deps)?n.memoizedState=it(l,i,a,t):(_.flags|=e,n.memoizedState=it(1|l,i,a,t))}function Kr(e,l){li(8390656,8,e,l)}function Wc(e,l){ai(2048,8,e,l)}function qm(e){_.flags|=4;var l=_.updateQueue;if(l===null)l=In(),_.updateQueue=l,l.events=[e];else{var a=l.events;a===null?l.events=[e]:a.push(e)}}function Jr(e){var l=de().memoizedState;return qm({ref:l,nextImpl:e}),function(){if((J&2)!==0)throw Error(d(440));return l.impl.apply(void 0,arguments)}}function kr(e,l){return ai(4,2,e,l)}function Wr(e,l){return ai(4,4,e,l)}function $r(e,l){if(typeof l=="function"){e=e();var a=l(e);return function(){typeof a=="function"?a():l(null)}}if(l!=null)return e=e(),l.current=e,function(){l.current=null}}function Fr(e,l,a){a=a!=null?a.concat([e]):null,ai(4,4,$r.bind(null,l,e),a)}function $c(){}function Ir(e,l){var a=de();l=l===void 0?null:l;var t=a.memoizedState;return l!==null&&Gc(l,t[1])?t[0]:(a.memoizedState=[e,l],e)}function Pr(e,l){var a=de();l=l===void 0?null:l;var t=a.memoizedState;if(l!==null&&Gc(l,t[1]))return t[0];if(t=e(),Aa){Cl(!0);try{e()}finally{Cl(!1)}}return a.memoizedState=[t,l],t}function Fc(e,l,a){return a===void 0||(Al&1073741824)!==0&&(X&261930)===0?e.memoizedState=l:(e.memoizedState=a,e=lf(),_.lanes|=e,Il|=e,a)}function eo(e,l,a,t){return Xe(a,l)?a:at.current!==null?(e=Fc(e,a,t),Xe(e,l)||(ge=!0),e):(Al&42)===0||(Al&1073741824)!==0&&(X&261930)===0?(ge=!0,e.memoizedState=a):(e=lf(),_.lanes|=e,Il|=e,l)}function lo(e,l,a,t,n){var i=N.p;N.p=i!==0&&8>i?i:8;var u=b.T,s={};b.T=s,eu(e,!1,l,a);try{var r=n(),h=b.S;if(h!==null&&h(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var y=Em(r,t);Lt(e,l,y,Je(e))}else Lt(e,l,t,Je(e))}catch(x){Lt(e,l,{then:function(){},status:"rejected",reason:x},Je())}finally{N.p=i,u!==null&&s.types!==null&&(u.types=s.types),b.T=u}}function Bm(){}function Ic(e,l,a,t){if(e.tag!==5)throw Error(d(476));var n=ao(e).queue;lo(e,n,l,B,a===null?Bm:function(){return to(e),a(t)})}function ao(e){var l=e.memoizedState;if(l!==null)return l;l={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tl,lastRenderedState:B},next:null};var a={};return l.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tl,lastRenderedState:a},next:null},e.memoizedState=l,e=e.alternate,e!==null&&(e.memoizedState=l),l}function to(e){var l=ao(e);l.next===null&&(l=e.alternate.memoizedState),Lt(e,l.next.queue,{},Je())}function Pc(){return Ae(rn)}function no(){return de().memoizedState}function io(){return de().memoizedState}function Ym(e){for(var l=e.return;l!==null;){switch(l.tag){case 24:case 3:var a=Je();e=Kl(a);var t=Jl(l,e,a);t!==null&&(we(t,l,a),Qt(t,l,a)),l={cache:Mc()},e.payload=l;return}l=l.return}}function Hm(e,l,a){var t=Je();a={lane:t,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ti(e)?uo(l,a):(a=yc(e,l,a,t),a!==null&&(we(a,e,t),so(a,l,t)))}function co(e,l,a){var t=Je();Lt(e,l,a,t)}function Lt(e,l,a,t){var n={lane:t,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ti(e))uo(l,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=l.lastRenderedReducer,i!==null))try{var u=l.lastRenderedState,s=i(u,a);if(n.hasEagerState=!0,n.eagerState=s,Xe(s,u))return wn(e,l,n,0),le===null&&_n(),!1}catch{}if(a=yc(e,l,n,t),a!==null)return we(a,e,t),so(a,l,t),!0}return!1}function eu(e,l,a,t){if(t={lane:2,revertLane:qu(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},ti(e)){if(l)throw Error(d(479))}else l=yc(e,a,t,2),l!==null&&we(l,e,2)}function ti(e){var l=e.alternate;return e===_||l!==null&&l===_}function uo(e,l){tt=$n=!0;var a=e.pending;a===null?l.next=l:(l.next=a.next,a.next=l),e.pending=l}function so(e,l,a){if((a&4194048)!==0){var t=l.lanes;t&=e.pendingLanes,a|=t,l.lanes=a,ms(e,a)}}var Kt={readContext:Ae,use:Pn,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useLayoutEffect:re,useInsertionEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useSyncExternalStore:re,useId:re,useHostTransitionStatus:re,useFormState:re,useActionState:re,useOptimistic:re,useMemoCache:re,useCacheRefresh:re};Kt.useEffectEvent=re;var ro={readContext:Ae,use:Pn,useCallback:function(e,l){return Oe().memoizedState=[e,l===void 0?null:l],e},useContext:Ae,useEffect:Kr,useImperativeHandle:function(e,l,a){a=a!=null?a.concat([e]):null,li(4194308,4,$r.bind(null,l,e),a)},useLayoutEffect:function(e,l){return li(4194308,4,e,l)},useInsertionEffect:function(e,l){li(4,2,e,l)},useMemo:function(e,l){var a=Oe();l=l===void 0?null:l;var t=e();if(Aa){Cl(!0);try{e()}finally{Cl(!1)}}return a.memoizedState=[t,l],t},useReducer:function(e,l,a){var t=Oe();if(a!==void 0){var n=a(l);if(Aa){Cl(!0);try{a(l)}finally{Cl(!1)}}}else n=l;return t.memoizedState=t.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=Hm.bind(null,_,e),[t.memoizedState,e]},useRef:function(e){var l=Oe();return e={current:e},l.memoizedState=e},useState:function(e){e=Jc(e);var l=e.queue,a=co.bind(null,_,l);return l.dispatch=a,[e.memoizedState,a]},useDebugValue:$c,useDeferredValue:function(e,l){var a=Oe();return Fc(a,e,l)},useTransition:function(){var e=Jc(!1);return e=lo.bind(null,_,e.queue,!0,!1),Oe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,l,a){var t=_,n=Oe();if(Z){if(a===void 0)throw Error(d(407));a=a()}else{if(a=l(),le===null)throw Error(d(349));(X&127)!==0||Or(t,l,a)}n.memoizedState=a;var i={value:a,getSnapshot:l};return n.queue=i,Kr(qr.bind(null,t,i,e),[e]),t.flags|=2048,it(9,{destroy:void 0},Ur.bind(null,t,i,a,l),null),a},useId:function(){var e=Oe(),l=le.identifierPrefix;if(Z){var a=ml,t=dl;a=(t&~(1<<32-Qe(t)-1)).toString(32)+a,l="_"+l+"R_"+a,a=Fn++,0<a&&(l+="H"+a.toString(32)),l+="_"}else a=Mm++,l="_"+l+"r_"+a.toString(32)+"_";return e.memoizedState=l},useHostTransitionStatus:Pc,useFormState:Xr,useActionState:Xr,useOptimistic:function(e){var l=Oe();l.memoizedState=l.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=a,l=eu.bind(null,_,!0,a),a.dispatch=l,[e,l]},useMemoCache:Vc,useCacheRefresh:function(){return Oe().memoizedState=Ym.bind(null,_)},useEffectEvent:function(e){var l=Oe(),a={impl:e};return l.memoizedState=a,function(){if((J&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},lu={readContext:Ae,use:Pn,useCallback:Ir,useContext:Ae,useEffect:Wc,useImperativeHandle:Fr,useInsertionEffect:kr,useLayoutEffect:Wr,useMemo:Pr,useReducer:ei,useRef:Lr,useState:function(){return ei(Tl)},useDebugValue:$c,useDeferredValue:function(e,l){var a=de();return eo(a,I.memoizedState,e,l)},useTransition:function(){var e=ei(Tl)[0],l=de().memoizedState;return[typeof e=="boolean"?e:Vt(e),l]},useSyncExternalStore:Dr,useId:no,useHostTransitionStatus:Pc,useFormState:Rr,useActionState:Rr,useOptimistic:function(e,l){var a=de();return Hr(a,I,e,l)},useMemoCache:Vc,useCacheRefresh:io};lu.useEffectEvent=Jr;var oo={readContext:Ae,use:Pn,useCallback:Ir,useContext:Ae,useEffect:Wc,useImperativeHandle:Fr,useInsertionEffect:kr,useLayoutEffect:Wr,useMemo:Pr,useReducer:Kc,useRef:Lr,useState:function(){return Kc(Tl)},useDebugValue:$c,useDeferredValue:function(e,l){var a=de();return I===null?Fc(a,e,l):eo(a,I.memoizedState,e,l)},useTransition:function(){var e=Kc(Tl)[0],l=de().memoizedState;return[typeof e=="boolean"?e:Vt(e),l]},useSyncExternalStore:Dr,useId:no,useHostTransitionStatus:Pc,useFormState:Vr,useActionState:Vr,useOptimistic:function(e,l){var a=de();return I!==null?Hr(a,I,e,l):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vc,useCacheRefresh:io};oo.useEffectEvent=Jr;function au(e,l,a,t){l=e.memoizedState,a=a(t,l),a=a==null?l:O({},l,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var tu={enqueueSetState:function(e,l,a){e=e._reactInternals;var t=Je(),n=Kl(t);n.payload=l,a!=null&&(n.callback=a),l=Jl(e,n,t),l!==null&&(we(l,e,t),Qt(l,e,t))},enqueueReplaceState:function(e,l,a){e=e._reactInternals;var t=Je(),n=Kl(t);n.tag=1,n.payload=l,a!=null&&(n.callback=a),l=Jl(e,n,t),l!==null&&(we(l,e,t),Qt(l,e,t))},enqueueForceUpdate:function(e,l){e=e._reactInternals;var a=Je(),t=Kl(a);t.tag=2,l!=null&&(t.callback=l),l=Jl(e,t,a),l!==null&&(we(l,e,a),Qt(l,e,a))}};function fo(e,l,a,t,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,i,u):l.prototype&&l.prototype.isPureReactComponent?!qt(a,t)||!qt(n,i):!0}function mo(e,l,a,t){e=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(a,t),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(a,t),l.state!==e&&tu.enqueueReplaceState(l,l.state,null)}function Ta(e,l){var a=l;if("ref"in l){a={};for(var t in l)t!=="ref"&&(a[t]=l[t])}if(e=e.defaultProps){a===l&&(a=O({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function ho(e){Hn(e)}function go(e){console.error(e)}function vo(e){Hn(e)}function ni(e,l){try{var a=e.onUncaughtError;a(l.value,{componentStack:l.stack})}catch(t){setTimeout(function(){throw t})}}function yo(e,l,a){try{var t=e.onCaughtError;t(a.value,{componentStack:a.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function nu(e,l,a){return a=Kl(a),a.tag=3,a.payload={element:null},a.callback=function(){ni(e,l)},a}function po(e){return e=Kl(e),e.tag=3,e}function bo(e,l,a,t){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;e.payload=function(){return n(i)},e.callback=function(){yo(l,a,t)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){yo(l,a,t),typeof n!="function"&&(Pl===null?Pl=new Set([this]):Pl.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})})}function _m(e,l,a,t,n){if(a.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(l=a.alternate,l!==null&&Fa(l,a,n,!0),a=Ze.current,a!==null){switch(a.tag){case 31:case 13:return tl===null?vi():a.alternate===null&&oe===0&&(oe=3),a.flags&=-257,a.flags|=65536,a.lanes=n,t===Ln?a.flags|=16384:(l=a.updateQueue,l===null?a.updateQueue=new Set([t]):l.add(t),Du(e,t,n)),!1;case 22:return a.flags|=65536,t===Ln?a.flags|=16384:(l=a.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([t])},a.updateQueue=l):(a=l.retryQueue,a===null?l.retryQueue=new Set([t]):a.add(t)),Du(e,t,n)),!1}throw Error(d(435,a.tag))}return Du(e,t,n),vi(),!1}if(Z)return l=Ze.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=n,t!==Nc&&(e=Error(d(422),{cause:t}),Ht(Pe(e,a)))):(t!==Nc&&(l=Error(d(423),{cause:t}),Ht(Pe(l,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,t=Pe(t,a),n=nu(e.stateNode,t,n),Yc(e,n),oe!==4&&(oe=2)),!1;var i=Error(d(520),{cause:t});if(i=Pe(i,a),en===null?en=[i]:en.push(i),oe!==4&&(oe=2),l===null)return!0;t=Pe(t,a),a=l;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=nu(a.stateNode,t,e),Yc(a,e),!1;case 1:if(l=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Pl===null||!Pl.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=po(n),bo(n,e,a,t),Yc(a,n),!1}a=a.return}while(a!==null);return!1}var iu=Error(d(461)),ge=!1;function Te(e,l,a,t){l.child=e===null?Sr(l,null,a,t):za(l,e.child,a,t)}function xo(e,l,a,t,n){a=a.render;var i=l.ref;if("ref"in t){var u={};for(var s in t)s!=="ref"&&(u[s]=t[s])}else u=t;return xa(l),t=Qc(e,l,a,u,i,n),s=Xc(),e!==null&&!ge?(Rc(e,l,n),El(e,l,n)):(Z&&s&&jc(l),l.flags|=1,Te(e,l,t,n),l.child)}function jo(e,l,a,t,n){if(e===null){var i=a.type;return typeof i=="function"&&!pc(i)&&i.defaultProps===void 0&&a.compare===null?(l.tag=15,l.type=i,So(e,l,i,t,n)):(e=Gn(a.type,null,t,l,l.mode,n),e.ref=l.ref,e.return=l,l.child=e)}if(i=e.child,!mu(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:qt,a(u,t)&&e.ref===l.ref)return El(e,l,n)}return l.flags|=1,e=jl(i,t),e.ref=l.ref,e.return=l,l.child=e}function So(e,l,a,t,n){if(e!==null){var i=e.memoizedProps;if(qt(i,t)&&e.ref===l.ref)if(ge=!1,l.pendingProps=t=i,mu(e,n))(e.flags&131072)!==0&&(ge=!0);else return l.lanes=e.lanes,El(e,l,n)}return cu(e,l,a,t,n)}function No(e,l,a,t){var n=t.children,i=e!==null?e.memoizedState:null;if(e===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((l.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(t=l.child=e.child,n=0;t!==null;)n=n|t.lanes|t.childLanes,t=t.sibling;t=n&~i}else t=0,l.child=null;return zo(e,l,i,a,t)}if((a&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zn(l,i!==null?i.cachePool:null),i!==null?Ar(l,i):_c(),Tr(l);else return t=l.lanes=536870912,zo(e,l,i!==null?i.baseLanes|a:a,a,t)}else i!==null?(Zn(l,i.cachePool),Ar(l,i),Wl(),l.memoizedState=null):(e!==null&&Zn(l,null),_c(),Wl());return Te(e,l,n,a),l.child}function Jt(e,l){return e!==null&&e.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function zo(e,l,a,t,n){var i=Oc();return i=i===null?null:{parent:me._currentValue,pool:i},l.memoizedState={baseLanes:a,cachePool:i},e!==null&&Zn(l,null),_c(),Tr(l),e!==null&&Fa(e,l,t,!0),l.childLanes=n,null}function ii(e,l){return l=ui({mode:l.mode,children:l.children},e.mode),l.ref=e.ref,e.child=l,l.return=e,l}function Ao(e,l,a){return za(l,e.child,null,a),e=ii(l,l.pendingProps),e.flags|=2,Ve(l),l.memoizedState=null,e}function wm(e,l,a){var t=l.pendingProps,n=(l.flags&128)!==0;if(l.flags&=-129,e===null){if(Z){if(t.mode==="hidden")return e=ii(l,t),l.lanes=536870912,Jt(null,e);if(Cc(l),(e=ne)?(e=Cf(e,al),e=e!==null&&e.data==="&"?e:null,e!==null&&(l.memoizedState={dehydrated:e,treeContext:Xl!==null?{id:dl,overflow:ml}:null,retryLane:536870912,hydrationErrors:null},a=ur(e),a.return=l,l.child=a,ze=l,ne=null)):e=null,e===null)throw Zl(l);return l.lanes=536870912,null}return ii(l,t)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Cc(l),n)if(l.flags&256)l.flags&=-257,l=Ao(e,l,a);else if(l.memoizedState!==null)l.child=e.child,l.flags|=128,l=null;else throw Error(d(558));else if(ge||Fa(e,l,a,!1),n=(a&e.childLanes)!==0,ge||n){if(t=le,t!==null&&(u=hs(t,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,va(e,u),we(t,e,u),iu;vi(),l=Ao(e,l,a)}else e=i.treeContext,ne=nl(u.nextSibling),ze=l,Z=!0,Rl=null,al=!1,e!==null&&or(l,e),l=ii(l,t),l.flags|=4096;return l}return e=jl(e.child,{mode:t.mode,children:t.children}),e.ref=l.ref,l.child=e,e.return=l,e}function ci(e,l){var a=l.ref;if(a===null)e!==null&&e.ref!==null&&(l.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(l.flags|=4194816)}}function cu(e,l,a,t,n){return xa(l),a=Qc(e,l,a,t,void 0,n),t=Xc(),e!==null&&!ge?(Rc(e,l,n),El(e,l,n)):(Z&&t&&jc(l),l.flags|=1,Te(e,l,a,n),l.child)}function To(e,l,a,t,n,i){return xa(l),l.updateQueue=null,a=Mr(l,t,a,n),Er(e),t=Xc(),e!==null&&!ge?(Rc(e,l,i),El(e,l,i)):(Z&&t&&jc(l),l.flags|=1,Te(e,l,a,i),l.child)}function Eo(e,l,a,t,n){if(xa(l),l.stateNode===null){var i=Ja,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ae(u)),i=new a(t,i),l.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tu,l.stateNode=i,i._reactInternals=l,i=l.stateNode,i.props=t,i.state=l.memoizedState,i.refs={},qc(l),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ae(u):Ja,i.state=l.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(au(l,a,u,t),i.state=l.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&tu.enqueueReplaceState(i,i.state,null),Rt(l,t,i,n),Xt(),i.state=l.memoizedState),typeof i.componentDidMount=="function"&&(l.flags|=4194308),t=!0}else if(e===null){i=l.stateNode;var s=l.memoizedProps,r=Ta(a,s);i.props=r;var h=i.context,y=a.contextType;u=Ja,typeof y=="object"&&y!==null&&(u=Ae(y));var x=a.getDerivedStateFromProps;y=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=l.pendingProps!==s,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||h!==u)&&mo(l,i,t,u),Ll=!1;var g=l.memoizedState;i.state=g,Rt(l,t,i,n),Xt(),h=l.memoizedState,s||g!==h||Ll?(typeof x=="function"&&(au(l,a,x,t),h=l.memoizedState),(r=Ll||fo(l,a,r,t,g,h,u))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(l.flags|=4194308)):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=t,l.memoizedState=h),i.props=t,i.state=h,i.context=u,t=r):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),t=!1)}else{i=l.stateNode,Bc(e,l),u=l.memoizedProps,y=Ta(a,u),i.props=y,x=l.pendingProps,g=i.context,h=a.contextType,r=Ja,typeof h=="object"&&h!==null&&(r=Ae(h)),s=a.getDerivedStateFromProps,(h=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==x||g!==r)&&mo(l,i,t,r),Ll=!1,g=l.memoizedState,i.state=g,Rt(l,t,i,n),Xt();var v=l.memoizedState;u!==x||g!==v||Ll||e!==null&&e.dependencies!==null&&Xn(e.dependencies)?(typeof s=="function"&&(au(l,a,s,t),v=l.memoizedState),(y=Ll||fo(l,a,y,t,g,v,r)||e!==null&&e.dependencies!==null&&Xn(e.dependencies))?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(t,v,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(t,v,r)),typeof i.componentDidUpdate=="function"&&(l.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(l.flags|=1024),l.memoizedProps=t,l.memoizedState=v),i.props=t,i.state=v,i.context=r,t=y):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(l.flags|=1024),t=!1)}return i=t,ci(e,l),t=(l.flags&128)!==0,i||t?(i=l.stateNode,a=t&&typeof a.getDerivedStateFromError!="function"?null:i.render(),l.flags|=1,e!==null&&t?(l.child=za(l,e.child,null,n),l.child=za(l,null,a,n)):Te(e,l,a,n),l.memoizedState=i.state,e=l.child):e=El(e,l,n),e}function Mo(e,l,a,t){return pa(),l.flags|=256,Te(e,l,a,t),l.child}var uu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function su(e){return{baseLanes:e,cachePool:vr()}}function ru(e,l,a){return e=e!==null?e.childLanes&~a:0,l&&(e|=Ke),e}function Do(e,l,a){var t=l.pendingProps,n=!1,i=(l.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(fe.current&2)!==0),u&&(n=!0,l.flags&=-129),u=(l.flags&32)!==0,l.flags&=-33,e===null){if(Z){if(n?kl(l):Wl(),(e=ne)?(e=Cf(e,al),e=e!==null&&e.data!=="&"?e:null,e!==null&&(l.memoizedState={dehydrated:e,treeContext:Xl!==null?{id:dl,overflow:ml}:null,retryLane:536870912,hydrationErrors:null},a=ur(e),a.return=l,l.child=a,ze=l,ne=null)):e=null,e===null)throw Zl(l);return Lu(e)?l.lanes=32:l.lanes=536870912,null}var s=t.children;return t=t.fallback,n?(Wl(),n=l.mode,s=ui({mode:"hidden",children:s},n),t=ya(t,n,a,null),s.return=l,t.return=l,s.sibling=t,l.child=s,t=l.child,t.memoizedState=su(a),t.childLanes=ru(e,u,a),l.memoizedState=uu,Jt(null,t)):(kl(l),ou(l,s))}var r=e.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(i)l.flags&256?(kl(l),l.flags&=-257,l=fu(e,l,a)):l.memoizedState!==null?(Wl(),l.child=e.child,l.flags|=128,l=null):(Wl(),s=t.fallback,n=l.mode,t=ui({mode:"visible",children:t.children},n),s=ya(s,n,a,null),s.flags|=2,t.return=l,s.return=l,t.sibling=s,l.child=t,za(l,e.child,null,a),t=l.child,t.memoizedState=su(a),t.childLanes=ru(e,u,a),l.memoizedState=uu,l=Jt(null,t));else if(kl(l),Lu(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var h=u.dgst;u=h,t=Error(d(419)),t.stack="",t.digest=u,Ht({value:t,source:null,stack:null}),l=fu(e,l,a)}else if(ge||Fa(e,l,a,!1),u=(a&e.childLanes)!==0,ge||u){if(u=le,u!==null&&(t=hs(u,a),t!==0&&t!==r.retryLane))throw r.retryLane=t,va(e,t),we(u,e,t),iu;Vu(s)||vi(),l=fu(e,l,a)}else Vu(s)?(l.flags|=192,l.child=e.child,l=null):(e=r.treeContext,ne=nl(s.nextSibling),ze=l,Z=!0,Rl=null,al=!1,e!==null&&or(l,e),l=ou(l,t.children),l.flags|=4096);return l}return n?(Wl(),s=t.fallback,n=l.mode,r=e.child,h=r.sibling,t=jl(r,{mode:"hidden",children:t.children}),t.subtreeFlags=r.subtreeFlags&65011712,h!==null?s=jl(h,s):(s=ya(s,n,a,null),s.flags|=2),s.return=l,t.return=l,t.sibling=s,l.child=t,Jt(null,t),t=l.child,s=e.child.memoizedState,s===null?s=su(a):(n=s.cachePool,n!==null?(r=me._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=vr(),s={baseLanes:s.baseLanes|a,cachePool:n}),t.memoizedState=s,t.childLanes=ru(e,u,a),l.memoizedState=uu,Jt(e.child,t)):(kl(l),a=e.child,e=a.sibling,a=jl(a,{mode:"visible",children:t.children}),a.return=l,a.sibling=null,e!==null&&(u=l.deletions,u===null?(l.deletions=[e],l.flags|=16):u.push(e)),l.child=a,l.memoizedState=null,a)}function ou(e,l){return l=ui({mode:"visible",children:l},e.mode),l.return=e,e.child=l}function ui(e,l){return e=Re(22,e,null,l),e.lanes=0,e}function fu(e,l,a){return za(l,e.child,null,a),e=ou(l,l.pendingProps.children),e.flags|=2,l.memoizedState=null,e}function Oo(e,l,a){e.lanes|=l;var t=e.alternate;t!==null&&(t.lanes|=l),Tc(e.return,l,a)}function du(e,l,a,t,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:t,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=l,u.rendering=null,u.renderingStartTime=0,u.last=t,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Uo(e,l,a){var t=l.pendingProps,n=t.revealOrder,i=t.tail;t=t.children;var u=fe.current,s=(u&2)!==0;if(s?(u=u&1|2,l.flags|=128):u&=1,k(fe,u),Te(e,l,t,a),t=Z?Yt:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=l.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oo(e,a,l);else if(e.tag===19)Oo(e,a,l);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===l)break e;for(;e.sibling===null;){if(e.return===null||e.return===l)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=l.child,n=null;a!==null;)e=a.alternate,e!==null&&Wn(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=l.child,l.child=null):(n=a.sibling,a.sibling=null),du(l,!1,n,a,i,t);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=l.child,l.child=null;n!==null;){if(e=n.alternate,e!==null&&Wn(e)===null){l.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}du(l,!0,a,null,i,t);break;case"together":du(l,!1,null,null,void 0,t);break;default:l.memoizedState=null}return l.child}function El(e,l,a){if(e!==null&&(l.dependencies=e.dependencies),Il|=l.lanes,(a&l.childLanes)===0)if(e!==null){if(Fa(e,l,a,!1),(a&l.childLanes)===0)return null}else return null;if(e!==null&&l.child!==e.child)throw Error(d(153));if(l.child!==null){for(e=l.child,a=jl(e,e.pendingProps),l.child=a,a.return=l;e.sibling!==null;)e=e.sibling,a=a.sibling=jl(e,e.pendingProps),a.return=l;a.sibling=null}return l.child}function mu(e,l){return(e.lanes&l)!==0?!0:(e=e.dependencies,!!(e!==null&&Xn(e)))}function Cm(e,l,a){switch(l.tag){case 3:pn(l,l.stateNode.containerInfo),Vl(l,me,e.memoizedState.cache),pa();break;case 27:case 5:wi(l);break;case 4:pn(l,l.stateNode.containerInfo);break;case 10:Vl(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,Cc(l),null;break;case 13:var t=l.memoizedState;if(t!==null)return t.dehydrated!==null?(kl(l),l.flags|=128,null):(a&l.child.childLanes)!==0?Do(e,l,a):(kl(l),e=El(e,l,a),e!==null?e.sibling:null);kl(l);break;case 19:var n=(e.flags&128)!==0;if(t=(a&l.childLanes)!==0,t||(Fa(e,l,a,!1),t=(a&l.childLanes)!==0),n){if(t)return Uo(e,l,a);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),k(fe,fe.current),t)break;return null;case 22:return l.lanes=0,No(e,l,a,l.pendingProps);case 24:Vl(l,me,e.memoizedState.cache)}return El(e,l,a)}function qo(e,l,a){if(e!==null)if(e.memoizedProps!==l.pendingProps)ge=!0;else{if(!mu(e,a)&&(l.flags&128)===0)return ge=!1,Cm(e,l,a);ge=(e.flags&131072)!==0}else ge=!1,Z&&(l.flags&1048576)!==0&&rr(l,Yt,l.index);switch(l.lanes=0,l.tag){case 16:e:{var t=l.pendingProps;if(e=Sa(l.elementType),l.type=e,typeof e=="function")pc(e)?(t=Ta(e,t),l.tag=1,l=Eo(null,l,e,t,a)):(l.tag=0,l=cu(null,l,e,t,a));else{if(e!=null){var n=e.$$typeof;if(n===_l){l.tag=11,l=xo(null,l,e,t,a);break e}else if(n===vl){l.tag=14,l=jo(null,l,e,t,a);break e}}throw l=bt(e)||e,Error(d(306,l,""))}}return l;case 0:return cu(e,l,l.type,l.pendingProps,a);case 1:return t=l.type,n=Ta(t,l.pendingProps),Eo(e,l,t,n,a);case 3:e:{if(pn(l,l.stateNode.containerInfo),e===null)throw Error(d(387));t=l.pendingProps;var i=l.memoizedState;n=i.element,Bc(e,l),Rt(l,t,null,a);var u=l.memoizedState;if(t=u.cache,Vl(l,me,t),t!==i.cache&&Ec(l,[me],a,!0),Xt(),t=u.element,i.isDehydrated)if(i={element:t,isDehydrated:!1,cache:u.cache},l.updateQueue.baseState=i,l.memoizedState=i,l.flags&256){l=Mo(e,l,t,a);break e}else if(t!==n){n=Pe(Error(d(424)),l),Ht(n),l=Mo(e,l,t,a);break e}else for(e=l.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ne=nl(e.firstChild),ze=l,Z=!0,Rl=null,al=!0,a=Sr(l,null,t,a),l.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(pa(),t===n){l=El(e,l,a);break e}Te(e,l,t,a)}l=l.child}return l;case 26:return ci(e,l),e===null?(a=Vf(l.type,null,l.pendingProps,null))?l.memoizedState=a:Z||(a=l.type,e=l.pendingProps,t=Ni(wl.current).createElement(a),t[Ne]=l,t[Ue]=e,Ee(t,a,e),xe(t),l.stateNode=t):l.memoizedState=Vf(l.type,e.memoizedProps,l.pendingProps,e.memoizedState),null;case 27:return wi(l),e===null&&Z&&(t=l.stateNode=Xf(l.type,l.pendingProps,wl.current),ze=l,al=!0,n=ne,ta(l.type)?(Ku=n,ne=nl(t.firstChild)):ne=n),Te(e,l,l.pendingProps.children,a),ci(e,l),e===null&&(l.flags|=4194304),l.child;case 5:return e===null&&Z&&((n=t=ne)&&(t=hh(t,l.type,l.pendingProps,al),t!==null?(l.stateNode=t,ze=l,ne=nl(t.firstChild),al=!1,n=!0):n=!1),n||Zl(l)),wi(l),n=l.type,i=l.pendingProps,u=e!==null?e.memoizedProps:null,t=i.children,Xu(n,i)?t=null:u!==null&&Xu(n,u)&&(l.flags|=32),l.memoizedState!==null&&(n=Qc(e,l,Dm,null,null,a),rn._currentValue=n),ci(e,l),Te(e,l,t,a),l.child;case 6:return e===null&&Z&&((e=a=ne)&&(a=gh(a,l.pendingProps,al),a!==null?(l.stateNode=a,ze=l,ne=null,e=!0):e=!1),e||Zl(l)),null;case 13:return Do(e,l,a);case 4:return pn(l,l.stateNode.containerInfo),t=l.pendingProps,e===null?l.child=za(l,null,t,a):Te(e,l,t,a),l.child;case 11:return xo(e,l,l.type,l.pendingProps,a);case 7:return Te(e,l,l.pendingProps,a),l.child;case 8:return Te(e,l,l.pendingProps.children,a),l.child;case 12:return Te(e,l,l.pendingProps.children,a),l.child;case 10:return t=l.pendingProps,Vl(l,l.type,t.value),Te(e,l,t.children,a),l.child;case 9:return n=l.type._context,t=l.pendingProps.children,xa(l),n=Ae(n),t=t(n),l.flags|=1,Te(e,l,t,a),l.child;case 14:return jo(e,l,l.type,l.pendingProps,a);case 15:return So(e,l,l.type,l.pendingProps,a);case 19:return Uo(e,l,a);case 31:return wm(e,l,a);case 22:return No(e,l,a,l.pendingProps);case 24:return xa(l),t=Ae(me),e===null?(n=Oc(),n===null&&(n=le,i=Mc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),l.memoizedState={parent:t,cache:n},qc(l),Vl(l,me,n)):((e.lanes&a)!==0&&(Bc(e,l),Rt(l,null,null,a),Xt()),n=e.memoizedState,i=l.memoizedState,n.parent!==t?(n={parent:t,cache:t},l.memoizedState=n,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=n),Vl(l,me,t)):(t=i.cache,Vl(l,me,t),t!==n.cache&&Ec(l,[me],a,!0))),Te(e,l,l.pendingProps.children,a),l.child;case 29:throw l.pendingProps}throw Error(d(156,l.tag))}function Ml(e){e.flags|=4}function hu(e,l,a,t,n){if((l=(e.mode&32)!==0)&&(l=!1),l){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(cf())e.flags|=8192;else throw Na=Ln,Uc}else e.flags&=-16777217}function Bo(e,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(l))if(cf())e.flags|=8192;else throw Na=Ln,Uc}function si(e,l){l!==null&&(e.flags|=4),e.flags&16384&&(l=e.tag!==22?fs():536870912,e.lanes|=l,rt|=l)}function kt(e,l){if(!Z)switch(e.tailMode){case"hidden":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?l||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function ie(e){var l=e.alternate!==null&&e.alternate.child===e.child,a=0,t=0;if(l)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,t|=n.subtreeFlags&65011712,t|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,t|=n.subtreeFlags,t|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=t,e.childLanes=a,l}function Gm(e,l,a){var t=l.pendingProps;switch(Sc(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(l),null;case 1:return ie(l),null;case 3:return a=l.stateNode,t=null,e!==null&&(t=e.memoizedState.cache),l.memoizedState.cache!==t&&(l.flags|=2048),zl(me),Ba(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($a(l)?Ml(l):e===null||e.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,zc())),ie(l),null;case 26:var n=l.type,i=l.memoizedState;return e===null?(Ml(l),i!==null?(ie(l),Bo(l,i)):(ie(l),hu(l,n,null,t,a))):i?i!==e.memoizedState?(Ml(l),ie(l),Bo(l,i)):(ie(l),l.flags&=-16777217):(e=e.memoizedProps,e!==t&&Ml(l),ie(l),hu(l,n,e,t,a)),null;case 27:if(bn(l),a=wl.current,n=l.type,e!==null&&l.stateNode!=null)e.memoizedProps!==t&&Ml(l);else{if(!t){if(l.stateNode===null)throw Error(d(166));return ie(l),null}e=be.current,$a(l)?fr(l):(e=Xf(n,t,a),l.stateNode=e,Ml(l))}return ie(l),null;case 5:if(bn(l),n=l.type,e!==null&&l.stateNode!=null)e.memoizedProps!==t&&Ml(l);else{if(!t){if(l.stateNode===null)throw Error(d(166));return ie(l),null}if(i=be.current,$a(l))fr(l);else{var u=Ni(wl.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof t.is=="string"?u.createElement("select",{is:t.is}):u.createElement("select"),t.multiple?i.multiple=!0:t.size&&(i.size=t.size);break;default:i=typeof t.is=="string"?u.createElement(n,{is:t.is}):u.createElement(n)}}i[Ne]=l,i[Ue]=t;e:for(u=l.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===l)break e;for(;u.sibling===null;){if(u.return===null||u.return===l)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}l.stateNode=i;e:switch(Ee(i,n,t),n){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ml(l)}}return ie(l),hu(l,l.type,e===null?null:e.memoizedProps,l.pendingProps,a),null;case 6:if(e&&l.stateNode!=null)e.memoizedProps!==t&&Ml(l);else{if(typeof t!="string"&&l.stateNode===null)throw Error(d(166));if(e=wl.current,$a(l)){if(e=l.stateNode,a=l.memoizedProps,t=null,n=ze,n!==null)switch(n.tag){case 27:case 5:t=n.memoizedProps}e[Ne]=l,e=!!(e.nodeValue===a||t!==null&&t.suppressHydrationWarning===!0||Of(e.nodeValue,a)),e||Zl(l,!0)}else e=Ni(e).createTextNode(t),e[Ne]=l,l.stateNode=e}return ie(l),null;case 31:if(a=l.memoizedState,e===null||e.memoizedState!==null){if(t=$a(l),a!==null){if(e===null){if(!t)throw Error(d(318));if(e=l.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Ne]=l}else pa(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;ie(l),e=!1}else a=zc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return l.flags&256?(Ve(l),l):(Ve(l),null);if((l.flags&128)!==0)throw Error(d(558))}return ie(l),null;case 13:if(t=l.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=$a(l),t!==null&&t.dehydrated!==null){if(e===null){if(!n)throw Error(d(318));if(n=l.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Ne]=l}else pa(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;ie(l),n=!1}else n=zc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return l.flags&256?(Ve(l),l):(Ve(l),null)}return Ve(l),(l.flags&128)!==0?(l.lanes=a,l):(a=t!==null,e=e!==null&&e.memoizedState!==null,a&&(t=l.child,n=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(n=t.alternate.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048)),a!==e&&a&&(l.child.flags|=8192),si(l,l.updateQueue),ie(l),null);case 4:return Ba(),e===null&&_u(l.stateNode.containerInfo),ie(l),null;case 10:return zl(l.type),ie(l),null;case 19:if(se(fe),t=l.memoizedState,t===null)return ie(l),null;if(n=(l.flags&128)!==0,i=t.rendering,i===null)if(n)kt(t,!1);else{if(oe!==0||e!==null&&(e.flags&128)!==0)for(e=l.child;e!==null;){if(i=Wn(e),i!==null){for(l.flags|=128,kt(t,!1),e=i.updateQueue,l.updateQueue=e,si(l,e),l.subtreeFlags=0,e=a,a=l.child;a!==null;)cr(a,e),a=a.sibling;return k(fe,fe.current&1|2),Z&&Sl(l,t.treeForkCount),l.child}e=e.sibling}t.tail!==null&&Ce()>mi&&(l.flags|=128,n=!0,kt(t,!1),l.lanes=4194304)}else{if(!n)if(e=Wn(i),e!==null){if(l.flags|=128,n=!0,e=e.updateQueue,l.updateQueue=e,si(l,e),kt(t,!0),t.tail===null&&t.tailMode==="hidden"&&!i.alternate&&!Z)return ie(l),null}else 2*Ce()-t.renderingStartTime>mi&&a!==536870912&&(l.flags|=128,n=!0,kt(t,!1),l.lanes=4194304);t.isBackwards?(i.sibling=l.child,l.child=i):(e=t.last,e!==null?e.sibling=i:l.child=i,t.last=i)}return t.tail!==null?(e=t.tail,t.rendering=e,t.tail=e.sibling,t.renderingStartTime=Ce(),e.sibling=null,a=fe.current,k(fe,n?a&1|2:a&1),Z&&Sl(l,t.treeForkCount),e):(ie(l),null);case 22:case 23:return Ve(l),wc(),t=l.memoizedState!==null,e!==null?e.memoizedState!==null!==t&&(l.flags|=8192):t&&(l.flags|=8192),t?(a&536870912)!==0&&(l.flags&128)===0&&(ie(l),l.subtreeFlags&6&&(l.flags|=8192)):ie(l),a=l.updateQueue,a!==null&&si(l,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==a&&(l.flags|=2048),e!==null&&se(ja),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),zl(me),ie(l),null;case 25:return null;case 30:return null}throw Error(d(156,l.tag))}function Qm(e,l){switch(Sc(l),l.tag){case 1:return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 3:return zl(me),Ba(),e=l.flags,(e&65536)!==0&&(e&128)===0?(l.flags=e&-65537|128,l):null;case 26:case 27:case 5:return bn(l),null;case 31:if(l.memoizedState!==null){if(Ve(l),l.alternate===null)throw Error(d(340));pa()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 13:if(Ve(l),e=l.memoizedState,e!==null&&e.dehydrated!==null){if(l.alternate===null)throw Error(d(340));pa()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 19:return se(fe),null;case 4:return Ba(),null;case 10:return zl(l.type),null;case 22:case 23:return Ve(l),wc(),e!==null&&se(ja),e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 24:return zl(me),null;case 25:return null;default:return null}}function Yo(e,l){switch(Sc(l),l.tag){case 3:zl(me),Ba();break;case 26:case 27:case 5:bn(l);break;case 4:Ba();break;case 31:l.memoizedState!==null&&Ve(l);break;case 13:Ve(l);break;case 19:se(fe);break;case 10:zl(l.type);break;case 22:case 23:Ve(l),wc(),e!==null&&se(ja);break;case 24:zl(me)}}function Wt(e,l){try{var a=l.updateQueue,t=a!==null?a.lastEffect:null;if(t!==null){var n=t.next;a=n;do{if((a.tag&e)===e){t=void 0;var i=a.create,u=a.inst;t=i(),u.destroy=t}a=a.next}while(a!==n)}}catch(s){$(l,l.return,s)}}function $l(e,l,a){try{var t=l.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var i=n.next;t=i;do{if((t.tag&e)===e){var u=t.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=l;var r=a,h=s;try{h()}catch(y){$(n,r,y)}}}t=t.next}while(t!==i)}}catch(y){$(l,l.return,y)}}function Ho(e){var l=e.updateQueue;if(l!==null){var a=e.stateNode;try{zr(l,a)}catch(t){$(e,e.return,t)}}}function _o(e,l,a){a.props=Ta(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(t){$(e,l,t)}}function $t(e,l){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var t=e.stateNode;break;case 30:t=e.stateNode;break;default:t=e.stateNode}typeof a=="function"?e.refCleanup=a(t):a.current=t}}catch(n){$(e,l,n)}}function hl(e,l){var a=e.ref,t=e.refCleanup;if(a!==null)if(typeof t=="function")try{t()}catch(n){$(e,l,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){$(e,l,n)}else a.current=null}function wo(e){var l=e.type,a=e.memoizedProps,t=e.stateNode;try{e:switch(l){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break e;case"img":a.src?t.src=a.src:a.srcSet&&(t.srcset=a.srcSet)}}catch(n){$(e,e.return,n)}}function gu(e,l,a){try{var t=e.stateNode;sh(t,e.type,a,l),t[Ue]=l}catch(n){$(e,e.return,n)}}function Co(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ta(e.type)||e.tag===4}function vu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Co(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yu(e,l,a){var t=e.tag;if(t===5||t===6)e=e.stateNode,l?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,l):(l=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,l.appendChild(e),a=a._reactRootContainer,a!=null||l.onclick!==null||(l.onclick=bl));else if(t!==4&&(t===27&&ta(e.type)&&(a=e.stateNode,l=null),e=e.child,e!==null))for(yu(e,l,a),e=e.sibling;e!==null;)yu(e,l,a),e=e.sibling}function ri(e,l,a){var t=e.tag;if(t===5||t===6)e=e.stateNode,l?a.insertBefore(e,l):a.appendChild(e);else if(t!==4&&(t===27&&ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ri(e,l,a),e=e.sibling;e!==null;)ri(e,l,a),e=e.sibling}function Go(e){var l=e.stateNode,a=e.memoizedProps;try{for(var t=e.type,n=l.attributes;n.length;)l.removeAttributeNode(n[0]);Ee(l,t,a),l[Ne]=e,l[Ue]=a}catch(i){$(e,e.return,i)}}var Dl=!1,ve=!1,pu=!1,Qo=typeof WeakSet=="function"?WeakSet:Set,je=null;function Xm(e,l){if(e=e.containerInfo,Gu=Oi,e=Fs(e),fc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var t=a.getSelection&&a.getSelection();if(t&&t.rangeCount!==0){a=t.anchorNode;var n=t.anchorOffset,i=t.focusNode;t=t.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,s=-1,r=-1,h=0,y=0,x=e,g=null;l:for(;;){for(var v;x!==a||n!==0&&x.nodeType!==3||(s=u+n),x!==i||t!==0&&x.nodeType!==3||(r=u+t),x.nodeType===3&&(u+=x.nodeValue.length),(v=x.firstChild)!==null;)g=x,x=v;for(;;){if(x===e)break l;if(g===a&&++h===n&&(s=u),g===i&&++y===t&&(r=u),(v=x.nextSibling)!==null)break;x=g,g=x.parentNode}x=v}a=s===-1||r===-1?null:{start:s,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qu={focusedElem:e,selectionRange:a},Oi=!1,je=l;je!==null;)if(l=je,e=l.child,(l.subtreeFlags&1028)!==0&&e!==null)e.return=l,je=e;else for(;je!==null;){switch(l=je,i=l.alternate,e=l.flags,l.tag){case 0:if((e&4)!==0&&(e=l.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=l,n=i.memoizedProps,i=i.memoizedState,t=a.stateNode;try{var A=Ta(a.type,n);e=t.getSnapshotBeforeUpdate(A,i),t.__reactInternalSnapshotBeforeUpdate=e}catch(U){$(a,a.return,U)}}break;case 3:if((e&1024)!==0){if(e=l.stateNode.containerInfo,a=e.nodeType,a===9)Zu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=l.sibling,e!==null){e.return=l.return,je=e;break}je=l.return}}function Xo(e,l,a){var t=a.flags;switch(a.tag){case 0:case 11:case 15:Ul(e,a),t&4&&Wt(5,a);break;case 1:if(Ul(e,a),t&4)if(e=a.stateNode,l===null)try{e.componentDidMount()}catch(u){$(a,a.return,u)}else{var n=Ta(a.type,l.memoizedProps);l=l.memoizedState;try{e.componentDidUpdate(n,l,e.__reactInternalSnapshotBeforeUpdate)}catch(u){$(a,a.return,u)}}t&64&&Ho(a),t&512&&$t(a,a.return);break;case 3:if(Ul(e,a),t&64&&(e=a.updateQueue,e!==null)){if(l=null,a.child!==null)switch(a.child.tag){case 27:case 5:l=a.child.stateNode;break;case 1:l=a.child.stateNode}try{zr(e,l)}catch(u){$(a,a.return,u)}}break;case 27:l===null&&t&4&&Go(a);case 26:case 5:Ul(e,a),l===null&&t&4&&wo(a),t&512&&$t(a,a.return);break;case 12:Ul(e,a);break;case 31:Ul(e,a),t&4&&Vo(e,a);break;case 13:Ul(e,a),t&4&&Lo(e,a),t&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=$m.bind(null,a),vh(e,a))));break;case 22:if(t=a.memoizedState!==null||Dl,!t){l=l!==null&&l.memoizedState!==null||ve,n=Dl;var i=ve;Dl=t,(ve=l)&&!i?ql(e,a,(a.subtreeFlags&8772)!==0):Ul(e,a),Dl=n,ve=i}break;case 30:break;default:Ul(e,a)}}function Ro(e){var l=e.alternate;l!==null&&(e.alternate=null,Ro(l)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(l=e.stateNode,l!==null&&ki(l)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ue=null,Be=!1;function Ol(e,l,a){for(a=a.child;a!==null;)Zo(e,l,a),a=a.sibling}function Zo(e,l,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(xt,a)}catch{}switch(a.tag){case 26:ve||hl(a,l),Ol(e,l,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ve||hl(a,l);var t=ue,n=Be;ta(a.type)&&(ue=a.stateNode,Be=!1),Ol(e,l,a),cn(a.stateNode),ue=t,Be=n;break;case 5:ve||hl(a,l);case 6:if(t=ue,n=Be,ue=null,Ol(e,l,a),ue=t,Be=n,ue!==null)if(Be)try{(ue.nodeType===9?ue.body:ue.nodeName==="HTML"?ue.ownerDocument.body:ue).removeChild(a.stateNode)}catch(i){$(a,l,i)}else try{ue.removeChild(a.stateNode)}catch(i){$(a,l,i)}break;case 18:ue!==null&&(Be?(e=ue,_f(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yt(e)):_f(ue,a.stateNode));break;case 4:t=ue,n=Be,ue=a.stateNode.containerInfo,Be=!0,Ol(e,l,a),ue=t,Be=n;break;case 0:case 11:case 14:case 15:$l(2,a,l),ve||$l(4,a,l),Ol(e,l,a);break;case 1:ve||(hl(a,l),t=a.stateNode,typeof t.componentWillUnmount=="function"&&_o(a,l,t)),Ol(e,l,a);break;case 21:Ol(e,l,a);break;case 22:ve=(t=ve)||a.memoizedState!==null,Ol(e,l,a),ve=t;break;default:Ol(e,l,a)}}function Vo(e,l){if(l.memoizedState===null&&(e=l.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yt(e)}catch(a){$(l,l.return,a)}}}function Lo(e,l){if(l.memoizedState===null&&(e=l.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yt(e)}catch(a){$(l,l.return,a)}}function Rm(e){switch(e.tag){case 31:case 13:case 19:var l=e.stateNode;return l===null&&(l=e.stateNode=new Qo),l;case 22:return e=e.stateNode,l=e._retryCache,l===null&&(l=e._retryCache=new Qo),l;default:throw Error(d(435,e.tag))}}function oi(e,l){var a=Rm(e);l.forEach(function(t){if(!a.has(t)){a.add(t);var n=Fm.bind(null,e,t);t.then(n,n)}})}function Ye(e,l){var a=l.deletions;if(a!==null)for(var t=0;t<a.length;t++){var n=a[t],i=e,u=l,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(ta(s.type)){ue=s.stateNode,Be=!1;break e}break;case 5:ue=s.stateNode,Be=!1;break e;case 3:case 4:ue=s.stateNode.containerInfo,Be=!0;break e}s=s.return}if(ue===null)throw Error(d(160));Zo(i,u,n),ue=null,Be=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)Ko(l,e),l=l.sibling}var sl=null;function Ko(e,l){var a=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ye(l,e),He(e),t&4&&($l(3,e,e.return),Wt(3,e),$l(5,e,e.return));break;case 1:Ye(l,e),He(e),t&512&&(ve||a===null||hl(a,a.return)),t&64&&Dl&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?t:a.concat(t))));break;case 26:var n=sl;if(Ye(l,e),He(e),t&512&&(ve||a===null||hl(a,a.return)),t&4){var i=a!==null?a.memoizedState:null;if(t=e.memoizedState,a===null)if(t===null)if(e.stateNode===null){e:{t=e.type,a=e.memoizedProps,n=n.ownerDocument||n;l:switch(t){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Nt]||i[Ne]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(t),n.head.insertBefore(i,n.querySelector("head > title"))),Ee(i,t,a),i[Ne]=e,xe(i),t=i;break e;case"link":var u=Jf("link","href",n).get(t+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break l}}i=n.createElement(t),Ee(i,t,a),n.head.appendChild(i);break;case"meta":if(u=Jf("meta","content",n).get(t+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break l}}i=n.createElement(t),Ee(i,t,a),n.head.appendChild(i);break;default:throw Error(d(468,t))}i[Ne]=e,xe(i),t=i}e.stateNode=t}else kf(n,e.type,e.stateNode);else e.stateNode=Kf(n,t,e.memoizedProps);else i!==t?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,t===null?kf(n,e.type,e.stateNode):Kf(n,t,e.memoizedProps)):t===null&&e.stateNode!==null&&gu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ye(l,e),He(e),t&512&&(ve||a===null||hl(a,a.return)),a!==null&&t&4&&gu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ye(l,e),He(e),t&512&&(ve||a===null||hl(a,a.return)),e.flags&32){n=e.stateNode;try{Qa(n,"")}catch(A){$(e,e.return,A)}}t&4&&e.stateNode!=null&&(n=e.memoizedProps,gu(e,n,a!==null?a.memoizedProps:n)),t&1024&&(pu=!0);break;case 6:if(Ye(l,e),He(e),t&4){if(e.stateNode===null)throw Error(d(162));t=e.memoizedProps,a=e.stateNode;try{a.nodeValue=t}catch(A){$(e,e.return,A)}}break;case 3:if(Ti=null,n=sl,sl=zi(l.containerInfo),Ye(l,e),sl=n,He(e),t&4&&a!==null&&a.memoizedState.isDehydrated)try{yt(l.containerInfo)}catch(A){$(e,e.return,A)}pu&&(pu=!1,Jo(e));break;case 4:t=sl,sl=zi(e.stateNode.containerInfo),Ye(l,e),He(e),sl=t;break;case 12:Ye(l,e),He(e);break;case 31:Ye(l,e),He(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,oi(e,t)));break;case 13:Ye(l,e),He(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(di=Ce()),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,oi(e,t)));break;case 22:n=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,h=Dl,y=ve;if(Dl=h||n,ve=y||r,Ye(l,e),ve=y,Dl=h,He(e),t&8192)e:for(l=e.stateNode,l._visibility=n?l._visibility&-2:l._visibility|1,n&&(a===null||r||Dl||ve||Ea(e)),a=null,l=e;;){if(l.tag===5||l.tag===26){if(a===null){r=a=l;try{if(i=r.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=r.stateNode;var x=r.memoizedProps.style,g=x!=null&&x.hasOwnProperty("display")?x.display:null;s.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(A){$(r,r.return,A)}}}else if(l.tag===6){if(a===null){r=l;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(A){$(r,r.return,A)}}}else if(l.tag===18){if(a===null){r=l;try{var v=r.stateNode;n?wf(v,!0):wf(r.stateNode,!1)}catch(A){$(r,r.return,A)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===e)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break e;for(;l.sibling===null;){if(l.return===null||l.return===e)break e;a===l&&(a=null),l=l.return}a===l&&(a=null),l.sibling.return=l.return,l=l.sibling}t&4&&(t=e.updateQueue,t!==null&&(a=t.retryQueue,a!==null&&(t.retryQueue=null,oi(e,a))));break;case 19:Ye(l,e),He(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,oi(e,t)));break;case 30:break;case 21:break;default:Ye(l,e),He(e)}}function He(e){var l=e.flags;if(l&2){try{for(var a,t=e.return;t!==null;){if(Co(t)){a=t;break}t=t.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var n=a.stateNode,i=vu(e);ri(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Qa(u,""),a.flags&=-33);var s=vu(e);ri(e,s,u);break;case 3:case 4:var r=a.stateNode.containerInfo,h=vu(e);yu(e,h,r);break;default:throw Error(d(161))}}catch(y){$(e,e.return,y)}e.flags&=-3}l&4096&&(e.flags&=-4097)}function Jo(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var l=e;Jo(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),e=e.sibling}}function Ul(e,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)Xo(e,l.alternate,l),l=l.sibling}function Ea(e){for(e=e.child;e!==null;){var l=e;switch(l.tag){case 0:case 11:case 14:case 15:$l(4,l,l.return),Ea(l);break;case 1:hl(l,l.return);var a=l.stateNode;typeof a.componentWillUnmount=="function"&&_o(l,l.return,a),Ea(l);break;case 27:cn(l.stateNode);case 26:case 5:hl(l,l.return),Ea(l);break;case 22:l.memoizedState===null&&Ea(l);break;case 30:Ea(l);break;default:Ea(l)}e=e.sibling}}function ql(e,l,a){for(a=a&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var t=l.alternate,n=e,i=l,u=i.flags;switch(i.tag){case 0:case 11:case 15:ql(n,i,a),Wt(4,i);break;case 1:if(ql(n,i,a),t=i,n=t.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){$(t,t.return,h)}if(t=i,n=t.updateQueue,n!==null){var s=t.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Nr(r[n],s)}catch(h){$(t,t.return,h)}}a&&u&64&&Ho(i),$t(i,i.return);break;case 27:Go(i);case 26:case 5:ql(n,i,a),a&&t===null&&u&4&&wo(i),$t(i,i.return);break;case 12:ql(n,i,a);break;case 31:ql(n,i,a),a&&u&4&&Vo(n,i);break;case 13:ql(n,i,a),a&&u&4&&Lo(n,i);break;case 22:i.memoizedState===null&&ql(n,i,a),$t(i,i.return);break;case 30:break;default:ql(n,i,a)}l=l.sibling}}function bu(e,l){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&_t(a))}function xu(e,l){e=null,l.alternate!==null&&(e=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==e&&(l.refCount++,e!=null&&_t(e))}function rl(e,l,a,t){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)ko(e,l,a,t),l=l.sibling}function ko(e,l,a,t){var n=l.flags;switch(l.tag){case 0:case 11:case 15:rl(e,l,a,t),n&2048&&Wt(9,l);break;case 1:rl(e,l,a,t);break;case 3:rl(e,l,a,t),n&2048&&(e=null,l.alternate!==null&&(e=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==e&&(l.refCount++,e!=null&&_t(e)));break;case 12:if(n&2048){rl(e,l,a,t),e=l.stateNode;try{var i=l.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,l.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){$(l,l.return,r)}}else rl(e,l,a,t);break;case 31:rl(e,l,a,t);break;case 13:rl(e,l,a,t);break;case 23:break;case 22:i=l.stateNode,u=l.alternate,l.memoizedState!==null?i._visibility&2?rl(e,l,a,t):Ft(e,l):i._visibility&2?rl(e,l,a,t):(i._visibility|=2,ct(e,l,a,t,(l.subtreeFlags&10256)!==0||!1)),n&2048&&bu(u,l);break;case 24:rl(e,l,a,t),n&2048&&xu(l.alternate,l);break;default:rl(e,l,a,t)}}function ct(e,l,a,t,n){for(n=n&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var i=e,u=l,s=a,r=t,h=u.flags;switch(u.tag){case 0:case 11:case 15:ct(i,u,s,r,n),Wt(8,u);break;case 23:break;case 22:var y=u.stateNode;u.memoizedState!==null?y._visibility&2?ct(i,u,s,r,n):Ft(i,u):(y._visibility|=2,ct(i,u,s,r,n)),n&&h&2048&&bu(u.alternate,u);break;case 24:ct(i,u,s,r,n),n&&h&2048&&xu(u.alternate,u);break;default:ct(i,u,s,r,n)}l=l.sibling}}function Ft(e,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var a=e,t=l,n=t.flags;switch(t.tag){case 22:Ft(a,t),n&2048&&bu(t.alternate,t);break;case 24:Ft(a,t),n&2048&&xu(t.alternate,t);break;default:Ft(a,t)}l=l.sibling}}var It=8192;function ut(e,l,a){if(e.subtreeFlags&It)for(e=e.child;e!==null;)Wo(e,l,a),e=e.sibling}function Wo(e,l,a){switch(e.tag){case 26:ut(e,l,a),e.flags&It&&e.memoizedState!==null&&Mh(a,sl,e.memoizedState,e.memoizedProps);break;case 5:ut(e,l,a);break;case 3:case 4:var t=sl;sl=zi(e.stateNode.containerInfo),ut(e,l,a),sl=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=It,It=16777216,ut(e,l,a),It=t):ut(e,l,a));break;default:ut(e,l,a)}}function $o(e){var l=e.alternate;if(l!==null&&(e=l.child,e!==null)){l.child=null;do l=e.sibling,e.sibling=null,e=l;while(e!==null)}}function Pt(e){var l=e.deletions;if((e.flags&16)!==0){if(l!==null)for(var a=0;a<l.length;a++){var t=l[a];je=t,Io(t,e)}$o(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fo(e),e=e.sibling}function Fo(e){switch(e.tag){case 0:case 11:case 15:Pt(e),e.flags&2048&&$l(9,e,e.return);break;case 3:Pt(e);break;case 12:Pt(e);break;case 22:var l=e.stateNode;e.memoizedState!==null&&l._visibility&2&&(e.return===null||e.return.tag!==13)?(l._visibility&=-3,fi(e)):Pt(e);break;default:Pt(e)}}function fi(e){var l=e.deletions;if((e.flags&16)!==0){if(l!==null)for(var a=0;a<l.length;a++){var t=l[a];je=t,Io(t,e)}$o(e)}for(e=e.child;e!==null;){switch(l=e,l.tag){case 0:case 11:case 15:$l(8,l,l.return),fi(l);break;case 22:a=l.stateNode,a._visibility&2&&(a._visibility&=-3,fi(l));break;default:fi(l)}e=e.sibling}}function Io(e,l){for(;je!==null;){var a=je;switch(a.tag){case 0:case 11:case 15:$l(8,a,l);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var t=a.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:_t(a.memoizedState.cache)}if(t=a.child,t!==null)t.return=a,je=t;else e:for(a=e;je!==null;){t=je;var n=t.sibling,i=t.return;if(Ro(t),t===a){je=null;break e}if(n!==null){n.return=i,je=n;break e}je=i}}}var Zm={getCacheForType:function(e){var l=Ae(me),a=l.data.get(e);return a===void 0&&(a=e(),l.data.set(e,a)),a},cacheSignal:function(){return Ae(me).controller.signal}},Vm=typeof WeakMap=="function"?WeakMap:Map,J=0,le=null,G=null,X=0,W=0,Le=null,Fl=!1,st=!1,ju=!1,Bl=0,oe=0,Il=0,Ma=0,Su=0,Ke=0,rt=0,en=null,_e=null,Nu=!1,di=0,Po=0,mi=1/0,hi=null,Pl=null,ye=0,ea=null,ot=null,Yl=0,zu=0,Au=null,ef=null,ln=0,Tu=null;function Je(){return(J&2)!==0&&X!==0?X&-X:b.T!==null?qu():gs()}function lf(){if(Ke===0)if((X&536870912)===0||Z){var e=Sn;Sn<<=1,(Sn&3932160)===0&&(Sn=262144),Ke=e}else Ke=536870912;return e=Ze.current,e!==null&&(e.flags|=32),Ke}function we(e,l,a){(e===le&&(W===2||W===9)||e.cancelPendingCommit!==null)&&(ft(e,0),la(e,X,Ke,!1)),St(e,a),((J&2)===0||e!==le)&&(e===le&&((J&2)===0&&(Ma|=a),oe===4&&la(e,X,Ke,!1)),gl(e))}function af(e,l,a){if((J&6)!==0)throw Error(d(327));var t=!a&&(l&127)===0&&(l&e.expiredLanes)===0||jt(e,l),n=t?Jm(e,l):Mu(e,l,!0),i=t;do{if(n===0){st&&!t&&la(e,l,0,!1);break}else{if(a=e.current.alternate,i&&!Lm(a)){n=Mu(e,l,!1),i=!1;continue}if(n===2){if(i=l,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){l=u;e:{var s=e;n=en;var r=s.current.memoizedState.isDehydrated;if(r&&(ft(s,u).flags|=256),u=Mu(s,u,!1),u!==2){if(ju&&!r){s.errorRecoveryDisabledLanes|=i,Ma|=i,n=4;break e}i=_e,_e=n,i!==null&&(_e===null?_e=i:_e.push.apply(_e,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){ft(e,0),la(e,l,0,!0);break}e:{switch(t=e,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((l&4194048)!==l)break;case 6:la(t,l,Ke,!Fl);break e;case 2:_e=null;break;case 3:case 5:break;default:throw Error(d(329))}if((l&62914560)===l&&(n=di+300-Ce(),10<n)){if(la(t,l,Ke,!Fl),zn(t,0,!0)!==0)break e;Yl=l,t.timeoutHandle=Yf(tf.bind(null,t,a,_e,hi,Nu,l,Ke,Ma,rt,Fl,i,"Throttled",-0,0),n);break e}tf(t,a,_e,hi,Nu,l,Ke,Ma,rt,Fl,i,null,-0,0)}}break}while(!0);gl(e)}function tf(e,l,a,t,n,i,u,s,r,h,y,x,g,v){if(e.timeoutHandle=-1,x=l.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bl},Wo(l,i,x);var A=(i&62914560)===i?di-Ce():(i&4194048)===i?Po-Ce():0;if(A=Dh(x,A),A!==null){Yl=i,e.cancelPendingCommit=A(df.bind(null,e,l,i,a,t,n,u,s,r,y,x,null,g,v)),la(e,i,u,!h);return}}df(e,l,i,a,t,n,u,s,r)}function Lm(e){for(var l=e;;){var a=l.tag;if((a===0||a===11||a===15)&&l.flags&16384&&(a=l.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var t=0;t<a.length;t++){var n=a[t],i=n.getSnapshot;n=n.value;try{if(!Xe(i(),n))return!1}catch{return!1}}if(a=l.child,l.subtreeFlags&16384&&a!==null)a.return=l,l=a;else{if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function la(e,l,a,t){l&=~Su,l&=~Ma,e.suspendedLanes|=l,e.pingedLanes&=~l,t&&(e.warmLanes|=l),t=e.expirationTimes;for(var n=l;0<n;){var i=31-Qe(n),u=1<<i;t[i]=-1,n&=~u}a!==0&&ds(e,a,l)}function gi(){return(J&6)===0?(an(0),!1):!0}function Eu(){if(G!==null){if(W===0)var e=G.return;else e=G,Nl=ba=null,Zc(e),lt=null,Ct=0,e=G;for(;e!==null;)Yo(e.alternate,e),e=e.return;G=null}}function ft(e,l){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,fh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Yl=0,Eu(),le=e,G=a=jl(e.current,null),X=l,W=0,Le=null,Fl=!1,st=jt(e,l),ju=!1,rt=Ke=Su=Ma=Il=oe=0,_e=en=null,Nu=!1,(l&8)!==0&&(l|=l&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=l;0<t;){var n=31-Qe(t),i=1<<n;l|=e[n],t&=~i}return Bl=l,_n(),a}function nf(e,l){_=null,b.H=Kt,l===et||l===Vn?(l=br(),W=3):l===Uc?(l=br(),W=4):W=l===iu?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,Le=l,G===null&&(oe=1,ni(e,Pe(l,e.current)))}function cf(){var e=Ze.current;return e===null?!0:(X&4194048)===X?tl===null:(X&62914560)===X||(X&536870912)!==0?e===tl:!1}function uf(){var e=b.H;return b.H=Kt,e===null?Kt:e}function sf(){var e=b.A;return b.A=Zm,e}function vi(){oe=4,Fl||(X&4194048)!==X&&Ze.current!==null||(st=!0),(Il&134217727)===0&&(Ma&134217727)===0||le===null||la(le,X,Ke,!1)}function Mu(e,l,a){var t=J;J|=2;var n=uf(),i=sf();(le!==e||X!==l)&&(hi=null,ft(e,l)),l=!1;var u=oe;e:do try{if(W!==0&&G!==null){var s=G,r=Le;switch(W){case 8:Eu(),u=6;break e;case 3:case 2:case 9:case 6:Ze.current===null&&(l=!0);var h=W;if(W=0,Le=null,dt(e,s,r,h),a&&st){u=0;break e}break;default:h=W,W=0,Le=null,dt(e,s,r,h)}}Km(),u=oe;break}catch(y){nf(e,y)}while(!0);return l&&e.shellSuspendCounter++,Nl=ba=null,J=t,b.H=n,b.A=i,G===null&&(le=null,X=0,_n()),u}function Km(){for(;G!==null;)rf(G)}function Jm(e,l){var a=J;J|=2;var t=uf(),n=sf();le!==e||X!==l?(hi=null,mi=Ce()+500,ft(e,l)):st=jt(e,l);e:do try{if(W!==0&&G!==null){l=G;var i=Le;l:switch(W){case 1:W=0,Le=null,dt(e,l,i,1);break;case 2:case 9:if(yr(i)){W=0,Le=null,of(l);break}l=function(){W!==2&&W!==9||le!==e||(W=7),gl(e)},i.then(l,l);break e;case 3:W=7;break e;case 4:W=5;break e;case 7:yr(i)?(W=0,Le=null,of(l)):(W=0,Le=null,dt(e,l,i,7));break;case 5:var u=null;switch(G.tag){case 26:u=G.memoizedState;case 5:case 27:var s=G;if(u?Wf(u):s.stateNode.complete){W=0,Le=null;var r=s.sibling;if(r!==null)G=r;else{var h=s.return;h!==null?(G=h,yi(h)):G=null}break l}}W=0,Le=null,dt(e,l,i,5);break;case 6:W=0,Le=null,dt(e,l,i,6);break;case 8:Eu(),oe=6;break e;default:throw Error(d(462))}}km();break}catch(y){nf(e,y)}while(!0);return Nl=ba=null,b.H=t,b.A=n,J=a,G!==null?0:(le=null,X=0,_n(),oe)}function km(){for(;G!==null&&!yd();)rf(G)}function rf(e){var l=qo(e.alternate,e,Bl);e.memoizedProps=e.pendingProps,l===null?yi(e):G=l}function of(e){var l=e,a=l.alternate;switch(l.tag){case 15:case 0:l=To(a,l,l.pendingProps,l.type,void 0,X);break;case 11:l=To(a,l,l.pendingProps,l.type.render,l.ref,X);break;case 5:Zc(l);default:Yo(a,l),l=G=cr(l,Bl),l=qo(a,l,Bl)}e.memoizedProps=e.pendingProps,l===null?yi(e):G=l}function dt(e,l,a,t){Nl=ba=null,Zc(l),lt=null,Ct=0;var n=l.return;try{if(_m(e,n,l,a,X)){oe=1,ni(e,Pe(a,e.current)),G=null;return}}catch(i){if(n!==null)throw G=n,i;oe=1,ni(e,Pe(a,e.current)),G=null;return}l.flags&32768?(Z||t===1?e=!0:st||(X&536870912)!==0?e=!1:(Fl=e=!0,(t===2||t===9||t===3||t===6)&&(t=Ze.current,t!==null&&t.tag===13&&(t.flags|=16384))),ff(l,e)):yi(l)}function yi(e){var l=e;do{if((l.flags&32768)!==0){ff(l,Fl);return}e=l.return;var a=Gm(l.alternate,l,Bl);if(a!==null){G=a;return}if(l=l.sibling,l!==null){G=l;return}G=l=e}while(l!==null);oe===0&&(oe=5)}function ff(e,l){do{var a=Qm(e.alternate,e);if(a!==null){a.flags&=32767,G=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!l&&(e=e.sibling,e!==null)){G=e;return}G=e=a}while(e!==null);oe=6,G=null}function df(e,l,a,t,n,i,u,s,r){e.cancelPendingCommit=null;do pi();while(ye!==0);if((J&6)!==0)throw Error(d(327));if(l!==null){if(l===e.current)throw Error(d(177));if(i=l.lanes|l.childLanes,i|=vc,Ed(e,a,i,u,s,r),e===le&&(G=le=null,X=0),ot=l,ea=e,Yl=a,zu=i,Au=n,ef=t,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Im(xn,function(){return yf(),null})):(e.callbackNode=null,e.callbackPriority=0),t=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||t){t=b.T,b.T=null,n=N.p,N.p=2,u=J,J|=4;try{Xm(e,l,a)}finally{J=u,N.p=n,b.T=t}}ye=1,mf(),hf(),gf()}}function mf(){if(ye===1){ye=0;var e=ea,l=ot,a=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||a){a=b.T,b.T=null;var t=N.p;N.p=2;var n=J;J|=4;try{Ko(l,e);var i=Qu,u=Fs(e.containerInfo),s=i.focusedElem,r=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&$s(s.ownerDocument.documentElement,s)){if(r!==null&&fc(s)){var h=r.start,y=r.end;if(y===void 0&&(y=h),"selectionStart"in s)s.selectionStart=h,s.selectionEnd=Math.min(y,s.value.length);else{var x=s.ownerDocument||document,g=x&&x.defaultView||window;if(g.getSelection){var v=g.getSelection(),A=s.textContent.length,U=Math.min(r.start,A),ee=r.end===void 0?U:Math.min(r.end,A);!v.extend&&U>ee&&(u=ee,ee=U,U=u);var f=Ws(s,U),o=Ws(s,ee);if(f&&o&&(v.rangeCount!==1||v.anchorNode!==f.node||v.anchorOffset!==f.offset||v.focusNode!==o.node||v.focusOffset!==o.offset)){var m=x.createRange();m.setStart(f.node,f.offset),v.removeAllRanges(),U>ee?(v.addRange(m),v.extend(o.node,o.offset)):(m.setEnd(o.node,o.offset),v.addRange(m))}}}}for(x=[],v=s;v=v.parentNode;)v.nodeType===1&&x.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<x.length;s++){var p=x[s];p.element.scrollLeft=p.left,p.element.scrollTop=p.top}}Oi=!!Gu,Qu=Gu=null}finally{J=n,N.p=t,b.T=a}}e.current=l,ye=2}}function hf(){if(ye===2){ye=0;var e=ea,l=ot,a=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||a){a=b.T,b.T=null;var t=N.p;N.p=2;var n=J;J|=4;try{Xo(e,l.alternate,l)}finally{J=n,N.p=t,b.T=a}}ye=3}}function gf(){if(ye===4||ye===3){ye=0,pd();var e=ea,l=ot,a=Yl,t=ef;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?ye=5:(ye=0,ot=ea=null,vf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Pl=null),Ki(a),l=l.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(xt,l,void 0,(l.current.flags&128)===128)}catch{}if(t!==null){l=b.T,n=N.p,N.p=2,b.T=null;try{for(var i=e.onRecoverableError,u=0;u<t.length;u++){var s=t[u];i(s.value,{componentStack:s.stack})}}finally{b.T=l,N.p=n}}(Yl&3)!==0&&pi(),gl(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Tu?ln++:(ln=0,Tu=e):ln=0,an(0)}}function vf(e,l){(e.pooledCacheLanes&=l)===0&&(l=e.pooledCache,l!=null&&(e.pooledCache=null,_t(l)))}function pi(){return mf(),hf(),gf(),yf()}function yf(){if(ye!==5)return!1;var e=ea,l=zu;zu=0;var a=Ki(Yl),t=b.T,n=N.p;try{N.p=32>a?32:a,b.T=null,a=Au,Au=null;var i=ea,u=Yl;if(ye=0,ot=ea=null,Yl=0,(J&6)!==0)throw Error(d(331));var s=J;if(J|=4,Fo(i.current),ko(i,i.current,u,a),J=s,an(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(xt,i)}catch{}return!0}finally{N.p=n,b.T=t,vf(e,l)}}function pf(e,l,a){l=Pe(a,l),l=nu(e.stateNode,l,2),e=Jl(e,l,2),e!==null&&(St(e,2),gl(e))}function $(e,l,a){if(e.tag===3)pf(e,e,a);else for(;l!==null;){if(l.tag===3){pf(l,e,a);break}else if(l.tag===1){var t=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Pl===null||!Pl.has(t))){e=Pe(a,e),a=po(2),t=Jl(l,a,2),t!==null&&(bo(a,t,l,e),St(t,2),gl(t));break}}l=l.return}}function Du(e,l,a){var t=e.pingCache;if(t===null){t=e.pingCache=new Vm;var n=new Set;t.set(l,n)}else n=t.get(l),n===void 0&&(n=new Set,t.set(l,n));n.has(a)||(ju=!0,n.add(a),e=Wm.bind(null,e,l,a),l.then(e,e))}function Wm(e,l,a){var t=e.pingCache;t!==null&&t.delete(l),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,le===e&&(X&a)===a&&(oe===4||oe===3&&(X&62914560)===X&&300>Ce()-di?(J&2)===0&&ft(e,0):Su|=a,rt===X&&(rt=0)),gl(e)}function bf(e,l){l===0&&(l=fs()),e=va(e,l),e!==null&&(St(e,l),gl(e))}function $m(e){var l=e.memoizedState,a=0;l!==null&&(a=l.retryLane),bf(e,a)}function Fm(e,l){var a=0;switch(e.tag){case 31:case 13:var t=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:t=e.stateNode;break;case 22:t=e.stateNode._retryCache;break;default:throw Error(d(314))}t!==null&&t.delete(l),bf(e,a)}function Im(e,l){return Ri(e,l)}var bi=null,mt=null,Ou=!1,xi=!1,Uu=!1,aa=0;function gl(e){e!==mt&&e.next===null&&(mt===null?bi=mt=e:mt=mt.next=e),xi=!0,Ou||(Ou=!0,eh())}function an(e,l){if(!Uu&&xi){Uu=!0;do for(var a=!1,t=bi;t!==null;){if(e!==0){var n=t.pendingLanes;if(n===0)var i=0;else{var u=t.suspendedLanes,s=t.pingedLanes;i=(1<<31-Qe(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Nf(t,i))}else i=X,i=zn(t,t===le?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(i&3)===0||jt(t,i)||(a=!0,Nf(t,i));t=t.next}while(a);Uu=!1}}function Pm(){xf()}function xf(){xi=Ou=!1;var e=0;aa!==0&&oh()&&(e=aa);for(var l=Ce(),a=null,t=bi;t!==null;){var n=t.next,i=jf(t,l);i===0?(t.next=null,a===null?bi=n:a.next=n,n===null&&(mt=a)):(a=t,(e!==0||(i&3)!==0)&&(xi=!0)),t=n}ye!==0&&ye!==5||an(e),aa!==0&&(aa=0)}function jf(e,l){for(var a=e.suspendedLanes,t=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-Qe(i),s=1<<u,r=n[u];r===-1?((s&a)===0||(s&t)!==0)&&(n[u]=Td(s,l)):r<=l&&(e.expiredLanes|=s),i&=~s}if(l=le,a=X,a=zn(e,e===l?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t=e.callbackNode,a===0||e===l&&(W===2||W===9)||e.cancelPendingCommit!==null)return t!==null&&t!==null&&Zi(t),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||jt(e,a)){if(l=a&-a,l===e.callbackPriority)return l;switch(t!==null&&Zi(t),Ki(a)){case 2:case 8:a=rs;break;case 32:a=xn;break;case 268435456:a=os;break;default:a=xn}return t=Sf.bind(null,e),a=Ri(a,t),e.callbackPriority=l,e.callbackNode=a,l}return t!==null&&t!==null&&Zi(t),e.callbackPriority=2,e.callbackNode=null,2}function Sf(e,l){if(ye!==0&&ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(pi()&&e.callbackNode!==a)return null;var t=X;return t=zn(e,e===le?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t===0?null:(af(e,t,l),jf(e,Ce()),e.callbackNode!=null&&e.callbackNode===a?Sf.bind(null,e):null)}function Nf(e,l){if(pi())return null;af(e,l,!0)}function eh(){dh(function(){(J&6)!==0?Ri(ss,Pm):xf()})}function qu(){if(aa===0){var e=Ia;e===0&&(e=jn,jn<<=1,(jn&261888)===0&&(jn=256)),aa=e}return aa}function zf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Mn(""+e)}function Af(e,l){var a=l.ownerDocument.createElement("input");return a.name=l.name,a.value=l.value,e.id&&a.setAttribute("form",e.id),l.parentNode.insertBefore(a,l),e=new FormData(e),a.parentNode.removeChild(a),e}function lh(e,l,a,t,n){if(l==="submit"&&a&&a.stateNode===n){var i=zf((n[Ue]||null).action),u=t.submitter;u&&(l=(l=u[Ue]||null)?zf(l.formAction):u.getAttribute("formAction"),l!==null&&(i=l,u=null));var s=new qn("action","action",null,t,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(aa!==0){var r=u?Af(n,u):new FormData(n);Ic(a,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(s.preventDefault(),r=u?Af(n,u):new FormData(n),Ic(a,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var Bu=0;Bu<gc.length;Bu++){var Yu=gc[Bu],ah=Yu.toLowerCase(),th=Yu[0].toUpperCase()+Yu.slice(1);ul(ah,"on"+th)}ul(er,"onAnimationEnd"),ul(lr,"onAnimationIteration"),ul(ar,"onAnimationStart"),ul("dblclick","onDoubleClick"),ul("focusin","onFocus"),ul("focusout","onBlur"),ul(bm,"onTransitionRun"),ul(xm,"onTransitionStart"),ul(jm,"onTransitionCancel"),ul(tr,"onTransitionEnd"),Ca("onMouseEnter",["mouseout","mouseover"]),Ca("onMouseLeave",["mouseout","mouseover"]),Ca("onPointerEnter",["pointerout","pointerover"]),Ca("onPointerLeave",["pointerout","pointerover"]),da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),da("onBeforeInput",["compositionend","keypress","textInput","paste"]),da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tn));function Tf(e,l){l=(l&4)!==0;for(var a=0;a<e.length;a++){var t=e[a],n=t.event;t=t.listeners;e:{var i=void 0;if(l)for(var u=t.length-1;0<=u;u--){var s=t[u],r=s.instance,h=s.currentTarget;if(s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=h;try{i(n)}catch(y){Hn(y)}n.currentTarget=null,i=r}else for(u=0;u<t.length;u++){if(s=t[u],r=s.instance,h=s.currentTarget,s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=h;try{i(n)}catch(y){Hn(y)}n.currentTarget=null,i=r}}}}function Q(e,l){var a=l[Ji];a===void 0&&(a=l[Ji]=new Set);var t=e+"__bubble";a.has(t)||(Ef(l,e,2,!1),a.add(t))}function Hu(e,l,a){var t=0;l&&(t|=4),Ef(a,e,t,l)}var ji="_reactListening"+Math.random().toString(36).slice(2);function _u(e){if(!e[ji]){e[ji]=!0,ps.forEach(function(a){a!=="selectionchange"&&(nh.has(a)||Hu(a,!1,e),Hu(a,!0,e))});var l=e.nodeType===9?e:e.ownerDocument;l===null||l[ji]||(l[ji]=!0,Hu("selectionchange",!1,l))}}function Ef(e,l,a,t){switch(ad(l)){case 2:var n=qh;break;case 8:n=Bh;break;default:n=Fu}a=n.bind(null,l,a,e),n=void 0,!ac||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),t?n!==void 0?e.addEventListener(l,a,{capture:!0,passive:n}):e.addEventListener(l,a,!0):n!==void 0?e.addEventListener(l,a,{passive:n}):e.addEventListener(l,a,!1)}function wu(e,l,a,t,n){var i=t;if((l&1)===0&&(l&2)===0&&t!==null)e:for(;;){if(t===null)return;var u=t.tag;if(u===3||u===4){var s=t.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=t.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Ha(s),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){t=i=u;continue e}s=s.parentNode}}t=t.return}Os(function(){var h=i,y=ec(a),x=[];e:{var g=nr.get(e);if(g!==void 0){var v=qn,A=e;switch(e){case"keypress":if(On(a)===0)break e;case"keydown":case"keyup":v=Fd;break;case"focusin":A="focus",v=cc;break;case"focusout":A="blur",v=cc;break;case"beforeblur":case"afterblur":v=cc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=em;break;case er:case lr:case ar:v=Rd;break;case tr:v=am;break;case"scroll":case"scrollend":v=wd;break;case"wheel":v=nm;break;case"copy":case"cut":case"paste":v=Vd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Hs;break;case"toggle":case"beforetoggle":v=cm}var U=(l&4)!==0,ee=!U&&(e==="scroll"||e==="scrollend"),f=U?g!==null?g+"Capture":null:g;U=[];for(var o=h,m;o!==null;){var p=o;if(m=p.stateNode,p=p.tag,p!==5&&p!==26&&p!==27||m===null||f===null||(p=At(o,f),p!=null&&U.push(nn(o,p,m))),ee)break;o=o.return}0<U.length&&(g=new v(g,A,null,a,y),x.push({event:g,listeners:U}))}}if((l&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&a!==Pi&&(A=a.relatedTarget||a.fromElement)&&(Ha(A)||A[Ya]))break e;if((v||g)&&(g=y.window===y?y:(g=y.ownerDocument)?g.defaultView||g.parentWindow:window,v?(A=a.relatedTarget||a.toElement,v=h,A=A?Ha(A):null,A!==null&&(ee=z(A),U=A.tag,A!==ee||U!==5&&U!==27&&U!==6)&&(A=null)):(v=null,A=h),v!==A)){if(U=Bs,p="onMouseLeave",f="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(U=Hs,p="onPointerLeave",f="onPointerEnter",o="pointer"),ee=v==null?g:zt(v),m=A==null?g:zt(A),g=new U(p,o+"leave",v,a,y),g.target=ee,g.relatedTarget=m,p=null,Ha(y)===h&&(U=new U(f,o+"enter",A,a,y),U.target=m,U.relatedTarget=ee,p=U),ee=p,v&&A)l:{for(U=ih,f=v,o=A,m=0,p=f;p;p=U(p))m++;p=0;for(var E=o;E;E=U(E))p++;for(;0<m-p;)f=U(f),m--;for(;0<p-m;)o=U(o),p--;for(;m--;){if(f===o||o!==null&&f===o.alternate){U=f;break l}f=U(f),o=U(o)}U=null}else U=null;v!==null&&Mf(x,g,v,U,!1),A!==null&&ee!==null&&Mf(x,ee,A,U,!0)}}e:{if(g=h?zt(h):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var V=Zs;else if(Xs(g))if(Vs)V=vm;else{V=hm;var T=mm}else v=g.nodeName,!v||v.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?h&&Ii(h.elementType)&&(V=Zs):V=gm;if(V&&(V=V(e,h))){Rs(x,V,a,y);break e}T&&T(e,g,h),e==="focusout"&&h&&g.type==="number"&&h.memoizedProps.value!=null&&Fi(g,"number",g.value)}switch(T=h?zt(h):window,e){case"focusin":(Xs(T)||T.contentEditable==="true")&&(Va=T,dc=h,Bt=null);break;case"focusout":Bt=dc=Va=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,Is(x,a,y);break;case"selectionchange":if(pm)break;case"keydown":case"keyup":Is(x,a,y)}var w;if(sc)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Za?Gs(e,a)&&(R="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(R="onCompositionStart");R&&(_s&&a.locale!=="ko"&&(Za||R!=="onCompositionStart"?R==="onCompositionEnd"&&Za&&(w=Us()):(Ql=y,tc="value"in Ql?Ql.value:Ql.textContent,Za=!0)),T=Si(h,R),0<T.length&&(R=new Ys(R,e,null,a,y),x.push({event:R,listeners:T}),w?R.data=w:(w=Qs(a),w!==null&&(R.data=w)))),(w=sm?rm(e,a):om(e,a))&&(R=Si(h,"onBeforeInput"),0<R.length&&(T=new Ys("onBeforeInput","beforeinput",null,a,y),x.push({event:T,listeners:R}),T.data=w)),lh(x,e,h,a,y)}Tf(x,l)})}function nn(e,l,a){return{instance:e,listener:l,currentTarget:a}}function Si(e,l){for(var a=l+"Capture",t=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=At(e,a),n!=null&&t.unshift(nn(e,n,i)),n=At(e,l),n!=null&&t.push(nn(e,n,i))),e.tag===3)return t;e=e.return}return[]}function ih(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mf(e,l,a,t,n){for(var i=l._reactName,u=[];a!==null&&a!==t;){var s=a,r=s.alternate,h=s.stateNode;if(s=s.tag,r!==null&&r===t)break;s!==5&&s!==26&&s!==27||h===null||(r=h,n?(h=At(a,i),h!=null&&u.unshift(nn(a,h,r))):n||(h=At(a,i),h!=null&&u.push(nn(a,h,r)))),a=a.return}u.length!==0&&e.push({event:l,listeners:u})}var ch=/\r\n?/g,uh=/\u0000|\uFFFD/g;function Df(e){return(typeof e=="string"?e:""+e).replace(ch,`
`).replace(uh,"")}function Of(e,l){return l=Df(l),Df(e)===l}function P(e,l,a,t,n,i){switch(a){case"children":typeof t=="string"?l==="body"||l==="textarea"&&t===""||Qa(e,t):(typeof t=="number"||typeof t=="bigint")&&l!=="body"&&Qa(e,""+t);break;case"className":Tn(e,"class",t);break;case"tabIndex":Tn(e,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Tn(e,a,t);break;case"style":Ms(e,t,i);break;case"data":if(l!=="object"){Tn(e,"data",t);break}case"src":case"href":if(t===""&&(l!=="a"||a!=="href")){e.removeAttribute(a);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(a);break}t=Mn(""+t),e.setAttribute(a,t);break;case"action":case"formAction":if(typeof t=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(l!=="input"&&P(e,l,"name",n.name,n,null),P(e,l,"formEncType",n.formEncType,n,null),P(e,l,"formMethod",n.formMethod,n,null),P(e,l,"formTarget",n.formTarget,n,null)):(P(e,l,"encType",n.encType,n,null),P(e,l,"method",n.method,n,null),P(e,l,"target",n.target,n,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(a);break}t=Mn(""+t),e.setAttribute(a,t);break;case"onClick":t!=null&&(e.onclick=bl);break;case"onScroll":t!=null&&Q("scroll",e);break;case"onScrollEnd":t!=null&&Q("scrollend",e);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(d(61));if(a=t.__html,a!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":e.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){e.removeAttribute("xlink:href");break}a=Mn(""+t),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(a,""+t):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":t===!0?e.setAttribute(a,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(a,t):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?e.setAttribute(a,t):e.removeAttribute(a);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?e.removeAttribute(a):e.setAttribute(a,t);break;case"popover":Q("beforetoggle",e),Q("toggle",e),An(e,"popover",t);break;case"xlinkActuate":pl(e,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":pl(e,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":pl(e,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":pl(e,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":pl(e,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":pl(e,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":pl(e,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":pl(e,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":pl(e,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":An(e,"is",t);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hd.get(a)||a,An(e,a,t))}}function Cu(e,l,a,t,n,i){switch(a){case"style":Ms(e,t,i);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(d(61));if(a=t.__html,a!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof t=="string"?Qa(e,t):(typeof t=="number"||typeof t=="bigint")&&Qa(e,""+t);break;case"onScroll":t!=null&&Q("scroll",e);break;case"onScrollEnd":t!=null&&Q("scrollend",e);break;case"onClick":t!=null&&(e.onclick=bl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),l=a.slice(2,n?a.length-7:void 0),i=e[Ue]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(l,i,n),typeof t=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(l,t,n);break e}a in e?e[a]=t:t===!0?e.setAttribute(a,""):An(e,a,t)}}}function Ee(e,l,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",e),Q("load",e);var t=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":t=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,l));default:P(e,l,i,u,a,null)}}n&&P(e,l,"srcSet",a.srcSet,a,null),t&&P(e,l,"src",a.src,a,null);return;case"input":Q("invalid",e);var s=i=u=n=null,r=null,h=null;for(t in a)if(a.hasOwnProperty(t)){var y=a[t];if(y!=null)switch(t){case"name":n=y;break;case"type":u=y;break;case"checked":r=y;break;case"defaultChecked":h=y;break;case"value":i=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,l));break;default:P(e,l,t,y,a,null)}}zs(e,i,s,r,h,u,n,!1);return;case"select":Q("invalid",e),t=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":t=s;default:P(e,l,n,s,a,null)}l=i,a=u,e.multiple=!!t,l!=null?Ga(e,!!t,l,!1):a!=null&&Ga(e,!!t,a,!0);return;case"textarea":Q("invalid",e),i=n=t=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":t=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(d(91));break;default:P(e,l,u,s,a,null)}Ts(e,t,n,i);return;case"option":for(r in a)a.hasOwnProperty(r)&&(t=a[r],t!=null)&&(r==="selected"?e.selected=t&&typeof t!="function"&&typeof t!="symbol":P(e,l,r,t,a,null));return;case"dialog":Q("beforetoggle",e),Q("toggle",e),Q("cancel",e),Q("close",e);break;case"iframe":case"object":Q("load",e);break;case"video":case"audio":for(t=0;t<tn.length;t++)Q(tn[t],e);break;case"image":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"embed":case"source":case"link":Q("error",e),Q("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in a)if(a.hasOwnProperty(h)&&(t=a[h],t!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,l));default:P(e,l,h,t,a,null)}return;default:if(Ii(l)){for(y in a)a.hasOwnProperty(y)&&(t=a[y],t!==void 0&&Cu(e,l,y,t,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(t=a[s],t!=null&&P(e,l,s,t,a,null))}function sh(e,l,a,t){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,r=null,h=null,y=null;for(v in a){var x=a[v];if(a.hasOwnProperty(v)&&x!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":r=x;default:t.hasOwnProperty(v)||P(e,l,v,null,t,x)}}for(var g in t){var v=t[g];if(x=a[g],t.hasOwnProperty(g)&&(v!=null||x!=null))switch(g){case"type":i=v;break;case"name":n=v;break;case"checked":h=v;break;case"defaultChecked":y=v;break;case"value":u=v;break;case"defaultValue":s=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(d(137,l));break;default:v!==x&&P(e,l,g,v,t,x)}}$i(e,u,s,r,h,y,i,n);return;case"select":v=u=s=g=null;for(i in a)if(r=a[i],a.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":v=r;default:t.hasOwnProperty(i)||P(e,l,i,null,t,r)}for(n in t)if(i=t[n],r=a[n],t.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":g=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==r&&P(e,l,n,i,t,r)}l=s,a=u,t=v,g!=null?Ga(e,!!a,g,!1):!!t!=!!a&&(l!=null?Ga(e,!!a,l,!0):Ga(e,!!a,a?[]:"",!1));return;case"textarea":v=g=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!t.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:P(e,l,s,null,t,n)}for(u in t)if(n=t[u],i=a[u],t.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":g=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&P(e,l,u,n,t,i)}As(e,g,v);return;case"option":for(var A in a)g=a[A],a.hasOwnProperty(A)&&g!=null&&!t.hasOwnProperty(A)&&(A==="selected"?e.selected=!1:P(e,l,A,null,t,g));for(r in t)g=t[r],v=a[r],t.hasOwnProperty(r)&&g!==v&&(g!=null||v!=null)&&(r==="selected"?e.selected=g&&typeof g!="function"&&typeof g!="symbol":P(e,l,r,g,t,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in a)g=a[U],a.hasOwnProperty(U)&&g!=null&&!t.hasOwnProperty(U)&&P(e,l,U,null,t,g);for(h in t)if(g=t[h],v=a[h],t.hasOwnProperty(h)&&g!==v&&(g!=null||v!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(137,l));break;default:P(e,l,h,g,t,v)}return;default:if(Ii(l)){for(var ee in a)g=a[ee],a.hasOwnProperty(ee)&&g!==void 0&&!t.hasOwnProperty(ee)&&Cu(e,l,ee,void 0,t,g);for(y in t)g=t[y],v=a[y],!t.hasOwnProperty(y)||g===v||g===void 0&&v===void 0||Cu(e,l,y,g,t,v);return}}for(var f in a)g=a[f],a.hasOwnProperty(f)&&g!=null&&!t.hasOwnProperty(f)&&P(e,l,f,null,t,g);for(x in t)g=t[x],v=a[x],!t.hasOwnProperty(x)||g===v||g==null&&v==null||P(e,l,x,g,t,v)}function Uf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,l=0,a=performance.getEntriesByType("resource"),t=0;t<a.length;t++){var n=a[t],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&Uf(u)){for(u=0,s=n.responseEnd,t+=1;t<a.length;t++){var r=a[t],h=r.startTime;if(h>s)break;var y=r.transferSize,x=r.initiatorType;y&&Uf(x)&&(r=r.responseEnd,u+=y*(r<s?1:(s-h)/(r-h)))}if(--t,l+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return l/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gu=null,Qu=null;function Ni(e){return e.nodeType===9?e:e.ownerDocument}function qf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bf(e,l){if(e===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&l==="foreignObject"?0:e}function Xu(e,l){return e==="textarea"||e==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var Ru=null;function oh(){var e=window.event;return e&&e.type==="popstate"?e===Ru?!1:(Ru=e,!0):(Ru=null,!1)}var Yf=typeof setTimeout=="function"?setTimeout:void 0,fh=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,dh=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(e){return Hf.resolve(null).then(e).catch(mh)}:Yf;function mh(e){setTimeout(function(){throw e})}function ta(e){return e==="head"}function _f(e,l){var a=l,t=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(t===0){e.removeChild(n),yt(l);return}t--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")t++;else if(a==="html")cn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,cn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Nt]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&cn(e.ownerDocument.body);a=n}while(a);yt(l)}function wf(e,l){var a=e;e=0;do{var t=a.nextSibling;if(a.nodeType===1?l?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(l?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),t&&t.nodeType===8)if(a=t.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=t}while(a)}function Zu(e){var l=e.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var a=l;switch(l=l.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zu(a),ki(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function hh(e,l,a,t){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==l.toLowerCase()){if(!t&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(t){if(!e[Nt])switch(l){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(l==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=nl(e.nextSibling),e===null)break}return null}function gh(e,l,a){if(l==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=nl(e.nextSibling),e===null))return null;return e}function Cf(e,l){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=nl(e.nextSibling),e===null))return null;return e}function Vu(e){return e.data==="$?"||e.data==="$~"}function Lu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vh(e,l){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=l;else if(e.data!=="$?"||a.readyState!=="loading")l();else{var t=function(){l(),a.removeEventListener("DOMContentLoaded",t)};a.addEventListener("DOMContentLoaded",t),e._reactRetry=t}}function nl(e){for(;e!=null;e=e.nextSibling){var l=e.nodeType;if(l===1||l===3)break;if(l===8){if(l=e.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return e}var Ku=null;function Gf(e){e=e.nextSibling;for(var l=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(l===0)return nl(e.nextSibling);l--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||l++}e=e.nextSibling}return null}function Qf(e){e=e.previousSibling;for(var l=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(l===0)return e;l--}else a!=="/$"&&a!=="/&"||l++}e=e.previousSibling}return null}function Xf(e,l,a){switch(l=Ni(a),e){case"html":if(e=l.documentElement,!e)throw Error(d(452));return e;case"head":if(e=l.head,!e)throw Error(d(453));return e;case"body":if(e=l.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function cn(e){for(var l=e.attributes;l.length;)e.removeAttributeNode(l[0]);ki(e)}var il=new Map,Rf=new Set;function zi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hl=N.d;N.d={f:yh,r:ph,D:bh,C:xh,L:jh,m:Sh,X:zh,S:Nh,M:Ah};function yh(){var e=Hl.f(),l=gi();return e||l}function ph(e){var l=_a(e);l!==null&&l.tag===5&&l.type==="form"?to(l):Hl.r(e)}var ht=typeof document>"u"?null:document;function Zf(e,l,a){var t=ht;if(t&&typeof l=="string"&&l){var n=Fe(l);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Rf.has(n)||(Rf.add(n),e={rel:e,crossOrigin:a,href:l},t.querySelector(n)===null&&(l=t.createElement("link"),Ee(l,"link",e),xe(l),t.head.appendChild(l)))}}function bh(e){Hl.D(e),Zf("dns-prefetch",e,null)}function xh(e,l){Hl.C(e,l),Zf("preconnect",e,l)}function jh(e,l,a){Hl.L(e,l,a);var t=ht;if(t&&e&&l){var n='link[rel="preload"][as="'+Fe(l)+'"]';l==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Fe(a.imageSizes)+'"]')):n+='[href="'+Fe(e)+'"]';var i=n;switch(l){case"style":i=gt(e);break;case"script":i=vt(e)}il.has(i)||(e=O({rel:"preload",href:l==="image"&&a&&a.imageSrcSet?void 0:e,as:l},a),il.set(i,e),t.querySelector(n)!==null||l==="style"&&t.querySelector(un(i))||l==="script"&&t.querySelector(sn(i))||(l=t.createElement("link"),Ee(l,"link",e),xe(l),t.head.appendChild(l)))}}function Sh(e,l){Hl.m(e,l);var a=ht;if(a&&e){var t=l&&typeof l.as=="string"?l.as:"script",n='link[rel="modulepreload"][as="'+Fe(t)+'"][href="'+Fe(e)+'"]',i=n;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=vt(e)}if(!il.has(i)&&(e=O({rel:"modulepreload",href:e},l),il.set(i,e),a.querySelector(n)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(sn(i)))return}t=a.createElement("link"),Ee(t,"link",e),xe(t),a.head.appendChild(t)}}}function Nh(e,l,a){Hl.S(e,l,a);var t=ht;if(t&&e){var n=wa(t).hoistableStyles,i=gt(e);l=l||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=t.querySelector(un(i)))s.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":l},a),(a=il.get(i))&&Ju(e,a);var r=u=t.createElement("link");xe(r),Ee(r,"link",e),r._p=new Promise(function(h,y){r.onload=h,r.onerror=y}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ai(u,l,t)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function zh(e,l){Hl.X(e,l);var a=ht;if(a&&e){var t=wa(a).hoistableScripts,n=vt(e),i=t.get(n);i||(i=a.querySelector(sn(n)),i||(e=O({src:e,async:!0},l),(l=il.get(n))&&ku(e,l),i=a.createElement("script"),xe(i),Ee(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},t.set(n,i))}}function Ah(e,l){Hl.M(e,l);var a=ht;if(a&&e){var t=wa(a).hoistableScripts,n=vt(e),i=t.get(n);i||(i=a.querySelector(sn(n)),i||(e=O({src:e,async:!0,type:"module"},l),(l=il.get(n))&&ku(e,l),i=a.createElement("script"),xe(i),Ee(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},t.set(n,i))}}function Vf(e,l,a,t){var n=(n=wl.current)?zi(n):null;if(!n)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(l=gt(a.href),a=wa(n).hoistableStyles,t=a.get(l),t||(t={type:"style",instance:null,count:0,state:null},a.set(l,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=gt(a.href);var i=wa(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(un(e)))&&!i._p&&(u.instance=i,u.state.loading=5),il.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},il.set(e,a),i||Th(n,e,a,u.state))),l&&t===null)throw Error(d(528,""));return u}if(l&&t!==null)throw Error(d(529,""));return null;case"script":return l=a.async,a=a.src,typeof a=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=vt(a),a=wa(n).hoistableScripts,t=a.get(l),t||(t={type:"script",instance:null,count:0,state:null},a.set(l,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function gt(e){return'href="'+Fe(e)+'"'}function un(e){return'link[rel="stylesheet"]['+e+"]"}function Lf(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function Th(e,l,a,t){e.querySelector('link[rel="preload"][as="style"]['+l+"]")?t.loading=1:(l=e.createElement("link"),t.preload=l,l.addEventListener("load",function(){return t.loading|=1}),l.addEventListener("error",function(){return t.loading|=2}),Ee(l,"link",a),xe(l),e.head.appendChild(l))}function vt(e){return'[src="'+Fe(e)+'"]'}function sn(e){return"script[async]"+e}function Kf(e,l,a){if(l.count++,l.instance===null)switch(l.type){case"style":var t=e.querySelector('style[data-href~="'+Fe(a.href)+'"]');if(t)return l.instance=t,xe(t),t;var n=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return t=(e.ownerDocument||e).createElement("style"),xe(t),Ee(t,"style",n),Ai(t,a.precedence,e),l.instance=t;case"stylesheet":n=gt(a.href);var i=e.querySelector(un(n));if(i)return l.state.loading|=4,l.instance=i,xe(i),i;t=Lf(a),(n=il.get(n))&&Ju(t,n),i=(e.ownerDocument||e).createElement("link"),xe(i);var u=i;return u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),Ee(i,"link",t),l.state.loading|=4,Ai(i,a.precedence,e),l.instance=i;case"script":return i=vt(a.src),(n=e.querySelector(sn(i)))?(l.instance=n,xe(n),n):(t=a,(n=il.get(i))&&(t=O({},a),ku(t,n)),e=e.ownerDocument||e,n=e.createElement("script"),xe(n),Ee(n,"link",t),e.head.appendChild(n),l.instance=n);case"void":return null;default:throw Error(d(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(t=l.instance,l.state.loading|=4,Ai(t,a.precedence,e));return l.instance}function Ai(e,l,a){for(var t=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=t.length?t[t.length-1]:null,i=n,u=0;u<t.length;u++){var s=t[u];if(s.dataset.precedence===l)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(l=a.nodeType===9?a.head:a,l.insertBefore(e,l.firstChild))}function Ju(e,l){e.crossOrigin==null&&(e.crossOrigin=l.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=l.referrerPolicy),e.title==null&&(e.title=l.title)}function ku(e,l){e.crossOrigin==null&&(e.crossOrigin=l.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=l.referrerPolicy),e.integrity==null&&(e.integrity=l.integrity)}var Ti=null;function Jf(e,l,a){if(Ti===null){var t=new Map,n=Ti=new Map;n.set(a,t)}else n=Ti,t=n.get(a),t||(t=new Map,n.set(a,t));if(t.has(e))return t;for(t.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Nt]||i[Ne]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(l)||"";u=e+u;var s=t.get(u);s?s.push(i):t.set(u,[i])}}return t}function kf(e,l,a){e=e.ownerDocument||e,e.head.insertBefore(a,l==="title"?e.querySelector("head > title"):null)}function Eh(e,l,a){if(a===1||l.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;return l.rel==="stylesheet"?(e=l.disabled,typeof l.precedence=="string"&&e==null):!0;case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function Wf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Mh(e,l,a,t){if(a.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=gt(t.href),i=l.querySelector(un(n));if(i){l=i._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(e.count++,e=Ei.bind(e),l.then(e,e)),a.state.loading|=4,a.instance=i,xe(i);return}i=l.ownerDocument||l,t=Lf(t),(n=il.get(n))&&Ju(t,n),i=i.createElement("link"),xe(i);var u=i;u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),Ee(i,"link",t),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,l),(l=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ei.bind(e),l.addEventListener("load",a),l.addEventListener("error",a))}}var Wu=0;function Dh(e,l){return e.stylesheets&&e.count===0&&Di(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var t=setTimeout(function(){if(e.stylesheets&&Di(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+l);0<e.imgBytes&&Wu===0&&(Wu=62500*rh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Di(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Wu?50:800)+l);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(t),clearTimeout(n)}}:null}function Ei(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Di(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mi=null;function Di(e,l){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mi=new Map,l.forEach(Oh,e),Mi=null,Ei.call(e))}function Oh(e,l){if(!(l.state.loading&4)){var a=Mi.get(e);if(a)var t=a.get(null);else{a=new Map,Mi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),t=u)}t&&a.set(null,t)}n=l.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||t,i===t&&a.set(null,n),a.set(u,n),this.count++,t=Ei.bind(this),n.addEventListener("load",t),n.addEventListener("error",t),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),l.state.loading|=4}}var rn={$$typeof:ke,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function Uh(e,l,a,t,n,i,u,s,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.hiddenUpdates=Vi(null),this.identifierPrefix=t,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function $f(e,l,a,t,n,i,u,s,r,h,y,x){return e=new Uh(e,l,a,u,r,h,y,x,s),l=1,i===!0&&(l|=24),i=Re(3,null,null,l),e.current=i,i.stateNode=e,l=Mc(),l.refCount++,e.pooledCache=l,l.refCount++,i.memoizedState={element:t,isDehydrated:a,cache:l},qc(i),e}function Ff(e){return e?(e=Ja,e):Ja}function If(e,l,a,t,n,i){n=Ff(n),t.context===null?t.context=n:t.pendingContext=n,t=Kl(l),t.payload={element:a},i=i===void 0?null:i,i!==null&&(t.callback=i),a=Jl(e,t,l),a!==null&&(we(a,e,l),Qt(a,e,l))}function Pf(e,l){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<l?a:l}}function $u(e,l){Pf(e,l),(e=e.alternate)&&Pf(e,l)}function ed(e){if(e.tag===13||e.tag===31){var l=va(e,67108864);l!==null&&we(l,e,67108864),$u(e,67108864)}}function ld(e){if(e.tag===13||e.tag===31){var l=Je();l=Li(l);var a=va(e,l);a!==null&&we(a,e,l),$u(e,l)}}var Oi=!0;function qh(e,l,a,t){var n=b.T;b.T=null;var i=N.p;try{N.p=2,Fu(e,l,a,t)}finally{N.p=i,b.T=n}}function Bh(e,l,a,t){var n=b.T;b.T=null;var i=N.p;try{N.p=8,Fu(e,l,a,t)}finally{N.p=i,b.T=n}}function Fu(e,l,a,t){if(Oi){var n=Iu(t);if(n===null)wu(e,l,t,Ui,a),td(e,t);else if(Hh(n,e,l,a,t))t.stopPropagation();else if(td(e,t),l&4&&-1<Yh.indexOf(e)){for(;n!==null;){var i=_a(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=fa(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var r=1<<31-Qe(u);s.entanglements[1]|=r,u&=~r}gl(i),(J&6)===0&&(mi=Ce()+500,an(0))}}break;case 31:case 13:s=va(i,2),s!==null&&we(s,i,2),gi(),$u(i,2)}if(i=Iu(t),i===null&&wu(e,l,t,Ui,a),i===n)break;n=i}n!==null&&t.stopPropagation()}else wu(e,l,t,null,a)}}function Iu(e){return e=ec(e),Pu(e)}var Ui=null;function Pu(e){if(Ui=null,e=Ha(e),e!==null){var l=z(e);if(l===null)e=null;else{var a=l.tag;if(a===13){if(e=C(l),e!==null)return e;e=null}else if(a===31){if(e=H(l),e!==null)return e;e=null}else if(a===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;e=null}else l!==e&&(e=null)}}return Ui=e,null}function ad(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bd()){case ss:return 2;case rs:return 8;case xn:case xd:return 32;case os:return 268435456;default:return 32}default:return 32}}var es=!1,na=null,ia=null,ca=null,on=new Map,fn=new Map,ua=[],Yh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function td(e,l){switch(e){case"focusin":case"focusout":na=null;break;case"dragenter":case"dragleave":ia=null;break;case"mouseover":case"mouseout":ca=null;break;case"pointerover":case"pointerout":on.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(l.pointerId)}}function dn(e,l,a,t,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:l,domEventName:a,eventSystemFlags:t,nativeEvent:i,targetContainers:[n]},l!==null&&(l=_a(l),l!==null&&ed(l)),e):(e.eventSystemFlags|=t,l=e.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),e)}function Hh(e,l,a,t,n){switch(l){case"focusin":return na=dn(na,e,l,a,t,n),!0;case"dragenter":return ia=dn(ia,e,l,a,t,n),!0;case"mouseover":return ca=dn(ca,e,l,a,t,n),!0;case"pointerover":var i=n.pointerId;return on.set(i,dn(on.get(i)||null,e,l,a,t,n)),!0;case"gotpointercapture":return i=n.pointerId,fn.set(i,dn(fn.get(i)||null,e,l,a,t,n)),!0}return!1}function nd(e){var l=Ha(e.target);if(l!==null){var a=z(l);if(a!==null){if(l=a.tag,l===13){if(l=C(a),l!==null){e.blockedOn=l,vs(e.priority,function(){ld(a)});return}}else if(l===31){if(l=H(a),l!==null){e.blockedOn=l,vs(e.priority,function(){ld(a)});return}}else if(l===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qi(e){if(e.blockedOn!==null)return!1;for(var l=e.targetContainers;0<l.length;){var a=Iu(e.nativeEvent);if(a===null){a=e.nativeEvent;var t=new a.constructor(a.type,a);Pi=t,a.target.dispatchEvent(t),Pi=null}else return l=_a(a),l!==null&&ed(l),e.blockedOn=a,!1;l.shift()}return!0}function id(e,l,a){qi(e)&&a.delete(l)}function _h(){es=!1,na!==null&&qi(na)&&(na=null),ia!==null&&qi(ia)&&(ia=null),ca!==null&&qi(ca)&&(ca=null),on.forEach(id),fn.forEach(id)}function Bi(e,l){e.blockedOn===l&&(e.blockedOn=null,es||(es=!0,j.unstable_scheduleCallback(j.unstable_NormalPriority,_h)))}var Yi=null;function cd(e){Yi!==e&&(Yi=e,j.unstable_scheduleCallback(j.unstable_NormalPriority,function(){Yi===e&&(Yi=null);for(var l=0;l<e.length;l+=3){var a=e[l],t=e[l+1],n=e[l+2];if(typeof t!="function"){if(Pu(t||a)===null)continue;break}var i=_a(a);i!==null&&(e.splice(l,3),l-=3,Ic(i,{pending:!0,data:n,method:a.method,action:t},t,n))}}))}function yt(e){function l(r){return Bi(r,e)}na!==null&&Bi(na,e),ia!==null&&Bi(ia,e),ca!==null&&Bi(ca,e),on.forEach(l),fn.forEach(l);for(var a=0;a<ua.length;a++){var t=ua[a];t.blockedOn===e&&(t.blockedOn=null)}for(;0<ua.length&&(a=ua[0],a.blockedOn===null);)nd(a),a.blockedOn===null&&ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(t=0;t<a.length;t+=3){var n=a[t],i=a[t+1],u=n[Ue]||null;if(typeof i=="function")u||cd(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Ue]||null)s=u.formAction;else if(Pu(n)!==null)continue}else s=u.action;typeof s=="function"?a[t+1]=s:(a.splice(t,3),t-=3),cd(a)}}}function ud(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function l(){n!==null&&(n(),n=null),t||setTimeout(a,20)}function a(){if(!t&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(a,100),function(){t=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),n!==null&&(n(),n=null)}}}function ls(e){this._internalRoot=e}Hi.prototype.render=ls.prototype.render=function(e){var l=this._internalRoot;if(l===null)throw Error(d(409));var a=l.current,t=Je();If(a,t,e,l,null,null)},Hi.prototype.unmount=ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var l=e.containerInfo;If(e.current,2,null,e,null,null),gi(),l[Ya]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var l=gs();e={blockedOn:null,target:e,priority:l};for(var a=0;a<ua.length&&l!==0&&l<ua[a].priority;a++);ua.splice(a,0,e),a===0&&nd(e)}};var sd=q.version;if(sd!=="19.2.3")throw Error(d(527,sd,"19.2.3"));N.findDOMNode=function(e){var l=e._reactInternals;if(l===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=F(l),e=e!==null?K(e):null,e=e===null?null:e.stateNode,e};var wh={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{xt=_i.inject(wh),Ge=_i}catch{}}return hn.createRoot=function(e,l){if(!M(e))throw Error(d(299));var a=!1,t="",n=ho,i=go,u=vo;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(t=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(u=l.onRecoverableError)),l=$f(e,1,!1,null,null,a,t,null,n,i,u,ud),e[Ya]=l.current,_u(e),new ls(l)},hn.hydrateRoot=function(e,l,a){if(!M(e))throw Error(d(299));var t=!1,n="",i=ho,u=go,s=vo,r=null;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),l=$f(e,1,!0,l,a??null,t,n,r,i,u,s,ud),l.context=Ff(null),a=l.current,t=Je(),t=Li(t),n=Kl(t),n.callback=null,Jl(a,n,t),a=t,l.current.lanes=a,St(l,a),gl(l),e[Ya]=l.current,_u(e),new Hi(l)},hn.version="19.2.3",hn}var hd;function Lh(){if(hd)return ts.exports;hd=1;function j(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j)}catch(q){console.error(q)}}return j(),ts.exports=Vh(),ts.exports}var Kh=Lh();const Jh=[{id:1,period:"До XX века",years:"~до 1900",icon:"🌿",type:"natural",title:"Естественное кормление",description:"Кормление по требованию было естественной нормой на протяжении всей истории человечества.",keyPoints:["Матери кормили детей по сигналам голода","Отсутствие строгих временных рамок","Кормление как ответ на потребности младенца","Близкий физический контакт мать-дитя"]},{id:2,period:"1920-1970-е",years:"~1920-1970",icon:"⏰",type:"scheduled",title:"Эра режимного кормления",description:"Под влиянием индустриализации и «научного» подхода появились строгие режимы кормления.",keyPoints:["Кормление строго по часам (каждые 3-4 часа)","Игнорирование сигналов голода младенца","Влияние бихевиоризма в психологии","Появление искусственных смесей","Отдаление матери от ребенка"]},{id:3,period:"1970-1990-е",years:"~1970-1990",icon:"🔬",type:"scientific",title:"Научное переосмысление",description:"Начало научных исследований физиологии лактации и потребностей младенцев.",keyPoints:["Исследования состава грудного молока","Изучение гормона пролактина","Работы о привязанности (Боулби)","Первые рекомендации ВОЗ","Движение La Leche League"]},{id:4,period:"1990-е - настоящее",years:"~1990-2025",icon:"✅",type:"natural",title:"Доказательная медицина",description:"Современные научные данные подтверждают преимущества кормления по требованию.",keyPoints:["Многочисленные клинические исследования","Консенсус всех медицинских организаций","Понимание механизмов лактации","Данные о долгосрочном развитии","Рекомендации основаны на доказательствах"]}],kh=[{id:1,name:"Всемирная организация здравоохранения (ВОЗ)",logo:"🏥",country:"Международная",established:"1948",recommendation:"Кормление по требованию",details:"Рекомендует исключительно грудное вскармливание в первые 6 месяцев жизни с кормлением по требованию дня и ночи.",sources:["WHO (2023): Infant and young child feeding","WHO (2021): Breastfeeding recommendations"],credibility:"high",url:"https://www.who.int"},{id:2,name:"American Academy of Pediatrics (AAP)",logo:"🇺🇸",country:"США",established:"1930",recommendation:"Кормление по требованию",details:"Рекомендует кормление по требованию для всех младенцев. Подчеркивает важность ночных кормлений для поддержания лактации.",sources:["AAP (2022): Breastfeeding and the Use of Human Milk","Eidelman A. et al. (2012): Policy Statement on Breastfeeding"],credibility:"high",url:"https://www.aap.org"},{id:3,name:"UNICEF",logo:"🌍",country:"Международная",established:"1946",recommendation:"Кормление по требованию",details:"Продвигает инициативу «Больница доброжелательного отношения к ребенку», где кормление по требованию - один из ключевых принципов.",sources:["UNICEF (2023): Baby-Friendly Hospital Initiative","UNICEF (2020): Breastfeeding: A Mother's Gift"],credibility:"high",url:"https://www.unicef.org"},{id:4,name:"La Leche League International",logo:"🤱",country:"Международная",established:"1956",recommendation:"Кормление по требованию",details:"Крупнейшая организация поддержки грудного вскармливания. Пропагандирует отзывчивое кормление как основу успешной лактации.",sources:["LLLI (2023): The Womanly Art of Breastfeeding","LLLI: Philosophy and guidelines"],credibility:"high",url:"https://www.llli.org"},{id:5,name:"Royal College of Midwives (UK)",logo:"🇬🇧",country:"Великобритания",established:"1881",recommendation:"Кормление по требованию",details:"Поддерживает кормление в ответ на сигналы младенца. Подчеркивает важность поддержки матерей в первые недели.",sources:["RCM (2021): Infant Feeding Position Statement","NHS (2023): Breastfeeding: the first few days"],credibility:"high",url:"https://www.rcm.org.uk"},{id:6,name:"Canadian Paediatric Society",logo:"🇨🇦",country:"Канада",established:"1922",recommendation:"Кормление по требованию",details:"Рекомендует частые кормления по сигналам голода для оптимального роста и развития младенцев.",sources:["CPS (2021): Nutrition for healthy term infants","CPS: Breastfeeding guidelines"],credibility:"high",url:"https://www.cps.ca"}],Wh=[{id:1,objection:"Режим необходим для дисциплины",myth:"«Кормление по требованию избалует ребенка и нарушит режим»",scientificAnswer:{introduction:"Это заблуждение основано на устаревших бихевиористских теориях воспитания, которые были опровергнуты современной психологией развития и нейробиологией.",points:[{title:"Физиологическая незрелость",content:"Желудок новорожденного размером с грецкий орех, он не может вместить количество молока на 3-4 часа."},{title:"Особенности грудного молока",content:"Грудное молоко переваривается за 1.5-2 часа (в отличие от смеси - 3-4 часа), поэтому частые кормления физиологически необходимы."},{title:"Развитие привязанности",content:"Отзывчивость на потребности младенца формирует надежную привязанность, что подтверждено исследованиями Боулби и Эйнсворт."}]},evidence:["AAP (2022): рекомендует кормление по требованию","ВОЗ (2023): частые кормления критичны для лактации","Bowlby J. (1969): теория привязанности"]},{id:2,objection:"Мать должна отдыхать",myth:"«Частые кормления изматывают мать»",scientificAnswer:{introduction:"Хотя усталость матери - реальная проблема, решение не в режимном кормлении, а в системной поддержке.",points:[{title:"Гормональная защита",content:"Во время кормления выделяется окситоцин, который способствует релаксации и снижает стресс."},{title:"Эффективность кормления",content:"При кормлении по требованию общее время у груди меньше, чем при попытках успокоить голодного ребенка."},{title:"Реальное решение",content:"Помощь по дому, поддержка партнера, возможность совместного сна (при соблюдении безопасности)."}]},evidence:["Uvnäs-Moberg K. (2003): окситоцин и стресс","McKenna J. (2007): безопасный совместный сон","Ball H. (2006): сон и грудное вскармливание"]},{id:3,objection:"Ночные кормления не нужны",myth:"«Ребенок должен спать всю ночь без кормлений»",scientificAnswer:{introduction:"Ночные кормления - важная физиологическая норма для младенцев и критичны для лактации.",points:[{title:"Пик пролактина",content:"Уровень пролактина (гормон выработки молока) максимален ночью. Ночные кормления поддерживают лактацию."},{title:"Метаболизм младенца",content:"Интенсивный рост требует питания круглосуточно. Пропуск ночных кормлений может замедлить развитие."},{title:"Циклы сна",content:"Короткие циклы сна у младенцев (50-60 мин) - эволюционная защита от СВДС."}]},evidence:["Kent J. et al. (2006): пролактин и ночные кормления","McKenna J., Gettler L. (2016): СВДС и грудное вскармливание","AAP (2016): рекомендации по сну младенцев"]},{id:4,objection:"Молоко недостаточно питательное",myth:"«При частых кормлениях молоко не успевает стать питательным»",scientificAnswer:{introduction:"Это полное заблуждение о механизме выработки молока. Молоко вырабатывается непрерывно, а его состав меняется динамически.",points:[{title:"Непрерывная выработка",content:"Молоко производится постоянно, а не «накапливается». Частое опорожнение груди стимулирует выработку."},{title:"Переднее и заднее молоко",content:"В начале кормления - более водянистое («переднее»), в конце - жирное («заднее»). Частые кормления обеспечивают баланс."},{title:"Динамический состав",content:"Состав молока меняется в зависимости от потребностей ребенка (возраст, время суток, состояние здоровья)."}]},evidence:["Kent J. et al. (2006): физиология лактации","Daly S. et al. (1993): динамика выработки молока","Andreas N. et al. (2015): иммунные факторы молока"]},{id:5,objection:"Это неудобно для матери",myth:"«Кормление по требованию делает мать заложницей ребенка»",scientificAnswer:{introduction:"Это социальная, а не медицинская проблема. Решение - в изменении отношения общества и поддержке матерей.",points:[{title:"Краткосрочность периода",content:"Интенсивные частые кормления нужны первые 2-3 месяца. Затем режим естественно стабилизируется."},{title:"Гибкость подхода",content:"«По требованию» не значит невозможность планировать день. Это чувствительность к сигналам, а не хаос."},{title:"Долгосрочные выгоды",content:"Дети на кормлении по требованию быстрее успокаиваются, лучше спят в перспективе, имеют более крепкую привязанность."}]},evidence:["Bonyata K. (2018): частота кормлений по возрастам","Li R. et al. (2003): режим кормления и привязанность","Brown A., Harries V. (2015): отзывчивое кормление"]}],$h=[{id:1,category:"Физиология лактации",sources:[{authors:"Kent J.C., Mitoulas L.R., Cregan M.D., et al.",year:"2006",title:"Volume and frequency of breastfeedings and fat content of breast milk throughout the day",journal:"Pediatrics",volume:"117(3)",pages:"e387-e395",doi:"10.1542/peds.2005-1417"},{authors:"Daly S.E., Owens R.A., Hartmann P.E.",year:"1993",title:"The short-term synthesis and infant-regulated removal of milk in lactating women",journal:"Experimental Physiology",volume:"78(2)",pages:"209-220",doi:"10.1113/expphysiol.1993.sp003672"},{authors:"Uvnäs-Moberg K., Prime D.K.",year:"2013",title:"Oxytocin effects in mothers and infants during breastfeeding",journal:"Infant",volume:"9(6)",pages:"201-206"}]},{id:2,category:"Развитие и здоровье младенца",sources:[{authors:"Kramer M.S., Kakuma R.",year:"2012",title:"Optimal duration of exclusive breastfeeding",journal:"Cochrane Database of Systematic Reviews",issue:"8",doi:"10.1002/14651858.CD003517.pub2"},{authors:"Horta B.L., Loret de Mola C., Victora C.G.",year:"2015",title:"Long-term consequences of breastfeeding on cholesterol, obesity, systolic blood pressure and type 2 diabetes",journal:"Acta Paediatrica",volume:"104(S467)",pages:"30-37",doi:"10.1111/apa.13133"}]},{id:3,category:"Когнитивное развитие",sources:[{authors:"Belfort M.B., Rifas-Shiman S.L., Kleinman K.P., et al.",year:"2013",title:"Infant feeding and childhood cognition at ages 3 and 7 years",journal:"JAMA Pediatrics",volume:"167(9)",pages:"836-844",doi:"10.1001/jamapediatrics.2013.455"},{authors:"Deoni S.C., Dean D.C., Piryatinsky I., et al.",year:"2013",title:"Breastfeeding and early white matter development",journal:"NeuroImage",volume:"82",pages:"77-86",doi:"10.1016/j.neuroimage.2013.05.090"}]},{id:4,category:"Привязанность и психология",sources:[{authors:"Bowlby J.",year:"1969",title:"Attachment and Loss: Vol. 1. Attachment",publisher:"Basic Books",location:"New York"},{authors:"Ainsworth M.D., Blehar M.C., Waters E., Wall S.",year:"1978",title:"Patterns of attachment: A psychological study of the strange situation",publisher:"Lawrence Erlbaum",location:"Hillsdale, NJ"},{authors:"Kim P., Feldman R., Mayes L.C., et al.",year:"2011",title:"Breastfeeding, brain activation to own infant cry, and maternal sensitivity",journal:"Journal of Child Psychology and Psychiatry",volume:"52(8)",pages:"907-915",doi:"10.1111/j.1469-7610.2011.02406.x"}]},{id:5,category:"Сон младенца",sources:[{authors:"McKenna J.J., Gettler L.T.",year:"2016",title:"There is no such thing as infant sleep, there is no such thing as breastfeeding, there is only breastsleeping",journal:"Acta Paediatrica",volume:"105(1)",pages:"17-21",doi:"10.1111/apa.13161"},{authors:"Ball H.L.",year:"2006",title:"Parent-infant bed-sharing behavior",journal:"Human Nature",volume:"17(3)",pages:"301-318",doi:"10.1007/s12110-006-1011-1"}]},{id:6,category:"Рекомендации организаций",sources:[{authors:"World Health Organization",year:"2023",title:"Infant and young child feeding",type:"Fact sheet",url:"https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding"},{authors:"American Academy of Pediatrics",year:"2022",title:"Breastfeeding and the Use of Human Milk",journal:"Pediatrics",volume:"150(1)",doi:"10.1542/peds.2022-057988"},{authors:"UNICEF",year:"2023",title:"Baby-Friendly Hospital Initiative",url:"https://www.unicef.org/nutrition/baby-friendly-hospital-initiative"}]}],Fh={physiology:{title:"Физиология лактации",description:"Влияние режима кормления на выработку молока",hormones:[{name:"Пролактин",function:"Производство молока",demandFeeding:100,scheduledFeeding:70,note:"Уровень пролактина при кормлении по требованию на 30% выше"},{name:"Окситоцин",function:"Выброс молока",demandFeeding:100,scheduledFeeding:75,note:"Стресс от голодного плача снижает выработку окситоцина"}],facts:["Молоко вырабатывается непрерывно, скорость зависит от частоты опорожнения груди","Частые кормления (10-12 раз в сутки) поддерживают оптимальный уровень пролактина","Ночные кормления критичны: пик пролактина приходится на 2-6 часов утра"]},composition:{title:"Состав грудного молока",description:"Динамические изменения в течение кормления и времени",foreMilk:{name:"Переднее молоко",calories:65,water:87.5,lactose:7.5,protein:1,fat:4,characteristics:"Утоляет жажду, богато лактозой"},hindMilk:{name:"Заднее молоко",calories:95,water:82,lactose:6.5,protein:1.5,fat:10,characteristics:"Насыщает, богато жирами и калориями"},facts:["Состав молока меняется от начала к концу кормления","Состав адаптируется к возрасту ребенка и времени суток","В молоке содержится более 200 компонентов, включая антитела, гормоны, факторы роста"]},cognitive:{title:"Когнитивное развитие",description:"Влияние грудного вскармливания на развитие мозга",iqDifference:{breastfed:{averageIQ:105,range:[100,110],note:"Дети на ГВ более 6 месяцев"},formulaFed:{averageIQ:100,range:[95,105],note:"Дети на искусственном вскармливании"},difference:5,significance:"p < 0.001"},brainDevelopment:[{area:"Белое вещество мозга",increase:"20-30%",age:"2 года",study:"Deoni et al., 2013"},{area:"Языковое развитие",advantage:"3-6 месяцев",age:"3 года",study:"Belfort et al., 2013"}],facts:["Грудное молоко содержит ДГК и арахидоновую кислоту - критичны для развития мозга","Дети на ГВ показывают лучшие результаты в тестах на IQ в возрасте 7-8 лет","Преимущество сохраняется даже после учета социоэкономических факторов"]},comparison:{title:"Сравнительный анализ",description:"Кормление по требованию vs по расписанию",metrics:[{parameter:"Частота кормлений (первый месяц)",demandFeeding:"8-12 раз/сутки",scheduledFeeding:"6-7 раз/сутки",advantage:"demand"},{parameter:"Длительность успешного ГВ",demandFeeding:"13.2 месяца",scheduledFeeding:"8.7 месяца",advantage:"demand"},{parameter:"Набор веса (первые 3 месяца)",demandFeeding:"200г/неделя",scheduledFeeding:"150г/неделя",advantage:"demand"},{parameter:"Риск обезвоживания",demandFeeding:"2%",scheduledFeeding:"8%",advantage:"demand"},{parameter:"Мастит у матери",demandFeeding:"5%",scheduledFeeding:"15%",advantage:"demand"},{parameter:"Надежная привязанность (12 мес)",demandFeeding:"75%",scheduledFeeding:"58%",advantage:"demand"}],longTermOutcomes:[{outcome:"Ожирение в подростковом возрасте",demandFed:"12%",scheduledFed:"18%",reduction:"33%"},{outcome:"Диабет 2 типа",demandFed:"15%",scheduledFed:"23%",reduction:"35%"},{outcome:"Сердечно-сосудистые заболевания",demandFed:"22%",scheduledFed:"28%",reduction:"21%"}]},globalRecommendations:{title:"Глобальные рекомендации",organizations:[{name:"ВОЗ",recommendation:"По требованию",year:2023},{name:"AAP",recommendation:"По требованию",year:2022},{name:"UNICEF",recommendation:"По требованию",year:2023},{name:"NHS",recommendation:"По требованию",year:2023},{name:"La Leche League",recommendation:"По требованию",year:2023}],consensus:"100% медицинских организаций рекомендуют кормление по требованию"}},Ih=({activeSection:j,scrollToSection:q})=>{const[Y,d]=ce.useState(!1),M=[{id:"home",label:"Главная"},{id:"timeline",label:"История"},{id:"organizations",label:"Рекомендации"},{id:"science",label:"Наука"},{id:"faq",label:"Вопросы"},{id:"sources",label:"Источники"},{id:"conclusion",label:"Заключение"}],z=C=>{q(C),d(!1)};return c.jsx("nav",{className:"navbar",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"navbar-content",children:[c.jsxs("div",{className:"navbar-logo",onClick:()=>z("home"),children:[c.jsx("span",{className:"logo-icon",children:"🤱"}),c.jsxs("div",{className:"logo-text",children:[c.jsx("span",{className:"logo-title",children:"Грудное вскармливание"}),c.jsx("span",{className:"logo-subtitle",children:"По требованию или по расписанию?"})]})]}),c.jsx("div",{className:"navbar-nav desktop",children:M.map(C=>c.jsx("button",{className:`nav-link ${j===C.id?"active":""}`,onClick:()=>z(C.id),children:C.label},C.id))}),c.jsx("button",{className:"mobile-menu-toggle",onClick:()=>d(!Y),"aria-label":"Toggle menu",children:c.jsxs("span",{className:`hamburger ${Y?"open":""}`,children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})})]}),Y&&c.jsx("div",{className:"navbar-nav mobile",children:M.map(C=>c.jsx("button",{className:`nav-link ${j===C.id?"active":""}`,onClick:()=>z(C.id),children:C.label},C.id))})]})})},Ph=()=>c.jsx("style",{jsx:!0,children:`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border);
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .navbar-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
    }

    .navbar-logo {
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: opacity 0.3s ease;
    }

    .navbar-logo:hover {
      opacity: 0.8;
    }

    .logo-icon {
      font-size: 2rem;
      margin-right: 0.75rem;
    }

    .logo-text {
      display: flex;
      flex-direction: column;
    }

    .logo-title {
      font-weight: 700;
      font-size: 1.125rem;
      color: var(--text-primary);
      line-height: 1.2;
    }

    .logo-subtitle {
      font-size: 0.75rem;
      color: var(--text-secondary);
      line-height: 1.2;
    }

    .navbar-nav.desktop {
      display: flex;
      gap: 0.5rem;
    }

    .nav-link {
      padding: 0.5rem 1rem;
      border: none;
      background: none;
      color: var(--text-secondary);
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      border-radius: 0.5rem;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-link:hover {
      color: var(--primary);
      background: rgba(59, 130, 246, 0.1);
    }

    .nav-link.active {
      color: var(--primary);
      background: rgba(59, 130, 246, 0.1);
    }

    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      background: var(--primary);
      border-radius: 50%;
    }

    .mobile-menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.5rem;
      transition: background 0.3s ease;
    }

    .mobile-menu-toggle:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    .hamburger {
      display: flex;
      flex-direction: column;
      width: 20px;
      height: 16px;
      justify-content: space-between;
    }

    .hamburger span {
      width: 100%;
      height: 2px;
      background: var(--text-primary);
      transition: all 0.3s ease;
      transform-origin: center;
    }

    .hamburger.open span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    .hamburger.open span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.open span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }

    .navbar-nav.mobile {
      display: none;
      flex-direction: column;
      gap: 0.25rem;
      padding: 1rem 0;
      border-top: 1px solid var(--border);
      margin-top: 1rem;
    }

    @media (max-width: 768px) {
      .navbar-nav.desktop {
        display: none;
      }

      .mobile-menu-toggle {
        display: block;
      }

      .navbar-nav.mobile {
        display: flex;
      }

      .nav-link {
        padding: 0.75rem 1rem;
        text-align: left;
        width: 100%;
      }

      .nav-link.active::after {
        display: none;
      }

      .logo-subtitle {
        display: none;
      }
    }
  `}),e0=j=>c.jsxs(c.Fragment,{children:[c.jsx(Ih,{...j}),c.jsx(Ph,{})]}),l0=()=>c.jsxs("footer",{className:"footer",children:[c.jsx("div",{className:"container",children:c.jsxs("div",{className:"footer-content",children:[c.jsxs("div",{className:"footer-main",children:[c.jsxs("div",{className:"footer-brand",children:[c.jsx("span",{className:"brand-icon",children:"🤱"}),c.jsxs("div",{className:"brand-text",children:[c.jsx("h3",{children:"Исследование грудного вскармливания"}),c.jsx("p",{children:"Научный анализ подходов к кормлению младенцев"})]})]}),c.jsxs("div",{className:"footer-links",children:[c.jsxs("div",{className:"link-group",children:[c.jsx("h4",{children:"Разделы"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"#timeline",children:"История"})}),c.jsx("li",{children:c.jsx("a",{href:"#organizations",children:"Рекомендации"})}),c.jsx("li",{children:c.jsx("a",{href:"#science",children:"Научное обоснование"})}),c.jsx("li",{children:c.jsx("a",{href:"#faq",children:"Вопросы и ответы"})}),c.jsx("li",{children:c.jsx("a",{href:"#sources",children:"Источники"})})]})]}),c.jsxs("div",{className:"link-group",children:[c.jsx("h4",{children:"Ключевые организации"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"https://www.who.int",target:"_blank",rel:"noopener noreferrer",children:"Всемирная организация здравоохранения"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.aap.org",target:"_blank",rel:"noopener noreferrer",children:"Американская академия педиатрии"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.unicef.org",target:"_blank",rel:"noopener noreferrer",children:"Детский фонд ООН"})})]})]}),c.jsxs("div",{className:"link-group",children:[c.jsx("h4",{children:"Научные источники"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"https://pmc.ncbi.nlm.nih.gov/articles/PMC3553587/",target:"_blank",rel:"noopener noreferrer",children:"Iacovou & Sevilla (2012)"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.thelancet.com",target:"_blank",rel:"noopener noreferrer",children:"The Lancet Breastfeeding Series"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.cochranelibrary.com",target:"_blank",rel:"noopener noreferrer",children:"Cochrane Reviews"})})]})]})]})]}),c.jsxs("div",{className:"footer-bottom",children:[c.jsxs("div",{className:"footer-info",children:[c.jsx("p",{children:"© 2023 Исследование грудного вскармливания. На основе научных данных."}),c.jsx("p",{className:"footer-disclaimer",children:"Информация представлена для образовательных целей. Консультируйтесь с квалифицированными специалистами."})]}),c.jsxs("div",{className:"footer-stats",children:[c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"stat-value",children:"75+"}),c.jsx("span",{className:"stat-label",children:"Источников"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"stat-value",children:"10,419"}),c.jsx("span",{className:"stat-label",children:"Детей в исследовании"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"stat-value",children:"4.5"}),c.jsx("span",{className:"stat-label",children:"Пунктов IQ разницы"})]})]})]})]})}),c.jsx("style",{jsx:!0,children:`
        .footer {
          background: var(--surface);
          border-top: 1px solid var(--border);
          padding: 3rem 0 2rem;
          margin-top: 4rem;
        }
        
        .footer-main {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-brand {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        
        .brand-icon {
          font-size: 3rem;
          flex-shrink: 0;
        }
        
        .brand-text h3 {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }
        
        .brand-text p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 0;
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        .link-group h4 {
          color: var(--text-primary);
          font-size: 1rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .link-group ul {
          list-style: none;
        }
        
        .link-group li {
          margin-bottom: 0.5rem;
        }
        
        .link-group a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }
        
        .link-group a:hover {
          color: var(--primary);
        }
        
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding-top: 2rem;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 2rem;
          align-items: center;
        }
        
        .footer-info p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }
        
        .footer-disclaimer {
          font-style: italic;
          opacity: 0.8;
        }
        
        .footer-stats {
          display: flex;
          gap: 2rem;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-value {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          font-family: var(--font-mono);
        }
        
        .stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .footer-links {
            grid-template-columns: 1fr;
          }
          
          .footer-bottom {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .footer-stats {
            justify-content: center;
            gap: 1rem;
          }
          
          .stat {
            padding: 0 0.5rem;
          }
        }
      `})]}),a0=({scrollToSection:j})=>{const[q,Y]=ce.useState(!1);return ce.useEffect(()=>{Y(!0)},[]),c.jsxs("div",{className:"hero",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:`hero-content ${q?"visible":""}`,children:[c.jsx("div",{className:"hero-visual",children:c.jsxs("div",{className:"hero-icon-wrapper",children:[c.jsx("span",{className:"hero-icon",children:"🤱"}),c.jsx("div",{className:"hero-icon-bg"})]})}),c.jsxs("div",{className:"hero-text",children:[c.jsxs("h1",{className:"hero-title",children:["Кормление грудью младенца:",c.jsx("br",{}),c.jsx("span",{className:"hero-subtitle-highlight",children:"По требованию или по расписанию?"})]}),c.jsx("p",{className:"hero-description",children:"Глубокое исследование научных данных о влиянии режима кормления на здоровье младенцев, развитие лактации и когнитивные способности. Анализ 75+ авторитетных источников, включая рекомендации ВОЗ, AAP и крупномасштабные исследования."}),c.jsxs("div",{className:"hero-stats",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"10,419"}),c.jsx("span",{className:"stat-label",children:"детей в исследовании"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"+4.5"}),c.jsx("span",{className:"stat-label",children:"пунктов IQ разницы"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"75+"}),c.jsx("span",{className:"stat-label",children:"научных источников"})]})]}),c.jsxs("div",{className:"hero-actions",children:[c.jsxs("button",{className:"btn btn-primary hero-cta-primary",onClick:()=>j("timeline"),children:["Исследовать данные",c.jsx("span",{className:"cta-arrow",children:"→"})]}),c.jsx("button",{className:"btn btn-outline hero-cta-secondary",onClick:()=>j("science"),children:"Научное обоснование"})]})]})]}),c.jsxs("div",{className:"scroll-indicator",children:[c.jsx("div",{className:"scroll-mouse",children:c.jsx("div",{className:"scroll-wheel"})}),c.jsx("span",{className:"scroll-text",children:"Прокрутите вниз"})]})]}),c.jsxs("div",{className:"hero-bg",children:[c.jsx("div",{className:"bg-circle circle-1"}),c.jsx("div",{className:"bg-circle circle-2"}),c.jsx("div",{className:"bg-circle circle-3"})]}),c.jsx("style",{jsx:!0,children:`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 5rem;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .hero-icon-wrapper {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-icon {
          font-size: 8rem;
          z-index: 2;
          position: relative;
          animation: float 3s ease-in-out infinite;
        }

        .hero-icon-bg {
          position: absolute;
          width: 250px;
          height: 250px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          opacity: 0.1;
          animation: pulse 4s ease-in-out infinite;
        }

        .hero-text {
          z-index: 2;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .hero-subtitle-highlight {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          font-family: var(--font-mono);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0.25rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-cta-primary {
          padding: 1rem 2rem;
          font-size: 1rem;
          position: relative;
          overflow: hidden;
        }

        .cta-arrow {
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }

        .hero-cta-primary:hover .cta-arrow {
          transform: translateX(4px);
        }

        .hero-cta-secondary {
          padding: 1rem 2rem;
          font-size: 1rem;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          animation: bounce 2s infinite;
        }

        .scroll-mouse {
          width: 24px;
          height: 40px;
          border: 2px solid var(--text-secondary);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }

        .scroll-wheel {
          width: 4px;
          height: 8px;
          background: var(--primary);
          border-radius: 2px;
          animation: scroll 1.5s ease-in-out infinite;
        }

        .scroll-text {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          opacity: 0.05;
        }

        .circle-1 {
          width: 400px;
          height: 400px;
          top: -100px;
          right: -100px;
        }

        .circle-2 {
          width: 300px;
          height: 300px;
          bottom: 100px;
          left: -50px;
        }

        .circle-3 {
          width: 200px;
          height: 200px;
          top: 50%;
          right: 10%;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.15; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .hero-icon-wrapper {
            width: 200px;
            height: 200px;
          }
          
          .hero-icon {
            font-size: 5rem;
          }
          
          .hero-icon-bg {
            width: 180px;
            height: 180px;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-stats {
            justify-content: center;
          }
          
          .hero-actions {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 1rem;
          }
          
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-cta-primary,
          .hero-cta-secondary {
            width: 100%;
            max-width: 300px;
          }
          
          .scroll-indicator {
            display: none;
          }
        }
      `})]})},t0=({data:j})=>{const[q,Y]=ce.useState(null),[d,M]=ce.useState(!1);ce.useEffect(()=>{const H=()=>{const D=document.getElementById("timeline");if(D){const F=D.getBoundingClientRect(),K=F.top<window.innerHeight&&F.bottom>0;M(K)}};return H(),window.addEventListener("scroll",H),()=>window.removeEventListener("scroll",H)},[]);const z=H=>{switch(H){case"natural":return"#10B981";case"scheduled":return"#EF4444";case"scientific":return"#3B82F6";default:return"#6B7280"}},C=H=>{switch(H){case"natural":return"Естественный";case"scheduled":return"Режимный";case"scientific":return"Научный";default:return"Неизвестно"}};return c.jsxs("div",{className:"timeline-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:`section-header ${d?"visible":""}`,children:[c.jsx("h2",{className:"section-title",children:"История развития подходов к кормлению"}),c.jsx("p",{className:"section-subtitle",children:"От естественного подхода к режимному кормлению и обратно к научной основе"})]}),c.jsxs("div",{className:"timeline-wrapper",children:[c.jsx("div",{className:"timeline-line",children:c.jsx("div",{className:"timeline-progress"})}),j.map((H,D)=>{const F=q===D,K=D/(j.length-1)*100;return c.jsxs("div",{className:`timeline-item ${F?"active":""} ${d?"visible":""}`,style:{"--position":`${K}%`,"--type-color":z(H.type),animationDelay:`${D*.2}s`},onMouseEnter:()=>Y(D),onMouseLeave:()=>Y(null),children:[c.jsxs("div",{className:"timeline-dot",children:[c.jsx("div",{className:"dot-outer",children:c.jsx("div",{className:"dot-inner",children:c.jsx("span",{className:"dot-icon",children:H.icon})})}),c.jsxs("div",{className:"dot-label",children:[c.jsx("span",{className:"period",children:H.period}),c.jsx("span",{className:"years",children:H.years})]})]}),c.jsx("div",{className:"timeline-content",children:c.jsxs("div",{className:"content-card",children:[c.jsxs("div",{className:"card-header",children:[c.jsx("h3",{className:"card-title",children:H.title}),c.jsx("span",{className:"type-badge",style:{backgroundColor:`${z(H.type)}20`,color:z(H.type)},children:C(H.type)})]}),c.jsx("p",{className:"card-description",children:H.description}),c.jsxs("div",{className:"card-points",children:[c.jsx("h4",{children:"Ключевые моменты:"}),c.jsx("ul",{children:H.keyPoints.map((O,S)=>c.jsxs("li",{children:[c.jsx("span",{className:"point-icon",children:"•"}),O]},S))})]})]})})]},H.id)})]}),c.jsx("div",{className:`timeline-summary ${d?"visible":""}`,children:c.jsxs("div",{className:"summary-card",children:[c.jsx("h3",{children:"Эволюция взглядов: полный круг"}),c.jsx("p",{children:"История кормления грудью демонстрирует полный круг эволюции: от естественного подхода к искусственному режиму и возврат к научно обоснованному естественному кормлению. Современные рекомендации основаны на убедительных доказательствах пользы кормления по требованию для физиологии лактации, здоровья младенца и их когнитивного развития."})]})})]}),c.jsx("style",{jsx:!0,children:`
        .timeline-section {
          padding: 4rem 0;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .timeline-wrapper {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: var(--border);
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .timeline-progress {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, var(--primary), var(--secondary));
          border-radius: 2px;
          transform: scaleY(0);
          transform-origin: top;
          animation: progressFill 2s ease-out forwards;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: auto;
          text-align: right;
        }

        .timeline-item:nth-child(even) .timeline-dot {
          left: auto;
          right: 50%;
          transform: translateX(50%);
        }

        .timeline-item:nth-child(even) .card-header {
          flex-direction: row-reverse;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 2rem;
          transform: translateX(-50%);
          z-index: 2;
        }

        .dot-outer {
          width: 60px;
          height: 60px;
          background: white;
          border: 4px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .timeline-item:hover .dot-outer,
        .timeline-item.active .dot-outer {
          border-color: var(--type-color);
          box-shadow: 0 0 0 4px rgba(var(--type-color-rgb), 0.2);
        }

        .dot-inner {
          width: 40px;
          height: 40px;
          background: var(--type-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .dot-icon {
          font-size: 1.5rem;
        }

        .dot-label {
          position: absolute;
          top: 70px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          min-width: 200px;
        }

        .period {
          display: block;
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }

        .years {
          display: block;
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-family: var(--font-mono);
        }

        .timeline-content {
          width: 45%;
          padding-top: 1rem;
        }

        .content-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .timeline-item:hover .content-card,
        .timeline-item.active .content-card {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .type-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .card-points h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-points ul {
          list-style: none;
          padding: 0;
        }

        .card-points li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .point-icon {
          color: var(--type-color);
          font-weight: bold;
          margin-top: 0.125rem;
        }

        .timeline-summary {
          margin-top: 4rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 1s;
        }

        .timeline-summary.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .summary-card {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .summary-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .summary-card p {
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.95;
          margin: 0;
        }

        @keyframes progressFill {
          to {
            transform: scaleY(1);
          }
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 2rem;
          }

          .timeline-dot {
            left: 2rem !important;
            transform: translateX(-50%) !important;
          }

          .timeline-content {
            width: calc(100% - 5rem);
            margin-left: 5rem !important;
            margin-right: 0 !important;
            text-align: left !important;
          }

          .card-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .timeline-item {
            margin-bottom: 3rem;
          }

          .dot-label {
            position: static;
            transform: none !important;
            margin-top: 1rem;
            text-align: left;
          }

          .years {
            font-size: 0.875rem;
          }
        }
      `})]})},n0=({data:j})=>{const[q,Y]=ce.useState(!1),[d,M]=ce.useState(null);return ce.useEffect(()=>{const z=()=>{const C=document.getElementById("organizations");if(C){const H=C.getBoundingClientRect(),D=H.top<window.innerHeight&&H.bottom>0;Y(D)}};return z(),window.addEventListener("scroll",z),()=>window.removeEventListener("scroll",z)},[]),c.jsxs("div",{className:"organizations-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:`section-header ${q?"visible":""}`,children:[c.jsx("h2",{className:"section-title",children:"Рекомендации международных организаций"}),c.jsx("p",{className:"section-subtitle",children:"Современный консенсус медицинского сообщества: кормление по требованию как золотой стандарт"})]}),c.jsx("div",{className:"organizations-grid",children:j.map((z,C)=>c.jsxs("div",{className:`org-card ${d===z.id?"selected":""} ${q?"visible":""}`,style:{animationDelay:`${C*.1}s`},onClick:()=>M(d===z.id?null:z.id),children:[c.jsxs("div",{className:"org-header",children:[c.jsxs("div",{className:"org-logo",children:[c.jsx("span",{className:"logo-icon",children:z.logo}),c.jsx("div",{className:"logo-badge",children:c.jsxs("span",{className:`badge badge-${z.grade.toLowerCase()}`,children:["Grade ",z.grade]})})]}),c.jsxs("div",{className:"org-info",children:[c.jsx("h3",{className:"org-name",children:z.name}),c.jsxs("p",{className:"org-year",children:["Обновлено: ",z.year]}),c.jsx("p",{className:"org-description",children:z.description})]})]}),c.jsxs("div",{className:"org-recommendations",children:[c.jsx("h4",{children:"Ключевые рекомендации:"}),c.jsx("ul",{children:z.recommendations.map((H,D)=>c.jsxs("li",{children:[c.jsx("span",{className:"rec-icon",children:"✓"}),H]},D))})]}),z.initiatives&&z.initiatives.length>0&&c.jsxs("div",{className:"org-initiatives",children:[c.jsx("h4",{children:"Программы и инициативы:"}),c.jsx("div",{className:"initiatives-list",children:z.initiatives.map((H,D)=>c.jsx("span",{className:"initiative-tag",children:H},D))})]}),c.jsxs("button",{className:"expand-btn",children:[d===z.id?"Свернуть":"Подробнее",c.jsx("span",{className:`expand-arrow ${d===z.id?"open":""}`,children:"↓"})]})]},z.id))}),c.jsx("div",{className:`consensus-panel ${q?"visible":""}`,children:c.jsxs("div",{className:"consensus-card",children:[c.jsxs("div",{className:"consensus-header",children:[c.jsx("span",{className:"consensus-icon",children:"🌍"}),c.jsx("h3",{children:"Общий консенсус мирового медицинского сообщества"})]}),c.jsxs("div",{className:"consensus-content",children:[c.jsx("blockquote",{className:"consensus-quote",children:'"Не существует авторитетной международной организации, которая рекомендовала бы режимное кормление. Напротив, его классифицируют как опасный пережиток прошлого века."'}),c.jsxs("div",{className:"consensus-stats",children:[c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"stat-number",children:"150+"}),c.jsx("span",{className:"stat-label",children:"Стран используют рекомендации ВОЗ"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"stat-number",children:"60,000+"}),c.jsx("span",{className:"stat-label",children:"Педиатров в AAP"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"stat-number",children:"190"}),c.jsx("span",{className:"stat-label",children:"Стран с программами ЮНИСЕФ"})]})]})]})]})})]}),c.jsx("style",{jsx:!0,children:`
        .organizations-section {
          padding: 4rem 0;
          background: var(--background);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        .organizations-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .org-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          cursor: pointer;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .org-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }

        .org-card.selected {
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }

        .org-header {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .org-logo {
          position: relative;
          flex-shrink: 0;
        }

        .logo-icon {
          font-size: 3rem;
          display: block;
        }

        .logo-badge {
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
        }

        .org-info {
          flex: 1;
        }

        .org-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .org-year {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .org-description {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .org-recommendations {
          margin-bottom: 1.5rem;
        }

        .org-recommendations h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .org-recommendations ul {
          list-style: none;
          padding: 0;
        }

        .org-recommendations li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .rec-icon {
          color: var(--secondary);
          font-weight: bold;
          margin-top: 0.125rem;
          flex-shrink: 0;
        }

        .org-initiatives {
          margin-bottom: 1.5rem;
        }

        .org-initiatives h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .initiatives-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .initiative-tag {
          padding: 0.25rem 0.75rem;
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .expand-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.75rem;
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 0.5rem;
          color: var(--primary);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .expand-btn:hover {
          background: rgba(59, 130, 246, 0.1);
        }

        .expand-arrow {
          transition: transform 0.3s ease;
        }

        .expand-arrow.open {
          transform: rotate(180deg);
        }

        .consensus-panel {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.4s;
        }

        .consensus-panel.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .consensus-card {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border-radius: 1rem;
          padding: 2.5rem;
          text-align: center;
        }

        .consensus-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .consensus-icon {
          font-size: 2.5rem;
        }

        .consensus-header h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
        }

        .consensus-quote {
          font-size: 1.125rem;
          font-style: italic;
          margin-bottom: 2rem;
          padding: 0 2rem;
          line-height: 1.6;
          position: relative;
        }

        .consensus-quote::before,
        .consensus-quote::after {
          content: '"';
          font-size: 3rem;
          opacity: 0.3;
          position: absolute;
        }

        .consensus-quote::before {
          top: -1rem;
          left: 0;
        }

        .consensus-quote::after {
          bottom: -2rem;
          right: 0;
        }

        .consensus-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
        }

        .consensus-stats .stat {
          text-align: center;
        }

        .consensus-stats .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          font-family: var(--font-mono);
          line-height: 1;
        }

        .consensus-stats .stat-label {
          font-size: 0.875rem;
          opacity: 0.9;
          margin-top: 0.5rem;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .organizations-grid {
            grid-template-columns: 1fr;
          }

          .consensus-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .consensus-quote {
            padding: 0;
          }

          .consensus-quote::before,
          .consensus-quote::after {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .org-header {
            flex-direction: column;
            text-align: center;
          }

          .logo-badge {
            position: static;
            margin-top: 0.5rem;
          }

          .expand-btn {
            padding: 1rem;
          }

          .consensus-card {
            padding: 2rem;
          }

          .consensus-header {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})},i0=({data:j})=>{const[q,Y]=ce.useState(!1),[d,M]=ce.useState("physiology");ce.useEffect(()=>{const K=()=>{const O=document.getElementById("science");if(O){const S=O.getBoundingClientRect(),Se=S.top<window.innerHeight&&S.bottom>0;Y(Se)}};return K(),window.addEventListener("scroll",K),()=>window.removeEventListener("scroll",K)},[]);const z=[{id:"physiology",label:"Физиология лактации",icon:"🧬"},{id:"composition",label:"Состав молока",icon:"🥛"},{id:"cognitive",label:"Когнитивное развитие",icon:"🧠"},{id:"comparison",label:"Сравнительный анализ",icon:"⚖️"}],C=()=>c.jsxs("div",{className:"hormone-chart",children:[c.jsx("h4",{children:"Гормональная регуляция лактации"}),c.jsxs("div",{className:"hormone-bars",children:[c.jsxs("div",{className:"hormone-item",children:[c.jsxs("div",{className:"hormone-info",children:[c.jsx("span",{className:"hormone-name",children:"Пролактин"}),c.jsx("span",{className:"hormone-function",children:"Производство молока"})]}),c.jsx("div",{className:"hormone-bar",children:c.jsx("div",{className:"bar-fill demand",style:{width:"100%"},children:c.jsx("span",{className:"bar-label",children:"По требованию"})})}),c.jsx("div",{className:"hormone-bar",children:c.jsx("div",{className:"bar-fill scheduled",style:{width:"70%"},children:c.jsx("span",{className:"bar-label",children:"По расписанию"})})})]}),c.jsxs("div",{className:"hormone-item",children:[c.jsxs("div",{className:"hormone-info",children:[c.jsx("span",{className:"hormone-name",children:"Окситоцин"}),c.jsx("span",{className:"hormone-function",children:"Выброс молока"})]}),c.jsx("div",{className:"hormone-bar",children:c.jsx("div",{className:"bar-fill demand",style:{width:"100%"},children:c.jsx("span",{className:"bar-label",children:"По требованию"})})}),c.jsx("div",{className:"hormone-bar",children:c.jsx("div",{className:"bar-fill scheduled",style:{width:"75%"},children:c.jsx("span",{className:"bar-label",children:"По расписанию"})})})]})]}),c.jsxs("p",{className:"chart-note",children:[c.jsx("strong",{children:"Ключевой вывод:"})," Чем чаще сосёт младенец, тем больше вырабатывается пролактина, гормона производства молока. При кормлении по графику (7 раз в сутки) лактация снижается на 20-30%."]})]}),H=()=>c.jsxs("div",{className:"composition-chart",children:[c.jsx("h4",{children:"Изменение состава молока во время кормления"}),c.jsxs("div",{className:"milk-types",children:[c.jsxs("div",{className:"milk-type fore",children:[c.jsxs("div",{className:"type-header",children:[c.jsx("h5",{children:"Переднее молоко"}),c.jsx("span",{className:"calories",children:"65 ккал/100мл"})]}),c.jsxs("div",{className:"composition-bars",children:[c.jsxs("div",{className:"comp-bar",children:[c.jsx("span",{className:"comp-label",children:"Вода"}),c.jsx("div",{className:"comp-fill",style:{width:"87.5%",backgroundColor:"#3B82F6"},children:"87.5%"})]}),c.jsxs("div",{className:"comp-bar",children:[c.jsx("span",{className:"comp-label",children:"Лактоза"}),c.jsx("div",{className:"comp-fill",style:{width:"7.5%",backgroundColor:"#F59E0B"},children:"7.5%"})]}),c.jsxs("div",{className:"comp-bar",children:[c.jsx("span",{className:"comp-label",children:"Белки"}),c.jsx("div",{className:"comp-fill",style:{width:"1%",backgroundColor:"#10B981"},children:"1%"})]}),c.jsxs("div",{className:"comp-bar",children:[c.jsx("span",{className:"comp-label",children:"Жиры"}),c.jsx("div",{class:"comp-fill",style:{width:"4%",backgroundColor:"#EF4444"},children:"4%"})]})]}),c.jsx("p",{className:"type-description",children:"Водянистое, утоляет жажду, содержит лактозу и белки"})]}),c.jsxs("div",{className:"milk-type hind",children:[c.jsxs("div",{className:"type-header",children:[c.jsx("h5",{children:"Заднее молоко"}),c.jsx("span",{className:"calories",children:"110 ккал/100мл"})]}),c.jsxs("div",{className:"composition-bars",children:[c.jsxs("div",{className:"comp-bar",children:[c.jsx("span",{className:"comp-label",children:"Вода"}),c.jsx("div",{className:"comp-fill",style:{width:"82.5%",backgroundColor:"#3B82F6"},children:"82.5%"})]}),c.jsxs("div",{className:"comp-bar",children:[c.jsx("span",{className:"comp-label",children:"Лактоза"}),c.jsx("div",{className:"comp-fill",style:{width:"7%",backgroundColor:"#F59E0B"},children:"7%"})]}),c.jsxs("div",{className:"comp-bar",children:[c.jsx("span",{className:"comp-label",children:"Белки"}),c.jsx("div",{className:"comp-fill",style:{width:"1.2%",backgroundColor:"#10B981"},children:"1.2%"})]}),c.jsxs("div",{className:"comp-bar",children:[c.jsx("span",{className:"comp-label",children:"Жиры"}),c.jsx("div",{className:"comp-fill",style:{width:"9.3%",backgroundColor:"#EF4444"},children:"9.3%"})]})]}),c.jsx("p",{className:"type-description",children:"Жирное, калорийное, обеспечивает насыщение и рост"})]})]}),c.jsxs("div",{className:"composition-note",children:[c.jsx("span",{className:"highlight",children:"Жирность увеличивается в 2.3 раза!"}),c.jsx("p",{children:"Проблема режимного кормления: младенец может получить только переднее молоко и остаться голодным. При кормлении по требованию до насыщения младенец получает оба типа молока."})]})]}),D=()=>c.jsxs("div",{className:"cognitive-chart",children:[c.jsx("h4",{children:"Влияние на когнитивное развитие (исследование 10,419 детей)"}),c.jsxs("div",{className:"iq-comparison",children:[c.jsxs("div",{className:"iq-group",children:[c.jsx("div",{className:"iq-label",children:"Кормление по требованию"}),c.jsx("div",{className:"iq-bar-container",children:c.jsx("div",{className:"iq-bar demand",style:{width:"100%"},children:c.jsx("span",{className:"iq-value",children:"100%"})})}),c.jsx("div",{className:"iq-note",children:"Базовый уровень"})]}),c.jsxs("div",{className:"iq-group",children:[c.jsx("div",{className:"iq-label",children:"Кормление по графику"}),c.jsx("div",{className:"iq-bar-container",children:c.jsx("div",{className:"iq-bar scheduled",style:{width:"95.5%"},children:c.jsx("span",{className:"iq-value",children:"95.5%"})})}),c.jsx("div",{className:"iq-note",children:"-4.5 пунктов IQ"})]})]}),c.jsxs("div",{className:"academic-results",children:[c.jsx("h5",{children:"Академические тесты (разница в % стандартного отклонения)"}),c.jsxs("div",{className:"age-groups",children:[c.jsxs("div",{className:"age-group",children:[c.jsx("span",{className:"age",children:"5 лет"}),c.jsx("div",{className:"age-bar",children:c.jsx("div",{className:"difference",style:{width:"17%"},children:"17%"})})]}),c.jsxs("div",{className:"age-group",children:[c.jsx("span",{className:"age",children:"7 лет"}),c.jsx("div",{className:"age-bar",children:c.jsx("div",{className:"difference",style:{width:"15%"},children:"15%"})})]}),c.jsxs("div",{className:"age-group",children:[c.jsx("span",{className:"age",children:"11 лет"}),c.jsx("div",{className:"age-bar",children:c.jsx("div",{className:"difference",style:{width:"13%"},children:"13%"})})]}),c.jsxs("div",{className:"age-group",children:[c.jsx("span",{className:"age",children:"14 лет"}),c.jsx("div",{className:"age-bar",children:c.jsx("div",{className:"difference",style:{width:"14%"},children:"14%"})})]})]})]}),c.jsxs("div",{className:"study-info",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Источник:"})," Iacovou & Sevilla (2012), European Journal of Public Health"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Методология:"})," Проспективное когортное исследование 10,419 детей с контролем множественных конфаундеров (вес при рождении, образование родителей, социально-экономический статус и др.)"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Статистическая значимость:"})," P ","<"," 0.001"]})]})]}),F=()=>c.jsxs("div",{className:"comparison-table",children:[c.jsx("h4",{children:"Сравнение подходов к кормлению"}),c.jsx("div",{className:"table-wrapper",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Аспект"}),c.jsx("th",{children:"Кормление по требованию"}),c.jsx("th",{children:"Кормление по расписанию"}),c.jsx("th",{children:"Победитель"})]})}),c.jsxs("tbody",{children:[c.jsxs("tr",{children:[c.jsx("td",{className:"aspect",children:"Физиология лактации"}),c.jsx("td",{className:"positive",children:"Оптимальная стимуляция пролактина"}),c.jsx("td",{className:"negative",children:"Снижение продукции молока на 20-30%"}),c.jsx("td",{className:"winner demand",children:"По требованию"})]}),c.jsxs("tr",{children:[c.jsx("td",{className:"aspect",children:"Психоэмоциональная связь"}),c.jsx("td",{className:"positive",children:"Укрепление привязанности, доверия"}),c.jsx("td",{className:"negative",children:"Риск формирования тревожности"}),c.jsx("td",{className:"winner demand",children:"По требованию"})]}),c.jsxs("tr",{children:[c.jsx("td",{className:"aspect",children:"Когнитивное развитие"}),c.jsx("td",{className:"positive",children:"IQ на 4.5 пункта выше, лучшие академические результаты"}),c.jsx("td",{className:"negative",children:"Снижение академической успеваемости"}),c.jsx("td",{className:"winner demand",children:"По требованию"})]}),c.jsxs("tr",{children:[c.jsx("td",{className:"aspect",children:"Сон матери (краткосрочный)"}),c.jsx("td",{className:"negative",children:"Частые ночные пробуждения"}),c.jsx("td",{className:"positive",children:"Более длительные периоды сна"}),c.jsx("td",{className:"winner scheduled",children:"По расписанию"})]}),c.jsxs("tr",{children:[c.jsx("td",{className:"aspect",children:"Сон матери (долгосрочный)"}),c.jsx("td",{className:"positive",children:"К 6 неделям младенцы спят дольше"}),c.jsx("td",{className:"neutral",children:"Искусственное растягивание интервалов"}),c.jsx("td",{className:"winner demand",children:"По требованию"})]}),c.jsxs("tr",{children:[c.jsx("td",{className:"aspect",children:"Практичность"}),c.jsx("td",{className:"positive",children:"Не требует следить за часами"}),c.jsx("td",{className:"negative",children:"Требует дисциплины, контроля времени"}),c.jsx("td",{className:"winner demand",children:"По требованию"})]})]})]})})]});return c.jsxs("div",{className:"science-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:`section-header ${q?"visible":""}`,children:[c.jsx("h2",{className:"section-title",children:"Научное обоснование кормления по требованию"}),c.jsx("p",{className:"section-subtitle",children:"Физиология лактации, состав молока и долгосрочные эффекты на развитие младенца"})]}),c.jsx("div",{className:`tab-navigation ${q?"visible":""}`,children:z.map(K=>c.jsxs("button",{className:`tab-btn ${d===K.id?"active":""}`,onClick:()=>M(K.id),children:[c.jsx("span",{className:"tab-icon",children:K.icon}),c.jsx("span",{className:"tab-label",children:K.label})]},K.id))}),c.jsxs("div",{className:"tab-content",children:[d==="physiology"&&c.jsx(C,{}),d==="composition"&&c.jsx(H,{}),d==="cognitive"&&c.jsx(D,{}),d==="comparison"&&c.jsx(F,{})]}),c.jsx("div",{className:`key-insights ${q?"visible":""}`,children:c.jsxs("div",{className:"insights-grid",children:[c.jsxs("div",{className:"insight-card",children:[c.jsx("div",{className:"insight-icon",children:"🧬"}),c.jsx("h4",{children:"Механизм спроса и предложения"}),c.jsx("p",{children:"Частое сосание стимулирует выработку пролактина, увеличивая производство молока. Перерывы снижают лактацию."})]}),c.jsxs("div",{className:"insight-card",children:[c.jsx("div",{className:"insight-icon",children:"⏱️"}),c.jsx("h4",{children:"Восстановление объема"}),c.jsx("p",{children:"Через 2 часа после кормления объём молока восстанавливается на 70-75%, обеспечивая постоянную доступность питания."})]}),c.jsxs("div",{className:"insight-card",children:[c.jsx("div",{className:"insight-icon",children:"🧠"}),c.jsx("h4",{children:"Долгосрочные эффекты"}),c.jsx("p",{children:"Дети, кормленные по требованию, демонстрируют более высокий IQ и лучшие академические результаты в школьном возрасте."})]}),c.jsxs("div",{className:"insight-card",children:[c.jsx("div",{className:"insight-icon",children:"🤱"}),c.jsx("h4",{children:"Индивидуальность младенца"}),c.jsx("p",{children:"Все младенцы разные: размер, эффективность сосания, периоды роста требуют гибкого подхода."})]})]})})]}),c.jsx("style",{jsx:!0,children:`
        .science-section {
          padding: 4rem 0;
          background: var(--background);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        .tab-navigation {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.2s;
        }

        .tab-navigation.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: white;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .tab-btn.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .tab-icon {
          font-size: 1rem;
        }

        .tab-content {
          background: white;
          border-radius: 1rem;
          padding: 2.5rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border);
          margin-bottom: 3rem;
        }

        .tab-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          text-align: center;
        }

        /* Hormone Chart Styles */
        .hormone-chart .hormone-bars {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        .hormone-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .hormone-info {
          flex: 0 0 150px;
        }

        .hormone-name {
          display: block;
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.875rem;
        }

        .hormone-function {
          display: block;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .hormone-bar {
          flex: 1;
          height: 30px;
          background: var(--border);
          border-radius: 0.25rem;
          position: relative;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .bar-fill {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.75rem;
          font-weight: 500;
          transition: width 1s ease;
        }

        .bar-fill.demand {
          background: var(--secondary);
        }

        .bar-fill.scheduled {
          background: var(--danger);
        }

        .chart-note {
          background: rgba(59, 130, 246, 0.05);
          padding: 1rem;
          border-radius: 0.5rem;
          border-left: 4px solid var(--primary);
          font-size: 0.875rem;
          line-height: 1.6;
        }

        /* Milk Composition Styles */
        .composition-chart .milk-types {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .milk-type {
          background: var(--background);
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 1px solid var(--border);
        }

        .type-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .type-header h5 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .calories {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .composition-bars {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .comp-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .comp-label {
          flex: 0 0 60px;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .comp-fill {
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.75rem;
          font-weight: 500;
          border-radius: 0.25rem;
          transition: width 1s ease;
        }

        .type-description {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-top: 1rem;
          font-style: italic;
        }

        .composition-note {
          background: rgba(16, 185, 129, 0.05);
          padding: 1.5rem;
          border-radius: 0.75rem;
          border-left: 4px solid var(--secondary);
          text-align: center;
        }

        .highlight {
          display: block;
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }

        /* Cognitive Chart Styles */
        .cognitive-chart .iq-comparison {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .iq-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .iq-label {
          flex: 0 0 200px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .iq-bar-container {
          flex: 1;
          height: 40px;
          background: var(--border);
          border-radius: 0.25rem;
          position: relative;
          overflow: hidden;
        }

        .iq-bar {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          transition: width 1.5s ease;
        }

        .iq-bar.demand {
          background: var(--secondary);
        }

        .iq-bar.scheduled {
          background: var(--danger);
        }

        .iq-note {
          flex: 0 0 120px;
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-align: center;
        }

        .academic-results {
          margin-bottom: 2rem;
        }

        .academic-results h5 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          text-align: center;
        }

        .age-groups {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .age-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .age {
          flex: 0 0 60px;
          font-weight: 500;
          color: var(--text-primary);
        }

        .age-bar {
          flex: 1;
          height: 24px;
          background: var(--border);
          border-radius: 0.25rem;
          overflow: hidden;
        }

        .difference {
          height: 100%;
          background: var(--danger);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 500;
          transition: width 1.5s ease;
        }

        .study-info {
          background: rgba(107, 114, 128, 0.05);
          padding: 1rem;
          border-radius: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Comparison Table Styles */
        .comparison-table .table-wrapper {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }

        th, td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid var(--border);
        }

        th {
          background: var(--background);
          font-weight: 600;
          color: var(--text-primary);
        }

        .aspect {
          font-weight: 500;
          color: var(--text-primary);
        }

        .positive {
          color: var(--secondary);
          background: rgba(16, 185, 129, 0.05);
        }

        .negative {
          color: var(--danger);
          background: rgba(239, 68, 68, 0.05);
        }

        .neutral {
          background: rgba(107, 114, 128, 0.05);
        }

        .winner {
          text-align: center;
          font-weight: 600;
        }

        .winner.demand {
          color: var(--secondary);
          background: rgba(16, 185, 129, 0.1);
        }

        .winner.scheduled {
          color: var(--danger);
          background: rgba(239, 68, 68, 0.1);
        }

        /* Key Insights */
        .key-insights {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.6s;
        }

        .key-insights.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .insight-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .insight-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .insight-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          display: block;
        }

        .insight-card h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .insight-card p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .insights-grid {
            grid-template-columns: 1fr;
          }

          .milk-types {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .tab-navigation {
            flex-direction: column;
            align-items: center;
          }

          .tab-btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .tab-content {
            padding: 1.5rem;
          }

          .hormone-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .hormone-info {
            flex: none;
          }

          .iq-group {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .iq-label {
            flex: none;
          }

          .iq-note {
            flex: none;
            text-align: left;
          }

          table {
            font-size: 0.75rem;
          }

          th, td {
            padding: 0.75rem 0.5rem;
          }
        }
      `})]})},c0=({data:j})=>{const[q,Y]=ce.useState(!1),[d,M]=ce.useState([]);ce.useEffect(()=>{const D=()=>{const F=document.getElementById("faq");if(F){const K=F.getBoundingClientRect(),O=K.top<window.innerHeight&&K.bottom>0;Y(O)}};return D(),window.addEventListener("scroll",D),()=>window.removeEventListener("scroll",D)},[]);const z=D=>{M(F=>F.includes(D)?F.filter(K=>K!==D):[...F,D])},C=()=>{M(j.map(D=>D.id))},H=()=>{M([])};return c.jsxs("div",{className:"faq-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:`section-header ${q?"visible":""}`,children:[c.jsx("h2",{className:"section-title",children:"Популярные возражения и научные ответы"}),c.jsx("p",{className:"section-subtitle",children:"Развенчиваем мифы о кормлении по требованию с опорой на медицинские данные"})]}),c.jsxs("div",{className:`faq-controls ${q?"visible":""}`,children:[c.jsx("button",{className:"control-btn",onClick:C,children:"Развернуть все"}),c.jsx("button",{className:"control-btn",onClick:H,children:"Свернуть все"})]}),c.jsx("div",{className:"faq-list",children:j.map((D,F)=>{const K=d.includes(D.id);return c.jsxs("div",{className:`faq-item ${K?"expanded":""} ${q?"visible":""}`,style:{animationDelay:`${F*.1}s`},children:[c.jsxs("button",{className:"faq-question",onClick:()=>z(D.id),"aria-expanded":K,children:[c.jsx("div",{className:"question-icon",children:c.jsx("span",{className:"icon-myth",children:"❓"})}),c.jsxs("div",{className:"question-content",children:[c.jsx("h3",{className:"objection-title",children:D.objection}),c.jsx("p",{className:"myth-text",children:D.myth})]}),c.jsx("div",{className:"question-toggle",children:c.jsx("span",{className:`toggle-icon ${K?"open":""}`,children:K?"−":"+"})})]}),K&&c.jsxs("div",{className:"faq-answer",children:[c.jsxs("div",{className:"answer-header",children:[c.jsx("span",{className:"answer-icon",children:"🔬"}),c.jsx("h4",{children:"Научный ответ"})]}),c.jsx("div",{className:"answer-introduction",children:c.jsx("p",{children:D.scientificAnswer.introduction})}),c.jsx("div",{className:"answer-points",children:D.scientificAnswer.points.map((O,S)=>c.jsxs("div",{className:"point-item",children:[c.jsx("div",{className:"point-number",children:S+1}),c.jsxs("div",{className:"point-content",children:[c.jsx("h5",{children:O.title}),c.jsx("p",{children:O.content})]})]},S))}),c.jsxs("div",{className:"answer-evidence",children:[c.jsx("h5",{children:"Научные источники:"}),c.jsx("ul",{children:D.evidence.map((O,S)=>c.jsx("li",{children:O},S))})]})]})]},D.id)})}),c.jsx("div",{className:`faq-summary ${q?"visible":""}`,children:c.jsxs("div",{className:"summary-card",children:[c.jsx("h3",{children:"Общий вывод"}),c.jsx("p",{children:"Все возражения против кормления по требованию либо основаны на устаревших представлениях, либо игнорируют современные научные данные. Единственное обоснованное опасение — это временное истощение матери в ранний период, что требует системной поддержки, а не изменения режима кормления."}),c.jsxs("div",{className:"key-message",children:[c.jsx("span",{className:"message-icon",children:"💡"}),c.jsxs("p",{children:[c.jsx("strong",{children:"Ключевое сообщение:"})," Кормление по требованию — это не только безопасно, но и оптимально для здоровья младенца, развития лактации и долгосрочного когнитивного развития."]})]})]})})]}),c.jsx("style",{jsx:!0,children:`
        .faq-section {
          padding: 4rem 0;
          background: var(--background);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        .faq-controls {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.2s;
        }

        .faq-controls.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .control-btn {
          padding: 0.5rem 1rem;
          background: white;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .control-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .faq-item {
          background: white;
          border-radius: 1rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
          overflow: hidden;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .faq-item:hover {
          box-shadow: var(--shadow-md);
        }

        .faq-item.expanded {
          box-shadow: var(--shadow-lg);
        }

        .faq-question {
          width: 100%;
          padding: 1.5rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          transition: background 0.3s ease;
        }

        .faq-question:hover {
          background: rgba(59, 130, 246, 0.02);
        }

        .question-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          background: rgba(239, 68, 68, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        .question-content {
          flex: 1;
        }

        .objection-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .myth-text {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-style: italic;
          margin: 0;
        }

        .question-toggle {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          background: var(--background);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .toggle-icon.open {
          transform: rotate(180deg);
          background: var(--primary);
          color: white;
        }

        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          border-top: 1px solid var(--border);
        }

        .answer-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          padding-top: 1rem;
        }

        .answer-icon {
          font-size: 1.5rem;
        }

        .answer-header h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--primary);
          margin: 0;
        }

        .answer-introduction {
          background: rgba(59, 130, 246, 0.05);
          padding: 1rem;
          border-radius: 0.5rem;
          border-left: 4px solid var(--primary);
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          line-height: 1.6;
        }

        .answer-points {
          margin-bottom: 1.5rem;
        }

        .point-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: 1rem;
          background: var(--background);
          border-radius: 0.5rem;
        }

        .point-number {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          background: var(--secondary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .point-content h5 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .point-content p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .answer-evidence {
          background: rgba(16, 185, 129, 0.05);
          padding: 1rem;
          border-radius: 0.5rem;
          border-left: 4px solid var(--secondary);
        }

        .answer-evidence h5 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .answer-evidence ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .answer-evidence li {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
          padding-left: 1rem;
          position: relative;
        }

        .answer-evidence li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--secondary);
        }

        .faq-summary {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.4s;
        }

        .faq-summary.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .summary-card {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
        }

        .summary-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .summary-card p {
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.95;
          margin-bottom: 1.5rem;
        }

        .key-message {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          text-align: left;
        }

        .message-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .key-message p {
          margin: 0;
          font-size: 0.875rem;
          line-height: 1.6;
          font-weight: 500;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .faq-question {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .question-toggle {
            align-self: flex-end;
          }

          .point-item {
            flex-direction: column;
            gap: 0.5rem;
          }

          .key-message {
            flex-direction: column;
            text-align: center;
          }

          .faq-controls {
            flex-direction: column;
            align-items: center;
          }

          .control-btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `})]})},u0=({data:j})=>{const[q,Y]=ce.useState(!1),[d,M]=ce.useState("all"),[z,C]=ce.useState("all");ce.useEffect(()=>{const S=()=>{const Se=document.getElementById("sources");if(Se){const pe=Se.getBoundingClientRect(),Me=pe.top<window.innerHeight&&pe.bottom>0;Y(Me)}};return S(),window.addEventListener("scroll",S),()=>window.removeEventListener("scroll",S)},[]);const H=j.filter(S=>{const Se=d==="all"||S.grade===d,pe=z==="all"||S.type===z;return Se&&pe}),D=S=>{switch(S){case"A":return"#10B981";case"B":return"#F59E0B";case"C":return"#6B7280";default:return"#6B7280"}},F=S=>{switch(S){case"A":return"Наивысшая авторитетность";case"B":return"Хорошо, но менее строго";case"C":return"Источники, которых следует избегать";default:return""}},K=["all","A","B","C"],O=["all",...Array.from(new Set(j.map(S=>S.type)))];return c.jsxs("div",{className:"sources-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:`section-header ${q?"visible":""}`,children:[c.jsx("h2",{className:"section-title",children:"Авторитетные источники"}),c.jsx("p",{className:"section-subtitle",children:"Научные данные с оценкой качества и авторитетности источников"})]}),c.jsxs("div",{className:`filters ${q?"visible":""}`,children:[c.jsxs("div",{className:"filter-group",children:[c.jsx("label",{children:"Оценка качества:"}),c.jsx("div",{className:"filter-buttons",children:K.map(S=>c.jsx("button",{className:`filter-btn ${d===S?"active":""}`,onClick:()=>M(S),children:S==="all"?"Все":`Grade ${S}`},S))})]}),c.jsxs("div",{className:"filter-group",children:[c.jsx("label",{children:"Тип источника:"}),c.jsx("div",{className:"filter-buttons",children:O.map(S=>c.jsx("button",{className:`filter-btn ${z===S?"active":""}`,onClick:()=>C(S),children:S==="all"?"Все":S},S))})]})]}),c.jsx("div",{className:`grade-legend ${q?"visible":""}`,children:c.jsx("div",{className:"legend-items",children:["A","B","C"].map(S=>c.jsxs("div",{className:"legend-item",children:[c.jsxs("span",{className:`legend-badge badge-${S.toLowerCase()}`,style:{backgroundColor:`${D(S)}20`,color:D(S)},children:["Grade ",S]}),c.jsx("span",{className:"legend-description",children:F(S)})]},S))})}),c.jsx("div",{className:"sources-grid",children:H.map((S,Se)=>c.jsxs("div",{className:`source-card ${q?"visible":""}`,style:{animationDelay:`${Se*.1}s`},children:[c.jsxs("div",{className:"card-header",children:[c.jsx("div",{className:"source-grade",children:c.jsxs("span",{className:`badge badge-${S.grade.toLowerCase()}`,style:{backgroundColor:`${D(S.grade)}20`,color:D(S.grade)},children:["Grade ",S.grade]})}),c.jsx("div",{className:"source-year",children:S.year})]}),c.jsxs("div",{className:"source-info",children:[c.jsx("h3",{className:"source-title",children:S.title}),c.jsx("p",{className:"source-type",children:S.type}),c.jsx("p",{className:"source-description",children:S.description})]}),c.jsxs("div",{className:"authority-info",children:[c.jsxs("div",{className:"info-item",children:[c.jsx("span",{className:"info-label",children:"Авторитет:"}),c.jsx("span",{className:"info-value",children:S.authority})]}),c.jsxs("div",{className:"info-item",children:[c.jsx("span",{className:"info-label",children:"Процесс:"}),c.jsx("span",{className:"info-value",children:S.process})]}),c.jsxs("div",{className:"info-item",children:[c.jsx("span",{className:"info-label",children:"Применение:"}),c.jsx("span",{className:"info-value",children:S.usage})]})]}),S.keyPoints&&S.keyPoints.length>0&&c.jsxs("div",{className:"key-points",children:[c.jsx("h4",{children:"Ключевые моменты:"}),c.jsx("ul",{children:S.keyPoints.map((pe,Me)=>c.jsx("li",{children:pe},Me))})]}),S.url&&S.url!=="#"&&c.jsx("div",{className:"source-link",children:c.jsxs("a",{href:S.url,target:"_blank",rel:"noopener noreferrer",className:"external-link",children:["Перейти к источнику",c.jsx("span",{className:"link-icon",children:"↗"})]})})]},S.id))}),c.jsx("div",{className:`results-info ${q?"visible":""}`,children:c.jsxs("p",{children:["Показано ",H.length," из ",j.length," источников",d!=="all"&&` (Grade ${d})`,z!=="all"&&` (${z})`]})}),c.jsx("div",{className:`sources-summary ${q?"visible":""}`,children:c.jsxs("div",{className:"summary-card",children:[c.jsx("h3",{children:"О методологии оценки источников"}),c.jsxs("div",{className:"methodology-grid",children:[c.jsxs("div",{className:"methodology-item",children:[c.jsx("h4",{children:"Grade A"}),c.jsx("p",{children:"Международные организации (ВОЗ, AAP), крупномасштабные исследования с контролем конфаундеров, систематические обзоры и мета-анализы."})]}),c.jsxs("div",{className:"methodology-item",children:[c.jsx("h4",{children:"Grade B"}),c.jsx("p",{children:"Научно-популярные ресурсы с аккуратным цитированием, национальные программы, профессиональные консультанты с сертификацией."})]}),c.jsxs("div",{className:"methodology-item",children:[c.jsx("h4",{children:"Grade C"}),c.jsx("p",{children:"Популярные книги без научной основы, немедицинские сайты без цитирования, сообщения в социальных сетях."})]})]}),c.jsx("div",{className:"disclaimer",children:c.jsxs("p",{children:[c.jsx("strong",{children:"Важно:"})," Все ключевые утверждения в этом исследовании подкреплены источниками Grade A. Источники Grade B используются для дополнительного контекста. Источники Grade C представлены как примеры того, чего следует избегать."]})})]})})]}),c.jsx("style",{jsx:!0,children:`
        .sources-section {
          padding: 4rem 0;
          background: var(--background);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        .filters {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.2s;
        }

        .filters.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .filter-group label {
          font-weight: 500;
          color: var(--text-primary);
          font-size: 0.875rem;
        }

        .filter-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1rem;
          background: white;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .filter-btn.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .grade-legend {
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.4s;
        }

        .grade-legend.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .legend-items {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .legend-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .legend-description {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .sources-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .source-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .source-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .source-year {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        .source-info {
          margin-bottom: 1.5rem;
        }

        .source-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          line-height: 1.3;
        }

        .source-type {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .source-description {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .authority-info {
          margin-bottom: 1.5rem;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 0.75rem;
        }

        .info-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .key-points {
          margin-bottom: 1.5rem;
        }

        .key-points h4 {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .key-points ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .key-points li {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
          padding-left: 1rem;
          position: relative;
          line-height: 1.4;
        }

        .key-points li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary);
        }

        .source-link {
          margin-top: 1rem;
        }

        .external-link {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--primary);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .external-link:hover {
          color: #2563EB;
        }

        .link-icon {
          font-size: 0.75rem;
        }

        .results-info {
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.6s;
        }

        .results-info.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sources-summary {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.8s;
        }

        .sources-summary.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .summary-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border);
        }

        .summary-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .methodology-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .methodology-item {
          text-align: center;
        }

        .methodology-item h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .methodology-item p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .disclaimer {
          background: rgba(59, 130, 246, 0.05);
          padding: 1.5rem;
          border-radius: 0.75rem;
          border-left: 4px solid var(--primary);
          text-align: center;
        }

        .disclaimer p {
          margin: 0;
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .disclaimer strong {
          color: var(--text-primary);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .sources-grid {
            grid-template-columns: 1fr;
          }

          .methodology-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .legend-items {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .filter-group {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .filter-buttons {
            width: 100%;
            justify-content: center;
          }

          .source-card {
            padding: 1.25rem;
          }

          .summary-card {
            padding: 1.5rem;
          }
        }
      `})]})},s0=()=>{const[j,q]=ce.useState(!1);return ce.useEffect(()=>{const Y=()=>{const d=document.getElementById("conclusion");if(d){const M=d.getBoundingClientRect(),z=M.top<window.innerHeight&&M.bottom>0;q(z)}};return Y(),window.addEventListener("scroll",Y),()=>window.removeEventListener("scroll",Y)},[]),c.jsxs("div",{className:"conclusion-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:`section-header ${j?"visible":""}`,children:[c.jsx("h2",{className:"section-title",children:"Заключение"}),c.jsx("p",{className:"section-subtitle",children:"Баланс между наукой и реальностью материнства"})]}),c.jsx("div",{className:`main-conclusion ${j?"visible":""}`,children:c.jsxs("div",{className:"conclusion-card",children:[c.jsx("div",{className:"conclusion-quote",children:c.jsx("blockquote",{children:c.jsx("p",{children:"Научные доказательства однозначно поддерживают кормление по требованию как оптимальный подход для здоровья младенца, развития лактации и долгосрочного когнитивного развития. Это соответствует физиологии человека, эволюционной истории нашего вида и современным данным."})})}),c.jsxs("div",{className:"key-findings",children:[c.jsx("h3",{children:"Ключевые выводы исследования"}),c.jsxs("div",{className:"findings-grid",children:[c.jsxs("div",{className:"finding-item",children:[c.jsx("div",{className:"finding-icon",children:"🧬"}),c.jsx("h4",{children:"Физиологически обосновано"}),c.jsx("p",{children:"Механизм спроса и предложения в лактации работает эффективно при кормлении по требованию, обеспечивая оптимальное производство молока."})]}),c.jsxs("div",{className:"finding-item",children:[c.jsx("div",{className:"finding-icon",children:"🧠"}),c.jsx("h4",{children:"Долгосрочные преимущества"}),c.jsx("p",{children:"Дети, кормленные по требованию, демонстрируют более высокий IQ и лучшие академические результаты в долгосрочной перспективе."})]}),c.jsxs("div",{className:"finding-item",children:[c.jsx("div",{className:"finding-icon",children:"🌍"}),c.jsx("h4",{children:"Мировой консенсус"}),c.jsx("p",{children:"Все авторитетные международные организации (ВОЗ, AAP, ЮНИСЕФ) рекомендуют кормление по требованию как золотой стандарт."})]}),c.jsxs("div",{className:"finding-item",children:[c.jsx("div",{className:"finding-icon",children:"⚖️"}),c.jsx("h4",{children:"Необходима поддержка"}),c.jsx("p",{children:"Успешное кормление по требованию требует системной поддержки матерей со стороны партнеров, семьи и общества."})]})]})]})]})}),c.jsxs("div",{className:`practical-recommendations ${j?"visible":""}`,children:[c.jsx("h3",{children:"Практические рекомендации"}),c.jsxs("div",{className:"recommendations-grid",children:[c.jsxs("div",{className:"recommendation-card",children:[c.jsxs("div",{className:"card-header",children:[c.jsx("span",{className:"card-icon",children:"👶"}),c.jsx("h4",{children:"Для матерей"})]}),c.jsxs("ul",{children:[c.jsx("li",{children:"Доверяйте сигналам своего младенца"}),c.jsx("li",{children:"Не следите за часами, следите за поведением ребенка"}),c.jsx("li",{children:"Ищите поддержку в первые недели"}),c.jsx("li",{children:"Используйте слинги для удобства"}),c.jsx("li",{children:"Обсуждайте с партнером распределение обязанностей"})]})]}),c.jsxs("div",{className:"recommendation-card",children:[c.jsxs("div",{className:"card-header",children:[c.jsx("span",{className:"card-icon",children:"👨"}),c.jsx("h4",{children:"Для партнеров"})]}),c.jsxs("ul",{children:[c.jsx("li",{children:"Помогайте с домашними делами"}),c.jsx("li",{children:"Кормите младенца сцеженным молоком 1-2 раза в ночь"}),c.jsx("li",{children:"Обеспечьте матери возможность отдыха"}),c.jsx("li",{children:"Будьте эмоционально поддержкой"}),c.jsx("li",{children:"Изучите основы грудного вскармливания"})]})]}),c.jsxs("div",{className:"recommendation-card",children:[c.jsxs("div",{className:"card-header",children:[c.jsx("span",{className:"card-icon",children:"🏥"}),c.jsx("h4",{children:"Для системы здравоохранения"})]}),c.jsxs("ul",{children:[c.jsx("li",{children:"Внедряйте программу Baby-Friendly Hospital Initiative"}),c.jsx("li",{children:"Обучайте персонал современным рекомендациям"}),c.jsx("li",{children:"Обеспечьте доступ к консультантам по лактации"}),c.jsx("li",{children:"Поддерживайте матерей после выписки"}),c.jsx("li",{children:"Нормализуйте грудное вскармливание в обществе"})]})]}),c.jsxs("div",{className:"recommendation-card",children:[c.jsxs("div",{className:"card-header",children:[c.jsx("span",{className:"card-icon",children:"🏛️"}),c.jsx("h4",{children:"Для государства"})]}),c.jsxs("ul",{children:[c.jsx("li",{children:"Обеспечьте оплачиваемый отпуск минимум 6 месяцев"}),c.jsx("li",{children:"Создайте программы поддержки матерей"}),c.jsx("li",{children:"Инвестируйте в образование о грудном вскармливании"}),c.jsx("li",{children:"Поддерживайте работающих матерей"}),c.jsx("li",{children:"Развивайте службы консультации по лактации"})]})]})]})]}),c.jsx("div",{className:`call-to-action ${j?"visible":""}`,children:c.jsxs("div",{className:"cta-card",children:[c.jsxs("div",{className:"cta-content",children:[c.jsx("h3",{children:"Сделаем выбор в пользу науки"}),c.jsx("p",{children:"Время оставить позади устаревшие практики и перейти к научно обоснованному подходу, который поддерживает здоровье матерей и младенцев, их долгосрочное развитие и благополучие."})]}),c.jsxs("div",{className:"cta-actions",children:[c.jsx("button",{className:"btn btn-primary cta-btn",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Вернуться к началу"}),c.jsx("a",{href:"/report.md",download:!0,className:"btn btn-outline cta-btn",children:"Скачать полный отчет"})]})]})}),c.jsx("div",{className:`final-stats ${j?"visible":""}`,children:c.jsxs("div",{className:"stats-grid",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"75+"}),c.jsx("span",{className:"stat-label",children:"Анализированных источников"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"10,419"}),c.jsx("span",{className:"stat-label",children:"Детей в крупнейшем исследовании"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"4.5"}),c.jsx("span",{className:"stat-label",children:"Пунктов IQ разница"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"100%"}),c.jsx("span",{className:"stat-label",children:"Авторитетных организаций рекомендуют"})]})]})})]}),c.jsx("style",{jsx:!0,children:`
        .conclusion-section {
          padding: 4rem 0;
          background: var(--background);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .main-conclusion {
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.2s;
        }

        .main-conclusion.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .conclusion-card {
          background: white;
          border-radius: 1rem;
          padding: 2.5rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border);
        }

        .conclusion-quote {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .conclusion-quote blockquote {
          margin: 0;
          padding: 0;
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--text-primary);
          font-style: italic;
          position: relative;
        }

        .conclusion-quote blockquote::before,
        .conclusion-quote blockquote::after {
          content: '"';
          font-size: 3rem;
          color: var(--primary);
          opacity: 0.3;
          position: absolute;
        }

        .conclusion-quote blockquote::before {
          top: -1rem;
          left: -1rem;
        }

        .conclusion-quote blockquote::after {
          bottom: -2rem;
          right: -1rem;
        }

        .conclusion-quote p {
          margin: 0;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .key-findings {
          text-align: center;
        }

        .key-findings h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2rem;
        }

        .findings-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .finding-item {
          background: var(--background);
          border-radius: 0.75rem;
          padding: 1.5rem;
          text-align: center;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .finding-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .finding-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .finding-item h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .finding-item p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .practical-recommendations {
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.4s;
        }

        .practical-recommendations.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .practical-recommendations h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          text-align: center;
          margin-bottom: 2rem;
        }

        .recommendations-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .recommendation-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .card-icon {
          font-size: 1.5rem;
        }

        .recommendation-card h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .recommendation-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .recommendation-card li {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          padding-left: 1rem;
          position: relative;
          line-height: 1.5;
        }

        .recommendation-card li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary);
        }

        .call-to-action {
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.6s;
        }

        .call-to-action.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-card {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border-radius: 1rem;
          padding: 2.5rem;
          text-align: center;
        }

        .cta-content {
          margin-bottom: 2rem;
        }

        .cta-content h3 {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.125rem;
          line-height: 1.6;
          opacity: 0.95;
          margin: 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 500;
        }

        .btn-primary.cta-btn {
          background: white;
          color: var(--primary);
        }

        .btn-primary.cta-btn:hover {
          background: var(--background);
        }

        .btn-outline.cta-btn {
          border-color: white;
          color: white;
        }

        .btn-outline.cta-btn:hover {
          background: white;
          color: var(--primary);
        }

        .final-stats {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.8s;
        }

        .final-stats.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: white;
          border-radius: 0.75rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          font-family: var(--font-mono);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .findings-grid {
            grid-template-columns: 1fr;
          }

          .recommendations-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .conclusion-card {
            padding: 2rem;
          }

          .conclusion-quote blockquote {
            font-size: 1.125rem;
          }

          .conclusion-quote blockquote::before,
          .conclusion-quote blockquote::after {
            display: none;
          }

          .cta-card {
            padding: 2rem;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn {
            width: 100%;
            max-width: 300px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `})]})},r0=()=>{const[j,q]=ce.useState(!1),Y=()=>{window.pageYOffset>300?q(!0):q(!1)},d=()=>{window.scrollTo({top:0,behavior:"smooth"})};return ce.useEffect(()=>(window.addEventListener("scroll",Y),()=>window.removeEventListener("scroll",Y)),[]),c.jsx("button",{className:`scroll-to-top ${j?"visible":""}`,onClick:d,"aria-label":"Scroll to top",children:"↑"})};function o0(){const[j,q]=ce.useState("home"),Y=d=>{const M=document.getElementById(d);M&&(M.scrollIntoView({behavior:"smooth"}),q(d))};return c.jsxs("div",{className:"App",children:[c.jsx(e0,{activeSection:j,scrollToSection:Y}),c.jsxs("main",{children:[c.jsx("section",{id:"home",children:c.jsx(a0,{scrollToSection:Y})}),c.jsx("section",{id:"timeline",children:c.jsx(t0,{data:Jh})}),c.jsx("section",{id:"organizations",children:c.jsx(n0,{data:kh})}),c.jsx("section",{id:"science",children:c.jsx(i0,{data:Fh})}),c.jsx("section",{id:"faq",children:c.jsx(c0,{data:Wh})}),c.jsx("section",{id:"sources",children:c.jsx(u0,{data:$h})}),c.jsx("section",{id:"conclusion",children:c.jsx(s0,{})})]}),c.jsx(l0,{}),c.jsx(r0,{})]})}Kh.createRoot(document.getElementById("root")).render(c.jsx(ce.StrictMode,{children:c.jsx(o0,{})}));
//# sourceMappingURL=index-BBiUkbPJ.js.map
