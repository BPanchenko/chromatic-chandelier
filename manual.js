var Qt=Object.defineProperty;var r=(t,e)=>Qt(t,"name",{value:e,configurable:!0});var te=Object.defineProperty,F=r((t,e)=>te(t,"name",{value:e,
configurable:!0}),"n"),ee=F(t=>t!==null&&typeof t=="object"&&
Array.isArray(t)===!1,"isObject"),re=F(t=>ee(t)&&"ident"in t&&
"short"in t&&"domain"in t,"isSpaceDimension");function b(t,e,a){
let o=Iterator.from(a===void 0?[t,e]:[t,e,a]),n=a===void 0?2:
3;for(let l of o.take(n))if(re(l)===!1)throw new TypeError("\
Passed wrong space dimension: "+JSON.stringify(l,void 0,2));
let i=o.take(n).filter(l=>l.tgeom==="azimuth"||l.tgeom==="re\
ference-ray").toArray().length===2?n===3?"cilinder":"circle":
n===3?"cube":"plane",s=Object.create(null,{0:{enumerable:!0,
value:t},1:{enumerable:!0,value:e},length:{enumerable:!0,value:n},
tgeom:{enumerable:!0,value:i},entries:{value:F(function*(){yield[
0,this[0]],yield[1,this[1]],this.length===3&&(yield[2,this[2]])},
"value")},toArray:{value:F(function(){return Array.of(...this)},
"value")},[Symbol.iterator]:{value:F(function*(){yield this[0],
yield this[1],this.length===3&&(yield this[2])},"value")}});
return n===3&&Object.defineProperty(s,2,{enumerable:!0,value:a}),
l=>l===void 0?s:Object.defineProperties(s,l)}r(b,"O");F(b,"c\
reateCoordinateSystem");var oe=Object.defineProperty,B=r((t,e)=>oe(t,"name",{value:e,
configurable:!0}),"n"),tt=B(t=>typeof t=="number","isNumber"),
ae=B(t=>t!==null&&typeof t=="object"&&Array.isArray(t)===!1,
"isObject"),Ee=B(t=>ae(t)&&Symbol.iterator in t&&"minimum"in
t&&tt(t.minimum)&&"maximum"in t&&tt(t.maximum)&&"value"in t&&
tt(t.value)&&t.value>0,"isRange");function m(...t){let e=t.length===
1?Array.of(0,t[0]):Array.of(Math.min(...t),Math.max(...t)),[
a,o]=e,n=o-a,i=a+n/2;return Object.create(null,{from:{value:a},
to:{value:o},minimum:{enumerable:!0,value:a},maximum:{enumerable:!0,
value:o},avg:{enumerable:!0,value:i},value:{enumerable:!0,value:n},
allot:{value:ht},clamp:{value:bt},test:{value:B(s=>a<=s&&s<=
o,"value")},toString:{value:B(()=>String.raw`{x ∈ R; ${a} ⋜ x ⋜ ${o}}`,
"value")},[Symbol.iterator]:{value:B(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}r(m,"v");B(
m,"createRange");function ht(t){return this.test(t)?t:t>this.
from?(t-this.to)%this.value+this.from:this.to-(this.from-t)%
this.value}r(ht,"p");B(ht,"allocateOuterValue");function bt(t){
return this.test(t)?t:Math.max(Math.min(t,this.to),this.from)}
r(bt,"h");B(bt,"restrictOuterValue");var ie=Object.defineProperty,ne=r((t,e)=>ie(t,"name",{value:e,
configurable:!0}),"n");var se=ne((t,e=6)=>{let a=10**e;return Math.sign(t)*Math.round(
(Math.abs(t)+Number.EPSILON)*a)/a},"round"),d=se;var le=Object.defineProperty,L=r((t,e)=>le(t,"name",{value:e,
configurable:!0}),"r");function et(...t){let e=t.length===1?
Array.of(0,t[0]):Array.of(Math.min(...t),Math.max(...t)),[a,
o]=e,n=o-a,i=a+n/2;return Object.create(null,{from:{value:a},
to:{value:o},minimum:{enumerable:!0,value:a},maximum:{enumerable:!0,
value:o},avg:{enumerable:!0,value:i},value:{enumerable:!0,value:n},
allot:{value:gt},clamp:{value:yt},test:{value:L(s=>a<=s&&s<=
o,"value")},toString:{value:L(()=>String.raw`{x ∈ R; ${a} ⋜ x ⋜ ${o}}`,
"value")},[Symbol.iterator]:{value:L(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}r(et,"l");L(
et,"createRange");function gt(t){return this.test(t)?t:t>this.
from?(t-this.to)%this.value+this.from:this.to-(this.from-t)%
this.value}r(gt,"f");L(gt,"allocateOuterValue");function yt(t){
return this.test(t)?t:Math.max(Math.min(t,this.to),this.from)}
r(yt,"S");L(yt,"restrictOuterValue");function rt(t=[0,100],e=[
0,1]){let[a,o]=e,[n,i]=t,[s,l]=[o-a,i-n];function c(p){return typeof p==
"string"&&(p=parseFloat(p)),f.domain.test(p)===!1&&(p=p>o?(p-
o)%s+a:o-(a-p)%s),l*(p-a)/s+n}r(c,"p"),L(c,"invert");function f(p){
return typeof p=="string"&&(p=parseFloat(p)),f.range.test(p)===
!1&&(p=p>i?(p-i)%l+n:i-(n-p)%l),s*(p-n)/l+a}return r(f,"c"),
L(f,"calculator"),Object.defineProperties(f,{domain:{enumerable:!0,
value:et(a,o)},range:{enumerable:!0,value:et(n,i)},invert:{enumerable:!0,
value:c}})}r(rt,"A");L(rt,"initScale");var ot=rt([0,360],[-Math.PI,Math.PI]),T=Object.freeze({bytes:8,
domain:ot.domain,ident:"angle",input:r(t=>ot.domain.allot(t*
Math.PI/180),"input"),output:r(t=>d(ot.range.allot(t*180/Math.
PI),1),"output"),short:"phi",tcoord:"polar",tgeom:"azimuth"});var E=Object.freeze({$coord:T,bytes:4,description:"Hue angle\
 is a numerical representation of a color's hue, typically m\
easured as an angle in a color space.",domain:m(0,360),ident:"\
hue",input:r(t=>{let[e,a]=pe(t),o=a==="grad"?180/200:a==="ra\
d"?180/Math.PI:a==="turn"?360:1;return E.domain.allot(e*o)},
"input"),output:r(t=>Number.isNaN(t)?Number.NaN:Math.abs(t)<
.01?0:d(t,2),"output"),short:"h"});function pe(t){let e=NaN,a="deg";if(typeof t=="number")e=t;else{
let s=String.raw`deg|grad|rad|turn`,l=new RegExp(`^(-?[d.]+)\
(${s})?$`,"i");if(l.test(t)){let c=l.exec(t)?.slice(1)??["0",
"deg"];e=parseFloat(c[0]),a=c[1]}else if(t==="none")e=NaN;else
throw new TypeError("Expected a valid <angle> string")}let[o,
n]=a==="grad"?[0,400]:a==="deg"?[0,360]:a==="rad"?[-Math.PI,
Math.PI]:[0,1],i=m(o,n);return i.test(e)===!1&&(e=i.allot(e)),
[e,a]}r(pe,"parseCSSAngle");var z=Object.freeze({bytes:8,domain:m(0,1),ident:"applicate",
short:"z",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var R=Object.freeze({$coord:z,bytes:4,description:"Lightness\
 is a visual perception of the luminance of an object. In so\
me color ordering systems Lightness is referenced as value.",
domain:m(0,100),ident:"lightness",input:r(t=>t/100,"input"),
output:r(t=>d(t*100,2),"output"),short:"L"});var j=Object.freeze({bytes:8,domain:m(0,1),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var St=Object.freeze({$coord:j,bytes:4,description:"Chroma: \
the quality of a color's purity, intensity or saturation.",domain:m(
0,100),ident:"saturation",input:r(t=>t/100,"input"),output:r(
t=>d(t*100,2),"output"),short:"S"});var hr=b(j,T)({adapt:{enumerable:!0,value:at}});function at(t=0,e=NaN){return[t*Math.cos(e),t*Math.sin(e)]}r(
at,"calcCartesianCoordinates");var N=b(j,T,z)({adapt:{value:me}});function me(t,e,a){return[...at(t,e),a]}r(me,"calcCubeCoordi\
nates");var I=Float64Array.of(.9504559270516716,1,1.0890577507598784);
Object.freeze(I.buffer);var Rr={CAM:b(E,St,R)(),CSYS:N,ident:"hsl",whitepoint:I};var vt=Object.freeze({$coord:z,bytes:4,description:"Blacknes\
s is the property or quality of being black in colour.",domain:m(
0,100),ident:"blackness",input:r(t=>t/100,"input"),output:r(
t=>d(t*100,2),"output"),short:"B"});var xt=Object.freeze({$coord:j,bytes:4,description:"Whitenes\
s is determined by how much light a surface reflects across \
the visible spectrum.",domain:m(0,100),ident:"whiteness",input:r(
t=>t/100,"input"),output:r(t=>d(t*100,2),"output"),short:"W"});var Zr={description:"HWB (Hue, Whiteness, Blackness) is a cy\
lindrical-coordinate representation of points in an RGB colo\
r model, similar to HSL and HSV.",CAM:b(E,xt,vt)(),CSYS:N,ident:"\
hwb",whitepoint:I};var D=Object.freeze({bytes:8,domain:m(-1,1),ident:"abscissa",
short:"x",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var it=Object.freeze({$coord:D,bytes:2,description:"Componen\
t defines how green (moving towards -125) or red (moving tow\
ards +125) the color is.",domain:m(-125,125),ident:"green-re\
d",input:r(t=>t/125,"input"),output:r(t=>d(t*125,1),"output"),
short:"a"}),_t=Object.freeze({...it,bytes:8,domain:m(-.4,.4),
input:r(t=>t,"input"),output:r(t=>d(t*.4,5),"output")});var G=Object.freeze({bytes:8,domain:m(-1,1),ident:"ordinate",
short:"y",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var nt=Object.freeze({$coord:G,bytes:2,description:"Componen\
t defines how blue (moving towards -125) or yellow (moving t\
owards +125) the color is.",domain:m(-125,125),ident:"blue-y\
ellow",input:r(t=>t/125,"input"),output:r(t=>d(t*125,1),"out\
put"),short:"b"}),Ct=Object.freeze({...nt,bytes:8,domain:m(-.4,
.4),input:r(t=>t,"input"),output:r(t=>d(t*.4,5),"output")});var bo=b(D,G)({adapt:{value:st}});function st(t,e){let a=0,o=NaN;return(t!==0||e!==0)&&(a=Math.
sqrt(t**2+e**2),t!==0&&!e||e!==0&&!t?o=e/Math.abs(e)*(Math.PI/
2):o=Math.atan(e/t)),[a,o]}r(st,"calcPolarCoordinates");var Y=b(D,G,z)({adapt:{value:ce}});function ce(t,e,a){return[...st(t,e),a]}r(ce,"calcCylindrica\
lCoordinates");var x=Float64Array.of(.9642956764295677,1,.8251046025104602);
Object.freeze(x.buffer);var Yo=Object.freeze({CAM:b(R,it,nt)(),CSYS:Y,description:"C\
IE 1976 L*a*b* or CIELAB. Cylindrical with the lightness val\
ue as the vertical axis of rotation.",ident:"lab",whitepoint:x});var Mt=Object.freeze({$coord:j,ident:"chroma",short:"C",domain:m(
0,150),input:r(t=>t/150,"input"),output:r(t=>d(t*150,1),"out\
put"),bytes:2,description:"Chroma: the quality of a color's \
purity, intensity or saturation."}),wt=Object.freeze({$coord:j,
ident:"chroma",short:"c",domain:m(0,.4),output:r(t=>d(t,5),"\
output"),bytes:4,description:"Chroma: the quality of a color\
's purity, intensity or saturation."});var Vo={CAM:b(R,Mt,E)(),CSYS:N,description:"CIE-based LCh co\
lor spaces are transformations of the two chroma values (ab \
or uv) into the polar coordinate.",ident:"lch",whitepoint:x};var ta=Object.freeze({CAM:b(R,_t,Ct)(),CSYS:Y,ident:"oklab",
whitepoint:x});var la={CAM:b(R,wt,E)(),CSYS:N,ident:"oklch",whitepoint:x};var At=Object.freeze({$coord:z,bytes:4,domain:m(0,100),ident:"\
blue",input:r(t=>t/100,"input"),output:r(t=>d(t*100,2),"outp\
ut"),short:"b",description:"Blue Light Intensity"}),lt=Object.
freeze({$coord:z,bytes:1,domain:m(0,255),ident:"blue",input:r(
t=>t/255,"input"),output:r(t=>lt.domain.clamp(Math.round(t*255)),
"output"),short:"B",description:"Blue Light Intensity"});var Ot=Object.freeze({$coord:G,bytes:4,domain:m(0,100),ident:"\
green",input:r(t=>t/100,"input"),output:r(t=>d(t*100,2),"out\
put"),short:"g",description:"Green Light Intensity"}),pt=Object.
freeze({$coord:G,bytes:1,domain:m(0,255),ident:"green",input:r(
t=>t/255,"input"),output:r(t=>pt.domain.clamp(Math.round(t*255)),
"output"),short:"G",description:"Green Light Intensity"});var Pt=Object.freeze({$coord:D,bytes:4,domain:m(0,100),ident:"\
green",input:r(t=>t/100,"input"),output:r(t=>d(t*100,2),"out\
put"),short:"r",description:"Red Light Intensity"}),mt=Object.
freeze({$coord:D,bytes:1,domain:m(0,255),ident:"red",input:r(
t=>t/255,"input"),output:r(t=>mt.domain.clamp(Math.round(t*255)),
"output"),short:"R",description:"Red Light Intensity"});var zt=Object.freeze({CAM:b(mt,pt,lt)(),CSYS:Y,ident:"rgb",whitepoint:I});var q=b(Pt,Ot,At)(),k=Y,W=I,X=Object.freeze({ident:"srgb",CAM:q,
CSYS:k,whitepoint:W,copyright:"Copyright 2007 International \
Color Consortium",description:"sRGB v4 ICC preference percep\
tual intent beta"}),jt=Object.freeze({ident:"srgb-linear",CAM:q,
CSYS:k,whitepoint:W}),V=Object.freeze({ident:"a98-rgb",CAM:q,
CSYS:k,whitepoint:W,description:"Adobe\xAE 1998 RGB"}),Ga=Object.
freeze({ident:"display-p3",CAM:q,CSYS:k,whitepoint:W,copyright:"\
Copyright Apple Inc., 2022",description:"Display P3"}),Na=Object.
freeze({ident:"prophoto-rgb",CAM:q,CSYS:k,whitepoint:W,description:"\
ProPhoto RGB"}),$a=Object.freeze({ident:"rec2020",CAM:q,CSYS:k,
whitepoint:W,description:"Rec. 2020 or BT.2020"});var It=Y,$=Object.freeze({ident:"xyz-d65",alias:"xyz",description:"\
XYZ D65 or simply XYZ",CSYS:It,whitepoint:I}),Rt=Object.freeze(
{ident:"xyz-d50",CSYS:It,whitepoint:x});var ue=Object.defineProperty,C=r((t,e)=>ue(t,"name",{value:e,
configurable:!0}),"t"),fe=C(t=>t!==null&&typeof t=="object"&&
Array.isArray(t)===!1,"isObject"),Va=C(t=>fe(t)&&Symbol.iterator in
t&&typeof t[Symbol.iterator]=="function"&&"length"in t&&typeof t.
length=="number"&&t.length>=9,"isMatrix");function M(...t){let e=Math.
max(t.length,9),a=new ArrayBuffer(e*8),o=new Float64Array(a,
0,e),n=Object.create(null,{[Symbol.iterator]:{value:C(function*(){
for(let i=0;i<o.length;i++)yield this[i]},"value")},[Symbol.
isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{value:C(
()=>"Matrix"+o.toString(),"value")},length:{enumerable:!0,value:e},
toArray:{value:C(()=>Iterator.from(o).toArray(),"value")},toString:{
value:o.toString}});for(let i=0;i<e;i++)(function(s,l,c){Object.
defineProperty(s,l,{enumerable:!0,get:C(()=>c[l],"get"),set:C(
f=>{if(typeof f=="number")c[l]=f;else throw new TypeError("E\
xpected Number")},"set")})})(n,i,o);return Object.defineProperties(
n,{clone:{value:C(()=>M(...o),"value")},each:{value:C(function(i){
return o.forEach((s,l,c)=>i(s,l,this)),this},"value")},determinant:{
value:C(()=>{let[i,s,l,c,f,p,S,h,v]=o,O=v*f-p*h,P=-v*c+p*S,_=h*
c-f*S;return i*O+s*P+l*_},"value")},invert:{value:C(function(){
let i=this.determinant();if(i===0)throw console.table(this),
new Error("A singular or non-square matrix matrix cannot be \
inverted.");let[s,l,c,f,p,S,h,v,O]=o,P=O*p-S*v,_=-O*f+S*h,Jt=v*
f-p*h;return this.update(P/i,(-O*l+c*v)/i,(S*l-c*p)/i,_/i,(O*
s-c*h)/i,(-S*s+c*f)/i,Jt/i,(-v*s+l*h)/i,(p*s-l*f)/i)},"value")},
update:{value:C(function(){return o.set(Iterator.from(arguments).
map(i=>typeof i=="number"?i:0).toArray()),this},"value")}}),
n.update(...t)}r(M,"D");C(M,"createMatrix");var de=Object.defineProperty,u=r((t,e)=>de(t,"name",{value:e,
configurable:!0}),"t"),he=new Set(["a98-rgb","display-p3","h\
sl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec202\
0","rec2100-pq","rec2100-hlg","rec2100-linear","srgb-linear",
"srgb","rgb","xyz","xyz-d50","xyz-d65"]),be=u(t=>Se(t)&&he.has(
t),"isSpaceID"),ge=u(t=>U(t)&&"ident"in t&&be(t.ident)&&"CSY\
S"in t&&U(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===3,"isC\
olorSpace"),Z=u(t=>U(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function","isIterableObject"),ye=u(t=>typeof t==
"number","isNumber"),U=u(t=>t!==null&&typeof t=="object"&&Array.
isArray(t)===!1,"isObject"),Se=u(t=>typeof t=="string","isSt\
ring"),ve=u(t=>Z(t)&&"space"in t&&ge(t.space)&&"length"in t&&
t.length===3&&Iterator.from(t).every(e=>typeof e=="number"),
"isPointInSpace"),xe=u(t=>U(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function"&&"length"in t&&typeof t.length=="numbe\
r"&&t.length>=9,"isMatrix"),_e=u((t,e=6)=>{let a=10**e;return Math.
sign(t)*Math.round((Math.abs(t)+Number.EPSILON)*a)/a},"round"),
Ce=u(t=>Z(t)&&"length"in t&&t.length===3&&Iterator.from(t).every(
e=>typeof e=="number")&&"magnitude"in t&&ye(t.magnitude)&&"b\
ase"in t&&Z(t.base)&&"head"in t&&Z(t.head),"isVector");function w(t,e=0,a=0){
let o=ve(t)?new Float64Array(t.buffer):Float64Array.of(t,e,a),
n=Object.create(null,{base:{get:u(()=>Iterator.from([0,0,0]),
"get")},head:{enumerable:!0,get:u(()=>Iterator.from(o),"get")},
magnitude:{enumerable:!0,get:u(()=>_e(Math.hypot(...o),9),"g\
et")},sqrMagnitude:{get:u(()=>o.reduce((i,s)=>i+s**2,0),"get")}});
return Object.defineProperties(n,{clone:{value:u(()=>w(o[0],
o[1],o[2]),"value")},angle:{value:Yt},cross:{value:Bt},distance:{
value:Lt},dot:{value:Et},each:{value:Dt},equals:{value:Gt},multiply:{
value:$t},normalize:{value:Ft},randomly:{value:Tt},strictEquals:{
value:Nt},update:{value:u(function(i,s,l){let c=Array.isArray(
i)?i.slice(3):Array.of(i,s,l);return o.set(this.head.map((f,p)=>c[p]??
f).toArray()),this},"value")},zeroize:{value:qt}}),Object.defineProperties(
n,{toString:{value:u(()=>o.toString(),"value")},[Symbol.toStringTag]:{
get(){return`Vector[${this.toString()}]`}}}),Object.defineProperties(
n,{[Symbol.isConcatSpreadable]:{value:!0},[Symbol.iterator]:{
value:u(function*(){yield this[0],yield this[1],yield this[2]},
"value")},0:{enumerable:!0,get:u(()=>o[0],"get"),set:u(i=>{if(typeof i==
"number")o[0]=i;else throw new TypeError("Expected Number")},
"set")},1:{enumerable:!0,get:u(()=>o[1],"get"),set:u(i=>{if(typeof i==
"number")o[1]=i;else throw new TypeError("Expected Number")},
"set")},2:{enumerable:!0,get:u(()=>o[2],"get"),set:u(i=>{if(typeof i==
"number")o[2]=i;else throw new TypeError("Expected Number")},
"set")},length:{enumerable:!0,value:3}}),n}r(w,"P");u(w,"cre\
ateVector");function Yt(t,e=!1){let a=Math.sqrt(this.sqrMagnitude*
t.sqrMagnitude),o=a&&this.dot(t)/a,n=Math.acos(Math.min(Math.
max(o,-1),1));return e?n*180/Math.PI:n}r(Yt,"A");u(Yt,"angle");
function Bt(t){let[e,a,o]=this.head,[n,i,s]=t,l=a*s-o*i,c=o*
n-e*s,f=e*i-a*n;return this.update(l,c,f)}r(Bt,"D");u(Bt,"cr\
oss");function Lt(t){return Math.sqrt(this.head.reduce((e,a,o)=>e+
Math.pow(t[o]-a,2),0))}r(Lt,"O");u(Lt,"distance");function Et(t){
let[e,a,o]=this.head,[n,i,s]=t;return e*n+a*i+o*s}r(Et,"R");
u(Et,"dot");function Dt(t){for(let e=0;e<3;e++)t(this[e],e,this);
return this}r(Dt,"j");u(Dt,"each");function Gt(t,e=1e-5){let[
a,o,n]=this.head,[i,s,l]=t;return Math.abs(a-i)<=e*Math.max(
1,Math.abs(a),Math.abs(i))&&Math.abs(o-s)<=e*Math.max(1,Math.
abs(o),Math.abs(s))&&Math.abs(n-l)<=e*Math.max(1,Math.abs(n),
Math.abs(l))}r(Gt,"k");u(Gt,"equals");function Nt(t){let[e,a,
o]=this.head,[n,i,s]=t;return e===n&&a===i&&o===s}r(Nt,"C");
u(Nt,"strictEquals");function $t(t){let[e,a,o]=this.head;if(xe(
t)||Ce(t)){let[n,i,s,l=0,c=0,f=0,p=0,S=0,h=0]=t;return this.
update(e*n+a*l+o*p,e*i+a*c+o*S,e*s+a*f+o*h)}else throw new TypeError(
"Unsupported Multiplicator: "+t)}r($t,"T");u($t,"multiply");
function Ft(){let t=1/this.magnitude;return this.each((e,a,o)=>o[a]=
e*t)}r(Ft,"z");u(Ft,"normalize");function Tt(t=1){let e=Math.
random()*2*Math.PI,a=Math.random()*2-1,o=Math.sqrt(1-Math.pow(
a,2))*t;return this.update(Math.cos(e)*o,Math.sin(e)*o,a*t)}
r(Tt,"E");u(Tt,"randomly");function qt(){return this.update(
0,0,0)}r(qt,"N");u(qt,"zeroize");var Me=Object.defineProperty,A=r((t,e)=>Me(t,"name",{value:e,
configurable:!0}),"t"),we=new Set(["a98-rgb","display-p3","h\
sl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec202\
0","rec2100-pq","rec2100-hlg","rec2100-linear","srgb-linear",
"srgb","rgb","xyz","xyz-d50","xyz-d65"]),Ae=A(t=>ze(t)&&we.has(
t),"isSpaceID"),kt=A(t=>ct(t)&&"ident"in t&&Ae(t.ident)&&"CS\
YS"in t&&ct(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===3,"i\
sColorSpace"),Oe=A(t=>ct(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function","isIterableObject"),Pe=A(t=>typeof t==
"number","isNumber"),ct=A(t=>t!==null&&typeof t=="object"&&Array.
isArray(t)===!1,"isObject"),ze=A(t=>typeof t=="string","isSt\
ring"),g=A(t=>Oe(t)&&"space"in t&&kt(t.space)&&"length"in t&&
t.length===3&&Iterator.from(t).every(e=>typeof e=="number"),
"isPointInSpace");function y(t,e){if(kt(t)===!1)throw new TypeError(
"Point must be declared in a valid color space instead of "+
JSON.stringify(t,void 0,2));if((e instanceof ArrayBuffer||Array.
isArray(e)&&e.length===3&&e.every(s=>Pe(s)))===!1)throw new TypeError(
"Point in space has valid coordinates. Wrong parameters: "+JSON.
stringify(e,void 0,2));let a=t.CSYS.length,o=e instanceof ArrayBuffer?
new Float64Array(e):new Float64Array(a),n=t.CAM===void 0?Array.
of(0,1,2):t.CAM.toArray().map(s=>t.CSYS.toArray().findIndex(
l=>s.$coord===l)),i=Object.create(null,{buffer:{value:o.buffer},
colorspace:{enumerable:!0,value:t.ident},length:{value:a},space:{
value:t}});return Object.defineProperties(i,{equals:{value:A(
function(s,l=1e-5){let[c,f,p]=this.position,[S,h,v]=s.position;
return Math.abs(c-S)<=l*Math.max(1,Math.abs(c),Math.abs(S))&&
Math.abs(f-h)<=l*Math.max(1,Math.abs(f),Math.abs(h))&&Math.abs(
p-v)<=l*Math.max(1,Math.abs(p),Math.abs(v))},"value")},set:{
value:A(function(s){for(let l=0;l<this.length;l++)s[l]!==void 0&&
(this[l]=s[l]);return this},"value")}}),(function(s,l){Object.
defineProperties(s,{[Symbol.iterator]:{value:A(function*(){yield this[0],
yield this[1],yield this[2]},"value")},adapted:{get(){if(typeof this.
space.CSYS.adapt=="function"){let[c,f,p]=this.position;return Iterator.
from(this.space.CSYS.adapt(c,f,p))}else return this.position}},
position:{get:A(()=>Iterator.from(l),"get")}});for(let c=0;c<
s.length;c++)(function(f,p,S){Object.defineProperty(s,c,{enumerable:!0,
get(){let{CAM:h,CSYS:v}=this.space,O=v[p],P=h!==void 0?h[f]:
null,_=S[p];return"output"in O&&typeof O.output=="function"&&
(_=O.output(_)),P!==null&&"output"in P&&typeof P.output=="fu\
nction"&&(_=P.output(_)),_},set(h){let{CAM:v,CSYS:O}=this.space,
P=O[p],_=v!==void 0?v[f]:null;_!==null&&"input"in _&&typeof _.
input=="function"&&(h=_.input(h)),"input"in P&&typeof P.input==
"function"&&(h=P.input(h)),typeof h=="string"&&(h=parseFloat(
h)),S[p]=h}})})(c,n[c],l)})(i,o),Object.defineProperties(i,{
toString:{value:A(function(){return`${this.colorspace};[${this[0]}\
,${this[1]},${this[2]}]`},"value")},[Symbol.toStringTag]:{get(){
return`PointInSpace(${this.toString()})`}}}),Array.isArray(e)?
i.set(e):i}r(y,"E");A(y,"initPointInSpace");var J=r(t=>Math.sign(t)*Math.pow(Math.abs(t),256/563),"conve\
rtToGammaCorrected");var H=r(t=>{let e=Math.abs(t);return e<=.04045?t/12.92:Math.
sign(t)*Math.pow((e+.055)/1.055,2.4)},"convertToLinearLight");var Q=r((t,e,a)=>{let o=r(n=>{let i=n+6*t/Math.PI%12,s=e*Math.
min(a,1-a);return 100*d(a-s*Math.max(-1,Math.min(i-3,9-i,1)))},
"f");return Iterator.from([o(0),o(8),o(4)])},"rgb_from_hsl");var ut=M(1829569/896150,-851781/878810,16779/1248040,-506331/
896150,1648619/878810,-147721/1248040,-308931/896150,36519/878810,
1266979/1248040),K=r(t=>{if(g(t)&&t.colorspace==="xyz-d65"){
let e=y(V,t.position.map(a=>a*100).toArray());return w(e).multiply(
ut).each((a,o,n)=>n[o]=J(a)),e}else throw new Error("Wrong p\
arameter passed: "+t)},"xyz_d65_into_a98_rgb");var yi=r(t=>{if(g(t)&&t.colorspace==="display-p3"){let e=y(V,
Array.from(t)),a=M(608311/1250200,35783/156275,0,189793/714400,
247089/357200,32229/714400,198249/1000160,198249/2500400,5220557/
5000800);return w(e).each((o,n,i)=>i[n]=H(o)).multiply(a).multiply(
ut).each((o,n,i)=>i[n]=J(o)),e}else throw new Error("Wrong p\
arameter passed: "+t)},"display_p3_into_a98_rgb");var wi=r(t=>{if(g(t)&&t.colorspace==="hsl"){let e=Wt(t).position.
map(a=>Math.min(Math.max(Math.round(a*255),0),255)).toArray();
return y(zt,e)}else throw new Error("Wrong parameter passed:\
 "+t)},"hsl_into_rgb"),Wt=r(t=>{if(g(t)&&t.colorspace==="hsl"){
let[e,a,o]=t.position;return y(X,Q(a,e,o).toArray())}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_srgb"),Vt=r(t=>{let e=Wt(
t);return y(jt,e.position.map(a=>100*H(a)).toArray())},"hsl_\
into_srgb_linear");var Ht=M(506752/1228815,87098/409605,7918/409605,87881/245763,
175762/245763,87881/737289,12673/70218,12673/175545,1001167/
1053270),ft=r(t=>{if(g(t)&&["rgb","srgb"].includes(t.colorspace)){
let e=y($,t.position.toArray());return w(e).each((a,o,n)=>n[o]=
H(a)).multiply(Ht),e}else throw new Error("Wrong parameter p\
assed: "+t)},"srgb_into_xyz_d65"),dt=r(t=>{if(g(t)&&t.colorspace===
"srgb-linear"){let e=y($,t.position.toArray());return w(e).multiply(
Ht),e}else throw new Error("Wrong parameter passed: "+t)},"s\
rgb_linear_into_xyz_d65"),Yi=r(t=>ft(t),"srgb_into_xyz_d50"),
Bi=r(t=>dt(t),"srgb_linear_into_xyz_d50");var Kt=r(t=>K(ft(t)),"srgb_into_a98_rgb"),Xt=r(t=>K(dt(t)),"\
srgb_linear_into_a98_rgb");var ki=r(t=>{if(g(t)&&t.colorspace==="hsl")return Xt(Vt(t));
throw new Error("Wrong parameter passed: "+t)},"hsl_into_a98\
_rgb");var Ui=r(t=>{if(g(t)&&t.colorspace==="hwb"){let[e,a,o]=t.position;
if(e+o>=1){let n=e/(e+o);return y(V,[n,n,n])}else return Kt(
y(X,Q(a,1,.5).map(n=>n*(1-e-o)+e).toArray()))}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_a98_rgb");var on=M(1.0479297925449969,.02962780877005599,-.009243040646204504,
.022946870601609652,.9904344267538799,.015055191490298152,-.05019226628920524,
-.017073799063418826,.7518742814281371),je=M(.955473421488075,
-.0283697093338637,.012314014864481998,-.02309845494876471,1.0099953980813041,
-.020507649298898964,.06325924320057072,.021041441191917323,
1.330365926242124);var Zt=r(t=>((g(t)?w(t):t).multiply(je),t),"d50_to_d65");var Ie=r(t=>{if(g(t)&&t.colorspace==="lab"){let e=903.2962962962963,
a=216/24389,[o,n,i]=t,s=(o+16)/116,l=n/500+s,c=Math.pow(l,3),
f=s-i/200,p=Math.pow(f,3),S=(c>a?c:(116*l-16)/e)*x[0],h=(o>e*
a?Math.pow((o+16)/116,3):o/e)*x[1],v=(p>a?p:(116*f-16)/e)*x[2];
return y($,[S,h,v])}else throw new Error("Wrong parameter pa\
ssed: "+t)},"lab_into_xyz_d50"),Ut=r(t=>Zt(Ie(t)),"lab_into_\
xyz_d65");var hn=r(t=>K(Ut(t)),"lab_into_a98_rgb");var Re=M(.7977666449006423,.2880748288194013,0,.13518129740053308,
.711835234241873,0,.0313477341283922,8993693872564e-17,.8251046025104602),
In=r(t=>y(Rt,[...t]),"prophoto_rgb_into_xyz_d50"),Rn=r(t=>{if(g(
t)&&t.colorspace==="prophoto-rgb"){let e=y($,t.position.toArray());
return w(e).multiply(Re),e}else throw new Error("Wrong param\
eter passed: "+t)},"prophoto_rgb_into_xyz_d65");export{V as A98RGBSpace,Ga as DisplayP3Space,Rr as HSL,Zr as HWB,
Yo as LABModel,Vo as LCh,ta as OKLAB,la as OKLCh,Na as ProphotoRGBSpace,
zt as RGBModel,$a as Rec2020Space,Rt as XYZD50,Rt as XYZD50Space,
$ as XYZD65,$ as XYZD65Space,yi as display_p3_into_a98_rgb,ki as hsl_into_a98_rgb,
wi as hsl_into_rgb,Wt as hsl_into_srgb,Vt as hsl_into_srgb_linear,
Ui as hwb_into_a98_rgb,hn as lab_into_a98_rgb,Ie as lab_into_xyz_d50,
Ut as lab_into_xyz_d65,Rn as prophoto_rgb_into_xyz,In as prophoto_rgb_into_xyz_d50,
Rn as prophoto_rgb_into_xyz_d65,Kt as rgb_into_a98_rgb,ft as rgb_into_xyz,
ft as rgb_into_xyz_d65,jt as sRGBLinearSpace,X as sRGBSpace,
Kt as srgb_into_a98_rgb,ft as srgb_into_xyz,Yi as srgb_into_xyz_d50,
ft as srgb_into_xyz_d65,Xt as srgb_linear_into_a98_rgb,dt as srgb_linear_into_xyz,
Bi as srgb_linear_into_xyz_d50,dt as srgb_linear_into_xyz_d65,
Re as trans_prophoto_to_xyz_d65,ut as trans_xyz_d65_to_linear_a98,
K as xyz_d65_into_a98_rgb,K as xyz_into_a98_rgb};
