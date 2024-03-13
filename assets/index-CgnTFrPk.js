function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HomeView-CjmeP2RF.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/HomeView-wJLYRVon.css","assets/AboutView-CAhbb5Zp.js","assets/ProjectView-bCMUGHtz.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function c8(c,a){const e=new Set(c.split(","));return a?r=>e.has(r.toLowerCase()):r=>e.has(r)}const l1={},Z2=[],A1=()=>{},Zo=()=>!1,S4=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),a8=c=>c.startsWith("onUpdate:"),p1=Object.assign,e8=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Ko=Object.prototype.hasOwnProperty,j=(c,a)=>Ko.call(c,a),I=Array.isArray,K2=c=>y4(c)==="[object Map]",u7=c=>y4(c)==="[object Set]",G=c=>typeof c=="function",z1=c=>typeof c=="string",s3=c=>typeof c=="symbol",f1=c=>c!==null&&typeof c=="object",p7=c=>(f1(c)||G(c))&&G(c.then)&&G(c.catch),V7=Object.prototype.toString,y4=c=>V7.call(c),Yo=c=>y4(c).slice(8,-1),M7=c=>y4(c)==="[object Object]",r8=c=>z1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,h3=c8(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),w4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},Xo=/-(\w)/g,j1=w4(c=>c.replace(Xo,(a,e)=>e?e.toUpperCase():"")),Qo=/\B([A-Z])/g,n3=w4(c=>c.replace(Qo,"-$1").toLowerCase()),k4=w4(c=>c.charAt(0).toUpperCase()+c.slice(1)),l6=w4(c=>c?`on${k4(c)}`:""),V2=(c,a)=>!Object.is(c,a),f6=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},H4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},Jo=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let _0;const C7=()=>_0||(_0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function i8(c){if(I(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],i=z1(r)?rt(r):i8(r);if(i)for(const s in i)a[s]=i[s]}return a}else if(z1(c)||f1(c))return c}const ct=/;(?![^(]*\))/g,at=/:([^]+)/,et=/\/\*[^]*?\*\//g;function rt(c){const a={};return c.replace(et,"").split(ct).forEach(e=>{if(e){const r=e.split(at);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function w2(c){let a="";if(z1(c))a=c;else if(I(c))for(let e=0;e<c.length;e++){const r=w2(c[e]);r&&(a+=r+" ")}else if(f1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const it="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",st=c8(it);function d7(c){return!!c||c===""}const x31=c=>z1(c)?c:c==null?"":I(c)||f1(c)&&(c.toString===V7||!G(c.toString))?JSON.stringify(c,L7,2):String(c),L7=(c,a)=>a&&a.__v_isRef?L7(c,a.value):K2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,i],s)=>(e[o6(r,s)+" =>"]=i,e),{})}:u7(a)?{[`Set(${a.size})`]:[...a.values()].map(e=>o6(e))}:s3(a)?o6(a):f1(a)&&!I(a)&&!M7(a)?String(a):a,o6=(c,a="")=>{var e;return s3(c)?`Symbol(${(e=c.description)!=null?e:a})`:c};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let T1;class g7{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=T1,!a&&T1&&(this.index=(T1.scopes||(T1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=T1;try{return T1=this,a()}finally{T1=e}}}on(){T1=this}off(){T1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function nt(c){return new g7(c)}function lt(c,a=T1){a&&a.active&&a.effects.push(c)}function ft(){return T1}let P2;class s8{constructor(a,e,r,i){this.fn=a,this.trigger=e,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,lt(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,_2();for(let a=0;a<this._depsLength;a++){const e=this.deps[a];if(e.computed&&(ot(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),q2()}return this._dirtyLevel>=4}set dirty(a){this._dirtyLevel=a?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=H2,e=P2;try{return H2=!0,P2=this,this._runnings++,q0(this),this.fn()}finally{D0(this),this._runnings--,P2=e,H2=a}}stop(){var a;this.active&&(q0(this),D0(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function ot(c){return c.value}function q0(c){c._trackId++,c._depsLength=0}function D0(c){if(c.deps.length>c._depsLength){for(let a=c._depsLength;a<c.deps.length;a++)b7(c.deps[a],c);c.deps.length=c._depsLength}}function b7(c,a){const e=c.get(a);e!==void 0&&a._trackId!==e&&(c.delete(a),c.size===0&&c.cleanup())}let H2=!0,N6=0;const x7=[];function _2(){x7.push(H2),H2=!1}function q2(){const c=x7.pop();H2=c===void 0?!0:c}function n8(){N6++}function l8(){for(N6--;!N6&&S6.length;)S6.shift()()}function N7(c,a,e){if(a.get(c)!==c._trackId){a.set(c,c._trackId);const r=c.deps[c._depsLength];r!==a?(r&&b7(r,c),c.deps[c._depsLength++]=a):c._depsLength++}}const S6=[];function S7(c,a,e){n8();for(const r of c.keys()){let i;r._dirtyLevel<a&&(i??(i=c.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=a),r._shouldSchedule&&(i??(i=c.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&S6.push(r.scheduler)))}l8()}const y7=(c,a)=>{const e=new Map;return e.cleanup=c,e.computed=a,e},y6=new WeakMap,T2=Symbol(""),w6=Symbol("");function x1(c,a,e){if(H2&&P2){let r=y6.get(c);r||y6.set(c,r=new Map);let i=r.get(e);i||r.set(e,i=y7(()=>r.delete(e))),N7(P2,i)}}function J1(c,a,e,r,i,s){const n=y6.get(c);if(!n)return;let l=[];if(a==="clear")l=[...n.values()];else if(e==="length"&&I(c)){const f=Number(r);n.forEach((t,o)=>{(o==="length"||!s3(o)&&o>=f)&&l.push(t)})}else switch(e!==void 0&&l.push(n.get(e)),a){case"add":I(c)?r8(e)&&l.push(n.get("length")):(l.push(n.get(T2)),K2(c)&&l.push(n.get(w6)));break;case"delete":I(c)||(l.push(n.get(T2)),K2(c)&&l.push(n.get(w6)));break;case"set":K2(c)&&l.push(n.get(T2));break}n8();for(const f of l)f&&S7(f,4);l8()}const tt=c8("__proto__,__v_isRef,__isVue"),w7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(s3)),O0=mt();function mt(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=Z(this);for(let s=0,n=this.length;s<n;s++)x1(r,"get",s+"");const i=r[a](...e);return i===-1||i===!1?r[a](...e.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){_2(),n8();const r=Z(this)[a].apply(this,e);return l8(),q2(),r}}),c}function zt(c){const a=Z(this);return x1(a,"has",c),a.hasOwnProperty(c)}class k7{constructor(a=!1,e=!1){this._isReadonly=a,this._isShallow=e}get(a,e,r){const i=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!i;if(e==="__v_isReadonly")return i;if(e==="__v_isShallow")return s;if(e==="__v_raw")return r===(i?s?xt:F7:s?T7:P7).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(r)?a:void 0;const n=I(a);if(!i){if(n&&j(O0,e))return Reflect.get(O0,e,r);if(e==="hasOwnProperty")return zt}const l=Reflect.get(a,e,r);return(s3(e)?w7.has(e):tt(e))||(i||x1(a,"get",e),s)?l:N1(l)?n&&r8(e)?l:l.value:f1(l)?i?B7(l):P4(l):l}}class A7 extends k7{constructor(a=!1){super(!1,a)}set(a,e,r,i){let s=a[e];if(!this._isShallow){const f=c3(s);if(!u4(r)&&!c3(r)&&(s=Z(s),r=Z(r)),!I(a)&&N1(s)&&!N1(r))return f?!1:(s.value=r,!0)}const n=I(a)&&r8(e)?Number(e)<a.length:j(a,e),l=Reflect.set(a,e,r,i);return a===Z(i)&&(n?V2(r,s)&&J1(a,"set",e,r):J1(a,"add",e,r)),l}deleteProperty(a,e){const r=j(a,e);a[e];const i=Reflect.deleteProperty(a,e);return i&&r&&J1(a,"delete",e,void 0),i}has(a,e){const r=Reflect.has(a,e);return(!s3(e)||!w7.has(e))&&x1(a,"has",e),r}ownKeys(a){return x1(a,"iterate",I(a)?"length":T2),Reflect.ownKeys(a)}}class vt extends k7{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const ht=new A7,Ht=new vt,ut=new A7(!0),f8=c=>c,A4=c=>Reflect.getPrototypeOf(c);function I3(c,a,e=!1,r=!1){c=c.__v_raw;const i=Z(c),s=Z(a);e||(V2(a,s)&&x1(i,"get",a),x1(i,"get",s));const{has:n}=A4(i),l=r?f8:e?z8:L3;if(n.call(i,a))return l(c.get(a));if(n.call(i,s))return l(c.get(s));c!==i&&c.get(a)}function G3(c,a=!1){const e=this.__v_raw,r=Z(e),i=Z(c);return a||(V2(c,i)&&x1(r,"has",c),x1(r,"has",i)),c===i?e.has(c):e.has(c)||e.has(i)}function W3(c,a=!1){return c=c.__v_raw,!a&&x1(Z(c),"iterate",T2),Reflect.get(c,"size",c)}function $0(c){c=Z(c);const a=Z(this);return A4(a).has.call(a,c)||(a.add(c),J1(a,"add",c,c)),this}function U0(c,a){a=Z(a);const e=Z(this),{has:r,get:i}=A4(e);let s=r.call(e,c);s||(c=Z(c),s=r.call(e,c));const n=i.call(e,c);return e.set(c,a),s?V2(a,n)&&J1(e,"set",c,a):J1(e,"add",c,a),this}function I0(c){const a=Z(this),{has:e,get:r}=A4(a);let i=e.call(a,c);i||(c=Z(c),i=e.call(a,c)),r&&r.call(a,c);const s=a.delete(c);return i&&J1(a,"delete",c,void 0),s}function G0(){const c=Z(this),a=c.size!==0,e=c.clear();return a&&J1(c,"clear",void 0,void 0),e}function j3(c,a){return function(r,i){const s=this,n=s.__v_raw,l=Z(n),f=a?f8:c?z8:L3;return!c&&x1(l,"iterate",T2),n.forEach((t,o)=>r.call(i,f(t),f(o),s))}}function Z3(c,a,e){return function(...r){const i=this.__v_raw,s=Z(i),n=K2(s),l=c==="entries"||c===Symbol.iterator&&n,f=c==="keys"&&n,t=i[c](...r),o=e?f8:a?z8:L3;return!a&&x1(s,"iterate",f?w6:T2),{next(){const{value:z,done:h}=t.next();return h?{value:z,done:h}:{value:l?[o(z[0]),o(z[1])]:o(z),done:h}},[Symbol.iterator](){return this}}}}function l2(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function pt(){const c={get(s){return I3(this,s)},get size(){return W3(this)},has:G3,add:$0,set:U0,delete:I0,clear:G0,forEach:j3(!1,!1)},a={get(s){return I3(this,s,!1,!0)},get size(){return W3(this)},has:G3,add:$0,set:U0,delete:I0,clear:G0,forEach:j3(!1,!0)},e={get(s){return I3(this,s,!0)},get size(){return W3(this,!0)},has(s){return G3.call(this,s,!0)},add:l2("add"),set:l2("set"),delete:l2("delete"),clear:l2("clear"),forEach:j3(!0,!1)},r={get(s){return I3(this,s,!0,!0)},get size(){return W3(this,!0)},has(s){return G3.call(this,s,!0)},add:l2("add"),set:l2("set"),delete:l2("delete"),clear:l2("clear"),forEach:j3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=Z3(s,!1,!1),e[s]=Z3(s,!0,!1),a[s]=Z3(s,!1,!0),r[s]=Z3(s,!0,!0)}),[c,e,a,r]}const[Vt,Mt,Ct,dt]=pt();function o8(c,a){const e=a?c?dt:Ct:c?Mt:Vt;return(r,i,s)=>i==="__v_isReactive"?!c:i==="__v_isReadonly"?c:i==="__v_raw"?r:Reflect.get(j(e,i)&&i in r?e:r,i,s)}const Lt={get:o8(!1,!1)},gt={get:o8(!1,!0)},bt={get:o8(!0,!1)},P7=new WeakMap,T7=new WeakMap,F7=new WeakMap,xt=new WeakMap;function Nt(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function St(c){return c.__v_skip||!Object.isExtensible(c)?0:Nt(Yo(c))}function P4(c){return c3(c)?c:t8(c,!1,ht,Lt,P7)}function R7(c){return t8(c,!1,ut,gt,T7)}function B7(c){return t8(c,!0,Ht,bt,F7)}function t8(c,a,e,r,i){if(!f1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=i.get(c);if(s)return s;const n=St(c);if(n===0)return c;const l=new Proxy(c,n===2?r:e);return i.set(c,l),l}function Y2(c){return c3(c)?Y2(c.__v_raw):!!(c&&c.__v_isReactive)}function c3(c){return!!(c&&c.__v_isReadonly)}function u4(c){return!!(c&&c.__v_isShallow)}function E7(c){return Y2(c)||c3(c)}function Z(c){const a=c&&c.__v_raw;return a?Z(a):c}function m8(c){return Object.isExtensible(c)&&H4(c,"__v_skip",!0),c}const L3=c=>f1(c)?P4(c):c,z8=c=>f1(c)?B7(c):c;class _7{constructor(a,e,r,i){this.getter=a,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new s8(()=>a(this._value),()=>n4(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const a=Z(this);return(!a._cacheable||a.effect.dirty)&&V2(a._value,a._value=a.effect.run())&&n4(a,4),q7(a),a.effect._dirtyLevel>=2&&n4(a,2),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function yt(c,a,e=!1){let r,i;const s=G(c);return s?(r=c,i=A1):(r=c.get,i=c.set),new _7(r,i,s||!i,e)}function q7(c){var a;H2&&P2&&(c=Z(c),N7(P2,(a=c.dep)!=null?a:c.dep=y7(()=>c.dep=void 0,c instanceof _7?c:void 0)))}function n4(c,a=4,e){c=Z(c);const r=c.dep;r&&S7(r,a)}function N1(c){return!!(c&&c.__v_isRef===!0)}function p4(c){return D7(c,!1)}function wt(c){return D7(c,!0)}function D7(c,a){return N1(c)?c:new kt(c,a)}class kt{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:Z(a),this._value=e?a:L3(a)}get value(){return q7(this),this._value}set value(a){const e=this.__v_isShallow||u4(a)||c3(a);a=e?a:Z(a),V2(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:L3(a),n4(this,4))}}function y1(c){return N1(c)?c.value:c}const At={get:(c,a,e)=>y1(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const i=c[a];return N1(i)&&!N1(e)?(i.value=e,!0):Reflect.set(c,a,e,r)}};function O7(c){return Y2(c)?c:new Proxy(c,At)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function u2(c,a,e,r){try{return r?c(...r):c()}catch(i){T4(i,a,e)}}function E1(c,a,e,r){if(G(c)){const s=u2(c,a,e,r);return s&&p7(s)&&s.catch(n=>{T4(n,a,e)}),s}const i=[];for(let s=0;s<c.length;s++)i.push(E1(c[s],a,e,r));return i}function T4(c,a,e,r=!0){const i=a?a.vnode:null;if(a){let s=a.parent;const n=a.proxy,l=`https://vuejs.org/error-reference/#runtime-${e}`;for(;s;){const t=s.ec;if(t){for(let o=0;o<t.length;o++)if(t[o](c,n,l)===!1)return}s=s.parent}const f=a.appContext.config.errorHandler;if(f){u2(f,null,10,[c,n,l]);return}}Pt(c,e,i,r)}function Pt(c,a,e,r=!0){console.error(c)}let g3=!1,k6=!1;const M1=[];let I1=0;const X2=[];let t2=null,x2=0;const $7=Promise.resolve();let v8=null;function U7(c){const a=v8||$7;return c?a.then(this?c.bind(this):c):a}function Tt(c){let a=I1+1,e=M1.length;for(;a<e;){const r=a+e>>>1,i=M1[r],s=b3(i);s<c||s===c&&i.pre?a=r+1:e=r}return a}function h8(c){(!M1.length||!M1.includes(c,g3&&c.allowRecurse?I1+1:I1))&&(c.id==null?M1.push(c):M1.splice(Tt(c.id),0,c),I7())}function I7(){!g3&&!k6&&(k6=!0,v8=$7.then(W7))}function Ft(c){const a=M1.indexOf(c);a>I1&&M1.splice(a,1)}function Rt(c){I(c)?X2.push(...c):(!t2||!t2.includes(c,c.allowRecurse?x2+1:x2))&&X2.push(c),I7()}function W0(c,a,e=g3?I1+1:0){for(;e<M1.length;e++){const r=M1[e];if(r&&r.pre){if(c&&r.id!==c.uid)continue;M1.splice(e,1),e--,r()}}}function G7(c){if(X2.length){const a=[...new Set(X2)].sort((e,r)=>b3(e)-b3(r));if(X2.length=0,t2){t2.push(...a);return}for(t2=a,x2=0;x2<t2.length;x2++)t2[x2]();t2=null,x2=0}}const b3=c=>c.id==null?1/0:c.id,Bt=(c,a)=>{const e=b3(c)-b3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function W7(c){k6=!1,g3=!0,M1.sort(Bt);try{for(I1=0;I1<M1.length;I1++){const a=M1[I1];a&&a.active!==!1&&u2(a,null,14)}}finally{I1=0,M1.length=0,G7(),g3=!1,v8=null,(M1.length||X2.length)&&W7()}}function Et(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||l1;let i=e;const s=a.startsWith("update:"),n=s&&a.slice(7);if(n&&n in r){const o=`${n==="modelValue"?"model":n}Modifiers`,{number:z,trim:h}=r[o]||l1;h&&(i=e.map(u=>z1(u)?u.trim():u)),z&&(i=e.map(Jo))}let l,f=r[l=l6(a)]||r[l=l6(j1(a))];!f&&s&&(f=r[l=l6(n3(a))]),f&&E1(f,c,6,i);const t=r[l+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[l])return;c.emitted[l]=!0,E1(t,c,6,i)}}function j7(c,a,e=!1){const r=a.emitsCache,i=r.get(c);if(i!==void 0)return i;const s=c.emits;let n={},l=!1;if(!G(c)){const f=t=>{const o=j7(t,a,!0);o&&(l=!0,p1(n,o))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!s&&!l?(f1(c)&&r.set(c,null),null):(I(s)?s.forEach(f=>n[f]=null):p1(n,s),f1(c)&&r.set(c,n),n)}function F4(c,a){return!c||!S4(a)?!1:(a=a.slice(2).replace(/Once$/,""),j(c,a[0].toLowerCase()+a.slice(1))||j(c,n3(a))||j(c,a))}let F1=null,Z7=null;function V4(c){const a=F1;return F1=c,Z7=c&&c.type.__scopeId||null,a}function N2(c,a=F1,e){if(!a||c._n)return c;const r=(...i)=>{r._d&&r5(-1);const s=V4(a);let n;try{n=c(...i)}finally{V4(s),r._d&&r5(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function t6(c){const{type:a,vnode:e,proxy:r,withProxy:i,props:s,propsOptions:[n],slots:l,attrs:f,emit:t,render:o,renderCache:z,data:h,setupState:u,ctx:N,inheritAttrs:A}=c;let R,p;const d=V4(c);try{if(e.shapeFlag&4){const _=i||r,O=_;R=U1(o.call(O,_,z,s,u,h,N)),p=f}else{const _=a;R=U1(_.length>1?_(s,{attrs:f,slots:l,emit:t}):_(s,null)),p=a.props?f:_t(f)}}catch(_){p3.length=0,T4(_,c,1),R=e1(R2)}let y=R;if(p&&A!==!1){const _=Object.keys(p),{shapeFlag:O}=y;_.length&&O&7&&(n&&_.some(a8)&&(p=qt(p,n)),y=a3(y,p))}return e.dirs&&(y=a3(y),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&(y.transition=e.transition),R=y,V4(d),R}const _t=c=>{let a;for(const e in c)(e==="class"||e==="style"||S4(e))&&((a||(a={}))[e]=c[e]);return a},qt=(c,a)=>{const e={};for(const r in c)(!a8(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function Dt(c,a,e){const{props:r,children:i,component:s}=c,{props:n,children:l,patchFlag:f}=a,t=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return r?j0(r,n,t):!!n;if(f&8){const o=a.dynamicProps;for(let z=0;z<o.length;z++){const h=o[z];if(n[h]!==r[h]&&!F4(t,h))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===n?!1:r?n?j0(r,n,t):!0:!!n;return!1}function j0(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(a[s]!==c[s]&&!F4(e,s))return!0}return!1}function Ot({vnode:c,parent:a},e){for(;a;){const r=a.subTree;if(r.suspense&&r.suspense.activeBranch===c&&(r.el=c.el),r===c)(c=a.vnode).el=e,a=a.parent;else break}}const K7="components";function Y7(c,a){return Ut(K7,c,!0,a)||c}const $t=Symbol.for("v-ndc");function Ut(c,a,e=!0,r=!1){const i=F1||C1;if(i){const s=i.type;if(c===K7){const l=Em(s,!1);if(l&&(l===a||l===j1(a)||l===k4(j1(a))))return s}const n=Z0(i[c]||s[c],a)||Z0(i.appContext[c],a);return!n&&r?s:n}}function Z0(c,a){return c&&(c[a]||c[j1(a)]||c[k4(j1(a))])}const It=c=>c.__isSuspense;function Gt(c,a){a&&a.pendingBranch?I(c)?a.effects.push(...c):a.effects.push(c):Rt(c)}const Wt=Symbol.for("v-scx"),jt=()=>W1(Wt),K3={};function Q2(c,a,e){return X7(c,a,e)}function X7(c,a,{immediate:e,deep:r,flush:i,once:s,onTrack:n,onTrigger:l}=l1){if(a&&s){const g=a;a=(...$)=>{g(...$),O()}}const f=C1,t=g=>r===!0?g:G2(g,r===!1?1:void 0);let o,z=!1,h=!1;if(N1(c)?(o=()=>c.value,z=u4(c)):Y2(c)?(o=()=>t(c),z=!0):I(c)?(h=!0,z=c.some(g=>Y2(g)||u4(g)),o=()=>c.map(g=>{if(N1(g))return g.value;if(Y2(g))return t(g);if(G(g))return u2(g,f,2)})):G(c)?a?o=()=>u2(c,f,2):o=()=>(u&&u(),E1(c,f,3,[N])):o=A1,a&&r){const g=o;o=()=>G2(g())}let u,N=g=>{u=y.onStop=()=>{u2(g,f,4),u=y.onStop=void 0}},A;if(_4)if(N=A1,a?e&&E1(a,f,3,[o(),h?[]:void 0,N]):o(),i==="sync"){const g=jt();A=g.__watcherHandles||(g.__watcherHandles=[])}else return A1;let R=h?new Array(c.length).fill(K3):K3;const p=()=>{if(!(!y.active||!y.dirty))if(a){const g=y.run();(r||z||(h?g.some(($,J)=>V2($,R[J])):V2(g,R)))&&(u&&u(),E1(a,f,3,[g,R===K3?void 0:h&&R[0]===K3?[]:R,N]),R=g)}else y.run()};p.allowRecurse=!!a;let d;i==="sync"?d=p:i==="post"?d=()=>b1(p,f&&f.suspense):(p.pre=!0,f&&(p.id=f.uid),d=()=>h8(p));const y=new s8(o,A1,d),_=ft(),O=()=>{y.stop(),_&&e8(_.effects,y)};return a?e?p():R=y.run():i==="post"?b1(y.run.bind(y),f&&f.suspense):y.run(),A&&A.push(O),O}function Zt(c,a,e){const r=this.proxy,i=z1(c)?c.includes(".")?Q7(r,c):()=>r[c]:c.bind(r,r);let s;G(a)?s=a:(s=a.handler,e=a);const n=F3(this),l=X7(i,s.bind(r),e);return n(),l}function Q7(c,a){const e=a.split(".");return()=>{let r=c;for(let i=0;i<e.length&&r;i++)r=r[e[i]];return r}}function G2(c,a,e=0,r){if(!f1(c)||c.__v_skip)return c;if(a&&a>0){if(e>=a)return c;e++}if(r=r||new Set,r.has(c))return c;if(r.add(c),N1(c))G2(c.value,a,e,r);else if(I(c))for(let i=0;i<c.length;i++)G2(c[i],a,e,r);else if(u7(c)||K2(c))c.forEach(i=>{G2(i,a,e,r)});else if(M7(c))for(const i in c)G2(c[i],a,e,r);return c}function g2(c,a,e,r){const i=c.dirs,s=a&&a.dirs;for(let n=0;n<i.length;n++){const l=i[n];s&&(l.oldValue=s[n].value);let f=l.dir[r];f&&(_2(),E1(f,e,8,[c.el,l,c,a]),q2())}}/*! #__NO_SIDE_EFFECTS__ */function H8(c,a){return G(c)?p1({name:c.name},a,{setup:c}):c}const l4=c=>!!c.type.__asyncLoader,J7=c=>c.type.__isKeepAlive;function Kt(c,a){c9(c,"a",a)}function Yt(c,a){c9(c,"da",a)}function c9(c,a,e=C1){const r=c.__wdc||(c.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return c()});if(R4(a,r,e),e){let i=e.parent;for(;i&&i.parent;)J7(i.parent.vnode)&&Xt(r,a,e,i),i=i.parent}}function Xt(c,a,e,r){const i=R4(a,c,r,!0);e9(()=>{e8(r[a],i)},e)}function R4(c,a,e=C1,r=!1){if(e){const i=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;_2();const l=F3(e),f=E1(a,e,c,n);return l(),q2(),f});return r?i.unshift(s):i.push(s),s}}const r2=c=>(a,e=C1)=>(!_4||c==="sp")&&R4(c,(...r)=>a(...r),e),Qt=r2("bm"),a9=r2("m"),Jt=r2("bu"),cm=r2("u"),am=r2("bum"),e9=r2("um"),em=r2("sp"),rm=r2("rtg"),im=r2("rtc");function sm(c,a=C1){R4("ec",c,a)}function N31(c,a,e,r){let i;const s=e&&e[r];if(I(c)||z1(c)){i=new Array(c.length);for(let n=0,l=c.length;n<l;n++)i[n]=a(c[n],n,void 0,s&&s[n])}else if(typeof c=="number"){i=new Array(c);for(let n=0;n<c;n++)i[n]=a(n+1,n,void 0,s&&s[n])}else if(f1(c))if(c[Symbol.iterator])i=Array.from(c,(n,l)=>a(n,l,void 0,s&&s[l]));else{const n=Object.keys(c);i=new Array(n.length);for(let l=0,f=n.length;l<f;l++){const t=n[l];i[l]=a(c[t],t,l,s&&s[l])}}else i=[];return e&&(e[r]=i),i}const A6=c=>c?h9(c)?M8(c)||c.proxy:A6(c.parent):null,H3=p1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>A6(c.parent),$root:c=>A6(c.root),$emit:c=>c.emit,$options:c=>u8(c),$forceUpdate:c=>c.f||(c.f=()=>{c.effect.dirty=!0,h8(c.update)}),$nextTick:c=>c.n||(c.n=U7.bind(c.proxy)),$watch:c=>Zt.bind(c)}),m6=(c,a)=>c!==l1&&!c.__isScriptSetup&&j(c,a),nm={get({_:c},a){const{ctx:e,setupState:r,data:i,props:s,accessCache:n,type:l,appContext:f}=c;let t;if(a[0]!=="$"){const u=n[a];if(u!==void 0)switch(u){case 1:return r[a];case 2:return i[a];case 4:return e[a];case 3:return s[a]}else{if(m6(r,a))return n[a]=1,r[a];if(i!==l1&&j(i,a))return n[a]=2,i[a];if((t=c.propsOptions[0])&&j(t,a))return n[a]=3,s[a];if(e!==l1&&j(e,a))return n[a]=4,e[a];P6&&(n[a]=0)}}const o=H3[a];let z,h;if(o)return a==="$attrs"&&x1(c,"get",a),o(c);if((z=l.__cssModules)&&(z=z[a]))return z;if(e!==l1&&j(e,a))return n[a]=4,e[a];if(h=f.config.globalProperties,j(h,a))return h[a]},set({_:c},a,e){const{data:r,setupState:i,ctx:s}=c;return m6(i,a)?(i[a]=e,!0):r!==l1&&j(r,a)?(r[a]=e,!0):j(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:i,propsOptions:s}},n){let l;return!!e[n]||c!==l1&&j(c,n)||m6(a,n)||(l=s[0])&&j(l,n)||j(r,n)||j(H3,n)||j(i.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:j(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function K0(c){return I(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let P6=!0;function lm(c){const a=u8(c),e=c.proxy,r=c.ctx;P6=!1,a.beforeCreate&&Y0(a.beforeCreate,c,"bc");const{data:i,computed:s,methods:n,watch:l,provide:f,inject:t,created:o,beforeMount:z,mounted:h,beforeUpdate:u,updated:N,activated:A,deactivated:R,beforeDestroy:p,beforeUnmount:d,destroyed:y,unmounted:_,render:O,renderTracked:g,renderTriggered:$,errorCaptured:J,serverPrefetch:o1,expose:k1,inheritAttrs:s2,components:L2,directives:q1,filters:f3}=a;if(t&&fm(t,r,null),n)for(const c1 in n){const K=n[c1];G(K)&&(r[c1]=K.bind(e))}if(i){const c1=i.call(e,e);f1(c1)&&(c.data=P4(c1))}if(P6=!0,s)for(const c1 in s){const K=s[c1],Z1=G(K)?K.bind(e,e):G(K.get)?K.get.bind(e,e):A1,n2=!G(K)&&G(K.set)?K.set.bind(e):A1,D1=u1({get:Z1,set:n2});Object.defineProperty(r,c1,{enumerable:!0,configurable:!0,get:()=>D1.value,set:L1=>D1.value=L1})}if(l)for(const c1 in l)r9(l[c1],r,e,c1);if(f){const c1=G(f)?f.call(e):f;Reflect.ownKeys(c1).forEach(K=>{f4(K,c1[K])})}o&&Y0(o,c,"c");function h1(c1,K){I(K)?K.forEach(Z1=>c1(Z1.bind(e))):K&&c1(K.bind(e))}if(h1(Qt,z),h1(a9,h),h1(Jt,u),h1(cm,N),h1(Kt,A),h1(Yt,R),h1(sm,J),h1(im,g),h1(rm,$),h1(am,d),h1(e9,_),h1(em,o1),I(k1))if(k1.length){const c1=c.exposed||(c.exposed={});k1.forEach(K=>{Object.defineProperty(c1,K,{get:()=>e[K],set:Z1=>e[K]=Z1})})}else c.exposed||(c.exposed={});O&&c.render===A1&&(c.render=O),s2!=null&&(c.inheritAttrs=s2),L2&&(c.components=L2),q1&&(c.directives=q1)}function fm(c,a,e=A1){I(c)&&(c=T6(c));for(const r in c){const i=c[r];let s;f1(i)?"default"in i?s=W1(i.from||r,i.default,!0):s=W1(i.from||r):s=W1(i),N1(s)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:n=>s.value=n}):a[r]=s}}function Y0(c,a,e){E1(I(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function r9(c,a,e,r){const i=r.includes(".")?Q7(e,r):()=>e[r];if(z1(c)){const s=a[c];G(s)&&Q2(i,s)}else if(G(c))Q2(i,c.bind(e));else if(f1(c))if(I(c))c.forEach(s=>r9(s,a,e,r));else{const s=G(c.handler)?c.handler.bind(e):a[c.handler];G(s)&&Q2(i,s,c)}}function u8(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:i,optionsCache:s,config:{optionMergeStrategies:n}}=c.appContext,l=s.get(a);let f;return l?f=l:!i.length&&!e&&!r?f=a:(f={},i.length&&i.forEach(t=>M4(f,t,n,!0)),M4(f,a,n)),f1(a)&&s.set(a,f),f}function M4(c,a,e,r=!1){const{mixins:i,extends:s}=a;s&&M4(c,s,e,!0),i&&i.forEach(n=>M4(c,n,e,!0));for(const n in a)if(!(r&&n==="expose")){const l=om[n]||e&&e[n];c[n]=l?l(c[n],a[n]):a[n]}return c}const om={data:X0,props:Q0,emits:Q0,methods:z3,computed:z3,beforeCreate:d1,created:d1,beforeMount:d1,mounted:d1,beforeUpdate:d1,updated:d1,beforeDestroy:d1,beforeUnmount:d1,destroyed:d1,unmounted:d1,activated:d1,deactivated:d1,errorCaptured:d1,serverPrefetch:d1,components:z3,directives:z3,watch:mm,provide:X0,inject:tm};function X0(c,a){return a?c?function(){return p1(G(c)?c.call(this,this):c,G(a)?a.call(this,this):a)}:a:c}function tm(c,a){return z3(T6(c),T6(a))}function T6(c){if(I(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function d1(c,a){return c?[...new Set([].concat(c,a))]:a}function z3(c,a){return c?p1(Object.create(null),c,a):a}function Q0(c,a){return c?I(c)&&I(a)?[...new Set([...c,...a])]:p1(Object.create(null),K0(c),K0(a??{})):a}function mm(c,a){if(!c)return a;if(!a)return c;const e=p1(Object.create(null),c);for(const r in a)e[r]=d1(c[r],a[r]);return e}function i9(){return{app:null,config:{isNativeTag:Zo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zm=0;function vm(c,a){return function(r,i=null){G(r)||(r=p1({},r)),i!=null&&!f1(i)&&(i=null);const s=i9(),n=new WeakSet;let l=!1;const f=s.app={_uid:zm++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:qm,get config(){return s.config},set config(t){},use(t,...o){return n.has(t)||(t&&G(t.install)?(n.add(t),t.install(f,...o)):G(t)&&(n.add(t),t(f,...o))),f},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),f},component(t,o){return o?(s.components[t]=o,f):s.components[t]},directive(t,o){return o?(s.directives[t]=o,f):s.directives[t]},mount(t,o,z){if(!l){const h=e1(r,i);return h.appContext=s,z===!0?z="svg":z===!1&&(z=void 0),o&&a?a(h,t):c(h,t,z),l=!0,f._container=t,t.__vue_app__=f,M8(h.component)||h.component.proxy}},unmount(){l&&(c(null,f._container),delete f._container.__vue_app__)},provide(t,o){return s.provides[t]=o,f},runWithContext(t){const o=u3;u3=f;try{return t()}finally{u3=o}}};return f}}let u3=null;function f4(c,a){if(C1){let e=C1.provides;const r=C1.parent&&C1.parent.provides;r===e&&(e=C1.provides=Object.create(r)),e[c]=a}}function W1(c,a,e=!1){const r=C1||F1;if(r||u3){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:u3._context.provides;if(i&&c in i)return i[c];if(arguments.length>1)return e&&G(a)?a.call(r&&r.proxy):a}}function hm(c,a,e,r=!1){const i={},s={};H4(s,E4,1),c.propsDefaults=Object.create(null),s9(c,a,i,s);for(const n in c.propsOptions[0])n in i||(i[n]=void 0);e?c.props=r?i:R7(i):c.type.props?c.props=i:c.props=s,c.attrs=s}function Hm(c,a,e,r){const{props:i,attrs:s,vnode:{patchFlag:n}}=c,l=Z(i),[f]=c.propsOptions;let t=!1;if((r||n>0)&&!(n&16)){if(n&8){const o=c.vnode.dynamicProps;for(let z=0;z<o.length;z++){let h=o[z];if(F4(c.emitsOptions,h))continue;const u=a[h];if(f)if(j(s,h))u!==s[h]&&(s[h]=u,t=!0);else{const N=j1(h);i[N]=F6(f,l,N,u,c,!1)}else u!==s[h]&&(s[h]=u,t=!0)}}}else{s9(c,a,i,s)&&(t=!0);let o;for(const z in l)(!a||!j(a,z)&&((o=n3(z))===z||!j(a,o)))&&(f?e&&(e[z]!==void 0||e[o]!==void 0)&&(i[z]=F6(f,l,z,void 0,c,!0)):delete i[z]);if(s!==l)for(const z in s)(!a||!j(a,z))&&(delete s[z],t=!0)}t&&J1(c,"set","$attrs")}function s9(c,a,e,r){const[i,s]=c.propsOptions;let n=!1,l;if(a)for(let f in a){if(h3(f))continue;const t=a[f];let o;i&&j(i,o=j1(f))?!s||!s.includes(o)?e[o]=t:(l||(l={}))[o]=t:F4(c.emitsOptions,f)||(!(f in r)||t!==r[f])&&(r[f]=t,n=!0)}if(s){const f=Z(e),t=l||l1;for(let o=0;o<s.length;o++){const z=s[o];e[z]=F6(i,f,z,t[z],c,!j(t,z))}}return n}function F6(c,a,e,r,i,s){const n=c[e];if(n!=null){const l=j(n,"default");if(l&&r===void 0){const f=n.default;if(n.type!==Function&&!n.skipFactory&&G(f)){const{propsDefaults:t}=i;if(e in t)r=t[e];else{const o=F3(i);r=t[e]=f.call(null,a),o()}}else r=f}n[0]&&(s&&!l?r=!1:n[1]&&(r===""||r===n3(e))&&(r=!0))}return r}function n9(c,a,e=!1){const r=a.propsCache,i=r.get(c);if(i)return i;const s=c.props,n={},l=[];let f=!1;if(!G(c)){const o=z=>{f=!0;const[h,u]=n9(z,a,!0);p1(n,h),u&&l.push(...u)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!s&&!f)return f1(c)&&r.set(c,Z2),Z2;if(I(s))for(let o=0;o<s.length;o++){const z=j1(s[o]);J0(z)&&(n[z]=l1)}else if(s)for(const o in s){const z=j1(o);if(J0(z)){const h=s[o],u=n[z]=I(h)||G(h)?{type:h}:p1({},h);if(u){const N=e5(Boolean,u.type),A=e5(String,u.type);u[0]=N>-1,u[1]=A<0||N<A,(N>-1||j(u,"default"))&&l.push(z)}}}const t=[n,l];return f1(c)&&r.set(c,t),t}function J0(c){return c[0]!=="$"&&!h3(c)}function c5(c){return c===null?"null":typeof c=="function"?c.name||"":typeof c=="object"&&c.constructor&&c.constructor.name||""}function a5(c,a){return c5(c)===c5(a)}function e5(c,a){return I(a)?a.findIndex(e=>a5(e,c)):G(a)&&a5(a,c)?0:-1}const l9=c=>c[0]==="_"||c==="$stable",p8=c=>I(c)?c.map(U1):[U1(c)],um=(c,a,e)=>{if(a._n)return a;const r=N2((...i)=>p8(a(...i)),e);return r._c=!1,r},f9=(c,a,e)=>{const r=c._ctx;for(const i in c){if(l9(i))continue;const s=c[i];if(G(s))a[i]=um(i,s,r);else if(s!=null){const n=p8(s);a[i]=()=>n}}},o9=(c,a)=>{const e=p8(a);c.slots.default=()=>e},pm=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=Z(a),H4(a,"_",e)):f9(a,c.slots={})}else c.slots={},a&&o9(c,a);H4(c.slots,E4,1)},Vm=(c,a,e)=>{const{vnode:r,slots:i}=c;let s=!0,n=l1;if(r.shapeFlag&32){const l=a._;l?e&&l===1?s=!1:(p1(i,a),!e&&l===1&&delete i._):(s=!a.$stable,f9(a,i)),n=a}else a&&(o9(c,a),n={default:1});if(s)for(const l in i)!l9(l)&&n[l]==null&&delete i[l]};function R6(c,a,e,r,i=!1){if(I(c)){c.forEach((h,u)=>R6(h,a&&(I(a)?a[u]:a),e,r,i));return}if(l4(r)&&!i)return;const s=r.shapeFlag&4?M8(r.component)||r.component.proxy:r.el,n=i?null:s,{i:l,r:f}=c,t=a&&a.r,o=l.refs===l1?l.refs={}:l.refs,z=l.setupState;if(t!=null&&t!==f&&(z1(t)?(o[t]=null,j(z,t)&&(z[t]=null)):N1(t)&&(t.value=null)),G(f))u2(f,l,12,[n,o]);else{const h=z1(f),u=N1(f);if(h||u){const N=()=>{if(c.f){const A=h?j(z,f)?z[f]:o[f]:f.value;i?I(A)&&e8(A,s):I(A)?A.includes(s)||A.push(s):h?(o[f]=[s],j(z,f)&&(z[f]=o[f])):(f.value=[s],c.k&&(o[c.k]=f.value))}else h?(o[f]=n,j(z,f)&&(z[f]=n)):u&&(f.value=n,c.k&&(o[c.k]=n))};n?(N.id=-1,b1(N,e)):N()}}}const b1=Gt;function Mm(c){return Cm(c)}function Cm(c,a){const e=C7();e.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:n,createText:l,createComment:f,setText:t,setElementText:o,parentNode:z,nextSibling:h,setScopeId:u=A1,insertStaticContent:N}=c,A=(m,v,H,C=null,V=null,x=null,k=void 0,b=null,S=!!v.dynamicChildren)=>{if(m===v)return;m&&!t3(m,v)&&(C=M(m),L1(m,V,x,!0),m=null),v.patchFlag===-2&&(S=!1,v.dynamicChildren=null);const{type:L,ref:F,shapeFlag:D}=v;switch(L){case B4:R(m,v,H,C);break;case R2:p(m,v,H,C);break;case o4:m==null&&d(v,H,C,k);break;case Y1:L2(m,v,H,C,V,x,k,b,S);break;default:D&1?O(m,v,H,C,V,x,k,b,S):D&6?q1(m,v,H,C,V,x,k,b,S):(D&64||D&128)&&L.process(m,v,H,C,V,x,k,b,S,E)}F!=null&&V&&R6(F,m&&m.ref,x,v||m,!v)},R=(m,v,H,C)=>{if(m==null)r(v.el=l(v.children),H,C);else{const V=v.el=m.el;v.children!==m.children&&t(V,v.children)}},p=(m,v,H,C)=>{m==null?r(v.el=f(v.children||""),H,C):v.el=m.el},d=(m,v,H,C)=>{[m.el,m.anchor]=N(m.children,v,H,C,m.el,m.anchor)},y=({el:m,anchor:v},H,C)=>{let V;for(;m&&m!==v;)V=h(m),r(m,H,C),m=V;r(v,H,C)},_=({el:m,anchor:v})=>{let H;for(;m&&m!==v;)H=h(m),i(m),m=H;i(v)},O=(m,v,H,C,V,x,k,b,S)=>{v.type==="svg"?k="svg":v.type==="math"&&(k="mathml"),m==null?g(v,H,C,V,x,k,b,S):o1(m,v,V,x,k,b,S)},g=(m,v,H,C,V,x,k,b)=>{let S,L;const{props:F,shapeFlag:D,transition:q,dirs:U}=m;if(S=m.el=n(m.type,x,F&&F.is,F),D&8?o(S,m.children):D&16&&J(m.children,S,null,C,V,z6(m,x),k,b),U&&g2(m,null,C,"created"),$(S,m,m.scopeId,k,C),F){for(const a1 in F)a1!=="value"&&!h3(a1)&&s(S,a1,null,F[a1],x,m.children,C,V,V1);"value"in F&&s(S,"value",null,F.value,x),(L=F.onVnodeBeforeMount)&&$1(L,C,m)}U&&g2(m,null,C,"beforeMount");const W=dm(V,q);W&&q.beforeEnter(S),r(S,v,H),((L=F&&F.onVnodeMounted)||W||U)&&b1(()=>{L&&$1(L,C,m),W&&q.enter(S),U&&g2(m,null,C,"mounted")},V)},$=(m,v,H,C,V)=>{if(H&&u(m,H),C)for(let x=0;x<C.length;x++)u(m,C[x]);if(V){let x=V.subTree;if(v===x){const k=V.vnode;$(m,k,k.scopeId,k.slotScopeIds,V.parent)}}},J=(m,v,H,C,V,x,k,b,S=0)=>{for(let L=S;L<m.length;L++){const F=m[L]=b?m2(m[L]):U1(m[L]);A(null,F,v,H,C,V,x,k,b)}},o1=(m,v,H,C,V,x,k)=>{const b=v.el=m.el;let{patchFlag:S,dynamicChildren:L,dirs:F}=v;S|=m.patchFlag&16;const D=m.props||l1,q=v.props||l1;let U;if(H&&b2(H,!1),(U=q.onVnodeBeforeUpdate)&&$1(U,H,v,m),F&&g2(v,m,H,"beforeUpdate"),H&&b2(H,!0),L?k1(m.dynamicChildren,L,b,H,C,z6(v,V),x):k||K(m,v,b,null,H,C,z6(v,V),x,!1),S>0){if(S&16)s2(b,v,D,q,H,C,V);else if(S&2&&D.class!==q.class&&s(b,"class",null,q.class,V),S&4&&s(b,"style",D.style,q.style,V),S&8){const W=v.dynamicProps;for(let a1=0;a1<W.length;a1++){const n1=W[a1],H1=D[n1],P1=q[n1];(P1!==H1||n1==="value")&&s(b,n1,H1,P1,V,m.children,H,C,V1)}}S&1&&m.children!==v.children&&o(b,v.children)}else!k&&L==null&&s2(b,v,D,q,H,C,V);((U=q.onVnodeUpdated)||F)&&b1(()=>{U&&$1(U,H,v,m),F&&g2(v,m,H,"updated")},C)},k1=(m,v,H,C,V,x,k)=>{for(let b=0;b<v.length;b++){const S=m[b],L=v[b],F=S.el&&(S.type===Y1||!t3(S,L)||S.shapeFlag&70)?z(S.el):H;A(S,L,F,null,C,V,x,k,!0)}},s2=(m,v,H,C,V,x,k)=>{if(H!==C){if(H!==l1)for(const b in H)!h3(b)&&!(b in C)&&s(m,b,H[b],null,k,v.children,V,x,V1);for(const b in C){if(h3(b))continue;const S=C[b],L=H[b];S!==L&&b!=="value"&&s(m,b,L,S,k,v.children,V,x,V1)}"value"in C&&s(m,"value",H.value,C.value,k)}},L2=(m,v,H,C,V,x,k,b,S)=>{const L=v.el=m?m.el:l(""),F=v.anchor=m?m.anchor:l("");let{patchFlag:D,dynamicChildren:q,slotScopeIds:U}=v;U&&(b=b?b.concat(U):U),m==null?(r(L,H,C),r(F,H,C),J(v.children||[],H,F,V,x,k,b,S)):D>0&&D&64&&q&&m.dynamicChildren?(k1(m.dynamicChildren,q,H,V,x,k,b),(v.key!=null||V&&v===V.subTree)&&t9(m,v,!0)):K(m,v,H,F,V,x,k,b,S)},q1=(m,v,H,C,V,x,k,b,S)=>{v.slotScopeIds=b,m==null?v.shapeFlag&512?V.ctx.activate(v,H,C,k,S):f3(v,H,C,V,x,k,S):D2(m,v,S)},f3=(m,v,H,C,V,x,k)=>{const b=m.component=Pm(m,C,V);if(J7(m)&&(b.ctx.renderer=E),Tm(b),b.asyncDep){if(V&&V.registerDep(b,h1),!m.el){const S=b.subTree=e1(R2);p(null,S,v,H)}}else h1(b,m,v,H,V,x,k)},D2=(m,v,H)=>{const C=v.component=m.component;if(Dt(m,v,H))if(C.asyncDep&&!C.asyncResolved){c1(C,v,H);return}else C.next=v,Ft(C.update),C.effect.dirty=!0,C.update();else v.el=m.el,C.vnode=v},h1=(m,v,H,C,V,x,k)=>{const b=()=>{if(m.isMounted){let{next:F,bu:D,u:q,parent:U,vnode:W}=m;{const U2=m9(m);if(U2){F&&(F.el=W.el,c1(m,F,k)),U2.asyncDep.then(()=>{m.isUnmounted||b()});return}}let a1=F,n1;b2(m,!1),F?(F.el=W.el,c1(m,F,k)):F=W,D&&f6(D),(n1=F.props&&F.props.onVnodeBeforeUpdate)&&$1(n1,U,F,W),b2(m,!0);const H1=t6(m),P1=m.subTree;m.subTree=H1,A(P1,H1,z(P1.el),M(P1),m,V,x),F.el=H1.el,a1===null&&Ot(m,H1.el),q&&b1(q,V),(n1=F.props&&F.props.onVnodeUpdated)&&b1(()=>$1(n1,U,F,W),V)}else{let F;const{el:D,props:q}=v,{bm:U,m:W,parent:a1}=m,n1=l4(v);if(b2(m,!1),U&&f6(U),!n1&&(F=q&&q.onVnodeBeforeMount)&&$1(F,a1,v),b2(m,!0),D&&s1){const H1=()=>{m.subTree=t6(m),s1(D,m.subTree,m,V,null)};n1?v.type.__asyncLoader().then(()=>!m.isUnmounted&&H1()):H1()}else{const H1=m.subTree=t6(m);A(null,H1,H,C,m,V,x),v.el=H1.el}if(W&&b1(W,V),!n1&&(F=q&&q.onVnodeMounted)){const H1=v;b1(()=>$1(F,a1,H1),V)}(v.shapeFlag&256||a1&&l4(a1.vnode)&&a1.vnode.shapeFlag&256)&&m.a&&b1(m.a,V),m.isMounted=!0,v=H=C=null}},S=m.effect=new s8(b,A1,()=>h8(L),m.scope),L=m.update=()=>{S.dirty&&S.run()};L.id=m.uid,b2(m,!0),L()},c1=(m,v,H)=>{v.component=m;const C=m.vnode.props;m.vnode=v,m.next=null,Hm(m,v.props,C,H),Vm(m,v.children,H),_2(),W0(m),q2()},K=(m,v,H,C,V,x,k,b,S=!1)=>{const L=m&&m.children,F=m?m.shapeFlag:0,D=v.children,{patchFlag:q,shapeFlag:U}=v;if(q>0){if(q&128){n2(L,D,H,C,V,x,k,b,S);return}else if(q&256){Z1(L,D,H,C,V,x,k,b,S);return}}U&8?(F&16&&V1(L,V,x),D!==L&&o(H,D)):F&16?U&16?n2(L,D,H,C,V,x,k,b,S):V1(L,V,x,!0):(F&8&&o(H,""),U&16&&J(D,H,C,V,x,k,b,S))},Z1=(m,v,H,C,V,x,k,b,S)=>{m=m||Z2,v=v||Z2;const L=m.length,F=v.length,D=Math.min(L,F);let q;for(q=0;q<D;q++){const U=v[q]=S?m2(v[q]):U1(v[q]);A(m[q],U,H,null,V,x,k,b,S)}L>F?V1(m,V,x,!0,!1,D):J(v,H,C,V,x,k,b,S,D)},n2=(m,v,H,C,V,x,k,b,S)=>{let L=0;const F=v.length;let D=m.length-1,q=F-1;for(;L<=D&&L<=q;){const U=m[L],W=v[L]=S?m2(v[L]):U1(v[L]);if(t3(U,W))A(U,W,H,null,V,x,k,b,S);else break;L++}for(;L<=D&&L<=q;){const U=m[D],W=v[q]=S?m2(v[q]):U1(v[q]);if(t3(U,W))A(U,W,H,null,V,x,k,b,S);else break;D--,q--}if(L>D){if(L<=q){const U=q+1,W=U<F?v[U].el:C;for(;L<=q;)A(null,v[L]=S?m2(v[L]):U1(v[L]),H,W,V,x,k,b,S),L++}}else if(L>q)for(;L<=D;)L1(m[L],V,x,!0),L++;else{const U=L,W=L,a1=new Map;for(L=W;L<=q;L++){const S1=v[L]=S?m2(v[L]):U1(v[L]);S1.key!=null&&a1.set(S1.key,L)}let n1,H1=0;const P1=q-W+1;let U2=!1,R0=0;const o3=new Array(P1);for(L=0;L<P1;L++)o3[L]=0;for(L=U;L<=D;L++){const S1=m[L];if(H1>=P1){L1(S1,V,x,!0);continue}let O1;if(S1.key!=null)O1=a1.get(S1.key);else for(n1=W;n1<=q;n1++)if(o3[n1-W]===0&&t3(S1,v[n1])){O1=n1;break}O1===void 0?L1(S1,V,x,!0):(o3[O1-W]=L+1,O1>=R0?R0=O1:U2=!0,A(S1,v[O1],H,null,V,x,k,b,S),H1++)}const B0=U2?Lm(o3):Z2;for(n1=B0.length-1,L=P1-1;L>=0;L--){const S1=W+L,O1=v[S1],E0=S1+1<F?v[S1+1].el:C;o3[L]===0?A(null,O1,H,E0,V,x,k,b,S):U2&&(n1<0||L!==B0[n1]?D1(O1,H,E0,2):n1--)}}},D1=(m,v,H,C,V=null)=>{const{el:x,type:k,transition:b,children:S,shapeFlag:L}=m;if(L&6){D1(m.component.subTree,v,H,C);return}if(L&128){m.suspense.move(v,H,C);return}if(L&64){k.move(m,v,H,E);return}if(k===Y1){r(x,v,H);for(let D=0;D<S.length;D++)D1(S[D],v,H,C);r(m.anchor,v,H);return}if(k===o4){y(m,v,H);return}if(C!==2&&L&1&&b)if(C===0)b.beforeEnter(x),r(x,v,H),b1(()=>b.enter(x),V);else{const{leave:D,delayLeave:q,afterLeave:U}=b,W=()=>r(x,v,H),a1=()=>{D(x,()=>{W(),U&&U()})};q?q(x,W,a1):a1()}else r(x,v,H)},L1=(m,v,H,C=!1,V=!1)=>{const{type:x,props:k,ref:b,children:S,dynamicChildren:L,shapeFlag:F,patchFlag:D,dirs:q}=m;if(b!=null&&R6(b,null,H,m,!0),F&256){v.ctx.deactivate(m);return}const U=F&1&&q,W=!l4(m);let a1;if(W&&(a1=k&&k.onVnodeBeforeUnmount)&&$1(a1,v,m),F&6)U3(m.component,H,C);else{if(F&128){m.suspense.unmount(H,C);return}U&&g2(m,null,v,"beforeUnmount"),F&64?m.type.remove(m,v,H,V,E,C):L&&(x!==Y1||D>0&&D&64)?V1(L,v,H,!1,!0):(x===Y1&&D&384||!V&&F&16)&&V1(S,v,H),C&&O2(m)}(W&&(a1=k&&k.onVnodeUnmounted)||U)&&b1(()=>{a1&&$1(a1,v,m),U&&g2(m,null,v,"unmounted")},H)},O2=m=>{const{type:v,el:H,anchor:C,transition:V}=m;if(v===Y1){$2(H,C);return}if(v===o4){_(m);return}const x=()=>{i(H),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(m.shapeFlag&1&&V&&!V.persisted){const{leave:k,delayLeave:b}=V,S=()=>k(H,x);b?b(m.el,x,S):S()}else x()},$2=(m,v)=>{let H;for(;m!==v;)H=h(m),i(m),m=H;i(v)},U3=(m,v,H)=>{const{bum:C,scope:V,update:x,subTree:k,um:b}=m;C&&f6(C),V.stop(),x&&(x.active=!1,L1(k,m,v,H)),b&&b1(b,v),b1(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},V1=(m,v,H,C=!1,V=!1,x=0)=>{for(let k=x;k<m.length;k++)L1(m[k],v,H,C,V)},M=m=>m.shapeFlag&6?M(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el);let T=!1;const w=(m,v,H)=>{m==null?v._vnode&&L1(v._vnode,null,null,!0):A(v._vnode||null,m,v,null,null,null,H),T||(T=!0,W0(),G7(),T=!1),v._vnode=m},E={p:A,um:L1,m:D1,r:O2,mt:f3,mc:J,pc:K,pbc:k1,n:M,o:c};let Y,s1;return a&&([Y,s1]=a(E)),{render:w,hydrate:Y,createApp:vm(w,Y)}}function z6({type:c,props:a},e){return e==="svg"&&c==="foreignObject"||e==="mathml"&&c==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:e}function b2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function dm(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function t9(c,a,e=!1){const r=c.children,i=a.children;if(I(r)&&I(i))for(let s=0;s<r.length;s++){const n=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=m2(i[s]),l.el=n.el),e||t9(n,l)),l.type===B4&&(l.el=n.el)}}function Lm(c){const a=c.slice(),e=[0];let r,i,s,n,l;const f=c.length;for(r=0;r<f;r++){const t=c[r];if(t!==0){if(i=e[e.length-1],c[i]<t){a[r]=i,e.push(r);continue}for(s=0,n=e.length-1;s<n;)l=s+n>>1,c[e[l]]<t?s=l+1:n=l;t<c[e[s]]&&(s>0&&(a[r]=e[s-1]),e[s]=r)}}for(s=e.length,n=e[s-1];s-- >0;)e[s]=n,n=a[n];return e}function m9(c){const a=c.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:m9(a)}const gm=c=>c.__isTeleport,Y1=Symbol.for("v-fgt"),B4=Symbol.for("v-txt"),R2=Symbol.for("v-cmt"),o4=Symbol.for("v-stc"),p3=[];let R1=null;function x3(c=!1){p3.push(R1=c?null:[])}function bm(){p3.pop(),R1=p3[p3.length-1]||null}let N3=1;function r5(c){N3+=c}function z9(c){return c.dynamicChildren=N3>0?R1||Z2:null,bm(),N3>0&&R1&&R1.push(c),c}function C4(c,a,e,r,i,s){return z9(Q(c,a,e,r,i,s,!0))}function xm(c,a,e,r,i){return z9(e1(c,a,e,r,i,!0))}function B6(c){return c?c.__v_isVNode===!0:!1}function t3(c,a){return c.type===a.type&&c.key===a.key}const E4="__vInternal",v9=({key:c})=>c??null,t4=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?z1(c)||N1(c)||G(c)?{i:F1,r:c,k:a,f:!!e}:c:null);function Q(c,a=null,e=null,r=0,i=null,s=c===Y1?0:1,n=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&v9(a),ref:a&&t4(a),scopeId:Z7,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:F1};return l?(V8(f,e),s&128&&c.normalize(f)):e&&(f.shapeFlag|=z1(e)?8:16),N3>0&&!n&&R1&&(f.patchFlag>0||s&6)&&f.patchFlag!==32&&R1.push(f),f}const e1=Nm;function Nm(c,a=null,e=null,r=0,i=null,s=!1){if((!c||c===$t)&&(c=R2),B6(c)){const l=a3(c,a,!0);return e&&V8(l,e),N3>0&&!s&&R1&&(l.shapeFlag&6?R1[R1.indexOf(c)]=l:R1.push(l)),l.patchFlag|=-2,l}if(_m(c)&&(c=c.__vccOpts),a){a=Sm(a);let{class:l,style:f}=a;l&&!z1(l)&&(a.class=w2(l)),f1(f)&&(E7(f)&&!I(f)&&(f=p1({},f)),a.style=i8(f))}const n=z1(c)?1:It(c)?128:gm(c)?64:f1(c)?4:G(c)?2:0;return Q(c,a,e,r,i,n,s,!0)}function Sm(c){return c?E7(c)||E4 in c?p1({},c):c:null}function a3(c,a,e=!1){const{props:r,ref:i,patchFlag:s,children:n}=c,l=a?wm(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:l,key:l&&v9(l),ref:a&&a.ref?e&&i?I(i)?i.concat(t4(a)):[i,t4(a)]:t4(a):i,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==Y1?s===-1?16:s|16:s,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&a3(c.ssContent),ssFallback:c.ssFallback&&a3(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function F2(c=" ",a=0){return e1(B4,null,c,a)}function S31(c,a){const e=e1(o4,null,c);return e.staticCount=a,e}function ym(c="",a=!1){return a?(x3(),xm(R2,null,c)):e1(R2,null,c)}function U1(c){return c==null||typeof c=="boolean"?e1(R2):I(c)?e1(Y1,null,c.slice()):typeof c=="object"?m2(c):e1(B4,null,String(c))}function m2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:a3(c)}function V8(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(I(a))e=16;else if(typeof a=="object")if(r&65){const i=a.default;i&&(i._c&&(i._d=!1),V8(c,i()),i._c&&(i._d=!0));return}else{e=32;const i=a._;!i&&!(E4 in a)?a._ctx=F1:i===3&&F1&&(F1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else G(a)?(a={default:a,_ctx:F1},e=32):(a=String(a),r&64?(e=16,a=[F2(a)]):e=8);c.children=a,c.shapeFlag|=e}function wm(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const i in r)if(i==="class")a.class!==r.class&&(a.class=w2([a.class,r.class]));else if(i==="style")a.style=i8([a.style,r.style]);else if(S4(i)){const s=a[i],n=r[i];n&&s!==n&&!(I(s)&&s.includes(n))&&(a[i]=s?[].concat(s,n):n)}else i!==""&&(a[i]=r[i])}return a}function $1(c,a,e,r=null){E1(c,a,7,[e,r])}const km=i9();let Am=0;function Pm(c,a,e){const r=c.type,i=(a?a.appContext:c.appContext)||km,s={uid:Am++,vnode:c,type:r,parent:a,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new g7(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:n9(r,i),emitsOptions:j7(r,i),emit:null,emitted:null,propsDefaults:l1,inheritAttrs:r.inheritAttrs,ctx:l1,data:l1,props:l1,attrs:l1,slots:l1,refs:l1,setupState:l1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=Et.bind(null,s),c.ce&&c.ce(s),s}let C1=null,d4,E6;{const c=C7(),a=(e,r)=>{let i;return(i=c[e])||(i=c[e]=[]),i.push(r),s=>{i.length>1?i.forEach(n=>n(s)):i[0](s)}};d4=a("__VUE_INSTANCE_SETTERS__",e=>C1=e),E6=a("__VUE_SSR_SETTERS__",e=>_4=e)}const F3=c=>{const a=C1;return d4(c),c.scope.on(),()=>{c.scope.off(),d4(a)}},i5=()=>{C1&&C1.scope.off(),d4(null)};function h9(c){return c.vnode.shapeFlag&4}let _4=!1;function Tm(c,a=!1){a&&E6(a);const{props:e,children:r}=c.vnode,i=h9(c);hm(c,e,i,a),pm(c,r);const s=i?Fm(c,a):void 0;return a&&E6(!1),s}function Fm(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=m8(new Proxy(c.ctx,nm));const{setup:r}=e;if(r){const i=c.setupContext=r.length>1?Bm(c):null,s=F3(c);_2();const n=u2(r,c,0,[c.props,i]);if(q2(),s(),p7(n)){if(n.then(i5,i5),a)return n.then(l=>{s5(c,l,a)}).catch(l=>{T4(l,c,0)});c.asyncDep=n}else s5(c,n,a)}else H9(c,a)}function s5(c,a,e){G(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:f1(a)&&(c.setupState=O7(a)),H9(c,e)}let n5;function H9(c,a,e){const r=c.type;if(!c.render){if(!a&&n5&&!r.render){const i=r.template||u8(c).template;if(i){const{isCustomElement:s,compilerOptions:n}=c.appContext.config,{delimiters:l,compilerOptions:f}=r,t=p1(p1({isCustomElement:s,delimiters:l},n),f);r.render=n5(i,t)}}c.render=r.render||A1}{const i=F3(c);_2();try{lm(c)}finally{q2(),i()}}}function Rm(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return x1(c,"get","$attrs"),a[e]}}))}function Bm(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return Rm(c)},slots:c.slots,emit:c.emit,expose:a}}function M8(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(O7(m8(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in H3)return H3[e](c)},has(a,e){return e in a||e in H3}}))}function Em(c,a=!0){return G(c)?c.displayName||c.name:c.name||a&&c.__name}function _m(c){return G(c)&&"__vccOpts"in c}const u1=(c,a)=>yt(c,a,_4);function C8(c,a,e){const r=arguments.length;return r===2?f1(a)&&!I(a)?B6(a)?e1(c,null,[a]):e1(c,a):e1(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&B6(e)&&(e=[e]),e1(c,a,e))}const qm="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Dm="http://www.w3.org/2000/svg",Om="http://www.w3.org/1998/Math/MathML",z2=typeof document<"u"?document:null,l5=z2&&z2.createElement("template"),$m={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const i=a==="svg"?z2.createElementNS(Dm,c):a==="mathml"?z2.createElementNS(Om,c):z2.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:c=>z2.createTextNode(c),createComment:c=>z2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>z2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,i,s){const n=e?e.previousSibling:a.lastChild;if(i&&(i===s||i.nextSibling))for(;a.insertBefore(i.cloneNode(!0),e),!(i===s||!(i=i.nextSibling)););else{l5.innerHTML=r==="svg"?`<svg>${c}</svg>`:r==="mathml"?`<math>${c}</math>`:c;const l=l5.content;if(r==="svg"||r==="mathml"){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}a.insertBefore(l,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},Um=Symbol("_vtc");function Im(c,a,e){const r=c[Um];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const f5=Symbol("_vod"),Gm=Symbol("_vsh"),Wm=Symbol(""),jm=/(^|;)\s*display\s*:/;function Zm(c,a,e){const r=c.style,i=z1(e);let s=!1;if(e&&!i){if(a)if(z1(a))for(const n of a.split(";")){const l=n.slice(0,n.indexOf(":")).trim();e[l]==null&&m4(r,l,"")}else for(const n in a)e[n]==null&&m4(r,n,"");for(const n in e)n==="display"&&(s=!0),m4(r,n,e[n])}else if(i){if(a!==e){const n=r[Wm];n&&(e+=";"+n),r.cssText=e,s=jm.test(e)}}else a&&c.removeAttribute("style");f5 in c&&(c[f5]=s?r.display:"",c[Gm]&&(r.display="none"))}const o5=/\s*!important$/;function m4(c,a,e){if(I(e))e.forEach(r=>m4(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=Km(c,a);o5.test(e)?c.setProperty(n3(r),e.replace(o5,""),"important"):c[r]=e}}const t5=["Webkit","Moz","ms"],v6={};function Km(c,a){const e=v6[a];if(e)return e;let r=j1(a);if(r!=="filter"&&r in c)return v6[a]=r;r=k4(r);for(let i=0;i<t5.length;i++){const s=t5[i]+r;if(s in c)return v6[a]=s}return a}const m5="http://www.w3.org/1999/xlink";function Ym(c,a,e,r,i){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(m5,a.slice(6,a.length)):c.setAttributeNS(m5,a,e);else{const s=st(a);e==null||s&&!d7(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function Xm(c,a,e,r,i,s,n){if(a==="innerHTML"||a==="textContent"){r&&n(r,i,s),c[a]=e??"";return}const l=c.tagName;if(a==="value"&&l!=="PROGRESS"&&!l.includes("-")){const t=l==="OPTION"?c.getAttribute("value")||"":c.value,o=e??"";(t!==o||!("_value"in c))&&(c.value=o),e==null&&c.removeAttribute(a),c._value=e;return}let f=!1;if(e===""||e==null){const t=typeof c[a];t==="boolean"?e=d7(e):e==null&&t==="string"?(e="",f=!0):t==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function Qm(c,a,e,r){c.addEventListener(a,e,r)}function Jm(c,a,e,r){c.removeEventListener(a,e,r)}const z5=Symbol("_vei");function cz(c,a,e,r,i=null){const s=c[z5]||(c[z5]={}),n=s[a];if(r&&n)n.value=r;else{const[l,f]=az(a);if(r){const t=s[a]=iz(r,i);Qm(c,l,t,f)}else n&&(Jm(c,l,n,f),s[a]=void 0)}}const v5=/(?:Once|Passive|Capture)$/;function az(c){let a;if(v5.test(c)){a={};let r;for(;r=c.match(v5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):n3(c.slice(2)),a]}let h6=0;const ez=Promise.resolve(),rz=()=>h6||(ez.then(()=>h6=0),h6=Date.now());function iz(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;E1(sz(r,e.value),a,5,[r])};return e.value=c,e.attached=rz(),e}function sz(c,a){if(I(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>i=>!i._stopped&&r&&r(i))}else return a}const h5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,nz=(c,a,e,r,i,s,n,l,f)=>{const t=i==="svg";a==="class"?Im(c,r,t):a==="style"?Zm(c,e,r):S4(a)?a8(a)||cz(c,a,e,r,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):lz(c,a,r,t))?Xm(c,a,r,s,n,l,f):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),Ym(c,a,r,t))};function lz(c,a,e,r){if(r)return!!(a==="innerHTML"||a==="textContent"||a in c&&h5(a)&&G(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const i=c.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return h5(a)&&z1(e)?!1:a in c}const fz=["ctrl","shift","alt","meta"],oz={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>fz.some(e=>c[`${e}Key`]&&!a.includes(e))},y31=(c,a)=>{const e=c._withMods||(c._withMods={}),r=a.join(".");return e[r]||(e[r]=(i,...s)=>{for(let n=0;n<a.length;n++){const l=oz[a[n]];if(l&&l(i,a))return}return c(i,...s)})},tz=p1({patchProp:nz},$m);let H5;function mz(){return H5||(H5=Mm(tz))}const zz=(...c)=>{const a=mz().createApp(...c),{mount:e}=a;return a.mount=r=>{const i=hz(r);if(!i)return;const s=a._component;!G(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const n=e(i,!1,vz(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),n},a};function vz(c){if(c instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&c instanceof MathMLElement)return"mathml"}function hz(c){return z1(c)?document.querySelector(c):c}var Hz=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const uz=Symbol();var u5;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(u5||(u5={}));function pz(){const c=nt(!0),a=c.run(()=>p4({}));let e=[],r=[];const i=m8({install(s){i._a=s,s.provide(uz,i),s.config.globalProperties.$pinia=i,r.forEach(n=>e.push(n)),r=[]},use(s){return!this._a&&!Hz?r.push(s):e.push(s),this},_p:e,_a:null,_e:c,_s:new Map,state:a});return i}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const I2=typeof document<"u";function Vz(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const X=Object.assign;function H6(c,a){const e={};for(const r in a){const i=a[r];e[r]=_1(i)?i.map(c):c(i)}return e}const V3=()=>{},_1=Array.isArray,u9=/#/g,Mz=/&/g,Cz=/\//g,dz=/=/g,Lz=/\?/g,p9=/\+/g,gz=/%5B/g,bz=/%5D/g,V9=/%5E/g,xz=/%60/g,M9=/%7B/g,Nz=/%7C/g,C9=/%7D/g,Sz=/%20/g;function d8(c){return encodeURI(""+c).replace(Nz,"|").replace(gz,"[").replace(bz,"]")}function yz(c){return d8(c).replace(M9,"{").replace(C9,"}").replace(V9,"^")}function _6(c){return d8(c).replace(p9,"%2B").replace(Sz,"+").replace(u9,"%23").replace(Mz,"%26").replace(xz,"`").replace(M9,"{").replace(C9,"}").replace(V9,"^")}function wz(c){return _6(c).replace(dz,"%3D")}function kz(c){return d8(c).replace(u9,"%23").replace(Lz,"%3F")}function Az(c){return c==null?"":kz(c).replace(Cz,"%2F")}function S3(c){try{return decodeURIComponent(""+c)}catch{}return""+c}const Pz=/\/$/,Tz=c=>c.replace(Pz,"");function u6(c,a,e="/"){let r,i={},s="",n="";const l=a.indexOf("#");let f=a.indexOf("?");return l<f&&l>=0&&(f=-1),f>-1&&(r=a.slice(0,f),s=a.slice(f+1,l>-1?l:a.length),i=c(s)),l>-1&&(r=r||a.slice(0,l),n=a.slice(l,a.length)),r=Ez(r??a,e),{fullPath:r+(s&&"?")+s+n,path:r,query:i,hash:S3(n)}}function Fz(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function p5(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function Rz(c,a,e){const r=a.matched.length-1,i=e.matched.length-1;return r>-1&&r===i&&e3(a.matched[r],e.matched[i])&&d9(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function e3(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function d9(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!Bz(c[e],a[e]))return!1;return!0}function Bz(c,a){return _1(c)?V5(c,a):_1(a)?V5(a,c):c===a}function V5(c,a){return _1(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function Ez(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=e.length-1,n,l;for(n=0;n<r.length;n++)if(l=r[n],l!==".")if(l==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+r.slice(n).join("/")}var y3;(function(c){c.pop="pop",c.push="push"})(y3||(y3={}));var M3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(M3||(M3={}));function _z(c){if(!c)if(I2){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),Tz(c)}const qz=/^[^#]+#/;function Dz(c,a){return c.replace(qz,"#")+a}function Oz(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const q4=()=>({left:window.scrollX,top:window.scrollY});function $z(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),i=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!i)return;a=Oz(i,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.scrollX,a.top!=null?a.top:window.scrollY)}function M5(c,a){return(history.state?history.state.position-a:-1)+c}const q6=new Map;function Uz(c,a){q6.set(c,a)}function Iz(c){const a=q6.get(c);return q6.delete(c),a}let Gz=()=>location.protocol+"//"+location.host;function L9(c,a){const{pathname:e,search:r,hash:i}=a,s=c.indexOf("#");if(s>-1){let l=i.includes(c.slice(s))?c.slice(s).length:1,f=i.slice(l);return f[0]!=="/"&&(f="/"+f),p5(f,"")}return p5(e,c)+r+i}function Wz(c,a,e,r){let i=[],s=[],n=null;const l=({state:h})=>{const u=L9(c,location),N=e.value,A=a.value;let R=0;if(h){if(e.value=u,a.value=h,n&&n===N){n=null;return}R=A?h.position-A.position:0}else r(u);i.forEach(p=>{p(e.value,N,{delta:R,type:y3.pop,direction:R?R>0?M3.forward:M3.back:M3.unknown})})};function f(){n=e.value}function t(h){i.push(h);const u=()=>{const N=i.indexOf(h);N>-1&&i.splice(N,1)};return s.push(u),u}function o(){const{history:h}=window;h.state&&h.replaceState(X({},h.state,{scroll:q4()}),"")}function z(){for(const h of s)h();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",o,{passive:!0}),{pauseListeners:f,listen:t,destroy:z}}function C5(c,a,e,r=!1,i=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:i?q4():null}}function jz(c){const{history:a,location:e}=window,r={value:L9(c,e)},i={value:a.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function s(f,t,o){const z=c.indexOf("#"),h=z>-1?(e.host&&document.querySelector("base")?c:c.slice(z))+f:Gz()+c+f;try{a[o?"replaceState":"pushState"](t,"",h),i.value=t}catch(u){console.error(u),e[o?"replace":"assign"](h)}}function n(f,t){const o=X({},a.state,C5(i.value.back,f,i.value.forward,!0),t,{position:i.value.position});s(f,o,!0),r.value=f}function l(f,t){const o=X({},i.value,a.state,{forward:f,scroll:q4()});s(o.current,o,!0);const z=X({},C5(r.value,f,null),{position:o.position+1},t);s(f,z,!1),r.value=f}return{location:r,state:i,push:l,replace:n}}function Zz(c){c=_z(c);const a=jz(c),e=Wz(c,a.state,a.location,a.replace);function r(s,n=!0){n||e.pauseListeners(),history.go(s)}const i=X({location:"",base:c,go:r,createHref:Dz.bind(null,c)},a,e);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>a.state.value}),i}function Kz(c){return c=location.host?c||location.pathname+location.search:"",c.includes("#")||(c+="#"),Zz(c)}function Yz(c){return typeof c=="string"||c&&typeof c=="object"}function g9(c){return typeof c=="string"||typeof c=="symbol"}const f2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},b9=Symbol("");var d5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(d5||(d5={}));function r3(c,a){return X(new Error,{type:c,[b9]:!0},a)}function K1(c,a){return c instanceof Error&&b9 in c&&(a==null||!!(c.type&a))}const L5="[^/]+?",Xz={sensitive:!1,strict:!1,start:!0,end:!0},Qz=/[.+*?^${}()[\]/\\]/g;function Jz(c,a){const e=X({},Xz,a),r=[];let i=e.start?"^":"";const s=[];for(const t of c){const o=t.length?[]:[90];e.strict&&!t.length&&(i+="/");for(let z=0;z<t.length;z++){const h=t[z];let u=40+(e.sensitive?.25:0);if(h.type===0)z||(i+="/"),i+=h.value.replace(Qz,"\\$&"),u+=40;else if(h.type===1){const{value:N,repeatable:A,optional:R,regexp:p}=h;s.push({name:N,repeatable:A,optional:R});const d=p||L5;if(d!==L5){u+=10;try{new RegExp(`(${d})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${N}" (${d}): `+_.message)}}let y=A?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;z||(y=R&&t.length<2?`(?:/${y})`:"/"+y),R&&(y+="?"),i+=y,u+=20,R&&(u+=-8),A&&(u+=-20),d===".*"&&(u+=-50)}o.push(u)}r.push(o)}if(e.strict&&e.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}e.strict||(i+="/?"),e.end?i+="$":e.strict&&(i+="(?:/|$)");const n=new RegExp(i,e.sensitive?"":"i");function l(t){const o=t.match(n),z={};if(!o)return null;for(let h=1;h<o.length;h++){const u=o[h]||"",N=s[h-1];z[N.name]=u&&N.repeatable?u.split("/"):u}return z}function f(t){let o="",z=!1;for(const h of c){(!z||!o.endsWith("/"))&&(o+="/"),z=!1;for(const u of h)if(u.type===0)o+=u.value;else if(u.type===1){const{value:N,repeatable:A,optional:R}=u,p=N in t?t[N]:"";if(_1(p)&&!A)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const d=_1(p)?p.join("/"):p;if(!d)if(R)h.length<2&&(o.endsWith("/")?o=o.slice(0,-1):z=!0);else throw new Error(`Missing required param "${N}"`);o+=d}}return o||"/"}return{re:n,score:r,keys:s,parse:l,stringify:f}}function cv(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===80?-1:1:c.length>a.length?a.length===1&&a[0]===80?1:-1:0}function av(c,a){let e=0;const r=c.score,i=a.score;for(;e<r.length&&e<i.length;){const s=cv(r[e],i[e]);if(s)return s;e++}if(Math.abs(i.length-r.length)===1){if(g5(r))return 1;if(g5(i))return-1}return i.length-r.length}function g5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const ev={type:0,value:""},rv=/[a-zA-Z0-9_]/;function iv(c){if(!c)return[[]];if(c==="/")return[[ev]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(u){throw new Error(`ERR (${e})/"${t}": ${u}`)}let e=0,r=e;const i=[];let s;function n(){s&&i.push(s),s=[]}let l=0,f,t="",o="";function z(){t&&(e===0?s.push({type:0,value:t}):e===1||e===2||e===3?(s.length>1&&(f==="*"||f==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:t,regexp:o,repeatable:f==="*"||f==="+",optional:f==="*"||f==="?"})):a("Invalid state to consume buffer"),t="")}function h(){t+=f}for(;l<c.length;){if(f=c[l++],f==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:f==="/"?(t&&z(),n()):f===":"?(z(),e=1):h();break;case 4:h(),e=r;break;case 1:f==="("?e=2:rv.test(f)?h():(z(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&l--);break;case 2:f===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+f:e=3:o+=f;break;case 3:z(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&l--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),z(),n(),i}function sv(c,a,e){const r=Jz(iv(c.path),e),i=X(r,{record:c,parent:a,children:[],alias:[]});return a&&!i.record.aliasOf==!a.record.aliasOf&&a.children.push(i),i}function nv(c,a){const e=[],r=new Map;a=N5({strict:!1,end:!0,sensitive:!1},a);function i(o){return r.get(o)}function s(o,z,h){const u=!h,N=lv(o);N.aliasOf=h&&h.record;const A=N5(a,o),R=[N];if("alias"in o){const y=typeof o.alias=="string"?[o.alias]:o.alias;for(const _ of y)R.push(X({},N,{components:h?h.record.components:N.components,path:_,aliasOf:h?h.record:N}))}let p,d;for(const y of R){const{path:_}=y;if(z&&_[0]!=="/"){const O=z.record.path,g=O[O.length-1]==="/"?"":"/";y.path=z.record.path+(_&&g+_)}if(p=sv(y,z,A),h?h.alias.push(p):(d=d||p,d!==p&&d.alias.push(p),u&&o.name&&!x5(p)&&n(o.name)),N.children){const O=N.children;for(let g=0;g<O.length;g++)s(O[g],p,h&&h.children[g])}h=h||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&f(p)}return d?()=>{n(d)}:V3}function n(o){if(g9(o)){const z=r.get(o);z&&(r.delete(o),e.splice(e.indexOf(z),1),z.children.forEach(n),z.alias.forEach(n))}else{const z=e.indexOf(o);z>-1&&(e.splice(z,1),o.record.name&&r.delete(o.record.name),o.children.forEach(n),o.alias.forEach(n))}}function l(){return e}function f(o){let z=0;for(;z<e.length&&av(o,e[z])>=0&&(o.record.path!==e[z].record.path||!x9(o,e[z]));)z++;e.splice(z,0,o),o.record.name&&!x5(o)&&r.set(o.record.name,o)}function t(o,z){let h,u={},N,A;if("name"in o&&o.name){if(h=r.get(o.name),!h)throw r3(1,{location:o});A=h.record.name,u=X(b5(z.params,h.keys.filter(d=>!d.optional).concat(h.parent?h.parent.keys.filter(d=>d.optional):[]).map(d=>d.name)),o.params&&b5(o.params,h.keys.map(d=>d.name))),N=h.stringify(u)}else if(o.path!=null)N=o.path,h=e.find(d=>d.re.test(N)),h&&(u=h.parse(N),A=h.record.name);else{if(h=z.name?r.get(z.name):e.find(d=>d.re.test(z.path)),!h)throw r3(1,{location:o,currentLocation:z});A=h.record.name,u=X({},z.params,o.params),N=h.stringify(u)}const R=[];let p=h;for(;p;)R.unshift(p.record),p=p.parent;return{name:A,path:N,params:u,matched:R,meta:ov(R)}}return c.forEach(o=>s(o)),{addRoute:s,resolve:t,removeRoute:n,getRoutes:l,getRecordMatcher:i}}function b5(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function lv(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:fv(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function fv(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="object"?e[r]:e;return a}function x5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function ov(c){return c.reduce((a,e)=>X(a,e.meta),{})}function N5(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function x9(c,a){return a.children.some(e=>e===c||x9(c,e))}function tv(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(p9," "),n=s.indexOf("="),l=S3(n<0?s:s.slice(0,n)),f=n<0?null:S3(s.slice(n+1));if(l in a){let t=a[l];_1(t)||(t=a[l]=[t]),t.push(f)}else a[l]=f}return a}function S5(c){let a="";for(let e in c){const r=c[e];if(e=wz(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(_1(r)?r.map(s=>s&&_6(s)):[r&&_6(r)]).forEach(s=>{s!==void 0&&(a+=(a.length?"&":"")+e,s!=null&&(a+="="+s))})}return a}function mv(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=_1(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return a}const zv=Symbol(""),y5=Symbol(""),L8=Symbol(""),g8=Symbol(""),D6=Symbol("");function m3(){let c=[];function a(r){return c.push(r),()=>{const i=c.indexOf(r);i>-1&&c.splice(i,1)}}function e(){c=[]}return{add:a,list:()=>c.slice(),reset:e}}function v2(c,a,e,r,i,s=n=>n()){const n=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,f)=>{const t=h=>{h===!1?f(r3(4,{from:e,to:a})):h instanceof Error?f(h):Yz(h)?f(r3(2,{from:a,to:h})):(n&&r.enterCallbacks[i]===n&&typeof h=="function"&&n.push(h),l())},o=s(()=>c.call(r&&r.instances[i],a,e,t));let z=Promise.resolve(o);c.length<3&&(z=z.then(t)),z.catch(h=>f(h))})}function p6(c,a,e,r,i=s=>s()){const s=[];for(const n of c)for(const l in n.components){let f=n.components[l];if(!(a!=="beforeRouteEnter"&&!n.instances[l]))if(vv(f)){const o=(f.__vccOpts||f)[a];o&&s.push(v2(o,e,r,n,l,i))}else{let t=f();s.push(()=>t.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${n.path}"`));const z=Vz(o)?o.default:o;n.components[l]=z;const u=(z.__vccOpts||z)[a];return u&&v2(u,e,r,n,l,i)()}))}}return s}function vv(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function w5(c){const a=W1(L8),e=W1(g8),r=u1(()=>a.resolve(y1(c.to))),i=u1(()=>{const{matched:f}=r.value,{length:t}=f,o=f[t-1],z=e.matched;if(!o||!z.length)return-1;const h=z.findIndex(e3.bind(null,o));if(h>-1)return h;const u=k5(f[t-2]);return t>1&&k5(o)===u&&z[z.length-1].path!==u?z.findIndex(e3.bind(null,f[t-2])):h}),s=u1(()=>i.value>-1&&uv(e.params,r.value.params)),n=u1(()=>i.value>-1&&i.value===e.matched.length-1&&d9(e.params,r.value.params));function l(f={}){return Hv(f)?a[y1(c.replace)?"replace":"push"](y1(c.to)).catch(V3):Promise.resolve()}return{route:r,href:u1(()=>r.value.href),isActive:s,isExactActive:n,navigate:l}}const hv=H8({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:w5,setup(c,{slots:a}){const e=P4(w5(c)),{options:r}=W1(L8),i=u1(()=>({[A5(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[A5(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=a.default&&a.default(e);return c.custom?s:C8("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:i.value},s)}}}),S2=hv;function Hv(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function uv(c,a){for(const e in a){const r=a[e],i=c[e];if(typeof r=="string"){if(r!==i)return!1}else if(!_1(i)||i.length!==r.length||r.some((s,n)=>s!==i[n]))return!1}return!0}function k5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const A5=(c,a,e)=>c??a??e,pv=H8({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=W1(D6),i=u1(()=>c.route||r.value),s=W1(y5,0),n=u1(()=>{let t=y1(s);const{matched:o}=i.value;let z;for(;(z=o[t])&&!z.components;)t++;return t}),l=u1(()=>i.value.matched[n.value]);f4(y5,u1(()=>n.value+1)),f4(zv,l),f4(D6,i);const f=p4();return Q2(()=>[f.value,l.value,c.name],([t,o,z],[h,u,N])=>{o&&(o.instances[z]=t,u&&u!==o&&t&&t===h&&(o.leaveGuards.size||(o.leaveGuards=u.leaveGuards),o.updateGuards.size||(o.updateGuards=u.updateGuards))),t&&o&&(!u||!e3(o,u)||!h)&&(o.enterCallbacks[z]||[]).forEach(A=>A(t))},{flush:"post"}),()=>{const t=i.value,o=c.name,z=l.value,h=z&&z.components[o];if(!h)return P5(e.default,{Component:h,route:t});const u=z.props[o],N=u?u===!0?t.params:typeof u=="function"?u(t):u:null,R=C8(h,X({},N,a,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(z.instances[o]=null)},ref:f}));return P5(e.default,{Component:R,route:t})||R}}});function P5(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const N9=pv;function Vv(c){const a=nv(c.routes,c),e=c.parseQuery||tv,r=c.stringifyQuery||S5,i=c.history,s=m3(),n=m3(),l=m3(),f=wt(f2);let t=f2;I2&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=H6.bind(null,M=>""+M),z=H6.bind(null,Az),h=H6.bind(null,S3);function u(M,T){let w,E;return g9(M)?(w=a.getRecordMatcher(M),E=T):E=M,a.addRoute(E,w)}function N(M){const T=a.getRecordMatcher(M);T&&a.removeRoute(T)}function A(){return a.getRoutes().map(M=>M.record)}function R(M){return!!a.getRecordMatcher(M)}function p(M,T){if(T=X({},T||f.value),typeof M=="string"){const v=u6(e,M,T.path),H=a.resolve({path:v.path},T),C=i.createHref(v.fullPath);return X(v,H,{params:h(H.params),hash:S3(v.hash),redirectedFrom:void 0,href:C})}let w;if(M.path!=null)w=X({},M,{path:u6(e,M.path,T.path).path});else{const v=X({},M.params);for(const H in v)v[H]==null&&delete v[H];w=X({},M,{params:z(v)}),T.params=z(T.params)}const E=a.resolve(w,T),Y=M.hash||"";E.params=o(h(E.params));const s1=Fz(r,X({},M,{hash:yz(Y),path:E.path})),m=i.createHref(s1);return X({fullPath:s1,hash:Y,query:r===S5?mv(M.query):M.query||{}},E,{redirectedFrom:void 0,href:m})}function d(M){return typeof M=="string"?u6(e,M,f.value.path):X({},M)}function y(M,T){if(t!==M)return r3(8,{from:T,to:M})}function _(M){return $(M)}function O(M){return _(X(d(M),{replace:!0}))}function g(M){const T=M.matched[M.matched.length-1];if(T&&T.redirect){const{redirect:w}=T;let E=typeof w=="function"?w(M):w;return typeof E=="string"&&(E=E.includes("?")||E.includes("#")?E=d(E):{path:E},E.params={}),X({query:M.query,hash:M.hash,params:E.path!=null?{}:M.params},E)}}function $(M,T){const w=t=p(M),E=f.value,Y=M.state,s1=M.force,m=M.replace===!0,v=g(w);if(v)return $(X(d(v),{state:typeof v=="object"?X({},Y,v.state):Y,force:s1,replace:m}),T||w);const H=w;H.redirectedFrom=T;let C;return!s1&&Rz(r,E,w)&&(C=r3(16,{to:H,from:E}),D1(E,E,!0,!1)),(C?Promise.resolve(C):k1(H,E)).catch(V=>K1(V)?K1(V,2)?V:n2(V):K(V,H,E)).then(V=>{if(V){if(K1(V,2))return $(X({replace:m},d(V.to),{state:typeof V.to=="object"?X({},Y,V.to.state):Y,force:s1}),T||H)}else V=L2(H,E,!0,m,Y);return s2(H,E,V),V})}function J(M,T){const w=y(M,T);return w?Promise.reject(w):Promise.resolve()}function o1(M){const T=$2.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(M):M()}function k1(M,T){let w;const[E,Y,s1]=Mv(M,T);w=p6(E.reverse(),"beforeRouteLeave",M,T);for(const v of E)v.leaveGuards.forEach(H=>{w.push(v2(H,M,T))});const m=J.bind(null,M,T);return w.push(m),V1(w).then(()=>{w=[];for(const v of s.list())w.push(v2(v,M,T));return w.push(m),V1(w)}).then(()=>{w=p6(Y,"beforeRouteUpdate",M,T);for(const v of Y)v.updateGuards.forEach(H=>{w.push(v2(H,M,T))});return w.push(m),V1(w)}).then(()=>{w=[];for(const v of s1)if(v.beforeEnter)if(_1(v.beforeEnter))for(const H of v.beforeEnter)w.push(v2(H,M,T));else w.push(v2(v.beforeEnter,M,T));return w.push(m),V1(w)}).then(()=>(M.matched.forEach(v=>v.enterCallbacks={}),w=p6(s1,"beforeRouteEnter",M,T,o1),w.push(m),V1(w))).then(()=>{w=[];for(const v of n.list())w.push(v2(v,M,T));return w.push(m),V1(w)}).catch(v=>K1(v,8)?v:Promise.reject(v))}function s2(M,T,w){l.list().forEach(E=>o1(()=>E(M,T,w)))}function L2(M,T,w,E,Y){const s1=y(M,T);if(s1)return s1;const m=T===f2,v=I2?history.state:{};w&&(E||m?i.replace(M.fullPath,X({scroll:m&&v&&v.scroll},Y)):i.push(M.fullPath,Y)),f.value=M,D1(M,T,w,m),n2()}let q1;function f3(){q1||(q1=i.listen((M,T,w)=>{if(!U3.listening)return;const E=p(M),Y=g(E);if(Y){$(X(Y,{replace:!0}),E).catch(V3);return}t=E;const s1=f.value;I2&&Uz(M5(s1.fullPath,w.delta),q4()),k1(E,s1).catch(m=>K1(m,12)?m:K1(m,2)?($(m.to,E).then(v=>{K1(v,20)&&!w.delta&&w.type===y3.pop&&i.go(-1,!1)}).catch(V3),Promise.reject()):(w.delta&&i.go(-w.delta,!1),K(m,E,s1))).then(m=>{m=m||L2(E,s1,!1),m&&(w.delta&&!K1(m,8)?i.go(-w.delta,!1):w.type===y3.pop&&K1(m,20)&&i.go(-1,!1)),s2(E,s1,m)}).catch(V3)}))}let D2=m3(),h1=m3(),c1;function K(M,T,w){n2(M);const E=h1.list();return E.length?E.forEach(Y=>Y(M,T,w)):console.error(M),Promise.reject(M)}function Z1(){return c1&&f.value!==f2?Promise.resolve():new Promise((M,T)=>{D2.add([M,T])})}function n2(M){return c1||(c1=!M,f3(),D2.list().forEach(([T,w])=>M?w(M):T()),D2.reset()),M}function D1(M,T,w,E){const{scrollBehavior:Y}=c;if(!I2||!Y)return Promise.resolve();const s1=!w&&Iz(M5(M.fullPath,0))||(E||!w)&&history.state&&history.state.scroll||null;return U7().then(()=>Y(M,T,s1)).then(m=>m&&$z(m)).catch(m=>K(m,M,T))}const L1=M=>i.go(M);let O2;const $2=new Set,U3={currentRoute:f,listening:!0,addRoute:u,removeRoute:N,hasRoute:R,getRoutes:A,resolve:p,options:c,push:_,replace:O,go:L1,back:()=>L1(-1),forward:()=>L1(1),beforeEach:s.add,beforeResolve:n.add,afterEach:l.add,onError:h1.add,isReady:Z1,install(M){const T=this;M.component("RouterLink",S2),M.component("RouterView",N9),M.config.globalProperties.$router=T,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>y1(f)}),I2&&!O2&&f.value===f2&&(O2=!0,_(i.location).catch(Y=>{}));const w={};for(const Y in f2)Object.defineProperty(w,Y,{get:()=>f.value[Y],enumerable:!0});M.provide(L8,T),M.provide(g8,R7(w)),M.provide(D6,f);const E=M.unmount;$2.add(M),M.unmount=function(){$2.delete(M),$2.size<1&&(t=f2,q1&&q1(),q1=null,f.value=f2,O2=!1,c1=!1),E()}}};function V1(M){return M.reduce((T,w)=>T.then(()=>o1(w)),Promise.resolve())}return U3}function Mv(c,a){const e=[],r=[],i=[],s=Math.max(a.matched.length,c.matched.length);for(let n=0;n<s;n++){const l=a.matched[n];l&&(c.matched.find(t=>e3(t,l))?r.push(l):e.push(l));const f=c.matched[n];f&&(a.matched.find(t=>e3(t,f))||i.push(f))}return[e,r,i]}function Cv(){return W1(g8)}const dv={class:"sticky top-0 bg-white w-full shadow-sm z-10"},Lv={class:"w-[90vw] md:w-[70vw] xl:w-[60vw] mx-auto duration-300"},gv={class:"flex justify-between items-center py-4"},bv=Q("span",{class:"text-primary"},"Tami",-1),xv={class:"hidden md:flex gap-5"},Nv={class:"h-[20px] overflow-hidden"},Sv=Q("div",{class:"group-hover:text-primary group-hover:-translate-y-[21px] text-3h duration-300 ease-in-out"},[F2("首頁"),Q("span",{class:"block"},"Home")],-1),yv={class:"h-[20px] overflow-hidden"},wv=Q("div",{class:"group-hover:text-primary group-hover:-translate-y-[21px] text-3h duration-300 ease-in-out"},[F2("關於我"),Q("span",{class:"block"},"About")],-1),kv={key:0,"data-aos":"fade-left",class:"fixed top-0 left-0 w-full h-full bg-white"},Av={class:"flex flex-col h-full justify-center px-4"},Pv=Q("span",{class:"block text-4 ms-2"},"Home",-1),Tv=Q("span",{class:"block text-4 ms-2"},"About",-1),Fv={__name:"HeaderView",setup(c){const a=Cv(),e=p4(""),r=()=>{e.value=a.path};Q2(()=>a.path,()=>{r()});const i=p4(!1);return window.addEventListener("resize",()=>{window.innerWidth>768&&(i.value=!1)}),a9(()=>{r()}),(s,n)=>{const l=Y7("font-awesome-icon");return x3(),C4("header",dv,[Q("div",Lv,[Q("div",gv,[e1(y1(S2),{class:"font-bold text-5",to:"/"},{default:N2(()=>[F2("Hello, "),bv]),_:1}),Q("button",{onClick:n[0]||(n[0]=f=>i.value=!0)},[e1(l,{icon:"fa-solid fa-bars",class:"text-6 md:hidden"})]),Q("ul",xv,[Q("li",Nv,[e1(y1(S2),{to:"/",class:w2(["block group",{"text-primary font-bold":e.value==="/"}])},{default:N2(()=>[Sv]),_:1},8,["class"])]),Q("li",yv,[e1(y1(S2),{to:"/about",class:w2(["block group",{"text-primary font-bold":e.value==="/about"}])},{default:N2(()=>[wv]),_:1},8,["class"])])])]),i.value?(x3(),C4("div",kv,[Q("button",{onClick:n[1]||(n[1]=f=>i.value=!1),class:"absolute top-0 right-0"},[e1(l,{icon:"fa-solid fa-xmark",class:"text-6 m-4"})]),Q("ul",Av,[Q("li",null,[e1(y1(S2),{to:"/",onClick:n[2]||(n[2]=f=>i.value=!1),class:w2(["w-full text-6 py-3 flex items-end font-bold ps-2",{"text-primary bg-gray-100":e.value==="/"}])},{default:N2(()=>[F2("首頁"),Pv]),_:1},8,["class"])]),Q("li",null,[e1(y1(S2),{to:"/about",onClick:n[3]||(n[3]=f=>i.value=!1),class:w2(["w-full text-6 py-3 flex items-end font-bold ps-2",{"text-primary bg-gray-100":e.value==="/about"}])},{default:N2(()=>[F2("關於我"),Tv]),_:1},8,["class"])])])])):ym("",!0)])])}}},Rv={class:"w-[90vw] md:w-[70vw] xl:w-[60vw] mx-auto duration-300"},Bv={class:"flex gap-4 flex-col lg:flex-row lg:justify-between items-center py-8 border-t"},Ev={class:"flex items-center gap-5 lg:order-1"},_v={title:"Tami's Email",href:"mailto:chenziyi93326@gmail.com",class:"block"},qv={title:"Tami's GitHub",href:"https://github.com/Tami1118",class:"block"},Dv={title:"Tami's CakeResume",href:"https://www.cakeresume.com/dashboard?ref=dashboard_navs_profile",class:"block"},Ov=Q("span",{class:"text-primary"},"Tami",-1),$v=Q("span",{class:"text-3 text-center block text-gray-400 py-3"},"Copyright © 2024 Tami. All rights reserved.",-1),Uv={__name:"FooterView",setup(c){return(a,e)=>{const r=Y7("font-awesome-icon");return x3(),C4("footer",Rv,[Q("div",Bv,[Q("ul",Ev,[Q("li",null,[Q("a",_v,[e1(r,{icon:"fa-solid fa-envelope",class:"text-6 hover:text-primary"})])]),Q("li",null,[Q("a",qv,[e1(r,{icon:"fa-brands fa-github",class:"text-6 hover:text-primary"})])]),Q("li",null,[Q("a",Dv,[e1(r,{icon:"fa-solid fa-id-card",class:"text-6 hover:text-primary"})])])]),e1(y1(S2),{class:"font-bold block text-center",to:"/"},{default:N2(()=>[F2("Hello, "),Ov]),_:1})]),$v])}}},Iv={class:"relative"},Gv={__name:"App",setup(c){return(a,e)=>(x3(),C4("div",Iv,[e1(Fv),e1(y1(N9)),e1(Uv)]))}},Wv="modulepreload",jv=function(c){return"/tami-personal/"+c},T5={},V6=function(a,e,r){let i=Promise.resolve();if(e&&e.length>0){const s=document.getElementsByTagName("link");i=Promise.all(e.map(n=>{if(n=jv(n),n in T5)return;T5[n]=!0;const l=n.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(!!r)for(let z=s.length-1;z>=0;z--){const h=s[z];if(h.href===n&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${f}`))return;const o=document.createElement("link");if(o.rel=l?"stylesheet":Wv,l||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),l)return new Promise((z,h)=>{o.addEventListener("load",z),o.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${n}`)))})}))}return i.then(()=>a()).catch(s=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=s,window.dispatchEvent(n),!n.defaultPrevented)throw s})},S9=Vv({history:Kz("/tami-personal/"),routes:[{path:"/",name:"home",component:()=>V6(()=>import("./HomeView-CjmeP2RF.js"),__vite__mapDeps([0,1,2]))},{path:"/about",name:"about",component:()=>V6(()=>import("./AboutView-CAhbb5Zp.js"),__vite__mapDeps([3,1])),meta:{title:"關於我"}},{path:"/projects",name:"projects",component:()=>V6(()=>import("./ProjectView-bCMUGHtz.js"),__vite__mapDeps([4,1])),meta:{title:"專案作品"}}],scrollBehavior(){return{top:0}}});S9.beforeEach(c=>{document.title=c.meta.title!==void 0?`Tami | ${c.meta.title}`:"Tami"});function F5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function P(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?F5(Object(e),!0).forEach(function(r){v1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):F5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function L4(c){"@babel/helpers - typeof";return L4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},L4(c)}function Zv(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function R5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Kv(c,a,e){return a&&R5(c.prototype,a),e&&R5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function v1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function b8(c,a){return Xv(c)||Jv(c,a)||y9(c,a)||ah()}function R3(c){return Yv(c)||Qv(c)||y9(c)||ch()}function Yv(c){if(Array.isArray(c))return O6(c)}function Xv(c){if(Array.isArray(c))return c}function Qv(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Jv(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,n,l;try{for(e=e.call(c);!(i=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));i=!0);}catch(f){s=!0,l=f}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw l}}return r}}function y9(c,a){if(c){if(typeof c=="string")return O6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return O6(c,a)}}function O6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function ch(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ah(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var B5=function(){},x8={},w9={},k9=null,A9={mark:B5,measure:B5};try{typeof window<"u"&&(x8=window),typeof document<"u"&&(w9=document),typeof MutationObserver<"u"&&(k9=MutationObserver),typeof performance<"u"&&(A9=performance)}catch{}var eh=x8.navigator||{},E5=eh.userAgent,_5=E5===void 0?"":E5,M2=x8,i1=w9,q5=k9,Y3=A9;M2.document;var i2=!!i1.documentElement&&!!i1.head&&typeof i1.addEventListener=="function"&&typeof i1.createElement=="function",P9=~_5.indexOf("MSIE")||~_5.indexOf("Trident/"),X3,Q3,J3,c4,a4,c2="___FONT_AWESOME___",$6=16,T9="fa",F9="svg-inline--fa",B2="data-fa-i2svg",U6="data-fa-pseudo-element",rh="data-fa-pseudo-element-pending",N8="data-prefix",S8="data-icon",D5="fontawesome-i2svg",ih="async",sh=["HTML","HEAD","STYLE","SCRIPT"],R9=function(){try{return!0}catch{return!1}}(),r1="classic",m1="sharp",y8=[r1,m1];function B3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[r1]}})}var w3=B3((X3={},v1(X3,r1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),v1(X3,m1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),X3)),k3=B3((Q3={},v1(Q3,r1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),v1(Q3,m1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Q3)),A3=B3((J3={},v1(J3,r1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),v1(J3,m1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),J3)),nh=B3((c4={},v1(c4,r1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),v1(c4,m1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),c4)),lh=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,B9="fa-layers-text",fh=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,oh=B3((a4={},v1(a4,r1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),v1(a4,m1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),a4)),E9=[1,2,3,4,5,6,7,8,9,10],th=E9.concat([11,12,13,14,15,16,17,18,19,20]),mh=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],k2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},P3=new Set;Object.keys(k3[r1]).map(P3.add.bind(P3));Object.keys(k3[m1]).map(P3.add.bind(P3));var zh=[].concat(y8,R3(P3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",k2.GROUP,k2.SWAP_OPACITY,k2.PRIMARY,k2.SECONDARY]).concat(E9.map(function(c){return"".concat(c,"x")})).concat(th.map(function(c){return"w-".concat(c)})),C3=M2.FontAwesomeConfig||{};function vh(c){var a=i1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function hh(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(i1&&typeof i1.querySelector=="function"){var Hh=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Hh.forEach(function(c){var a=b8(c,2),e=a[0],r=a[1],i=hh(vh(e));i!=null&&(C3[r]=i)})}var _9={styleDefault:"solid",familyDefault:"classic",cssPrefix:T9,replacementClass:F9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};C3.familyPrefix&&(C3.cssPrefix=C3.familyPrefix);var i3=P(P({},_9),C3);i3.autoReplaceSvg||(i3.observeMutations=!1);var B={};Object.keys(_9).forEach(function(c){Object.defineProperty(B,c,{enumerable:!0,set:function(e){i3[c]=e,d3.forEach(function(r){return r(B)})},get:function(){return i3[c]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(a){i3.cssPrefix=a,d3.forEach(function(e){return e(B)})},get:function(){return i3.cssPrefix}});M2.FontAwesomeConfig=B;var d3=[];function uh(c){return d3.push(c),function(){d3.splice(d3.indexOf(c),1)}}var o2=$6,G1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ph(c){if(!(!c||!i2)){var a=i1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=i1.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}return i1.head.insertBefore(a,r),c}}var Vh="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function T3(){for(var c=12,a="";c-- >0;)a+=Vh[Math.random()*62|0];return a}function l3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function w8(c){return c.classList?l3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function q9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mh(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(q9(c[e]),'" ')},"").trim()}function D4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function k8(c){return c.size!==G1.size||c.x!==G1.x||c.y!==G1.y||c.rotate!==G1.rotate||c.flipX||c.flipY}function Ch(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(s," ").concat(n," ").concat(l)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:f,path:t}}function dh(c){var a=c.transform,e=c.width,r=e===void 0?$6:e,i=c.height,s=i===void 0?$6:i,n=c.startCentered,l=n===void 0?!1:n,f="";return l&&P9?f+="translate(".concat(a.x/o2-r/2,"em, ").concat(a.y/o2-s/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/o2,"em), calc(-50% + ").concat(a.y/o2,"em)) "):f+="translate(".concat(a.x/o2,"em, ").concat(a.y/o2,"em) "),f+="scale(".concat(a.size/o2*(a.flipX?-1:1),", ").concat(a.size/o2*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var Lh=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function D9(){var c=T9,a=F9,e=B.cssPrefix,r=B.replacementClass,i=Lh;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(l,".".concat(r))}return i}var O5=!1;function M6(){B.autoAddCss&&!O5&&(ph(D9()),O5=!0)}var gh={mixout:function(){return{dom:{css:D9,insertCss:M6}}},hooks:function(){return{beforeDOMElementCreation:function(){M6()},beforeI2svg:function(){M6()}}}},a2=M2||{};a2[c2]||(a2[c2]={});a2[c2].styles||(a2[c2].styles={});a2[c2].hooks||(a2[c2].hooks={});a2[c2].shims||(a2[c2].shims=[]);var B1=a2[c2],O9=[],bh=function c(){i1.removeEventListener("DOMContentLoaded",c),g4=1,O9.map(function(a){return a()})},g4=!1;i2&&(g4=(i1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(i1.readyState),g4||i1.addEventListener("DOMContentLoaded",bh));function xh(c){i2&&(g4?setTimeout(c,0):O9.push(c))}function E3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?q9(c):"<".concat(a," ").concat(Mh(r),">").concat(s.map(E3).join(""),"</").concat(a,">")}function $5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var Nh=function(a,e){return function(r,i,s,n){return a.call(e,r,i,s,n)}},C6=function(a,e,r,i){var s=Object.keys(a),n=s.length,l=i!==void 0?Nh(e,i):e,f,t,o;for(r===void 0?(f=1,o=a[s[0]]):(f=0,o=r);f<n;f++)t=s[f],o=l(o,a[t],t,a);return o};function Sh(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function I6(c){var a=Sh(c);return a.length===1?a[0].toString(16):null}function yh(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function U5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function G6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=U5(a);typeof B1.hooks.addPack=="function"&&!i?B1.hooks.addPack(c,U5(a)):B1.styles[c]=P(P({},B1.styles[c]||{}),s),c==="fas"&&G6("fa",a)}var e4,r4,i4,W2=B1.styles,wh=B1.shims,kh=(e4={},v1(e4,r1,Object.values(A3[r1])),v1(e4,m1,Object.values(A3[m1])),e4),A8=null,$9={},U9={},I9={},G9={},W9={},Ah=(r4={},v1(r4,r1,Object.keys(w3[r1])),v1(r4,m1,Object.keys(w3[m1])),r4);function Ph(c){return~zh.indexOf(c)}function Th(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!Ph(i)?i:null}var j9=function(){var a=function(s){return C6(W2,function(n,l,f){return n[f]=C6(l,s,{}),n},{})};$9=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var l=s[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){i[f.toString(16)]=n})}return i}),U9=a(function(i,s,n){if(i[n]=n,s[2]){var l=s[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){i[f]=n})}return i}),W9=a(function(i,s,n){var l=s[2];return i[n]=n,l.forEach(function(f){i[f]=n}),i});var e="far"in W2||B.autoFetchSvg,r=C6(wh,function(i,s){var n=s[0],l=s[1],f=s[2];return l==="far"&&!e&&(l="fas"),typeof n=="string"&&(i.names[n]={prefix:l,iconName:f}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:l,iconName:f}),i},{names:{},unicodes:{}});I9=r.names,G9=r.unicodes,A8=O4(B.styleDefault,{family:B.familyDefault})};uh(function(c){A8=O4(c.styleDefault,{family:B.familyDefault})});j9();function P8(c,a){return($9[c]||{})[a]}function Fh(c,a){return(U9[c]||{})[a]}function A2(c,a){return(W9[c]||{})[a]}function Z9(c){return I9[c]||{prefix:null,iconName:null}}function Rh(c){var a=G9[c],e=P8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function C2(){return A8}var T8=function(){return{prefix:null,iconName:null,rest:[]}};function O4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?r1:e,i=w3[r][c],s=k3[r][c]||k3[r][i],n=c in B1.styles?c:null;return s||n||null}var I5=(i4={},v1(i4,r1,Object.keys(A3[r1])),v1(i4,m1,Object.keys(A3[m1])),i4);function $4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},v1(a,r1,"".concat(B.cssPrefix,"-").concat(r1)),v1(a,m1,"".concat(B.cssPrefix,"-").concat(m1)),a),n=null,l=r1;(c.includes(s[r1])||c.some(function(t){return I5[r1].includes(t)}))&&(l=r1),(c.includes(s[m1])||c.some(function(t){return I5[m1].includes(t)}))&&(l=m1);var f=c.reduce(function(t,o){var z=Th(B.cssPrefix,o);if(W2[o]?(o=kh[l].includes(o)?nh[l][o]:o,n=o,t.prefix=o):Ah[l].indexOf(o)>-1?(n=o,t.prefix=O4(o,{family:l})):z?t.iconName=z:o!==B.replacementClass&&o!==s[r1]&&o!==s[m1]&&t.rest.push(o),!i&&t.prefix&&t.iconName){var h=n==="fa"?Z9(t.iconName):{},u=A2(t.prefix,t.iconName);h.prefix&&(n=null),t.iconName=h.iconName||u||t.iconName,t.prefix=h.prefix||t.prefix,t.prefix==="far"&&!W2.far&&W2.fas&&!B.autoFetchSvg&&(t.prefix="fas")}return t},T8());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===m1&&(W2.fass||B.autoFetchSvg)&&(f.prefix="fass",f.iconName=A2(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=C2()||"fas"),f}var Bh=function(){function c(){Zv(this,c),this.definitions={}}return Kv(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){e.definitions[l]=P(P({},e.definitions[l]||{}),n[l]),G6(l,n[l]);var f=A3[r1][l];f&&G6(f,n[l]),j9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var n=i[s],l=n.prefix,f=n.iconName,t=n.icon,o=t[2];e[l]||(e[l]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[l][z]=t)}),e[l][f]=t}),e}}]),c}(),G5=[],j2={},J2={},Eh=Object.keys(J2);function _h(c,a){var e=a.mixoutsTo;return G5=c,j2={},Object.keys(J2).forEach(function(r){Eh.indexOf(r)===-1&&delete J2[r]}),G5.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(e[n]=i[n]),L4(i[n])==="object"&&Object.keys(i[n]).forEach(function(l){e[n]||(e[n]={}),e[n][l]=i[n][l]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(n){j2[n]||(j2[n]=[]),j2[n].push(s[n])})}r.provides&&r.provides(J2)}),e}function W6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=j2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function E2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=j2[c]||[];i.forEach(function(s){s.apply(null,e)})}function e2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return J2[c]?J2[c].apply(null,a):void 0}function j6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||C2();if(a)return a=A2(e,a)||a,$5(K9.definitions,e,a)||$5(B1.styles,e,a)}var K9=new Bh,qh=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,E2("noAuto")},Dh={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i2?(E2("beforeI2svg",a),e2("pseudoElements2svg",a),e2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,xh(function(){$h({autoReplaceSvgRoot:e}),E2("watch",a)})}},Oh={icon:function(a){if(a===null)return null;if(L4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:A2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=O4(a[0]);return{prefix:r,iconName:A2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(B.cssPrefix,"-"))>-1||a.match(lh))){var i=$4(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||C2(),iconName:A2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=C2();return{prefix:s,iconName:A2(s,a)||a}}}},w1={noAuto:qh,config:B,dom:Dh,parse:Oh,library:K9,findIconDefinition:j6,toHtml:E3},$h=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?i1:e;(Object.keys(B1.styles).length>0||B.autoFetchSvg)&&i2&&B.autoReplaceSvg&&w1.dom.i2svg({node:r})};function U4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return E3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(i2){var r=i1.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Uh(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(k8(n)&&e.found&&!r.found){var l=e.width,f=e.height,t={x:l/f/2,y:.5};i.style=D4(P(P({},s),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function Ih(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(B.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},i),{},{id:n}),children:r}]}]}function F8(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,n=c.transform,l=c.symbol,f=c.title,t=c.maskId,o=c.titleId,z=c.extra,h=c.watchable,u=h===void 0?!1:h,N=r.found?r:e,A=N.width,R=N.height,p=i==="fak",d=[B.replacementClass,s?"".concat(B.cssPrefix,"-").concat(s):""].filter(function(o1){return z.classes.indexOf(o1)===-1}).filter(function(o1){return o1!==""||!!o1}).concat(z.classes).join(" "),y={children:[],attributes:P(P({},z.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(R)})},_=p&&!~z.classes.indexOf("fa-fw")?{width:"".concat(A/R*16*.0625,"em")}:{};u&&(y.attributes[B2]=""),f&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(o||T3())},children:[f]}),delete y.attributes.title);var O=P(P({},y),{},{prefix:i,iconName:s,main:e,mask:r,maskId:t,transform:n,symbol:l,styles:P(P({},_),z.styles)}),g=r.found&&e.found?e2("generateAbstractMask",O)||{children:[],attributes:{}}:e2("generateAbstractIcon",O)||{children:[],attributes:{}},$=g.children,J=g.attributes;return O.children=$,O.attributes=J,l?Ih(O):Uh(O)}function W5(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,n=c.extra,l=c.watchable,f=l===void 0?!1:l,t=P(P(P({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});f&&(t[B2]="");var o=P({},n.styles);k8(i)&&(o.transform=dh({transform:i,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var z=D4(o);z.length>0&&(t.style=z);var h=[];return h.push({tag:"span",attributes:t,children:[a]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function Gh(c){var a=c.content,e=c.title,r=c.extra,i=P(P(P({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=D4(r.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var d6=B1.styles;function Z6(c){var a=c[0],e=c[1],r=c.slice(4),i=b8(r,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(k2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(k2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(k2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:n}}var Wh={found:!1,width:512,height:512};function jh(c,a){!R9&&!B.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function K6(c,a){var e=a;return a==="fa"&&B.styleDefault!==null&&(a=C2()),new Promise(function(r,i){if(e2("missingIconAbstract"),e==="fa"){var s=Z9(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&d6[a]&&d6[a][c]){var n=d6[a][c];return r(Z6(n))}jh(c,a),r(P(P({},Wh),{},{icon:B.showMissingIcons&&c?e2("missingIconAbstract")||{}:{}}))})}var j5=function(){},Y6=B.measurePerformance&&Y3&&Y3.mark&&Y3.measure?Y3:{mark:j5,measure:j5},v3='FA "6.5.1"',Zh=function(a){return Y6.mark("".concat(v3," ").concat(a," begins")),function(){return Y9(a)}},Y9=function(a){Y6.mark("".concat(v3," ").concat(a," ends")),Y6.measure("".concat(v3," ").concat(a),"".concat(v3," ").concat(a," begins"),"".concat(v3," ").concat(a," ends"))},R8={begin:Zh,end:Y9},z4=function(){};function Z5(c){var a=c.getAttribute?c.getAttribute(B2):null;return typeof a=="string"}function Kh(c){var a=c.getAttribute?c.getAttribute(N8):null,e=c.getAttribute?c.getAttribute(S8):null;return a&&e}function Yh(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(B.replacementClass)}function Xh(){if(B.autoReplaceSvg===!0)return v4.replace;var c=v4[B.autoReplaceSvg];return c||v4.replace}function Qh(c){return i1.createElementNS("http://www.w3.org/2000/svg",c)}function Jh(c){return i1.createElement(c)}function X9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Qh:Jh:e;if(typeof c=="string")return i1.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(X9(n,{ceFn:r}))}),i}function cH(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var v4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(X9(i),e)}),e.getAttribute(B2)===null&&B.keepOriginalSource){var r=i1.createComment(cH(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~w8(e).indexOf(B.replacementClass))return v4.replace(a);var i=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(l,f){return f===B.replacementClass||f.match(i)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var n=r.map(function(l){return E3(l)}).join(`
`);e.setAttribute(B2,""),e.innerHTML=n}};function K5(c){c()}function Q9(c,a){var e=typeof a=="function"?a:z4;if(c.length===0)e();else{var r=K5;B.mutateApproach===ih&&(r=M2.requestAnimationFrame||K5),r(function(){var i=Xh(),s=R8.begin("mutate");c.map(i),s(),e()})}}var B8=!1;function J9(){B8=!0}function X6(){B8=!1}var b4=null;function Y5(c){if(q5&&B.observeMutations){var a=c.treeCallback,e=a===void 0?z4:a,r=c.nodeCallback,i=r===void 0?z4:r,s=c.pseudoElementsCallback,n=s===void 0?z4:s,l=c.observeMutationsRoot,f=l===void 0?i1:l;b4=new q5(function(t){if(!B8){var o=C2();l3(t).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!Z5(z.addedNodes[0])&&(B.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&B.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&Z5(z.target)&&~mh.indexOf(z.attributeName))if(z.attributeName==="class"&&Kh(z.target)){var h=$4(w8(z.target)),u=h.prefix,N=h.iconName;z.target.setAttribute(N8,u||o),N&&z.target.setAttribute(S8,N)}else Yh(z.target)&&i(z.target)})}}),i2&&b4.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function aH(){b4&&b4.disconnect()}function eH(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),n=s[0],l=s.slice(1);return n&&l.length>0&&(r[n]=l.join(":").trim()),r},{})),e}function rH(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=$4(w8(c));return i.prefix||(i.prefix=C2()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Fh(i.prefix,c.innerText)||P8(i.prefix,I6(c.innerText))),!i.iconName&&B.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function iH(c){var a=l3(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return B.autoA11y&&(e?a["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(r||T3()):(a["aria-hidden"]="true",a.focusable="false")),a}function sH(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function X5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=rH(c),r=e.iconName,i=e.prefix,s=e.rest,n=iH(c),l=W6("parseNodeAttributes",{},c),f=a.styleParser?eH(c):[];return P({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:G1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:f,attributes:n}},l)}var nH=B1.styles;function cc(c){var a=B.autoReplaceSvg==="nest"?X5(c,{styleParser:!1}):X5(c);return~a.extra.classes.indexOf(B9)?e2("generateLayersText",c,a):e2("generateSvgReplacementMutation",c,a)}var d2=new Set;y8.map(function(c){d2.add("fa-".concat(c))});Object.keys(w3[r1]).map(d2.add.bind(d2));Object.keys(w3[m1]).map(d2.add.bind(d2));d2=R3(d2);function Q5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!i2)return Promise.resolve();var e=i1.documentElement.classList,r=function(z){return e.add("".concat(D5,"-").concat(z))},i=function(z){return e.remove("".concat(D5,"-").concat(z))},s=B.autoFetchSvg?d2:y8.map(function(o){return"fa-".concat(o)}).concat(Object.keys(nH));s.includes("fa")||s.push("fa");var n=[".".concat(B9,":not([").concat(B2,"])")].concat(s.map(function(o){return".".concat(o,":not([").concat(B2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=l3(c.querySelectorAll(n))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var f=R8.begin("onTree"),t=l.reduce(function(o,z){try{var h=cc(z);h&&o.push(h)}catch(u){R9||u.name==="MissingIcon"&&console.error(u)}return o},[]);return new Promise(function(o,z){Promise.all(t).then(function(h){Q9(h,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),f(),o()})}).catch(function(h){f(),z(h)})})}function lH(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cc(c).then(function(e){e&&Q9([e],a)})}function fH(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:j6(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:j6(i||{})),c(r,P(P({},e),{},{mask:i}))}}var oH=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?G1:r,s=e.symbol,n=s===void 0?!1:s,l=e.mask,f=l===void 0?null:l,t=e.maskId,o=t===void 0?null:t,z=e.title,h=z===void 0?null:z,u=e.titleId,N=u===void 0?null:u,A=e.classes,R=A===void 0?[]:A,p=e.attributes,d=p===void 0?{}:p,y=e.styles,_=y===void 0?{}:y;if(a){var O=a.prefix,g=a.iconName,$=a.icon;return U4(P({type:"icon"},a),function(){return E2("beforeDOMElementCreation",{iconDefinition:a,params:e}),B.autoA11y&&(h?d["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(N||T3()):(d["aria-hidden"]="true",d.focusable="false")),F8({icons:{main:Z6($),mask:f?Z6(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:g,transform:P(P({},G1),i),symbol:n,title:h,maskId:o,titleId:N,extra:{attributes:d,styles:_,classes:R}})})}},tH={mixout:function(){return{icon:fH(oH)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Q5,e.nodeCallback=lH,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?i1:r,s=e.callback,n=s===void 0?function(){}:s;return Q5(i,n)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,n=r.titleId,l=r.prefix,f=r.transform,t=r.symbol,o=r.mask,z=r.maskId,h=r.extra;return new Promise(function(u,N){Promise.all([K6(i,l),o.iconName?K6(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var R=b8(A,2),p=R[0],d=R[1];u([e,F8({icons:{main:p,mask:d},prefix:l,iconName:i,transform:f,symbol:t,maskId:z,title:s,titleId:n,extra:h,watchable:!0})])}).catch(N)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,n=e.transform,l=e.styles,f=D4(l);f.length>0&&(i.style=f);var t;return k8(n)&&(t=e2("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),r.push(t||s.icon),{children:r,attributes:i}}}},mH={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return U4({type:"layer"},function(){E2("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(l){Array.isArray(l)?l.map(function(f){n=n.concat(f.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(R3(s)).join(" ")},children:n}]})}}}},zH={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,n=r.classes,l=n===void 0?[]:n,f=r.attributes,t=f===void 0?{}:f,o=r.styles,z=o===void 0?{}:o;return U4({type:"counter",content:e},function(){return E2("beforeDOMElementCreation",{content:e,params:r}),Gh({content:e.toString(),title:s,extra:{attributes:t,styles:z,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(R3(l))}})})}}}},vH={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?G1:i,n=r.title,l=n===void 0?null:n,f=r.classes,t=f===void 0?[]:f,o=r.attributes,z=o===void 0?{}:o,h=r.styles,u=h===void 0?{}:h;return U4({type:"text",content:e},function(){return E2("beforeDOMElementCreation",{content:e,params:r}),W5({content:e,transform:P(P({},G1),s),title:l,extra:{attributes:z,styles:u,classes:["".concat(B.cssPrefix,"-layers-text")].concat(R3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,n=r.extra,l=null,f=null;if(P9){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();l=o.width/t,f=o.height/t}return B.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,W5({content:e.innerHTML,width:l,height:f,transform:s,title:i,extra:n,watchable:!0})])}}},hH=new RegExp('"',"ug"),J5=[1105920,1112319];function HH(c){var a=c.replace(hH,""),e=yh(a,0),r=e>=J5[0]&&e<=J5[1],i=a.length===2?a[0]===a[1]:!1;return{value:I6(i?a[0]:a),isSecondary:r||i}}function c7(c,a){var e="".concat(rh).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=l3(c.children),n=s.filter(function($){return $.getAttribute(U6)===a})[0],l=M2.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match(fh),t=l.getPropertyValue("font-weight"),o=l.getPropertyValue("content");if(n&&!f)return c.removeChild(n),r();if(f&&o!=="none"&&o!==""){var z=l.getPropertyValue("content"),h=~["Sharp"].indexOf(f[2])?m1:r1,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?k3[h][f[2].toLowerCase()]:oh[h][t],N=HH(z),A=N.value,R=N.isSecondary,p=f[0].startsWith("FontAwesome"),d=P8(u,A),y=d;if(p){var _=Rh(A);_.iconName&&_.prefix&&(d=_.iconName,u=_.prefix)}if(d&&!R&&(!n||n.getAttribute(N8)!==u||n.getAttribute(S8)!==y)){c.setAttribute(e,y),n&&c.removeChild(n);var O=sH(),g=O.extra;g.attributes[U6]=a,K6(d,u).then(function($){var J=F8(P(P({},O),{},{icons:{main:$,mask:T8()},prefix:u,iconName:y,extra:g,watchable:!0})),o1=i1.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(o1,c.firstChild):c.appendChild(o1),o1.outerHTML=J.map(function(k1){return E3(k1)}).join(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),t1.disableMutationObserver=!0),t1.disableMutationObserver||z7.ready("[data-aos]",Go),jo(t1.disable)||Io()?Wo():(document.querySelector("body").setAttribute("data-aos-easing",t1.easing),document.querySelector("body").setAttribute("data-aos-duration",t1.duration),document.querySelector("body").setAttribute("data-aos-delay",t1.delay),["DOMContentLoaded","load"].indexOf(t1.startEvent)===-1?document.addEventListener(t1.startEvent,function(){y2(!0)}):window.addEventListener("load",function(){y2(!0)}),t1.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&y2(!0),window.addEventListener("resize",m7(y2,t1.debounceDelay,!0)),window.addEventListener("orientationchange",m7(y2,t1.debounceDelay,!0)),Q1)},g31={init:L31,refresh:y2,refreshHard:Go};NH.add(Q$,QX,f21);g31.init();const b31=zz(Gv);b31.use(pz()).use(S9).component("font-awesome-icon",C21).mount("#app");export{Y1 as F,Q as a,e1 as b,C4 as c,S31 as d,u1 as e,p4 as f,N31 as g,ym as h,F2 as i,x3 as o,Y7 as r,x31 as t,y1 as u,y31 as w};