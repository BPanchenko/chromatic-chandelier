var v=Object.defineProperty;var t=(n,o)=>v(n,"name",{value:o,configurable:!0});var x=t((n,o=12)=>{let u=o>0?10**o:1;return Math.sign(n)*Math.round(
(Math.abs(n)+Number.EPSILON)*u)/u},"round");var j=t(n=>n===!0||n===!1||n==="true"||n==="on"||n==="off","isBoo\
lean"),q=t(n=>P(n)&&Symbol.iterator in n&&typeof n[Symbol.iterator]==
"function","isIterableObject"),C=t(n=>typeof n=="number","isNumbe\
r"),P=t(n=>n!==null&&typeof n=="object","isObject"),M=t(n=>typeof n==
"string","isString");function e(){let n=t(i=>j(i)||C(i)||M(i)||q(i)||i===null,"isValid\
Value"),o=t(i=>P(i)&&Object.values(i).every(l=>n(l)),"isAditional\
Properties"),u=!0,s=Array.from(arguments).filter(i=>n(i)),m={};return Object.
entries(Iterator.from(arguments).filter(i=>o(i)).next().value??{}).
forEach(([i,l])=>m[i]={enumerable:u,value:l}),Object.defineProperties(
s,m)}t(e,"createTuple");var re=t((n,o,u)=>{let s=1-u;return x(3*(2*(u-1)*u+s**2)*n+3*(-u*
u*u+2*s*u)*o)},"derive"),N=t(([[n=0,o=0,u=0],[s=1,m=1,i=1]],[[l,b,
I],[d,h,f]],T)=>Iterator.from(C(T)?[T]:T).map(p=>{let c=1-p,O=c**
3,S=p**3,R=3*p*c**2,g=3*c*p**2,a=t((y,E,r,F)=>x(y*O+E*R+r*g+F*S),
"calc"),D=I!=null&&f!=null,[Q,w,k]=D?[a(n,l,d,s),a(o,b,h,m),a(u,I,
f,i)]:[a(n,l,d,s),a(o,b,h,m)];return e(Q,w,k,{ratio:p})}),"perfor\
mBezierInterpolation"),te=t(([[n=0,o=0,u=0],[s=1,m=1,i=1]],[[l,b,
I],[d,h,f]],T)=>Iterator.from(C(T)?[T]:T).map(p=>{let c=p**2,O=c*
(2*p-3)+1,S=c*(3-2*p),R=c*(p-2)+p,g=c*(p-1),a=t((y,E,r,F)=>x(y*O+
E*R+r*g+F*S),"calc"),D=I!=null&&f!=null,[Q,w,k]=D?[a(n,l,d,s),a(o,
b,h,m),a(u,I,f,i)]:[a(n,l,d,s),a(o,b,h,m)];return e(Q,w,k,{ratio:p})}),
"performHermiteInterpolation"),K=(r=>(r.Ease="ease",r.Linear="lin\
e",r.In="ease-in",r.InCirc="ease-in-circ",r.InCubic="ease-in-cubi\
c",r.InExpo="ease-in-expo",r.InOut="ease-InOut",r.InOutCirc="ease\
-InOut-circ",r.InOutCubic="ease-InOut-cubic",r.InOutExpo="ease-In\
Out-expo",r.InOutQuad="ease-InOut-quad",r.InOutQuart="ease-InOut-\
quart",r.InOutQuint="ease-InOut-quint",r.InOutSine="ease-InOut-si\
ne",r.InQuad="ease-in-quad",r.InQuart="ease-in-quart",r.InQuint="\
ease-in-quint",r.InSine="ease-in-sine",r.Out="ease-out",r.OutCirc=
"ease-out-circ",r.OutCubic="ease-out-cubic",r.OutExpo="ease-out-e\
xpo",r.OutQuad="ease-out-quad",r.OutQuart="ease-out-quart",r.OutQuint=
"ease-out-quint",r.OutSine="ease-out-sine",r))(K||{}),L=new Map([
["ease",[e(.25,.1),e(.25,1)]],["ease-in",[e(.42,0),e(1,1)]],["eas\
e-in-circ",[e(.55,0),e(1,.45)]],["ease-in-cubic",[e(.32,0),e(.67,
0)]],["ease-in-expo",[e(.7,0),e(.84,0)]],["ease-InOut-circ",[e(.85,
0),e(.15,1)]],["ease-InOut-cubic",[e(.65,0),e(.35,1)]],["ease-InO\
ut-expo",[e(.87,0),e(.13,1)]],["ease-InOut-quad",[e(.45,0),e(.55,
1)]],["ease-InOut-quart",[e(.76,0),e(.24,1)]],["ease-InOut-quint",
[e(.83,0),e(.17,1)]],["ease-InOut-sine",[e(.37,0),e(.63,1)]],["ea\
se-InOut",[e(.42,0),e(.58,1)]],["ease-in-quad",[e(.11,0),e(.5,0)]],
["ease-in-quart",[e(.5,0),e(.75,0)]],["ease-in-quint",[e(.64,0),e(
.78,0)]],["ease-in-sine",[e(.12,0),e(.39,0)]],["ease-out",[e(0,0),
e(.58,1)]],["ease-out-circ",[e(0,.55),e(.45,1)]],["ease-out-cubic",
[e(.33,1),e(.68,1)]],["ease-out-expo",[e(.16,1),e(.3,1)]],["ease-\
out-quad",[e(.5,1),e(.89,1)]],["ease-out-quart",[e(.25,1),e(.5,1)]],
["ease-out-quint",[e(.22,1),e(.36,1)]],["ease-out-sine",[e(.61,1),
e(.88,1)]],["line",[e(0,0),e(1,1)]]]),ue=new Map(L.entries().map(
([n,o])=>[n,u=>N([[0,0],[1,1]],o,u)]));export{L as XCorrCTR,K as XCorrID,ue as XEaseFN,re as derive,N as performBezierInterpolation,
te as performHermiteInterpolation};
