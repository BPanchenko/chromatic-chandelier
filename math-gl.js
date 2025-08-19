var C=Object.defineProperty;var o=(e,r)=>C(e,"name",{value:r,configurable:!0});var v=class{static{o(this,"CubicBezier")}cx;bx;ax;cy;by;ay;name;constructor(r=0,i=0,t=1,a=1,n){
this.cx=3*r,this.bx=3*(t-r)-this.cx,this.ax=1-this.cx-this.bx,
this.cy=3*i,this.by=3*(a-i)-this.cy,this.ay=1-this.cy-this.by,
this.name=n||([r,i].every(s=>s===0)&&[t,a].every(s=>s===1)?"\
linear":`cubic-bezier(${[r,i,t,a].join(",")})`)}sampleCurveX(r){
return((this.ax*r+this.bx)*r+this.cx)*r}sampleCurveY(r){return((this.
ay*r+this.by)*r+this.cy)*r}sampleCurveDerivativeX(r){return(3*
this.ax*r+2*this.bx)*r+this.cx}solveCurveX(r){if(0>=r)return 0;
if(1<=r)return 1;let t=r,a=0,n=0;for(let l=0;8>l;l+=1){if(a=
this.sampleCurveX(t)-r,Math.abs(a)<1e-6)return t;if(n=this.sampleCurveDerivativeX(
t),Math.abs(n)<1e-6)break;t-=a/n}let s=0,m=1;for(t=r;s<m;){if(a=
this.sampleCurveX(t),Math.abs(a-r)<1e-6)return t;r>a?s=t:m=t,
t=s+(m-s)/2}return t}};var E=o(e=>y(e)&&Symbol.iterator in e&&"minimum"in e&&f(e.minimum)&&
"maximum"in e&&f(e.maximum)&&"value"in e&&f(e.value)&&e.value>
0,"isRange");function p(...e){let r=e.length===1?Array.of(0,e[0]):Array.of(
Math.min(...e),Math.max(...e)),[i,t]=r,a=t-i,n=i+a/2;return Object.
create(null,{from:{value:i},to:{value:t},minimum:{enumerable:!0,
value:i},maximum:{enumerable:!0,value:t},avg:{enumerable:!0,
value:n},value:{enumerable:!0,value:a},allot:{value:T},clamp:{
value:O},test:{value:o(s=>i<=s&&s<=t,"value")},toString:{value:o(
()=>String.raw`{x ∈ R; ${i} ⋜ x ⋜ ${t}}`,"value")},[Symbol.
iterator]:{value:o(function*(){yield this.from,yield this.to},
"value")},length:{value:2}})}o(p,"createRange");function T(e){
return this.test(e)?e:e>this.from?(e-this.to)%this.value+this.
from:this.to-(this.from-e)%this.value}o(T,"allocateOuterValu\
e");function O(e){return this.test(e)?e:Math.max(Math.min(e,
this.to),this.from)}o(O,"restrictOuterValue");var N=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch",
"oklab","oklch","prophoto-rgb","rec2020","rec2100-pq","rec21\
00-hlg","rec2100-linear","srgb-linear","srgb","rgb","xyz","x\
yz-d50","xyz-d65"]);var w=o(e=>A(e)&&N.has(e),"isSpaceID");var R=o(e=>y(e)&&"ident"in e&&w(e.ident)&&"CSYS"in e&&y(e.CSYS)&&
"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),x=o(e=>y(
e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]=="functi\
on","isIterableObject"),f=o(e=>typeof e=="number","isNumber"),
y=o(e=>e!==null&&typeof e=="object"&&Array.isArray(e)===!1,"\
isObject"),A=o(e=>typeof e=="string","isString");var V=o(e=>y(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]==
"function"&&"length"in e&&typeof e.length=="number"&&e.length>=
9,"isMatrix");function g(...e){let r=Math.max(e.length,9),i=new ArrayBuffer(
r*8),t=new Float64Array(i,0,r),a=Object.create(null,{[Symbol.
iterator]:{value:o(function*(){for(let n=0;n<t.length;n++)yield this[n]},
"value")},[Symbol.isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{
value:o(()=>"Matrix"+t.toString(),"value")},length:{enumerable:!0,
value:r},toArray:{value:o(()=>Iterator.from(t).toArray(),"va\
lue")},toString:{value:t.toString}});for(let n=0;n<r;n++)(function(s,m,l){
Object.defineProperty(s,m,{enumerable:!0,get:o(()=>l[m],"get"),
set:o(c=>{if(typeof c=="number")l[m]=c;else throw new TypeError(
"Expected Number")},"set")})})(a,n,t);return Object.defineProperties(
a,{clone:{value:o(()=>g(...t),"value")},each:{value:o(function(n){
return t.forEach((s,m,l)=>n(s,m,this)),this},"value")},determinant:{
value:o(()=>{let[n,s,m,l,c,u,h,b,d]=t,S=d*c-u*b,M=-d*l+u*h,I=b*
l-c*h;return n*S+s*M+m*I},"value")},invert:{value:o(function(){
let n=this.determinant();if(n===0)throw console.table(this),
new Error("A singular or non-square matrix matrix cannot be \
inverted.");let[s,m,l,c,u,h,b,d,S]=t,M=S*u-h*d,I=-S*c+h*b,D=d*
c-u*b;return this.update(M/n,(-S*m+l*d)/n,(h*m-l*u)/n,I/n,(S*
s-l*b)/n,(-h*s+l*c)/n,D/n,(-d*s+m*b)/n,(u*s-m*c)/n)},"value")},
update:{value:o(function(){return t.set(Iterator.from(arguments).
map(n=>typeof n=="number"?n:0).toArray()),this},"value")}}),
a.update(...e)}o(g,"createMatrix");var P=o(e=>x(e)&&"space"in e&&R(e.space)&&"length"in e&&e.length===
3&&Iterator.from(e).every(r=>typeof r=="number"),"isPointInS\
pace");var pe=1e-6,_=o((e,r=6)=>{let i=10**r;return Math.sign(e)*Math.
round((Math.abs(e)+Number.EPSILON)*i)/i},"round");var j=o(e=>x(e)&&"length"in e&&e.length===3&&Iterator.from(e).
every(r=>typeof r=="number")&&"magnitude"in e&&f(e.magnitude)&&
"base"in e&&x(e.base)&&"head"in e&&x(e.head),"isVector");function k(e,r=0,i=0){let t=P(e)?new Float64Array(e.buffer):
Float64Array.of(e,r,i),a=Object.create(null,{base:{get:o(()=>Iterator.
from([0,0,0]),"get")},head:{enumerable:!0,get:o(()=>Iterator.
from(t),"get")},magnitude:{enumerable:!0,get:o(()=>_(Math.hypot(
...t),9),"get")},sqrMagnitude:{get:o(()=>t.reduce((n,s)=>n+s**
2,0),"get")}});return Object.defineProperties(a,{clone:{value:o(
()=>k(t[0],t[1],t[2]),"value")},angle:{value:z},cross:{value:F},
distance:{value:X},dot:{value:Y},each:{value:q},equals:{value:$},
multiply:{value:L},normalize:{value:B},randomly:{value:Z},strictEquals:{
value:G},update:{value:o(function(n,s,m){let l=Array.isArray(
n)?n.slice(3):Array.of(n,s,m);return t.set(this.head.map((c,u)=>l[u]??
c).toArray()),this},"value")},zeroize:{value:H}}),Object.defineProperties(
a,{toString:{value:o(()=>t.toString(),"value")},[Symbol.toStringTag]:{
get(){return`Vector[${this.toString()}]`}}}),Object.defineProperties(
a,{[Symbol.isConcatSpreadable]:{value:!0},[Symbol.iterator]:{
value:o(function*(){yield this[0],yield this[1],yield this[2]},
"value")},0:{enumerable:!0,get:o(()=>t[0],"get"),set:o(n=>{if(typeof n==
"number")t[0]=n;else throw new TypeError("Expected Number")},
"set")},1:{enumerable:!0,get:o(()=>t[1],"get"),set:o(n=>{if(typeof n==
"number")t[1]=n;else throw new TypeError("Expected Number")},
"set")},2:{enumerable:!0,get:o(()=>t[2],"get"),set:o(n=>{if(typeof n==
"number")t[2]=n;else throw new TypeError("Expected Number")},
"set")},length:{enumerable:!0,value:3}}),a}o(k,"createVector");
function z(e,r=!1){let i=Math.sqrt(this.sqrMagnitude*e.sqrMagnitude),
t=i&&this.dot(e)/i,a=Math.acos(Math.min(Math.max(t,-1),1));return r?
a*180/Math.PI:a}o(z,"angle");function F(e){let[r,i,t]=this.head,
[a,n,s]=e,m=i*s-t*n,l=t*a-r*s,c=r*n-i*a;return this.update(m,
l,c)}o(F,"cross");function X(e){return Math.sqrt(this.head.reduce(
(r,i,t)=>r+Math.pow(e[t]-i,2),0))}o(X,"distance");function Y(e){
let[r,i,t]=this.head,[a,n,s]=e;return r*a+i*n+t*s}o(Y,"dot");
function q(e){for(let r=0;r<3;r++)e(this[r],r,this);return this}
o(q,"each");function $(e,r=1e-5){let[i,t,a]=this.head,[n,s,m]=e;
return Math.abs(i-n)<=r*Math.max(1,Math.abs(i),Math.abs(n))&&
Math.abs(t-s)<=r*Math.max(1,Math.abs(t),Math.abs(s))&&Math.abs(
a-m)<=r*Math.max(1,Math.abs(a),Math.abs(m))}o($,"equals");function G(e){
let[r,i,t]=this.head,[a,n,s]=e;return r===a&&i===n&&t===s}o(
G,"strictEquals");function L(e){let[r,i,t]=this.head;if(V(e)||
j(e)){let[a,n,s,m=0,l=0,c=0,u=0,h=0,b=0]=e;return this.update(
r*a+i*m+t*u,r*n+i*l+t*h,r*s+i*c+t*b)}else throw new TypeError(
"Unsupported Multiplicator: "+e)}o(L,"multiply");function B(){
let e=1/this.magnitude;return this.each((r,i,t)=>t[i]=r*e)}o(
B,"normalize");function Z(e=1){let r=Math.random()*2*Math.PI,
i=Math.random()*2-1,t=Math.sqrt(1-Math.pow(i,2))*e;return this.
update(Math.cos(r)*t,Math.sin(r)*t,i*e)}o(Z,"randomly");function H(){
return this.update(0,0,0)}o(H,"zeroize");function we(e=[0,100],r=[0,1]){let[i,t]=r,[a,n]=e,[s,m]=[t-i,
n-a];function l(u){return typeof u=="string"&&(u=parseFloat(
u)),c.domain.test(u)===!1&&(u=u>t?(u-t)%s+i:t-(i-u)%s),m*(u-
i)/s+a}o(l,"invert");function c(u){return typeof u=="string"&&
(u=parseFloat(u)),c.range.test(u)===!1&&(u=u>n?(u-n)%m+a:n-(a-
u)%m),s*(u-a)/m+i}return o(c,"calculator"),Object.defineProperties(
c,{domain:{enumerable:!0,value:p(i,t)},range:{enumerable:!0,
value:p(a,n)},invert:{enumerable:!0,value:l}})}o(we,"initSca\
le");var Pe=g(.4122214708,.2119034982,.0883024619,.5363325363,.6806995451,
.2817188376,.0514459929,.1073969566,.6299787005),_e=g(1,0,0,
0,1,0,0,0,1),De=g(0,1,0,0,0,1,0,0,0),Ce=g(0,0,0,1,0,0,0,1,0),
Ee=g(0,0,1,0,1,0,1,0,0);var Ne=p(0,360),je=p(0,2*Math.PI),ke=p(0,100),ze=p(0,255),Fe=p(
0,1);export{v as CubicBezier,Ne as DEGREE_RANGE,pe as EPSILON,Ee as EXCHANGE_MATRIX,
_e as IDENTITY_MATRIX,ze as INT8_RANGE,Ce as LOWER_SHIFT_MATRIX,
ke as PERCENT_RANGE,je as RADIAN_RANGE,Fe as UNIT_RANGE,De as UPPER_SHIFT_MATRIX,
g as createMatrix,p as createRange,k as createVector,we as initScale,
V as isMatrix,E as isRange,j as isVector,_ as round,Pe as srgb_lms_tfmx};
