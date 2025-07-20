var l=Object.defineProperty;var C=(c,t)=>l(c,"name",{value:t,configurable:!0});var e=class{static{C(this,"CubicBezier")}cx;bx;ax;cy;by;ay;name;constructor(t=0,n=0,r=1,a=1,s){this.cx=3*t,this.bx=3*(r-
t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*n,this.by=3*(a-n)-this.cy,this.ay=1-this.cy-this.by,this.name=s||([t,n].every(
o=>o===0)&&[r,a].every(o=>o===1)?"linear":`cubic-bezier(${[t,n,r,a].join(",")})`)}sampleCurveX(t){return((this.ax*t+this.
bx)*t+this.cx)*t}sampleCurveY(t){return((this.ay*t+this.by)*t+this.cy)*t}sampleCurveDerivativeX(t){return(3*this.ax*t+2*
this.bx)*t+this.cx}solveCurveX(t){if(0>=t)return 0;if(1<=t)return 1;let r=t,a=0,s=0;for(let b=0;8>b;b+=1){if(a=this.sampleCurveX(
r)-t,Math.abs(a)<1e-6)return r;if(s=this.sampleCurveDerivativeX(r),Math.abs(s)<1e-6)break;r-=a/s}let o=0,u=1;for(r=t;o<u;){
if(a=this.sampleCurveX(r),Math.abs(a-t)<1e-6)return r;t>a?o=r:u=r,r=o+(u-o)/2}return r}};var i=new Map([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-in-circ",[.55,0,1,.45]],["ease-in-cubic",[.32,0,.67,
0]],["ease-in-expo",[.7,0,.84,0]],["ease-in-out-circ",[.85,0,.15,1]],["ease-in-out-cubic",[.65,0,.35,1]],["ease-in-out-e\
xpo",[.87,0,.13,1]],["ease-in-out-quad",[.45,0,.55,1]],["ease-in-out-quart",[.76,0,.24,1]],["ease-in-out-quint",[.83,0,.17,
1]],["ease-in-out-sine",[.37,0,.63,1]],["ease-in-out",[.42,0,.58,1]],["ease-in-quad",[.11,0,.5,0]],["ease-in-quart",[.5,
0,.75,0]],["ease-in-quint",[.64,0,.78,0]],["ease-in-sine",[.12,0,.39,0]],["ease-out",[0,0,.58,1]],["ease-out-circ",[0,.55,
.45,1]],["ease-out-cubic",[.33,1,.68,1]],["ease-out-expo",[.16,1,.3,1]],["ease-out-quad",[.5,1,.89,1]],["ease-out-quart",
[.25,1,.5,1]],["ease-out-quint",[.22,1,.36,1]],["ease-out-sine",[.61,1,.88,1]],["linear",[0,0,1,1]]]),H=new e,p=new e(...i.
get("ease"),"ease"),x=new e(...i.get("ease-in"),"ease-in"),q=new e(...i.get("ease-out"),"ease-out"),m=new e(...i.get("ea\
se-in-out"),"ease-in-out"),B=new e(...i.get("ease-in-circ"),"ease-in-circ"),z=new e(...i.get("ease-in-cubic"),"ease-in-c\
ubic"),g=new e(...i.get("ease-in-expo"),"ease-in-expo"),w=new e(...i.get("ease-in-out-circ"),"ease-in-out-circ"),h=new e(
...i.get("ease-in-out-cubic"),"ease-in-out-cubic"),d=new e(...i.get("ease-in-out-expo"),"ease-in-out-expo"),y=new e(...i.
get("ease-in-out-quad"),"ease-in-out-quad"),I=new e(...i.get("ease-in-out-quart"),"ease-in-out-quart"),O=new e(...i.get(
"ease-in-out-quint"),"ease-in-out-quint"),v=new e(...i.get("ease-in-out-sine"),"ease-in-out-sine"),f=new e(...i.get("eas\
e-in-quad"),"ease-in-quad"),Q=new e(...i.get("ease-in-quart"),"ease-in-quart"),E=new e(...i.get("ease-in-quint"),"ease-i\
n-quint"),M=new e(...i.get("ease-in-sine"),"ease-in-sine"),N=new e(...i.get("ease-out-cubic"),"ease-out-cubic"),P=new e(
...i.get("ease-out-cubic"),"ease-out-cubic"),X=new e(...i.get("ease-out-expo"),"ease-out-expo"),S=new e(...i.get("ease-o\
ut-quad"),"ease-out-quad"),j=new e(...i.get("ease-out-quart"),"ease-out-quart"),D=new e(...i.get("ease-out-quint"),"ease\
-out-quint"),k=new e(...i.get("ease-out-sine"),"ease-out-sine"),F=new Map([["ease",p],["ease-in",x],["ease-in-circ",B],[
"ease-in-cubic",z],["ease-in-expo",g],["ease-in-out",m],["ease-in-out-circ",w],["ease-in-out-cubic",h],["ease-in-out-exp\
o",d],["ease-in-out-quad",y],["ease-in-out-quart",I],["ease-in-out-quint",O],["ease-in-out-sine",v],["ease-in-quad",f],[
"ease-in-quart",Q],["ease-in-quint",E],["ease-in-sine",M],["ease-out",q],["ease-out-circ",N],["ease-out-cubic",P],["ease\
-out-expo",X],["ease-out-quad",S],["ease-out-quart",j],["ease-out-quint",D],["ease-out-sine",k]]),J=F;export{i as BezierPointsByEasingName,F as EaseCorrelationByName,J as default,p as ease,x as easeIn,B as easeInCirc,z as easeInCubic,
g as easeInExpo,m as easeInOut,w as easeInOutCirc,h as easeInOutCubic,d as easeInOutExpo,y as easeInOutQuad,I as easeInOutQuart,
O as easeInOutQuint,v as easeInOutSine,f as easeInQuad,Q as easeInQuart,E as easeInQuint,M as easeInSine,q as easeOut,N as easeOutCirc,
P as easeOutCubic,X as easeOutExpo,S as easeOutQuad,j as easeOutQuart,D as easeOutQuint,k as easeOutSine,H as linear};
