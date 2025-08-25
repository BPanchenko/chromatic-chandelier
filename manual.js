var wr=Object.defineProperty;var o=(t,r)=>wr(t,"name",{value:r,configurable:!0});var vr=Object.defineProperty,vt=o((t,r)=>vr(t,"name",{value:r,
configurable:!0}),"n"),Mr=vt(t=>t!==null&&typeof t=="object"&&
Array.isArray(t)===!1,"isObject"),kr=vt(t=>Mr(t)&&"ident"in t&&
"short"in t&&"domain"in t,"isSpaceDimension");function P(t,r,e){
let i=Iterator.from(e===void 0?[t,r]:[t,r,e]),a=e===void 0?2:
3;for(let m of i.take(a))if(kr(m)===!1)throw new TypeError("\
Passed wrong space dimension: "+JSON.stringify(m,void 0,2));
let n=i.take(a).filter(m=>m.tgeom==="azimuth"||m.tgeom==="re\
ference-ray").toArray().length===2?a===3?"cilinder":"circle":
a===3?"cube":"plane",p=Object.create(null,{0:{enumerable:!0,
value:t},1:{enumerable:!0,value:r},length:{enumerable:!0,value:a},
tgeom:{enumerable:!0,value:n},entries:{value:vt(function*(){
yield[0,this[0]],yield[1,this[1]],this.length===3&&(yield[2,
this[2]])},"value")},toArray:{value:vt(function(){return Array.
of(...this)},"value")},[Symbol.iterator]:{value:vt(function*(){
yield this[0],yield this[1],this.length===3&&(yield this[2])},
"value")}});return a===3&&Object.defineProperty(p,2,{enumerable:!0,
value:e}),m=>m===void 0?p:Object.defineProperties(p,m)}o(P,"\
w");vt(P,"createCoordinateSystem");var Ir=Object.defineProperty,dt=o((t,r)=>Ir(t,"name",{value:r,
configurable:!0}),"n"),no=dt(t=>typeof t=="number","isNumber"),
Yr=dt(t=>t!==null&&typeof t=="object"&&Array.isArray(t)===!1,
"isObject"),ie=dt(t=>Yr(t)&&Symbol.iterator in t&&"minimum"in
t&&no(t.minimum)&&"maximum"in t&&no(t.maximum)&&"value"in t&&
no(t.value)&&t.value>0,"isRange");function h(...t){let r=t.length===
1?Array.of(0,t[0]):Array.of(Math.min(...t),Math.max(...t)),[
e,i]=r,a=i-e,n=e+a/2;return Object.create(null,{from:{value:e},
to:{value:i},minimum:{enumerable:!0,value:e},maximum:{enumerable:!0,
value:i},avg:{enumerable:!0,value:n},value:{enumerable:!0,value:a},
allot:{value:wo},clamp:{value:vo},test:{value:dt(p=>e<=p&&p<=
i,"value")},toString:{value:dt(()=>String.raw`{x ∈ R; ${e} ⋜ x ⋜ ${i}}`,
"value")},[Symbol.iterator]:{value:dt(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}o(h,"D");dt(
h,"createRange");function wo(t){return this.test(t)?t:t>this.
from?(t-this.to)%this.value+this.from:this.to-(this.from-t)%
this.value}o(wo,"p");dt(wo,"allocateOuterValue");function vo(t){
return this.test(t)?t:Math.max(Math.min(t,this.to),this.from)}
o(vo,"h");dt(vo,"restrictOuterValue");var Cr=Object.defineProperty,Ar=o((t,r)=>Cr(t,"name",{value:r,
configurable:!0}),"n");var Or=Ar((t,r=6)=>{let e=10**r;return Math.sign(t)*Math.round(
(Math.abs(t)+Number.EPSILON)*e)/e},"round"),S=Or;var Tr=Object.defineProperty,ht=o((t,r)=>Tr(t,"name",{value:r,
configurable:!0}),"t");function ao(...t){let r=t.length===1?
Array.of(0,t[0]):Array.of(Math.min(...t),Math.max(...t)),[e,
i]=r,a=i-e,n=e+a/2;return Object.create(null,{from:{value:e},
to:{value:i},minimum:{enumerable:!0,value:e},maximum:{enumerable:!0,
value:i},avg:{enumerable:!0,value:n},value:{enumerable:!0,value:a},
allot:{value:Mo},clamp:{value:ko},test:{value:ht(p=>e<=p&&p<=
i,"value")},toString:{value:ht(()=>String.raw`{x ∈ R; ${e} ⋜ x ⋜ ${i}}`,
"value")},[Symbol.iterator]:{value:ht(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}o(ao,"c");ht(
ao,"createRange");function Mo(t){return this.test(t)?t:t>this.
from?(t-this.to)%this.value+this.from:this.to-(this.from-t)%
this.value}o(Mo,"g");ht(Mo,"allocateOuterValue");function ko(t){
return this.test(t)?t:Math.max(Math.min(t,this.to),this.from)}
o(ko,"h");ht(ko,"restrictOuterValue");function po(t=[0,100],r=[
0,1]){let[e,i]=r,[a,n]=t,[p,m]=[i-e,n-a];function l(c){return typeof c==
"string"&&(c=parseFloat(c)),s.domain.test(c)===!1&&(c=c>i?(c-
i)%p+e:i-(e-c)%p),m*(c-e)/p+a}o(l,"p"),ht(l,"invert");function s(c){
return typeof c=="string"&&(c=parseFloat(c)),s.range.test(c)===
!1&&(c=c>n?(c-n)%m+a:n-(a-c)%m),p*(c-a)/m+e}return o(s,"l"),
ht(s,"calculator"),Object.defineProperties(s,{domain:{enumerable:!0,
value:ao(e,i)},range:{enumerable:!0,value:ao(a,n)},invert:{enumerable:!0,
value:l}})}o(po,"j");ht(po,"initScale");var _o=po([0,360],[-Math.PI,Math.PI]),Mt=Object.freeze({bytes:8,
domain:_o.domain,ident:"angle",input:o(t=>_o.domain.allot(t*
Math.PI/180),"input"),output:o(t=>S(_o.range.allot(t*180/Math.
PI),1),"output"),short:"phi",tcoord:"polar",tgeom:"azimuth"});var yt=Object.freeze({$coord:Mt,bytes:4,domain:h(0,360),ident:"\
hue",short:"h",input:o(t=>yt.domain.allot(t),"input"),output:o(
t=>Number.isNaN(t)?Number.NaN:Math.abs(t)<1e-5?0:S(t,5),"out\
put")});var mt=Object.freeze({bytes:8,domain:h(0,1),ident:"applicate",
short:"z",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var st=Object.freeze({$coord:mt,bytes:4,domain:h(0,100),ident:"\
lightness",input:o(t=>t/100,"input"),output:o(t=>S(t*100,2),
"output"),short:"L"});var lt=Object.freeze({bytes:8,domain:h(0,1),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var Io=Object.freeze({$coord:lt,bytes:4,domain:h(0,100),ident:"\
saturation",input:o(t=>t/100,"input"),output:o(t=>S(t*100,2),
"output"),short:"S"});var Ee=P(lt,Mt)({adapt:{enumerable:!0,value:mo}});function mo(t=0,r=NaN){return[t*Math.cos(r),t*Math.sin(r)]}o(
mo,"calcCartesianCoordinates");var ut=P(lt,Mt,mt)({adapt:{value:jr}});function jr(t,r,e){return[
...mo(t,r),e]}o(jr,"calcCubeCoordinates");var tt=Object.defineProperty(Float64Array.of(.9504559270516716,
1,1.0890577507598784),"ident",{value:"d65"});Object.freeze(tt.
buffer);var w={CAM:P(yt,Io,st)(),CSYS:ut,ident:"hsl",whitepoint:tt};var Yo=Object.freeze({$coord:mt,bytes:4,domain:h(0,100),ident:"\
blackness",input:o(t=>t/100,"input"),output:o(t=>S(t*100,2),
"output"),short:"B"});var Co=Object.freeze({$coord:lt,bytes:4,domain:h(0,100),ident:"\
whiteness",input:o(t=>t/100,"input"),output:o(t=>S(t*100,2),
"output"),short:"W"});var v={CAM:P(yt,Co,Yo)(),CSYS:ut,ident:"hwb",whitepoint:tt};var ft=Object.freeze({bytes:8,domain:h(-1,1),ident:"abscissa",
short:"x",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var Ao=Object.freeze({$coord:ft,bytes:4,domain:h(-125,125),ident:"\
green-red",input:o(t=>t/125,"input"),output:o(t=>S(t*125,1),
"output"),short:"a"}),Oo=Object.freeze({$coord:ft,bytes:8,domain:h(
-.4,.4),ident:"green-red",input:o(t=>t,"input"),output:o(t=>t,
"output"),short:"a"});var ct=Object.freeze({bytes:8,domain:h(-1,1),ident:"ordinate",
short:"y",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var To=Object.freeze({$coord:ct,bytes:4,domain:h(-125,125),ident:"\
blue-yellow",input:o(t=>t/125,"input"),output:o(t=>S(t*125,2),
"output"),short:"b"}),jo=Object.freeze({$coord:ct,bytes:8,domain:h(
-.4,.4),ident:"blue-yellow",input:o(t=>t,"input"),output:o(t=>t,
"output"),short:"b"});var Xi=P(ft,ct)({adapt:{value:lo}});function lo(t,r){let e=0,i=NaN;return(t!==0||r!==0)&&(e=Math.
sqrt(t**2+r**2),t!==0&&!r||r!==0&&!t?i=r/Math.abs(r)*(Math.PI/
2):i=Math.atan(r/t)),[e,i]}o(lo,"calcPolarCoordinates");var gt=P(ft,ct,mt)({adapt:{value:Xr}});function Xr(t,r,e){return[
...lo(t,r),e]}o(Xr,"calcCylindricalCoordinates");var N=Object.defineProperty(Float64Array.of(.9642956764295677,
1,.8251046025104602),"ident",{value:"d50"});Object.freeze(N.
buffer);var Et=Object.freeze({CAM:P(st,Ao,To)(),CSYS:gt,ident:"lab",
whitepoint:N});var Xo=Object.freeze({$coord:lt,ident:"chroma",short:"C",domain:h(
0,150),input:o(t=>t/150,"input"),output:o(t=>S(t*150,1),"out\
put"),bytes:2}),Zo=Object.freeze({$coord:lt,ident:"chroma",short:"\
c",domain:h(0,.4),input:o(t=>t,"input"),output:o(t=>S(t,5),"\
output"),bytes:4});var Eo=Object.freeze({CAM:P(st,Xo,yt)(),CSYS:ut,ident:"lch",
whitepoint:N});var Tt=Object.freeze({CAM:P(st,Oo,jo)(),CSYS:gt,ident:"oklab",
whitepoint:tt});var jt={CAM:P(st,Zo,yt)(),CSYS:ut,ident:"oklch",whitepoint:tt};var Wo=Object.freeze({$coord:mt,bytes:4,domain:h(0,100),ident:"\
blue",input:o(t=>t/100,"input"),output:o(t=>S(t*100,2),"outp\
ut"),short:"b"}),so=Object.freeze({$coord:mt,bytes:1,domain:h(
0,255),ident:"blue",input:o(t=>t/255,"input"),output:o(t=>so.
domain.clamp(Math.round(t*255)),"output"),short:"B"});var Bo=Object.freeze({$coord:ct,bytes:4,domain:h(0,100),ident:"\
green",input:o(t=>t/100,"input"),output:o(t=>S(t*100,2),"out\
put"),short:"g",description:"Green Light Intensity"}),fo=Object.
freeze({$coord:ct,bytes:1,domain:h(0,255),ident:"green",input:o(
t=>t/255,"input"),output:o(t=>fo.domain.clamp(Math.round(t*255)),
"output"),short:"G",description:"Green Light Intensity"});var Ro=Object.freeze({$coord:ft,bytes:4,domain:h(0,100),ident:"\
green",input:o(t=>t/100,"input"),output:o(t=>S(t*100,2),"out\
put"),short:"r"}),co=Object.freeze({$coord:ft,bytes:1,domain:h(
0,255),ident:"red",input:o(t=>t/255,"input"),output:o(t=>co.
domain.clamp(Math.round(t*255)),"output"),short:"R"});var kt=P(Ro,Bo,Wo)(),Pt=gt,It=tt,H=Object.freeze({ident:"srg\
b",CAM:kt,CSYS:Pt,whitepoint:It}),wt=Object.freeze({ident:"s\
rgb-linear",CAM:kt,CSYS:Pt,whitepoint:It}),Xt=Object.freeze(
{ident:"a98-rgb",CAM:kt,CSYS:Pt,whitepoint:It}),xo=Object.freeze(
{ident:"display-p3",CAM:kt,CSYS:Pt,whitepoint:It}),bo=Object.
freeze({ident:"prophoto-rgb",CAM:kt,CSYS:Pt,whitepoint:N}),ho=Object.
freeze({ident:"rec2020",CAM:kt,CSYS:Pt,whitepoint:It}),Lo=Object.
freeze({ident:"rgb",CAM:P(co,fo,so)(),CSYS:Pt,whitepoint:It});var Z=Object.freeze({ident:"xyz-d65",CSYS:gt,whitepoint:tt}),
E=Object.freeze({ident:"xyz-d50",CSYS:gt,whitepoint:N});var Zr=Object.defineProperty,ot=o((t,r)=>Zr(t,"name",{value:r,
configurable:!0}),"t"),Er=ot(t=>t!==null&&typeof t=="object"&&
Array.isArray(t)===!1,"isObject"),Qn=ot(t=>Er(t)&&Symbol.iterator in
t&&typeof t[Symbol.iterator]=="function"&&"length"in t&&typeof t.
length=="number"&&t.length>=9,"isMatrix");function u(...t){let r=Math.
max(t.length,9),e=new ArrayBuffer(r*8),i=new Float64Array(e,
0,r),a=Object.create(null,{[Symbol.iterator]:{value:ot(function*(){
for(let n=0;n<i.length;n++)yield this[n]},"value")},[Symbol.
isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{value:ot(
()=>"Matrix"+i.toString(),"value")},length:{enumerable:!0,value:r},
toArray:{value:ot(()=>Iterator.from(i).toArray(),"value")},toString:{
value:i.toString}});for(let n=0;n<r;n++)(function(p,m,l){Object.
defineProperty(p,m,{enumerable:!0,get:ot(()=>l[m],"get"),set:ot(
s=>{if(typeof s=="number")l[m]=s;else throw new TypeError("E\
xpected Number")},"set")})})(a,n,i);return Object.defineProperties(
a,{clone:{value:ot(()=>u(...i),"value")},each:{value:ot(function(n){
return i.forEach((p,m,l)=>n(p,m,this)),this},"value")},determinant:{
value:ot(()=>{let[n,p,m,l,s,c,C,g,X]=i,it=X*s-c*g,nt=-X*l+c*
C,U=g*l-s*C;return n*it+p*nt+m*U},"value")},invert:{value:ot(
function(){let n=this.determinant();if(n===0)throw console.table(
this),new Error("A singular or non-square matrix matrix cann\
ot be inverted.");let[p,m,l,s,c,C,g,X,it]=i,nt=it*c-C*X,U=-it*
s+C*g,Pr=X*s-c*g;return this.update(nt/n,(-it*m+l*X)/n,(C*m-
l*c)/n,U/n,(it*p-l*g)/n,(-C*p+l*s)/n,Pr/n,(-X*p+m*g)/n,(c*p-
m*s)/n)},"value")},update:{value:ot(function(){return i.set(
Iterator.from(arguments).map(n=>typeof n=="number"?n:0).toArray()),
this},"value")}}),a.update(...t)}o(u,"v");ot(u,"createMatrix");var Wr=Object.defineProperty,d=o((t,r)=>Wr(t,"name",{value:r,
configurable:!0}),"t"),Br=d(t=>typeof t=="number","isNumber"),
Rr=d(t=>typeof t=="string","isString"),Wt=d(t=>Bt(t)&&Symbol.
iterator in t&&typeof t[Symbol.iterator]=="function","isIter\
ableObject"),Bt=d(t=>t!==null&&typeof t=="object"&&Array.isArray(
t)===!1,"isObject"),Lr=d(t=>Rr(t)&&Nr.has(t),"isSpaceID"),Dr=d(
t=>Bt(t)&&"ident"in t&&Lr(t.ident)&&"CSYS"in t&&Bt(t.CSYS)&&
"length"in t.CSYS&&t.CSYS.length===3,"isColorSpace"),Nr=new Set(
["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab","okl\
ch","prophoto-rgb","rec2020","rec2100-pq","rec2100-hlg","rec\
2100-linear","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz\
-d65"]),Hr=d(t=>Wt(t)&&"space"in t&&Dr(t.space)&&"length"in t&&
t.length===3&&Iterator.from(t).every(r=>typeof r=="number"),
"isPointInSpace"),Gr=d(t=>Bt(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function"&&"length"in t&&typeof t.length=="numbe\
r"&&t.length>=9,"isMatrix"),$r=d((t,r=6)=>{let e=10**r;return Math.
sign(t)*Math.round((Math.abs(t)+Number.EPSILON)*e)/e},"round"),
Vr=d(t=>Wt(t)&&"length"in t&&t.length===3&&Iterator.from(t).
every(r=>typeof r=="number")&&"magnitude"in t&&Br(t.magnitude)&&
"base"in t&&Wt(t.base)&&"head"in t&&Wt(t.head),"isVector");function x(t,r=0,e=0){
let i=Hr(t)?new Float64Array(t.buffer):Float64Array.of(t,r,e),
a=Object.create(null,{base:{get:d(()=>Iterator.from([0,0,0]),
"get")},head:{enumerable:!0,get:d(()=>Iterator.from(i),"get")},
magnitude:{enumerable:!0,get:d(()=>$r(Math.hypot(...i),9),"g\
et")},sqrMagnitude:{get:d(()=>i.reduce((n,p)=>n+p**2,0),"get")}});
return Object.defineProperties(a,{clone:{value:d(()=>x(i[0],
i[1],i[2]),"value")},angle:{value:Do},cross:{value:No},distance:{
value:Ho},dot:{value:Go},each:{value:$o},equals:{value:Vo},multiply:{
value:qo},normalize:{value:Ko},randomly:{value:Uo},strictEquals:{
value:Fo},update:{value:d(function(n,p,m){let l=Array.isArray(
n)?n.slice(3):Array.of(n,p,m);return i.set(this.head.map((s,c)=>l[c]??
s).toArray()),this},"value")},zeroize:{value:Jo}}),Object.defineProperties(
a,{[Symbol.toStringTag]:{get(){return`Vector[${this.toString()}\
]`}},entries:{value:d(function(){return this.values().map((n,p)=>Object.
seal(Array.of(p,n)))},"value")},toArray:{value:d(function(){
return Object.seal(Array.of(this[0],this[1],this[2]))},"valu\
e")},toString:{value:d(()=>i.toString(),"value")},values:{value:d(
function(){return Iterator.from(this.toArray())},"value")}}),
Object.defineProperties(a,{[Symbol.isConcatSpreadable]:{value:!0},
[Symbol.iterator]:{value:d(function*(){yield this[0],yield this[1],
yield this[2]},"value")},0:{enumerable:!0,get:d(()=>i[0],"ge\
t"),set:d(n=>{if(typeof n=="number")i[0]=n;else throw new TypeError(
"Expected Number")},"set")},1:{enumerable:!0,get:d(()=>i[1],
"get"),set:d(n=>{if(typeof n=="number")i[1]=n;else throw new TypeError(
"Expected Number")},"set")},2:{enumerable:!0,get:d(()=>i[2],
"get"),set:d(n=>{if(typeof n=="number")i[2]=n;else throw new TypeError(
"Expected Number")},"set")},length:{enumerable:!0,value:3}}),
a}o(x,"A");d(x,"createVector");function Do(t,r=!1){let e=Math.
sqrt(this.sqrMagnitude*t.sqrMagnitude),i=e&&this.dot(t)/e,a=Math.
acos(Math.min(Math.max(i,-1),1));return r?a*180/Math.PI:a}o(
Do,"P");d(Do,"angle");function No(t){let[r,e,i]=this.head,[a,
n,p]=t,m=e*p-i*n,l=i*a-r*p,s=r*n-e*a;return this.update(m,l,
s)}o(No,"D");d(No,"cross");function Ho(t){return Math.sqrt(this.
head.reduce((r,e,i)=>r+Math.pow(t[i]-e,2),0))}o(Ho,"C");d(Ho,
"distance");function Go(t){let[r,e,i]=this.head,[a,n,p]=t;return r*
a+e*n+i*p}o(Go,"O");d(Go,"dot");function $o(t){for(let r=0;r<
3;r++)t(this[r],r,this);return this}o($o,"j");d($o,"each");function Vo(t,r=1e-5){
let[e,i,a]=this.head,[n,p,m]=t;return Math.abs(e-n)<=r*Math.
max(1,Math.abs(e),Math.abs(n))&&Math.abs(i-p)<=r*Math.max(1,
Math.abs(i),Math.abs(p))&&Math.abs(a-m)<=r*Math.max(1,Math.abs(
a),Math.abs(m))}o(Vo,"R");d(Vo,"equals");function Fo(t){let[
r,e,i]=this.head,[a,n,p]=t;return r===a&&e===n&&i===p}o(Fo,"\
k");d(Fo,"strictEquals");function qo(t){let[r,e,i]=this.head;
if(Gr(t)||Vr(t)){let[a,n,p,m=0,l=0,s=0,c=0,C=0,g=0]=t;return this.
update(r*a+e*m+i*c,r*n+e*l+i*C,r*p+e*s+i*g)}else throw new TypeError(
"Unsupported Multiplicator: "+t)}o(qo,"z");d(qo,"multiply");
function Ko(){let t=1/this.magnitude;return this.each((r,e,i)=>i[e]=
r*t)}o(Ko,"T");d(Ko,"normalize");function Uo(t=1){let r=Math.
random()*2*Math.PI,e=Math.random()*2-1,i=Math.sqrt(1-Math.pow(
e,2))*t;return this.update(Math.cos(r)*i,Math.sin(r)*i,e*t)}
o(Uo,"E");d(Uo,"randomly");function Jo(){return this.update(
0,0,0)}o(Jo,"q");d(Jo,"zeroize");var Fr=Object.defineProperty,G=o((t,r)=>Fr(t,"name",{value:r,
configurable:!0}),"n"),qr=G(t=>typeof t=="number","isNumber"),
Kr=G(t=>typeof t=="string","isString"),Ur=G(t=>yo(t)&&Symbol.
iterator in t&&typeof t[Symbol.iterator]=="function","isIter\
ableObject"),yo=G(t=>t!==null&&typeof t=="object"&&Array.isArray(
t)===!1,"isObject"),Jr=G(t=>Kr(t)&&Qr.has(t),"isSpaceID"),Qo=G(
t=>yo(t)&&"ident"in t&&Jr(t.ident)&&"CSYS"in t&&yo(t.CSYS)&&
"length"in t.CSYS&&t.CSYS.length===3,"isColorSpace"),Qr=new Set(
["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab","okl\
ch","prophoto-rgb","rec2020","rec2100-pq","rec2100-hlg","rec\
2100-linear","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz\
-d65"]),f=G(t=>Ur(t)&&"space"in t&&Qo(t.space)&&"length"in t&&
t.length===3&&Iterator.from(t).every(r=>typeof r=="number"),
"isPointInSpace");function _(t,r){if(Qo(t)===!1)throw new TypeError(
"Point must be declared in a valid color space instead of "+
JSON.stringify(t,void 0,2));if((r instanceof ArrayBuffer||Array.
isArray(r)&&r.length===3&&r.every(p=>qr(p)))===!1)throw new TypeError(
"Point in space has valid coordinates. Wrong parameters: "+JSON.
stringify(r,void 0,2));let e=t.CSYS.length,i=r instanceof ArrayBuffer?
new Float64Array(r):new Float64Array(e),a=t.CAM===void 0?Array.
of(0,1,2):t.CAM.toArray().map(p=>t.CSYS.toArray().findIndex(
m=>p.$coord===m)),n=Object.create(null,{buffer:{value:i.buffer},
colorspace:{enumerable:!0,value:t.ident},length:{value:e},space:{
value:t}});return Object.defineProperties(n,{equals:{value:G(
function(p,m=1e-5){let[l,s,c]=this.position,[C,g,X]=p.position;
return this.colorspace===p.colorspace&&Math.abs(l-C)<=m*Math.
max(1,Math.abs(l),Math.abs(C))&&Math.abs(s-g)<=m*Math.max(1,
Math.abs(s),Math.abs(g))&&Math.abs(c-X)<=m*Math.max(1,Math.abs(
c),Math.abs(X))},"value")},set:{value:G(function(p){for(let m=0;m<
this.length;m++)p[m]!==void 0&&(this[m]=p[m]);return this},"\
value")}}),(function(p,m){Object.defineProperties(p,{[Symbol.
iterator]:{value:G(function*(){yield this[0],yield this[1],yield this[2]},
"value")},adapted:{get(){if(typeof this.space.CSYS.adapt=="f\
unction"){let[l,s,c]=this.position;return Iterator.from(this.
space.CSYS.adapt(l,s,c))}else return this.position}},position:{
get:G(()=>Iterator.from(m),"get")}});for(let l=0;l<p.length;l++)
(function(s,c,C){Object.defineProperty(p,l,{enumerable:!0,get(){
let{CAM:g,CSYS:X}=this.space,it=X[c],nt=g!==void 0?g[s]:null,
U=C[c];return"output"in it&&typeof it.output=="function"&&(U=
it.output(U)),nt!==null&&"output"in nt&&typeof nt.output=="f\
unction"&&(U=nt.output(U)),U},set(g){let{CAM:X,CSYS:it}=this.
space,nt=it[c],U=X!==void 0?X[s]:null;U!==null&&"input"in U&&
typeof U.input=="function"&&(g=U.input(g)),"input"in nt&&typeof nt.
input=="function"&&(g=nt.input(g)),typeof g=="string"&&(g=parseFloat(
g)),C[c]=g}})})(l,a[l],m)})(n,i),Object.defineProperties(n,{
[Symbol.toStringTag]:{get(){return`PointInSpace(${this.toString()}\
)`}},entries:{value:G(function(){let p=this.space.CAM??this.
space.CSYS;return Iterator.from([[p[0],this[0]],[p[1],this[1]],
[p[2],this[2]]])},"value")},toString:{value:G(function(){return`${this.
colorspace};[${this.values().join()}]`},"value")},values:{value:G(
function(){return Object.freeze([this[0],this[1],this[2]])},
"value")}}),Array.isArray(r)?n.set(r):n}o(_,"$");G(_,"initPo\
intInSpace");var xt=o(t=>{let r=Math.abs(t);return r<=.04045?t/12.92:Math.
sign(t)*Math.pow((r+.055)/1.055,2.4)},"to_linear"),bt=o(t=>{
let r=Math.abs(t);return r>.0031308?Math.sign(t)*(1.055*Math.
pow(r,1/2.4)-.055):12.92*t},"to_gamut");var $=u(1.0479297925449969,.02962780877005599,-.009243040646204504,
.022946870601609652,.9904344267538799,.015055191490298152,-.05019226628920524,
-.017073799063418826,.7518742814281371),O=u(.955473421488075,
-.0283697093338637,.012314014864481998,-.02309845494876471,1.0099953980813041,
-.020507649298898964,.06325924320057072,.021041441191917323,
1.330365926242124);var tr=u(608311/1250200,35783/156275,0,189793/714400,247089/
357200,32229/714400,198249/1000160,198249/2500400,5220557/5000800),
V=o(t=>{if(f(t)&&t.colorspace==="display-p3"){let[r,e,i]=t.position,
[a,n,p]=x(r,e,i).each((m,l,s)=>s[l]=xt(m)).multiply(tr);return _(
Z,[a,n,p])}else throw new Error("Wrong parameter passed: "+t)},
"display_p3_into_xyz_d65"),or=o(t=>{if(f(t)&&t.colorspace===
"display-p3"){let[r,e,i]=t.position,[a,n,p]=x(r,e,i).each((m,l,s)=>s[l]=
xt(m)).multiply(tr).multiply($);return _(E,[a,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"display_p3_into_xyz_d50");var go=o(t=>Math.sign(t)*Math.pow(Math.abs(t),2.19921875),"t\
o_linear"),uo=o(t=>Math.sign(t)*Math.pow(Math.abs(t),256/563),
"to_gamut");var rr=u(1829569/896150,-851781/878810,16779/1248040,-506331/
896150,1648619/878810,-147721/1248040,-308931/896150,36519/878810,
1266979/1248040),W=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){
let[r,e,i]=t.position,[a,n,p]=x(r,e,i).multiply(rr).each((m,l,s)=>s[l]=
uo(m)*100);return _(Xt,[a,n,p])}else throw new Error("Wrong \
parameter passed: "+t)},"xyz_d65_into_a98_rgb"),Ma=o(t=>{if(f(
t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.position,[a,n,p]=x(
r,e,i).multiply(O).multiply(rr).each((m,l,s)=>s[l]=uo(m)*100);
return _(Xt,[a,n,p])}else throw new Error("Wrong parameter p\
assed: "+t)},"xyz_d50_into_a98_rgb");var Aa=o(t=>W(V(t)),"display_p3_into_a98_rgb");var er=u(573536/994567,591459/1989134,53769/1989134,263643/1420810,
6239551/9945670,351524/4972835,187206/994567,374412/4972835,
4929758/4972835),F=o(t=>{if(f(t)&&t.colorspace==="a98-rgb"){
let[r,e,i]=t.position,[a,n,p]=x(r,e,i).each((m,l,s)=>s[l]=go(
m)).multiply(er);return _(Z,[a,n,p])}else throw new Error("W\
rong parameter passed: "+t)},"a98_rgb_into_xyz_d65"),ir=o(t=>{
if(f(t)&&t.colorspace==="a98-rgb"){let[r,e,i]=t.position,[a,
n,p]=x(r,e,i).each((m,l,s)=>s[l]=go(m)).multiply(er).multiply(
$);return _(E,[a,n,p])}else throw new Error("Wrong parameter\
 passed: "+t)},"a98_rgb_into_xyz_d50");var Rt=u(12831/3959,-851781/878810,705/12673,-329/214,1648619/
878810,-2585/12673,-1974/3959,36519/878810,705/667),L=o(t=>{
if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,[a,
n,p]=x(r,e,i).multiply(Rt).each((m,l,s)=>s[l]=bt(m)*100);return _(
H,[a,n,p])}else throw new Error("Wrong parameter passed: "+t)},
"xyz_d65_into_srgb"),at=o(t=>{if(f(t)&&t.colorspace==="xyz-d\
65"){let[r,e,i]=t.position,[a,n,p]=x(r,e,i).multiply(Rt).each(
(m,l,s)=>s[l]*=100);return _(wt,[a,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_srgb_linear"),zt=o(
t=>{if(f(t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.position,
[a,n,p]=x(r,e,i).multiply(O).multiply(Rt).each((m,l,s)=>s[l]=
bt(m)*100);return _(H,[a,n,p])}else throw new Error("Wrong p\
arameter passed: "+t)},"xyz_d50_into_srgb"),Lt=o(t=>{if(f(t)&&
t.colorspace==="xyz-d50"){let[r,e,i]=t.position,[a,n,p]=x(r,
e,i).multiply(O).multiply(Rt).each((m,l,s)=>s[l]*=100);return _(
wt,[a,n,p])}else throw new Error("Wrong parameter passed: "+
t)},"xyz_d50_into_srgb_linear");var Dt=o(t=>L(F(t)),"a98_rgb_into_srgb"),Ja=o(t=>at(F(t)),"a\
98_rgb_into_srgb_linear");var Nt=o(t=>L(V(t)),"display_p3_into_srgb"),ep=o(t=>at(V(t)),
"display_p3_into_srgb_linear");var rt=o((t,r,e)=>{let i=2*Math.PI,a=Math.PI/6;t<0&&(t+=i),t=
t%i;let n=o(p=>{let m=(p+t/a)%12,l=r*Math.min(e,1-e);return e-
l*Math.max(-1,Math.min(m-3,9-m,1))},"f");return[n(0),n(8),n(
4)]},"hsl_to_rgb");var fp=o(t=>{if(f(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
a=rt(e,r,i).map(n=>Math.min(Math.max(Math.round(n*255),0),255));
return _(Lo,a)}else throw new Error("Wrong parameter passed:\
 "+t)},"hsl_into_rgb"),nr=o(t=>{if(f(t)&&t.colorspace==="hsl"){
let[r,e,i]=t.position,a=rt(e,r,i).map(n=>n*100);return _(H,a)}else
throw new Error("Wrong parameter passed: "+t)},"hsl_into_srg\
b"),cp=o(t=>{if(f(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
a=rt(e,r,i).map(n=>xt(n)*100);return _(wt,a)}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_srgb_linear");var St=o((t,r,e)=>{if(r+e>=1){let i=r/(r+e);return[i,i,i]}else{
let[i,a,n]=rt(t,1,.5).map(p=>p*(1-r-e)+r);return[i,a,n]}},"h\
wb_to_rgb");var Pp=o(t=>{if(f(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
a=St(e,r,i).map(n=>n*100);return _(H,a)}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_srgb"),wp=o(t=>{if(f(
t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,a=St(e,r,i).
map(n=>xt(n)*100);return _(wt,a)}else throw new Error("Wrong\
 parameter passed: "+t)},"hwb_into_srgb_linear");var I=o(t=>{if(f(t)&&t.colorspace==="lab"){let r=903.2962962962963,
e=216/24389,[i,a,n]=t,p=(i+16)/116,m=a/500+p,l=Math.pow(m,3),
s=p-n/200,c=Math.pow(s,3),C=(l>e?l:(116*m-16)/r)*N[0],g=(i>r*
e?Math.pow((i+16)/116,3):i/r)*N[1],X=(c>e?c:(116*s-16)/r)*N[2];
return _(E,[C,g,X])}else throw new Error("Wrong parameter pa\
ssed: "+t)},"lab_into_xyz_d50"),Yt=o(t=>{let r=I(t),[e,i,a]=x(
r).multiply(O);return _(Z,[e,i,a])},"lab_into_xyz_d65");var Ht=o(t=>zt(I(t)),"lab_into_srgb"),Zp=o(t=>Lt(I(t)),"lab_\
into_srgb_linear");var D=o(t=>{if(f(t)&&t.colorspace==="lch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,a=e*Math.cos(i),n=e*Math.sin(i);return _(
Et,[r,a,n])}else throw new Error("Wrong parameter passed: "+
t)},"lch_into_lab");var Gt=o(t=>zt(I(D(t))),"lch_into_srgb"),$p=o(t=>Lt(I(D(t))),
"lch_into_srgb_linear");var ar=u(1,1,1,.3963377773761749,-.1055613458156586,-.0894841775298119,
.2158037573099136,-.0638541728258133,-1.2914855480194092),Ct=u(
.819022437996703,.0329836539323885,.0481771893596242,.3619062600528904,
.9292868615863434,.2642395317527308,-.1288737815209879,.0361446663506424,
.6335478284694309),At=u(.210454268309314,1.9779985324311684,
.0259040424655478,.7936177747023054,-2.42859224204858,.7827717124575296,
-.0040720430116193,.450593709617411,-.8086757549230774),pr=u(
1.2268798758459243,-.0405757452148008,-.0763729366746601,-.5578149944602171,
1.112286803280317,-.4214933324022432,.2813910456659647,-.0717110580655164,
1.5869240198367816);var z=o(t=>{if(f(t)&&t.colorspace==="oklab"){let[r,e,i]=t.position,
[a,n,p]=x(i,r,e).multiply(ar).each((m,l,s)=>s[l]=m**3).multiply(
pr);return _(Z,[a,n,p])}else throw new Error("Wrong paramete\
r passed: "+t)},"oklab_into_xyz_d65"),$t=o(t=>{let[r,e,i]=x(
z(t)).multiply($);return _(E,[r,e,i])},"oklab_into_xyz_d50");var Vt=o(t=>L(z(t)),"oklab_into_srgb"),a_=o(t=>at(z(t)),"okl\
ab_into_srgb_linear");var J=o(t=>{if(f(t)&&t.colorspace==="oklch"){let[r,e]=t,i=t.
position.drop(1).next().value??NaN,a=isNaN(i)?0:e*Math.cos(i),
n=isNaN(i)?0:e*Math.sin(i);return _(Tt,[r,a,n])}else throw new Error(
"Wrong parameter passed: "+t)},"oklch_into_oklab");var Ft=o(t=>L(z(J(t))),"oklch_into_srgb"),d_=o(t=>at(z(J(t))),
"oklch_into_srgb_linear");var _r=o(t=>{let r=Math.abs(t);return r<=.03125?t/16:Math.sign(
t)*Math.pow(r,1.8)},"to_linear"),zo=o(t=>{let r=Math.abs(t);
return r>=1/512?Math.sign(t)*Math.pow(r,1/1.8):16*t},"to_gam\
ut");var te=u(.7977666449006423,.2880748288194013,0,.13518129740053308,
.711835234241873,0,.0313477341283922,8993693872564e-17,.8251046025104602),
Zt=o(t=>{if(f(t)&&t.colorspace==="prophoto-rgb"){let r=_(E,t.
position.toArray());return x(r).each((e,i,a)=>a[i]=_r(e)).multiply(
te),r}else throw new Error("Wrong parameter passed: "+t)},"p\
rophoto_rgb_into_xyz_d50"),et=o(t=>{let r=Zt(t),e=_(Z,r.position.
toArray());return x(e).multiply(O),e},"prophoto_rgb_into_xyz\
_d65");var qt=o(t=>L(et(t)),"prophoto_rgb_into_srgb"),A_=o(t=>at(et(
t)),"prophoto_rgb_into_srgb_linear");var Kt=1.09929682680944,mr=.018053968510807,So=o(t=>{let r=Math.
abs(t);return r<mr*4.5?t/4.5:Math.sign(t)*Math.pow((r+Kt-1)/
Kt,1/.45)},"to_linear"),Po=o(t=>{let r=Math.abs(t);return r>
mr?Math.sign(t)*(Kt*Math.pow(r,.45)-(Kt-1)):4.5*t},"to_gamut");var lr=u(63426534/99577255,26158966/99577255,4994106574466076e-32,
20160776/139408157,472592308/697040785,19567812/697040785,47086771/
278816314,8267143/139408157,295819943/278816314),q=o(t=>{if(f(
t)&&t.colorspace==="rec2020"){let[r,e,i]=t.position,[a,n,p]=x(
r,e,i).each((m,l,s)=>s[l]=So(m)).multiply(lr);return _(Z,[a,
n,p])}else throw new Error("Wrong parameter passed: "+t)},"r\
ec2020_into_xyz_d65"),sr=o(t=>{if(f(t)&&t.colorspace==="rec2\
020"){let[r,e,i]=t.position,[a,n,p]=x(r,e,i).each((m,l,s)=>s[l]=
So(m)).multiply(lr).multiply($);return _(E,[a,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"rec2020_into_xyz_d50");var Ut=o(t=>L(q(t)),"rec2020_into_srgb"),$_=o(t=>at(q(t)),"r\
ec2020_into_srgb_linear");var Jt=u(506752/1228815,87098/409605,7918/409605,87881/245763,
175762/245763,87881/737289,12673/70218,12673/175545,1001167/
1053270),j=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.colorspace)){
let[r,e,i]=t.position,[a,n,p]=x(r,e,i).each((m,l,s)=>s[l]=xt(
m)).multiply(Jt);return _(Z,[a,n,p])}else throw new Error("W\
rong parameter passed: "+t)},"srgb_into_xyz_d65"),Q=o(t=>{if(f(
t)&&t.colorspace==="srgb-linear"){let[r,e,i]=t.position,[a,n,
p]=x(r,e,i).multiply(Jt);return _(Z,[a,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_linear_into_xyz_d65"),Ot=o(
t=>{if(f(t)&&["rgb","srgb"].includes(t.colorspace)){let[r,e,
i]=t.position,[a,n,p]=x(r,e,i).each((m,l,s)=>s[l]=xt(m)).multiply(
Jt).multiply($);return _(E,[a,n,p])}else throw new Error("Wr\
ong parameter passed: "+t)},"srgb_into_xyz_d50"),fr=o(t=>{if(f(
t)&&t.colorspace==="srgb-linear"){let[r,e,i]=t.position,[a,n,
p]=x(r,e,i).multiply(Jt).multiply($);return _(E,[a,n,p])}else
throw new Error("Wrong parameter passed: "+t)},"srgb_linear_\
into_xyz_d50");var Qt=o(t=>W(j(t)),"srgb_into_a98_rgb"),hm=o(t=>W(Q(t)),"sr\
gb_linear_into_a98_rgb");var Sm=o(t=>Qt(nr(t)),"hsl_into_a98_rgb");var Ym=o(t=>{if(f(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position;
if(r+i>=1){let a=r/(r+i);return _(Xt,[a,a,a])}else{let a=rt(
e,1,.5).map(n=>(n*(1-r-i)+r)*100);return Qt(_(H,a))}}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_a98_rgb");var jm=o(t=>W(Yt(t)),"lab_into_a98_rgb");var Rm=o(t=>W(Yt(D(t))),"lch_into_a98_rgb");var Gm=o(t=>W(z(t)),"oklab_into_a98_rgb");var cr=o(t=>$t(J(t)),"oklch_into_xyz_d50"),xr=o(t=>z(J(t)),"\
oklch_into_xyz_d65");var tl=o(t=>W(xr(t)),"oklch_into_a98_rgb");var nl=o(t=>W(et(t)),"prophoto_rgb_into_a98_rgb");var ll=o(t=>W(q(t)),"rec2020_into_a98_rgb");var br=u(446124/178915,-14852/17905,11844/330415,-333277/357830,
63121/35810,-50337/660830,-72051/178915,423/17905,316169/330415),
B=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[a,n,p]=x(r,e,i).multiply(br).each((m,l,s)=>s[l]=bt(m)*100);
return _(xo,[a,n,p])}else throw new Error("Wrong parameter p\
assed: "+t)},"xyz_d65_into_display_p3"),to=o(t=>{if(f(t)&&t.
colorspace==="xyz-d50"){let[r,e,i]=t.position,[a,n,p]=x(r,e,
i).multiply(O).multiply(br).each((m,l,s)=>s[l]=bt(m)*100);return _(
xo,[a,n,p])}else throw new Error("Wrong parameter passed: "+
t)},"xyz_d50_into_display_p3");var Xl=o(t=>B(F(t)),"a98_rgb_into_display_p3");var dr=o(t=>{if(f(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
a=rt(e,r,i).map(p=>p*100),n=_(H,a);return Ot(n)}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_xyz_d50"),pt=o(t=>{
if(f(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,a=rt(e,
r,i).map(p=>p*100),n=_(H,a);return j(n)}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_xyz_d65");var $l=o(t=>B(pt(t)),"hsl_into_display_p3");var hr=o(t=>{if(f(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
a=St(e,r,i).map(p=>p*100),n=_(H,a);return Ot(n)}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_xyz_d50"),_t=o(t=>{
if(f(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,a=St(e,
r,i).map(p=>p*100),n=_(H,a);return j(n)}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_xyz_d65");var es=o(t=>B(_t(t)),"hwb_into_display_p3");var _s=o(t=>to(I(t)),"lab_into_display_p3");var xs=o(t=>to(I(D(t))),"lch_into_display_p3");var gs=o(t=>B(z(t)),"oklab_into_display_p3");var vs=o(t=>B(z(J(t))),"oklch_into_display_p3");var Cs=o(t=>B(et(t)),"prophoto_rgb_into_display_p3");var Xs=o(t=>B(q(t)),"rec2020_into_display_p3");var Rs=o(t=>B(j(t)),"srgb_into_display_p3"),Ls=o(t=>B(Q(t)),
"srgb_linear_into_display_p3");var M=o((t,r,e)=>{let i=Math.max(t,r,e),a=Math.min(t,r,e),n=i-
a,p=yr(t,r,e),m=0,l=(a+i)/2;return n!==0&&(m=l===0||l===1?0:
(i-l)/Math.min(l,1-l)),m<0&&(p+=Math.PI,m=Math.abs(m)),m<=1e-5&&
(p=NaN),[p*180/Math.PI,m*100,l*100]},"rgb_to_hsl"),yr=o((t,r,e)=>{
let i=Math.max(t,r,e),a=Math.min(t,r,e),n=NaN,p=i-a;if(p!==0){
switch(i){case t:n=(r-e)/p+(r<e?6:0);break;case r:n=(e-t)/p+
2;break;case e:n=(t-r)/p+4}n*=Math.PI/3}return n},"rgb_to_hu\
e"),k=o((t,r,e)=>{let i=yr(t,r,e),a=Math.min(t,Math.min(r,e)),
n=1-Math.max(t,Math.max(r,e));return[i*180/Math.PI,a*100,n*100]},
"rgb_to_hwb");var mf=o(t=>{let[r,e,i]=Dt(t).position;return _(w,M(r,e,i))},
"a98_rgb_into_hsl");var df=o(t=>{let[r,e,i]=Nt(t).position;return _(w,M(r,e,i))},
"display_p3_into_hsl");var Pf=o(t=>{if(f(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
[a,n,p]=St(e,r,i),[m,l,s]=M(a,n,p);return _(w,[m,l,s])}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_hsl");var Cf=o(t=>{let[r,e,i]=Ht(t).position;return _(w,M(r,e,i))},
"lab_into_hsl");var Ef=o(t=>{let[r,e,i]=Gt(t).position;return _(w,M(r,e,i))},
"lch_into_hsl");var Hf=o(t=>{let[r,e,i]=Vt(t).position;return _(w,M(r,e,i))},
"oklab_into_hsl");var Uf=o(t=>{let[r,e,i]=Ft(t).position;return _(w,M(r,e,i))},
"oklch_into_hsl");var ic=o(t=>{let[r,e,i]=qt(t).position;return _(w,M(r,e,i))},
"prophoto_rgb_into_hsl");var sc=o(t=>{let[r,e,i]=Ut(t).position,[a,n,p]=M(r,e,i);return _(
w,[a,n,p])},"rec2020_into_hsl");var yc=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.colorspace)){
let[r,e,i]=t.position,[a,n,p]=M(r,e,i);return _(w,[a,n,p])}else
throw new Error("Wrong parameter passed: "+t)},"srgb_into_hs\
l"),gc=o(t=>{if(f(t)&&t.colorspace==="srgb-linear"){let[r,e,
i]=t.position.map(m=>bt(m)),[a,n,p]=M(r,e,i);return _(w,[a,n,
p])}else throw new Error("Wrong parameter passed: "+t)},"srg\
b_linear_into_hsl");var Mc=o(t=>{let[r,e,i]=zt(t).position;return _(w,M(r,e,i))},
"xyz_d50_into_hsl"),kc=o(t=>{let[r,e,i]=L(t).position;return _(
w,M(r,e,i))},"xyz_d65_into_hsl");var $c=o(t=>{let[r,e,i]=Dt(t).position;return _(v,k(r,e,i))},
"a98_rgb_into_hwb");var Qc=o(t=>{let[r,e,i]=Nt(t).position;return _(v,k(r,e,i))},
"display_p3_into_hwb");var a0=o(t=>{if(f(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
[a,n,p]=rt(e,r,i);return _(v,k(a,n,p))}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_hwb");var c0=o(t=>{let[r,e,i]=Ht(t).position;return _(v,k(r,e,i))},
"lab_into_hwb");var u0=o(t=>{let[r,e,i]=Gt(t).position;return _(v,k(r,e,i))},
"lch_into_hwb");var k0=o(t=>{let[r,e,i]=Vt(t).position;return _(v,k(r,e,i))},
"oklab_into_hwb");var j0=o(t=>{let[r,e,i]=Ft(t).position;return _(v,k(r,e,i))},
"oklch_into_hwb");var L0=o(t=>{let[r,e,i]=qt(t).position;return _(v,k(r,e,i))},
"prophoto_rgb_into_hwb");var F0=o(t=>{let[r,e,i]=Ut(t).position;return _(v,k(r,e,i))},
"rec2020_into_hwb");var ox=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.colorspace)){
let[r,e,i]=t.position;return _(v,k(r,e,i))}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_hwb"),rx=o(t=>{if(f(
t)&&t.colorspace==="srgb-linear"){let[r,e,i]=t.position.map(
a=>bt(a));return _(v,k(r,e,i))}else throw new Error("Wrong p\
arameter passed: "+t)},"srgb_linear_into_hwb");var mx=o(t=>{let[r,e,i]=zt(t).position;return _(v,k(r,e,i))},
"xyz_d50_into_hwb"),lx=o(t=>{let[r,e,i]=L(t).position;return _(
v,k(r,e,i))},"xyz_d65_into_hwb");var oo=o(t=>{if(f(t)&&t.colorspace==="xyz-d50"){let r=_(Z,t.
position.toArray());return x(r).multiply(O),r}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_xyz_d65"),y=o(t=>{
if(f(t)&&t.colorspace==="xyz-d65"){let r=_(E,t.position.toArray());
return x(r).multiply($),r}else throw new Error("Wrong parame\
ter passed: "+t)},"xyz_d65_into_xyz_d50");var gr=o(t=>b(y(t)),"xyz_d65_into_lab"),b=o(t=>{if(f(t)&&t.colorspace===
"xyz-d50"){let r=.008856451679035631,e=29**3/3**3,[i,a,n]=t.
position.map((s,c)=>s/N[c]).map(s=>s>r?Math.cbrt(s):(e*s+16)/
116),p=116*a-16,m=500*(i-a),l=200*(a-n);return _(Et,[p,m,l])}else
throw new Error("Wrong parameter passed: "+t)},"xyz_d50_into\
_lab");var Rx=o(t=>{let r=F(t),e=y(r);return b(e)},"a98_rgb_into_la\
b");var $x=o(t=>{let r=V(t),e=y(r);return b(e)},"display_p3_into\
_lab");var Jx=o(t=>{let r=pt(t),e=y(r);return b(e)},"hsl_into_lab");var ib=o(t=>{let r=_t(t),e=y(r);return b(e)},"hwb_into_lab");var lb=o(t=>{let r=z(t),e=y(r);return b(e)},"oklab_into_lab");var hb=o(t=>{let r=J(t),e=z(r),i=y(e);return b(i)},"oklch_in\
to_lab");var Sb=o(t=>{let r=Zt(t);return b(r)},"prophoto_rgb_into_lab");var Ib=o(t=>{let r=q(t),e=y(r);return b(e)},"rec2020_into_la\
b");var jb=o(t=>{let r=j(t),e=y(r);return b(e)},"srgb_into_lab"),
Xb=o(t=>{let r=Q(t),e=y(r);return b(e)},"srgb_linear_into_la\
b");var Y=o(t=>{if(f(t)&&t.colorspace==="lab"){let[r,e,i]=t,a=Math.
atan2(i,e)*(180/Math.PI),n=Math.hypot(e,i);return _(Eo,[r,n,
a])}else throw new Error("Wrong parameter passed: "+t)},"lab\
_into_lch");var id=o(t=>{let r=F(t),e=y(r),i=b(e);return Y(i)},"a98_rgb_\
into_lch");var sd=o(t=>{let r=V(t),e=y(r),i=b(e);return Y(i)},"display_\
p3_into_lch");var yd=o(t=>{let r=pt(t),e=y(r),i=b(e);return Y(i)},"hsl_int\
o_lch");var vd=o(t=>{let r=_t(t),e=y(r),i=b(e);return Y(i)},"hwb_int\
o_lch");var Od=o(t=>{let r=z(t),e=y(r),i=b(e);return Y(i)},"oklab_in\
to_lch");var Rd=o(t=>{let r=J(t),e=z(r),i=y(e),a=b(i);return Y(a)},"o\
klch_into_lch");var $d=o(t=>{let r=Zt(t),e=b(r);return Y(e)},"prophoto_rgb_i\
nto_lch");var Qd=o(t=>{let r=q(t),e=y(r),i=b(e);return Y(i)},"rec2020_\
into_lch");var ah=o(t=>{let r=j(t),e=y(r),i=b(e);return Y(i)},"srgb_int\
o_lch"),ph=o(t=>{let r=Q(t),e=y(r),i=b(e);return Y(i)},"srgb\
_linear_into_lch");var fh=o(t=>Y(b(t)),"xyz_d50_into_lch"),ch=o(t=>Y(gr(t)),"xy\
z_d65_into_lch");var T=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.
position,[a,n,p]=x(r,e,i).multiply(Ct).each((m,l,s)=>s[l]=Math.
cbrt(m)).multiply(At);return _(Tt,[a*100,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_oklab"),Th=o(t=>{
if(f(t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.position,[a,
n,p]=x(r,e,i).multiply(O).multiply(Ct).each((m,l,s)=>s[l]=Math.
cbrt(m)).multiply(At);return _(Tt,[a*100,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_oklab");var Wh=o(t=>T(F(t)),"a98_rgb_into_oklab");var Nh=o(t=>T(V(t)),"display_p3_into_oklab");var Fh=o(t=>{let r=pt(t);return T(r)},"hsl_into_oklab");var Qh=o(t=>T(_t(t)),"hwb_into_oklab");var ro=o(t=>{let r=I(t),e=oo(r);return T(e)},"lab_into_oklab");var sy=o(t=>{let r=D(t),e=I(r),i=oo(e);return T(i)},"lch_int\
o_oklab");var dy=o(t=>T(et(t)),"prophoto_rgb_into_oklab");var zy=o(t=>T(q(t)),"rec2020_into_oklab");var My=o(t=>{let r=j(t);return T(r)},"srgb_into_oklab"),ky=o(
t=>{let r=Q(t);return T(r)},"srgb_linear_into_oklab");var K=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.
position,[a,n,p]=x(r,e,i).multiply(Ct).each((c,C,g)=>g[C]=Math.
cbrt(c)).multiply(At),m=a*100,l=Math.hypot(n,p),s=l<.001?NaN:
Math.atan2(p,n)*180/Math.PI;return _(jt,[m,l,s])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_oklch"),Vy=o(t=>{
if(f(t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.position.toArray(),
[a,n,p]=x(r,e,i).multiply(O).multiply(Ct).each((c,C,g)=>g[C]=
Math.cbrt(c)).multiply(At),m=a*100,l=Math.hypot(n,p),s=l<.001?
NaN:Math.atan2(p,n)*180/Math.PI;return _(jt,[m,l,s])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_oklch");var Jy=o(t=>{let r=F(t);return K(r)},"a98_rgb_into_oklch");var e5=o(t=>{let r=V(t);return K(r)},"display_p3_into_oklch");var _5=o(t=>{let r=pt(t);return K(r)},"hsl_into_oklch");var c5=o(t=>{let r=_t(t);return K(r)},"hwb_into_oklch");var eo=o(t=>{if(f(t)&&t.colorspace==="oklab"){let[r,e,i]=t,a=Math.
hypot(e,i),n=a<.001?NaN:Math.atan2(i,e)*180/Math.PI;return _(
jt,[r,a,n])}else throw new Error("Wrong parameter passed: "+
t)},"oklab_into_oklch");var S5=o(t=>eo(ro(t)),"lab_into_oklch");var I5=o(t=>{let r=D(t),e=ro(r);return eo(e)},"lch_into_oklc\
h");var T5=o(t=>{let r=et(t);return K(r)},"prophoto_rgb_into_okl\
ch");var W5=o(t=>{let r=q(t);return K(r)},"rec2020_into_oklch");var N5=o(t=>{let r=j(t);return K(r)},"srgb_into_oklch"),H5=o(
t=>{let r=Q(t);return K(r)},"srgb_linear_into_oklch");var ur=u(1.3457868816471583,-.5446307051249019,0,-.25557208737979464,
1.5082477428451468,0,-.05110186497554526,.02052744743642139,
1.2119675456389452),sg=o(t=>{if(f(t)&&t.colorspace==="xyz-d6\
5"){let[r,e,i]=t.position,[a,n,p]=x(r,e,i).multiply($).multiply(
ur).each((m,l,s)=>s[l]=zo(m)*100);return _(bo,[a,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_prophoto_rgb"),
A=o(t=>{if(f(t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.position,
[a,n,p]=x(r,e,i).multiply(ur).each((m,l,s)=>s[l]=zo(m)*100);
return _(bo,[a,n,p])}else throw new Error("Wrong parameter p\
assed: "+t)},"xyz_d50_into_prophoto_rgb");var dg=o(t=>A(ir(t)),"a98_rgb_into_prophoto_rgb");var zg=o(t=>A(or(t)),"display_p3_into_prophoto_rgb");var zr=o(t=>I(D(t)),"lch_into_xyz_d50"),Mg=o(t=>Yt(D(t)),"lc\
h_into_xyz_d65");var Hg=o(t=>A(dr(t)),"hsl_into_prophoto_rgb");var qg=o(t=>A(hr(t)),"hwb_into_prophoto_rgb");var tu=o(t=>A(I(t)),"lab_into_prophoto_rgb");var nu=o(t=>A(zr(t)),"lch_into_prophoto_rgb");var lu=o(t=>A($t(t)),"oklab_into_prophoto_rgb");var bu=o(t=>A(cr(t)),"oklch_into_prophoto_rgb");var uu=o(t=>A(sr(t)),"rec2020_into_prophoto_rgb");var vu=o(t=>A(Ot(t)),"srgb_into_prophoto_rgb"),Mu=o(t=>A(fr(
t)),"srgb_linear_into_prophoto_rgb");var Sr=u(30757411/17917100,-19765991/29648200,792561/44930125,
-6372589/17917100,47925759/29648200,-1921689/44930125,-4539589/
17917100,467509/29648200,42328811/44930125),R=o(t=>{if(f(t)&&
t.colorspace==="xyz-d65"){let[r,e,i]=t.position,[a,n,p]=x(r,
e,i).multiply(Sr).each((m,l,s)=>s[l]=Po(m)*100);return _(ho,
[a,n,p])}else throw new Error("Wrong parameter passed: "+t)},
"xyz_d65_into_rec2020"),io=o(t=>{if(f(t)&&t.colorspace==="xy\
z-d50"){let[r,e,i]=t.position,[a,n,p]=x(r,e,i).multiply(O).multiply(
Sr).each((m,l,s)=>s[l]=Po(m)*100);return _(ho,[a,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_rec2020");var Uu=o(t=>R(F(t)),"a98_rgb_into_rec2020");var r1=o(t=>R(V(t)),"display_p3_into_rec2020");var p1=o(t=>R(pt(t)),"hsl_into_rec2020");var f1=o(t=>R(_t(t)),"hwb_into_rec2020");var h1=o(t=>io(I(t)),"lab_into_rec2020");var P1=o(t=>io(I(D(t))),"lch_into_rec2020");var I1=o(t=>R(z(t)),"oklab_into_rec2020");var j1=o(t=>R(z(J(t))),"oklch_into_rec2020");var B1=o(t=>R(et(t)),"prophoto_rgb_into_rec2020");var H1=o(t=>R(j(t)),"srgb_into_rec2020"),G1=o(t=>R(Q(t)),"sr\
gb_linear_into_rec2020");export{Xt as A98RGBSpace,xo as DisplayP3Space,w as HSLSpace,
v as HWBSpace,Et as LABSpace,Eo as LCHSpace,bo as ProPhotoRGBSpace,
Lo as RGBModel,ho as Rec2020Space,E as XYZD50Space,Z as XYZD65Space,
Xl as a98_rgb_into_display_p3,mf as a98_rgb_into_hsl,$c as a98_rgb_into_hwb,
Rx as a98_rgb_into_lab,id as a98_rgb_into_lch,Wh as a98_rgb_into_oklab,
Jy as a98_rgb_into_oklch,dg as a98_rgb_into_prophoto_rgb,Uu as a98_rgb_into_rec2020,
Dt as a98_rgb_into_rgb,Dt as a98_rgb_into_srgb,Ja as a98_rgb_into_srgb_linear,
F as a98_rgb_into_xyz,ir as a98_rgb_into_xyz_d50,F as a98_rgb_into_xyz_d65,
Aa as display_p3_into_a98_rgb,df as display_p3_into_hsl,Qc as display_p3_into_hwb,
$x as display_p3_into_lab,sd as display_p3_into_lch,Nh as display_p3_into_oklab,
e5 as display_p3_into_oklch,zg as display_p3_into_prophoto_rgb,
r1 as display_p3_into_rec2020,Nt as display_p3_into_rgb,Nt as display_p3_into_srgb,
ep as display_p3_into_srgb_linear,V as display_p3_into_xyz,or as display_p3_into_xyz_d50,
V as display_p3_into_xyz_d65,Sm as hsl_into_a98_rgb,$l as hsl_into_display_p3,
a0 as hsl_into_hwb,Jx as hsl_into_lab,yd as hsl_into_lch,Fh as hsl_into_oklab,
_5 as hsl_into_oklch,Hg as hsl_into_prophoto_rgb,p1 as hsl_into_rec2020,
fp as hsl_into_rgb,nr as hsl_into_srgb,cp as hsl_into_srgb_linear,
pt as hsl_into_xyz,dr as hsl_into_xyz_d50,pt as hsl_into_xyz_d65,
Ym as hwb_into_a98_rgb,es as hwb_into_display_p3,Pf as hwb_into_hsl,
ib as hwb_into_lab,vd as hwb_into_lch,Qh as hwb_into_oklab,c5 as hwb_into_oklch,
qg as hwb_into_prophoto_rgb,f1 as hwb_into_rec2020,Pp as hwb_into_rgb,
Pp as hwb_into_srgb,wp as hwb_into_srgb_linear,_t as hwb_into_xyz,
hr as hwb_into_xyz_d50,_t as hwb_into_xyz_d65,_ as initPointInSpace,
f as isPointInSpace,jm as lab_into_a98_rgb,_s as lab_into_display_p3,
Cf as lab_into_hsl,c0 as lab_into_hwb,Y as lab_into_lch,ro as lab_into_oklab,
S5 as lab_into_oklch,tu as lab_into_prophoto_rgb,h1 as lab_into_rec2020,
Ht as lab_into_rgb,Ht as lab_into_srgb,Zp as lab_into_srgb_linear,
Yt as lab_into_xyz,I as lab_into_xyz_d50,Yt as lab_into_xyz_d65,
Rm as lch_into_a98_rgb,xs as lch_into_display_p3,Ef as lch_into_hsl,
u0 as lch_into_hwb,D as lch_into_lab,sy as lch_into_oklab,I5 as lch_into_oklch,
nu as lch_into_prophoto_rgb,P1 as lch_into_rec2020,Gt as lch_into_rgb,
Gt as lch_into_srgb,$p as lch_into_srgb_linear,Mg as lch_into_xyz,
zr as lch_into_xyz_d50,Mg as lch_into_xyz_d65,Tt as okLABSpace,
jt as okLCHSpace,Gm as oklab_into_a98_rgb,gs as oklab_into_display_p3,
Hf as oklab_into_hsl,k0 as oklab_into_hwb,lb as oklab_into_lab,
Od as oklab_into_lch,eo as oklab_into_oklch,lu as oklab_into_prophoto_rgb,
I1 as oklab_into_rec2020,Vt as oklab_into_rgb,Vt as oklab_into_srgb,
a_ as oklab_into_srgb_linear,z as oklab_into_xyz,$t as oklab_into_xyz_d50,
z as oklab_into_xyz_d65,tl as oklch_into_a98_rgb,vs as oklch_into_display_p3,
Uf as oklch_into_hsl,j0 as oklch_into_hwb,hb as oklch_into_lab,
Rd as oklch_into_lch,J as oklch_into_oklab,bu as oklch_into_prophoto_rgb,
j1 as oklch_into_rec2020,Ft as oklch_into_rgb,Ft as oklch_into_srgb,
d_ as oklch_into_srgb_linear,xr as oklch_into_xyz,cr as oklch_into_xyz_d50,
xr as oklch_into_xyz_d65,nl as prophoto_rgb_into_a98_rgb,Cs as prophoto_rgb_into_display_p3,
ic as prophoto_rgb_into_hsl,L0 as prophoto_rgb_into_hwb,Sb as prophoto_rgb_into_lab,
$d as prophoto_rgb_into_lch,dy as prophoto_rgb_into_oklab,T5 as prophoto_rgb_into_oklch,
B1 as prophoto_rgb_into_rec2020,qt as prophoto_rgb_into_rgb,
qt as prophoto_rgb_into_srgb,A_ as prophoto_rgb_into_srgb_linear,
et as prophoto_rgb_into_xyz,Zt as prophoto_rgb_into_xyz_d50,
et as prophoto_rgb_into_xyz_d65,ll as rec2020_into_a98_rgb,Xs as rec2020_into_display_p3,
sc as rec2020_into_hsl,F0 as rec2020_into_hwb,Ib as rec2020_into_lab,
Qd as rec2020_into_lch,zy as rec2020_into_oklab,W5 as rec2020_into_oklch,
uu as rec2020_into_prophoto_rgb,Ut as rec2020_into_rgb,Ut as rec2020_into_srgb,
$_ as rec2020_into_srgb_linear,q as rec2020_into_xyz,sr as rec2020_into_xyz_d50,
q as rec2020_into_xyz_d65,Qt as rgb_into_a98_rgb,Rs as rgb_into_display_p3,
yc as rgb_into_hsl,ox as rgb_into_hwb,jb as rgb_into_lab,ah as rgb_into_lch,
My as rgb_into_oklab,N5 as rgb_into_oklch,vu as rgb_into_prophoto_rgb,
H1 as rgb_into_rec2020,j as rgb_into_xyz,Ot as rgb_into_xyz_d50,
j as rgb_into_xyz_d65,wt as sRGBLinearSpace,H as sRGBSpace,Qt as srgb_into_a98_rgb,
Rs as srgb_into_display_p3,yc as srgb_into_hsl,ox as srgb_into_hwb,
jb as srgb_into_lab,ah as srgb_into_lch,My as srgb_into_oklab,
N5 as srgb_into_oklch,vu as srgb_into_prophoto_rgb,H1 as srgb_into_rec2020,
j as srgb_into_xyz,Ot as srgb_into_xyz_d50,j as srgb_into_xyz_d65,
hm as srgb_linear_into_a98_rgb,Ls as srgb_linear_into_display_p3,
gc as srgb_linear_into_hsl,rx as srgb_linear_into_hwb,Xb as srgb_linear_into_lab,
ph as srgb_linear_into_lch,ky as srgb_linear_into_oklab,H5 as srgb_linear_into_oklch,
Mu as srgb_linear_into_prophoto_rgb,G1 as srgb_linear_into_rec2020,
Q as srgb_linear_into_xyz,fr as srgb_linear_into_xyz_d50,Q as srgb_linear_into_xyz_d65,
Ma as xyz_d50_into_a98_rgb,to as xyz_d50_into_display_p3,Mc as xyz_d50_into_hsl,
mx as xyz_d50_into_hwb,b as xyz_d50_into_lab,fh as xyz_d50_into_lch,
Th as xyz_d50_into_oklab,Vy as xyz_d50_into_oklch,A as xyz_d50_into_prophoto_rgb,
io as xyz_d50_into_rec2020,zt as xyz_d50_into_rgb,zt as xyz_d50_into_srgb,
Lt as xyz_d50_into_srgb_linear,oo as xyz_d50_into_xyz_d65,W as xyz_d65_into_a98_rgb,
B as xyz_d65_into_display_p3,kc as xyz_d65_into_hsl,lx as xyz_d65_into_hwb,
gr as xyz_d65_into_lab,ch as xyz_d65_into_lch,T as xyz_d65_into_oklab,
K as xyz_d65_into_oklch,sg as xyz_d65_into_prophoto_rgb,R as xyz_d65_into_rec2020,
L as xyz_d65_into_rgb,L as xyz_d65_into_srgb,at as xyz_d65_into_srgb_linear,
y as xyz_d65_into_xyz_d50,W as xyz_into_a98_rgb,B as xyz_into_display_p3,
kc as xyz_into_hsl,lx as xyz_into_hwb,gr as xyz_into_lab,ch as xyz_into_lch,
T as xyz_into_oklab,K as xyz_into_oklch,sg as xyz_into_prophoto_rgb,
R as xyz_into_rec2020,L as xyz_into_rgb,L as xyz_into_srgb,at as xyz_into_srgb_linear};
