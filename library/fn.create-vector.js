var p=Object.defineProperty;var n=(t,e)=>p(t,"name",{value:e,configurable:!0});var h=n(t=>t instanceof Float64Array&&t.length===9&&typeof t[0]=="number"&&typeof t[1]=="number"&&typeof t[2]=="number"&&
typeof t[3]=="number"&&typeof t[4]=="number"&&typeof t[5]=="number"&&typeof t[6]=="number"&&typeof t[7]=="number"&&typeof t[8]==
"number","isMatrix");/**
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
 */var d=n(t=>t instanceof Float64Array&&t.length===3&&typeof t[0]=="number"&&typeof t[1]=="number"&&typeof t[2]=="number",
"isVector");function M(t,e,r){let i=new ArrayBuffer(24),o=new Float64Array(i,0,3),s=m(t,e,r);return Object.defineProperties(o.set(s)??
o,{clone:{value:n(()=>M(...o),"value")},magnitude:{get(){return Math.sqrt(this.squaredLength)}},squaredLength:{get(){return this.
reduce((u,a)=>u+Math.pow(a,2),0)}},angle:{value:x},cross:{value:V},distance:{value:g},dot:{value:q},each:{value:w},equals:{
value:Z},multiply:{value:z},normalize:{value:A},randomly:{value:j},strictEquals:{value:P},update:{value:k},zeroize:{value:F}})}
n(M,"createVector");function x(t,e=!1){let r=Math.sqrt(this.squaredLength*t.squaredLength),i=r&&this.dot(t)/r,o=Math.acos(
Math.min(Math.max(i,-1),1));return e?o*180/Math.PI:o}n(x,"angle");function V(t){return this.update(this[1]*t[2]-this[2]*
t[1],this[2]*t[0]-this[0]*t[2],this[0]*t[1]-this[1]*t[0])}n(V,"cross");function g(t){return Math.sqrt(this.reduce((e,r,i)=>e+
Math.pow(t[i]-r,2),0))}n(g,"distance");function q(t){return this[0]*t[0]+this[1]*t[1]+this[2]*t[2]}n(q,"dot");function w(t){
for(let e=0;e<this.length;e++)t(this[e],e,this);return this}n(w,"each");function z(t){if(h(t)){let[e,r,i]=this,[o,s,u,a,
b,c,f,l,y]=t;this.set(m(e*o+r*a+i*f,e*s+r*b+i*l,e*u+r*c+i*y))}else if(d(t)){let[e,r,i]=t;this[0]*=e,this[1]*=r,this[2]*=
i}else throw console.table(t),new TypeError("Unsupported Type of Multiplicator");return this}n(z,"multiply");function A(){
let t=1/this.magnitude;return this[0]*=t,this[1]*=t,this[2]*=t,this}n(A,"normalize");function k(t,e,r){return this.set(m(
...arguments)),this}n(k,"update");function F(){return this.update(0,0,0)}n(F,"zeroize");function j(t=1){let e=Math.random()*
2*Math.PI,r=Math.random()*2-1,i=Math.sqrt(1-Math.pow(r,2))*t;return this.update(Math.cos(e)*i,Math.sin(e)*i,r*t)}n(j,"ra\
ndomly");function P(t){return this[0]===t[0]&&this[1]===t[1]&&this[2]===t[2]}n(P,"strictEquals");function Z(t,e=1e-9){let[
r,i,o]=this,[s,u,a]=t;return Math.abs(r-s)<=e*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(i-u)<=e*Math.max(1,Math.abs(
i),Math.abs(u))&&Math.abs(o-a)<=e*Math.max(1,Math.abs(o),Math.abs(a))}n(Z,"equals");function m(t=0,e=0,r=0){return Object.
freeze({length:3,0:typeof t=="number"?t:0,1:typeof e=="number"?e:0,2:typeof r=="number"?r:0,*[Symbol.iterator](){yield this[0],
yield this[1],yield this[2]}})}n(m,"initPointPosition");export{M as createVector,M as default,d as isVector};
