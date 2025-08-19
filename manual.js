var Xt=Object.defineProperty;var r=(t,e)=>Xt(t,"name",{value:e,configurable:!0});var Zt=Object.defineProperty,$=r((t,e)=>Zt(t,"name",{value:e,
configurable:!0}),"n"),Jt=$(t=>t!==null&&typeof t=="object"&&
Array.isArray(t)===!1,"isObject"),Qt=$(t=>Jt(t)&&"ident"in t&&
"short"in t&&"domain"in t,"isSpaceDimension");function h(t,e,o){
let a=Iterator.from(o===void 0?[t,e]:[t,e,o]),n=o===void 0?2:
3;for(let l of a.take(n))if(Qt(l)===!1)throw new TypeError("\
Passed wrong space dimension: "+JSON.stringify(l,void 0,2));
let i=a.take(n).filter(l=>l.tgeom==="azimuth"||l.tgeom==="re\
ference-ray").toArray().length===2?n===3?"cilinder":"circle":
n===3?"cube":"plane",s=Object.create(null,{0:{enumerable:!0,
value:t},1:{enumerable:!0,value:e},length:{enumerable:!0,value:n},
tgeom:{enumerable:!0,value:i},entries:{value:$(function*(){yield[
0,this[0]],yield[1,this[1]],this.length===3&&(yield[2,this[2]])},
"value")},toArray:{value:$(function(){return Array.of(...this)},
"value")},[Symbol.iterator]:{value:$(function*(){yield this[0],
yield this[1],this.length===3&&(yield this[2])},"value")}});
return n===3&&Object.defineProperty(s,2,{enumerable:!0,value:o}),
l=>l===void 0?s:Object.defineProperties(s,l)}r(h,"O");$(h,"c\
reateCoordinateSystem");var te=Object.defineProperty,R=r((t,e)=>te(t,"name",{value:e,
configurable:!0}),"n"),J=R(t=>typeof t=="number","isNumber"),
ee=R(t=>t!==null&&typeof t=="object"&&Array.isArray(t)===!1,
"isObject"),ze=R(t=>ee(t)&&Symbol.iterator in t&&"minimum"in
t&&J(t.minimum)&&"maximum"in t&&J(t.maximum)&&"value"in t&&J(
t.value)&&t.value>0,"isRange");function p(...t){let e=t.length===
1?Array.of(0,t[0]):Array.of(Math.min(...t),Math.max(...t)),[
o,a]=e,n=a-o,i=o+n/2;return Object.create(null,{from:{value:o},
to:{value:a},minimum:{enumerable:!0,value:o},maximum:{enumerable:!0,
value:a},avg:{enumerable:!0,value:i},value:{enumerable:!0,value:n},
allot:{value:ht},clamp:{value:bt},test:{value:R(s=>o<=s&&s<=
a,"value")},toString:{value:R(()=>String.raw`{x ∈ R; ${o} ⋜ x ⋜ ${a}}`,
"value")},[Symbol.iterator]:{value:R(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}r(p,"v");R(
p,"createRange");function ht(t){return this.test(t)?t:t>this.
from?(t-this.to)%this.value+this.from:this.to-(this.from-t)%
this.value}r(ht,"p");R(ht,"allocateOuterValue");function bt(t){
return this.test(t)?t:Math.max(Math.min(t,this.to),this.from)}
r(bt,"h");R(bt,"restrictOuterValue");var re=Object.defineProperty,oe=r((t,e)=>re(t,"name",{value:e,
configurable:!0}),"n");var ae=oe((t,e=6)=>{let o=10**e;return Math.sign(t)*Math.round(
(Math.abs(t)+Number.EPSILON)*o)/o},"round"),d=ae;var ie=Object.defineProperty,Y=r((t,e)=>ie(t,"name",{value:e,
configurable:!0}),"r");function Q(...t){let e=t.length===1?Array.
of(0,t[0]):Array.of(Math.min(...t),Math.max(...t)),[o,a]=e,n=a-
o,i=o+n/2;return Object.create(null,{from:{value:o},to:{value:a},
minimum:{enumerable:!0,value:o},maximum:{enumerable:!0,value:a},
avg:{enumerable:!0,value:i},value:{enumerable:!0,value:n},allot:{
value:gt},clamp:{value:yt},test:{value:Y(s=>o<=s&&s<=a,"valu\
e")},toString:{value:Y(()=>String.raw`{x ∈ R; ${o} ⋜ x ⋜ ${a}}`,
"value")},[Symbol.iterator]:{value:Y(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}r(Q,"l");Y(
Q,"createRange");function gt(t){return this.test(t)?t:t>this.
from?(t-this.to)%this.value+this.from:this.to-(this.from-t)%
this.value}r(gt,"f");Y(gt,"allocateOuterValue");function yt(t){
return this.test(t)?t:Math.max(Math.min(t,this.to),this.from)}
r(yt,"S");Y(yt,"restrictOuterValue");function tt(t=[0,100],e=[
0,1]){let[o,a]=e,[n,i]=t,[s,l]=[a-o,i-n];function c(m){return typeof m==
"string"&&(m=parseFloat(m)),f.domain.test(m)===!1&&(m=m>a?(m-
a)%s+o:a-(o-m)%s),l*(m-o)/s+n}r(c,"p"),Y(c,"invert");function f(m){
return typeof m=="string"&&(m=parseFloat(m)),f.range.test(m)===
!1&&(m=m>i?(m-i)%l+n:i-(n-m)%l),s*(m-n)/l+o}return r(f,"c"),
Y(f,"calculator"),Object.defineProperties(f,{domain:{enumerable:!0,
value:Q(o,a)},range:{enumerable:!0,value:Q(n,i)},invert:{enumerable:!0,
value:c}})}r(tt,"A");Y(tt,"initScale");var et=tt([0,360],[-Math.PI,Math.PI]),F=Object.freeze({bytes:8,
domain:et.domain,ident:"angle",input:r(t=>et.domain.allot(t*
Math.PI/180),"input"),output:r(t=>d(et.range.allot(t*180/Math.
PI),1),"output"),short:"phi",tcoord:"polar",tgeom:"azimuth"});var B=Object.freeze({$coord:F,bytes:4,description:"Hue angle\
 is a numerical representation of a color's hue, typically m\
easured as an angle in a color space.",domain:p(0,360),ident:"\
hue",input:r(t=>{let[e,o]=ne(t),a=o==="grad"?180/200:o==="ra\
d"?180/Math.PI:o==="turn"?360:1;return B.domain.allot(e*a)},
"input"),output:r(t=>Number.isNaN(t)?Number.NaN:Math.abs(t)<
.01?0:d(t,2),"output"),short:"h"});function ne(t){let e=NaN,o="deg";if(typeof t=="number")e=t;else{
let s=String.raw`deg|grad|rad|turn`,l=new RegExp(`^(-?[d.]+)\
(${s})?$`,"i");if(l.test(t)){let c=l.exec(t)?.slice(1)??["0",
"deg"];e=parseFloat(c[0]),o=c[1]}else if(t==="none")e=NaN;else
throw new TypeError("Expected a valid <angle> string")}let[a,
n]=o==="grad"?[0,400]:o==="deg"?[0,360]:o==="rad"?[-Math.PI,
Math.PI]:[0,1],i=p(a,n);return i.test(e)===!1&&(e=i.allot(e)),
[e,o]}r(ne,"parseCSSAngle");var O=Object.freeze({bytes:8,domain:p(0,1),ident:"applicate",
short:"z",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var z=Object.freeze({$coord:O,bytes:4,description:"Lightness\
 is a visual perception of the luminance of an object. In so\
me color ordering systems Lightness is referenced as value.",
domain:p(0,100),ident:"lightness",input:r(t=>t/100,"input"),
output:r(t=>d(t*100,2),"output"),short:"L"});var w=Object.freeze({bytes:8,domain:p(0,1),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var vt=Object.freeze({$coord:w,bytes:4,description:"Chroma: \
the quality of a color's purity, intensity or saturation.",domain:p(
0,100),ident:"saturation",input:r(t=>t/100,"input"),output:r(
t=>d(t*100,2),"output"),short:"S"});var mr=h(w,F)({adapt:{enumerable:!0,value:rt}});function rt(t=0,e=NaN){return[t*Math.cos(e),t*Math.sin(e)]}r(
rt,"calcCartesianCoordinates");var N=h(w,F,O)({adapt:{value:se}});function se(t,e,o){return[...rt(t,e),o]}r(se,"calcCubeCoordi\
nates");var P=Float64Array.of(.9504559270516716,1,1.0890577507598784);
Object.freeze(P.buffer);var Or={CAM:h(B,vt,z)(),CSYS:N,ident:"hsl",whitepoint:P};var St=Object.freeze({$coord:O,bytes:4,description:"Blacknes\
s is the property or quality of being black in colour.",domain:p(
0,100),ident:"blackness",input:r(t=>t/100,"input"),output:r(
t=>d(t*100,2),"output"),short:"B"});var xt=Object.freeze({$coord:w,bytes:4,description:"Whitenes\
s is determined by how much light a surface reflects across \
the visible spectrum.",domain:p(0,100),ident:"whiteness",input:r(
t=>t/100,"input"),output:r(t=>d(t*100,2),"output"),short:"W"});var kr={description:"HWB (Hue, Whiteness, Blackness) is a cy\
lindrical-coordinate representation of points in an RGB colo\
r model, similar to HSL and HSV.",CAM:h(B,xt,St)(),CSYS:N,ident:"\
hwb",whitepoint:P};var L=Object.freeze({bytes:8,domain:p(-1,1),ident:"abscissa",
short:"x",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var ot=Object.freeze({$coord:L,bytes:2,description:"Componen\
t defines how green (moving towards -125) or red (moving tow\
ards +125) the color is.",domain:p(-125,125),ident:"green-re\
d",input:r(t=>t/125,"input"),output:r(t=>d(t*125,1),"output"),
short:"a"}),Ct=Object.freeze({...ot,bytes:8,domain:p(-.4,.4),
input:r(t=>t,"input"),output:r(t=>d(t*.4,5),"output")});var E=Object.freeze({bytes:8,domain:p(-1,1),ident:"ordinate",
short:"y",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var at=Object.freeze({$coord:E,bytes:2,description:"Componen\
t defines how blue (moving towards -125) or yellow (moving t\
owards +125) the color is.",domain:p(-125,125),ident:"blue-y\
ellow",input:r(t=>t/125,"input"),output:r(t=>d(t*125,1),"out\
put"),short:"b"}),Mt=Object.freeze({...at,bytes:8,domain:p(-.4,
.4),input:r(t=>t,"input"),output:r(t=>d(t*.4,5),"output")});var mo=h(L,E)({adapt:{value:it}});function it(t,e){let o=0,a=NaN;return(t!==0||e!==0)&&(o=Math.
sqrt(t**2+e**2),t!==0&&!e||e!==0&&!t?a=e/Math.abs(e)*(Math.PI/
2):a=Math.atan(e/t)),[o,a]}r(it,"calcPolarCoordinates");var I=h(L,E,O)({adapt:{value:le}});function le(t,e,o){return[...it(t,e),o]}r(le,"calcCylindrica\
lCoordinates");var j=Float64Array.of(.9642956764295677,1,.8251046025104602);
Object.freeze(j.buffer);var wo=Object.freeze({CAM:h(z,ot,at)(),CSYS:I,description:"C\
IE 1976 L*a*b* or CIELAB. Cylindrical with the lightness val\
ue as the vertical axis of rotation.",ident:"lab",whitepoint:j});var _t=Object.freeze({$coord:w,ident:"chroma",short:"C",domain:p(
0,150),input:r(t=>t/150,"input"),output:r(t=>d(t*150,1),"out\
put"),bytes:2,description:"Chroma: the quality of a color's \
purity, intensity or saturation."}),At=Object.freeze({$coord:w,
ident:"chroma",short:"c",domain:p(0,.4),output:r(t=>d(t,5),"\
output"),bytes:4,description:"Chroma: the quality of a color\
's purity, intensity or saturation."});var $o={CAM:h(z,_t,B)(),CSYS:N,description:"CIE-based LCh co\
lor spaces are transformations of the two chroma values (ab \
or uv) into the polar coordinate.",ident:"lch",whitepoint:j};var Ko=Object.freeze({CAM:h(z,Ct,Mt)(),CSYS:I,ident:"oklab",
whitepoint:j});var ra={CAM:h(z,At,B)(),CSYS:N,ident:"oklch",whitepoint:j};var Ot=Object.freeze({$coord:O,bytes:4,domain:p(0,100),ident:"\
blue",input:r(t=>t/100,"input"),output:r(t=>d(t*100,2),"outp\
ut"),short:"b",description:"Blue Light Intensity"}),nt=Object.
freeze({$coord:O,bytes:1,domain:p(0,255),ident:"blue",input:r(
t=>t/255,"input"),output:r(t=>nt.domain.clamp(Math.round(t*255)),
"output"),short:"B",description:"Blue Light Intensity"});var wt=Object.freeze({$coord:E,bytes:4,domain:p(0,100),ident:"\
green",input:r(t=>t/100,"input"),output:r(t=>d(t*100,2),"out\
put"),short:"g",description:"Green Light Intensity"}),st=Object.
freeze({$coord:E,bytes:1,domain:p(0,255),ident:"green",input:r(
t=>t/255,"input"),output:r(t=>st.domain.clamp(Math.round(t*255)),
"output"),short:"G",description:"Green Light Intensity"});var Pt=Object.freeze({$coord:L,bytes:4,domain:p(0,100),ident:"\
green",input:r(t=>t/100,"input"),output:r(t=>d(t*100,2),"out\
put"),short:"r",description:"Red Light Intensity"}),lt=Object.
freeze({$coord:L,bytes:1,domain:p(0,255),ident:"red",input:r(
t=>t/255,"input"),output:r(t=>lt.domain.clamp(Math.round(t*255)),
"output"),short:"R",description:"Red Light Intensity"});var jt=Object.freeze({CAM:h(lt,st,nt)(),CSYS:I,ident:"rgb",whitepoint:P});var T=h(Pt,wt,Ot)(),q=I,k=P,H=Object.freeze({ident:"srgb",CAM:T,
CSYS:q,whitepoint:k,copyright:"Copyright 2007 International \
Color Consortium",description:"sRGB v4 ICC preference percep\
tual intent beta"}),zt=Object.freeze({ident:"srgb-linear",CAM:T,
CSYS:q,whitepoint:k}),W=Object.freeze({ident:"a98-rgb",CAM:T,
CSYS:q,whitepoint:k,description:"Adobe\xAE 1998 RGB"}),Ra=Object.
freeze({ident:"display-p3",CAM:T,CSYS:q,whitepoint:k,copyright:"\
Copyright Apple Inc., 2022",description:"Display P3"}),Ya=Object.
freeze({ident:"prophoto-rgb",CAM:T,CSYS:q,whitepoint:k,description:"\
ProPhoto RGB"}),Ba=Object.freeze({ident:"rec2020",CAM:T,CSYS:q,
whitepoint:k,description:"Rec. 2020 or BT.2020"});var It=I,mt=Object.freeze({ident:"xyz-d65",alias:"xyz",description:"\
XYZ D65 or simply XYZ",CSYS:It,whitepoint:P}),Da=Object.freeze(
{ident:"xyz-d50",CSYS:It,whitepoint:j});var me=Object.defineProperty,x=r((t,e)=>me(t,"name",{value:e,
configurable:!0}),"t"),pe=x(t=>t!==null&&typeof t=="object"&&
Array.isArray(t)===!1,"isObject"),Fa=x(t=>pe(t)&&Symbol.iterator in
t&&typeof t[Symbol.iterator]=="function"&&"length"in t&&typeof t.
length=="number"&&t.length>=9,"isMatrix");function D(...t){let e=Math.
max(t.length,9),o=new ArrayBuffer(e*8),a=new Float64Array(o,
0,e),n=Object.create(null,{[Symbol.iterator]:{value:x(function*(){
for(let i=0;i<a.length;i++)yield this[i]},"value")},[Symbol.
isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{value:x(
()=>"Matrix"+a.toString(),"value")},length:{enumerable:!0,value:e},
toArray:{value:x(()=>Iterator.from(a).toArray(),"value")},toString:{
value:a.toString}});for(let i=0;i<e;i++)(function(s,l,c){Object.
defineProperty(s,l,{enumerable:!0,get:x(()=>c[l],"get"),set:x(
f=>{if(typeof f=="number")c[l]=f;else throw new TypeError("E\
xpected Number")},"set")})})(n,i,a);return Object.defineProperties(
n,{clone:{value:x(()=>D(...a),"value")},each:{value:x(function(i){
return a.forEach((s,l,c)=>i(s,l,this)),this},"value")},determinant:{
value:x(()=>{let[i,s,l,c,f,m,g,b,y]=a,_=y*f-m*b,A=-y*c+m*g,S=b*
c-f*g;return i*_+s*A+l*S},"value")},invert:{value:x(function(){
let i=this.determinant();if(i===0)throw console.table(this),
new Error("A singular or non-square matrix matrix cannot be \
inverted.");let[s,l,c,f,m,g,b,y,_]=a,A=_*m-g*y,S=-_*f+g*b,Ut=y*
f-m*b;return this.update(A/i,(-_*l+c*y)/i,(g*l-c*m)/i,S/i,(_*
s-c*b)/i,(-g*s+c*f)/i,Ut/i,(-y*s+l*b)/i,(m*s-l*f)/i)},"value")},
update:{value:x(function(){return a.set(Iterator.from(arguments).
map(i=>typeof i=="number"?i:0).toArray()),this},"value")}}),
n.update(...t)}r(D,"D");x(D,"createMatrix");var ue=Object.defineProperty,u=r((t,e)=>ue(t,"name",{value:e,
configurable:!0}),"t"),ce=new Set(["a98-rgb","display-p3","h\
sl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec202\
0","rec2100-pq","rec2100-hlg","rec2100-linear","srgb-linear",
"srgb","rgb","xyz","xyz-d50","xyz-d65"]),fe=u(t=>be(t)&&ce.has(
t),"isSpaceID"),de=u(t=>U(t)&&"ident"in t&&fe(t.ident)&&"CSY\
S"in t&&U(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===3,"isC\
olorSpace"),K=u(t=>U(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function","isIterableObject"),he=u(t=>typeof t==
"number","isNumber"),U=u(t=>t!==null&&typeof t=="object"&&Array.
isArray(t)===!1,"isObject"),be=u(t=>typeof t=="string","isSt\
ring"),ge=u(t=>K(t)&&"space"in t&&de(t.space)&&"length"in t&&
t.length===3&&Iterator.from(t).every(e=>typeof e=="number"),
"isPointInSpace"),ye=u(t=>U(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function"&&"length"in t&&typeof t.length=="numbe\
r"&&t.length>=9,"isMatrix"),ve=u((t,e=6)=>{let o=10**e;return Math.
sign(t)*Math.round((Math.abs(t)+Number.EPSILON)*o)/o},"round"),
Se=u(t=>K(t)&&"length"in t&&t.length===3&&Iterator.from(t).every(
e=>typeof e=="number")&&"magnitude"in t&&he(t.magnitude)&&"b\
ase"in t&&K(t.base)&&"head"in t&&K(t.head),"isVector");function G(t,e=0,o=0){
let a=ge(t)?new Float64Array(t.buffer):Float64Array.of(t,e,o),
n=Object.create(null,{base:{get:u(()=>Iterator.from([0,0,0]),
"get")},head:{enumerable:!0,get:u(()=>Iterator.from(a),"get")},
magnitude:{enumerable:!0,get:u(()=>ve(Math.hypot(...a),9),"g\
et")},sqrMagnitude:{get:u(()=>a.reduce((i,s)=>i+s**2,0),"get")}});
return Object.defineProperties(n,{clone:{value:u(()=>G(a[0],
a[1],a[2]),"value")},angle:{value:Rt},cross:{value:Yt},distance:{
value:Bt},dot:{value:Lt},each:{value:Et},equals:{value:Gt},multiply:{
value:Dt},normalize:{value:$t},randomly:{value:Ft},strictEquals:{
value:Nt},update:{value:u(function(i,s,l){let c=Array.isArray(
i)?i.slice(3):Array.of(i,s,l);return a.set(this.head.map((f,m)=>c[m]??
f).toArray()),this},"value")},zeroize:{value:Tt}}),Object.defineProperties(
n,{toString:{value:u(()=>a.toString(),"value")},[Symbol.toStringTag]:{
get(){return`Vector[${this.toString()}]`}}}),Object.defineProperties(
n,{[Symbol.isConcatSpreadable]:{value:!0},[Symbol.iterator]:{
value:u(function*(){yield this[0],yield this[1],yield this[2]},
"value")},0:{enumerable:!0,get:u(()=>a[0],"get"),set:u(i=>{if(typeof i==
"number")a[0]=i;else throw new TypeError("Expected Number")},
"set")},1:{enumerable:!0,get:u(()=>a[1],"get"),set:u(i=>{if(typeof i==
"number")a[1]=i;else throw new TypeError("Expected Number")},
"set")},2:{enumerable:!0,get:u(()=>a[2],"get"),set:u(i=>{if(typeof i==
"number")a[2]=i;else throw new TypeError("Expected Number")},
"set")},length:{enumerable:!0,value:3}}),n}r(G,"P");u(G,"cre\
ateVector");function Rt(t,e=!1){let o=Math.sqrt(this.sqrMagnitude*
t.sqrMagnitude),a=o&&this.dot(t)/o,n=Math.acos(Math.min(Math.
max(a,-1),1));return e?n*180/Math.PI:n}r(Rt,"A");u(Rt,"angle");
function Yt(t){let[e,o,a]=this.head,[n,i,s]=t,l=o*s-a*i,c=a*
n-e*s,f=e*i-o*n;return this.update(l,c,f)}r(Yt,"D");u(Yt,"cr\
oss");function Bt(t){return Math.sqrt(this.head.reduce((e,o,a)=>e+
Math.pow(t[a]-o,2),0))}r(Bt,"O");u(Bt,"distance");function Lt(t){
let[e,o,a]=this.head,[n,i,s]=t;return e*n+o*i+a*s}r(Lt,"R");
u(Lt,"dot");function Et(t){for(let e=0;e<3;e++)t(this[e],e,this);
return this}r(Et,"j");u(Et,"each");function Gt(t,e=1e-5){let[
o,a,n]=this.head,[i,s,l]=t;return Math.abs(o-i)<=e*Math.max(
1,Math.abs(o),Math.abs(i))&&Math.abs(a-s)<=e*Math.max(1,Math.
abs(a),Math.abs(s))&&Math.abs(n-l)<=e*Math.max(1,Math.abs(n),
Math.abs(l))}r(Gt,"k");u(Gt,"equals");function Nt(t){let[e,o,
a]=this.head,[n,i,s]=t;return e===n&&o===i&&a===s}r(Nt,"C");
u(Nt,"strictEquals");function Dt(t){let[e,o,a]=this.head;if(ye(
t)||Se(t)){let[n,i,s,l=0,c=0,f=0,m=0,g=0,b=0]=t;return this.
update(e*n+o*l+a*m,e*i+o*c+a*g,e*s+o*f+a*b)}else throw new TypeError(
"Unsupported Multiplicator: "+t)}r(Dt,"T");u(Dt,"multiply");
function $t(){let t=1/this.magnitude;return this.each((e,o,a)=>a[o]=
e*t)}r($t,"z");u($t,"normalize");function Ft(t=1){let e=Math.
random()*2*Math.PI,o=Math.random()*2-1,a=Math.sqrt(1-Math.pow(
o,2))*t;return this.update(Math.cos(e)*a,Math.sin(e)*a,o*t)}
r(Ft,"E");u(Ft,"randomly");function Tt(){return this.update(
0,0,0)}r(Tt,"N");u(Tt,"zeroize");var xe=Object.defineProperty,C=r((t,e)=>xe(t,"name",{value:e,
configurable:!0}),"t"),Ce=new Set(["a98-rgb","display-p3","h\
sl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec202\
0","rec2100-pq","rec2100-hlg","rec2100-linear","srgb-linear",
"srgb","rgb","xyz","xyz-d50","xyz-d65"]),Me=C(t=>Oe(t)&&Ce.has(
t),"isSpaceID"),qt=C(t=>pt(t)&&"ident"in t&&Me(t.ident)&&"CS\
YS"in t&&pt(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===3,"i\
sColorSpace"),_e=C(t=>pt(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function","isIterableObject"),Ae=C(t=>typeof t==
"number","isNumber"),pt=C(t=>t!==null&&typeof t=="object"&&Array.
isArray(t)===!1,"isObject"),Oe=C(t=>typeof t=="string","isSt\
ring"),M=C(t=>_e(t)&&"space"in t&&qt(t.space)&&"length"in t&&
t.length===3&&Iterator.from(t).every(e=>typeof e=="number"),
"isPointInSpace");function v(t,e){if(qt(t)===!1)throw new TypeError(
"Point must be declared in a valid color space instead of "+
JSON.stringify(t,void 0,2));if((e instanceof ArrayBuffer||Array.
isArray(e)&&e.length===3&&e.every(s=>Ae(s)))===!1)throw new TypeError(
"Point in space has valid coordinates. Wrong parameters: "+JSON.
stringify(e,void 0,2));let o=t.CSYS.length,a=e instanceof ArrayBuffer?
new Float64Array(e):new Float64Array(o),n=t.CAM===void 0?Array.
of(0,1,2):t.CAM.toArray().map(s=>t.CSYS.toArray().findIndex(
l=>s.$coord===l)),i=Object.create(null,{buffer:{value:a.buffer},
colorspace:{enumerable:!0,value:t.ident},length:{value:o},space:{
value:t}});return Object.defineProperties(i,{equals:{value:C(
function(s,l=1e-5){let[c,f,m]=this.position,[g,b,y]=s.position;
return Math.abs(c-g)<=l*Math.max(1,Math.abs(c),Math.abs(g))&&
Math.abs(f-b)<=l*Math.max(1,Math.abs(f),Math.abs(b))&&Math.abs(
m-y)<=l*Math.max(1,Math.abs(m),Math.abs(y))},"value")},set:{
value:C(function(s){for(let l=0;l<this.length;l++)s[l]!==void 0&&
(this[l]=s[l]);return this},"value")}}),(function(s,l){Object.
defineProperties(s,{[Symbol.iterator]:{value:C(function*(){yield this[0],
yield this[1],yield this[2]},"value")},adapted:{get(){if(typeof this.
space.CSYS.adapt=="function"){let[c,f,m]=this.position;return Iterator.
from(this.space.CSYS.adapt(c,f,m))}else return this.position}},
position:{get:C(()=>Iterator.from(l),"get")}});for(let c=0;c<
s.length;c++)(function(f,m,g){Object.defineProperty(s,c,{enumerable:!0,
get(){let{CAM:b,CSYS:y}=this.space,_=y[m],A=b!==void 0?b[f]:
null,S=g[m];return"output"in _&&typeof _.output=="function"&&
(S=_.output(S)),A!==null&&"output"in A&&typeof A.output=="fu\
nction"&&(S=A.output(S)),S},set(b){let{CAM:y,CSYS:_}=this.space,
A=_[m],S=y!==void 0?y[f]:null;S!==null&&"input"in S&&typeof S.
input=="function"&&(b=S.input(b)),"input"in A&&typeof A.input==
"function"&&(b=A.input(b)),typeof b=="string"&&(b=parseFloat(
b)),g[m]=b}})})(c,n[c],l)})(i,a),Object.defineProperties(i,{
toString:{value:C(function(){return`${this.colorspace};[${this[0]}\
,${this[1]},${this[2]}]`},"value")},[Symbol.toStringTag]:{get(){
return`PointInSpace(${this.toString()})`}}}),Array.isArray(e)?
i.set(e):i}r(v,"E");C(v,"initPointInSpace");var X=r(t=>Math.sign(t)*Math.pow(Math.abs(t),256/563),"conve\
rtToGammaCorrected");var V=r(t=>{let e=Math.abs(t);return e<=.04045?t/12.92:Math.
sign(t)*Math.pow((e+.055)/1.055,2.4)},"convertToLinearLight");var Z=r((t,e,o)=>{let a=r(n=>{let i=n+6*t/Math.PI%12,s=e*Math.
min(o,1-o);return 100*d(o-s*Math.max(-1,Math.min(i-3,9-i,1)))},
"f");return Iterator.from([a(0),a(8),a(4)])},"rgb_from_hsl");var ut=D(1829569/896150,-851781/878810,16779/1248040,-506331/
896150,1648619/878810,-147721/1248040,-308931/896150,36519/878810,
1266979/1248040),ct=r(t=>{if(M(t)&&t.colorspace==="xyz-d65"){
let e=v(W,t.position.map(o=>o*100).toArray());return G(e).multiply(
ut).each((o,a,n)=>n[a]=X(o)),e}else throw new Error("Wrong p\
arameter passed: "+t)},"xyz_d65_into_a98_rgb");var fi=r(t=>{let e=v(W,Array.from(t)),o=D(608311/1250200,35783/
156275,0,189793/714400,247089/357200,32229/714400,198249/1000160,
198249/2500400,5220557/5000800);return G(e).each((a,n,i)=>i[n]=
V(a)).multiply(o).multiply(ut).each((a,n,i)=>i[n]=X(a)),e},"\
display_p3_into_a98_rgb");var Si=r(t=>{if(M(t)&&t.colorspace==="hsl"){let e=kt(t).position.
map(o=>Math.min(Math.max(Math.round(o*255),0),255)).toArray();
return v(jt,e)}else throw new Error("Wrong parameter passed:\
 "+t)},"hsl_into_rgb"),kt=r(t=>{if(M(t)&&t.colorspace==="hsl"){
let[e,o,a]=t.position;return v(H,Z(o,e,a).toArray())}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_srgb"),Wt=r(t=>{let e=kt(
t);return v(zt,e.position.map(o=>100*V(o)).toArray())},"hsl_\
into_srgb_linear");var Vt=D(506752/1228815,87098/409605,7918/409605,87881/245763,
175762/245763,87881/737289,12673/70218,12673/175545,1001167/
1053270),ft=r(t=>{if(M(t)&&["rgb","srgb"].includes(t.colorspace)){
let e=v(mt,t.position.toArray());return G(e).each((o,a,n)=>n[a]=
V(o)).multiply(Vt),e}else throw new Error("Wrong parameter p\
assed: "+t)},"srgb_into_xyz_d65"),dt=r(t=>{if(M(t)&&t.colorspace===
"srgb-linear"){let e=v(mt,t.position.toArray());return G(e).
multiply(Vt),e}else throw new Error("Wrong parameter passed:\
 "+t)},"srgb_linear_into_xyz_d65"),Pi=r(t=>ft(t),"srgb_into_\
xyz_d50"),ji=r(t=>dt(t),"srgb_linear_into_xyz_d50");var Ht=r(t=>{if(M(t)&&["rgb","srgb"].includes(t.colorspace))
return ct(ft(t));throw new Error("Wrong parameter passed: "+
t)},"srgb_into_a98_rgb"),Kt=r(t=>{if(M(t)&&t.colorspace==="s\
rgb-linear")return ct(dt(t));throw new Error("Wrong paramete\
r passed: "+t)},"srgb_linear_into_a98_rgb");var Di=r(t=>Kt(Wt(t)),"hsl_into_a98_rgb");var Vi=r(t=>{if(M(t)&&t.colorspace==="hwb"){let[e,o,a]=t.position;
if(e+a>=1){let n=e/(e+a);return v(W,[n,n,n])}else return Ht(
v(H,Z(o,1,.5).map(n=>n*(1-e-a)+e).toArray()))}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_a98_rgb");export{W as A98RGBSpace,Ra as DisplayP3Space,Or as HSL,kr as HWB,
wo as LABModel,$o as LCh,Ko as OKLAB,ra as OKLCh,Ya as ProphotoRGBSpace,
jt as RGBModel,Ba as Rec2020Space,Da as XYZD50,Da as XYZD50Space,
mt as XYZD65,mt as XYZD65Space,fi as display_p3_into_a98_rgb,
Di as hsl_into_a98_rgb,Si as hsl_into_rgb,kt as hsl_into_srgb,
Wt as hsl_into_srgb_linear,Vi as hwb_into_a98_rgb,Ht as rgb_into_a98_rgb,
ft as rgb_into_xyz,ft as rgb_into_xyz_d65,zt as sRGBLinearSpace,
H as sRGBSpace,Ht as srgb_into_a98_rgb,ft as srgb_into_xyz,Pi as srgb_into_xyz_d50,
ft as srgb_into_xyz_d65,Kt as srgb_linear_into_a98_rgb,dt as srgb_linear_into_xyz,
ji as srgb_linear_into_xyz_d50,dt as srgb_linear_into_xyz_d65,
ut as trans_xyz_d65_to_linear_a98,ct as xyz_d65_into_a98_rgb,
ct as xyz_into_a98_rgb};
