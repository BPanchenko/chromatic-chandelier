var E=Object.defineProperty;var n=(e,r)=>E(e,"name",{value:r,configurable:!0});var v=class{static{n(this,"CubicBezier")}cx;bx;ax;cy;by;ay;name;constructor(r=0,i=0,t=1,s=1,o){
this.cx=3*r,this.bx=3*(t-r)-this.cx,this.ax=1-this.cx-this.bx,
this.cy=3*i,this.by=3*(s-i)-this.cy,this.ay=1-this.cy-this.by,
this.name=o||([r,i].every(a=>a===0)&&[t,s].every(a=>a===1)?"\
linear":`cubic-bezier(${[r,i,t,s].join(",")})`)}sampleCurveX(r){
return((this.ax*r+this.bx)*r+this.cx)*r}sampleCurveY(r){return((this.
ay*r+this.by)*r+this.cy)*r}sampleCurveDerivativeX(r){return(3*
this.ax*r+2*this.bx)*r+this.cx}solveCurveX(r){if(0>=r)return 0;
if(1<=r)return 1;let t=r,s=0,o=0;for(let m=0;8>m;m+=1){if(s=
this.sampleCurveX(t)-r,Math.abs(s)<1e-6)return t;if(o=this.sampleCurveDerivativeX(
t),Math.abs(o)<1e-6)break;t-=s/o}let a=0,l=1;for(t=r;a<l;){if(s=
this.sampleCurveX(t),Math.abs(s-r)<1e-6)return t;r>s?a=t:l=t,
t=a+(l-a)/2}return t}};var T=n(e=>y(e)&&Symbol.iterator in e&&"minimum"in e&&f(e.minimum)&&
"maximum"in e&&f(e.maximum)&&"value"in e&&f(e.value)&&e.value>
0,"isRange");function p(...e){let r=e.length===1?Array.of(0,e[0]):Array.of(
Math.min(...e),Math.max(...e)),[i,t]=r,s=t-i,o=i+s/2;return Object.
create(null,{from:{value:i},to:{value:t},minimum:{enumerable:!0,
value:i},maximum:{enumerable:!0,value:t},avg:{enumerable:!0,
value:o},value:{enumerable:!0,value:s},allot:{value:O},clamp:{
value:j},test:{value:n(a=>i<=a&&a<=t,"value")},toString:{value:n(
()=>String.raw`{x ∈ R; ${i} ⋜ x ⋜ ${t}}`,"value")},[Symbol.
iterator]:{value:n(function*(){yield this.from,yield this.to},
"value")},length:{value:2}})}n(p,"createRange");function O(e){
return this.test(e)?e:e>this.from?(e-this.to)%this.value+this.
from:this.to-(this.from-e)%this.value}n(O,"allocateOuterValu\
e");function j(e){return this.test(e)?e:Math.max(Math.min(e,
this.to),this.from)}n(j,"restrictOuterValue");var N=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch",
"oklab","oklch","prophoto-rgb","rec2020","rec2100-pq","rec21\
00-hlg","rec2100-linear","srgb-linear","srgb","rgb","xyz","x\
yz-d50","xyz-d65"]);var A=n(e=>w(e)&&N.has(e),"isSpaceID");var R=n(e=>y(e)&&"ident"in e&&A(e.ident)&&"CSYS"in e&&y(e.CSYS)&&
"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),S=n(e=>y(
e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]=="functi\
on","isIterableObject"),f=n(e=>typeof e=="number","isNumber"),
y=n(e=>e!==null&&typeof e=="object"&&Array.isArray(e)===!1,"\
isObject"),w=n(e=>typeof e=="string","isString");var V=n(e=>y(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]==
"function"&&"length"in e&&typeof e.length=="number"&&e.length>=
9,"isMatrix");function x(...e){let r=Math.max(e.length,9),i=new ArrayBuffer(
r*8),t=new Float64Array(i,0,r),s=Object.create(null,{[Symbol.
iterator]:{value:n(function*(){for(let o=0;o<t.length;o++)yield this[o]},
"value")},[Symbol.isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{
value:n(()=>"Matrix"+t.toString(),"value")},length:{enumerable:!0,
value:r},toArray:{value:n(()=>Iterator.from(t).toArray(),"va\
lue")},toString:{value:t.toString}});for(let o=0;o<r;o++)(function(a,l,m){
Object.defineProperty(a,l,{enumerable:!0,get:n(()=>m[l],"get"),
set:n(c=>{if(typeof c=="number")m[l]=c;else throw new TypeError(
"Expected Number")},"set")})})(s,o,t);return Object.defineProperties(
s,{clone:{value:n(()=>x(...t),"value")},each:{value:n(function(o){
return t.forEach((a,l,m)=>o(a,l,this)),this},"value")},determinant:{
value:n(()=>{let[o,a,l,m,c,u,h,b,d]=t,g=d*c-u*b,M=-d*m+u*h,I=b*
m-c*h;return o*g+a*M+l*I},"value")},invert:{value:n(function(){
let o=this.determinant();if(o===0)throw console.table(this),
new Error("A singular or non-square matrix matrix cannot be \
inverted.");let[a,l,m,c,u,h,b,d,g]=t,M=g*u-h*d,I=-g*c+h*b,C=d*
c-u*b;return this.update(M/o,(-g*l+m*d)/o,(h*l-m*u)/o,I/o,(g*
a-m*b)/o,(-h*a+m*c)/o,C/o,(-d*a+l*b)/o,(u*a-l*c)/o)},"value")},
update:{value:n(function(){return t.set(Iterator.from(arguments).
map(o=>typeof o=="number"?o:0).toArray()),this},"value")}}),
s.update(...e)}n(x,"createMatrix");var P=n(e=>S(e)&&"space"in e&&R(e.space)&&"length"in e&&e.length===
3&&Iterator.from(e).every(r=>typeof r=="number"),"isPointInS\
pace");var pe=1e-6,D=n((e,r=6)=>{let i=10**r;return Math.sign(e)*Math.
round((Math.abs(e)+Number.EPSILON)*i)/i},"round");var k=n(e=>S(e)&&"length"in e&&e.length===3&&Iterator.from(e).
every(r=>typeof r=="number")&&"magnitude"in e&&f(e.magnitude)&&
"base"in e&&S(e.base)&&"head"in e&&S(e.head),"isVector");function z(e,r=0,i=0){let t=P(e)?new Float64Array(e.buffer):
Float64Array.of(e,r,i),s=Object.create(null,{base:{get:n(()=>Iterator.
from([0,0,0]),"get")},head:{enumerable:!0,get:n(()=>Iterator.
from(t),"get")},magnitude:{enumerable:!0,get:n(()=>D(Math.hypot(
...t),9),"get")},sqrMagnitude:{get:n(()=>t.reduce((o,a)=>o+a**
2,0),"get")}});return Object.defineProperties(s,{clone:{value:n(
()=>z(t[0],t[1],t[2]),"value")},angle:{value:F},cross:{value:X},
distance:{value:Y},dot:{value:q},each:{value:_},equals:{value:$},
multiply:{value:L},normalize:{value:B},randomly:{value:Z},strictEquals:{
value:G},update:{value:n(function(o,a,l){let m=Array.isArray(
o)?o.slice(3):Array.of(o,a,l);return t.set(this.head.map((c,u)=>m[u]??
c).toArray()),this},"value")},zeroize:{value:H}}),Object.defineProperties(
s,{[Symbol.toStringTag]:{get(){return`Vector[${this.toString()}\
]`}},entries:{value:n(function(){return this.values().map((o,a)=>Object.
seal(Array.of(a,o)))},"value")},toArray:{value:n(function(){
return Object.seal(Array.of(this[0],this[1],this[2]))},"valu\
e")},toString:{value:n(()=>t.toString(),"value")},values:{value:n(
function(){return Iterator.from(this.toArray())},"value")}}),
Object.defineProperties(s,{[Symbol.isConcatSpreadable]:{value:!0},
[Symbol.iterator]:{value:n(function*(){yield this[0],yield this[1],
yield this[2]},"value")},0:{enumerable:!0,get:n(()=>t[0],"ge\
t"),set:n(o=>{if(typeof o=="number")t[0]=o;else throw new TypeError(
"Expected Number")},"set")},1:{enumerable:!0,get:n(()=>t[1],
"get"),set:n(o=>{if(typeof o=="number")t[1]=o;else throw new TypeError(
"Expected Number")},"set")},2:{enumerable:!0,get:n(()=>t[2],
"get"),set:n(o=>{if(typeof o=="number")t[2]=o;else throw new TypeError(
"Expected Number")},"set")},length:{enumerable:!0,value:3}}),
s}n(z,"createVector");function F(e,r=!1){let i=Math.sqrt(this.
sqrMagnitude*e.sqrMagnitude),t=i&&this.dot(e)/i,s=Math.acos(
Math.min(Math.max(t,-1),1));return r?s*180/Math.PI:s}n(F,"an\
gle");function X(e){let[r,i,t]=this.head,[s,o,a]=e,l=i*a-t*o,
m=t*s-r*a,c=r*o-i*s;return this.update(l,m,c)}n(X,"cross");function Y(e){
return Math.sqrt(this.head.reduce((r,i,t)=>r+Math.pow(e[t]-i,
2),0))}n(Y,"distance");function q(e){let[r,i,t]=this.head,[s,
o,a]=e;return r*s+i*o+t*a}n(q,"dot");function _(e){for(let r=0;r<
3;r++)e(this[r],r,this);return this}n(_,"each");function $(e,r=1e-5){
let[i,t,s]=this.head,[o,a,l]=e;return Math.abs(i-o)<=r*Math.
max(1,Math.abs(i),Math.abs(o))&&Math.abs(t-a)<=r*Math.max(1,
Math.abs(t),Math.abs(a))&&Math.abs(s-l)<=r*Math.max(1,Math.abs(
s),Math.abs(l))}n($,"equals");function G(e){let[r,i,t]=this.
head,[s,o,a]=e;return r===s&&i===o&&t===a}n(G,"strictEquals");
function L(e){let[r,i,t]=this.head;if(V(e)||k(e)){let[s,o,a,
l=0,m=0,c=0,u=0,h=0,b=0]=e;return this.update(r*s+i*l+t*u,r*
o+i*m+t*h,r*a+i*c+t*b)}else throw new TypeError("Unsupported\
 Multiplicator: "+e)}n(L,"multiply");function B(){let e=1/this.
magnitude;return this.each((r,i,t)=>t[i]=r*e)}n(B,"normalize");
function Z(e=1){let r=Math.random()*2*Math.PI,i=Math.random()*
2-1,t=Math.sqrt(1-Math.pow(i,2))*e;return this.update(Math.cos(
r)*t,Math.sin(r)*t,i*e)}n(Z,"randomly");function H(){return this.
update(0,0,0)}n(H,"zeroize");function Ae(e=[0,100],r=[0,1]){let[i,t]=r,[s,o]=e,[a,l]=[t-i,
o-s];function m(u){return typeof u=="string"&&(u=parseFloat(
u)),c.domain.test(u)===!1&&(u=u>t?(u-t)%a+i:t-(i-u)%a),l*(u-
i)/a+s}n(m,"invert");function c(u){return typeof u=="string"&&
(u=parseFloat(u)),c.range.test(u)===!1&&(u=u>o?(u-o)%l+s:o-(s-
u)%l),a*(u-s)/l+i}return n(c,"calculator"),Object.defineProperties(
c,{domain:{enumerable:!0,value:p(i,t)},range:{enumerable:!0,
value:p(s,o)},invert:{enumerable:!0,value:m}})}n(Ae,"initSca\
le");var Pe=x(1,0,0,0,1,0,0,0,1),De=x(0,1,0,0,0,1,0,0,0),Ce=x(0,0,
0,1,0,0,0,1,0),Ee=x(0,0,1,0,1,0,1,0,0);var je=p(0,360),Ne=p(0,2*Math.PI),ke=p(0,100),ze=p(0,255),Fe=p(
0,1);export{v as CubicBezier,je as DEGREE_RANGE,pe as EPSILON,Ee as EXCHANGE_MATRIX,
Pe as IDENTITY_MATRIX,ze as INT8_RANGE,Ce as LOWER_SHIFT_MATRIX,
ke as PERCENT_RANGE,Ne as RADIAN_RANGE,Fe as UNIT_RANGE,De as UPPER_SHIFT_MATRIX,
x as createMatrix,p as createRange,z as createVector,Ae as initScale,
V as isMatrix,T as isRange,k as isVector,D as round};
