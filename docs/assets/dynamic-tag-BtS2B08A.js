import{g as s}from"./_commonjsHelpers-Cpj98o6Y.js";import{c as F,C as G,a as P,_ as V}from"./registry-Cc025Aii.js";var u=F.NOOP,W=P,Y=G,Z=V,c=Y.S_,q=function(){return u},L=1,T=typeof document>"u",y=function r(_,a,R,l,f,E,i,b,S){if(a){a.default&&(a=a.default);var v=R&&R(),d=i&&i.s_;if(typeof a=="string")l?(_.bi_(a,v,b,i,j(i,S,E)),l(_),_.bj_()):_.bk_(a,v,b,i,j(i,S,E));else{v==null?v={renderBody:l}:typeof v=="object"&&(v=z(v),l&&(v.renderBody=l));var O=a._||(a.renderer?a.renderer.renderer||a.renderer:a.render),C=a&&a.renderBody||a;if(r.bl_&&(O=r.bl_(O,C,f)),O)_.c(i,b,S),O(v,_),_._Z_=null;else{var h=typeof C=="function";if(h){var x=i?i.u_:0,n=x&L,I=C===u,w=T?n:I;if(_.bf(b,d,w),!I&&h){var N=c(_),e=N.o_,J=N.p_;N.o_=new W(d,e.id+"-"+e.aL_(b),J),C.toJSON=q,f?C.apply(null,[_].concat(f,v)):C(_,v),N.o_=e}_.ef()}else _.error("Invalid dynamic tag value")}}}else l&&(_.bf(b,d,T&&i&&i.u_&L),l(_),_.ef())};function z(r){var _={};for(var a in r)_[Z.bh_(a)]=r[a];return _}function j(r,_,a){var R=_?_.length:0;if(R===0)return a;for(var l=a||{},f,E=R;E--;)f=_[E],l["on"+f[0]]=r.d(f[0],f[1],f[2],f[3]);return l}const K=s(y);export{K as _};