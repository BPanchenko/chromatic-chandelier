var Li=Object.defineProperty;var o=(t,r)=>Li(t,"name",{value:r,configurable:!0});var Yo=o(t=>typeof t=="number","isNumber"),Ni=o(t=>typeof t=="str\
ing","isString");var Oo=o(t=>t!==null&&typeof t=="object"&&Array.isArray(t)===!1,"\
isObject");var $i=o(t=>Ni(t)&&Hi.has(t),"isSpaceID"),er=o(t=>Oo(t)&&"ident"in
t&&$i(t.ident)&&"CSYS"in t&&Oo(t.CSYS)&&"length"in t.CSYS&&t.CSYS.
length===3,"isColorSpace");var Hi=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch","o\
klab","oklch","prophoto-rgb","rec2020","srgb-linear","srgb","rgb",
"xyz","xyz-d50","xyz-d65"]);function ir(t,r){if(er(t)===!1)throw new TypeError("Point must be\
 declared in a valid color space instead of "+JSON.stringify(t,void 0,
2));if((r instanceof ArrayBuffer||Array.isArray(r)&&r.length===3&&
r.every(p=>Yo(p)))===!1)throw new TypeError("Point in space has v\
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
abs(c),Math.abs(V))},"value")},set:{value:o(function(p){for(let l=0;l<
this.length;l++)p[l]!==void 0&&(this[l]=p[l]);return this},"value")}}),
(function(p,l){Object.defineProperties(p,{[Symbol.iterator]:{value:o(
function*(){yield this[0],yield this[1],yield this[2]},"value")},
adapted:{get(){if(typeof this.space.CSYS.adapt=="function"){let[s,
m,c]=this.position;return Iterator.from(this.space.CSYS.adapt(s,m,
c))}else return this.position}},position:{get:o(()=>Iterator.from(
l),"get")}});for(let s=0;s<p.length;s++)(function(m,c,E){Object.defineProperty(
p,s,{enumerable:!0,get(){let{CAM:d,CSYS:V}=this.space,st=V[c],F=d!==
void 0?d[m]:null,R=E[c];return"output"in st&&typeof st.output=="f\
unction"&&(R=st.output(R)),F!==null&&"output"in F&&typeof F.output==
"function"&&(R=F.output(R)),R},set(d){let{CAM:V,CSYS:st}=this.space,
F=st[c],R=V!==void 0?V[m]:null;R!==null&&"input"in R&&typeof R.input==
"function"&&(d=R.input(d)),"input"in F&&typeof F.input=="function"&&
(d=F.input(d)),typeof d=="string"&&(d=parseFloat(d)),E[c]=d}})})(
s,n[s],l)})(a,i),Object.defineProperties(a,{[Symbol.toStringTag]:{
get(){return`PointInSpace(${this.toString()})`}},entries:{value:o(
function(){let p=this.space.CAM??this.space.CSYS;return Iterator.
from([[p[0],this[0]],[p[1],this[1]],[p[2],this[2]]])},"value")},toString:{
value:o(function(){return`${this.colorspace};[${this.values().join()}\
]`},"value")},values:{value:o(function(){return Object.freeze([this[0],
this[1],this[2]])},"value")}}),Array.isArray(r)?a.set(r):a}o(ir,"\
initPointInSpace");var Gi=Object.defineProperty,Et=o((t,r)=>Gi(t,"name",{value:r,configurable:!0}),
"n"),Vi=Et(t=>t!==null&&typeof t=="object"&&Array.isArray(t)===!1,
"isObject"),Fi=Et(t=>Vi(t)&&"ident"in t&&"short"in t&&"domain"in t,
"isSpaceDimension");function w(t,r,e){let i=Iterator.from(e===void 0?
[t,r]:[t,r,e]),n=e===void 0?2:3;for(let l of i.take(n))if(Fi(l)===
!1)throw new TypeError("Passed wrong space dimension: "+JSON.stringify(
l,void 0,2));let a=i.take(n).filter(l=>l.tgeom==="azimuth"||l.tgeom===
"reference-ray").toArray().length===2?n===3?"cilinder":"circle":n===
3?"cube":"plane",p=Object.create(null,{0:{enumerable:!0,value:t},
1:{enumerable:!0,value:r},length:{enumerable:!0,value:n},tgeom:{enumerable:!0,
value:a},entries:{value:Et(function*(){yield[0,this[0]],yield[1,this[1]],
this.length===3&&(yield[2,this[2]])},"value")},toArray:{value:Et(
function(){return Array.of(...this)},"value")},[Symbol.iterator]:{
value:Et(function*(){yield this[0],yield this[1],this.length===3&&
(yield this[2])},"value")}});return n===3&&Object.defineProperty(
p,2,{enumerable:!0,value:e}),l=>l===void 0?p:Object.defineProperties(
p,l)}o(w,"w");Et(w,"createCoordinateSystem");var Ki=Object.defineProperty,gt=o((t,r)=>Ki(t,"name",{value:r,configurable:!0}),
"n"),To=gt(t=>typeof t=="number","isNumber"),Ui=gt(t=>t!==null&&typeof t==
"object"&&Array.isArray(t)===!1,"isObject"),Dn=gt(t=>Ui(t)&&Symbol.
iterator in t&&"minimum"in t&&To(t.minimum)&&"maximum"in t&&To(t.
maximum)&&"value"in t&&To(t.value)&&t.value>0,"isRange");function y(...t){
let r=t.length===1?Array.of(0,t[0]):Array.of(Math.min(...t),Math.
max(...t)),[e,i]=r,n=i-e,a=e+n/2;return Object.create(null,{from:{
value:e},to:{value:i},minimum:{enumerable:!0,value:e},maximum:{enumerable:!0,
value:i},avg:{enumerable:!0,value:a},value:{enumerable:!0,value:n},
allot:{value:nr},clamp:{value:ar},test:{value:gt(p=>e<=p&&p<=i,"v\
alue")},toString:{value:gt(()=>String.raw`{x ∈ R; ${e} ⋜ x ⋜ ${i}}`,
"value")},[Symbol.iterator]:{value:gt(function*(){yield this.from,
yield this.to},"value")},length:{value:2}})}o(y,"D");gt(y,"create\
Range");function nr(t){return this.test(t)?t:t>this.from?(t-this.
to)%this.value+this.from:this.to-(this.from-t)%this.value}o(nr,"p");
gt(nr,"allocateOuterValue");function ar(t){return this.test(t)?t:
Math.max(Math.min(t,this.to),this.from)}o(ar,"h");gt(ar,"restrict\
OuterValue");var qi=Object.defineProperty,Ji=o((t,r)=>qi(t,"name",{value:r,configurable:!0}),
"n");var Qi=Ji((t,r=6)=>{let e=10**r;return Math.sign(t)*Math.round((Math.
abs(t)+Number.EPSILON)*e)/e},"round"),P=Qi;var tn=Object.defineProperty,ut=o((t,r)=>tn(t,"name",{value:r,configurable:!0}),
"t");function jo(...t){let r=t.length===1?Array.of(0,t[0]):Array.
of(Math.min(...t),Math.max(...t)),[e,i]=r,n=i-e,a=e+n/2;return Object.
create(null,{from:{value:e},to:{value:i},minimum:{enumerable:!0,value:e},
maximum:{enumerable:!0,value:i},avg:{enumerable:!0,value:a},value:{
enumerable:!0,value:n},allot:{value:pr},clamp:{value:_r},test:{value:ut(
p=>e<=p&&p<=i,"value")},toString:{value:ut(()=>String.raw`{x ∈ R; ${e} ⋜ x ⋜ ${i}}`,
"value")},[Symbol.iterator]:{value:ut(function*(){yield this.from,
yield this.to},"value")},length:{value:2}})}o(jo,"c");ut(jo,"crea\
teRange");function pr(t){return this.test(t)?t:t>this.from?(t-this.
to)%this.value+this.from:this.to-(this.from-t)%this.value}o(pr,"g");
ut(pr,"allocateOuterValue");function _r(t){return this.test(t)?t:
Math.max(Math.min(t,this.to),this.from)}o(_r,"h");ut(_r,"restrict\
OuterValue");function Ro(t=[0,100],r=[0,1]){let[e,i]=r,[n,a]=t,[p,
l]=[i-e,a-n];function s(c){return typeof c=="string"&&(c=parseFloat(
c)),m.domain.test(c)===!1&&(c=c>i?(c-i)%p+e:i-(e-c)%p),l*(c-e)/p+
n}o(s,"p"),ut(s,"invert");function m(c){return typeof c=="string"&&
(c=parseFloat(c)),m.range.test(c)===!1&&(c=c>a?(c-a)%l+n:a-(n-c)%
l),p*(c-n)/l+e}return o(m,"l"),ut(m,"calculator"),Object.defineProperties(
m,{domain:{enumerable:!0,value:jo(e,i)},range:{enumerable:!0,value:jo(
n,a)},invert:{enumerable:!0,value:s}})}o(Ro,"j");ut(Ro,"initScale");var Do=Ro([0,360],[-Math.PI,Math.PI]),Bt=Object.freeze({bytes:8,domain:Do.
domain,ident:"angle",input:o(t=>Do.domain.allot(t*Math.PI/180),"i\
nput"),output:o(t=>P(Do.range.allot(t*180/Math.PI),1),"output"),short:"\
phi",tcoord:"polar",tgeom:"azimuth"});var zt=Object.freeze({$coord:Bt,bytes:4,domain:y(0,360),ident:"hu\
e",short:"h",input:o(t=>zt.domain.allot(t),"input"),output:o(t=>Number.
isNaN(t)?Number.NaN:Math.abs(t)<1e-5?0:P(t,5),"output")});var mt=Object.freeze({bytes:8,domain:y(0,1),ident:"applicate",short:"\
z",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var ct=Object.freeze({$coord:mt,bytes:4,domain:y(0,100),ident:"li\
ghtness",input:o(t=>t/100,"input"),output:o(t=>P(t*100,2),"output"),
short:"L"});var bt=Object.freeze({bytes:8,domain:y(0,1),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var lr=Object.freeze({$coord:bt,bytes:4,domain:y(0,100),ident:"sa\
turation",input:o(t=>t/100,"input"),output:o(t=>P(t*100,2),"outpu\
t"),short:"S"});var ha=w(bt,Bt)({adapt:{enumerable:!0,value:Xo}});function Xo(t=0,r=NaN){return[t*Math.cos(r),t*Math.sin(r)]}o(Xo,"\
calcCartesianCoordinates");var kt=w(bt,Bt,mt)({adapt:{value:on}});function on(t,r,e){return[
...Xo(t,r),e]}o(on,"calcCubeCoordinates");var at=Object.defineProperty(Float64Array.of(.9504559270516716,1,
1.0890577507598784),"ident",{value:"d65"});Object.freeze(at.buffer);var k={CAM:w(zt,lr,ct)(),CSYS:kt,ident:"hsl",whitepoint:at};var sr=Object.freeze({$coord:mt,bytes:4,domain:y(0,100),ident:"bl\
ackness",input:o(t=>t/100,"input"),output:o(t=>P(t*100,2),"output"),
short:"B"});var mr=Object.freeze({$coord:bt,bytes:4,domain:y(0,100),ident:"wh\
iteness",input:o(t=>t/100,"input"),output:o(t=>P(t*100,2),"output"),
short:"W"});var v={CAM:w(zt,mr,sr)(),CSYS:kt,ident:"hwb",whitepoint:at};var ft=Object.freeze({bytes:8,domain:y(-1,1),ident:"abscissa",short:"\
x",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var br=Object.freeze({$coord:ft,bytes:4,domain:y(-125,125),ident:"\
green-red",input:o(t=>t/125,"input"),output:o(t=>P(t*125,1),"outp\
ut"),short:"a"}),cr=Object.freeze({$coord:ft,bytes:8,domain:y(-.4,
.4),ident:"green-red",input:o(t=>t,"input"),output:o(t=>t,"output"),
short:"a"});var ht=Object.freeze({bytes:8,domain:y(-1,1),ident:"ordinate",short:"\
y",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var fr=Object.freeze({$coord:ht,bytes:4,domain:y(-125,125),ident:"\
blue-yellow",input:o(t=>t/125,"input"),output:o(t=>P(t*125,2),"ou\
tput"),short:"b"}),hr=Object.freeze({$coord:ht,bytes:8,domain:y(-.4,
.4),ident:"blue-yellow",input:o(t=>t,"input"),output:o(t=>t,"outp\
ut"),short:"b"});var cp=w(ft,ht)({adapt:{value:Zo}});function Zo(t,r){let e=0,i=NaN;return(t!==0||r!==0)&&(e=Math.sqrt(
t**2+r**2),t!==0&&!r||r!==0&&!t?i=r/Math.abs(r)*(Math.PI/2):i=Math.
atan(r/t)),[e,i]}o(Zo,"calcPolarCoordinates");var St=w(ft,ht,mt)({adapt:{value:rn}});function rn(t,r,e){return[
...Zo(t,r),e]}o(rn,"calcCylindricalCoordinates");var ot=Object.defineProperty(Float64Array.of(.9642956764295677,1,
.8251046025104602),"ident",{value:"d50"});Object.freeze(ot.buffer);var bo=Object.freeze({CAM:w(ct,br,fr)(),CSYS:St,ident:"lab",whitepoint:ot});var xr=Object.freeze({$coord:bt,ident:"chroma",short:"C",domain:y(
0,150),input:o(t=>t/150,"input"),output:o(t=>P(t*150,1),"output"),
bytes:2}),dr=Object.freeze({$coord:bt,ident:"chroma",short:"c",domain:y(
0,.4),input:o(t=>t,"input"),output:o(t=>P(t,5),"output"),bytes:4});var yr=Object.freeze({CAM:w(ct,xr,zt)(),CSYS:kt,ident:"lch",whitepoint:ot});var ao=Object.freeze({CAM:w(ct,cr,hr)(),CSYS:St,ident:"oklab",whitepoint:at});var po={CAM:w(ct,dr,zt)(),CSYS:kt,ident:"oklch",whitepoint:at};var gr=Object.freeze({$coord:mt,bytes:4,domain:y(0,100),ident:"bl\
ue",input:o(t=>t/100,"input"),output:o(t=>P(t*100,2),"output"),short:"\
b"}),Eo=Object.freeze({$coord:mt,bytes:1,domain:y(0,255),ident:"b\
lue",input:o(t=>t/255,"input"),output:o(t=>Eo.domain.clamp(Math.round(
t*255)),"output"),short:"B"});var ur=Object.freeze({$coord:ht,bytes:4,domain:y(0,100),ident:"gr\
een",input:o(t=>t/100,"input"),output:o(t=>P(t*100,2),"output"),short:"\
g",description:"Green Light Intensity"}),Bo=Object.freeze({$coord:ht,
bytes:1,domain:y(0,255),ident:"green",input:o(t=>t/255,"input"),output:o(
t=>Bo.domain.clamp(Math.round(t*255)),"output"),short:"G",description:"\
Green Light Intensity"});var zr=Object.freeze({$coord:ft,bytes:4,domain:y(0,100),ident:"gr\
een",input:o(t=>t/100,"input"),output:o(t=>P(t*100,2),"output"),short:"\
r"}),Wo=Object.freeze({$coord:ft,bytes:1,domain:y(0,255),ident:"r\
ed",input:o(t=>t/255,"input"),output:o(t=>Wo.domain.clamp(Math.round(
t*255)),"output"),short:"R"});var Wt=w(zr,ur,gr)(),Xt=St,Lt=at,rt=Object.freeze({ident:"srgb",CAM:Wt,
CSYS:Xt,whitepoint:Lt}),Zt=Object.freeze({ident:"srgb-linear",CAM:Wt,
CSYS:Xt,whitepoint:Lt}),_o=Object.freeze({ident:"a98-rgb",CAM:Wt,
CSYS:Xt,whitepoint:Lt}),Lo=Object.freeze({ident:"display-p3",CAM:Wt,
CSYS:Xt,whitepoint:Lt}),No=Object.freeze({ident:"prophoto-rgb",CAM:Wt,
CSYS:Xt,whitepoint:ot}),$o=Object.freeze({ident:"rec2020",CAM:Wt,
CSYS:Xt,whitepoint:Lt}),Sr=Object.freeze({ident:"rgb",CAM:w(Wo,Bo,
Eo)(),CSYS:Xt,whitepoint:Lt});var K=Object.freeze({ident:"xyz-d65",CSYS:St,whitepoint:at}),U=Object.
freeze({ident:"xyz-d50",CSYS:St,whitepoint:ot});var en=Object.defineProperty,Pt=o((t,r)=>en(t,"name",{value:r,configurable:!0}),
"n"),nn=Pt(t=>an(t)&&Symbol.iterator in t&&typeof t[Symbol.iterator]==
"function","isIterableObject"),an=Pt(t=>t!==null&&typeof t=="obje\
ct"&&Array.isArray(t)===!1,"isObject"),A_=Pt(t=>nn(t)&&"length"in
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
n,a,i);return n}o(u,"I");Pt(u,"createMatrix");var pn=Object.defineProperty,I=o((t,r)=>pn(t,"name",{value:r,configurable:!0}),
"t"),_n=I(t=>typeof t=="string","isString"),Go=I(t=>Ho(t)&&Symbol.
iterator in t&&typeof t[Symbol.iterator]=="function","isIterableO\
bject"),Ho=I(t=>t!==null&&typeof t=="object"&&Array.isArray(t)===
!1,"isObject"),ln=I(t=>_n(t)&&mn.has(t),"isSpaceID"),sn=I(t=>Ho(t)&&
"ident"in t&&ln(t.ident)&&"CSYS"in t&&Ho(t.CSYS)&&"length"in t.CSYS&&
t.CSYS.length===3,"isColorSpace"),mn=new Set(["a98-rgb","display-\
p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec20\
20","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz-d65"]),bn=I(t=>Go(
t)&&"space"in t&&sn(t.space)&&"length"in t&&t.length===3&&Iterator.
from(t).every(r=>typeof r=="number"),"isPointInSpace"),cn=I(t=>Go(
t)&&"length"in t&&typeof t.length=="number"&&t.length>=9,"isMatri\
x"),fn=I(t=>Go(t)&&"length"in t&&t.length===3&&"multiply"in t&&typeof t.
multiply=="function","isVector");function f(t,r=0,e=0){let i=bn(t)?
new Float64Array(t.buffer):Float64Array.of(t,r,e),n=Object.create(
null,{head:{enumerable:!0,get:I(()=>Iterator.from(i),"get")}});return Object.
defineProperties(n,{each:{value:Pr},multiply:{value:wr},update:{value:I(
function(a,p,l){let s=Array.isArray(a)?a.slice(3):Array.of(a,p,l);
return i.set(this.head.map((m,c)=>s[c]??m).toArray()),this},"valu\
e")}}),Object.defineProperties(n,{[Symbol.isConcatSpreadable]:{value:!0},
[Symbol.iterator]:{value:I(function*(){yield this[0],yield this[1],
yield this[2]},"value")},0:{enumerable:!0,get:I(()=>i[0],"get"),set:I(
a=>{if(typeof a=="number")i[0]=a;else throw new TypeError("Expect\
ed Number")},"set")},1:{enumerable:!0,get:I(()=>i[1],"get"),set:I(
a=>{if(typeof a=="number")i[1]=a;else throw new TypeError("Expect\
ed Number")},"set")},2:{enumerable:!0,get:I(()=>i[2],"get"),set:I(
a=>{if(typeof a=="number")i[2]=a;else throw new TypeError("Expect\
ed Number")},"set")},length:{enumerable:!0,value:3}}),Object.defineProperties(
n,{[Symbol.toStringTag]:{get(){return`Vector[${this.toString()}]`}},
entries:{value:I(function(){return this.values().map((a,p)=>Object.
seal(Array.of(p,a)))},"value")},toArray:{value:I(function(){return Object.
seal(Array.of(this[0],this[1],this[2]))},"value")},toString:{value:I(
()=>i.toString(),"value")},values:{value:I(function(){return Iterator.
from(this.toArray())},"value")}}),n}o(f,"L");I(f,"createVector");
function Pr(t){for(let r=0;r<3;r++)t(this[r],r,this);return this}
o(Pr,"M");I(Pr,"each");function wr(t){let[r,e,i]=this.head;if(cn(
t)||fn(t)){let[n,a,p,l=0,s=0,m=0,c=0,E=0,d=0]=t;return this.update(
r*n+e*l+i*c,r*a+e*s+i*E,r*p+e*m+i*d)}else throw new TypeError("Un\
supported Multiplicator: "+t)}o(wr,"P");I(wr,"multiply");var hn=Object.defineProperty,et=o((t,r)=>hn(t,"name",{value:r,configurable:!0}),
"n"),xn=et(t=>typeof t=="number","isNumber"),dn=et(t=>typeof t=="\
string","isString"),yn=et(t=>Vo(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function","isIterableObject"),Vo=et(t=>t!==null&&typeof t==
"object"&&Array.isArray(t)===!1,"isObject"),gn=et(t=>dn(t)&&un.has(
t),"isSpaceID"),kr=et(t=>Vo(t)&&"ident"in t&&gn(t.ident)&&"CSYS"in
t&&Vo(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===3,"isColorSpace"),
un=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab",
"oklch","prophoto-rgb","rec2020","srgb-linear","srgb","rgb","xyz",
"xyz-d50","xyz-d65"]),b=et(t=>yn(t)&&"space"in t&&kr(t.space)&&"l\
ength"in t&&t.length===3&&Iterator.from(t).every(r=>typeof r=="nu\
mber"),"isPointInSpace");function _(t,r){if(kr(t)===!1)throw new TypeError(
"Point must be declared in a valid color space instead of "+JSON.
stringify(t,void 0,2));if((r instanceof ArrayBuffer||Array.isArray(
r)&&r.length===3&&r.every(p=>xn(p)))===!1)throw new TypeError("Po\
int in space has valid coordinates. Wrong parameters: "+JSON.stringify(
r,void 0,2));let e=t.CSYS.length,i=r instanceof ArrayBuffer?new Float64Array(
r):new Float64Array(e),n=t.CAM===void 0?Array.of(0,1,2):t.CAM.toArray().
map(p=>t.CSYS.toArray().findIndex(l=>p.$coord===l)),a=Object.create(
null,{buffer:{value:i.buffer},colorspace:{enumerable:!0,value:t.ident},
length:{value:e},space:{value:t}});return Object.defineProperties(
a,{equals:{value:et(function(p,l=1e-5){let[s,m,c]=this.position,[
E,d,V]=p.position;return this.colorspace===p.colorspace&&Math.abs(
s-E)<=l*Math.max(1,Math.abs(s),Math.abs(E))&&Math.abs(m-d)<=l*Math.
max(1,Math.abs(m),Math.abs(d))&&Math.abs(c-V)<=l*Math.max(1,Math.
abs(c),Math.abs(V))},"value")},set:{value:et(function(p){for(let l=0;l<
this.length;l++)p[l]!==void 0&&(this[l]=p[l]);return this},"value")}}),
(function(p,l){Object.defineProperties(p,{[Symbol.iterator]:{value:et(
function*(){yield this[0],yield this[1],yield this[2]},"value")},
adapted:{get(){if(typeof this.space.CSYS.adapt=="function"){let[s,
m,c]=this.position;return Iterator.from(this.space.CSYS.adapt(s,m,
c))}else return this.position}},position:{get:et(()=>Iterator.from(
l),"get")}});for(let s=0;s<p.length;s++)(function(m,c,E){Object.defineProperty(
p,s,{enumerable:!0,get(){let{CAM:d,CSYS:V}=this.space,st=V[c],F=d!==
void 0?d[m]:null,R=E[c];return"output"in st&&typeof st.output=="f\
unction"&&(R=st.output(R)),F!==null&&"output"in F&&typeof F.output==
"function"&&(R=F.output(R)),R},set(d){let{CAM:V,CSYS:st}=this.space,
F=st[c],R=V!==void 0?V[m]:null;R!==null&&"input"in R&&typeof R.input==
"function"&&(d=R.input(d)),"input"in F&&typeof F.input=="function"&&
(d=F.input(d)),typeof d=="string"&&(d=parseFloat(d)),E[c]=d}})})(
s,n[s],l)})(a,i),Object.defineProperties(a,{[Symbol.toStringTag]:{
get(){return`PointInSpace(${this.toString()})`}},entries:{value:et(
function(){let p=this.space.CAM??this.space.CSYS;return Iterator.
from([[p[0],this[0]],[p[1],this[1]],[p[2],this[2]]])},"value")},toString:{
value:et(function(){return`${this.colorspace};[${this.values().join()}\
]`},"value")},values:{value:et(function(){return Object.freeze([this[0],
this[1],this[2]])},"value")}}),Array.isArray(r)?a.set(r):a}o(_,"$");
et(_,"initPointInSpace");var xt=o(t=>{let r=Math.abs(t);return r<=.04045?t/12.92:Math.sign(
t)*Math.pow((r+.055)/1.055,2.4)},"to_linear"),dt=o(t=>{let r=Math.
abs(t);return r>.0031308?Math.sign(t)*(1.055*Math.pow(r,1/2.4)-.055):
12.92*t},"to_gamut");var it=u(1.0479297925449969,.02962780877005599,-.009243040646204504,
.022946870601609652,.9904344267538799,.015055191490298152,-.05019226628920524,
-.017073799063418826,.7518742814281371),B=u(.955473421488075,-.0283697093338637,
.012314014864481998,-.02309845494876471,1.0099953980813041,-.020507649298898964,
.06325924320057072,.021041441191917323,1.330365926242124);var vr=u(608311/1250200,35783/156275,0,189793/714400,247089/357200,
32229/714400,198249/1000160,198249/2500400,5220557/5000800),W=o(t=>{
if(b(t)&&t.colorspace==="display-p3"){let[r,e,i]=t.position,[n,a,
p]=f(r,e,i).each((l,s,m)=>m[s]=xt(l)).multiply(vr);return _(K,[n,
a,p])}else throw new Error("Wrong parameter passed: "+t)},"displa\
y_p3_into_xyz_d65"),Nt=o(t=>{if(b(t)&&t.colorspace==="display-p3"){
let[r,e,i]=t.position,[n,a,p]=f(r,e,i).each((l,s,m)=>m[s]=xt(l)).
multiply(vr).multiply(it);return _(U,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"display_p3_into_xyz_d50");var Fo=o(t=>Math.sign(t)*Math.pow(Math.abs(t),2.19921875),"to_lin\
ear"),Ko=o(t=>Math.sign(t)*Math.pow(Math.abs(t),256/563),"to_gamu\
t");var Ir=u(1829569/896150,-851781/878810,16779/1248040,-506331/896150,
1648619/878810,-147721/1248040,-308931/896150,36519/878810,1266979/
1248040),D=o(t=>{if(b(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.
position,[n,a,p]=f(r,e,i).multiply(Ir).each((l,s,m)=>m[s]=Ko(l)*100);
return _(_o,[n,a,p])}else throw new Error("Wrong parameter passed\
: "+t)},"xyz_d65_into_a98_rgb"),Mr=o(t=>{if(b(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(B).multiply(
Ir).each((l,s,m)=>m[s]=Ko(l)*100);return _(_o,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_a98_rgb");var Cr=o(t=>D(W(t)),"display_p3_into_a98_rgb");var Ar=u(573536/994567,591459/1989134,53769/1989134,263643/1420810,
6239551/9945670,351524/4972835,187206/994567,374412/4972835,4929758/
4972835),L=o(t=>{if(b(t)&&t.colorspace==="a98-rgb"){let[r,e,i]=t.
position,[n,a,p]=f(r,e,i).each((l,s,m)=>m[s]=Fo(l)).multiply(Ar);
return _(K,[n,a,p])}else throw new Error("Wrong parameter passed:\
 "+t)},"a98_rgb_into_xyz_d65"),$t=o(t=>{if(b(t)&&t.colorspace==="\
a98-rgb"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).each((l,s,m)=>m[s]=
Fo(l)).multiply(Ar).multiply(it);return _(U,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"a98_rgb_into_xyz_d50");var co=u(12831/3959,-851781/878810,705/12673,-329/214,1648619/878810,
-2585/12673,-1974/3959,36519/878810,705/667),O=o(t=>{if(b(t)&&t.colorspace===
"xyz-d65"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(co).each(
(l,s,m)=>m[s]=dt(l)*100);return _(rt,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_srgb"),nt=o(t=>{if(b(
t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,[n,a,p]=f(r,e,
i).multiply(co).each((l,s,m)=>m[s]*=100);return _(Zt,[n,a,p])}else
throw new Error("Wrong parameter passed: "+t)},"xyz_d65_into_srgb\
_linear"),lt=o(t=>{if(b(t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.
position,[n,a,p]=f(r,e,i).multiply(B).multiply(co).each((l,s,m)=>m[s]=
dt(l)*100);return _(rt,[n,a,p])}else throw new Error("Wrong param\
eter passed: "+t)},"xyz_d50_into_srgb"),Ht=o(t=>{if(b(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(B).multiply(
co).each((l,s,m)=>m[s]*=100);return _(Zt,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_srgb_linear");var vt=o(t=>O(L(t)),"a98_rgb_into_srgb"),Yr=o(t=>nt(L(t)),"a98_rg\
b_into_srgb_linear");var It=o(t=>O(W(t)),"display_p3_into_srgb"),Or=o(t=>nt(W(t)),"dis\
play_p3_into_srgb_linear");var pt=o((t,r,e)=>{let i=2*Math.PI,n=Math.PI/6;t<0&&(t+=i),t=t%i;
let a=o(p=>{let l=(p+t/n)%12,s=r*Math.min(e,1-e);return e-s*Math.
max(-1,Math.min(l-3,9-l,1))},"f");return[a(0),a(8),a(4)]},"hsl_to\
_rgb");var Tr=o(t=>{if(b(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=pt(e,r,i).map(a=>Math.min(Math.max(Math.round(a*255),0),255));return _(
Sr,n)}else throw new Error("Wrong parameter passed: "+t)},"hsl_in\
to_rgb"),fo=o(t=>{if(b(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=pt(e,r,i).map(a=>a*100);return _(rt,n)}else throw new Error("Wr\
ong parameter passed: "+t)},"hsl_into_srgb"),jr=o(t=>{if(b(t)&&t.
colorspace==="hsl"){let[r,e,i]=t.position,n=pt(e,r,i).map(a=>xt(a)*
100);return _(Zt,n)}else throw new Error("Wrong parameter passed:\
 "+t)},"hsl_into_srgb_linear");var Mt=o((t,r,e)=>{if(r+e>=1){let i=r/(r+e);return[i,i,i]}else{let[
i,n,a]=pt(t,1,.5).map(p=>p*(1-r-e)+r);return[i,n,a]}},"hwb_to_rgb");var ho=o(t=>{if(b(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
n=Mt(e,r,i).map(a=>a*100);return _(rt,n)}else throw new Error("Wr\
ong parameter passed: "+t)},"hwb_into_srgb"),Rr=o(t=>{if(b(t)&&t.
colorspace==="hwb"){let[r,e,i]=t.position,n=Mt(e,r,i).map(a=>xt(a)*
100);return _(Zt,n)}else throw new Error("Wrong parameter passed:\
 "+t)},"hwb_into_srgb_linear");var z=o(t=>{if(b(t)&&t.colorspace==="lab"){let r=903.2962962962963,
e=216/24389,[i,n,a]=t,p=(i+16)/116,l=n/500+p,s=Math.pow(l,3),m=p-
a/200,c=Math.pow(m,3),E=(s>e?s:(116*l-16)/r)*ot[0],d=(i>r*e?Math.
pow((i+16)/116,3):i/r)*ot[1],V=(c>e?c:(116*m-16)/r)*ot[2];return _(
U,[E,d,V])}else throw new Error("Wrong parameter passed: "+t)},"l\
ab_into_xyz_d50"),yt=o(t=>{let r=z(t),[e,i,n]=f(r).multiply(B);return _(
K,[e,i,n])},"lab_into_xyz_d65");var Ct=o(t=>lt(z(t)),"lab_into_srgb"),Dr=o(t=>Ht(z(t)),"lab_into_\
srgb_linear");var $=o(t=>{if(b(t)&&t.colorspace==="lch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=e*Math.cos(i),a=e*Math.sin(i);return _(
bo,[r,n,a])}else throw new Error("Wrong parameter passed: "+t)},"\
lch_into_lab");var At=o(t=>lt(z($(t))),"lch_into_srgb"),Xr=o(t=>Ht(z($(t))),"lch\
_into_srgb_linear");var Zr=u(1,1,1,.3963377773761749,-.1055613458156586,-.0894841775298119,
.2158037573099136,-.0638541728258133,-1.2914855480194092),Gt=u(.819022437996703,
.0329836539323885,.0481771893596242,.3619062600528904,.9292868615863434,
.2642395317527308,-.1288737815209879,.0361446663506424,.6335478284694309),
Vt=u(.210454268309314,1.9779985324311684,.0259040424655478,.7936177747023054,
-2.42859224204858,.7827717124575296,-.0040720430116193,.450593709617411,
-.8086757549230774),Er=u(1.2268798758459243,-.0405757452148008,-.0763729366746601,
-.5578149944602171,1.112286803280317,-.4214933324022432,.2813910456659647,
-.0717110580655164,1.5869240198367816);var g=o(t=>{if(b(t)&&t.colorspace==="oklab"){let[r,e,i]=t.position,
[n,a,p]=f(i,r,e).multiply(Zr).each((l,s,m)=>m[s]=l**3).multiply(Er);
return _(K,[n,a,p])}else throw new Error("Wrong parameter passed:\
 "+t)},"oklab_into_xyz_d65"),Yt=o(t=>{let[r,e,i]=f(g(t)).multiply(
it);return _(U,[r,e,i])},"oklab_into_xyz_d50");var Ot=o(t=>O(g(t)),"oklab_into_srgb"),Br=o(t=>nt(g(t)),"oklab_in\
to_srgb_linear");var J=o(t=>{if(b(t)&&t.colorspace==="oklch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=isNaN(i)?0:e*Math.cos(i),a=isNaN(i)?0:
e*Math.sin(i);return _(ao,[r,n,a])}else throw new Error("Wrong pa\
rameter passed: "+t)},"oklch_into_oklab");var Tt=o(t=>O(g(J(t))),"oklch_into_srgb"),Wr=o(t=>nt(g(J(t))),"ok\
lch_into_srgb_linear");var Lr=o(t=>{let r=Math.abs(t);return r<=.03125?t/16:Math.sign(t)*
Math.pow(r,1.8)},"to_linear"),Uo=o(t=>{let r=Math.abs(t);return r>=
1/512?Math.sign(t)*Math.pow(r,1/1.8):16*t},"to_gamut");var zn=u(.7977666449006423,.2880748288194013,0,.13518129740053308,
.711835234241873,0,.0313477341283922,8993693872564e-17,.8251046025104602),
wt=o(t=>{if(b(t)&&t.colorspace==="prophoto-rgb"){let r=_(U,t.position.
toArray());return f(r).each((e,i,n)=>n[i]=Lr(e)).multiply(zn),r}else
throw new Error("Wrong parameter passed: "+t)},"prophoto_rgb_into\
_xyz_d50"),q=o(t=>{let r=wt(t),e=_(K,r.position.toArray());return f(
e).multiply(B),e},"prophoto_rgb_into_xyz_d65");var jt=o(t=>O(q(t)),"prophoto_rgb_into_srgb"),Nr=o(t=>nt(q(t)),"p\
rophoto_rgb_into_srgb_linear");var xo=1.09929682680944,$r=.018053968510807,qo=o(t=>{let r=Math.abs(
t);return r<$r*4.5?t/4.5:Math.sign(t)*Math.pow((r+xo-1)/xo,1/.45)},
"to_linear"),Jo=o(t=>{let r=Math.abs(t);return r>$r?Math.sign(t)*
(xo*Math.pow(r,.45)-(xo-1)):4.5*t},"to_gamut");var Hr=u(63426534/99577255,26158966/99577255,4994106574466076e-32,
20160776/139408157,472592308/697040785,19567812/697040785,47086771/
278816314,8267143/139408157,295819943/278816314),N=o(t=>{if(b(t)&&
t.colorspace==="rec2020"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).
each((l,s,m)=>m[s]=qo(l)).multiply(Hr);return _(K,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"rec2020_into_xyz_d65"),Ft=o(t=>{if(b(
t)&&t.colorspace==="rec2020"){let[r,e,i]=t.position,[n,a,p]=f(r,e,
i).each((l,s,m)=>m[s]=qo(l)).multiply(Hr).multiply(it);return _(U,
[n,a,p])}else throw new Error("Wrong parameter passed: "+t)},"rec\
2020_into_xyz_d50");var Rt=o(t=>O(N(t)),"rec2020_into_srgb"),Gr=o(t=>nt(N(t)),"rec202\
0_into_srgb_linear");var yo=u(506752/1228815,87098/409605,7918/409605,87881/245763,175762/
245763,87881/737289,12673/70218,12673/175545,1001167/1053270),S=o(
t=>{if(b(t)&&["rgb","srgb"].includes(t.colorspace)){let[r,e,i]=t.
position,[n,a,p]=f(r,e,i).each((l,s,m)=>m[s]=xt(l)).multiply(yo);
return _(K,[n,a,p])}else throw new Error("Wrong parameter passed:\
 "+t)},"srgb_into_xyz_d65"),H=o(t=>{if(b(t)&&t.colorspace==="srgb\
-linear"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(yo);return _(
K,[n,a,p])}else throw new Error("Wrong parameter passed: "+t)},"s\
rgb_linear_into_xyz_d65"),_t=o(t=>{if(b(t)&&["rgb","srgb"].includes(
t.colorspace)){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).each((l,s,m)=>m[s]=
xt(l)).multiply(yo).multiply(it);return _(U,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_xyz_d50"),Kt=o(t=>{if(b(
t)&&t.colorspace==="srgb-linear"){let[r,e,i]=t.position,[n,a,p]=f(
r,e,i).multiply(yo).multiply(it);return _(U,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_linear_into_xyz_d50");var Dt=o(t=>D(S(t)),"srgb_into_a98_rgb"),Vr=o(t=>D(H(t)),"srgb_li\
near_into_a98_rgb");var Fr=o(t=>Dt(fo(t)),"hsl_into_a98_rgb");var Kr=o(t=>{if(b(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position;
if(r+i>=1){let n=r/(r+i);return _(_o,[n,n,n])}else{let n=pt(e,1,.5).
map(a=>(a*(1-r-i)+r)*100);return Dt(_(rt,n))}}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_a98_rgb");var Ur=o(t=>D(yt(t)),"lab_into_a98_rgb");var qr=o(t=>D(yt($(t))),"lch_into_a98_rgb");var Jr=o(t=>D(g(t)),"oklab_into_a98_rgb");var Ut=o(t=>Yt(J(t)),"oklch_into_xyz_d50"),qt=o(t=>g(J(t)),"oklch\
_into_xyz_d65");var Qr=o(t=>D(qt(t)),"oklch_into_a98_rgb");var te=o(t=>D(q(t)),"prophoto_rgb_into_a98_rgb");var oe=o(t=>D(N(t)),"rec2020_into_a98_rgb");var re=u(446124/178915,-14852/17905,11844/330415,-333277/357830,63121/
35810,-50337/660830,-72051/178915,423/17905,316169/330415),X=o(t=>{
if(b(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,[n,a,p]=f(
r,e,i).multiply(re).each((l,s,m)=>m[s]=dt(l)*100);return _(Lo,[n,
a,p])}else throw new Error("Wrong parameter passed: "+t)},"xyz_d6\
5_into_display_p3"),Jt=o(t=>{if(b(t)&&t.colorspace==="xyz-d50"){let[
r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(B).multiply(re).each(
(l,s,m)=>m[s]=dt(l)*100);return _(Lo,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_display_p3");var ee=o(t=>X(L(t)),"a98_rgb_into_display_p3");var Qt=o(t=>{if(b(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=pt(e,r,i).map(p=>p*100),a=_(rt,n);return _t(a)}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_xyz_d50"),Q=o(t=>{if(b(t)&&
t.colorspace==="hsl"){let[r,e,i]=t.position,n=pt(e,r,i).map(p=>p*
100),a=_(rt,n);return S(a)}else throw new Error("Wrong parameter \
passed: "+t)},"hsl_into_xyz_d65");var ie=o(t=>X(Q(t)),"hsl_into_display_p3");var to=o(t=>{if(b(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
n=Mt(e,r,i).map(p=>p*100),a=_(rt,n);return _t(a)}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_xyz_d50"),tt=o(t=>{if(b(
t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,n=Mt(e,r,i).map(p=>p*
100),a=_(rt,n);return S(a)}else throw new Error("Wrong parameter \
passed: "+t)},"hwb_into_xyz_d65");var ne=o(t=>X(tt(t)),"hwb_into_display_p3");var ae=o(t=>Jt(z(t)),"lab_into_display_p3");var pe=o(t=>Jt(z($(t))),"lch_into_display_p3");var _e=o(t=>X(g(t)),"oklab_into_display_p3");var le=o(t=>X(g(J(t))),"oklch_into_display_p3");var se=o(t=>X(q(t)),"prophoto_rgb_into_display_p3");var me=o(t=>X(N(t)),"rec2020_into_display_p3");var go=o(t=>X(S(t)),"srgb_into_display_p3"),be=o(t=>X(H(t)),"srgb\
_linear_into_display_p3");var M=o((t,r,e)=>{let i=Math.max(t,r,e),n=Math.min(t,r,e),a=i-n,p=ce(
t,r,e),l=0,s=(n+i)/2;return a!==0&&(l=s===0||s===1?0:(i-s)/Math.min(
s,1-s)),l<0&&(p+=Math.PI,l=Math.abs(l)),l<=1e-5&&(p=NaN),[p*180/Math.
PI,l*100,s*100]},"rgb_to_hsl"),ce=o((t,r,e)=>{let i=Math.max(t,r,
e),n=Math.min(t,r,e),a=NaN,p=i-n;if(p!==0){switch(i){case t:a=(r-
e)/p+(r<e?6:0);break;case r:a=(e-t)/p+2;break;case e:a=(t-r)/p+4}
a*=Math.PI/3}return a},"rgb_to_hue"),C=o((t,r,e)=>{let i=ce(t,r,e),
n=Math.min(t,Math.min(r,e)),a=1-Math.max(t,Math.max(r,e));return[
i*180/Math.PI,n*100,a*100]},"rgb_to_hwb");var fe=o(t=>{let[r,e,i]=vt(t).position;return _(k,M(r,e,i))},"a98\
_rgb_into_hsl");var he=o(t=>{let[r,e,i]=It(t).position;return _(k,M(r,e,i))},"dis\
play_p3_into_hsl");var xe=o(t=>{if(b(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
[n,a,p]=Mt(e,r,i),[l,s,m]=M(n,a,p);return _(k,[l,s,m])}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_hsl");var de=o(t=>{let[r,e,i]=Ct(t).position;return _(k,M(r,e,i))},"lab\
_into_hsl");var ye=o(t=>{let[r,e,i]=At(t).position;return _(k,M(r,e,i))},"lch\
_into_hsl");var ge=o(t=>{let[r,e,i]=Ot(t).position;return _(k,M(r,e,i))},"okl\
ab_into_hsl");var ue=o(t=>{let[r,e,i]=Tt(t).position;return _(k,M(r,e,i))},"okl\
ch_into_hsl");var ze=o(t=>{let[r,e,i]=jt(t).position;return _(k,M(r,e,i))},"pro\
photo_rgb_into_hsl");var Se=o(t=>{let[r,e,i]=Rt(t).position,[n,a,p]=M(r,e,i);return _(
k,[n,a,p])},"rec2020_into_hsl");var uo=o(t=>{if(b(t)&&["rgb","srgb"].includes(t.colorspace)){let[
r,e,i]=t.position,[n,a,p]=M(r,e,i);return _(k,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_hsl"),Pe=o(t=>{if(b(t)&&
t.colorspace==="srgb-linear"){let[r,e,i]=t.position.map(l=>dt(l)),
[n,a,p]=M(r,e,i);return _(k,[n,a,p])}else throw new Error("Wrong \
parameter passed: "+t)},"srgb_linear_into_hsl");var we=o(t=>{let[r,e,i]=lt(t).position;return _(k,M(r,e,i))},"xyz\
_d50_into_hsl"),Qo=o(t=>{let[r,e,i]=O(t).position;return _(k,M(r,
e,i))},"xyz_d65_into_hsl");var ke=o(t=>{let[r,e,i]=vt(t).position;return _(v,C(r,e,i))},"a98\
_rgb_into_hwb");var ve=o(t=>{let[r,e,i]=It(t).position;return _(v,C(r,e,i))},"dis\
play_p3_into_hwb");var Ie=o(t=>{if(b(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
[n,a,p]=pt(e,r,i);return _(v,C(n,a,p))}else throw new Error("Wron\
g parameter passed: "+t)},"hsl_into_hwb");var Me=o(t=>{let[r,e,i]=Ct(t).position;return _(v,C(r,e,i))},"lab\
_into_hwb");var Ce=o(t=>{let[r,e,i]=At(t).position;return _(v,C(r,e,i))},"lch\
_into_hwb");var Ae=o(t=>{let[r,e,i]=Ot(t).position;return _(v,C(r,e,i))},"okl\
ab_into_hwb");var Ye=o(t=>{let[r,e,i]=Tt(t).position;return _(v,C(r,e,i))},"okl\
ch_into_hwb");var Oe=o(t=>{let[r,e,i]=jt(t).position;return _(v,C(r,e,i))},"pro\
photo_rgb_into_hwb");var Te=o(t=>{let[r,e,i]=Rt(t).position;return _(v,C(r,e,i))},"rec\
2020_into_hwb");var zo=o(t=>{if(b(t)&&["rgb","srgb"].includes(t.colorspace)){let[
r,e,i]=t.position;return _(v,C(r,e,i))}else throw new Error("Wron\
g parameter passed: "+t)},"srgb_into_hwb"),je=o(t=>{if(b(t)&&t.colorspace===
"srgb-linear"){let[r,e,i]=t.position.map(n=>dt(n));return _(v,C(r,
e,i))}else throw new Error("Wrong parameter passed: "+t)},"srgb_l\
inear_into_hwb");var Re=o(t=>{let[r,e,i]=lt(t).position;return _(v,C(r,e,i))},"xyz\
_d50_into_hwb"),tr=o(t=>{let[r,e,i]=O(t).position;return _(v,C(r,
e,i))},"xyz_d65_into_hwb");var oo=o(t=>{if(b(t)&&t.colorspace==="xyz-d50"){let r=_(K,t.position.
toArray());return f(r).multiply(B),r}else throw new Error("Wrong \
parameter passed: "+t)},"xyz_d50_into_xyz_d65"),x=o(t=>{if(b(t)&&
t.colorspace==="xyz-d65"){let r=_(U,t.position.toArray());return f(
r).multiply(it),r}else throw new Error("Wrong parameter passed: "+
t)},"xyz_d65_into_xyz_d50");var lo=o(t=>h(x(t)),"xyz_d65_into_lab"),h=o(t=>{if(b(t)&&t.colorspace===
"xyz-d50"){let r=.008856451679035631,e=29**3/3**3,[i,n,a]=t.position.
map((m,c)=>m/ot[c]).map(m=>m>r?Math.cbrt(m):(e*m+16)/116),p=116*n-
16,l=500*(i-n),s=200*(n-a);return _(bo,[p,l,s])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_lab");var De=o(t=>{let r=L(t),e=x(r);return h(e)},"a98_rgb_into_lab");var Xe=o(t=>{let r=W(t),e=x(r);return h(e)},"display_p3_into_lab");var Ze=o(t=>{let r=Q(t),e=x(r);return h(e)},"hsl_into_lab");var Ee=o(t=>{let r=tt(t),e=x(r);return h(e)},"hwb_into_lab");var Be=o(t=>{let r=g(t),e=x(r);return h(e)},"oklab_into_lab");var We=o(t=>{let r=J(t),e=g(r),i=x(e);return h(i)},"oklch_into_la\
b");var Le=o(t=>{let r=wt(t);return h(r)},"prophoto_rgb_into_lab");var Ne=o(t=>{let r=N(t),e=x(r);return h(e)},"rec2020_into_lab");var So=o(t=>{let r=S(t),e=x(r);return h(e)},"srgb_into_lab"),$e=o(
t=>{let r=H(t),e=x(r);return h(e)},"srgb_linear_into_lab");var A=o(t=>{if(b(t)&&t.colorspace==="lab"){let[r,e,i]=t,n=Math.atan2(
i,e)*(180/Math.PI),a=Math.hypot(e,i);return _(yr,[r,a,n])}else throw new Error(
"Wrong parameter passed: "+t)},"lab_into_lch");var He=o(t=>{let r=L(t),e=x(r),i=h(e);return A(i)},"a98_rgb_into_\
lch");var Ge=o(t=>{let r=W(t),e=x(r),i=h(e);return A(i)},"display_p3_in\
to_lch");var Ve=o(t=>{let r=Q(t),e=x(r),i=h(e);return A(i)},"hsl_into_lch");var Fe=o(t=>{let r=tt(t),e=x(r),i=h(e);return A(i)},"hwb_into_lch");var Ke=o(t=>{let r=g(t),e=x(r),i=h(e);return A(i)},"oklab_into_lc\
h");var Ue=o(t=>{let r=J(t),e=g(r),i=x(e),n=h(i);return A(n)},"oklch_\
into_lch");var qe=o(t=>{let r=wt(t),e=h(r);return A(e)},"prophoto_rgb_into_l\
ch");var Je=o(t=>{let r=N(t),e=x(r),i=h(e);return A(i)},"rec2020_into_\
lch");var Po=o(t=>{let r=S(t),e=x(r),i=h(e);return A(i)},"srgb_into_lch"),
Qe=o(t=>{let r=H(t),e=x(r),i=h(e);return A(i)},"srgb_linear_into_\
lch");var ti=o(t=>A(h(t)),"xyz_d50_into_lch"),or=o(t=>A(lo(t)),"xyz_d65\
_into_lch");var T=o(t=>{if(b(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,a,p]=f(r,e,i).multiply(Gt).each((l,s,m)=>m[s]=Math.cbrt(l)).multiply(
Vt);return _(ao,[n*100,a,p])}else throw new Error("Wrong paramete\
r passed: "+t)},"xyz_d65_into_oklab"),oi=o(t=>{if(b(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(B).multiply(
Gt).each((l,s,m)=>m[s]=Math.cbrt(l)).multiply(Vt);return _(ao,[n*
100,a,p])}else throw new Error("Wrong parameter passed: "+t)},"xy\
z_d50_into_oklab");var ri=o(t=>T(L(t)),"a98_rgb_into_oklab");var ei=o(t=>T(W(t)),"display_p3_into_oklab");var ii=o(t=>{let r=Q(t);return T(r)},"hsl_into_oklab");var ni=o(t=>T(tt(t)),"hwb_into_oklab");var ro=o(t=>{let r=z(t),e=oo(r);return T(e)},"lab_into_oklab");var ai=o(t=>{let r=$(t),e=z(r),i=oo(e);return T(i)},"lch_into_okl\
ab");var pi=o(t=>T(q(t)),"prophoto_rgb_into_oklab");var _i=o(t=>T(N(t)),"rec2020_into_oklab");var wo=o(t=>{let r=S(t);return T(r)},"srgb_into_oklab"),li=o(t=>{
let r=H(t);return T(r)},"srgb_linear_into_oklab");var G=o(t=>{if(b(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,a,p]=f(r,e,i).multiply(Gt).each((c,E,d)=>d[E]=Math.cbrt(c)).multiply(
Vt),l=n*100,s=Math.hypot(a,p),m=s<.001?NaN:Math.atan2(p,a)*180/Math.
PI;return _(po,[l,s,m])}else throw new Error("Wrong parameter pas\
sed: "+t)},"xyz_d65_into_oklch"),si=o(t=>{if(b(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position.toArray(),[n,a,p]=f(r,e,i).multiply(
B).multiply(Gt).each((c,E,d)=>d[E]=Math.cbrt(c)).multiply(Vt),l=n*
100,s=Math.hypot(a,p),m=s<.001?NaN:Math.atan2(p,a)*180/Math.PI;return _(
po,[l,s,m])}else throw new Error("Wrong parameter passed: "+t)},"\
xyz_d50_into_oklch");var mi=o(t=>{let r=L(t);return G(r)},"a98_rgb_into_oklch");var bi=o(t=>{let r=W(t);return G(r)},"display_p3_into_oklch");var ci=o(t=>{let r=Q(t);return G(r)},"hsl_into_oklch");var fi=o(t=>{let r=tt(t);return G(r)},"hwb_into_oklch");var eo=o(t=>{if(b(t)&&t.colorspace==="oklab"){let[r,e,i]=t,n=Math.
hypot(e,i),a=n<.001?NaN:Math.atan2(i,e)*180/Math.PI;return _(po,[
r,n,a])}else throw new Error("Wrong parameter passed: "+t)},"okla\
b_into_oklch");var hi=o(t=>eo(ro(t)),"lab_into_oklch");var xi=o(t=>{let r=$(t),e=ro(r);return eo(e)},"lch_into_oklch");var di=o(t=>{let r=q(t);return G(r)},"prophoto_rgb_into_oklch");var yi=o(t=>{let r=N(t);return G(r)},"rec2020_into_oklch");var ko=o(t=>{let r=S(t);return G(r)},"srgb_into_oklch"),gi=o(t=>{
let r=H(t);return G(r)},"srgb_linear_into_oklch");var ui=u(1.3457868816471583,-.5446307051249019,0,-.25557208737979464,
1.5082477428451468,0,-.05110186497554526,.02052744743642139,1.2119675456389452),
rr=o(t=>{if(b(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,a,p]=f(r,e,i).multiply(it).multiply(ui).each((l,s,m)=>m[s]=Uo(
l)*100);return _(No,[n,a,p])}else throw new Error("Wrong paramete\
r passed: "+t)},"xyz_d65_into_prophoto_rgb"),Y=o(t=>{if(b(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(ui).each(
(l,s,m)=>m[s]=Uo(l)*100);return _(No,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_prophoto_rgb");var zi=o(t=>Y($t(t)),"a98_rgb_into_prophoto_rgb");var Si=o(t=>Y(Nt(t)),"display_p3_into_prophoto_rgb");var io=o(t=>z($(t)),"lch_into_xyz_d50"),vo=o(t=>yt($(t)),"lch_int\
o_xyz_d65");var Pi=o(t=>Y(Qt(t)),"hsl_into_prophoto_rgb");var wi=o(t=>Y(to(t)),"hwb_into_prophoto_rgb");var ki=o(t=>Y(z(t)),"lab_into_prophoto_rgb");var vi=o(t=>Y(io(t)),"lch_into_prophoto_rgb");var Ii=o(t=>Y(Yt(t)),"oklab_into_prophoto_rgb");var Mi=o(t=>Y(Ut(t)),"oklch_into_prophoto_rgb");var Ci=o(t=>Y(Ft(t)),"rec2020_into_prophoto_rgb");var Io=o(t=>Y(_t(t)),"srgb_into_prophoto_rgb"),Ai=o(t=>Y(Kt(t)),"\
srgb_linear_into_prophoto_rgb");var Yi=u(30757411/17917100,-19765991/29648200,792561/44930125,-6372589/
17917100,47925759/29648200,-1921689/44930125,-4539589/17917100,467509/
29648200,42328811/44930125),Z=o(t=>{if(b(t)&&t.colorspace==="xyz-\
d65"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(Yi).each((l,s,m)=>m[s]=
Jo(l)*100);return _($o,[n,a,p])}else throw new Error("Wrong param\
eter passed: "+t)},"xyz_d65_into_rec2020"),no=o(t=>{if(b(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,a,p]=f(r,e,i).multiply(B).multiply(
Yi).each((l,s,m)=>m[s]=Jo(l)*100);return _($o,[n,a,p])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_rec2020");var Oi=o(t=>Z(L(t)),"a98_rgb_into_rec2020");var Ti=o(t=>Z(W(t)),"display_p3_into_rec2020");var ji=o(t=>Z(Q(t)),"hsl_into_rec2020");var Ri=o(t=>Z(tt(t)),"hwb_into_rec2020");var Di=o(t=>no(z(t)),"lab_into_rec2020");var Xi=o(t=>no(z($(t))),"lch_into_rec2020");var Zi=o(t=>Z(g(t)),"oklab_into_rec2020");var Ei=o(t=>Z(g(J(t))),"oklch_into_rec2020");var Bi=o(t=>Z(q(t)),"prophoto_rgb_into_rec2020");var Mo=o(t=>Z(S(t)),"srgb_into_rec2020"),Wi=o(t=>Z(H(t)),"srgb_li\
near_into_rec2020");var j=o(t=>t,"itself"),Co={"a98-rgb":{"a98-rgb":j,"display-p3":Cr,
hsl:Fr,hwb:Kr,lab:Ur,lch:qr,oklab:Jr,oklch:Qr,"prophoto-rgb":te,rec2020:oe,
"srgb-linear":Vr,rgb:Dt,srgb:Dt,"xyz-d50":Mr,xyz:D,"xyz-d65":D},"\
display-p3":{"a98-rgb":ee,"display-p3":o(t=>t,"display-p3"),hsl:ie,
hwb:ne,lab:ae,lch:pe,oklab:_e,oklch:le,"prophoto-rgb":se,rec2020:me,
"srgb-linear":be,rgb:go,srgb:go,"xyz-d50":Jt,xyz:X,"xyz-d65":X},hsl:{
"a98-rgb":fe,"display-p3":he,hsl:j,hwb:xe,lab:de,lch:ye,oklab:ge,
oklch:ue,"prophoto-rgb":ze,rec2020:Se,"srgb-linear":Pe,rgb:uo,srgb:uo,
"xyz-d50":we,xyz:Qo,"xyz-d65":Qo},hwb:{"a98-rgb":ke,"display-p3":ve,
hsl:Ie,hwb:j,lab:Me,lch:Ce,oklab:Ae,oklch:Ye,"prophoto-rgb":Oe,rec2020:Te,
"srgb-linear":je,rgb:zo,srgb:zo,"xyz-d50":Re,xyz:tr,"xyz-d65":tr},
lab:{"a98-rgb":De,"display-p3":Xe,hsl:Ze,hwb:Ee,lab:j,lch:$,oklab:Be,
oklch:We,"prophoto-rgb":Le,rec2020:Ne,"srgb-linear":$e,rgb:So,srgb:So,
"xyz-d50":h,xyz:lo,"xyz-d65":lo},lch:{"a98-rgb":He,"display-p3":Ge,
hsl:Ve,hwb:Fe,lab:A,lch:j,oklab:Ke,oklch:Ue,"prophoto-rgb":qe,rec2020:Je,
"srgb-linear":Qe,rgb:Po,srgb:Po,"xyz-d50":ti,xyz:or,"xyz-d65":or},
oklab:{"a98-rgb":ri,"display-p3":ei,hsl:ii,hwb:ni,lab:ro,lch:ai,oklab:j,
oklch:J,"prophoto-rgb":pi,rec2020:_i,"srgb-linear":li,rgb:wo,srgb:wo,
"xyz-d50":oi,xyz:T,"xyz-d65":T},oklch:{"a98-rgb":mi,"display-p3":bi,
hsl:ci,hwb:fi,lab:hi,lch:xi,oklab:eo,oklch:j,"prophoto-rgb":di,rec2020:yi,
"srgb-linear":gi,rgb:ko,srgb:ko,"xyz-d50":si,xyz:G,"xyz-d65":G},"\
prophoto-rgb":{"a98-rgb":zi,"display-p3":Si,hsl:Pi,hwb:wi,lab:ki,
lch:vi,oklab:Ii,oklch:Mi,"prophoto-rgb":j,rec2020:Ci,"srgb-linear":Ai,
rgb:Io,srgb:Io,"xyz-d50":Y,xyz:rr,"xyz-d65":rr},rec2020:{"a98-rgb":Oi,
"display-p3":Ti,hsl:ji,hwb:Ri,lab:Di,lch:Xi,oklab:Zi,oklch:Ei,"pr\
ophoto-rgb":Bi,rec2020:j,"srgb-linear":Wi,rgb:Mo,srgb:Mo,"xyz-d50":no,
xyz:Z,"xyz-d65":Z},"srgb-linear":{"a98-rgb":Yr,"display-p3":Or,hsl:jr,
hwb:Rr,lab:Dr,lch:Xr,oklab:Br,oklch:Wr,"prophoto-rgb":Nr,rec2020:Gr,
"srgb-linear":j,rgb:j,srgb:j,"xyz-d50":Ht,xyz:nt,"xyz-d65":nt},rgb:{
"a98-rgb":vt,"display-p3":It,hsl:Tr,hwb:ho,lab:Ct,lch:At,oklab:Ot,
oklch:Tt,"prophoto-rgb":jt,rec2020:Rt,"srgb-linear":j,rgb:j,srgb:j,
"xyz-d50":lt,xyz:O,"xyz-d65":O},srgb:{"a98-rgb":vt,"display-p3":It,
hsl:fo,hwb:ho,lab:Ct,lch:At,oklab:Ot,oklch:Tt,"prophoto-rgb":jt,rec2020:Rt,
"srgb-linear":j,rgb:j,srgb:j,"xyz-d50":lt,xyz:O,"xyz-d65":O},"xyz\
-d50":{"a98-rgb":$t,"display-p3":Nt,hsl:Qt,hwb:to,lab:z,lch:io,oklab:Yt,
oklch:Ut,"prophoto-rgb":wt,rec2020:Ft,"srgb-linear":Kt,rgb:_t,srgb:_t,
"xyz-d50":j,xyz:x,"xyz-d65":x},"xyz-d65":{"a98-rgb":L,"display-p3":W,
hsl:Q,hwb:tt,lab:yt,lch:vo,oklab:g,oklch:qt,"prophoto-rgb":q,rec2020:N,
"srgb-linear":H,rgb:S,srgb:S,"xyz-d50":oo,xyz:j,"xyz-d65":j},xyz:{
"a98-rgb":L,"display-p3":W,hsl:Q,hwb:tt,lab:yt,lch:vo,oklab:g,oklch:qt,
"prophoto-rgb":q,rec2020:N,"srgb-linear":H,rgb:S,srgb:S,"xyz-d50":j,
xyz:o(t=>t,"xyz"),"xyz-d65":o(t=>t,"xyz-d65"),d50:{"a98-rgb":$t,"\
display-p3":Nt,hsl:Qt,hwb:to,lab:z,lch:io,oklab:Yt,oklch:Ut,"prop\
hoto-rgb":wt,rec2020:Ft,"srgb-linear":Kt,rgb:_t,srgb:_t,"xyz-d50":o(
t=>t,"xyz-d50"),xyz:x,"xyz-d65":x},d65:{"a98-rgb":$t,"display-p3":Nt,
hsl:Qt,hwb:to,lab:z,lch:io,oklab:Yt,oklch:Ut,"prophoto-rgb":wt,rec2020:Ft,
"srgb-linear":Kt,rgb:S,srgb:_t,"xyz-d50":x,"xyz-d65":o(t=>t,"xyz-\
d65"),xyz:o(t=>t,"xyz")}}};var so=class{static{o(this,"ColorValue")}#o=1;#t;constructor(r,e){
this.#t=ir(r,e)}in(r){return Co[r][this.#t.space.ident](this.#t).
values()}to(r){return this.#t=Co[r][this.#t.space.ident](this.#t),
this}toString(){return`color(${this.#t.colorspace} ${this.#t.values().
join(" ")} / ${this.#o})`}get space(){return this.#t.space}get xyz(){
return Co.xyz[this.#t.space.whitepoint.ident][this.#t.space.ident](
this.#t).values()}};var mo=class extends so{static{o(this,"ColorAttributes")}constructor(r,e){
super(r,e)}get saturation(){return Number.NaN}get lightness(){return Number.
NaN}get darkness(){return Number.NaN}get brightness(){return Number.
NaN}get luminance(){return Number.NaN}};var Ao=class extends mo{static{o(this,"Color")}constructor(r,e){super(
r,e)}};export{Ao as Color};
