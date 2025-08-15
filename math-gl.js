var C=Object.defineProperty;var i=(e,t)=>C(e,"name",{value:t,configurable:!0});var w=class{static{i(this,"CubicBezier")}cx;bx;ax;cy;by;ay;name;constructor(t=0,o=0,r=1,a=1,n){
this.cx=3*t,this.bx=3*(r-t)-this.cx,this.ax=1-this.cx-this.bx,
this.cy=3*o,this.by=3*(a-o)-this.cy,this.ay=1-this.cy-this.by,
this.name=n||([t,o].every(u=>u===0)&&[r,a].every(u=>u===1)?"\
linear":`cubic-bezier(${[t,o,r,a].join(",")})`)}sampleCurveX(t){
return((this.ax*t+this.bx)*t+this.cx)*t}sampleCurveY(t){return((this.
ay*t+this.by)*t+this.cy)*t}sampleCurveDerivativeX(t){return(3*
this.ax*t+2*this.bx)*t+this.cx}solveCurveX(t){if(0>=t)return 0;
if(1<=t)return 1;let r=t,a=0,n=0;for(let l=0;8>l;l+=1){if(a=
this.sampleCurveX(r)-t,Math.abs(a)<1e-6)return r;if(n=this.sampleCurveDerivativeX(
r),Math.abs(n)<1e-6)break;r-=a/n}let u=0,m=1;for(r=t;u<m;){if(a=
this.sampleCurveX(r),Math.abs(a-t)<1e-6)return r;t>a?u=r:m=r,
r=u+(m-u)/2}return r}};var T=i(e=>f(e)&&Symbol.iterator in e&&"minimum"in e&&S(e.minimum)&&
"maximum"in e&&S(e.maximum)&&"value"in e&&S(e.value)&&e.value>
0,"isRange");function b(...e){let t=e.length===1?Array.of(0,e[0]):Array.of(
Math.min(...e),Math.max(...e)),[o,r]=t,a=r-o,n=o+a/2;return Object.
create(null,{from:{value:o},to:{value:r},minimum:{enumerable:!0,
value:o},maximum:{enumerable:!0,value:r},avg:{enumerable:!0,
value:n},value:{enumerable:!0,value:a},allot:{value:E},clamp:{
value:j},test:{value:i(u=>o<=u&&u<=r,"value")},toString:{value:i(
()=>String.raw`{x ∈ R; ${o} ⋜ x ⋜ ${r}}`,"value")},[Symbol.
iterator]:{value:i(function*(){yield this.from,yield this.to},
"value")},length:{value:2}})}i(b,"createRange");function E(e){
return this.test(e)?e:e>this.from?(e-this.to)%this.value+this.
from:this.to-(this.from-e)%this.value}i(E,"allocateOuterValu\
e");function j(e){return this.test(e)?e:Math.max(Math.min(e,
this.to),this.from)}i(j,"restrictOuterValue");var O=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch",
"oklab","oklch","prophoto-rgb","rec2020","rec2100-pq","rec21\
00-hlg","rec2100-linear","srgb-linear","srgb","rgb","xyz","x\
yz-d50","xyz-d65"]);var A=i(e=>v(e)&&O.has(e),"isSpaceID");var R=i(e=>f(e)&&"ident"in e&&A(e.ident)&&"CSYS"in e&&f(e.CSYS)&&
"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),x=i(e=>f(
e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]=="functi\
on","isIterableObject"),S=i(e=>typeof e=="number","isNumber"),
f=i(e=>e!==null&&typeof e=="object"&&Array.isArray(e)===!1,"\
isObject"),v=i(e=>typeof e=="string","isString");var V=i(e=>f(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]==
"function"&&"length"in e&&typeof e.length=="number"&&e.length>=
9,"isMatrix");function g(...e){let t=Math.max(e.length,9),o=new ArrayBuffer(
t*8),r=new Float64Array(o,0,t),a=Object.create(null,{[Symbol.
iterator]:{value:i(function*(){for(let n=0;n<r.length;n++)yield this[n]},
"value")},[Symbol.isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{
value:i(()=>"Matrix"+r.toString(),"value")},length:{enumerable:!0,
value:t},toArray:{value:i(()=>Iterator.from(r).toArray(),"va\
lue")},toString:{value:r.toString}});for(let n=0;n<t;n++)(function(u,m,l){
Object.defineProperty(u,m,{enumerable:!0,get:i(()=>l[m],"get"),
set:i(c=>{if(typeof c=="number")l[m]=c;else throw new TypeError(
"Expected Number")},"set")})})(a,n,r);return Object.defineProperties(
a,{clone:{value:i(()=>g(...r),"value")},each:{value:i(function(n){
return r.forEach((u,m,l)=>n(u,m,this)),this},"value")},determinant:{
value:i(()=>{let[n,u,m,l,c,s,p,h,y]=r,d=y*c-s*h,M=-y*l+s*p,I=h*
l-c*p;return n*d+u*M+m*I},"value")},invert:{value:i(function(){
let n=this.determinant();if(n===0)throw console.table(this),
new Error("A singular or non-square matrix matrix cannot be \
inverted.");let[u,m,l,c,s,p,h,y,d]=r,M=d*s-p*y,I=-d*c+p*h,P=y*
c-s*h;return this.update(M/n,(-d*m+l*y)/n,(p*m-l*s)/n,I/n,(d*
u-l*h)/n,(-p*u+l*c)/n,P/n,(-y*u+m*h)/n,(s*u-m*c)/n)},"value")},
update:{value:i(function(){return r.set(Iterator.from(arguments).
map(n=>typeof n=="number"?n:0).toArray()),this},"value")}}),
a.update(...e)}i(g,"createMatrix");var _=i(e=>x(e)&&"space"in e&&R(e.space)&&"length"in e&&e.length===
3&&Iterator.from(e).every(t=>typeof t=="number"),"isPointInS\
pace");var fe=1e-6,D=i((e,t=6)=>{let o=10**t;return Math.sign(e)*Math.
round((Math.abs(e)+Number.EPSILON)*o)/o},"round");var N=i(e=>x(e)&&"length"in e&&e.length===3&&Iterator.from(e).
every(t=>typeof t=="number")&&"magnitude"in e&&typeof e.magnitude==
"number"&&"terminal"in e&&e.terminal instanceof Float64Array,
"isVector");function X(e,t=0,o=0){let r=_(e)?new Float64Array(e.buffer):
Float64Array.of(e,t,o),a=Object.create(null,{[Symbol.isConcatSpreadable]:{
value:!0},[Symbol.iterator]:{value:i(function*(){yield this[0],
yield this[1],yield this[2]},"value")},0:{enumerable:!0,get(){
return this.terminal[0]},set(n){if(typeof n=="number")this.terminal[0]=
n;else throw new TypeError("Expected Number")}},1:{enumerable:!0,
get(){return this.terminal[1]},set(n){if(typeof n=="number")
this.terminal[1]=n;else throw new TypeError("Expected Number")}},
2:{enumerable:!0,get(){return this.terminal[2]},set(n){if(typeof n==
"number")this.terminal[2]=n;else throw new TypeError("Expect\
ed Number")}},length:{enumerable:!0,value:3}});return Object.
defineProperties(a,{magnitude:{enumerable:!0,get:i(()=>D(Math.
hypot(...r),9),"get")},squaredLength:{get:i(()=>r.reduce((n,u)=>n+
Math.pow(u,2),0),"get")},terminal:{enumerable:!0,value:r}}),
Object.defineProperties(a,{clone:{value:i(()=>{let[n,u,m]=r;
return X(n,u,m)},"value")},angle:{value:k},cross:{value:F},distance:{
value:Y},dot:{value:z},each:{value:q},equals:{value:K},multiply:{
value:$},normalize:{value:Z},randomly:{value:L},strictEquals:{
value:H},update:{value:G},zeroize:{value:B}}),Object.defineProperties(
a,{toArray:{value:i(()=>Array.from(r),"value")},toString:{value:i(
()=>r.toString(),"value")},[Symbol.toStringTag]:{get(){return`\
Vector[${this.toString()}]`}}}),a}i(X,"createVector");function k(e,t=!1){
let o=Math.sqrt(this.squaredLength*e.squaredLength),r=o&&this.
dot(e)/o,a=Math.acos(Math.min(Math.max(r,-1),1));return t?a*
180/Math.PI:a}i(k,"angle");function F(e){let[t,o,r]=this.terminal,
[a,n,u]=e;return t=o*u-r*n,o=r*a-t*u,r=t*n-o*a,this.update(t,
o,r)}i(F,"cross");function Y(e){return Math.sqrt(this.terminal.
reduce((t,o,r)=>t+Math.pow(e[r]-o,2),0))}i(Y,"distance");function z(e){
let[t,o,r]=this.terminal,[a,n,u]=e;return t*a+o*n+r*u}i(z,"d\
ot");function q(e){for(let t=0;t<3;t++)e(this[t],t,this);return this}
i(q,"each");function $(e){let[t,o,r]=this.terminal;if(V(e)){
let[a,n,u,m,l,c,s,p,h]=e;t=t*a+o*m+r*s,o=t*n+o*l+r*p,r=t*u+o*
c+r*h}else if(N(e)){let[a,n,u]=e;t*=a,o*=n,r*=u}else throw new TypeError(
"Unsupported Type of Multiplicator: "+e);return this.update(
t,o,r)}i($,"multiply");function Z(){let[e,t,o]=this.terminal,
r=1/this.magnitude;return e*=r,t*=r,o*=r,this.update(e,t,o)}
i(Z,"normalize");function G(e,t,o){return this.terminal.set(
Array.of(e,t,o)),this}i(G,"update");function B(){return this.
update(0,0,0)}i(B,"zeroize");function L(e=1){let t=Math.random()*
2*Math.PI,o=Math.random()*2-1,r=Math.sqrt(1-Math.pow(o,2))*e;
return this.update(Math.cos(t)*r,Math.sin(t)*r,o*e)}i(L,"ran\
domly");function H(e){let[t,o,r]=this.terminal,[a,n,u]=e;return t===
a&&o===n&&r===u}i(H,"strictEquals");function K(e,t=1e-6){let[
o,r,a]=this.terminal,[n,u,m]=e;return Math.abs(o-n)<=t*Math.
max(1,Math.abs(o),Math.abs(n))&&Math.abs(r-u)<=t*Math.max(1,
Math.abs(r),Math.abs(u))&&Math.abs(a-m)<=t*Math.max(1,Math.abs(
a),Math.abs(m))}i(K,"equals");function Ae(e=[0,100],t=[0,1]){let[o,r]=t,[a,n]=e,[u,m]=[r-o,
n-a];function l(s){return typeof s=="string"&&(s=parseFloat(
s)),c.domain.test(s)===!1&&(s=s>r?(s-r)%u+o:r-(o-s)%u),m*(s-
o)/u+a}i(l,"invert");function c(s){return typeof s=="string"&&
(s=parseFloat(s)),c.range.test(s)===!1&&(s=s>n?(s-n)%m+a:n-(a-
s)%m),u*(s-a)/m+o}return i(c,"calculator"),Object.defineProperties(
c,{domain:{enumerable:!0,value:b(o,r)},range:{enumerable:!0,
value:b(a,n)},invert:{enumerable:!0,value:l}})}i(Ae,"initSca\
le");var De=g(.4122214708,.2119034982,.0883024619,.5363325363,.6806995451,
.2817188376,.0514459929,.1073969566,.6299787005),Pe=g(1,0,0,
0,1,0,0,0,1),Ce=g(0,1,0,0,0,1,0,0,0),Te=g(0,0,0,1,0,0,0,1,0),
Ee=g(0,0,1,0,1,0,1,0,0);var Ne=b(0,360),Xe=b(0,2*Math.PI),ke=b(0,100),Fe=b(0,255),Ye=b(
0,1);export{w as CubicBezier,Ne as DEGREE_RANGE,fe as EPSILON,Ee as EXCHANGE_MATRIX,
Pe as IDENTITY_MATRIX,Fe as INT8_RANGE,Te as LOWER_SHIFT_MATRIX,
ke as PERCENT_RANGE,Xe as RADIAN_RANGE,Ye as UNIT_RANGE,Ce as UPPER_SHIFT_MATRIX,
g as createMatrix,b as createRange,X as createVector,Ae as initScale,
V as isMatrix,T as isRange,N as isVector,D as round,De as srgb_lms_tfmx};
