import{r as T,b as S,h as w,d as E,t as y}from"./registry-EgEQwbXk.js";import{_ as C}from"./self-iterator-6yU_KG2T.js";import{_ as M}from"./index-YuT6C2fe.js";import{_ as v}from"./render-tag-_0PNNh6Y.js";const I=["wide","narrow"];class z extends Marko.Component{setExpandedState(e){e!==this.state.expanded&&(this.state.expanded=e,e?this.emit("expanded"):this.emit("collapsed"))}handleExpand(){this.setExpandedState(!this.state.expanded)}handleScroll(){this.setExpandedState(!0)}handleTouchStart(e){const t=e.changedTouches;this.touches=[];for(let a=0;a<t.length;a++){const{identifier:i,pageY:o}=t[a];this.touches.push({identifier:i,pageY:o})}}handleTouchMove(e){if(this.touches.length)for(let t=0;t<e.changedTouches.length;t++){const a=e.changedTouches[t],i=this.touches.findIndex(n=>n.identifier===a.identifier),o=a.pageY-this.touches[i].pageY;o>30?(this.state.expanded?this.setExpandedState(!1):this.getComponent("dialog").state.open=!1,this.handleTouchEnd(e)):o<-30&&(this.setExpandedState(!0),this.handleTouchEnd(e))}}handleTouchEnd(e){for(let t=0;t<e.changedTouches.length;t++){const a=e.changedTouches[t],i=this.touches.findIndex(o=>o.identifier===a.identifier);i>-1&&this.touches.splice(i,1)}}onCreate(){this.state={expanded:!1}}onMount(){this.touches=[]}onInput(e){this.state={expanded:e.expanded||!1}}}const h="hhi1qfHH",s=y(h);T.r(h,()=>s);const g=z;s._=S(function(c,e,t,a,i,o){const{class:n,variant:u,buttonPosition:p="right",a11yMaximizeText:m="Maximize Lightbox Dialog",a11yMinimizeText:x="Minimize Lightbox Dialog",bannerImgSrc:d,bannerImgPosition:f,size:l,..._}=c;var b=u==="_mini",k=i.expanded?x:m;v(M,{..._,classPrefix:"lightbox-dialog",buttonPosition:p,class:[n,"lightbox-dialog--mask-fade",d&&"lightbox-dialog--expressive",l&&I.includes(l)&&`lightbox-dialog--${l}`],windowClass:["lightbox-dialog__window--animate",b&&"lightbox-dialog__window--mini",i.expanded&&"lightbox-dialog__window--expanded"],top:{renderBody:r=>{r.e("button",{"aria-label":k,type:"button",class:"lightbox-dialog__handle"},"0",a,0,0,{onclick:t.d("click","handleExpand",!1),ontouchstart:t.d("touchstart","handleTouchStart",!1),ontouchmove:t.d("touchmove","handleTouchMove",!1),ontouchend:t.d("touchend","handleTouchEnd",!1),ontouchcancel:t.d("touchcancel","handleTouchEnd",!1)}),d&&r.e("div",{class:"lightbox-dialog__image",style:w({backgroundImage:`url(${d})`,backgroundPosition:f})},"1",a,0,1)},[Symbol.iterator]:C}},e,t,"@dialog",[["open","emit",!1,["open"]],["close","emit",!1,["close"]],["prevButtonClick","emit",!1,["prevButtonClick"]]])},{t:h},g);s.Component=E(g,s._);export{s as _};