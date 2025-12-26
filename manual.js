var ir=Object.defineProperty;var o=(t,r)=>ir(t,"name",{value:r,configurable:!0});var nr=Object.defineProperty,st=o((t,r)=>nr(t,"name",{value:r,configurable:!0}),
"r");function ao(...t){let[r,e]=t.length===1?Array.of(0,t[0]):Array.
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
return this.from<=n&&n<=this.to},"value")}}),i}o(ao,"g");st(ao,"i\
nitRange");function _o(t=[0,100],r=[0,1]){let[e,i]=r,[n,a]=t,[m,s]=[
i-e,a-n];function _(x){return typeof x=="string"&&(x=parseFloat(x)),
l.domain.test(x)===!1&&(x=x>i?(x-i)%m+e:i-(e-x)%m),s*(x-e)/m+n}o(
_,"c"),st(_,"invert");function l(x){return typeof x=="string"&&(x=
parseFloat(x)),l.range.test(x)===!1&&(x=x>a?(x-a)%s+n:a-(n-x)%s),
m*(x-n)/s+e}return o(l,"l"),st(l,"calculator"),Object.defineProperties(
l,{domain:{enumerable:!0,value:ao(e,i)},range:{enumerable:!0,value:ao(
n,a)},invert:{enumerable:!0,value:_}})}o(_o,"y");st(_o,"initScale");var pr=Object.defineProperty,ar=o((t,r)=>pr(t,"name",{value:r,configurable:!0}),
"o"),_r=ar((t,r=12)=>{let e=r>0?10**r:1;return Math.sign(t)*Math.
round((Math.abs(t)+Number.EPSILON)*e)/e},"round"),b=_r;var mo=_o([0,360],[-Math.PI,Math.PI]),St=Object.freeze({bytes:8,domain:mo.
domain,ident:"angle",input:o(t=>mo.domain.allot(b(t*Math.PI/180)),
"input"),output:o(t=>mo.range.allot(b(t*180/Math.PI)),"output"),short:"\
phi",tcoord:"polar",tgeom:"azimuth",unit:"rad"});var mr=Object.defineProperty,Pt=o((t,r)=>mr(t,"name",{value:r,configurable:!0}),
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
rho",tcoord:"polar",tgeom:"reference-ray"});var go=Object.freeze({$coord:_t,bytes:8,domain:h(0,100),ident:"sa\
turation",input:o(t=>b(t/100),"input"),output:o(t=>b(t*100),"outp\
ut"),short:"S",precision:2,unit:"%"});var lr=Object.defineProperty,wt=o((t,r)=>lr(t,"name",{value:r,configurable:!0}),
"n"),sr=wt(t=>t!==null&&typeof t=="object","isObject"),fr=wt(t=>sr(
t)&&"ident"in t&&"short"in t&&"domain"in t,"isDimension");function v(t,r,e){
let i=Iterator.from(e===void 0?[t,r]:[t,r,e]),n=e===void 0?2:3;for(let s of i.
take(n))if(fr(s)===!1)throw new TypeError("Passed wrong space dim\
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
m:Object.defineProperties(m,s)}o(v,"j");wt(v,"defCSYS");var se=v(_t,St)({adapt:{enumerable:!0,value:lo}});function lo(t=0,r=NaN){return[t*Math.cos(r),t*Math.sin(r)]}o(lo,"\
calcCartesianCoordinates");var bt=v(_t,St,mt)({adapt:{value:xr}});function xr(t,r,e){return[
...lo(t,r),e]}o(xr,"calcCubeCoordinates");var E=Float64Array.of(.9642956764295677,1,.8251046025104602);Object.
defineProperty(E,"ident",{value:"d50"});Object.freeze(E.buffer);var K=Float64Array.
of(.3127/.329,1,(1-.3127-.329)/.329);Object.defineProperty(K,"ide\
nt",{value:"d65"});Object.freeze(K.buffer);var S={CAM:v(ft,go,lt)(),CSYS:bt,ident:"hsl",whp:K};var uo=Object.freeze({$coord:mt,bytes:8,domain:h(0,100),ident:"bl\
ackness",input:o(t=>b(t/100),"input"),output:o(t=>b(t*100),"outpu\
t"),short:"B",precision:2,unit:"%"});var zo=Object.freeze({$coord:_t,ident:"whiteness",bytes:8,domain:h(
0,100),input:o(t=>b(t/100),"input"),output:o(t=>b(t*100),"output"),
short:"W",precision:2,unit:"%"});var P={CAM:v(ft,zo,uo)(),CSYS:bt,ident:"hwb",whp:K};var xt=Object.freeze({bytes:8,domain:h(-1,1),ident:"abscissa",short:"\
x",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var So=Object.freeze({$coord:xt,bytes:8,domain:h(-125,125),ident:"\
green-red",input:o(t=>b(t/125),"input"),output:o(t=>b(t*125),"out\
put"),precision:2,short:"a"}),Po=Object.freeze({$coord:xt,bytes:8,
domain:h(-.4,.4),ident:"green-red",precision:6,short:"a"});var dt=Object.freeze({bytes:8,domain:h(-1,1),ident:"ordinate",short:"\
y",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var wo=Object.freeze({$coord:dt,domain:h(-125,125),ident:"blue-ye\
llow",input:o(t=>b(t/125),"input"),output:o(t=>b(t*125),"output"),
precision:2,short:"b"}),ko=Object.freeze({$coord:dt,domain:h(-.4,
.4),ident:"blue-yellow",precision:6,short:"b"});var mi=v(xt,dt)({adapt:{value:so}});function so(t,r){let e=0,i=NaN;return(t!==0||r!==0)&&(e=Math.sqrt(
t**2+r**2),t!==0&&!r||r!==0&&!t?i=r/Math.abs(r)*(Math.PI/2):i=Math.
atan(r/t)),[e,i]}o(so,"calcPolarCoordinates");var ct=v(xt,dt,mt)({adapt:{value:dr}});function dr(t,r,e){return[
...so(t,r),e]}o(dr,"calcCylindricalCoordinates");var jt=Object.freeze({CAM:v(lt,So,wo)(),CSYS:ct,ident:"lab",whp:E});var vo=Object.freeze({$coord:_t,bytes:8,domain:h(0,150),ident:"ch\
roma",input:o(t=>b(t/150),"input"),output:o(t=>b(t*150),"output"),
precision:2,short:"C"}),Mo=Object.freeze({$coord:_t,bytes:8,domain:h(
0,.4),ident:"chroma",precision:6,short:"c"});var Yo=Object.freeze({CAM:v(lt,vo,ft)(),CSYS:bt,ident:"lch",whp:E});var Yt=Object.freeze({CAM:v(lt,Po,ko)(),CSYS:ct,ident:"oklab",whp:K});var It={CAM:v(lt,Mo,ft)(),CSYS:bt,ident:"oklch",whp:K};var Io=Object.freeze({$coord:mt,bytes:1,domain:h(0,255),ident:"bl\
ue",input:o(t=>b(t/255),"input"),output:o(t=>b(t*255,0)&255,"outp\
ut"),short:"B"});var Co=Object.freeze({$coord:dt,bytes:1,domain:h(0,255),ident:"gr\
een",input:o(t=>b(t/255),"input"),output:o(t=>b(t*255,0)&255,"out\
put"),short:"G"});var Ao=Object.freeze({$coord:xt,bytes:1,domain:h(0,255),ident:"re\
d",input:o(t=>b(t/255),"input"),output:o(t=>b(t*255,0)&255,"outpu\
t"),short:"R"});var gt=ct,fo=Object.freeze({ident:"prophoto-rgb",CSYS:gt,luminance:h(
160,640),whp:E}),kt=K,Oo=Object.freeze({ident:"rgb",CAM:v(Ao,Co,Io)(),
CSYS:gt,whp:kt}),N=Object.freeze({ident:"srgb",CSYS:gt,whp:kt}),ut=Object.
freeze({ident:"srgb-linear",CSYS:gt,whp:kt}),Ct=Object.freeze({ident:"\
a98-rgb",CSYS:gt,whp:kt}),xo=Object.freeze({ident:"display-p3",CSYS:gt,
whp:kt}),co=Object.freeze({ident:"rec2020",CSYS:gt,whp:kt});var T=Object.freeze({ident:"xyz-d65",CSYS:ct,whp:K}),B=Object.freeze(
{ident:"xyz-d50",CSYS:ct,whp:E});var At=o(t=>Math.sign(t)*Math.pow(Math.abs(t),2.19921875),"to_lin\
ear"),Ot=o(t=>Math.sign(t)*Math.pow(Math.abs(t),256/563),"to_gamu\
t");var J=o(t=>{let r=Math.abs(t);return r<=.04045?t/12.92:Math.sign(
t)*b(Math.pow((r+.055)/1.055,2.4))},"to_linear"),q=o(t=>{let r=Math.
abs(t);return r>.0031308?Math.sign(t)*b(1.055*Math.pow(r,1/2.4)-.055):
12.92*t},"to_gamut");var g={d65:{d50:Float64Array.of(1.0479297925449969,.02962780877005599,
-.009243040646204504,.022946870601609652,.9904344267538799,.015055191490298152,
-.05019226628920524,-.017073799063418826,.7518742814281371)},d50:{
d65:Float64Array.of(.955473421488075,-.0283697093338637,.012314014864481998,
-.02309845494876471,1.0099953980813041,-.020507649298898964,.06325924320057072,
.021041441191917323,1.330365926242124)}};var cr=Object.defineProperty,R=o((t,r)=>cr(t,"name",{value:r,configurable:!0}),
"t"),Wo=R(t=>typeof t=="number"||t instanceof Number,"isNumber"),
br=R((t,r=12)=>{let e=r>0?10**r:1;return Math.sign(t)*Math.round(
(Math.abs(t)+Number.EPSILON)*e)/e},"round"),To=R(t=>bo(t)&&Symbol.
iterator in t&&typeof t[Symbol.iterator]=="function","isIterableO\
bject"),bo=R(t=>t!==null&&typeof t=="object","isObject"),hr=R(t=>typeof t==
"string","isString"),yr=R(t=>hr(t)&&gr.has(t),"isSpaceID"),Bo=R(t=>bo(
t)&&"ident"in t&&yr(t.ident)&&"CSYS"in t&&bo(t.CSYS)&&"length"in t.
CSYS&&t.CSYS.length===3,"isColorSpace"),gr=new Set(["a98-rgb","di\
splay-p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb",
"rec2020","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz-d65"]),
f=R(t=>To(t)&&Iterator.from(t).every(r=>Wo(r))&&"length"in t&&t.length===
3&&"space"in t&&Bo(t.space),"isPointInSpace");function p(t,r){if(Bo(
t)===!1)throw new TypeError("Point must be declared in a valid co\
lor space instead of "+JSON.stringify(t,void 0,2));if((To(r)&&Iterator.
from(r).every(_=>Wo(_)))===!1)throw new TypeError("Point in space\
 has valid coordinates. Wrong parameters: "+JSON.stringify(r,void 0,
2));let e=t.CSYS.length,i=new Float64Array(e),n=t.CAM===void 0?Array.
of(0,1,2):t.CAM.toArray().map(_=>t.CSYS.toArray().findIndex(l=>_.
$coord===l)),a={[Symbol.iterator]:{value:R(function*(){yield this[0],
yield this[1],yield this[2]},"value")},length:{value:e}},m=(_=>({
adapted:{get(){if(typeof this.space.CSYS.adapt=="function"){let[l,
x,I]=this.position;return Iterator.from(this.space.CSYS.adapt(l,x,
I))}else return this.position}},position:{get(){return Object.defineProperties(
_.values(),{length:{value:3},space:{value:t}})},set(l){_.set(l)}},
set:{value:R(function(l){let x=Array.from(l),I=Math.min(x.length,
3);for(let z=0;z<I;z++)this[z]=x[z];return this},"value")}}))(i);
for(let _=0;_<e;_++)((l,x,I)=>{m[l]={get(){let{CAM:z,CSYS:tt}=this.
space,V=I[x],ot=tt[x];"output"in ot&&typeof ot.output=="function"&&
(V=ot.output(V));let at=z!==void 0&&z[l];at&&typeof at.output=="f\
unction"&&(V=at.output(V));let{precision:Zt=9,unit:zt=""}=at||ot;
return Object.defineProperties(new Number(V),{digits:{enumerable:!0,
value:Zt},toString:{value:R(function(){return isNaN(this)?"none":
(Number.isInteger(this)?this:br(this,Zt))+zt},"value")},unit:{enumerable:!0,
value:zt}})},set(z){let{CAM:tt,CSYS:V}=this.space,ot=V[x],at=tt!==
void 0?tt[l]:null;at!==null&&"input"in at&&typeof at.input=="func\
tion"&&(z=at.input(z)),"input"in ot&&typeof ot.input=="function"&&
(z=ot.input(z)),typeof z=="string"&&(z=parseFloat(z)),I[x]=z}}})(
_,n[_],i);let s={buffer:{value:i.buffer},equals:{value:R(function(_,l=1e-12){
let[x,I,z]=this.position,[tt,V,ot]=_.position;return this.space.ident===
_.space.ident&&Math.abs(x-tt)<=l*Math.max(1,Math.abs(x),Math.abs(
tt))&&Math.abs(I-V)<=l*Math.max(1,Math.abs(I),Math.abs(V))&&Math.
abs(z-ot)<=l*Math.max(1,Math.abs(z),Math.abs(ot))},"value")},entries:{
value:R(function(){let _=this.space.CAM??this.space.CSYS;return Iterator.
from([[_[0],this[0]],[_[1],this[1]],[_[2],this[2]]])},"value")},space:{
value:t},values:{value:R(function(){return Iterator.from(this).map(
_=>_.valueOf())},"value")}};return Object.create(null,{...s,...a,
...m,[Symbol.toStringTag]:{get(){return`PointInSpace: [${this.toString()}\
] \u2208 ${this.space.ident.toUpperCase()}`}},toString:{value:R(function(){
return Iterator.from(this).toArray().toString()},"value")}}).set(
r)}o(p,"_");R(p,"initPointInSpace");var ur=Object.defineProperty,O=o((t,r)=>ur(t,"name",{value:r,configurable:!0}),
"t"),zr=O(t=>typeof t=="number"||t instanceof Number,"isNumber"),
Xo=O(t=>ho(t)&&Symbol.iterator in t&&typeof t[Symbol.iterator]=="\
function","isIterableObject"),ho=O(t=>t!==null&&typeof t=="object",
"isObject"),Sr=O(t=>typeof t=="string","isString"),Pr=O(t=>Sr(t)&&
kr.has(t),"isSpaceID"),wr=O(t=>ho(t)&&"ident"in t&&Pr(t.ident)&&"\
CSYS"in t&&ho(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===3,"isCo\
lorSpace"),kr=new Set(["a98-rgb","display-p3","hsl","hwb","lab","\
lch","oklab","oklch","prophoto-rgb","rec2020","srgb-linear","srgb",
"rgb","xyz","xyz-d50","xyz-d65"]),vr=O(t=>Xo(t)&&Iterator.from(t).
every(r=>zr(r))&&"length"in t&&t.length===3&&"space"in t&&wr(t.space),
"isPointInSpace"),Mr=O((t,r=12)=>{let e=r>0?10**r:1;return Math.sign(
t)*Math.round((Math.abs(t)+Number.EPSILON)*e)/e},"round");function d(t,r=0,e=0){
let i=vr(t)?new Float64Array(t.buffer):Float64Array.of(t,r,e),{length:n}=i,
a={each:{value:O(function(_){for(let l=0;l<this.length;l++)_(this[l],
l,this);return this},"value")},multiply:{value:O(function(_){if(Xo(
_)){let[l,x,I,z,tt,V,ot,at,Zt]=_,[zt,no,po]=this.head;return this.
update(zt*l+no*z+po*ot,zt*x+no*tt+po*at,zt*I+no*V+po*Zt)}else throw new TypeError(
"Unsupported Multiplicator: "+_)},"multiply")},update:{value:O(function(_,l,x){
let[I,z,tt]=(Array.isArray(_)?_.slice(3):Array.of(_,l,x)).filter(
V=>typeof V=="number");return this.head=Array.of(I??this[0],z??this[1],
tt??this[2]),this},"value")}},m={base:{get:O(()=>Iterator.from([0,
0,0]),"get")},head:{enumerable:!0,get:O(()=>Iterator.from(i),"get"),
set:O(_=>i.set(_),"set")},magnitude:{enumerable:!0,get(){return Mr(
Math.hypot(...this.head))}}},s={[Symbol.iterator]:{value:O(function*(){
for(let _ of this.head)yield _},"value")},length:{enumerable:!0,value:n}};
for(let _=0;_<n;_++)(l=>{s[l]={enumerable:!0,get:O(()=>i[l],"get"),
set:O(x=>{if(typeof x=="number")i[_]=x;else throw new TypeError("\
Expected Number")},"set")}})(_);return Object.create(null,Object.
assign({},a,m,s))}o(d,"$");O(d,"makeVectorQuantity");var Zo=Float64Array.of(608311/1250200,35783/156275,0,189793/714400,
247089/357200,32229/714400,198249/1000160,198249/2500400,5220557/
5000800),H=o(t=>{if(f(t)&&t.space.ident==="display-p3"){let[r,e,i]=t.
position,[n,a,m]=d(r,e,i).each((s,_,l)=>l[_]=J(s)).multiply(Zo);return p(
T,[n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"d\
isplay_p3_into_xyz_d65"),jo=o(t=>{if(f(t)&&t.space.ident==="displ\
ay-p3"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).each((s,_,l)=>l[_]=
J(s)).multiply(Zo).multiply(g.d65.d50);return p(B,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"display_p3_into_xyz_d50");var Eo=Float64Array.of(1829569/896150,-851781/878810,16779/1248040,
-506331/896150,1648619/878810,-147721/1248040,-308931/896150,36519/
878810,1266979/1248040),X=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){
let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(Eo).each((s,_,l)=>l[_]=
Ot(s));return p(Ct,[n,a,m])}else throw new Error("Wrong parameter\
 passed: "+t)},"xyz_d65_into_a98_rgb"),$n=o(t=>{if(f(t)&&t.space.
ident==="xyz-d50"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(
g.d50.d65).multiply(Eo).each((s,_,l)=>l[_]=Ot(s));return p(Ct,[n,
a,m])}else throw new Error("Wrong parameter passed: "+t)},"xyz_d5\
0_into_a98_rgb");var Qn=o(t=>X(H(t)),"display_p3_into_a98_rgb");var Ro=Float64Array.of(573536/994567,591459/1989134,53769/1989134,
263643/1420810,6239551/9945670,351524/4972835,187206/994567,374412/
4972835,4929758/4972835),F=o(t=>{if(f(t)&&t.space.ident==="a98-rg\
b"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).each((s,_,l)=>l[_]=At(
s)).multiply(Ro);return p(T,[n,a,m])}else throw new Error("Wrong \
parameter passed: "+t)},"a98_rgb_into_xyz_d65"),Lo=o(t=>{if(f(t)&&
t.space.ident==="a98-rgb"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).
each((s,_,l)=>l[_]=At(s)).multiply(Ro).multiply(g.d65.d50);return p(
B,[n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"a\
98_rgb_into_xyz_d50");var Et=Float64Array.of(12831/3959,-851781/878810,705/12673,-329/214,
1648619/878810,-2585/12673,-1974/3959,36519/878810,705/667),L=o(t=>{
if(f(t)&&t.space.ident==="xyz-d65"){let[r,e,i]=t.position,[n,a,m]=d(
r,e,i).multiply(Et).each((s,_,l)=>l[_]=q(s));return p(N,[n,a,m])}else
throw new Error("Wrong parameter passed: "+t)},"xyz_d65_into_srgb"),
it=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){let[r,e,i]=t.position,
[n,a,m]=d(r,e,i).multiply(Et);return p(ut,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_srgb_linear"),ht=o(t=>{
if(f(t)&&t.space.ident==="xyz-d50"){let[r,e,i]=t.position,[n,a,m]=d(
r,e,i).multiply(g.d50.d65).multiply(Et).each((s,_,l)=>l[_]=q(s));
return p(N,[n,a,m])}else throw new Error("Wrong parameter passed:\
 "+t)},"xyz_d50_into_srgb"),Rt=o(t=>{if(f(t)&&t.space.ident==="xy\
z-d50"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(g.d50.d65).
multiply(Et);return p(ut,[n,a,m])}else throw new Error("Wrong par\
ameter passed: "+t)},"xyz_d50_into_srgb_linear");var Lt=o(t=>L(F(t)),"a98_rgb_into_srgb"),hp=o(t=>it(F(t)),"a98_rg\
b_into_srgb_linear");var Dt=o(t=>L(H(t)),"display_p3_into_srgb"),Sp=o(t=>it(H(t)),"dis\
play_p3_into_srgb_linear");var rt=o((t,r,e)=>{let i=2*Math.PI,n=Math.PI/6;t<0&&(t+=i),t=t%i;
let a=o(m=>{let s=(m+t/n)%12,_=r*Math.min(e,1-e);return e-_*Math.
max(-1,Math.min(s-3,9-s,1))},"f");return[a(0),a(8),a(4)]},"hsl_to\
_rgb");var Ap=o(t=>{if(f(t)&&t.space.ident==="hsl"){let[r,e,i]=t.position,
n=rt(e,r,i).map(a=>Math.min(Math.max(Math.round(a*255),0),255));return p(
Oo,n)}else throw new Error("Wrong parameter passed: "+t)},"hsl_in\
to_rgb"),Do=o(t=>{if(f(t)&&t.space.ident==="hsl"){let[r,e,i]=t.position,
n=rt(e,r,i);return p(N,n)}else throw new Error("Wrong parameter p\
assed: "+t)},"hsl_into_srgb"),Op=o(t=>{if(f(t)&&t.space.ident==="\
hsl"){let[r,e,i]=t.position,n=rt(e,r,i).map(a=>J(a));return p(ut,
n)}else throw new Error("Wrong parameter passed: "+t)},"hsl_into_\
srgb_linear");var yt=o((t,r,e)=>{if(r+e>=1){let i=r/(r+e);return[i,i,i]}else{let[
i,n,a]=rt(t,1,.5).map(m=>m*(1-r-e)+r);return[i,n,a]}},"hwb_to_rgb");var Dp=o(t=>{if(f(t)&&t.space.ident==="hwb"){let[r,e,i]=t.position,
n=yt(e,r,i);return p(N,n)}else throw new Error("Wrong parameter p\
assed: "+t)},"hwb_into_srgb"),Np=o(t=>{if(f(t)&&t.space.ident==="\
hwb"){let[r,e,i]=t.position,n=yt(e,r,i).map(a=>J(a));return p(ut,
n)}else throw new Error("Wrong parameter passed: "+t)},"hwb_into_\
srgb_linear");var M=o(t=>{if(f(t)&&t.space.ident==="lab"){let r=903.2962962962963,
e=216/24389,[i,n,a]=t,m=(i+16)/116,s=n/500+m,_=Math.pow(s,3),l=m-
a/200,x=Math.pow(l,3),I=(_>e?_:(116*s-16)/r)*E[0],z=(i>r*e?Math.pow(
(i+16)/116,3):i/r)*E[1],tt=(x>e?x:(116*l-16)/r)*E[2];return p(B,[
I,z,tt])}else throw new Error("Wrong parameter passed: "+t)},"lab\
_into_xyz_d50"),vt=o(t=>{let r=M(t),[e,i,n]=d(r).multiply(g.d50.d65);
return p(T,[e,i,n])},"lab_into_xyz_d65");var Nt=o(t=>ht(M(t)),"lab_into_srgb"),oa=o(t=>Rt(M(t)),"lab_into_\
srgb_linear");var D=o(t=>{if(f(t)&&t.space.ident==="lch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=e*Math.cos(i),a=e*Math.sin(i);return p(
jt,[r,n,a])}else throw new Error("Wrong parameter passed: "+t)},"\
lch_into_lab");var Ht=o(t=>ht(M(D(t))),"lch_into_srgb"),sa=o(t=>Rt(M(D(t))),"lch\
_into_srgb_linear");var u=o(t=>{if(f(t)&&t.space.ident==="oklab"){let r=Float64Array.
of(1,1,1,.3963377773761749,-.1055613458156586,-.0894841775298119,
.2158037573099136,-.0638541728258133,-1.2914855480194092),e=Float64Array.
of(1.2268798758459243,-.0405757452148008,-.0763729366746601,-.5578149944602171,
1.112286803280317,-.4214933324022432,.2813910456659647,-.0717110580655164,
1.5869240198367816),[i,n,a]=t.position,[m,s,_]=d(a,i,n).multiply(
r).each((l,x,I)=>I[x]=l**3).multiply(e);return p(T,[m,s,_])}else throw new Error(
"Wrong parameter passed: "+t)},"oklab_into_xyz_d65"),Ft=o(t=>{let[
r,e,i]=d(u(t)).multiply(g.d65.d50);return p(B,[r,e,i])},"oklab_in\
to_xyz_d50");var Gt=o(t=>L(u(t)),"oklab_into_srgb"),Sa=o(t=>it(u(t)),"oklab_in\
to_srgb_linear");var Q=o(t=>{if(f(t)&&t.space.ident==="oklch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=isNaN(i)?0:e*Math.cos(i),a=isNaN(i)?0:
e*Math.sin(i);return p(Yt,[r,n,a])}else throw new Error("Wrong pa\
rameter passed: "+t)},"oklch_into_oklab");var $t=o(t=>L(u(Q(t))),"oklch_into_srgb"),Oa=o(t=>it(u(Q(t))),"ok\
lch_into_srgb_linear");var Vt=o(t=>{let r=Math.abs(t);return r<=.03125?t/16:Math.sign(t)*
Math.pow(r,1.8)},"to_linear"),Wt=o(t=>{let r=Math.abs(t);return r>=
1/512?Math.sign(t)*Math.pow(r,1/1.8):16*t},"to_gamut");var Yr=Float64Array.of(.7977666449006423,.2880748288194013,0,.13518129740053308,
.711835234241873,0,.0313477341283922,8993693872564e-17,.8251046025104602),
Tt=o(t=>{if(f(t)&&t.space.ident==="prophoto-rgb"){let r=p(B,t.position.
toArray());return d(r).each((e,i,n)=>n[i]=Vt(e)).multiply(Yr),r}else
throw new Error("Wrong parameter passed: "+t)},"prophoto_rgb_into\
_xyz_d50"),et=o(t=>{let r=Tt(t),e=p(T,r.position.toArray());return d(
e).multiply(g.d50.d65),e},"prophoto_rgb_into_xyz_d65");var Kt=o(t=>L(et(t)),"prophoto_rgb_into_srgb"),Ga=o(t=>it(et(t)),
"prophoto_rgb_into_srgb_linear");var Jt=1.09929682680944,No=.018053968510807,Bt=o(t=>{let r=Math.abs(
t);return r<No*4.5?t/4.5:Math.sign(t)*Math.pow((r+Jt-1)/Jt,1/.45)},
"to_linear"),Xt=o(t=>{let r=Math.abs(t);return r>No?Math.sign(t)*
(Jt*Math.pow(r,.45)-(Jt-1)):4.5*t},"to_gamut");var Ho=Float64Array.of(63426534/99577255,26158966/99577255,4994106574466076e-32,
20160776/139408157,472592308/697040785,19567812/697040785,47086771/
278816314,8267143/139408157,295819943/278816314),G=o(t=>{if(f(t)&&
t.space.ident==="rec2020"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).
each((s,_,l)=>l[_]=Bt(s)).multiply(Ho);return p(T,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"rec2020_into_xyz_d65"),Fo=o(t=>{if(f(
t)&&t.space.ident==="rec2020"){let[r,e,i]=t.position,[n,a,m]=d(r,
e,i).each((s,_,l)=>l[_]=Bt(s)).multiply(Ho).multiply(g.d65.d50);return p(
B,[n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"r\
ec2020_into_xyz_d50");var qt=o(t=>L(G(t)),"rec2020_into_srgb"),p_=o(t=>it(G(t)),"rec202\
0_into_srgb_linear");var l_=o(t=>t.position.map(q),"gam_srgb"),s_=o(t=>t.position.map(
J),"lin_srgb");var Qt=Float64Array.of(506752/1228815,87098/409605,7918/409605,87881/
245763,175762/245763,87881/737289,12673/70218,12673/175545,1001167/
1053270),W=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.space.ident)){
let[r,e,i]=t.position,[n,a,m]=d(r,e,i).each((s,_,l)=>l[_]=J(s)).multiply(
Qt);return p(T,[n,a,m])}else throw new Error("Wrong parameter pas\
sed: "+t)},"srgb_into_xyz_d65"),U=o(t=>{if(f(t)&&t.space.ident===
"srgb-linear"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(Qt);
return p(T,[n,a,m])}else throw new Error("Wrong parameter passed:\
 "+t)},"srgb_linear_into_xyz_d65"),Mt=o(t=>{if(f(t)&&["rgb","srgb"].
includes(t.space.ident)){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).each(
(s,_,l)=>l[_]=J(s)).multiply(Qt).multiply(g.d65.d50);return p(B,[
n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"srgb\
_into_xyz_d50"),Go=o(t=>{if(f(t)&&t.space.ident==="srgb-linear"){
let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(Qt).multiply(g.d65.
d50);return p(B,[n,a,m])}else throw new Error("Wrong parameter pa\
ssed: "+t)},"srgb_linear_into_xyz_d50");var Ut=o(t=>X(W(t)),"srgb_into_a98_rgb"),T_=o(t=>X(U(t)),"srgb_li\
near_into_a98_rgb");var E_=o(t=>Ut(Do(t)),"hsl_into_a98_rgb");var G_=o(t=>{if(f(t)&&t.space.ident==="hwb"){let[r,e,i]=t.position;
if(r+i>=1){let n=r/(r+i);return p(Ct,[n,n,n])}else{let n=rt(e,1,.5).
map(a=>a*(1-r-i)+r);return Ut(p(N,n))}}else throw new Error("Wron\
g parameter passed: "+t)},"hwb_into_a98_rgb");var q_=o(t=>X(vt(t)),"lab_into_a98_rgb");var em=o(t=>X(vt(D(t))),"lch_into_a98_rgb");var _m=o(t=>X(u(t)),"oklab_into_a98_rgb");var $o=o(t=>Ft(Q(t)),"oklch_into_xyz_d50"),Vo=o(t=>u(Q(t)),"oklch\
_into_xyz_d65");var hm=o(t=>X(Vo(t)),"oklch_into_a98_rgb");var Sm=o(t=>X(et(t)),"prophoto_rgb_into_a98_rgb");var Mm=o(t=>X(G(t)),"rec2020_into_a98_rgb");var Am=o(t=>t.position.map(Ot),"gam_a98"),Om=o(t=>t.position.map(
At),"lin_a98");var Ko=Float64Array.of(446124/178915,-14852/17905,11844/330415,-333277/
357830,63121/35810,-50337/660830,-72051/178915,423/17905,316169/330415),
Z=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){let[r,e,i]=t.position,
[n,a,m]=d(r,e,i).multiply(Ko).each((s,_,l)=>l[_]=q(s));return p(xo,
[n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"xyz\
_d65_into_display_p3"),to=o(t=>{if(f(t)&&t.space.ident==="xyz-d50"){
let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(g.d50.d65).multiply(
Ko).each((s,_,l)=>l[_]=q(s));return p(xo,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_display_p3");var ol=o(t=>Z(F(t)),"a98_rgb_into_display_p3");var Jo=o(t=>{if(f(t)&&t.space.ident==="hsl"){let[r,e,i]=t.position,
n=rt(e,r,i),a=p(N,n);return Mt(a)}else throw new Error("Wrong par\
ameter passed: "+t)},"hsl_into_xyz_d50"),nt=o(t=>{if(f(t)&&t.space.
ident==="hsl"){let[r,e,i]=t.position,n=rt(e,r,i),a=p(N,n);return W(
a)}else throw new Error("Wrong parameter passed: "+t)},"hsl_into_\
xyz_d65");var fl=o(t=>Z(nt(t)),"hsl_into_display_p3");var qo=o(t=>{if(f(t)&&t.space.ident==="hwb"){let[r,e,i]=t.position,
n=yt(e,r,i),a=p(N,n);return Mt(a)}else throw new Error("Wrong par\
ameter passed: "+t)},"hwb_into_xyz_d50"),pt=o(t=>{if(f(t)&&t.space.
ident==="hwb"){let[r,e,i]=t.position,n=yt(e,r,i),a=p(N,n);return W(
a)}else throw new Error("Wrong parameter passed: "+t)},"hwb_into_\
xyz_d65");var Pl=o(t=>Z(pt(t)),"hwb_into_display_p3");var Yl=o(t=>to(M(t)),"lab_into_display_p3");var Tl=o(t=>to(M(D(t))),"lch_into_display_p3");var El=o(t=>Z(u(t)),"oklab_into_display_p3");var Fl=o(t=>Z(u(Q(t))),"oklch_into_display_p3");var Jl=o(t=>Z(et(t)),"prophoto_rgb_into_display_p3");var os=o(t=>Z(G(t)),"rec2020_into_display_p3");var ps=o(t=>Z(W(t)),"srgb_into_display_p3"),as=o(t=>Z(U(t)),"srgb\
_linear_into_display_p3");var ss=o(t=>t.position.map(q),"gam_p3"),fs=o(t=>t.position.map(J),
"lin_p3");var Ir=o((t,r,e)=>"#"+Array.of(t,r,e).map(i=>i.toString(16).padStart(
2,"0")).join(""),"rgb_to_hex"),w=o((t,r,e)=>{let i=Math.max(t,r,e),
n=Math.min(t,r,e),a=i-n,m=yo(t,r,e),s=0,_=(n+i)/2;return a!==0&&(s=
_===0||_===1?0:(i-_)/Math.min(_,1-_)),s<0&&(m+=Math.PI,s=Math.abs(
s)),s<=1e-5&&(m=NaN),[m*180/Math.PI,s*100,_*100]},"rgb_to_hsl"),yo=o(
(t,r,e)=>{let i=Math.max(t,r,e),n=Math.min(t,r,e),a=NaN,m=i-n;if(m!==
0){switch(i){case t:a=(r-e)/m+(r<e?6:0);break;case r:a=(e-t)/m+2;
break;case e:a=(t-r)/m+4}a*=Math.PI/3}return a},"rgb_to_hue"),k=o(
(t,r,e)=>{let i=yo(t,r,e),n=Math.min(t,Math.min(r,e)),a=1-Math.max(
t,Math.max(r,e));return[i*180/Math.PI,n*100,a*100]},"rgb_to_hwb");var Os=o(t=>{let[r,e,i]=Lt(t).position;return p(S,w(r,e,i))},"a98\
_rgb_into_hsl");var Es=o(t=>{let[r,e,i]=Dt(t).position;return p(S,w(r,e,i))},"dis\
play_p3_into_hsl");var Gs=o(t=>{if(f(t)&&t.space.ident==="hwb"){let[r,e,i]=t.position,
[n,a,m]=yt(e,r,i),[s,_,l]=w(n,a,m);return p(S,[s,_,l])}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_hsl");var Us=o(t=>{let[r,e,i]=Nt(t).position;return p(S,w(r,e,i))},"lab\
_into_hsl");var af=o(t=>{let[r,e,i]=Ht(t).position;return p(S,w(r,e,i))},"lch\
_into_hsl");var df=o(t=>{let[r,e,i]=Gt(t).position;return p(S,w(r,e,i))},"okl\
ab_into_hsl");var zf=o(t=>{let[r,e,i]=$t(t).position;return p(S,w(r,e,i))},"okl\
ch_into_hsl");var Yf=o(t=>{let[r,e,i]=Kt(t).position;return p(S,w(r,e,i))},"pro\
photo_rgb_into_hsl");var Bf=o(t=>{let[r,e,i]=qt(t).position,[n,a,m]=w(r,e,i);return p(
S,[n,a,m])},"rec2020_into_hsl");var Df=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.space.ident)){let[
r,e,i]=t.position,[n,a,m]=w(r,e,i);return p(S,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_hsl"),Nf=o(t=>{if(f(t)&&
t.space.ident==="srgb-linear"){let[r,e,i]=t.position.map(s=>q(s)),
[n,a,m]=w(r,e,i);return p(S,[n,a,m])}else throw new Error("Wrong \
parameter passed: "+t)},"srgb_linear_into_hsl");var Jf=o(t=>{let[r,e,i]=ht(t).position;return p(S,w(r,e,i))},"xyz\
_d50_into_hsl"),qf=o(t=>{let[r,e,i]=L(t).position;return p(S,w(r,
e,i))},"xyz_d65_into_hsl");var bx=o(t=>{let[r,e,i]=Lt(t).position;return p(P,k(r,e,i))},"a98\
_rgb_into_hwb");var Px=o(t=>{let[r,e,i]=Dt(t).position;return p(P,k(r,e,i))},"dis\
play_p3_into_hwb");var Cx=o(t=>{if(f(t)&&t.space.ident==="hsl"){let[r,e,i]=t.position,
[n,a,m]=rt(e,r,i);return p(P,k(n,a,m))}else throw new Error("Wron\
g parameter passed: "+t)},"hsl_into_hwb");var Zx=o(t=>{let[r,e,i]=Nt(t).position;return p(P,k(r,e,i))},"lab\
_into_hwb");var Hx=o(t=>{let[r,e,i]=Ht(t).position;return p(P,k(r,e,i))},"lch\
_into_hwb");var qx=o(t=>{let[r,e,i]=Gt(t).position;return p(P,k(r,e,i))},"okl\
ab_into_hwb");var id=o(t=>{let[r,e,i]=$t(t).position;return p(P,k(r,e,i))},"okl\
ch_into_hwb");var sd=o(t=>{let[r,e,i]=Kt(t).position;return p(P,k(r,e,i))},"pro\
photo_rgb_into_hwb");var yd=o(t=>{let[r,e,i]=qt(t).position;return p(P,k(r,e,i))},"rec\
2020_into_hwb");var kd=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.space.ident)){let[
r,e,i]=t.position;return p(P,k(r,e,i))}else throw new Error("Wron\
g parameter passed: "+t)},"srgb_into_hwb"),vd=o(t=>{if(f(t)&&t.space.
ident==="srgb-linear"){let[r,e,i]=t.position.map(n=>q(n));return p(
P,k(r,e,i))}else throw new Error("Wrong parameter passed: "+t)},"\
srgb_linear_into_hwb");var Wd=o(t=>{let[r,e,i]=ht(t).position;return p(P,k(r,e,i))},"xyz\
_d50_into_hwb"),Td=o(t=>{let[r,e,i]=L(t).position;return p(P,k(r,
e,i))},"xyz_d65_into_hwb");var oo=o(t=>{if(f(t)&&t.space.ident==="xyz-d50"){let r=p(T,t.position.
toArray());return d(r).multiply(g.d50.d65),r}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_xyz_d65"),y=o(t=>{if(f(
t)&&t.space.ident==="xyz-d65"){let r=p(B,t.position.toArray());return d(
r).multiply(g.d65.d50),r}else throw new Error("Wrong parameter pa\
ssed: "+t)},"xyz_d65_into_xyz_d50");var Qo=o(t=>c(y(t)),"xyz_d65_into_lab"),c=o(t=>{if(f(t)&&t.space.
ident==="xyz-d50"){let r=.008856451679035631,e=29**3/3**3,[i,n,a]=t.
position.map((l,x)=>l/E[x]).map(l=>l>r?Math.cbrt(l):(e*l+16)/116),
m=116*n-16,s=500*(i-n),_=200*(n-a);return p(jt,[m,s,_])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_lab");var l0=o(t=>{let r=F(t),e=y(r);return c(e)},"a98_rgb_into_lab");var b0=o(t=>{let r=H(t),e=y(r);return c(e)},"display_p3_into_lab");var S0=o(t=>{let r=nt(t),e=y(r);return c(e)},"hsl_into_lab");var Y0=o(t=>{let r=pt(t),e=y(r);return c(e)},"hwb_into_lab");var T0=o(t=>{let r=u(t),e=y(r);return c(e)},"oklab_into_lab");var L0=o(t=>{let r=Q(t),e=u(r),i=y(e);return c(i)},"oklch_into_la\
b");var G0=o(t=>{let r=Tt(t);return c(r)},"prophoto_rgb_into_lab");var Q0=o(t=>{let r=G(t),e=y(r);return c(e)},"rec2020_into_lab");var ic=o(t=>{let r=W(t),e=y(r);return c(e)},"srgb_into_lab"),nc=o(
t=>{let r=U(t),e=y(r);return c(e)},"srgb_linear_into_lab");var Y=o(t=>{if(f(t)&&t.space.ident==="lab"){let[r,e,i]=t,n=Math.atan2(
i,e)*(180/Math.PI),a=Math.hypot(e,i);return p(Yo,[r,a,n])}else throw new Error(
"Wrong parameter passed: "+t)},"lab_into_lch");var Yc=o(t=>{let r=F(t),e=y(r),i=c(e);return Y(i)},"a98_rgb_into_\
lch");var Bc=o(t=>{let r=H(t),e=y(r),i=c(e);return Y(i)},"display_p3_in\
to_lch");var Dc=o(t=>{let r=nt(t),e=y(r),i=c(e);return Y(i)},"hsl_into_lch");var Kc=o(t=>{let r=pt(t),e=y(r),i=c(e);return Y(i)},"hwb_into_lch");var rb=o(t=>{let r=u(t),e=y(r),i=c(e);return Y(i)},"oklab_into_lc\
h");var lb=o(t=>{let r=Q(t),e=u(r),i=y(e),n=c(i);return Y(n)},"oklch_\
into_lch");var bb=o(t=>{let r=Tt(t),e=c(r);return Y(e)},"prophoto_rgb_into_l\
ch");var Pb=o(t=>{let r=G(t),e=y(r),i=c(e);return Y(i)},"rec2020_into_\
lch");var Cb=o(t=>{let r=W(t),e=y(r),i=c(e);return Y(i)},"srgb_into_lch"),
Ab=o(t=>{let r=U(t),e=y(r),i=c(e);return Y(i)},"srgb_linear_into_\
lch");var Xb=o(t=>Y(c(t)),"xyz_d50_into_lch"),Zb=o(t=>Y(Qo(t)),"xyz_d65\
_into_lch");var C=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){let[r,e]=tr(),[i,
n,a]=t.position,[m,s,_]=d(i,n,a).multiply(r).each((l,x,I)=>I[x]=Math.
cbrt(l)).multiply(e);return p(Yt,[m*100,s,_])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_oklab"),Uo=o(t=>{if(f(
t)&&t.space.ident==="xyz-d50"){let[r,e]=tr(),[i,n,a]=t.position,[
m,s,_]=d(i,n,a).multiply(g.d50.d65).multiply(r).each((l,x,I)=>I[x]=
Math.cbrt(l)).multiply(e);return p(Yt,[m*100,s,_])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_oklab");function tr(){return[Float64Array.of(.819022437996703,.0329836539323885,
.0481771893596242,.3619062600528904,.9292868615863434,.2642395317527308,
-.1288737815209879,.0361446663506424,.6335478284694309),Float64Array.
of(.210454268309314,1.9779985324311684,.0259040424655478,.7936177747023054,
-2.42859224204858,.7827717124575296,-.0040720430116193,.450593709617411,
-.8086757549230774)]}o(tr,"useTransitionMatrices");var ph=o(t=>C(F(t)),"a98_rgb_into_oklab");var sh=o(t=>C(H(t)),"display_p3_into_oklab");var bh=o(t=>{let r=nt(t);return C(r)},"hsl_into_oklab");var zh=o(t=>C(pt(t)),"hwb_into_oklab");var ro=o(t=>{let r=M(t),e=oo(r);return C(e)},"lab_into_oklab");var Wh=o(t=>{let r=D(t),e=M(r),i=oo(e);return C(i)},"lch_into_okl\
ab");var jh=o(t=>C(et(t)),"prophoto_rgb_into_oklab");var Nh=o(t=>C(G(t)),"rec2020_into_oklab");var Vh=o(t=>{let r=W(t);return C(r)},"srgb_into_oklab"),Kh=o(t=>{
let r=U(t);return C(r)},"srgb_linear_into_oklab");var $=o(t=>{let[r,e,i]=C(t),n=Math.hypot(e,i),a=n<.001?NaN:Math.atan2(
i,e)*180/Math.PI;return p(It,[r,n,a])},"xyz_d65_into_oklch"),xy=o(
t=>{let[r,e,i]=Uo(t),n=Math.hypot(e,i),a=n<.001?NaN:Math.atan2(i,
e)*180/Math.PI;return p(It,[r,n,a])},"xyz_d50_into_oklch");var yy=o(t=>{let r=F(t);return $(r)},"a98_rgb_into_oklch");var Py=o(t=>{let r=H(t);return $(r)},"display_p3_into_oklch");var Yy=o(t=>{let r=nt(t);return $(r)},"hsl_into_oklch");var Wy=o(t=>{let r=pt(t);return $(r)},"hwb_into_oklch");var eo=o(t=>{if(f(t)&&t.space.ident==="oklab"){let[r,e,i]=t,n=Math.
hypot(e,i),a=n<.001?NaN:Math.atan2(i,e)*180/Math.PI;return p(It,[
r,n,a])}else throw new Error("Wrong parameter passed: "+t)},"okla\
b_into_oklch");var Dy=o(t=>eo(ro(t)),"lab_into_oklch");var Vy=o(t=>{let r=D(t),e=ro(r);return eo(e)},"lch_into_oklch");var Uy=o(t=>{let r=et(t);return $(r)},"prophoto_rgb_into_oklch");var i5=o(t=>{let r=G(t);return $(r)},"rec2020_into_oklch");var m5=o(t=>{let r=W(t);return $(r)},"srgb_into_oklch"),l5=o(t=>{
let r=U(t);return $(r)},"srgb_linear_into_oklch");var or=Float64Array.of(1.3457868816471583,-.5446307051249019,0,-.25557208737979464,
1.5082477428451468,0,-.05110186497554526,.02052744743642139,1.2119675456389452),
C5=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){let[r,e,i]=t.position,
[n,a,m]=d(r,e,i).multiply(g.d65.d50).multiply(or).each((s,_,l)=>l[_]=
Wt(s));return p(fo,[n,a,m])}else throw new Error("Wrong parameter\
 passed: "+t)},"xyz_d65_into_prophoto_rgb"),A=o(t=>{if(f(t)&&t.space.
ident==="xyz-d50"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(
or).each((s,_,l)=>l[_]=Wt(s));return p(fo,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_prophoto_rgb");var B5=o(t=>A(Lo(t)),"a98_rgb_into_prophoto_rgb");var R5=o(t=>A(jo(t)),"display_p3_into_prophoto_rgb");var rr=o(t=>M(D(t)),"lch_into_xyz_d50"),F5=o(t=>vt(D(t)),"lch_int\
o_xyz_d65");var mg=o(t=>A(Jo(t)),"hsl_into_prophoto_rgb");var dg=o(t=>A(qo(t)),"hwb_into_prophoto_rgb");var gg=o(t=>A(M(t)),"lab_into_prophoto_rgb");var wg=o(t=>A(rr(t)),"lch_into_prophoto_rgb");var Ig=o(t=>A(Ft(t)),"oklab_into_prophoto_rgb");var Tg=o(t=>A($o(t)),"oklch_into_prophoto_rgb");var Eg=o(t=>A(Fo(t)),"rec2020_into_prophoto_rgb");var Hg=o(t=>A(Mt(t)),"srgb_into_prophoto_rgb"),Fg=o(t=>A(Go(t)),"\
srgb_linear_into_prophoto_rgb");var Kg=o(t=>t.position.map(Wt),"gam_prophoto"),Jg=o(t=>t.position.
map(Vt),"lin_prophoto");var er=Float64Array.of(30757411/17917100,-19765991/29648200,792561/
44930125,-6372589/17917100,47925759/29648200,-1921689/44930125,-4539589/
17917100,467509/29648200,42328811/44930125),j=o(t=>{if(f(t)&&t.space.
ident==="xyz-d65"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(
er).each((s,_,l)=>l[_]=Xt(s));return p(co,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_rec2020"),io=o(t=>{if(f(
t)&&t.space.ident==="xyz-d50"){let[r,e,i]=t.position,[n,a,m]=d(r,
e,i).multiply(g.d50.d65).multiply(er).each((s,_,l)=>l[_]=Xt(s));return p(
co,[n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"\
xyz_d50_into_rec2020");var gu=o(t=>j(F(t)),"a98_rgb_into_rec2020");var wu=o(t=>j(H(t)),"display_p3_into_rec2020");var Iu=o(t=>j(nt(t)),"hsl_into_rec2020");var Tu=o(t=>j(pt(t)),"hwb_into_rec2020");var Eu=o(t=>io(M(t)),"lab_into_rec2020");var Fu=o(t=>io(M(D(t))),"lch_into_rec2020");var Ju=o(t=>j(u(t)),"oklab_into_rec2020");var rz=o(t=>j(u(Q(t))),"oklch_into_rec2020");var az=o(t=>j(et(t)),"prophoto_rgb_into_rec2020");var fz=o(t=>j(W(t)),"srgb_into_rec2020"),xz=o(t=>j(U(t)),"srgb_li\
near_into_rec2020");var hz=o(t=>t.position.map(Xt),"gam_rec2020"),yz=o(t=>t.position.
map(Bt),"lin_rec2020");export{Ct as A98RGBSpace,xo as DisplayP3Space,S as HSLSpace,P as HWBSpace,
jt as LABSpace,Yo as LCHSpace,fo as ProPhotoRGBSpace,Oo as RGBModel,
co as Rec2020Space,B as XYZD50Space,T as XYZD65Space,ol as a98_rgb_into_display_p3,
Os as a98_rgb_into_hsl,bx as a98_rgb_into_hwb,l0 as a98_rgb_into_lab,
Yc as a98_rgb_into_lch,ph as a98_rgb_into_oklab,yy as a98_rgb_into_oklch,
B5 as a98_rgb_into_prophoto_rgb,gu as a98_rgb_into_rec2020,Lt as a98_rgb_into_rgb,
Lt as a98_rgb_into_srgb,hp as a98_rgb_into_srgb_linear,F as a98_rgb_into_xyz,
Lo as a98_rgb_into_xyz_d50,F as a98_rgb_into_xyz_d65,Qn as display_p3_into_a98_rgb,
Es as display_p3_into_hsl,Px as display_p3_into_hwb,b0 as display_p3_into_lab,
Bc as display_p3_into_lch,sh as display_p3_into_oklab,Py as display_p3_into_oklch,
R5 as display_p3_into_prophoto_rgb,wu as display_p3_into_rec2020,
Dt as display_p3_into_rgb,Dt as display_p3_into_srgb,Sp as display_p3_into_srgb_linear,
H as display_p3_into_xyz,jo as display_p3_into_xyz_d50,H as display_p3_into_xyz_d65,
Am as gam_a98,ss as gam_p3,Kg as gam_prophoto,hz as gam_rec2020,l_ as gam_srgb,
E_ as hsl_into_a98_rgb,fl as hsl_into_display_p3,Cx as hsl_into_hwb,
S0 as hsl_into_lab,Dc as hsl_into_lch,bh as hsl_into_oklab,Yy as hsl_into_oklch,
mg as hsl_into_prophoto_rgb,Iu as hsl_into_rec2020,Ap as hsl_into_rgb,
Do as hsl_into_srgb,Op as hsl_into_srgb_linear,nt as hsl_into_xyz,
Jo as hsl_into_xyz_d50,nt as hsl_into_xyz_d65,G_ as hwb_into_a98_rgb,
Pl as hwb_into_display_p3,Gs as hwb_into_hsl,Y0 as hwb_into_lab,Kc as hwb_into_lch,
zh as hwb_into_oklab,Wy as hwb_into_oklch,dg as hwb_into_prophoto_rgb,
Tu as hwb_into_rec2020,Dp as hwb_into_rgb,Dp as hwb_into_srgb,Np as hwb_into_srgb_linear,
pt as hwb_into_xyz,qo as hwb_into_xyz_d50,pt as hwb_into_xyz_d65,
p as initPointInSpace,f as isPointInSpace,q_ as lab_into_a98_rgb,
Yl as lab_into_display_p3,Us as lab_into_hsl,Zx as lab_into_hwb,Y as lab_into_lch,
ro as lab_into_oklab,Dy as lab_into_oklch,gg as lab_into_prophoto_rgb,
Eu as lab_into_rec2020,Nt as lab_into_rgb,Nt as lab_into_srgb,oa as lab_into_srgb_linear,
vt as lab_into_xyz,M as lab_into_xyz_d50,vt as lab_into_xyz_d65,em as lch_into_a98_rgb,
Tl as lch_into_display_p3,af as lch_into_hsl,Hx as lch_into_hwb,D as lch_into_lab,
Wh as lch_into_oklab,Vy as lch_into_oklch,wg as lch_into_prophoto_rgb,
Fu as lch_into_rec2020,Ht as lch_into_rgb,Ht as lch_into_srgb,sa as lch_into_srgb_linear,
F5 as lch_into_xyz,rr as lch_into_xyz_d50,F5 as lch_into_xyz_d65,
Om as lin_a98,fs as lin_p3,Jg as lin_prophoto,yz as lin_rec2020,s_ as lin_srgb,
Yt as okLABSpace,It as okLCHSpace,_m as oklab_into_a98_rgb,El as oklab_into_display_p3,
df as oklab_into_hsl,qx as oklab_into_hwb,T0 as oklab_into_lab,rb as oklab_into_lch,
eo as oklab_into_oklch,Ig as oklab_into_prophoto_rgb,Ju as oklab_into_rec2020,
Gt as oklab_into_rgb,Gt as oklab_into_srgb,Sa as oklab_into_srgb_linear,
u as oklab_into_xyz,Ft as oklab_into_xyz_d50,u as oklab_into_xyz_d65,
hm as oklch_into_a98_rgb,Fl as oklch_into_display_p3,zf as oklch_into_hsl,
id as oklch_into_hwb,L0 as oklch_into_lab,lb as oklch_into_lch,Q as oklch_into_oklab,
Tg as oklch_into_prophoto_rgb,rz as oklch_into_rec2020,$t as oklch_into_rgb,
$t as oklch_into_srgb,Oa as oklch_into_srgb_linear,Vo as oklch_into_xyz,
$o as oklch_into_xyz_d50,Vo as oklch_into_xyz_d65,Sm as prophoto_rgb_into_a98_rgb,
Jl as prophoto_rgb_into_display_p3,Yf as prophoto_rgb_into_hsl,sd as prophoto_rgb_into_hwb,
G0 as prophoto_rgb_into_lab,bb as prophoto_rgb_into_lch,jh as prophoto_rgb_into_oklab,
Uy as prophoto_rgb_into_oklch,az as prophoto_rgb_into_rec2020,Kt as prophoto_rgb_into_rgb,
Kt as prophoto_rgb_into_srgb,Ga as prophoto_rgb_into_srgb_linear,
et as prophoto_rgb_into_xyz,Tt as prophoto_rgb_into_xyz_d50,et as prophoto_rgb_into_xyz_d65,
Mm as rec2020_into_a98_rgb,os as rec2020_into_display_p3,Bf as rec2020_into_hsl,
yd as rec2020_into_hwb,Q0 as rec2020_into_lab,Pb as rec2020_into_lch,
Nh as rec2020_into_oklab,i5 as rec2020_into_oklch,Eg as rec2020_into_prophoto_rgb,
qt as rec2020_into_rgb,qt as rec2020_into_srgb,p_ as rec2020_into_srgb_linear,
G as rec2020_into_xyz,Fo as rec2020_into_xyz_d50,G as rec2020_into_xyz_d65,
Ut as rgb_into_a98_rgb,ps as rgb_into_display_p3,Df as rgb_into_hsl,
kd as rgb_into_hwb,ic as rgb_into_lab,Cb as rgb_into_lch,Vh as rgb_into_oklab,
m5 as rgb_into_oklch,Hg as rgb_into_prophoto_rgb,fz as rgb_into_rec2020,
W as rgb_into_xyz,Mt as rgb_into_xyz_d50,W as rgb_into_xyz_d65,Ir as rgb_to_hex,
yo as rgb_to_hue,ut as sRGBLinearSpace,N as sRGBSpace,Ut as srgb_into_a98_rgb,
ps as srgb_into_display_p3,Df as srgb_into_hsl,kd as srgb_into_hwb,
ic as srgb_into_lab,Cb as srgb_into_lch,Vh as srgb_into_oklab,m5 as srgb_into_oklch,
Hg as srgb_into_prophoto_rgb,fz as srgb_into_rec2020,W as srgb_into_xyz,
Mt as srgb_into_xyz_d50,W as srgb_into_xyz_d65,T_ as srgb_linear_into_a98_rgb,
as as srgb_linear_into_display_p3,Nf as srgb_linear_into_hsl,vd as srgb_linear_into_hwb,
nc as srgb_linear_into_lab,Ab as srgb_linear_into_lch,Kh as srgb_linear_into_oklab,
l5 as srgb_linear_into_oklch,Fg as srgb_linear_into_prophoto_rgb,
xz as srgb_linear_into_rec2020,U as srgb_linear_into_xyz,Go as srgb_linear_into_xyz_d50,
U as srgb_linear_into_xyz_d65,$n as xyz_d50_into_a98_rgb,to as xyz_d50_into_display_p3,
Jf as xyz_d50_into_hsl,Wd as xyz_d50_into_hwb,c as xyz_d50_into_lab,
Xb as xyz_d50_into_lch,Uo as xyz_d50_into_oklab,xy as xyz_d50_into_oklch,
A as xyz_d50_into_prophoto_rgb,io as xyz_d50_into_rec2020,ht as xyz_d50_into_rgb,
ht as xyz_d50_into_srgb,Rt as xyz_d50_into_srgb_linear,oo as xyz_d50_into_xyz_d65,
X as xyz_d65_into_a98_rgb,Z as xyz_d65_into_display_p3,qf as xyz_d65_into_hsl,
Td as xyz_d65_into_hwb,Qo as xyz_d65_into_lab,Zb as xyz_d65_into_lch,
C as xyz_d65_into_oklab,$ as xyz_d65_into_oklch,C5 as xyz_d65_into_prophoto_rgb,
j as xyz_d65_into_rec2020,L as xyz_d65_into_rgb,L as xyz_d65_into_srgb,
it as xyz_d65_into_srgb_linear,y as xyz_d65_into_xyz_d50,X as xyz_into_a98_rgb,
Z as xyz_into_display_p3,qf as xyz_into_hsl,Td as xyz_into_hwb,Qo as xyz_into_lab,
Zb as xyz_into_lch,C as xyz_into_oklab,$ as xyz_into_oklch,C5 as xyz_into_prophoto_rgb,
j as xyz_into_rec2020,L as xyz_into_rgb,L as xyz_into_srgb,it as xyz_into_srgb_linear};
