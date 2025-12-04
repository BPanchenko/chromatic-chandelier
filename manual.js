var pr=Object.defineProperty;var o=(t,r)=>pr(t,"name",{value:r,configurable:!0});var ar=Object.defineProperty,st=o((t,r)=>ar(t,"name",{value:r,configurable:!0}),
"r");function mo(...t){let[r,e]=t.length===1?Array.of(0,t[0]):Array.
of(Math.min(...t),Math.max(...t)),i=Object.create(null,{0:{value:r},
1:{value:e},[Symbol.iterator]:{value:st(function*(){yield this[0],
yield this[1]},"value")},[Symbol.toStringTag]:{get(){return`Range\
: ${this[0]} \u22DC x \u22DC ${this[1]}}`}},avg:{enumerable:!0,get(){
return this[0]+this.value/2}},length:{value:2},value:{enumerable:!0,
get(){return this[1]-this[0]}},toString:{value:st(function(){return this[0]+
","+this[1]},"value")}});return Object.defineProperties(i,{from:{
enumerable:!0,value:r},to:{enumerable:!0,value:e},allot:{value:st(
function(n){return this.test(n)?n:n>this.from?(n-this.to)%this.value+
this.from:this.to-(this.from-n)%this.value},"allocateOuterValue")},
clamp:{value:st(function(n){return this.test(n)?n:Math.max(Math.min(
n,this.to),this.from)},"restrictOuterValue")},test:{value:st(function(n){
return this.from<=n&&n<=this.to},"value")}}),i}o(mo,"g");st(mo,"i\
nitRange");function lo(t=[0,100],r=[0,1]){let[e,i]=r,[n,a]=t,[m,s]=[
i-e,a-n];function _(d){return typeof d=="string"&&(d=parseFloat(d)),
l.domain.test(d)===!1&&(d=d>i?(d-i)%m+e:i-(e-d)%m),s*(d-e)/m+n}o(
_,"c"),st(_,"invert");function l(d){return typeof d=="string"&&(d=
parseFloat(d)),l.range.test(d)===!1&&(d=d>a?(d-a)%s+n:a-(n-d)%s),
m*(d-n)/s+e}return o(l,"l"),st(l,"calculator"),Object.defineProperties(
l,{domain:{enumerable:!0,value:mo(e,i)},range:{enumerable:!0,value:mo(
n,a)},invert:{enumerable:!0,value:_}})}o(lo,"y");st(lo,"initScale");var _r=Object.defineProperty,mr=o((t,r)=>_r(t,"name",{value:r,configurable:!0}),
"o"),lr=mr((t,r=12)=>{let e=r>0?10**r:1;return Math.sign(t)*Math.
round((Math.abs(t)+Number.EPSILON)*e)/e},"round"),b=lr;var so=lo([0,360],[-Math.PI,Math.PI]),St=Object.freeze({bytes:8,domain:so.
domain,ident:"angle",input:o(t=>so.domain.allot(b(t*Math.PI/180)),
"input"),output:o(t=>so.range.allot(b(t*180/Math.PI)),"output"),short:"\
phi",tcoord:"polar",tgeom:"azimuth",unit:"rad"});var sr=Object.defineProperty,Pt=o((t,r)=>sr(t,"name",{value:r,configurable:!0}),
"e");function h(...t){let[r,e]=t.length===1?Array.of(0,t[0]):Array.
of(Math.min(...t),Math.max(...t)),i=Object.create(null,{0:{value:r},
1:{value:e},[Symbol.iterator]:{value:Pt(function*(){yield this[0],
yield this[1]},"value")},[Symbol.toStringTag]:{get(){return`Range\
: ${this[0]} \u22DC x \u22DC ${this[1]}}`}},avg:{enumerable:!0,get(){
return this[0]+this.value/2}},length:{value:2},value:{enumerable:!0,
get(){return this[1]-this[0]}},toString:{value:Pt(function(){return this[0]+
","+this[1]},"value")}});return Object.defineProperties(i,{from:{
enumerable:!0,value:r},to:{enumerable:!0,value:e},allot:{value:Pt(
function(n){return this.test(n)?n:n>this.from?(n-this.to)%this.value+
this.from:this.to-(this.from-n)%this.value},"allocateOuterValue")},
clamp:{value:Pt(function(n){return this.test(n)?n:Math.max(Math.min(
n,this.to),this.from)},"restrictOuterValue")},test:{value:Pt(function(n){
return this.from<=n&&n<=this.to},"value")}}),i}o(h,"l");Pt(h,"ini\
tRange");var ft=Object.freeze({$coord:St,bytes:8,domain:h(0,360),ident:"hu\
e",short:"h",input:o(t=>ft.domain.allot(t),"input"),output:o(t=>isNaN(
t)?NaN:t<1e-6?0:b(t,6),"output"),precision:2,unit:"deg"});var mt=Object.freeze({bytes:8,domain:h(0,1),ident:"applicate",short:"\
z",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var lt=Object.freeze({$coord:mt,bytes:8,domain:h(0,100),ident:"li\
ghtness",input:o(t=>b(t/100),"input"),output:o(t=>b(t*100),"outpu\
t"),short:"L",precision:2,unit:"%"});var _t=Object.freeze({bytes:8,domain:h(0,1),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var zo=Object.freeze({$coord:_t,bytes:8,domain:h(0,100),ident:"sa\
turation",input:o(t=>b(t/100),"input"),output:o(t=>b(t*100),"outp\
ut"),short:"S",precision:2,unit:"%"});var fr=Object.defineProperty,wt=o((t,r)=>fr(t,"name",{value:r,configurable:!0}),
"n"),xr=wt(t=>t!==null&&typeof t=="object","isObject"),dr=wt(t=>xr(
t)&&"ident"in t&&"short"in t&&"domain"in t,"isDimension");function v(t,r,e){
let i=Iterator.from(e===void 0?[t,r]:[t,r,e]),n=e===void 0?2:3;for(let s of i.
take(n))if(dr(s)===!1)throw new TypeError("Passed wrong space dim\
ension: "+JSON.stringify(s,void 0,2));let a=i.take(n).filter(s=>s.
tgeom==="azimuth"||s.tgeom==="reference-ray").toArray().length===
2?n===3?"cylinder":"circle":n===3?"cube":"plane",m=Object.create(
null,{0:{enumerable:!0,value:t},1:{enumerable:!0,value:r},length:{
enumerable:!0,value:n},tgeom:{enumerable:!0,value:a},entries:{value:wt(
function*(){yield[0,this[0]],yield[1,this[1]],this.length===3&&(yield[
2,this[2]])},"value")},toArray:{value:wt(function(){return Array.
of(...this)},"value")},[Symbol.iterator]:{value:wt(function*(){yield this[0],
yield this[1],this.length===3&&(yield this[2])},"value")}});return n===
3&&Object.defineProperty(m,2,{enumerable:!0,value:e}),s=>s===void 0?
m:Object.defineProperties(m,s)}o(v,"j");wt(v,"defCSYS");var xe=v(_t,St)({adapt:{enumerable:!0,value:fo}});function fo(t=0,r=NaN){return[t*Math.cos(r),t*Math.sin(r)]}o(fo,"\
calcCartesianCoordinates");var bt=v(_t,St,mt)({adapt:{value:cr}});function cr(t,r,e){return[
...fo(t,r),e]}o(cr,"calcCubeCoordinates");var E=Float64Array.of(.9642956764295677,1,.8251046025104602);Object.
defineProperty(E,"ident",{value:"d50"});Object.freeze(E.buffer);var K=Float64Array.
of(.3127/.329,1,(1-.3127-.329)/.329);Object.defineProperty(K,"ide\
nt",{value:"d65"});Object.freeze(K.buffer);var S={CAM:v(ft,zo,lt)(),CSYS:bt,ident:"hsl",whp:K};var So=Object.freeze({$coord:mt,bytes:8,domain:h(0,100),ident:"bl\
ackness",input:o(t=>b(t/100),"input"),output:o(t=>b(t*100),"outpu\
t"),short:"B",precision:2,unit:"%"});var Po=Object.freeze({$coord:_t,ident:"whiteness",bytes:8,domain:h(
0,100),input:o(t=>b(t/100),"input"),output:o(t=>b(t*100),"output"),
short:"W",precision:2,unit:"%"});var P={CAM:v(ft,Po,So)(),CSYS:bt,ident:"hwb",whp:K};var xt=Object.freeze({bytes:8,domain:h(-1,1),ident:"abscissa",short:"\
x",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var wo=Object.freeze({$coord:xt,bytes:8,domain:h(-125,125),ident:"\
green-red",input:o(t=>b(t/125),"input"),output:o(t=>b(t*125),"out\
put"),precision:2,short:"a"}),ko=Object.freeze({$coord:xt,bytes:8,
domain:h(-.4,.4),ident:"green-red",precision:6,short:"a"});var dt=Object.freeze({bytes:8,domain:h(-1,1),ident:"ordinate",short:"\
y",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var vo=Object.freeze({$coord:dt,domain:h(-125,125),ident:"blue-ye\
llow",input:o(t=>b(t/125),"input"),output:o(t=>b(t*125),"output"),
precision:2,short:"b"}),Mo=Object.freeze({$coord:dt,domain:h(-.4,
.4),ident:"blue-yellow",precision:6,short:"b"});var si=v(xt,dt)({adapt:{value:xo}});function xo(t,r){let e=0,i=NaN;return(t!==0||r!==0)&&(e=Math.sqrt(
t**2+r**2),t!==0&&!r||r!==0&&!t?i=r/Math.abs(r)*(Math.PI/2):i=Math.
atan(r/t)),[e,i]}o(xo,"calcPolarCoordinates");var ct=v(xt,dt,mt)({adapt:{value:br}});function br(t,r,e){return[
...xo(t,r),e]}o(br,"calcCylindricalCoordinates");var Rt=Object.freeze({CAM:v(lt,wo,vo)(),CSYS:ct,ident:"lab",whp:E});var Yo=Object.freeze({$coord:_t,bytes:8,domain:h(0,150),ident:"ch\
roma",input:o(t=>b(t/150),"input"),output:o(t=>b(t*150),"output"),
precision:2,short:"C"}),Io=Object.freeze({$coord:_t,bytes:8,domain:h(
0,.4),ident:"chroma",precision:6,short:"c"});var Co=Object.freeze({CAM:v(lt,Yo,ft)(),CSYS:bt,ident:"lch",whp:E});var Ct=Object.freeze({CAM:v(lt,ko,Mo)(),CSYS:ct,ident:"oklab",whp:K});var At={CAM:v(lt,Io,ft)(),CSYS:bt,ident:"oklch",whp:K};var Ao=Object.freeze({$coord:mt,bytes:1,domain:h(0,255),ident:"bl\
ue",input:o(t=>b(t/255),"input"),output:o(t=>b(t*255,0)&255,"outp\
ut"),short:"B"});var Oo=Object.freeze({$coord:dt,bytes:1,domain:h(0,255),ident:"gr\
een",input:o(t=>b(t/255),"input"),output:o(t=>b(t*255,0)&255,"out\
put"),short:"G"});var Wo=Object.freeze({$coord:xt,bytes:1,domain:h(0,255),ident:"re\
d",input:o(t=>b(t/255),"input"),output:o(t=>b(t*255,0)&255,"outpu\
t"),short:"R"});var gt=ct,co=Object.freeze({ident:"prophoto-rgb",CSYS:gt,luminance:h(
160,640),whp:E}),kt=K,To=Object.freeze({ident:"rgb",CAM:v(Wo,Oo,Ao)(),
CSYS:gt,whp:kt}),N=Object.freeze({ident:"srgb",CSYS:gt,whp:kt}),ut=Object.
freeze({ident:"srgb-linear",CSYS:gt,whp:kt}),Ot=Object.freeze({ident:"\
a98-rgb",CSYS:gt,whp:kt}),bo=Object.freeze({ident:"display-p3",CSYS:gt,
whp:kt}),ho=Object.freeze({ident:"rec2020",CSYS:gt,whp:kt});var T=Object.freeze({ident:"xyz-d65",CSYS:ct,whp:K}),B=Object.freeze(
{ident:"xyz-d50",CSYS:ct,whp:E});var Wt=o(t=>Math.sign(t)*Math.pow(Math.abs(t),2.19921875),"to_lin\
ear"),Tt=o(t=>Math.sign(t)*Math.pow(Math.abs(t),256/563),"to_gamu\
t");var J=o(t=>{let r=Math.abs(t);return r<=.04045?t/12.92:Math.sign(
t)*b(Math.pow((r+.055)/1.055,2.4))},"to_linear"),q=o(t=>{let r=Math.
abs(t);return r>.0031308?Math.sign(t)*b(1.055*Math.pow(r,1/2.4)-.055):
12.92*t},"to_gamut");var g={d65:{d50:Float64Array.of(1.0479297925449969,.02962780877005599,
-.009243040646204504,.022946870601609652,.9904344267538799,.015055191490298152,
-.05019226628920524,-.017073799063418826,.7518742814281371)},d50:{
d65:Float64Array.of(.955473421488075,-.0283697093338637,.012314014864481998,
-.02309845494876471,1.0099953980813041,-.020507649298898964,.06325924320057072,
.021041441191917323,1.330365926242124)}};var hr=Object.defineProperty,R=o((t,r)=>hr(t,"name",{value:r,configurable:!0}),
"t"),Bo=R(t=>typeof t=="number"||t instanceof Number,"isNumber"),
yr=R((t,r=12)=>{let e=r>0?10**r:1;return Math.sign(t)*Math.round(
(Math.abs(t)+Number.EPSILON)*e)/e},"round"),Xo=R(t=>yo(t)&&Symbol.
iterator in t&&typeof t[Symbol.iterator]=="function","isIterableO\
bject"),yo=R(t=>t!==null&&typeof t=="object","isObject"),gr=R(t=>typeof t==
"string","isString"),ur=R(t=>gr(t)&&zr.has(t),"isSpaceID"),Zo=R(t=>yo(
t)&&"ident"in t&&ur(t.ident)&&"CSYS"in t&&yo(t.CSYS)&&"length"in t.
CSYS&&t.CSYS.length===3,"isColorSpace"),zr=new Set(["a98-rgb","di\
splay-p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb",
"rec2020","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz-d65"]),
f=R(t=>Xo(t)&&Iterator.from(t).every(r=>Bo(r))&&"length"in t&&t.length===
3&&"space"in t&&Zo(t.space),"isPointInSpace");function p(t,r){if(Zo(
t)===!1)throw new TypeError("Point must be declared in a valid co\
lor space instead of "+JSON.stringify(t,void 0,2));if((Xo(r)&&Iterator.
from(r).every(_=>Bo(_)))===!1)throw new TypeError("Point in space\
 has valid coordinates. Wrong parameters: "+JSON.stringify(r,void 0,
2));let e=t.CSYS.length,i=new Float64Array(e),n=t.CAM===void 0?Array.
of(0,1,2):t.CAM.toArray().map(_=>t.CSYS.toArray().findIndex(l=>_.
$coord===l)),a={[Symbol.iterator]:{value:R(function*(){yield this[0],
yield this[1],yield this[2]},"value")},length:{value:e}},m=(_=>({
adapted:{get(){if(typeof this.space.CSYS.adapt=="function"){let[l,
d,C]=this.position;return Iterator.from(this.space.CSYS.adapt(l,d,
C))}else return this.position}},position:{get(){return Object.defineProperties(
_.values(),{length:{value:3},space:{value:t}})},set(l){_.set(l)}},
set:{value:R(function(l){let d=Array.from(l),C=Math.min(d.length,
3);for(let u=0;u<C;u++)this[u]=d[u];return this},"value")}}))(i);
for(let _=0;_<e;_++)((l,d,C)=>{m[l]={get(){let{CAM:u,CSYS:tt}=this.
space,$=C[d],ot=tt[d];"output"in ot&&typeof ot.output=="function"&&
($=ot.output($));let at=u!==void 0&&u[l];at&&typeof at.output=="f\
unction"&&($=at.output($));let{precision:Et=9,unit:zt=""}=at||ot;
return Object.defineProperties(new Number($),{digits:{enumerable:!0,
value:Et},toString:{value:R(function(){return isNaN(this)?"none":
(Number.isInteger(this)?this:yr(this,Et))+zt},"value")},unit:{enumerable:!0,
value:zt}})},set(u){let{CAM:tt,CSYS:$}=this.space,ot=$[d],at=tt!==
void 0?tt[l]:null;at!==null&&"input"in at&&typeof at.input=="func\
tion"&&(u=at.input(u)),"input"in ot&&typeof ot.input=="function"&&
(u=ot.input(u)),typeof u=="string"&&(u=parseFloat(u)),C[d]=u}}})(
_,n[_],i);let s={buffer:{value:i.buffer},equals:{value:R(function(_,l=1e-12){
let[d,C,u]=this.position,[tt,$,ot]=_.position;return this.space.ident===
_.space.ident&&Math.abs(d-tt)<=l*Math.max(1,Math.abs(d),Math.abs(
tt))&&Math.abs(C-$)<=l*Math.max(1,Math.abs(C),Math.abs($))&&Math.
abs(u-ot)<=l*Math.max(1,Math.abs(u),Math.abs(ot))},"value")},entries:{
value:R(function(){let _=this.space.CAM??this.space.CSYS;return Iterator.
from([[_[0],this[0]],[_[1],this[1]],[_[2],this[2]]])},"value")},space:{
value:t},values:{value:R(function(){return Iterator.from(this).map(
_=>_.valueOf())},"value")}};return Object.create(null,{...s,...a,
...m,[Symbol.toStringTag]:{get(){return`PointInSpace: [${this.toString()}\
] \u2208 ${this.space.ident.toUpperCase()}`}},toString:{value:R(function(){
return Iterator.from(this).toArray().toString()},"value")}}).set(
r)}o(p,"_");R(p,"initPointInSpace");var Sr=Object.defineProperty,O=o((t,r)=>Sr(t,"name",{value:r,configurable:!0}),
"t"),Pr=O(t=>typeof t=="number"||t instanceof Number,"isNumber"),
jo=O(t=>go(t)&&Symbol.iterator in t&&typeof t[Symbol.iterator]=="\
function","isIterableObject"),go=O(t=>t!==null&&typeof t=="object",
"isObject"),wr=O(t=>typeof t=="string","isString"),kr=O(t=>wr(t)&&
Mr.has(t),"isSpaceID"),vr=O(t=>go(t)&&"ident"in t&&kr(t.ident)&&"\
CSYS"in t&&go(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===3,"isCo\
lorSpace"),Mr=new Set(["a98-rgb","display-p3","hsl","hwb","lab","\
lch","oklab","oklch","prophoto-rgb","rec2020","srgb-linear","srgb",
"rgb","xyz","xyz-d50","xyz-d65"]),Yr=O(t=>jo(t)&&Iterator.from(t).
every(r=>Pr(r))&&"length"in t&&t.length===3&&"space"in t&&vr(t.space),
"isPointInSpace"),Ir=O((t,r=12)=>{let e=r>0?10**r:1;return Math.sign(
t)*Math.round((Math.abs(t)+Number.EPSILON)*e)/e},"round");function x(t,r=0,e=0){
let i=Yr(t)?new Float64Array(t.buffer):Float64Array.of(t,r,e),{length:n}=i,
a={each:{value:O(function(_){for(let l=0;l<this.length;l++)_(this[l],
l,this);return this},"value")},multiply:{value:O(function(_){if(jo(
_)){let[l,d,C,u,tt,$,ot,at,Et]=_,[zt,ao,_o]=this.head;return this.
update(zt*l+ao*u+_o*ot,zt*d+ao*tt+_o*at,zt*C+ao*$+_o*Et)}else throw new TypeError(
"Unsupported Multiplicator: "+_)},"multiply")},update:{value:O(function(_,l,d){
let[C,u,tt]=(Array.isArray(_)?_.slice(3):Array.of(_,l,d)).filter(
$=>typeof $=="number");return this.head=Array.of(C??this[0],u??this[1],
tt??this[2]),this},"value")}},m={base:{get:O(()=>Iterator.from([0,
0,0]),"get")},head:{enumerable:!0,get:O(()=>Iterator.from(i),"get"),
set:O(_=>i.set(_),"set")},magnitude:{enumerable:!0,get(){return Ir(
Math.hypot(...this.head))}}},s={[Symbol.iterator]:{value:O(function*(){
for(let _ of this.head)yield _},"value")},length:{enumerable:!0,value:n}};
for(let _=0;_<n;_++)(l=>{s[l]={enumerable:!0,get:O(()=>i[l],"get"),
set:O(d=>{if(typeof d=="number")i[_]=d;else throw new TypeError("\
Expected Number")},"set")}})(_);return Object.create(null,Object.
assign({},a,m,s))}o(x,"$");O(x,"makeVectorQuantity");var Eo=Float64Array.of(608311/1250200,35783/156275,0,189793/714400,
247089/357200,32229/714400,198249/1000160,198249/2500400,5220557/
5000800),H=o(t=>{if(f(t)&&t.space.ident==="display-p3"){let[r,e,i]=t.
position,[n,a,m]=x(r,e,i).each((s,_,l)=>l[_]=J(s)).multiply(Eo);return p(
T,[n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"d\
isplay_p3_into_xyz_d65"),Ro=o(t=>{if(f(t)&&t.space.ident==="displ\
ay-p3"){let[r,e,i]=t.position,[n,a,m]=x(r,e,i).each((s,_,l)=>l[_]=
J(s)).multiply(Eo).multiply(g.d65.d50);return p(B,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"display_p3_into_xyz_d50");var Lo=Float64Array.of(1829569/896150,-851781/878810,16779/1248040,
-506331/896150,1648619/878810,-147721/1248040,-308931/896150,36519/
878810,1266979/1248040),X=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){
let[r,e,i]=t.position,[n,a,m]=x(r,e,i).multiply(Lo).each((s,_,l)=>l[_]=
Tt(s));return p(Ot,[n,a,m])}else throw new Error("Wrong parameter\
 passed: "+t)},"xyz_d65_into_a98_rgb"),Kn=o(t=>{if(f(t)&&t.space.
ident==="xyz-d50"){let[r,e,i]=t.position,[n,a,m]=x(r,e,i).multiply(
g.d50.d65).multiply(Lo).each((s,_,l)=>l[_]=Tt(s));return p(Ot,[n,
a,m])}else throw new Error("Wrong parameter passed: "+t)},"xyz_d5\
0_into_a98_rgb");var tp=o(t=>X(H(t)),"display_p3_into_a98_rgb");var Do=Float64Array.of(573536/994567,591459/1989134,53769/1989134,
263643/1420810,6239551/9945670,351524/4972835,187206/994567,374412/
4972835,4929758/4972835),F=o(t=>{if(f(t)&&t.space.ident==="a98-rg\
b"){let[r,e,i]=t.position,[n,a,m]=x(r,e,i).each((s,_,l)=>l[_]=Wt(
s)).multiply(Do);return p(T,[n,a,m])}else throw new Error("Wrong \
parameter passed: "+t)},"a98_rgb_into_xyz_d65"),No=o(t=>{if(f(t)&&
t.space.ident==="a98-rgb"){let[r,e,i]=t.position,[n,a,m]=x(r,e,i).
each((s,_,l)=>l[_]=Wt(s)).multiply(Do).multiply(g.d65.d50);return p(
B,[n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"a\
98_rgb_into_xyz_d50");var Lt=Float64Array.of(12831/3959,-851781/878810,705/12673,-329/214,
1648619/878810,-2585/12673,-1974/3959,36519/878810,705/667),L=o(t=>{
if(f(t)&&t.space.ident==="xyz-d65"){let[r,e,i]=t.position,[n,a,m]=x(
r,e,i).multiply(Lt).each((s,_,l)=>l[_]=q(s));return p(N,[n,a,m])}else
throw new Error("Wrong parameter passed: "+t)},"xyz_d65_into_srgb"),
it=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){let[r,e,i]=t.position,
[n,a,m]=x(r,e,i).multiply(Lt);return p(ut,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_srgb_linear"),ht=o(t=>{
if(f(t)&&t.space.ident==="xyz-d50"){let[r,e,i]=t.position,[n,a,m]=x(
r,e,i).multiply(g.d50.d65).multiply(Lt).each((s,_,l)=>l[_]=q(s));
return p(N,[n,a,m])}else throw new Error("Wrong parameter passed:\
 "+t)},"xyz_d50_into_srgb"),Dt=o(t=>{if(f(t)&&t.space.ident==="xy\
z-d50"){let[r,e,i]=t.position,[n,a,m]=x(r,e,i).multiply(g.d50.d65).
multiply(Lt);return p(ut,[n,a,m])}else throw new Error("Wrong par\
ameter passed: "+t)},"xyz_d50_into_srgb_linear");var Nt=o(t=>L(F(t)),"a98_rgb_into_srgb"),gp=o(t=>it(F(t)),"a98_rg\
b_into_srgb_linear");var Ht=o(t=>L(H(t)),"display_p3_into_srgb"),wp=o(t=>it(H(t)),"dis\
play_p3_into_srgb_linear");var rt=o((t,r,e)=>{let i=2*Math.PI,n=Math.PI/6;t<0&&(t+=i),t=t%i;
let a=o(m=>{let s=(m+t/n)%12,_=r*Math.min(e,1-e);return e-_*Math.
max(-1,Math.min(s-3,9-s,1))},"f");return[a(0),a(8),a(4)]},"hsl_to\
_rgb");var Wp=o(t=>{if(f(t)&&t.space.ident==="hsl"){let[r,e,i]=t.position,
n=rt(e,r,i).map(a=>Math.min(Math.max(Math.round(a*255),0),255));return p(
To,n)}else throw new Error("Wrong parameter passed: "+t)},"hsl_in\
to_rgb"),Ho=o(t=>{if(f(t)&&t.space.ident==="hsl"){let[r,e,i]=t.position,
n=rt(e,r,i);return p(N,n)}else throw new Error("Wrong parameter p\
assed: "+t)},"hsl_into_srgb"),Tp=o(t=>{if(f(t)&&t.space.ident==="\
hsl"){let[r,e,i]=t.position,n=rt(e,r,i).map(a=>J(a));return p(ut,
n)}else throw new Error("Wrong parameter passed: "+t)},"hsl_into_\
srgb_linear");var yt=o((t,r,e)=>{if(r+e>=1){let i=r/(r+e);return[i,i,i]}else{let[
i,n,a]=rt(t,1,.5).map(m=>m*(1-r-e)+r);return[i,n,a]}},"hwb_to_rgb");var Hp=o(t=>{if(f(t)&&t.space.ident==="hwb"){let[r,e,i]=t.position,
n=yt(e,r,i);return p(N,n)}else throw new Error("Wrong parameter p\
assed: "+t)},"hwb_into_srgb"),Fp=o(t=>{if(f(t)&&t.space.ident==="\
hwb"){let[r,e,i]=t.position,n=yt(e,r,i).map(a=>J(a));return p(ut,
n)}else throw new Error("Wrong parameter passed: "+t)},"hwb_into_\
srgb_linear");var M=o(t=>{if(f(t)&&t.space.ident==="lab"){let r=903.2962962962963,
e=216/24389,[i,n,a]=t,m=(i+16)/116,s=n/500+m,_=Math.pow(s,3),l=m-
a/200,d=Math.pow(l,3),C=(_>e?_:(116*s-16)/r)*E[0],u=(i>r*e?Math.pow(
(i+16)/116,3):i/r)*E[1],tt=(d>e?d:(116*l-16)/r)*E[2];return p(B,[
C,u,tt])}else throw new Error("Wrong parameter passed: "+t)},"lab\
_into_xyz_d50"),vt=o(t=>{let r=M(t),[e,i,n]=x(r).multiply(g.d50.d65);
return p(T,[e,i,n])},"lab_into_xyz_d65");var Ft=o(t=>ht(M(t)),"lab_into_srgb"),ea=o(t=>Dt(M(t)),"lab_into_\
srgb_linear");var D=o(t=>{if(f(t)&&t.space.ident==="lch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=e*Math.cos(i),a=e*Math.sin(i);return p(
Rt,[r,n,a])}else throw new Error("Wrong parameter passed: "+t)},"\
lch_into_lab");var Gt=o(t=>ht(M(D(t))),"lch_into_srgb"),xa=o(t=>Dt(M(D(t))),"lch\
_into_srgb_linear");var Fo=Float64Array.of(1,1,1,.3963377773761749,-.1055613458156586,
-.0894841775298119,.2158037573099136,-.0638541728258133,-1.2914855480194092),
Mt=Float64Array.of(.819022437996703,.0329836539323885,.0481771893596242,
.3619062600528904,.9292868615863434,.2642395317527308,-.1288737815209879,
.0361446663506424,.6335478284694309),Yt=Float64Array.of(.210454268309314,
1.9779985324311684,.0259040424655478,.7936177747023054,-2.42859224204858,
.7827717124575296,-.0040720430116193,.450593709617411,-.8086757549230774),
Go=Float64Array.of(1.2268798758459243,-.0405757452148008,-.0763729366746601,
-.5578149944602171,1.112286803280317,-.4214933324022432,.2813910456659647,
-.0717110580655164,1.5869240198367816);var z=o(t=>{if(f(t)&&t.space.ident==="oklab"){let[r,e,i]=t.position,
[n,a,m]=x(i,r,e).multiply(Fo).each((s,_,l)=>l[_]=s**3).multiply(Go);
return p(T,[n,a,m])}else throw new Error("Wrong parameter passed:\
 "+t)},"oklab_into_xyz_d65"),Vt=o(t=>{let[r,e,i]=x(z(t)).multiply(
g.d65.d50);return p(B,[r,e,i])},"oklab_into_xyz_d50");var $t=o(t=>L(z(t)),"oklab_into_srgb"),va=o(t=>it(z(t)),"oklab_in\
to_srgb_linear");var Q=o(t=>{if(f(t)&&t.space.ident==="oklch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=isNaN(i)?0:e*Math.cos(i),a=isNaN(i)?0:
e*Math.sin(i);return p(Ct,[r,n,a])}else throw new Error("Wrong pa\
rameter passed: "+t)},"oklch_into_oklab");var Kt=o(t=>L(z(Q(t))),"oklch_into_srgb"),Xa=o(t=>it(z(Q(t))),"ok\
lch_into_srgb_linear");var Jt=o(t=>{let r=Math.abs(t);return r<=.03125?t/16:Math.sign(t)*
Math.pow(r,1.8)},"to_linear"),Bt=o(t=>{let r=Math.abs(t);return r>=
1/512?Math.sign(t)*Math.pow(r,1/1.8):16*t},"to_gamut");var Cr=Float64Array.of(.7977666449006423,.2880748288194013,0,.13518129740053308,
.711835234241873,0,.0313477341283922,8993693872564e-17,.8251046025104602),
Xt=o(t=>{if(f(t)&&t.space.ident==="prophoto-rgb"){let r=p(B,t.position.
toArray());return x(r).each((e,i,n)=>n[i]=Jt(e)).multiply(Cr),r}else
throw new Error("Wrong parameter passed: "+t)},"prophoto_rgb_into\
_xyz_d50"),et=o(t=>{let r=Xt(t),e=p(T,r.position.toArray());return x(
e).multiply(g.d50.d65),e},"prophoto_rgb_into_xyz_d65");var qt=o(t=>L(et(t)),"prophoto_rgb_into_srgb"),Ja=o(t=>it(et(t)),
"prophoto_rgb_into_srgb_linear");var Qt=1.09929682680944,Vo=.018053968510807,Zt=o(t=>{let r=Math.abs(
t);return r<Vo*4.5?t/4.5:Math.sign(t)*Math.pow((r+Qt-1)/Qt,1/.45)},
"to_linear"),jt=o(t=>{let r=Math.abs(t);return r>Vo?Math.sign(t)*
(Qt*Math.pow(r,.45)-(Qt-1)):4.5*t},"to_gamut");var $o=Float64Array.of(63426534/99577255,26158966/99577255,4994106574466076e-32,
20160776/139408157,472592308/697040785,19567812/697040785,47086771/
278816314,8267143/139408157,295819943/278816314),G=o(t=>{if(f(t)&&
t.space.ident==="rec2020"){let[r,e,i]=t.position,[n,a,m]=x(r,e,i).
each((s,_,l)=>l[_]=Zt(s)).multiply($o);return p(T,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"rec2020_into_xyz_d65"),Ko=o(t=>{if(f(
t)&&t.space.ident==="rec2020"){let[r,e,i]=t.position,[n,a,m]=x(r,
e,i).each((s,_,l)=>l[_]=Zt(s)).multiply($o).multiply(g.d65.d50);return p(
B,[n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"r\
ec2020_into_xyz_d50");var Ut=o(t=>L(G(t)),"rec2020_into_srgb"),l_=o(t=>it(G(t)),"rec202\
0_into_srgb_linear");var d_=o(t=>t.position.map(q),"gam_srgb"),c_=o(t=>t.position.map(
J),"lin_srgb");var to=Float64Array.of(506752/1228815,87098/409605,7918/409605,87881/
245763,175762/245763,87881/737289,12673/70218,12673/175545,1001167/
1053270),W=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.space.ident)){
let[r,e,i]=t.position,[n,a,m]=x(r,e,i).each((s,_,l)=>l[_]=J(s)).multiply(
to);return p(T,[n,a,m])}else throw new Error("Wrong parameter pas\
sed: "+t)},"srgb_into_xyz_d65"),U=o(t=>{if(f(t)&&t.space.ident===
"srgb-linear"){let[r,e,i]=t.position,[n,a,m]=x(r,e,i).multiply(to);
return p(T,[n,a,m])}else throw new Error("Wrong parameter passed:\
 "+t)},"srgb_linear_into_xyz_d65"),It=o(t=>{if(f(t)&&["rgb","srgb"].
includes(t.space.ident)){let[r,e,i]=t.position,[n,a,m]=x(r,e,i).each(
(s,_,l)=>l[_]=J(s)).multiply(to).multiply(g.d65.d50);return p(B,[
n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"srgb\
_into_xyz_d50"),Jo=o(t=>{if(f(t)&&t.space.ident==="srgb-linear"){
let[r,e,i]=t.position,[n,a,m]=x(r,e,i).multiply(to).multiply(g.d65.
d50);return p(B,[n,a,m])}else throw new Error("Wrong parameter pa\
ssed: "+t)},"srgb_linear_into_xyz_d50");var oo=o(t=>X(W(t)),"srgb_into_a98_rgb"),j_=o(t=>X(U(t)),"srgb_li\
near_into_a98_rgb");var N_=o(t=>oo(Ho(t)),"hsl_into_a98_rgb");var J_=o(t=>{if(f(t)&&t.space.ident==="hwb"){let[r,e,i]=t.position;
if(r+i>=1){let n=r/(r+i);return p(Ot,[n,n,n])}else{let n=rt(e,1,.5).
map(a=>a*(1-r-i)+r);return oo(p(N,n))}}else throw new Error("Wron\
g parameter passed: "+t)},"hwb_into_a98_rgb");var om=o(t=>X(vt(t)),"lab_into_a98_rgb");var am=o(t=>X(vt(D(t))),"lch_into_a98_rgb");var fm=o(t=>X(z(t)),"oklab_into_a98_rgb");var qo=o(t=>Vt(Q(t)),"oklch_into_xyz_d50"),Qo=o(t=>z(Q(t)),"oklch\
_into_xyz_d65");var zm=o(t=>X(Qo(t)),"oklch_into_a98_rgb");var vm=o(t=>X(et(t)),"prophoto_rgb_into_a98_rgb");var Am=o(t=>X(G(t)),"rec2020_into_a98_rgb");var Bm=o(t=>t.position.map(Tt),"gam_a98"),Xm=o(t=>t.position.map(
Wt),"lin_a98");var Uo=Float64Array.of(446124/178915,-14852/17905,11844/330415,-333277/
357830,63121/35810,-50337/660830,-72051/178915,423/17905,316169/330415),
Z=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){let[r,e,i]=t.position,
[n,a,m]=x(r,e,i).multiply(Uo).each((s,_,l)=>l[_]=q(s));return p(bo,
[n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"xyz\
_d65_into_display_p3"),ro=o(t=>{if(f(t)&&t.space.ident==="xyz-d50"){
let[r,e,i]=t.position,[n,a,m]=x(r,e,i).multiply(g.d50.d65).multiply(
Uo).each((s,_,l)=>l[_]=q(s));return p(bo,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_display_p3");var nl=o(t=>Z(F(t)),"a98_rgb_into_display_p3");var tr=o(t=>{if(f(t)&&t.space.ident==="hsl"){let[r,e,i]=t.position,
n=rt(e,r,i),a=p(N,n);return It(a)}else throw new Error("Wrong par\
ameter passed: "+t)},"hsl_into_xyz_d50"),nt=o(t=>{if(f(t)&&t.space.
ident==="hsl"){let[r,e,i]=t.position,n=rt(e,r,i),a=p(N,n);return W(
a)}else throw new Error("Wrong parameter passed: "+t)},"hsl_into_\
xyz_d65");var bl=o(t=>Z(nt(t)),"hsl_into_display_p3");var or=o(t=>{if(f(t)&&t.space.ident==="hwb"){let[r,e,i]=t.position,
n=yt(e,r,i),a=p(N,n);return It(a)}else throw new Error("Wrong par\
ameter passed: "+t)},"hwb_into_xyz_d50"),pt=o(t=>{if(f(t)&&t.space.
ident==="hwb"){let[r,e,i]=t.position,n=yt(e,r,i),a=p(N,n);return W(
a)}else throw new Error("Wrong parameter passed: "+t)},"hwb_into_\
xyz_d65");var Ml=o(t=>Z(pt(t)),"hwb_into_display_p3");var Ol=o(t=>ro(M(t)),"lab_into_display_p3");var jl=o(t=>ro(M(D(t))),"lch_into_display_p3");var Nl=o(t=>Z(z(t)),"oklab_into_display_p3");var Kl=o(t=>Z(z(Q(t))),"oklch_into_display_p3");var ts=o(t=>Z(et(t)),"prophoto_rgb_into_display_p3");var ns=o(t=>Z(G(t)),"rec2020_into_display_p3");var ls=o(t=>Z(W(t)),"srgb_into_display_p3"),ss=o(t=>Z(U(t)),"srgb\
_linear_into_display_p3");var cs=o(t=>t.position.map(q),"gam_p3"),bs=o(t=>t.position.map(J),
"lin_p3");var Ar=o((t,r,e)=>"#"+Array.of(t,r,e).map(i=>i.toString(16).padStart(
2,"0")).join(""),"rgb_to_hex"),w=o((t,r,e)=>{let i=Math.max(t,r,e),
n=Math.min(t,r,e),a=i-n,m=uo(t,r,e),s=0,_=(n+i)/2;return a!==0&&(s=
_===0||_===1?0:(i-_)/Math.min(_,1-_)),s<0&&(m+=Math.PI,s=Math.abs(
s)),s<=1e-5&&(m=NaN),[m*180/Math.PI,s*100,_*100]},"rgb_to_hsl"),uo=o(
(t,r,e)=>{let i=Math.max(t,r,e),n=Math.min(t,r,e),a=NaN,m=i-n;if(m!==
0){switch(i){case t:a=(r-e)/m+(r<e?6:0);break;case r:a=(e-t)/m+2;
break;case e:a=(t-r)/m+4}a*=Math.PI/3}return a},"rgb_to_hue"),k=o(
(t,r,e)=>{let i=uo(t,r,e),n=Math.min(t,Math.min(r,e)),a=1-Math.max(
t,Math.max(r,e));return[i*180/Math.PI,n*100,a*100]},"rgb_to_hwb");var Xs=o(t=>{let[r,e,i]=Nt(t).position;return p(S,w(r,e,i))},"a98\
_rgb_into_hsl");var Ns=o(t=>{let[r,e,i]=Ht(t).position;return p(S,w(r,e,i))},"dis\
play_p3_into_hsl");var Js=o(t=>{if(f(t)&&t.space.ident==="hwb"){let[r,e,i]=t.position,
[n,a,m]=yt(e,r,i),[s,_,l]=w(n,a,m);return p(S,[s,_,l])}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_hsl");var ef=o(t=>{let[r,e,i]=Ft(t).position;return p(S,w(r,e,i))},"lab\
_into_hsl");var sf=o(t=>{let[r,e,i]=Gt(t).position;return p(S,w(r,e,i))},"lch\
_into_hsl");var yf=o(t=>{let[r,e,i]=$t(t).position;return p(S,w(r,e,i))},"okl\
ab_into_hsl");var kf=o(t=>{let[r,e,i]=Kt(t).position;return p(S,w(r,e,i))},"okl\
ch_into_hsl");var Of=o(t=>{let[r,e,i]=qt(t).position;return p(S,w(r,e,i))},"pro\
photo_rgb_into_hsl");var Ef=o(t=>{let[r,e,i]=Ut(t).position,[n,a,m]=w(r,e,i);return p(
S,[n,a,m])},"rec2020_into_hsl");var Gf=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.space.ident)){let[
r,e,i]=t.position,[n,a,m]=w(r,e,i);return p(S,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_hsl"),Vf=o(t=>{if(f(t)&&
t.space.ident==="srgb-linear"){let[r,e,i]=t.position.map(s=>q(s)),
[n,a,m]=w(r,e,i);return p(S,[n,a,m])}else throw new Error("Wrong \
parameter passed: "+t)},"srgb_linear_into_hsl");var tx=o(t=>{let[r,e,i]=ht(t).position;return p(S,w(r,e,i))},"xyz\
_d50_into_hsl"),ox=o(t=>{let[r,e,i]=L(t).position;return p(S,w(r,
e,i))},"xyz_d65_into_hsl");var ux=o(t=>{let[r,e,i]=Nt(t).position;return p(P,k(r,e,i))},"a98\
_rgb_into_hwb");var Mx=o(t=>{let[r,e,i]=Ht(t).position;return p(P,k(r,e,i))},"dis\
play_p3_into_hwb");var Tx=o(t=>{if(f(t)&&t.space.ident==="hsl"){let[r,e,i]=t.position,
[n,a,m]=rt(e,r,i);return p(P,k(n,a,m))}else throw new Error("Wron\
g parameter passed: "+t)},"hsl_into_hwb");var Lx=o(t=>{let[r,e,i]=Ft(t).position;return p(P,k(r,e,i))},"lab\
_into_hwb");var $x=o(t=>{let[r,e,i]=Gt(t).position;return p(P,k(r,e,i))},"lch\
_into_hwb");var od=o(t=>{let[r,e,i]=$t(t).position;return p(P,k(r,e,i))},"okl\
ab_into_hwb");var _d=o(t=>{let[r,e,i]=Kt(t).position;return p(P,k(r,e,i))},"okl\
ch_into_hwb");var cd=o(t=>{let[r,e,i]=qt(t).position;return p(P,k(r,e,i))},"pro\
photo_rgb_into_hwb");var Sd=o(t=>{let[r,e,i]=Ut(t).position;return p(P,k(r,e,i))},"rec\
2020_into_hwb");var Id=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.space.ident)){let[
r,e,i]=t.position;return p(P,k(r,e,i))}else throw new Error("Wron\
g parameter passed: "+t)},"srgb_into_hwb"),Cd=o(t=>{if(f(t)&&t.space.
ident==="srgb-linear"){let[r,e,i]=t.position.map(n=>q(n));return p(
P,k(r,e,i))}else throw new Error("Wrong parameter passed: "+t)},"\
srgb_linear_into_hwb");var Zd=o(t=>{let[r,e,i]=ht(t).position;return p(P,k(r,e,i))},"xyz\
_d50_into_hwb"),jd=o(t=>{let[r,e,i]=L(t).position;return p(P,k(r,
e,i))},"xyz_d65_into_hwb");var eo=o(t=>{if(f(t)&&t.space.ident==="xyz-d50"){let r=p(T,t.position.
toArray());return x(r).multiply(g.d50.d65),r}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_xyz_d65"),y=o(t=>{if(f(
t)&&t.space.ident==="xyz-d65"){let r=p(B,t.position.toArray());return x(
r).multiply(g.d65.d50),r}else throw new Error("Wrong parameter pa\
ssed: "+t)},"xyz_d65_into_xyz_d50");var rr=o(t=>c(y(t)),"xyz_d65_into_lab"),c=o(t=>{if(f(t)&&t.space.
ident==="xyz-d50"){let r=.008856451679035631,e=29**3/3**3,[i,n,a]=t.
position.map((l,d)=>l/E[d]).map(l=>l>r?Math.cbrt(l):(e*l+16)/116),
m=116*n-16,s=500*(i-n),_=200*(n-a);return p(Rt,[m,s,_])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_lab");var d0=o(t=>{let r=F(t),e=y(r);return c(e)},"a98_rgb_into_lab");var u0=o(t=>{let r=H(t),e=y(r);return c(e)},"display_p3_into_lab");var v0=o(t=>{let r=nt(t),e=y(r);return c(e)},"hsl_into_lab");var O0=o(t=>{let r=pt(t),e=y(r);return c(e)},"hwb_into_lab");var j0=o(t=>{let r=z(t),e=y(r);return c(e)},"oklab_into_lab");var F0=o(t=>{let r=Q(t),e=z(r),i=y(e);return c(i)},"oklch_into_la\
b");var J0=o(t=>{let r=Xt(t);return c(r)},"prophoto_rgb_into_lab");var rc=o(t=>{let r=G(t),e=y(r);return c(e)},"rec2020_into_lab");var _c=o(t=>{let r=W(t),e=y(r);return c(e)},"srgb_into_lab"),mc=o(
t=>{let r=U(t),e=y(r);return c(e)},"srgb_linear_into_lab");var Y=o(t=>{if(f(t)&&t.space.ident==="lab"){let[r,e,i]=t,n=Math.atan2(
i,e)*(180/Math.PI),a=Math.hypot(e,i);return p(Co,[r,a,n])}else throw new Error(
"Wrong parameter passed: "+t)},"lab_into_lch");var Oc=o(t=>{let r=F(t),e=y(r),i=c(e);return Y(i)},"a98_rgb_into_\
lch");var Ec=o(t=>{let r=H(t),e=y(r),i=c(e);return Y(i)},"display_p3_in\
to_lch");var Gc=o(t=>{let r=nt(t),e=y(r),i=c(e);return Y(i)},"hsl_into_lch");var Uc=o(t=>{let r=pt(t),e=y(r),i=c(e);return Y(i)},"hwb_into_lch");var pb=o(t=>{let r=z(t),e=y(r),i=c(e);return Y(i)},"oklab_into_lc\
h");var db=o(t=>{let r=Q(t),e=z(r),i=y(e),n=c(i);return Y(n)},"oklch_\
into_lch");var ub=o(t=>{let r=Xt(t),e=c(r);return Y(e)},"prophoto_rgb_into_l\
ch");var Mb=o(t=>{let r=G(t),e=y(r),i=c(e);return Y(i)},"rec2020_into_\
lch");var Tb=o(t=>{let r=W(t),e=y(r),i=c(e);return Y(i)},"srgb_into_lch"),
Bb=o(t=>{let r=U(t),e=y(r),i=c(e);return Y(i)},"srgb_linear_into_\
lch");var Rb=o(t=>Y(c(t)),"xyz_d50_into_lch"),Lb=o(t=>Y(rr(t)),"xyz_d65\
_into_lch");var A=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){let[r,e,i]=t.position,
[n,a,m]=x(r,e,i).multiply(Mt).each((s,_,l)=>l[_]=Math.cbrt(s)).multiply(
Yt);return p(Ct,[n*100,a,m])}else throw new Error("Wrong paramete\
r passed: "+t)},"xyz_d65_into_oklab"),ah=o(t=>{if(f(t)&&t.space.ident===
"xyz-d50"){let[r,e,i]=t.position,[n,a,m]=x(r,e,i).multiply(g.d50.
d65).multiply(Mt).each((s,_,l)=>l[_]=Math.cbrt(s)).multiply(Yt);return p(
Ct,[n*100,a,m])}else throw new Error("Wrong parameter passed: "+t)},
"xyz_d50_into_oklab");var fh=o(t=>A(F(t)),"a98_rgb_into_oklab");var hh=o(t=>A(H(t)),"display_p3_into_oklab");var Sh=o(t=>{let r=nt(t);return A(r)},"hsl_into_oklab");var Mh=o(t=>A(pt(t)),"hwb_into_oklab");var io=o(t=>{let r=M(t),e=eo(r);return A(e)},"lab_into_oklab");var Eh=o(t=>{let r=D(t),e=M(r),i=eo(e);return A(i)},"lch_into_okl\
ab");var Hh=o(t=>A(et(t)),"prophoto_rgb_into_oklab");var Kh=o(t=>A(G(t)),"rec2020_into_oklab");var ty=o(t=>{let r=W(t);return A(r)},"srgb_into_oklab"),oy=o(t=>{
let r=U(t);return A(r)},"srgb_linear_into_oklab");var V=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){let[r,e,i]=t.position,
[n,a,m]=x(r,e,i).multiply(Mt).each((d,C,u)=>u[C]=Math.cbrt(d)).multiply(
Yt),s=n*100,_=Math.hypot(a,m),l=_<.001?NaN:Math.atan2(m,a)*180/Math.
PI;return p(At,[s,_,l])}else throw new Error("Wrong parameter pas\
sed: "+t)},"xyz_d65_into_oklch"),zy=o(t=>{if(f(t)&&t.space.ident===
"xyz-d50"){let[r,e,i]=t.position.toArray(),[n,a,m]=x(r,e,i).multiply(
g.d50.d65).multiply(Mt).each((d,C,u)=>u[C]=Math.cbrt(d)).multiply(
Yt),s=n*100,_=Math.hypot(a,m),l=_<.001?NaN:Math.atan2(m,a)*180/Math.
PI;return p(At,[s,_,l])}else throw new Error("Wrong parameter pas\
sed: "+t)},"xyz_d50_into_oklch");var vy=o(t=>{let r=F(t);return V(r)},"a98_rgb_into_oklch");var Ay=o(t=>{let r=H(t);return V(r)},"display_p3_into_oklch");var Xy=o(t=>{let r=nt(t);return V(r)},"hsl_into_oklch");var Ly=o(t=>{let r=pt(t);return V(r)},"hwb_into_oklch");var no=o(t=>{if(f(t)&&t.space.ident==="oklab"){let[r,e,i]=t,n=Math.
hypot(e,i),a=n<.001?NaN:Math.atan2(i,e)*180/Math.PI;return p(At,[
r,n,a])}else throw new Error("Wrong parameter passed: "+t)},"okla\
b_into_oklch");var Jy=o(t=>no(io(t)),"lab_into_oklch");var r5=o(t=>{let r=D(t),e=io(r);return no(e)},"lch_into_oklch");var a5=o(t=>{let r=et(t);return V(r)},"prophoto_rgb_into_oklch");var f5=o(t=>{let r=G(t);return V(r)},"rec2020_into_oklch");var h5=o(t=>{let r=W(t);return V(r)},"srgb_into_oklch"),y5=o(t=>{
let r=U(t);return V(r)},"srgb_linear_into_oklch");var er=Float64Array.of(1.3457868816471583,-.5446307051249019,0,-.25557208737979464,
1.5082477428451468,0,-.05110186497554526,.02052744743642139,1.2119675456389452),
j5=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){let[r,e,i]=t.position,
[n,a,m]=x(r,e,i).multiply(g.d65.d50).multiply(er).each((s,_,l)=>l[_]=
Bt(s));return p(co,[n,a,m])}else throw new Error("Wrong parameter\
 passed: "+t)},"xyz_d65_into_prophoto_rgb"),I=o(t=>{if(f(t)&&t.space.
ident==="xyz-d50"){let[r,e,i]=t.position,[n,a,m]=x(r,e,i).multiply(
er).each((s,_,l)=>l[_]=Bt(s));return p(co,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_prophoto_rgb");var N5=o(t=>I(No(t)),"a98_rgb_into_prophoto_rgb");var $5=o(t=>I(Ro(t)),"display_p3_into_prophoto_rgb");var ir=o(t=>M(D(t)),"lch_into_xyz_d50"),U5=o(t=>vt(D(t)),"lch_int\
o_xyz_d65");var hg=o(t=>I(tr(t)),"hsl_into_prophoto_rgb");var Sg=o(t=>I(or(t)),"hwb_into_prophoto_rgb");var Mg=o(t=>I(M(t)),"lab_into_prophoto_rgb");var Og=o(t=>I(ir(t)),"lch_into_prophoto_rgb");var Zg=o(t=>I(Vt(t)),"oklab_into_prophoto_rgb");var Dg=o(t=>I(qo(t)),"oklch_into_prophoto_rgb");var Vg=o(t=>I(Ko(t)),"rec2020_into_prophoto_rgb");var Qg=o(t=>I(It(t)),"srgb_into_prophoto_rgb"),Ug=o(t=>I(Jo(t)),"\
srgb_linear_into_prophoto_rgb");var eu=o(t=>t.position.map(Bt),"gam_prophoto"),iu=o(t=>t.position.
map(Jt),"lin_prophoto");var nr=Float64Array.of(30757411/17917100,-19765991/29648200,792561/
44930125,-6372589/17917100,47925759/29648200,-1921689/44930125,-4539589/
17917100,467509/29648200,42328811/44930125),j=o(t=>{if(f(t)&&t.space.
ident==="xyz-d65"){let[r,e,i]=t.position,[n,a,m]=x(r,e,i).multiply(
nr).each((s,_,l)=>l[_]=jt(s));return p(ho,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_rec2020"),po=o(t=>{if(f(
t)&&t.space.ident==="xyz-d50"){let[r,e,i]=t.position,[n,a,m]=x(r,
e,i).multiply(g.d50.d65).multiply(nr).each((s,_,l)=>l[_]=jt(s));return p(
ho,[n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"\
xyz_d50_into_rec2020");var Mu=o(t=>j(F(t)),"a98_rgb_into_rec2020");var Ou=o(t=>j(H(t)),"display_p3_into_rec2020");var Zu=o(t=>j(nt(t)),"hsl_into_rec2020");var Du=o(t=>j(pt(t)),"hwb_into_rec2020");var Vu=o(t=>po(M(t)),"lab_into_rec2020");var Uu=o(t=>po(M(D(t))),"lch_into_rec2020");var iz=o(t=>j(z(t)),"oklab_into_rec2020");var lz=o(t=>j(z(Q(t))),"oklch_into_rec2020");var cz=o(t=>j(et(t)),"prophoto_rgb_into_rec2020");var uz=o(t=>j(W(t)),"srgb_into_rec2020"),zz=o(t=>j(U(t)),"srgb_li\
near_into_rec2020");var kz=o(t=>t.position.map(jt),"gam_rec2020"),vz=o(t=>t.position.
map(Zt),"lin_rec2020");export{Ot as A98RGBSpace,bo as DisplayP3Space,S as HSLSpace,P as HWBSpace,
Rt as LABSpace,Co as LCHSpace,co as ProPhotoRGBSpace,To as RGBModel,
ho as Rec2020Space,B as XYZD50Space,T as XYZD65Space,nl as a98_rgb_into_display_p3,
Xs as a98_rgb_into_hsl,ux as a98_rgb_into_hwb,d0 as a98_rgb_into_lab,
Oc as a98_rgb_into_lch,fh as a98_rgb_into_oklab,vy as a98_rgb_into_oklch,
N5 as a98_rgb_into_prophoto_rgb,Mu as a98_rgb_into_rec2020,Nt as a98_rgb_into_rgb,
Nt as a98_rgb_into_srgb,gp as a98_rgb_into_srgb_linear,F as a98_rgb_into_xyz,
No as a98_rgb_into_xyz_d50,F as a98_rgb_into_xyz_d65,tp as display_p3_into_a98_rgb,
Ns as display_p3_into_hsl,Mx as display_p3_into_hwb,u0 as display_p3_into_lab,
Ec as display_p3_into_lch,hh as display_p3_into_oklab,Ay as display_p3_into_oklch,
$5 as display_p3_into_prophoto_rgb,Ou as display_p3_into_rec2020,
Ht as display_p3_into_rgb,Ht as display_p3_into_srgb,wp as display_p3_into_srgb_linear,
H as display_p3_into_xyz,Ro as display_p3_into_xyz_d50,H as display_p3_into_xyz_d65,
Bm as gam_a98,cs as gam_p3,eu as gam_prophoto,kz as gam_rec2020,d_ as gam_srgb,
N_ as hsl_into_a98_rgb,bl as hsl_into_display_p3,Tx as hsl_into_hwb,
v0 as hsl_into_lab,Gc as hsl_into_lch,Sh as hsl_into_oklab,Xy as hsl_into_oklch,
hg as hsl_into_prophoto_rgb,Zu as hsl_into_rec2020,Wp as hsl_into_rgb,
Ho as hsl_into_srgb,Tp as hsl_into_srgb_linear,nt as hsl_into_xyz,
tr as hsl_into_xyz_d50,nt as hsl_into_xyz_d65,J_ as hwb_into_a98_rgb,
Ml as hwb_into_display_p3,Js as hwb_into_hsl,O0 as hwb_into_lab,Uc as hwb_into_lch,
Mh as hwb_into_oklab,Ly as hwb_into_oklch,Sg as hwb_into_prophoto_rgb,
Du as hwb_into_rec2020,Hp as hwb_into_rgb,Hp as hwb_into_srgb,Fp as hwb_into_srgb_linear,
pt as hwb_into_xyz,or as hwb_into_xyz_d50,pt as hwb_into_xyz_d65,
p as initPointInSpace,f as isPointInSpace,om as lab_into_a98_rgb,
Ol as lab_into_display_p3,ef as lab_into_hsl,Lx as lab_into_hwb,Y as lab_into_lch,
io as lab_into_oklab,Jy as lab_into_oklch,Mg as lab_into_prophoto_rgb,
Vu as lab_into_rec2020,Ft as lab_into_rgb,Ft as lab_into_srgb,ea as lab_into_srgb_linear,
vt as lab_into_xyz,M as lab_into_xyz_d50,vt as lab_into_xyz_d65,am as lch_into_a98_rgb,
jl as lch_into_display_p3,sf as lch_into_hsl,$x as lch_into_hwb,D as lch_into_lab,
Eh as lch_into_oklab,r5 as lch_into_oklch,Og as lch_into_prophoto_rgb,
Uu as lch_into_rec2020,Gt as lch_into_rgb,Gt as lch_into_srgb,xa as lch_into_srgb_linear,
U5 as lch_into_xyz,ir as lch_into_xyz_d50,U5 as lch_into_xyz_d65,
Xm as lin_a98,bs as lin_p3,iu as lin_prophoto,vz as lin_rec2020,c_ as lin_srgb,
Ct as okLABSpace,At as okLCHSpace,fm as oklab_into_a98_rgb,Nl as oklab_into_display_p3,
yf as oklab_into_hsl,od as oklab_into_hwb,j0 as oklab_into_lab,pb as oklab_into_lch,
no as oklab_into_oklch,Zg as oklab_into_prophoto_rgb,iz as oklab_into_rec2020,
$t as oklab_into_rgb,$t as oklab_into_srgb,va as oklab_into_srgb_linear,
z as oklab_into_xyz,Vt as oklab_into_xyz_d50,z as oklab_into_xyz_d65,
zm as oklch_into_a98_rgb,Kl as oklch_into_display_p3,kf as oklch_into_hsl,
_d as oklch_into_hwb,F0 as oklch_into_lab,db as oklch_into_lch,Q as oklch_into_oklab,
Dg as oklch_into_prophoto_rgb,lz as oklch_into_rec2020,Kt as oklch_into_rgb,
Kt as oklch_into_srgb,Xa as oklch_into_srgb_linear,Qo as oklch_into_xyz,
qo as oklch_into_xyz_d50,Qo as oklch_into_xyz_d65,vm as prophoto_rgb_into_a98_rgb,
ts as prophoto_rgb_into_display_p3,Of as prophoto_rgb_into_hsl,cd as prophoto_rgb_into_hwb,
J0 as prophoto_rgb_into_lab,ub as prophoto_rgb_into_lch,Hh as prophoto_rgb_into_oklab,
a5 as prophoto_rgb_into_oklch,cz as prophoto_rgb_into_rec2020,qt as prophoto_rgb_into_rgb,
qt as prophoto_rgb_into_srgb,Ja as prophoto_rgb_into_srgb_linear,
et as prophoto_rgb_into_xyz,Xt as prophoto_rgb_into_xyz_d50,et as prophoto_rgb_into_xyz_d65,
Am as rec2020_into_a98_rgb,ns as rec2020_into_display_p3,Ef as rec2020_into_hsl,
Sd as rec2020_into_hwb,rc as rec2020_into_lab,Mb as rec2020_into_lch,
Kh as rec2020_into_oklab,f5 as rec2020_into_oklch,Vg as rec2020_into_prophoto_rgb,
Ut as rec2020_into_rgb,Ut as rec2020_into_srgb,l_ as rec2020_into_srgb_linear,
G as rec2020_into_xyz,Ko as rec2020_into_xyz_d50,G as rec2020_into_xyz_d65,
oo as rgb_into_a98_rgb,ls as rgb_into_display_p3,Gf as rgb_into_hsl,
Id as rgb_into_hwb,_c as rgb_into_lab,Tb as rgb_into_lch,ty as rgb_into_oklab,
h5 as rgb_into_oklch,Qg as rgb_into_prophoto_rgb,uz as rgb_into_rec2020,
W as rgb_into_xyz,It as rgb_into_xyz_d50,W as rgb_into_xyz_d65,Ar as rgb_to_hex,
uo as rgb_to_hue,ut as sRGBLinearSpace,N as sRGBSpace,oo as srgb_into_a98_rgb,
ls as srgb_into_display_p3,Gf as srgb_into_hsl,Id as srgb_into_hwb,
_c as srgb_into_lab,Tb as srgb_into_lch,ty as srgb_into_oklab,h5 as srgb_into_oklch,
Qg as srgb_into_prophoto_rgb,uz as srgb_into_rec2020,W as srgb_into_xyz,
It as srgb_into_xyz_d50,W as srgb_into_xyz_d65,j_ as srgb_linear_into_a98_rgb,
ss as srgb_linear_into_display_p3,Vf as srgb_linear_into_hsl,Cd as srgb_linear_into_hwb,
mc as srgb_linear_into_lab,Bb as srgb_linear_into_lch,oy as srgb_linear_into_oklab,
y5 as srgb_linear_into_oklch,Ug as srgb_linear_into_prophoto_rgb,
zz as srgb_linear_into_rec2020,U as srgb_linear_into_xyz,Jo as srgb_linear_into_xyz_d50,
U as srgb_linear_into_xyz_d65,Kn as xyz_d50_into_a98_rgb,ro as xyz_d50_into_display_p3,
tx as xyz_d50_into_hsl,Zd as xyz_d50_into_hwb,c as xyz_d50_into_lab,
Rb as xyz_d50_into_lch,ah as xyz_d50_into_oklab,zy as xyz_d50_into_oklch,
I as xyz_d50_into_prophoto_rgb,po as xyz_d50_into_rec2020,ht as xyz_d50_into_rgb,
ht as xyz_d50_into_srgb,Dt as xyz_d50_into_srgb_linear,eo as xyz_d50_into_xyz_d65,
X as xyz_d65_into_a98_rgb,Z as xyz_d65_into_display_p3,ox as xyz_d65_into_hsl,
jd as xyz_d65_into_hwb,rr as xyz_d65_into_lab,Lb as xyz_d65_into_lch,
A as xyz_d65_into_oklab,V as xyz_d65_into_oklch,j5 as xyz_d65_into_prophoto_rgb,
j as xyz_d65_into_rec2020,L as xyz_d65_into_rgb,L as xyz_d65_into_srgb,
it as xyz_d65_into_srgb_linear,y as xyz_d65_into_xyz_d50,X as xyz_into_a98_rgb,
Z as xyz_into_display_p3,ox as xyz_into_hsl,jd as xyz_into_hwb,rr as xyz_into_lab,
Lb as xyz_into_lch,A as xyz_into_oklab,V as xyz_into_oklch,j5 as xyz_into_prophoto_rgb,
j as xyz_into_rec2020,L as xyz_into_rgb,L as xyz_into_srgb,it as xyz_into_srgb_linear};
