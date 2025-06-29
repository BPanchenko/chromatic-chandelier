var p=Object.defineProperty;var s=(e,t)=>p(e,"name",{value:t,configurable:!0});var j=s(e=>e instanceof Float64Array&&e.length===9&&typeof e[0]=="number"&&typeof e[1]=="number"&&typeof e[2]=="number"&&
typeof e[3]=="number"&&typeof e[4]=="number"&&typeof e[5]=="number"&&typeof e[6]=="number"&&typeof e[7]=="number"&&typeof e[8]==
"number","isMatrix");var c=s((e,t,b,r,n,i,m,u,o)=>Object.freeze({0:typeof e=="number"?e:0,1:typeof t=="number"?t:0,2:typeof b=="number"?b:0,3:typeof r==
"number"?r:0,4:typeof n=="number"?n:0,5:typeof i=="number"?i:0,6:typeof m=="number"?m:0,7:typeof u=="number"?u:0,8:typeof o==
"number"?o:0,length:9,[Symbol.iterator]:s(function*(){yield this[0],yield this[1],yield this[2],yield this[3],yield this[4],
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
 */function x(e,t,b,r,n,i,m,u,o){let a=c(e,t,b,r,n,i,m,u,o);return Object.create(Float64Array.from(a),{clone:{value:d},each:{
value:M},determinant:{value:l},invert:{value:g},update:{value:w},length:{enumerable:!0,value:9}})}s(x,"createMatrix");function l(){
let[e,t,b,r,n,i,m,u,o]=this,a=o*n-i*u,f=-o*r+i*m,h=u*r-n*m;return e*a+t*f+b*h}s(l,"determinant");function d(){let[e,t,b,
r,n,i,m,u,o]=this;return x(e,t,b,r,n,i,m,u,o)}s(d,"clone");function M(e){for(let t=0;t<this.length;t++)e(this[t],t,this);
return this}s(M,"each");function g(){let e=this.determinant();if(e===0)throw console.table(this),new Error("A singular o\
r non-square matrix matrix cannot be inverted.");let[t,b,r,n,i,m,u,o,a]=this,f=a*i-m*o,h=-a*n+m*u,y=o*n-i*u;return this.
set(c(f/e,(-a*b+r*o)/e,(m*b-r*i)/e,h/e,(a*t-r*u)/e,(-m*t+r*n)/e,y/e,(-o*t+b*u)/e,(i*t-b*n)/e)),this}s(g,"selfInvert");function w(e,t,b,r,n,i,m,u,o){
return this.set(c(e,t,b,r,n,i,m,u,o)),this}s(w,"selfUpdate");export{x as createMatrix,x as default,j as isMatrix};
