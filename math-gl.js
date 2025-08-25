var C=Object.defineProperty;var o=(e,r)=>C(e,"name",{value:r,configurable:!0});var v=class{static{o(this,"CubicBezier")}cx;bx;ax;cy;by;ay;name;constructor(r=0,i=0,t=1,s=1,n){
this.cx=3*r,this.bx=3*(t-r)-this.cx,this.ax=1-this.cx-this.bx,
this.cy=3*i,this.by=3*(s-i)-this.cy,this.ay=1-this.cy-this.by,
this.name=n||([r,i].every(a=>a===0)&&[t,s].every(a=>a===1)?"\
linear":`cubic-bezier(${[r,i,t,s].join(",")})`)}sampleCurveX(r){
return((this.ax*r+this.bx)*r+this.cx)*r}sampleCurveY(r){return((this.
ay*r+this.by)*r+this.cy)*r}sampleCurveDerivativeX(r){return(3*
this.ax*r+2*this.bx)*r+this.cx}solveCurveX(r){if(0>=r)return 0;
if(1<=r)return 1;let t=r,s=0,n=0;for(let c=0;8>c;c+=1){if(s=
this.sampleCurveX(t)-r,Math.abs(s)<1e-6)return t;if(n=this.sampleCurveDerivativeX(
t),Math.abs(n)<1e-6)break;t-=s/n}let a=0,l=1;for(t=r;a<l;){if(s=
this.sampleCurveX(t),Math.abs(s-r)<1e-6)return t;r>s?a=t:l=t,
t=a+(l-a)/2}return t}};var D=o(e=>g(e)&&Symbol.iterator in e&&"minimum"in e&&d(e.minimum)&&
"maximum"in e&&d(e.maximum)&&"value"in e&&d(e.value)&&e.value>
0,"isRange");function p(...e){let r=e.length===1?Array.of(0,e[0]):Array.of(
Math.min(...e),Math.max(...e)),[i,t]=r,s=t-i,n=i+s/2;return Object.
create(null,{from:{value:i},to:{value:t},minimum:{enumerable:!0,
value:i},maximum:{enumerable:!0,value:t},avg:{enumerable:!0,
value:n},value:{enumerable:!0,value:s},allot:{value:E},clamp:{
value:T},test:{value:o(a=>i<=a&&a<=t,"value")},toString:{value:o(
()=>String.raw`{x ∈ R; ${i} ⋜ x ⋜ ${t}}`,"value")},[Symbol.
iterator]:{value:o(function*(){yield this.from,yield this.to},
"value")},length:{value:2}})}o(p,"createRange");function E(e){
return this.test(e)?e:e>this.from?(e-this.to)%this.value+this.
from:this.to-(this.from-e)%this.value}o(E,"allocateOuterValu\
e");function T(e){return this.test(e)?e:Math.max(Math.min(e,
this.to),this.from)}o(T,"restrictOuterValue");var d=o(e=>typeof e=="number","isNumber"),O=o(e=>typeof e=="\
string","isString"),S=o(e=>g(e)&&Symbol.iterator in e&&typeof e[Symbol.
iterator]=="function","isIterableObject"),g=o(e=>e!==null&&typeof e==
"object"&&Array.isArray(e)===!1,"isObject");var j=o(e=>O(e)&&k.has(e),"isSpaceID"),A=o(e=>g(e)&&"ident"in
e&&j(e.ident)&&"CSYS"in e&&g(e.CSYS)&&"length"in e.CSYS&&e.CSYS.
length===3,"isColorSpace");var k=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch",
"oklab","oklch","prophoto-rgb","rec2020","rec2100-pq","rec21\
00-hlg","rec2100-linear","srgb-linear","srgb","rgb","xyz","x\
yz-d50","xyz-d65"]);var w=o(e=>g(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]==
"function"&&"length"in e&&typeof e.length=="number"&&e.length>=
9,"isMatrix");function x(...e){let r=Math.max(e.length,9),i=new ArrayBuffer(
r*8),t=new Float64Array(i,0,r),s=Object.create(null,{[Symbol.
iterator]:{value:o(function*(){for(let n=0;n<t.length;n++)yield this[n]},
"value")},[Symbol.isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{
value:o(()=>"Matrix"+t.toString(),"value")},length:{enumerable:!0,
value:r},toArray:{value:o(()=>Iterator.from(t).toArray(),"va\
lue")},toString:{value:t.toString}});for(let n=0;n<r;n++)(function(a,l,c){
Object.defineProperty(a,l,{enumerable:!0,get:o(()=>c[l],"get"),
set:o(m=>{if(typeof m=="number")c[l]=m;else throw new TypeError(
"Expected Number")},"set")})})(s,n,t);return Object.defineProperties(
s,{clone:{value:o(()=>x(...t),"value")},each:{value:o(function(n){
return t.forEach((a,l,c)=>n(a,l,this)),this},"value")},determinant:{
value:o(()=>{let[n,a,l,c,m,u,h,b,f]=t,y=f*m-u*b,M=-f*c+u*h,I=b*
c-m*h;return n*y+a*M+l*I},"value")},invert:{value:o(function(){
let n=this.determinant();if(n===0)throw console.table(this),
new Error("A singular or non-square matrix matrix cannot be \
inverted.");let[a,l,c,m,u,h,b,f,y]=t,M=y*u-h*f,I=-y*m+h*b,P=f*
m-u*b;return this.update(M/n,(-y*l+c*f)/n,(h*l-c*u)/n,I/n,(y*
a-c*b)/n,(-h*a+c*m)/n,P/n,(-f*a+l*b)/n,(u*a-l*m)/n)},"value")},
update:{value:o(function(){return t.set(Iterator.from(arguments).
map(n=>typeof n=="number"?n:0).toArray()),this},"value")}}),
s.update(...e)}o(x,"createMatrix");var R=o(e=>S(e)&&"space"in e&&A(e.space)&&"length"in e&&e.length===
3&&Iterator.from(e).every(r=>typeof r=="number"),"isPointInS\
pace");var ce=1e-6,V=o((e,r=6)=>{let i=10**r;return Math.sign(e)*Math.
round((Math.abs(e)+Number.EPSILON)*i)/i},"round");var N=o(e=>S(e)&&"length"in e&&e.length===3&&Iterator.from(e).
every(r=>typeof r=="number")&&"magnitude"in e&&d(e.magnitude)&&
"base"in e&&S(e.base)&&"head"in e&&S(e.head),"isVector");function z(e,r=0,i=0){let t=R(e)?new Float64Array(e.buffer):
Float64Array.of(e,r,i),s=Object.create(null,{base:{get:o(()=>Iterator.
from([0,0,0]),"get")},head:{enumerable:!0,get:o(()=>Iterator.
from(t),"get")},magnitude:{enumerable:!0,get:o(()=>V(Math.hypot(
...t),9),"get")},sqrMagnitude:{get:o(()=>t.reduce((n,a)=>n+a**
2,0),"get")}});return Object.defineProperties(s,{clone:{value:o(
()=>z(t[0],t[1],t[2]),"value")},angle:{value:F},cross:{value:X},
distance:{value:Y},dot:{value:q},each:{value:_},equals:{value:G},
multiply:{value:L},normalize:{value:B},randomly:{value:K},strictEquals:{
value:$},update:{value:o(function(n,a,l){let c=Array.isArray(
n)?n.slice(3):Array.of(n,a,l);return t.set(this.head.map((m,u)=>c[u]??
m).toArray()),this},"value")},zeroize:{value:Z}}),Object.defineProperties(
s,{[Symbol.toStringTag]:{get(){return`Vector[${this.toString()}\
]`}},entries:{value:o(function(){return this.values().map((n,a)=>Object.
seal(Array.of(a,n)))},"value")},toArray:{value:o(function(){
return Object.seal(Array.of(this[0],this[1],this[2]))},"valu\
e")},toString:{value:o(()=>t.toString(),"value")},values:{value:o(
function(){return Iterator.from(this.toArray())},"value")}}),
Object.defineProperties(s,{[Symbol.isConcatSpreadable]:{value:!0},
[Symbol.iterator]:{value:o(function*(){yield this[0],yield this[1],
yield this[2]},"value")},0:{enumerable:!0,get:o(()=>t[0],"ge\
t"),set:o(n=>{if(typeof n=="number")t[0]=n;else throw new TypeError(
"Expected Number")},"set")},1:{enumerable:!0,get:o(()=>t[1],
"get"),set:o(n=>{if(typeof n=="number")t[1]=n;else throw new TypeError(
"Expected Number")},"set")},2:{enumerable:!0,get:o(()=>t[2],
"get"),set:o(n=>{if(typeof n=="number")t[2]=n;else throw new TypeError(
"Expected Number")},"set")},length:{enumerable:!0,value:3}}),
s}o(z,"createVector");function F(e,r=!1){let i=Math.sqrt(this.
sqrMagnitude*e.sqrMagnitude),t=i&&this.dot(e)/i,s=Math.acos(
Math.min(Math.max(t,-1),1));return r?s*180/Math.PI:s}o(F,"an\
gle");function X(e){let[r,i,t]=this.head,[s,n,a]=e,l=i*a-t*n,
c=t*s-r*a,m=r*n-i*s;return this.update(l,c,m)}o(X,"cross");function Y(e){
return Math.sqrt(this.head.reduce((r,i,t)=>r+Math.pow(e[t]-i,
2),0))}o(Y,"distance");function q(e){let[r,i,t]=this.head,[s,
n,a]=e;return r*s+i*n+t*a}o(q,"dot");function _(e){for(let r=0;r<
3;r++)e(this[r],r,this);return this}o(_,"each");function G(e,r=1e-5){
let[i,t,s]=this.head,[n,a,l]=e;return Math.abs(i-n)<=r*Math.
max(1,Math.abs(i),Math.abs(n))&&Math.abs(t-a)<=r*Math.max(1,
Math.abs(t),Math.abs(a))&&Math.abs(s-l)<=r*Math.max(1,Math.abs(
s),Math.abs(l))}o(G,"equals");function $(e){let[r,i,t]=this.
head,[s,n,a]=e;return r===s&&i===n&&t===a}o($,"strictEquals");
function L(e){let[r,i,t]=this.head;if(w(e)||N(e)){let[s,n,a,
l=0,c=0,m=0,u=0,h=0,b=0]=e;return this.update(r*s+i*l+t*u,r*
n+i*c+t*h,r*a+i*m+t*b)}else throw new TypeError("Unsupported\
 Multiplicator: "+e)}o(L,"multiply");function B(){let e=1/this.
magnitude;return this.each((r,i,t)=>t[i]=r*e)}o(B,"normalize");
function K(e=1){let r=Math.random()*2*Math.PI,i=Math.random()*
2-1,t=Math.sqrt(1-Math.pow(i,2))*e;return this.update(Math.cos(
r)*t,Math.sin(r)*t,i*e)}o(K,"randomly");function Z(){return this.
update(0,0,0)}o(Z,"zeroize");function xe(e=[0,100],r=[0,1]){let[i,t]=r,[s,n]=e,[a,l]=[t-i,
n-s];function c(u){return typeof u=="string"&&(u=parseFloat(
u)),m.domain.test(u)===!1&&(u=u>t?(u-t)%a+i:t-(i-u)%a),l*(u-
i)/a+s}o(c,"invert");function m(u){return typeof u=="string"&&
(u=parseFloat(u)),m.range.test(u)===!1&&(u=u>n?(u-n)%l+s:n-(s-
u)%l),a*(u-s)/l+i}return o(m,"calculator"),Object.defineProperties(
m,{domain:{enumerable:!0,value:p(i,t)},range:{enumerable:!0,
value:p(s,n)},invert:{enumerable:!0,value:c}})}o(xe,"initSca\
le");var Ae=x(1,0,0,0,1,0,0,0,1),we=x(0,1,0,0,0,1,0,0,0),Re=x(0,0,
0,1,0,0,0,1,0),Ve=x(0,0,1,0,1,0,1,0,0);var De=p(0,360),Ee=p(0,2*Math.PI),Te=p(0,100),Oe=p(0,255),je=p(
0,1);export{v as CubicBezier,De as DEGREE_RANGE,ce as EPSILON,Ve as EXCHANGE_MATRIX,
Ae as IDENTITY_MATRIX,Oe as INT8_RANGE,Re as LOWER_SHIFT_MATRIX,
Te as PERCENT_RANGE,Ee as RADIAN_RANGE,je as UNIT_RANGE,we as UPPER_SHIFT_MATRIX,
x as createMatrix,p as createRange,z as createVector,xe as initScale,
w as isMatrix,D as isRange,N as isVector,V as round};
