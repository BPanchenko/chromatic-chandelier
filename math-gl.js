var C=Object.defineProperty;var o=(e,r)=>C(e,"name",{value:r,configurable:!0});var v=class{static{o(this,"CubicBezier")}cx;bx;ax;cy;by;ay;name;constructor(r=0,a=0,t=1,s=1,n){
this.cx=3*r,this.bx=3*(t-r)-this.cx,this.ax=1-this.cx-this.bx,this.
cy=3*a,this.by=3*(s-a)-this.cy,this.ay=1-this.cy-this.by,this.name=
n||([r,a].every(i=>i===0)&&[t,s].every(i=>i===1)?"linear":`cubic-\
bezier(${[r,a,t,s].join(",")})`)}sampleCurveX(r){return((this.ax*
r+this.bx)*r+this.cx)*r}sampleCurveY(r){return((this.ay*r+this.by)*
r+this.cy)*r}sampleCurveDerivativeX(r){return(3*this.ax*r+2*this.
bx)*r+this.cx}solveCurveX(r){if(0>=r)return 0;if(1<=r)return 1;let t=r,
s=0,n=0;for(let c=0;8>c;c+=1){if(s=this.sampleCurveX(t)-r,Math.abs(
s)<1e-6)return t;if(n=this.sampleCurveDerivativeX(t),Math.abs(n)<
1e-6)break;t-=s/n}let i=0,l=1;for(t=r;i<l;){if(s=this.sampleCurveX(
t),Math.abs(s-r)<1e-6)return t;r>s?i=t:l=t,t=i+(l-i)/2}return t}};var D=o(e=>x(e)&&Symbol.iterator in e&&"minimum"in e&&g(e.minimum)&&
"maximum"in e&&g(e.maximum)&&"value"in e&&g(e.value)&&e.value>0,"\
isRange");function p(...e){let r=e.length===1?Array.of(0,e[0]):Array.of(Math.
min(...e),Math.max(...e)),[a,t]=r,s=t-a,n=a+s/2;return Object.create(
null,{from:{value:a},to:{value:t},minimum:{enumerable:!0,value:a},
maximum:{enumerable:!0,value:t},avg:{enumerable:!0,value:n},value:{
enumerable:!0,value:s},allot:{value:E},clamp:{value:O},test:{value:o(
i=>a<=i&&i<=t,"value")},toString:{value:o(()=>String.raw`{x ∈ R; ${a} ⋜ x ⋜ ${t}}`,
"value")},[Symbol.iterator]:{value:o(function*(){yield this.from,
yield this.to},"value")},length:{value:2}})}o(p,"createRange");function E(e){
return this.test(e)?e:e>this.from?(e-this.to)%this.value+this.from:
this.to-(this.from-e)%this.value}o(E,"allocateOuterValue");function O(e){
return this.test(e)?e:Math.max(Math.min(e,this.to),this.from)}o(O,
"restrictOuterValue");var g=o(e=>typeof e=="number","isNumber"),T=o(e=>typeof e=="strin\
g","isString"),f=o(e=>x(e)&&Symbol.iterator in e&&typeof e[Symbol.
iterator]=="function","isIterableObject"),x=o(e=>e!==null&&typeof e==
"object","isObject");var j=o(e=>T(e)&&k.has(e),"isSpaceID"),R=o(e=>x(e)&&"ident"in e&&
j(e.ident)&&"CSYS"in e&&x(e.CSYS)&&"length"in e.CSYS&&e.CSYS.length===
3,"isColorSpace");var k=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch","ok\
lab","oklch","prophoto-rgb","rec2020","srgb-linear","srgb","rgb",
"xyz","xyz-d50","xyz-d65"]);var w=o(e=>f(e)&&"length"in e&&typeof e.length=="number"&&e.length>=
9,"isMatrix");function S(...e){let r=Math.max(e.length,9),a=new ArrayBuffer(r*8),
t=new Float64Array(a,0,r),s=Object.create(null,{[Symbol.iterator]:{
value:o(function*(){for(let n=0;n<t.length;n++)yield this[n]},"va\
lue")},[Symbol.isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{
value:o(()=>"Matrix"+t.toString(),"value")},length:{enumerable:!0,
value:r},toArray:{value:o(()=>Iterator.from(t).toArray(),"value")},
toString:{value:t.toString}});for(let n=0;n<r;n++)(function(i,l,c){
Object.defineProperty(i,l,{enumerable:!0,get:o(()=>c[l],"get"),set:o(
m=>{if(typeof m=="number")c[l]=m;else throw new TypeError("Expect\
ed Number")},"set")})})(s,n,t);return Object.defineProperties(s,{
clone:{value:o(()=>S(...t),"value")},each:{value:o(function(n){return t.
forEach((i,l,c)=>n(i,l,this)),this},"value")},determinant:{value:o(
()=>{let[n,i,l,c,m,u,h,b,d]=t,y=d*m-u*b,I=-d*c+u*h,M=b*c-m*h;return n*
y+i*I+l*M},"value")},invert:{value:o(function(){let n=this.determinant();
if(n===0)throw console.table(this),new Error("A singular or non-s\
quare matrix matrix cannot be inverted.");let[i,l,c,m,u,h,b,d,y]=t,
I=y*u-h*d,M=-y*m+h*b,P=d*m-u*b;return this.update(I/n,(-y*l+c*d)/
n,(h*l-c*u)/n,M/n,(y*i-c*b)/n,(-h*i+c*m)/n,P/n,(-d*i+l*b)/n,(u*i-
l*m)/n)},"value")},update:{value:o(function(){return t.set(Iterator.
from(arguments).map(n=>typeof n=="number"?n:0).toArray()),this},"\
value")}}),s.update(...e)}o(S,"createMatrix");var A=o(e=>f(e)&&"space"in e&&R(e.space)&&"length"in e&&e.length===
3&&Iterator.from(e).every(r=>typeof r=="number"),"isPointInSpace");var ce=1e-6,V=o((e,r=6)=>{let a=10**r;return Math.sign(e)*Math.round(
(Math.abs(e)+Number.EPSILON)*a)/a},"round");var N=o(e=>f(e)&&"length"in e&&e.length===3&&Iterator.from(e).every(
r=>typeof r=="number")&&"magnitude"in e&&g(e.magnitude)&&"base"in
e&&f(e.base)&&"head"in e&&f(e.head),"isVector");function z(e,r=0,a=0){let t=A(e)?new Float64Array(e.buffer):Float64Array.
of(e,r,a),s=Object.create(null,{base:{get:o(()=>Iterator.from([0,
0,0]),"get")},head:{enumerable:!0,get:o(()=>Iterator.from(t),"get")},
magnitude:{enumerable:!0,get:o(()=>V(Math.hypot(...t),9),"get")},
sqrMagnitude:{get:o(()=>t.reduce((n,i)=>n+i**2,0),"get")}});return Object.
defineProperties(s,{clone:{value:o(()=>z(t[0],t[1],t[2]),"value")},
angle:{value:F},cross:{value:X},distance:{value:Y},dot:{value:q},
each:{value:B},equals:{value:_},multiply:{value:$},normalize:{value:K},
randomly:{value:L},strictEquals:{value:G},update:{value:o(function(n,i,l){
let c=Array.isArray(n)?n.slice(3):Array.of(n,i,l);return t.set(this.
head.map((m,u)=>c[u]??m).toArray()),this},"value")},zeroize:{value:Z}}),
Object.defineProperties(s,{[Symbol.toStringTag]:{get(){return`Vec\
tor[${this.toString()}]`}},entries:{value:o(function(){return this.
values().map((n,i)=>Object.seal(Array.of(i,n)))},"value")},toArray:{
value:o(function(){return Object.seal(Array.of(this[0],this[1],this[2]))},
"value")},toString:{value:o(()=>t.toString(),"value")},values:{value:o(
function(){return Iterator.from(this.toArray())},"value")}}),Object.
defineProperties(s,{[Symbol.isConcatSpreadable]:{value:!0},[Symbol.
iterator]:{value:o(function*(){yield this[0],yield this[1],yield this[2]},
"value")},0:{enumerable:!0,get:o(()=>t[0],"get"),set:o(n=>{if(typeof n==
"number")t[0]=n;else throw new TypeError("Expected Number")},"set")},
1:{enumerable:!0,get:o(()=>t[1],"get"),set:o(n=>{if(typeof n=="nu\
mber")t[1]=n;else throw new TypeError("Expected Number")},"set")},
2:{enumerable:!0,get:o(()=>t[2],"get"),set:o(n=>{if(typeof n=="nu\
mber")t[2]=n;else throw new TypeError("Expected Number")},"set")},
length:{enumerable:!0,value:3}}),s}o(z,"createVector");function F(e,r=!1){
let a=Math.sqrt(this.sqrMagnitude*e.sqrMagnitude),t=a&&this.dot(e)/
a,s=Math.acos(Math.min(Math.max(t,-1),1));return r?s*180/Math.PI:
s}o(F,"angle");function X(e){let[r,a,t]=this.head,[s,n,i]=e,l=a*i-
t*n,c=t*s-r*i,m=r*n-a*s;return this.update(l,c,m)}o(X,"cross");function Y(e){
return Math.sqrt(this.head.reduce((r,a,t)=>r+Math.pow(e[t]-a,2),0))}
o(Y,"distance");function q(e){let[r,a,t]=this.head,[s,n,i]=e;return r*
s+a*n+t*i}o(q,"dot");function B(e){for(let r=0;r<3;r++)e(this[r],
r,this);return this}o(B,"each");function _(e,r=1e-5){let[a,t,s]=this.
head,[n,i,l]=e;return Math.abs(a-n)<=r*Math.max(1,Math.abs(a),Math.
abs(n))&&Math.abs(t-i)<=r*Math.max(1,Math.abs(t),Math.abs(i))&&Math.
abs(s-l)<=r*Math.max(1,Math.abs(s),Math.abs(l))}o(_,"equals");function G(e){
let[r,a,t]=this.head,[s,n,i]=e;return r===s&&a===n&&t===i}o(G,"st\
rictEquals");function $(e){let[r,a,t]=this.head;if(w(e)||N(e)){let[
s,n,i,l=0,c=0,m=0,u=0,h=0,b=0]=e;return this.update(r*s+a*l+t*u,r*
n+a*c+t*h,r*i+a*m+t*b)}else throw new TypeError("Unsupported Mult\
iplicator: "+e)}o($,"multiply");function K(){let e=1/this.magnitude;
return this.each((r,a,t)=>t[a]=r*e)}o(K,"normalize");function L(e=1){
let r=Math.random()*2*Math.PI,a=Math.random()*2-1,t=Math.sqrt(1-Math.
pow(a,2))*e;return this.update(Math.cos(r)*t,Math.sin(r)*t,a*e)}o(
L,"randomly");function Z(){return this.update(0,0,0)}o(Z,"zeroize");function xe(e=[0,100],r=[0,1]){let[a,t]=r,[s,n]=e,[i,l]=[t-a,n-s];
function c(u){return typeof u=="string"&&(u=parseFloat(u)),m.domain.
test(u)===!1&&(u=u>t?(u-t)%i+a:t-(a-u)%i),l*(u-a)/i+s}o(c,"invert");
function m(u){return typeof u=="string"&&(u=parseFloat(u)),m.range.
test(u)===!1&&(u=u>n?(u-n)%l+s:n-(s-u)%l),i*(u-s)/l+a}return o(m,
"calculator"),Object.defineProperties(m,{domain:{enumerable:!0,value:p(
a,t)},range:{enumerable:!0,value:p(s,n)},invert:{enumerable:!0,value:c}})}
o(xe,"initScale");var Re=S(1,0,0,0,1,0,0,0,1),we=S(0,1,0,0,0,1,0,0,0),Ae=S(0,0,0,1,
0,0,0,1,0),Ve=S(0,0,1,0,1,0,1,0,0);var De=p(0,360),Ee=p(0,2*Math.PI),Oe=p(0,100),Te=p(0,255),je=p(0,
1);export{v as CubicBezier,De as DEGREE_RANGE,ce as EPSILON,Ve as EXCHANGE_MATRIX,
Re as IDENTITY_MATRIX,Te as INT8_RANGE,Ae as LOWER_SHIFT_MATRIX,Oe as PERCENT_RANGE,
Ee as RADIAN_RANGE,je as UNIT_RANGE,we as UPPER_SHIFT_MATRIX,S as createMatrix,
p as createRange,z as createVector,xe as initScale,w as isMatrix,
D as isRange,N as isVector,V as round};
