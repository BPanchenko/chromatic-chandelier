var xr=Object.defineProperty;var o=(t,r)=>xr(t,"name",{value:r,configurable:!0});var br=Object.defineProperty,wt=o((t,r)=>br(t,"name",{value:r,configurable:!0}),
"n"),dr=wt(t=>t!==null&&typeof t=="object"&&Array.isArray(t)===!1,
"isObject"),hr=wt(t=>dr(t)&&"ident"in t&&"short"in t&&"domain"in t,
"isSpaceDimension");function z(t,r,e){let i=Iterator.from(e===void 0?
[t,r]:[t,r,e]),n=e===void 0?2:3;for(let m of i.take(n))if(hr(m)===
!1)throw new TypeError("Passed wrong space dimension: "+JSON.stringify(
m,void 0,2));let p=i.take(n).filter(m=>m.tgeom==="azimuth"||m.tgeom===
"reference-ray").toArray().length===2?n===3?"cilinder":"circle":n===
3?"cube":"plane",a=Object.create(null,{0:{enumerable:!0,value:t},
1:{enumerable:!0,value:r},length:{enumerable:!0,value:n},tgeom:{enumerable:!0,
value:p},entries:{value:wt(function*(){yield[0,this[0]],yield[1,this[1]],
this.length===3&&(yield[2,this[2]])},"value")},toArray:{value:wt(
function(){return Array.of(...this)},"value")},[Symbol.iterator]:{
value:wt(function*(){yield this[0],yield this[1],this.length===3&&
(yield this[2])},"value")}});return n===3&&Object.defineProperty(
a,2,{enumerable:!0,value:e}),m=>m===void 0?a:Object.defineProperties(
a,m)}o(z,"w");wt(z,"createCoordinateSystem");var yr=Object.defineProperty,ct=o((t,r)=>yr(t,"name",{value:r,configurable:!0}),
"n"),eo=ct(t=>typeof t=="number","isNumber"),gr=ct(t=>t!==null&&typeof t==
"object"&&Array.isArray(t)===!1,"isObject"),Vr=ct(t=>gr(t)&&Symbol.
iterator in t&&"minimum"in t&&eo(t.minimum)&&"maximum"in t&&eo(t.
maximum)&&"value"in t&&eo(t.value)&&t.value>0,"isRange");function d(...t){
let r=t.length===1?Array.of(0,t[0]):Array.of(Math.min(...t),Math.
max(...t)),[e,i]=r,n=i-e,p=e+n/2;return Object.create(null,{from:{
value:e},to:{value:i},minimum:{enumerable:!0,value:e},maximum:{enumerable:!0,
value:i},avg:{enumerable:!0,value:p},value:{enumerable:!0,value:n},
allot:{value:wo},clamp:{value:vo},test:{value:ct(a=>e<=a&&a<=i,"v\
alue")},toString:{value:ct(()=>String.raw`{x ∈ R; ${e} ⋜ x ⋜ ${i}}`,
"value")},[Symbol.iterator]:{value:ct(function*(){yield this.from,
yield this.to},"value")},length:{value:2}})}o(d,"D");ct(d,"create\
Range");function wo(t){return this.test(t)?t:t>this.from?(t-this.
to)%this.value+this.from:this.to-(this.from-t)%this.value}o(wo,"p");
ct(wo,"allocateOuterValue");function vo(t){return this.test(t)?t:
Math.max(Math.min(t,this.to),this.from)}o(vo,"h");ct(vo,"restrict\
OuterValue");var ur=Object.defineProperty,zr=o((t,r)=>ur(t,"name",{value:r,configurable:!0}),
"n");var Sr=zr((t,r=6)=>{let e=10**r;return Math.sign(t)*Math.round((Math.
abs(t)+Number.EPSILON)*e)/e},"round"),u=Sr;var Pr=Object.defineProperty,xt=o((t,r)=>Pr(t,"name",{value:r,configurable:!0}),
"t");function io(...t){let r=t.length===1?Array.of(0,t[0]):Array.
of(Math.min(...t),Math.max(...t)),[e,i]=r,n=i-e,p=e+n/2;return Object.
create(null,{from:{value:e},to:{value:i},minimum:{enumerable:!0,value:e},
maximum:{enumerable:!0,value:i},avg:{enumerable:!0,value:p},value:{
enumerable:!0,value:n},allot:{value:Mo},clamp:{value:ko},test:{value:xt(
a=>e<=a&&a<=i,"value")},toString:{value:xt(()=>String.raw`{x ∈ R; ${e} ⋜ x ⋜ ${i}}`,
"value")},[Symbol.iterator]:{value:xt(function*(){yield this.from,
yield this.to},"value")},length:{value:2}})}o(io,"c");xt(io,"crea\
teRange");function Mo(t){return this.test(t)?t:t>this.from?(t-this.
to)%this.value+this.from:this.to-(this.from-t)%this.value}o(Mo,"g");
xt(Mo,"allocateOuterValue");function ko(t){return this.test(t)?t:
Math.max(Math.min(t,this.to),this.from)}o(ko,"h");xt(ko,"restrict\
OuterValue");function no(t=[0,100],r=[0,1]){let[e,i]=r,[n,p]=t,[a,
m]=[i-e,p-n];function l(x){return typeof x=="string"&&(x=parseFloat(
x)),f.domain.test(x)===!1&&(x=x>i?(x-i)%a+e:i-(e-x)%a),m*(x-e)/a+
n}o(l,"p"),xt(l,"invert");function f(x){return typeof x=="string"&&
(x=parseFloat(x)),f.range.test(x)===!1&&(x=x>p?(x-p)%m+n:p-(n-x)%
m),a*(x-n)/m+e}return o(f,"l"),xt(f,"calculator"),Object.defineProperties(
f,{domain:{enumerable:!0,value:io(e,i)},range:{enumerable:!0,value:io(
n,p)},invert:{enumerable:!0,value:l}})}o(no,"j");xt(no,"initScale");var po=no([0,360],[-Math.PI,Math.PI]),vt=Object.freeze({bytes:8,domain:po.
domain,ident:"angle",input:o(t=>po.domain.allot(t*Math.PI/180),"i\
nput"),output:o(t=>u(po.range.allot(t*180/Math.PI),1),"output"),short:"\
phi",tcoord:"polar",tgeom:"azimuth"});var bt=Object.freeze({$coord:vt,bytes:4,domain:d(0,360),ident:"hu\
e",short:"h",input:o(t=>bt.domain.allot(t),"input"),output:o(t=>Number.
isNaN(t)?Number.NaN:Math.abs(t)<1e-5?0:u(t,5),"output")});var it=Object.freeze({bytes:8,domain:d(0,1),ident:"applicate",short:"\
z",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var at=Object.freeze({$coord:it,bytes:4,domain:d(0,100),ident:"li\
ghtness",input:o(t=>t/100,"input"),output:o(t=>u(t*100,2),"output"),
short:"L"});var nt=Object.freeze({bytes:8,domain:d(0,1),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var Io=Object.freeze({$coord:nt,bytes:4,domain:d(0,100),ident:"sa\
turation",input:o(t=>t/100,"input"),output:o(t=>u(t*100,2),"outpu\
t"),short:"S"});var Me=z(nt,vt)({adapt:{enumerable:!0,value:ao}});function ao(t=0,r=NaN){return[t*Math.cos(r),t*Math.sin(r)]}o(ao,"\
calcCartesianCoordinates");var gt=z(nt,vt,it)({adapt:{value:wr}});function wr(t,r,e){return[
...ao(t,r),e]}o(wr,"calcCubeCoordinates");var q=Object.defineProperty(Float64Array.of(.9504559270516716,1,1.0890577507598784),
"ident",{value:"d65"});Object.freeze(q.buffer);var S={CAM:z(bt,Io,at)(),CSYS:gt,ident:"hsl",whitepoint:q};var Yo=Object.freeze({$coord:it,bytes:4,domain:d(0,100),ident:"bl\
ackness",input:o(t=>t/100,"input"),output:o(t=>u(t*100,2),"output"),
short:"B"});var Co=Object.freeze({$coord:nt,bytes:4,domain:d(0,100),ident:"wh\
iteness",input:o(t=>t/100,"input"),output:o(t=>u(t*100,2),"output"),
short:"W"});var P={CAM:z(bt,Co,Yo)(),CSYS:gt,ident:"hwb",whitepoint:q};var _t=Object.freeze({bytes:8,domain:d(-1,1),ident:"abscissa",short:"\
x",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var Ao=Object.freeze({$coord:_t,bytes:4,domain:d(-125,125),ident:"\
green-red",input:o(t=>t/125,"input"),output:o(t=>u(t*125,1),"outp\
ut"),short:"a"}),Oo=Object.freeze({$coord:_t,bytes:8,domain:d(-.4,
.4),ident:"green-red",input:o(t=>t,"input"),output:o(t=>t,"output"),
short:"a"});var mt=Object.freeze({bytes:8,domain:d(-1,1),ident:"ordinate",short:"\
y",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var To=Object.freeze({$coord:mt,bytes:4,domain:d(-125,125),ident:"\
blue-yellow",input:o(t=>t/125,"input"),output:o(t=>u(t*125,2),"ou\
tput"),short:"b"}),jo=Object.freeze({$coord:mt,bytes:8,domain:d(-.4,
.4),ident:"blue-yellow",input:o(t=>t,"input"),output:o(t=>t,"outp\
ut"),short:"b"});var wi=z(_t,mt)({adapt:{value:_o}});function _o(t,r){let e=0,i=NaN;return(t!==0||r!==0)&&(e=Math.sqrt(
t**2+r**2),t!==0&&!r||r!==0&&!t?i=r/Math.abs(r)*(Math.PI/2):i=Math.
atan(r/t)),[e,i]}o(_o,"calcPolarCoordinates");var dt=z(_t,mt,it)({adapt:{value:vr}});function vr(t,r,e){return[
..._o(t,r),e]}o(vr,"calcCylindricalCoordinates");var L=Object.defineProperty(Float64Array.of(.9642956764295677,1,.8251046025104602),
"ident",{value:"d50"});Object.freeze(L.buffer);var Wt=Object.freeze({CAM:z(at,Ao,To)(),CSYS:dt,ident:"lab",whitepoint:L});var Xo=Object.freeze({$coord:nt,ident:"chroma",short:"C",domain:d(
0,150),input:o(t=>t/150,"input"),output:o(t=>u(t*150,1),"output"),
bytes:2}),Zo=Object.freeze({$coord:nt,ident:"chroma",short:"c",domain:d(
0,.4),input:o(t=>t,"input"),output:o(t=>u(t,5),"output"),bytes:4});var Wo=Object.freeze({CAM:z(at,Xo,bt)(),CSYS:gt,ident:"lch",whitepoint:L});var Tt=Object.freeze({CAM:z(at,Oo,jo)(),CSYS:dt,ident:"oklab",whitepoint:q});var jt={CAM:z(at,Zo,bt)(),CSYS:gt,ident:"oklch",whitepoint:q};var Eo=Object.freeze({$coord:it,bytes:4,domain:d(0,100),ident:"bl\
ue",input:o(t=>t/100,"input"),output:o(t=>u(t*100,2),"output"),short:"\
b"}),mo=Object.freeze({$coord:it,bytes:1,domain:d(0,255),ident:"b\
lue",input:o(t=>t/255,"input"),output:o(t=>mo.domain.clamp(Math.round(
t*255)),"output"),short:"B"});var Bo=Object.freeze({$coord:mt,bytes:4,domain:d(0,100),ident:"gr\
een",input:o(t=>t/100,"input"),output:o(t=>u(t*100,2),"output"),short:"\
g",description:"Green Light Intensity"}),lo=Object.freeze({$coord:mt,
bytes:1,domain:d(0,255),ident:"green",input:o(t=>t/255,"input"),output:o(
t=>lo.domain.clamp(Math.round(t*255)),"output"),short:"G",description:"\
Green Light Intensity"});var Ro=Object.freeze({$coord:_t,bytes:4,domain:d(0,100),ident:"gr\
een",input:o(t=>t/100,"input"),output:o(t=>u(t*100,2),"output"),short:"\
r"}),so=Object.freeze({$coord:_t,bytes:1,domain:d(0,255),ident:"r\
ed",input:o(t=>t/255,"input"),output:o(t=>so.domain.clamp(Math.round(
t*255)),"output"),short:"R"});var Mt=z(Ro,Bo,Eo)(),St=dt,kt=q,D=Object.freeze({ident:"srgb",CAM:Mt,
CSYS:St,whitepoint:kt}),Pt=Object.freeze({ident:"srgb-linear",CAM:Mt,
CSYS:St,whitepoint:kt}),Xt=Object.freeze({ident:"a98-rgb",CAM:Mt,
CSYS:St,whitepoint:kt}),fo=Object.freeze({ident:"display-p3",CAM:Mt,
CSYS:St,whitepoint:kt}),co=Object.freeze({ident:"prophoto-rgb",CAM:Mt,
CSYS:St,whitepoint:L}),xo=Object.freeze({ident:"rec2020",CAM:Mt,CSYS:St,
whitepoint:kt}),Lo=Object.freeze({ident:"rgb",CAM:z(so,lo,mo)(),CSYS:St,
whitepoint:kt});var j=Object.freeze({ident:"xyz-d65",CSYS:dt,whitepoint:q}),X=Object.
freeze({ident:"xyz-d50",CSYS:dt,whitepoint:L});var Mr=Object.defineProperty,ht=o((t,r)=>Mr(t,"name",{value:r,configurable:!0}),
"n"),kr=ht(t=>Ir(t)&&Symbol.iterator in t&&typeof t[Symbol.iterator]==
"function","isIterableObject"),Ir=ht(t=>t!==null&&typeof t=="obje\
ct"&&Array.isArray(t)===!1,"isObject"),Dn=ht(t=>kr(t)&&"length"in
t&&typeof t.length=="number"&&t.length>=9,"isMatrix");function y(...t){
let r=Math.max(t.length,9),e=new ArrayBuffer(r*8),i=new Float64Array(
e,0,r);i.set(t);let n=Object.create(null,{[Symbol.iterator]:{value:ht(
function*(){for(let p=0;p<i.length;p++)yield this[p]},"value")},[Symbol.
isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{value:ht(()=>"\
Matrix"+i.toString(),"value")},length:{enumerable:!0,value:r},toArray:{
value:ht(()=>Iterator.from(i).toArray(),"value")},toString:{value:i.
toString}});for(let p=0;p<r;p++)(function(a,m,l){Object.defineProperty(
a,m,{enumerable:!0,get:ht(()=>l[m],"get"),set:ht(f=>{if(typeof f==
"number")l[m]=f;else throw new TypeError("Expected Number")},"set")})})(
n,p,i);return n}o(y,"I");ht(y,"createMatrix");var Yr=Object.defineProperty,w=o((t,r)=>Yr(t,"name",{value:r,configurable:!0}),
"t"),Cr=w(t=>typeof t=="string","isString"),ho=w(t=>bo(t)&&Symbol.
iterator in t&&typeof t[Symbol.iterator]=="function","isIterableO\
bject"),bo=w(t=>t!==null&&typeof t=="object"&&Array.isArray(t)===
!1,"isObject"),Ar=w(t=>Cr(t)&&Tr.has(t),"isSpaceID"),Or=w(t=>bo(t)&&
"ident"in t&&Ar(t.ident)&&"CSYS"in t&&bo(t.CSYS)&&"length"in t.CSYS&&
t.CSYS.length===3,"isColorSpace"),Tr=new Set(["a98-rgb","display-\
p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec20\
20","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz-d65"]),jr=w(t=>ho(
t)&&"space"in t&&Or(t.space)&&"length"in t&&t.length===3&&Iterator.
from(t).every(r=>typeof r=="number"),"isPointInSpace"),Xr=w(t=>ho(
t)&&"length"in t&&typeof t.length=="number"&&t.length>=9,"isMatri\
x"),Zr=w(t=>ho(t)&&"length"in t&&t.length===3&&"multiply"in t&&typeof t.
multiply=="function","isVector");function c(t,r=0,e=0){let i=jr(t)?
new Float64Array(t.buffer):Float64Array.of(t,r,e),n=Object.create(
null,{head:{enumerable:!0,get:w(()=>Iterator.from(i),"get")}});return Object.
defineProperties(n,{each:{value:Do},multiply:{value:No},update:{value:w(
function(p,a,m){let l=Array.isArray(p)?p.slice(3):Array.of(p,a,m);
return i.set(this.head.map((f,x)=>l[x]??f).toArray()),this},"valu\
e")}}),Object.defineProperties(n,{[Symbol.isConcatSpreadable]:{value:!0},
[Symbol.iterator]:{value:w(function*(){yield this[0],yield this[1],
yield this[2]},"value")},0:{enumerable:!0,get:w(()=>i[0],"get"),set:w(
p=>{if(typeof p=="number")i[0]=p;else throw new TypeError("Expect\
ed Number")},"set")},1:{enumerable:!0,get:w(()=>i[1],"get"),set:w(
p=>{if(typeof p=="number")i[1]=p;else throw new TypeError("Expect\
ed Number")},"set")},2:{enumerable:!0,get:w(()=>i[2],"get"),set:w(
p=>{if(typeof p=="number")i[2]=p;else throw new TypeError("Expect\
ed Number")},"set")},length:{enumerable:!0,value:3}}),Object.defineProperties(
n,{[Symbol.toStringTag]:{get(){return`Vector[${this.toString()}]`}},
entries:{value:w(function(){return this.values().map((p,a)=>Object.
seal(Array.of(a,p)))},"value")},toArray:{value:w(function(){return Object.
seal(Array.of(this[0],this[1],this[2]))},"value")},toString:{value:w(
()=>i.toString(),"value")},values:{value:w(function(){return Iterator.
from(this.toArray())},"value")}}),n}o(c,"L");w(c,"createVector");
function Do(t){for(let r=0;r<3;r++)t(this[r],r,this);return this}
o(Do,"M");w(Do,"each");function No(t){let[r,e,i]=this.head;if(Xr(
t)||Zr(t)){let[n,p,a,m=0,l=0,f=0,x=0,J=0,I=0]=t;return this.update(
r*n+e*m+i*x,r*p+e*l+i*J,r*a+e*f+i*I)}else throw new TypeError("Un\
supported Multiplicator: "+t)}o(No,"P");w(No,"multiply");var Wr=Object.defineProperty,N=o((t,r)=>Wr(t,"name",{value:r,configurable:!0}),
"n"),Er=N(t=>typeof t=="number","isNumber"),Br=N(t=>typeof t=="st\
ring","isString"),Rr=N(t=>yo(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function","isIterableObject"),yo=N(t=>t!==null&&typeof t==
"object"&&Array.isArray(t)===!1,"isObject"),Lr=N(t=>Br(t)&&Dr.has(
t),"isSpaceID"),Ho=N(t=>yo(t)&&"ident"in t&&Lr(t.ident)&&"CSYS"in
t&&yo(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===3,"isColorSpace"),
Dr=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab",
"oklch","prophoto-rgb","rec2020","srgb-linear","srgb","rgb","xyz",
"xyz-d50","xyz-d65"]),s=N(t=>Rr(t)&&"space"in t&&Ho(t.space)&&"le\
ngth"in t&&t.length===3&&Iterator.from(t).every(r=>typeof r=="num\
ber"),"isPointInSpace");function _(t,r){if(Ho(t)===!1)throw new TypeError(
"Point must be declared in a valid color space instead of "+JSON.
stringify(t,void 0,2));if((r instanceof ArrayBuffer||Array.isArray(
r)&&r.length===3&&r.every(a=>Er(a)))===!1)throw new TypeError("Po\
int in space has valid coordinates. Wrong parameters: "+JSON.stringify(
r,void 0,2));let e=t.CSYS.length,i=r instanceof ArrayBuffer?new Float64Array(
r):new Float64Array(e),n=t.CAM===void 0?Array.of(0,1,2):t.CAM.toArray().
map(a=>t.CSYS.toArray().findIndex(m=>a.$coord===m)),p=Object.create(
null,{buffer:{value:i.buffer},colorspace:{enumerable:!0,value:t.ident},
length:{value:e},space:{value:t}});return Object.defineProperties(
p,{equals:{value:N(function(a,m=1e-5){let[l,f,x]=this.position,[J,
I,ft]=a.position;return this.colorspace===a.colorspace&&Math.abs(
l-J)<=m*Math.max(1,Math.abs(l),Math.abs(J))&&Math.abs(f-I)<=m*Math.
max(1,Math.abs(f),Math.abs(I))&&Math.abs(x-ft)<=m*Math.max(1,Math.
abs(x),Math.abs(ft))},"value")},set:{value:N(function(a){for(let m=0;m<
this.length;m++)a[m]!==void 0&&(this[m]=a[m]);return this},"value")}}),
(function(a,m){Object.defineProperties(a,{[Symbol.iterator]:{value:N(
function*(){yield this[0],yield this[1],yield this[2]},"value")},
adapted:{get(){if(typeof this.space.CSYS.adapt=="function"){let[l,
f,x]=this.position;return Iterator.from(this.space.CSYS.adapt(l,f,
x))}else return this.position}},position:{get:N(()=>Iterator.from(
m),"get")}});for(let l=0;l<a.length;l++)(function(f,x,J){Object.defineProperty(
a,l,{enumerable:!0,get(){let{CAM:I,CSYS:ft}=this.space,Ot=ft[x],yt=I!==
void 0?I[f]:null,pt=J[x];return"output"in Ot&&typeof Ot.output=="\
function"&&(pt=Ot.output(pt)),yt!==null&&"output"in yt&&typeof yt.
output=="function"&&(pt=yt.output(pt)),pt},set(I){let{CAM:ft,CSYS:Ot}=this.
space,yt=Ot[x],pt=ft!==void 0?ft[f]:null;pt!==null&&"input"in pt&&
typeof pt.input=="function"&&(I=pt.input(I)),"input"in yt&&typeof yt.
input=="function"&&(I=yt.input(I)),typeof I=="string"&&(I=parseFloat(
I)),J[x]=I}})})(l,n[l],m)})(p,i),Object.defineProperties(p,{[Symbol.
toStringTag]:{get(){return`PointInSpace(${this.toString()})`}},entries:{
value:N(function(){let a=this.space.CAM??this.space.CSYS;return Iterator.
from([[a[0],this[0]],[a[1],this[1]],[a[2],this[2]]])},"value")},toString:{
value:N(function(){return`${this.colorspace};[${this.values().join()}\
]`},"value")},values:{value:N(function(){return Object.freeze([this[0],
this[1],this[2]])},"value")}}),Array.isArray(r)?p.set(r):p}o(_,"$");
N(_,"initPointInSpace");var lt=o(t=>{let r=Math.abs(t);return r<=.04045?t/12.92:Math.sign(
t)*Math.pow((r+.055)/1.055,2.4)},"to_linear"),st=o(t=>{let r=Math.
abs(t);return r>.0031308?Math.sign(t)*(1.055*Math.pow(r,1/2.4)-.055):
12.92*t},"to_gamut");var H=y(1.0479297925449969,.02962780877005599,-.009243040646204504,
.022946870601609652,.9904344267538799,.015055191490298152,-.05019226628920524,
-.017073799063418826,.7518742814281371),A=y(.955473421488075,-.0283697093338637,
.012314014864481998,-.02309845494876471,1.0099953980813041,-.020507649298898964,
.06325924320057072,.021041441191917323,1.330365926242124);var Go=y(608311/1250200,35783/156275,0,189793/714400,247089/357200,
32229/714400,198249/1000160,198249/2500400,5220557/5000800),G=o(t=>{
if(s(t)&&t.colorspace==="display-p3"){let[r,e,i]=t.position,[n,p,
a]=c(r,e,i).each((m,l,f)=>f[l]=lt(m)).multiply(Go);return _(j,[n,
p,a])}else throw new Error("Wrong parameter passed: "+t)},"displa\
y_p3_into_xyz_d65"),$o=o(t=>{if(s(t)&&t.colorspace==="display-p3"){
let[r,e,i]=t.position,[n,p,a]=c(r,e,i).each((m,l,f)=>f[l]=lt(m)).
multiply(Go).multiply(H);return _(X,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"display_p3_into_xyz_d50");var go=o(t=>Math.sign(t)*Math.pow(Math.abs(t),2.19921875),"to_lin\
ear"),uo=o(t=>Math.sign(t)*Math.pow(Math.abs(t),256/563),"to_gamu\
t");var Vo=y(1829569/896150,-851781/878810,16779/1248040,-506331/896150,
1648619/878810,-147721/1248040,-308931/896150,36519/878810,1266979/
1248040),Z=o(t=>{if(s(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.
position,[n,p,a]=c(r,e,i).multiply(Vo).each((m,l,f)=>f[l]=uo(m)*100);
return _(Xt,[n,p,a])}else throw new Error("Wrong parameter passed\
: "+t)},"xyz_d65_into_a98_rgb"),bp=o(t=>{if(s(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(A).multiply(
Vo).each((m,l,f)=>f[l]=uo(m)*100);return _(Xt,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_a98_rgb");var up=o(t=>Z(G(t)),"display_p3_into_a98_rgb");var Fo=y(573536/994567,591459/1989134,53769/1989134,263643/1420810,
6239551/9945670,351524/4972835,187206/994567,374412/4972835,4929758/
4972835),$=o(t=>{if(s(t)&&t.colorspace==="a98-rgb"){let[r,e,i]=t.
position,[n,p,a]=c(r,e,i).each((m,l,f)=>f[l]=go(m)).multiply(Fo);
return _(j,[n,p,a])}else throw new Error("Wrong parameter passed:\
 "+t)},"a98_rgb_into_xyz_d65"),Uo=o(t=>{if(s(t)&&t.colorspace==="\
a98-rgb"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).each((m,l,f)=>f[l]=
go(m)).multiply(Fo).multiply(H);return _(X,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"a98_rgb_into_xyz_d50");var Et=y(12831/3959,-851781/878810,705/12673,-329/214,1648619/878810,
-2585/12673,-1974/3959,36519/878810,705/667),B=o(t=>{if(s(t)&&t.colorspace===
"xyz-d65"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(Et).each(
(m,l,f)=>f[l]=st(m)*100);return _(D,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_srgb"),ot=o(t=>{if(s(
t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,[n,p,a]=c(r,e,
i).multiply(Et).each((m,l,f)=>f[l]*=100);return _(Pt,[n,p,a])}else
throw new Error("Wrong parameter passed: "+t)},"xyz_d65_into_srgb\
_linear"),ut=o(t=>{if(s(t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.
position,[n,p,a]=c(r,e,i).multiply(A).multiply(Et).each((m,l,f)=>f[l]=
st(m)*100);return _(D,[n,p,a])}else throw new Error("Wrong parame\
ter passed: "+t)},"xyz_d50_into_srgb"),Bt=o(t=>{if(s(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(A).multiply(
Et).each((m,l,f)=>f[l]*=100);return _(Pt,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_srgb_linear");var Rt=o(t=>B($(t)),"a98_rgb_into_srgb"),Lp=o(t=>ot($(t)),"a98_rg\
b_into_srgb_linear");var Lt=o(t=>B(G(t)),"display_p3_into_srgb"),$p=o(t=>ot(G(t)),"dis\
play_p3_into_srgb_linear");var Q=o((t,r,e)=>{let i=2*Math.PI,n=Math.PI/6;t<0&&(t+=i),t=t%i;let p=o(
a=>{let m=(a+t/n)%12,l=r*Math.min(e,1-e);return e-l*Math.max(-1,Math.
min(m-3,9-m,1))},"f");return[p(0),p(8),p(4)]},"hsl_to_rgb");var oa=o(t=>{if(s(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=Q(e,r,i).map(p=>Math.min(Math.max(Math.round(p*255),0),255));return _(
Lo,n)}else throw new Error("Wrong parameter passed: "+t)},"hsl_in\
to_rgb"),Ko=o(t=>{if(s(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=Q(e,r,i).map(p=>p*100);return _(D,n)}else throw new Error("Wron\
g parameter passed: "+t)},"hsl_into_srgb"),ra=o(t=>{if(s(t)&&t.colorspace===
"hsl"){let[r,e,i]=t.position,n=Q(e,r,i).map(p=>lt(p)*100);return _(
Pt,n)}else throw new Error("Wrong parameter passed: "+t)},"hsl_in\
to_srgb_linear");var zt=o((t,r,e)=>{if(r+e>=1){let i=r/(r+e);return[i,i,i]}else{let[
i,n,p]=Q(t,1,.5).map(a=>a*(1-r-e)+r);return[i,n,p]}},"hwb_to_rgb");var fa=o(t=>{if(s(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
n=zt(e,r,i).map(p=>p*100);return _(D,n)}else throw new Error("Wro\
ng parameter passed: "+t)},"hwb_into_srgb"),ca=o(t=>{if(s(t)&&t.colorspace===
"hwb"){let[r,e,i]=t.position,n=zt(e,r,i).map(p=>lt(p)*100);return _(
Pt,n)}else throw new Error("Wrong parameter passed: "+t)},"hwb_in\
to_srgb_linear");var k=o(t=>{if(s(t)&&t.colorspace==="lab"){let r=903.2962962962963,
e=216/24389,[i,n,p]=t,a=(i+16)/116,m=n/500+a,l=Math.pow(m,3),f=a-
p/200,x=Math.pow(f,3),J=(l>e?l:(116*m-16)/r)*L[0],I=(i>r*e?Math.pow(
(i+16)/116,3):i/r)*L[1],ft=(x>e?x:(116*f-16)/r)*L[2];return _(X,[
J,I,ft])}else throw new Error("Wrong parameter passed: "+t)},"lab\
_into_xyz_d50"),It=o(t=>{let r=k(t),[e,i,n]=c(r).multiply(A);return _(
j,[e,i,n])},"lab_into_xyz_d65");var Dt=o(t=>ut(k(t)),"lab_into_srgb"),va=o(t=>Bt(k(t)),"lab_into_\
srgb_linear");var R=o(t=>{if(s(t)&&t.colorspace==="lch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=e*Math.cos(i),p=e*Math.sin(i);return _(
Wt,[r,n,p])}else throw new Error("Wrong parameter passed: "+t)},"\
lch_into_lab");var Nt=o(t=>ut(k(R(t))),"lch_into_srgb"),Xa=o(t=>Bt(k(R(t))),"lch\
_into_srgb_linear");var Jo=y(1,1,1,.3963377773761749,-.1055613458156586,-.0894841775298119,
.2158037573099136,-.0638541728258133,-1.2914855480194092),Yt=y(.819022437996703,
.0329836539323885,.0481771893596242,.3619062600528904,.9292868615863434,
.2642395317527308,-.1288737815209879,.0361446663506424,.6335478284694309),
Ct=y(.210454268309314,1.9779985324311684,.0259040424655478,.7936177747023054,
-2.42859224204858,.7827717124575296,-.0040720430116193,.450593709617411,
-.8086757549230774),qo=y(1.2268798758459243,-.0405757452148008,-.0763729366746601,
-.5578149944602171,1.112286803280317,-.4214933324022432,.2813910456659647,
-.0717110580655164,1.5869240198367816);var g=o(t=>{if(s(t)&&t.colorspace==="oklab"){let[r,e,i]=t.position,
[n,p,a]=c(i,r,e).multiply(Jo).each((m,l,f)=>f[l]=m**3).multiply(qo);
return _(j,[n,p,a])}else throw new Error("Wrong parameter passed:\
 "+t)},"oklab_into_xyz_d65"),Ht=o(t=>{let[r,e,i]=c(g(t)).multiply(
H);return _(X,[r,e,i])},"oklab_into_xyz_d50");var Gt=o(t=>B(g(t)),"oklab_into_srgb"),Ua=o(t=>ot(g(t)),"oklab_in\
to_srgb_linear");var U=o(t=>{if(s(t)&&t.colorspace==="oklch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=isNaN(i)?0:e*Math.cos(i),p=isNaN(i)?0:
e*Math.sin(i);return _(Tt,[r,n,p])}else throw new Error("Wrong pa\
rameter passed: "+t)},"oklch_into_oklab");var $t=o(t=>B(g(U(t))),"oklch_into_srgb"),n_=o(t=>ot(g(U(t))),"ok\
lch_into_srgb_linear");var Qo=o(t=>{let r=Math.abs(t);return r<=.03125?t/16:Math.sign(t)*
Math.pow(r,1.8)},"to_linear"),zo=o(t=>{let r=Math.abs(t);return r>=
1/512?Math.sign(t)*Math.pow(r,1/1.8):16*t},"to_gamut");var Nr=y(.7977666449006423,.2880748288194013,0,.13518129740053308,
.711835234241873,0,.0313477341283922,8993693872564e-17,.8251046025104602),
Zt=o(t=>{if(s(t)&&t.colorspace==="prophoto-rgb"){let r=_(X,t.position.
toArray());return c(r).each((e,i,n)=>n[i]=Qo(e)).multiply(Nr),r}else
throw new Error("Wrong parameter passed: "+t)},"prophoto_rgb_into\
_xyz_d50"),tt=o(t=>{let r=Zt(t),e=_(j,r.position.toArray());return c(
e).multiply(A),e},"prophoto_rgb_into_xyz_d65");var Vt=o(t=>B(tt(t)),"prophoto_rgb_into_srgb"),u_=o(t=>ot(tt(t)),
"prophoto_rgb_into_srgb_linear");var Ft=1.09929682680944,tr=.018053968510807,So=o(t=>{let r=Math.abs(
t);return r<tr*4.5?t/4.5:Math.sign(t)*Math.pow((r+Ft-1)/Ft,1/.45)},
"to_linear"),Po=o(t=>{let r=Math.abs(t);return r>tr?Math.sign(t)*
(Ft*Math.pow(r,.45)-(Ft-1)):4.5*t},"to_gamut");var or=y(63426534/99577255,26158966/99577255,4994106574466076e-32,
20160776/139408157,472592308/697040785,19567812/697040785,47086771/
278816314,8267143/139408157,295819943/278816314),V=o(t=>{if(s(t)&&
t.colorspace==="rec2020"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).
each((m,l,f)=>f[l]=So(m)).multiply(or);return _(j,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"rec2020_into_xyz_d65"),rr=o(t=>{if(s(
t)&&t.colorspace==="rec2020"){let[r,e,i]=t.position,[n,p,a]=c(r,e,
i).each((m,l,f)=>f[l]=So(m)).multiply(or).multiply(H);return _(X,
[n,p,a])}else throw new Error("Wrong parameter passed: "+t)},"rec\
2020_into_xyz_d50");var Ut=o(t=>B(V(t)),"rec2020_into_srgb"),X_=o(t=>ot(V(t)),"rec202\
0_into_srgb_linear");var Kt=y(506752/1228815,87098/409605,7918/409605,87881/245763,175762/
245763,87881/737289,12673/70218,12673/175545,1001167/1053270),T=o(
t=>{if(s(t)&&["rgb","srgb"].includes(t.colorspace)){let[r,e,i]=t.
position,[n,p,a]=c(r,e,i).each((m,l,f)=>f[l]=lt(m)).multiply(Kt);
return _(j,[n,p,a])}else throw new Error("Wrong parameter passed:\
 "+t)},"srgb_into_xyz_d65"),K=o(t=>{if(s(t)&&t.colorspace==="srgb\
-linear"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(Kt);return _(
j,[n,p,a])}else throw new Error("Wrong parameter passed: "+t)},"s\
rgb_linear_into_xyz_d65"),At=o(t=>{if(s(t)&&["rgb","srgb"].includes(
t.colorspace)){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).each((m,l,f)=>f[l]=
lt(m)).multiply(Kt).multiply(H);return _(X,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_xyz_d50"),er=o(t=>{if(s(
t)&&t.colorspace==="srgb-linear"){let[r,e,i]=t.position,[n,p,a]=c(
r,e,i).multiply(Kt).multiply(H);return _(X,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_linear_into_xyz_d50");var Jt=o(t=>Z(T(t)),"srgb_into_a98_rgb"),pm=o(t=>Z(K(t)),"srgb_li\
near_into_a98_rgb");var sm=o(t=>Jt(Ko(t)),"hsl_into_a98_rgb");var ym=o(t=>{if(s(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position;
if(r+i>=1){let n=r/(r+i);return _(Xt,[n,n,n])}else{let n=Q(e,1,.5).
map(p=>(p*(1-r-i)+r)*100);return Jt(_(D,n))}}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_a98_rgb");var Pm=o(t=>Z(It(t)),"lab_into_a98_rgb");var Ym=o(t=>Z(It(R(t))),"lch_into_a98_rgb");var jm=o(t=>Z(g(t)),"oklab_into_a98_rgb");var ir=o(t=>Ht(U(t)),"oklch_into_xyz_d50"),nr=o(t=>g(U(t)),"oklch\
_into_xyz_d65");var Nm=o(t=>Z(nr(t)),"oklch_into_a98_rgb");var Fm=o(t=>Z(tt(t)),"prophoto_rgb_into_a98_rgb");var Qm=o(t=>Z(V(t)),"rec2020_into_a98_rgb");var pr=y(446124/178915,-14852/17905,11844/330415,-333277/357830,63121/
35810,-50337/660830,-72051/178915,423/17905,316169/330415),W=o(t=>{
if(s(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,[n,p,a]=c(
r,e,i).multiply(pr).each((m,l,f)=>f[l]=st(m)*100);return _(fo,[n,
p,a])}else throw new Error("Wrong parameter passed: "+t)},"xyz_d6\
5_into_display_p3"),qt=o(t=>{if(s(t)&&t.colorspace==="xyz-d50"){let[
r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(A).multiply(pr).each(
(m,l,f)=>f[l]=st(m)*100);return _(fo,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_display_p3");var wl=o(t=>W($(t)),"a98_rgb_into_display_p3");var ar=o(t=>{if(s(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=Q(e,r,i).map(a=>a*100),p=_(D,n);return At(p)}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_xyz_d50"),rt=o(t=>{if(s(
t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,n=Q(e,r,i).map(a=>a*
100),p=_(D,n);return T(p)}else throw new Error("Wrong parameter p\
assed: "+t)},"hsl_into_xyz_d65");var Xl=o(t=>W(rt(t)),"hsl_into_display_p3");var _r=o(t=>{if(s(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
n=zt(e,r,i).map(a=>a*100),p=_(D,n);return At(p)}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_xyz_d50"),et=o(t=>{if(s(
t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,n=zt(e,r,i).map(a=>a*
100),p=_(D,n);return T(p)}else throw new Error("Wrong parameter p\
assed: "+t)},"hwb_into_xyz_d65");var $l=o(t=>W(et(t)),"hwb_into_display_p3");var Jl=o(t=>qt(k(t)),"lab_into_display_p3");var es=o(t=>qt(k(R(t))),"lch_into_display_p3");var _s=o(t=>W(g(t)),"oklab_into_display_p3");var xs=o(t=>W(g(U(t))),"oklch_into_display_p3");var gs=o(t=>W(tt(t)),"prophoto_rgb_into_display_p3");var ws=o(t=>W(V(t)),"rec2020_into_display_p3");var Ys=o(t=>W(T(t)),"srgb_into_display_p3"),Cs=o(t=>W(K(t)),"srgb\
_linear_into_display_p3");var v=o((t,r,e)=>{let i=Math.max(t,r,e),n=Math.min(t,r,e),p=i-n,a=mr(
t,r,e),m=0,l=(n+i)/2;return p!==0&&(m=l===0||l===1?0:(i-l)/Math.min(
l,1-l)),m<0&&(a+=Math.PI,m=Math.abs(m)),m<=1e-5&&(a=NaN),[a*180/Math.
PI,m*100,l*100]},"rgb_to_hsl"),mr=o((t,r,e)=>{let i=Math.max(t,r,
e),n=Math.min(t,r,e),p=NaN,a=i-n;if(a!==0){switch(i){case t:p=(r-
e)/a+(r<e?6:0);break;case r:p=(e-t)/a+2;break;case e:p=(t-r)/a+4}
p*=Math.PI/3}return p},"rgb_to_hue"),M=o((t,r,e)=>{let i=mr(t,r,e),
n=Math.min(t,Math.min(r,e)),p=1-Math.max(t,Math.max(r,e));return[
i*180/Math.PI,n*100,p*100]},"rgb_to_hwb");var Js=o(t=>{let[r,e,i]=Rt(t).position;return _(S,v(r,e,i))},"a98\
_rgb_into_hsl");var nf=o(t=>{let[r,e,i]=Lt(t).position;return _(S,v(r,e,i))},"dis\
play_p3_into_hsl");var ff=o(t=>{if(s(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
[n,p,a]=zt(e,r,i),[m,l,f]=v(n,p,a);return _(S,[m,l,f])}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_hsl");var gf=o(t=>{let[r,e,i]=Dt(t).position;return _(S,v(r,e,i))},"lab\
_into_hsl");var Mf=o(t=>{let[r,e,i]=Nt(t).position;return _(S,v(r,e,i))},"lch\
_into_hsl");var Tf=o(t=>{let[r,e,i]=Gt(t).position;return _(S,v(r,e,i))},"okl\
ab_into_hsl");var Rf=o(t=>{let[r,e,i]=$t(t).position;return _(S,v(r,e,i))},"okl\
ch_into_hsl");var Vf=o(t=>{let[r,e,i]=Vt(t).position;return _(S,v(r,e,i))},"pro\
photo_rgb_into_hsl");var tc=o(t=>{let[r,e,i]=Ut(t).position,[n,p,a]=v(r,e,i);return _(
S,[n,p,a])},"rec2020_into_hsl");var ac=o(t=>{if(s(t)&&["rgb","srgb"].includes(t.colorspace)){let[
r,e,i]=t.position,[n,p,a]=v(r,e,i);return _(S,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_hsl"),_c=o(t=>{if(s(t)&&
t.colorspace==="srgb-linear"){let[r,e,i]=t.position.map(m=>st(m)),
[n,p,a]=v(r,e,i);return _(S,[n,p,a])}else throw new Error("Wrong \
parameter passed: "+t)},"srgb_linear_into_hsl");var bc=o(t=>{let[r,e,i]=ut(t).position;return _(S,v(r,e,i))},"xyz\
_d50_into_hsl"),dc=o(t=>{let[r,e,i]=B(t).position;return _(S,v(r,
e,i))},"xyz_d65_into_hsl");var Xc=o(t=>{let[r,e,i]=Rt(t).position;return _(P,M(r,e,i))},"a98\
_rgb_into_hwb");var Dc=o(t=>{let[r,e,i]=Lt(t).position;return _(P,M(r,e,i))},"dis\
play_p3_into_hwb");var Uc=o(t=>{if(s(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
[n,p,a]=Q(e,r,i);return _(P,M(n,p,a))}else throw new Error("Wrong\
 parameter passed: "+t)},"hsl_into_hwb");var rx=o(t=>{let[r,e,i]=Dt(t).position;return _(P,M(r,e,i))},"lab\
_into_hwb");var mx=o(t=>{let[r,e,i]=Nt(t).position;return _(P,M(r,e,i))},"lch\
_into_hwb");var dx=o(t=>{let[r,e,i]=Gt(t).position;return _(P,M(r,e,i))},"okl\
ab_into_hwb");var Px=o(t=>{let[r,e,i]=$t(t).position;return _(P,M(r,e,i))},"okl\
ch_into_hwb");var Cx=o(t=>{let[r,e,i]=Vt(t).position;return _(P,M(r,e,i))},"pro\
photo_rgb_into_hwb");var Wx=o(t=>{let[r,e,i]=Ut(t).position;return _(P,M(r,e,i))},"rec\
2020_into_hwb");var Hx=o(t=>{if(s(t)&&["rgb","srgb"].includes(t.colorspace)){let[
r,e,i]=t.position;return _(P,M(r,e,i))}else throw new Error("Wron\
g parameter passed: "+t)},"srgb_into_hwb"),Gx=o(t=>{if(s(t)&&t.colorspace===
"srgb-linear"){let[r,e,i]=t.position.map(n=>st(n));return _(P,M(r,
e,i))}else throw new Error("Wrong parameter passed: "+t)},"srgb_l\
inear_into_hwb");var qx=o(t=>{let[r,e,i]=ut(t).position;return _(P,M(r,e,i))},"xyz\
_d50_into_hwb"),Qx=o(t=>{let[r,e,i]=B(t).position;return _(P,M(r,
e,i))},"xyz_d65_into_hwb");var Qt=o(t=>{if(s(t)&&t.colorspace==="xyz-d50"){let r=_(j,t.position.
toArray());return c(r).multiply(A),r}else throw new Error("Wrong \
parameter passed: "+t)},"xyz_d50_into_xyz_d65"),h=o(t=>{if(s(t)&&
t.colorspace==="xyz-d65"){let r=_(X,t.position.toArray());return c(
r).multiply(H),r}else throw new Error("Wrong parameter passed: "+
t)},"xyz_d65_into_xyz_d50");var lr=o(t=>b(h(t)),"xyz_d65_into_lab"),b=o(t=>{if(s(t)&&t.colorspace===
"xyz-d50"){let r=.008856451679035631,e=29**3/3**3,[i,n,p]=t.position.
map((f,x)=>f/L[x]).map(f=>f>r?Math.cbrt(f):(e*f+16)/116),a=116*n-
16,m=500*(i-n),l=200*(n-p);return _(Wt,[a,m,l])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_lab");var Y0=o(t=>{let r=$(t),e=h(r);return b(e)},"a98_rgb_into_lab");var X0=o(t=>{let r=G(t),e=h(r);return b(e)},"display_p3_into_lab");var L0=o(t=>{let r=rt(t),e=h(r);return b(e)},"hsl_into_lab");var V0=o(t=>{let r=et(t),e=h(r);return b(e)},"hwb_into_lab");var Q0=o(t=>{let r=g(t),e=h(r);return b(e)},"oklab_into_lab");var pb=o(t=>{let r=U(t),e=g(r),i=h(e);return b(i)},"oklch_into_la\
b");var sb=o(t=>{let r=Zt(t);return b(r)},"prophoto_rgb_into_lab");var hb=o(t=>{let r=V(t),e=h(r);return b(e)},"rec2020_into_lab");var Pb=o(t=>{let r=T(t),e=h(r);return b(e)},"srgb_into_lab"),wb=o(
t=>{let r=K(t),e=h(r);return b(e)},"srgb_linear_into_lab");var Y=o(t=>{if(s(t)&&t.colorspace==="lab"){let[r,e,i]=t,n=Math.atan2(
i,e)*(180/Math.PI),p=Math.hypot(e,i);return _(Wo,[r,p,n])}else throw new Error(
"Wrong parameter passed: "+t)},"lab_into_lch");var Vb=o(t=>{let r=$(t),e=h(r),i=b(e);return Y(i)},"a98_rgb_into_\
lch");var td=o(t=>{let r=G(t),e=h(r),i=b(e);return Y(i)},"display_p3_in\
to_lch");var ad=o(t=>{let r=rt(t),e=h(r),i=b(e);return Y(i)},"hsl_into_lch");var xd=o(t=>{let r=et(t),e=h(r),i=b(e);return Y(i)},"hwb_into_lch");var zd=o(t=>{let r=g(t),e=h(r),i=b(e);return Y(i)},"oklab_into_lc\
h");var Yd=o(t=>{let r=U(t),e=g(r),i=h(e),n=b(i);return Y(n)},"oklch_\
into_lch");var Xd=o(t=>{let r=Zt(t),e=b(r);return Y(e)},"prophoto_rgb_into_l\
ch");var Dd=o(t=>{let r=V(t),e=h(r),i=b(e);return Y(i)},"rec2020_into_\
lch");var Ud=o(t=>{let r=T(t),e=h(r),i=b(e);return Y(i)},"srgb_into_lch"),
Kd=o(t=>{let r=K(t),e=h(r),i=b(e);return Y(i)},"srgb_linear_into_\
lch");var oh=o(t=>Y(b(t)),"xyz_d50_into_lch"),rh=o(t=>Y(lr(t)),"xyz_d65\
_into_lch");var O=o(t=>{if(s(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,p,a]=c(r,e,i).multiply(Yt).each((m,l,f)=>f[l]=Math.cbrt(m)).multiply(
Ct);return _(Tt,[n*100,p,a])}else throw new Error("Wrong paramete\
r passed: "+t)},"xyz_d65_into_oklab"),Sh=o(t=>{if(s(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(A).multiply(
Yt).each((m,l,f)=>f[l]=Math.cbrt(m)).multiply(Ct);return _(Tt,[n*
100,p,a])}else throw new Error("Wrong parameter passed: "+t)},"xy\
z_d50_into_oklab");var kh=o(t=>O($(t)),"a98_rgb_into_oklab");var Oh=o(t=>O(G(t)),"display_p3_into_oklab");var Wh=o(t=>{let r=rt(t);return O(r)},"hsl_into_oklab");var Dh=o(t=>O(et(t)),"hwb_into_oklab");var to=o(t=>{let r=k(t),e=Qt(r);return O(e)},"lab_into_oklab");var ty=o(t=>{let r=R(t),e=k(r),i=Qt(e);return O(i)},"lch_into_okl\
ab");var ny=o(t=>O(tt(t)),"prophoto_rgb_into_oklab");var ly=o(t=>O(V(t)),"rec2020_into_oklab");var by=o(t=>{let r=T(t);return O(r)},"srgb_into_oklab"),dy=o(t=>{
let r=K(t);return O(r)},"srgb_linear_into_oklab");var F=o(t=>{if(s(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,p,a]=c(r,e,i).multiply(Yt).each((x,J,I)=>I[J]=Math.cbrt(x)).multiply(
Ct),m=n*100,l=Math.hypot(p,a),f=l<.001?NaN:Math.atan2(a,p)*180/Math.
PI;return _(jt,[m,l,f])}else throw new Error("Wrong parameter pas\
sed: "+t)},"xyz_d65_into_oklch"),Zy=o(t=>{if(s(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position.toArray(),[n,p,a]=c(r,e,i).multiply(
A).multiply(Yt).each((x,J,I)=>I[J]=Math.cbrt(x)).multiply(Ct),m=n*
100,l=Math.hypot(p,a),f=l<.001?NaN:Math.atan2(a,p)*180/Math.PI;return _(
jt,[m,l,f])}else throw new Error("Wrong parameter passed: "+t)},"\
xyz_d50_into_oklch");var Ly=o(t=>{let r=$(t);return F(r)},"a98_rgb_into_oklch");var $y=o(t=>{let r=G(t);return F(r)},"display_p3_into_oklch");var Jy=o(t=>{let r=rt(t);return F(r)},"hsl_into_oklch");var r5=o(t=>{let r=et(t);return F(r)},"hwb_into_oklch");var oo=o(t=>{if(s(t)&&t.colorspace==="oklab"){let[r,e,i]=t,n=Math.
hypot(e,i),p=n<.001?NaN:Math.atan2(i,e)*180/Math.PI;return _(jt,[
r,n,p])}else throw new Error("Wrong parameter passed: "+t)},"okla\
b_into_oklch");var s5=o(t=>oo(to(t)),"lab_into_oklch");var h5=o(t=>{let r=R(t),e=to(r);return oo(e)},"lch_into_oklch");var S5=o(t=>{let r=tt(t);return F(r)},"prophoto_rgb_into_oklch");var k5=o(t=>{let r=V(t);return F(r)},"rec2020_into_oklch");var O5=o(t=>{let r=T(t);return F(r)},"srgb_into_oklch"),T5=o(t=>{
let r=K(t);return F(r)},"srgb_linear_into_oklch");var sr=y(1.3457868816471583,-.5446307051249019,0,-.25557208737979464,
1.5082477428451468,0,-.05110186497554526,.02052744743642139,1.2119675456389452),
tg=o(t=>{if(s(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,p,a]=c(r,e,i).multiply(H).multiply(sr).each((m,l,f)=>f[l]=zo(m)*
100);return _(co,[n,p,a])}else throw new Error("Wrong parameter p\
assed: "+t)},"xyz_d65_into_prophoto_rgb"),C=o(t=>{if(s(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(sr).each(
(m,l,f)=>f[l]=zo(m)*100);return _(co,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_prophoto_rgb");var ng=o(t=>C(Uo(t)),"a98_rgb_into_prophoto_rgb");var lg=o(t=>C($o(t)),"display_p3_into_prophoto_rgb");var fr=o(t=>k(R(t)),"lch_into_xyz_d50"),bg=o(t=>It(R(t)),"lch_int\
o_xyz_d65");var Tg=o(t=>C(ar(t)),"hsl_into_prophoto_rgb");var Eg=o(t=>C(_r(t)),"hwb_into_prophoto_rgb");var Ng=o(t=>C(k(t)),"lab_into_prophoto_rgb");var Fg=o(t=>C(fr(t)),"lch_into_prophoto_rgb");var Qg=o(t=>C(Ht(t)),"oklab_into_prophoto_rgb");var iu=o(t=>C(ir(t)),"oklch_into_prophoto_rgb");var mu=o(t=>C(rr(t)),"rec2020_into_prophoto_rgb");var xu=o(t=>C(At(t)),"srgb_into_prophoto_rgb"),bu=o(t=>C(er(t)),"\
srgb_linear_into_prophoto_rgb");var cr=y(30757411/17917100,-19765991/29648200,792561/44930125,-6372589/
17917100,47925759/29648200,-1921689/44930125,-4539589/17917100,467509/
29648200,42328811/44930125),E=o(t=>{if(s(t)&&t.colorspace==="xyz-\
d65"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(cr).each((m,l,f)=>f[l]=
Po(m)*100);return _(xo,[n,p,a])}else throw new Error("Wrong param\
eter passed: "+t)},"xyz_d65_into_rec2020"),ro=o(t=>{if(s(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,p,a]=c(r,e,i).multiply(A).multiply(
cr).each((m,l,f)=>f[l]=Po(m)*100);return _(xo,[n,p,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_rec2020");var Ru=o(t=>E($(t)),"a98_rgb_into_rec2020");var Gu=o(t=>E(G(t)),"display_p3_into_rec2020");var Ku=o(t=>E(rt(t)),"hsl_into_rec2020");var oz=o(t=>E(et(t)),"hwb_into_rec2020");var pz=o(t=>ro(k(t)),"lab_into_rec2020");var fz=o(t=>ro(k(R(t))),"lch_into_rec2020");var hz=o(t=>E(g(t)),"oklab_into_rec2020");var Pz=o(t=>E(g(U(t))),"oklch_into_rec2020");var Iz=o(t=>E(tt(t)),"prophoto_rgb_into_rec2020");var Tz=o(t=>E(T(t)),"srgb_into_rec2020"),jz=o(t=>E(K(t)),"srgb_li\
near_into_rec2020");export{Xt as A98RGBSpace,fo as DisplayP3Space,S as HSLSpace,P as HWBSpace,
Wt as LABSpace,Wo as LCHSpace,co as ProPhotoRGBSpace,Lo as RGBModel,
xo as Rec2020Space,X as XYZD50Space,j as XYZD65Space,wl as a98_rgb_into_display_p3,
Js as a98_rgb_into_hsl,Xc as a98_rgb_into_hwb,Y0 as a98_rgb_into_lab,
Vb as a98_rgb_into_lch,kh as a98_rgb_into_oklab,Ly as a98_rgb_into_oklch,
ng as a98_rgb_into_prophoto_rgb,Ru as a98_rgb_into_rec2020,Rt as a98_rgb_into_rgb,
Rt as a98_rgb_into_srgb,Lp as a98_rgb_into_srgb_linear,$ as a98_rgb_into_xyz,
Uo as a98_rgb_into_xyz_d50,$ as a98_rgb_into_xyz_d65,up as display_p3_into_a98_rgb,
nf as display_p3_into_hsl,Dc as display_p3_into_hwb,X0 as display_p3_into_lab,
td as display_p3_into_lch,Oh as display_p3_into_oklab,$y as display_p3_into_oklch,
lg as display_p3_into_prophoto_rgb,Gu as display_p3_into_rec2020,
Lt as display_p3_into_rgb,Lt as display_p3_into_srgb,$p as display_p3_into_srgb_linear,
G as display_p3_into_xyz,$o as display_p3_into_xyz_d50,G as display_p3_into_xyz_d65,
sm as hsl_into_a98_rgb,Xl as hsl_into_display_p3,Uc as hsl_into_hwb,
L0 as hsl_into_lab,ad as hsl_into_lch,Wh as hsl_into_oklab,Jy as hsl_into_oklch,
Tg as hsl_into_prophoto_rgb,Ku as hsl_into_rec2020,oa as hsl_into_rgb,
Ko as hsl_into_srgb,ra as hsl_into_srgb_linear,rt as hsl_into_xyz,
ar as hsl_into_xyz_d50,rt as hsl_into_xyz_d65,ym as hwb_into_a98_rgb,
$l as hwb_into_display_p3,ff as hwb_into_hsl,V0 as hwb_into_lab,xd as hwb_into_lch,
Dh as hwb_into_oklab,r5 as hwb_into_oklch,Eg as hwb_into_prophoto_rgb,
oz as hwb_into_rec2020,fa as hwb_into_rgb,fa as hwb_into_srgb,ca as hwb_into_srgb_linear,
et as hwb_into_xyz,_r as hwb_into_xyz_d50,et as hwb_into_xyz_d65,
_ as initPointInSpace,_ as default,s as isPointInSpace,Pm as lab_into_a98_rgb,
Jl as lab_into_display_p3,gf as lab_into_hsl,rx as lab_into_hwb,Y as lab_into_lch,
to as lab_into_oklab,s5 as lab_into_oklch,Ng as lab_into_prophoto_rgb,
pz as lab_into_rec2020,Dt as lab_into_rgb,Dt as lab_into_srgb,va as lab_into_srgb_linear,
It as lab_into_xyz,k as lab_into_xyz_d50,It as lab_into_xyz_d65,Ym as lch_into_a98_rgb,
es as lch_into_display_p3,Mf as lch_into_hsl,mx as lch_into_hwb,R as lch_into_lab,
ty as lch_into_oklab,h5 as lch_into_oklch,Fg as lch_into_prophoto_rgb,
fz as lch_into_rec2020,Nt as lch_into_rgb,Nt as lch_into_srgb,Xa as lch_into_srgb_linear,
bg as lch_into_xyz,fr as lch_into_xyz_d50,bg as lch_into_xyz_d65,
Tt as okLABSpace,jt as okLCHSpace,jm as oklab_into_a98_rgb,_s as oklab_into_display_p3,
Tf as oklab_into_hsl,dx as oklab_into_hwb,Q0 as oklab_into_lab,zd as oklab_into_lch,
oo as oklab_into_oklch,Qg as oklab_into_prophoto_rgb,hz as oklab_into_rec2020,
Gt as oklab_into_rgb,Gt as oklab_into_srgb,Ua as oklab_into_srgb_linear,
g as oklab_into_xyz,Ht as oklab_into_xyz_d50,g as oklab_into_xyz_d65,
Nm as oklch_into_a98_rgb,xs as oklch_into_display_p3,Rf as oklch_into_hsl,
Px as oklch_into_hwb,pb as oklch_into_lab,Yd as oklch_into_lch,U as oklch_into_oklab,
iu as oklch_into_prophoto_rgb,Pz as oklch_into_rec2020,$t as oklch_into_rgb,
$t as oklch_into_srgb,n_ as oklch_into_srgb_linear,nr as oklch_into_xyz,
ir as oklch_into_xyz_d50,nr as oklch_into_xyz_d65,Fm as prophoto_rgb_into_a98_rgb,
gs as prophoto_rgb_into_display_p3,Vf as prophoto_rgb_into_hsl,Cx as prophoto_rgb_into_hwb,
sb as prophoto_rgb_into_lab,Xd as prophoto_rgb_into_lch,ny as prophoto_rgb_into_oklab,
S5 as prophoto_rgb_into_oklch,Iz as prophoto_rgb_into_rec2020,Vt as prophoto_rgb_into_rgb,
Vt as prophoto_rgb_into_srgb,u_ as prophoto_rgb_into_srgb_linear,
tt as prophoto_rgb_into_xyz,Zt as prophoto_rgb_into_xyz_d50,tt as prophoto_rgb_into_xyz_d65,
Qm as rec2020_into_a98_rgb,ws as rec2020_into_display_p3,tc as rec2020_into_hsl,
Wx as rec2020_into_hwb,hb as rec2020_into_lab,Dd as rec2020_into_lch,
ly as rec2020_into_oklab,k5 as rec2020_into_oklch,mu as rec2020_into_prophoto_rgb,
Ut as rec2020_into_rgb,Ut as rec2020_into_srgb,X_ as rec2020_into_srgb_linear,
V as rec2020_into_xyz,rr as rec2020_into_xyz_d50,V as rec2020_into_xyz_d65,
Jt as rgb_into_a98_rgb,Ys as rgb_into_display_p3,ac as rgb_into_hsl,
Hx as rgb_into_hwb,Pb as rgb_into_lab,Ud as rgb_into_lch,by as rgb_into_oklab,
O5 as rgb_into_oklch,xu as rgb_into_prophoto_rgb,Tz as rgb_into_rec2020,
T as rgb_into_xyz,At as rgb_into_xyz_d50,T as rgb_into_xyz_d65,Pt as sRGBLinearSpace,
D as sRGBSpace,Jt as srgb_into_a98_rgb,Ys as srgb_into_display_p3,
ac as srgb_into_hsl,Hx as srgb_into_hwb,Pb as srgb_into_lab,Ud as srgb_into_lch,
by as srgb_into_oklab,O5 as srgb_into_oklch,xu as srgb_into_prophoto_rgb,
Tz as srgb_into_rec2020,T as srgb_into_xyz,At as srgb_into_xyz_d50,
T as srgb_into_xyz_d65,pm as srgb_linear_into_a98_rgb,Cs as srgb_linear_into_display_p3,
_c as srgb_linear_into_hsl,Gx as srgb_linear_into_hwb,wb as srgb_linear_into_lab,
Kd as srgb_linear_into_lch,dy as srgb_linear_into_oklab,T5 as srgb_linear_into_oklch,
bu as srgb_linear_into_prophoto_rgb,jz as srgb_linear_into_rec2020,
K as srgb_linear_into_xyz,er as srgb_linear_into_xyz_d50,K as srgb_linear_into_xyz_d65,
bp as xyz_d50_into_a98_rgb,qt as xyz_d50_into_display_p3,bc as xyz_d50_into_hsl,
qx as xyz_d50_into_hwb,b as xyz_d50_into_lab,oh as xyz_d50_into_lch,
Sh as xyz_d50_into_oklab,Zy as xyz_d50_into_oklch,C as xyz_d50_into_prophoto_rgb,
ro as xyz_d50_into_rec2020,ut as xyz_d50_into_rgb,ut as xyz_d50_into_srgb,
Bt as xyz_d50_into_srgb_linear,Qt as xyz_d50_into_xyz_d65,Z as xyz_d65_into_a98_rgb,
W as xyz_d65_into_display_p3,dc as xyz_d65_into_hsl,Qx as xyz_d65_into_hwb,
lr as xyz_d65_into_lab,rh as xyz_d65_into_lch,O as xyz_d65_into_oklab,
F as xyz_d65_into_oklch,tg as xyz_d65_into_prophoto_rgb,E as xyz_d65_into_rec2020,
B as xyz_d65_into_rgb,B as xyz_d65_into_srgb,ot as xyz_d65_into_srgb_linear,
h as xyz_d65_into_xyz_d50,Z as xyz_into_a98_rgb,W as xyz_into_display_p3,
dc as xyz_into_hsl,Qx as xyz_into_hwb,lr as xyz_into_lab,rh as xyz_into_lch,
O as xyz_into_oklab,F as xyz_into_oklch,tg as xyz_into_prophoto_rgb,
E as xyz_into_rec2020,B as xyz_into_rgb,B as xyz_into_srgb,ot as xyz_into_srgb_linear};
