var mr=Object.defineProperty;var o=(t,r)=>mr(t,"name",{value:r,configurable:!0});var lr=Object.defineProperty,ft=o((t,r)=>lr(t,"name",{value:r,configurable:!0}),
"r");function _o(...t){let[r,e]=t.length===1?Array.of(0,t[0]):Array.
of(Math.min(...t),Math.max(...t)),i=Object.create(null,{0:{value:r},
1:{value:e},[Symbol.iterator]:{value:ft(function*(){yield this[0],
yield this[1]},"value")},[Symbol.toStringTag]:{get(){return`Range\
{x \u2208 R; ${this[0]} \u22DC x \u22DC ${this[1]}}`}},avg:{enumerable:!0,
get(){return this[0]+this.value/2}},length:{value:2},value:{enumerable:!0,
get(){return this[1]-this[0]}},toString:{value:ft(function(){return this[0]+
","+this[1]},"value")}});return Object.defineProperties(i,{from:{
enumerable:!0,value:r},to:{enumerable:!0,value:e},allot:{value:ft(
function(n){return this.test(n)?n:n>this.from?(n-this.to)%this.value+
this.from:this.to-(this.from-n)%this.value},"allocateOuterValue")},
clamp:{value:ft(function(n){return this.test(n)?n:Math.max(Math.min(
n,this.to),this.from)},"restrictOuterValue")},test:{value:ft(function(n){
return this.from<=n&&n<=this.to},"value")}}),i}o(_o,"g");ft(_o,"i\
nitRange");function mo(t=[0,100],r=[0,1]){let[e,i]=r,[n,p]=t,[m,_]=[
i-e,p-n];function l(x){return typeof x=="string"&&(x=parseFloat(x)),
s.domain.test(x)===!1&&(x=x>i?(x-i)%m+e:i-(e-x)%m),_*(x-e)/m+n}o(
l,"f"),ft(l,"invert");function s(x){return typeof x=="string"&&(x=
parseFloat(x)),s.range.test(x)===!1&&(x=x>p?(x-p)%_+n:p-(n-x)%_),
m*(x-n)/_+e}return o(s,"l"),ft(s,"calculator"),Object.defineProperties(
s,{domain:{enumerable:!0,value:_o(e,i)},range:{enumerable:!0,value:_o(
n,p)},invert:{enumerable:!0,value:l}})}o(mo,"p");ft(mo,"initScale");var sr=Object.defineProperty,fr=o((t,r)=>sr(t,"name",{value:r,configurable:!0}),
"n"),cr=fr((t,r=12)=>{let e=r?10**r:1;return Math.sign(t)*Math.round(
(Math.abs(t)+Number.EPSILON)*e)/e},"round"),d=cr;var lo=mo([0,360],[-Math.PI,Math.PI]),ut=Object.freeze({bytes:8,domain:lo.
domain,ident:"angle",input:o(t=>lo.domain.allot(d(t*Math.PI/180)),
"input"),output:o(t=>lo.range.allot(d(t*180/Math.PI)),"output"),short:"\
phi",tcoord:"polar",tgeom:"azimuth"});var xr=Object.defineProperty,zt=o((t,r)=>xr(t,"name",{value:r,configurable:!0}),
"e");function h(...t){let[r,e]=t.length===1?Array.of(0,t[0]):Array.
of(Math.min(...t),Math.max(...t)),i=Object.create(null,{0:{value:r},
1:{value:e},[Symbol.iterator]:{value:zt(function*(){yield this[0],
yield this[1]},"value")},[Symbol.toStringTag]:{get(){return`Range\
{x \u2208 R; ${this[0]} \u22DC x \u22DC ${this[1]}}`}},avg:{enumerable:!0,
get(){return this[0]+this.value/2}},length:{value:2},value:{enumerable:!0,
get(){return this[1]-this[0]}},toString:{value:zt(function(){return this[0]+
","+this[1]},"value")}});return Object.defineProperties(i,{from:{
enumerable:!0,value:r},to:{enumerable:!0,value:e},allot:{value:zt(
function(n){return this.test(n)?n:n>this.from?(n-this.to)%this.value+
this.from:this.to-(this.from-n)%this.value},"allocateOuterValue")},
clamp:{value:zt(function(n){return this.test(n)?n:Math.max(Math.min(
n,this.to),this.from)},"restrictOuterValue")},test:{value:zt(function(n){
return this.from<=n&&n<=this.to},"value")}}),i}o(h,"o");zt(h,"ini\
tRange");var ct=Object.freeze({$coord:ut,bytes:8,domain:h(0,360),ident:"hu\
e",short:"h",input:o(t=>ct.domain.allot(t),"input"),output:o(t=>isNaN(
t)?NaN:t<1e-6?0:d(t,6),"output")});var at=Object.freeze({bytes:8,domain:h(0,1),ident:"applicate",short:"\
z",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var mt=Object.freeze({$coord:at,bytes:8,domain:h(0,100),ident:"li\
ghtness",input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"outpu\
t"),short:"L"});var _t=Object.freeze({bytes:8,domain:h(0,1),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var uo=Object.freeze({$coord:_t,bytes:8,domain:h(0,100),ident:"sa\
turation",input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"outp\
ut"),short:"S"});var br=Object.defineProperty,St=o((t,r)=>br(t,"name",{value:r,configurable:!0}),
"n"),dr=St(t=>t!==null&&typeof t=="object","isObject"),hr=St(t=>dr(
t)&&"ident"in t&&"short"in t&&"domain"in t,"isDimension");function S(t,r,e){
let i=Iterator.from(e===void 0?[t,r]:[t,r,e]),n=e===void 0?2:3;for(let _ of i.
take(n))if(hr(_)===!1)throw new TypeError("Passed wrong space dim\
ension: "+JSON.stringify(_,void 0,2));let p=i.take(n).filter(_=>_.
tgeom==="azimuth"||_.tgeom==="reference-ray").toArray().length===
2?n===3?"cilinder":"circle":n===3?"cube":"plane",m=Object.create(
null,{0:{enumerable:!0,value:t},1:{enumerable:!0,value:r},length:{
enumerable:!0,value:n},tgeom:{enumerable:!0,value:p},entries:{value:St(
function*(){yield[0,this[0]],yield[1,this[1]],this.length===3&&(yield[
2,this[2]])},"value")},toArray:{value:St(function(){return Array.
of(...this)},"value")},[Symbol.iterator]:{value:St(function*(){yield this[0],
yield this[1],this.length===3&&(yield this[2])},"value")}});return n===
3&&Object.defineProperty(m,2,{enumerable:!0,value:e}),_=>_===void 0?
m:Object.defineProperties(m,_)}o(S,"w");St(S,"defCSYS");var be=S(_t,ut)({adapt:{enumerable:!0,value:so}});function so(t=0,r=NaN){return[t*Math.cos(r),t*Math.sin(r)]}o(so,"\
calcCartesianCoordinates");var bt=S(_t,ut,at)({adapt:{value:yr}});function yr(t,r,e){return[
...so(t,r),e]}o(yr,"calcCubeCoordinates");var R=Float64Array.of(.9642956764295677,1,.8251046025104602);Object.
defineProperty(R,"ident",{value:"d50"});Object.freeze(R.buffer);var K=Float64Array.
of(.3127/.329,1,(1-.3127-.329)/.329);Object.defineProperty(K,"ide\
nt",{value:"d65"});Object.freeze(K.buffer);var P={CAM:S(ct,uo,mt)(),CSYS:bt,ident:"hsl",whp:K};var zo=Object.freeze({$coord:at,bytes:8,domain:h(0,100),ident:"bl\
ackness",input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"outpu\
t"),short:"B"});var So=Object.freeze({$coord:_t,ident:"whiteness",bytes:8,domain:h(
0,100),input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"output"),
short:"W"});var w={CAM:S(ct,So,zo)(),CSYS:bt,ident:"hwb",whp:K};var lt=Object.freeze({bytes:8,domain:h(-1,1),ident:"abscissa",short:"\
x",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var Po=Object.freeze({$coord:lt,bytes:8,domain:h(-125,125),ident:"\
green-red",input:o(t=>d(t/125),"input"),output:o(t=>d(t*125),"out\
put"),short:"a"}),wo=Object.freeze({$coord:lt,bytes:8,domain:h(-.4,
.4),ident:"green-red",short:"a"});var st=Object.freeze({bytes:8,domain:h(-1,1),ident:"ordinate",short:"\
y",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var ko=Object.freeze({$coord:st,bytes:8,domain:h(-125,125),ident:"\
blue-yellow",input:o(t=>d(t/125),"input"),output:o(t=>d(t*125),"o\
utput"),short:"b"}),vo=Object.freeze({$coord:st,bytes:8,domain:h(
-.4,.4),ident:"blue-yellow",short:"b"});var ci=S(lt,st)({adapt:{value:fo}});function fo(t,r){let e=0,i=NaN;return(t!==0||r!==0)&&(e=Math.sqrt(
t**2+r**2),t!==0&&!r||r!==0&&!t?i=r/Math.abs(r)*(Math.PI/2):i=Math.
atan(r/t)),[e,i]}o(fo,"calcPolarCoordinates");var xt=S(lt,st,at)({adapt:{value:gr}});function gr(t,r,e){return[
...fo(t,r),e]}o(gr,"calcCylindricalCoordinates");var jt=Object.freeze({CAM:S(mt,Po,ko)(),CSYS:xt,ident:"lab",whp:R});var Mo=Object.freeze({$coord:_t,bytes:8,domain:h(0,150),ident:"ch\
roma",input:o(t=>d(t/150),"input"),output:o(t=>d(t*150),"output"),
short:"C"}),Yo=Object.freeze({$coord:_t,bytes:8,domain:h(0,.4),ident:"\
chroma",short:"c"});var Co=Object.freeze({CAM:S(mt,Mo,ct)(),CSYS:bt,ident:"lch",whp:R});var Ct=Object.freeze({CAM:S(mt,wo,vo)(),CSYS:xt,ident:"oklab",whp:K});var It={CAM:S(mt,Yo,ct)(),CSYS:bt,ident:"oklch",whp:K};var Io=Object.freeze({$coord:at,bytes:8,domain:h(0,100),ident:"bl\
ue",input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"output"),short:"\
b"}),Ao=Object.freeze({$coord:at,bytes:1,domain:h(0,255),ident:"b\
lue",input:o(t=>d(t/255),"input"),output:o(t=>Math.round(t*255)&255,
"output"),short:"B"});var Oo=Object.freeze({$coord:st,bytes:8,domain:h(0,100),ident:"gr\
een",input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"output"),
short:"g"}),Wo=Object.freeze({$coord:st,bytes:1,domain:h(0,255),ident:"\
green",input:o(t=>d(t/255),"input"),output:o(t=>Math.round(t*255)&
255,"output"),short:"G"});var Bo=Object.freeze({$coord:lt,bytes:8,domain:h(0,100),ident:"gr\
een",input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"output"),
short:"r"}),To=Object.freeze({$coord:lt,bytes:1,domain:h(0,255),ident:"\
red",input:o(t=>d(t/255),"input"),output:o(t=>Math.round(t*255)&255,
"output"),short:"R"});var Pt=S(Bo,Oo,Io)(),yt=xt,wt=K,H=Object.freeze({ident:"srgb",CAM:Pt,
CSYS:yt,whp:wt}),gt=Object.freeze({ident:"srgb-linear",CAM:Pt,CSYS:yt,
whp:wt}),At=Object.freeze({ident:"a98-rgb",CAM:Pt,CSYS:yt,whp:wt}),
co=Object.freeze({ident:"display-p3",CAM:Pt,CSYS:yt,whp:wt}),xo=Object.
freeze({ident:"prophoto-rgb",CAM:Pt,CSYS:yt,whp:R}),bo=Object.freeze(
{ident:"rec2020",CAM:Pt,CSYS:yt,whp:wt}),Xo=Object.freeze({ident:"\
rgb",CAM:S(To,Wo,Ao)(),CSYS:yt,whp:wt});var W=Object.freeze({ident:"xyz-d65",CSYS:xt,whp:K}),B=Object.freeze(
{ident:"xyz-d50",CSYS:xt,whp:R});var Ot=o(t=>Math.sign(t)*Math.pow(Math.abs(t),2.19921875),"to_lin\
ear"),Wt=o(t=>Math.sign(t)*Math.pow(Math.abs(t),256/563),"to_gamu\
t");var J=o(t=>{let r=Math.abs(t);return r<=.04045?t/12.92:Math.sign(
t)*Math.pow((r+.055)/1.055,2.4)},"to_linear"),q=o(t=>{let r=Math.
abs(t);return r>.0031308?Math.sign(t)*(1.055*Math.pow(r,1/2.4)-.055):
12.92*t},"to_gamut");var g={d65:{d50:Float64Array.of(1.0479297925449969,.02962780877005599,
-.009243040646204504,.022946870601609652,.9904344267538799,.015055191490298152,
-.05019226628920524,-.017073799063418826,.7518742814281371)},d50:{
d65:Float64Array.of(.955473421488075,-.0283697093338637,.012314014864481998,
-.02309845494876471,1.0099953980813041,-.020507649298898964,.06325924320057072,
.021041441191917323,1.330365926242124)}};var ur=Object.defineProperty,E=o((t,r)=>ur(t,"name",{value:r,configurable:!0}),
"n"),zr=E(t=>typeof t=="number","isNumber"),Sr=E(t=>typeof t=="st\
ring","isString"),Zo=E(t=>ho(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function","isIterableObject"),ho=E(t=>t!==null&&typeof t==
"object","isObject"),Pr=E(t=>Sr(t)&&wr.has(t),"isSpaceID"),jo=E(t=>ho(
t)&&"ident"in t&&Pr(t.ident)&&"CSYS"in t&&ho(t.CSYS)&&"length"in t.
CSYS&&t.CSYS.length===3,"isColorSpace"),wr=new Set(["a98-rgb","di\
splay-p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb",
"rec2020","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz-d65"]),
f=E(t=>Zo(t)&&Iterator.from(t).every(r=>typeof r=="number")&&"len\
gth"in t&&t.length===3&&"space"in t&&jo(t.space),"isPointInSpace");
function a(t,r){if(jo(t)===!1)throw new TypeError("Point must be \
declared in a valid color space instead of "+JSON.stringify(t,void 0,
2));if((Zo(r)&&Iterator.from(r).every(_=>zr(_)))===!1)throw new TypeError(
"Point in space has valid coordinates. Wrong parameters: "+JSON.stringify(
r,void 0,2));let e=t.CSYS.length,i=new Float64Array(e),n=t.CAM===
void 0?Array.of(0,1,2):t.CAM.toArray().map(_=>t.CSYS.toArray().findIndex(
l=>_.$coord===l)),p={adapted:{get(){if(typeof this.space.CSYS.adapt==
"function"){let[_,l,s]=this.position;return Iterator.from(this.space.
CSYS.adapt(_,l,s))}else return this.position}},position:{get:E(()=>i.
values(),"get"),set:E(_=>i.set(_),"set")},set:{value:E(function(_){
let l=Array.from(_),s=Math.min(l.length,3);for(let x=0;x<s;x++)this[x]=
l[x];return this},"value")}};for(let _=0;_<e;_++)((l,s,x)=>{p[l]=
{enumerable:!0,get(){let{CAM:z,CSYS:O}=this.space,U=O[s],N=z!==void 0?
z[l]:null,et=x[s];return"output"in U&&typeof U.output=="function"&&
(et=U.output(et)),N!==null&&"output"in N&&typeof N.output=="funct\
ion"&&(et=N.output(et)),et},set(z){let{CAM:O,CSYS:U}=this.space,N=U[s],
et=O!==void 0?O[l]:null;et!==null&&"input"in et&&typeof et.input==
"function"&&(z=et.input(z)),"input"in N&&typeof N.input=="functio\
n"&&(z=N.input(z)),typeof z=="string"&&(z=parseFloat(z)),x[s]=z}}})(
_,n[_],i);let m={buffer:{value:i.buffer},colorspace:{enumerable:!0,
value:t.ident},equals:{value:E(function(_,l=1e-12){let[s,x,z]=this.
position,[O,U,N]=_.position;return this.colorspace===_.colorspace&&
Math.abs(s-O)<=l*Math.max(1,Math.abs(s),Math.abs(O))&&Math.abs(x-
U)<=l*Math.max(1,Math.abs(x),Math.abs(U))&&Math.abs(z-N)<=l*Math.
max(1,Math.abs(z),Math.abs(N))},"value")},space:{value:t},wcs:{value:t.
CAM??t.CSYS}};return Object.create(null,{...p,...m,[Symbol.iterator]:{
value:E(function*(){yield this[0],yield this[1],yield this[2]},"v\
alue")},[Symbol.toStringTag]:{get(){return`PointInSpace(${this.toString()}\
)`}},toString:{value:E(function(){return`${this.colorspace};[${this.
values().toArray().toString()}]`},"value")},length:{value:e},entries:{
value:E(function(){let _=this.space.CAM??this.space.CSYS;return Iterator.
from([[_[0],this[0]],[_[1],this[1]],[_[2],this[2]]])},"value")},values:{
value:E(function(){return Iterator.from(this)},"value")}}).set(r)}
o(a,"$");E(a,"initPointInSpace");var kr=Object.defineProperty,T=o((t,r)=>kr(t,"name",{value:r,configurable:!0}),
"t"),vr=T(t=>typeof t=="string","isString"),Ro=T(t=>yo(t)&&Symbol.
iterator in t&&typeof t[Symbol.iterator]=="function","isIterableO\
bject"),yo=T(t=>t!==null&&typeof t=="object","isObject"),Mr=T(t=>vr(
t)&&Cr.has(t),"isSpaceID"),Yr=T(t=>yo(t)&&"ident"in t&&Mr(t.ident)&&
"CSYS"in t&&yo(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===3,"isC\
olorSpace"),Cr=new Set(["a98-rgb","display-p3","hsl","hwb","lab",
"lch","oklab","oklch","prophoto-rgb","rec2020","srgb-linear","srg\
b","rgb","xyz","xyz-d50","xyz-d65"]),Ir=T(t=>Ro(t)&&Iterator.from(
t).every(r=>typeof r=="number")&&"length"in t&&t.length===3&&"spa\
ce"in t&&Yr(t.space),"isPointInSpace"),Ar=T((t,r=12)=>{let e=r?10**
r:1;return Math.sign(t)*Math.round((Math.abs(t)+Number.EPSILON)*e)/
e},"round");function c(t,r=0,e=0){let i=Ir(t)?new Float64Array(t.
buffer):Float64Array.of(t,r,e),{length:n}=i,p={each:{value:T(function(l){
for(let s=0;s<this.length;s++)l(this[s],s,this);return this},"val\
ue")},multiply:{value:T(function(l){if(Ro(l)){let[s,x,z,O,U,N,et,
ar,_r]=l,[no,po,ao]=this.head;return this.update(no*s+po*O+ao*et,
no*x+po*U+ao*ar,no*z+po*N+ao*_r)}else throw new TypeError("Unsupp\
orted Multiplicator: "+l)},"multiply")},update:{value:T(function(l,s,x){
let[z,O,U]=(Array.isArray(l)?l.slice(3):Array.of(l,s,x)).filter(N=>typeof N==
"number");return this.head=Array.of(z??this[0],O??this[1],U??this[2]),
this},"value")}},m={base:{get:T(()=>Iterator.from([0,0,0]),"get")},
head:{enumerable:!0,get:T(()=>Iterator.from(i),"get"),set:T(l=>i.
set(l),"set")},magnitude:{enumerable:!0,get(){return Ar(Math.hypot(
...this.head))}}},_={[Symbol.iterator]:{value:T(function*(){for(let l of this.
head)yield l},"value")},length:{enumerable:!0,value:n}};for(let l=0;l<
n;l++)(s=>{_[s]={enumerable:!0,get:T(()=>i[s],"get"),set:T(x=>{if(typeof x==
"number")i[l]=x;else throw new TypeError("Expected Number")},"set")}})(
l);return Object.create(null,Object.assign({},p,m,_))}o(c,"X");T(
c,"makeVectorQuantity");var Eo=Float64Array.of(608311/1250200,35783/156275,0,189793/714400,
247089/357200,32229/714400,198249/1000160,198249/2500400,5220557/
5000800),F=o(t=>{if(f(t)&&t.colorspace==="display-p3"){let[r,e,i]=t.
position,[n,p,m]=c(r,e,i).each((_,l,s)=>s[l]=J(_)).multiply(Eo);return a(
W,[n,p,m])}else throw new Error("Wrong parameter passed: "+t)},"d\
isplay_p3_into_xyz_d65"),Lo=o(t=>{if(f(t)&&t.colorspace==="displa\
y-p3"){let[r,e,i]=t.position,[n,p,m]=c(r,e,i).each((_,l,s)=>s[l]=
J(_)).multiply(Eo).multiply(g.d65.d50);return a(B,[n,p,m])}else throw new Error(
"Wrong parameter passed: "+t)},"display_p3_into_xyz_d50");var Do=Float64Array.of(1829569/896150,-851781/878810,16779/1248040,
-506331/896150,1648619/878810,-147721/1248040,-308931/896150,36519/
878810,1266979/1248040),X=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){
let[r,e,i]=t.position,[n,p,m]=c(r,e,i).multiply(Do).each((_,l,s)=>s[l]=
Wt(_)*100);return a(At,[n,p,m])}else throw new Error("Wrong param\
eter passed: "+t)},"xyz_d65_into_a98_rgb"),Un=o(t=>{if(f(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,p,m]=c(r,e,i).multiply(g.d50.
d65).multiply(Do).each((_,l,s)=>s[l]=Wt(_)*100);return a(At,[n,p,
m])}else throw new Error("Wrong parameter passed: "+t)},"xyz_d50_\
into_a98_rgb");var tp=o(t=>X(F(t)),"display_p3_into_a98_rgb");var No=Float64Array.of(573536/994567,591459/1989134,53769/1989134,
263643/1420810,6239551/9945670,351524/4972835,187206/994567,374412/
4972835,4929758/4972835),G=o(t=>{if(f(t)&&t.colorspace==="a98-rgb"){
let[r,e,i]=t.position,[n,p,m]=c(r,e,i).each((_,l,s)=>s[l]=Ot(_)).
multiply(No);return a(W,[n,p,m])}else throw new Error("Wrong para\
meter passed: "+t)},"a98_rgb_into_xyz_d65"),Ho=o(t=>{if(f(t)&&t.colorspace===
"a98-rgb"){let[r,e,i]=t.position,[n,p,m]=c(r,e,i).each((_,l,s)=>s[l]=
Ot(_)).multiply(No).multiply(g.d65.d50);return a(B,[n,p,m])}else throw new Error(
"Wrong parameter passed: "+t)},"a98_rgb_into_xyz_d50");var Rt=Float64Array.of(12831/3959,-851781/878810,705/12673,-329/214,
1648619/878810,-2585/12673,-1974/3959,36519/878810,705/667),L=o(t=>{
if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,[n,p,m]=c(
r,e,i).multiply(Rt).each((_,l,s)=>s[l]=q(_)*100);return a(H,[n,p,
m])}else throw new Error("Wrong parameter passed: "+t)},"xyz_d65_\
into_srgb"),it=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.
position,[n,p,m]=c(r,e,i).multiply(Rt).each((_,l,s)=>s[l]*=100);return a(
gt,[n,p,m])}else throw new Error("Wrong parameter passed: "+t)},"\
xyz_d65_into_srgb_linear"),dt=o(t=>{if(f(t)&&t.colorspace==="xyz-\
d50"){let[r,e,i]=t.position,[n,p,m]=c(r,e,i).multiply(g.d50.d65).
multiply(Rt).each((_,l,s)=>s[l]=q(_)*100);return a(H,[n,p,m])}else
throw new Error("Wrong parameter passed: "+t)},"xyz_d50_into_srgb"),
Et=o(t=>{if(f(t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.position,
[n,p,m]=c(r,e,i).multiply(g.d50.d65).multiply(Rt).each((_,l,s)=>s[l]*=
100);return a(gt,[n,p,m])}else throw new Error("Wrong parameter p\
assed: "+t)},"xyz_d50_into_srgb_linear");var Lt=o(t=>L(G(t)),"a98_rgb_into_srgb"),gp=o(t=>it(G(t)),"a98_rg\
b_into_srgb_linear");var Dt=o(t=>L(F(t)),"display_p3_into_srgb"),wp=o(t=>it(F(t)),"dis\
play_p3_into_srgb_linear");var ot=o((t,r,e)=>{let i=2*Math.PI,n=Math.PI/6;t<0&&(t+=i),t=t%i;
let p=o(m=>{let _=(m+t/n)%12,l=r*Math.min(e,1-e);return e-l*Math.
max(-1,Math.min(_-3,9-_,1))},"f");return[p(0),p(8),p(4)]},"hsl_to\
_rgb");var Wp=o(t=>{if(f(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=ot(e,r,i).map(p=>Math.min(Math.max(Math.round(p*255),0),255));return a(
Xo,n)}else throw new Error("Wrong parameter passed: "+t)},"hsl_in\
to_rgb"),Fo=o(t=>{if(f(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=ot(e,r,i).map(p=>p*100);return a(H,n)}else throw new Error("Wro\
ng parameter passed: "+t)},"hsl_into_srgb"),Bp=o(t=>{if(f(t)&&t.colorspace===
"hsl"){let[r,e,i]=t.position,n=ot(e,r,i).map(p=>J(p)*100);return a(
gt,n)}else throw new Error("Wrong parameter passed: "+t)},"hsl_in\
to_srgb_linear");var ht=o((t,r,e)=>{if(r+e>=1){let i=r/(r+e);return[i,i,i]}else{let[
i,n,p]=ot(t,1,.5).map(m=>m*(1-r-e)+r);return[i,n,p]}},"hwb_to_rgb");var Hp=o(t=>{if(f(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
n=ht(e,r,i).map(p=>p*100);return a(H,n)}else throw new Error("Wro\
ng parameter passed: "+t)},"hwb_into_srgb"),Fp=o(t=>{if(f(t)&&t.colorspace===
"hwb"){let[r,e,i]=t.position,n=ht(e,r,i).map(p=>J(p)*100);return a(
gt,n)}else throw new Error("Wrong parameter passed: "+t)},"hwb_in\
to_srgb_linear");var M=o(t=>{if(f(t)&&t.colorspace==="lab"){let r=903.2962962962963,
e=216/24389,[i,n,p]=t,m=(i+16)/116,_=n/500+m,l=Math.pow(_,3),s=m-
p/200,x=Math.pow(s,3),z=(l>e?l:(116*_-16)/r)*R[0],O=(i>r*e?Math.pow(
(i+16)/116,3):i/r)*R[1],U=(x>e?x:(116*s-16)/r)*R[2];return a(B,[z,
O,U])}else throw new Error("Wrong parameter passed: "+t)},"lab_in\
to_xyz_d50"),kt=o(t=>{let r=M(t),[e,i,n]=c(r).multiply(g.d50.d65);
return a(W,[e,i,n])},"lab_into_xyz_d65");var Nt=o(t=>dt(M(t)),"lab_into_srgb"),ea=o(t=>Et(M(t)),"lab_into_\
srgb_linear");var D=o(t=>{if(f(t)&&t.colorspace==="lch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=e*Math.cos(i),p=e*Math.sin(i);return a(
jt,[r,n,p])}else throw new Error("Wrong parameter passed: "+t)},"\
lch_into_lab");var Ht=o(t=>dt(M(D(t))),"lch_into_srgb"),ca=o(t=>Et(M(D(t))),"lch\
_into_srgb_linear");var Go=Float64Array.of(1,1,1,.3963377773761749,-.1055613458156586,
-.0894841775298119,.2158037573099136,-.0638541728258133,-1.2914855480194092),
vt=Float64Array.of(.819022437996703,.0329836539323885,.0481771893596242,
.3619062600528904,.9292868615863434,.2642395317527308,-.1288737815209879,
.0361446663506424,.6335478284694309),Mt=Float64Array.of(.210454268309314,
1.9779985324311684,.0259040424655478,.7936177747023054,-2.42859224204858,
.7827717124575296,-.0040720430116193,.450593709617411,-.8086757549230774),
$o=Float64Array.of(1.2268798758459243,-.0405757452148008,-.0763729366746601,
-.5578149944602171,1.112286803280317,-.4214933324022432,.2813910456659647,
-.0717110580655164,1.5869240198367816);var u=o(t=>{if(f(t)&&t.colorspace==="oklab"){let[r,e,i]=t.position,
[n,p,m]=c(i,r,e).multiply(Go).each((_,l,s)=>s[l]=_**3).multiply($o);
return a(W,[n,p,m])}else throw new Error("Wrong parameter passed:\
 "+t)},"oklab_into_xyz_d65"),Ft=o(t=>{let[r,e,i]=c(u(t)).multiply(
g.d65.d50);return a(B,[r,e,i])},"oklab_into_xyz_d50");var Gt=o(t=>L(u(t)),"oklab_into_srgb"),va=o(t=>it(u(t)),"oklab_in\
to_srgb_linear");var Q=o(t=>{if(f(t)&&t.colorspace==="oklch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=isNaN(i)?0:e*Math.cos(i),p=isNaN(i)?0:
e*Math.sin(i);return a(Ct,[r,n,p])}else throw new Error("Wrong pa\
rameter passed: "+t)},"oklch_into_oklab");var $t=o(t=>L(u(Q(t))),"oklch_into_srgb"),Xa=o(t=>it(u(Q(t))),"ok\
lch_into_srgb_linear");var Vt=o(t=>{let r=Math.abs(t);return r<=.03125?t/16:Math.sign(t)*
Math.pow(r,1.8)},"to_linear"),Bt=o(t=>{let r=Math.abs(t);return r>=
1/512?Math.sign(t)*Math.pow(r,1/1.8):16*t},"to_gamut");var Or=Float64Array.of(.7977666449006423,.2880748288194013,0,.13518129740053308,
.711835234241873,0,.0313477341283922,8993693872564e-17,.8251046025104602),
Tt=o(t=>{if(f(t)&&t.colorspace==="prophoto-rgb"){let r=a(B,t.position.
toArray());return c(r).each((e,i,n)=>n[i]=Vt(e)).multiply(Or),r}else
throw new Error("Wrong parameter passed: "+t)},"prophoto_rgb_into\
_xyz_d50"),rt=o(t=>{let r=Tt(t),e=a(W,r.position.toArray());return c(
e).multiply(g.d50.d65),e},"prophoto_rgb_into_xyz_d65");var Ut=o(t=>L(rt(t)),"prophoto_rgb_into_srgb"),Ka=o(t=>it(rt(t)),
"prophoto_rgb_into_srgb_linear");var Kt=1.09929682680944,Vo=.018053968510807,Xt=o(t=>{let r=Math.abs(
t);return r<Vo*4.5?t/4.5:Math.sign(t)*Math.pow((r+Kt-1)/Kt,1/.45)},
"to_linear"),Zt=o(t=>{let r=Math.abs(t);return r>Vo?Math.sign(t)*
(Kt*Math.pow(r,.45)-(Kt-1)):4.5*t},"to_gamut");var Uo=Float64Array.of(63426534/99577255,26158966/99577255,4994106574466076e-32,
20160776/139408157,472592308/697040785,19567812/697040785,47086771/
278816314,8267143/139408157,295819943/278816314),$=o(t=>{if(f(t)&&
t.colorspace==="rec2020"){let[r,e,i]=t.position,[n,p,m]=c(r,e,i).
each((_,l,s)=>s[l]=Xt(_)).multiply(Uo);return a(W,[n,p,m])}else throw new Error(
"Wrong parameter passed: "+t)},"rec2020_into_xyz_d65"),Ko=o(t=>{if(f(
t)&&t.colorspace==="rec2020"){let[r,e,i]=t.position,[n,p,m]=c(r,e,
i).each((_,l,s)=>s[l]=Xt(_)).multiply(Uo).multiply(g.d65.d50);return a(
B,[n,p,m])}else throw new Error("Wrong parameter passed: "+t)},"r\
ec2020_into_xyz_d50");var Jt=o(t=>L($(t)),"rec2020_into_srgb"),l_=o(t=>it($(t)),"rec202\
0_into_srgb_linear");var x_=o(t=>t.position.map(q),"gam_srgb"),b_=o(t=>t.position.map(
J),"lin_srgb");var qt=Float64Array.of(506752/1228815,87098/409605,7918/409605,87881/
245763,175762/245763,87881/737289,12673/70218,12673/175545,1001167/
1053270),A=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.colorspace)){
let[r,e,i]=t.position,[n,p,m]=c(r,e,i).each((_,l,s)=>s[l]=J(_)).multiply(
qt);return a(W,[n,p,m])}else throw new Error("Wrong parameter pas\
sed: "+t)},"srgb_into_xyz_d65"),tt=o(t=>{if(f(t)&&t.colorspace===
"srgb-linear"){let[r,e,i]=t.position,[n,p,m]=c(r,e,i).multiply(qt);
return a(W,[n,p,m])}else throw new Error("Wrong parameter passed:\
 "+t)},"srgb_linear_into_xyz_d65"),Yt=o(t=>{if(f(t)&&["rgb","srgb"].
includes(t.colorspace)){let[r,e,i]=t.position,[n,p,m]=c(r,e,i).each(
(_,l,s)=>s[l]=J(_)).multiply(qt).multiply(g.d65.d50);return a(B,[
n,p,m])}else throw new Error("Wrong parameter passed: "+t)},"srgb\
_into_xyz_d50"),Jo=o(t=>{if(f(t)&&t.colorspace==="srgb-linear"){let[
r,e,i]=t.position,[n,p,m]=c(r,e,i).multiply(qt).multiply(g.d65.d50);
return a(B,[n,p,m])}else throw new Error("Wrong parameter passed:\
 "+t)},"srgb_linear_into_xyz_d50");var Qt=o(t=>X(A(t)),"srgb_into_a98_rgb"),j_=o(t=>X(tt(t)),"srgb_l\
inear_into_a98_rgb");var N_=o(t=>Qt(Fo(t)),"hsl_into_a98_rgb");var K_=o(t=>{if(f(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position;
if(r+i>=1){let n=r/(r+i);return a(At,[n,n,n])}else{let n=ot(e,1,.5).
map(p=>(p*(1-r-i)+r)*100);return Qt(a(H,n))}}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_a98_rgb");var om=o(t=>X(kt(t)),"lab_into_a98_rgb");var am=o(t=>X(kt(D(t))),"lch_into_a98_rgb");var fm=o(t=>X(u(t)),"oklab_into_a98_rgb");var qo=o(t=>Ft(Q(t)),"oklch_into_xyz_d50"),Qo=o(t=>u(Q(t)),"oklch\
_into_xyz_d65");var zm=o(t=>X(Qo(t)),"oklch_into_a98_rgb");var vm=o(t=>X(rt(t)),"prophoto_rgb_into_a98_rgb");var Am=o(t=>X($(t)),"rec2020_into_a98_rgb");var Tm=o(t=>t.position.map(Wt),"gam_a98"),Xm=o(t=>t.position.map(
Ot),"lin_a98");var tr=Float64Array.of(446124/178915,-14852/17905,11844/330415,-333277/
357830,63121/35810,-50337/660830,-72051/178915,423/17905,316169/330415),
Z=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,p,m]=c(r,e,i).multiply(tr).each((_,l,s)=>s[l]=q(_)*100);return a(
co,[n,p,m])}else throw new Error("Wrong parameter passed: "+t)},"\
xyz_d65_into_display_p3"),to=o(t=>{if(f(t)&&t.colorspace==="xyz-d\
50"){let[r,e,i]=t.position,[n,p,m]=c(r,e,i).multiply(g.d50.d65).multiply(
tr).each((_,l,s)=>s[l]=q(_)*100);return a(co,[n,p,m])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_display_p3");var nl=o(t=>Z(G(t)),"a98_rgb_into_display_p3");var or=o(t=>{if(f(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=ot(e,r,i).map(m=>m*100),p=a(H,n);return Yt(p)}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_xyz_d50"),nt=o(t=>{if(f(
t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,n=ot(e,r,i).map(m=>m*
100),p=a(H,n);return A(p)}else throw new Error("Wrong parameter p\
assed: "+t)},"hsl_into_xyz_d65");var dl=o(t=>Z(nt(t)),"hsl_into_display_p3");var rr=o(t=>{if(f(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
n=ht(e,r,i).map(m=>m*100),p=a(H,n);return Yt(p)}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_xyz_d50"),pt=o(t=>{if(f(
t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,n=ht(e,r,i).map(m=>m*
100),p=a(H,n);return A(p)}else throw new Error("Wrong parameter p\
assed: "+t)},"hwb_into_xyz_d65");var Ml=o(t=>Z(pt(t)),"hwb_into_display_p3");var Ol=o(t=>to(M(t)),"lab_into_display_p3");var jl=o(t=>to(M(D(t))),"lch_into_display_p3");var Nl=o(t=>Z(u(t)),"oklab_into_display_p3");var Ul=o(t=>Z(u(Q(t))),"oklch_into_display_p3");var ts=o(t=>Z(rt(t)),"prophoto_rgb_into_display_p3");var ns=o(t=>Z($(t)),"rec2020_into_display_p3");var ls=o(t=>Z(A(t)),"srgb_into_display_p3"),ss=o(t=>Z(tt(t)),"srg\
b_linear_into_display_p3");var bs=o(t=>t.position.map(q),"gam_p3"),ds=o(t=>t.position.map(J),
"lin_p3");var Wr=o((t,r,e)=>"#"+Array.of(t,r,e).map(i=>i.toString(16).padStart(
2,"0")).join(""),"rgb_to_hex"),k=o((t,r,e)=>{let i=Math.max(t,r,e),
n=Math.min(t,r,e),p=i-n,m=go(t,r,e),_=0,l=(n+i)/2;return p!==0&&(_=
l===0||l===1?0:(i-l)/Math.min(l,1-l)),_<0&&(m+=Math.PI,_=Math.abs(
_)),_<=1e-5&&(m=NaN),[m*180/Math.PI,_*100,l*100]},"rgb_to_hsl"),go=o(
(t,r,e)=>{let i=Math.max(t,r,e),n=Math.min(t,r,e),p=NaN,m=i-n;if(m!==
0){switch(i){case t:p=(r-e)/m+(r<e?6:0);break;case r:p=(e-t)/m+2;
break;case e:p=(t-r)/m+4}p*=Math.PI/3}return p},"rgb_to_hue"),v=o(
(t,r,e)=>{let i=go(t,r,e),n=Math.min(t,Math.min(r,e)),p=1-Math.max(
t,Math.max(r,e));return[i*180/Math.PI,n*100,p*100]},"rgb_to_hwb");var Xs=o(t=>{let[r,e,i]=Lt(t).position;return a(P,k(r,e,i))},"a98\
_rgb_into_hsl");var Ns=o(t=>{let[r,e,i]=Dt(t).position;return a(P,k(r,e,i))},"dis\
play_p3_into_hsl");var Ks=o(t=>{if(f(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
[n,p,m]=ht(e,r,i),[_,l,s]=k(n,p,m);return a(P,[_,l,s])}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_hsl");var ef=o(t=>{let[r,e,i]=Nt(t).position;return a(P,k(r,e,i))},"lab\
_into_hsl");var sf=o(t=>{let[r,e,i]=Ht(t).position;return a(P,k(r,e,i))},"lch\
_into_hsl");var yf=o(t=>{let[r,e,i]=Gt(t).position;return a(P,k(r,e,i))},"okl\
ab_into_hsl");var kf=o(t=>{let[r,e,i]=$t(t).position;return a(P,k(r,e,i))},"okl\
ch_into_hsl");var Of=o(t=>{let[r,e,i]=Ut(t).position;return a(P,k(r,e,i))},"pro\
photo_rgb_into_hsl");var Rf=o(t=>{let[r,e,i]=Jt(t).position,[n,p,m]=k(r,e,i);return a(
P,[n,p,m])},"rec2020_into_hsl");var Gf=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.colorspace)){let[
r,e,i]=t.position,[n,p,m]=k(r,e,i);return a(P,[n,p,m])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_hsl"),$f=o(t=>{if(f(t)&&
t.colorspace==="srgb-linear"){let[r,e,i]=t.position.map(_=>q(_)),
[n,p,m]=k(r,e,i);return a(P,[n,p,m])}else throw new Error("Wrong \
parameter passed: "+t)},"srgb_linear_into_hsl");var t0=o(t=>{let[r,e,i]=dt(t).position;return a(P,k(r,e,i))},"xyz\
_d50_into_hsl"),o0=o(t=>{let[r,e,i]=L(t).position;return a(P,k(r,
e,i))},"xyz_d65_into_hsl");var u0=o(t=>{let[r,e,i]=Lt(t).position;return a(w,v(r,e,i))},"a98\
_rgb_into_hwb");var M0=o(t=>{let[r,e,i]=Dt(t).position;return a(w,v(r,e,i))},"dis\
play_p3_into_hwb");var B0=o(t=>{if(f(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
[n,p,m]=ot(e,r,i);return a(w,v(n,p,m))}else throw new Error("Wron\
g parameter passed: "+t)},"hsl_into_hwb");var L0=o(t=>{let[r,e,i]=Nt(t).position;return a(w,v(r,e,i))},"lab\
_into_hwb");var V0=o(t=>{let[r,e,i]=Ht(t).position;return a(w,v(r,e,i))},"lch\
_into_hwb");var oc=o(t=>{let[r,e,i]=Gt(t).position;return a(w,v(r,e,i))},"okl\
ab_into_hwb");var _c=o(t=>{let[r,e,i]=$t(t).position;return a(w,v(r,e,i))},"okl\
ch_into_hwb");var bc=o(t=>{let[r,e,i]=Ut(t).position;return a(w,v(r,e,i))},"pro\
photo_rgb_into_hwb");var Sc=o(t=>{let[r,e,i]=Jt(t).position;return a(w,v(r,e,i))},"rec\
2020_into_hwb");var Cc=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.colorspace)){let[
r,e,i]=t.position;return a(w,v(r,e,i))}else throw new Error("Wron\
g parameter passed: "+t)},"srgb_into_hwb"),Ic=o(t=>{if(f(t)&&t.colorspace===
"srgb-linear"){let[r,e,i]=t.position.map(n=>q(n));return a(w,v(r,
e,i))}else throw new Error("Wrong parameter passed: "+t)},"srgb_l\
inear_into_hwb");var Zc=o(t=>{let[r,e,i]=dt(t).position;return a(w,v(r,e,i))},"xyz\
_d50_into_hwb"),jc=o(t=>{let[r,e,i]=L(t).position;return a(w,v(r,
e,i))},"xyz_d65_into_hwb");var oo=o(t=>{if(f(t)&&t.colorspace==="xyz-d50"){let r=a(W,t.position.
toArray());return c(r).multiply(g.d50.d65),r}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_xyz_d65"),y=o(t=>{if(f(
t)&&t.colorspace==="xyz-d65"){let r=a(B,t.position.toArray());return c(
r).multiply(g.d65.d50),r}else throw new Error("Wrong parameter pa\
ssed: "+t)},"xyz_d65_into_xyz_d50");var er=o(t=>b(y(t)),"xyz_d65_into_lab"),b=o(t=>{if(f(t)&&t.colorspace===
"xyz-d50"){let r=.008856451679035631,e=29**3/3**3,[i,n,p]=t.position.
map((s,x)=>s/R[x]).map(s=>s>r?Math.cbrt(s):(e*s+16)/116),m=116*n-
16,_=500*(i-n),l=200*(n-p);return a(jt,[m,_,l])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_lab");var xx=o(t=>{let r=G(t),e=y(r);return b(e)},"a98_rgb_into_lab");var ux=o(t=>{let r=F(t),e=y(r);return b(e)},"display_p3_into_lab");var vx=o(t=>{let r=nt(t),e=y(r);return b(e)},"hsl_into_lab");var Ox=o(t=>{let r=pt(t),e=y(r);return b(e)},"hwb_into_lab");var jx=o(t=>{let r=u(t),e=y(r);return b(e)},"oklab_into_lab");var Fx=o(t=>{let r=Q(t),e=u(r),i=y(e);return b(i)},"oklch_into_la\
b");var Kx=o(t=>{let r=Tt(t);return b(r)},"prophoto_rgb_into_lab");var rb=o(t=>{let r=$(t),e=y(r);return b(e)},"rec2020_into_lab");var _b=o(t=>{let r=A(t),e=y(r);return b(e)},"srgb_into_lab"),mb=o(
t=>{let r=tt(t),e=y(r);return b(e)},"srgb_linear_into_lab");var Y=o(t=>{if(f(t)&&t.colorspace==="lab"){let[r,e,i]=t,n=Math.atan2(
i,e)*(180/Math.PI),p=Math.hypot(e,i);return a(Co,[r,p,n])}else throw new Error(
"Wrong parameter passed: "+t)},"lab_into_lch");var Ob=o(t=>{let r=G(t),e=y(r),i=b(e);return Y(i)},"a98_rgb_into_\
lch");var Rb=o(t=>{let r=F(t),e=y(r),i=b(e);return Y(i)},"display_p3_in\
to_lch");var Gb=o(t=>{let r=nt(t),e=y(r),i=b(e);return Y(i)},"hsl_into_lch");var Qb=o(t=>{let r=pt(t),e=y(r),i=b(e);return Y(i)},"hwb_into_lch");var pd=o(t=>{let r=u(t),e=y(r),i=b(e);return Y(i)},"oklab_into_lc\
h");var xd=o(t=>{let r=Q(t),e=u(r),i=y(e),n=b(i);return Y(n)},"oklch_\
into_lch");var ud=o(t=>{let r=Tt(t),e=b(r);return Y(e)},"prophoto_rgb_into_l\
ch");var Md=o(t=>{let r=$(t),e=y(r),i=b(e);return Y(i)},"rec2020_into_\
lch");var Bd=o(t=>{let r=A(t),e=y(r),i=b(e);return Y(i)},"srgb_into_lch"),
Td=o(t=>{let r=tt(t),e=y(r),i=b(e);return Y(i)},"srgb_linear_into\
_lch");var Ed=o(t=>Y(b(t)),"xyz_d50_into_lch"),Ld=o(t=>Y(er(t)),"xyz_d65\
_into_lch");var I=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,p,m]=c(r,e,i).multiply(vt).each((_,l,s)=>s[l]=Math.cbrt(_)).multiply(
Mt);return a(Ct,[n*100,p,m])}else throw new Error("Wrong paramete\
r passed: "+t)},"xyz_d65_into_oklab"),ah=o(t=>{if(f(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,p,m]=c(r,e,i).multiply(g.d50.
d65).multiply(vt).each((_,l,s)=>s[l]=Math.cbrt(_)).multiply(Mt);return a(
Ct,[n*100,p,m])}else throw new Error("Wrong parameter passed: "+t)},
"xyz_d50_into_oklab");var fh=o(t=>I(G(t)),"a98_rgb_into_oklab");var hh=o(t=>I(F(t)),"display_p3_into_oklab");var Sh=o(t=>{let r=nt(t);return I(r)},"hsl_into_oklab");var Mh=o(t=>I(pt(t)),"hwb_into_oklab");var ro=o(t=>{let r=M(t),e=oo(r);return I(e)},"lab_into_oklab");var Rh=o(t=>{let r=D(t),e=M(r),i=oo(e);return I(i)},"lch_into_okl\
ab");var Hh=o(t=>I(rt(t)),"prophoto_rgb_into_oklab");var Uh=o(t=>I($(t)),"rec2020_into_oklab");var t5=o(t=>{let r=A(t);return I(r)},"srgb_into_oklab"),o5=o(t=>{
let r=tt(t);return I(r)},"srgb_linear_into_oklab");var V=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,p,m]=c(r,e,i).multiply(vt).each((x,z,O)=>O[z]=Math.cbrt(x)).multiply(
Mt),_=n*100,l=Math.hypot(p,m),s=l<.001?NaN:Math.atan2(m,p)*180/Math.
PI;return a(It,[_,l,s])}else throw new Error("Wrong parameter pas\
sed: "+t)},"xyz_d65_into_oklch"),z5=o(t=>{if(f(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position.toArray(),[n,p,m]=c(r,e,i).multiply(
g.d50.d65).multiply(vt).each((x,z,O)=>O[z]=Math.cbrt(x)).multiply(
Mt),_=n*100,l=Math.hypot(p,m),s=l<.001?NaN:Math.atan2(m,p)*180/Math.
PI;return a(It,[_,l,s])}else throw new Error("Wrong parameter pas\
sed: "+t)},"xyz_d50_into_oklch");var v5=o(t=>{let r=G(t);return V(r)},"a98_rgb_into_oklch");var A5=o(t=>{let r=F(t);return V(r)},"display_p3_into_oklch");var X5=o(t=>{let r=nt(t);return V(r)},"hsl_into_oklch");var L5=o(t=>{let r=pt(t);return V(r)},"hwb_into_oklch");var eo=o(t=>{if(f(t)&&t.colorspace==="oklab"){let[r,e,i]=t,n=Math.
hypot(e,i),p=n<.001?NaN:Math.atan2(i,e)*180/Math.PI;return a(It,[
r,n,p])}else throw new Error("Wrong parameter passed: "+t)},"okla\
b_into_oklch");var K5=o(t=>eo(ro(t)),"lab_into_oklch");var ry=o(t=>{let r=D(t),e=ro(r);return eo(e)},"lch_into_oklch");var ay=o(t=>{let r=rt(t);return V(r)},"prophoto_rgb_into_oklch");var fy=o(t=>{let r=$(t);return V(r)},"rec2020_into_oklch");var hy=o(t=>{let r=A(t);return V(r)},"srgb_into_oklch"),yy=o(t=>{
let r=tt(t);return V(r)},"srgb_linear_into_oklch");var ir=Float64Array.of(1.3457868816471583,-.5446307051249019,0,-.25557208737979464,
1.5082477428451468,0,-.05110186497554526,.02052744743642139,1.2119675456389452),
jy=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,p,m]=c(r,e,i).multiply(g.d65.d50).multiply(ir).each((_,l,s)=>s[l]=
Bt(_)*100);return a(xo,[n,p,m])}else throw new Error("Wrong param\
eter passed: "+t)},"xyz_d65_into_prophoto_rgb"),C=o(t=>{if(f(t)&&
t.colorspace==="xyz-d50"){let[r,e,i]=t.position,[n,p,m]=c(r,e,i).
multiply(ir).each((_,l,s)=>s[l]=Bt(_)*100);return a(xo,[n,p,m])}else
throw new Error("Wrong parameter passed: "+t)},"xyz_d50_into_prop\
hoto_rgb");var Ny=o(t=>C(Ho(t)),"a98_rgb_into_prophoto_rgb");var Vy=o(t=>C(Lo(t)),"display_p3_into_prophoto_rgb");var nr=o(t=>M(D(t)),"lch_into_xyz_d50"),Qy=o(t=>kt(D(t)),"lch_int\
o_xyz_d65");var hg=o(t=>C(or(t)),"hsl_into_prophoto_rgb");var Sg=o(t=>C(rr(t)),"hwb_into_prophoto_rgb");var Mg=o(t=>C(M(t)),"lab_into_prophoto_rgb");var Og=o(t=>C(nr(t)),"lch_into_prophoto_rgb");var Zg=o(t=>C(Ft(t)),"oklab_into_prophoto_rgb");var Dg=o(t=>C(qo(t)),"oklch_into_prophoto_rgb");var $g=o(t=>C(Ko(t)),"rec2020_into_prophoto_rgb");var qg=o(t=>C(Yt(t)),"srgb_into_prophoto_rgb"),Qg=o(t=>C(Jo(t)),"\
srgb_linear_into_prophoto_rgb");var eu=o(t=>t.position.map(Bt),"gam_prophoto"),iu=o(t=>t.position.
map(Vt),"lin_prophoto");var pr=Float64Array.of(30757411/17917100,-19765991/29648200,792561/
44930125,-6372589/17917100,47925759/29648200,-1921689/44930125,-4539589/
17917100,467509/29648200,42328811/44930125),j=o(t=>{if(f(t)&&t.colorspace===
"xyz-d65"){let[r,e,i]=t.position,[n,p,m]=c(r,e,i).multiply(pr).each(
(_,l,s)=>s[l]=Zt(_)*100);return a(bo,[n,p,m])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_rec2020"),io=o(t=>{if(f(
t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.position,[n,p,m]=c(r,e,
i).multiply(g.d50.d65).multiply(pr).each((_,l,s)=>s[l]=Zt(_)*100);
return a(bo,[n,p,m])}else throw new Error("Wrong parameter passed\
: "+t)},"xyz_d50_into_rec2020");var Mu=o(t=>j(G(t)),"a98_rgb_into_rec2020");var Ou=o(t=>j(F(t)),"display_p3_into_rec2020");var Zu=o(t=>j(nt(t)),"hsl_into_rec2020");var Du=o(t=>j(pt(t)),"hwb_into_rec2020");var $u=o(t=>io(M(t)),"lab_into_rec2020");var Qu=o(t=>io(M(D(t))),"lch_into_rec2020");var i1=o(t=>j(u(t)),"oklab_into_rec2020");var l1=o(t=>j(u(Q(t))),"oklch_into_rec2020");var b1=o(t=>j(rt(t)),"prophoto_rgb_into_rec2020");var u1=o(t=>j(A(t)),"srgb_into_rec2020"),z1=o(t=>j(tt(t)),"srgb_l\
inear_into_rec2020");var k1=o(t=>t.position.map(Zt),"gam_rec2020"),v1=o(t=>t.position.
map(Xt),"lin_rec2020");export{At as A98RGBSpace,co as DisplayP3Space,P as HSLSpace,w as HWBSpace,
jt as LABSpace,Co as LCHSpace,xo as ProPhotoRGBSpace,Xo as RGBModel,
bo as Rec2020Space,B as XYZD50Space,W as XYZD65Space,nl as a98_rgb_into_display_p3,
Xs as a98_rgb_into_hsl,u0 as a98_rgb_into_hwb,xx as a98_rgb_into_lab,
Ob as a98_rgb_into_lch,fh as a98_rgb_into_oklab,v5 as a98_rgb_into_oklch,
Ny as a98_rgb_into_prophoto_rgb,Mu as a98_rgb_into_rec2020,Lt as a98_rgb_into_rgb,
Lt as a98_rgb_into_srgb,gp as a98_rgb_into_srgb_linear,G as a98_rgb_into_xyz,
Ho as a98_rgb_into_xyz_d50,G as a98_rgb_into_xyz_d65,tp as display_p3_into_a98_rgb,
Ns as display_p3_into_hsl,M0 as display_p3_into_hwb,ux as display_p3_into_lab,
Rb as display_p3_into_lch,hh as display_p3_into_oklab,A5 as display_p3_into_oklch,
Vy as display_p3_into_prophoto_rgb,Ou as display_p3_into_rec2020,
Dt as display_p3_into_rgb,Dt as display_p3_into_srgb,wp as display_p3_into_srgb_linear,
F as display_p3_into_xyz,Lo as display_p3_into_xyz_d50,F as display_p3_into_xyz_d65,
Tm as gam_a98,bs as gam_p3,eu as gam_prophoto,k1 as gam_rec2020,x_ as gam_srgb,
N_ as hsl_into_a98_rgb,dl as hsl_into_display_p3,B0 as hsl_into_hwb,
vx as hsl_into_lab,Gb as hsl_into_lch,Sh as hsl_into_oklab,X5 as hsl_into_oklch,
hg as hsl_into_prophoto_rgb,Zu as hsl_into_rec2020,Wp as hsl_into_rgb,
Fo as hsl_into_srgb,Bp as hsl_into_srgb_linear,nt as hsl_into_xyz,
or as hsl_into_xyz_d50,nt as hsl_into_xyz_d65,K_ as hwb_into_a98_rgb,
Ml as hwb_into_display_p3,Ks as hwb_into_hsl,Ox as hwb_into_lab,Qb as hwb_into_lch,
Mh as hwb_into_oklab,L5 as hwb_into_oklch,Sg as hwb_into_prophoto_rgb,
Du as hwb_into_rec2020,Hp as hwb_into_rgb,Hp as hwb_into_srgb,Fp as hwb_into_srgb_linear,
pt as hwb_into_xyz,rr as hwb_into_xyz_d50,pt as hwb_into_xyz_d65,
a as initPointInSpace,f as isPointInSpace,om as lab_into_a98_rgb,
Ol as lab_into_display_p3,ef as lab_into_hsl,L0 as lab_into_hwb,Y as lab_into_lch,
ro as lab_into_oklab,K5 as lab_into_oklch,Mg as lab_into_prophoto_rgb,
$u as lab_into_rec2020,Nt as lab_into_rgb,Nt as lab_into_srgb,ea as lab_into_srgb_linear,
kt as lab_into_xyz,M as lab_into_xyz_d50,kt as lab_into_xyz_d65,am as lch_into_a98_rgb,
jl as lch_into_display_p3,sf as lch_into_hsl,V0 as lch_into_hwb,D as lch_into_lab,
Rh as lch_into_oklab,ry as lch_into_oklch,Og as lch_into_prophoto_rgb,
Qu as lch_into_rec2020,Ht as lch_into_rgb,Ht as lch_into_srgb,ca as lch_into_srgb_linear,
Qy as lch_into_xyz,nr as lch_into_xyz_d50,Qy as lch_into_xyz_d65,
Xm as lin_a98,ds as lin_p3,iu as lin_prophoto,v1 as lin_rec2020,b_ as lin_srgb,
Ct as okLABSpace,It as okLCHSpace,fm as oklab_into_a98_rgb,Nl as oklab_into_display_p3,
yf as oklab_into_hsl,oc as oklab_into_hwb,jx as oklab_into_lab,pd as oklab_into_lch,
eo as oklab_into_oklch,Zg as oklab_into_prophoto_rgb,i1 as oklab_into_rec2020,
Gt as oklab_into_rgb,Gt as oklab_into_srgb,va as oklab_into_srgb_linear,
u as oklab_into_xyz,Ft as oklab_into_xyz_d50,u as oklab_into_xyz_d65,
zm as oklch_into_a98_rgb,Ul as oklch_into_display_p3,kf as oklch_into_hsl,
_c as oklch_into_hwb,Fx as oklch_into_lab,xd as oklch_into_lch,Q as oklch_into_oklab,
Dg as oklch_into_prophoto_rgb,l1 as oklch_into_rec2020,$t as oklch_into_rgb,
$t as oklch_into_srgb,Xa as oklch_into_srgb_linear,Qo as oklch_into_xyz,
qo as oklch_into_xyz_d50,Qo as oklch_into_xyz_d65,vm as prophoto_rgb_into_a98_rgb,
ts as prophoto_rgb_into_display_p3,Of as prophoto_rgb_into_hsl,bc as prophoto_rgb_into_hwb,
Kx as prophoto_rgb_into_lab,ud as prophoto_rgb_into_lch,Hh as prophoto_rgb_into_oklab,
ay as prophoto_rgb_into_oklch,b1 as prophoto_rgb_into_rec2020,Ut as prophoto_rgb_into_rgb,
Ut as prophoto_rgb_into_srgb,Ka as prophoto_rgb_into_srgb_linear,
rt as prophoto_rgb_into_xyz,Tt as prophoto_rgb_into_xyz_d50,rt as prophoto_rgb_into_xyz_d65,
Am as rec2020_into_a98_rgb,ns as rec2020_into_display_p3,Rf as rec2020_into_hsl,
Sc as rec2020_into_hwb,rb as rec2020_into_lab,Md as rec2020_into_lch,
Uh as rec2020_into_oklab,fy as rec2020_into_oklch,$g as rec2020_into_prophoto_rgb,
Jt as rec2020_into_rgb,Jt as rec2020_into_srgb,l_ as rec2020_into_srgb_linear,
$ as rec2020_into_xyz,Ko as rec2020_into_xyz_d50,$ as rec2020_into_xyz_d65,
Qt as rgb_into_a98_rgb,ls as rgb_into_display_p3,Gf as rgb_into_hsl,
Cc as rgb_into_hwb,_b as rgb_into_lab,Bd as rgb_into_lch,t5 as rgb_into_oklab,
hy as rgb_into_oklch,qg as rgb_into_prophoto_rgb,u1 as rgb_into_rec2020,
A as rgb_into_xyz,Yt as rgb_into_xyz_d50,A as rgb_into_xyz_d65,Wr as rgb_to_hex,
go as rgb_to_hue,gt as sRGBLinearSpace,H as sRGBSpace,Qt as srgb_into_a98_rgb,
ls as srgb_into_display_p3,Gf as srgb_into_hsl,Cc as srgb_into_hwb,
_b as srgb_into_lab,Bd as srgb_into_lch,t5 as srgb_into_oklab,hy as srgb_into_oklch,
qg as srgb_into_prophoto_rgb,u1 as srgb_into_rec2020,A as srgb_into_xyz,
Yt as srgb_into_xyz_d50,A as srgb_into_xyz_d65,j_ as srgb_linear_into_a98_rgb,
ss as srgb_linear_into_display_p3,$f as srgb_linear_into_hsl,Ic as srgb_linear_into_hwb,
mb as srgb_linear_into_lab,Td as srgb_linear_into_lch,o5 as srgb_linear_into_oklab,
yy as srgb_linear_into_oklch,Qg as srgb_linear_into_prophoto_rgb,
z1 as srgb_linear_into_rec2020,tt as srgb_linear_into_xyz,Jo as srgb_linear_into_xyz_d50,
tt as srgb_linear_into_xyz_d65,Un as xyz_d50_into_a98_rgb,to as xyz_d50_into_display_p3,
t0 as xyz_d50_into_hsl,Zc as xyz_d50_into_hwb,b as xyz_d50_into_lab,
Ed as xyz_d50_into_lch,ah as xyz_d50_into_oklab,z5 as xyz_d50_into_oklch,
C as xyz_d50_into_prophoto_rgb,io as xyz_d50_into_rec2020,dt as xyz_d50_into_rgb,
dt as xyz_d50_into_srgb,Et as xyz_d50_into_srgb_linear,oo as xyz_d50_into_xyz_d65,
X as xyz_d65_into_a98_rgb,Z as xyz_d65_into_display_p3,o0 as xyz_d65_into_hsl,
jc as xyz_d65_into_hwb,er as xyz_d65_into_lab,Ld as xyz_d65_into_lch,
I as xyz_d65_into_oklab,V as xyz_d65_into_oklch,jy as xyz_d65_into_prophoto_rgb,
j as xyz_d65_into_rec2020,L as xyz_d65_into_rgb,L as xyz_d65_into_srgb,
it as xyz_d65_into_srgb_linear,y as xyz_d65_into_xyz_d50,X as xyz_into_a98_rgb,
Z as xyz_into_display_p3,o0 as xyz_into_hsl,jc as xyz_into_hwb,er as xyz_into_lab,
Ld as xyz_into_lch,I as xyz_into_oklab,V as xyz_into_oklch,jy as xyz_into_prophoto_rgb,
j as xyz_into_rec2020,L as xyz_into_rgb,L as xyz_into_srgb,it as xyz_into_srgb_linear};
