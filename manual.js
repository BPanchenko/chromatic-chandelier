var vr=Object.defineProperty;var o=(t,r)=>vr(t,"name",{value:r,configurable:!0});var Mr=Object.defineProperty,vt=o((t,r)=>Mr(t,"name",{value:r,
configurable:!0}),"n"),kr=vt(t=>t!==null&&typeof t=="object"&&
Array.isArray(t)===!1,"isObject"),Cr=vt(t=>kr(t)&&"ident"in t&&
"short"in t&&"domain"in t,"isSpaceDimension");function P(t,r,e){
let i=Iterator.from(e===void 0?[t,r]:[t,r,e]),a=e===void 0?2:
3;for(let _ of i.take(a))if(Cr(_)===!1)throw new TypeError("\
Passed wrong space dimension: "+JSON.stringify(_,void 0,2));
let n=i.take(a).filter(_=>_.tgeom==="azimuth"||_.tgeom==="re\
ference-ray").toArray().length===2?a===3?"cilinder":"circle":
a===3?"cube":"plane",p=Object.create(null,{0:{enumerable:!0,
value:t},1:{enumerable:!0,value:r},length:{enumerable:!0,value:a},
tgeom:{enumerable:!0,value:n},entries:{value:vt(function*(){
yield[0,this[0]],yield[1,this[1]],this.length===3&&(yield[2,
this[2]])},"value")},toArray:{value:vt(function(){return Array.
of(...this)},"value")},[Symbol.iterator]:{value:vt(function*(){
yield this[0],yield this[1],this.length===3&&(yield this[2])},
"value")}});return a===3&&Object.defineProperty(p,2,{enumerable:!0,
value:e}),_=>_===void 0?p:Object.defineProperties(p,_)}o(P,"\
O");vt(P,"createCoordinateSystem");var Ir=Object.defineProperty,ft=o((t,r)=>Ir(t,"name",{value:r,
configurable:!0}),"n"),no=ft(t=>typeof t=="number","isNumber"),
Yr=ft(t=>t!==null&&typeof t=="object"&&Array.isArray(t)===!1,
"isObject"),ae=ft(t=>Yr(t)&&Symbol.iterator in t&&"minimum"in
t&&no(t.minimum)&&"maximum"in t&&no(t.maximum)&&"value"in t&&
no(t.value)&&t.value>0,"isRange");function h(...t){let r=t.length===
1?Array.of(0,t[0]):Array.of(Math.min(...t),Math.max(...t)),[
e,i]=r,a=i-e,n=e+a/2;return Object.create(null,{from:{value:e},
to:{value:i},minimum:{enumerable:!0,value:e},maximum:{enumerable:!0,
value:i},avg:{enumerable:!0,value:n},value:{enumerable:!0,value:a},
allot:{value:Mo},clamp:{value:ko},test:{value:ft(p=>e<=p&&p<=
i,"value")},toString:{value:ft(()=>String.raw`{x ∈ R; ${e} ⋜ x ⋜ ${i}}`,
"value")},[Symbol.iterator]:{value:ft(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}o(h,"v");ft(
h,"createRange");function Mo(t){return this.test(t)?t:t>this.
from?(t-this.to)%this.value+this.from:this.to-(this.from-t)%
this.value}o(Mo,"p");ft(Mo,"allocateOuterValue");function ko(t){
return this.test(t)?t:Math.max(Math.min(t,this.to),this.from)}
o(ko,"h");ft(ko,"restrictOuterValue");var Ar=Object.defineProperty,Tr=o((t,r)=>Ar(t,"name",{value:r,
configurable:!0}),"n");var Or=Tr((t,r=6)=>{let e=10**r;return Math.sign(t)*Math.round(
(Math.abs(t)+Number.EPSILON)*e)/e},"round"),S=Or;var Lr=Object.defineProperty,dt=o((t,r)=>Lr(t,"name",{value:r,
configurable:!0}),"r");function ao(...t){let r=t.length===1?
Array.of(0,t[0]):Array.of(Math.min(...t),Math.max(...t)),[e,
i]=r,a=i-e,n=e+a/2;return Object.create(null,{from:{value:e},
to:{value:i},minimum:{enumerable:!0,value:e},maximum:{enumerable:!0,
value:i},avg:{enumerable:!0,value:n},value:{enumerable:!0,value:a},
allot:{value:Co},clamp:{value:Io},test:{value:dt(p=>e<=p&&p<=
i,"value")},toString:{value:dt(()=>String.raw`{x ∈ R; ${e} ⋜ x ⋜ ${i}}`,
"value")},[Symbol.iterator]:{value:dt(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}o(ao,"l");dt(
ao,"createRange");function Co(t){return this.test(t)?t:t>this.
from?(t-this.to)%this.value+this.from:this.to-(this.from-t)%
this.value}o(Co,"f");dt(Co,"allocateOuterValue");function Io(t){
return this.test(t)?t:Math.max(Math.min(t,this.to),this.from)}
o(Io,"S");dt(Io,"restrictOuterValue");function po(t=[0,100],r=[
0,1]){let[e,i]=r,[a,n]=t,[p,_]=[i-e,n-a];function l(f){return typeof f==
"string"&&(f=parseFloat(f)),s.domain.test(f)===!1&&(f=f>i?(f-
i)%p+e:i-(e-f)%p),_*(f-e)/p+a}o(l,"p"),dt(l,"invert");function s(f){
return typeof f=="string"&&(f=parseFloat(f)),s.range.test(f)===
!1&&(f=f>n?(f-n)%_+a:n-(a-f)%_),p*(f-a)/_+e}return o(s,"c"),
dt(s,"calculator"),Object.defineProperties(s,{domain:{enumerable:!0,
value:ao(e,i)},range:{enumerable:!0,value:ao(a,n)},invert:{enumerable:!0,
value:l}})}o(po,"A");dt(po,"initScale");var mo=po([0,360],[-Math.PI,Math.PI]),Mt=Object.freeze({bytes:8,
domain:mo.domain,ident:"angle",input:o(t=>mo.domain.allot(t*
Math.PI/180),"input"),output:o(t=>S(mo.range.allot(t*180/Math.
PI),1),"output"),short:"phi",tcoord:"polar",tgeom:"azimuth"});var xt=Object.freeze({$coord:Mt,bytes:4,description:"Hue ang\
le is a numerical representation of a color's hue, typically\
 measured as an angle in a color space.",domain:h(0,360),ident:"\
hue",input:o(t=>{let[r,e]=Br(t),i=e==="grad"?180/200:e==="ra\
d"?180/Math.PI:e==="turn"?360:1;return xt.domain.allot(r*i)},
"input"),output:o(t=>Number.isNaN(t)?Number.NaN:Math.abs(t)<
.01?0:S(t,2),"output"),short:"h"});function Br(t){let r=NaN,e="deg";if(typeof t=="number")r=t;else{
let p=String.raw`deg|grad|rad|turn`,_=new RegExp(`^(-?[d.]+)\
(${p})?$`,"i");if(_.test(t)){let l=_.exec(t)?.slice(1)??["0",
"deg"];r=parseFloat(l[0]),e=l[1]}else if(t==="none")r=NaN;else
throw new TypeError("Expected a valid <angle> string")}let[i,
a]=e==="grad"?[0,400]:e==="deg"?[0,360]:e==="rad"?[-Math.PI,
Math.PI]:[0,1],n=h(i,a);return n.test(r)===!1&&(r=n.allot(r)),
[r,e]}o(Br,"parseCSSAngle");var mt=Object.freeze({bytes:8,domain:h(0,1),ident:"applicate",
short:"z",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var lt=Object.freeze({$coord:mt,bytes:4,description:"Lightne\
ss is a visual perception of the luminance of an object. In \
some color ordering systems Lightness is referenced as value\
.",domain:h(0,100),ident:"lightness",input:o(t=>t/100,"input"),
output:o(t=>S(t*100,2),"output"),short:"L"});var _t=Object.freeze({bytes:8,domain:h(0,1),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var Yo=Object.freeze({$coord:_t,bytes:4,description:"Chroma:\
 the quality of a color's purity, intensity or saturation.",
domain:h(0,100),ident:"saturation",input:o(t=>t/100,"input"),
output:o(t=>S(t*100,2),"output"),short:"S"});var Ze=P(_t,Mt)({adapt:{enumerable:!0,value:_o}});function _o(t=0,r=NaN){return[t*Math.cos(r),t*Math.sin(r)]}o(
_o,"calcCartesianCoordinates");var gt=P(_t,Mt,mt)({adapt:{value:Er}});function Er(t,r,e){return[..._o(t,r),e]}o(Er,"calcCubeCoordi\
nates");var bt=Float64Array.of(.9504559270516716,1,1.0890577507598784);
Object.freeze(bt.buffer);var w={CAM:P(xt,Yo,lt)(),CSYS:gt,ident:"hsl",whitepoint:bt};var Ao=Object.freeze({$coord:mt,bytes:4,description:"Blackne\
ss is the property or quality of being black in colour.",domain:h(
0,100),ident:"blackness",input:o(t=>t/100,"input"),output:o(
t=>S(t*100,2),"output"),short:"B"});var To=Object.freeze({$coord:_t,bytes:4,description:"Whitene\
ss is determined by how much light a surface reflects across\
 the visible spectrum.",domain:h(0,100),ident:"whiteness",input:o(
t=>t/100,"input"),output:o(t=>S(t*100,2),"output"),short:"W"});var v={description:"HWB (Hue, Whiteness, Blackness) is a cyl\
indrical-coordinate representation of points in an RGB color\
 model, similar to HSL and HSV.",CAM:P(xt,To,Ao)(),CSYS:gt,ident:"\
hwb",whitepoint:bt};var ht=Object.freeze({bytes:8,domain:h(-1,1),ident:"abscissa",
short:"x",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var lo=Object.freeze({$coord:ht,bytes:2,description:"Compone\
nt defines how green (moving towards -125) or red (moving to\
wards +125) the color is.",domain:h(-125,125),ident:"green-r\
ed",input:o(t=>t/125,"input"),output:o(t=>S(t*125,1),"output"),
short:"a"}),Oo=Object.freeze({...lo,bytes:8,domain:h(-.4,.4),
input:o(t=>t,"input"),output:o(t=>t,"output")});var yt=Object.freeze({bytes:8,domain:h(-1,1),ident:"ordinate",
short:"y",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var so=Object.freeze({$coord:yt,bytes:2,description:"Compone\
nt defines how blue (moving towards -125) or yellow (moving \
towards +125) the color is.",domain:h(-125,125),ident:"blue-\
yellow",input:o(t=>t/125,"input"),output:o(t=>S(t*125,1),"ou\
tput"),short:"b"}),Lo=Object.freeze({...so,bytes:8,domain:h(
-.4,.4),input:o(t=>t,"input"),output:o(t=>t,"output")});var ji=P(ht,yt)({adapt:{value:co}});function co(t,r){let e=0,i=NaN;return(t!==0||r!==0)&&(e=Math.
sqrt(t**2+r**2),t!==0&&!r||r!==0&&!t?i=r/Math.abs(r)*(Math.PI/
2):i=Math.atan(r/t)),[e,i]}o(co,"calcPolarCoordinates");var ut=P(ht,yt,mt)({adapt:{value:jr}});function jr(t,r,e){return[...co(t,r),e]}o(jr,"calcCylindrica\
lCoordinates");var T=Float64Array.of(.9642956764295677,1,.8251046025104602);
Object.freeze(T.buffer);var jt=Object.freeze({CAM:P(lt,lo,so)(),CSYS:ut,description:"\
CIE 1976 L*a*b* or CIELAB. Cylindrical with the lightness va\
lue as the vertical axis of rotation.",ident:"lab",whitepoint:T});var Bo=Object.freeze({$coord:_t,ident:"chroma",short:"C",domain:h(
0,150),input:o(t=>t/150,"input"),output:o(t=>S(t*150,1),"out\
put"),bytes:2,description:"Chroma: the quality of a color's \
purity, intensity or saturation."}),Eo=Object.freeze({$coord:_t,
ident:"chroma",short:"c",domain:h(0,.4),output:o(t=>S(t,5),"\
output"),bytes:4,description:"Chroma: the quality of a color\
's purity, intensity or saturation."});var jo={CAM:P(lt,Bo,xt)(),CSYS:gt,description:"CIE-based LCh\
 color spaces are transformations of the two chroma values (\
ab or uv) into the polar coordinate.",ident:"lch",whitepoint:T};var Ot=Object.freeze({CAM:P(lt,Oo,Lo)(),CSYS:ut,ident:"oklab",
whitepoint:T});var Lt={CAM:P(lt,Eo,xt)(),CSYS:gt,ident:"oklch",whitepoint:T};var Xo=Object.freeze({$coord:mt,bytes:4,domain:h(0,100),ident:"\
blue",input:o(t=>t/100,"input"),output:o(t=>S(t*100,2),"outp\
ut"),short:"b",description:"Blue Light Intensity"}),fo=Object.
freeze({$coord:mt,bytes:1,domain:h(0,255),ident:"blue",input:o(
t=>t/255,"input"),output:o(t=>fo.domain.clamp(Math.round(t*255)),
"output"),short:"B",description:"Blue Light Intensity"});var Zo=Object.freeze({$coord:yt,bytes:4,domain:h(0,100),ident:"\
green",input:o(t=>t/100,"input"),output:o(t=>S(t*100,2),"out\
put"),short:"g",description:"Green Light Intensity"}),xo=Object.
freeze({$coord:yt,bytes:1,domain:h(0,255),ident:"green",input:o(
t=>t/255,"input"),output:o(t=>xo.domain.clamp(Math.round(t*255)),
"output"),short:"G",description:"Green Light Intensity"});var Ro=Object.freeze({$coord:ht,bytes:4,domain:h(0,100),ident:"\
green",input:o(t=>t/100,"input"),output:o(t=>S(t*100,2),"out\
put"),short:"r",description:"Red Light Intensity"}),bo=Object.
freeze({$coord:ht,bytes:1,domain:h(0,255),ident:"red",input:o(
t=>t/255,"input"),output:o(t=>bo.domain.clamp(Math.round(t*255)),
"output"),short:"R",description:"Red Light Intensity"});var kt=P(Ro,Zo,Xo)(),Pt=ut,Ct=bt,G=Object.freeze({ident:"srg\
b",CAM:kt,CSYS:Pt,whitepoint:Ct,copyright:"Copyright 2007 In\
ternational Color Consortium",description:"sRGB v4 ICC prefe\
rence perceptual intent beta"}),wt=Object.freeze({ident:"srg\
b-linear",CAM:kt,CSYS:Pt,whitepoint:Ct}),Bt=Object.freeze({ident:"\
a98-rgb",CAM:kt,CSYS:Pt,whitepoint:Ct,description:"Adobe\xAE 19\
98 RGB"}),ho=Object.freeze({ident:"display-p3",CAM:kt,CSYS:Pt,
whitepoint:Ct,copyright:"Copyright Apple Inc., 2022",description:"\
Display P3"}),yo=Object.freeze({ident:"prophoto-rgb",CAM:kt,
CSYS:Pt,whitepoint:T,description:"ProPhoto RGB"}),go=Object.
freeze({ident:"rec2020",CAM:kt,CSYS:Pt,whitepoint:Ct,description:"\
Rec. 2020 or BT.2020"}),Wo=Object.freeze({ident:"rgb",CAM:P(
bo,xo,fo)(),CSYS:Pt,whitepoint:Ct});var No=ut,j=Object.freeze({ident:"xyz-d65",alias:"xyz",description:"\
XYZ D65 or simply XYZ",CSYS:No,whitepoint:bt}),X=Object.freeze(
{ident:"xyz-d50",CSYS:No,whitepoint:T});var Xr=Object.defineProperty,Q=o((t,r)=>Xr(t,"name",{value:r,
configurable:!0}),"t"),Zr=Q(t=>t!==null&&typeof t=="object"&&
Array.isArray(t)===!1,"isObject"),ia=Q(t=>Zr(t)&&Symbol.iterator in
t&&typeof t[Symbol.iterator]=="function"&&"length"in t&&typeof t.
length=="number"&&t.length>=9,"isMatrix");function u(...t){let r=Math.
max(t.length,9),e=new ArrayBuffer(r*8),i=new Float64Array(e,
0,r),a=Object.create(null,{[Symbol.iterator]:{value:Q(function*(){
for(let n=0;n<i.length;n++)yield this[n]},"value")},[Symbol.
isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{value:Q(
()=>"Matrix"+i.toString(),"value")},length:{enumerable:!0,value:r},
toArray:{value:Q(()=>Iterator.from(i).toArray(),"value")},toString:{
value:i.toString}});for(let n=0;n<r;n++)(function(p,_,l){Object.
defineProperty(p,_,{enumerable:!0,get:Q(()=>l[_],"get"),set:Q(
s=>{if(typeof s=="number")l[_]=s;else throw new TypeError("E\
xpected Number")},"set")})})(a,n,i);return Object.defineProperties(
a,{clone:{value:Q(()=>u(...i),"value")},each:{value:Q(function(n){
return i.forEach((p,_,l)=>n(p,_,this)),this},"value")},determinant:{
value:Q(()=>{let[n,p,_,l,s,f,Y,g,E]=i,rt=E*s-f*g,et=-E*l+f*Y,
K=g*l-s*Y;return n*rt+p*et+_*K},"value")},invert:{value:Q(function(){
let n=this.determinant();if(n===0)throw console.table(this),
new Error("A singular or non-square matrix matrix cannot be \
inverted.");let[p,_,l,s,f,Y,g,E,rt]=i,et=rt*f-Y*E,K=-rt*s+Y*
g,wr=E*s-f*g;return this.update(et/n,(-rt*_+l*E)/n,(Y*_-l*f)/
n,K/n,(rt*p-l*g)/n,(-Y*p+l*s)/n,wr/n,(-E*p+_*g)/n,(f*p-_*s)/
n)},"value")},update:{value:Q(function(){return i.set(Iterator.
from(arguments).map(n=>typeof n=="number"?n:0).toArray()),this},
"value")}}),a.update(...t)}o(u,"D");Q(u,"createMatrix");var Rr=Object.defineProperty,b=o((t,r)=>Rr(t,"name",{value:r,
configurable:!0}),"t"),Wr=new Set(["a98-rgb","display-p3","h\
sl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec202\
0","rec2100-pq","rec2100-hlg","rec2100-linear","srgb-linear",
"srgb","rgb","xyz","xyz-d50","xyz-d65"]),Nr=b(t=>Hr(t)&&Wr.has(
t),"isSpaceID"),Dr=b(t=>Zt(t)&&"ident"in t&&Nr(t.ident)&&"CS\
YS"in t&&Zt(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===3,"i\
sColorSpace"),Xt=b(t=>Zt(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function","isIterableObject"),Gr=b(t=>typeof t==
"number","isNumber"),Zt=b(t=>t!==null&&typeof t=="object"&&Array.
isArray(t)===!1,"isObject"),Hr=b(t=>typeof t=="string","isSt\
ring"),$r=b(t=>Xt(t)&&"space"in t&&Dr(t.space)&&"length"in t&&
t.length===3&&Iterator.from(t).every(r=>typeof r=="number"),
"isPointInSpace"),Vr=b(t=>Zt(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function"&&"length"in t&&typeof t.length=="numbe\
r"&&t.length>=9,"isMatrix"),Fr=b((t,r=6)=>{let e=10**r;return Math.
sign(t)*Math.round((Math.abs(t)+Number.EPSILON)*e)/e},"round"),
qr=b(t=>Xt(t)&&"length"in t&&t.length===3&&Iterator.from(t).
every(r=>typeof r=="number")&&"magnitude"in t&&Gr(t.magnitude)&&
"base"in t&&Xt(t.base)&&"head"in t&&Xt(t.head),"isVector");function d(t,r=0,e=0){
let i=$r(t)?new Float64Array(t.buffer):Float64Array.of(t,r,e),
a=Object.create(null,{base:{get:b(()=>Iterator.from([0,0,0]),
"get")},head:{enumerable:!0,get:b(()=>Iterator.from(i),"get")},
magnitude:{enumerable:!0,get:b(()=>Fr(Math.hypot(...i),9),"g\
et")},sqrMagnitude:{get:b(()=>i.reduce((n,p)=>n+p**2,0),"get")}});
return Object.defineProperties(a,{clone:{value:b(()=>d(i[0],
i[1],i[2]),"value")},angle:{value:Do},cross:{value:Go},distance:{
value:Ho},dot:{value:$o},each:{value:Vo},equals:{value:Fo},multiply:{
value:Ko},normalize:{value:Uo},randomly:{value:Jo},strictEquals:{
value:qo},update:{value:b(function(n,p,_){let l=Array.isArray(
n)?n.slice(3):Array.of(n,p,_);return i.set(this.head.map((s,f)=>l[f]??
s).toArray()),this},"value")},zeroize:{value:Qo}}),Object.defineProperties(
a,{[Symbol.toStringTag]:{get(){return`Vector[${this.toString()}\
]`}},entries:{value:b(function(){return this.values().map((n,p)=>Object.
seal(Array.of(p,n)))},"value")},toArray:{value:b(function(){
return Object.seal(Array.of(this[0],this[1],this[2]))},"valu\
e")},toString:{value:b(()=>i.toString(),"value")},values:{value:b(
function(){return Iterator.from(this.toArray())},"value")}}),
Object.defineProperties(a,{[Symbol.isConcatSpreadable]:{value:!0},
[Symbol.iterator]:{value:b(function*(){yield this[0],yield this[1],
yield this[2]},"value")},0:{enumerable:!0,get:b(()=>i[0],"ge\
t"),set:b(n=>{if(typeof n=="number")i[0]=n;else throw new TypeError(
"Expected Number")},"set")},1:{enumerable:!0,get:b(()=>i[1],
"get"),set:b(n=>{if(typeof n=="number")i[1]=n;else throw new TypeError(
"Expected Number")},"set")},2:{enumerable:!0,get:b(()=>i[2],
"get"),set:b(n=>{if(typeof n=="number")i[2]=n;else throw new TypeError(
"Expected Number")},"set")},length:{enumerable:!0,value:3}}),
a}o(d,"A");b(d,"createVector");function Do(t,r=!1){let e=Math.
sqrt(this.sqrMagnitude*t.sqrMagnitude),i=e&&this.dot(t)/e,a=Math.
acos(Math.min(Math.max(i,-1),1));return r?a*180/Math.PI:a}o(
Do,"P");b(Do,"angle");function Go(t){let[r,e,i]=this.head,[a,
n,p]=t,_=e*p-i*n,l=i*a-r*p,s=r*n-e*a;return this.update(_,l,
s)}o(Go,"D");b(Go,"cross");function Ho(t){return Math.sqrt(this.
head.reduce((r,e,i)=>r+Math.pow(t[i]-e,2),0))}o(Ho,"O");b(Ho,
"distance");function $o(t){let[r,e,i]=this.head,[a,n,p]=t;return r*
a+e*n+i*p}o($o,"j");b($o,"dot");function Vo(t){for(let r=0;r<
3;r++)t(this[r],r,this);return this}o(Vo,"R");b(Vo,"each");function Fo(t,r=1e-5){
let[e,i,a]=this.head,[n,p,_]=t;return Math.abs(e-n)<=r*Math.
max(1,Math.abs(e),Math.abs(n))&&Math.abs(i-p)<=r*Math.max(1,
Math.abs(i),Math.abs(p))&&Math.abs(a-_)<=r*Math.max(1,Math.abs(
a),Math.abs(_))}o(Fo,"k");b(Fo,"equals");function qo(t){let[
r,e,i]=this.head,[a,n,p]=t;return r===a&&e===n&&i===p}o(qo,"\
C");b(qo,"strictEquals");function Ko(t){let[r,e,i]=this.head;
if(Vr(t)||qr(t)){let[a,n,p,_=0,l=0,s=0,f=0,Y=0,g=0]=t;return this.
update(r*a+e*_+i*f,r*n+e*l+i*Y,r*p+e*s+i*g)}else throw new TypeError(
"Unsupported Multiplicator: "+t)}o(Ko,"T");b(Ko,"multiply");
function Uo(){let t=1/this.magnitude;return this.each((r,e,i)=>i[e]=
r*t)}o(Uo,"z");b(Uo,"normalize");function Jo(t=1){let r=Math.
random()*2*Math.PI,e=Math.random()*2-1,i=Math.sqrt(1-Math.pow(
e,2))*t;return this.update(Math.cos(r)*i,Math.sin(r)*i,e*t)}
o(Jo,"E");b(Jo,"randomly");function Qo(){return this.update(
0,0,0)}o(Qo,"N");b(Qo,"zeroize");var Kr=Object.defineProperty,tt=o((t,r)=>Kr(t,"name",{value:r,
configurable:!0}),"t"),Ur=new Set(["a98-rgb","display-p3","h\
sl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec202\
0","rec2100-pq","rec2100-hlg","rec2100-linear","srgb-linear",
"srgb","rgb","xyz","xyz-d50","xyz-d65"]),Jr=tt(t=>oe(t)&&Ur.
has(t),"isSpaceID"),tr=tt(t=>uo(t)&&"ident"in t&&Jr(t.ident)&&
"CSYS"in t&&uo(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===3,
"isColorSpace"),Qr=tt(t=>uo(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function","isIterableObject"),te=tt(t=>typeof t==
"number","isNumber"),uo=tt(t=>t!==null&&typeof t=="object"&&
Array.isArray(t)===!1,"isObject"),oe=tt(t=>typeof t=="string",
"isString"),c=tt(t=>Qr(t)&&"space"in t&&tr(t.space)&&"length"in
t&&t.length===3&&Iterator.from(t).every(r=>typeof r=="number"),
"isPointInSpace");function m(t,r){if(tr(t)===!1)throw new TypeError(
"Point must be declared in a valid color space instead of "+
JSON.stringify(t,void 0,2));if((r instanceof ArrayBuffer||Array.
isArray(r)&&r.length===3&&r.every(p=>te(p)))===!1)throw new TypeError(
"Point in space has valid coordinates. Wrong parameters: "+JSON.
stringify(r,void 0,2));let e=t.CSYS.length,i=r instanceof ArrayBuffer?
new Float64Array(r):new Float64Array(e),a=t.CAM===void 0?Array.
of(0,1,2):t.CAM.toArray().map(p=>t.CSYS.toArray().findIndex(
_=>p.$coord===_)),n=Object.create(null,{buffer:{value:i.buffer},
colorspace:{enumerable:!0,value:t.ident},length:{value:e},space:{
value:t}});return Object.defineProperties(n,{equals:{value:tt(
function(p,_=1e-5){let[l,s,f]=this.position,[Y,g,E]=p.position;
return this.colorspace===p.colorspace&&Math.abs(l-Y)<=_*Math.
max(1,Math.abs(l),Math.abs(Y))&&Math.abs(s-g)<=_*Math.max(1,
Math.abs(s),Math.abs(g))&&Math.abs(f-E)<=_*Math.max(1,Math.abs(
f),Math.abs(E))},"value")},set:{value:tt(function(p){for(let _=0;_<
this.length;_++)p[_]!==void 0&&(this[_]=p[_]);return this},"\
value")}}),(function(p,_){Object.defineProperties(p,{[Symbol.
iterator]:{value:tt(function*(){yield this[0],yield this[1],
yield this[2]},"value")},adapted:{get(){if(typeof this.space.
CSYS.adapt=="function"){let[l,s,f]=this.position;return Iterator.
from(this.space.CSYS.adapt(l,s,f))}else return this.position}},
position:{get:tt(()=>Iterator.from(_),"get")}});for(let l=0;l<
p.length;l++)(function(s,f,Y){Object.defineProperty(p,l,{enumerable:!0,
get(){let{CAM:g,CSYS:E}=this.space,rt=E[f],et=g!==void 0?g[s]:
null,K=Y[f];return"output"in rt&&typeof rt.output=="function"&&
(K=rt.output(K)),et!==null&&"output"in et&&typeof et.output==
"function"&&(K=et.output(K)),K},set(g){let{CAM:E,CSYS:rt}=this.
space,et=rt[f],K=E!==void 0?E[s]:null;K!==null&&"input"in K&&
typeof K.input=="function"&&(g=K.input(g)),"input"in et&&typeof et.
input=="function"&&(g=et.input(g)),typeof g=="string"&&(g=parseFloat(
g)),Y[f]=g}})})(l,a[l],_)})(n,i),Object.defineProperties(n,{
toString:{value:tt(function(){return`${this.colorspace};[${this[0]}\
,${this[1]},${this[2]}]`},"value")},[Symbol.toStringTag]:{get(){
return`PointInSpace(${this.toString()})`}}}),Array.isArray(r)?
n.set(r):n}o(m,"E");tt(m,"initPointInSpace");var st=o(t=>{let r=Math.abs(t);return r<=.04045?t/12.92:Math.
sign(t)*Math.pow((r+.055)/1.055,2.4)},"convertToLinearLight"),
ct=o(t=>{let r=Math.abs(t);return r>.0031308?Math.sign(t)*(1.055*
Math.pow(r,1/2.4)-.055):12.92*t},"convertToGammaCorrected"),
it=o((t,r,e)=>{let i=2*Math.PI,a=Math.PI/6;t<0&&(t+=i),t=t%i;
let n=o(p=>{let _=(p+t/a)%12,l=r*Math.min(e,1-e);return e-l*
Math.max(-1,Math.min(_-3,9-_,1))},"f");return[n(0),n(8),n(4)]},
"rgb_from_hsl"),zt=o((t,r,e)=>{if(r+e>=1){let i=r/(r+e);return[
i,i,i]}else{let[i,a,n]=it(t,1,.5).map(p=>p*(1-r-e)+r);return[
i,a,n]}},"rgb_from_hwb"),M=o((t,r,e)=>{let i=Math.max(t,r,e),
a=Math.min(t,r,e),n=i-a,p=or(t,r,e),_=0,l=(a+i)/2;return n!==
0&&(_=l===0||l===1?0:(i-l)/Math.min(l,1-l)),_<0&&(p+=Math.PI,
_=Math.abs(_)),_<=1e-5&&(p=NaN),[p*180/Math.PI,_*100,l*100]},
"rgb_to_hsl"),or=o((t,r,e)=>{let i=Math.max(t,r,e),a=Math.min(
t,r,e),n=NaN,p=i-a;if(p!==0){switch(i){case t:n=(r-e)/p+(r<e?
6:0);break;case r:n=(e-t)/p+2;break;case e:n=(t-r)/p+4}n*=Math.
PI/3}return n},"rgb_to_hue"),k=o((t,r,e)=>{let i=or(t,r,e),a=Math.
min(t,Math.min(r,e)),n=1-Math.max(t,Math.max(r,e));return[i*
180/Math.PI,a*100,n*100]},"rgb_to_hwb");var H=u(1.0479297925449969,.02962780877005599,-.009243040646204504,
.022946870601609652,.9904344267538799,.015055191490298152,-.05019226628920524,
-.017073799063418826,.7518742814281371),O=u(.955473421488075,
-.0283697093338637,.012314014864481998,-.02309845494876471,1.0099953980813041,
-.020507649298898964,.06325924320057072,.021041441191917323,
1.330365926242124);var rr=u(608311/1250200,35783/156275,0,189793/714400,247089/
357200,32229/714400,198249/1000160,198249/2500400,5220557/5000800),
$=o(t=>{if(c(t)&&t.colorspace==="display-p3"){let[r,e,i]=t.position,
[a,n,p]=d(r,e,i).each((_,l,s)=>s[l]=st(_)).multiply(rr);return m(
j,[a,n,p])}else throw new Error("Wrong parameter passed: "+t)},
"display_p3_into_xyz_d65"),er=o(t=>{if(c(t)&&t.colorspace===
"display-p3"){let[r,e,i]=t.position,[a,n,p]=d(r,e,i).each((_,l,s)=>s[l]=
st(_)).multiply(rr).multiply(H);return m(X,[a,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"display_p3_into_xyz_d50");var zo=o(t=>Math.sign(t)*Math.pow(Math.abs(t),2.19921875),"c\
onvertToLinearLight"),So=o(t=>Math.sign(t)*Math.pow(Math.abs(
t),256/563),"convertToGammaCorrected");var ir=u(1829569/896150,-851781/878810,16779/1248040,-506331/
896150,1648619/878810,-147721/1248040,-308931/896150,36519/878810,
1266979/1248040),Z=o(t=>{if(c(t)&&t.colorspace==="xyz-d65"){
let[r,e,i]=t.position,[a,n,p]=d(r,e,i).multiply(ir).each((_,l,s)=>s[l]=
So(_)*100);return m(Bt,[a,n,p])}else throw new Error("Wrong \
parameter passed: "+t)},"xyz_d65_into_a98_rgb"),Aa=o(t=>{if(c(
t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.position,[a,n,p]=d(
r,e,i).multiply(O).multiply(ir).each((_,l,s)=>s[l]=So(_)*100);
return m(Bt,[a,n,p])}else throw new Error("Wrong parameter p\
assed: "+t)},"xyz_d50_into_a98_rgb");var Ea=o(t=>Z($(t)),"display_p3_into_a98_rgb");var nr=u(573536/994567,591459/1989134,53769/1989134,263643/1420810,
6239551/9945670,351524/4972835,187206/994567,374412/4972835,
4929758/4972835),V=o(t=>{if(c(t)&&t.colorspace==="a98-rgb"){
let[r,e,i]=t.position,[a,n,p]=d(r,e,i).each((_,l,s)=>s[l]=zo(
_)).multiply(nr);return m(j,[a,n,p])}else throw new Error("W\
rong parameter passed: "+t)},"a98_rgb_into_xyz_d65"),ar=o(t=>{
if(c(t)&&t.colorspace==="a98-rgb"){let[r,e,i]=t.position,[a,
n,p]=d(r,e,i).each((_,l,s)=>s[l]=zo(_)).multiply(nr).multiply(
H);return m(X,[a,n,p])}else throw new Error("Wrong parameter\
 passed: "+t)},"a98_rgb_into_xyz_d50");var Rt=u(12831/3959,-851781/878810,705/12673,-329/214,1648619/
878810,-2585/12673,-1974/3959,36519/878810,705/667),N=o(t=>{
if(c(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,[a,
n,p]=d(r,e,i).multiply(Rt).each((_,l,s)=>s[l]=ct(_)*100);return m(
G,[a,n,p])}else throw new Error("Wrong parameter passed: "+t)},
"xyz_d65_into_srgb"),nt=o(t=>{if(c(t)&&t.colorspace==="xyz-d\
65"){let[r,e,i]=t.position,[a,n,p]=d(r,e,i).multiply(Rt).each(
(_,l,s)=>s[l]*=100);return m(wt,[a,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_srgb_linear"),St=o(
t=>{if(c(t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.position,
[a,n,p]=d(r,e,i).multiply(O).multiply(Rt).each((_,l,s)=>s[l]=
ct(_)*100);return m(G,[a,n,p])}else throw new Error("Wrong p\
arameter passed: "+t)},"xyz_d50_into_srgb"),Wt=o(t=>{if(c(t)&&
t.colorspace==="xyz-d50"){let[r,e,i]=t.position,[a,n,p]=d(r,
e,i).multiply(O).multiply(Rt).each((_,l,s)=>s[l]*=100);return m(
wt,[a,n,p])}else throw new Error("Wrong parameter passed: "+
t)},"xyz_d50_into_srgb_linear");var Nt=o(t=>N(V(t)),"a98_rgb_into_srgb"),ep=o(t=>nt(V(t)),"a\
98_rgb_into_srgb_linear");var Dt=o(t=>N($(t)),"display_p3_into_srgb"),mp=o(t=>nt($(t)),
"display_p3_into_srgb_linear");var dp=o(t=>{if(c(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
a=it(e,r,i).map(n=>Math.min(Math.max(Math.round(n*255),0),255));
return m(Wo,a)}else throw new Error("Wrong parameter passed:\
 "+t)},"hsl_into_rgb"),pr=o(t=>{if(c(t)&&t.colorspace==="hsl"){
let[r,e,i]=t.position,a=it(e,r,i).map(n=>n*100);return m(G,a)}else
throw new Error("Wrong parameter passed: "+t)},"hsl_into_srg\
b"),xp=o(t=>{if(c(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
a=it(e,r,i).map(n=>st(n)*100);return m(wt,a)}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_srgb_linear");var zp=o(t=>{if(c(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
a=zt(e,r,i).map(n=>n*100);return m(G,a)}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_srgb"),Sp=o(t=>{if(c(
t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,a=zt(e,r,i).
map(n=>st(n)*100);return m(wt,a)}else throw new Error("Wrong\
 parameter passed: "+t)},"hwb_into_srgb_linear");var C=o(t=>{if(c(t)&&t.colorspace==="lab"){let r=903.2962962962963,
e=216/24389,[i,a,n]=t,p=(i+16)/116,_=a/500+p,l=Math.pow(_,3),
s=p-n/200,f=Math.pow(s,3),Y=(l>e?l:(116*_-16)/r)*T[0],g=(i>r*
e?Math.pow((i+16)/116,3):i/r)*T[1],E=(f>e?f:(116*s-16)/r)*T[2];
return m(X,[Y,g,E])}else throw new Error("Wrong parameter pa\
ssed: "+t)},"lab_into_xyz_d50"),It=o(t=>{let r=C(t),[e,i,a]=d(
r).multiply(O);return m(j,[e,i,a])},"lab_into_xyz_d65");var Gt=o(t=>St(C(t)),"lab_into_srgb"),Lp=o(t=>Wt(C(t)),"lab_\
into_srgb_linear");var D=o(t=>{if(c(t)&&t.colorspace==="lch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,a=e*Math.cos(i),n=e*Math.sin(i);return m(
jt,[r,a,n])}else throw new Error("Wrong parameter passed: "+
t)},"lch_into_lab");var Ht=o(t=>St(C(D(t))),"lch_into_srgb"),Gp=o(t=>Wt(C(D(t))),
"lch_into_srgb_linear");var mr=u(1,1,1,.3963377773761749,-.1055613458156586,-.0894841775298119,
.2158037573099136,-.0638541728258133,-1.2914855480194092),Yt=u(
.819022437996703,.0329836539323885,.0481771893596242,.3619062600528904,
.9292868615863434,.2642395317527308,-.1288737815209879,.0361446663506424,
.6335478284694309),At=u(.210454268309314,1.9779985324311684,
.0259040424655478,.7936177747023054,-2.42859224204858,.7827717124575296,
-.0040720430116193,.450593709617411,-.8086757549230774),_r=u(
1.2268798758459243,-.0405757452148008,-.0763729366746601,-.5578149944602171,
1.112286803280317,-.4214933324022432,.2813910456659647,-.0717110580655164,
1.5869240198367816);var z=o(t=>{if(c(t)&&t.colorspace==="oklab"){let[r,e,i]=t.position,
[a,n,p]=d(i,r,e).multiply(mr).each((_,l,s)=>s[l]=_**3).multiply(
_r);return m(j,[a,n,p])}else throw new Error("Wrong paramete\
r passed: "+t)},"oklab_into_xyz_d65"),$t=o(t=>{let[r,e,i]=d(
z(t)).multiply(H);return m(X,[r,e,i])},"oklab_into_xyz_d50");var Vt=o(t=>N(z(t)),"oklab_into_srgb"),im=o(t=>nt(z(t)),"okl\
ab_into_srgb_linear");var U=o(t=>{if(c(t)&&t.colorspace==="oklch"){let[r,e]=t,i=t.
position.drop(1).next().value??NaN,a=isNaN(i)?0:e*Math.cos(i),
n=isNaN(i)?0:e*Math.sin(i);return m(Ot,[r,a,n])}else throw new Error(
"Wrong parameter passed: "+t)},"oklch_into_oklab");var Ft=o(t=>N(z(U(t))),"oklch_into_srgb"),dm=o(t=>nt(z(U(t))),
"oklch_into_srgb_linear");var lr=o(t=>{let r=Math.abs(t);return r<=.03125?t/16:Math.sign(
t)*Math.pow(r,1.8)},"convertToLinearLight"),Po=o(t=>{let r=Math.
abs(t);return r>=1/512?Math.sign(t)*Math.pow(r,1/1.8):16*t},
"convertToGammaCorrected");var re=u(.7977666449006423,.2880748288194013,0,.13518129740053308,
.711835234241873,0,.0313477341283922,8993693872564e-17,.8251046025104602),
Et=o(t=>{if(c(t)&&t.colorspace==="prophoto-rgb"){let r=m(X,t.
position.toArray());return d(r).each((e,i,a)=>a[i]=lr(e)).multiply(
re),r}else throw new Error("Wrong parameter passed: "+t)},"p\
rophoto_rgb_into_xyz_d50"),ot=o(t=>{let r=Et(t),e=m(j,r.position.
toArray());return d(e).multiply(O),e},"prophoto_rgb_into_xyz\
_d65");var qt=o(t=>N(ot(t)),"prophoto_rgb_into_srgb"),Im=o(t=>nt(ot(
t)),"prophoto_rgb_into_srgb_linear");var Kt=1.09929682680944,sr=.018053968510807,wo=o(t=>{let r=Math.
abs(t);return r<sr*4.5?t/4.5:Math.sign(t)*Math.pow((r+Kt-1)/
Kt,1/.45)},"convertToLinearLight"),vo=o(t=>{let r=Math.abs(t);
return r>sr?Math.sign(t)*(Kt*Math.pow(r,.45)-(Kt-1)):4.5*t},
"convertToGammaCorrected");var cr=u(63426534/99577255,26158966/99577255,4994106574466076e-32,
20160776/139408157,472592308/697040785,19567812/697040785,47086771/
278816314,8267143/139408157,295819943/278816314),F=o(t=>{if(c(
t)&&t.colorspace==="rec2020"){let[r,e,i]=t.position,[a,n,p]=d(
r,e,i).each((_,l,s)=>s[l]=wo(_)).multiply(cr);return m(j,[a,
n,p])}else throw new Error("Wrong parameter passed: "+t)},"r\
ec2020_into_xyz_d65"),fr=o(t=>{if(c(t)&&t.colorspace==="rec2\
020"){let[r,e,i]=t.position,[a,n,p]=d(r,e,i).each((_,l,s)=>s[l]=
wo(_)).multiply(cr).multiply(H);return m(X,[a,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"rec2020_into_xyz_d50");var Ut=o(t=>N(F(t)),"rec2020_into_srgb"),Gm=o(t=>nt(F(t)),"r\
ec2020_into_srgb_linear");var Jt=u(506752/1228815,87098/409605,7918/409605,87881/245763,
175762/245763,87881/737289,12673/70218,12673/175545,1001167/
1053270),B=o(t=>{if(c(t)&&["rgb","srgb"].includes(t.colorspace)){
let[r,e,i]=t.position,[a,n,p]=d(r,e,i).each((_,l,s)=>s[l]=st(
_)).multiply(Jt);return m(j,[a,n,p])}else throw new Error("W\
rong parameter passed: "+t)},"srgb_into_xyz_d65"),J=o(t=>{if(c(
t)&&t.colorspace==="srgb-linear"){let[r,e,i]=t.position,[a,n,
p]=d(r,e,i).multiply(Jt);return m(j,[a,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_linear_into_xyz_d65"),Tt=o(
t=>{if(c(t)&&["rgb","srgb"].includes(t.colorspace)){let[r,e,
i]=t.position,[a,n,p]=d(r,e,i).each((_,l,s)=>s[l]=st(_)).multiply(
Jt).multiply(H);return m(X,[a,n,p])}else throw new Error("Wr\
ong parameter passed: "+t)},"srgb_into_xyz_d50"),dr=o(t=>{if(c(
t)&&t.colorspace==="srgb-linear"){let[r,e,i]=t.position,[a,n,
p]=d(r,e,i).multiply(Jt).multiply(H);return m(X,[a,n,p])}else
throw new Error("Wrong parameter passed: "+t)},"srgb_linear_\
into_xyz_d50");var Qt=o(t=>Z(B(t)),"srgb_into_a98_rgb"),x_=o(t=>Z(J(t)),"sr\
gb_linear_into_a98_rgb");var u_=o(t=>Qt(pr(t)),"hsl_into_a98_rgb");var k_=o(t=>{if(c(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position;
if(r+i>=1){let a=r/(r+i);return m(Bt,[a,a,a])}else{let a=it(
e,1,.5).map(n=>(n*(1-r-i)+r)*100);return Qt(m(G,a))}}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_a98_rgb");var T_=o(t=>Z(It(t)),"lab_into_a98_rgb");var X_=o(t=>Z(It(D(t))),"lch_into_a98_rgb");var D_=o(t=>Z(z(t)),"oklab_into_a98_rgb");var xr=o(t=>$t(U(t)),"oklch_into_xyz_d50"),br=o(t=>z(U(t)),"\
oklch_into_xyz_d65");var J_=o(t=>Z(br(t)),"oklch_into_a98_rgb");var el=o(t=>Z(ot(t)),"prophoto_rgb_into_a98_rgb");var ml=o(t=>Z(F(t)),"rec2020_into_a98_rgb");var hr=u(446124/178915,-14852/17905,11844/330415,-333277/357830,
63121/35810,-50337/660830,-72051/178915,423/17905,316169/330415),
R=o(t=>{if(c(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[a,n,p]=d(r,e,i).multiply(hr).each((_,l,s)=>s[l]=ct(_)*100);
return m(ho,[a,n,p])}else throw new Error("Wrong parameter p\
assed: "+t)},"xyz_d65_into_display_p3"),to=o(t=>{if(c(t)&&t.
colorspace==="xyz-d50"){let[r,e,i]=t.position,[a,n,p]=d(r,e,
i).multiply(O).multiply(hr).each((_,l,s)=>s[l]=ct(_)*100);return m(
ho,[a,n,p])}else throw new Error("Wrong parameter passed: "+
t)},"xyz_d50_into_display_p3");var Ol=o(t=>R(V(t)),"a98_rgb_into_display_p3");var yr=o(t=>{if(c(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
a=it(e,r,i).map(p=>p*100),n=m(G,a);return Tt(n)}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_xyz_d50"),at=o(t=>{
if(c(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,a=it(e,
r,i).map(p=>p*100),n=m(G,a);return B(n)}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_xyz_d65");var Gl=o(t=>R(at(t)),"hsl_into_display_p3");var gr=o(t=>{if(c(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
a=zt(e,r,i).map(p=>p*100),n=m(G,a);return Tt(n)}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_xyz_d50"),pt=o(t=>{
if(c(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,a=zt(e,
r,i).map(p=>p*100),n=m(G,a);return B(n)}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_xyz_d65");var os=o(t=>R(pt(t)),"hwb_into_display_p3");var as=o(t=>to(C(t)),"lab_into_display_p3");var cs=o(t=>to(C(D(t))),"lch_into_display_p3");var hs=o(t=>R(z(t)),"oklab_into_display_p3");var Ps=o(t=>R(z(U(t))),"oklch_into_display_p3");var Cs=o(t=>R(ot(t)),"prophoto_rgb_into_display_p3");var Os=o(t=>R(F(t)),"rec2020_into_display_p3");var Xs=o(t=>R(B(t)),"srgb_into_display_p3"),Zs=o(t=>R(J(t)),
"srgb_linear_into_display_p3");var ic=o(t=>{let[r,e,i]=Nt(t).position;return m(w,M(r,e,i))},
"a98_rgb_into_hsl");var sc=o(t=>{let[r,e,i]=Dt(t).position;return m(w,M(r,e,i))},
"display_p3_into_hsl");var hc=o(t=>{if(c(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
[a,n,p]=zt(e,r,i),[_,l,s]=M(a,n,p);return m(w,[_,l,s])}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_hsl");var wc=o(t=>{let[r,e,i]=Gt(t).position;return m(w,M(r,e,i))},
"lab_into_hsl");var Ac=o(t=>{let[r,e,i]=Ht(t).position;return m(w,M(r,e,i))},
"lch_into_hsl");var Xc=o(t=>{let[r,e,i]=Vt(t).position;return m(w,M(r,e,i))},
"oklab_into_hsl");var Hc=o(t=>{let[r,e,i]=Ft(t).position;return m(w,M(r,e,i))},
"oklch_into_hsl");var Jc=o(t=>{let[r,e,i]=qt(t).position;return m(w,M(r,e,i))},
"prophoto_rgb_into_hsl");var af=o(t=>{let[r,e,i]=Ut(t).position,[a,n,p]=M(r,e,i);return m(
w,[a,n,p])},"rec2020_into_hsl");var cf=o(t=>{if(c(t)&&["rgb","srgb"].includes(t.colorspace)){
let[r,e,i]=t.position,[a,n,p]=M(r,e,i);return m(w,[a,n,p])}else
throw new Error("Wrong parameter passed: "+t)},"srgb_into_hs\
l"),ff=o(t=>{if(c(t)&&t.colorspace==="srgb-linear"){let[r,e,
i]=t.position.map(_=>ct(_)),[a,n,p]=M(r,e,i);return m(w,[a,n,
p])}else throw new Error("Wrong parameter passed: "+t)},"srg\
b_linear_into_hsl");var uf=o(t=>{let[r,e,i]=St(t).position;return m(w,M(r,e,i))},
"xyz_d50_into_hsl"),zf=o(t=>{let[r,e,i]=N(t).position;return m(
w,M(r,e,i))},"xyz_d65_into_hsl");var Rf=o(t=>{let[r,e,i]=Nt(t).position;return m(v,k(r,e,i))},
"a98_rgb_into_hwb");var Vf=o(t=>{let[r,e,i]=Dt(t).position;return m(v,k(r,e,i))},
"display_p3_into_hwb");var Qf=o(t=>{if(c(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
[a,n,p]=it(e,r,i);return m(v,k(a,n,p))}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_hwb");var ad=o(t=>{let[r,e,i]=Gt(t).position;return m(v,k(r,e,i))},
"lab_into_hwb");var fd=o(t=>{let[r,e,i]=Ht(t).position;return m(v,k(r,e,i))},
"lch_into_hwb");var ud=o(t=>{let[r,e,i]=Vt(t).position;return m(v,k(r,e,i))},
"oklab_into_hwb");var kd=o(t=>{let[r,e,i]=Ft(t).position;return m(v,k(r,e,i))},
"oklch_into_hwb");var Ld=o(t=>{let[r,e,i]=qt(t).position;return m(v,k(r,e,i))},
"prophoto_rgb_into_hwb");var Wd=o(t=>{let[r,e,i]=Ut(t).position;return m(v,k(r,e,i))},
"rec2020_into_hwb");var Vd=o(t=>{if(c(t)&&["rgb","srgb"].includes(t.colorspace)){
let[r,e,i]=t.position;return m(v,k(r,e,i))}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_hwb"),Fd=o(t=>{if(c(
t)&&t.colorspace==="srgb-linear"){let[r,e,i]=t.position.map(
a=>ct(a));return m(v,k(r,e,i))}else throw new Error("Wrong p\
arameter passed: "+t)},"srgb_linear_into_hwb");var o0=o(t=>{let[r,e,i]=St(t).position;return m(v,k(r,e,i))},
"xyz_d50_into_hwb"),r0=o(t=>{let[r,e,i]=N(t).position;return m(
v,k(r,e,i))},"xyz_d65_into_hwb");var oo=o(t=>{if(c(t)&&t.colorspace==="xyz-d50"){let r=m(j,t.
position.toArray());return d(r).multiply(O),r}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_xyz_d65"),y=o(t=>{
if(c(t)&&t.colorspace==="xyz-d65"){let r=m(X,t.position.toArray());
return d(r).multiply(H),r}else throw new Error("Wrong parame\
ter passed: "+t)},"xyz_d65_into_xyz_d50");var ur=o(t=>x(y(t)),"xyz_d65_into_lab"),x=o(t=>{if(c(t)&&t.colorspace===
"xyz-d50"){let r=.008856451679035631,e=29**3/3**3,[i,a,n]=t.
position.map((s,f)=>s/T[f]).map(s=>s>r?Math.cbrt(s):(e*s+16)/
116),p=116*a-16,_=500*(i-a),l=200*(a-n);return m(jt,[p,_,l])}else
throw new Error("Wrong parameter passed: "+t)},"xyz_d50_into\
_lab");var T0=o(t=>{let r=V(t),e=y(r);return x(e)},"a98_rgb_into_la\
b");var X0=o(t=>{let r=$(t),e=y(r);return x(e)},"display_p3_into\
_lab");var G0=o(t=>{let r=at(t),e=y(r);return x(e)},"hsl_into_lab");var K0=o(t=>{let r=pt(t),e=y(r);return x(e)},"hwb_into_lab");var rx=o(t=>{let r=z(t),e=y(r);return x(e)},"oklab_into_lab");var _x=o(t=>{let r=U(t),e=z(r),i=y(e);return x(i)},"oklch_in\
to_lab");var dx=o(t=>{let r=Et(t);return x(r)},"prophoto_rgb_into_lab");var ux=o(t=>{let r=F(t),e=y(r);return x(e)},"rec2020_into_la\
b");var Mx=o(t=>{let r=B(t),e=y(r);return x(e)},"srgb_into_lab"),
kx=o(t=>{let r=J(t),e=y(r);return x(e)},"srgb_linear_into_la\
b");var I=o(t=>{if(c(t)&&t.colorspace==="lab"){let[r,e,i]=t,a=Math.
atan2(i,e)*(180/Math.PI),n=Math.hypot(e,i);return m(jo,[r,n,
a])}else throw new Error("Wrong parameter passed: "+t)},"lab\
_into_lch");var Kx=o(t=>{let r=V(t),e=y(r),i=x(e);return I(i)},"a98_rgb_\
into_lch");var eb=o(t=>{let r=$(t),e=y(r),i=x(e);return I(i)},"display_\
p3_into_lch");var lb=o(t=>{let r=at(t),e=y(r),i=x(e);return I(i)},"hsl_int\
o_lch");var hb=o(t=>{let r=pt(t),e=y(r),i=x(e);return I(i)},"hwb_int\
o_lch");var wb=o(t=>{let r=z(t),e=y(r),i=x(e);return I(i)},"oklab_in\
to_lch");var Tb=o(t=>{let r=U(t),e=z(r),i=y(e),a=x(i);return I(a)},"o\
klch_into_lch");var Xb=o(t=>{let r=Et(t),e=x(r);return I(e)},"prophoto_rgb_i\
nto_lch");var Hb=o(t=>{let r=F(t),e=y(r),i=x(e);return I(i)},"rec2020_\
into_lch");var Jb=o(t=>{let r=B(t),e=y(r),i=x(e);return I(i)},"srgb_int\
o_lch"),Qb=o(t=>{let r=J(t),e=y(r),i=x(e);return I(i)},"srgb\
_linear_into_lch");var ih=o(t=>I(x(t)),"xyz_d50_into_lch"),nh=o(t=>I(ur(t)),"xy\
z_d65_into_lch");var L=o(t=>{if(c(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.
position,[a,n,p]=d(r,e,i).multiply(Yt).each((_,l,s)=>s[l]=Math.
cbrt(_)).multiply(At);return m(Ot,[a*100,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_oklab"),vh=o(t=>{
if(c(t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.position,[a,
n,p]=d(r,e,i).multiply(O).multiply(Yt).each((_,l,s)=>s[l]=Math.
cbrt(_)).multiply(At);return m(Ot,[a*100,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_oklab");var Yh=o(t=>L(V(t)),"a98_rgb_into_oklab");var Bh=o(t=>L($(t)),"display_p3_into_oklab");var Rh=o(t=>{let r=at(t);return L(r)},"hsl_into_oklab");var Hh=o(t=>L(pt(t)),"hwb_into_oklab");var ro=o(t=>{let r=C(t),e=oo(r);return L(e)},"lab_into_oklab");var ey=o(t=>{let r=D(t),e=C(r),i=oo(e);return L(i)},"lch_int\
o_oklab");var my=o(t=>L(ot(t)),"prophoto_rgb_into_oklab");var fy=o(t=>L(F(t)),"rec2020_into_oklab");var yy=o(t=>{let r=B(t);return L(r)},"srgb_into_oklab"),gy=o(
t=>{let r=J(t);return L(r)},"srgb_linear_into_oklab");var q=o(t=>{if(c(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.
position,[a,n,p]=d(r,e,i).multiply(Yt).each((f,Y,g)=>g[Y]=Math.
cbrt(f)).multiply(At),_=a*100,l=Math.hypot(n,p),s=l<.001?NaN:
Math.atan2(p,n)*180/Math.PI;return m(Lt,[_,l,s])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_oklch"),Zy=o(t=>{
if(c(t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.position.toArray(),
[a,n,p]=d(r,e,i).multiply(O).multiply(Yt).each((f,Y,g)=>g[Y]=
Math.cbrt(f)).multiply(At),_=a*100,l=Math.hypot(n,p),s=l<.001?
NaN:Math.atan2(p,n)*180/Math.PI;return m(Lt,[_,l,s])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_oklch");var Gy=o(t=>{let r=V(t);return q(r)},"a98_rgb_into_oklch");var qy=o(t=>{let r=$(t);return q(r)},"display_p3_into_oklch");var tg=o(t=>{let r=at(t);return q(r)},"hsl_into_oklch");var ng=o(t=>{let r=pt(t);return q(r)},"hwb_into_oklch");var eo=o(t=>{if(c(t)&&t.colorspace==="oklab"){let[r,e,i]=t,a=Math.
hypot(e,i),n=a<.001?NaN:Math.atan2(i,e)*180/Math.PI;return m(
Lt,[r,a,n])}else throw new Error("Wrong parameter passed: "+
t)},"oklab_into_oklch");var dg=o(t=>eo(ro(t)),"lab_into_oklch");var ug=o(t=>{let r=D(t),e=ro(r);return eo(e)},"lch_into_oklc\
h");var vg=o(t=>{let r=ot(t);return q(r)},"prophoto_rgb_into_okl\
ch");var Yg=o(t=>{let r=F(t);return q(r)},"rec2020_into_oklch");var Bg=o(t=>{let r=B(t);return q(r)},"srgb_into_oklch"),Eg=o(
t=>{let r=J(t);return q(r)},"srgb_linear_into_oklch");var zr=u(1.3457868816471583,-.5446307051249019,0,-.25557208737979464,
1.5082477428451468,0,-.05110186497554526,.02052744743642139,
1.2119675456389452),e5=o(t=>{if(c(t)&&t.colorspace==="xyz-d6\
5"){let[r,e,i]=t.position,[a,n,p]=d(r,e,i).multiply(H).multiply(
zr).each((_,l,s)=>s[l]=Po(_)*100);return m(yo,[a,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_prophoto_rgb"),
A=o(t=>{if(c(t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.position,
[a,n,p]=d(r,e,i).multiply(zr).each((_,l,s)=>s[l]=Po(_)*100);
return m(yo,[a,n,p])}else throw new Error("Wrong parameter p\
assed: "+t)},"xyz_d50_into_prophoto_rgb");var m5=o(t=>A(ar(t)),"a98_rgb_into_prophoto_rgb");var f5=o(t=>A(er(t)),"display_p3_into_prophoto_rgb");var Sr=o(t=>C(D(t)),"lch_into_xyz_d50"),y5=o(t=>It(D(t)),"lc\
h_into_xyz_d65");var E5=o(t=>A(yr(t)),"hsl_into_prophoto_rgb");var W5=o(t=>A(gr(t)),"hwb_into_prophoto_rgb");var $5=o(t=>A(C(t)),"lab_into_prophoto_rgb");var U5=o(t=>A(Sr(t)),"lch_into_prophoto_rgb");var ru=o(t=>A($t(t)),"oklab_into_prophoto_rgb");var pu=o(t=>A(xr(t)),"oklch_into_prophoto_rgb");var cu=o(t=>A(fr(t)),"rec2020_into_prophoto_rgb");var hu=o(t=>A(Tt(t)),"srgb_into_prophoto_rgb"),yu=o(t=>A(dr(
t)),"srgb_linear_into_prophoto_rgb");var Pr=u(30757411/17917100,-19765991/29648200,792561/44930125,
-6372589/17917100,47925759/29648200,-1921689/44930125,-4539589/
17917100,467509/29648200,42328811/44930125),W=o(t=>{if(c(t)&&
t.colorspace==="xyz-d65"){let[r,e,i]=t.position,[a,n,p]=d(r,
e,i).multiply(Pr).each((_,l,s)=>s[l]=vo(_)*100);return m(go,
[a,n,p])}else throw new Error("Wrong parameter passed: "+t)},
"xyz_d65_into_rec2020"),io=o(t=>{if(c(t)&&t.colorspace==="xy\
z-d50"){let[r,e,i]=t.position,[a,n,p]=d(r,e,i).multiply(O).multiply(
Pr).each((_,l,s)=>s[l]=vo(_)*100);return m(go,[a,n,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_rec2020");var Du=o(t=>W(V(t)),"a98_rgb_into_rec2020");var Fu=o(t=>W($(t)),"display_p3_into_rec2020");var Qu=o(t=>W(at(t)),"hsl_into_rec2020");var i1=o(t=>W(pt(t)),"hwb_into_rec2020");var _1=o(t=>io(C(t)),"lab_into_rec2020");var x1=o(t=>io(C(D(t))),"lch_into_rec2020");var u1=o(t=>W(z(t)),"oklab_into_rec2020");var M1=o(t=>W(z(U(t))),"oklch_into_rec2020");var A1=o(t=>W(ot(t)),"prophoto_rgb_into_rec2020");var E1=o(t=>W(B(t)),"srgb_into_rec2020"),j1=o(t=>W(J(t)),"sr\
gb_linear_into_rec2020");export{Bt as A98RGBSpace,ho as DisplayP3Space,w as HSLSpace,
v as HWBSpace,jt as LABSpace,jo as LCHSpace,yo as ProPhotoRGBSpace,
Wo as RGBModel,go as Rec2020Space,X as XYZD50Space,j as XYZD65Space,
Ol as a98_rgb_into_display_p3,ic as a98_rgb_into_hsl,Rf as a98_rgb_into_hwb,
T0 as a98_rgb_into_lab,Kx as a98_rgb_into_lch,Yh as a98_rgb_into_oklab,
Gy as a98_rgb_into_oklch,m5 as a98_rgb_into_prophoto_rgb,Du as a98_rgb_into_rec2020,
Nt as a98_rgb_into_rgb,Nt as a98_rgb_into_srgb,ep as a98_rgb_into_srgb_linear,
V as a98_rgb_into_xyz,ar as a98_rgb_into_xyz_d50,V as a98_rgb_into_xyz_d65,
Ea as display_p3_into_a98_rgb,sc as display_p3_into_hsl,Vf as display_p3_into_hwb,
X0 as display_p3_into_lab,eb as display_p3_into_lch,Bh as display_p3_into_oklab,
qy as display_p3_into_oklch,f5 as display_p3_into_prophoto_rgb,
Fu as display_p3_into_rec2020,Dt as display_p3_into_rgb,Dt as display_p3_into_srgb,
mp as display_p3_into_srgb_linear,$ as display_p3_into_xyz,er as display_p3_into_xyz_d50,
$ as display_p3_into_xyz_d65,u_ as hsl_into_a98_rgb,Gl as hsl_into_display_p3,
Qf as hsl_into_hwb,G0 as hsl_into_lab,lb as hsl_into_lch,Rh as hsl_into_oklab,
tg as hsl_into_oklch,E5 as hsl_into_prophoto_rgb,Qu as hsl_into_rec2020,
dp as hsl_into_rgb,pr as hsl_into_srgb,xp as hsl_into_srgb_linear,
at as hsl_into_xyz,yr as hsl_into_xyz_d50,at as hsl_into_xyz_d65,
k_ as hwb_into_a98_rgb,os as hwb_into_display_p3,hc as hwb_into_hsl,
K0 as hwb_into_lab,hb as hwb_into_lch,Hh as hwb_into_oklab,ng as hwb_into_oklch,
W5 as hwb_into_prophoto_rgb,i1 as hwb_into_rec2020,zp as hwb_into_rgb,
zp as hwb_into_srgb,Sp as hwb_into_srgb_linear,pt as hwb_into_xyz,
gr as hwb_into_xyz_d50,pt as hwb_into_xyz_d65,m as initPointInSpace,
c as isPointInSpace,T_ as lab_into_a98_rgb,as as lab_into_display_p3,
wc as lab_into_hsl,ad as lab_into_hwb,I as lab_into_lch,ro as lab_into_oklab,
dg as lab_into_oklch,$5 as lab_into_prophoto_rgb,_1 as lab_into_rec2020,
Gt as lab_into_rgb,Gt as lab_into_srgb,Lp as lab_into_srgb_linear,
It as lab_into_xyz,C as lab_into_xyz_d50,It as lab_into_xyz_d65,
X_ as lch_into_a98_rgb,cs as lch_into_display_p3,Ac as lch_into_hsl,
fd as lch_into_hwb,D as lch_into_lab,ey as lch_into_oklab,ug as lch_into_oklch,
U5 as lch_into_prophoto_rgb,x1 as lch_into_rec2020,Ht as lch_into_rgb,
Ht as lch_into_srgb,Gp as lch_into_srgb_linear,y5 as lch_into_xyz,
Sr as lch_into_xyz_d50,y5 as lch_into_xyz_d65,Ot as okLABSpace,
Lt as okLCHSpace,D_ as oklab_into_a98_rgb,hs as oklab_into_display_p3,
Xc as oklab_into_hsl,ud as oklab_into_hwb,rx as oklab_into_lab,
wb as oklab_into_lch,eo as oklab_into_oklch,ru as oklab_into_prophoto_rgb,
u1 as oklab_into_rec2020,Vt as oklab_into_rgb,Vt as oklab_into_srgb,
im as oklab_into_srgb_linear,z as oklab_into_xyz,$t as oklab_into_xyz_d50,
z as oklab_into_xyz_d65,J_ as oklch_into_a98_rgb,Ps as oklch_into_display_p3,
Hc as oklch_into_hsl,kd as oklch_into_hwb,_x as oklch_into_lab,
Tb as oklch_into_lch,U as oklch_into_oklab,pu as oklch_into_prophoto_rgb,
M1 as oklch_into_rec2020,Ft as oklch_into_rgb,Ft as oklch_into_srgb,
dm as oklch_into_srgb_linear,br as oklch_into_xyz,xr as oklch_into_xyz_d50,
br as oklch_into_xyz_d65,el as prophoto_rgb_into_a98_rgb,Cs as prophoto_rgb_into_display_p3,
Jc as prophoto_rgb_into_hsl,Ld as prophoto_rgb_into_hwb,dx as prophoto_rgb_into_lab,
Xb as prophoto_rgb_into_lch,my as prophoto_rgb_into_oklab,vg as prophoto_rgb_into_oklch,
A1 as prophoto_rgb_into_rec2020,qt as prophoto_rgb_into_rgb,
qt as prophoto_rgb_into_srgb,Im as prophoto_rgb_into_srgb_linear,
ot as prophoto_rgb_into_xyz,Et as prophoto_rgb_into_xyz_d50,
ot as prophoto_rgb_into_xyz_d65,ml as rec2020_into_a98_rgb,Os as rec2020_into_display_p3,
af as rec2020_into_hsl,Wd as rec2020_into_hwb,ux as rec2020_into_lab,
Hb as rec2020_into_lch,fy as rec2020_into_oklab,Yg as rec2020_into_oklch,
cu as rec2020_into_prophoto_rgb,Ut as rec2020_into_rgb,Ut as rec2020_into_srgb,
Gm as rec2020_into_srgb_linear,F as rec2020_into_xyz,fr as rec2020_into_xyz_d50,
F as rec2020_into_xyz_d65,Qt as rgb_into_a98_rgb,Xs as rgb_into_display_p3,
cf as rgb_into_hsl,Vd as rgb_into_hwb,Mx as rgb_into_lab,Jb as rgb_into_lch,
yy as rgb_into_oklab,Bg as rgb_into_oklch,hu as rgb_into_prophoto_rgb,
E1 as rgb_into_rec2020,B as rgb_into_xyz,Tt as rgb_into_xyz_d50,
B as rgb_into_xyz_d65,wt as sRGBLinearSpace,G as sRGBSpace,Qt as srgb_into_a98_rgb,
Xs as srgb_into_display_p3,cf as srgb_into_hsl,Vd as srgb_into_hwb,
Mx as srgb_into_lab,Jb as srgb_into_lch,yy as srgb_into_oklab,
Bg as srgb_into_oklch,hu as srgb_into_prophoto_rgb,E1 as srgb_into_rec2020,
B as srgb_into_xyz,Tt as srgb_into_xyz_d50,B as srgb_into_xyz_d65,
x_ as srgb_linear_into_a98_rgb,Zs as srgb_linear_into_display_p3,
ff as srgb_linear_into_hsl,Fd as srgb_linear_into_hwb,kx as srgb_linear_into_lab,
Qb as srgb_linear_into_lch,gy as srgb_linear_into_oklab,Eg as srgb_linear_into_oklch,
yu as srgb_linear_into_prophoto_rgb,j1 as srgb_linear_into_rec2020,
J as srgb_linear_into_xyz,dr as srgb_linear_into_xyz_d50,J as srgb_linear_into_xyz_d65,
Aa as xyz_d50_into_a98_rgb,to as xyz_d50_into_display_p3,uf as xyz_d50_into_hsl,
o0 as xyz_d50_into_hwb,x as xyz_d50_into_lab,ih as xyz_d50_into_lch,
vh as xyz_d50_into_oklab,Zy as xyz_d50_into_oklch,A as xyz_d50_into_prophoto_rgb,
io as xyz_d50_into_rec2020,St as xyz_d50_into_rgb,St as xyz_d50_into_srgb,
Wt as xyz_d50_into_srgb_linear,oo as xyz_d50_into_xyz_d65,Z as xyz_d65_into_a98_rgb,
R as xyz_d65_into_display_p3,zf as xyz_d65_into_hsl,r0 as xyz_d65_into_hwb,
ur as xyz_d65_into_lab,nh as xyz_d65_into_lch,L as xyz_d65_into_oklab,
q as xyz_d65_into_oklch,e5 as xyz_d65_into_prophoto_rgb,W as xyz_d65_into_rec2020,
N as xyz_d65_into_rgb,N as xyz_d65_into_srgb,nt as xyz_d65_into_srgb_linear,
y as xyz_d65_into_xyz_d50,Z as xyz_into_a98_rgb,R as xyz_into_display_p3,
zf as xyz_into_hsl,r0 as xyz_into_hwb,ur as xyz_into_lab,nh as xyz_into_lch,
L as xyz_into_oklab,q as xyz_into_oklch,e5 as xyz_into_prophoto_rgb,
W as xyz_into_rec2020,N as xyz_into_rgb,N as xyz_into_srgb,nt as xyz_into_srgb_linear};
