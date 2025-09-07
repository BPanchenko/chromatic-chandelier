var br=Object.defineProperty;var o=(t,r)=>br(t,"name",{value:r,configurable:!0});var dr=Object.defineProperty,wt=o((t,r)=>dr(t,"name",{value:r,configurable:!0}),
"n"),hr=wt(t=>t!==null&&typeof t=="object","isObject"),yr=wt(t=>hr(
t)&&"ident"in t&&"short"in t&&"domain"in t,"isSpaceDimension");function z(t,r,e){
let i=Iterator.from(e===void 0?[t,r]:[t,r,e]),n=e===void 0?2:3;for(let m of i.
take(n))if(yr(m)===!1)throw new TypeError("Passed wrong space dim\
ension: "+JSON.stringify(m,void 0,2));let p=i.take(n).filter(m=>m.
tgeom==="azimuth"||m.tgeom==="reference-ray").toArray().length===
2?n===3?"cilinder":"circle":n===3?"cube":"plane",a=Object.create(
null,{0:{enumerable:!0,value:t},1:{enumerable:!0,value:r},length:{
enumerable:!0,value:n},tgeom:{enumerable:!0,value:p},entries:{value:wt(
function*(){yield[0,this[0]],yield[1,this[1]],this.length===3&&(yield[
2,this[2]])},"value")},toArray:{value:wt(function(){return Array.
of(...this)},"value")},[Symbol.iterator]:{value:wt(function*(){yield this[0],
yield this[1],this.length===3&&(yield this[2])},"value")}});return n===
3&&Object.defineProperty(a,2,{enumerable:!0,value:e}),m=>m===void 0?
a:Object.defineProperties(a,m)}o(z,"v");wt(z,"createCoordinateSys\
tem");var gr=Object.defineProperty,ct=o((t,r)=>gr(t,"name",{value:r,configurable:!0}),
"n"),mo=ct(t=>typeof t=="number","isNumber"),ur=ct(t=>t!==null&&typeof t==
"object","isObject"),Vr=ct(t=>ur(t)&&Symbol.iterator in t&&"minim\
um"in t&&mo(t.minimum)&&"maximum"in t&&mo(t.maximum)&&"value"in t&&
mo(t.value)&&t.value>0,"isRange");function h(...t){let r=t.length===
1?Array.of(0,t[0]):Array.of(Math.min(...t),Math.max(...t)),[e,i]=r,
n=i-e,p=e+n/2;return Object.create(null,{from:{value:e},to:{value:i},
minimum:{enumerable:!0,value:e},maximum:{enumerable:!0,value:i},avg:{
enumerable:!0,value:p},value:{enumerable:!0,value:n},allot:{value:Po},
clamp:{value:wo},test:{value:ct(a=>e<=a&&a<=i,"value")},toString:{
value:ct(()=>String.raw`{x ∈ R; ${e} ⋜ x ⋜ ${i}}`,"value")},
[Symbol.iterator]:{value:ct(function*(){yield this.from,yield this.
to},"value")},length:{value:2}})}o(h,"D");ct(h,"createRange");function Po(t){
return this.test(t)?t:t>this.from?(t-this.to)%this.value+this.from:
this.to-(this.from-t)%this.value}o(Po,"p");ct(Po,"allocateOuterVa\
lue");function wo(t){return this.test(t)?t:Math.max(Math.min(t,this.
to),this.from)}o(wo,"h");ct(wo,"restrictOuterValue");var zr=Object.defineProperty,Sr=o((t,r)=>zr(t,"name",{value:r,configurable:!0}),
"n"),Pr=Sr((t,r=12)=>{let e=r?10**r:1;return Math.sign(t)*Math.round(
(Math.abs(t)+Number.EPSILON)*e)/e},"round"),d=Pr;var wr=Object.defineProperty,xt=o((t,r)=>wr(t,"name",{value:r,configurable:!0}),
"t");function lo(...t){let r=t.length===1?Array.of(0,t[0]):Array.
of(Math.min(...t),Math.max(...t)),[e,i]=r,n=i-e,p=e+n/2;return Object.
create(null,{from:{value:e},to:{value:i},minimum:{enumerable:!0,value:e},
maximum:{enumerable:!0,value:i},avg:{enumerable:!0,value:p},value:{
enumerable:!0,value:n},allot:{value:vo},clamp:{value:ko},test:{value:xt(
a=>e<=a&&a<=i,"value")},toString:{value:xt(()=>String.raw`{x ∈ R; ${e} ⋜ x ⋜ ${i}}`,
"value")},[Symbol.iterator]:{value:xt(function*(){yield this.from,
yield this.to},"value")},length:{value:2}})}o(lo,"c");xt(lo,"crea\
teRange");function vo(t){return this.test(t)?t:t>this.from?(t-this.
to)%this.value+this.from:this.to-(this.from-t)%this.value}o(vo,"g");
xt(vo,"allocateOuterValue");function ko(t){return this.test(t)?t:
Math.max(Math.min(t,this.to),this.from)}o(ko,"h");xt(ko,"restrict\
OuterValue");function so(t=[0,100],r=[0,1]){let[e,i]=r,[n,p]=t,[a,
m]=[i-e,p-n];function l(x){return typeof x=="string"&&(x=parseFloat(
x)),f.domain.test(x)===!1&&(x=x>i?(x-i)%a+e:i-(e-x)%a),m*(x-e)/a+
n}o(l,"b"),xt(l,"invert");function f(x){return typeof x=="string"&&
(x=parseFloat(x)),f.range.test(x)===!1&&(x=x>p?(x-p)%m+n:p-(n-x)%
m),a*(x-n)/m+e}return o(f,"l"),xt(f,"calculator"),Object.defineProperties(
f,{domain:{enumerable:!0,value:lo(e,i)},range:{enumerable:!0,value:lo(
n,p)},invert:{enumerable:!0,value:l}})}o(so,"j");xt(so,"initScale");var fo=so([0,360],[-Math.PI,Math.PI]),vt=Object.freeze({bytes:8,domain:fo.
domain,ident:"angle",input:o(t=>fo.domain.allot(d(t*Math.PI/180)),
"input"),output:o(t=>fo.range.allot(d(t*180/Math.PI)),"output"),short:"\
phi",tcoord:"polar",tgeom:"azimuth"});var bt=Object.freeze({$coord:vt,bytes:8,domain:h(0,360),ident:"hu\
e",short:"h",input:o(t=>bt.domain.allot(t),"input"),output:o(t=>Number.
isNaN(t)?Number.NaN:Math.abs(t)<.01?0:d(t),"output")});var pt=Object.freeze({bytes:8,domain:h(0,1),ident:"applicate",short:"\
z",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var mt=Object.freeze({$coord:pt,bytes:8,domain:h(0,100),ident:"li\
ghtness",input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"outpu\
t"),short:"L"});var at=Object.freeze({bytes:8,domain:h(0,1),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var Mo=Object.freeze({$coord:at,bytes:8,domain:h(0,100),ident:"sa\
turation",input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"outp\
ut"),short:"S"});var ke=z(at,vt)({adapt:{enumerable:!0,value:co}});function co(t=0,r=NaN){return[t*Math.cos(r),t*Math.sin(r)]}o(co,"\
calcCartesianCoordinates");var gt=z(at,vt,pt)({adapt:{value:vr}});function vr(t,r,e){return[
...co(t,r),e]}o(vr,"calcCubeCoordinates");var tt=Object.defineProperty(Float64Array.of(.9504559270516716,1,
1.0890577507598784),"ident",{value:"d65"});Object.freeze(tt.buffer);var S={CAM:z(bt,Mo,mt)(),CSYS:gt,ident:"hsl",whitepoint:tt};var Io=Object.freeze({$coord:pt,bytes:8,domain:h(0,100),ident:"bl\
ackness",input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"outpu\
t"),short:"B"});var Yo=Object.freeze({$coord:at,ident:"whiteness",bytes:8,domain:h(
0,100),input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"output"),
short:"W"});var P={CAM:z(bt,Yo,Io)(),CSYS:gt,ident:"hwb",whitepoint:tt};var lt=Object.freeze({bytes:8,domain:h(-1,1),ident:"abscissa",short:"\
x",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var Co=Object.freeze({$coord:lt,bytes:8,domain:h(-125,125),ident:"\
green-red",input:o(t=>d(t/125),"input"),output:o(t=>d(t*125),"out\
put"),short:"a"}),Oo=Object.freeze({$coord:lt,bytes:8,domain:h(-.4,
.4),ident:"green-red",short:"a"});var st=Object.freeze({bytes:8,domain:h(-1,1),ident:"ordinate",short:"\
y",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var Ao=Object.freeze({$coord:st,bytes:8,domain:h(-125,125),ident:"\
blue-yellow",input:o(t=>d(t/125),"input"),output:o(t=>d(t*125),"o\
utput"),short:"b"}),To=Object.freeze({$coord:st,bytes:8,domain:h(
-.4,.4),ident:"blue-yellow",short:"b"});var wi=z(lt,st)({adapt:{value:xo}});function xo(t,r){let e=0,i=NaN;return(t!==0||r!==0)&&(e=Math.sqrt(
t**2+r**2),t!==0&&!r||r!==0&&!t?i=r/Math.abs(r)*(Math.PI/2):i=Math.
atan(r/t)),[e,i]}o(xo,"calcPolarCoordinates");var dt=z(lt,st,pt)({adapt:{value:kr}});function kr(t,r,e){return[
...xo(t,r),e]}o(kr,"calcCylindricalCoordinates");var L=Object.defineProperty(Float64Array.of(.9642956764295677,1,.8251046025104602),
"ident",{value:"d50"});Object.freeze(L.buffer);var Dt=Object.freeze({CAM:z(mt,Co,Ao)(),CSYS:dt,ident:"lab",whitepoint:L});var jo=Object.freeze({$coord:at,bytes:8,domain:h(0,150),ident:"ch\
roma",input:o(t=>d(t/150),"input"),output:o(t=>d(t*150),"output"),
short:"C"}),Xo=Object.freeze({$coord:at,bytes:8,domain:h(0,.4),ident:"\
chroma",short:"c"});var Zo=Object.freeze({CAM:z(mt,jo,bt)(),CSYS:gt,ident:"lch",whitepoint:L});var Tt=Object.freeze({CAM:z(mt,Oo,To)(),CSYS:dt,ident:"oklab",whitepoint:tt});var jt={CAM:z(mt,Xo,bt)(),CSYS:gt,ident:"oklch",whitepoint:tt};var Wo=Object.freeze({$coord:pt,bytes:8,domain:h(0,100),ident:"bl\
ue",input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"output"),short:"\
b"}),Bo=Object.freeze({$coord:pt,bytes:1,domain:h(0,255),ident:"b\
lue",input:o(t=>d(t/255),"input"),output:o(t=>Math.round(t*255)&255,
"output"),short:"B"});var Eo=Object.freeze({$coord:st,bytes:8,domain:h(0,100),ident:"gr\
een",input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"output"),
short:"g"}),Ro=Object.freeze({$coord:st,bytes:1,domain:h(0,255),ident:"\
green",input:o(t=>d(t/255),"input"),output:o(t=>Math.round(t*255)&
255,"output"),short:"G"});var Lo=Object.freeze({$coord:lt,bytes:8,domain:h(0,100),ident:"gr\
een",input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"output"),
short:"r"}),Do=Object.freeze({$coord:lt,bytes:1,domain:h(0,255),ident:"\
red",input:o(t=>d(t/255),"input"),output:o(t=>Math.round(t*255)&255,
"output"),short:"R"});var kt=z(Lo,Eo,Wo)(),St=dt,Mt=tt,D=Object.freeze({ident:"srgb",CAM:kt,
CSYS:St,whitepoint:Mt}),Pt=Object.freeze({ident:"srgb-linear",CAM:kt,
CSYS:St,whitepoint:Mt}),Xt=Object.freeze({ident:"a98-rgb",CAM:kt,
CSYS:St,whitepoint:Mt}),bo=Object.freeze({ident:"display-p3",CAM:kt,
CSYS:St,whitepoint:Mt}),ho=Object.freeze({ident:"prophoto-rgb",CAM:kt,
CSYS:St,whitepoint:L}),yo=Object.freeze({ident:"rec2020",CAM:kt,CSYS:St,
whitepoint:Mt}),No=Object.freeze({ident:"rgb",CAM:z(Do,Ro,Bo)(),CSYS:St,
whitepoint:Mt});var j=Object.freeze({ident:"xyz-d65",CSYS:dt,whitepoint:tt}),X=Object.
freeze({ident:"xyz-d50",CSYS:dt,whitepoint:L});var Zt=o(t=>Math.sign(t)*Math.pow(Math.abs(t),2.19921875),"to_lin\
ear"),Wt=o(t=>Math.sign(t)*Math.pow(Math.abs(t),256/563),"to_gamu\
t");var Mr=Object.defineProperty,ht=o((t,r)=>Mr(t,"name",{value:r,configurable:!0}),
"n"),Ir=ht(t=>Yr(t)&&Symbol.iterator in t&&typeof t[Symbol.iterator]==
"function","isIterableObject"),Yr=ht(t=>t!==null&&typeof t=="obje\
ct","isObject"),Hn=ht(t=>Ir(t)&&"length"in t&&typeof t.length=="n\
umber"&&t.length>=9,"isMatrix");function g(...t){let r=Math.max(t.
length,9),e=new ArrayBuffer(r*8),i=new Float64Array(e,0,r);i.set(
t);let n=Object.create(null,{[Symbol.iterator]:{value:ht(function*(){
for(let p=0;p<i.length;p++)yield this[p]},"value")},[Symbol.isConcatSpreadable]:{
value:!0},[Symbol.toStringTag]:{value:ht(()=>"Matrix"+i.toString(),
"value")},length:{enumerable:!0,value:r},toArray:{value:ht(()=>Iterator.
from(i).toArray(),"value")},toString:{value:i.toString}});for(let p=0;p<
r;p++)(function(a,m,l){Object.defineProperty(a,m,{enumerable:!0,get:ht(
()=>l[m],"get"),set:ht(f=>{if(typeof f=="number")l[m]=f;else throw new TypeError(
"Expected Number")},"set")})})(n,p,i);return n}o(g,"I");ht(g,"cre\
ateMatrix");var Cr=Object.defineProperty,w=o((t,r)=>Cr(t,"name",{value:r,configurable:!0}),
"t"),Or=w(t=>typeof t=="string","isString"),uo=w(t=>go(t)&&Symbol.
iterator in t&&typeof t[Symbol.iterator]=="function","isIterableO\
bject"),go=w(t=>t!==null&&typeof t=="object","isObject"),Ar=w(t=>Or(
t)&&jr.has(t),"isSpaceID"),Tr=w(t=>go(t)&&"ident"in t&&Ar(t.ident)&&
"CSYS"in t&&go(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===3,"isC\
olorSpace"),jr=new Set(["a98-rgb","display-p3","hsl","hwb","lab",
"lch","oklab","oklch","prophoto-rgb","rec2020","srgb-linear","srg\
b","rgb","xyz","xyz-d50","xyz-d65"]),Xr=w(t=>uo(t)&&"length"in t&&
typeof t.length=="number"&&t.length>=9,"isMatrix"),Zr=w(t=>uo(t)&&
"space"in t&&Tr(t.space)&&"length"in t&&t.length===3&&Iterator.from(
t).every(r=>typeof r=="number"),"isPointInSpace"),Wr=w(t=>uo(t)&&
"length"in t&&t.length===3&&"multiply"in t&&typeof t.multiply=="f\
unction","isVector");function c(t,r=0,e=0){let i=Zr(t)?new Float64Array(
t.buffer):Float64Array.of(t,r,e),n=Object.create(null,{head:{enumerable:!0,
get:w(()=>Iterator.from(i),"get")}});return Object.defineProperties(
n,{each:{value:Ho},multiply:{value:Go},update:{value:w(function(p,a,m){
let l=Array.isArray(p)?p.slice(3):Array.of(p,a,m);return i.set(this.
head.map((f,x)=>l[x]??f).toArray()),this},"value")}}),Object.defineProperties(
n,{[Symbol.isConcatSpreadable]:{value:!0},[Symbol.iterator]:{value:w(
function*(){yield this[0],yield this[1],yield this[2]},"value")},
0:{enumerable:!0,get:w(()=>i[0],"get"),set:w(p=>{if(typeof p=="nu\
mber")i[0]=p;else throw new TypeError("Expected Number")},"set")},
1:{enumerable:!0,get:w(()=>i[1],"get"),set:w(p=>{if(typeof p=="nu\
mber")i[1]=p;else throw new TypeError("Expected Number")},"set")},
2:{enumerable:!0,get:w(()=>i[2],"get"),set:w(p=>{if(typeof p=="nu\
mber")i[2]=p;else throw new TypeError("Expected Number")},"set")},
length:{enumerable:!0,value:3}}),Object.defineProperties(n,{[Symbol.
toStringTag]:{get(){return`Vector[${this.toString()}]`}},entries:{
value:w(function(){return this.values().map((p,a)=>Object.seal(Array.
of(a,p)))},"value")},toArray:{value:w(function(){return Object.seal(
Array.of(this[0],this[1],this[2]))},"value")},toString:{value:w(()=>i.
toString(),"value")},values:{value:w(function(){return Iterator.from(
this.toArray())},"value")}}),n}o(c,"q");w(c,"createVector");function Ho(t){
for(let r=0;r<3;r++)t(this[r],r,this);return this}o(Ho,"A");w(Ho,
"each");function Go(t){let[r,e,i]=this.head;if(Xr(t)||Wr(t)){let[
n,p,a,m=0,l=0,f=0,x=0,Q=0,I=0]=t;return this.update(r*n+e*m+i*x,r*
p+e*l+i*Q,r*a+e*f+i*I)}else throw new TypeError("Unsupported Mult\
iplicator: "+t)}o(Go,"V");w(Go,"multiply");var Br=Object.defineProperty,N=o((t,r)=>Br(t,"name",{value:r,configurable:!0}),
"t"),Er=N(t=>typeof t=="number","isNumber"),Rr=N(t=>typeof t=="st\
ring","isString"),$o=N(t=>zo(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function","isIterableObject"),zo=N(t=>t!==null&&typeof t==
"object","isObject"),Lr=N(t=>Rr(t)&&Dr.has(t),"isSpaceID"),Vo=N(t=>zo(
t)&&"ident"in t&&Lr(t.ident)&&"CSYS"in t&&zo(t.CSYS)&&"length"in t.
CSYS&&t.CSYS.length===3,"isColorSpace"),Dr=new Set(["a98-rgb","di\
splay-p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb",
"rec2020","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz-d65"]),
s=N(t=>$o(t)&&"space"in t&&Vo(t.space)&&"length"in t&&t.length===
3&&Iterator.from(t).every(r=>typeof r=="number"),"isPointInSpace");
function _(t,r){if(Vo(t)===!1)throw new TypeError("Point must be \
declared in a valid color space instead of "+JSON.stringify(t,void 0,
2));if((r instanceof ArrayBuffer||Array.isArray(r)&&r.length===3&&
r.every(a=>Er(a)))===!1)throw new TypeError("Point in space has v\
alid coordinates. Wrong parameters: "+JSON.stringify(r,void 0,2));
let e=t.CSYS.length,i=r instanceof ArrayBuffer?new Float64Array(r):
new Float64Array(e),n=t.CAM===void 0?Array.of(0,1,2):t.CAM.toArray().
map(a=>t.CSYS.toArray().findIndex(m=>a.$coord===m)),p=Object.create(
null,{buffer:{value:i.buffer},colorspace:{enumerable:!0,value:t.ident},
length:{value:e},space:{value:t}});return Object.defineProperties(
p,{equals:{value:N(function(a,m=1e-5){let[l,f,x]=this.position,[Q,
I,ft]=a.position;return this.colorspace===a.colorspace&&Math.abs(
l-Q)<=m*Math.max(1,Math.abs(l),Math.abs(Q))&&Math.abs(f-I)<=m*Math.
max(1,Math.abs(f),Math.abs(I))&&Math.abs(x-ft)<=m*Math.max(1,Math.
abs(x),Math.abs(ft))},"value")},set:{value:N(function(a){let m=0;
for(let l of a)if(this[m]=l,m<3)m++;else break;return this},"valu\
e")}}),(function(a,m){Object.defineProperties(a,{[Symbol.iterator]:{
value:N(function*(){yield this[0],yield this[1],yield this[2]},"v\
alue")},adapted:{get(){if(typeof this.space.CSYS.adapt=="function"){
let[l,f,x]=this.position;return Iterator.from(this.space.CSYS.adapt(
l,f,x))}else return this.position}},position:{get:N(()=>Iterator.
from(m),"get")}});for(let l=0;l<a.length;l++)(function(f,x,Q){Object.
defineProperty(a,l,{enumerable:!0,get(){let{CAM:I,CSYS:ft}=this.space,
At=ft[x],yt=I!==void 0?I[f]:null,_t=Q[x];return"output"in At&&typeof At.
output=="function"&&(_t=At.output(_t)),yt!==null&&"output"in yt&&
typeof yt.output=="function"&&(_t=yt.output(_t)),_t},set(I){let{CAM:ft,
CSYS:At}=this.space,yt=At[x],_t=ft!==void 0?ft[f]:null;_t!==null&&
"input"in _t&&typeof _t.input=="function"&&(I=_t.input(I)),"input"in
yt&&typeof yt.input=="function"&&(I=yt.input(I)),typeof I=="strin\
g"&&(I=parseFloat(I)),Q[x]=I}})})(l,n[l],m)})(p,i),Object.defineProperties(
p,{[Symbol.toStringTag]:{get(){return`PointInSpace(${this.toString()}\
)`}},entries:{value:N(function(){let a=this.space.CAM??this.space.
CSYS;return Iterator.from([[a[0],this[0]],[a[1],this[1]],[a[2],this[2]]])},
"value")},toString:{value:N(function(){return`${this.colorspace};\
[${this.values().toArray().toString()}]`},"value")},values:{value:N(
function(){return Iterator.from([this[0],this[1],this[2]])},"valu\
e")}}),$o(r)?p.set(r):p}o(_,"$");N(_,"initPointInSpace");var U=o(t=>{let r=Math.abs(t);return r<=.04045?t/12.92:Math.sign(
t)*Math.pow((r+.055)/1.055,2.4)},"to_linear"),K=o(t=>{let r=Math.
abs(t);return r>.0031308?Math.sign(t)*(1.055*Math.pow(r,1/2.4)-.055):
12.92*t},"to_gamut");var H=g(1.0479297925449969,.02962780877005599,-.009243040646204504,
.022946870601609652,.9904344267538799,.015055191490298152,-.05019226628920524,
-.017073799063418826,.7518742814281371),O=g(.955473421488075,-.0283697093338637,
.012314014864481998,-.02309845494876471,1.0099953980813041,-.020507649298898964,
.06325924320057072,.021041441191917323,1.330365926242124);var Fo=g(608311/1250200,35783/156275,0,189793/714400,247089/357200,
32229/714400,198249/1000160,198249/2500400,5220557/5000800),G=o(t=>{
if(s(t)&&t.colorspace==="display-p3"){let[r,e,i]=t.position,[n,p,
a]=c(r,e,i).each((m,l,f)=>f[l]=U(m)).multiply(Fo);return _(j,[n,p,
a])}else throw new Error("Wrong parameter passed: "+t)},"display_\
p3_into_xyz_d65"),Uo=o(t=>{if(s(t)&&t.colorspace==="display-p3"){
let[r,e,i]=t.position,[n,p,a]=c(r,e,i).each((m,l,f)=>f[l]=U(m)).multiply(
Fo).multiply(H);return _(X,[n,p,a])}else throw new Error("Wrong p\
arameter passed: "+t)},"display_p3_into_xyz_d50");var Ko=g(1829569/896150,-851781/878810,16779/1248040,-506331/896150,
1648619/878810,-147721/1248040,-308931/896150,36519/878810,1266979/
1248040),Z=o(t=>{if(s(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.
position,[n,p,a]=c(r,e,i).multiply(Ko).each((m,l,f)=>f[l]=Wt(m)*100);
return _(Xt,[n,p,a])}else throw new Error("Wrong parameter passed\
: "+t)},"xyz_d65_into_a98_rgb"),bp=o(t=>{if(s(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(O).multiply(
Ko).each((m,l,f)=>f[l]=Wt(m)*100);return _(Xt,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_a98_rgb");var up=o(t=>Z(G(t)),"display_p3_into_a98_rgb");var qo=g(573536/994567,591459/1989134,53769/1989134,263643/1420810,
6239551/9945670,351524/4972835,187206/994567,374412/4972835,4929758/
4972835),$=o(t=>{if(s(t)&&t.colorspace==="a98-rgb"){let[r,e,i]=t.
position,[n,p,a]=c(r,e,i).each((m,l,f)=>f[l]=Zt(m)).multiply(qo);
return _(j,[n,p,a])}else throw new Error("Wrong parameter passed:\
 "+t)},"a98_rgb_into_xyz_d65"),Jo=o(t=>{if(s(t)&&t.colorspace==="\
a98-rgb"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).each((m,l,f)=>f[l]=
Zt(m)).multiply(qo).multiply(H);return _(X,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"a98_rgb_into_xyz_d50");var Nt=g(12831/3959,-851781/878810,705/12673,-329/214,1648619/878810,
-2585/12673,-1974/3959,36519/878810,705/667),E=o(t=>{if(s(t)&&t.colorspace===
"xyz-d65"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(Nt).each(
(m,l,f)=>f[l]=K(m)*100);return _(D,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_srgb"),et=o(t=>{if(s(
t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,[n,p,a]=c(r,e,
i).multiply(Nt).each((m,l,f)=>f[l]*=100);return _(Pt,[n,p,a])}else
throw new Error("Wrong parameter passed: "+t)},"xyz_d65_into_srgb\
_linear"),ut=o(t=>{if(s(t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.
position,[n,p,a]=c(r,e,i).multiply(O).multiply(Nt).each((m,l,f)=>f[l]=
K(m)*100);return _(D,[n,p,a])}else throw new Error("Wrong paramet\
er passed: "+t)},"xyz_d50_into_srgb"),Ht=o(t=>{if(s(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(O).multiply(
Nt).each((m,l,f)=>f[l]*=100);return _(Pt,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_srgb_linear");var Gt=o(t=>E($(t)),"a98_rgb_into_srgb"),Lp=o(t=>et($(t)),"a98_rg\
b_into_srgb_linear");var $t=o(t=>E(G(t)),"display_p3_into_srgb"),$p=o(t=>et(G(t)),"dis\
play_p3_into_srgb_linear");var ot=o((t,r,e)=>{let i=2*Math.PI,n=Math.PI/6;t<0&&(t+=i),t=t%i;
let p=o(a=>{let m=(a+t/n)%12,l=r*Math.min(e,1-e);return e-l*Math.
max(-1,Math.min(m-3,9-m,1))},"f");return[p(0),p(8),p(4)]},"hsl_to\
_rgb");var oa=o(t=>{if(s(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=ot(e,r,i).map(p=>Math.min(Math.max(Math.round(p*255),0),255));return _(
No,n)}else throw new Error("Wrong parameter passed: "+t)},"hsl_in\
to_rgb"),Qo=o(t=>{if(s(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=ot(e,r,i).map(p=>p*100);return _(D,n)}else throw new Error("Wro\
ng parameter passed: "+t)},"hsl_into_srgb"),ra=o(t=>{if(s(t)&&t.colorspace===
"hsl"){let[r,e,i]=t.position,n=ot(e,r,i).map(p=>U(p)*100);return _(
Pt,n)}else throw new Error("Wrong parameter passed: "+t)},"hsl_in\
to_srgb_linear");var zt=o((t,r,e)=>{if(r+e>=1){let i=r/(r+e);return[i,i,i]}else{let[
i,n,p]=ot(t,1,.5).map(a=>a*(1-r-e)+r);return[i,n,p]}},"hwb_to_rgb");var fa=o(t=>{if(s(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
n=zt(e,r,i).map(p=>p*100);return _(D,n)}else throw new Error("Wro\
ng parameter passed: "+t)},"hwb_into_srgb"),ca=o(t=>{if(s(t)&&t.colorspace===
"hwb"){let[r,e,i]=t.position,n=zt(e,r,i).map(p=>U(p)*100);return _(
Pt,n)}else throw new Error("Wrong parameter passed: "+t)},"hwb_in\
to_srgb_linear");var M=o(t=>{if(s(t)&&t.colorspace==="lab"){let r=903.2962962962963,
e=216/24389,[i,n,p]=t,a=(i+16)/116,m=n/500+a,l=Math.pow(m,3),f=a-
p/200,x=Math.pow(f,3),Q=(l>e?l:(116*m-16)/r)*L[0],I=(i>r*e?Math.pow(
(i+16)/116,3):i/r)*L[1],ft=(x>e?x:(116*f-16)/r)*L[2];return _(X,[
Q,I,ft])}else throw new Error("Wrong parameter passed: "+t)},"lab\
_into_xyz_d50"),It=o(t=>{let r=M(t),[e,i,n]=c(r).multiply(O);return _(
j,[e,i,n])},"lab_into_xyz_d65");var Vt=o(t=>ut(M(t)),"lab_into_srgb"),va=o(t=>Ht(M(t)),"lab_into_\
srgb_linear");var R=o(t=>{if(s(t)&&t.colorspace==="lch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=e*Math.cos(i),p=e*Math.sin(i);return _(
Dt,[r,n,p])}else throw new Error("Wrong parameter passed: "+t)},"\
lch_into_lab");var Ft=o(t=>ut(M(R(t))),"lch_into_srgb"),Xa=o(t=>Ht(M(R(t))),"lch\
_into_srgb_linear");var tr=g(1,1,1,.3963377773761749,-.1055613458156586,-.0894841775298119,
.2158037573099136,-.0638541728258133,-1.2914855480194092),Yt=g(.819022437996703,
.0329836539323885,.0481771893596242,.3619062600528904,.9292868615863434,
.2642395317527308,-.1288737815209879,.0361446663506424,.6335478284694309),
Ct=g(.210454268309314,1.9779985324311684,.0259040424655478,.7936177747023054,
-2.42859224204858,.7827717124575296,-.0040720430116193,.450593709617411,
-.8086757549230774),or=g(1.2268798758459243,-.0405757452148008,-.0763729366746601,
-.5578149944602171,1.112286803280317,-.4214933324022432,.2813910456659647,
-.0717110580655164,1.5869240198367816);var u=o(t=>{if(s(t)&&t.colorspace==="oklab"){let[r,e,i]=t.position,
[n,p,a]=c(i,r,e).multiply(tr).each((m,l,f)=>f[l]=m**3).multiply(or);
return _(j,[n,p,a])}else throw new Error("Wrong parameter passed:\
 "+t)},"oklab_into_xyz_d65"),Ut=o(t=>{let[r,e,i]=c(u(t)).multiply(
H);return _(X,[r,e,i])},"oklab_into_xyz_d50");var Kt=o(t=>E(u(t)),"oklab_into_srgb"),Ua=o(t=>et(u(t)),"oklab_in\
to_srgb_linear");var q=o(t=>{if(s(t)&&t.colorspace==="oklch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=isNaN(i)?0:e*Math.cos(i),p=isNaN(i)?0:
e*Math.sin(i);return _(Tt,[r,n,p])}else throw new Error("Wrong pa\
rameter passed: "+t)},"oklch_into_oklab");var qt=o(t=>E(u(q(t))),"oklch_into_srgb"),n_=o(t=>et(u(q(t))),"ok\
lch_into_srgb_linear");var Jt=o(t=>{let r=Math.abs(t);return r<=.03125?t/16:Math.sign(t)*
Math.pow(r,1.8)},"to_linear"),Bt=o(t=>{let r=Math.abs(t);return r>=
1/512?Math.sign(t)*Math.pow(r,1/1.8):16*t},"to_gamut");var Nr=g(.7977666449006423,.2880748288194013,0,.13518129740053308,
.711835234241873,0,.0313477341283922,8993693872564e-17,.8251046025104602),
Et=o(t=>{if(s(t)&&t.colorspace==="prophoto-rgb"){let r=_(X,t.position.
toArray());return c(r).each((e,i,n)=>n[i]=Jt(e)).multiply(Nr),r}else
throw new Error("Wrong parameter passed: "+t)},"prophoto_rgb_into\
_xyz_d50"),rt=o(t=>{let r=Et(t),e=_(j,r.position.toArray());return c(
e).multiply(O),e},"prophoto_rgb_into_xyz_d65");var Qt=o(t=>E(rt(t)),"prophoto_rgb_into_srgb"),u_=o(t=>et(rt(t)),
"prophoto_rgb_into_srgb_linear");var to=1.09929682680944,rr=.018053968510807,Rt=o(t=>{let r=Math.abs(
t);return r<rr*4.5?t/4.5:Math.sign(t)*Math.pow((r+to-1)/to,1/.45)},
"to_linear"),Lt=o(t=>{let r=Math.abs(t);return r>rr?Math.sign(t)*
(to*Math.pow(r,.45)-(to-1)):4.5*t},"to_gamut");var er=g(63426534/99577255,26158966/99577255,4994106574466076e-32,
20160776/139408157,472592308/697040785,19567812/697040785,47086771/
278816314,8267143/139408157,295819943/278816314),V=o(t=>{if(s(t)&&
t.colorspace==="rec2020"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).
each((m,l,f)=>f[l]=Rt(m)).multiply(er);return _(j,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"rec2020_into_xyz_d65"),ir=o(t=>{if(s(
t)&&t.colorspace==="rec2020"){let[r,e,i]=t.position,[n,p,a]=c(r,e,
i).each((m,l,f)=>f[l]=Rt(m)).multiply(er).multiply(H);return _(X,
[n,p,a])}else throw new Error("Wrong parameter passed: "+t)},"rec\
2020_into_xyz_d50");var oo=o(t=>E(V(t)),"rec2020_into_srgb"),X_=o(t=>et(V(t)),"rec202\
0_into_srgb_linear");var E_=o(t=>t.position.map(K),"gam_srgb"),R_=o(t=>t.position.map(
U),"lin_srgb");var ro=g(506752/1228815,87098/409605,7918/409605,87881/245763,175762/
245763,87881/737289,12673/70218,12673/175545,1001167/1053270),T=o(
t=>{if(s(t)&&["rgb","srgb"].includes(t.colorspace)){let[r,e,i]=t.
position,[n,p,a]=c(r,e,i).each((m,l,f)=>f[l]=U(m)).multiply(ro);return _(
j,[n,p,a])}else throw new Error("Wrong parameter passed: "+t)},"s\
rgb_into_xyz_d65"),J=o(t=>{if(s(t)&&t.colorspace==="srgb-linear"){
let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(ro);return _(j,[n,
p,a])}else throw new Error("Wrong parameter passed: "+t)},"srgb_l\
inear_into_xyz_d65"),Ot=o(t=>{if(s(t)&&["rgb","srgb"].includes(t.
colorspace)){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).each((m,l,f)=>f[l]=
U(m)).multiply(ro).multiply(H);return _(X,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_xyz_d50"),nr=o(t=>{if(s(
t)&&t.colorspace==="srgb-linear"){let[r,e,i]=t.position,[n,p,a]=c(
r,e,i).multiply(ro).multiply(H);return _(X,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_linear_into_xyz_d50");var eo=o(t=>Z(T(t)),"srgb_into_a98_rgb"),lm=o(t=>Z(J(t)),"srgb_li\
near_into_a98_rgb");var bm=o(t=>eo(Qo(t)),"hsl_into_a98_rgb");var Sm=o(t=>{if(s(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position;
if(r+i>=1){let n=r/(r+i);return _(Xt,[n,n,n])}else{let n=ot(e,1,.5).
map(p=>(p*(1-r-i)+r)*100);return eo(_(D,n))}}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_a98_rgb");var Mm=o(t=>Z(It(t)),"lab_into_a98_rgb");var Tm=o(t=>Z(It(R(t))),"lch_into_a98_rgb");var Bm=o(t=>Z(u(t)),"oklab_into_a98_rgb");var pr=o(t=>Ut(q(t)),"oklch_into_xyz_d50"),ar=o(t=>u(q(t)),"oklch\
_into_xyz_d65");var Vm=o(t=>Z(ar(t)),"oklch_into_a98_rgb");var Jm=o(t=>Z(rt(t)),"prophoto_rgb_into_a98_rgb");var el=o(t=>Z(V(t)),"rec2020_into_a98_rgb");var al=o(t=>t.position.map(Wt),"gam_a98"),_l=o(t=>t.position.map(
Zt),"lin_a98");var _r=g(446124/178915,-14852/17905,11844/330415,-333277/357830,63121/
35810,-50337/660830,-72051/178915,423/17905,316169/330415),W=o(t=>{
if(s(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,[n,p,a]=c(
r,e,i).multiply(_r).each((m,l,f)=>f[l]=K(m)*100);return _(bo,[n,p,
a])}else throw new Error("Wrong parameter passed: "+t)},"xyz_d65_\
into_display_p3"),io=o(t=>{if(s(t)&&t.colorspace==="xyz-d50"){let[
r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(O).multiply(_r).each(
(m,l,f)=>f[l]=K(m)*100);return _(bo,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_display_p3");var Al=o(t=>W($(t)),"a98_rgb_into_display_p3");var mr=o(t=>{if(s(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=ot(e,r,i).map(a=>a*100),p=_(D,n);return Ot(p)}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_xyz_d50"),it=o(t=>{if(s(
t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,n=ot(e,r,i).map(a=>a*
100),p=_(D,n);return T(p)}else throw new Error("Wrong parameter p\
assed: "+t)},"hsl_into_xyz_d65");var Nl=o(t=>W(it(t)),"hsl_into_display_p3");var lr=o(t=>{if(s(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
n=zt(e,r,i).map(a=>a*100),p=_(D,n);return Ot(p)}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_xyz_d50"),nt=o(t=>{if(s(
t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,n=zt(e,r,i).map(a=>a*
100),p=_(D,n);return T(p)}else throw new Error("Wrong parameter p\
assed: "+t)},"hwb_into_xyz_d65");var ts=o(t=>W(nt(t)),"hwb_into_display_p3");var ns=o(t=>io(M(t)),"lab_into_display_p3");var ss=o(t=>io(M(R(t))),"lch_into_display_p3");var ds=o(t=>W(u(t)),"oklab_into_display_p3");var Ss=o(t=>W(u(q(t))),"oklch_into_display_p3");var Ms=o(t=>W(rt(t)),"prophoto_rgb_into_display_p3");var As=o(t=>W(V(t)),"rec2020_into_display_p3");var Ws=o(t=>W(T(t)),"srgb_into_display_p3"),Bs=o(t=>W(J(t)),"srgb\
_linear_into_display_p3");var Ds=o(t=>t.position.map(K),"gam_p3"),Ns=o(t=>t.position.map(U),
"lin_p3");var v=o((t,r,e)=>{let i=Math.max(t,r,e),n=Math.min(t,r,e),p=i-n,a=So(
t,r,e),m=0,l=(n+i)/2;return p!==0&&(m=l===0||l===1?0:(i-l)/Math.min(
l,1-l)),m<0&&(a+=Math.PI,m=Math.abs(m)),m<=1e-5&&(a=NaN),[a*180/Math.
PI,m*100,l*100]},"rgb_to_hsl"),So=o((t,r,e)=>{let i=Math.max(t,r,
e),n=Math.min(t,r,e),p=NaN,a=i-n;if(a!==0){switch(i){case t:p=(r-
e)/a+(r<e?6:0);break;case r:p=(e-t)/a+2;break;case e:p=(t-r)/a+4}
p*=Math.PI/3}return p},"rgb_to_hue"),k=o((t,r,e)=>{let i=So(t,r,e),
n=Math.min(t,Math.min(r,e)),p=1-Math.max(t,Math.max(r,e));return[
i*180/Math.PI,n*100,p*100]},"rgb_to_hwb");var lf=o(t=>{let[r,e,i]=Gt(t).position;return _(S,v(r,e,i))},"a98\
_rgb_into_hsl");var hf=o(t=>{let[r,e,i]=$t(t).position;return _(S,v(r,e,i))},"dis\
play_p3_into_hsl");var wf=o(t=>{if(s(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
[n,p,a]=zt(e,r,i),[m,l,f]=v(n,p,a);return _(S,[m,l,f])}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_hsl");var Of=o(t=>{let[r,e,i]=Vt(t).position;return _(S,v(r,e,i))},"lab\
_into_hsl");var Bf=o(t=>{let[r,e,i]=Ft(t).position;return _(S,v(r,e,i))},"lch\
_into_hsl");var Gf=o(t=>{let[r,e,i]=Kt(t).position;return _(S,v(r,e,i))},"okl\
ab_into_hsl");var Jf=o(t=>{let[r,e,i]=qt(t).position;return _(S,v(r,e,i))},"okl\
ch_into_hsl");var nc=o(t=>{let[r,e,i]=Qt(t).position;return _(S,v(r,e,i))},"pro\
photo_rgb_into_hsl");var fc=o(t=>{let[r,e,i]=oo(t).position,[n,p,a]=v(r,e,i);return _(
S,[n,p,a])},"rec2020_into_hsl");var gc=o(t=>{if(s(t)&&["rgb","srgb"].includes(t.colorspace)){let[
r,e,i]=t.position,[n,p,a]=v(r,e,i);return _(S,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_hsl"),uc=o(t=>{if(s(t)&&
t.colorspace==="srgb-linear"){let[r,e,i]=t.position.map(m=>K(m)),
[n,p,a]=v(r,e,i);return _(S,[n,p,a])}else throw new Error("Wrong \
parameter passed: "+t)},"srgb_linear_into_hsl");var Mc=o(t=>{let[r,e,i]=ut(t).position;return _(S,v(r,e,i))},"xyz\
_d50_into_hsl"),Ic=o(t=>{let[r,e,i]=E(t).position;return _(S,v(r,
e,i))},"xyz_d65_into_hsl");var Vc=o(t=>{let[r,e,i]=Gt(t).position;return _(P,k(r,e,i))},"a98\
_rgb_into_hwb");var tx=o(t=>{let[r,e,i]=$t(t).position;return _(P,k(r,e,i))},"dis\
play_p3_into_hwb");var ax=o(t=>{if(s(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
[n,p,a]=ot(e,r,i);return _(P,k(n,p,a))}else throw new Error("Wron\
g parameter passed: "+t)},"hsl_into_hwb");var xx=o(t=>{let[r,e,i]=Vt(t).position;return _(P,k(r,e,i))},"lab\
_into_hwb");var zx=o(t=>{let[r,e,i]=Ft(t).position;return _(P,k(r,e,i))},"lch\
_into_hwb");var Ix=o(t=>{let[r,e,i]=Kt(t).position;return _(P,k(r,e,i))},"okl\
ab_into_hwb");var Xx=o(t=>{let[r,e,i]=qt(t).position;return _(P,k(r,e,i))},"okl\
ch_into_hwb");var Dx=o(t=>{let[r,e,i]=Qt(t).position;return _(P,k(r,e,i))},"pro\
photo_rgb_into_hwb");var Ux=o(t=>{let[r,e,i]=oo(t).position;return _(P,k(r,e,i))},"rec\
2020_into_hwb");var r0=o(t=>{if(s(t)&&["rgb","srgb"].includes(t.colorspace)){let[
r,e,i]=t.position;return _(P,k(r,e,i))}else throw new Error("Wron\
g parameter passed: "+t)},"srgb_into_hwb"),e0=o(t=>{if(s(t)&&t.colorspace===
"srgb-linear"){let[r,e,i]=t.position.map(n=>K(n));return _(P,k(r,
e,i))}else throw new Error("Wrong parameter passed: "+t)},"srgb_l\
inear_into_hwb");var l0=o(t=>{let[r,e,i]=ut(t).position;return _(P,k(r,e,i))},"xyz\
_d50_into_hwb"),s0=o(t=>{let[r,e,i]=E(t).position;return _(P,k(r,
e,i))},"xyz_d65_into_hwb");var no=o(t=>{if(s(t)&&t.colorspace==="xyz-d50"){let r=_(j,t.position.
toArray());return c(r).multiply(O),r}else throw new Error("Wrong \
parameter passed: "+t)},"xyz_d50_into_xyz_d65"),y=o(t=>{if(s(t)&&
t.colorspace==="xyz-d65"){let r=_(X,t.position.toArray());return c(
r).multiply(H),r}else throw new Error("Wrong parameter passed: "+
t)},"xyz_d65_into_xyz_d50");var sr=o(t=>b(y(t)),"xyz_d65_into_lab"),b=o(t=>{if(s(t)&&t.colorspace===
"xyz-d50"){let r=.008856451679035631,e=29**3/3**3,[i,n,p]=t.position.
map((f,x)=>f/L[x]).map(f=>f>r?Math.cbrt(f):(e*f+16)/116),a=116*n-
16,m=500*(i-n),l=200*(n-p);return _(Dt,[a,m,l])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_lab");var L0=o(t=>{let r=$(t),e=y(r);return b(e)},"a98_rgb_into_lab");var V0=o(t=>{let r=G(t),e=y(r);return b(e)},"display_p3_into_lab");var Q0=o(t=>{let r=it(t),e=y(r);return b(e)},"hsl_into_lab");var nb=o(t=>{let r=nt(t),e=y(r);return b(e)},"hwb_into_lab");var sb=o(t=>{let r=u(t),e=y(r);return b(e)},"oklab_into_lab");var yb=o(t=>{let r=q(t),e=u(r),i=y(e);return b(i)},"oklch_into_la\
b");var Pb=o(t=>{let r=Et(t);return b(r)},"prophoto_rgb_into_lab");var Yb=o(t=>{let r=V(t),e=y(r);return b(e)},"rec2020_into_lab");var Xb=o(t=>{let r=T(t),e=y(r);return b(e)},"srgb_into_lab"),Zb=o(
t=>{let r=J(t),e=y(r);return b(e)},"srgb_linear_into_lab");var Y=o(t=>{if(s(t)&&t.colorspace==="lab"){let[r,e,i]=t,n=Math.atan2(
i,e)*(180/Math.PI),p=Math.hypot(e,i);return _(Zo,[r,p,n])}else throw new Error(
"Wrong parameter passed: "+t)},"lab_into_lch");var nd=o(t=>{let r=$(t),e=y(r),i=b(e);return Y(i)},"a98_rgb_into_\
lch");var fd=o(t=>{let r=G(t),e=y(r),i=b(e);return Y(i)},"display_p3_in\
to_lch");var gd=o(t=>{let r=it(t),e=y(r),i=b(e);return Y(i)},"hsl_into_lch");var kd=o(t=>{let r=nt(t),e=y(r),i=b(e);return Y(i)},"hwb_into_lch");var Td=o(t=>{let r=u(t),e=y(r),i=b(e);return Y(i)},"oklab_into_lc\
h");var Ld=o(t=>{let r=q(t),e=u(r),i=y(e),n=b(i);return Y(n)},"oklch_\
into_lch");var Vd=o(t=>{let r=Et(t),e=b(r);return Y(e)},"prophoto_rgb_into_l\
ch");var th=o(t=>{let r=V(t),e=y(r),i=b(e);return Y(i)},"rec2020_into_\
lch");var ah=o(t=>{let r=T(t),e=y(r),i=b(e);return Y(i)},"srgb_into_lch"),
_h=o(t=>{let r=J(t),e=y(r),i=b(e);return Y(i)},"srgb_linear_into_\
lch");var ch=o(t=>Y(b(t)),"xyz_d50_into_lch"),xh=o(t=>Y(sr(t)),"xyz_d65\
_into_lch");var A=o(t=>{if(s(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,p,a]=c(r,e,i).multiply(Yt).each((m,l,f)=>f[l]=Math.cbrt(m)).multiply(
Ct);return _(Tt,[n*100,p,a])}else throw new Error("Wrong paramete\
r passed: "+t)},"xyz_d65_into_oklab"),jh=o(t=>{if(s(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(O).multiply(
Yt).each((m,l,f)=>f[l]=Math.cbrt(m)).multiply(Ct);return _(Tt,[n*
100,p,a])}else throw new Error("Wrong parameter passed: "+t)},"xy\
z_d50_into_oklab");var Eh=o(t=>A($(t)),"a98_rgb_into_oklab");var Hh=o(t=>A(G(t)),"display_p3_into_oklab");var Uh=o(t=>{let r=it(t);return A(r)},"hsl_into_oklab");var ty=o(t=>A(nt(t)),"hwb_into_oklab");var po=o(t=>{let r=M(t),e=no(r);return A(e)},"lab_into_oklab");var fy=o(t=>{let r=R(t),e=M(r),i=no(e);return A(i)},"lch_into_okl\
ab");var hy=o(t=>A(rt(t)),"prophoto_rgb_into_oklab");var Sy=o(t=>A(V(t)),"rec2020_into_oklab");var My=o(t=>{let r=T(t);return A(r)},"srgb_into_oklab"),Iy=o(t=>{
let r=J(t);return A(r)},"srgb_linear_into_oklab");var F=o(t=>{if(s(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,p,a]=c(r,e,i).multiply(Yt).each((x,Q,I)=>I[Q]=Math.cbrt(x)).multiply(
Ct),m=n*100,l=Math.hypot(p,a),f=l<.001?NaN:Math.atan2(a,p)*180/Math.
PI;return _(jt,[m,l,f])}else throw new Error("Wrong parameter pas\
sed: "+t)},"xyz_d65_into_oklch"),Fy=o(t=>{if(s(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position.toArray(),[n,p,a]=c(r,e,i).multiply(
O).multiply(Yt).each((x,Q,I)=>I[Q]=Math.cbrt(x)).multiply(Ct),m=n*
100,l=Math.hypot(p,a),f=l<.001?NaN:Math.atan2(a,p)*180/Math.PI;return _(
jt,[m,l,f])}else throw new Error("Wrong parameter passed: "+t)},"\
xyz_d50_into_oklch");var Qy=o(t=>{let r=$(t);return F(r)},"a98_rgb_into_oklch");var i5=o(t=>{let r=G(t);return F(r)},"display_p3_into_oklch");var m5=o(t=>{let r=it(t);return F(r)},"hsl_into_oklch");var x5=o(t=>{let r=nt(t);return F(r)},"hwb_into_oklch");var ao=o(t=>{if(s(t)&&t.colorspace==="oklab"){let[r,e,i]=t,n=Math.
hypot(e,i),p=n<.001?NaN:Math.atan2(i,e)*180/Math.PI;return _(jt,[
r,n,p])}else throw new Error("Wrong parameter passed: "+t)},"okla\
b_into_oklch");var P5=o(t=>ao(po(t)),"lab_into_oklch");var Y5=o(t=>{let r=R(t),e=po(r);return ao(e)},"lch_into_oklch");var j5=o(t=>{let r=rt(t);return F(r)},"prophoto_rgb_into_oklch");var E5=o(t=>{let r=V(t);return F(r)},"rec2020_into_oklch");var H5=o(t=>{let r=T(t);return F(r)},"srgb_into_oklch"),G5=o(t=>{
let r=J(t);return F(r)},"srgb_linear_into_oklch");var fr=g(1.3457868816471583,-.5446307051249019,0,-.25557208737979464,
1.5082477428451468,0,-.05110186497554526,.02052744743642139,1.2119675456389452),
fg=o(t=>{if(s(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,p,a]=c(r,e,i).multiply(H).multiply(fr).each((m,l,f)=>f[l]=Bt(m)*
100);return _(ho,[n,p,a])}else throw new Error("Wrong parameter p\
assed: "+t)},"xyz_d65_into_prophoto_rgb"),C=o(t=>{if(s(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(fr).each(
(m,l,f)=>f[l]=Bt(m)*100);return _(ho,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_prophoto_rgb");var hg=o(t=>C(Jo(t)),"a98_rgb_into_prophoto_rgb");var Sg=o(t=>C(Uo(t)),"display_p3_into_prophoto_rgb");var cr=o(t=>M(R(t)),"lch_into_xyz_d50"),Mg=o(t=>It(R(t)),"lch_int\
o_xyz_d65");var Gg=o(t=>C(mr(t)),"hsl_into_prophoto_rgb");var Kg=o(t=>C(lr(t)),"hwb_into_prophoto_rgb");var ou=o(t=>C(M(t)),"lab_into_prophoto_rgb");var pu=o(t=>C(cr(t)),"lch_into_prophoto_rgb");var su=o(t=>C(Ut(t)),"oklab_into_prophoto_rgb");var du=o(t=>C(pr(t)),"oklch_into_prophoto_rgb");var zu=o(t=>C(ir(t)),"rec2020_into_prophoto_rgb");var ku=o(t=>C(Ot(t)),"srgb_into_prophoto_rgb"),Mu=o(t=>C(nr(t)),"\
srgb_linear_into_prophoto_rgb");var Ou=o(t=>t.position.map(Bt),"gam_prophoto"),Au=o(t=>t.position.
map(Jt),"lin_prophoto");var xr=g(30757411/17917100,-19765991/29648200,792561/44930125,-6372589/
17917100,47925759/29648200,-1921689/44930125,-4539589/17917100,467509/
29648200,42328811/44930125),B=o(t=>{if(s(t)&&t.colorspace==="xyz-\
d65"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(xr).each((m,l,f)=>f[l]=
Lt(m)*100);return _(yo,[n,p,a])}else throw new Error("Wrong param\
eter passed: "+t)},"xyz_d65_into_rec2020"),_o=o(t=>{if(s(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(O).multiply(
xr).each((m,l,f)=>f[l]=Lt(m)*100);return _(yo,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_rec2020");var rz=o(t=>B($(t)),"a98_rgb_into_rec2020");var az=o(t=>B(G(t)),"display_p3_into_rec2020");var fz=o(t=>B(it(t)),"hsl_into_rec2020");var hz=o(t=>B(nt(t)),"hwb_into_rec2020");var Sz=o(t=>_o(M(t)),"lab_into_rec2020");var Iz=o(t=>_o(M(R(t))),"lch_into_rec2020");var Tz=o(t=>B(u(t)),"oklab_into_rec2020");var Ez=o(t=>B(u(q(t))),"oklch_into_rec2020");var Hz=o(t=>B(rt(t)),"prophoto_rgb_into_rec2020");var Uz=o(t=>B(T(t)),"srgb_into_rec2020"),Kz=o(t=>B(J(t)),"srgb_li\
near_into_rec2020");var t1=o(t=>t.position.map(Lt),"gam_rec2020"),o1=o(t=>t.position.
map(Rt),"lin_rec2020");export{Xt as A98RGBSpace,bo as DisplayP3Space,S as HSLSpace,P as HWBSpace,
Dt as LABSpace,Zo as LCHSpace,ho as ProPhotoRGBSpace,No as RGBModel,
yo as Rec2020Space,X as XYZD50Space,j as XYZD65Space,Al as a98_rgb_into_display_p3,
lf as a98_rgb_into_hsl,Vc as a98_rgb_into_hwb,L0 as a98_rgb_into_lab,
nd as a98_rgb_into_lch,Eh as a98_rgb_into_oklab,Qy as a98_rgb_into_oklch,
hg as a98_rgb_into_prophoto_rgb,rz as a98_rgb_into_rec2020,Gt as a98_rgb_into_rgb,
Gt as a98_rgb_into_srgb,Lp as a98_rgb_into_srgb_linear,$ as a98_rgb_into_xyz,
Jo as a98_rgb_into_xyz_d50,$ as a98_rgb_into_xyz_d65,So as convertRgbToHue,
up as display_p3_into_a98_rgb,hf as display_p3_into_hsl,tx as display_p3_into_hwb,
V0 as display_p3_into_lab,fd as display_p3_into_lch,Hh as display_p3_into_oklab,
i5 as display_p3_into_oklch,Sg as display_p3_into_prophoto_rgb,az as display_p3_into_rec2020,
$t as display_p3_into_rgb,$t as display_p3_into_srgb,$p as display_p3_into_srgb_linear,
G as display_p3_into_xyz,Uo as display_p3_into_xyz_d50,G as display_p3_into_xyz_d65,
al as gam_a98,Ds as gam_p3,Ou as gam_prophoto,t1 as gam_rec2020,E_ as gam_srgb,
bm as hsl_into_a98_rgb,Nl as hsl_into_display_p3,ax as hsl_into_hwb,
Q0 as hsl_into_lab,gd as hsl_into_lch,Uh as hsl_into_oklab,m5 as hsl_into_oklch,
Gg as hsl_into_prophoto_rgb,fz as hsl_into_rec2020,oa as hsl_into_rgb,
Qo as hsl_into_srgb,ra as hsl_into_srgb_linear,it as hsl_into_xyz,
mr as hsl_into_xyz_d50,it as hsl_into_xyz_d65,Sm as hwb_into_a98_rgb,
ts as hwb_into_display_p3,wf as hwb_into_hsl,nb as hwb_into_lab,kd as hwb_into_lch,
ty as hwb_into_oklab,x5 as hwb_into_oklch,Kg as hwb_into_prophoto_rgb,
hz as hwb_into_rec2020,fa as hwb_into_rgb,fa as hwb_into_srgb,ca as hwb_into_srgb_linear,
nt as hwb_into_xyz,lr as hwb_into_xyz_d50,nt as hwb_into_xyz_d65,
_ as initPointInSpace,s as isPointInSpace,Mm as lab_into_a98_rgb,
ns as lab_into_display_p3,Of as lab_into_hsl,xx as lab_into_hwb,Y as lab_into_lch,
po as lab_into_oklab,P5 as lab_into_oklch,ou as lab_into_prophoto_rgb,
Sz as lab_into_rec2020,Vt as lab_into_rgb,Vt as lab_into_srgb,va as lab_into_srgb_linear,
It as lab_into_xyz,M as lab_into_xyz_d50,It as lab_into_xyz_d65,Tm as lch_into_a98_rgb,
ss as lch_into_display_p3,Bf as lch_into_hsl,zx as lch_into_hwb,R as lch_into_lab,
fy as lch_into_oklab,Y5 as lch_into_oklch,pu as lch_into_prophoto_rgb,
Iz as lch_into_rec2020,Ft as lch_into_rgb,Ft as lch_into_srgb,Xa as lch_into_srgb_linear,
Mg as lch_into_xyz,cr as lch_into_xyz_d50,Mg as lch_into_xyz_d65,
_l as lin_a98,Ns as lin_p3,Au as lin_prophoto,o1 as lin_rec2020,R_ as lin_srgb,
Tt as okLABSpace,jt as okLCHSpace,Bm as oklab_into_a98_rgb,ds as oklab_into_display_p3,
Gf as oklab_into_hsl,Ix as oklab_into_hwb,sb as oklab_into_lab,Td as oklab_into_lch,
ao as oklab_into_oklch,su as oklab_into_prophoto_rgb,Tz as oklab_into_rec2020,
Kt as oklab_into_rgb,Kt as oklab_into_srgb,Ua as oklab_into_srgb_linear,
u as oklab_into_xyz,Ut as oklab_into_xyz_d50,u as oklab_into_xyz_d65,
Vm as oklch_into_a98_rgb,Ss as oklch_into_display_p3,Jf as oklch_into_hsl,
Xx as oklch_into_hwb,yb as oklch_into_lab,Ld as oklch_into_lch,q as oklch_into_oklab,
du as oklch_into_prophoto_rgb,Ez as oklch_into_rec2020,qt as oklch_into_rgb,
qt as oklch_into_srgb,n_ as oklch_into_srgb_linear,ar as oklch_into_xyz,
pr as oklch_into_xyz_d50,ar as oklch_into_xyz_d65,Jm as prophoto_rgb_into_a98_rgb,
Ms as prophoto_rgb_into_display_p3,nc as prophoto_rgb_into_hsl,Dx as prophoto_rgb_into_hwb,
Pb as prophoto_rgb_into_lab,Vd as prophoto_rgb_into_lch,hy as prophoto_rgb_into_oklab,
j5 as prophoto_rgb_into_oklch,Hz as prophoto_rgb_into_rec2020,Qt as prophoto_rgb_into_rgb,
Qt as prophoto_rgb_into_srgb,u_ as prophoto_rgb_into_srgb_linear,
rt as prophoto_rgb_into_xyz,Et as prophoto_rgb_into_xyz_d50,rt as prophoto_rgb_into_xyz_d65,
el as rec2020_into_a98_rgb,As as rec2020_into_display_p3,fc as rec2020_into_hsl,
Ux as rec2020_into_hwb,Yb as rec2020_into_lab,th as rec2020_into_lch,
Sy as rec2020_into_oklab,E5 as rec2020_into_oklch,zu as rec2020_into_prophoto_rgb,
oo as rec2020_into_rgb,oo as rec2020_into_srgb,X_ as rec2020_into_srgb_linear,
V as rec2020_into_xyz,ir as rec2020_into_xyz_d50,V as rec2020_into_xyz_d65,
eo as rgb_into_a98_rgb,Ws as rgb_into_display_p3,gc as rgb_into_hsl,
r0 as rgb_into_hwb,Xb as rgb_into_lab,ah as rgb_into_lch,My as rgb_into_oklab,
H5 as rgb_into_oklch,ku as rgb_into_prophoto_rgb,Uz as rgb_into_rec2020,
T as rgb_into_xyz,Ot as rgb_into_xyz_d50,T as rgb_into_xyz_d65,Pt as sRGBLinearSpace,
D as sRGBSpace,eo as srgb_into_a98_rgb,Ws as srgb_into_display_p3,
gc as srgb_into_hsl,r0 as srgb_into_hwb,Xb as srgb_into_lab,ah as srgb_into_lch,
My as srgb_into_oklab,H5 as srgb_into_oklch,ku as srgb_into_prophoto_rgb,
Uz as srgb_into_rec2020,T as srgb_into_xyz,Ot as srgb_into_xyz_d50,
T as srgb_into_xyz_d65,lm as srgb_linear_into_a98_rgb,Bs as srgb_linear_into_display_p3,
uc as srgb_linear_into_hsl,e0 as srgb_linear_into_hwb,Zb as srgb_linear_into_lab,
_h as srgb_linear_into_lch,Iy as srgb_linear_into_oklab,G5 as srgb_linear_into_oklch,
Mu as srgb_linear_into_prophoto_rgb,Kz as srgb_linear_into_rec2020,
J as srgb_linear_into_xyz,nr as srgb_linear_into_xyz_d50,J as srgb_linear_into_xyz_d65,
bp as xyz_d50_into_a98_rgb,io as xyz_d50_into_display_p3,Mc as xyz_d50_into_hsl,
l0 as xyz_d50_into_hwb,b as xyz_d50_into_lab,ch as xyz_d50_into_lch,
jh as xyz_d50_into_oklab,Fy as xyz_d50_into_oklch,C as xyz_d50_into_prophoto_rgb,
_o as xyz_d50_into_rec2020,ut as xyz_d50_into_rgb,ut as xyz_d50_into_srgb,
Ht as xyz_d50_into_srgb_linear,no as xyz_d50_into_xyz_d65,Z as xyz_d65_into_a98_rgb,
W as xyz_d65_into_display_p3,Ic as xyz_d65_into_hsl,s0 as xyz_d65_into_hwb,
sr as xyz_d65_into_lab,xh as xyz_d65_into_lch,A as xyz_d65_into_oklab,
F as xyz_d65_into_oklch,fg as xyz_d65_into_prophoto_rgb,B as xyz_d65_into_rec2020,
E as xyz_d65_into_rgb,E as xyz_d65_into_srgb,et as xyz_d65_into_srgb_linear,
y as xyz_d65_into_xyz_d50,Z as xyz_into_a98_rgb,W as xyz_into_display_p3,
Ic as xyz_into_hsl,s0 as xyz_into_hwb,sr as xyz_into_lab,xh as xyz_into_lch,
A as xyz_into_oklab,F as xyz_into_oklch,fg as xyz_into_prophoto_rgb,
B as xyz_into_rec2020,E as xyz_into_rgb,E as xyz_into_srgb,et as xyz_into_srgb_linear};
