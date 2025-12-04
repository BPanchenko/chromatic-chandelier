var A=Object.defineProperty;var u=(r,o)=>A(r,"name",{value:o,configurable:!0});var P=u((r,o=12)=>{let t=o>0?10**o:1;return Math.sign(r)*Math.round(
(Math.abs(r)+Number.EPSILON)*t)/t},"round");var c=u(r=>typeof r=="number"||r instanceof Number,"isNumber");var B=u(r=>r===!0||r===!1||r==="true"||r==="on"||r==="off","isBoo\
lean"),j=u(r=>O(r)&&Symbol.iterator in r&&typeof r[Symbol.iterator]==
"function","isIterableObject"),O=u(r=>r!==null&&typeof r=="object",
"isObject"),q=u(r=>typeof r=="string","isString");function e(){let r=u(i=>B(i)||c(i)||q(i)||j(i)||i===null,"isValid\
Value"),o=u(i=>O(i)&&Object.values(i).every(l=>r(l)),"isAditional\
Properties"),t=!0,s=Array.from(arguments).filter(i=>r(i)),T={};return Object.
entries(Iterator.from(arguments).filter(i=>o(i)).next().value??{}).
forEach(([i,l])=>T[i]={enumerable:t,value:l}),Object.defineProperties(
s,T)}u(e,"createTuple");var N=(n=>(n.Ease="ease",n.Linear="line",n.In="ease-in",n.InCirc=
"ease-in-circ",n.InCubic="ease-in-cubic",n.InExpo="ease-in-expo",
n.InOut="ease-InOut",n.InOutCirc="ease-InOut-circ",n.InOutCubic="\
ease-InOut-cubic",n.InOutExpo="ease-InOut-expo",n.InOutQuad="ease\
-InOut-quad",n.InOutQuart="ease-InOut-quart",n.InOutQuint="ease-I\
nOut-quint",n.InOutSine="ease-InOut-sine",n.InQuad="ease-in-quad",
n.InQuart="ease-in-quart",n.InQuint="ease-in-quint",n.InSine="eas\
e-in-sine",n.Out="ease-out",n.OutCirc="ease-out-circ",n.OutCubic=
"ease-out-cubic",n.OutExpo="ease-out-expo",n.OutQuad="ease-out-qu\
ad",n.OutQuart="ease-out-quart",n.OutQuint="ease-out-quint",n.OutSine=
"ease-out-sine",n))(N||{}),v=new Map([["ease",[e(.25,.1),e(.25,1)]],
["ease-in",[e(.42,0),e(1,1)]],["ease-in-circ",[e(.55,0),e(1,.45)]],
["ease-in-cubic",[e(.32,0),e(.67,0)]],["ease-in-expo",[e(.7,0),e(
.84,0)]],["ease-InOut-circ",[e(.85,0),e(.15,1)]],["ease-InOut-cub\
ic",[e(.65,0),e(.35,1)]],["ease-InOut-expo",[e(.87,0),e(.13,1)]],
["ease-InOut-quad",[e(.45,0),e(.55,1)]],["ease-InOut-quart",[e(.76,
0),e(.24,1)]],["ease-InOut-quint",[e(.83,0),e(.17,1)]],["ease-InO\
ut-sine",[e(.37,0),e(.63,1)]],["ease-InOut",[e(.42,0),e(.58,1)]],
["ease-in-quad",[e(.11,0),e(.5,0)]],["ease-in-quart",[e(.5,0),e(.75,
0)]],["ease-in-quint",[e(.64,0),e(.78,0)]],["ease-in-sine",[e(.12,
0),e(.39,0)]],["ease-out",[e(0,0),e(.58,1)]],["ease-out-circ",[e(
0,.55),e(.45,1)]],["ease-out-cubic",[e(.33,1),e(.68,1)]],["ease-o\
ut-expo",[e(.16,1),e(.3,1)]],["ease-out-quad",[e(.5,1),e(.89,1)]],
["ease-out-quart",[e(.25,1),e(.5,1)]],["ease-out-quint",[e(.22,1),
e(.36,1)]],["ease-out-sine",[e(.61,1),e(.88,1)]],["line",[e(0,0),
e(1,1)]]]),pe=new Map(v.entries().map(([r,o])=>[r,t=>K([[0,0],[1,
1]],o,t)])),ae=u((r,o,t)=>{let s=1-t;return P(3*(2*(t-1)*t+s**2)*
r+3*(-t*t*t+2*s*t)*o)},"derive");function K(r,o,t){let[[s=0,T=0,i=0],
[l=1,b=1,S=1]]=r,[[I,d,x],[f,h,C]]=o;return Iterator.from(c(t)?[t]:
t).map(p=>{let m=1-p,R=m**3,y=p**3,Q=3*p*m**2,D=3*m*p**2,a=u((n,E,F,z)=>P(
n*R+E*Q+F*D+z*y),"calc"),[g,w,k]=x!=null&&C!=null?[a(s,I,f,l),a(T,
d,h,b),a(i,x,C,S)]:[a(s,I,f,l),a(T,d,h,b)];return e(g,w,k,{ratio:p})})}
u(K,"performBezierInterpolation");function se(r,o,t){let[[s=0,T=0,
i=0],[l=1,b=1,S=1]]=r,[[I,d,x],[f,h,C]]=o;return Iterator.from(c(
t)?[t]:t).map(p=>{let m=p**2,R=m*(2*p-3)+1,y=m*(3-2*p),Q=m*(p-2)+
p,D=m*(p-1),a=u((n,E,F,z)=>P(n*R+E*Q+F*D+z*y),"calc"),[g,w,k]=x!=
null&&C!=null?[a(s,I,f,l),a(T,d,h,b),a(i,x,C,S)]:[a(s,I,f,l),a(T,
d,h,b)];return e(g,w,k,{ratio:p})})}u(se,"performHermiteInterpola\
tion");export{v as XCorrCTR,N as XCorrID,pe as XEaseFN,ae as derive,K as performBezierInterpolation,
se as performHermiteInterpolation};
