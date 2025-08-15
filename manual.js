var ue=Object.defineProperty;var t=(e,o)=>ue(e,"name",{value:o,configurable:!0});var fe=Object.defineProperty,A=t((e,o)=>fe(e,"name",{value:o,
configurable:!0}),"n"),de=A(e=>e!==null&&typeof e=="object"&&
Array.isArray(e)===!1,"isObject"),he=A(e=>de(e)&&"ident"in e&&
"short"in e&&"domain"in e,"isSpaceDimension");function s(e,o,r){
let a=Iterator.from(r===void 0?[e,o]:[e,o,r]),n=r===void 0?2:
3;for(let u of a.take(n))if(he(u)===!1)throw new TypeError("\
Passed wrong space dimension: "+JSON.stringify(u,void 0,2));
let c=a.take(n).filter(u=>u.tgeom==="azimuth"||u.tgeom==="re\
ference-ray").toArray().length===2?n===3?"cilinder":"circle":
n===3?"cube":"plane",p=Object.create(null,{0:{enumerable:!0,
value:e},1:{enumerable:!0,value:o},length:{enumerable:!0,value:n},
tgeom:{enumerable:!0,value:c},entries:{value:A(function*(){yield[
0,this[0]],yield[1,this[1]],this.length===3&&(yield[2,this[2]])},
"value")},toArray:{value:A(function(){return Array.of(...this)},
"value")},[Symbol.iterator]:{value:A(function*(){yield this[0],
yield this[1],this.length===3&&(yield this[2])},"value")}});
return n===3&&Object.defineProperty(p,2,{enumerable:!0,value:r}),
u=>u===void 0?p:Object.defineProperties(p,u)}t(s,"O");A(s,"c\
reateCoordinateSystem");var be=Object.defineProperty,v=t((e,o)=>be(e,"name",{value:o,
configurable:!0}),"n"),Z=v(e=>typeof e=="number","isNumber"),
Se=v(e=>e!==null&&typeof e=="object"&&Array.isArray(e)===!1,
"isObject"),W=v(e=>Se(e)&&Symbol.iterator in e&&"minimum"in e&&
Z(e.minimum)&&"maximum"in e&&Z(e.maximum)&&"value"in e&&Z(e.
value)&&e.value>0,"isRange");function i(...e){let o=e.length===
1?Array.of(0,e[0]):Array.of(Math.min(...e),Math.max(...e)),[
r,a]=o,n=a-r,c=r+n/2;return Object.create(null,{from:{value:r},
to:{value:a},minimum:{enumerable:!0,value:r},maximum:{enumerable:!0,
value:a},avg:{enumerable:!0,value:c},value:{enumerable:!0,value:n},
allot:{value:se},clamp:{value:me},test:{value:v(p=>r<=p&&p<=
a,"value")},toString:{value:v(()=>String.raw`{x ∈ R; ${r} ⋜ x ⋜ ${a}}`,
"value")},[Symbol.iterator]:{value:v(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}t(i,"v");v(
i,"createRange");function se(e){return this.test(e)?e:e>this.
from?(e-this.to)%this.value+this.from:this.to-(this.from-e)%
this.value}t(se,"p");v(se,"allocateOuterValue");function me(e){
return this.test(e)?e:Math.max(Math.min(e,this.to),this.from)}
t(me,"h");v(me,"restrictOuterValue");var D=Object.freeze([0,360]),$=Object.freeze([-Math.PI,Math.
PI]),f=Object.freeze([0,100]),Le=Object.freeze([-125,125]),j=Object.
freeze([0,255]),ze=Object.freeze([0,65535]),N=Object.freeze(
[0,1]),H=Object.freeze([-1,1]);var ge=Object.defineProperty,P=t((e,o)=>ge(e,"name",{value:o,
configurable:!0}),"r");function q(...e){let o=e.length===1?Array.
of(0,e[0]):Array.of(Math.min(...e),Math.max(...e)),[r,a]=o,n=a-
r,c=r+n/2;return Object.create(null,{from:{value:r},to:{value:a},
minimum:{enumerable:!0,value:r},maximum:{enumerable:!0,value:a},
avg:{enumerable:!0,value:c},value:{enumerable:!0,value:n},allot:{
value:le},clamp:{value:ce},test:{value:P(p=>r<=p&&p<=a,"valu\
e")},toString:{value:P(()=>String.raw`{x ∈ R; ${r} ⋜ x ⋜ ${a}}`,
"value")},[Symbol.iterator]:{value:P(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}t(q,"l");P(
q,"createRange");function le(e){return this.test(e)?e:e>this.
from?(e-this.to)%this.value+this.from:this.to-(this.from-e)%
this.value}t(le,"f");P(le,"allocateOuterValue");function ce(e){
return this.test(e)?e:Math.max(Math.min(e,this.to),this.from)}
t(ce,"S");P(ce,"restrictOuterValue");function V(e=[0,100],o=[
0,1]){let[r,a]=o,[n,c]=e,[p,u]=[a-r,c-n];function I(l){return typeof l==
"string"&&(l=parseFloat(l)),F.domain.test(l)===!1&&(l=l>a?(l-
a)%p+r:a-(r-l)%p),u*(l-r)/p+n}t(I,"p"),P(I,"invert");function F(l){
return typeof l=="string"&&(l=parseFloat(l)),F.range.test(l)===
!1&&(l=l>c?(l-c)%u+n:c-(n-l)%u),p*(l-n)/u+r}return t(F,"c"),
P(F,"calculator"),Object.defineProperties(F,{domain:{enumerable:!0,
value:q(r,a)},range:{enumerable:!0,value:q(n,c)},invert:{enumerable:!0,
value:I}})}t(V,"A");P(V,"initScale");var J=V(D,$),L=Object.freeze({bytes:8,domain:J.domain,ident:"\
angle",input:t(e=>J.domain.allot((typeof e=="string"?parseFloat(
e):e)*Math.PI/180),"input"),output:t(e=>J.range.allot(e*180/
Math.PI),"output"),short:"phi",tcoord:"polar",tgeom:"azimuth"});var x=Object.freeze({$coord:L,bytes:4,description:"Hue angle\
 is a numerical representation of a color's hue, typically m\
easured as an angle in a color space.",domain:i(...D),ident:"\
hue",input:t(e=>{let[o,r]=Ce(e),a=r==="grad"?180/200:r==="ra\
d"?180/Math.PI:r==="turn"?360:1;return x.domain.allot(o*a)},
"input"),output:t(e=>Number.isNaN(e)?Number.NaN:Math.abs(e)<
.01?0:parseFloat(e.toPrecision(5)),"output"),short:"h"});function Ce(e){let o=NaN,r="deg";if(typeof e=="number")o=e;else{
let p=String.raw`deg|grad|rad|turn`,u=new RegExp(`^(-?[d.]+)\
(${p})?$`,"i");if(u.test(e)){let I=u.exec(e)?.slice(1)??["0",
"deg"];o=parseFloat(I[0]),r=I[1]}else if(e==="none")o=NaN;else
throw new TypeError("Expected a valid <angle> string")}let[a,
n]=r==="grad"?[0,400]:r==="deg"?D:r==="rad"?$:N,c=i(a,n);return c.
test(o)===!1&&(o=c.allot(o)),[o,r]}t(Ce,"parseCSSAngle");var m=t((e,o)=>{if(e==="none"||!e)return 0;let r=typeof e=="\
string"?parseFloat(e):e;return typeof e=="string"&&e.charAt(
-1)==="%"&&(r/=100,W(o)&&(o.from===0&&o.to===255?r=Math.round(
r*o.to):r*=Math.sign(r)<0?o.from:o.to)),W(o)&&o.test(r)===!1&&
(r=o.clamp(r)),r},"parseCSSParameter");var h=Object.freeze({bytes:8,domain:i(...N),ident:"applicate",
short:"z",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var b=Object.freeze({$coord:h,bytes:4,description:"Lightness\
 is a visual perception of the luminance of an object. In so\
me color ordering systems Lightness is referenced as value.",
domain:i(...f),ident:"lightness",input:t(e=>m(e,b.domain)/100,
"input"),output:t(e=>e*100,"output"),short:"L"});var S=Object.freeze({bytes:8,domain:i(...N),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var Q=Object.freeze({$coord:S,bytes:4,description:"Chroma: t\
he quality of a color's purity, intensity or saturation.",domain:i(
...f),ident:"saturation",input:t(e=>m(e,Q.domain),"input"),short:"\
S"});var dt=s(S,L)({adapt:{enumerable:!0,value:ee}});function ee(e=0,o=NaN){let r=e*Math.cos(o),a=e*Math.sin(o);return[
r,a]}t(ee,"calcCartesianCoordinates");var E=s(S,L,h)({adapt:{value:ye}});function ye(e){let[o,r,a]=e,[n,c]=ee(o,r);return[n,c,a]}t(ye,
"calcCubeCoordinates");var g=Float64Array.of(.9504559270516716,1,1.0890577507598784);
Object.freeze(g.buffer);var zt={CAM:s(x,Q,b)(),CSYS:E,ident:"hsl",whitepoint:g};var te=Object.freeze({$coord:h,bytes:8,description:"Blacknes\
s is the property or quality of being black in colour.",domain:i(
...f),ident:"blackness",input:t(e=>m(e,te.domain),"input"),short:"\
B"});var oe=Object.freeze({$coord:S,bytes:4,description:"Whitenes\
s is determined by how much light a surface reflects across \
the visible spectrum.",domain:i(...f),ident:"whiteness",input:t(
e=>m(e,oe.domain),"input"),short:"W"});var Vt={description:"HWB (Hue, Whiteness, Blackness) is a cy\
lindrical-coordinate representation of points in an RGB colo\
r model, similar to HSL and HSV.",CAM:s(x,oe,te)(),CSYS:E,ident:"\
hwb",whitepoint:g};var ve=Object.defineProperty,Pe=t((e,o)=>ve(e,"name",{value:o,
configurable:!0}),"n");var xe=Pe((e,o=6)=>{let r=10**o;return Math.sign(e)*Math.round(
(Math.abs(e)+Number.EPSILON)*r)/r},"round"),d=xe;var O=Object.freeze({bytes:8,domain:i(...H),ident:"abscissa",
short:"x",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var k=Object.freeze({$coord:O,bytes:2,description:"Component\
 defines how green (moving towards -125) or red (moving towa\
rds +125) the color is.",domain:i(-125,125),ident:"green-red",
input:t(e=>m(e,k.domain)/125,"input"),output:t(e=>d(e*125,2),
"output"),short:"a"}),re=Object.freeze({...k,bytes:8,domain:i(
-.4,.4),input:t(e=>m(e,re.domain)/.4,"input"),output:t(e=>d(
e*.4,5),"output")});var R=Object.freeze({bytes:8,domain:i(...H),ident:"ordinate",
short:"y",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var K=Object.freeze({$coord:R,bytes:2,description:"Component\
 defines how blue (moving towards -125) or yellow (moving to\
wards +125) the color is.",domain:i(-125,125),ident:"blue-ye\
llow",input:t(e=>m(e,K.domain)/125,"input"),output:t(e=>parseFloat(
(e*125).toPrecision(5)),"output"),short:"b"}),ie=Object.freeze(
{...K,bytes:8,domain:i(-.4,.4),input:t(e=>m(e,ie.domain)/.4,
"input"),output:t(e=>d(e*.4,5),"output")});var xo=s(O,R)({adapt:{value:ae}});function ae(e,o){let r=0,a=NaN;return(e!==0||o!==0)&&(r=Math.
sqrt(e**2+o**2),e!==0&&!o||o!==0&&!e?a=o/Math.abs(o)*(Math.PI/
2):a=Math.atan(o/e)),[r,a]}t(ae,"calcPolarCoordinates");var y=s(O,R,h)({adapt:{value:Oe}});function Oe(e){let[o,r,a]=e,[n,c]=ae(o,r);return[n,c,a]}t(Oe,
"calcCylindricalCoordinates");var C=Float64Array.of(.9642956764295677,1,.8251046025104602);
Object.freeze(C.buffer);var _o=Object.freeze({CAM:s(b,k,K)(),CSYS:y,description:"CIE\
 1976 L*a*b* or CIELAB. Cylindrical with the lightness value\
 as the vertical axis of rotation.",ident:"lab",whitepoint:C});var X=Object.freeze({$coord:S,ident:"chroma",short:"C",domain:i(
0,150),input:t(e=>e==="none"||!e?0:typeof e=="string"&&e.charAt(
-1)==="%"?parseFloat(e)/100:(typeof e=="string"?parseFloat(e):
e)/X.domain.maximum,"input"),output:t(e=>parseFloat((e*X.domain.
maximum).toPrecision(5)),"output"),bytes:2,description:"Chro\
ma: the quality of a color's purity, intensity or saturation\
."}),ne=Object.freeze({$coord:S,ident:"chroma",short:"c",domain:i(
0,.4),input:t(e=>e==="none"||!e?0:typeof e=="string"&&e.charAt(
-1)==="%"?ne.domain.maximum*parseFloat(e)/100:typeof e=="str\
ing"?parseFloat(e):e,"input"),output:t(e=>e,"output"),bytes:4,
description:"Chroma: the quality of a color's purity, intens\
ity or saturation."});var Jo={CAM:s(b,X,x)(),CSYS:E,description:"CIE-based LCh col\
or spaces are transformations of the two chroma values (ab o\
r uv) into the polar coordinate.",ident:"lch",whitepoint:C};var nr=Object.freeze({CAM:s(b,re,ie)(),CSYS:y,ident:"oklab",
whitepoint:C});var dr={CAM:s(b,ne,x)(),CSYS:E,ident:"oklch",whitepoint:C};var w=Object.freeze({$coord:h,bytes:4,domain:i(...f),ident:"\
blue",input:t(e=>m(e,w.domain)/100,"input"),output:t(e=>w.domain.
clamp(d(e*w.domain.maximum,2)),"output"),short:"b",description:"\
Blue Light Intensity"}),Y=Object.freeze({$coord:h,bytes:1,domain:i(
...j),ident:"blue",input:t(e=>m(e,Y.domain)/255,"input"),output:t(
e=>Y.domain.clamp(d(e*Y.domain.maximum,2)),"output"),short:"\
B",description:"Blue Light Intensity"});var M=Object.freeze({$coord:R,bytes:4,domain:i(...f),ident:"\
green",input:t(e=>m(e,M.domain)/100,"input"),output:t(e=>M.domain.
clamp(d(e*M.domain.maximum,2)),"output"),short:"g",description:"\
Green Light Intensity"}),B=Object.freeze({$coord:R,bytes:1,domain:i(
...j),ident:"green",input:t(e=>m(e,B.domain)/255,"input"),output:t(
e=>B.domain.clamp(d(e*B.domain.maximum,2)),"output"),short:"\
G",description:"Green Light Intensity"});var _=Object.freeze({$coord:O,bytes:4,domain:i(...f),ident:"\
green",input:t(e=>m(e,_.domain)/100,"input"),output:t(e=>_.domain.
clamp(d(e*_.domain.maximum,2)),"output"),short:"r",description:"\
Red Light Intensity"}),G=Object.freeze({$coord:O,bytes:1,domain:i(
...j),ident:"red",input:t(e=>m(e,G.domain)/255,"input"),output:t(
e=>G.domain.clamp(d(e*G.domain.maximum,2)),"output"),short:"\
R",description:"Red Light Intensity"});var $r=Object.freeze({CAM:s(G,B,Y)(),CSYS:y,ident:"rgb",whitepoint:g});var z=s(_,M,w)(),T=y,U=g,Vr=Object.freeze({ident:"srgb",CAM:z,
CSYS:T,whitepoint:U,copyright:"Copyright 2007 International \
Color Consortium",description:"sRGB v4 ICC preference percep\
tual intent beta"}),Jr=Object.freeze({ident:"srgb-linear",CAM:z,
CSYS:T,whitepoint:U}),Qr=Object.freeze({ident:"a98-rgb",CAM:z,
CSYS:T,whitepoint:U,description:"Adobe\xAE 1998 RGB"}),ei=Object.
freeze({ident:"display-p3",CAM:z,CSYS:T,whitepoint:U,copyright:"\
Copyright Apple Inc., 2022",description:"Display P3"}),ti=Object.
freeze({ident:"prophoto-rgb",CAM:z,CSYS:T,whitepoint:U,description:"\
ProPhoto RGB"}),oi=Object.freeze({ident:"rec2020",CAM:z,CSYS:T,
whitepoint:U,description:"Rec. 2020 or BT.2020"});var pe=y,si=Object.freeze({ident:"xyz-d65",alias:"xyz",description:"\
XYZ D65 or simply XYZ",CSYS:pe,whitepoint:g}),mi=Object.freeze(
{ident:"xyz-d50",CSYS:pe,whitepoint:C});export{Qr as A98RGBSpace,ei as DisplayP3Space,zt as HSL,Vt as HWB,
_o as LABModel,Jo as LCh,nr as OKLAB,dr as OKLCh,ti as ProphotoRGBSpace,
$r as RGBModel,oi as Rec2020Space,mi as XYZD50,mi as XYZD50Space,
si as XYZD65,si as XYZD65Space,Jr as sRGBLinearSpace,Vr as sRGBSpace};
