var E=Object.defineProperty;var e=(t,r)=>E(t,"name",{value:r,configurable:!0});var O=class{static{e(this,"CubicBezier")}cx;bx;ax;cy;by;ay;name;constructor(r=0,i=0,n=1,u=1,l){
this.cx=3*r,this.bx=3*(n-r)-this.cx,this.ax=1-this.cx-this.bx,this.
cy=3*i,this.by=3*(u-i)-this.cy,this.ay=1-this.cy-this.by,this.name=
l||([r,i].every(a=>a===0)&&[n,u].every(a=>a===1)?"linear":`cubic-\
bezier(${[r,i,n,u].join(",")})`)}sampleCurveX(r){return((this.ax*
r+this.bx)*r+this.cx)*r}sampleCurveY(r){return((this.ay*r+this.by)*
r+this.cy)*r}sampleCurveDerivativeX(r){return(3*this.ax*r+2*this.
bx)*r+this.cx}solveCurveX(r){if(0>=r)return 0;if(1<=r)return 1;let n=r,
u=0,l=0;for(let c=0;8>c;c+=1){if(u=this.sampleCurveX(n)-r,Math.abs(
u)<1e-6)return n;if(l=this.sampleCurveDerivativeX(n),Math.abs(l)<
1e-6)break;n-=u/l}let a=0,m=1;for(n=r;a<m;){if(u=this.sampleCurveX(
n),Math.abs(u-r)<1e-6)return n;r>u?a=n:m=n,n=a+(m-a)/2}return n}};var M=e(t=>typeof t=="number","isNumber"),j=e(t=>typeof t=="strin\
g","isString"),S=e(t=>I(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function","isIterableObject"),I=e(t=>t!==null&&typeof t==
"object","isObject");var Q=e(t=>j(t)&&z.has(t),"isSpaceID"),V=e(t=>I(t)&&"ident"in t&&
Q(t.ident)&&"CSYS"in t&&I(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===
3,"isColorSpace");var z=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch","ok\
lab","oklch","prophoto-rgb","rec2020","srgb-linear","srgb","rgb",
"xyz","xyz-d50","xyz-d65"]);var T=e(t=>S(t)&&Iterator.from(t).every(r=>typeof r=="number")&&"\
length"in t&&t.length===3&&"space"in t&&V(t.space),"isPointInSpac\
e");function ct(t,r){if(V(t)===!1)throw new TypeError("Point must be \
declared in a valid color space instead of "+JSON.stringify(t,void 0,
2));if((S(r)&&Iterator.from(r).every(o=>M(o)))===!1)throw new TypeError(
"Point in space has valid coordinates. Wrong parameters: "+JSON.stringify(
r,void 0,2));let i=t.CSYS.length,n=new Float64Array(i),u=t.CAM===
void 0?Array.of(0,1,2):t.CAM.toArray().map(o=>t.CSYS.toArray().findIndex(
s=>o.$coord===s)),l={adapted:{get(){if(typeof this.space.CSYS.adapt==
"function"){let[o,s,h]=this.position;return Iterator.from(this.space.
CSYS.adapt(o,s,h))}else return this.position}},position:{get:e(()=>Iterator.
from(n),"get"),set:e(o=>n.set(o),"set")},set:{value:e(function(o){
return Iterator.from(o).take(3).forEach((s,h)=>this[h]=s),this},"\
value")}};for(let o=0;o<i;o++)((s,h,f)=>{l[s]={enumerable:!0,get(){
let{CAM:p,CSYS:b}=this.space,y=b[h],d=p!==void 0?p[s]:null,g=f[h];
return"output"in y&&typeof y.output=="function"&&(g=y.output(g)),
d!==null&&"output"in d&&typeof d.output=="function"&&(g=d.output(
g)),g},set(p){let{CAM:b,CSYS:y}=this.space,d=y[h],g=b!==void 0?b[s]:
null;g!==null&&"input"in g&&typeof g.input=="function"&&(p=g.input(
p)),"input"in d&&typeof d.input=="function"&&(p=d.input(p)),typeof p==
"string"&&(p=parseFloat(p)),f[h]=p}}})(o,u[o],n);let a={buffer:{value:n.
buffer},colorspace:{enumerable:!0,value:t.ident},equals:{value:e(
function(o,s=1e-12){let[h,f,p]=this.position,[b,y,d]=o.position;return this.
colorspace===o.colorspace&&Math.abs(h-b)<=s*Math.max(1,Math.abs(h),
Math.abs(b))&&Math.abs(f-y)<=s*Math.max(1,Math.abs(f),Math.abs(y))&&
Math.abs(p-d)<=s*Math.max(1,Math.abs(p),Math.abs(d))},"value")},space:{
value:t},wcs:{value:t.CAM??t.CSYS}};return Object.create(null,{...l,
...a,...{[Symbol.iterator]:{value:e(function*(){yield this[0],yield this[1],
yield this[2]},"value")},[Symbol.toStringTag]:{get(){return`Point\
InSpace(${this.toString()})`}},toString:{value:e(function(){return`${this.
colorspace};[${this.values().toArray().toString()}]`},"value")},length:{
value:i},entries:{value:e(function(){let o=this.space.CAM??this.space.
CSYS;return Iterator.from([[o[0],this[0]],[o[1],this[1]],[o[2],this[2]]])},
"value")},values:{value:e(function(){return Iterator.from(this)},
"value")}}}).set(Array.from(r))}e(ct,"initPointInSpace");function x(...t){let[r,i]=t.length===1?Array.of(0,t[0]):Array.of(
Math.min(...t),Math.max(...t)),n=Object.create(null,{0:{value:r},
1:{value:i},[Symbol.iterator]:{value:e(function*(){yield this[0],
yield this[1]},"value")},[Symbol.toStringTag]:{get(){return`Range\
{x \u2208 R; ${this[0]} \u22DC x \u22DC ${this[1]}}`}},avg:{enumerable:!0,
get(){return this[0]+this.value/2}},length:{value:2},value:{enumerable:!0,
get(){return this[1]-this[0]}},toString:{value:e(function(){return this[0]+
","+this[1]},"value")}});return Object.defineProperties(n,{from:{
enumerable:!0,value:r},to:{enumerable:!0,value:i},allot:{value:e(
function(l){return this.test(l)?l:l>this.from?(l-this.to)%this.value+
this.from:this.to-(this.from-l)%this.value},"allocateOuterValue")},
clamp:{value:e(function(l){return this.test(l)?l:Math.max(Math.min(
l,this.to),this.from)},"restrictOuterValue")},test:{value:e(function(u){
return this.from<=u&&u<=this.to},"value")}}),n}e(x,"initRange");function yt(t=[0,100],r=[0,1]){let[i,n]=r,[u,l]=t,[a,m]=[n-i,l-u];
function c(s){return typeof s=="string"&&(s=parseFloat(s)),o.domain.
test(s)===!1&&(s=s>n?(s-n)%a+i:n-(i-s)%a),m*(s-i)/a+u}e(c,"invert");
function o(s){return typeof s=="string"&&(s=parseFloat(s)),o.range.
test(s)===!1&&(s=s>l?(s-l)%m+u:l-(u-s)%m),a*(s-u)/m+i}return e(o,
"calculator"),Object.defineProperties(o,{domain:{enumerable:!0,value:x(
i,n)},range:{enumerable:!0,value:x(u,l)},invert:{enumerable:!0,value:c}})}
e(yt,"initScale");var A=e(t=>S(t)&&"length"in t&&t.length===3&&"magnitude"in t&&M(t.
magnitude)&&"base"in t&&S(t.base)&&"head"in t&&S(t.head),"isVecto\
rQuantity"),X=e(t=>I(t)&&Iterator.from(["angle","dot","distance",
"cross"]).every(r=>r in t&&typeof t[r]=="function"),"hasVectorCal\
culus"),xt=e(t=>A(t)&&X(t),"isVector");var k=e((t,r=12)=>{let i=r?10**r:1;return Math.sign(t)*Math.round(
(Math.abs(t)+Number.EPSILON)*i)/i},"round");function C(t,r=0,i=0){let n=T(t)?new Float64Array(t.buffer):Float64Array.
of(t,r,i),{length:u}=n,l={each:{value:e(function(c){for(let o=0;o<
this.length;o++)c(this[o],o,this);return this},"value")},multiply:{
value:e(function(o){if(S(o)){let[s,h,f,p,b,y,d,g,D]=o,[R,P,w]=this.
head;return this.update(R*s+P*p+w*d,R*h+P*b+w*g,R*f+P*y+w*D)}else
throw new TypeError("Unsupported Multiplicator: "+o)},"multiply")},
update:{value:e(function(c,o,s){let[h,f,p]=(Array.isArray(c)?c.slice(
3):Array.of(c,o,s)).filter(b=>typeof b=="number");return this.head=
Array.of(h??this[0],f??this[1],p??this[2]),this},"value")}},a={base:{
get:e(()=>Iterator.from([0,0,0]),"get")},head:{enumerable:!0,get:e(
()=>Iterator.from(n),"get"),set:e(c=>n.set(c),"set")},magnitude:{
enumerable:!0,get(){return k(Math.hypot(...this.head))}}},m={[Symbol.
iterator]:{value:e(function*(){for(let c of this.head)yield c},"v\
alue")},length:{enumerable:!0,value:u}};for(let c=0;c<u;c++)(o=>{
m[o]={enumerable:!0,get:e(()=>n[o],"get"),set:e(s=>{if(typeof s==
"number")n[c]=s;else throw new TypeError("Expected Number")},"set")}})(
c);return Object.create(null,Object.assign({},l,a,m))}e(C,"makeVe\
ctorQuantity");function kt(t,r=0,i=0){let n=A(t)?t:T(t)?C(t):C(t,r,i),u={[Symbol.
isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{get(){return`\
Vector[${this.toString()}]`}},entries:{value:e(function(){return this.
values().map((c,o)=>[o,c])},"value")},values:{value:e(function(){
return Iterator.from(this)},"value")},toArray:{value:e(function(){
return this.head.toArray()},"value")},toString:{value:e(function(){
return this.head.toString()},"value")}},l={each:Object.getOwnPropertyDescriptor(
n,"each"),multiply:Object.getOwnPropertyDescriptor(n,"multiply"),
update:Object.getOwnPropertyDescriptor(n,"update")};return Object.
create(n,Object.assign({},u,l,{sqrtMagnitude:{get(){return this.head.
reduce((c,o)=>c+o**2,0)}}},{clone:{value:G},angle:{value:_},cross:{
value:N},distance:{value:F},dot:{value:Y},equals:{value:q},normalize:{
value:K},randomly:{value:L},strictEquals:{value:$},zeroize:{value:U}}))}
e(kt,"initVectorCalculus");function _(t,r="deg"){let i=Math.sqrt(
this.sqrtMagnitude*t.sqrtMagnitude),n=i&&this.dot(t)/i,u=Math.acos(
Math.min(Math.max(n,-1),1));return r==="deg"?u*180/Math.PI:r==="g\
rad"?u*200/Math.PI:r==="turn"?u/Math.PI:u}e(_,"angle");function N(t){
let[r,i,n]=this.head,[u,l,a]=t,m=i*a-n*l,c=n*u-r*a,o=r*l-i*u;return this.
update(m,c,o)}e(N,"cross");function F(t){return Math.sqrt(this.head.
reduce((r,i,n)=>r+Math.pow(t[n]-i,2),0))}e(F,"distance");function Y(t){
let[r,i,n]=this.head,[u,l,a]=t;return r*u+i*l+n*a}e(Y,"dot");function q(t,r=1e-5){
let[i,n,u]=this.head,[l,a,m]=t;return Math.abs(i-l)<=r*Math.max(1,
Math.abs(i),Math.abs(l))&&Math.abs(n-a)<=r*Math.max(1,Math.abs(n),
Math.abs(a))&&Math.abs(u-m)<=r*Math.max(1,Math.abs(u),Math.abs(m))}
e(q,"equals");function $(t){let[r,i,n]=this.head,[u,l,a]=t;return r===
u&&i===l&&n===a}e($,"strictEquals");function G(){return C(this[0],
this[1],this[2])}e(G,"makeEqualVectorQuantity");function K(){let t=1/
this.magnitude;return this.each((r,i,n)=>n[i]=r*t)}e(K,"normalize");
function L(t=1){let r=Math.random()*2*Math.PI,i=Math.random()*2-1,
n=Math.sqrt(1-Math.pow(i,2))*t;return this.update(Math.cos(r)*n,Math.
sin(r)*n,i*t)}e(L,"randomly");function U(){return this.update(0,0,
0)}e(U,"zeroize");function v(...t){let r=Math.max(t.length,9),i=new ArrayBuffer(r*8),
n=new Float64Array(i,0,r);n.set(t);let u={[Symbol.isConcatSpreadable]:{
value:!0},[Symbol.iterator]:{value:e(function*(){for(let a=0;a<this.
length;a++)yield this[a]},"value")},[Symbol.toStringTag]:{value:e(
()=>`Matrix[${n.toString()}]`,"value")},toArray:{value:e(()=>Array.
from(n.values()),"value")},toString:{value:e(()=>n.toString(),"va\
lue")},length:{enumerable:!0,value:r},values:{value:e(()=>n.values(),
"value")}};for(let a=0;a<r;a++)u[a]=((m,c)=>({enumerable:!0,get:e(
()=>m[c],"get"),set:e(o=>{if(typeof o=="number")m[c]=o;else throw new TypeError(
"Expected Number")},"set")}))(n,a);return Object.create(null,Object.
assign({},u,{clone:{value:e(function(){return v(...this.toArray())},
"value")},each:{value:e(function(a){return this.toArray().forEach(
(m,c,o)=>a(m,c,this)),this},"value")},determinant:{value:e(function(){
let[a,m,c,o,s,h,f,p,b]=this.toArray(),y=b*s-h*p,d=-b*o+h*f,g=p*o-
s*f;return a*y+m*d+c*g},"value")},invert:{value:e(function(){let a=this.
determinant();if(a===0)throw console.table(this),new Error("A sin\
gular or non-square matrix matrix cannot be inverted.");let[m,c,o,
s,h,f,p,b,y]=this.toArray(),d=y*h-f*b,g=-y*s+f*p,D=b*s-h*p;return this.
update(d/a,(-y*c+o*b)/a,(f*c-o*h)/a,g/a,(y*m-o*p)/a,(-f*m+o*s)/a,
D/a,(-b*m+c*p)/a,(h*m-c*s)/a)},"value")},update:{value:e(function(...a){
return n.set(a.map((m,c)=>typeof m=="number"?m:n[c])),this},"valu\
e")}}))}e(v,"makeMatrix");var _t=v(1,0,0,0,1,0,0,0,1),Nt=v(0,1,0,0,0,1,0,0,0),Ft=v(0,0,0,1,
0,0,0,1,0),Yt=v(0,0,1,0,1,0,1,0,0);var Gt=x(0,360),Kt=x(0,2*Math.PI),Lt=x(0,100),Ut=x(0,255),Zt=x(0,
1);export{O as CubicBezier,Gt as DEGREE_RANGE,Yt as EXCHANGE_MATRIX,
_t as IDENTITY_MATRIX,Ut as INT8_RANGE,Ft as LOWER_SHIFT_MATRIX,Lt as PERCENT_RANGE,
Kt as RADIAN_RANGE,Zt as UNIT_RANGE,Nt as UPPER_SHIFT_MATRIX,X as hasVectorCalculus,
ct as initPointInSpace,x as initRange,yt as initScale,kt as initVector,
kt as initVectorCalculus,T as isPointInSpace,xt as isVector,A as isVectorQuantity,
v as makeMatrix,k as round};
