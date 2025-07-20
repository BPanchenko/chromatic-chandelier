var A=Object.defineProperty;var o=(e,t)=>A(e,"name",{value:t,configurable:!0});var g=class{static{o(this,"CubicBezier")}cx;bx;ax;cy;by;ay;name;constructor(t=0,n=0,r=1,i=1,a){this.cx=3*t,this.bx=3*(r-
t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*n,this.by=3*(i-n)-this.cy,this.ay=1-this.cy-this.by,this.name=a||([t,n].every(
s=>s===0)&&[r,i].every(s=>s===1)?"linear":`cubic-bezier(${[t,n,r,i].join(",")})`)}sampleCurveX(t){return((this.ax*t+this.
bx)*t+this.cx)*t}sampleCurveY(t){return((this.ay*t+this.by)*t+this.cy)*t}sampleCurveDerivativeX(t){return(3*this.ax*t+2*
this.bx)*t+this.cx}solveCurveX(t){if(0>=t)return 0;if(1<=t)return 1;let r=t,i=0,a=0;for(let c=0;8>c;c+=1){if(i=this.sampleCurveX(
r)-t,Math.abs(i)<1e-6)return r;if(a=this.sampleCurveDerivativeX(r),Math.abs(a)<1e-6)break;r-=i/a}let s=0,u=1;for(r=t;s<u;){
if(i=this.sampleCurveX(r),Math.abs(i-t)<1e-6)return r;t>i?s=r:u=r,r=s+(u-s)/2}return r}};var M=o(e=>e instanceof Float64Array&&e.length===9&&typeof e[0]=="number"&&typeof e[1]=="number"&&typeof e[2]=="number"&&
typeof e[3]=="number"&&typeof e[4]=="number"&&typeof e[5]=="number"&&typeof e[6]=="number"&&typeof e[7]=="number"&&typeof e[8]==
"number","isMatrix");var p=o((e,t,n,r,i,a,s,u,c)=>Object.freeze({0:typeof e=="number"?e:0,1:typeof t=="number"?t:0,2:typeof n=="number"?n:0,3:typeof r==
"number"?r:0,4:typeof i=="number"?i:0,5:typeof a=="number"?a:0,6:typeof s=="number"?s:0,7:typeof u=="number"?u:0,8:typeof c==
"number"?c:0,length:9,[Symbol.iterator]:o(function*(){yield this[0],yield this[1],yield this[2],yield this[3],yield this[4],
yield this[5],yield this[6],yield this[7],yield this[8]},"generator")}),"parseMatrixEntries");/**
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
 */function h(e,t,n,r,i,a,s,u,c){let b=p(e,t,n,r,i,a,s,u,c);return Object.create(Float64Array.from(b),{clone:{value:T},each:{
value:I},determinant:{value:E},invert:{value:k},update:{value:v},length:{enumerable:!0,value:9}})}o(h,"createMatrix");function E(){
let[e,t,n,r,i,a,s,u,c]=this,b=c*i-a*u,m=-c*r+a*s,l=u*r-i*s;return e*b+t*m+n*l}o(E,"determinant");function T(){let[e,t,n,
r,i,a,s,u,c]=this;return h(e,t,n,r,i,a,s,u,c)}o(T,"clone");function I(e){for(let t=0;t<this.length;t++)e(this[t],t,this);
return this}o(I,"each");function k(){let e=this.determinant();if(e===0)throw console.table(this),new Error("A singular o\
r non-square matrix matrix cannot be inverted.");let[t,n,r,i,a,s,u,c,b]=this,m=b*a-s*c,l=-b*i+s*u,_=c*i-a*u;return this.
set(p(m/e,(-b*n+r*c)/e,(s*n-r*a)/e,l/e,(b*t-r*u)/e,(-s*t+r*i)/e,_/e,(-c*t+n*u)/e,(a*t-n*i)/e)),this}o(k,"selfInvert");function v(e,t,n,r,i,a,s,u,c){
return this.set(p(e,t,n,r,i,a,s,u,c)),this}o(v,"selfUpdate");var y=o(e=>typeof e=="number","isNumber");var R=o(e=>e!==null&&typeof e=="object"&&Array.isArray(e)===!1,"isObject");var ie=o(e=>R(e)&&Symbol.iterator in e&&"min"in e&&y(e.min)&&"max"in e&&y(e.max),"isRange");var F=o((e,t)=>Object.freeze({0:e,1:t,length:2,[Symbol.iterator]:function*(){yield this[0],yield this[1]}}),"parseRangeB\
uffer");function f(e=1,t){let n=F(t===void 0?0:e,t===void 0?e:t),[r,i]=[Math.min(...n),Math.max(...n)];return Object.create(
n,{from:{enumerable:!0,value:n[0]},min:{enumerable:!0,value:r},magnitude:{enumerable:!0,value:i-r},mediana:{enumerable:!0,
value:r+(i-r)/2},max:{enumerable:!0,value:i},to:{enumerable:!0,value:n[1]},allot:{value:S},clamp:{value:z},clone:{value:N},
test:{value:X},toString:{value:q}})}o(f,"createRange");function S(e){return e>this.max?(e-this.max)%this.magnitude+this.
min:this.max-(this.min-e)%this.magnitude}o(S,"allocateOuterValue");function z(e){return e<this.min?this.min:e>this.max?this.
max:e}o(z,"restrictOuterValue");function N(){return f(...this)}o(N,"makeDuplicate");function X(e){return this.min<=e&&e<=
this.max}o(X,"includes");function q(){return`{x \u2208 R; ${this.min} \u22DC x \u22DC ${this.max}}`}o(q,"serialize");var C=o(e=>e instanceof Float64Array&&e.length===3&&typeof e[0]=="number"&&typeof e[1]=="number"&&typeof e[2]=="number",
"isVector");function x(e,t,n){let r=new ArrayBuffer(24),i=new Float64Array(r,0,3),a=d(e,t,n);return Object.defineProperties(i.set(a)??
i,{clone:{value:o(()=>x(...i),"value")},magnitude:{get(){return Math.sqrt(this.squaredLength)}},squaredLength:{get(){return this.
reduce((s,u)=>s+Math.pow(u,2),0)}},terminal:{get(){return Float64Array.from(a)}},angle:{value:D},cross:{value:j},distance:{
value:O},dot:{value:P},each:{value:B},equals:{value:$},multiply:{value:G},normalize:{value:U},randomly:{value:L},strictEquals:{
value:H},update:{value:Y},zeroize:{value:Z}})}o(x,"createVector");function D(e,t=!1){let n=Math.sqrt(this.squaredLength*
e.squaredLength),r=n&&this.dot(e)/n,i=Math.acos(Math.min(Math.max(r,-1),1));return t?i*180/Math.PI:i}o(D,"angle");function j(e){
return this.update(this[1]*e[2]-this[2]*e[1],this[2]*e[0]-this[0]*e[2],this[0]*e[1]-this[1]*e[0])}o(j,"cross");function O(e){
return Math.sqrt(this.reduce((t,n,r)=>t+Math.pow(e[r]-n,2),0))}o(O,"distance");function P(e){return this[0]*e[0]+this[1]*
e[1]+this[2]*e[2]}o(P,"dot");function B(e){for(let t=0;t<this.length;t++)e(this[t],t,this);return this}o(B,"each");function G(e){
if(M(e)){let[t,n,r]=this,[i,a,s,u,c,b,m,l,_]=e;this.set(d(t*i+n*u+r*m,t*a+n*c+r*l,t*s+n*b+r*_))}else if(C(e)){let[t,n,r]=e;
this[0]*=t,this[1]*=n,this[2]*=r}else throw console.table(e),new TypeError("Unsupported Type of Multiplicator");return this}
o(G,"multiply");function U(){let e=1/this.magnitude;return this[0]*=e,this[1]*=e,this[2]*=e,this}o(U,"normalize");function Y(e,t,n){
return this.set(d(...arguments)),this}o(Y,"update");function Z(){return this.update(0,0,0)}o(Z,"zeroize");function L(e=1){
let t=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-Math.pow(n,2))*e;return this.update(Math.cos(t)*r,Math.sin(
t)*r,n*e)}o(L,"randomly");function H(e){return this[0]===e[0]&&this[1]===e[1]&&this[2]===e[2]}o(H,"strictEquals");function $(e,t=1e-9){
let[n,r,i]=this,[a,s,u]=e;return Math.abs(n-a)<=t*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(r-s)<=t*Math.max(1,Math.
abs(r),Math.abs(s))&&Math.abs(i-u)<=t*Math.max(1,Math.abs(i),Math.abs(u))}o($,"equals");function d(e=0,t=0,n=0){return Object.
freeze({length:3,0:typeof e=="number"?e:0,1:typeof t=="number"?t:0,2:typeof n=="number"?n:0,*[Symbol.iterator](){yield this[0],
yield this[1],yield this[2]}})}o(d,"initPointPosition");var be=f(0,360),he=f(0,2*Math.PI),V=f(0,100),fe=f(0,255),w=f(0,1);function ye(e=V,t=w){let[n,r]=t,[i,a]=e,[s,u]=[r-n,a-i];function c(m){return typeof m=="string"&&(m=parseFloat(m)),b.domain.
test(m)===!1&&(m=m>r?(m-r)%s+n:r-(n-m)%s),u*(m-n)/s+i}o(c,"invert");function b(m){return typeof m=="string"&&(m=parseFloat(
m)),b.range.test(m)===!1&&(m=m>a?(m-a)%u+i:a-(i-m)%u),s*(m-i)/u+n}return o(b,"calculator"),Object.defineProperties(b,{domain:{
enumerable:!0,value:f(n,r)},range:{enumerable:!0,value:f(i,a)},invert:{enumerable:!0,value:c}})}o(ye,"initScale");var Re=h(.955473421488075,-.02309845494876471,.06325924320057072,-.0283697093338637,1.0099953980813041,.021041441191917323,
.012314014864481998,-.020507649298898964,1.330365926242124),Ve=h(1.0479297925449969,.022946870601609652,-.05019226628920524,
.02962780877005599,.9904344267538799,-.017073799063418826,-.009243040646204504,.015055191490298152,.7518742814281371),we=o(
(e,t)=>{let n,r,i,a,s,u;switch(t){case"srgb":n=.64,r=.33,i=.3,a=.6,s=.15,u=.06;break;case"display-p3":n=.68,r=.32,i=.265,
a=.69,s=.15,u=.06;break;case"rec2020":n=.708,r=.292,i=.17,a=.797,s=.131,u=.046;break;case"a98-rgb":n=.64,r=.33,i=.21,a=.71,
s=.15,u=.06;break;case"prophoto-rgb":n=.734699,r=.265301,i=.159597,a=.840403,s=.036598,u=105e-6;break;default:throw new Error}
let b=h(n/r,i/a,s/u,1,1,1,(1-n-r)/r,(1-i-a)/a,(1-s-u)/u).clone().invert();return x(...e.multiply(b).map(m=>Math.pow(m,3)))},
"matRgbToXYZBySpaceID"),Ae=h(.4122214708,.2119034982,.0883024619,.5363325363,.6806995451,.2817188376,.0514459929,.1073969566,
.6299787005),Ee=h(1,0,0,0,1,0,0,0,1),Te=h(0,1,0,0,0,1,0,0,0);/**
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
 */var Ie=h(0,0,0,1,0,0,0,1,0);/**
 * @preserve
 * Перъединичная матрица (обменная матрица) — квадратная матрица, все элементы побочной диагонали которой равны 1, а остальные — 0 (то есть антидиагональная единичная): {@link UNIT_MATRIX}.
 * 
 * Является матрицей перестановки: она переставляет все строки матрицы в обратном порядке, если умножается слева на эту матрицу, и переставляет в обратном порядке столбцы, если умножается справа. 
 * 
 * https://en.wikipedia.org/wiki/Exchange_matrix
 */var ke=h(0,0,1,0,1,0,1,0,0);export{g as CubicBezier,be as DEGREE_RANGE,ke as EXCHANGE_MATRIX,Ee as IDENTITY_MATRIX,fe as INT8_RANGE,Ie as LOWER_SHIFT_MATRIX,
Re as MX_D50_to_D65,Ve as MX_D65_to_D50,V as PERCENT_RANGE,he as RADIAN_RANGE,w as UNIT_RANGE,Te as UPPER_SHIFT_MATRIX,h as createMatrix,
f as createRange,x as createVector,ye as initScale,M as isMatrix,ie as isRange,C as isVector,we as matRgbToXYZBySpaceID,
Ae as srgb_lms_tfmx};
