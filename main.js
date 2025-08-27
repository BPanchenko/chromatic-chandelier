var Vi=Object.defineProperty;var o=(t,r)=>Vi(t,"name",{value:r,configurable:!0});var Oo=o(t=>typeof t=="number","isNumber"),Fi=o(t=>typeof t=="str\
ing","isString"),ir=o(t=>Et(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function","isIterableObject"),Et=o(t=>t!==null&&typeof t==
"object","isObject");var nr=o(t=>{if(ar(t)){let r=Iterator.from(["hsl","hwb","lab","lc\
h","oklab","oklch"]);for(let e of r)if(e===t)return!0}return!1},"\
isRGBBasedSpace");var ar=o(t=>Fi(t)&&Ki.has(t),"isSpaceID"),pr=o(t=>Et(t)&&"ident"in
t&&ar(t.ident)&&"CSYS"in t&&Et(t.CSYS)&&"length"in t.CSYS&&t.CSYS.
length===3,"isColorSpace");var Ki=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch","o\
klab","oklch","prophoto-rgb","rec2020","srgb-linear","srgb","rgb",
"xyz","xyz-d50","xyz-d65"]);function _r(t,r){if(pr(t)===!1)throw new TypeError("Point must be\
 declared in a valid color space instead of "+JSON.stringify(t,void 0,
2));if((r instanceof ArrayBuffer||Array.isArray(r)&&r.length===3&&
r.every(p=>Oo(p)))===!1)throw new TypeError("Point in space has v\
alid coordinates. Wrong parameters: "+JSON.stringify(r,void 0,2));
let e=t.CSYS.length,i=r instanceof ArrayBuffer?new Float64Array(r):
new Float64Array(e),n=t.CAM===void 0?Array.of(0,1,2):t.CAM.toArray().
map(p=>t.CSYS.toArray().findIndex(l=>p.$coord===l)),a=Object.create(
null,{buffer:{value:i.buffer},colorspace:{enumerable:!0,value:t.ident},
length:{value:e},space:{value:t}});return Object.defineProperties(
a,{equals:{value:o(function(p,l=1e-5){let[s,m,c]=this.position,[E,
d,V]=p.position;return this.colorspace===p.colorspace&&Math.abs(s-
E)<=l*Math.max(1,Math.abs(s),Math.abs(E))&&Math.abs(m-d)<=l*Math.
max(1,Math.abs(m),Math.abs(d))&&Math.abs(c-V)<=l*Math.max(1,Math.
abs(c),Math.abs(V))},"value")},set:{value:o(function(p){let l=0;for(let s of p)
if(this[l]=s,l<3)l++;else break;return this},"value")}}),(function(p,l){
Object.defineProperties(p,{[Symbol.iterator]:{value:o(function*(){
yield this[0],yield this[1],yield this[2]},"value")},adapted:{get(){
if(typeof this.space.CSYS.adapt=="function"){let[s,m,c]=this.position;
return Iterator.from(this.space.CSYS.adapt(s,m,c))}else return this.
position}},position:{get:o(()=>Iterator.from(l),"get")}});for(let s=0;s<
p.length;s++)(function(m,c,E){Object.defineProperty(p,s,{enumerable:!0,
get(){let{CAM:d,CSYS:V}=this.space,bt=V[c],F=d!==void 0?d[m]:null,
j=E[c];return"output"in bt&&typeof bt.output=="function"&&(j=bt.output(
j)),F!==null&&"output"in F&&typeof F.output=="function"&&(j=F.output(
j)),j},set(d){let{CAM:V,CSYS:bt}=this.space,F=bt[c],j=V!==void 0?
V[m]:null;j!==null&&"input"in j&&typeof j.input=="function"&&(d=j.
input(d)),"input"in F&&typeof F.input=="function"&&(d=F.input(d)),
typeof d=="string"&&(d=parseFloat(d)),E[c]=d}})})(s,n[s],l)})(a,i),
Object.defineProperties(a,{[Symbol.toStringTag]:{get(){return`Poi\
ntInSpace(${this.toString()})`}},entries:{value:o(function(){let p=this.
space.CAM??this.space.CSYS;return Iterator.from([[p[0],this[0]],[
p[1],this[1]],[p[2],this[2]]])},"value")},toString:{value:o(function(){
return`${this.colorspace};[${this.values().toArray().toString()}]`},
"value")},values:{value:o(function(){return Iterator.from([this[0],
this[1],this[2]])},"value")}}),ir(r)?a.set(r):a}o(_r,"initPointIn\
Space");var Ui=Object.defineProperty,Zt=o((t,r)=>Ui(t,"name",{value:r,configurable:!0}),
"n"),qi=Zt(t=>t!==null&&typeof t=="object"&&Array.isArray(t)===!1,
"isObject"),Ji=Zt(t=>qi(t)&&"ident"in t&&"short"in t&&"domain"in t,
"isSpaceDimension");function k(t,r,e){let i=Iterator.from(e===void 0?
[t,r]:[t,r,e]),n=e===void 0?2:3;for(let l of i.take(n))if(Ji(l)===
!1)throw new TypeError("Passed wrong space dimension: "+JSON.stringify(
l,void 0,2));let a=i.take(n).filter(l=>l.tgeom==="azimuth"||l.tgeom===
"reference-ray").toArray().length===2?n===3?"cilinder":"circle":n===
3?"cube":"plane",p=Object.create(null,{0:{enumerable:!0,value:t},
1:{enumerable:!0,value:r},length:{enumerable:!0,value:n},tgeom:{enumerable:!0,
value:a},entries:{value:Zt(function*(){yield[0,this[0]],yield[1,this[1]],
this.length===3&&(yield[2,this[2]])},"value")},toArray:{value:Zt(
function(){return Array.of(...this)},"value")},[Symbol.iterator]:{
value:Zt(function*(){yield this[0],yield this[1],this.length===3&&
(yield this[2])},"value")}});return n===3&&Object.defineProperty(
p,2,{enumerable:!0,value:e}),l=>l===void 0?p:Object.defineProperties(
p,l)}o(k,"w");Zt(k,"createCoordinateSystem");var Qi=Object.defineProperty,gt=o((t,r)=>Qi(t,"name",{value:r,configurable:!0}),
"n"),To=gt(t=>typeof t=="number","isNumber"),tn=gt(t=>t!==null&&typeof t==
"object"&&Array.isArray(t)===!1,"isObject"),Xn=gt(t=>tn(t)&&Symbol.
iterator in t&&"minimum"in t&&To(t.minimum)&&"maximum"in t&&To(t.
maximum)&&"value"in t&&To(t.value)&&t.value>0,"isRange");function y(...t){
let r=t.length===1?Array.of(0,t[0]):Array.of(Math.min(...t),Math.
max(...t)),[e,i]=r,n=i-e,a=e+n/2;return Object.create(null,{from:{
value:e},to:{value:i},minimum:{enumerable:!0,value:e},maximum:{enumerable:!0,
value:i},avg:{enumerable:!0,value:a},value:{enumerable:!0,value:n},
allot:{value:lr},clamp:{value:sr},test:{value:gt(p=>e<=p&&p<=i,"v\
alue")},toString:{value:gt(()=>String.raw`{x ∈ R; ${e} ⋜ x ⋜ ${i}}`,
"value")},[Symbol.iterator]:{value:gt(function*(){yield this.from,
yield this.to},"value")},length:{value:2}})}o(y,"D");gt(y,"create\
Range");function lr(t){return this.test(t)?t:t>this.from?(t-this.
to)%this.value+this.from:this.to-(this.from-t)%this.value}o(lr,"p");
gt(lr,"allocateOuterValue");function sr(t){return this.test(t)?t:
Math.max(Math.min(t,this.to),this.from)}o(sr,"h");gt(sr,"restrict\
OuterValue");var on=Object.defineProperty,rn=o((t,r)=>on(t,"name",{value:r,configurable:!0}),
"n");var en=rn((t,r=6)=>{let e=10**r;return Math.sign(t)*Math.round((Math.
abs(t)+Number.EPSILON)*e)/e},"round"),w=en;var nn=Object.defineProperty,ut=o((t,r)=>nn(t,"name",{value:r,configurable:!0}),
"t");function Ro(...t){let r=t.length===1?Array.of(0,t[0]):Array.
of(Math.min(...t),Math.max(...t)),[e,i]=r,n=i-e,a=e+n/2;return Object.
create(null,{from:{value:e},to:{value:i},minimum:{enumerable:!0,value:e},
maximum:{enumerable:!0,value:i},avg:{enumerable:!0,value:a},value:{
enumerable:!0,value:n},allot:{value:mr},clamp:{value:br},test:{value:ut(
p=>e<=p&&p<=i,"value")},toString:{value:ut(()=>String.raw`{x ∈ R; ${e} ⋜ x ⋜ ${i}}`,
"value")},[Symbol.iterator]:{value:ut(function*(){yield this.from,
yield this.to},"value")},length:{value:2}})}o(Ro,"c");ut(Ro,"crea\
teRange");function mr(t){return this.test(t)?t:t>this.from?(t-this.
to)%this.value+this.from:this.to-(this.from-t)%this.value}o(mr,"g");
ut(mr,"allocateOuterValue");function br(t){return this.test(t)?t:
Math.max(Math.min(t,this.to),this.from)}o(br,"h");ut(br,"restrict\
OuterValue");function jo(t=[0,100],r=[0,1]){let[e,i]=r,[n,a]=t,[p,
l]=[i-e,a-n];function s(c){return typeof c=="string"&&(c=parseFloat(
c)),m.domain.test(c)===!1&&(c=c>i?(c-i)%p+e:i-(e-c)%p),l*(c-e)/p+
n}o(s,"p"),ut(s,"invert");function m(c){return typeof c=="string"&&
(c=parseFloat(c)),m.range.test(c)===!1&&(c=c>a?(c-a)%l+n:a-(n-c)%
l),p*(c-n)/l+e}return o(m,"l"),ut(m,"calculator"),Object.defineProperties(
m,{domain:{enumerable:!0,value:Ro(e,i)},range:{enumerable:!0,value:Ro(
n,a)},invert:{enumerable:!0,value:s}})}o(jo,"F");ut(jo,"initScale");var Do=jo([0,360],[-Math.PI,Math.PI]),Wt=Object.freeze({bytes:8,domain:Do.
domain,ident:"angle",input:o(t=>Do.domain.allot(t*Math.PI/180),"i\
nput"),output:o(t=>w(Do.range.allot(t*180/Math.PI),1),"output"),short:"\
phi",tcoord:"polar",tgeom:"azimuth"});var zt=Object.freeze({$coord:Wt,bytes:4,domain:y(0,360),ident:"hu\
e",short:"h",input:o(t=>zt.domain.allot(t),"input"),output:o(t=>Number.
isNaN(t)?Number.NaN:Math.abs(t)<1e-5?0:w(t,5),"output")});var ct=Object.freeze({bytes:8,domain:y(0,1),ident:"applicate",short:"\
z",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var ht=Object.freeze({$coord:ct,bytes:4,domain:y(0,100),ident:"li\
ghtness",input:o(t=>t/100,"input"),output:o(t=>w(t*100,2),"output"),
short:"L"});var ft=Object.freeze({bytes:8,domain:y(0,1),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var cr=Object.freeze({$coord:ft,bytes:4,domain:y(0,100),ident:"sa\
turation",input:o(t=>t/100,"input"),output:o(t=>w(t*100,2),"outpu\
t"),short:"S"});var da=k(ft,Wt)({adapt:{enumerable:!0,value:Bo}});function Bo(t=0,r=NaN){return[t*Math.cos(r),t*Math.sin(r)]}o(Bo,"\
calcCartesianCoordinates");var kt=k(ft,Wt,ct)({adapt:{value:an}});function an(t,r,e){return[
...Bo(t,r),e]}o(an,"calcCubeCoordinates");var _t=Object.defineProperty(Float64Array.of(.9504559270516716,1,
1.0890577507598784),"ident",{value:"d65"});Object.freeze(_t.buffer);var v={CAM:k(zt,cr,ht)(),CSYS:kt,ident:"hsl",whitepoint:_t};var fr=Object.freeze({$coord:ct,bytes:4,domain:y(0,100),ident:"bl\
ackness",input:o(t=>t/100,"input"),output:o(t=>w(t*100,2),"output"),
short:"B"});var hr=Object.freeze({$coord:ft,bytes:4,domain:y(0,100),ident:"wh\
iteness",input:o(t=>t/100,"input"),output:o(t=>w(t*100,2),"output"),
short:"W"});var I={CAM:k(zt,hr,fr)(),CSYS:kt,ident:"hwb",whitepoint:_t};var xt=Object.freeze({bytes:8,domain:y(-1,1),ident:"abscissa",short:"\
x",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var xr=Object.freeze({$coord:xt,bytes:4,domain:y(-125,125),ident:"\
green-red",input:o(t=>t/125,"input"),output:o(t=>w(t*125,1),"outp\
ut"),short:"a"}),dr=Object.freeze({$coord:xt,bytes:8,domain:y(-.4,
.4),ident:"green-red",short:"a"});var dt=Object.freeze({bytes:8,domain:y(-1,1),ident:"ordinate",short:"\
y",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var yr=Object.freeze({$coord:dt,bytes:4,domain:y(-125,125),ident:"\
blue-yellow",input:o(t=>t/125,"input"),output:o(t=>w(t*125,2),"ou\
tput"),short:"b"}),gr=Object.freeze({$coord:dt,bytes:8,domain:y(-.4,
.4),ident:"blue-yellow",short:"b"});var hp=k(xt,dt)({adapt:{value:Xo}});function Xo(t,r){let e=0,i=NaN;return(t!==0||r!==0)&&(e=Math.sqrt(
t**2+r**2),t!==0&&!r||r!==0&&!t?i=r/Math.abs(r)*(Math.PI/2):i=Math.
atan(r/t)),[e,i]}o(Xo,"calcPolarCoordinates");var St=k(xt,dt,ct)({adapt:{value:pn}});function pn(t,r,e){return[
...Xo(t,r),e]}o(pn,"calcCylindricalCoordinates");var et=Object.defineProperty(Float64Array.of(.9642956764295677,1,
.8251046025104602),"ident",{value:"d50"});Object.freeze(et.buffer);var fo=Object.freeze({CAM:k(ht,xr,yr)(),CSYS:St,ident:"lab",whitepoint:et});var ur=Object.freeze({$coord:ft,ident:"chroma",short:"C",domain:y(
0,150),input:o(t=>t/150,"input"),output:o(t=>w(t*150,1),"output"),
bytes:2}),zr=Object.freeze({$coord:ft,ident:"chroma",short:"c",domain:y(
0,.4),output:o(t=>w(t,5),"output"),bytes:4});var Sr=Object.freeze({CAM:k(ht,ur,zt)(),CSYS:kt,ident:"lch",whitepoint:et});var po=Object.freeze({CAM:k(ht,dr,gr)(),CSYS:St,ident:"oklab",whitepoint:_t});var _o={CAM:k(ht,zr,zt)(),CSYS:kt,ident:"oklch",whitepoint:_t};var Pr=Object.freeze({$coord:ct,bytes:4,domain:y(0,100),ident:"bl\
ue",input:o(t=>t/100,"input"),output:o(t=>w(t*100,2),"output"),short:"\
b"}),Eo=Object.freeze({$coord:ct,bytes:1,domain:y(0,255),ident:"b\
lue",input:o(t=>t/255,"input"),output:o(t=>Eo.domain.clamp(Math.round(
t*255)),"output"),short:"B"});var wr=Object.freeze({$coord:dt,bytes:4,domain:y(0,100),ident:"gr\
een",input:o(t=>t/100,"input"),output:o(t=>w(t*100,2),"output"),short:"\
g",description:"Green Light Intensity"}),Zo=Object.freeze({$coord:dt,
bytes:1,domain:y(0,255),ident:"green",input:o(t=>t/255,"input"),output:o(
t=>Zo.domain.clamp(Math.round(t*255)),"output"),short:"G",description:"\
Green Light Intensity"});var kr=Object.freeze({$coord:xt,bytes:4,domain:y(0,100),ident:"gr\
een",input:o(t=>t/100,"input"),output:o(t=>w(t*100,2),"output"),short:"\
r"}),Wo=Object.freeze({$coord:xt,bytes:1,domain:y(0,255),ident:"r\
ed",input:o(t=>t/255,"input"),output:o(t=>Wo.domain.clamp(Math.round(
t*255)),"output"),short:"R"});var Lt=k(kr,wr,Pr)(),Bt=St,Gt=_t,it=Object.freeze({ident:"srgb",CAM:Lt,
CSYS:Bt,whitepoint:Gt}),Xt=Object.freeze({ident:"srgb-linear",CAM:Lt,
CSYS:Bt,whitepoint:Gt}),lo=Object.freeze({ident:"a98-rgb",CAM:Lt,
CSYS:Bt,whitepoint:Gt}),Lo=Object.freeze({ident:"display-p3",CAM:Lt,
CSYS:Bt,whitepoint:Gt}),Go=Object.freeze({ident:"prophoto-rgb",CAM:Lt,
CSYS:Bt,whitepoint:et}),No=Object.freeze({ident:"rec2020",CAM:Lt,
CSYS:Bt,whitepoint:Gt}),vr=Object.freeze({ident:"rgb",CAM:k(Wo,Zo,
Eo)(),CSYS:Bt,whitepoint:Gt});var K=Object.freeze({ident:"xyz-d65",CSYS:St,whitepoint:_t}),U=Object.
freeze({ident:"xyz-d50",CSYS:St,whitepoint:et});var _n=Object.defineProperty,Pt=o((t,r)=>_n(t,"name",{value:r,configurable:!0}),
"n"),ln=Pt(t=>sn(t)&&Symbol.iterator in t&&typeof t[Symbol.iterator]==
"function","isIterableObject"),sn=Pt(t=>t!==null&&typeof t=="obje\
ct"&&Array.isArray(t)===!1,"isObject"),O_=Pt(t=>ln(t)&&"length"in
t&&typeof t.length=="number"&&t.length>=9,"isMatrix");function u(...t){
let r=Math.max(t.length,9),e=new ArrayBuffer(r*8),i=new Float64Array(
e,0,r);i.set(t);let n=Object.create(null,{[Symbol.iterator]:{value:Pt(
function*(){for(let a=0;a<i.length;a++)yield this[a]},"value")},[Symbol.
isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{value:Pt(()=>"\
Matrix"+i.toString(),"value")},length:{enumerable:!0,value:r},toArray:{
value:Pt(()=>Iterator.from(i).toArray(),"value")},toString:{value:i.
toString}});for(let a=0;a<r;a++)(function(p,l,s){Object.defineProperty(
p,l,{enumerable:!0,get:Pt(()=>s[l],"get"),set:Pt(m=>{if(typeof m==
"number")s[l]=m;else throw new TypeError("Expected Number")},"set")})})(
n,a,i);return n}o(u,"v");Pt(u,"createMatrix");var mn=Object.defineProperty,M=o((t,r)=>mn(t,"name",{value:r,configurable:!0}),
"t"),bn=M(t=>typeof t=="string","isString"),Ho=M(t=>$o(t)&&Symbol.
iterator in t&&typeof t[Symbol.iterator]=="function","isIterableO\
bject"),$o=M(t=>t!==null&&typeof t=="object"&&Array.isArray(t)===
!1,"isObject"),cn=M(t=>bn(t)&&hn.has(t),"isSpaceID"),fn=M(t=>$o(t)&&
"ident"in t&&cn(t.ident)&&"CSYS"in t&&$o(t.CSYS)&&"length"in t.CSYS&&
t.CSYS.length===3,"isColorSpace"),hn=new Set(["a98-rgb","display-\
p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec20\
20","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz-d65"]),xn=M(t=>Ho(
t)&&"length"in t&&typeof t.length=="number"&&t.length>=9,"isMatri\
x"),dn=M(t=>Ho(t)&&"space"in t&&fn(t.space)&&"length"in t&&t.length===
3&&Iterator.from(t).every(r=>typeof r=="number"),"isPointInSpace"),
yn=M(t=>Ho(t)&&"length"in t&&t.length===3&&"multiply"in t&&typeof t.
multiply=="function","isVector");function f(t,r=0,e=0){let i=dn(t)?
new Float64Array(t.buffer):Float64Array.of(t,r,e),n=Object.create(
null,{head:{enumerable:!0,get:M(()=>Iterator.from(i),"get")}});return Object.
defineProperties(n,{each:{value:Ir},multiply:{value:Mr},update:{value:M(
function(a,p,l){let s=Array.isArray(a)?a.slice(3):Array.of(a,p,l);
return i.set(this.head.map((m,c)=>s[c]??m).toArray()),this},"valu\
e")}}),Object.defineProperties(n,{[Symbol.isConcatSpreadable]:{value:!0},
[Symbol.iterator]:{value:M(function*(){yield this[0],yield this[1],
yield this[2]},"value")},0:{enumerable:!0,get:M(()=>i[0],"get"),set:M(
a=>{if(typeof a=="number")i[0]=a;else throw new TypeError("Expect\
ed Number")},"set")},1:{enumerable:!0,get:M(()=>i[1],"get"),set:M(
a=>{if(typeof a=="number")i[1]=a;else throw new TypeError("Expect\
ed Number")},"set")},2:{enumerable:!0,get:M(()=>i[2],"get"),set:M(
a=>{if(typeof a=="number")i[2]=a;else throw new TypeError("Expect\
ed Number")},"set")},length:{enumerable:!0,value:3}}),Object.defineProperties(
n,{[Symbol.toStringTag]:{get(){return`Vector[${this.toString()}]`}},
entries:{value:M(function(){return this.values().map((a,p)=>Object.
seal(Array.of(p,a)))},"value")},toArray:{value:M(function(){return Object.
seal(Array.of(this[0],this[1],this[2]))},"value")},toString:{value:M(
()=>i.toString(),"value")},values:{value:M(function(){return Iterator.
from(this.toArray())},"value")}}),n}o(f,"G");M(f,"createVector");
function Ir(t){for(let r=0;r<3;r++)t(this[r],r,this);return this}
o(Ir,"A");M(Ir,"each");function Mr(t){let[r,e,i]=this.head;if(xn(
t)||yn(t)){let[n,a,p,l=0,s=0,m=0,c=0,E=0,d=0]=t;return this.update(
r*n+e*l+i*c,r*a+e*s+i*E,r*p+e*m+i*d)}else throw new TypeError("Un\
supported Multiplicator: "+t)}o(Mr,"V");M(Mr,"multiply");var gn=Object.defineProperty,nt=o((t,r)=>gn(t,"name",{value:r,configurable:!0}),
"t"),un=nt(t=>typeof t=="number","isNumber"),zn=nt(t=>typeof t=="\
string","isString"),Cr=nt(t=>Vo(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function","isIterableObject"),Vo=nt(t=>t!==null&&typeof t==
"object","isObject"),Sn=nt(t=>zn(t)&&Pn.has(t),"isSpaceID"),Yr=nt(
t=>Vo(t)&&"ident"in t&&Sn(t.ident)&&"CSYS"in t&&Vo(t.CSYS)&&"leng\
th"in t.CSYS&&t.CSYS.length===3,"isColorSpace"),Pn=new Set(["a98-\
rgb","display-p3","hsl","hwb","lab","lch","oklab","oklch","propho\
to-rgb","rec2020","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz\
-d65"]),b=nt(t=>Cr(t)&&"space"in t&&Yr(t.space)&&"length"in t&&t.
length===3&&Iterator.from(t).every(r=>typeof r=="number"),"isPoin\
tInSpace");function _(t,r){if(Yr(t)===!1)throw new TypeError("Poi\
nt must be declared in a valid color space instead of "+JSON.stringify(
t,void 0,2));if((r instanceof ArrayBuffer||Array.isArray(r)&&r.length===
3&&r.every(p=>un(p)))===!1)throw new TypeError("Point in space ha\
s valid coordinates. Wrong parameters: "+JSON.stringify(r,void 0,
2));let e=t.CSYS.length,i=r instanceof ArrayBuffer?new Float64Array(
r):new Float64Array(e),n=t.CAM===void 0?Array.of(0,1,2):t.CAM.toArray().
map(p=>t.CSYS.toArray().findIndex(l=>p.$coord===l)),a=Object.create(
null,{buffer:{value:i.buffer},colorspace:{enumerable:!0,value:t.ident},
length:{value:e},space:{value:t}});return Object.defineProperties(
a,{equals:{value:nt(function(p,l=1e-5){let[s,m,c]=this.position,[
E,d,V]=p.position;return this.colorspace===p.colorspace&&Math.abs(
s-E)<=l*Math.max(1,Math.abs(s),Math.abs(E))&&Math.abs(m-d)<=l*Math.
max(1,Math.abs(m),Math.abs(d))&&Math.abs(c-V)<=l*Math.max(1,Math.
abs(c),Math.abs(V))},"value")},set:{value:nt(function(p){let l=0;
for(let s of p)if(this[l]=s,l<3)l++;else break;return this},"valu\
e")}}),(function(p,l){Object.defineProperties(p,{[Symbol.iterator]:{
value:nt(function*(){yield this[0],yield this[1],yield this[2]},"\
value")},adapted:{get(){if(typeof this.space.CSYS.adapt=="functio\
n"){let[s,m,c]=this.position;return Iterator.from(this.space.CSYS.
adapt(s,m,c))}else return this.position}},position:{get:nt(()=>Iterator.
from(l),"get")}});for(let s=0;s<p.length;s++)(function(m,c,E){Object.
defineProperty(p,s,{enumerable:!0,get(){let{CAM:d,CSYS:V}=this.space,
bt=V[c],F=d!==void 0?d[m]:null,j=E[c];return"output"in bt&&typeof bt.
output=="function"&&(j=bt.output(j)),F!==null&&"output"in F&&typeof F.
output=="function"&&(j=F.output(j)),j},set(d){let{CAM:V,CSYS:bt}=this.
space,F=bt[c],j=V!==void 0?V[m]:null;j!==null&&"input"in j&&typeof j.
input=="function"&&(d=j.input(d)),"input"in F&&typeof F.input=="f\
unction"&&(d=F.input(d)),typeof d=="string"&&(d=parseFloat(d)),E[c]=
d}})})(s,n[s],l)})(a,i),Object.defineProperties(a,{[Symbol.toStringTag]:{
get(){return`PointInSpace(${this.toString()})`}},entries:{value:nt(
function(){let p=this.space.CAM??this.space.CSYS;return Iterator.
from([[p[0],this[0]],[p[1],this[1]],[p[2],this[2]]])},"value")},toString:{
value:nt(function(){return`${this.colorspace};[${this.values().toArray().
toString()}]`},"value")},values:{value:nt(function(){return Iterator.
from([this[0],this[1],this[2]])},"value")}}),Cr(r)?a.set(r):a}o(_,
"X");nt(_,"initPointInSpace");var J=o(t=>{let r=Math.abs(t);return r<=.04045?t/12.92:Math.sign(
t)*Math.pow((r+.055)/1.055,2.4)},"to_linear"),Q=o(t=>{let r=Math.
abs(t);return r>.0031308?Math.sign(t)*(1.055*Math.pow(r,1/2.4)-.055):
12.92*t},"to_gamut");var at=u(1.0479297925449969,.02962780877005599,-.009243040646204504,
.022946870601609652,.9904344267538799,.015055191490298152,-.05019226628920524,
-.017073799063418826,.7518742814281371),Z=u(.955473421488075,-.0283697093338637,
.012314014864481998,-.02309845494876471,1.0099953980813041,-.020507649298898964,
.06325924320057072,.021041441191917323,1.330365926242124);var Ar=u(608311/1250200,35783/156275,0,189793/714400,247089/357200,
32229/714400,198249/1000160,198249/2500400,5220557/5000800),W=o(t=>{
if(b(t)&&t.colorspace==="display-p3"){let[r,e,i]=t.position,[n,a,
p]=f(r,e,i).each((l,s,m)=>m[s]=J(l)).multiply(Ar);return _(K,[n,a,
p])}else throw new Error("Wrong parameter passed: "+t)},"display_\
p3_into_xyz_d65"),Nt=o(t=>{if(b(t)&&t.colorspace==="display-p3"){
let[r,e,i]=t.position,[n,a,p]=f(r,e,i).each((l,s,m)=>m[s]=J(l)).multiply(
Ar).multiply(at);return _(U,[n,a,p])}else throw new Error("Wrong \
parameter passed: "+t)},"display_p3_into_xyz_d50");var Fo=o(t=>Math.sign(t)*Math.pow(Math.abs(t),2.19921875),"to_lin\
ear"),Ko=o(t=>Math.sign(t)*Math.pow(Math.abs(t),256/563),"to_gamu\
t");var Or=u(1829569/896150,-851781/878810,16779/1248040,-506331/896150,
1648619/878810,-147721/1248040,-308931/896150,36519/878810,1266979/
1248040),D=o(t=>{if(b(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.
position,[n,a,p]=f(r,e,i).multiply(Or).each((l,s,m)=>m[s]=Ko(l)*100);
return _(lo,[n,a,p])}else throw new Error("Wrong parameter passed\
: "+t)},"xyz_d65_into_a98_rgb"),Tr=o(t=>{if(b(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(Z).multiply(
Or).each((l,s,m)=>m[s]=Ko(l)*100);return _(lo,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_a98_rgb");var Rr=o(t=>D(W(t)),"display_p3_into_a98_rgb");var jr=u(573536/994567,591459/1989134,53769/1989134,263643/1420810,
6239551/9945670,351524/4972835,187206/994567,374412/4972835,4929758/
4972835),L=o(t=>{if(b(t)&&t.colorspace==="a98-rgb"){let[r,e,i]=t.
position,[n,a,p]=f(r,e,i).each((l,s,m)=>m[s]=Fo(l)).multiply(jr);
return _(K,[n,a,p])}else throw new Error("Wrong parameter passed:\
 "+t)},"a98_rgb_into_xyz_d65"),$t=o(t=>{if(b(t)&&t.colorspace==="\
a98-rgb"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).each((l,s,m)=>m[s]=
Fo(l)).multiply(jr).multiply(at);return _(U,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"a98_rgb_into_xyz_d50");var ho=u(12831/3959,-851781/878810,705/12673,-329/214,1648619/878810,
-2585/12673,-1974/3959,36519/878810,705/667),T=o(t=>{if(b(t)&&t.colorspace===
"xyz-d65"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(ho).each(
(l,s,m)=>m[s]=Q(l)*100);return _(it,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_srgb"),pt=o(t=>{if(b(
t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,[n,a,p]=f(r,e,
i).multiply(ho).each((l,s,m)=>m[s]*=100);return _(Xt,[n,a,p])}else
throw new Error("Wrong parameter passed: "+t)},"xyz_d65_into_srgb\
_linear"),mt=o(t=>{if(b(t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.
position,[n,a,p]=f(r,e,i).multiply(Z).multiply(ho).each((l,s,m)=>m[s]=
Q(l)*100);return _(it,[n,a,p])}else throw new Error("Wrong parame\
ter passed: "+t)},"xyz_d50_into_srgb"),Ht=o(t=>{if(b(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(Z).multiply(
ho).each((l,s,m)=>m[s]*=100);return _(Xt,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_srgb_linear");var vt=o(t=>T(L(t)),"a98_rgb_into_srgb"),Dr=o(t=>pt(L(t)),"a98_rg\
b_into_srgb_linear");var It=o(t=>T(W(t)),"display_p3_into_srgb"),Br=o(t=>pt(W(t)),"dis\
play_p3_into_srgb_linear");var lt=o((t,r,e)=>{let i=2*Math.PI,n=Math.PI/6;t<0&&(t+=i),t=t%i;
let a=o(p=>{let l=(p+t/n)%12,s=r*Math.min(e,1-e);return e-s*Math.
max(-1,Math.min(l-3,9-l,1))},"f");return[a(0),a(8),a(4)]},"hsl_to\
_rgb");var Xr=o(t=>{if(b(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=lt(e,r,i).map(a=>Math.min(Math.max(Math.round(a*255),0),255));return _(
vr,n)}else throw new Error("Wrong parameter passed: "+t)},"hsl_in\
to_rgb"),xo=o(t=>{if(b(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=lt(e,r,i).map(a=>a*100);return _(it,n)}else throw new Error("Wr\
ong parameter passed: "+t)},"hsl_into_srgb"),Er=o(t=>{if(b(t)&&t.
colorspace==="hsl"){let[r,e,i]=t.position,n=lt(e,r,i).map(a=>J(a)*
100);return _(Xt,n)}else throw new Error("Wrong parameter passed:\
 "+t)},"hsl_into_srgb_linear");var Mt=o((t,r,e)=>{if(r+e>=1){let i=r/(r+e);return[i,i,i]}else{let[
i,n,a]=lt(t,1,.5).map(p=>p*(1-r-e)+r);return[i,n,a]}},"hwb_to_rgb");var yo=o(t=>{if(b(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
n=Mt(e,r,i).map(a=>a*100);return _(it,n)}else throw new Error("Wr\
ong parameter passed: "+t)},"hwb_into_srgb"),Zr=o(t=>{if(b(t)&&t.
colorspace==="hwb"){let[r,e,i]=t.position,n=Mt(e,r,i).map(a=>J(a)*
100);return _(Xt,n)}else throw new Error("Wrong parameter passed:\
 "+t)},"hwb_into_srgb_linear");var z=o(t=>{if(b(t)&&t.colorspace==="lab"){let r=903.2962962962963,
e=216/24389,[i,n,a]=t,p=(i+16)/116,l=n/500+p,s=Math.pow(l,3),m=p-
a/200,c=Math.pow(m,3),E=(s>e?s:(116*l-16)/r)*et[0],d=(i>r*e?Math.
pow((i+16)/116,3):i/r)*et[1],V=(c>e?c:(116*m-16)/r)*et[2];return _(
U,[E,d,V])}else throw new Error("Wrong parameter passed: "+t)},"l\
ab_into_xyz_d50"),yt=o(t=>{let r=z(t),[e,i,n]=f(r).multiply(Z);return _(
K,[e,i,n])},"lab_into_xyz_d65");var Ct=o(t=>mt(z(t)),"lab_into_srgb"),Wr=o(t=>Ht(z(t)),"lab_into_\
srgb_linear");var N=o(t=>{if(b(t)&&t.colorspace==="lch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=e*Math.cos(i),a=e*Math.sin(i);return _(
fo,[r,n,a])}else throw new Error("Wrong parameter passed: "+t)},"\
lch_into_lab");var Yt=o(t=>mt(z(N(t))),"lch_into_srgb"),Lr=o(t=>Ht(z(N(t))),"lch\
_into_srgb_linear");var Gr=u(1,1,1,.3963377773761749,-.1055613458156586,-.0894841775298119,
.2158037573099136,-.0638541728258133,-1.2914855480194092),Vt=u(.819022437996703,
.0329836539323885,.0481771893596242,.3619062600528904,.9292868615863434,
.2642395317527308,-.1288737815209879,.0361446663506424,.6335478284694309),
Ft=u(.210454268309314,1.9779985324311684,.0259040424655478,.7936177747023054,
-2.42859224204858,.7827717124575296,-.0040720430116193,.450593709617411,
-.8086757549230774),Nr=u(1.2268798758459243,-.0405757452148008,-.0763729366746601,
-.5578149944602171,1.112286803280317,-.4214933324022432,.2813910456659647,
-.0717110580655164,1.5869240198367816);var g=o(t=>{if(b(t)&&t.colorspace==="oklab"){let[r,e,i]=t.position,
[n,a,p]=f(i,r,e).multiply(Gr).each((l,s,m)=>m[s]=l**3).multiply(Nr);
return _(K,[n,a,p])}else throw new Error("Wrong parameter passed:\
 "+t)},"oklab_into_xyz_d65"),At=o(t=>{let[r,e,i]=f(g(t)).multiply(
at);return _(U,[r,e,i])},"oklab_into_xyz_d50");var Ot=o(t=>T(g(t)),"oklab_into_srgb"),$r=o(t=>pt(g(t)),"oklab_in\
to_srgb_linear");var tt=o(t=>{if(b(t)&&t.colorspace==="oklch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=isNaN(i)?0:e*Math.cos(i),a=isNaN(i)?0:
e*Math.sin(i);return _(po,[r,n,a])}else throw new Error("Wrong pa\
rameter passed: "+t)},"oklch_into_oklab");var Tt=o(t=>T(g(tt(t))),"oklch_into_srgb"),Hr=o(t=>pt(g(tt(t))),"\
oklch_into_srgb_linear");var Vr=o(t=>{let r=Math.abs(t);return r<=.03125?t/16:Math.sign(t)*
Math.pow(r,1.8)},"to_linear"),Uo=o(t=>{let r=Math.abs(t);return r>=
1/512?Math.sign(t)*Math.pow(r,1/1.8):16*t},"to_gamut");var wn=u(.7977666449006423,.2880748288194013,0,.13518129740053308,
.711835234241873,0,.0313477341283922,8993693872564e-17,.8251046025104602),
wt=o(t=>{if(b(t)&&t.colorspace==="prophoto-rgb"){let r=_(U,t.position.
toArray());return f(r).each((e,i,n)=>n[i]=Vr(e)).multiply(wn),r}else
throw new Error("Wrong parameter passed: "+t)},"prophoto_rgb_into\
_xyz_d50"),q=o(t=>{let r=wt(t),e=_(K,r.position.toArray());return f(
e).multiply(Z),e},"prophoto_rgb_into_xyz_d65");var Rt=o(t=>T(q(t)),"prophoto_rgb_into_srgb"),Fr=o(t=>pt(q(t)),"p\
rophoto_rgb_into_srgb_linear");var go=1.09929682680944,Kr=.018053968510807,qo=o(t=>{let r=Math.abs(
t);return r<Kr*4.5?t/4.5:Math.sign(t)*Math.pow((r+go-1)/go,1/.45)},
"to_linear"),Jo=o(t=>{let r=Math.abs(t);return r>Kr?Math.sign(t)*
(go*Math.pow(r,.45)-(go-1)):4.5*t},"to_gamut");var Ur=u(63426534/99577255,26158966/99577255,4994106574466076e-32,
20160776/139408157,472592308/697040785,19567812/697040785,47086771/
278816314,8267143/139408157,295819943/278816314),G=o(t=>{if(b(t)&&
t.colorspace==="rec2020"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).
each((l,s,m)=>m[s]=qo(l)).multiply(Ur);return _(K,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"rec2020_into_xyz_d65"),Kt=o(t=>{if(b(
t)&&t.colorspace==="rec2020"){let[r,e,i]=t.position,[n,a,p]=f(r,e,
i).each((l,s,m)=>m[s]=qo(l)).multiply(Ur).multiply(at);return _(U,
[n,a,p])}else throw new Error("Wrong parameter passed: "+t)},"rec\
2020_into_xyz_d50");var jt=o(t=>T(G(t)),"rec2020_into_srgb"),qr=o(t=>pt(G(t)),"rec202\
0_into_srgb_linear");var uo=u(506752/1228815,87098/409605,7918/409605,87881/245763,175762/
245763,87881/737289,12673/70218,12673/175545,1001167/1053270),S=o(
t=>{if(b(t)&&["rgb","srgb"].includes(t.colorspace)){let[r,e,i]=t.
position,[n,a,p]=f(r,e,i).each((l,s,m)=>m[s]=J(l)).multiply(uo);return _(
K,[n,a,p])}else throw new Error("Wrong parameter passed: "+t)},"s\
rgb_into_xyz_d65"),$=o(t=>{if(b(t)&&t.colorspace==="srgb-linear"){
let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(uo);return _(K,[n,
a,p])}else throw new Error("Wrong parameter passed: "+t)},"srgb_l\
inear_into_xyz_d65"),st=o(t=>{if(b(t)&&["rgb","srgb"].includes(t.
colorspace)){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).each((l,s,m)=>m[s]=
J(l)).multiply(uo).multiply(at);return _(U,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_xyz_d50"),Ut=o(t=>{if(b(
t)&&t.colorspace==="srgb-linear"){let[r,e,i]=t.position,[n,a,p]=f(
r,e,i).multiply(uo).multiply(at);return _(U,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_linear_into_xyz_d50");var Dt=o(t=>D(S(t)),"srgb_into_a98_rgb"),Jr=o(t=>D($(t)),"srgb_li\
near_into_a98_rgb");var Qr=o(t=>Dt(xo(t)),"hsl_into_a98_rgb");var te=o(t=>{if(b(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position;
if(r+i>=1){let n=r/(r+i);return _(lo,[n,n,n])}else{let n=lt(e,1,.5).
map(a=>(a*(1-r-i)+r)*100);return Dt(_(it,n))}}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_a98_rgb");var oe=o(t=>D(yt(t)),"lab_into_a98_rgb");var re=o(t=>D(yt(N(t))),"lch_into_a98_rgb");var ee=o(t=>D(g(t)),"oklab_into_a98_rgb");var qt=o(t=>At(tt(t)),"oklch_into_xyz_d50"),Jt=o(t=>g(tt(t)),"okl\
ch_into_xyz_d65");var ie=o(t=>D(Jt(t)),"oklch_into_a98_rgb");var ne=o(t=>D(q(t)),"prophoto_rgb_into_a98_rgb");var ae=o(t=>D(G(t)),"rec2020_into_a98_rgb");var pe=u(446124/178915,-14852/17905,11844/330415,-333277/357830,63121/
35810,-50337/660830,-72051/178915,423/17905,316169/330415),B=o(t=>{
if(b(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,[n,a,p]=f(
r,e,i).multiply(pe).each((l,s,m)=>m[s]=Q(l)*100);return _(Lo,[n,a,
p])}else throw new Error("Wrong parameter passed: "+t)},"xyz_d65_\
into_display_p3"),Qt=o(t=>{if(b(t)&&t.colorspace==="xyz-d50"){let[
r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(Z).multiply(pe).each(
(l,s,m)=>m[s]=Q(l)*100);return _(Lo,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_display_p3");var _e=o(t=>B(L(t)),"a98_rgb_into_display_p3");var to=o(t=>{if(b(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=lt(e,r,i).map(p=>p*100),a=_(it,n);return st(a)}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_xyz_d50"),ot=o(t=>{if(b(
t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,n=lt(e,r,i).map(p=>p*
100),a=_(it,n);return S(a)}else throw new Error("Wrong parameter \
passed: "+t)},"hsl_into_xyz_d65");var le=o(t=>B(ot(t)),"hsl_into_display_p3");var oo=o(t=>{if(b(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
n=Mt(e,r,i).map(p=>p*100),a=_(it,n);return st(a)}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_xyz_d50"),rt=o(t=>{if(b(
t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,n=Mt(e,r,i).map(p=>p*
100),a=_(it,n);return S(a)}else throw new Error("Wrong parameter \
passed: "+t)},"hwb_into_xyz_d65");var se=o(t=>B(rt(t)),"hwb_into_display_p3");var me=o(t=>Qt(z(t)),"lab_into_display_p3");var be=o(t=>Qt(z(N(t))),"lch_into_display_p3");var ce=o(t=>B(g(t)),"oklab_into_display_p3");var fe=o(t=>B(g(tt(t))),"oklch_into_display_p3");var he=o(t=>B(q(t)),"prophoto_rgb_into_display_p3");var xe=o(t=>B(G(t)),"rec2020_into_display_p3");var zo=o(t=>B(S(t)),"srgb_into_display_p3"),de=o(t=>B($(t)),"srgb\
_linear_into_display_p3");var C=o((t,r,e)=>{let i=Math.max(t,r,e),n=Math.min(t,r,e),a=i-n,p=ye(
t,r,e),l=0,s=(n+i)/2;return a!==0&&(l=s===0||s===1?0:(i-s)/Math.min(
s,1-s)),l<0&&(p+=Math.PI,l=Math.abs(l)),l<=1e-5&&(p=NaN),[p*180/Math.
PI,l*100,s*100]},"rgb_to_hsl"),ye=o((t,r,e)=>{let i=Math.max(t,r,
e),n=Math.min(t,r,e),a=NaN,p=i-n;if(p!==0){switch(i){case t:a=(r-
e)/p+(r<e?6:0);break;case r:a=(e-t)/p+2;break;case e:a=(t-r)/p+4}
a*=Math.PI/3}return a},"rgb_to_hue"),Y=o((t,r,e)=>{let i=ye(t,r,e),
n=Math.min(t,Math.min(r,e)),a=1-Math.max(t,Math.max(r,e));return[
i*180/Math.PI,n*100,a*100]},"rgb_to_hwb");var ge=o(t=>{let[r,e,i]=vt(t).position;return _(v,C(r,e,i))},"a98\
_rgb_into_hsl");var ue=o(t=>{let[r,e,i]=It(t).position;return _(v,C(r,e,i))},"dis\
play_p3_into_hsl");var ze=o(t=>{if(b(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
[n,a,p]=Mt(e,r,i),[l,s,m]=C(n,a,p);return _(v,[l,s,m])}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_hsl");var Se=o(t=>{let[r,e,i]=Ct(t).position;return _(v,C(r,e,i))},"lab\
_into_hsl");var Pe=o(t=>{let[r,e,i]=Yt(t).position;return _(v,C(r,e,i))},"lch\
_into_hsl");var we=o(t=>{let[r,e,i]=Ot(t).position;return _(v,C(r,e,i))},"okl\
ab_into_hsl");var ke=o(t=>{let[r,e,i]=Tt(t).position;return _(v,C(r,e,i))},"okl\
ch_into_hsl");var ve=o(t=>{let[r,e,i]=Rt(t).position;return _(v,C(r,e,i))},"pro\
photo_rgb_into_hsl");var Ie=o(t=>{let[r,e,i]=jt(t).position,[n,a,p]=C(r,e,i);return _(
v,[n,a,p])},"rec2020_into_hsl");var So=o(t=>{if(b(t)&&["rgb","srgb"].includes(t.colorspace)){let[
r,e,i]=t.position,[n,a,p]=C(r,e,i);return _(v,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_hsl"),Me=o(t=>{if(b(t)&&
t.colorspace==="srgb-linear"){let[r,e,i]=t.position.map(l=>Q(l)),
[n,a,p]=C(r,e,i);return _(v,[n,a,p])}else throw new Error("Wrong \
parameter passed: "+t)},"srgb_linear_into_hsl");var Ce=o(t=>{let[r,e,i]=mt(t).position;return _(v,C(r,e,i))},"xyz\
_d50_into_hsl"),Qo=o(t=>{let[r,e,i]=T(t).position;return _(v,C(r,
e,i))},"xyz_d65_into_hsl");var Ye=o(t=>{let[r,e,i]=vt(t).position;return _(I,Y(r,e,i))},"a98\
_rgb_into_hwb");var Ae=o(t=>{let[r,e,i]=It(t).position;return _(I,Y(r,e,i))},"dis\
play_p3_into_hwb");var Oe=o(t=>{if(b(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
[n,a,p]=lt(e,r,i);return _(I,Y(n,a,p))}else throw new Error("Wron\
g parameter passed: "+t)},"hsl_into_hwb");var Te=o(t=>{let[r,e,i]=Ct(t).position;return _(I,Y(r,e,i))},"lab\
_into_hwb");var Re=o(t=>{let[r,e,i]=Yt(t).position;return _(I,Y(r,e,i))},"lch\
_into_hwb");var je=o(t=>{let[r,e,i]=Ot(t).position;return _(I,Y(r,e,i))},"okl\
ab_into_hwb");var De=o(t=>{let[r,e,i]=Tt(t).position;return _(I,Y(r,e,i))},"okl\
ch_into_hwb");var Be=o(t=>{let[r,e,i]=Rt(t).position;return _(I,Y(r,e,i))},"pro\
photo_rgb_into_hwb");var Xe=o(t=>{let[r,e,i]=jt(t).position;return _(I,Y(r,e,i))},"rec\
2020_into_hwb");var Po=o(t=>{if(b(t)&&["rgb","srgb"].includes(t.colorspace)){let[
r,e,i]=t.position;return _(I,Y(r,e,i))}else throw new Error("Wron\
g parameter passed: "+t)},"srgb_into_hwb"),Ee=o(t=>{if(b(t)&&t.colorspace===
"srgb-linear"){let[r,e,i]=t.position.map(n=>Q(n));return _(I,Y(r,
e,i))}else throw new Error("Wrong parameter passed: "+t)},"srgb_l\
inear_into_hwb");var Ze=o(t=>{let[r,e,i]=mt(t).position;return _(I,Y(r,e,i))},"xyz\
_d50_into_hwb"),tr=o(t=>{let[r,e,i]=T(t).position;return _(I,Y(r,
e,i))},"xyz_d65_into_hwb");var ro=o(t=>{if(b(t)&&t.colorspace==="xyz-d50"){let r=_(K,t.position.
toArray());return f(r).multiply(Z),r}else throw new Error("Wrong \
parameter passed: "+t)},"xyz_d50_into_xyz_d65"),h=o(t=>{if(b(t)&&
t.colorspace==="xyz-d65"){let r=_(U,t.position.toArray());return f(
r).multiply(at),r}else throw new Error("Wrong parameter passed: "+
t)},"xyz_d65_into_xyz_d50");var so=o(t=>x(h(t)),"xyz_d65_into_lab"),x=o(t=>{if(b(t)&&t.colorspace===
"xyz-d50"){let r=.008856451679035631,e=29**3/3**3,[i,n,a]=t.position.
map((m,c)=>m/et[c]).map(m=>m>r?Math.cbrt(m):(e*m+16)/116),p=116*n-
16,l=500*(i-n),s=200*(n-a);return _(fo,[p,l,s])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_lab");var We=o(t=>{let r=L(t),e=h(r);return x(e)},"a98_rgb_into_lab");var Le=o(t=>{let r=W(t),e=h(r);return x(e)},"display_p3_into_lab");var Ge=o(t=>{let r=ot(t),e=h(r);return x(e)},"hsl_into_lab");var Ne=o(t=>{let r=rt(t),e=h(r);return x(e)},"hwb_into_lab");var $e=o(t=>{let r=g(t),e=h(r);return x(e)},"oklab_into_lab");var He=o(t=>{let r=tt(t),e=g(r),i=h(e);return x(i)},"oklch_into_l\
ab");var Ve=o(t=>{let r=wt(t);return x(r)},"prophoto_rgb_into_lab");var Fe=o(t=>{let r=G(t),e=h(r);return x(e)},"rec2020_into_lab");var wo=o(t=>{let r=S(t),e=h(r);return x(e)},"srgb_into_lab"),Ke=o(
t=>{let r=$(t),e=h(r);return x(e)},"srgb_linear_into_lab");var A=o(t=>{if(b(t)&&t.colorspace==="lab"){let[r,e,i]=t,n=Math.atan2(
i,e)*(180/Math.PI),a=Math.hypot(e,i);return _(Sr,[r,a,n])}else throw new Error(
"Wrong parameter passed: "+t)},"lab_into_lch");var Ue=o(t=>{let r=L(t),e=h(r),i=x(e);return A(i)},"a98_rgb_into_\
lch");var qe=o(t=>{let r=W(t),e=h(r),i=x(e);return A(i)},"display_p3_in\
to_lch");var Je=o(t=>{let r=ot(t),e=h(r),i=x(e);return A(i)},"hsl_into_lch");var Qe=o(t=>{let r=rt(t),e=h(r),i=x(e);return A(i)},"hwb_into_lch");var ti=o(t=>{let r=g(t),e=h(r),i=x(e);return A(i)},"oklab_into_lc\
h");var oi=o(t=>{let r=tt(t),e=g(r),i=h(e),n=x(i);return A(n)},"oklch\
_into_lch");var ri=o(t=>{let r=wt(t),e=x(r);return A(e)},"prophoto_rgb_into_l\
ch");var ei=o(t=>{let r=G(t),e=h(r),i=x(e);return A(i)},"rec2020_into_\
lch");var ko=o(t=>{let r=S(t),e=h(r),i=x(e);return A(i)},"srgb_into_lch"),
ii=o(t=>{let r=$(t),e=h(r),i=x(e);return A(i)},"srgb_linear_into_\
lch");var ni=o(t=>A(x(t)),"xyz_d50_into_lch"),or=o(t=>A(so(t)),"xyz_d65\
_into_lch");var R=o(t=>{if(b(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,a,p]=f(r,e,i).multiply(Vt).each((l,s,m)=>m[s]=Math.cbrt(l)).multiply(
Ft);return _(po,[n*100,a,p])}else throw new Error("Wrong paramete\
r passed: "+t)},"xyz_d65_into_oklab"),ai=o(t=>{if(b(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(Z).multiply(
Vt).each((l,s,m)=>m[s]=Math.cbrt(l)).multiply(Ft);return _(po,[n*
100,a,p])}else throw new Error("Wrong parameter passed: "+t)},"xy\
z_d50_into_oklab");var pi=o(t=>R(L(t)),"a98_rgb_into_oklab");var _i=o(t=>R(W(t)),"display_p3_into_oklab");var li=o(t=>{let r=ot(t);return R(r)},"hsl_into_oklab");var si=o(t=>R(rt(t)),"hwb_into_oklab");var eo=o(t=>{let r=z(t),e=ro(r);return R(e)},"lab_into_oklab");var mi=o(t=>{let r=N(t),e=z(r),i=ro(e);return R(i)},"lch_into_okl\
ab");var bi=o(t=>R(q(t)),"prophoto_rgb_into_oklab");var ci=o(t=>R(G(t)),"rec2020_into_oklab");var vo=o(t=>{let r=S(t);return R(r)},"srgb_into_oklab"),fi=o(t=>{
let r=$(t);return R(r)},"srgb_linear_into_oklab");var H=o(t=>{if(b(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,a,p]=f(r,e,i).multiply(Vt).each((c,E,d)=>d[E]=Math.cbrt(c)).multiply(
Ft),l=n*100,s=Math.hypot(a,p),m=s<.001?NaN:Math.atan2(p,a)*180/Math.
PI;return _(_o,[l,s,m])}else throw new Error("Wrong parameter pas\
sed: "+t)},"xyz_d65_into_oklch"),hi=o(t=>{if(b(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position.toArray(),[n,a,p]=f(r,e,i).multiply(
Z).multiply(Vt).each((c,E,d)=>d[E]=Math.cbrt(c)).multiply(Ft),l=n*
100,s=Math.hypot(a,p),m=s<.001?NaN:Math.atan2(p,a)*180/Math.PI;return _(
_o,[l,s,m])}else throw new Error("Wrong parameter passed: "+t)},"\
xyz_d50_into_oklch");var xi=o(t=>{let r=L(t);return H(r)},"a98_rgb_into_oklch");var di=o(t=>{let r=W(t);return H(r)},"display_p3_into_oklch");var yi=o(t=>{let r=ot(t);return H(r)},"hsl_into_oklch");var gi=o(t=>{let r=rt(t);return H(r)},"hwb_into_oklch");var io=o(t=>{if(b(t)&&t.colorspace==="oklab"){let[r,e,i]=t,n=Math.
hypot(e,i),a=n<.001?NaN:Math.atan2(i,e)*180/Math.PI;return _(_o,[
r,n,a])}else throw new Error("Wrong parameter passed: "+t)},"okla\
b_into_oklch");var ui=o(t=>io(eo(t)),"lab_into_oklch");var zi=o(t=>{let r=N(t),e=eo(r);return io(e)},"lch_into_oklch");var Si=o(t=>{let r=q(t);return H(r)},"prophoto_rgb_into_oklch");var Pi=o(t=>{let r=G(t);return H(r)},"rec2020_into_oklch");var Io=o(t=>{let r=S(t);return H(r)},"srgb_into_oklch"),wi=o(t=>{
let r=$(t);return H(r)},"srgb_linear_into_oklch");var ki=u(1.3457868816471583,-.5446307051249019,0,-.25557208737979464,
1.5082477428451468,0,-.05110186497554526,.02052744743642139,1.2119675456389452),
rr=o(t=>{if(b(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,a,p]=f(r,e,i).multiply(at).multiply(ki).each((l,s,m)=>m[s]=Uo(
l)*100);return _(Go,[n,a,p])}else throw new Error("Wrong paramete\
r passed: "+t)},"xyz_d65_into_prophoto_rgb"),O=o(t=>{if(b(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(ki).each(
(l,s,m)=>m[s]=Uo(l)*100);return _(Go,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_prophoto_rgb");var vi=o(t=>O($t(t)),"a98_rgb_into_prophoto_rgb");var Ii=o(t=>O(Nt(t)),"display_p3_into_prophoto_rgb");var no=o(t=>z(N(t)),"lch_into_xyz_d50"),Mo=o(t=>yt(N(t)),"lch_int\
o_xyz_d65");var Mi=o(t=>O(to(t)),"hsl_into_prophoto_rgb");var Ci=o(t=>O(oo(t)),"hwb_into_prophoto_rgb");var Yi=o(t=>O(z(t)),"lab_into_prophoto_rgb");var Ai=o(t=>O(no(t)),"lch_into_prophoto_rgb");var Oi=o(t=>O(At(t)),"oklab_into_prophoto_rgb");var Ti=o(t=>O(qt(t)),"oklch_into_prophoto_rgb");var Ri=o(t=>O(Kt(t)),"rec2020_into_prophoto_rgb");var Co=o(t=>O(st(t)),"srgb_into_prophoto_rgb"),ji=o(t=>O(Ut(t)),"\
srgb_linear_into_prophoto_rgb");var Di=u(30757411/17917100,-19765991/29648200,792561/44930125,-6372589/
17917100,47925759/29648200,-1921689/44930125,-4539589/17917100,467509/
29648200,42328811/44930125),X=o(t=>{if(b(t)&&t.colorspace==="xyz-\
d65"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(Di).each((l,s,m)=>m[s]=
Jo(l)*100);return _(No,[n,a,p])}else throw new Error("Wrong param\
eter passed: "+t)},"xyz_d65_into_rec2020"),ao=o(t=>{if(b(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(Z).multiply(
Di).each((l,s,m)=>m[s]=Jo(l)*100);return _(No,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_rec2020");var Bi=o(t=>X(L(t)),"a98_rgb_into_rec2020");var Xi=o(t=>X(W(t)),"display_p3_into_rec2020");var Ei=o(t=>X(ot(t)),"hsl_into_rec2020");var Zi=o(t=>X(rt(t)),"hwb_into_rec2020");var Wi=o(t=>ao(z(t)),"lab_into_rec2020");var Li=o(t=>ao(z(N(t))),"lch_into_rec2020");var Gi=o(t=>X(g(t)),"oklab_into_rec2020");var Ni=o(t=>X(g(tt(t))),"oklch_into_rec2020");var $i=o(t=>X(q(t)),"prophoto_rgb_into_rec2020");var Yo=o(t=>X(S(t)),"srgb_into_rec2020"),Hi=o(t=>X($(t)),"srgb_li\
near_into_rec2020");var er=o(t=>{let r=Object.getOwnPropertyNames(t);for(let e of r){
let i=t[e];Et(i)&&er(i)}return Object.freeze(t)},"deepFreeze");var P=o(t=>t,"itself"),mo=er({"a98-rgb":{"a98-rgb":P,"display-p3":Rr,
"prophoto-rgb":ne,"srgb-linear":Jr,"xyz-d50":Tr,"xyz-d65":D,hsl:Qr,
hwb:te,lab:oe,lch:re,oklab:ee,oklch:ie,rec2020:ae,rgb:Dt,srgb:Dt,
xyz:D,toGamut:o(t=>t.map(r=>Q(r)),"toGamut"),toLinear:o(t=>t.map(
r=>J(r)),"toLinear")},"display-p3":{"a98-rgb":_e,"display-p3":o(t=>t,
"display-p3"),"prophoto-rgb":he,"srgb-linear":de,"xyz-d50":Qt,"xy\
z-d65":B,hsl:le,hwb:se,lab:me,lch:be,oklab:ce,oklch:fe,rec2020:xe,
rgb:zo,srgb:zo,xyz:B,toGamut:o(t=>t.map(r=>Q(r)),"toGamut"),toLinear:o(
t=>t.map(r=>J(r)),"toLinear")},hsl:{"a98-rgb":ge,"display-p3":ue,
"prophoto-rgb":ve,"srgb-linear":Me,"xyz-d50":Ce,"xyz-d65":Qo,hsl:P,
hwb:ze,lab:Se,lch:Pe,oklab:we,oklch:ke,rec2020:Ie,rgb:So,srgb:So,
xyz:Qo},hwb:{"a98-rgb":Ye,"display-p3":Ae,"prophoto-rgb":Be,"srgb\
-linear":Ee,"xyz-d50":Ze,"xyz-d65":tr,hsl:Oe,hwb:P,lab:Te,lch:Re,
oklab:je,oklch:De,rec2020:Xe,rgb:Po,srgb:Po,xyz:tr},lab:{"a98-rgb":We,
"display-p3":Le,"prophoto-rgb":Ve,"srgb-linear":Ke,"xyz-d50":x,"x\
yz-d65":so,hsl:Ge,hwb:Ne,lab:P,lch:N,oklab:$e,oklch:He,rec2020:Fe,
rgb:wo,srgb:wo,xyz:so},lch:{"a98-rgb":Ue,"display-p3":qe,"prophot\
o-rgb":ri,"srgb-linear":ii,"xyz-d50":ni,"xyz-d65":or,hsl:Je,hwb:Qe,
lab:A,lch:P,oklab:ti,oklch:oi,rec2020:ei,rgb:ko,srgb:ko,xyz:or},oklab:{
"a98-rgb":pi,"display-p3":_i,"prophoto-rgb":bi,"srgb-linear":fi,"\
xyz-d50":ai,"xyz-d65":R,hsl:li,hwb:si,lab:eo,lch:mi,oklab:P,oklch:tt,
rec2020:ci,rgb:vo,srgb:vo,xyz:R},oklch:{"a98-rgb":xi,"display-p3":di,
"prophoto-rgb":Si,"srgb-linear":wi,"xyz-d50":hi,"xyz-d65":H,hsl:yi,
hwb:gi,lab:ui,lch:zi,oklab:io,oklch:P,rec2020:Pi,rgb:Io,srgb:Io,xyz:H},
"prophoto-rgb":{"a98-rgb":vi,"display-p3":Ii,"prophoto-rgb":P,"sr\
gb-linear":ji,"xyz-d50":O,"xyz-d65":rr,hsl:Mi,hwb:Ci,lab:Yi,lch:Ai,
oklab:Oi,oklch:Ti,rec2020:Ri,rgb:Co,srgb:Co,xyz:rr,toGamut:o(t=>t.
map(r=>Q(r)),"toGamut"),toLinear:o(t=>t.map(r=>J(r)),"toLinear")},
rec2020:{"a98-rgb":Bi,"display-p3":Xi,"prophoto-rgb":$i,"srgb-lin\
ear":Hi,"xyz-d50":ao,"xyz-d65":X,hsl:Ei,hwb:Zi,lab:Wi,lch:Li,oklab:Gi,
oklch:Ni,rec2020:P,rgb:Yo,srgb:Yo,xyz:X,toGamut:o(t=>t.map(r=>Q(r)),
"toGamut"),toLinear:o(t=>t.map(r=>J(r)),"toLinear")},"srgb-linear":{
"a98-rgb":Dr,"display-p3":Br,"prophoto-rgb":Fr,"srgb-linear":P,"x\
yz-d50":Ht,"xyz-d65":pt,hsl:Er,hwb:Zr,lab:Wr,lch:Lr,oklab:$r,oklch:Hr,
rec2020:qr,rgb:P,srgb:P,xyz:pt,toGamut:o(t=>t.map(r=>Q(r)),"toGam\
ut"),toLinear:o(t=>t,"toLinear")},rgb:{"a98-rgb":vt,"display-p3":It,
"prophoto-rgb":Rt,"srgb-linear":P,"xyz-d50":mt,"xyz-d65":T,hsl:Xr,
hwb:yo,lab:Ct,lch:Yt,oklab:Ot,oklch:Tt,rec2020:jt,rgb:P,srgb:P,xyz:T},
srgb:{"a98-rgb":vt,"display-p3":It,"prophoto-rgb":Rt,"srgb-linear":P,
"xyz-d50":mt,"xyz-d65":T,hsl:xo,hwb:yo,lab:Ct,lch:Yt,oklab:Ot,oklch:Tt,
rec2020:jt,rgb:P,srgb:P,xyz:T,toGamut:o(t=>t,"toGamut"),toLinear:o(
t=>t.map(r=>J(r)),"toLinear")},"xyz-d50":{"a98-rgb":$t,"display-p\
3":Nt,"prophoto-rgb":wt,"srgb-linear":Ut,"xyz-d50":P,"xyz-d65":h,
hsl:to,hwb:oo,lab:z,lch:no,oklab:At,oklch:qt,rec2020:Kt,rgb:st,srgb:st,
xyz:h},"xyz-d65":{"a98-rgb":L,"display-p3":W,"prophoto-rgb":q,"sr\
gb-linear":$,"xyz-d50":ro,"xyz-d65":P,hsl:ot,hwb:rt,lab:yt,lch:Mo,
oklab:g,oklch:Jt,rec2020:G,rgb:S,srgb:S,xyz:P},xyz:{"a98-rgb":L,"\
display-p3":W,"prophoto-rgb":q,"srgb-linear":$,"xyz-d50":h,"xyz-d\
65":P,hsl:ot,hwb:rt,lab:yt,lch:Mo,oklab:g,oklch:Jt,rec2020:G,rgb:S,
srgb:S,xyz:P,d50:{"a98-rgb":$t,"display-p3":Nt,"prophoto-rgb":wt,
"srgb-linear":Ut,"xyz-d50":P,"xyz-d65":h,hsl:to,hwb:oo,lab:z,lch:no,
oklab:At,oklch:qt,rec2020:Kt,rgb:st,srgb:st,xyz:h},d65:{"a98-rgb":$t,
"display-p3":Nt,"prophoto-rgb":wt,"srgb-linear":Ut,"xyz-d50":h,"x\
yz-d65":P,hsl:to,hwb:oo,lab:z,lch:no,oklab:At,oklch:qt,rec2020:Kt,
rgb:S,srgb:st,xyz:P}}});var bo=class{static{o(this,"ColorValue")}#o=1;#t;constructor(r,e){
this.#t=_r(r,e)}in(r){return mo[r][this.#t.space.ident](this.#t).
position.toArray()}to(r){return this.#t=mo[r][this.#t.space.ident](
this.#t),this}toString(){return`color(${this.#t.colorspace} ${this.#t.
values().toArray().join(" ")} / ${this.#o})`}get space(){return this.#t.
space}get rgb(){let r=nr(this.#t.colorspace),{toLinear:e}=mo[r?"s\
rgb":this.#t.colorspace],[i,n,a]=r?this.in("srgb"):this.#t.position;
return Object.defineProperty(Array.of(i,n,a),"linear",{value:e(Iterator.
from([i,n,a])).toArray()})}get xyz(){let[r,e,i]=mo.xyz[this.#t.space.
whitepoint.ident][this.#t.space.ident](this.#t).values();return[r,
e,i]}};var co=class extends bo{static{o(this,"ColorAttributes")}constructor(r,e){
super(r,e)}get luminance(){let[r,e,i]=this.rgb.linear;return .2126729*
r+.7151522*e+.072175*i}};var Ao=class extends co{static{o(this,"Color")}constructor(r,e){super(
r,e)}};export{Ao as Color};
