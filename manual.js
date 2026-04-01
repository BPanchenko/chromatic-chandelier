var ir=Object.defineProperty;var o=(t,r)=>ir(t,"name",{value:r,configurable:!0});var nr=Object.defineProperty,ft=o((t,r)=>nr(t,"name",{value:r,configurable:!0}),
"r");function fo(...t){let[r,e]=t.length===1?Array.of(0,t[0]):Array.
of(Math.min(...t),Math.max(...t)),i=Object.create(null,{0:{value:r},
1:{value:e},[Symbol.iterator]:{value:ft(function*(){yield this[0],
yield this[1]},"value")},[Symbol.toStringTag]:{get(){return`Range\
: ${this[0]} \u22DC x \u22DC ${this[1]}}`}},avg:{enumerable:!0,get(){
return this[0]+this.value/2}},length:{value:2},value:{enumerable:!0,
get(){return this[1]-this[0]}},toString:{value:ft(function(){return this[0]+
","+this[1]},"value")}});return Object.defineProperties(i,{from:{
enumerable:!0,value:r},to:{enumerable:!0,value:e},allot:{value:ft(
function(n){return this.test(n)?n:n>this.from?(n-this.to)%this.value+
this.from:this.to-(this.from-n)%this.value},"allocateOuterValue")},
clamp:{value:ft(function(n){return this.test(n)?n:Math.max(Math.min(
n,this.to),this.from)},"restrictOuterValue")},test:{value:ft(function(n){
return this.from<=n&&n<=this.to},"value")}}),i}o(fo,"g");ft(fo,"i\
nitRange");function xo(t=[0,100],r=[0,1]){let[e,i]=r,[n,a]=t,[m,s]=[
i-e,a-n];function _(x){return typeof x=="string"&&(x=parseFloat(x)),
l.domain.test(x)===!1&&(x=x>i?(x-i)%m+e:i-(e-x)%m),s*(x-e)/m+n}o(
_,"c"),ft(_,"invert");function l(x){return typeof x=="string"&&(x=
parseFloat(x)),l.range.test(x)===!1&&(x=x>a?(x-a)%s+n:a-(n-x)%s),
m*(x-n)/s+e}return o(l,"l"),ft(l,"calculator"),Object.defineProperties(
l,{domain:{enumerable:!0,value:fo(e,i)},range:{enumerable:!0,value:fo(
n,a)},invert:{enumerable:!0,value:_}})}o(xo,"y");ft(xo,"initScale");var pr=Object.defineProperty,ar=o((t,r)=>pr(t,"name",{value:r,configurable:!0}),
"o"),_r=ar((t,r=12)=>{let e=r>0?10**r:1;return Math.sign(t)*Math.
round((Math.abs(t)+Number.EPSILON)*e)/e},"round"),b=_r;var co=xo([0,360],[-Math.PI,Math.PI]),vt=Object.freeze({bytes:8,domain:co.
domain,ident:"angle",input:o(t=>co.domain.allot(b(t*Math.PI/180)),
"input"),output:o(t=>co.range.allot(b(t*180/Math.PI)),"output"),short:"\
phi",tcoord:"polar",tgeom:"azimuth",unit:"rad"});var mr=Object.defineProperty,Mt=o((t,r)=>mr(t,"name",{value:r,configurable:!0}),
"e");function h(...t){let[r,e]=t.length===1?Array.of(0,t[0]):Array.
of(Math.min(...t),Math.max(...t)),i=Object.create(null,{0:{value:r},
1:{value:e},[Symbol.iterator]:{value:Mt(function*(){yield this[0],
yield this[1]},"value")},[Symbol.toStringTag]:{get(){return`Range\
: ${this[0]} \u22DC x \u22DC ${this[1]}}`}},avg:{enumerable:!0,get(){
return this[0]+this.value/2}},length:{value:2},value:{enumerable:!0,
get(){return this[1]-this[0]}},toString:{value:Mt(function(){return this[0]+
","+this[1]},"value")}});return Object.defineProperties(i,{from:{
enumerable:!0,value:r},to:{enumerable:!0,value:e},allot:{value:Mt(
function(n){return this.test(n)?n:n>this.from?(n-this.to)%this.value+
this.from:this.to-(this.from-n)%this.value},"allocateOuterValue")},
clamp:{value:Mt(function(n){return this.test(n)?n:Math.max(Math.min(
n,this.to),this.from)},"restrictOuterValue")},test:{value:Mt(function(n){
return this.from<=n&&n<=this.to},"value")}}),i}o(h,"l");Mt(h,"ini\
tRange");var xt=Object.freeze({$coord:vt,bytes:8,domain:h(0,360),ident:"hu\
e",short:"h",input:o(t=>xt.domain.allot(t),"input"),output:o(t=>isNaN(
t)?NaN:t<1e-6?0:b(t,6),"output"),precision:2,unit:"deg"});var mt=Object.freeze({bytes:8,domain:h(0,1),ident:"applicate",short:"\
z",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var lt=Object.freeze({$coord:mt,bytes:8,domain:h(0,100),ident:"li\
ghtness",input:o(t=>b(t/100),"input"),output:o(t=>b(t*100),"outpu\
t"),short:"L",precision:2,unit:"%"});var _t=Object.freeze({bytes:8,domain:h(0,1),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var zo=Object.freeze({$coord:_t,bytes:8,domain:h(0,100),ident:"sa\
turation",input:o(t=>b(t/100),"input"),output:o(t=>b(t*100),"outp\
ut"),short:"S",precision:2,unit:"%"});var lr=Object.defineProperty,Yt=o((t,r)=>lr(t,"name",{value:r,configurable:!0}),
"n"),sr=Yt(t=>t!==null&&typeof t=="object","isObject"),fr=Yt(t=>sr(
t)&&"ident"in t&&"short"in t&&"domain"in t,"isDimension");function v(t,r,e){
let i=Iterator.from(e===void 0?[t,r]:[t,r,e]),n=e===void 0?2:3;for(let s of i.
take(n))if(fr(s)===!1)throw new TypeError("Passed wrong space dim\
ension: "+JSON.stringify(s,void 0,2));let a=i.take(n).filter(s=>s.
tgeom==="azimuth"||s.tgeom==="reference-ray").toArray().length===
2?n===3?"cylinder":"circle":n===3?"cube":"plane",m=Object.create(
null,{0:{enumerable:!0,value:t},1:{enumerable:!0,value:r},length:{
enumerable:!0,value:n},tgeom:{enumerable:!0,value:a},entries:{value:Yt(
function*(){yield[0,this[0]],yield[1,this[1]],this.length===3&&(yield[
2,this[2]])},"value")},toArray:{value:Yt(function(){return Array.
of(...this)},"value")},[Symbol.iterator]:{value:Yt(function*(){yield this[0],
yield this[1],this.length===3&&(yield this[2])},"value")}});return n===
3&&Object.defineProperty(m,2,{enumerable:!0,value:e}),s=>s===void 0?
m:Object.defineProperties(m,s)}o(v,"j");Yt(v,"defCSYS");var se=v(_t,vt)({adapt:{enumerable:!0,value:bo}});function bo(t=0,r=NaN){return[t*Math.cos(r),t*Math.sin(r)]}o(bo,"\
calcCartesianCoordinates");var ht=v(_t,vt,mt)({adapt:{value:xr}});function xr(t,r,e){return[
...bo(t,r),e]}o(xr,"calcCubeCoordinates");var L=Float64Array.of(.9642956764295677,1,.8251046025104602);Object.
defineProperty(L,"ident",{value:"d50"});Object.freeze(L.buffer);var K=Float64Array.
of(.3127/.329,1,(1-.3127-.329)/.329);Object.defineProperty(K,"ide\
nt",{value:"d65"});Object.freeze(K.buffer);var u={CAM:v(xt,zo,lt)(),CSYS:ht,ident:"hsl",whp:K};var So=Object.freeze({$coord:mt,bytes:8,domain:h(0,100),ident:"bl\
ackness",input:o(t=>b(t/100),"input"),output:o(t=>b(t*100),"outpu\
t"),short:"B",precision:2,unit:"%"});var Po=Object.freeze({$coord:_t,ident:"whiteness",bytes:8,domain:h(
0,100),input:o(t=>b(t/100),"input"),output:o(t=>b(t*100),"output"),
short:"W",precision:2,unit:"%"});var z={CAM:v(xt,Po,So)(),CSYS:ht,ident:"hwb",whp:K};var dt=Object.freeze({bytes:8,domain:h(-1,1),ident:"abscissa",short:"\
x",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var wo=Object.freeze({$coord:dt,bytes:8,domain:h(-125,125),ident:"\
green-red",input:o(t=>b(t/125),"input"),output:o(t=>b(t*125),"out\
put"),precision:2,short:"a"}),ko=Object.freeze({$coord:dt,bytes:8,
domain:h(-.4,.4),ident:"green-red",precision:6,short:"a"});var ct=Object.freeze({bytes:8,domain:h(-1,1),ident:"ordinate",short:"\
y",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"});var vo=Object.freeze({$coord:ct,domain:h(-125,125),ident:"blue-ye\
llow",input:o(t=>b(t/125),"input"),output:o(t=>b(t*125),"output"),
precision:2,short:"b"}),Mo=Object.freeze({$coord:ct,domain:h(-.4,
.4),ident:"blue-yellow",precision:6,short:"b"});var mi=v(dt,ct)({adapt:{value:ho}});function ho(t,r){let e=0,i=NaN;return(t!==0||r!==0)&&(e=Math.sqrt(
t**2+r**2),t!==0&&!r||r!==0&&!t?i=r/Math.abs(r)*(Math.PI/2):i=Math.
atan(r/t)),[e,i]}o(ho,"calcPolarCoordinates");var bt=v(dt,ct,mt)({adapt:{value:dr}});function dr(t,r,e){return[
...ho(t,r),e]}o(dr,"calcCylindricalCoordinates");var Pt=Object.freeze({CAM:v(lt,wo,vo)(),CSYS:bt,ident:"lab",whp:L});var Yo=Object.freeze({$coord:_t,bytes:8,domain:h(0,150),ident:"ch\
roma",input:o(t=>b(t/150),"input"),output:o(t=>b(t*150),"output"),
precision:2,short:"C"}),Io=Object.freeze({$coord:_t,bytes:8,domain:h(
0,.4),ident:"chroma",precision:6,short:"c"});var Tt=Object.freeze({CAM:v(lt,Yo,xt)(),CSYS:ht,ident:"lch",whp:L});var yt=Object.freeze({CAM:v(lt,ko,Mo)(),CSYS:bt,ident:"oklab",whp:K});var gt={CAM:v(lt,Io,xt)(),CSYS:ht,ident:"oklch",whp:K};var Co=Object.freeze({$coord:mt,bytes:1,domain:h(0,255),ident:"bl\
ue",input:o(t=>b(t/255),"input"),output:o(t=>b(t*255,0)&255,"outp\
ut"),short:"B"});var Ao=Object.freeze({$coord:ct,bytes:1,domain:h(0,255),ident:"gr\
een",input:o(t=>b(t/255),"input"),output:o(t=>b(t*255,0)&255,"out\
put"),short:"G"});var Bo=Object.freeze({$coord:dt,bytes:1,domain:h(0,255),ident:"re\
d",input:o(t=>b(t/255),"input"),output:o(t=>b(t*255,0)&255,"outpu\
t"),short:"R"});var wt=bt,It=Object.freeze({ident:"prophoto-rgb",CSYS:wt,luminance:h(
160,640),whp:L}),Ct=K,Xt=Object.freeze({ident:"rgb",CAM:v(Bo,Ao,Co)(),
CSYS:wt,whp:Ct}),W=Object.freeze({ident:"srgb",CSYS:wt,whp:Ct}),st=Object.
freeze({ident:"srgb-linear",CSYS:wt,whp:Ct}),ut=Object.freeze({ident:"\
a98-rgb",CSYS:wt,whp:Ct}),At=Object.freeze({ident:"display-p3",CSYS:wt,
whp:Ct}),Bt=Object.freeze({ident:"rec2020",CSYS:wt,whp:Ct});var B=Object.freeze({ident:"xyz-d65",CSYS:bt,whp:K}),O=Object.freeze(
{ident:"xyz-d50",CSYS:bt,whp:L});var On=new Map([[u.ident,u],[z.ident,z],[Pt.ident,Pt],[Tt.ident,Tt],
[yt.ident,yt],[gt.ident,gt],[Bt.ident,Bt],[At.ident,At],[ut.ident,
ut],[It.ident,It],[Xt.ident,Xt],[st.ident,st],[W.ident,W],[O.ident,
O],[B.ident,B]]);var Zt=o(t=>Math.sign(t)*Math.pow(Math.abs(t),2.19921875),"to_lin\
ear"),jt=o(t=>Math.sign(t)*Math.pow(Math.abs(t),256/563),"to_gamu\
t");var J=o(t=>{let r=Math.abs(t);return r<=.04045?t/12.92:Math.sign(
t)*b(Math.pow((r+.055)/1.055,2.4))},"to_linear"),q=o(t=>{let r=Math.
abs(t);return r>.0031308?Math.sign(t)*b(1.055*Math.pow(r,1/2.4)-.055):
12.92*t},"to_gamut");var g={d65:{d50:Float64Array.of(1.0479297925449969,.02962780877005599,
-.009243040646204504,.022946870601609652,.9904344267538799,.015055191490298152,
-.05019226628920524,-.017073799063418826,.7518742814281371)},d50:{
d65:Float64Array.of(.955473421488075,-.0283697093338637,.012314014864481998,
-.02309845494876471,1.0099953980813041,-.020507649298898964,.06325924320057072,
.021041441191917323,1.330365926242124)}};var cr=Object.defineProperty,E=o((t,r)=>cr(t,"name",{value:r,configurable:!0}),
"t"),Oo=E(t=>typeof t=="number"||t instanceof Number,"isNumber"),
br=E((t,r=12)=>{let e=r>0?10**r:1;return Math.sign(t)*Math.round(
(Math.abs(t)+Number.EPSILON)*e)/e},"round"),Wo=E(t=>yo(t)&&Symbol.
iterator in t&&typeof t[Symbol.iterator]=="function","isIterableO\
bject"),yo=E(t=>t!==null&&typeof t=="object","isObject"),hr=E(t=>typeof t==
"string","isString"),yr=E(t=>hr(t)&&gr.has(t),"isSpaceID"),To=E(t=>yo(
t)&&"ident"in t&&yr(t.ident)&&"CSYS"in t&&yo(t.CSYS)&&"length"in t.
CSYS&&t.CSYS.length===3,"isColorSpace"),gr=new Set(["a98-rgb","di\
splay-p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb",
"rec2020","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz-d65"]),
f=E(t=>Wo(t)&&Iterator.from(t).every(r=>Oo(r))&&"length"in t&&t.length===
3&&"space"in t&&To(t.space),"isPointInSpace");function p(t,r){if(To(
t)===!1)throw new TypeError("Point must be declared in a valid co\
lor space instead of "+JSON.stringify(t,void 0,2));if((Wo(r)&&Iterator.
from(r).every(_=>Oo(_)))===!1)throw new TypeError("Point in space\
 has valid coordinates. Wrong parameters: "+JSON.stringify(r,void 0,
2));let e=t.CSYS.length,i=new Float64Array(e),n=t.CAM===void 0?Array.
of(0,1,2):t.CAM.toArray().map(_=>t.CSYS.toArray().findIndex(l=>_.
$coord===l)),a={[Symbol.iterator]:{value:E(function*(){yield this[0],
yield this[1],yield this[2]},"value")},length:{value:e}},m=(_=>({
adapted:{get(){if(typeof this.space.CSYS.adapt=="function"){let[l,
x,I]=this.position;return Iterator.from(this.space.CSYS.adapt(l,x,
I))}else return this.position}},position:{get(){return Object.defineProperties(
_.values(),{length:{value:3},space:{value:t}})},set(l){_.set(l)}},
set:{value:E(function(l){let x=Array.from(l),I=Math.min(x.length,
3);for(let P=0;P<I;P++)this[P]=x[P];return this},"value")}}))(i);
for(let _=0;_<e;_++)((l,x,I)=>{m[l]={get(){let{CAM:P,CSYS:tt}=this.
space,V=I[x],ot=tt[x];"output"in ot&&typeof ot.output=="function"&&
(V=ot.output(V));let at=P!==void 0&&P[l];at&&typeof at.output=="f\
unction"&&(V=at.output(V));let{precision:Nt=9,unit:kt=""}=at||ot;
return Object.defineProperties(new Number(V),{digits:{enumerable:!0,
value:Nt},toString:{value:E(function(){return isNaN(this)?"none":
(Number.isInteger(this)?this:br(this,Nt))+kt},"value")},unit:{enumerable:!0,
value:kt}})},set(P){let{CAM:tt,CSYS:V}=this.space,ot=V[x],at=tt!==
void 0?tt[l]:null;at!==null&&"input"in at&&typeof at.input=="func\
tion"&&(P=at.input(P)),"input"in ot&&typeof ot.input=="function"&&
(P=ot.input(P)),typeof P=="string"&&(P=parseFloat(P)),I[x]=P}}})(
_,n[_],i);let s={buffer:{value:i.buffer},equals:{value:E(function(_,l=1e-12){
let[x,I,P]=this.position,[tt,V,ot]=_.position;return this.space.ident===
_.space.ident&&Math.abs(x-tt)<=l*Math.max(1,Math.abs(x),Math.abs(
tt))&&Math.abs(I-V)<=l*Math.max(1,Math.abs(I),Math.abs(V))&&Math.
abs(P-ot)<=l*Math.max(1,Math.abs(P),Math.abs(ot))},"value")},entries:{
value:E(function(){let _=this.space.CAM??this.space.CSYS;return Iterator.
from([[_[0],this[0]],[_[1],this[1]],[_[2],this[2]]])},"value")},space:{
value:t},values:{value:E(function(){return Iterator.from(this).map(
_=>_.valueOf())},"value")}};return Object.create(null,{...s,...a,
...m,[Symbol.toStringTag]:{get(){return`PointInSpace: [${this.toString()}\
] \u2208 ${this.space.ident.toUpperCase()}`}},toString:{value:E(function(){
return Iterator.from(this).toArray().toString()},"value")}}).set(
r)}o(p,"_");E(p,"initPointInSpace");var ur=Object.defineProperty,T=o((t,r)=>ur(t,"name",{value:r,configurable:!0}),
"t"),zr=T(t=>typeof t=="number"||t instanceof Number,"isNumber"),
Xo=T(t=>go(t)&&Symbol.iterator in t&&typeof t[Symbol.iterator]=="\
function","isIterableObject"),go=T(t=>t!==null&&typeof t=="object",
"isObject"),Sr=T(t=>typeof t=="string","isString"),Pr=T(t=>Sr(t)&&
kr.has(t),"isSpaceID"),wr=T(t=>go(t)&&"ident"in t&&Pr(t.ident)&&"\
CSYS"in t&&go(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===3,"isCo\
lorSpace"),kr=new Set(["a98-rgb","display-p3","hsl","hwb","lab","\
lch","oklab","oklch","prophoto-rgb","rec2020","srgb-linear","srgb",
"rgb","xyz","xyz-d50","xyz-d65"]),vr=T(t=>Xo(t)&&Iterator.from(t).
every(r=>zr(r))&&"length"in t&&t.length===3&&"space"in t&&wr(t.space),
"isPointInSpace"),Mr=T((t,r=12)=>{let e=r>0?10**r:1;return Math.sign(
t)*Math.round((Math.abs(t)+Number.EPSILON)*e)/e},"round");function d(t,r=0,e=0){
let i=vr(t)?new Float64Array(t.buffer):Float64Array.of(t,r,e),{length:n}=i,
a={each:{value:T(function(_){for(let l=0;l<this.length;l++)_(this[l],
l,this);return this},"value")},multiply:{value:T(function(_){if(Xo(
_)){let[l,x,I,P,tt,V,ot,at,Nt]=_,[kt,lo,so]=this.head;return this.
update(kt*l+lo*P+so*ot,kt*x+lo*tt+so*at,kt*I+lo*V+so*Nt)}else throw new TypeError(
"Unsupported Multiplicator: "+_)},"multiply")},update:{value:T(function(_,l,x){
let[I,P,tt]=(Array.isArray(_)?_.slice(3):Array.of(_,l,x)).filter(
V=>typeof V=="number");return this.head=Array.of(I??this[0],P??this[1],
tt??this[2]),this},"value")}},m={base:{get:T(()=>Iterator.from([0,
0,0]),"get")},head:{enumerable:!0,get:T(()=>Iterator.from(i),"get"),
set:T(_=>i.set(_),"set")},magnitude:{enumerable:!0,get(){return Mr(
Math.hypot(...this.head))}}},s={[Symbol.iterator]:{value:T(function*(){
for(let _ of this.head)yield _},"value")},length:{enumerable:!0,value:n}};
for(let _=0;_<n;_++)(l=>{s[l]={enumerable:!0,get:T(()=>i[l],"get"),
set:T(x=>{if(typeof x=="number")i[_]=x;else throw new TypeError("\
Expected Number")},"set")}})(_);return Object.create(null,Object.
assign({},a,m,s))}o(d,"$");T(d,"makeVectorQuantity");var Zo=Float64Array.of(608311/1250200,35783/156275,0,189793/714400,
247089/357200,32229/714400,198249/1000160,198249/2500400,5220557/
5000800),H=o(t=>{if(f(t)&&t.space.ident==="display-p3"){let[r,e,i]=t.
position,[n,a,m]=d(r,e,i).each((s,_,l)=>l[_]=J(s)).multiply(Zo);return p(
B,[n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"d\
isplay_p3_into_xyz_d65"),jo=o(t=>{if(f(t)&&t.space.ident==="displ\
ay-p3"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).each((s,_,l)=>l[_]=
J(s)).multiply(Zo).multiply(g.d65.d50);return p(O,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"display_p3_into_xyz_d50");var Ro=Float64Array.of(1829569/896150,-851781/878810,16779/1248040,
-506331/896150,1648619/878810,-147721/1248040,-308931/896150,36519/
878810,1266979/1248040),Z=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){
let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(Ro).each((s,_,l)=>l[_]=
jt(s));return p(ut,[n,a,m])}else throw new Error("Wrong parameter\
 passed: "+t)},"xyz_d65_into_a98_rgb"),ep=o(t=>{if(f(t)&&t.space.
ident==="xyz-d50"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(
g.d50.d65).multiply(Ro).each((s,_,l)=>l[_]=jt(s));return p(ut,[n,
a,m])}else throw new Error("Wrong parameter passed: "+t)},"xyz_d5\
0_into_a98_rgb");var _p=o(t=>Z(H(t)),"display_p3_into_a98_rgb");var Lo=Float64Array.of(573536/994567,591459/1989134,53769/1989134,
263643/1420810,6239551/9945670,351524/4972835,187206/994567,374412/
4972835,4929758/4972835),G=o(t=>{if(f(t)&&t.space.ident==="a98-rg\
b"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).each((s,_,l)=>l[_]=Zt(
s)).multiply(Lo);return p(B,[n,a,m])}else throw new Error("Wrong \
parameter passed: "+t)},"a98_rgb_into_xyz_d65"),Eo=o(t=>{if(f(t)&&
t.space.ident==="a98-rgb"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).
each((s,_,l)=>l[_]=Zt(s)).multiply(Lo).multiply(g.d65.d50);return p(
O,[n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"a\
98_rgb_into_xyz_d50");var Ht=Float64Array.of(12831/3959,-851781/878810,705/12673,-329/214,
1648619/878810,-2585/12673,-1974/3959,36519/878810,705/667),D=o(t=>{
if(f(t)&&t.space.ident==="xyz-d65"){let[r,e,i]=t.position,[n,a,m]=d(
r,e,i).multiply(Ht).each((s,_,l)=>l[_]=q(s));return p(W,[n,a,m])}else
throw new Error("Wrong parameter passed: "+t)},"xyz_d65_into_srgb"),
it=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){let[r,e,i]=t.position,
[n,a,m]=d(r,e,i).multiply(Ht);return p(st,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_srgb_linear"),zt=o(t=>{
if(f(t)&&t.space.ident==="xyz-d50"){let[r,e,i]=t.position,[n,a,m]=d(
r,e,i).multiply(g.d50.d65).multiply(Ht).each((s,_,l)=>l[_]=q(s));
return p(W,[n,a,m])}else throw new Error("Wrong parameter passed:\
 "+t)},"xyz_d50_into_srgb"),Gt=o(t=>{if(f(t)&&t.space.ident==="xy\
z-d50"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(g.d50.d65).
multiply(Ht);return p(st,[n,a,m])}else throw new Error("Wrong par\
ameter passed: "+t)},"xyz_d50_into_srgb_linear");var Ft=o(t=>D(G(t)),"a98_rgb_into_srgb"),Mp=o(t=>it(G(t)),"a98_rg\
b_into_srgb_linear");var $t=o(t=>D(H(t)),"display_p3_into_srgb"),Bp=o(t=>it(H(t)),"dis\
play_p3_into_srgb_linear");var rt=o((t,r,e)=>{let i=2*Math.PI,n=Math.PI/6;t<0&&(t+=i),t=t%i;
let a=o(m=>{let s=(m+t/n)%12,_=r*Math.min(e,1-e);return e-_*Math.
max(-1,Math.min(s-3,9-s,1))},"f");return[a(0),a(8),a(4)]},"hsl_to\
_rgb");var Ep=o(t=>{if(f(t)&&t.space.ident==="hsl"){let[r,e,i]=t.position,
n=rt(e,r,i).map(a=>Math.min(Math.max(Math.round(a*255),0),255));return p(
Xt,n)}else throw new Error("Wrong parameter passed: "+t)},"hsl_in\
to_rgb"),Do=o(t=>{if(f(t)&&t.space.ident==="hsl"){let[r,e,i]=t.position,
n=rt(e,r,i);return p(W,n)}else throw new Error("Wrong parameter p\
assed: "+t)},"hsl_into_srgb"),Dp=o(t=>{if(f(t)&&t.space.ident==="\
hsl"){let[r,e,i]=t.position,n=rt(e,r,i).map(a=>J(a));return p(st,
n)}else throw new Error("Wrong parameter passed: "+t)},"hsl_into_\
srgb_linear");var St=o((t,r,e)=>{if(r+e>=1){let i=r/(r+e);return[i,i,i]}else{let[
i,n,a]=rt(t,1,.5).map(m=>m*(1-r-e)+r);return[i,n,a]}},"hwb_to_rgb");var Qp=o(t=>{if(f(t)&&t.space.ident==="hwb"){let[r,e,i]=t.position,
n=St(e,r,i);return p(W,n)}else throw new Error("Wrong parameter p\
assed: "+t)},"hwb_into_srgb"),Up=o(t=>{if(f(t)&&t.space.ident==="\
hwb"){let[r,e,i]=t.position,n=St(e,r,i).map(a=>J(a));return p(st,
n)}else throw new Error("Wrong parameter passed: "+t)},"hwb_into_\
srgb_linear");var M=o(t=>{if(f(t)&&t.space.ident==="lab"){let r=903.2962962962963,
e=216/24389,[i,n,a]=t,m=(i+16)/116,s=n/500+m,_=Math.pow(s,3),l=m-
a/200,x=Math.pow(l,3),I=(_>e?_:(116*s-16)/r)*L[0],P=(i>r*e?Math.pow(
(i+16)/116,3):i/r)*L[1],tt=(x>e?x:(116*l-16)/r)*L[2];return p(O,[
I,P,tt])}else throw new Error("Wrong parameter passed: "+t)},"lab\
_into_xyz_d50"),Ot=o(t=>{let r=M(t),[e,i,n]=d(r).multiply(g.d50.d65);
return p(B,[e,i,n])},"lab_into_xyz_d65");var Vt=o(t=>zt(M(t)),"lab_into_srgb"),sa=o(t=>Gt(M(t)),"lab_into_\
srgb_linear");var N=o(t=>{if(f(t)&&t.space.ident==="lch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=e*Math.cos(i),a=e*Math.sin(i);return p(
Pt,[r,n,a])}else throw new Error("Wrong parameter passed: "+t)},"\
lch_into_lab");var Kt=o(t=>zt(M(N(t))),"lch_into_srgb"),za=o(t=>Gt(M(N(t))),"lch\
_into_srgb_linear");var S=o(t=>{if(f(t)&&t.space.ident==="oklab"){let r=Float64Array.
of(1,1,1,.3963377773761749,-.1055613458156586,-.0894841775298119,
.2158037573099136,-.0638541728258133,-1.2914855480194092),e=Float64Array.
of(1.2268798758459243,-.0405757452148008,-.0763729366746601,-.5578149944602171,
1.112286803280317,-.4214933324022432,.2813910456659647,-.0717110580655164,
1.5869240198367816),[i,n,a]=t.position,[m,s,_]=d(a,i,n).multiply(
r).each((l,x,I)=>I[x]=l**3).multiply(e);return p(B,[m,s,_])}else throw new Error(
"Wrong parameter passed: "+t)},"oklab_into_xyz_d65"),Jt=o(t=>{let[
r,e,i]=d(S(t)).multiply(g.d65.d50);return p(O,[r,e,i])},"oklab_in\
to_xyz_d50");var qt=o(t=>D(S(t)),"oklab_into_srgb"),Ba=o(t=>it(S(t)),"oklab_in\
to_srgb_linear");var Q=o(t=>{if(f(t)&&t.space.ident==="oklch"){let[r,e]=t,i=t.position.
drop(1).next().value??NaN,n=isNaN(i)?0:e*Math.cos(i),a=isNaN(i)?0:
e*Math.sin(i);return p(yt,[r,n,a])}else throw new Error("Wrong pa\
rameter passed: "+t)},"oklch_into_oklab");var Qt=o(t=>D(S(Q(t))),"oklch_into_srgb"),Da=o(t=>it(S(Q(t))),"ok\
lch_into_srgb_linear");var Ut=o(t=>{let r=Math.abs(t);return r<=.03125?t/16:Math.sign(t)*
Math.pow(r,1.8)},"to_linear"),Rt=o(t=>{let r=Math.abs(t);return r>=
1/512?Math.sign(t)*Math.pow(r,1/1.8):16*t},"to_gamut");var Yr=Float64Array.of(.7977666449006423,.2880748288194013,0,.13518129740053308,
.711835234241873,0,.0313477341283922,8993693872564e-17,.8251046025104602),
Lt=o(t=>{if(f(t)&&t.space.ident==="prophoto-rgb"){let r=p(O,t.position.
toArray());return d(r).each((e,i,n)=>n[i]=Ut(e)).multiply(Yr),r}else
throw new Error("Wrong parameter passed: "+t)},"prophoto_rgb_into\
_xyz_d50"),et=o(t=>{let r=Lt(t),e=p(B,r.position.toArray());return d(
e).multiply(g.d50.d65),e},"prophoto_rgb_into_xyz_d65");var to=o(t=>D(et(t)),"prophoto_rgb_into_srgb"),r_=o(t=>it(et(t)),
"prophoto_rgb_into_srgb_linear");var oo=1.09929682680944,No=.018053968510807,Et=o(t=>{let r=Math.abs(
t);return r<No*4.5?t/4.5:Math.sign(t)*Math.pow((r+oo-1)/oo,1/.45)},
"to_linear"),Dt=o(t=>{let r=Math.abs(t);return r>No?Math.sign(t)*
(oo*Math.pow(r,.45)-(oo-1)):4.5*t},"to_gamut");var Ho=Float64Array.of(63426534/99577255,26158966/99577255,4994106574466076e-32,
20160776/139408157,472592308/697040785,19567812/697040785,47086771/
278816314,8267143/139408157,295819943/278816314),F=o(t=>{if(f(t)&&
t.space.ident==="rec2020"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).
each((s,_,l)=>l[_]=Et(s)).multiply(Ho);return p(B,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"rec2020_into_xyz_d65"),Go=o(t=>{if(f(
t)&&t.space.ident==="rec2020"){let[r,e,i]=t.position,[n,a,m]=d(r,
e,i).each((s,_,l)=>l[_]=Et(s)).multiply(Ho).multiply(g.d65.d50);return p(
O,[n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"r\
ec2020_into_xyz_d50");var ro=o(t=>D(F(t)),"rec2020_into_srgb"),b_=o(t=>it(F(t)),"rec202\
0_into_srgb_linear");var u_=o(t=>t.position.map(q),"gam_srgb"),z_=o(t=>t.position.map(
J),"lin_srgb");var eo=Float64Array.of(506752/1228815,87098/409605,7918/409605,87881/
245763,175762/245763,87881/737289,12673/70218,12673/175545,1001167/
1053270),X=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.space.ident)){
let[r,e,i]=t.position,[n,a,m]=d(r,e,i).each((s,_,l)=>l[_]=J(s)).multiply(
eo);return p(B,[n,a,m])}else throw new Error("Wrong parameter pas\
sed: "+t)},"srgb_into_xyz_d65"),U=o(t=>{if(f(t)&&t.space.ident===
"srgb-linear"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(eo);
return p(B,[n,a,m])}else throw new Error("Wrong parameter passed:\
 "+t)},"srgb_linear_into_xyz_d65"),Wt=o(t=>{if(f(t)&&["rgb","srgb"].
includes(t.space.ident)){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).each(
(s,_,l)=>l[_]=J(s)).multiply(eo).multiply(g.d65.d50);return p(O,[
n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"srgb\
_into_xyz_d50"),Fo=o(t=>{if(f(t)&&t.space.ident==="srgb-linear"){
let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(eo).multiply(g.d65.
d50);return p(O,[n,a,m])}else throw new Error("Wrong parameter pa\
ssed: "+t)},"srgb_linear_into_xyz_d50");var io=o(t=>Z(X(t)),"srgb_into_a98_rgb"),H_=o(t=>Z(U(t)),"srgb_li\
near_into_a98_rgb");var K_=o(t=>io(Do(t)),"hsl_into_a98_rgb");var rm=o(t=>{if(f(t)&&t.space.ident==="hwb"){let[r,e,i]=t.position;
if(r+i>=1){let n=r/(r+i);return p(ut,[n,n,n])}else{let n=rt(e,1,.5).
map(a=>a*(1-r-i)+r);return io(p(W,n))}}else throw new Error("Wron\
g parameter passed: "+t)},"hwb_into_a98_rgb");var am=o(t=>Z(Ot(t)),"lab_into_a98_rgb");var xm=o(t=>Z(Ot(N(t))),"lch_into_a98_rgb");var ym=o(t=>Z(S(t)),"oklab_into_a98_rgb");var $o=o(t=>Jt(Q(t)),"oklch_into_xyz_d50"),Vo=o(t=>S(Q(t)),"oklch\
_into_xyz_d65");var Mm=o(t=>Z(Vo(t)),"oklch_into_a98_rgb");var Bm=o(t=>Z(et(t)),"prophoto_rgb_into_a98_rgb");var Zm=o(t=>Z(F(t)),"rec2020_into_a98_rgb");var Em=o(t=>t.position.map(jt),"gam_a98"),Dm=o(t=>t.position.map(
Zt),"lin_a98");var Ko=Float64Array.of(446124/178915,-14852/17905,11844/330415,-333277/
357830,63121/35810,-50337/660830,-72051/178915,423/17905,316169/330415),
j=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){let[r,e,i]=t.position,
[n,a,m]=d(r,e,i).multiply(Ko).each((s,_,l)=>l[_]=q(s));return p(At,
[n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"xyz\
_d65_into_display_p3"),no=o(t=>{if(f(t)&&t.space.ident==="xyz-d50"){
let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(g.d50.d65).multiply(
Ko).each((s,_,l)=>l[_]=q(s));return p(At,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_display_p3");var sl=o(t=>j(G(t)),"a98_rgb_into_display_p3");var Jo=o(t=>{if(f(t)&&t.space.ident==="hsl"){let[r,e,i]=t.position,
n=rt(e,r,i),a=p(W,n);return Wt(a)}else throw new Error("Wrong par\
ameter passed: "+t)},"hsl_into_xyz_d50"),nt=o(t=>{if(f(t)&&t.space.
ident==="hsl"){let[r,e,i]=t.position,n=rt(e,r,i),a=p(W,n);return X(
a)}else throw new Error("Wrong parameter passed: "+t)},"hsl_into_\
xyz_d65");var Sl=o(t=>j(nt(t)),"hsl_into_display_p3");var qo=o(t=>{if(f(t)&&t.space.ident==="hwb"){let[r,e,i]=t.position,
n=St(e,r,i),a=p(W,n);return Wt(a)}else throw new Error("Wrong par\
ameter passed: "+t)},"hwb_into_xyz_d50"),pt=o(t=>{if(f(t)&&t.space.
ident==="hwb"){let[r,e,i]=t.position,n=St(e,r,i),a=p(W,n);return X(
a)}else throw new Error("Wrong parameter passed: "+t)},"hwb_into_\
xyz_d65");var Ol=o(t=>j(pt(t)),"hwb_into_display_p3");var jl=o(t=>no(M(t)),"lab_into_display_p3");var Hl=o(t=>no(M(N(t))),"lch_into_display_p3");var Kl=o(t=>j(S(t)),"oklab_into_display_p3");var os=o(t=>j(S(Q(t))),"oklch_into_display_p3");var ps=o(t=>j(et(t)),"prophoto_rgb_into_display_p3");var ss=o(t=>j(F(t)),"rec2020_into_display_p3");var bs=o(t=>j(X(t)),"srgb_into_display_p3"),hs=o(t=>j(U(t)),"srgb\
_linear_into_display_p3");var zs=o(t=>t.position.map(q),"gam_p3"),Ss=o(t=>t.position.map(J),
"lin_p3");var Ir=o((t,r,e)=>"#"+Array.of(t,r,e).map(i=>i.toString(16).padStart(
2,"0")).join(""),"rgb_to_hex"),w=o((t,r,e)=>{let i=Math.max(t,r,e),
n=Math.min(t,r,e),a=i-n,m=uo(t,r,e),s=0,_=(n+i)/2;return a!==0&&(s=
_===0||_===1?0:(i-_)/Math.min(_,1-_)),s<0&&(m+=Math.PI,s=Math.abs(
s)),s<=1e-5&&(m=NaN),[m*180/Math.PI,s*100,_*100]},"rgb_to_hsl"),uo=o(
(t,r,e)=>{let i=Math.max(t,r,e),n=Math.min(t,r,e),a=NaN,m=i-n;if(m!==
0){switch(i){case t:a=(r-e)/m+(r<e?6:0);break;case r:a=(e-t)/m+2;
break;case e:a=(t-r)/m+4}a*=Math.PI/3}return a},"rgb_to_hue"),k=o(
(t,r,e)=>{let i=uo(t,r,e),n=Math.min(t,Math.min(r,e)),a=1-Math.max(
t,Math.max(r,e));return[i*180/Math.PI,n*100,a*100]},"rgb_to_hwb");var Ds=o(t=>{let[r,e,i]=Ft(t).position;return p(u,w(r,e,i))},"a98\
_rgb_into_hsl");var Ks=o(t=>{let[r,e,i]=$t(t).position;return p(u,w(r,e,i))},"dis\
play_p3_into_hsl");var rf=o(t=>{if(f(t)&&t.space.ident==="hwb"){let[r,e,i]=t.position,
[n,a,m]=St(e,r,i),[s,_,l]=w(n,a,m);return p(u,[s,_,l])}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_hsl");var lf=o(t=>{let[r,e,i]=Vt(t).position;return p(u,w(r,e,i))},"lab\
_into_hsl");var hf=o(t=>{let[r,e,i]=Kt(t).position;return p(u,w(r,e,i))},"lch\
_into_hsl");var wf=o(t=>{let[r,e,i]=qt(t).position;return p(u,w(r,e,i))},"okl\
ab_into_hsl");var Af=o(t=>{let[r,e,i]=Qt(t).position;return p(u,w(r,e,i))},"okl\
ch_into_hsl");var jf=o(t=>{let[r,e,i]=to(t).position;return p(u,w(r,e,i))},"pro\
photo_rgb_into_hsl");var Gf=o(t=>{let[r,e,i]=ro(t).position,[n,a,m]=w(r,e,i);return p(
u,[n,a,m])},"rec2020_into_hsl");var Qf=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.space.ident)){let[
r,e,i]=t.position,[n,a,m]=w(r,e,i);return p(u,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_hsl"),Uf=o(t=>{if(f(t)&&
t.space.ident==="srgb-linear"){let[r,e,i]=t.position.map(s=>q(s)),
[n,a,m]=w(r,e,i);return p(u,[n,a,m])}else throw new Error("Wrong \
parameter passed: "+t)},"srgb_linear_into_hsl");var px=o(t=>{let[r,e,i]=zt(t).position;return p(u,w(r,e,i))},"xyz\
_d50_into_hsl"),ax=o(t=>{let[r,e,i]=D(t).position;return p(u,w(r,
e,i))},"xyz_d65_into_hsl");var vx=o(t=>{let[r,e,i]=Ft(t).position;return p(z,k(r,e,i))},"a98\
_rgb_into_hwb");var Ox=o(t=>{let[r,e,i]=$t(t).position;return p(z,k(r,e,i))},"dis\
play_p3_into_hwb");var Lx=o(t=>{if(f(t)&&t.space.ident==="hsl"){let[r,e,i]=t.position,
[n,a,m]=rt(e,r,i);return p(z,k(n,a,m))}else throw new Error("Wron\
g parameter passed: "+t)},"hsl_into_hwb");var $x=o(t=>{let[r,e,i]=Vt(t).position;return p(z,k(r,e,i))},"lab\
_into_hwb");var td=o(t=>{let[r,e,i]=Kt(t).position;return p(z,k(r,e,i))},"lch\
_into_hwb");var ad=o(t=>{let[r,e,i]=qt(t).position;return p(z,k(r,e,i))},"okl\
ab_into_hwb");var dd=o(t=>{let[r,e,i]=Qt(t).position;return p(z,k(r,e,i))},"okl\
ch_into_hwb");var zd=o(t=>{let[r,e,i]=to(t).position;return p(z,k(r,e,i))},"pro\
photo_rgb_into_hwb");var Yd=o(t=>{let[r,e,i]=ro(t).position;return p(z,k(r,e,i))},"rec\
2020_into_hwb");var Td=o(t=>{if(f(t)&&["rgb","srgb"].includes(t.space.ident)){let[
r,e,i]=t.position;return p(z,k(r,e,i))}else throw new Error("Wron\
g parameter passed: "+t)},"srgb_into_hwb"),Xd=o(t=>{if(f(t)&&t.space.
ident==="srgb-linear"){let[r,e,i]=t.position.map(n=>q(n));return p(
z,k(r,e,i))}else throw new Error("Wrong parameter passed: "+t)},"\
srgb_linear_into_hwb");var Nd=o(t=>{let[r,e,i]=zt(t).position;return p(z,k(r,e,i))},"xyz\
_d50_into_hwb"),Hd=o(t=>{let[r,e,i]=D(t).position;return p(z,k(r,
e,i))},"xyz_d65_into_hwb");var po=o(t=>{if(f(t)&&t.space.ident==="xyz-d50"){let r=p(B,t.position.
toArray());return d(r).multiply(g.d50.d65),r}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_xyz_d65"),y=o(t=>{if(f(
t)&&t.space.ident==="xyz-d65"){let r=p(O,t.position.toArray());return d(
r).multiply(g.d65.d50),r}else throw new Error("Wrong parameter pa\
ssed: "+t)},"xyz_d65_into_xyz_d50");var Qo=o(t=>c(y(t)),"xyz_d65_into_lab"),c=o(t=>{if(f(t)&&t.space.
ident==="xyz-d50"){let r=.008856451679035631,e=29**3/3**3,[i,n,a]=t.
position.map((l,x)=>l/L[x]).map(l=>l>r?Math.cbrt(l):(e*l+16)/116),
m=116*n-16,s=500*(i-n),_=200*(n-a);return p(Pt,[m,s,_])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_lab");var uc=o(t=>{let r=G(t),e=y(r);return c(e)},"a98_rgb_into_lab");var vc=o(t=>{let r=H(t),e=y(r);return c(e)},"display_p3_into_lab");var Bc=o(t=>{let r=nt(t),e=y(r);return c(e)},"hsl_into_lab");var jc=o(t=>{let r=pt(t),e=y(r);return c(e)},"hwb_into_lab");var Hc=o(t=>{let r=S(t),e=y(r);return c(e)},"oklab_into_lab");var qc=o(t=>{let r=Q(t),e=S(r),i=y(e);return c(i)},"oklch_into_la\
b");var r0=o(t=>{let r=Lt(t);return c(r)},"prophoto_rgb_into_lab");var _0=o(t=>{let r=F(t),e=y(r);return c(e)},"rec2020_into_lab");var d0=o(t=>{let r=X(t),e=y(r);return c(e)},"srgb_into_lab"),c0=o(
t=>{let r=U(t),e=y(r);return c(e)},"srgb_linear_into_lab");var Y=o(t=>{if(f(t)&&t.space.ident==="lab"){let[r,e,i]=t,n=Math.atan2(
i,e)*(180/Math.PI),a=Math.hypot(e,i);return p(Tt,[r,a,n])}else throw new Error(
"Wrong parameter passed: "+t)},"lab_into_lch");var j0=o(t=>{let r=G(t),e=y(r),i=c(e);return Y(i)},"a98_rgb_into_\
lch");var G0=o(t=>{let r=H(t),e=y(r),i=c(e);return Y(i)},"display_p3_in\
to_lch");var Q0=o(t=>{let r=nt(t),e=y(r),i=c(e);return Y(i)},"hsl_into_lch");var nb=o(t=>{let r=pt(t),e=y(r),i=c(e);return Y(i)},"hwb_into_lch");var fb=o(t=>{let r=S(t),e=y(r),i=c(e);return Y(i)},"oklab_into_lc\
h");var ub=o(t=>{let r=Q(t),e=S(r),i=y(e),n=c(i);return Y(n)},"oklch_\
into_lch");var vb=o(t=>{let r=Lt(t),e=c(r);return Y(e)},"prophoto_rgb_into_l\
ch");var Ob=o(t=>{let r=F(t),e=y(r),i=c(e);return Y(i)},"rec2020_into_\
lch");var Lb=o(t=>{let r=X(t),e=y(r),i=c(e);return Y(i)},"srgb_into_lch"),
Eb=o(t=>{let r=U(t),e=y(r),i=c(e);return Y(i)},"srgb_linear_into_\
lch");var Fb=o(t=>Y(c(t)),"xyz_d50_into_lch"),$b=o(t=>Y(Qo(t)),"xyz_d65\
_into_lch");var C=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){let[r,e]=tr(),[i,
n,a]=t.position,[m,s,_]=d(i,n,a).multiply(r).each((l,x,I)=>I[x]=Math.
cbrt(l)).multiply(e);return p(yt,[m*100,s,_])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_oklab"),Uo=o(t=>{if(f(
t)&&t.space.ident==="xyz-d50"){let[r,e]=tr(),[i,n,a]=t.position,[
m,s,_]=d(i,n,a).multiply(g.d50.d65).multiply(r).each((l,x,I)=>I[x]=
Math.cbrt(l)).multiply(e);return p(yt,[m*100,s,_])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_oklab");function tr(){return[Float64Array.of(.819022437996703,.0329836539323885,
.0481771893596242,.3619062600528904,.9292868615863434,.2642395317527308,
-.1288737815209879,.0361446663506424,.6335478284694309),Float64Array.
of(.210454268309314,1.9779985324311684,.0259040424655478,.7936177747023054,
-2.42859224204858,.7827717124575296,-.0040720430116193,.450593709617411,
-.8086757549230774)]}o(tr,"useTransitionMatrices");var bh=o(t=>C(G(t)),"a98_rgb_into_oklab");var zh=o(t=>C(H(t)),"display_p3_into_oklab");var vh=o(t=>{let r=nt(t);return C(r)},"hsl_into_oklab");var Ah=o(t=>C(pt(t)),"hwb_into_oklab");var ao=o(t=>{let r=M(t),e=po(r);return C(e)},"lab_into_oklab");var Nh=o(t=>{let r=N(t),e=M(r),i=po(e);return C(i)},"lch_into_okl\
ab");var Vh=o(t=>C(et(t)),"prophoto_rgb_into_oklab");var Uh=o(t=>C(F(t)),"rec2020_into_oklab");var iy=o(t=>{let r=X(t);return C(r)},"srgb_into_oklab"),ny=o(t=>{
let r=U(t);return C(r)},"srgb_linear_into_oklab");var $=o(t=>{let[r,e,i]=C(t),n=Math.hypot(e,i),a=n<.001?NaN:Math.atan2(
i,e)*180/Math.PI;return p(gt,[r,n,a])},"xyz_d65_into_oklch"),Py=o(
t=>{let[r,e,i]=Uo(t),n=Math.hypot(e,i),a=n<.001?NaN:Math.atan2(i,
e)*180/Math.PI;return p(gt,[r,n,a])},"xyz_d50_into_oklch");var Yy=o(t=>{let r=G(t);return $(r)},"a98_rgb_into_oklch");var Oy=o(t=>{let r=H(t);return $(r)},"display_p3_into_oklch");var jy=o(t=>{let r=nt(t);return $(r)},"hsl_into_oklch");var Ny=o(t=>{let r=pt(t);return $(r)},"hwb_into_oklch");var _o=o(t=>{if(f(t)&&t.space.ident==="oklab"){let[r,e,i]=t,n=Math.
hypot(e,i),a=n<.001?NaN:Math.atan2(i,e)*180/Math.PI;return p(gt,[
r,n,a])}else throw new Error("Wrong parameter passed: "+t)},"okla\
b_into_oklch");var Qy=o(t=>_o(ao(t)),"lab_into_oklch");var i5=o(t=>{let r=N(t),e=ao(r);return _o(e)},"lch_into_oklch");var m5=o(t=>{let r=et(t);return $(r)},"prophoto_rgb_into_oklch");var d5=o(t=>{let r=F(t);return $(r)},"rec2020_into_oklch");var g5=o(t=>{let r=X(t);return $(r)},"srgb_into_oklch"),u5=o(t=>{
let r=U(t);return $(r)},"srgb_linear_into_oklch");var or=Float64Array.of(1.3457868816471583,-.5446307051249019,0,-.25557208737979464,
1.5082477428451468,0,-.05110186497554526,.02052744743642139,1.2119675456389452),
L5=o(t=>{if(f(t)&&t.space.ident==="xyz-d65"){let[r,e,i]=t.position,
[n,a,m]=d(r,e,i).multiply(g.d65.d50).multiply(or).each((s,_,l)=>l[_]=
Rt(s));return p(It,[n,a,m])}else throw new Error("Wrong parameter\
 passed: "+t)},"xyz_d65_into_prophoto_rgb"),A=o(t=>{if(f(t)&&t.space.
ident==="xyz-d50"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(
or).each((s,_,l)=>l[_]=Rt(s));return p(It,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_prophoto_rgb");var G5=o(t=>A(Eo(t)),"a98_rgb_into_prophoto_rgb");var J5=o(t=>A(jo(t)),"display_p3_into_prophoto_rgb");var rr=o(t=>M(N(t)),"lch_into_xyz_d50"),og=o(t=>Ot(N(t)),"lch_int\
o_xyz_d65");var gg=o(t=>A(Jo(t)),"hsl_into_prophoto_rgb");var wg=o(t=>A(qo(t)),"hwb_into_prophoto_rgb");var Ig=o(t=>A(M(t)),"lab_into_prophoto_rgb");var Wg=o(t=>A(rr(t)),"lch_into_prophoto_rgb");var Rg=o(t=>A(Jt(t)),"oklab_into_prophoto_rgb");var Hg=o(t=>A($o(t)),"oklch_into_prophoto_rgb");var Kg=o(t=>A(Go(t)),"rec2020_into_prophoto_rgb");var tu=o(t=>A(Wt(t)),"srgb_into_prophoto_rgb"),ou=o(t=>A(Fo(t)),"\
srgb_linear_into_prophoto_rgb");var nu=o(t=>t.position.map(Rt),"gam_prophoto"),pu=o(t=>t.position.
map(Ut),"lin_prophoto");var er=Float64Array.of(30757411/17917100,-19765991/29648200,792561/
44930125,-6372589/17917100,47925759/29648200,-1921689/44930125,-4539589/
17917100,467509/29648200,42328811/44930125),R=o(t=>{if(f(t)&&t.space.
ident==="xyz-d65"){let[r,e,i]=t.position,[n,a,m]=d(r,e,i).multiply(
er).each((s,_,l)=>l[_]=Dt(s));return p(Bt,[n,a,m])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_rec2020"),mo=o(t=>{if(f(
t)&&t.space.ident==="xyz-d50"){let[r,e,i]=t.position,[n,a,m]=d(r,
e,i).multiply(g.d50.d65).multiply(er).each((s,_,l)=>l[_]=Dt(s));return p(
Bt,[n,a,m])}else throw new Error("Wrong parameter passed: "+t)},"\
xyz_d50_into_rec2020");var Iu=o(t=>R(G(t)),"a98_rgb_into_rec2020");var Wu=o(t=>R(H(t)),"display_p3_into_rec2020");var Ru=o(t=>R(nt(t)),"hsl_into_rec2020");var Hu=o(t=>R(pt(t)),"hwb_into_rec2020");var Ku=o(t=>mo(M(t)),"lab_into_rec2020");var oz=o(t=>mo(M(N(t))),"lch_into_rec2020");var pz=o(t=>R(S(t)),"oklab_into_rec2020");var fz=o(t=>R(S(Q(t))),"oklch_into_rec2020");var hz=o(t=>R(et(t)),"prophoto_rgb_into_rec2020");var Sz=o(t=>R(X(t)),"srgb_into_rec2020"),Pz=o(t=>R(U(t)),"srgb_li\
near_into_rec2020");var Mz=o(t=>t.position.map(Dt),"gam_rec2020"),Yz=o(t=>t.position.
map(Et),"lin_rec2020");export{ut as A98RGBSpace,At as DisplayP3Space,u as HSLSpace,z as HWBSpace,
Pt as LABSpace,Tt as LCHSpace,It as ProPhotoRGBSpace,Xt as RGBModel,
Bt as Rec2020Space,On as SpaceDict,O as XYZD50Space,B as XYZD65Space,
sl as a98_rgb_into_display_p3,Ds as a98_rgb_into_hsl,vx as a98_rgb_into_hwb,
uc as a98_rgb_into_lab,j0 as a98_rgb_into_lch,bh as a98_rgb_into_oklab,
Yy as a98_rgb_into_oklch,G5 as a98_rgb_into_prophoto_rgb,Iu as a98_rgb_into_rec2020,
Ft as a98_rgb_into_rgb,Ft as a98_rgb_into_srgb,Mp as a98_rgb_into_srgb_linear,
G as a98_rgb_into_xyz,Eo as a98_rgb_into_xyz_d50,G as a98_rgb_into_xyz_d65,
_p as display_p3_into_a98_rgb,Ks as display_p3_into_hsl,Ox as display_p3_into_hwb,
vc as display_p3_into_lab,G0 as display_p3_into_lch,zh as display_p3_into_oklab,
Oy as display_p3_into_oklch,J5 as display_p3_into_prophoto_rgb,Wu as display_p3_into_rec2020,
$t as display_p3_into_rgb,$t as display_p3_into_srgb,Bp as display_p3_into_srgb_linear,
H as display_p3_into_xyz,jo as display_p3_into_xyz_d50,H as display_p3_into_xyz_d65,
Em as gam_a98,zs as gam_p3,nu as gam_prophoto,Mz as gam_rec2020,u_ as gam_srgb,
K_ as hsl_into_a98_rgb,Sl as hsl_into_display_p3,Lx as hsl_into_hwb,
Bc as hsl_into_lab,Q0 as hsl_into_lch,vh as hsl_into_oklab,jy as hsl_into_oklch,
gg as hsl_into_prophoto_rgb,Ru as hsl_into_rec2020,Ep as hsl_into_rgb,
Do as hsl_into_srgb,Dp as hsl_into_srgb_linear,nt as hsl_into_xyz,
Jo as hsl_into_xyz_d50,nt as hsl_into_xyz_d65,rm as hwb_into_a98_rgb,
Ol as hwb_into_display_p3,rf as hwb_into_hsl,jc as hwb_into_lab,nb as hwb_into_lch,
Ah as hwb_into_oklab,Ny as hwb_into_oklch,wg as hwb_into_prophoto_rgb,
Hu as hwb_into_rec2020,Qp as hwb_into_rgb,Qp as hwb_into_srgb,Up as hwb_into_srgb_linear,
pt as hwb_into_xyz,qo as hwb_into_xyz_d50,pt as hwb_into_xyz_d65,
p as initPointInSpace,f as isPointInSpace,am as lab_into_a98_rgb,
jl as lab_into_display_p3,lf as lab_into_hsl,$x as lab_into_hwb,Y as lab_into_lch,
ao as lab_into_oklab,Qy as lab_into_oklch,Ig as lab_into_prophoto_rgb,
Ku as lab_into_rec2020,Vt as lab_into_rgb,Vt as lab_into_srgb,sa as lab_into_srgb_linear,
Ot as lab_into_xyz,M as lab_into_xyz_d50,Ot as lab_into_xyz_d65,xm as lch_into_a98_rgb,
Hl as lch_into_display_p3,hf as lch_into_hsl,td as lch_into_hwb,N as lch_into_lab,
Nh as lch_into_oklab,i5 as lch_into_oklch,Wg as lch_into_prophoto_rgb,
oz as lch_into_rec2020,Kt as lch_into_rgb,Kt as lch_into_srgb,za as lch_into_srgb_linear,
og as lch_into_xyz,rr as lch_into_xyz_d50,og as lch_into_xyz_d65,
Dm as lin_a98,Ss as lin_p3,pu as lin_prophoto,Yz as lin_rec2020,z_ as lin_srgb,
yt as okLABSpace,gt as okLCHSpace,ym as oklab_into_a98_rgb,Kl as oklab_into_display_p3,
wf as oklab_into_hsl,ad as oklab_into_hwb,Hc as oklab_into_lab,fb as oklab_into_lch,
_o as oklab_into_oklch,Rg as oklab_into_prophoto_rgb,pz as oklab_into_rec2020,
qt as oklab_into_rgb,qt as oklab_into_srgb,Ba as oklab_into_srgb_linear,
S as oklab_into_xyz,Jt as oklab_into_xyz_d50,S as oklab_into_xyz_d65,
Mm as oklch_into_a98_rgb,os as oklch_into_display_p3,Af as oklch_into_hsl,
dd as oklch_into_hwb,qc as oklch_into_lab,ub as oklch_into_lch,Q as oklch_into_oklab,
Hg as oklch_into_prophoto_rgb,fz as oklch_into_rec2020,Qt as oklch_into_rgb,
Qt as oklch_into_srgb,Da as oklch_into_srgb_linear,Vo as oklch_into_xyz,
$o as oklch_into_xyz_d50,Vo as oklch_into_xyz_d65,Bm as prophoto_rgb_into_a98_rgb,
ps as prophoto_rgb_into_display_p3,jf as prophoto_rgb_into_hsl,zd as prophoto_rgb_into_hwb,
r0 as prophoto_rgb_into_lab,vb as prophoto_rgb_into_lch,Vh as prophoto_rgb_into_oklab,
m5 as prophoto_rgb_into_oklch,hz as prophoto_rgb_into_rec2020,to as prophoto_rgb_into_rgb,
to as prophoto_rgb_into_srgb,r_ as prophoto_rgb_into_srgb_linear,
et as prophoto_rgb_into_xyz,Lt as prophoto_rgb_into_xyz_d50,et as prophoto_rgb_into_xyz_d65,
Zm as rec2020_into_a98_rgb,ss as rec2020_into_display_p3,Gf as rec2020_into_hsl,
Yd as rec2020_into_hwb,_0 as rec2020_into_lab,Ob as rec2020_into_lch,
Uh as rec2020_into_oklab,d5 as rec2020_into_oklch,Kg as rec2020_into_prophoto_rgb,
ro as rec2020_into_rgb,ro as rec2020_into_srgb,b_ as rec2020_into_srgb_linear,
F as rec2020_into_xyz,Go as rec2020_into_xyz_d50,F as rec2020_into_xyz_d65,
io as rgb_into_a98_rgb,bs as rgb_into_display_p3,Qf as rgb_into_hsl,
Td as rgb_into_hwb,d0 as rgb_into_lab,Lb as rgb_into_lch,iy as rgb_into_oklab,
g5 as rgb_into_oklch,tu as rgb_into_prophoto_rgb,Sz as rgb_into_rec2020,
X as rgb_into_xyz,Wt as rgb_into_xyz_d50,X as rgb_into_xyz_d65,Ir as rgb_to_hex,
uo as rgb_to_hue,st as sRGBLinearSpace,W as sRGBSpace,io as srgb_into_a98_rgb,
bs as srgb_into_display_p3,Qf as srgb_into_hsl,Td as srgb_into_hwb,
d0 as srgb_into_lab,Lb as srgb_into_lch,iy as srgb_into_oklab,g5 as srgb_into_oklch,
tu as srgb_into_prophoto_rgb,Sz as srgb_into_rec2020,X as srgb_into_xyz,
Wt as srgb_into_xyz_d50,X as srgb_into_xyz_d65,H_ as srgb_linear_into_a98_rgb,
hs as srgb_linear_into_display_p3,Uf as srgb_linear_into_hsl,Xd as srgb_linear_into_hwb,
c0 as srgb_linear_into_lab,Eb as srgb_linear_into_lch,ny as srgb_linear_into_oklab,
u5 as srgb_linear_into_oklch,ou as srgb_linear_into_prophoto_rgb,
Pz as srgb_linear_into_rec2020,U as srgb_linear_into_xyz,Fo as srgb_linear_into_xyz_d50,
U as srgb_linear_into_xyz_d65,ep as xyz_d50_into_a98_rgb,no as xyz_d50_into_display_p3,
px as xyz_d50_into_hsl,Nd as xyz_d50_into_hwb,c as xyz_d50_into_lab,
Fb as xyz_d50_into_lch,Uo as xyz_d50_into_oklab,Py as xyz_d50_into_oklch,
A as xyz_d50_into_prophoto_rgb,mo as xyz_d50_into_rec2020,zt as xyz_d50_into_rgb,
zt as xyz_d50_into_srgb,Gt as xyz_d50_into_srgb_linear,po as xyz_d50_into_xyz_d65,
Z as xyz_d65_into_a98_rgb,j as xyz_d65_into_display_p3,ax as xyz_d65_into_hsl,
Hd as xyz_d65_into_hwb,Qo as xyz_d65_into_lab,$b as xyz_d65_into_lch,
C as xyz_d65_into_oklab,$ as xyz_d65_into_oklch,L5 as xyz_d65_into_prophoto_rgb,
R as xyz_d65_into_rec2020,D as xyz_d65_into_rgb,D as xyz_d65_into_srgb,
it as xyz_d65_into_srgb_linear,y as xyz_d65_into_xyz_d50,Z as xyz_into_a98_rgb,
j as xyz_into_display_p3,ax as xyz_into_hsl,Hd as xyz_into_hwb,Qo as xyz_into_lab,
$b as xyz_into_lch,C as xyz_into_oklab,$ as xyz_into_oklch,L5 as xyz_into_prophoto_rgb,
R as xyz_into_rec2020,D as xyz_into_rgb,D as xyz_into_srgb,it as xyz_into_srgb_linear};
