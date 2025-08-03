var w=Object.defineProperty;var i=(e,t)=>w(e,"name",{value:t,configurable:!0});var M=class{static{i(this,"CubicBezier")}cx;bx;ax;cy;by;ay;name;constructor(t=0,n=0,r=1,o=1,s){
this.cx=3*t,this.bx=3*(r-t)-this.cx,this.ax=1-this.cx-this.bx,
this.cy=3*n,this.by=3*(o-n)-this.cy,this.ay=1-this.cy-this.by,
this.name=s||([t,n].every(a=>a===0)&&[r,o].every(a=>a===1)?"\
linear":`cubic-bezier(${[t,n,r,o].join(",")})`)}sampleCurveX(t){
return((this.ax*t+this.bx)*t+this.cx)*t}sampleCurveY(t){return((this.
ay*t+this.by)*t+this.cy)*t}sampleCurveDerivativeX(t){return(3*
this.ax*t+2*this.bx)*t+this.cx}solveCurveX(t){if(0>=t)return 0;
if(1<=t)return 1;let r=t,o=0,s=0;for(let c=0;8>c;c+=1){if(o=
this.sampleCurveX(r)-t,Math.abs(o)<1e-6)return r;if(s=this.sampleCurveDerivativeX(
r),Math.abs(s)<1e-6)break;r-=o/s}let a=0,u=1;for(r=t;a<u;){if(o=
this.sampleCurveX(r),Math.abs(o-t)<1e-6)return r;t>o?a=r:u=r,
r=a+(u-a)/2}return r}};var S=i(e=>e instanceof Float64Array&&e.length===9&&typeof e[0]==
"number"&&typeof e[1]=="number"&&typeof e[2]=="number"&&typeof e[3]==
"number"&&typeof e[4]=="number"&&typeof e[5]=="number"&&typeof e[6]==
"number"&&typeof e[7]=="number"&&typeof e[8]=="number","isMa\
trix");var g=i((e,t,n,r,o,s,a,u,c)=>Object.freeze({0:typeof e=="num\
ber"?e:0,1:typeof t=="number"?t:0,2:typeof n=="number"?n:0,3:typeof r==
"number"?r:0,4:typeof o=="number"?o:0,5:typeof s=="number"?s:
0,6:typeof a=="number"?a:0,7:typeof u=="number"?u:0,8:typeof c==
"number"?c:0,length:9,[Symbol.iterator]:i(function*(){yield this[0],
yield this[1],yield this[2],yield this[3],yield this[4],yield this[5],
yield this[6],yield this[7],yield this[8]},"generator")}),"p\
arseMatrixEntries");/**
 * @preserve
 * Create an 3x3 matrix with the given values
 *
 * @param m00 Element in column 0, row 0 position (index 0)
 * @param m01 Element in column 0, row 1 position (index 1)
 * @param m02 Element in column 0, row 2 position (index 2)
 * @param m10 Element in column 1, row 0 position (index 3)
 * @param m11 Element in column 1, row 1 position (index 4)
 * @param m12 Element in column 1, row 2 position (index 5)
 * @param m20 Element in column 2, row 0 position (index 6)
 * @param m21 Element in column 2, row 1 position (index 7)
 * @param m22 Element in column 2, row 2 position (index 8)
 * @returns An 3x3 matrix
 */function h(e,t,n,r,o,s,a,u,c){let b=g(e,t,n,r,o,s,a,u,c);
return Object.create(Float64Array.from(b),{clone:{value:C},each:{
value:v},determinant:{value:k},invert:{value:E},update:{value:A},
length:{enumerable:!0,value:9}})}i(h,"createMatrix");function k(){
let[e,t,n,r,o,s,a,u,c]=this,b=c*o-s*u,m=-c*r+s*a,f=u*r-o*a;return e*
b+t*m+n*f}i(k,"determinant");function C(){let[e,t,n,r,o,s,a,
u,c]=this;return h(e,t,n,r,o,s,a,u,c)}i(C,"clone");function v(e){
for(let t=0;t<this.length;t++)e(this[t],t,this);return this}
i(v,"each");function E(){let e=this.determinant();if(e===0)throw console.
table(this),new Error("A singular or non-square matrix matri\
x cannot be inverted.");let[t,n,r,o,s,a,u,c,b]=this,m=b*s-a*
c,f=-b*o+a*u,y=c*o-s*u;return this.set(g(m/e,(-b*n+r*c)/e,(a*
n-r*s)/e,f/e,(b*t-r*u)/e,(-a*t+r*o)/e,y/e,(-c*t+n*u)/e,(s*t-
n*o)/e)),this}i(E,"selfInvert");function A(e,t,n,r,o,s,a,u,c){
return this.set(g(e,t,n,r,o,s,a,u,c)),this}i(A,"selfUpdate");var N=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch",
"oklab","oklch","prophoto-rgb","rec2020","rec2100-pq","rec21\
00-hlg","rec2100-linear","srgb-linear","srgb","rgb","xyz","x\
yz-d50","xyz-d65"]);var V=i(e=>R(e)&&N.has(e),"isSpaceID");var I=i(e=>l(e)&&"space"in e&&D(e.space)&&Symbol.iterator in
e&&0 in e&&typeof e[0]=="number"&&1 in e&&typeof e[1]=="numb\
er"&&2 in e&&typeof e[2]=="number"&&"length"in e&&e.length===
3,"isPointInSpace");var _=i(e=>typeof e=="number","isNumber"),R=i(e=>typeof e=="\
string","isString"),l=i(e=>e!==null&&typeof e=="object"&&Array.
isArray(e)===!1,"isObject"),D=i(e=>l(e)&&"ident"in e&&V(e.ident)&&
"CSYS"in e&&l(e.CSYS)&&"length"in e.CSYS&&e.CSYS.length===3,
"isColorSpace");var F=i((e,t)=>Object.create(null,{0:{enumerable:!0,value:e},
1:{enumerable:!0,value:t},length:{value:2},[Symbol.iterator]:{
value:i(function*(){yield this[0],yield this[1]},"value")}}),
"createDataView"),z=i(e=>l(e)&&Symbol.iterator in e&&"min"in
e&&_(e.min)&&"max"in e&&_(e.max)&&"span"in e&&_(e.span)&&e.span>
0,"isRange");function p(e=1,t){let n=F(t===void 0?0:e,t===void 0?e:t),[r,
o]=n,s=Math.sqrt(o**2+r**2),a=r+s/2;return Object.defineProperties(
n,{from:{enumerable:!0,value:r},to:{enumerable:!0,value:o},span:{
enumerable:!0,value:s},avg:{enumerable:!0,value:a},allot:{value:P},
clamp:{value:X},clone:{value:j},test:{value:i(u=>r<=u&&u<=o,
"value")},toString:{value:i(()=>String.raw`{x ∈ R; ${r} ⋜ x ⋜ ${o}}`,
"value")}})}i(p,"createRange");function P(e){return this.test(
e)?e:e>this.from?(e-this.to)%this.span+this.from:this.to-(this.
from-e)%this.span}i(P,"allocateOuterValue");function X(e){return this.
test(e)?e:Math.max(Math.min(e,this.to),this.from)}i(X,"restr\
ictOuterValue");function j(){return p(...this)}i(j,"makeDupl\
icate");var q=i(e=>e instanceof Float64Array&&e.length===3&&typeof e[0]==
"number"&&typeof e[1]=="number"&&typeof e[2]=="number","isVe\
ctor");function d(e,t,n){let r=I(e)?x(e[0],e[1],e[2]):x(e,t,n),o=Float64Array.
of(...r);return Object.defineProperties(o,{clone:{value:i(function(){
return d(o[0],o[1],o[2])},"value")},magnitude:{get(){return Math.
hypot(...this)}},squaredLength:{get(){return this.reduce((s,a)=>s+
Math.pow(a,2),0)}},terminalPoint:{enumerable:!0,value:o},angle:{
value:O},cross:{value:T},distance:{value:Y},dot:{value:G},each:{
value:Z},equals:{value:J},multiply:{value:B},normalize:{value:L},
randomly:{value:K},strictEquals:{value:$},update:{value:U},zeroize:{
value:H}})}i(d,"createVector");function O(e,t=!1){let n=Math.
sqrt(this.squaredLength*e.squaredLength),r=n&&this.dot(e)/n,
o=Math.acos(Math.min(Math.max(r,-1),1));return t?o*180/Math.
PI:o}i(O,"angle");function T(e){return this.update(this[1]*e[2]-
this[2]*e[1],this[2]*e[0]-this[0]*e[2],this[0]*e[1]-this[1]*
e[0])}i(T,"cross");function Y(e){return Math.sqrt(this.reduce(
(t,n,r)=>t+Math.pow(e[r]-n,2),0))}i(Y,"distance");function G(e){
return this[0]*e[0]+this[1]*e[1]+this[2]*e[2]}i(G,"dot");function Z(e){
for(let t=0;t<this.length;t++)e(this[t],t,this);return this}
i(Z,"each");function B(e){if(S(e)){let[t,n,r]=this,[o,s,a,u,
c,b,m,f,y]=e;this.set(x(t*o+n*u+r*m,t*s+n*c+r*f,t*a+n*b+r*y))}else if(q(
e)){let[t,n,r]=e;this[0]*=t,this[1]*=n,this[2]*=r}else throw console.
table(e),new TypeError("Unsupported Type of Multiplicator");
return this}i(B,"multiply");function L(){let e=1/this.magnitude;
return this[0]*=e,this[1]*=e,this[2]*=e,this}i(L,"normalize");
function U(e,t,n){return this.set(x(...arguments)),this}i(U,
"update");function H(){return this.update(0,0,0)}i(H,"zeroiz\
e");function K(e=1){let t=Math.random()*2*Math.PI,n=Math.random()*
2-1,r=Math.sqrt(1-Math.pow(n,2))*e;return this.update(Math.cos(
t)*r,Math.sin(t)*r,n*e)}i(K,"randomly");function $(e){return this[0]===
e[0]&&this[1]===e[1]&&this[2]===e[2]}i($,"strictEquals");function J(e,t=1e-9){
let[n,r,o]=this,[s,a,u]=e;return Math.abs(n-s)<=t*Math.max(1,
Math.abs(n),Math.abs(s))&&Math.abs(r-a)<=t*Math.max(1,Math.abs(
r),Math.abs(a))&&Math.abs(o-u)<=t*Math.max(1,Math.abs(o),Math.
abs(u))}i(J,"equals");function x(e=0,t=0,n=0){return Object.
create(Iterator.from([e,t,n]),{length:{value:3}})}i(x,"initP\
ointPosition");function ye(e=[0,100],t=[0,1]){let[n,r]=t,[o,s]=e,[a,u]=[r-n,
s-o];function c(m){return typeof m=="string"&&(m=parseFloat(
m)),b.domain.test(m)===!1&&(m=m>r?(m-r)%a+n:r-(n-m)%a),u*(m-
n)/a+o}i(c,"invert");function b(m){return typeof m=="string"&&
(m=parseFloat(m)),b.range.test(m)===!1&&(m=m>s?(m-s)%u+o:s-(o-
m)%u),a*(m-o)/u+n}return i(b,"calculator"),Object.defineProperties(
b,{domain:{enumerable:!0,value:p(n,r)},range:{enumerable:!0,
value:p(o,s)},invert:{enumerable:!0,value:c}})}i(ye,"initSca\
le");var Me=1e-6,Se=i((e,t=6)=>{let n=10**t;return Math.sign(e)*Math.
round((Math.abs(e)+Number.EPSILON)*n)/n},"round");var we=h(.955473421488075,-.02309845494876471,.06325924320057072,
-.0283697093338637,1.0099953980813041,.021041441191917323,.012314014864481998,
-.020507649298898964,1.330365926242124),ke=h(1.0479297925449969,
.022946870601609652,-.05019226628920524,.02962780877005599,.9904344267538799,
-.017073799063418826,-.009243040646204504,.015055191490298152,
.7518742814281371),Ce=i((e,t)=>{let n,r,o,s,a,u;switch(t){case"\
srgb":n=.64,r=.33,o=.3,s=.6,a=.15,u=.06;break;case"display-p\
3":n=.68,r=.32,o=.265,s=.69,a=.15,u=.06;break;case"rec2020":
n=.708,r=.292,o=.17,s=.797,a=.131,u=.046;break;case"a98-rgb":
n=.64,r=.33,o=.21,s=.71,a=.15,u=.06;break;case"prophoto-rgb":
n=.734699,r=.265301,o=.159597,s=.840403,a=.036598,u=105e-6;break;default:
throw new Error}let b=h(n/r,o/s,a/u,1,1,1,(1-n-r)/r,(1-o-s)/
s,(1-a-u)/u).clone().invert();return d(...e.multiply(b).map(
m=>Math.pow(m,3)))},"matRgbToXYZBySpaceID"),ve=h(.4122214708,
.2119034982,.0883024619,.5363325363,.6806995451,.2817188376,
.0514459929,.1073969566,.6299787005),Ee=h(1,0,0,0,1,0,0,0,1),
Ae=h(0,1,0,0,0,1,0,0,0);/**
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
 */var Ne=h(0,0,0,1,0,0,0,1,0);/**
 * @preserve
 * Перъединичная матрица (обменная матрица) — квадратная матрица, все элементы побочной диагонали которой равны 1, а остальные — 0 (то есть антидиагональная единичная): {@link UNIT_MATRIX}.
 *
 * Является матрицей перестановки: она переставляет все строки матрицы в обратном порядке, если умножается слева на эту матрицу, и переставляет в обратном порядке столбцы, если умножается справа.
 *
 * https://en.wikipedia.org/wiki/Exchange_matrix
 */var ze=h(0,0,1,0,1,0,1,0,0);var je=p(0,360),qe=p(0,2*Math.PI),Oe=p(0,100),Te=p(0,255),Ye=p(
0,1);export{M as CubicBezier,je as DEGREE_RANGE,Me as EPSILON,ze as EXCHANGE_MATRIX,
Ee as IDENTITY_MATRIX,Te as INT8_RANGE,Ne as LOWER_SHIFT_MATRIX,
we as MX_D50_to_D65,ke as MX_D65_to_D50,Oe as PERCENT_RANGE,
qe as RADIAN_RANGE,Ye as UNIT_RANGE,Ae as UPPER_SHIFT_MATRIX,
h as createMatrix,p as createRange,d as createVector,ye as initScale,
S as isMatrix,z as isRange,q as isVector,Ce as matRgbToXYZBySpaceID,
Se as round,ve as srgb_lms_tfmx};
