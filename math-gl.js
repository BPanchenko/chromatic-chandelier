var T=Object.defineProperty;var i=(e,r)=>T(e,"name",{value:r,configurable:!0});var w=class{static{i(this,"CubicBezier")}cx;bx;ax;cy;by;ay;name;constructor(r=0,o=0,t=1,a=1,n){
this.cx=3*r,this.bx=3*(t-r)-this.cx,this.ax=1-this.cx-this.bx,
this.cy=3*o,this.by=3*(a-o)-this.cy,this.ay=1-this.cy-this.by,
this.name=n||([r,o].every(s=>s===0)&&[t,a].every(s=>s===1)?"\
linear":`cubic-bezier(${[r,o,t,a].join(",")})`)}sampleCurveX(r){
return((this.ax*r+this.bx)*r+this.cx)*r}sampleCurveY(r){return((this.
ay*r+this.by)*r+this.cy)*r}sampleCurveDerivativeX(r){return(3*
this.ax*r+2*this.bx)*r+this.cx}solveCurveX(r){if(0>=r)return 0;
if(1<=r)return 1;let t=r,a=0,n=0;for(let l=0;8>l;l+=1){if(a=
this.sampleCurveX(t)-r,Math.abs(a)<1e-6)return t;if(n=this.sampleCurveDerivativeX(
t),Math.abs(n)<1e-6)break;t-=a/n}let s=0,u=1;for(t=r;s<u;){if(a=
this.sampleCurveX(t),Math.abs(a-r)<1e-6)return t;r>a?s=t:u=t,
t=s+(u-s)/2}return t}};var E=i(e=>y(e)&&Symbol.iterator in e&&"minimum"in e&&d(e.minimum)&&
"maximum"in e&&d(e.maximum)&&"value"in e&&d(e.value)&&e.value>
0,"isRange");function f(...e){let r=e.length===1?Array.of(0,e[0]):Array.of(
Math.min(...e),Math.max(...e)),[o,t]=r,a=t-o,n=o+a/2;return Object.
create(null,{from:{value:o},to:{value:t},minimum:{enumerable:!0,
value:o},maximum:{enumerable:!0,value:t},avg:{enumerable:!0,
value:n},value:{enumerable:!0,value:a},allot:{value:k},clamp:{
value:j},test:{value:i(s=>o<=s&&s<=t,"value")},toString:{value:i(
()=>String.raw`{x ∈ R; ${o} ⋜ x ⋜ ${t}}`,"value")},[Symbol.
iterator]:{value:i(function*(){yield this.from,yield this.to},
"value")},length:{value:2}})}i(f,"createRange");function k(e){
return this.test(e)?e:e>this.from?(e-this.to)%this.value+this.
from:this.to-(this.from-e)%this.value}i(k,"allocateOuterValu\
e");function j(e){return this.test(e)?e:Math.max(Math.min(e,
this.to),this.from)}i(j,"restrictOuterValue");var O=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch",
"oklab","oklch","prophoto-rgb","rec2020","rec2100-pq","rec21\
00-hlg","rec2100-linear","srgb-linear","srgb","rgb","xyz","x\
yz-d50","xyz-d65"]);var R=i(e=>I(e)&&O.has(e),"isSpaceID");var V=i(e=>y(e)&&"ident"in e&&R(e.ident)&&"CSYS"in e&&y(e.CSYS)&&
"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),x=i(e=>y(
e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]=="functi\
on","isIterableObject"),d=i(e=>typeof e=="number","isNumber"),
y=i(e=>e!==null&&typeof e=="object"&&Array.isArray(e)===!1,"\
isObject"),I=i(e=>typeof e=="string","isString");var A=i(e=>y(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]==
"function"&&"length"in e&&typeof e.length=="number"&&e.length>=
9,"isMatrix");function p(...e){let r=Math.max(e.length,9),o=new ArrayBuffer(
r*8),t=new Float64Array(o,0,r),a=Object.create(null,{[Symbol.
iterator]:{value:i(function*(){for(let n=0;n<t.length;n++)yield this[n]},
"value")},[Symbol.isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{
value:i(()=>"Matrix"+t.toString(),"value")},length:{enumerable:!0,
value:r},toArray:{value:i(()=>Iterator.from(t).toArray(),"va\
lue")},toString:{value:t.toString}});for(let n=0;n<r;n++)(function(s,u,l){
Object.defineProperty(s,u,{enumerable:!0,get:i(()=>l[u],"get"),
set:i(c=>{if(typeof c=="number")l[u]=c;else throw new TypeError(
"Expected Number")},"set")})})(a,n,t);return Object.defineProperties(
a,{clone:{value:i(()=>p(...t),"value")},each:{value:i(function(n){
return t.forEach((s,u,l)=>n(s,u,this)),this},"value")},determinant:{
value:i(()=>{let[n,s,u,l,c,m,b,h,_]=t,g=_*c-m*h,S=-_*l+m*b,M=h*
l-c*b;return n*g+s*S+u*M},"value")},invert:{value:i(function(){
let n=this.determinant();if(n===0)throw console.table(this),
new Error("A singular or non-square matrix matrix cannot be \
inverted.");let[s,u,l,c,m,b,h,_,g]=t,S=g*m-b*_,M=-g*c+b*h,C=_*
c-m*h;return this.update(S/n,(-g*u+l*_)/n,(b*u-l*m)/n,M/n,(g*
s-l*h)/n,(-b*s+l*c)/n,C/n,(-_*s+u*h)/n,(m*s-u*c)/n)},"value")},
update:{value:i(function(){return t.set(Iterator.from(arguments).
map(n=>typeof n=="number"?n:0).toArray()),this},"value")}}),
a.update(...e)}i(p,"createMatrix");var D=i(e=>x(e)&&"space"in e&&V(e.space)&&"length"in e&&e.length===
3&&Iterator.from(e).every(r=>typeof r=="number"),"isPointInS\
pace");var fe=1e-6,P=i((e,r=6)=>{let o=10**r;return Math.sign(e)*Math.
round((Math.abs(e)+Number.EPSILON)*o)/o},"round");var X=i(e=>x(e)&&"length"in e&&e.length===3&&Iterator.from(e).
every(r=>typeof r=="number")&&"magnitude"in e&&typeof e.magnitude==
"number"&&"terminal"in e&&e.terminal instanceof Float64Array,
"isVector");function v(e,r=0,o=0){let t=D(e)?new Float64Array(e.buffer):
Float64Array.of(e,r,o),a=Object.create(null,{[Symbol.isConcatSpreadable]:{
value:!0},[Symbol.iterator]:{value:i(function*(){yield this[0],
yield this[1],yield this[2]},"value")},0:{enumerable:!0,get(){
return this.terminal[0]},set(n){if(typeof n=="number")this.terminal[0]=
n;else throw new TypeError("Expected Number")}},1:{enumerable:!0,
get(){return this.terminal[1]},set(n){if(typeof n=="number")
this.terminal[1]=n;else throw new TypeError("Expected Number")}},
2:{enumerable:!0,get(){return this.terminal[2]},set(n){if(typeof n==
"number")this.terminal[2]=n;else throw new TypeError("Expect\
ed Number")}},length:{enumerable:!0,value:3}});return Object.
defineProperties(a,{magnitude:{enumerable:!0,get:i(()=>P(Math.
hypot(...t),9),"get")},squaredLength:{get:i(()=>t.reduce((n,s)=>n+
Math.pow(s,2),0),"get")},terminal:{enumerable:!0,value:t}}),
Object.defineProperties(a,{clone:{value:i(()=>{let[n,s,u]=t;
return v(n,s,u)},"value")},angle:{value:N},cross:{value:Y},distance:{
value:F},dot:{value:z},each:{value:q},equals:{value:K},multiply:{
value:Z},normalize:{value:$},randomly:{value:L},strictEquals:{
value:H},update:{value:G},zeroize:{value:B}}),Object.defineProperties(
a,{toArray:{value:i(()=>Array.from(t),"value")},toString:{value:i(
()=>t.toString(),"value")},[Symbol.toStringTag]:{get(){return`\
Vector[${this.toString()}]`}}}),a}i(v,"createVector");function N(e,r=!1){
let o=Math.sqrt(this.squaredLength*e.squaredLength),t=o&&this.
dot(e)/o,a=Math.acos(Math.min(Math.max(t,-1),1));return r?a*
180/Math.PI:a}i(N,"angle");function Y(e){let[r,o,t]=this.terminal,
[a,n,s]=e;return r=o*s-t*n,o=t*a-r*s,t=r*n-o*a,this.update(r,
o,t)}i(Y,"cross");function F(e){return Math.sqrt(this.terminal.
reduce((r,o,t)=>r+Math.pow(e[t]-o,2),0))}i(F,"distance");function z(e){
let[r,o,t]=this.terminal,[a,n,s]=e;return r*a+o*n+t*s}i(z,"d\
ot");function q(e){for(let r=0;r<3;r++)e(this[r],r,this);return this}
i(q,"each");function Z(e){let[r,o,t]=this.terminal;if(A(e)){
let[a,n,s,u,l,c,m,b,h]=e;r=r*a+o*u+t*m,o=r*n+o*l+t*b,t=r*s+o*
c+t*h}else if(X(e)){let[a,n,s]=e;r*=a,o*=n,t*=s}else throw new TypeError(
"Unsupported Type of Multiplicator: "+e);return this.update(
r,o,t)}i(Z,"multiply");function $(){let[e,r,o]=this.terminal,
t=1/this.magnitude;return e*=t,r*=t,o*=t,this.update(e,r,o)}
i($,"normalize");function G(e,r,o){return this.terminal.set(
Array.of(e,r,o)),this}i(G,"update");function B(){return this.
update(0,0,0)}i(B,"zeroize");function L(e=1){let r=Math.random()*
2*Math.PI,o=Math.random()*2-1,t=Math.sqrt(1-Math.pow(o,2))*e;
return this.update(Math.cos(r)*t,Math.sin(r)*t,o*e)}i(L,"ran\
domly");function H(e){let[r,o,t]=this.terminal,[a,n,s]=e;return r===
a&&o===n&&t===s}i(H,"strictEquals");function K(e,r=1e-6){let[
o,t,a]=this.terminal,[n,s,u]=e;return Math.abs(o-n)<=r*Math.
max(1,Math.abs(o),Math.abs(n))&&Math.abs(t-s)<=r*Math.max(1,
Math.abs(t),Math.abs(s))&&Math.abs(a-u)<=r*Math.max(1,Math.abs(
a),Math.abs(u))}i(K,"equals");function we(e=[0,100],r=[0,1]){let[o,t]=r,[a,n]=e,[s,u]=[t-o,
n-a];function l(m){return typeof m=="string"&&(m=parseFloat(
m)),c.domain.test(m)===!1&&(m=m>t?(m-t)%s+o:t-(o-m)%s),u*(m-
o)/s+a}i(l,"invert");function c(m){return typeof m=="string"&&
(m=parseFloat(m)),c.range.test(m)===!1&&(m=m>n?(m-n)%u+a:n-(a-
m)%u),s*(m-a)/u+o}return i(c,"calculator"),Object.defineProperties(
c,{domain:{enumerable:!0,value:f(o,t)},range:{enumerable:!0,
value:f(a,n)},invert:{enumerable:!0,value:l}})}i(we,"initSca\
le");var Pe=p(.955473421488075,-.02309845494876471,.06325924320057072,
-.0283697093338637,1.0099953980813041,.021041441191917323,.012314014864481998,
-.020507649298898964,1.330365926242124),Ce=p(1.0479297925449969,
.022946870601609652,-.05019226628920524,.02962780877005599,.9904344267538799,
-.017073799063418826,-.009243040646204504,.015055191490298152,
.7518742814281371),Te=i((e,r)=>{let o,t,a,n,s,u;switch(r){case"\
srgb":o=.64,t=.33,a=.3,n=.6,s=.15,u=.06;break;case"display-p\
3":o=.68,t=.32,a=.265,n=.69,s=.15,u=.06;break;case"rec2020":
o=.708,t=.292,a=.17,n=.797,s=.131,u=.046;break;case"a98-rgb":
o=.64,t=.33,a=.21,n=.71,s=.15,u=.06;break;case"prophoto-rgb":
o=.734699,t=.265301,a=.159597,n=.840403,s=.036598,u=105e-6;break;default:
throw new Error}let c=p(o/t,a/n,s/u,1,1,1,(1-o-t)/t,(1-a-n)/
n,(1-s-u)/u).clone().invert();return v(...e.multiply(c).map(
m=>Math.pow(m,3)))},"matRgbToXYZBySpaceID"),Ee=p(.4122214708,
.2119034982,.0883024619,.5363325363,.6806995451,.2817188376,
.0514459929,.1073969566,.6299787005),ke=p(1,0,0,0,1,0,0,0,1),
je=p(0,1,0,0,0,1,0,0,0);/**
 * @preserve
 * Ма́трица сдви́га (также сдви́говая ма́трица) — бинарная матрица с единицами только на главных наддиагонали или поддиагонали и нулями в остальных местах.
 * Сдвиговая матрица с единицами на поддиагонали называется _нижне-сдвиговой матрицей_.
 *
 * *Умножение слева* произвольной матрицы `A` на _нижне-сдвиговую матрицу_ приводит к сдвигу элементов матрицы `A` вниз на одну позицию,
 * причём верхняя строчка результирующей матрицы заполняется нулями.
 *
 * *Умножение справа* произвольной матрицы `A` на _нижне-сдвиговую матрицу_ приводит к сдвигу влево на одну позицию с заполнением нулями правого столбца.
 *
 * https://en.wikipedia.org/wiki/Shift_matrix
 */var Oe=p(0,0,0,1,0,0,0,1,0);/**
 * @preserve
 * Перъединичная матрица (обменная матрица) — квадратная матрица, все элементы побочной диагонали которой равны 1, а остальные — 0 (то есть антидиагональная единичная): {@link UNIT_MATRIX}.
 *
 * Является матрицей перестановки: она переставляет все строки матрицы в обратном порядке, если умножается слева на эту матрицу, и переставляет в обратном порядке столбцы, если умножается справа.
 *
 * https://en.wikipedia.org/wiki/Exchange_matrix
 */var Xe=p(0,0,1,0,1,0,1,0,0);var ze=f(0,360),qe=f(0,2*Math.PI),Ze=f(0,100),$e=f(0,255),Ge=f(
0,1);export{w as CubicBezier,ze as DEGREE_RANGE,fe as EPSILON,Xe as EXCHANGE_MATRIX,
ke as IDENTITY_MATRIX,$e as INT8_RANGE,Oe as LOWER_SHIFT_MATRIX,
Pe as MX_D50_to_D65,Ce as MX_D65_to_D50,Ze as PERCENT_RANGE,
qe as RADIAN_RANGE,Ge as UNIT_RANGE,je as UPPER_SHIFT_MATRIX,
p as createMatrix,f as createRange,v as createVector,we as initScale,
A as isMatrix,E as isRange,X as isVector,Te as matRgbToXYZBySpaceID,
P as round,Ee as srgb_lms_tfmx};
