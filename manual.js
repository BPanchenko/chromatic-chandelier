var nr=Object.defineProperty;var o=(t,r)=>nr(t,"name",{value:r,configurable:!0});var pr=Object.defineProperty,lt=o((t,r)=>pr(t,"name",{value:r,configurable:!0}),
"r");function ao(...t){let[r,e]=t.length===1?Array.of(0,t[0]):Array.
of(Math.min(...t),Math.max(...t)),i=Object.create(null,{0:{value:r},
1:{value:e},[Symbol.iterator]:{value:lt(function*(){yield this[0],
yield this[1]},"value")},[Symbol.toStringTag]:{get(){return`Range\
{x \u2208 R; ${this[0]} \u22DC x \u22DC ${this[1]}}`}},avg:{enumerable:!0,
get(){return this[0]+this.value/2}},length:{value:2},value:{enumerable:!0,
get(){return this[1]-this[0]}},toString:{value:lt(function(){return this[0]+
","+this[1]},"value")}});return Object.defineProperties(i,{from:{
enumerable:!0,value:r},to:{enumerable:!0,value:e},allot:{value:lt(
function(n){return this.test(n)?n:n>this.from?(n-this.to)%this.value+
this.from:this.to-(this.from-n)%this.value},"allocateOuterValue")},
clamp:{value:lt(function(n){return this.test(n)?n:Math.max(Math.min(
n,this.to),this.from)},"restrictOuterValue")},test:{value:lt(function(n){
return this.from<=n&&n<=this.to},"value")}}),i}o(ao,"g");lt(ao,"i\
nitRange");function _o(t=[0,100],r=[0,1]){let[e,i]=r,[n,p]=t,[l,_]=[
i-e,p-n];function m(x){return typeof x=="string"&&(x=parseFloat(x)),
s.domain.test(x)===!1&&(x=x>i?(x-i)%l+e:i-(e-x)%l),_*(x-e)/l+n}o(
m,"c"),lt(m,"invert");function s(x){return typeof x=="string"&&(x=
parseFloat(x)),s.range.test(x)===!1&&(x=x>p?(x-p)%_+n:p-(n-x)%_),
l*(x-n)/_+e}return o(s,"l"),lt(s,"calculator"),Object.defineProperties(
s,{domain:{enumerable:!0,value:ao(e,i)},range:{enumerable:!0,value:ao(
n,p)},invert:{enumerable:!0,value:m}})}o(_o,"y");lt(_o,"initScale");var ar=Object.defineProperty,_r=o((t,r)=>ar(t,"name",{value:r,configurable:!0}),
"o"),mr=_r((t,r=12)=>{let e=r>0?10**r:1;return Math.sign(t)*Math.
round((Math.abs(t)+Number.EPSILON)*e)/e},"round"),d=mr;var mo=_o([0,360],[-Math.PI,Math.PI]),ut=Object.freeze({bytes:8,domain:mo.
domain,ident:"angle",input:o(t=>mo.domain.allot(d(t*Math.PI/180)),
"input"),output:o(t=>mo.range.allot(d(t*180/Math.PI)),"output"),short:"\
phi",tcoord:"polar",tgeom:"azimuth",precision:7,unit:"rad"});var lr=Object.defineProperty,zt=o((t,r)=>lr(t,"name",{value:r,configurable:!0}),
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
return this.from<=n&&n<=this.to},"value")}}),i}o(h,"l");zt(h,"ini\
tRange");var st=Object.freeze({$coord:ut,bytes:8,domain:h(0,360),ident:"hu\
e",short:"h",input:o(t=>st.domain.allot(t),"input"),output:o(t=>isNaN(
t)?NaN:t<1e-6?0:d(t,6),"output"),precision:3,unit:"deg"});var _t=Object.freeze({bytes:8,domain:h(0,1),ident:"applicate",short:"\
z",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line",precision:8});var mt=Object.freeze({$coord:_t,bytes:8,domain:h(0,100),ident:"li\
ghtness",input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"outpu\
t"),short:"L",precision:3,unit:"%"});var at=Object.freeze({bytes:8,domain:h(0,1),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray",precision:8});var go=Object.freeze({$coord:at,bytes:8,domain:h(0,100),ident:"sa\
turation",input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"outp\
ut"),short:"S",precision:3,unit:"%"});var sr=Object.defineProperty,St=o((t,r)=>sr(t,"name",{value:r,configurable:!0}),
"n"),fr=St(t=>t!==null&&typeof t=="object","isObject"),cr=St(t=>fr(
t)&&"ident"in t&&"short"in t&&"domain"in t,"isDimension");function v(t,r,e){
let i=Iterator.from(e===void 0?[t,r]:[t,r,e]),n=e===void 0?2:3;for(let _ of i.
take(n))if(cr(_)===!1)throw new TypeError("Passed wrong space dim\
ension: "+JSON.stringify(_,void 0,2));let p=i.take(n).filter(_=>_.
tgeom==="azimuth"||_.tgeom==="reference-ray").toArray().length===
2?n===3?"cylinder":"circle":n===3?"cube":"plane",l=Object.create(
null,{0:{enumerable:!0,value:t},1:{enumerable:!0,value:r},length:{
enumerable:!0,value:n},tgeom:{enumerable:!0,value:p},entries:{value:St(
function*(){yield[0,this[0]],yield[1,this[1]],this.length===3&&(yield[
2,this[2]])},"value")},toArray:{value:St(function(){return Array.
of(...this)},"value")},[Symbol.iterator]:{value:St(function*(){yield this[0],
yield this[1],this.length===3&&(yield this[2])},"value")}});return n===
3&&Object.defineProperty(l,2,{enumerable:!0,value:e}),_=>_===void 0?
l:Object.defineProperties(l,_)}o(v,"I");St(v,"defCSYS");var se=v(at,ut)({adapt:{enumerable:!0,value:lo}});function lo(t=0,r=NaN){return[t*Math.cos(r),t*Math.sin(r)]}o(lo,"\
calcCartesianCoordinates");var bt=v(at,ut,_t)({adapt:{value:xr}});function xr(t,r,e){return[
...lo(t,r),e]}o(xr,"calcCubeCoordinates");var E=Float64Array.of(.9642956764295677,1,.8251046025104602);Object.
defineProperty(E,"ident",{value:"d50"});Object.freeze(E.buffer);var J=Float64Array.
of(.3127/.329,1,(1-.3127-.329)/.329);Object.defineProperty(J,"ide\
nt",{value:"d65"});Object.freeze(J.buffer);var S={CAM:v(st,go,mt)(),CSYS:bt,ident:"hsl",whp:J};var uo=Object.freeze({$coord:_t,bytes:8,domain:h(0,100),ident:"bl\
ackness",input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"outpu\
t"),short:"B",precision:3,unit:"%"});var zo=Object.freeze({$coord:at,ident:"whiteness",bytes:8,domain:h(
0,100),input:o(t=>d(t/100),"input"),output:o(t=>d(t*100),"output"),
short:"W",precision:3,unit:"%"});var P={CAM:v(st,zo,uo)(),CSYS:bt,ident:"hwb",whp:J};var ft=Object.freeze({bytes:8,domain:h(-1,1),ident:"abscissa",short:"\
x",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line",precision:8});var So=Object.freeze({$coord:ft,bytes:8,domain:h(-125,125),ident:"\
green-red",input:o(t=>d(t/125),"input"),output:o(t=>d(t*125),"out\
put"),precision:2,short:"a"}),Po=Object.freeze({$coord:ft,bytes:8,
domain:h(-.4,.4),ident:"green-red",precision:6,short:"a"});var ct=Object.freeze({bytes:8,domain:h(-1,1),ident:"ordinate",short:"\
y",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line",precision:8});var wo=Object.freeze({$coord:ct,domain:h(-125,125),ident:"blue-ye\
llow",input:o(t=>d(t/125),"input"),output:o(t=>d(t*125),"output"),
precision:2,short:"b"}),ko=Object.freeze({$coord:ct,domain:h(-.4,
.4),ident:"blue-yellow",precision:6,short:"b"});var mi=v(ft,ct)({adapt:{value:so}});function so(t,r){let e=0,i=NaN;return(t!==0||r!==0)&&(e=Math.sqrt(
t**2+r**2),t!==0&&!r||r!==0&&!t?i=r/Math.abs(r)*(Math.PI/2):i=Math.
atan(r/t)),[e,i]}o(so,"calcPolarCoordinates");var xt=v(ft,ct,_t)({adapt:{value:br}});function br(t,r,e){return[
...so(t,r),e]}o(br,"calcCylindricalCoordinates");var Zt=Object.freeze({CAM:v(mt,So,wo)(),CSYS:xt,ident:"lab",whp:E});var vo=Object.freeze({$coord:at,bytes:8,domain:h(0,150),ident:"ch\
roma",input:o(t=>d(t/150),"input"),output:o(t=>d(t*150),"output"),
precision:4,short:"C"}),Mo=Object.freeze({$coord:at,bytes:8,domain:h(
0,.4),ident:"chroma",precision:6,short:"c"});var Yo=Object.freeze({CAM:v(mt,vo,st)(),CSYS:bt,ident:"lch",whp:E});var Yt=Object.freeze({CAM:v(mt,Po,ko)(),CSYS:xt,ident:"oklab",whp:J});var It={CAM:v(mt,Mo,st)(),CSYS:bt,ident:"oklch",whp:J};var Io=Object.freeze({$coord:_t,bytes:1,domain:h(0,255),ident:"bl\
ue",input:o(t=>d(t/255),"input"),output:o(t=>d(t*255,0)&255,"outp\
ut"),short:"B"});var Co=Object.freeze({$coord:ct,bytes:1,domain:h(0,255),ident:"gr\
een",input:o(t=>d(t/255),"input"),output:o(t=>d(t*255,0)&255,"out\
put"),short:"G"});var Ao=Object.freeze({$coord:ft,bytes:1,domain:h(0,255),ident:"re\
d",input:o(t=>d(t/255),"input"),output:o(t=>d(t*255,0)&255,"outpu\
t"),short:"R"});var yt=xt,fo=Object.freeze({ident:"prophoto-rgb",CSYS:yt,luminance:h(
160,640),whp:E}),Pt=J,Wo=Object.freeze({ident:"rgb",CAM:v(Ao,Co,Io)(),
CSYS:yt,whp:Pt}),H=Object.freeze({ident:"srgb",CSYS:yt,whp:Pt}),gt=Object.
freeze({ident:"srgb-linear",CSYS:yt,whp:Pt}),Ct=Object.freeze({ident:"\
a98-rgb",CSYS:yt,whp:Pt}),co=Object.freeze({ident:"display-p3",CSYS:yt,
whp:Pt}),xo=Object.freeze({ident:"rec2020",CSYS:yt,whp:Pt});var O=Object.freeze({ident:"xyz-d65",CSYS:xt,whp:J}),T=Object.freeze(
{ident:"xyz-d50",CSYS:xt,whp:E});var At=o(t=>Math.sign(t)*Math.pow(Math.abs(t),2.19921875),"to_lin\
ear"),Wt=o(t=>Math.sign(t)*Math.pow(Math.abs(t),256/563),"to_gamu\
t");var q=o(t=>{let r=Math.abs(t);return r<=.04045?t/12.92:Math.sign(
t)*d(Math.pow((r+.055)/1.055,2.4))},"to_linear"),Q=o(t=>{let r=Math.
abs(t);return r>.0031308?Math.sign(t)*d(1.055*Math.pow(r,1/2.4)-.055):
12.92*t},"to_gamut");var g={d65:{d50:Float64Array.of(1.0479297925449969,.02962780877005599,
-.009243040646204504,.022946870601609652,.9904344267538799,.015055191490298152,
-.05019226628920524,-.017073799063418826,.7518742814281371)},d50:{
d65:Float64Array.of(.955473421488075,-.0283697093338637,.012314014864481998,
-.02309845494876471,1.0099953980813041,-.020507649298898964,.06325924320057072,
.021041441191917323,1.330365926242124)}};var dr=Object.defineProperty,R=o((t,r)=>dr(t,"name",{value:r,configurable:!0}),
"n"),hr=R(t=>typeof t=="number","isNumber"),yr=R(t=>typeof t=="st\
ring","isString"),Oo=R(t=>bo(t)&&Symbol.iterator in t&&typeof t[Symbol.
iterator]=="function","isIterableObject"),bo=R(t=>t!==null&&typeof t==
"object","isObject"),gr=R(t=>yr(t)&&ur.has(t),"isSpaceID"),To=R(t=>bo(
t)&&"ident"in t&&gr(t.ident)&&"CSYS"in t&&bo(t.CSYS)&&"length"in t.
CSYS&&t.CSYS.length===3,"isColorSpace"),ur=new Set(["a98-rgb","di\
splay-p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb",
"rec2020","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz-d65"]),
f=R(t=>Oo(t)&&Iterator.from(t).every(r=>typeof r=="number")&&"len\
gth"in t&&t.length===3&&"space"in t&&To(t.space),"isPointInSpace");
function a(t,r){if(To(t)===!1)throw new TypeError("Point must be \
declared in a valid color space instead of "+JSON.stringify(t,void 0,
2));if((Oo(r)&&Iterator.from(r).every(_=>hr(_)))===!1)throw new TypeError(
"Point in space has valid coordinates. Wrong parameters: "+JSON.stringify(
r,void 0,2));let e=t.CSYS.length,i=new Float64Array(e),n=t.CAM===
void 0?Array.of(0,1,2):t.CAM.toArray().map(_=>t.CSYS.toArray().findIndex(
m=>_.$coord===m)),p={adapted:{get(){if(typeof this.space.CSYS.adapt==
"function"){let[_,m,s]=this.position;return Iterator.from(this.space.
CSYS.adapt(_,m,s))}else return this.position}},position:{get:R(()=>Object.
defineProperties(Iterator.from(i.values()),{colorspace:{enumerable:!0,
value:t.ident},length:{enumerable:!0,value:3}}),"get"),set:R(_=>i.
set(_),"set")},set:{value:R(function(_){let m=Array.from(_),s=Math.
min(m.length,3);for(let x=0;x<s;x++)this[x]=m[x];return this},"va\
lue")}};for(let _=0;_<e;_++)((m,s,x)=>{p[m]={enumerable:!0,get(){
let{CAM:z,CSYS:W}=this.space,K=W[s],N=z!==void 0?z[m]:null,et=x[s];
return"output"in K&&typeof K.output=="function"&&(et=K.output(et)),
N!==null&&"output"in N&&typeof N.output=="function"&&(et=N.output(
et)),et},set(z){let{CAM:W,CSYS:K}=this.space,N=K[s],et=W!==void 0?
W[m]:null;et!==null&&"input"in et&&typeof et.input=="function"&&(z=
et.input(z)),"input"in N&&typeof N.input=="function"&&(z=N.input(
z)),typeof z=="string"&&(z=parseFloat(z)),x[s]=z}}})(_,n[_],i);let l={
buffer:{value:i.buffer},colorspace:{enumerable:!0,value:t.ident},
equals:{value:R(function(_,m=1e-12){let[s,x,z]=this.position,[W,K,
N]=_.position;return this.colorspace===_.colorspace&&Math.abs(s-W)<=
m*Math.max(1,Math.abs(s),Math.abs(W))&&Math.abs(x-K)<=m*Math.max(
1,Math.abs(x),Math.abs(K))&&Math.abs(z-N)<=m*Math.max(1,Math.abs(
z),Math.abs(N))},"value")},space:{value:t},wcs:{value:t.CAM??t.CSYS}};
return Object.create(null,{...p,...l,[Symbol.iterator]:{value:R(function*(){
yield this[0],yield this[1],yield this[2]},"value")},[Symbol.toStringTag]:{
get(){return`PointInSpace(${this.toString()})`}},toString:{value:R(
function(){return`${this.colorspace};[${this.values().toArray().toString()}\
]`},"value")},length:{value:e},entries:{value:R(function(){let _=this.
space.CAM??this.space.CSYS;return Iterator.from([[_[0],this[0]],[
_[1],this[1]],[_[2],this[2]]])},"value")},values:{value:R(function(){
return Iterator.from(this)},"value")}}).set(r)}o(a,"$");R(a,"init\
PointInSpace");var zr=Object.defineProperty,B=o((t,r)=>zr(t,"name",{value:r,configurable:!0}),
"t"),Sr=B(t=>typeof t=="string","isString"),Bo=B(t=>ho(t)&&Symbol.
iterator in t&&typeof t[Symbol.iterator]=="function","isIterableO\
bject"),ho=B(t=>t!==null&&typeof t=="object","isObject"),Pr=B(t=>Sr(
t)&&kr.has(t),"isSpaceID"),wr=B(t=>ho(t)&&"ident"in t&&Pr(t.ident)&&
"CSYS"in t&&ho(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===3,"isC\
olorSpace"),kr=new Set(["a98-rgb","display-p3","hsl","hwb","lab",
"lch","oklab","oklch","prophoto-rgb","rec2020","srgb-linear","srg\
b","rgb","xyz","xyz-d50","xyz-d65"]),vr=B(t=>Bo(t)&&Iterator.from(
t).every(r=>typeof r=="number")&&"length"in t&&t.length===3&&"spa\
ce"in t&&wr(t.space),"isPointInSpace"),Mr=B((t,r=12)=>{let e=r>0?
10**r:1;return Math.sign(t)*Math.round((Math.abs(t)+Number.EPSILON)*
e)/e},"round");function c(t,r=0,e=0){let i=vr(t)?new Float64Array(
t.buffer):Float64Array.of(t,r,e),{length:n}=i,p={each:{value:B(function(m){
for(let s=0;s<this.length;s++)m(this[s],s,this);return this},"val\
ue")},multiply:{value:B(function(m){if(Bo(m)){let[s,x,z,W,K,N,et,
er,ir]=m,[io,no,po]=this.head;return this.update(io*s+no*W+po*et,
io*x+no*K+po*er,io*z+no*N+po*ir)}else throw new TypeError("Unsupp\
orted Multiplicator: "+m)},"multiply")},update:{value:B(function(m,s,x){
let[z,W,K]=(Array.isArray(m)?m.slice(3):Array.of(m,s,x)).filter(N=>typeof N==
"number");return this.head=Array.of(z??this[0],W??this[1],K??this[2]),
this},"value")}},l={base:{get:B(()=>Iterator.from([0,0,0]),"get")},
head:{enumerable:!0,get:B(()=>Iterator.from(i),"get"),set:B(m=>i.
set(m),"set")},magnitude:{enumerable:!0,get(){return Mr(Math.hypot(
...this.head))}}},_={[Symbol.iterator]:{value:B(function*(){for(let m of this.
head)yield m},"value")},length:{enumerable:!0,value:n}};for(let m=0;m<
n;m++)(s=>{_[s]={enumerable:!0,get:B(()=>i[s],"get"),set:B(x=>{if(typeof x==
"number")i[m]=x;else throw new TypeError("Expected Number")},"set")}})(
m);return Object.create(null,Object.assign({},p,l,_))}o(c,"X");B(
c,"makeVectorQuantity");var Xo=Float64Array.of(608311/1250200,35783/156275,0,189793/714400,
247089/357200,32229/714400,198249/1000160,198249/2500400,5220557/
5000800),F=o(t=>{if(f(t)&&t.colorspace==="display-p3"){let[r,e,i]=t.
position,[n,p,l]=c(r,e,i).each((_,m,s)=>s[m]=q(_)).multiply(Xo);return a(
O,[n,p,l])}else throw new Error("Wrong parameter passed: "+t)},"d\
isplay_p3_into_xyz_d65"),Zo=o(t=>{if(f(t)&&t.colorspace==="displa\
y-p3"){let[r,e,i]=t.position,[n,p,l]=c(r,e,i).each((_,m,s)=>s[m]=
q(_)).multiply(Xo).multiply(g.d65.d50);return a(T,[n,p,l])}else throw new Error(
"Wrong parameter passed: "+t)},"display_p3_into_xyz_d50");var jo=Float64Array.of(1829569/896150,-851781/878810,16779/1248040,
-506331/896150,1648619/878810,-147721/1248040,-308931/896150,36519/
878810,1266979/1248040),X=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){
let[r,e,i]=t.position,[n,p,l]=c(r,e,i).multiply(jo).each((_,m,s)=>s[m]=
Wt(_));return a(Ct,[n,p,l])}else throw new Error("Wrong parameter\
 passed: "+t)},"xyz_d65_into_a98_rgb"),$n=o(t=>{if(f(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,p,l]=c(r,e,i).multiply(g.d50.
d65).multiply(jo).each((_,m,s)=>s[m]=Wt(_));return a(Ct,[n,p,l])}else
throw new Error("Wrong parameter passed: "+t)},"xyz_d50_into_a98_\
rgb");var Qn=o(t=>X(F(t)),"display_p3_into_a98_rgb");var Eo=Float64Array.of(573536/994567,591459/1989134,53769/1989134,
263643/1420810,6239551/9945670,351524/4972835,187206/994567,374412/
4972835,4929758/4972835),G=o(t=>{if(f(t)&&t.colorspace==="a98-rgb"){
let[r,e,i]=t.position,[n,p,l]=c(r,e,i).each((_,m,s)=>s[m]=At(_)).
multiply(Eo);return a(O,[n,p,l])}else throw new Error("Wrong para\
meter passed: "+t)},"a98_rgb_into_xyz_d65"),Ro=o(t=>{if(f(t)&&t.colorspace===
"a98-rgb"){let[r,e,i]=t.position,[n,p,l]=c(r,e,i).each((_,m,s)=>s[m]=
At(_)).multiply(Eo).multiply(g.d65.d50);return a(T,[n,p,l])}else throw new Error(
"Wrong parameter passed: "+t)},"a98_rgb_into_xyz_d50");var jt=Float64Array.of(12831/3959,-851781/878810,705/12673,-329/214,
1648619/878810,-2585/12673,-1974/3959,36519/878810,705/667),L=o(t=>{
if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,[n,p,l]=c(
r,e,i).multiply(jt).each((_,m,s)=>s[m]=Q(_));return a(H,[n,p,l])}else
throw new Error("Wrong parameter passed: "+t)},"xyz_d65_into_srgb"),
it=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,p,l]=c(r,e,i).multiply(jt);return a(gt,[n,p,l])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_srgb_linear"),dt=o(t=>{
if(f(t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.position,[n,p,l]=c(
r,e,i).multiply(g.d50.d65).multiply(jt).each((_,m,s)=>s[m]=Q(_));
return a(H,[n,p,l])}else throw new Error("Wrong parameter passed:\
 "+t)},"xyz_d50_into_srgb"),Et=o(t=>{if(f(t)&&t.colorspace==="xyz\
-d50"){let[r,e,i]=t.position,[n,p,l]=c(r,e,i).multiply(g.d50.d65).
multiply(jt);return a(gt,[n,p,l])}else throw new Error("Wrong par\
ameter passed: "+t)},"xyz_d50_into_srgb_linear");var Rt=o(t=>L(G(t)),"a98_rgb_into_srgb"),hp=o(t=>it(G(t)),"a98_rg\
b_into_srgb_linear");var Lt=o(t=>L(F(t)),"display_p3_into_srgb"),Sp=o(t=>it(F(t)),"dis\
play_p3_into_srgb_linear");var ot=o((t,r,e)=>{let i=2*Math.PI,n=Math.PI/6;t<0&&(t+=i),t=t%i;
let p=o(l=>{let _=(l+t/n)%12,m=r*Math.min(e,1-e);return e-m*Math.
max(-1,Math.min(_-3,9-_,1))},"f");return[p(0),p(8),p(4)]},"hsl_to\
_rgb");var Ap=o(t=>{if(f(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=ot(e,r,i).map(p=>Math.min(Math.max(Math.round(p*255),0),255));return a(
Wo,n)}else throw new Error("Wrong parameter passed: "+t)},"hsl_in\
to_rgb"),Lo=o(t=>{if(f(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=ot(e,r,i);return a(H,n)}else throw new Error("Wrong parameter p\
assed: "+t)},"hsl_into_srgb"),Wp=o(t=>{if(f(t)&&t.colorspace==="h\
sl"){let[r,e,i]=t.position,n=ot(e,r,i).map(p=>q(p));return a(gt,n)}else
throw new Error("Wrong parameter passed: "+t)},"hsl_into_srgb_lin\
ear");var ht=o((t,r,e)=>{if(r+e>=1){let i=r/(r+e);return[i,i,i]}else{let[
i,n,p]=ot(t,1,.5).map(l=>l*(1-r-e)+r);return[i,n,p]}},"hwb_to_rgb");var Dp=o(t=>{if(f(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
n=ht(e,r,i);return a(H,n)}else throw new Error("Wrong parameter p\
assed: "+t)},"hwb_into_srgb"),Np=o(t=>{if(f(t)&&t.colorspace==="h\
wb"){let[r,e,i]=t.position,n=ht(e,r,i).map(p=>q(p));return a(gt,n)}else
throw new Error("Wrong parameter passed: "+t)},"hwb_into_srgb_lin\
ear");var M=o(t=>{if(f(t)&&t.colorspace==="lab"){let r=903.2962962962963,
e=216/24389,[i,n,p]=t,l=(i+16)/116,_=n/500+l,m=Math.pow(_,3),s=l-
p/200,x=Math.pow(s,3),z=(m>e?m:(116*_-16)/r)*E[0],W=(i>r*e?Math.pow(
(i+16)/116,3):i/r)*E[1],K=(x>e?x:(116*s-16)/r)*E[2];return a(T,[z,
W,K])}else throw new Error("Wrong parameter passed: "+t)},"lab_in\
to_xyz_d50"),wt=o(t=>{let r=M(t),[e,i,n]=c(r).multiply(g.d50.d65);
return a(O,[e,i,n])},"lab_into_xyz_d65");var Dt=o(t=>dt(M(t)),"lab_into_srgb"),oa=o(t=>Et(M(t)),"lab_into_\
srgb_linear");var D=o(t=>{if(f(t)&&t.colorspace==="lch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=e*Math.cos(i),p=e*Math.sin(i);return a(
Zt,[r,n,p])}else throw new Error("Wrong parameter passed: "+t)},"\
lch_into_lab");var Nt=o(t=>dt(M(D(t))),"lch_into_srgb"),sa=o(t=>Et(M(D(t))),"lch\
_into_srgb_linear");var Do=Float64Array.of(1,1,1,.3963377773761749,-.1055613458156586,
-.0894841775298119,.2158037573099136,-.0638541728258133,-1.2914855480194092),
kt=Float64Array.of(.819022437996703,.0329836539323885,.0481771893596242,
.3619062600528904,.9292868615863434,.2642395317527308,-.1288737815209879,
.0361446663506424,.6335478284694309),vt=Float64Array.of(.210454268309314,
1.9779985324311684,.0259040424655478,.7936177747023054,-2.42859224204858,
.7827717124575296,-.0040720430116193,.450593709617411,-.8086757549230774),
No=Float64Array.of(1.2268798758459243,-.0405757452148008,-.0763729366746601,
-.5578149944602171,1.112286803280317,-.4214933324022432,.2813910456659647,
-.0717110580655164,1.5869240198367816);var u=o(t=>{if(f(t)&&t.colorspace==="oklab"){let[r,e,i]=t.position,
[n,p,l]=c(i,r,e).multiply(Do).each((_,m,s)=>s[m]=_**3).multiply(No);
return a(O,[n,p,l])}else throw new Error("Wrong parameter passed:\
 "+t)},"oklab_into_xyz_d65"),Ht=o(t=>{let[r,e,i]=c(u(t)).multiply(
g.d65.d50);return a(T,[r,e,i])},"oklab_into_xyz_d50");var Ft=o(t=>L(u(t)),"oklab_into_srgb"),wa=o(t=>it(u(t)),"oklab_in\
to_srgb_linear");var U=o(t=>{if(f(t)&&t.colorspace==="oklch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=isNaN(i)?0:e*Math.cos(i),p=isNaN(i)?0:
e*Math.sin(i);return a(Yt,[r,n,p])}else throw new Error("Wrong pa\
rameter passed: "+t)},"oklch_into_oklab");var Gt=o(t=>L(u(U(t))),"oklch_into_srgb"),Ta=o(t=>it(u(U(t))),"ok\
lch_into_srgb_linear");var $t=o(t=>{let r=Math.abs(t);return r<=.03125?t/16:Math.sign(t)*
Math.pow(r,1.8)},"to_linear"),Ot=o(t=>{let r=Math.abs(t);return r>=
1/512?Math.sign(t)*Math.pow(r,1/1.8):16*t},"to_gamut");var Yr=Float64Array.of(.7977666449006423,.2880748288194013,0,.13518129740053308,
.711835234241873,0,.0313477341283922,8993693872564e-17,.8251046025104602),
Tt=o(t=>{if(f(t)&&t.colorspace==="prophoto-rgb"){let r=a(T,t.position.
toArray());return c(r).each((e,i,n)=>n[i]=$t(e)).multiply(Yr),r}else
throw new Error("Wrong parameter passed: "+t)},"prophoto_rgb_into\
_xyz_d50"),rt=o(t=>{let r=Tt(t),e=a(O,r.position.toArray());return c(
e).multiply(g.d50.d65),e},"prophoto_rgb_into_xyz_d65");var Vt=o(t=>L(rt(t)),"prophoto_rgb_into_srgb"),Va=o(t=>it(rt(t)),
"prophoto_rgb_into_srgb_linear");var Kt=1.09929682680944,Ho=.018053968510807,Bt=o(t=>{let r=Math.abs(
t);return r<Ho*4.5?t/4.5:Math.sign(t)*Math.pow((r+Kt-1)/Kt,1/.45)},
"to_linear"),Xt=o(t=>{let r=Math.abs(t);return r>Ho?Math.sign(t)*
(Kt*Math.pow(r,.45)-(Kt-1)):4.5*t},"to_gamut");var Fo=Float64Array.of(63426534/99577255,26158966/99577255,4994106574466076e-32,
20160776/139408157,472592308/697040785,19567812/697040785,47086771/
278816314,8267143/139408157,295819943/278816314),$=o(t=>{if(f(t)&&
t.colorspace==="rec2020"){let[r,e,i]=t.position,[n,p,l]=c(r,e,i).
each((_,m,s)=>s[m]=Bt(_)).multiply(Fo);return a(O,[n,p,l])}else throw new Error(
"Wrong parameter passed: "+t)},"rec2020_into_xyz_d65"),Go=o(t=>{if(f(
t)&&t.colorspace==="rec2020"){let[r,e,i]=t.position,[n,p,l]=c(r,e,
i).each((_,m,s)=>s[m]=Bt(_)).multiply(Fo).multiply(g.d65.d50);return a(
T,[n,p,l])}else throw new Error("Wrong parameter passed: "+t)},"r\
ec2020_into_xyz_d50");var Jt=o(t=>L($(t)),"rec2020_into_srgb"),__=o(t=>it($(t)),"rec202\
0_into_srgb_linear");var f_=o(t=>t.position.map(Q),"gam_srgb"),c_=o(t=>t.position.map(
q),"lin_srgb");var qt=Float64Array.of(506752/1228815,87098/409605,7918/409605,87881/
245763,175762/245763,87881/737289,12673/70218,12673/175545,1001167/
1053270),A=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.colorspace)){
let[r,e,i]=t.position,[n,p,l]=c(r,e,i).each((_,m,s)=>s[m]=q(_)).multiply(
qt);return a(O,[n,p,l])}else throw new Error("Wrong parameter pas\
sed: "+t)},"srgb_into_xyz_d65"),tt=o(t=>{if(f(t)&&t.colorspace===
"srgb-linear"){let[r,e,i]=t.position,[n,p,l]=c(r,e,i).multiply(qt);
return a(O,[n,p,l])}else throw new Error("Wrong parameter passed:\
 "+t)},"srgb_linear_into_xyz_d65"),Mt=o(t=>{if(f(t)&&["rgb","srgb"].
includes(t.colorspace)){let[r,e,i]=t.position,[n,p,l]=c(r,e,i).each(
(_,m,s)=>s[m]=q(_)).multiply(qt).multiply(g.d65.d50);return a(T,[
n,p,l])}else throw new Error("Wrong parameter passed: "+t)},"srgb\
_into_xyz_d50"),$o=o(t=>{if(f(t)&&t.colorspace==="srgb-linear"){let[
r,e,i]=t.position,[n,p,l]=c(r,e,i).multiply(qt).multiply(g.d65.d50);
return a(T,[n,p,l])}else throw new Error("Wrong parameter passed:\
 "+t)},"srgb_linear_into_xyz_d50");var Qt=o(t=>X(A(t)),"srgb_into_a98_rgb"),X_=o(t=>X(tt(t)),"srgb_l\
inear_into_a98_rgb");var L_=o(t=>Qt(Lo(t)),"hsl_into_a98_rgb");var V_=o(t=>{if(f(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position;
if(r+i>=1){let n=r/(r+i);return a(Ct,[n,n,n])}else{let n=ot(e,1,.5).
map(p=>p*(1-r-i)+r);return Qt(a(H,n))}}else throw new Error("Wron\
g parameter passed: "+t)},"hwb_into_a98_rgb");var U_=o(t=>X(wt(t)),"lab_into_a98_rgb");var nm=o(t=>X(wt(D(t))),"lch_into_a98_rgb");var lm=o(t=>X(u(t)),"oklab_into_a98_rgb");var Vo=o(t=>Ht(U(t)),"oklch_into_xyz_d50"),Ko=o(t=>u(U(t)),"oklch\
_into_xyz_d65");var gm=o(t=>X(Ko(t)),"oklch_into_a98_rgb");var wm=o(t=>X(rt(t)),"prophoto_rgb_into_a98_rgb");var Im=o(t=>X($(t)),"rec2020_into_a98_rgb");var Om=o(t=>t.position.map(Wt),"gam_a98"),Tm=o(t=>t.position.map(
At),"lin_a98");var Jo=Float64Array.of(446124/178915,-14852/17905,11844/330415,-333277/
357830,63121/35810,-50337/660830,-72051/178915,423/17905,316169/330415),
Z=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,p,l]=c(r,e,i).multiply(Jo).each((_,m,s)=>s[m]=Q(_));return a(co,
[n,p,l])}else throw new Error("Wrong parameter passed: "+t)},"xyz\
_d65_into_display_p3"),Ut=o(t=>{if(f(t)&&t.colorspace==="xyz-d50"){
let[r,e,i]=t.position,[n,p,l]=c(r,e,i).multiply(g.d50.d65).multiply(
Jo).each((_,m,s)=>s[m]=Q(_));return a(co,[n,p,l])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_display_p3");var el=o(t=>Z(G(t)),"a98_rgb_into_display_p3");var qo=o(t=>{if(f(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
n=ot(e,r,i),p=a(H,n);return Mt(p)}else throw new Error("Wrong par\
ameter passed: "+t)},"hsl_into_xyz_d50"),nt=o(t=>{if(f(t)&&t.colorspace===
"hsl"){let[r,e,i]=t.position,n=ot(e,r,i),p=a(H,n);return A(p)}else
throw new Error("Wrong parameter passed: "+t)},"hsl_into_xyz_d65");var xl=o(t=>Z(nt(t)),"hsl_into_display_p3");var Qo=o(t=>{if(f(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
n=ht(e,r,i),p=a(H,n);return Mt(p)}else throw new Error("Wrong par\
ameter passed: "+t)},"hwb_into_xyz_d50"),pt=o(t=>{if(f(t)&&t.colorspace===
"hwb"){let[r,e,i]=t.position,n=ht(e,r,i),p=a(H,n);return A(p)}else
throw new Error("Wrong parameter passed: "+t)},"hwb_into_xyz_d65");var kl=o(t=>Z(pt(t)),"hwb_into_display_p3");var Cl=o(t=>Ut(M(t)),"lab_into_display_p3");var Xl=o(t=>Ut(M(D(t))),"lch_into_display_p3");var Ll=o(t=>Z(u(t)),"oklab_into_display_p3");var $l=o(t=>Z(u(U(t))),"oklch_into_display_p3");var Ql=o(t=>Z(rt(t)),"prophoto_rgb_into_display_p3");var es=o(t=>Z($(t)),"rec2020_into_display_p3");var _s=o(t=>Z(A(t)),"srgb_into_display_p3"),ms=o(t=>Z(tt(t)),"srg\
b_linear_into_display_p3");var cs=o(t=>t.position.map(Q),"gam_p3"),xs=o(t=>t.position.map(q),
"lin_p3");var Ir=o((t,r,e)=>"#"+Array.of(t,r,e).map(i=>i.toString(16).padStart(
2,"0")).join(""),"rgb_to_hex"),w=o((t,r,e)=>{let i=Math.max(t,r,e),
n=Math.min(t,r,e),p=i-n,l=yo(t,r,e),_=0,m=(n+i)/2;return p!==0&&(_=
m===0||m===1?0:(i-m)/Math.min(m,1-m)),_<0&&(l+=Math.PI,_=Math.abs(
_)),_<=1e-5&&(l=NaN),[l*180/Math.PI,_*100,m*100]},"rgb_to_hsl"),yo=o(
(t,r,e)=>{let i=Math.max(t,r,e),n=Math.min(t,r,e),p=NaN,l=i-n;if(l!==
0){switch(i){case t:p=(r-e)/l+(r<e?6:0);break;case r:p=(e-t)/l+2;
break;case e:p=(t-r)/l+4}p*=Math.PI/3}return p},"rgb_to_hue"),k=o(
(t,r,e)=>{let i=yo(t,r,e),n=Math.min(t,Math.min(r,e)),p=1-Math.max(
t,Math.max(r,e));return[i*180/Math.PI,n*100,p*100]},"rgb_to_hwb");var Ts=o(t=>{let[r,e,i]=Rt(t).position;return a(S,w(r,e,i))},"a98\
_rgb_into_hsl");var Ls=o(t=>{let[r,e,i]=Lt(t).position;return a(S,w(r,e,i))},"dis\
play_p3_into_hsl");var Vs=o(t=>{if(f(t)&&t.colorspace==="hwb"){let[r,e,i]=t.position,
[n,p,l]=ht(e,r,i),[_,m,s]=w(n,p,l);return a(S,[_,m,s])}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_hsl");var of=o(t=>{let[r,e,i]=Dt(t).position;return a(S,w(r,e,i))},"lab\
_into_hsl");var mf=o(t=>{let[r,e,i]=Nt(t).position;return a(S,w(r,e,i))},"lch\
_into_hsl");var df=o(t=>{let[r,e,i]=Ft(t).position;return a(S,w(r,e,i))},"okl\
ab_into_hsl");var Pf=o(t=>{let[r,e,i]=Gt(t).position;return a(S,w(r,e,i))},"okl\
ch_into_hsl");var Cf=o(t=>{let[r,e,i]=Vt(t).position;return a(S,w(r,e,i))},"pro\
photo_rgb_into_hsl");var Zf=o(t=>{let[r,e,i]=Jt(t).position,[n,p,l]=w(r,e,i);return a(
S,[n,p,l])},"rec2020_into_hsl");var Hf=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.colorspace)){let[
r,e,i]=t.position,[n,p,l]=w(r,e,i);return a(S,[n,p,l])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_hsl"),Ff=o(t=>{if(f(t)&&
t.colorspace==="srgb-linear"){let[r,e,i]=t.position.map(_=>Q(_)),
[n,p,l]=w(r,e,i);return a(S,[n,p,l])}else throw new Error("Wrong \
parameter passed: "+t)},"srgb_linear_into_hsl");var Qf=o(t=>{let[r,e,i]=dt(t);return a(S,w(r,e,i))},"xyz_d50_into\
_hsl"),Uf=o(t=>{let[r,e,i]=L(t).position;return a(S,w(r,e,i))},"x\
yz_d65_into_hsl");var yc=o(t=>{let[r,e,i]=Rt(t).position;return a(P,k(r,e,i))},"a98\
_rgb_into_hwb");var kc=o(t=>{let[r,e,i]=Lt(t).position;return a(P,k(r,e,i))},"dis\
play_p3_into_hwb");var Wc=o(t=>{if(f(t)&&t.colorspace==="hsl"){let[r,e,i]=t.position,
[n,p,l]=ot(e,r,i);return a(P,k(n,p,l))}else throw new Error("Wron\
g parameter passed: "+t)},"hsl_into_hwb");var Ec=o(t=>{let[r,e,i]=Dt(t).position;return a(P,k(r,e,i))},"lab\
_into_hwb");var Gc=o(t=>{let[r,e,i]=Nt(t).position;return a(P,k(r,e,i))},"lch\
_into_hwb");var Uc=o(t=>{let[r,e,i]=Ft(t).position;return a(P,k(r,e,i))},"okl\
ab_into_hwb");var px=o(t=>{let[r,e,i]=Gt(t).position;return a(P,k(r,e,i))},"okl\
ch_into_hwb");var cx=o(t=>{let[r,e,i]=Vt(t).position;return a(P,k(r,e,i))},"pro\
photo_rgb_into_hwb");var ux=o(t=>{let[r,e,i]=Jt(t).position;return a(P,k(r,e,i))},"rec\
2020_into_hwb");var Mx=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.colorspace)){let[
r,e,i]=t.position;return a(P,k(r,e,i))}else throw new Error("Wron\
g parameter passed: "+t)},"srgb_into_hwb"),Yx=o(t=>{if(f(t)&&t.colorspace===
"srgb-linear"){let[r,e,i]=t.position.map(n=>Q(n));return a(P,k(r,
e,i))}else throw new Error("Wrong parameter passed: "+t)},"srgb_l\
inear_into_hwb");var Bx=o(t=>{let[r,e,i]=dt(t).position;return a(P,k(r,e,i))},"xyz\
_d50_into_hwb"),Xx=o(t=>{let[r,e,i]=L(t).position;return a(P,k(r,
e,i))},"xyz_d65_into_hwb");var to=o(t=>{if(f(t)&&t.colorspace==="xyz-d50"){let r=a(O,t.position.
toArray());return c(r).multiply(g.d50.d65),r}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_xyz_d65"),y=o(t=>{if(f(
t)&&t.colorspace==="xyz-d65"){let r=a(T,t.position.toArray());return c(
r).multiply(g.d65.d50),r}else throw new Error("Wrong parameter pa\
ssed: "+t)},"xyz_d65_into_xyz_d50");var Uo=o(t=>b(y(t)),"xyz_d65_into_lab"),b=o(t=>{if(f(t)&&t.colorspace===
"xyz-d50"){let r=.008856451679035631,e=29**3/3**3,[i,n,p]=t.position.
map((s,x)=>s/E[x]).map(s=>s>r?Math.cbrt(s):(e*s+16)/116),l=116*n-
16,_=500*(i-n),m=200*(n-p);return a(Zt,[l,_,m])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_lab");var f0=o(t=>{let r=G(t),e=y(r);return b(e)},"a98_rgb_into_lab");var y0=o(t=>{let r=F(t),e=y(r);return b(e)},"display_p3_into_lab");var w0=o(t=>{let r=nt(t),e=y(r);return b(e)},"hsl_into_lab");var C0=o(t=>{let r=pt(t),e=y(r);return b(e)},"hwb_into_lab");var X0=o(t=>{let r=u(t),e=y(r);return b(e)},"oklab_into_lab");var N0=o(t=>{let r=U(t),e=u(r),i=y(e);return b(i)},"oklch_into_la\
b");var V0=o(t=>{let r=Tt(t);return b(r)},"prophoto_rgb_into_lab");var tb=o(t=>{let r=$(t),e=y(r);return b(e)},"rec2020_into_lab");var pb=o(t=>{let r=A(t),e=y(r);return b(e)},"srgb_into_lab"),ab=o(
t=>{let r=tt(t),e=y(r);return b(e)},"srgb_linear_into_lab");var Y=o(t=>{if(f(t)&&t.colorspace==="lab"){let[r,e,i]=t,n=Math.atan2(
i,e)*(180/Math.PI),p=Math.hypot(e,i);return a(Yo,[r,p,n])}else throw new Error(
"Wrong parameter passed: "+t)},"lab_into_lch");var Cb=o(t=>{let r=G(t),e=y(r),i=b(e);return Y(i)},"a98_rgb_into_\
lch");var Zb=o(t=>{let r=F(t),e=y(r),i=b(e);return Y(i)},"display_p3_in\
to_lch");var Hb=o(t=>{let r=nt(t),e=y(r),i=b(e);return Y(i)},"hsl_into_lch");var qb=o(t=>{let r=pt(t),e=y(r),i=b(e);return Y(i)},"hwb_into_lch");var id=o(t=>{let r=u(t),e=y(r),i=b(e);return Y(i)},"oklab_into_lc\
h");var fd=o(t=>{let r=U(t),e=u(r),i=y(e),n=b(i);return Y(n)},"oklch_\
into_lch");var yd=o(t=>{let r=Tt(t),e=b(r);return Y(e)},"prophoto_rgb_into_l\
ch");var kd=o(t=>{let r=$(t),e=y(r),i=b(e);return Y(i)},"rec2020_into_\
lch");var Wd=o(t=>{let r=A(t),e=y(r),i=b(e);return Y(i)},"srgb_into_lch"),
Od=o(t=>{let r=tt(t),e=y(r),i=b(e);return Y(i)},"srgb_linear_into\
_lch");var jd=o(t=>Y(b(t)),"xyz_d50_into_lch"),Ed=o(t=>Y(Uo(t)),"xyz_d65\
_into_lch");var C=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,p,l]=c(r,e,i).multiply(kt).each((_,m,s)=>s[m]=Math.cbrt(_)).multiply(
vt);return a(Yt,[n*100,p,l])}else throw new Error("Wrong paramete\
r passed: "+t)},"xyz_d65_into_oklab"),nh=o(t=>{if(f(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,p,l]=c(r,e,i).multiply(g.d50.
d65).multiply(kt).each((_,m,s)=>s[m]=Math.cbrt(_)).multiply(vt);return a(
Yt,[n*100,p,l])}else throw new Error("Wrong parameter passed: "+t)},
"xyz_d50_into_oklab");var lh=o(t=>C(G(t)),"a98_rgb_into_oklab");var bh=o(t=>C(F(t)),"display_p3_into_oklab");var uh=o(t=>{let r=nt(t);return C(r)},"hsl_into_oklab");var kh=o(t=>C(pt(t)),"hwb_into_oklab");var oo=o(t=>{let r=M(t),e=to(r);return C(e)},"lab_into_oklab");var Zh=o(t=>{let r=D(t),e=M(r),i=to(e);return C(i)},"lch_into_okl\
ab");var Dh=o(t=>C(rt(t)),"prophoto_rgb_into_oklab");var $h=o(t=>C($(t)),"rec2020_into_oklab");var Qh=o(t=>{let r=A(t);return C(r)},"srgb_into_oklab"),Uh=o(t=>{
let r=tt(t);return C(r)},"srgb_linear_into_oklab");var V=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,p,l]=c(r,e,i).multiply(kt).each((x,z,W)=>W[z]=Math.cbrt(x)).multiply(
vt),_=n*100,m=Math.hypot(p,l),s=m<.001?NaN:Math.atan2(l,p)*180/Math.
PI;return a(It,[_,m,s])}else throw new Error("Wrong parameter pas\
sed: "+t)},"xyz_d65_into_oklch"),gy=o(t=>{if(f(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position.toArray(),[n,p,l]=c(r,e,i).multiply(
g.d50.d65).multiply(kt).each((x,z,W)=>W[z]=Math.cbrt(x)).multiply(
vt),_=n*100,m=Math.hypot(p,l),s=m<.001?NaN:Math.atan2(l,p)*180/Math.
PI;return a(It,[_,m,s])}else throw new Error("Wrong parameter pas\
sed: "+t)},"xyz_d50_into_oklch");var wy=o(t=>{let r=G(t);return V(r)},"a98_rgb_into_oklch");var Iy=o(t=>{let r=F(t);return V(r)},"display_p3_into_oklch");var Ty=o(t=>{let r=nt(t);return V(r)},"hsl_into_oklch");var Ey=o(t=>{let r=pt(t);return V(r)},"hwb_into_oklch");var ro=o(t=>{if(f(t)&&t.colorspace==="oklab"){let[r,e,i]=t,n=Math.
hypot(e,i),p=n<.001?NaN:Math.atan2(i,e)*180/Math.PI;return a(It,[
r,n,p])}else throw new Error("Wrong parameter passed: "+t)},"okla\
b_into_oklch");var Vy=o(t=>ro(oo(t)),"lab_into_oklch");var t5=o(t=>{let r=D(t),e=oo(r);return ro(e)},"lch_into_oklch");var n5=o(t=>{let r=rt(t);return V(r)},"prophoto_rgb_into_oklch");var l5=o(t=>{let r=$(t);return V(r)},"rec2020_into_oklch");var b5=o(t=>{let r=A(t);return V(r)},"srgb_into_oklch"),d5=o(t=>{
let r=tt(t);return V(r)},"srgb_linear_into_oklch");var tr=Float64Array.of(1.3457868816471583,-.5446307051249019,0,-.25557208737979464,
1.5082477428451468,0,-.05110186497554526,.02052744743642139,1.2119675456389452),
X5=o(t=>{if(f(t)&&t.colorspace==="xyz-d65"){let[r,e,i]=t.position,
[n,p,l]=c(r,e,i).multiply(g.d65.d50).multiply(tr).each((_,m,s)=>s[m]=
Ot(_));return a(fo,[n,p,l])}else throw new Error("Wrong parameter\
 passed: "+t)},"xyz_d65_into_prophoto_rgb"),I=o(t=>{if(f(t)&&t.colorspace===
"xyz-d50"){let[r,e,i]=t.position,[n,p,l]=c(r,e,i).multiply(tr).each(
(_,m,s)=>s[m]=Ot(_));return a(fo,[n,p,l])}else throw new Error("W\
rong parameter passed: "+t)},"xyz_d50_into_prophoto_rgb");var L5=o(t=>I(Ro(t)),"a98_rgb_into_prophoto_rgb");var G5=o(t=>I(Zo(t)),"display_p3_into_prophoto_rgb");var or=o(t=>M(D(t)),"lch_into_xyz_d50"),q5=o(t=>wt(D(t)),"lch_int\
o_xyz_d65");var bg=o(t=>I(qo(t)),"hsl_into_prophoto_rgb");var ug=o(t=>I(Qo(t)),"hwb_into_prophoto_rgb");var kg=o(t=>I(M(t)),"lab_into_prophoto_rgb");var Cg=o(t=>I(or(t)),"lch_into_prophoto_rgb");var Bg=o(t=>I(Ht(t)),"oklab_into_prophoto_rgb");var Rg=o(t=>I(Vo(t)),"oklch_into_prophoto_rgb");var Fg=o(t=>I(Go(t)),"rec2020_into_prophoto_rgb");var Jg=o(t=>I(Mt(t)),"srgb_into_prophoto_rgb"),qg=o(t=>I($o(t)),"\
srgb_linear_into_prophoto_rgb");var ou=o(t=>t.position.map(Ot),"gam_prophoto"),ru=o(t=>t.position.
map($t),"lin_prophoto");var rr=Float64Array.of(30757411/17917100,-19765991/29648200,792561/
44930125,-6372589/17917100,47925759/29648200,-1921689/44930125,-4539589/
17917100,467509/29648200,42328811/44930125),j=o(t=>{if(f(t)&&t.colorspace===
"xyz-d65"){let[r,e,i]=t.position,[n,p,l]=c(r,e,i).multiply(rr).each(
(_,m,s)=>s[m]=Xt(_));return a(xo,[n,p,l])}else throw new Error("W\
rong parameter passed: "+t)},"xyz_d65_into_rec2020"),eo=o(t=>{if(f(
t)&&t.colorspace==="xyz-d50"){let[r,e,i]=t.position,[n,p,l]=c(r,e,
i).multiply(g.d50.d65).multiply(rr).each((_,m,s)=>s[m]=Xt(_));return a(
xo,[n,p,l])}else throw new Error("Wrong parameter passed: "+t)},"\
xyz_d50_into_rec2020");var ku=o(t=>j(G(t)),"a98_rgb_into_rec2020");var Cu=o(t=>j(F(t)),"display_p3_into_rec2020");var Bu=o(t=>j(nt(t)),"hsl_into_rec2020");var Ru=o(t=>j(pt(t)),"hwb_into_rec2020");var Fu=o(t=>eo(M(t)),"lab_into_rec2020");var qu=o(t=>eo(M(D(t))),"lch_into_rec2020");var rz=o(t=>j(u(t)),"oklab_into_rec2020");var _z=o(t=>j(u(U(t))),"oklch_into_rec2020");var cz=o(t=>j(rt(t)),"prophoto_rgb_into_rec2020");var yz=o(t=>j(A(t)),"srgb_into_rec2020"),gz=o(t=>j(tt(t)),"srgb_l\
inear_into_rec2020");var Pz=o(t=>t.position.map(Xt),"gam_rec2020"),wz=o(t=>t.position.
map(Bt),"lin_rec2020");export{Ct as A98RGBSpace,co as DisplayP3Space,S as HSLSpace,P as HWBSpace,
Zt as LABSpace,Yo as LCHSpace,fo as ProPhotoRGBSpace,Wo as RGBModel,
xo as Rec2020Space,T as XYZD50Space,O as XYZD65Space,el as a98_rgb_into_display_p3,
Ts as a98_rgb_into_hsl,yc as a98_rgb_into_hwb,f0 as a98_rgb_into_lab,
Cb as a98_rgb_into_lch,lh as a98_rgb_into_oklab,wy as a98_rgb_into_oklch,
L5 as a98_rgb_into_prophoto_rgb,ku as a98_rgb_into_rec2020,Rt as a98_rgb_into_rgb,
Rt as a98_rgb_into_srgb,hp as a98_rgb_into_srgb_linear,G as a98_rgb_into_xyz,
Ro as a98_rgb_into_xyz_d50,G as a98_rgb_into_xyz_d65,Qn as display_p3_into_a98_rgb,
Ls as display_p3_into_hsl,kc as display_p3_into_hwb,y0 as display_p3_into_lab,
Zb as display_p3_into_lch,bh as display_p3_into_oklab,Iy as display_p3_into_oklch,
G5 as display_p3_into_prophoto_rgb,Cu as display_p3_into_rec2020,
Lt as display_p3_into_rgb,Lt as display_p3_into_srgb,Sp as display_p3_into_srgb_linear,
F as display_p3_into_xyz,Zo as display_p3_into_xyz_d50,F as display_p3_into_xyz_d65,
Om as gam_a98,cs as gam_p3,ou as gam_prophoto,Pz as gam_rec2020,f_ as gam_srgb,
L_ as hsl_into_a98_rgb,xl as hsl_into_display_p3,Wc as hsl_into_hwb,
w0 as hsl_into_lab,Hb as hsl_into_lch,uh as hsl_into_oklab,Ty as hsl_into_oklch,
bg as hsl_into_prophoto_rgb,Bu as hsl_into_rec2020,Ap as hsl_into_rgb,
Lo as hsl_into_srgb,Wp as hsl_into_srgb_linear,nt as hsl_into_xyz,
qo as hsl_into_xyz_d50,nt as hsl_into_xyz_d65,V_ as hwb_into_a98_rgb,
kl as hwb_into_display_p3,Vs as hwb_into_hsl,C0 as hwb_into_lab,qb as hwb_into_lch,
kh as hwb_into_oklab,Ey as hwb_into_oklch,ug as hwb_into_prophoto_rgb,
Ru as hwb_into_rec2020,Dp as hwb_into_rgb,Dp as hwb_into_srgb,Np as hwb_into_srgb_linear,
pt as hwb_into_xyz,Qo as hwb_into_xyz_d50,pt as hwb_into_xyz_d65,
a as initPointInSpace,f as isPointInSpace,U_ as lab_into_a98_rgb,
Cl as lab_into_display_p3,of as lab_into_hsl,Ec as lab_into_hwb,Y as lab_into_lch,
oo as lab_into_oklab,Vy as lab_into_oklch,kg as lab_into_prophoto_rgb,
Fu as lab_into_rec2020,Dt as lab_into_rgb,Dt as lab_into_srgb,oa as lab_into_srgb_linear,
wt as lab_into_xyz,M as lab_into_xyz_d50,wt as lab_into_xyz_d65,nm as lch_into_a98_rgb,
Xl as lch_into_display_p3,mf as lch_into_hsl,Gc as lch_into_hwb,D as lch_into_lab,
Zh as lch_into_oklab,t5 as lch_into_oklch,Cg as lch_into_prophoto_rgb,
qu as lch_into_rec2020,Nt as lch_into_rgb,Nt as lch_into_srgb,sa as lch_into_srgb_linear,
q5 as lch_into_xyz,or as lch_into_xyz_d50,q5 as lch_into_xyz_d65,
Tm as lin_a98,xs as lin_p3,ru as lin_prophoto,wz as lin_rec2020,c_ as lin_srgb,
Yt as okLABSpace,It as okLCHSpace,lm as oklab_into_a98_rgb,Ll as oklab_into_display_p3,
df as oklab_into_hsl,Uc as oklab_into_hwb,X0 as oklab_into_lab,id as oklab_into_lch,
ro as oklab_into_oklch,Bg as oklab_into_prophoto_rgb,rz as oklab_into_rec2020,
Ft as oklab_into_rgb,Ft as oklab_into_srgb,wa as oklab_into_srgb_linear,
u as oklab_into_xyz,Ht as oklab_into_xyz_d50,u as oklab_into_xyz_d65,
gm as oklch_into_a98_rgb,$l as oklch_into_display_p3,Pf as oklch_into_hsl,
px as oklch_into_hwb,N0 as oklch_into_lab,fd as oklch_into_lch,U as oklch_into_oklab,
Rg as oklch_into_prophoto_rgb,_z as oklch_into_rec2020,Gt as oklch_into_rgb,
Gt as oklch_into_srgb,Ta as oklch_into_srgb_linear,Ko as oklch_into_xyz,
Vo as oklch_into_xyz_d50,Ko as oklch_into_xyz_d65,wm as prophoto_rgb_into_a98_rgb,
Ql as prophoto_rgb_into_display_p3,Cf as prophoto_rgb_into_hsl,cx as prophoto_rgb_into_hwb,
V0 as prophoto_rgb_into_lab,yd as prophoto_rgb_into_lch,Dh as prophoto_rgb_into_oklab,
n5 as prophoto_rgb_into_oklch,cz as prophoto_rgb_into_rec2020,Vt as prophoto_rgb_into_rgb,
Vt as prophoto_rgb_into_srgb,Va as prophoto_rgb_into_srgb_linear,
rt as prophoto_rgb_into_xyz,Tt as prophoto_rgb_into_xyz_d50,rt as prophoto_rgb_into_xyz_d65,
Im as rec2020_into_a98_rgb,es as rec2020_into_display_p3,Zf as rec2020_into_hsl,
ux as rec2020_into_hwb,tb as rec2020_into_lab,kd as rec2020_into_lch,
$h as rec2020_into_oklab,l5 as rec2020_into_oklch,Fg as rec2020_into_prophoto_rgb,
Jt as rec2020_into_rgb,Jt as rec2020_into_srgb,__ as rec2020_into_srgb_linear,
$ as rec2020_into_xyz,Go as rec2020_into_xyz_d50,$ as rec2020_into_xyz_d65,
Qt as rgb_into_a98_rgb,_s as rgb_into_display_p3,Hf as rgb_into_hsl,
Mx as rgb_into_hwb,pb as rgb_into_lab,Wd as rgb_into_lch,Qh as rgb_into_oklab,
b5 as rgb_into_oklch,Jg as rgb_into_prophoto_rgb,yz as rgb_into_rec2020,
A as rgb_into_xyz,Mt as rgb_into_xyz_d50,A as rgb_into_xyz_d65,Ir as rgb_to_hex,
yo as rgb_to_hue,gt as sRGBLinearSpace,H as sRGBSpace,Qt as srgb_into_a98_rgb,
_s as srgb_into_display_p3,Hf as srgb_into_hsl,Mx as srgb_into_hwb,
pb as srgb_into_lab,Wd as srgb_into_lch,Qh as srgb_into_oklab,b5 as srgb_into_oklch,
Jg as srgb_into_prophoto_rgb,yz as srgb_into_rec2020,A as srgb_into_xyz,
Mt as srgb_into_xyz_d50,A as srgb_into_xyz_d65,X_ as srgb_linear_into_a98_rgb,
ms as srgb_linear_into_display_p3,Ff as srgb_linear_into_hsl,Yx as srgb_linear_into_hwb,
ab as srgb_linear_into_lab,Od as srgb_linear_into_lch,Uh as srgb_linear_into_oklab,
d5 as srgb_linear_into_oklch,qg as srgb_linear_into_prophoto_rgb,
gz as srgb_linear_into_rec2020,tt as srgb_linear_into_xyz,$o as srgb_linear_into_xyz_d50,
tt as srgb_linear_into_xyz_d65,$n as xyz_d50_into_a98_rgb,Ut as xyz_d50_into_display_p3,
Qf as xyz_d50_into_hsl,Bx as xyz_d50_into_hwb,b as xyz_d50_into_lab,
jd as xyz_d50_into_lch,nh as xyz_d50_into_oklab,gy as xyz_d50_into_oklch,
I as xyz_d50_into_prophoto_rgb,eo as xyz_d50_into_rec2020,dt as xyz_d50_into_rgb,
dt as xyz_d50_into_srgb,Et as xyz_d50_into_srgb_linear,to as xyz_d50_into_xyz_d65,
X as xyz_d65_into_a98_rgb,Z as xyz_d65_into_display_p3,Uf as xyz_d65_into_hsl,
Xx as xyz_d65_into_hwb,Uo as xyz_d65_into_lab,Ed as xyz_d65_into_lch,
C as xyz_d65_into_oklab,V as xyz_d65_into_oklch,X5 as xyz_d65_into_prophoto_rgb,
j as xyz_d65_into_rec2020,L as xyz_d65_into_rgb,L as xyz_d65_into_srgb,
it as xyz_d65_into_srgb_linear,y as xyz_d65_into_xyz_d50,X as xyz_into_a98_rgb,
Z as xyz_into_display_p3,Uf as xyz_into_hsl,Xx as xyz_into_hwb,Uo as xyz_into_lab,
Ed as xyz_into_lch,C as xyz_into_oklab,V as xyz_into_oklch,X5 as xyz_into_prophoto_rgb,
j as xyz_into_rec2020,L as xyz_into_rgb,L as xyz_into_srgb,it as xyz_into_srgb_linear};
