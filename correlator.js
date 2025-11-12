var B=Object.defineProperty;var t=(r,o)=>B(r,"name",{value:o,configurable:!0});var F=t((r,o=12)=>{let a=o>0?10**o:1;return Math.sign(r)*Math.round(
(Math.abs(r)+Number.EPSILON)*a)/a},"round");var z=t(r=>r===!0||r===!1||r==="true"||r==="on"||r==="off","isBoo\
lean"),j=t(r=>C(r)&&Symbol.iterator in r&&typeof r[Symbol.iterator]==
"function","isIterableObject"),h=t(r=>typeof r=="number","isNumbe\
r"),C=t(r=>r!==null&&typeof r=="object","isObject"),A=t(r=>typeof r==
"string","isString");function e(r,o,a,T,p){let m=t(i=>z(i)||h(i)||A(i)||j(i)||i===null,
"isValidValue"),y=t(i=>C(i)&&Object.values(i).every(l=>m(l)),"isA\
ditionalProperties"),I=Iterator.from((function*(){yield r,yield o,
m(a)&&(yield a),m(T)&&(yield T)})()),f=I.toArray().length,d=!0,s={
length:{enumerable:d,value:f}},x=Object.entries(Iterator.from(arguments).
filter(i=>y(i)).next().value??{});for(let[i,l]of x)s[i]={enumerable:d,
value:l};return Object.defineProperties(I,s)}t(e,"createTuple");var q=t(([r,o],[a,T],p)=>{let[m,y,I=0]=r,[f,d,s]=a,[x,i,l]=T,[O,S,
P=1]=o;return Iterator.from(h(p)?[p]:p).map(u=>{let c=1-u,g=c**3,
D=u**3,w=3*u*c**2,k=3*c*u**2,b=t((Q,R,n,E)=>F(Q*g+R*w+n*k+E*D),"c\
alc");return(function*(){yield b(m,f,x,O),yield b(y,d,i,S),s!=null&&
l!=null&&(yield b(I,s,l,P)),yield u})()})},"performBezierInterpol\
ation"),re=t(([r,o],[a,T],p)=>{let[m,y,I=0]=r,[f,d,s]=a,[x,i,l]=T,
[O,S,P=1]=o;return Iterator.from(h(p)?[p]:p).map(u=>{let c=u**2,g=c*
(2*u-3)+1,D=c*(3-2*u),w=c*(u-2)+u,k=c*(u-1),b=t((Q,R,n,E)=>F(Q*g+
R*w+n*k+E*D),"calc");return(function*(){yield b(m,f,x,O),yield b(
y,d,i,S),s!=null&&l!=null&&(yield b(I,s,l,P)),yield u})()})},"per\
formHermiteInterpolation"),M=(n=>(n.Ease="ease",n.Linear="line",n.
In="ease-in",n.InCirc="ease-in-circ",n.InCubic="ease-in-cubic",n.
InExpo="ease-in-expo",n.InOut="ease-InOut",n.InOutCirc="ease-InOu\
t-circ",n.InOutCubic="ease-InOut-cubic",n.InOutExpo="ease-InOut-e\
xpo",n.InOutQuad="ease-InOut-quad",n.InOutQuart="ease-InOut-quart",
n.InOutQuint="ease-InOut-quint",n.InOutSine="ease-InOut-sine",n.InQuad=
"ease-in-quad",n.InQuart="ease-in-quart",n.InQuint="ease-in-quint",
n.InSine="ease-in-sine",n.Out="ease-out",n.OutCirc="ease-out-circ",
n.OutCubic="ease-out-cubic",n.OutExpo="ease-out-expo",n.OutQuad="\
ease-out-quad",n.OutQuart="ease-out-quart",n.OutQuint="ease-out-q\
uint",n.OutSine="ease-out-sine",n))(M||{}),v=new Map((function*(){
yield["ease",e(e(.25,.1),e(.25,1))],yield["ease-in",e(e(.42,0),e(
1,1))],yield["ease-in-circ",e(e(.55,0),e(1,.45))],yield["ease-in-\
cubic",e(e(.32,0),e(.67,0))],yield["ease-in-expo",e(e(.7,0),e(.84,
0))],yield["ease-InOut-circ",e(e(.85,0),e(.15,1))],yield["ease-In\
Out-cubic",e(e(.65,0),e(.35,1))],yield["ease-InOut-expo",e(e(.87,
0),e(.13,1))],yield["ease-InOut-quad",e(e(.45,0),e(.55,1))],yield[
"ease-InOut-quart",e(e(.76,0),e(.24,1))],yield["ease-InOut-quint",
e(e(.83,0),e(.17,1))],yield["ease-InOut-sine",e(e(.37,0),e(.63,1))],
yield["ease-InOut",e(e(.42,0),e(.58,1))],yield["ease-in-quad",e(e(
.11,0),e(.5,0))],yield["ease-in-quart",e(e(.5,0),e(.75,0))],yield[
"ease-in-quint",e(e(.64,0),e(.78,0))],yield["ease-in-sine",e(e(.12,
0),e(.39,0))],yield["ease-out",e(e(0,0),e(.58,1))],yield["ease-ou\
t-circ",e(e(0,.55),e(.45,1))],yield["ease-out-cubic",e(e(.33,1),e(
.68,1))],yield["ease-out-expo",e(e(.16,1),e(.3,1))],yield["ease-o\
ut-quad",e(e(.5,1),e(.89,1))],yield["ease-out-quart",e(e(.25,1),e(
.5,1))],yield["ease-out-quint",e(e(.22,1),e(.36,1))],yield["ease-\
out-sine",e(e(.61,1),e(.88,1))],yield["line",e(e(0,0),e(1,1))]})()),
te=new Map(v.entries().map(([r,o])=>[r,a=>q([e(0,0),e(1,1)],o,a)]));export{v as XCorrCTR,M as XCorrID,te as XEaseFN,q as performBezierInterpolation,
re as performHermiteInterpolation};
